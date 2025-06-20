document.addEventListener('DOMContentLoaded', () => {
    // --- Inicializace Firebase ---
    try {
        firebase.initializeApp(config.firebaseConfig);
    } catch (e) {
        console.error("Chyba inicializace Firebase. Zkontrolovali jste správně své údaje v config.js?", e);
        alert("Chyba připojení k databázi. Zkontrolujte konzoli pro více informací.");
        return;
    }

    const db = firebase.firestore();
    const statsDocRef = db.collection("moodStats").doc("globalStats");

    // --- Definice elementů a dat (podobně jako dříve) ---
    const moods = [ /* ... pole smajlíků zůstává stejné ... */ 
        { label: 'Hrozně', svg: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-4-6a8.84 8.84 0 0 0 8 0c.55 0 1 .45 1 1s-.45 1-1 1a10.84 10.84 0 0 1-10 0c-.55 0-1-.45-1-1s.45-1 1-1zm1.5-3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/></svg>` }, { label: 'Špatně', svg: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-3.5-6.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zm7 0c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zm-3.5 2c-1.31 0-2.5.38-3.57.97.27.69.93 1.13 1.7 1.13.43 0 .83-.17 1.13-.44.49.19 1.02.34 1.56.41.22.6.82 1.04 1.53 1.04.9 0 1.63-.73 1.63-1.63 0-.69-.44-1.28-1.04-1.53.1-.07.2-.14.28-.21.2-.17.38-.36.54-.57.48.56 1.19.94 2.01.94.83 0 1.5-.67 1.5-1.5S15.33 14 14.5 14c-1.12 0-2.11.53-2.73 1.33-.24-.09-.49-.16-.76-.2.09-.25.19-.5.29-.73h.01c.2-.5.3-1.02.3-1.56 0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5c0 .33.11.65.3.91-.49.33-1.06.6-1.69.81.25.68.91 1.15 1.69 1.15.56 0 1.06-.31 1.34-.76z"/></svg>` }, { label: 'Neutrálně', svg: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-5-6h10v2H7v-2zm1.5-2.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm7 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/></svg>` }, { label: 'Dobře', svg: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/></svg>` }, { label: 'Skvěle', svg: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM8.5 9.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5S10.83 8 10 8s-1.5.67-1.5 1.5zm5.5 0c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5S16.33 8 15.5 8s-1.5.67-1.5 1.5zM12 17.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/></svg>` }];
    const openModalBtn = document.getElementById('open-modal-btn');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const modal = document.getElementById('mood-modal');
    const moodSelectorContainer = document.getElementById('mood-selector-container');
    const themeButtons = document.querySelectorAll('.theme-btn');
    let userHasVotedToday = false; // Lokální proměnná, aby uživatel nemohl hlasovat vícekrát za den

    // --- Zobrazení a logika ---

    function applyConfiguration() { /* ... beze změny ... */ 
        if(typeof config=="undefined"){console.error("Konfigurační soubor (config.js) nebyl nalezen nebo je chybný.");return}document.querySelectorAll("[data-config-key]").forEach(e=>{const o=e.dataset.configKey;config[o]&&(e.tagName=="TITLE"?e.textContent=config[o]:e.innerHTML=config[o])})
    }

    // NOVÉ: Naslouchá změnám v databázi v reálném čase
    statsDocRef.onSnapshot(doc => {
        if (doc.exists) {
            updateStatsDisplay(doc.data());
        } else {
            // Pokud dokument neexistuje, vytvoříme ho s nulovými hodnotami
            statsDocRef.set({ votes: [0, 0, 0, 0, 0], history: [] })
                .catch(e => console.error("Chyba při vytváření dokumentu: ", e));
        }
    }, err => {
        console.error("Chyba při načítání dat z databáze: ", err);
        alert("Nepodařilo se načíst statistiky. Zkuste obnovit stránku.");
    });

    // NOVÉ: Aktualizuje zobrazení statistik na základě dat z databáze
    function updateStatsDisplay(data) {
        const votes = data.votes || [0,0,0,0,0];
        const history = data.history || [];

        const totalVotes = votes.reduce((sum, count) => sum + count, 0);
        
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const todayVotes = history.filter(entry => entry.timestamp.toDate() >= today).length;

        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
        const lastWeekVotes = history.filter(entry => entry.timestamp.toDate() >= sevenDaysAgo).length;

        document.getElementById('stats-total').textContent = totalVotes;
        document.getElementById('stats-today').textContent = todayVotes;
        document.getElementById('stats-last-week').textContent = lastWeekVotes;

        const breakdownText = votes.map((count, index) => {
            const moodIcon = moods[index].svg.replace('<svg', `<svg style="vertical-align: middle; width: 16px; height: 16px;"`);
            return `${moodIcon} ${count}`;
        }).join(' | ');
        document.getElementById('stats-breakdown').innerHTML = breakdownText;
    }

    // UPRAVENO: Po kliknutí posílá data do Firebase
    function handleMoodClick(index) {
        // Zabráníme odeslání, pokud uživatel dnes hlasoval (jen jednoduchá kontrola na straně klienta)
        if (localStorage.getItem('moodTrackerLastVote') === new Date().toDateString()) {
            alert("Dnes jste již hlasoval(a).");
            closeModal();
            return;
        }

        const voteField = `votes.${index}`;
        
        // Použijeme transakci pro bezpečné navýšení počtu hlasů
        db.runTransaction(transaction => {
            return transaction.get(statsDocRef).then(doc => {
                if (!doc.exists) {
                    throw "Dokument neexistuje!";
                }
                
                const newVotes = doc.data().votes || [0,0,0,0,0];
                newVotes[index] = (newVotes[index] || 0) + 1;

                const newHistory = doc.data().history || [];
                newHistory.push({ moodIndex: index, timestamp: new Date() });

                // Prototyp: Omezíme historii na posledních 1000 hlasů, aby dokument příliš nenarostl
                if (newHistory.length > 1000) {
                    newHistory.shift(); 
                }

                transaction.update(statsDocRef, { votes: newVotes, history: newHistory });
            });
        }).then(() => {
            console.log("Hlas byl úspěšně zaznamenán!");
            localStorage.setItem('moodTrackerLastVote', new Date().toDateString());
        }).catch(error => {
            console.error("Chyba při hlasování: ", error);
            alert("Omlouváme se, došlo k chybě při záznamu vašeho hlasu.");
        });

        // UI zpětná vazba zůstává stejná
        closeModal();
        const originalText = config.buttonText || "Jak se teď cítíš?";
        openModalBtn.textContent = config.thankYouMessage || "Děkujeme za hlas!";
        openModalBtn.disabled = true;
        setTimeout(() => {
            openModalBtn.textContent = originalText;
            openModalBtn.disabled = false;
        }, 3000);
    }

    // Zbytek funkcí (renderMoods, open/closeModal, setTheme, initThemes, init) zůstává téměř beze změny
    function renderMoods() { /* ... beze změny ... */ moodSelectorContainer.innerHTML="",moods.forEach((t,e)=>{const o=document.createElement("div");o.className="mood",o.innerHTML=`\n                        ${t.svg}\n                        <div class="mood-label">${t.label}</div>\n                    `,o.addEventListener("click",()=>handleMoodClick(e)),moodSelectorContainer.appendChild(o)}) }
    function openModal() { modal.classList.add('visible'); }
    function closeModal() { modal.classList.remove('visible'); }
    function setTheme(themeName) { /* ... beze změny ... */ document.body.className=`theme-${themeName}`,localStorage.setItem("moodTrackerTheme",themeName),themeButtons.forEach(t=>{t.classList.toggle("active",t.dataset.theme===themeName)}) }
    function initThemes() { /* ... beze změny ... */ const t=localStorage.getItem("moodTrackerTheme")||"default";setTheme(t),themeButtons.forEach(t=>{t.addEventListener("click",()=>{setTheme(t.dataset.theme)})}) }

    function init() {
        applyConfiguration();
        renderMoods();
        initThemes();
        openModalBtn.addEventListener('click', openModal);
        closeModalBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
        document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal.classList.contains('visible')) closeModal(); });
    }

    init();
});
