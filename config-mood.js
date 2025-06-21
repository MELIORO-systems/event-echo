const config = {
    // Demo konfigurace pro měření nálady
    projectUrl: window.location.origin + window.location.pathname + "?config=mood",
    projectId: "demo-mood-2025",
    votingFrequency: 'hourly', // Pro demo - možnost hlasovat každou hodinu
    activeQuestionSet: 'mood', // Přednastaveno na měření nálady
    
    backgroundImage: {
        filename: "",
        recommended_width: "500px",
        recommended_height: "750px",
        recommended_format: "JPG, PNG, WEBP"
    },

    translations: {
        en: { 
            pageTitle: "Mood Meter Demo - Event Echo", 
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
                mood: {
                    appTitle: "Mood Meter Demo", 
                    appSubtitle: "Try our mood tracking feature!",
                    buttonText: "How are you feeling?", 
                    modalTitle: "How are you feeling right now?",
                    options: ["Terrible", "Bad", "Neutral", "Good", "Great"],
                    responses: [
                        { text: "Thanks for trying! In real events, this helps organizers understand the atmosphere.", link: null },
                        { text: "Your feedback helps! This demo shows how mood tracking works.", link: null },
                        { text: "Neutral is normal! Thanks for testing our demo.", link: null },
                        { text: "Great to hear! This is how positive feedback looks.", link: null },
                        { text: "Awesome! You've seen how the mood meter works.", link: null }
                    ],
                    statsProjectTotal: "Demo votes:",
                    statsProjectBreakdown: "Mood distribution (demo):",
                    statsGlobalBreakdown: "Global Mood Demo:"
                },
                // Ostatní typy nejsou potřeba, protože toto je demo pouze pro mood
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
                preference: {
                    appTitle: "Not Available in This Demo",
                    appSubtitle: "Please use config=preference",
                    buttonText: "Not Available",
                    modalTitle: "Not Available",
                    options: ["N/A", "N/A", "N/A", "N/A", "N/A"],
                    responses: [
                        { text: "Please use ?config=preference for this demo", link: null },
                        { text: "Please use ?config=preference for this demo", link: null },
                        { text: "Please use ?config=preference for this demo", link: null },
                        { text: "Please use ?config=preference for this demo", link: null },
                        { text: "Please use ?config=preference for this demo", link: null }
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
            pageTitle: "Demo Měřič nálady - Event Echo", 
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
                mood: {
                    appTitle: "Demo Měřič nálady", 
                    appSubtitle: "Vyzkoušejte měření nálady!",
                    buttonText: "Jak se teď cítíš?", 
                    modalTitle: "Jak se teď cítíš?",
                    options: ["Hrozně", "Špatně", "Neutrálně", "Dobře", "Skvěle"],
                    responses: [
                        { text: "Díky za vyzkoušení! Na skutečných akcích to pomáhá organizátorům.", link: null },
                        { text: "Vaše zpětná vazba pomáhá! Toto demo ukazuje funkci měření nálady.", link: null },
                        { text: "Neutrální je normální! Díky za otestování.", link: null },
                        { text: "Skvěle! Takto vypadá pozitivní zpětná vazba.", link: null },
                        { text: "Paráda! Viděli jste, jak měřič nálady funguje.", link: null }
                    ],
                    statsProjectTotal: "Demo hlasů:",
                    statsProjectBreakdown: "Rozložení nálady (demo):",
                    statsGlobalBreakdown: "Globální demo nálady:"
                },
                // Placeholder pro ostatní typy
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
                preference: {
                    appTitle: "Není dostupné v tomto demu",
                    appSubtitle: "Použijte config=preference",
                    buttonText: "Není dostupné",
                    modalTitle: "Není dostupné",
                    options: ["N/A", "N/A", "N/A", "N/A", "N/A"],
                    responses: [
                        { text: "Použijte ?config=preference pro toto demo", link: null },
                        { text: "Použijte ?config=preference pro toto demo", link: null },
                        { text: "Použijte ?config=preference pro toto demo", link: null },
                        { text: "Použijte ?config=preference pro toto demo", link: null },
                        { text: "Použijte ?config=preference pro toto demo", link: null }
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
