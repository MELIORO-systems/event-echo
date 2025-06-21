const config = {
    // Demo konfigurace pro hlasování o souhlasu
    projectUrl: window.location.origin + window.location.pathname + "?config=agreement",
    projectId: "demo-agreement-2025",
    votingFrequency: 'hourly', // Pro demo - možnost hlasovat každou hodinu
    activeQuestionSet: 'agreement', // Přednastaveno na hlasování o souhlasu
    
    backgroundImage: {
        filename: "",
        recommended_width: "500px",
        recommended_height: "750px",
        recommended_format: "JPG, PNG, WEBP"
    },

    translations: {
        en: { 
            pageTitle: "Agreement Vote Demo - Event Echo", 
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
                agreement: {
                    appTitle: "Agreement Vote Demo", 
                    appSubtitle: "Test decision-making and consensus building!",
                    buttonText: "Do you agree?", 
                    modalTitle: "What is your level of agreement?",
                    options: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"],
                    responses: [
                        { text: "Thanks for trying! In real events, this helps understand opposition.", link: null },
                        { text: "Your vote matters! This demo shows how disagreement is tracked.", link: null },
                        { text: "Neutral stance noted! This demonstrates balanced voting.", link: null },
                        { text: "Great! Agreement voting helps build consensus.", link: null },
                        { text: "Strong support! You've seen how agreement polling works.", link: null }
                    ],
                    statsProjectTotal: "Demo votes:",
                    statsProjectBreakdown: "Agreement levels (demo):",
                    statsGlobalBreakdown: "Global Agreement Demo:"
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
                }
            }
        },
        cs: { 
            pageTitle: "Demo Hlasování o souhlasu - Event Echo", 
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
                agreement: {
                    appTitle: "Demo Hlasování o souhlasu", 
                    appSubtitle: "Otestujte rozhodování a budování konsenzu!",
                    buttonText: "Souhlasíte?", 
                    modalTitle: "Jaká je vaše míra souhlasu?",
                    options: ["Zásadně nesouhlasím", "Nesouhlasím", "Neutrální", "Souhlasím", "Zcela souhlasím"],
                    responses: [
                        { text: "Díky za vyzkoušení! Na skutečných akcích to pomáhá pochopit opozici.", link: null },
                        { text: "Váš hlas je důležitý! Demo ukazuje, jak se sleduje nesouhlas.", link: null },
                        { text: "Neutrální postoj zaznamenán! Demonstruje vyvážené hlasování.", link: null },
                        { text: "Skvěle! Hlasování o souhlasu pomáhá budovat konsenzus.", link: null },
                        { text: "Silná podpora! Viděli jste, jak funguje hlasování o souhlasu.", link: null }
                    ],
                    statsProjectTotal: "Demo hlasů:",
                    statsProjectBreakdown: "Úrovně souhlasu (demo):",
                    statsGlobalBreakdown: "Globální demo souhlasu:"
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
