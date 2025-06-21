document.addEventListener('DOMContentLoaded', () => {
    let db;
    if (!config || !config.firebaseConfig || !config.projectId) {
        console.error("Konfigurační soubor chybí nebo je neúplný.");
        return;
    }

    try {
        if (config.firebaseConfig.apiKey !== "VASE_API_KEY_VLOZTE_SEM") {
            firebase.initializeApp(config.firebaseConfig);
            db = firebase.firestore();
        } else {
            console.warn("Firebase není nakonfigurován. Statistiky se nebudou zobrazovat.");
        }
    } catch (e) {
        console.error("Chyba inicializace Firebase.", e);
    }

    const projectStatsDocRef = db ? db.collection("moodStats").doc(config.projectId) : null;
    let currentTranslations = {};
    const moods_svgs = [
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#F44336" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>`,
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FF9800" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="15" x2="16" y2="15"></line><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>`,
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#9E9E9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>`,
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>`,
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#2196F3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 11.5c.5 1.5 2 3 4 3s3.5-1.5 4-3"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>`
    ];

    const createBreakdownHtml = (votes) => votes.map((count, index) => `<div>${moods_svgs[index]} ${count}</div>`).join('');

    const applyTranslations = (lang) => {
        currentTranslations = config.translations[lang] || config.translations.en;
        document.querySelectorAll('[data-config-key]').forEach(el => {
            const key = el.dataset.configKey;
            if (currentTranslations[key]) {
                el.innerHTML = currentTranslations[key];
            }
        });
    };

    const initLanguage = () => {
        const browserLang = navigator.language.split('-')[0];
        const langToLoad = config.translations[browserLang] ? browserLang : 'en';
        applyTranslations(langToLoad);
    };

    const generateQRCode = () => {
        const qrCodeContainer = document.getElementById('qrcode');
        if (!qrCodeContainer) return;
        
        qrCodeContainer.innerHTML = ""; 

        if (!config.projectUrl || config.projectUrl.includes("VASE-DOMENA")) {
            qrCodeContainer.innerHTML = "<p>Prosím, nastavte 'projectUrl' v souboru config.js</p>";
            return;
        }

        new QRCode(qrCodeContainer, {
            text: config.projectUrl,
            width: 256,
            height: 256,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        });
    };

    if (projectStatsDocRef) {
        projectStatsDocRef.onSnapshot(doc => {
            const data = doc.exists ? doc.data() : { votes: [0,0,0,0,0] };
            const votes = data.votes || [0,0,0,0,0];
            document.getElementById('stats-project-total').textContent = votes.reduce((s, c) => s + c, 0);
            document.getElementById('stats-project-breakdown').innerHTML = createBreakdownHtml(votes);
        }, err => console.error("Chyba při načítání statistik projektu: ", err));
    }

    initLanguage();
    generateQRCode();
});
