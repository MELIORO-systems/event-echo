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
        filename: "", // např. "pozadi.jpg". Pokud je prázdné, obrázek se nezobrazí.
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
                    statsGlobalBreakdown: "Global App Ratings:"
                },
                mood: {
                    appTitle: "Not Available", appSubtitle: "Please use the main app for mood tracking",
                    buttonText: "Not Available", modalTitle: "Not Available",
                    options: ["N/A", "N/A", "N/A", "N/A", "N/A"],
                    responses: [
                        { text: "This feature is not available in this configuration", link: null },
                        { text: "This feature is not available in this configuration", link: null },
                        { text: "This feature is not available in this configuration", link: null },
                        { text: "This feature is not available in this configuration", link: null },
                        { text: "This feature is not available in this configuration", link: null }
                    ],
                    statsProjectTotal: "N/A",
                    statsProjectBreakdown: "N/A",
                    statsGlobalBreakdown: "N/A"
                },
                understanding: {
                    appTitle: "Not Available", appSubtitle: "Please use the main app for understanding check",
                    buttonText: "Not Available", modalTitle: "Not Available",
                    options: ["N/A", "N/A", "N/A", "N/A", "N/A"],
                    responses: [
                        { text: "This feature is not available in this configuration", link: null },
                        { text: "This feature is not available in this configuration", link: null },
                        { text: "This feature is not available in this configuration", link: null },
                        { text: "This feature is not available in this configuration", link: null },
                        { text: "This feature is not available in this configuration", link: null }
                    ],
                    statsProjectTotal: "N/A",
                    statsProjectBreakdown: "N/A",
                    statsGlobalBreakdown: "N/A"
                },
                agreement: {
                    appTitle: "Not Available", appSubtitle: "Please use the main app for agreement voting",
                    buttonText: "Not Available", modalTitle: "Not Available",
                    options: ["N/A", "N/A", "N/A", "N/A", "N/A"],
                    responses: [
                        { text: "This feature is not available in this configuration", link: null },
                        { text: "This feature is not available in this configuration", link: null },
                        { text: "This feature is not available in this configuration", link: null },
                        { text: "This feature is not available in this configuration", link: null },
                        { text: "This feature is not available in this configuration", link: null }
                    ],
                    statsProjectTotal: "N/A",
                    statsProjectBreakdown: "N/A",
                    statsGlobalBreakdown: "N/A"
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
                    statsGlobalBreakdown: "Globální hodnocení aplikace:"
                },
                mood: {
                    appTitle: "Není dostupné", appSubtitle: "Pro měření nálady použijte hlavní aplikaci",
                    buttonText: "Není dostupné", modalTitle: "Není dostupné",
                    options: ["N/A", "N/A", "N/A", "N/A", "N/A"],
                    responses: [
                        { text: "Tato funkce není v této konfiguraci dostupná", link: null },
                        { text: "Tato funkce není v této konfiguraci dostupná", link: null },
                        { text: "Tato funkce není v této konfiguraci dostupná", link: null },
                        { text: "Tato funkce není v této konfiguraci dostupná", link: null },
                        { text: "Tato funkce není v této konfiguraci dostupná", link: null }
                    ],
                    statsProjectTotal: "N/A",
                    statsProjectBreakdown: "N/A",
                    statsGlobalBreakdown: "N/A"
                },
                understanding: {
                    appTitle: "Není dostupné", appSubtitle: "Pro kontrolu porozumění použijte hlavní aplikaci",
                    buttonText: "Není dostupné", modalTitle: "Není dostupné",
                    options: ["N/A", "N/A", "N/A", "N/A", "N/A"],
                    responses: [
                        { text: "Tato funkce není v této konfiguraci dostupná", link: null },
                        { text: "Tato funkce není v této konfiguraci dostupná", link: null },
                        { text: "Tato funkce není v této konfiguraci dostupná", link: null },
                        { text: "Tato funkce není v této konfiguraci dostupná", link: null },
                        { text: "Tato funkce není v této konfiguraci dostupná", link: null }
                    ],
                    statsProjectTotal: "N/A",
                    statsProjectBreakdown: "N/A",
                    statsGlobalBreakdown: "N/A"
                },
                agreement: {
                    appTitle: "Není dostupné", appSubtitle: "Pro hlasování o souhlasu použijte hlavní aplikaci",
                    buttonText: "Není dostupné", modalTitle: "Není dostupné",
                    options: ["N/A", "N/A", "N/A", "N/A", "N/A"],
                    responses: [
                        { text: "Tato funkce není v této konfiguraci dostupná", link: null },
                        { text: "Tato funkce není v této konfiguraci dostupná", link: null },
                        { text: "Tato funkce není v této konfiguraci dostupná", link: null },
                        { text: "Tato funkce není v této konfiguraci dostupná", link: null },
                        { text: "Tato funkce není v této konfiguraci dostupná", link: null }
                    ],
                    statsProjectTotal: "N/A",
                    statsProjectBreakdown: "N/A",
                    statsGlobalBreakdown: "N/A"
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
