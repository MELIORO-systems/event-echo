const config = {
    // Demo konfigurace pro školení Excel
    projectUrl: window.location.origin + window.location.pathname + "?config=understanding",
    projectId: "demo-excel-training-2025",
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
            pageTitle: "Excel Advanced - Training", 
            settingsTitle: "Settings & Global Stats",
            thankYouMessage: "Thank you for your feedback!", 
            alreadyVotedMessage: "Demo limit: You can vote once per hour.",
            statsGlobalTitle: "Global Statistics (Demo)", 
            statsGlobalTotal: "Total demo votes:", 
            statsGlobalToday: "Demo votes today:", 
            statsGlobalLastWeek: "Demo votes (7 days):",
            gdprAlertText: "This is a demo. No personal data is stored. 😊",
            scanMeText: "Scan to check your understanding!",

            questionSets: {
                understanding: {
                    appTitle: "Excel Advanced - Training", 
                    appSubtitle: "Make sure you don't miss anything",
                    buttonText: "How am I doing?", 
                    modalTitle: "How well do you understand the material?",
                    options: ["Not at all", "A little", "Well", "Mostly", "Perfectly"],
                    responses: [
                        { text: "No worries! Break in 10 minutes - ask the instructor.", link: null },
                        { text: "Hang in there, it will gradually make sense. Ask questions!", link: null },
                        { text: "Excellent! You're on the right track.", link: null },
                        { text: "Great! You're almost an Excel guru!", link: null },
                        { text: "Excellent! You're ready for practice! 💪", link: null }
                    ],
                    statsProjectTotal: "Training responses:",
                    statsProjectBreakdown: "Understanding levels:",
                    statsGlobalBreakdown: "Training Understanding Check:"
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
                    appTitle: "Excel pro pokročilé - Školení", 
                    appSubtitle: "Ujistěte se, že vám nic neuniklo",
                    buttonText: "Jak mi to jde?", 
                    modalTitle: "Jak dobře rozumíte probírané látce?",
                    options: ["Vůbec", "Trochu", "Dobře", "Většinou", "Perfektně"],
                    responses: [
                        { text: "Žádný strach! Přestávka za 10 minut - zeptejte se lektora.", link: null },
                        { text: "Držte se, postupně to dává smysl. Ptejte se!", link: null },
                        { text: "Výborně! Jste na dobré cestě.", link: null },
                        { text: "Skvělé! Jste skoro Excel guru!", link: null },
                        { text: "Excelentní! Jste připraveni na praxi! 💪", link: null }
                    ],
                    statsProjectTotal: "Odpovědi ze školení:",
                    statsProjectBreakdown: "Úrovně porozumění:",
                    statsGlobalBreakdown: "Kontrola porozumění školení:"
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
