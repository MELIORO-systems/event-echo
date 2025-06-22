const config = {
    // Demo konfigurace pro měření nálady na konferenci
    projectUrl: window.location.origin + window.location.pathname + "?config=mood",
    projectId: "demo-techconf-2025",
    votingFrequency: 'hourly', // Pro demo - možnost hlasovat každou hodinu
    activeQuestionSet: 'mood', // Přednastaveno na měření nálady
    defaultTheme: 'dark', // Tmavý motiv pro tech konferenci
    
    backgroundImage: {
        filename: "pozadi-mood.png",
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
            statsGlobalTitle: "Global Statistics", 
            statsGlobalTotal: "Total votes:", 
            statsGlobalToday: "Votes today:", 
            statsGlobalLastWeek: "Votes (7 days):",
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
            pageTitle: "TechConf 2025 Prague", 
            settingsTitle: "Nastavení & Globální statistiky",
            thankYouMessage: "Děkujeme za sdílení nálady!", 
            alreadyVotedMessage: "Demo limit: Hlasovat můžete jednou za hodinu.",
            statsGlobalTitle: "Globální statistiky", 
            statsGlobalTotal: "Celkem hlasů:", 
            statsGlobalToday: "Hlasů dnes:", 
            statsGlobalLastWeek: "Hlasů (7 dní):",
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
