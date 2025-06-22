document.addEventListener('DOMContentLoaded', () => {
    console.log('%c--- Event Echo App Initializing ---', 'color: #007bff; font-weight: bold; font-size: 16px');
    console.log('App Version: 1.0.0');
    console.log('Current Time:', new Date().toLocaleString());
    let db;

    // Kontrola konfigurace
    console.group('📋 Configuration Check');
    if (!config || !config.firebaseConfig || !config.projectId) {
        console.error("❌ Critical Error: config.js is missing or incomplete. App cannot start.");
        console.groupEnd();
        return;
    }
    console.log('✅ config.js loaded successfully');
    console.log('Project ID:', config.projectId);
    console.log('Active Question Set:', config.activeQuestionSet);
    console.log('Voting Frequency:', config.votingFrequency);
    console.log('Project URL:', config.projectUrl || 'Not set');
    console.groupEnd();

    if (config.projectId === "default-project-id") { 
        console.warn("⚠️ WARNING: Using default 'projectId'. Change it in config.js to avoid data conflicts!"); 
    }
    
    // Firebase inicializace
    console.group('🔥 Firebase Initialization');
    try {
        if (config.firebaseConfig.apiKey !== "VASE_API_KEY_VLOZTE_SEM") {
            firebase.initializeApp(config.firebaseConfig);
            db = firebase.firestore();
            console.log('✅ Firebase initialized successfully');
            console.log('Project ID:', config.firebaseConfig.projectId);
            console.log('Auth Domain:', config.firebaseConfig.authDomain);
        } else {
            console.warn("⚠️ Firebase is not configured. The app will run in offline mode (no stats will be saved or displayed).");
        }
    } catch (e) {
        console.error("❌ Firebase initialization failed:", e);
        alert("Could not connect to the database. Please check the console for details.");
        console.groupEnd();
        return;
    }
    console.groupEnd();
    
    const projectStatsDocRef = db ? db.collection("moodStats").doc(config.projectId) : null;
    const globalStatsCollectionRef = db ? db.collection("moodStats") : null;

    const openModalBtn = document.getElementById('open-modal-btn');
    const closeMoodModalBtn = document.getElementById('close-mood-modal-btn');
    const moodModal = document.getElementById('mood-modal');
    const moodSelectorContainer = document.getElementById('mood-selector-container');
    const responseModal = document.getElementById('response-modal');
    const closeResponseModalBtn = document.getElementById('close-response-modal-btn');
    const responseText = document.getElementById('response-text');
    const responseLink = document.getElementById('response-link');
    const settingsToggleBtn = document.getElementById('settings-toggle-btn');
    const collapsibleArea = document.querySelector('.collapsible-area');
    const globalBreakdownContainer = document.getElementById('global-breakdown-container');
    let currentLang = 'en', currentTranslations = {};
    let currentQuestionSet;

    const iconSets = {
        mood: [
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#F44336" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>`,
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FF9800" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>`,
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#9E9E9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="15" x2="16" y2="15"></line><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>`,
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>`,
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#2196F3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 11.5c.5 1.5 2 3 4 3s3.5-1.5 4-3"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>`
        ],
        understanding: [
             `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#F44336" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0L12 2.69z"></path></svg>`,
             `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FF9800" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0L12 2.69z"></path></svg>`,
             `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#9E9E9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0L12 2.69z"></path></svg>`,
             `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0L12 2.69z"></path></svg>`,
             `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#2196F3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0L12 2.69z"></path></svg>`
        ],
        preference: [
             `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#F44336" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,
             `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FF9800" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>`,
             `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#9E9E9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>`,
             `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>`,
             `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#2196F3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>`
        ],
        agreement: [
             `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#F44336" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.13a2 2 0 0 0-1.79 1.11L2 8.44A2 2 0 0 0 3.88 11H10z"></path></svg>`,
             `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FF9800" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.13a2 2 0 0 0-1.79 1.11L2 8.44A2 2 0 0 0 3.88 11H10z"></path></svg>`,
             `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#9E9E9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"></path></svg>`,
             `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"></path></svg>`,
             `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#2196F3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"></path></svg>`
        ]
    };
    
    // Vylepšená funkce pro vytvoření HTML s ikonami
    const createBreakdownHtml = (votes, setName) => {
        const icons = iconSets[setName] || [];
        return votes.map((count, index) => {
            const icon = icons[index] || '';
            return `<div>${icon} <span>${count}</span></div>`;
        }).join('');
    };

    const applyTranslations = (lang) => {
        console.group(`🌐 Applying translations: ${lang}`);
        console.log('Previous language:', currentLang);
        currentLang = lang;
        const baseTranslations = config.translations[lang] || config.translations.en;
        currentQuestionSet = baseTranslations.questionSets[config.activeQuestionSet] || baseTranslations.questionSets.mood;
        currentTranslations = {...baseTranslations, ...currentQuestionSet};
        
        console.log('Active question set:', config.activeQuestionSet);
        console.log('Available options:', currentTranslations.options);

        document.querySelectorAll('[data-config-key]').forEach(el => {
            const key = el.dataset.configKey;
            if (currentTranslations[key]) {
                if (el.tagName === 'TITLE') {
                    el.textContent = currentTranslations[key];
                } else {
                    el.innerHTML = currentTranslations[key];
                }
            }
        });
        document.querySelectorAll('.language-switcher button').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
        renderOptions();
        console.groupEnd();
    };

    // Vylepšená funkce pro vykreslení možností
    const renderOptions = () => {
        console.log(`🎨 Rendering options for: ${config.activeQuestionSet}`);
        moodSelectorContainer.innerHTML = "";
        const options = currentTranslations.options || [];
        const icons = iconSets[config.activeQuestionSet] || iconSets.mood;
        console.log(`Creating ${options.length} option buttons`);
        
        options.forEach((label, index) => {
            const moodEl = document.createElement('div');
            moodEl.className = 'mood';
            
            // Vložit SVG přímo jako innerHTML
            moodEl.innerHTML = `
                ${icons[index]}
                <div class="mood-label">${label}</div>
            `;
            
            moodEl.addEventListener('click', () => handleMoodClick(index));
            moodSelectorContainer.appendChild(moodEl);
        });
    };
    
    const initLanguage = () => {
        console.group('🌍 Language Initialization');
        const savedLang = localStorage.getItem('moodTrackerLang');
        const browserLang = navigator.language.split('-')[0];
        console.log('Saved language:', savedLang || 'None');
        console.log('Browser language:', browserLang);
        console.log('Available languages:', Object.keys(config.translations));
        
        const langToLoad = (savedLang && config.translations[savedLang]) ? savedLang : (config.translations[browserLang] ? browserLang : 'en');
        console.log('Loading language:', langToLoad);
        console.groupEnd();
        
        applyTranslations(langToLoad);
        document.querySelectorAll('.language-switcher button').forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.dataset.lang;
                console.log(`🔄 Language changed to: ${lang}`);
                localStorage.setItem('moodTrackerLang', lang);
                applyTranslations(lang);
            });
        });
    };
    
    const canVote = () => {
        const lastVoteTimestamp = localStorage.getItem(`moodTrackerLastVote_${config.projectId}`);
        const canVoteResult = {
            allowed: true,
            reason: 'First time voting',
            lastVote: null,
            nextVoteTime: null
        };
        
        if (!lastVoteTimestamp) {
            console.log('✅ Can vote: No previous vote found');
            return true;
        }
        
        const lastVoteDate = new Date(parseInt(lastVoteTimestamp));
        canVoteResult.lastVote = lastVoteDate.toLocaleString();
        
        if (config.votingFrequency === 'once') {
            canVoteResult.allowed = false;
            canVoteResult.reason = 'One-time voting only';
        } else if (config.votingFrequency === 'hourly') {
            const hoursPassed = (Date.now() - parseInt(lastVoteTimestamp)) / 3600000;
            canVoteResult.allowed = hoursPassed > 1;
            canVoteResult.reason = canVoteResult.allowed ? 'Hour has passed' : 'Need to wait for next hour';
            if (!canVoteResult.allowed) {
                canVoteResult.nextVoteTime = new Date(parseInt(lastVoteTimestamp) + 3600000).toLocaleString();
            }
        } else { // daily
            canVoteResult.allowed = lastVoteDate.toDateString() !== new Date().toDateString();
            canVoteResult.reason = canVoteResult.allowed ? 'New day' : 'Already voted today';
            if (!canVoteResult.allowed) {
                const tomorrow = new Date();
                tomorrow.setDate(tomorrow.getDate() + 1);
                tomorrow.setHours(0, 0, 0, 0);
                canVoteResult.nextVoteTime = tomorrow.toLocaleString();
            }
        }
        
        console.log(`🗳️ Vote check:`, canVoteResult);
        return canVoteResult.allowed;
    };
    
    const setVoteTimestamp = () => {
        localStorage.setItem(`moodTrackerLastVote_${config.projectId}`, Date.now().toString());
        if(config.votingFrequency === 'once') {
             localStorage.setItem(`moodTrackerVotedOnce_${config.projectId}`, 'true');
        }
    };
    
    const handleMoodClick = (index) => {
        console.group(`🗳️ Vote Process Started`);
        console.log(`Vote cast for option ${index} (${currentTranslations.options[index]})`);
        console.log('Question type:', config.activeQuestionSet);
        
        if (!projectStatsDocRef) { 
            console.error("❌ Database reference not available");
            alert("Aplikace není připojena k databázi."); 
            console.groupEnd();
            return; 
        }
        
        if (!canVote()) {
            console.warn("❌ User already voted within the time limit");
            alert(currentTranslations.alreadyVotedMessage);
            closeMoodModal(); 
            console.groupEnd();
            return;
        }
        
        console.log("📤 Processing vote...");
        const transaction = db.runTransaction(t => t.get(projectStatsDocRef).then(d => {
            const data = d.exists ? d.data() : {};
            console.log('Current document exists:', d.exists);
            
            if (!data.votes) {
                data.votes = {};
                console.log('Creating new votes structure');
            }
            
            // Log current state before update
            console.log('Current votes:', data.votes[config.activeQuestionSet] || 'No votes yet');
            
            Object.keys(config.translations.en.questionSets).forEach(setName => {
                if (!data.votes[setName]) {
                    data.votes[setName] = [0, 0, 0, 0, 0];
                }
            });

            data.votes[config.activeQuestionSet][index]++;
            console.log('New vote count for option', index, ':', data.votes[config.activeQuestionSet][index]);
            
            if (!data.history) {
                data.history = [];
            }
            
            const newHistoryEntry = { 
                voteType: config.activeQuestionSet, 
                voteIndex: index, 
                timestamp: new Date() 
            };
            data.history.push(newHistoryEntry);
            console.log('Added history entry:', newHistoryEntry);
            
            if (data.history.length > 1000) {
                data.history.shift();
                console.log('History trimmed to 1000 entries');
            }
            
            t.set(projectStatsDocRef, data);
        }));
        
        transaction.then(() => { 
            console.log("✅ Vote successfully saved to Firebase");
            setVoteTimestamp(); 
            closeMoodModal(); 
            showResponseModal(index);
            console.groupEnd();
        }).catch(err => {
            console.error("❌ Error during vote transaction:", err);
            console.groupEnd();
        });
    };
    
    const showResponseModal = (moodIndex) => {
        const response = currentTranslations.responses[moodIndex];
        if (!response) {
            console.warn('No response configured for index:', moodIndex);
            return;
        }
        console.log(`💬 Showing response for option ${moodIndex}:`, response.text);
        responseText.textContent = response.text;
        if (response.link && response.link.url) {
            responseLink.href = response.link.url;
            responseLink.textContent = response.link.text;
            responseLink.style.display = 'inline-block';
            console.log('Response includes link:', response.link.url);
        } else { 
            responseLink.style.display = 'none'; 
        }
        responseModal.classList.add('visible');
    };
    
    const initGdprLink = () => {
        const gdprLink = document.getElementById('gdpr-link');
        if (gdprLink) {
            gdprLink.addEventListener('click', (e) => {
                e.preventDefault();
                // Zobrazit alert podle aktuálního jazyka
                const message = currentLang === 'cs' 
                    ? "Beru na vědomí, že tato mini-aplikace neukládá ani nepracuje s žádnými osobními údaji. 😊"
                    : "I acknowledge that this mini-application does not store or process any personal data. 😊";
                alert(message);
            });
        }
    };
    
    const initBackgroundImage = () => {
        if (config.backgroundImage && config.backgroundImage.filename) {
            console.log(`🖼️ Setting background image: ${config.backgroundImage.filename}`);
            const style = document.createElement('style');
            style.innerHTML = `.app-container::before { background-image: url('${config.backgroundImage.filename}'); }`;
            document.head.appendChild(style);
        } else {
            console.log('ℹ️ No background image configured');
        }
    };
    
    const openMoodModal = () => moodModal.classList.add('visible');
    const closeMoodModal = () => moodModal.classList.remove('visible');
    const closeResponseModal = () => responseModal.classList.remove('visible');
    
const initThemes = () => {
    // Nejdřív zkontroluj, jestli config definuje defaultní téma
    const configTheme = config.defaultTheme;
    // Pak zkus načíst uložené téma
    const savedTheme = localStorage.getItem('moodTrackerTheme');
    // Použij: uložené > config > default
    const themeToUse = savedTheme || configTheme || 'default';
    
    console.log(`🎨 Theme initialization: ${themeToUse}`);
    if (configTheme && !savedTheme) {
        console.log(`Using theme from config: ${configTheme}`);
    }
    
    document.body.className = `theme-${themeToUse}`;
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.theme === themeToUse);
        btn.addEventListener('click', () => {
            const themeName = btn.dataset.theme;
            console.log(`🎨 Theme changed to: ${themeName}`);
            document.body.className = `theme-${themeName}`;
            localStorage.setItem('moodTrackerTheme', themeName);
            document.querySelectorAll('.theme-btn').forEach(b => b.classList.toggle('active', b.dataset.theme === themeName));
        });
    });
};
    
    const initSettingsToggle = () => {
        settingsToggleBtn.addEventListener('click', () => {
            collapsibleArea.classList.toggle('open');
            settingsToggleBtn.classList.toggle('active');
        });
    };

    // Statistiky projektu
    if (projectStatsDocRef) {
        console.log('📊 Setting up project statistics listener');
        projectStatsDocRef.onSnapshot(doc => {
            console.group('📊 Project Stats Update');
            const data = doc.exists ? doc.data() : {};
            console.log('Document exists:', doc.exists);
            
            const votes = (data.votes && data.votes[config.activeQuestionSet]) ? data.votes[config.activeQuestionSet] : [0,0,0,0,0];
            const total = votes.reduce((s, c) => s + c, 0);
            
            console.log('Current question type:', config.activeQuestionSet);
            console.log('Vote distribution:', votes);
            console.log('Total votes:', total);
            
            document.getElementById('stats-project-total').textContent = total;
            document.getElementById('stats-project-breakdown').innerHTML = createBreakdownHtml(votes, config.activeQuestionSet);
            console.groupEnd();
        }, err => {
            console.error("❌ Error loading project statistics:", err);
        });
    } else {
        console.warn('⚠️ Project statistics disabled - no database connection');
    }
    
    // Globální statistiky
    if (globalStatsCollectionRef) {
        console.log('🌍 Setting up global statistics listener');
        globalStatsCollectionRef.onSnapshot(snapshot => {
            console.group('🌍 Global Stats Update');
            console.log('Total projects in database:', snapshot.size);
            
            // Inicializace s prázdnými hodnotami pro všechny 4 typy
            let globalVotes = { 
                mood: [0,0,0,0,0], 
                understanding: [0,0,0,0,0], 
                preference: [0,0,0,0,0], 
                agreement: [0,0,0,0,0] 
            };
            let todayTotal = 0, weekTotal = 0;
            const today = new Date(); 
            today.setHours(0,0,0,0);
            const sevenDaysAgo = new Date(); 
            sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
            
            console.log('Processing documents...');
            snapshot.forEach(doc => {
                const data = doc.data();
                console.log(`  Document ${doc.id}:`, {
                    hasVotes: !!data.votes,
                    historyLength: data.history ? data.history.length : 0
                });
                
                if(data.votes) {
                    // Projdeme všechny typy otázek a sečteme jejich hodnoty
                    Object.keys(globalVotes).forEach(setName => {
                        if (data.votes[setName]) {
                            for(let i=0; i<5; i++) { 
                                globalVotes[setName][i] += (data.votes[setName][i] || 0); 
                            }
                        }
                    });
                }
                const history = data.history || [];
                todayTotal += history.filter(e => e.timestamp && e.timestamp.toDate && e.timestamp.toDate() >= today).length;
                weekTotal += history.filter(e => e.timestamp && e.timestamp.toDate && e.timestamp.toDate() >= sevenDaysAgo).length;
            });
            
            // Správný výpočet celkového počtu hlasů
            let totalVotes = 0;
            Object.values(globalVotes).forEach(votes => {
                totalVotes += votes.reduce((sum, count) => sum + count, 0);
            });
            
            console.log('Global vote totals by type:');
            Object.entries(globalVotes).forEach(([type, votes]) => {
                const sum = votes.reduce((s, c) => s + c, 0);
                console.log(`  ${type}: ${sum} votes`, votes);
            });
            console.log('Total global votes:', totalVotes);
            console.log('Votes today:', todayTotal);
            console.log('Votes last 7 days:', weekTotal);
            
            document.getElementById('stats-global-total').textContent = totalVotes;
            document.getElementById('stats-global-today').textContent = todayTotal;
            document.getElementById('stats-global-last-week').textContent = weekTotal;

            // Vyčistíme kontejner
            globalBreakdownContainer.innerHTML = "";
            
            // Zobrazíme VŠECHNY 4 typy otázek
            Object.keys(globalVotes).forEach(setName => {
                // Získáme správné překlady pro každý typ
                const allTranslations = config.translations[currentLang] || config.translations.en;
                const setTranslations = (allTranslations.questionSets || {})[setName] || {};
                const breakdownTitle = setTranslations.statsGlobalBreakdown || `Global ${setName} distribution:`;
                
                // Vytvoříme HTML s ikonami
                const breakdownHTML = createBreakdownHtml(globalVotes[setName], setName);
                
                // Vytvoříme element pro statistiku
                const statItem = document.createElement('div');
                statItem.className = 'stat-item';
                
                // Zvýrazníme aktuálně vybraný typ
                if (setName === config.activeQuestionSet) {
                    statItem.style.backgroundColor = 'var(--light-primary)';
                    statItem.style.borderRadius = '8px';
                    console.log(`Highlighting active type: ${setName}`);
                }
                
                statItem.innerHTML = `
                    <span class="stat-label">${breakdownTitle}</span>
                    <span class="stat-value breakdown">${breakdownHTML}</span>
                `;
                globalBreakdownContainer.appendChild(statItem);
            });
            
            console.groupEnd();
        }, err => {
            console.error("❌ Error loading global statistics:", err);
        });
    } else {
        console.warn('⚠️ Global statistics disabled - no database connection');
    }

    // Inicializace aplikace
    console.group('🚀 App Initialization');
    initLanguage();
    initThemes();
    initSettingsToggle();
    initGdprLink();
    initBackgroundImage();
    console.groupEnd();
    
    // Event listeners
    console.log('🎯 Setting up event listeners');
    openModalBtn.addEventListener('click', () => {
        console.log('📱 Opening mood modal');
        openMoodModal();
    });
    closeMoodModalBtn.addEventListener('click', closeMoodModal);
    closeResponseModalBtn.addEventListener('click', closeResponseModal);
    moodModal.addEventListener('click', (e) => { if (e.target === moodModal) closeMoodModal(); });
    responseModal.addEventListener('click', (e) => { if (e.target === responseModal) closeResponseModal(); });
    document.addEventListener('keydown', (e) => { 
        if (e.key === 'Escape') {
            closeMoodModal();
            closeResponseModal();
        }
    });
    
    console.log('%c✅ Event Echo App Ready!', 'color: #4CAF50; font-weight: bold; font-size: 18px');
    console.log('%cTip: Enable "Verbose" in console settings to see all logs', 'color: #666; font-style: italic');
});
