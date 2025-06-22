const config = {
    // Demo konfigurace pro prezentaci nového designu
    projectUrl: window.location.origin + window.location.pathname + "?config=preference",
    projectId: "demo-design-presentation-2025",
    votingFrequency: 'hourly', // Pro demo - možnost hlasovat každou hodinu
    activeQuestionSet: 'preference', // Přednastaveno na průzkum líbivosti
    defaultTheme: 'sunset', // Oranžový motiv pro design prezentaci
    
    backgroundImage: {
        filename: "pozadi-preference.png",
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
            statsGlobalTitle: "Global Statistics", 
            statsGlobalTotal: "Total votes:", 
            statsGlobalToday: "Votes today:", 
            statsGlobalLastWeek: "Votes (7 days):",
            gdprAlertText: "This is a demo. No personal data is stored. 😊",
            scanMeText: "Scan to rate our design!",

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
            pageTitle: "Představení nového designu", 
            settingsTitle: "Nastavení & Globální statistiky",
            thankYouMessage: "Děkujeme za vaše hodnocení!", 
            alreadyVotedMessage: "Demo limit: Hlasovat můžete jednou za hodinu.",
            statsGlobalTitle: "Globální statistiky", 
            statsGlobalTotal: "Celkem hlasů:", 
            statsGlobalToday: "Hlasů dnes:", 
            statsGlobalLastWeek: "Hlasů (7 dní):",
            gdprAlertText: "Toto je demo. Žádné osobní údaje se neukládají. 😊",
            scanMeText: "Naskenujte pro hodnocení designu!",

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
