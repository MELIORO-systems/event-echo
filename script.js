document.addEventListener('DOMContentLoaded', () => {
    let db;
    if (config.projectId === "default-project-id") { console.warn("POZOR: Používáte výchozí 'projectId'. Změňte ho v config.js!"); }
    try {
        if (config.firebaseConfig.apiKey !== "VASE_API_KEY_VLOZTE_SEM") {
            firebase.initializeApp(config.firebaseConfig);
            db = firebase.firestore();
        } else { console.warn("Firebase není nakonfigurován. Aplikace poběží v offline režimu."); }
    } catch (e) { console.error("Chyba inicializace Firebase.", e); }
    
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
    const moods_svgs = [
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#F44336" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>`,
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FF9800" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="15" x2="16" y2="15"></line><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>`,
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#9E9E9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>`,
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>`,
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#2196F3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 11.5c.5 1.5 2 3 4 3s3.5-1.5 4-3"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>`
    ];
    const createBreakdownHtml = (votes) => votes.map((count, index) => `<div>${moods_svgs[index]} ${count}</div>`).join('');

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

    const applyTranslations = (lang) => {
        currentLang = lang;
        currentTranslations = config.translations[lang] || config.translations.en;
        document.querySelectorAll('[data-config-key]').forEach(el => {
            const key = el.dataset.configKey;
            if (currentTranslations[key]) el.tagName === 'TITLE' ? el.textContent = currentTranslations[key] : el.innerHTML = currentTranslations[key];
        });
        document.querySelectorAll('.language-switcher button').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
        renderMoods();
    };
    const initLanguage = () => {
        const savedLang = localStorage.getItem('moodTrackerLang');
        const browserLang = navigator.language.split('-')[0];
        const langToLoad = (savedLang && config.translations[savedLang]) ? savedLang : (config.translations[browserLang] ? browserLang : 'en');
        applyTranslations(langToLoad);
        document.querySelectorAll('.language-switcher button').forEach(btn => btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            localStorage.setItem('moodTrackerLang', lang);
            applyTranslations(lang);
        }));
    };
    const renderMoods = () => {
        moodSelectorContainer.innerHTML = "";
        const moodLabels = currentTranslations.moods || config.translations.en.moods;
        moodLabels.forEach((label, index) => {
            const moodEl = document.createElement('div');
            moodEl.className = 'mood';
            moodEl.innerHTML = `${moods_svgs[index]}<div class="mood-label">${label}</div>`;
            moodEl.addEventListener('click', () => handleMoodClick(index));
            moodSelectorContainer.appendChild(moodEl);
        });
    };
    const canVote = () => {
        const lastVoteTimestamp = localStorage.getItem(`moodTrackerLastVote_${config.projectId}`);
        if (!lastVoteTimestamp) return true;
        if (config.votingFrequency === 'once') return false;
        if (config.votingFrequency === 'hourly') return (Date.now() - parseInt(lastVoteTimestamp)) > 3600000;
        return new Date(parseInt(lastVoteTimestamp)).toDateString() !== new Date().toDateString();
    };
    const setVoteTimestamp = () => localStorage.setItem(`moodTrackerLastVote_${config.projectId}`, Date.now().toString());

    const handleMoodClick = (index) => {
        if (!projectStatsDocRef) { alert("Aplikace není připojena k databázi."); return; }
        if (!canVote()) {
            alert(currentTranslations.alreadyVotedMessage);
            closeMoodModal(); return;
        }
        const transaction = db.runTransaction(t => t.get(projectStatsDocRef).then(d => {
            const data = d.exists ? d.data() : { votes: [0,0,0,0,0], history: [] };
            data.votes[index] = (data.votes[index] || 0) + 1;
            data.history.push({ moodIndex: index, timestamp: new Date() });
            if (data.history.length > 1000) data.history.shift();
            t.set(projectStatsDocRef, data);
        }));
        transaction.then(() => { setVoteTimestamp(); closeMoodModal(); showResponseModal(index); });
    };
    const showResponseModal = (moodIndex) => {
        const response = currentTranslations.responses[moodIndex];
        if (!response) return;
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
