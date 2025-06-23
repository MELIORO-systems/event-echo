# 📋 Event Echo - Kompletní průvodce nastavením

Tento průvodce vysvětluje **všechny možnosti**, které můžete v aplikaci Event Echo nastavit. Všechna nastavení se dělají v souboru `config.js`.

---

## 🔧 Základní nastavení projektu

### 1. Identifikace projektu

```javascript
projectId: "vanoce-2025"
```
- **Co to je**: Unikátní název vaší události
- **Proč je důležité**: Odděluje data různých akcí
- **Příklady**: `"skoleni-excel"`, `"firemni-party-2025"`, `"svatba-pavel-marie"`
- ⚠️ **Pozor**: Musí být unikátní! Pokud použijete stejné ID jako někdo jiný, budete sdílet data

### 2. URL projektu (pro QR kód)

```javascript
projectUrl: "https://moje-domena.cz/event-echo/"
```
- **Co to je**: Adresa, kde běží vaše aplikace
- **K čemu**: Generuje QR kód v prezentačním režimu
- **Pokud nevíte**: Nechte prázdné nebo vyplňte později

---

## 🗳️ Nastavení hlasování

### 3. Typ otázek

```javascript
activeQuestionSet: 'mood'
```

Můžete vybrat ze 4 typů otázek:

#### `'mood'` - Nálada
- **Otázka**: "Jak se teď cítíš?"
- **Možnosti**: 😢 Hrozně | 😟 Špatně | 😐 Neutrálně | 😊 Dobře | 😄 Skvěle
- **Vhodné pro**: Měření atmosféry, školení, workshopy

#### `'understanding'` - Pochopení
- **Otázka**: "Jak dobře rozumíte tématu?"
- **Možnosti**: ❌ Vůbec | ❓ Trochu | ✓ Dobře | ✓✓ Většinou | ✓✓✓ Perfektně
- **Vhodné pro**: Výuka, přednášky, technické prezentace

#### `'preference'` - Líbivost
- **Otázka**: "Jak se vám to líbí?"
- **Možnosti**: ⭐ Vůbec ne | ⭐⭐ Ujde to | ⭐⭐⭐ Je to dobré | ⭐⭐⭐⭐ Líbí se mi to | ⭐⭐⭐⭐⭐ Je to super
- **Vhodné pro**: Hodnocení produktů, nápadů, představení

#### `'agreement'` - Souhlas
- **Otázka**: "Souhlasíte?"
- **Možnosti**: 👎👎 Zásadně nesouhlasím | 👎 Nesouhlasím | 🤷 Neutrální | 👍 Souhlasím | 👍👍 Zcela souhlasím
- **Vhodné pro**: Hlasování, rozhodování, meetingy

### 4. Frekvence hlasování

```javascript
votingFrequency: 'daily'
```

- **`'once'`** - Každý může hlasovat pouze jednou za celou dobu
- **`'hourly'`** - Hlasovat lze jednou za hodinu
- **`'daily'`** - Hlasovat lze jednou denně (výchozí)

---

## 🎨 Vzhled aplikace

### 5. Obrázek na pozadí

```javascript
backgroundImage: {
    filename: "pozadi.jpg",        // Název souboru
    recommended_width: "500px",    // Doporučená šířka
    recommended_height: "750px",   // Doporučená výška
    recommended_format: "JPG, PNG, WEBP"
}
```

- **Jak použít**: Nahrajte obrázek do hlavní složky a nastavte jeho název
- **Tip**: Použijte průhledný obrázek (opacity se nastaví automaticky)
- **Pokud nechcete pozadí**: Nastavte `filename: ""`

### 6. Výchozí barevný motiv

```javascript
defaultTheme: 'default'
```

Možnosti:
- `'default'` - Modrá profesionální
- `'dark'` - Tmavý režim
- `'forest'` - Zelená přírodní
- `'ocean'` - Tyrkysová mořská
- `'sunset'` - Oranžová teplá

---

## 📝 Úprava textů a překladů

### 7. Základní texty aplikace

V sekci `translations` můžete upravit všechny texty:

```javascript
translations: {
    cs: {
        // Hlavní stránka
        pageTitle: "Vánoční párty 2025",        // Titulek v záložce prohlížeče
        appTitle: "Jak se bavíte?",             // Hlavní nadpis
        appSubtitle: "Dejte nám vědět!",        // Podnadpis
        buttonText: "Klikněte zde pro hlasování", // Text na hlavním tlačítku
        
        // Po hlasování
        thankYouMessage: "Děkujeme za váš hlas!",
        alreadyVotedMessage: "Už jste hlasovali, zkuste to později.",
        
        // Nastavení
        settingsTitle: "Nastavení & Statistiky",
        
        // Statistiky
        statsProjectTotal: "Celkem hlasů:",
        statsProjectBreakdown: "Rozložení:",
        statsGlobalTitle: "Globální statistiky",
        statsGlobalTotal: "Celkem hlasů (všechny projekty):",
        statsGlobalToday: "Dnes:",
        statsGlobalLastWeek: "Posledních 7 dní:",
        
        // Další
        gdprLinkText: "GDPR",
        gdprAlertText: "Tato aplikace neukládá žádné osobní údaje.",
        scanMeText: "Naskenujte QR kód a hlasujte!",
        footerText: 'Vytvořeno s ❤️'
    }
}
```

### 8. Texty pro jednotlivé typy otázek

Každý typ otázek má vlastní nastavení:

```javascript
questionSets: {
    mood: {
        // Texty specifické pro tento typ
        modalTitle: "Jak se teď cítíš?",         // Otázka v okně
        options: ["Hrozně", "Špatně", "Neutrálně", "Dobře", "Skvěle"], // 5 možností
        
        // Odpovědi po hlasování (pro každou možnost)
        responses: [
            { 
                text: "To nás mrzí. Třeba pomůže káva?",     // Text odpovědi
                link: {                                       // Volitelný odkaz
                    text: "Kde je káva",
                    url: "https://mapa-kavaren.cz"
                }
            },
            { text: "Snad bude lépe!", link: null },
            { text: "Díky za feedback.", link: null },
            { text: "Super!", link: null },
            { 
                text: "Paráda! Sdílejte dobrou náladu!",
                link: {
                    text: "Sdílet na FB",
                    url: "https://facebook.com"
                }
            }
        ],
        
        // Popisky pro statistiky
        statsProjectTotal: "Hlasů na této akci:",
        statsProjectBreakdown: "Nálady:",
        statsGlobalBreakdown: "Všechny nálady:"
    }
}
```

### 9. Vícejazyčnost

Aplikace podporuje češtinu (`cs`) a angličtinu (`en`). Struktura je stejná pro oba jazyky:

```javascript
translations: {
    cs: { /* české texty */ },
    en: { /* anglické texty */ }
}
```

---

## 🔥 Firebase nastavení

### 10. Připojení k databázi

```javascript
firebaseConfig: {
    apiKey: "AIzaSyBZVkwEynmCEFaxBv2b2B9FSqGYu4OLjUY",
    authDomain: "mereni-nalady-web.firebaseapp.com",
    projectId: "mereni-nalady-web",
    storageBucket: "mereni-nalady-web.firebasestorage.app",
    messagingSenderId: "478918382129",
    appId: "1:478918382129:web:a7bb4c8833310a72a2bb10"
}
```

- **Demo databáze**: Výchozí nastavení používá sdílenou demo databázi
- **Vlastní databáze**: Pokud chcete vlastní, postupujte podle návodu pro Firebase

---

## 💡 Praktické příklady konfigurace

### Příklad 1: Firemní školení

```javascript
projectId: "excel-skoleni-2025-01",
activeQuestionSet: 'understanding',
votingFrequency: 'hourly',
translations: {
    cs: {
        appTitle: "Excel pro pokročilé",
        appSubtitle: "Jak rozumíte probírané látce?",
        buttonText: "Ohodnotit pochopení"
    }
}
```

### Příklad 2: Svatba

```javascript
projectId: "svatba-pavel-marie",
activeQuestionSet: 'mood',
votingFrequency: 'once',
backgroundImage: {
    filename: "svatebni-kvetiny.jpg"
},
translations: {
    cs: {
        appTitle: "Pavel & Marie",
        appSubtitle: "Jak se bavíte na naší svatbě?",
        buttonText: "Sdílet pocity"
    }
}
```

### Příklad 3: Konference

```javascript
projectId: "tech-conf-2025",
activeQuestionSet: 'preference',
votingFrequency: 'daily',
defaultTheme: 'dark',
translations: {
    cs: {
        appTitle: "TechConf 2025",
        appSubtitle: "Ohodnoťte přednášky",
        buttonText: "Hlasovat"
    }
}
```

---

## 🚀 Pokročilé možnosti

### Více konfigurací pomocí URL parametru

Můžete mít více konfiguračních souborů:
1. Vytvořte `config-workshop.js`
2. Otevřete aplikaci s: `?config=workshop`

### Přizpůsobení odpovědí

Každá možnost hlasování může mít vlastní odpověď s odkazem:

```javascript
responses: [
    { 
        text: "Děkujeme! Zde jsou materiály:",
        link: {
            text: "Stáhnout prezentaci",
            url: "https://example.com/prezentace.pdf"
        }
    }
]
```

---

## ✅ Kontrolní seznam před spuštěním

- [ ] Změnili jste `projectId` na unikátní název?
- [ ] Vybrali jste správný `activeQuestionSet`?
- [ ] Nastavili jste vhodnou `votingFrequency`?
- [ ] Upravili jste texty podle své akce?
- [ ] Přidali jste pozadí? (volitelné)
- [ ] Otestovali jste hlasování?

---

## 📊 Zobrazení výsledků

- **Hlavní aplikace** (`index.html`): Základní statistiky
- **Prezentační režim** (`zobraz-kod.html`): QR kód + živé výsledky
- **Graf** (`zobraz-graf.html`): Časový průběh hlasování

---

**💡 Tip**: Začněte s výchozím nastavením a postupně upravujte podle potřeby!
