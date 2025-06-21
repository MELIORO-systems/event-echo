document.addEventListener('DOMContentLoaded', () => {
    console.log('--- Event Echo App Initializing ---');
    let db;

    if (!config || !config.firebaseConfig || !config.projectId) {
        console.error("Critical Error: config.js is missing or incomplete. App cannot start.");
        return;
    }

    if (config.projectId === "default-project-id") { console.warn("WARNING: Using default 'projectId'. Change it in config.js to avoid data conflicts!"); }
    
    try {
        if (config.firebaseConfig.apiKey !== "VASE_API_KEY_VLOZTE_SEM") {
            firebase.initializeApp(config.firebaseConfig);
            db = firebase.firestore();
            console.log('Firebase initialized successfully.');
        } else {
            console.warn("Firebase is not configured. The app will run in offline mode (no stats will be saved or displayed).");
        }
    } catch (e) {
        console.error("Firebase initialization failed. Check your config.js credentials.", e);
        alert("Could not connect to the database. Please check the console for details.");
        return;
    }
    
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
    const gdprLink = document.getElementById('gdpr-link');
    const globalBreakdownContainer = document.getElementById('global-breakdown-container');
    let currentLang = 'en', currentTranslations = {};
    let currentQuestionSet;

    const iconSets = {
        mood: [
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#F44336" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>`,
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FF9800" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="15" x2="16" y2="15"></line><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>`,
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#9E9E9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>`,
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>`,
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#2196F3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 11.5c.5 1.5 2 3 4 3s3.5-1.5 4-3"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>`
        ],
        understanding: [
             `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#F44336" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`,
             `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffe0b2" stroke="#FF9800" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0L12 2.69z"></path></svg>`,
             `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#9E9E9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0L12 2.69z"></path></svg>`,
             `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#c8e6c9" stroke="#4CAF50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0L12 2.69z"></path></svg>`,
             `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#bbdefb" stroke="#2196F3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0L12 2.69z"></path></svg>`
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
    const createBreakdownHtml = (votes, setName) => {
        const icons = iconSets[setName] || [];
        return votes.map((count, index) => `<div>${icons[index] || ''} ${count}</div>`).join('');
    };

    const applyTranslations = (lang) => {
        console.log(`Applying translations for language: ${lang}`);
        currentLang = lang;
        const baseTranslations = config.translations[lang] || config.translations.en;
        currentQuestionSet = baseTranslations.questionSets[config.activeQuestionSet] || baseTranslations.questionSets.mood;
        currentTranslations = {...baseTranslations, ...currentQuestionSet};

        document.querySelectorAll('[data-config-key]').forEach(el => {
            const key = el.dataset.configKey;
            if (currentTranslations[key]) el.tagName === 'TITLE' ? el.textContent = currentTranslations[key] : el.innerHTML = currentTranslations[key];
        });
        document.querySelectorAll('.language-switcher button').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
        renderOptions();
    };

    const renderOptions = () => {
        console.log("Rendering options for:", config.activeQuestionSet);
        moodSelectorContainer.innerHTML = "";
        const options = currentTranslations.options || [];
        const icons = iconSets[config.activeQuestionSet] || iconSets.mood;
        options.forEach((label, index) => {
            const moodEl = document.createElement('div');
            moodEl.className = 'mood';
            moodEl.innerHTML = `${icons[index]}<div class="mood-label">${label}</div>`;
            moodEl.addEventListener('click', () => handleMoodClick(index));
            moodSelectorContainer.appendChild(moodEl);
        });
    };
    
    const initLanguage = () => {
        console.log("Initializing language...");
        const savedLang = localStorage.getItem('moodTrackerLang');
        const browserLang = navigator.language.split('-')[0];
        const langToLoad = (savedLang && config.translations[savedLang]) ? savedLang : (config.translations[browserLang] ? browserLang : 'en');
        applyTranslations(langToLoad);
        document.querySelectorAll('.language-switcher button').forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.dataset.lang;
                console.log(`Language changed to: ${lang}`);
                localStorage.setItem('moodTrackerLang', lang);
                applyTranslations(lang);
            });
        });
    };
    const canVote = () => {
        const lastVoteTimestamp = localStorage.getItem(`moodTrackerLastVote_${config.projectId}`);
        if (!lastVoteTimestamp) return true;
        if (config.votingFrequency === 'once') return false;
        if (config.votingFrequency === 'hourly') return (Date.now() - parseInt(lastVoteTimestamp)) > 3600000;
        return new Date(parseInt(lastVoteTimestamp)).toDateString() !== new Date().toDateString();
    };
    const setVoteTimestamp = () => {
        localStorage.setItem(`moodTrackerLastVote_${config.projectId}`, Date.now().toString());
        if(config.votingFrequency === 'once') {
             localStorage.setItem(`moodTrackerVotedOnce_${config.projectId}`, 'true');
        }
    };
    const handleMoodClick = (index) => {
        console.log(`Vote cast for option ${index}`);
        if (!projectStatsDocRef) { 
            alert("Aplikace není připojena k databázi."); 
            console.error("Database reference not available.");
            return; 
        }
        if (!canVote()) {
            alert(currentTranslations.alreadyVotedMessage);
            closeMoodModal(); 
            return;
        }
        console.log("Processing vote...");
        const transaction = db.runTransaction(t => t.get(projectStatsDocRef).then(d => {
            const data = d.exists ? d.data() : {};
            
            // Initialize votes structure if it doesn't exist
            if (!data.votes) {
                data.votes = {};
            }
            Object.keys(config.translations.en.questionSets).forEach(setName => {
                if (!data.votes[setName]) {
                    data.votes[setName] = [0, 0, 0, 0, 0];
                }
            });

            // Increment the specific vote
            data.votes[config.activeQuestionSet][index]++;
            
            // Handle history
            if (!data.history) {
                data.history = [];
            }
            data.history.push({ voteType: config.activeQuestionSet, voteIndex: index, timestamp: new Date() });
            if (data.history.length > 1000) data.history.shift();
            
            t.set(projectStatsDocRef, data);
        }));
        transaction.then(() => { 
            console.log("Vote successfully saved.");
            setVoteTimestamp(); 
            closeMoodModal(); 
            showResponseModal(index); 
        }).catch(err => {
            console.error("Error during vote transaction:", err);
        });
    };
    const showResponseModal = (moodIndex) => {
        const response = currentTranslations.responses[moodIndex];
        if (!response) return;
        console.log("Showing response for option", moodIndex);
        responseText.textContent = response.text;
        if (response.link && response.link.url) {
            responseLink.href = response.link.url;
            responseLink.textContent = response.link.text;
            responseLink.style.display = 'inline-block';
        } else { responseLink.style.display = 'none'; }
        responseModal.classList.add('visible');
    };
    const initGdprLink = () => {
        gdprLink.addEventListener('click', (e) => {
            e.preventDefault();
            alert(currentTranslations.gdprAlertText);
        });
    };
    const initBackgroundImage = () => {
        if (config.backgroundImage && config.backgroundImage.filename) {
            console.log(`Setting background image: ${config.backgroundImage.filename}`);
            const style = document.createElement('style');
            style.innerHTML = `.app-container::before { background-image: url('${config.backgroundImage.filename}'); }`;
            document.head.appendChild(style);
        }
    };
    const openMoodModal = () => moodModal.classList.add('visible');
    const closeMoodModal = () => moodModal.classList.remove('visible');
    const closeResponseModal = () => responseModal.classList.remove('visible');
    const initThemes = () => {
        const savedTheme = localStorage.getItem('moodTrackerTheme') || 'default';
        document.body.className = `theme-${savedTheme}`;
        document.querySelectorAll('.theme-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.theme === savedTheme);
            btn.addEventListener('click', () => {
                const themeName = btn.dataset.theme;
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

    if (projectStatsDocRef) {
        projectStatsDocRef.onSnapshot(doc => {
            const data = doc.exists ? doc.data() : {};
            const votes = (data.votes && data.votes[config.activeQuestionSet]) ? data.votes[config.activeQuestionSet] : [0,0,0,0,0];
            document.getElementById('stats-project-total').textContent = votes.reduce((s, c) => s + c, 0);
            document.getElementById('stats-project-breakdown').innerHTML = createBreakdownHtml(votes, config.activeQuestionSet);
        }, err => console.error("Chyba při načítání statistik projektu: ", err));
    }
    if (globalStatsCollectionRef) {
        globalStatsCollectionRef.onSnapshot(snapshot => {
            let globalVotes = { mood: [0,0,0,0,0], understanding: [0,0,0,0,0], preference: [0,0,0,0,0], agreement: [0,0,0,0,0] };
            let todayTotal = 0, weekTotal = 0;
            const today = new Date(); today.setHours(0,0,0,0);
            const sevenDaysAgo = new Date(); sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
            
            snapshot.forEach(doc => {
                const data = doc.data();
                if(data.votes) {
                    Object.keys(globalVotes).forEach(setName => {
                        if (data.votes[setName]) {
                            for(let i=0; i<5; i++) { globalVotes[setName][i] += (data.votes[setName][i] || 0); }
                        }
                    });
                }
                const history = data.history || [];
                todayTotal += history.filter(e => e.timestamp.toDate() >= today).length;
                weekTotal += history.filter(e => e.timestamp.toDate() >= sevenDaysAgo).length;
            });
            
            document.getElementById('stats-global-total').textContent = Object.values(globalVotes).flat().reduce((s, c) => s + c, 0);
            document.getElementById('stats-global-today').textContent = todayTotal;
            document.getElementById('stats-global-last-week').textContent = weekTotal;

            globalBreakdownContainer.innerHTML = "";
            Object.keys(globalVotes).forEach(setName => {
                const setTranslations = (currentTranslations.questionSets || {})[setName] || {};
                const breakdownTitle = setTranslations.statsGlobalBreakdown || `Global ${setName} distribution:`;
                const breakdownHTML = createBreakdownHtml(globalVotes[setName], setName);
                const statItem = document.createElement('div');
                statItem.className = 'stat-item';
                statItem.innerHTML = `<span class="stat-label">${breakdownTitle}</span><span class="stat-value breakdown">${breakdownHTML}</span>`;
                globalBreakdownContainer.appendChild(statItem);
            });

        }, err => console.error("Chyba při načítání globálních statistik: ", err));
    }

    initLanguage();
    initThemes();
    initSettingsToggle();
    initGdprLink();
    initBackgroundImage();
    openModalBtn.addEventListener('click', openMoodModal);
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
});
