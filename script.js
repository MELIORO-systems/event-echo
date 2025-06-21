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
    let currentLang = 'en', currentTranslations = {};
    let currentQuestionSet;

    const iconSets = {
        mood: [
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#F44336" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>`,
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FF9800" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="15" x2="16" y2="15"></line><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>`,
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#9E9E9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>`,
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>`,
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#2196F3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 11.5c.5 1.5 2 3 4 3s3.5-1.5 4-3"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>`
        ],
        understanding: [
             `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" fill="#F44336"><rect fill="none" height="24" width="24"/><path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M13,17h-2v-2h2V17z M13,13h-2c0-3,3-3,3-5 c0-1.1-0.9-2-2-2s-2,0.9-2,2h-2c0-2.21,1.79-4,4-4s4,1.79,4,4C16,10,13,10,13,13z"/></svg>`,
             `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" fill="#FF9800"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M12,4c-4.41,0-8,3.59-8,8s3.59,8,8,8s8-3.59,8-8S16.41,4,12,4z M13,17h-2v-2h2V17z M13,13h-2v-2h2V13z" opacity=".3"/><path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8 s3.59-8,8-8s8,3.59,8,8S16.41,20,12,20z M11,15h2v2h-2V15z M11,7h2v6h-2V7z"/></g></g></svg>`,
             `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" fill="#9E9E9E"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M12,4c-4.41,0-8,3.59-8,8s3.59,8,8,8s8-3.59,8-8S16.41,4,12,4z M13,17h-2v-2h2V17z M13,13h-2v-2h2V13z" opacity=".3"/><path d="M11,7h2v6h-2V7zm0,8h2v2h-2V15zm1-11C6.48,4,2,8.48,2,14c0,5.52,4.48,10,10,10s10-4.48,10-10C22,8.48,17.52,4,12,4z M12,22 c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8S16.41,22,12,22z"/></g></g></svg>`,
             `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" fill="#4CAF50"><g><rect fill="none" height="24" width="24" x="0"/></g><g><g><path d="M12,4c-4.41,0-8,3.59-8,8s3.59,8,8,8s8-3.59,8-8S16.41,4,12,4z M11.5,16.5h-1V14h1V16.5z M11.5,12.5h-1v-4h1V12.5z M13.5,16.5h-1V14h1V16.5z M13.5,12.5h-1v-4h1V12.5z" opacity=".3"/><path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8 s8,3.59,8,8S16.41,20,12,20z"/><rect height="2.5" width="1" x="10.5" y="8.5"/><rect height="2.5" width="1" x="12.5" y="8.5"/><rect height="2.5" width="1" x="10.5" y="14"/><rect height="2.5" width="1" x="12.5" y="14"/></g></g></svg>`,
             `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" fill="#2196F3"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M12,4c-4.41,0-8,3.59-8,8s3.59,8,8,8s8-3.59,8-8S16.41,4,12,4z M16.21,16.21l-3.54,3.54l-3.54-3.54l1.41-1.41 L12,16.24l1.41-1.41L16.21,16.21z M4.22,7.79l3.54-3.54l3.54,3.54L9.9,9.21L8.48,7.79L5.64,10.64L4.22,9.21L4.22,7.79z" opacity=".3"/><path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8 s8,3.59,8,8S16.41,20,12,20z M14.8,14.8l-1.41,1.41L12,14.81l-1.41,1.41l-1.41-1.41l1.41-1.41L12,13.4l1.41,1.41L14.8,14.8z M8.48,7.79l1.41-1.41L12,7.79l1.41-1.41l1.41,1.41l-1.41,1.41L12,9.21L10.59,7.79L9.17,9.21L7.76,7.79L8.48,7.79z"/></g></g></svg>`
        ],
        preference: [
            // ... nové ikony ...
        ],
        agreement: [
            // ... nové ikony ...
        ]
    };
    const createBreakdownHtml = (votes) => {
        const icons = iconSets[config.activeQuestionSet] || iconSets.mood;
        return votes.map((count, index) => `<div>${icons[index]} ${count}</div>`).join('');
    }

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
            const data = d.exists ? d.data() : { votes: [0,0,0,0,0], history: [] };
            data.votes[index] = (data.votes[index] || 0) + 1;
            data.history.push({ moodIndex: index, timestamp: new Date() });
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
            const data = doc.exists ? doc.data() : { votes: [0,0,0,0,0] };
            const votes = data.votes || [0,0,0,0,0];
            document.getElementById('stats-project-total').textContent = votes.reduce((s, c) => s + c, 0);
            document.getElementById('stats-project-breakdown').innerHTML = createBreakdownHtml(votes);
        }, err => console.error("Chyba při načítání statistik projektu: ", err));
    }
    if (globalStatsCollectionRef) {
        globalStatsCollectionRef.onSnapshot(snapshot => {
            let globalVotes = [0,0,0,0,0], todayTotal = 0, weekTotal = 0;
            const today = new Date(); today.setHours(0,0,0,0);
            const sevenDaysAgo = new Date(); sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
            snapshot.forEach(doc => {
                const data = doc.data();
                const votes = data.votes || [0,0,0,0,0];
                for(let i=0; i<5; i++) { globalVotes[i] += (votes[i] || 0); }
                const history = data.history || [];
                todayTotal += history.filter(e => e.timestamp.toDate() >= today).length;
                weekTotal += history.filter(e => e.timestamp.toDate() >= sevenDaysAgo).length;
            });
            document.getElementById('stats-global-total').textContent = globalVotes.reduce((s, c) => s + c, 0);
            document.getElementById('stats-global-today').textContent = todayTotal;
            document.getElementById('stats-global-last-week').textContent = weekTotal;
            document.getElementById('stats-global-breakdown').innerHTML = createBreakdownHtml(globalVotes);
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
