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
        `<svg viewBox="0 0 24 24"><path fill="#f44336" d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8z"/><path fill="#ffcdd2" d="M12 14a4 4 0 00-3.8 2.8 1 1 0 00.9.9h5.8a1 1 0 00.9-.9A4 4 0 0012 14zM9 11a1.5 1.5 0 10-1.5-1.5A1.5 1.5 0 009 11zm6 0a1.5 1.5 0 10-1.5-1.5A1.5 1.5 0 0015 11z"/></svg>`,
        `<svg viewBox="0 0 24 24"><path fill="#ff9800" d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8z"/><path fill="#ffe0b2" d="M8.5 10a1.5 1.5 0 10-1.5 1.5A1.5 1.5 0 008.5 10zm7 0a1.5 1.5 0 10-1.5 1.5A1.5 1.5 0 0015.5 10zM15 15H9a1 1 0 000 2h6a1 1 0 000-2z"/></svg>`,
        `<svg viewBox="0 0 24 24"><path fill="#9e9e9e" d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8z"/><path fill="#e0e0e0" d="M8 10a1 1 0 10-1-1 1 1 0 001 1zm8 0a1 1 0 10-1-1 1 1 0 001 1zM16 15H8v-2h8z"/></svg>`,
        `<svg viewBox="0 0 24 24"><path fill="#4caf50" d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8z"/><path fill="#c8e6c9" d="M12 14a4 4 0 003.8-2.8 1 1 0 00-.9-.9h-5.8a1 1 0 00-.9.9A4 4 0 0012 14zM9 11a1.5 1.5 0 10-1.5-1.5A1.5 1.5 0 009 11zm6 0a1.5 1.5 0 10-1.5-1.5A1.5 1.5 0 0015 11z"/></svg>`,
        `<svg viewBox="0 0 24 24"><path fill="#2196f3" d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8z"/><path fill="#bbdefb" d="M12 12.5a5.5 5.5 0 005.2-3.8 1 1 0 00-.9-1.2h-8.6a1 1 0 00-.9 1.2A5.5 5.5 0 0012 12.5zM9 11a1.5 1.5 0 10-1.5-1.5A1.5 1.5 0 009 11zm6 0a1.5 1.5 0 10-1.5-1.5A1.5 1.5 0 0015 11z"/></svg>`
    ];

    const createBreakdownHtml = (votes) => votes.map((count, index) => `${moods_svgs[index]} ${count}`).join(' | ');

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
        
        qrCodeContainer.innerHTML = ""; // Vyčistit předchozí kód

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
