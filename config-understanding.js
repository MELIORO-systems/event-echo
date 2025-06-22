const config = {
    // Demo konfigurace pro školení Excel
    projectUrl: window.location.origin + window.location.pathname + "?config=understanding",
    projectId: "demo-excel-training-2025",
    votingFrequency: 'hourly', // Pro demo - možnost hlasovat každou hodinu
    activeQuestionSet: 'understanding', // Přednastaveno na kontrolu porozumění
    defaultTheme: 'forest', // Zelený motiv pro školení
    
    backgroundImage: {
        filename: "pozadi-understanding.png",
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
            statsGlobalTitle: "Global Statistics", 
            statsGlobalTotal: "Total votes:", 
            statsGlobalToday: "Votes today:", 
            statsGlobalLastWeek: "Votes (7 days):",
            gdprAlertText: "This is a demo. No personal data is stored. 😊",
            scanMeText: "Scan to check your understanding!",

            questionSets: {
                mood: {
                    appTitle: "Mood Meter",
                    appSubtitle: "Track the current mood",
                    buttonText: "How are you feeling?",
                    modalTitle: "How are you feeling?",
                    options: ["Terrible", "Bad", "Neutral", "Good", "Great"],
                    responses: [
                        { text: "This feature is not active in this demo configuration", link: null },
                        { text: "This feature is not active in this demo configuration", link: null },
                        { text: "This feature is not active in this demo configuration", link: null },
                        { text: "This feature is not active in this demo configuration", link: null },
                        { text: "This feature is not active in this demo configuration", link: null }
                    ],
                    statsProjectTotal: "Mood votes:",
                    statsProjectBreakdown: "Mood distribution:",
                    statsGlobalBreakdown: "Global Mood Distribution:"
                },
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
                    statsGlobalBreakdown: "Global Understanding Level:"
                },
                preference: {
                    appTitle: "Preference Poll",
                    appSubtitle: "Rate your preference",
                    buttonText: "How much do you like this?",
                    modalTitle: "How much do you like this?",
                    options: ["Don't like it", "It's okay", "It's good", "I like it", "I love it"],
                    responses: [
                        { text: "This feature is not active in this demo configuration", link: null },
                        { text: "This feature is not active in this demo configuration", link: null },
                        { text: "This feature is not active in this demo configuration", link: null },
                        { text: "This feature is not active in this demo configuration", link: null },
                        { text: "This feature is not active in this demo configuration", link: null }
                    ],
                    statsProjectTotal: "Preference votes:",
                    statsProjectBreakdown: "Preference distribution:",
                    statsGlobalBreakdown: "Global Preference Distribution:"
                },
                agreement: {
                    appTitle: "Agreement Vote",
                    appSubtitle: "Share your agreement level",
                    buttonText: "Do you agree?",
                    modalTitle: "What is your level of agreement?",
                    options: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"],
                    responses: [
                        { text: "This feature is not active in this demo configuration", link: null },
                        { text: "This feature is not active in this demo configuration", link: null },
                        { text: "This feature is not active in this demo configuration", link: null },
                        { text: "This feature is not active in this demo configuration", link: null },
                        { text: "This feature is not active in this demo configuration", link: null }
                    ],
                    statsProjectTotal: "Agreement votes:",
                    statsProjectBreakdown: "Agreement distribution:",
                    statsGlobalBreakdown: "Global Agreement Distribution:"
                }
            }
        },
        cs: { 
            pageTitle: "Excel pro pokročilé - Školení", 
            settingsTitle: "Nastavení & Globální statistiky",
            thankYouMessage: "Děkujeme za zpětnou vazbu!", 
            alreadyVotedMessage: "Demo limit: Hlasovat můžete jednou za hodinu.",
            statsGlobalTitle: "Globální statistiky", 
            statsGlobalTotal: "Celkem hlasů:", 
            statsGlobalToday: "Hlasů dnes:", 
            statsGlobalLastWeek: "Hlasů (7 dní):",
            gdprAlertText: "Toto je demo. Žádné osobní údaje se neukládají. 😊",
            scanMeText: "Naskenujte pro kontrolu porozumění!",

            questionSets: {
                mood: {
                    appTitle: "Měřič nálady",
                    appSubtitle: "Sledujte aktuální náladu",
                    buttonText: "Jak se cítíte?",
                    modalTitle: "Jak se cítíte?",
                    options: ["Hrozně", "Špatně", "Neutrálně", "Dobře", "Skvěle"],
                    responses: [
                        { text: "Tato funkce není v této demo konfiguraci aktivní", link: null },
                        { text: "Tato funkce není v této demo konfiguraci aktivní", link: null },
                        { text: "Tato funkce není v této demo konfiguraci aktivní", link: null },
                        { text: "Tato funkce není v této demo konfiguraci aktivní", link: null },
                        { text: "Tato funkce není v této demo konfiguraci aktivní", link: null }
                    ],
                    statsProjectTotal: "Hlasy nálady:",
                    statsProjectBreakdown: "Rozložení nálady:",
                    statsGlobalBreakdown: "Globální rozložení nálad:"
                },
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
                    statsGlobalBreakdown: "Globální úroveň porozumění:"
                },
                preference: {
                    appTitle: "Průzkum líbivosti",
                    appSubtitle: "Ohodnoťte svou preferenci",
                    buttonText: "Jak se vám to líbí?",
                    modalTitle: "Jak moc se vám to líbí?",
                    options: ["Vůbec ne", "Ujde to", "Je to dobré", "Líbí se mi to", "Je to super"],
                    responses: [
                        { text: "Tato funkce není v této demo konfiguraci aktivní", link: null },
                        { text: "Tato funkce není v této demo konfiguraci aktivní", link: null },
                        { text: "Tato funkce není v této demo konfiguraci aktivní", link: null },
                        { text: "Tato funkce není v této demo konfiguraci aktivní", link: null },
                        { text: "Tato funkce není v této demo konfiguraci aktivní", link: null }
                    ],
                    statsProjectTotal: "Hlasy líbivosti:",
                    statsProjectBreakdown: "Rozložení líbivosti:",
                    statsGlobalBreakdown: "Globální rozložení líbivosti:"
                },
                agreement: {
                    appTitle: "Hlasování o souhlasu",
                    appSubtitle: "Vyjádřete míru souhlasu",
                    buttonText: "Souhlasíte?",
                    modalTitle: "Jaká je vaše míra souhlasu?",
                    options: ["Zásadně nesouhlasím", "Nesouhlasím", "Neutrální", "Souhlasím", "Zcela souhlasím"],
                    responses: [
                        { text: "Tato funkce není v této demo konfiguraci aktivní", link: null },
                        { text: "Tato funkce není v této demo konfiguraci aktivní", link: null },
                        { text: "Tato funkce není v této demo konfiguraci aktivní", link: null },
                        { text: "Tato funkce není v této demo konfiguraci aktivní", link: null },
                        { text: "Tato funkce není v této demo konfiguraci aktivní", link: null }
                    ],
                    statsProjectTotal: "Hlasy souhlasu:",
                    statsProjectBreakdown: "Rozložení souhlasu:",
                    statsGlobalBreakdown: "Globální rozložení souhlasu:"
                }
            }
        }
    },
    
    // Demo Firebase konfigurace
    firebaseConfig: {
        apiKey: "AIzaSyBZVkwEynmCEFaxBv2b2B9FSqGYu4OLjUY",
        authDomain: "mereni-nalady-web.firebaseapp.com",
        projectId: "mereni-nalady-web",
        storageBucket: "mereni-nalady-web.firebasestorage.app",
        messagingSenderId: "478918382129",
        appId: "1:478918382129:web:a7bb4c8833310a72a2bb10"
    }
};
