const config = {
    // Demo konfigurace pro kontrolu porozumění
    projectUrl: window.location.origin + window.location.pathname + "?config=understanding",
    projectId: "demo-understanding-2025",
    votingFrequency: 'hourly', // Pro demo - možnost hlasovat každou hodinu
    activeQuestionSet: 'understanding', // Přednastaveno na kontrolu porozumění
    
    backgroundImage: {
        filename: "",
        recommended_width: "500px",
        recommended_height: "750px",
        recommended_format: "JPG, PNG, WEBP"
    },

    translations: {
        en: { 
            pageTitle: "Understanding Check Demo - Event Echo", 
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
                understanding: {
                    appTitle: "Understanding Check Demo", 
                    appSubtitle: "Test how well topics are understood!",
                    buttonText: "How well do you understand?", 
                    modalTitle: "How well do you understand the topic?",
                    options: ["Not at all", "A little", "Well", "Mostly", "Perfectly"],
                    responses: [
                        { text: "Thanks for trying! In real events, this helps speakers adjust their pace.", link: null },
                        { text: "Your feedback helps! This shows when clarification is needed.", link: null },
                        { text: "Good understanding! This demo shows positive comprehension.", link: null },
                        { text: "Great! You're following along well in this demo.", link: null },
                        { text: "Perfect! You've mastered how the understanding check works.", link: null }
                    ],
                    statsProjectTotal: "Demo responses:",
                    statsProjectBreakdown: "Understanding levels (demo):",
                    statsGlobalBreakdown: "Global Understanding Demo:"
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
            pageTitle: "Demo Kontrola porozumění - Event Echo", 
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
                understanding: {
                    appTitle: "Demo Kontrola porozumění", 
                    appSubtitle: "Otestujte, jak dobře jsou témata pochopena!",
                    buttonText: "Jak tomu rozumíte?", 
                    modalTitle: "Jak dobře rozumíte tématu?",
                    options: ["Vůbec", "Trochu", "Dobře", "Většinou", "Perfektně"],
                    responses: [
                        { text: "Díky za vyzkoušení! Na skutečných akcích to pomáhá přednášejícím upravit tempo.", link: null },
                        { text: "Vaše zpětná vazba pomáhá! Ukazuje, kdy je potřeba vysvětlení.", link: null },
                        { text: "Dobré porozumění! Demo ukazuje pozitivní pochopení.", link: null },
                        { text: "Skvěle! V tomto demu to chápete dobře.", link: null },
                        { text: "Perfektní! Ovládáte, jak kontrola porozumění funguje.", link: null }
                    ],
                    statsProjectTotal: "Demo odpovědí:",
                    statsProjectBreakdown: "Úrovně porozumění (demo):",
                    statsGlobalBreakdown: "Globální demo porozumění:"
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
