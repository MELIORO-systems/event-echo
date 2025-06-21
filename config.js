const config = {
    // DŮLEŽITÉ: Vložte sem URL adresu, kde je nasazena vaše hlavní aplikace (index.html)
    // Příklad: "https://uzivatel.github.io/mereni-nalady/"
    projectUrl: "https://melioro-systems.github.io/mereni-nalady-web/", 

    // DŮLEŽITÉ: Změňte pro každou kopii/nasazení aplikace na unikátní název!
    // Příklad: "svatba-jana-a-eva-2025"
    projectId: "default-project-id", 
    
    // Jak často může uživatel hlasovat? Možnosti: 'daily', 'hourly', 'once'
    votingFrequency: 'hourly',

    // Nastavení obrázku na pozadí hlavní aplikace
    backgroundImage: {
        filename: "pozadi.png", // např. "pozadi.jpg". Pokud je prázdné, obrázek se nezobrazí.
        recommended_width: "500px",
        recommended_height: "750px",
        recommended_format: "JPG, PNG, WEBP"
    },

    translations: {
        en: { 
            pageTitle: "Mini-App: Mood Tracker", appTitle: "Mood Tracker", appSubtitle: "Help us track the community's current mood!", 
            buttonText: "How are you feeling right now?", modalTitle: "How are you feeling right now?", settingsTitle: "Settings & Global Stats", 
            thankYouMessage: "Thank you for your vote!", alreadyVotedMessage: "You have already voted. Please try again later.",
            moods: ["Terrible", "Bad", "Neutral", "Good", "Great"],
            responses: [
                { text: "We're sorry to hear that. Maybe some jokes will cheer you up?", link: { text: "Show me jokes", url: "https://www.rd.com/list/funniest-jokes-of-all-time/" } },
                { text: "Hope things get better soon!", link: null }, { text: "Thanks for your feedback.", link: null },
                { text: "Glad to hear that!", link: null }, { text: "Awesome! Keep up the great mood.", link: null }
            ],
            statsProjectTotal: "Votes in this project:", statsProjectBreakdown: "Moods in this project:", 
            statsGlobalTitle: "Global Statistics (All Projects)", statsGlobalTotal: "Total votes (global):", 
            statsGlobalToday: "Today (global):", statsGlobalLastWeek: "Last 7 days (global):", statsGlobalBreakdown: "Moods (global):",
            footerText: 'Made with <span class="heart-icon">❤️</span> by <a href="https://melioro.cz" target="_blank" rel="noopener noreferrer">MELIORO Systems</a>',
            gdprLinkText: "GDPR Consent",
            gdprAlertText: "I acknowledge that this mini-application does not store or process any personal data. 😊",
            scanMeText: "Scan the code and vote!"
        },
        cs: { 
            pageTitle: "Mini-aplikace: Měřič nálady", appTitle: "Měřič nálady", appSubtitle: "Pomozte nám sledovat aktuální náladu v komunitě!", 
            buttonText: "Jak se teď cítíš?", modalTitle: "Jak se teď cítíš?", settingsTitle: "Nastavení & Globální statistiky", 
            thankYouMessage: "Děkujeme za hlas!", alreadyVotedMessage: "Dnes jste již hlasoval(a). Zkuste to prosím později.",
            moods: ["Hrozně", "Špatně", "Neutrálně", "Dobře", "Skvěle"],
            responses: [
                { text: "To nás mrzí. Třeba vám zvedne náladu pár vtipů?", link: { text: "Ukaž vtipy", url: "https://www.vtipnicek.cz/nejlepsi-vtipy" } },
                { text: "Snad bude brzy lépe!", link: null }, { text: "Děkujeme za zpětnou vazbu.", link: null },
                { text: "To rádi slyšíme!", link: null }, { text: "Paráda! Udržte si skvělou náladu.", link: null }
            ],
            statsProjectTotal: "Hlasů v tomto projektu:", statsProjectBreakdown: "Nálady v tomto projektu:", 
            statsGlobalTitle: "Globální statistiky (všechny projekty)", statsGlobalTotal: "Celkem hlasů (globálně):", 
            statsGlobalToday: "Dnes (globálně):", statsGlobalLastWeek: "Posledních 7 dní (globálně):", statsGlobalBreakdown: "Nálady (globálně):",
            footerText: 'S <span class="heart-icon">❤️</span> vyrobilo <a href="https://melioro.cz" target="_blank" rel="noopener noreferrer">MELIORO Systems</a>',
            gdprLinkText: "Souhlas s GDPR",
            gdprAlertText: "Beru na vědomí, že tato mini-aplikace neukládá ani nepracuje s žádnými osobními údaji. 😊",
            scanMeText: "Naskenujte kód a hlasujte!"
        }
    },
    
    // Tyto údaje získáte podle návodu v Části 2
    firebaseConfig: {
        apiKey: "AIzaSyBZVkwEynmCEFaxBv2b2B9FSqGYu4OLjUY",
        authDomain: "mereni-nalady-web.firebaseapp.com",
        projectId: "mereni-nalady-web",
        storageBucket: "mereni-nalady-web.firebasestorage.app",
        messagingSenderId: "478918382129",
        appId: "1:478918382129:web:a7bb4c8833310a72a2bb10"
    }
};
