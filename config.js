const config = {
    // DŮLEŽITÉ: Změňte pro každou kopii/nasazení aplikace na unikátní název!
    projectId: "default-project-id", 

    translations: {
        en: { pageTitle: "Mini-App: Mood Tracker", appTitle: "Mood Tracker", appSubtitle: "Help us track the community's current mood!", buttonText: "How are you feeling right now?", modalTitle: "How are you feeling right now?", settingsTitle: "Settings & Global Stats", thankYouMessage: "Thank you for your vote!", moods: ["Terrible", "Bad", "Neutral", "Good", "Great"], statsProjectTotal: "Votes in this project:", statsProjectBreakdown: "Moods in this project:", statsGlobalTitle: "Global Statistics (All Projects)", statsGlobalTotal: "Total votes (global):", statsGlobalToday: "Today (global):", statsGlobalLastWeek: "Last 7 days (global):", statsGlobalBreakdown: "Moods (global):" },
        cs: { pageTitle: "Mini-aplikace: Měřič nálady", appTitle: "Měřič nálady", appSubtitle: "Pomozte nám sledovat aktuální náladu v komunitě!", buttonText: "Jak se teď cítíš?", modalTitle: "Jak se teď cítíš?", settingsTitle: "Nastavení & Globální statistiky", thankYouMessage: "Děkujeme za hlas!", moods: ["Hrozně", "Špatně", "Neutrálně", "Dobře", "Skvěle"], statsProjectTotal: "Hlasů v tomto projektu:", statsProjectBreakdown: "Nálady v tomto projektu:", statsGlobalTitle: "Globální statistiky (všechny projekty)", statsGlobalTotal: "Celkem hlasů (globálně):", statsGlobalToday: "Dnes (globálně):", statsGlobalLastWeek: "Posledních 7 dní (globálně):", statsGlobalBreakdown: "Nálady (globálně):" },
        sk: { pageTitle: "Mini-aplikácia: Merač nálady", appTitle: "Merač nálady", appSubtitle: "Pomôžte nám sledovať aktuálnu náladu v komunite!", buttonText: "Ako sa teraz cítiš?", modalTitle: "Ako sa teraz cítiš?", settingsTitle: "Nastavenia a Globálne štatistiky", thankYouMessage: "Ďakujeme za hlas!", moods: ["Hrozne", "Zle", "Neutrálne", "Dobre", "Skvele"], statsProjectTotal: "Hlasov v tomto projekte:", statsProjectBreakdown: "Nálady v tomto projekte:", statsGlobalTitle: "Globálne štatistiky (všetky projekty)", statsGlobalTotal: "Celkom hlasov (globálne):", statsGlobalToday: "Dnes (globálne):", statsGlobalLastWeek: "Posledných 7 dní (globálne):", statsGlobalBreakdown: "Nálady (globálne):" },
        de: { pageTitle: "Mini-App: Stimmungs-Tracker", appTitle: "Stimmungs-Tracker", appSubtitle: "Helfen Sie uns, die aktuelle Stimmung in der Community zu verfolgen!", buttonText: "Wie fühlst du dich gerade?", modalTitle: "Wie fühlst du dich gerade?", settingsTitle: "Einstellungen & Globale Statistiken", thankYouMessage: "Danke für deine Stimme!", moods: ["Schrecklich", "Schlecht", "Neutral", "Gut", "Großartig"], statsProjectTotal: "Stimmen in diesem Projekt:", statsProjectBreakdown: "Stimmungen in diesem Projekt:", statsGlobalTitle: "Globale Statistiken (Alle Projekte)", statsGlobalTotal: "Stimmen gesamt (global):", statsGlobalToday: "Heute (global):", statsGlobalLastWeek: "Letzte 7 Tage (global):", statsGlobalBreakdown: "Stimmungen (global):" }
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
