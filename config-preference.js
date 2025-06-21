const config = {
    // Demo konfigurace pro prezentaci nového designu
    projectUrl: window.location.origin + window.location.pathname + "?config=preference",
    projectId: "demo-design-presentation-2025",
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
            pageTitle: "New Design Presentation", 
            settingsTitle: "Settings & Global Stats",
            thankYouMessage: "Thank you for your rating!", 
            alreadyVotedMessage: "Demo limit: You can vote once per hour.",
            statsGlobalTitle: "Global Statistics (Demo)", 
            statsGlobalTotal: "Total demo votes:", 
            statsGlobalToday: "Demo votes today:", 
            statsGlobalLastWeek: "Demo votes (7 days):",
            gdprAlertText: "This is a demo. No personal data is stored. 😊",
            scanMeText: "Scan to rate our design!",

            questionSets: {
                preference: {
                    appTitle: "New Design Presentation", 
                    appSubtitle: "Your opinions shape our products",
                    buttonText: "Rate the design", 
                    modalTitle: "How do you like the new design?",
                    options: ["Don't like it", "It's okay", "It's good", "I like it", "I love it"],
                    responses: [
                        { text: "Thank you for your honest feedback. Every opinion helps us improve our products.", link: null },
                        { text: "We appreciate your opinion. We're working on design improvements.", link: null },
                        { text: "Thank you! Your opinion is important to us.", link: null },
                        { text: "Great! We look forward to launching the new design.", link: null },
                        { text: "Wow! You're our new design ambassador! 🏆", link: null }
                    ],
                    statsProjectTotal: "Design ratings:",
                    statsProjectBreakdown: "Rating distribution:",
                    statsGlobalBreakdown: "Design Preference Poll:"
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
                    appTitle: "Představení nového designu", 
                    appSubtitle: "Vaše názory formují naše produkty",
                    buttonText: "Ohodnotit design", 
                    modalTitle: "Jak se vám líbí nový design?",
                    options: ["Vůbec ne", "Ujde to", "Je to dobré", "Líbí se mi to", "Je to super"],
                    responses: [
                        { text: "Děkujeme za upřímnou zpětnou vazbu. Každý názor nám pomáhá vylepšovat naše produkty.", link: null },
                        { text: "Oceňujeme váš názor. Pracujeme na vylepšeních designu.", link: null },
                        { text: "Děkujeme! Váš názor je pro nás důležitý.", link: null },
                        { text: "Super! Těšíme se, až nový design spustíme.", link: null },
                        { text: "Wow! Jste náš nový designový ambasador! 🏆", link: null }
                    ],
                    statsProjectTotal: "Hodnocení designu:",
                    statsProjectBreakdown: "Rozložení hodnocení:",
                    statsGlobalBreakdown: "Průzkum líbivosti designu:"
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
