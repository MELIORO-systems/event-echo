const config = {
    // Demo konfigurace pro měření nálady na konferenci
    projectUrl: window.location.origin + window.location.pathname + "?config=mood",
    projectId: "demo-techconf-2025",
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
            pageTitle: "TechConf 2025 Prague", 
            settingsTitle: "Settings & Global Stats",
            thankYouMessage: "Thank you for sharing your mood!", 
            alreadyVotedMessage: "Demo limit: You can vote once per hour.",
            statsGlobalTitle: "Global Statistics (Demo)", 
            statsGlobalTotal: "Total demo votes:", 
            statsGlobalToday: "Demo votes today:", 
            statsGlobalLastWeek: "Demo votes (7 days):",
            gdprAlertText: "This is a demo. No personal data is stored. 😊",
            scanMeText: "Scan to share your mood!",

            questionSets: {
                mood: {
                    appTitle: "TechConf 2025 Prague", 
                    appSubtitle: "How are you feeling at today's conference?",
                    buttonText: "Share mood", 
                    modalTitle: "What's your current mood?",
                    options: ["Terrible", "Bad", "Neutral", "Good", "Great"],
                    responses: [
                        { text: "Sorry to hear that. Free coffee is available at booth 3!", link: null },
                        { text: "Thanks for your honesty. Is there something specific bothering you?", link: null },
                        { text: "Thanks for the feedback. Enjoy the rest of the program!", link: null },
                        { text: "Great! We're glad you're enjoying the conference.", link: null },
                        { text: "Awesome! Your energy is contagious! 🎉", link: null }
                    ],
                    statsProjectTotal: "Conference moods:",
                    statsProjectBreakdown: "Mood distribution:",
                    statsGlobalBreakdown: "Conference Mood Tracker:"
                },
                // Placeholder pro ostatní typy
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
            pageTitle: "TechConf 2025 Prague", 
            settingsTitle: "Nastavení & Globální statistiky",
            thankYouMessage: "Děkujeme za sdílení nálady!", 
            alreadyVotedMessage: "Demo limit: Hlasovat můžete jednou za hodinu.",
            statsGlobalTitle: "Globální statistiky (Demo)", 
            statsGlobalTotal: "Celkem demo hlasů:", 
            statsGlobalToday: "Demo hlasů dnes:", 
            statsGlobalLastWeek: "Demo hlasů (7 dní):",
            gdprAlertText: "Toto je demo. Žádné osobní údaje se neukládají. 😊",
            scanMeText: "Naskenujte pro sdílení nálady!",

            questionSets: {
                mood: {
                    appTitle: "TechConf 2025 Prague", 
                    appSubtitle: "Jak se cítíte na dnešní konferenci?",
                    buttonText: "Sdílet náladu", 
                    modalTitle: "Jaká je vaše aktuální nálada?",
                    options: ["Hrozně", "Špatně", "Neutrálně", "Dobře", "Skvěle"],
                    responses: [
                        { text: "To nás mrzí. Káva zdarma je u stánku 3, třeba pomůže!", link: null },
                        { text: "Děkujeme za upřímnost. Něco konkrétního vás trápí?", link: null },
                        { text: "Díky za feedback. Užijte si další program!", link: null },
                        { text: "Skvěle! Těší nás, že se vám konference líbí.", link: null },
                        { text: "Paráda! Vaše energie je nakažlivá! 🎉", link: null }
                    ],
                    statsProjectTotal: "Nálady na konferenci:",
                    statsProjectBreakdown: "Rozložení nálad:",
                    statsGlobalBreakdown: "Měřič nálady konference:"
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
