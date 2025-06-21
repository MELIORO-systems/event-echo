const config = {
    projectUrl: "", 
    projectId: "event-echo-default", 
    votingFrequency: 'daily',
    activeQuestionSet: 'mood', // Možnosti: 'mood', 'understanding', 'preference', 'agreement'

    backgroundImage: {
        filename: "", 
        recommended_width: "500px", recommended_height: "750px",
        recommended_format: "JPG, PNG, WEBP"
    },
    
    translations: {
        en: { 
            pageTitle: "Event Echo", 
            settingsTitle: "Settings & Global Stats",
            thankYouMessage: "Thank you for your vote!", 
            alreadyVotedMessage: "You have already voted. Please try again later.",
            statsGlobalTitle: "Global Statistics (All Projects)", 
            statsGlobalTotal: "Total votes (global):", 
            statsGlobalToday: "Today (global):", 
            statsGlobalLastWeek: "Last 7 days (global):", 
            statsGlobalBreakdown: "Moods (global):",
            footerText: 'Made with <span class="heart-icon">❤️</span> by <a href="https://melioro.cz" target="_blank" rel="noopener noreferrer">MELIORO Systems</a>',
            gdprLinkText: "GDPR Consent",
            gdprAlertText: "I acknowledge that this mini-application does not store or process any personal data. 😊",
            scanMeText: "Scan the code and vote!",

            questionSets: {
                mood: {
                    appTitle: "Mood Meter",
                    appSubtitle: "Help us track the current mood!",
                    buttonText: "How are you feeling?",
                    modalTitle: "How are you feeling right now?",
                    options: ["Terrible", "Bad", "Neutral", "Good", "Great"],
                    responses: [
                        { text: "We're sorry to hear that. Maybe some jokes will cheer you up?", link: { text: "Show me jokes", url: "https://www.rd.com/list/funniest-jokes-of-all-time/" } },
                        { text: "Hope things get better soon!", link: null }, { text: "Thanks for your feedback.", link: null },
                        { text: "Glad to hear that!", link: null }, { text: "Awesome! Keep up the great mood.", link: null }
                    ],
                    statsProjectTotal: "Votes in this project:",
                    statsProjectBreakdown: "Moods in this project:"
                },
                understanding: {
                    appTitle: "Understanding Check",
                    appSubtitle: "Let us know how well you understand the topic.",
                    buttonText: "How well do you understand?",
                    modalTitle: "How well do you understand the topic?",
                    options: ["Not at all", "A little", "Mostly", "Well", "Perfectly"],
                    responses: [
                        { text: "No worries! Don't hesitate to ask questions.", link: null }, { text: "Okay, we'll try to clarify the main points.", link: null },
                        { text: "Great, glad you're on board.", link: null }, { text: "Excellent!", link: null }, { text: "Perfect! You're a star.", link: null }
                    ],
                    statsProjectTotal: "Responses:",
                    statsProjectBreakdown: "Understanding level:"
                },
                preference: {
                    appTitle: "Preference Poll",
                    appSubtitle: "Let us know how much you like this.",
                    buttonText: "How much do you like this?",
                    modalTitle: "How much do you like this?",
                    options: ["Don't like it", "It's okay", "It's good", "I like it", "I love it"],
                    responses: [
                        { text: "Thank you for your honest feedback.", link: null }, { text: "Thanks, we appreciate the input.", link: null },
                        { text: "Glad you think it's good!", link: null }, { text: "Great to hear you like it!", link: null }, { text: "Awesome! We're thrilled you love it.", link: null }
                    ],
                    statsProjectTotal: "Votes:",
                    statsProjectBreakdown: "Preference distribution:"
                },
                agreement: {
                    appTitle: "Agreement Vote",
                    appSubtitle: "Please share your level of agreement with the proposal.",
                    buttonText: "Do you agree?",
                    modalTitle: "What is your level of agreement?",
                    options: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"],
                    responses: [
                        { text: "Understood, thank you for your perspective.", link: null }, { text: "Thank you for sharing your concerns.", link: null },
                        { text: "Thank you for your input.", link: null }, { text: "Great, glad we are on the same page.", link: null }, { text: "Excellent! Thank you for your strong support.", link: null }
                    ],
                    statsProjectTotal: "Votes:",
                    statsProjectBreakdown: "Agreement distribution:"
                }
            }
        },
        cs: { 
            pageTitle: "Event Echo", 
            settingsTitle: "Nastavení & Globální statistiky",
            thankYouMessage: "Děkujeme za hlas!", 
            alreadyVotedMessage: "Již jste hlasoval(a). Zkuste to prosím později.",
            statsGlobalTitle: "Globální statistiky (všechny projekty)", 
            statsGlobalTotal: "Celkem hlasů (globálně):", 
            statsGlobalToday: "Dnes (globálně):", 
            statsGlobalLastWeek: "Posledních 7 dní (globálně):", 
            statsGlobalBreakdown: "Nálady (globálně):",
            footerText: 'S <span class="heart-icon">❤️</span> vyrobilo <a href="https://melioro.cz" target="_blank" rel="noopener noreferrer">MELIORO Systems</a>',
            gdprLinkText: "Souhlas s GDPR",
            gdprAlertText: "Beru na vědomí, že tato mini-aplikace neukládá ani nepracuje s žádnými osobními údaji. 😊",
            scanMeText: "Naskenujte kód a hlasujte!",

            questionSets: {
                mood: {
                    appTitle: "Měřič nálady",
                    appSubtitle: "Pomozte nám sledovat aktuální náladu!",
                    buttonText: "Jak se teď cítíš?",
                    modalTitle: "Jak se teď cítíš?",
                    options: ["Hrozně", "Špatně", "Neutrálně", "Dobře", "Skvěle"],
                    responses: [
                        { text: "To nás mrzí. Třeba vám zvedne náladu pár vtipů?", link: { text: "Ukaž vtipy", url: "https://www.vtipnicek.cz/nejlepsi-vtipy" } },
                        { text: "Snad bude brzy lépe!", link: null }, { text: "Děkujeme za zpětnou vazbu.", link: null },
                        { text: "To rádi slyšíme!", link: null }, { text: "Paráda! Udržte si skvělou náladu.", link: null }
                    ],
                    statsProjectTotal: "Hlasů v tomto projektu:",
                    statsProjectBreakdown: "Nálady v tomto projektu:"
                },
                understanding: {
                    appTitle: "Kontrola porozumění",
                    appSubtitle: "Dejte nám vědět, jak dobře tématu rozumíte.",
                    buttonText: "Jak tomu rozumíte?",
                    modalTitle: "Jak dobře rozumíte tématu?",
                    options: ["Vůbec", "Trochu", "Většinou", "Dobře", "Perfektně"],
                    responses: [
                        { text: "Žádný strach! Neváhejte se ptát.", link: null }, { text: "Dobře, zkusíme si hlavní body ujasnit.", link: null },
                        { text: "Výborně, jsme rádi, že jste v obraze.", link: null }, { text: "Excelentní!", link: null }, { text: "Perfektní! Jste hvězda.", link: null }
                    ],
                    statsProjectTotal: "Odpovědí:",
                    statsProjectBreakdown: "Úroveň porozumění:"
                },
                preference: {
                    appTitle: "Průzkum líbivosti",
                    appSubtitle: "Dejte nám vědět, jak se vám to líbí.",
                    buttonText: "Jak se vám to líbí?",
                    modalTitle: "Jak moc se vám to líbí?",
                    options: ["Vůbec ne", "Ujde to", "Je to dobré", "Líbí se mi to", "Je to super"],
                    responses: [
                        { text: "Děkujeme za upřímnou zpětnou vazbu.", link: null }, { text: "Díky, vážíme si vašeho názoru.", link: null },
                        { text: "Jsme rádi, že si myslíte, že je to dobré!", link: null }, { text: "Skvělé, těší nás to!", link: null }, { text: "Paráda! Jsme nadšeni, že se vám to tak líbí.", link: null }
                    ],
                    statsProjectTotal: "Hlasů:",
                    statsProjectBreakdown: "Rozložení líbivosti:"
                },
                agreement: {
                    appTitle: "Hlasování o souhlasu",
                    appSubtitle: "Prosím, vyjádřete míru svého souhlasu s návrhem.",
                    buttonText: "Souhlasíte?",
                    modalTitle: "Jaká je vaše míra souhlasu?",
                    options: ["Zásadně nesouhlasím", "Nesouhlasím", "Neutrální", "Souhlasím", "Zcela souhlasím"],
                    responses: [
                        { text: "Rozumíme, děkujeme za vaši perspektivu.", link: null }, { text: "Děkujeme, že jste sdílel(a) své obavy.", link: null },
                        { text: "Děkujeme za váš názor.", link: null }, { text: "Skvělé, jsme rádi, že se shodneme.", link: null }, { text: "Excelentní! Děkujeme za vaši silnou podporu.", link: null }
                    ],
                    statsProjectTotal: "Hlasů:",
                    statsProjectBreakdown: "Rozložení souhlasu:"
                }
            }
        }
    },
    
    // Tyto údaje získáte podle návodu v Části 2
    firebaseConfig: {
        apiKey: "AIzaSyBZVkwEynmCEFaxBv2b2B9FSqGYu4OLjUY",
        authDomain: "mereni-nalady-web.firebaseapp.com",
        projectId: "mereni-nalady-web",
        storageBucket: "mereni-nalady-web.firebasestorage.app",
        messagingSenderId: "478918382129",
        appId: "1:478918382129:web:a7bb4c8833310a72a2bb10"
    }
};
