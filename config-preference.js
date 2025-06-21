const config = {
    // Demo konfigurace pro průzkum líbivosti
    projectUrl: window.location.origin + window.location.pathname + "?config=preference",
    projectId: "demo-preference-2025",
    votingFrequency: 'hourly', // Pro demo - možnost hlasovat každou hodinu
    activeQuestionSet: 'preference', // Přednastaveno na průzkum líbivosti
    
    backgroundImage: {
        filename: "",
        recommended_width: "500px",
        recommended_height: "750px",
        recommended_format: "JPG, PNG, WEBP"
    },

    translations: {
        en: { 
            pageTitle: "Preference Poll Demo - Event Echo", 
            settingsTitle: "Settings & Global Stats",
            thankYouMessage: "Thank you for trying our demo!", 
            alreadyVotedMessage: "Demo limit: You can vote once per hour.",
            statsGlobalTitle: "Global Statistics (Demo)", 
            statsGlobalTotal: "Total demo votes:", 
            statsGlobalToday: "Demo votes today:", 
            statsGlobalLastWeek: "Demo votes (7 days):",
            gdprAlertText: "This is a demo. No personal data is stored. 😊",
            scanMeText: "Scan to try the demo!",

            questionSets: {
                preference: {
                    appTitle: "Preference Poll Demo", 
                    appSubtitle: "Rate products, ideas, or presentations!",
                    buttonText: "How much do you like this?", 
                    modalTitle: "How much do you like this?",
                    options: ["Don't like it", "It's okay", "It's good", "I like it", "I love it"],
                    responses: [
                        { text: "Thanks for trying! In real events, this helps gather honest feedback.", link: null },
                        { text: "Your rating helps! This demo shows neutral responses.", link: null },
                        { text: "Good rating! This demonstrates positive feedback collection.", link: null },
                        { text: "Great to see you like it! The preference poll is working well.", link: null },
                        { text: "Amazing! You've experienced how preference polling works.", link: null }
                    ],
                    statsProjectTotal: "Demo votes:",
                    statsProjectBreakdown: "Preference ratings (demo):",
                    statsGlobalBreakdown: "Global Preference Demo:"
                },
                // Placeholder pro ostatní typy
                mood: {
                    appTitle: "Not Available in This Demo",
                    appSubtitle: "Please use config=mood",
                    buttonText: "Not Available",
                    modalTitle: "Not Available",
                    options: ["N/A", "N/A", "N/A", "N/A", "N/A"],
                    responses: [
                        { text: "Please use ?config=mood for this demo", link: null },
                        { text: "Please use ?config=mood for this demo", link: null },
                        { text: "Please use ?config=mood for this demo", link: null },
                        { text: "Please use ?config=mood for this demo", link: null },
                        { text: "Please use ?config=mood for this demo", link: null }
                    ],
                    statsProjectTotal: "N/A",
                    statsProjectBreakdown: "N/A",
                    statsGlobalBreakdown: "N/A"
                },
                understanding: {
                    appTitle: "Not Available in This Demo",
                    appSubtitle: "Please use config=understanding",
                    buttonText: "Not Available",
                    modalTitle: "Not Available",
                    options: ["N/A", "N/A", "N/A", "N/A", "N/A"],
                    responses: [
                        { text: "Please use ?config=understanding for this demo", link: null },
                        { text: "Please use ?config=understanding for this demo", link: null },
                        { text: "Please use ?config=understanding for this demo", link: null },
                        { text: "Please use ?config=understanding for this demo", link: null },
                        { text: "Please use ?config=understanding for this demo", link: null }
                    ],
                    statsProjectTotal: "N/A",
                    statsProjectBreakdown: "N/A",
                    statsGlobalBreakdown: "N/A"
                },
                agreement: {
                    appTitle: "Not Available in This Demo",
                    appSubtitle: "Please use config=agreement",
                    buttonText: "Not Available",
                    modalTitle: "Not Available",
                    options: ["N/A", "N/A", "N/A", "N/A", "N/A"],
                    responses: [
                        { text: "Please use ?config=agreement for this demo", link: null },
                        { text: "Please use ?config=agreement for this demo", link: null },
                        { text: "Please use ?config=agreement for this demo", link: null },
                        { text: "Please use ?config=agreement for this demo", link: null },
                        { text: "Please use ?config=agreement for this demo", link: null }
                    ],
                    statsProjectTotal: "N/A",
                    statsProjectBreakdown: "N/A",
                    statsGlobalBreakdown: "N/A"
                }
            }
        },
        cs: { 
            pageTitle: "Demo Průzkum líbivosti - Event Echo", 
            settingsTitle: "Nastavení & Globální statistiky",
            thankYouMessage: "Děkujeme za vyzkoušení dema!", 
            alreadyVotedMessage: "Demo limit: Hlasovat můžete jednou za hodinu.",
            statsGlobalTitle: "Globální statistiky (Demo)", 
            statsGlobalTotal: "Celkem demo hlasů:", 
            statsGlobalToday: "Demo hlasů dnes:", 
            statsGlobalLastWeek: "Demo hlasů (7 dní):",
            gdprAlertText: "Toto je demo. Žádné osobní údaje se neukládají. 😊",
            scanMeText: "Naskenujte pro vyzkoušení!",

            questionSets: {
                preference: {
                    appTitle: "Demo Průzkum líbivosti", 
                    appSubtitle: "Ohodnoťte produkty, nápady nebo prezentace!",
                    buttonText: "Jak se vám to líbí?", 
                    modalTitle: "Jak moc se vám to líbí?",
                    options: ["Vůbec ne", "Ujde to", "Je to dobré", "Líbí se mi to", "Je to super"],
                    responses: [
                        { text: "Díky za vyzkoušení! Na skutečných akcích to pomáhá sbírat upřímnou zpětnou vazbu.", link: null },
                        { text: "Vaše hodnocení pomáhá! Demo ukazuje neutrální reakce.", link: null },
                        { text: "Dobré hodnocení! Demonstruje sběr pozitivní zpětné vazby.", link: null },
                        { text: "Skvěle, že se vám to líbí! Průzkum líbivosti funguje dobře.", link: null },
                        { text: "Úžasné! Vyzkoušeli jste, jak funguje průzkum preferencí.", link: null }
                    ],
                    statsProjectTotal: "Demo hlasů:",
                    statsProjectBreakdown: "Hodnocení líbivosti (demo):",
                    statsGlobalBreakdown: "Globální demo líbivosti:"
                },
                // Placeholder pro ostatní typy
                mood: {
                    appTitle: "Není dostupné v tomto demu",
                    appSubtitle: "Použijte config=mood",
                    buttonText: "Není dostupné",
                    modalTitle: "Není dostupné",
                    options: ["N/A", "N/A", "N/A", "N/A", "N/A"],
                    responses: [
                        { text: "Použijte ?config=mood pro toto demo", link: null },
                        { text: "Použijte ?config=mood pro toto demo", link: null },
                        { text: "Použijte ?config=mood pro toto demo", link: null },
                        { text: "Použijte ?config=mood pro toto demo", link: null },
                        { text: "Použijte ?config=mood pro toto demo", link: null }
                    ],
                    statsProjectTotal: "N/A",
                    statsProjectBreakdown: "N/A",
                    statsGlobalBreakdown: "N/A"
                },
                understanding: {
                    appTitle: "Není dostupné v tomto demu",
                    appSubtitle: "Použijte config=understanding",
                    buttonText: "Není dostupné",
                    modalTitle: "Není dostupné",
                    options: ["N/A", "N/A", "N/A", "N/A", "N/A"],
                    responses: [
                        { text: "Použijte ?config=understanding pro toto demo", link: null },
                        { text: "Použijte ?config=understanding pro toto demo", link: null },
                        { text: "Použijte ?config=understanding pro toto demo", link: null },
                        { text: "Použijte ?config=understanding pro toto demo", link: null },
                        { text: "Použijte ?config=understanding pro toto demo", link: null }
                    ],
                    statsProjectTotal: "N/A",
                    statsProjectBreakdown: "N/A",
                    statsGlobalBreakdown: "N/A"
                },
                agreement: {
                    appTitle: "Není dostupné v tomto demu",
                    appSubtitle: "Použijte config=agreement",
                    buttonText: "Není dostupné",
                    modalTitle: "Není dostupné",
                    options: ["N/A", "N/A", "N/A", "N/A", "N/A"],
                    responses: [
                        { text: "Použijte ?config=agreement pro toto demo", link: null },
                        { text: "Použijte ?config=agreement pro toto demo", link: null },
                        { text: "Použijte ?config=agreement pro toto demo", link: null },
                        { text: "Použijte ?config=agreement pro toto demo", link: null },
                        { text: "Použijte ?config=agreement pro toto demo", link: null }
                    ],
                    statsProjectTotal: "N/A",
                    statsProjectBreakdown: "N/A",
                    statsGlobalBreakdown: "N/A"
                }
            }
        }
    },
    
    // Demo Firebase konfigurace - použijte vlastní pro produkci!
    firebaseConfig: {
        apiKey: "AIzaSyBZVkwEynmCEFaxBv2b2B9FSqGYu4OLjUY",
        authDomain: "mereni-nalady-web.firebaseapp.com",
        projectId: "mereni-nalady-web",
        storageBucket: "mereni-nalady-web.firebasestorage.app",
        messagingSenderId: "478918382129",
        appId: "1:478918382129:web:a7bb4c8833310a72a2bb10"
    }
};
