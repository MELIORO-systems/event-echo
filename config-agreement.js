const config = {
    // Demo konfigurace pro hlasování o firemním večírku
    projectUrl: window.location.origin + window.location.pathname + "?config=agreement",
    projectId: "demo-christmas-party-2025",
    votingFrequency: 'hourly', // Pro demo - možnost hlasovat každou hodinu
    activeQuestionSet: 'agreement', // Přednastaveno na hlasování o souhlasu
    defaultTheme: 'forest', // Zelený motiv pro vánoční atmosféru
    
    backgroundImage: {
        filename: "pozadi-agreement.png",
        recommended_width: "500px",
        recommended_height: "750px",
        recommended_format: "JPG, PNG, WEBP"
    },

    translations: {
        en: { 
            pageTitle: "Company Christmas Party", 
            settingsTitle: "Settings & Global Stats",
            thankYouMessage: "Thank you for voting!", 
            alreadyVotedMessage: "Demo limit: You can vote once per hour.",
            statsGlobalTitle: "Global Statistics", 
            statsGlobalTotal: "Total votes:", 
            statsGlobalToday: "Votes today:", 
            statsGlobalLastWeek: "Votes (7 days):",
            gdprAlertText: "This is a demo. No personal data is stored. 😊",
            scanMeText: "Scan to vote!",

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
                    appTitle: "Understanding Check",
                    appSubtitle: "Check your understanding level",
                    buttonText: "How well do you understand?",
                    modalTitle: "How well do you understand?",
                    options: ["Not at all", "A little", "Well", "Mostly", "Perfectly"],
                    responses: [
                        { text: "This feature is not active in this demo configuration", link: null },
                        { text: "This feature is not active in this demo configuration", link: null },
                        { text: "This feature is not active in this demo configuration", link: null },
                        { text: "This feature is not active in this demo configuration", link: null },
                        { text: "This feature is not active in this demo configuration", link: null }
                    ],
                    statsProjectTotal: "Understanding responses:",
                    statsProjectBreakdown: "Understanding level:",
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
                    appTitle: "Company Christmas Party", 
                    appSubtitle: "Vote on the date: Friday, December 15th, 6:00 PM",
                    buttonText: "Express opinion", 
                    modalTitle: "Do you agree with the proposed date?",
                    options: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"],
                    responses: [
                        { text: "We understand, thank you for your opinion. Every vote counts. Maybe next year...", link: null },
                        { text: "Thanks for your opinion. Maybe it helps that Pilsner beer will be from the company budget 🍺", link: null },
                        { text: "OK, we've recorded your vote.", link: null },
                        { text: "Great! See you on December 15th!", link: null },
                        { text: "Perfect! Can't wait? Neither can we! 🎄", link: null }
                    ],
                    statsProjectTotal: "Party votes:",
                    statsProjectBreakdown: "Agreement levels:",
                    statsGlobalBreakdown: "Global Agreement Distribution:"
                }
            }
        },
        cs: { 
            pageTitle: "Firemní vánoční večírek", 
            settingsTitle: "Nastavení & Globální statistiky",
            thankYouMessage: "Děkujeme za váš hlas!", 
            alreadyVotedMessage: "Demo limit: Hlasovat můžete jednou za hodinu.",
            statsGlobalTitle: "Globální statistiky", 
            statsGlobalTotal: "Celkem hlasů:", 
            statsGlobalToday: "Hlasů dnes:", 
            statsGlobalLastWeek: "Hlasů (7 dní):",
            gdprAlertText: "Toto je demo. Žádné osobní údaje se neukládají. 😊",
            scanMeText: "Naskenujte pro hlasování!",

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
                    appTitle: "Kontrola porozumění",
                    appSubtitle: "Zkontrolujte úroveň porozumění",
                    buttonText: "Jak tomu rozumíte?",
                    modalTitle: "Jak dobře rozumíte?",
                    options: ["Vůbec", "Trochu", "Dobře", "Většinou", "Perfektně"],
                    responses: [
                        { text: "Tato funkce není v této demo konfiguraci aktivní", link: null },
                        { text: "Tato funkce není v této demo konfiguraci aktivní", link: null },
                        { text: "Tato funkce není v této demo konfiguraci aktivní", link: null },
                        { text: "Tato funkce není v této demo konfiguraci aktivní", link: null },
                        { text: "Tato funkce není v této demo konfiguraci aktivní", link: null }
                    ],
                    statsProjectTotal: "Odpovědi porozumění:",
                    statsProjectBreakdown: "Úroveň porozumění:",
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
                    appTitle: "Firemní vánoční večírek", 
                    appSubtitle: "Hlasujte o termínu: pátek 15. prosince 18:00",
                    buttonText: "Vyjádřit názor", 
                    modalTitle: "Souhlasíte s navrženým termínem?",
                    options: ["Zásadně nesouhlasím", "Nesouhlasím", "Neutrální", "Souhlasím", "Zcela souhlasím"],
                    responses: [
                        { text: "Rozumíme, děkujeme za váš názor. Každý hlas se počítá. Snad to vyjde příští rok...", link: null },
                        { text: "Díky za vyjádření názoru. Snad pomůže, že čepovaná Plzeň bude z firemního rozpočtu 🍺", link: null },
                        { text: "OK, zaznamenali jsme váš hlas.", link: null },
                        { text: "Skvěle! Těšíme se na vás 15. prosince!", link: null },
                        { text: "Perfekt! Už se nemůžete dočkat? My taky ne! 🎄", link: null }
                    ],
                    statsProjectTotal: "Hlasy o večírku:",
                    statsProjectBreakdown: "Úrovně souhlasu:",
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
