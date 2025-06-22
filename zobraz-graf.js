document.addEventListener('DOMContentLoaded', () => {
    console.log('--- Event Echo Graph View Initializing ---');
    let db;
    let chart = null;
    let historyData = [];

    if (!config || !config.firebaseConfig || !config.projectId) {
        console.error("Critical Error: config.js is missing or incomplete. App cannot start.");
        return;
    }

    try {
        if (config.firebaseConfig.apiKey !== "VASE_API_KEY_VLOZTE_SEM") {
            firebase.initializeApp(config.firebaseConfig);
            db = firebase.firestore();
            console.log("Graph View: Firebase initialized successfully.");
        } else {
            console.warn("Graph View: Firebase is not configured.");
        }
    } catch (e) {
        console.error("Graph View: Firebase initialization failed.", e);
    }

    const projectStatsDocRef = db ? db.collection("moodStats").doc(config.projectId) : null;
    let currentTranslations = {};
    
    // Ikony pro jednotlivé možnosti (stejné jako v hlavní aplikaci)
    const iconSets = {
        mood: ['😢', '😟', '😐', '😊', '😄'],
        understanding: ['❌', '❓', '✓', '✓✓', '✓✓✓'],
        preference: ['⭐', '⭐⭐', '⭐⭐⭐', '⭐⭐⭐⭐', '⭐⭐⭐⭐⭐'],
        agreement: ['👎👎', '👎', '🤷', '👍', '👍👍']
    };
    
    // Barvy pro graf (odpovídají barvám ikon v hlavní aplikaci)
    const chartColors = [
        'rgba(244, 67, 54, 0.8)',   // Červená
        'rgba(255, 152, 0, 0.8)',   // Oranžová
        'rgba(158, 158, 158, 0.8)', // Šedá
        'rgba(76, 175, 80, 0.8)',   // Zelená
        'rgba(33, 150, 243, 0.8)'   // Modrá
    ];
    
    const chartBackgroundColors = [
        'rgba(244, 67, 54, 0.1)',
        'rgba(255, 152, 0, 0.1)',
        'rgba(158, 158, 158, 0.1)',
        'rgba(76, 175, 80, 0.1)',
        'rgba(33, 150, 243, 0.1)'
    ];

    const applyTranslations = (lang) => {
        const baseTranslations = config.translations[lang] || config.translations.en;
        const activeSetTranslations = baseTranslations.questionSets[config.activeQuestionSet] || baseTranslations.questionSets.mood;
        currentTranslations = {...baseTranslations, ...activeSetTranslations};
        
        document.querySelectorAll('[data-config-key]').forEach(el => {
            const key = el.dataset.configKey;
            if (currentTranslations[key]) {
                if (el.tagName === 'TITLE') {
                    el.textContent = currentTranslations[key] + ' - Graf';
                } else {
                    el.innerHTML = currentTranslations[key];
                }
            }
        });
    };

    const initLanguage = () => {
        const browserLang = navigator.language.split('-')[0];
        const langToLoad = config.translations[browserLang] ? browserLang : 'en';
        applyTranslations(langToLoad);
    };

    const loadData = () => {
        if (!projectStatsDocRef) return;
        
        projectStatsDocRef.get().then(doc => {
            if (doc.exists) {
                const data = doc.data();
                historyData = data.history || [];
                console.log(`Loaded ${historyData.length} votes from history`);
                
                // Filtruj pouze hlasy pro aktuální typ otázek
                historyData = historyData.filter(vote => vote.voteType === config.activeQuestionSet);
                console.log(`Filtered to ${historyData.length} votes for ${config.activeQuestionSet}`);
                
                updateTimeRange();
                updateStats();
                updateChart();
            }
        }).catch(err => {
            console.error("Error loading data:", err);
        });
    };

    const updateTimeRange = () => {
        if (historyData.length === 0) {
            document.getElementById('data-range').textContent = 'Žádná data';
            return;
        }

        const timestamps = historyData.map(vote => vote.timestamp.toDate());
        const minTime = new Date(Math.min(...timestamps));
        const maxTime = new Date(Math.max(...timestamps));
        
        const formatDate = (date) => {
            return date.toLocaleDateString('cs-CZ') + ' ' + date.toLocaleTimeString('cs-CZ', { hour: '2-digit', minute: '2-digit' });
        };
        
        document.getElementById('data-range').textContent = `${formatDate(minTime)} - ${formatDate(maxTime)}`;
    };

    const updateStats = () => {
        if (historyData.length === 0) {
            document.getElementById('total-votes').textContent = '0';
            document.getElementById('average-score').textContent = '0.0';
            document.getElementById('most-common').textContent = '-';
            document.getElementById('time-span').textContent = '-';
            return;
        }

        // Celkový počet hlasů
        document.getElementById('total-votes').textContent = historyData.length;
        
        // Průměrná hodnota (0-4)
        const average = historyData.reduce((sum, vote) => sum + vote.voteIndex, 0) / historyData.length;
        document.getElementById('average-score').textContent = average.toFixed(1);
        
        // Nejčastější volba
        const counts = [0, 0, 0, 0, 0];
        historyData.forEach(vote => counts[vote.voteIndex]++);
        const maxIndex = counts.indexOf(Math.max(...counts));
        const icons = iconSets[config.activeQuestionSet] || iconSets.mood;
        document.getElementById('most-common').textContent = icons[maxIndex];
        
        // Časové rozpětí
        const timestamps = historyData.map(vote => vote.timestamp.toDate());
        const minTime = new Date(Math.min(...timestamps));
        const maxTime = new Date(Math.max(...timestamps));
        const diffHours = (maxTime - minTime) / (1000 * 60 * 60);
        
        let timeSpan = '';
        if (diffHours < 1) {
            timeSpan = `${Math.round(diffHours * 60)} minut`;
        } else if (diffHours < 24) {
            timeSpan = `${Math.round(diffHours)} hodin`;
        } else {
            timeSpan = `${Math.round(diffHours / 24)} dní`;
        }
        document.getElementById('time-span').textContent = timeSpan;
    };

    const updateChart = () => {
        if (historyData.length === 0) return;
        
        const interval = parseInt(document.getElementById('time-interval').value);
        const chartType = document.getElementById('chart-type').value;
        
        // Připrav data pro graf
        const groupedData = groupDataByInterval(interval);
        const labels = Object.keys(groupedData).sort();
        
        const datasets = [];
        const options = currentTranslations.options || [];
        
        // Pro každou možnost vytvoř dataset
        for (let i = 0; i < 5; i++) {
            const data = labels.map(label => groupedData[label][i] || 0);
            
            datasets.push({
                label: options[i] || `Možnost ${i + 1}`,
                data: data,
                borderColor: chartColors[i],
                backgroundColor: chartType === 'area' ? chartBackgroundColors[i] : chartColors[i],
                borderWidth: 2,
                tension: 0.3,
                fill: chartType === 'area'
            });
        }
        
        // Konfigruace grafu
        const chartConfig = {
            type: chartType === 'area' ? 'line' : chartType,
            data: {
                labels: labels,
                datasets: datasets
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 15,
                            font: {
                                size: 12
                            }
                        }
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false,
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        titleFont: {
                            size: 14
                        },
                        bodyFont: {
                            size: 13
                        },
                        padding: 12,
                        displayColors: true,
                        callbacks: {
                            title: (context) => {
                                return 'Čas: ' + context[0].label;
                            },
                            label: (context) => {
                                const icons = iconSets[config.activeQuestionSet] || iconSets.mood;
                                return icons[context.datasetIndex] + ' ' + context.dataset.label + ': ' + context.parsed.y + ' hlasů';
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            maxRotation: 45,
                            minRotation: 45
                        }
                    },
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 1
                        },
                        title: {
                            display: true,
                            text: 'Počet hlasů'
                        }
                    }
                }
            }
        };
        
        // Zruš starý graf a vytvoř nový
        if (chart) {
            chart.destroy();
        }
        
        const ctx = document.getElementById('timeChart').getContext('2d');
        chart = new Chart(ctx, chartConfig);
    };

    const groupDataByInterval = (intervalMinutes) => {
        const grouped = {};
        
        historyData.forEach(vote => {
            const date = vote.timestamp.toDate();
            const roundedTime = new Date(Math.floor(date.getTime() / (intervalMinutes * 60 * 1000)) * (intervalMinutes * 60 * 1000));
            const timeKey = roundedTime.toLocaleTimeString('cs-CZ', { hour: '2-digit', minute: '2-digit' });
            
            if (!grouped[timeKey]) {
                grouped[timeKey] = [0, 0, 0, 0, 0];
            }
            
            grouped[timeKey][vote.voteIndex]++;
        });
        
        return grouped;
    };

    // Event listeners
    document.getElementById('time-interval').addEventListener('change', updateChart);
    document.getElementById('chart-type').addEventListener('change', updateChart);
    document.getElementById('refresh-btn').addEventListener('click', () => {
        console.log('Refreshing data...');
        loadData();
    });

    // Inicializace
    initLanguage();
    loadData();
    
    // Auto-refresh každých 30 sekund
    setInterval(loadData, 30000);
});
