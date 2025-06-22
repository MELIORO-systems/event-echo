const config = {
    // DŮLEŽITÉ: Vložte sem URL adresu, kde je nasazena vaše hlavní aplikace (index.html)
    projectUrl: "https://melioro-systems.github.io/event-echo/",
    
    // DŮLEŽITÉ: Změňte pro každou kopii/nasazení aplikace na unikátní název!
    projectId: "event-echo-feedback-2025",
    
    // Jak často může uživatel hlasovat? Možnosti: 'daily', 'hourly', 'once'
    votingFrequency: 'daily',

    // Jaký typ otázek se má zobrazit? Možnosti: 'mood', 'understanding', 'preference', 'agreement'
    activeQuestionSet: 'preference',

    // Nastavení obrázku na pozadí hlavní aplikace
    backgroundImage: {
        filename: "pozadi-event-echo.png", // např. "pozadi.jpg". Pokud je prázdné, obrázek se nezobrazí.
        recommended_width: "500px",
        recommended_height: "750px",
        recommended_format: "JPG, PNG, WEBP"
    },

    translations: {
        en: { 
            pageTitle: "Event Echo - Feedback", 
            settingsTitle: "Settings & Global Stats",
            thankYouMessage: "Thank you for your vote!", 
            alreadyVotedMessage: "You have already voted. Please try again later.",
            statsGlobalTitle: "Global Statistics (All Projects)", 
            statsGlobalTotal: "Total votes (global):", 
            statsGlobalToday: "Today (global):", 
            statsGlobalLastWeek: "Last 7 days (global):",
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
                        { text: "Hope things get better soon!", link: null },
                        { text: "Thanks for your feedback.", link: null },
                        { text: "Glad to hear that!", link: null },
                        { text: "Awesome! Keep up the great mood.", link: null }
                    ],
                    statsProjectTotal: "Votes in this project:",
                    statsProjectBreakdown: "Mood distribution:",
                    statsGlobalBreakdown: "Global Mood Distribution:"
                },
                understanding: {
                    appTitle: "Understanding Check", 
                    appSubtitle: "Let us know how well you understand the topic.",
                    buttonText: "How well do you understand?", 
                    modalTitle: "How well do you understand the topic?",
                    options: ["Not at all", "A little", "Well", "Mostly", "Perfectly"],
                    responses: [
                        { text: "No worries! Don't hesitate to ask questions.", link: null },
                        { text: "Okay, we'll try to clarify the main points.", link: null },
                        { text: "Great, glad you're on board.", link: null },
                        { text: "Excellent!", link: null },
                        { text: "Perfect! You're a star.", link: null }
                    ],
                    statsProjectTotal: "Responses:",
                    statsProjectBreakdown: "Understanding level:",
                    statsGlobalBreakdown: "Global Understanding Level:"
                },
                preference: {
                    appTitle: "Event Echo - Feedback", 
                    appSubtitle: "How do you like our live feedback collection app?",
                    buttonText: "Rate the app", 
                    modalTitle: "How do you rate Event Echo app?",
                    options: ["Don't like it", "It's okay", "It's good", "I like it", "I love it"],
                    responses: [
                        { text: "Thank you for your honesty. Maybe you'll like our other solutions.", link: { text: "melioro.cz", url: "https://melioro.cz" } },
                        { text: "Thanks for the feedback. We're still working on the app, check back later, hopefully it will be better. Meanwhile, check out our other products.", link: { text: "melioro.cz", url: "https://melioro.cz" } },
                        { text: "Thank you! We're glad you like Event Echo.", link: null },
                        { text: "Great! If you want Event Echo for your event, let us know.", link: { text: "Contact", url: "mailto:pavel@melioro.cz" } },
                        { text: "Wow, thank you! 🎉 Want Event Echo for your own event?", link: { text: "I'm interested", url: "mailto:pavel@melioro.cz?subject=I'm interested in Event Echo" } }
                    ],
                    statsProjectTotal: "App ratings:",
                    statsProjectBreakdown: "Rating distribution:",
                    statsGlobalBreakdown: "Global Preference Distribution:"
                },
                agreement: {
                    appTitle: "Agreement Vote", 
                    appSubtitle: "Please share your level of agreement with the proposal.",
                    buttonText: "Do you agree?", 
                    modalTitle: "What is your level of agreement?",
                    options: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"],
                    responses: [
                        { text: "Understood, thank you for your perspective.", link: null },
                        { text: "Thank you for sharing your concerns.", link: null },
                        { text: "Thank you for your input.", link: null },
                        { text: "Great, glad we are on the same page.", link: null },
                        { text: "Excellent! Thank you for your strong support.", link: null }
                    ],
                    statsProjectTotal: "Votes:",
                    statsProjectBreakdown: "Agreement distribution:",
                    statsGlobalBreakdown: "Global Agreement Distribution:"
                }
            }
        },
        cs: { 
            pageTitle: "Event Echo - Zpětná vazba", 
            settingsTitle: "Nastavení & Globální statistiky",
            thankYouMessage: "Děkujeme za hlas!", 
            alreadyVotedMessage: "Již jste hlasoval(a). Zkuste to prosím později.",
            statsGlobalTitle: "Globální statistiky (všechny projekty)", 
            statsGlobalTotal: "Celkem hlasů (globálně):", 
            statsGlobalToday: "Dnes (globálně):", 
            statsGlobalLastWeek: "Posledních 7 dní (globálně):",
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
                        { text: "Snad bude brzy lépe!", link: null },
                        { text: "Děkujeme za zpětnou vazbu.", link: null },
                        { text: "To rádi slyšíme!", link: null },
                        { text: "Paráda! Udržte si skvělou náladu.", link: null }
                    ],
                    statsProjectTotal: "Hlasů v tomto projektu:",
                    statsProjectBreakdown: "Nálady v tomto projektu:",
                    statsGlobalBreakdown: "Globální rozložení nálad:"
                },
                understanding: {
                    appTitle: "Kontrola porozumění", 
                    appSubtitle: "Dejte nám vědět, jak dobře tématu rozumíte.",
                    buttonText: "Jak tomu rozumíte?", 
                    modalTitle: "Jak dobře rozumíte tématu?",
                    options: ["Vůbec", "Trochu", "Dobře", "Většinou", "Perfektně"],
                    responses: [
                        { text: "Žádný strach! Neváhejte se ptát.", link: null },
                        { text: "Dobře, zkusíme si hlavní body ujasnit.", link: null },
                        { text: "Výborně, jsme rádi, že jste v obraze.", link: null },
                        { text: "Excelentní!", link: null },
                        { text: "Perfektní! Jste hvězda.", link: null }
                    ],
                    statsProjectTotal: "Odpovědí:",
                    statsProjectBreakdown: "Úroveň porozumění:",
                    statsGlobalBreakdown: "Globální úroveň porozumění:"
                },
                preference: {
                    appTitle: "Event Echo - Zpětná vazba", 
                    appSubtitle: "Jak se vám líbí naše aplikace pro sběr zpětné vazby?",
                    buttonText: "Ohodnotit aplikaci", 
                    modalTitle: "Jak hodnotíte aplikaci Event Echo?",
                    options: ["Vůbec ne", "Ujde to", "Je to dobré", "Líbí se mi to", "Je to super"],
                    responses: [
                        { text: "Děkujeme za upřímnost. Třeba se vám budou líbit naše jiná řešení.", link: { text: "melioro.cz", url: "https://melioro.cz" } },
                        { text: "Díky za feedback. Stále na aplikaci pracujeme, tak se podívejte za nějaký čas, snad to bude lepší. Zatím se podívejte na naše jiné produkty.", link: { text: "melioro.cz", url: "https://melioro.cz" } },
                        { text: "Děkujeme! Těší nás, že se vám Event Echo líbí.", link: null },
                        { text: "Super! Pokud chcete Event Echo pro svou akci, ozvěte se.", link: { text: "Kontaktovat", url: "mailto:pavel@melioro.cz" } },
                        { text: "Wow, děkujeme! 🎉 Chcete Event Echo na vlastní akci?", link: { text: "Mám zájem", url: "mailto:pavel@melioro.cz?subject=Mám zájem o Event Echo" } }
                    ],
                    statsProjectTotal: "Hodnocení aplikace:",
                    statsProjectBreakdown: "Rozložení hodnocení:",
                    statsGlobalBreakdown: "Globální rozložení líbivosti:"
                },
                agreement: {
                    appTitle: "Hlasování o souhlasu", 
                    appSubtitle: "Prosím, vyjádřete míru svého souhlasu s návrhem.",
                    buttonText: "Souhlasíte?", 
                    modalTitle: "Jaká je vaše míra souhlasu?",
                    options: ["Zásadně nesouhlasím", "Nesouhlasím", "Neutrální", "Souhlasím", "Zcela souhlasím"],
                    responses: [
                        { text: "Rozumíme, děkujeme za vaši perspektivu.", link: null },
                        { text: "Děkujeme, že jste sdílel(a) své obavy.", link: null },
                        { text: "Děkujeme za váš názor.", link: null },
                        { text: "Skvělé, jsme rádi, že se shodneme.", link: null },
                        { text: "Excelentní! Děkujeme za vaši silnou podporu.", link: null }
                    ],
                    statsProjectTotal: "Hlasů:",
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
