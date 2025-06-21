// Relevantní část kódu pro opravu globálních statistik
// Toto nahradí sekci od řádku cca 280 v původním script.js

if (globalStatsCollectionRef) {
    globalStatsCollectionRef.onSnapshot(snapshot => {
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
        
        snapshot.forEach(doc => {
            const data = doc.data();
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
            }
            
            statItem.innerHTML = `
                <span class="stat-label">${breakdownTitle}</span>
                <span class="stat-value breakdown">${breakdownHTML}</span>
            `;
            globalBreakdownContainer.appendChild(statItem);
        });

    }, err => console.error("Chyba při načítání globálních statistik: ", err));
}
