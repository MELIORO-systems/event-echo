document.addEventListener('DOMContentLoaded', () => {
    let db;
    if (config.projectId === "default-project-id") {
        console.warn("POZOR: Používáte výchozí 'projectId'. Změňte ho v config.js, aby se data vaší aplikace nepletla s ostatními!");
    }
    try {
        if (config.firebaseConfig.apiKey !== "VASE_API_KEY_VLOZTE_SEM") {
            firebase.initializeApp(config.firebaseConfig);
            db = firebase.firestore();
        } else {
            console.warn("Firebase není nakonfigurován. Aplikace poběží v offline režimu.");
        }
    } catch (e) { console.error("Chyba inicializace Firebase.", e); }
    
    const projectStatsDocRef = db ? db.collection("moodStats").doc(config.projectId) : null;
    const globalStatsCollectionRef = db ? db.collection("moodStats") : null;

    const openModalBtn = document.getElementById('open-modal-btn');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const moodSelectorContainer = document.getElementById('mood-selector-container');
    const settingsToggleBtn = document.getElementById('settings-toggle-btn');
    const collapsibleArea = document.querySelector('.collapsible-area');
    let currentLang = 'en', currentTranslations = {};
    const moods_paths = ["M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-4-6a8.84 8.84 0 0 0 8 0c.55 0 1 .45 1 1s-.45 1-1 1a10.84 10.84 0 0 1-10 0c-.55 0-1-.45-1-1s.45-1 1-1zm1.5-3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z", "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-3.5-6.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zm7 0c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zm-3.5 2c-1.31 0-2.5.38-3.57.97.27.69.93 1.13 1.7 1.13.43 0 .83-.17 1.13-.44.49.19 1.02.34 1.56.41.22.6.82 1.04 1.53 1.04.9 0 1.63-.73 1.63-1.63 0-.69-.44-1.28-1.04-1.53.1-.07.2-.14.28-.21.2-.17.38-.36.54-.57.48.56 1.19.94 2.01.94.83 0 1.5-.67 1.5-1.5S15.33 14 14.5 14c-1.12 0-2.11.53-2.73 1.33-.24-.09-.49-.16-.76-.2.09-.25.19-.5.29-.73h.01c.2-.5.3-1.02.3-1.56 0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5c0 .33.11.65.3.91-.49.33-1.06.6-1.69.81.25.68.91 1.15 1.69 1.15.56 0 1.06-.31 1.34-.76z", "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-5-6h10v2H7v-2zm1.5-2.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm7 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z", "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z", "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM8.5 9.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5S10.83 8 10 8s-1.5.67-1.5 1.5zm5.5 0c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5S16.33 8 15.5 8s-1.5.67-1.5 1.5zM12 17.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"];

    const createBreakdownHtml = (votes) => votes.map((count, index) => `<svg viewBox="0 0 24 24" style="vertical-align: middle; width: 16px; height: 16px;"><path fill="currentColor" d="${moods_paths[index]}"/></svg> ${count}`).join(' | ');
    
    // --- LISTENERY DATABÁZE ---
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

    // --- JAZYKOVÁ LOGIKA A OSTATNÍ FUNKCE ---
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
    const handleMoodClick = (index) => {
        if (!projectStatsDocRef) { alert("Aplikace není připojena k databázi."); return; }
        if (localStorage.getItem('moodTrackerLastVote') === new Date().toDateString()) {
            alert(currentTranslations.thankYouMessage.replace('Děkujeme', 'Dnes jste již hlasoval(a).'));
            closeModal(); return;
        }
        const transaction = db.runTransaction(t => t.get(projectStatsDocRef).then(d => {
            const data = d.exists ? d.data() : { votes: [0,0,0,0,0], history: [] };
            data.votes[index] = (data.votes[index] || 0) + 1;
            data.history.push({ moodIndex: index, timestamp: new Date() });
            if (data.history.length > 1000) data.history.shift();
            t.set(projectStatsDocRef, data);
        }));
        transaction.then(() => {
            localStorage.setItem('moodTrackerLastVote', new Date().toDateString());
            closeModal();
            openModalBtn.textContent = currentTranslations.thankYouMessage;
            openModalBtn.disabled = true;
            setTimeout(() => { openModalBtn.textContent = currentTranslations.buttonText; openModalBtn.disabled = false; }, 3000);
        });
    };
    const renderMoods = () => {
        moodSelectorContainer.innerHTML = "";
        const moodLabels = currentTranslations.moods || config.translations.en.moods;
        moodLabels.forEach((label, index) => {
            const moodEl = document.createElement('div');
            moodEl.className = 'mood';
            moodEl.innerHTML = `<svg viewBox="0 0 24 24"><path fill="currentColor" d="${moods_paths[index]}"/></svg><div class="mood-label">${label}</div>`;
            moodEl.addEventListener('click', () => handleMoodClick(index));
            moodSelectorContainer.appendChild(moodEl);
        });
    };
    const openModal = () => document.getElementById('mood-modal').classList.add('visible');
    const closeModal = () => document.getElementById('mood-modal').classList.remove('visible');
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
    openModalBtn.addEventListener('click', openModal);
    closeModalBtn.addEventListener('click', closeModal);
    document.getElementById('mood-modal').addEventListener('click', (e) => { if (e.target.id === 'mood-modal') closeModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && document.getElementById('mood-modal').classList.contains('visible')) closeModal(); });
});
