# Event Echo - Aplikace pro sběr živé zpětné vazby

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/melioro-systems/event-echo)

## 📋 Obsah

1. [Co je Event Echo?](#co-je-event-echo)
2. [Demo](#demo)
3. [Klíčové funkce](#klíčové-funkce)
4. [Požadavky](#požadavky)
5. [Rychlý start (5 minut)](#rychlý-start-5-minut)
6. [Detailní návod k nasazení](#detailní-návod-k-nasazení)
7. [Struktura projektu](#struktura-projektu)
8. [Konfigurace aplikace](#konfigurace-aplikace)
9. [Typy otázek](#typy-otázek)
10. [Přizpůsobení vzhledu](#přizpůsobení-vzhledu)
11. [Správa více událostí](#správa-více-událostí)
12. [Prezentační režim](#prezentační-režim)
13. [Struktura databáze](#struktura-databáze)
14. [Řešení problémů](#řešení-problémů)
15. [Contributing](#contributing)
16. [Licence](#licence)

## Co je Event Echo?

Event Echo je jednoduchá webová aplikace pro okamžitý sběr zpětné vazby od publika během živých událostí. Účastníci hlasují pomocí svých mobilních telefonů a výsledky se zobrazují v reálném čase na velkoplošné obrazovce.

**Ideální pro:**
- 🎓 Školení a workshopy
- 🎤 Konference a přednášky
- 💒 Svatby a oslavy
- 🏢 Firemní meetingy
- 🎭 Kulturní akce

## Demo

- **Živá ukázka aplikace**: [eventecho.online](https://eventecho.online)
- **Landing page s příklady použití**: [eventecho.cz](https://eventecho.cz)

## Klíčové funkce

✅ **4 typy zpětné vazby**
- 😊 Nálada (Jak se cítíte?)
- 🧠 Pochopení (Jak rozumíte tématu?)
- ⭐ Líbivost (Jak se vám to líbí?)
- 👍 Souhlas (Souhlasíte s návrhem?)

✅ **Real-time statistiky** - výsledky se aktualizují okamžitě bez obnovování stránky

✅ **Podpora více projektů** - jedna databáze pro neomezený počet událostí

✅ **Lokalizace** - čeština a angličtina, automatická detekce jazyka

✅ **5 barevných motivů** - přizpůsobte vzhled vaší akci

✅ **QR kód** - účastníci se připojí jedním naskenováním

✅ **Ochrana proti duplicitám** - nastavitelná frekvence hlasování

✅ **Bez osobních údajů** - plně anonymní, GDPR compliant

## Požadavky

- Webový hosting (např. GitHub Pages - zdarma)
- Google účet (pro Firebase - zdarma do 50 000 čtení/den)
- Textový editor (např. VS Code, Notepad++)
- Základní znalost práce se soubory

## Rychlý start (5 minut)

1. **Stáhněte aplikaci**
   ```bash
   git clone https://github.com/melioro-systems/event-echo.git
   ```
   Nebo stáhněte jako ZIP z GitHubu

2. **Vytvořte Firebase projekt**
   - Jděte na [console.firebase.google.com](https://console.firebase.google.com)
   - Klikněte "Create project"
   - Pojmenujte projekt (např. "moje-udalosti")
   - Vytvořte Firestore databázi v testovacím režimu

3. **Zkopírujte konfiguraci**
   - V Firebase console: Project Settings → Your apps → Add web app
   - Zkopírujte `firebaseConfig` objekt

4. **Upravte config.js**
   ```javascript
   firebaseConfig: {
     // Sem vložte zkopírovaný objekt
   },
   projectUrl: "https://vase-domena.cz/", // URL vaší aplikace
   projectId: "moje-prvni-akce",         // Unikátní ID události
   ```

5. **Nahrajte na hosting a je hotovo!**

## Detailní návod k nasazení

### Krok 1: Vytvoření Firebase projektu

1. **Přihlaste se do Firebase Console**
   - Otevřete [console.firebase.google.com](https://console.firebase.google.com)
   - Přihlaste se Google účtem

2. **Vytvořte nový projekt**
   - Klikněte na "+ Add project" nebo "+ Vytvořit projekt"
   - Zadejte název (např. "Event-Echo-Database")
   - Google Analytics můžete vypnout (není potřeba)
   - Klikněte "Create project"

3. **Aktivujte Firestore databázi**
   - V levém menu: Build → Firestore Database
   - Klikněte "Create database"
   - Vyberte "Start in test mode" (pro začátek)
   - Vyberte region (např. eur3 - Frankfurt)
   - Klikněte "Enable"

⚠️ **Důležité:** Testovací režim umožňuje přístup komukoliv po dobu 30 dnů. Pro produkční použití nastavte bezpečnostní pravidla.

### Krok 2: Získání konfiguračních údajů

1. **Přidejte webovou aplikaci**
   - Klikněte na ikonu ozubeného kola → Project settings
   - Sjeďte dolů k "Your apps"
   - Klikněte na ikonu </> (Web)
   - Zadejte název aplikace (např. "Event Echo Web")
   - Klikněte "Register app"

2. **Zkopírujte konfiguraci**
   - Firebase vám zobrazí kód s objektem `firebaseConfig`
   - Zkopírujte celý objekt včetně složených závorek

### Krok 3: Konfigurace aplikace

1. **Otevřete soubor config.js**

2. **Vložte Firebase konfiguraci**
   ```javascript
   firebaseConfig: {
     apiKey: "váš-api-key",
     authDomain: "váš-projekt.firebaseapp.com",
     projectId: "váš-projekt",
     storageBucket: "váš-projekt.appspot.com",
     messagingSenderId: "123456789",
     appId: "váš-app-id"
   }
   ```

3. **Nastavte URL projektu**
   ```javascript
   projectUrl: "https://vase-domena.cz/",
   ```

4. **Nastavte unikátní ID projektu**
   ```javascript
   projectId: "skoleni-excel-2025-01",
   ```

5. **Vyberte typ otázek**
   ```javascript
   activeQuestionSet: 'mood', // nebo 'understanding', 'preference', 'agreement'
   ```

### Krok 4: Nasazení na hosting

#### Možnost A: GitHub Pages (zdarma)

1. **Forkněte tento repozitář**
2. **Upravte config.js**
3. **Aktivujte GitHub Pages**
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: main, folder: / (root)
   - Save

#### Možnost B: Vlastní hosting

Nahrajte všechny soubory na váš webový server přes FTP.

## Struktura projektu

```
event-echo/
│
├── index.html          # Hlavní aplikace pro účastníky
├── style.css           # Styly hlavní aplikace  
├── script.js           # Logika hlavní aplikace
│
├── zobraz-kod.html     # Prezentační režim (pro promítání)
├── zobraz-kod.css      # Styly prezentačního režimu
├── zobraz-kod.js       # Logika prezentačního režimu
│
├── config.js           # ⚙️ HLAVNÍ KONFIGURAČNÍ SOUBOR
├── LICENSE             # MIT licence
└── README.md           # Tento soubor
```

## Konfigurace aplikace

### Základní nastavení v config.js

```javascript
// URL adresa vaší aplikace (pro QR kód)
projectUrl: "https://example.com/event-echo/",

// Unikátní identifikátor události
projectId: "unikatni-nazev-akce",

// Jak často může uživatel hlasovat
votingFrequency: 'daily',  // Možnosti:
                           // 'once' - pouze jednou
                           // 'hourly' - jednou za hodinu  
                           // 'daily' - jednou denně

// Typ otázek
activeQuestionSet: 'mood', // Možnosti:
                          // 'mood' - Jak se cítíte?
                          // 'understanding' - Jak rozumíte?
                          // 'preference' - Jak se vám to líbí?
                          // 'agreement' - Souhlasíte?
```

### Nastavení pozadí

```javascript
backgroundImage: {
    filename: "pozadi.jpg",  // Název souboru (musí být v hlavní složce)
    recommended_width: "500px",
    recommended_height: "750px",
    recommended_format: "JPG, PNG, WEBP"
}
```

### Přizpůsobení textů

Všechny texty aplikace můžete upravit v sekci `translations`:

```javascript
translations: {
    cs: {
        appTitle: "Váš vlastní název",
        appSubtitle: "Váš vlastní podtitul",
        buttonText: "Klikněte zde",
        // ... další texty
    }
}
```

## Typy otázek

### 1. Nálada (mood)
**Použití:** Zjištění celkové atmosféry
- 😢 Hrozně
- 😟 Špatně  
- 😐 Neutrálně
- 😊 Dobře
- 😄 Skvěle

### 2. Pochopení (understanding)
**Použití:** Kontrola, zda publikum rozumí
- ❌ Vůbec
- ❓ Trochu
- ✓ Dobře
- ✓✓ Většinou
- ✓✓✓ Perfektně

### 3. Líbivost (preference)
**Použití:** Hodnocení obsahu nebo nápadu
- ⭐ Vůbec ne
- ⭐⭐ Ujde to
- ⭐⭐⭐ Je to dobré
- ⭐⭐⭐⭐ Líbí se mi to
- ⭐⭐⭐⭐⭐ Je to super

### 4. Souhlas (agreement)
**Použití:** Hlasování o návrzích
- 👎👎 Zásadně nesouhlasím
- 👎 Nesouhlasím
- 🤷 Neutrální
- 👍 Souhlasím
- 👍👍 Zcela souhlasím

## Přizpůsobení vzhledu

### Barevné motivy

Aplikace obsahuje 5 předdefinovaných motivů:
- **Default** - Modrá profesionální
- **Dark** - Tmavý režim
- **Forest** - Zelená přírodní
- **Ocean** - Tyrkysová mořská
- **Sunset** - Oranžová teplá

### Vlastní pozadí

1. Připravte obrázek (doporučeno 500x750px)
2. Nahrajte ho do hlavní složky projektu
3. V config.js nastavte název souboru

### Úprava CSS

Pro pokročilé úpravy editujte:
- `style.css` - vzhled hlavní aplikace
- `zobraz-kod.css` - vzhled prezentačního režimu

## Správa více událostí

### Metoda 1: Různá projectId (doporučeno)

```javascript
// Pondělní školení
projectId: "skoleni-excel-pondeli",

// Úterní školení  
projectId: "skoleni-excel-utery",
```

### Metoda 2: Samostatné instalace

Pro každou událost vytvořte kopii všech souborů v jiné složce.

### Metoda 3: Více konfigurací s URL parametrem

Aplikace podporuje načítání různých konfiguračních souborů pomocí URL parametru:

1. **Vytvořte nový config soubor**, např. `config-workshop.js`:
   ```javascript
   const config = {
       projectId: "workshop-2025",
       activeQuestionSet: 'understanding',
       // ... další nastavení
   };
   ```

2. **Zavolejte aplikaci s parametrem**:
   ```
   https://vase-domena.cz/?config=workshop
   ```

3. **Podporované názvy**: 
   - Soubor musí být pojmenován `config-[nazev].js`
   - V URL použijte pouze `[nazev]` bez předpony a přípony
   - Například: `config-firemni.js` → `?config=firemni`

**Příklad použití:**
```bash
# Výchozí konfigurace
https://eventecho.online/

# Workshop s kontrolou porozumění
https://eventecho.online/?config=workshop

# Firemní akce s hlasováním
https://eventecho.online/?config=firemni
```

⚠️ **Bezpečnostní poznámka**: Aplikace povoluje pouze předem definované konfigurace (whitelist v `index.html`). Pro přidání nové konfigurace upravte pole `allowedConfigs`.

## Prezentační režim

### Co je prezentační režim?

Speciální stránka (`zobraz-kod.html`) pro promítání na velkoplošnou obrazovku:
- Živé statistiky hlasování
- QR kód pro snadné připojení
- Velké, čitelné číslice

### Jak používat

1. Otevřete `zobraz-kod.html`
2. Použijte fullscreen režim (F11)
3. Promítněte na plátno

## Struktura databáze

### Firebase Firestore struktura

```javascript
moodStats (kolekce)
└── [projectId] (dokument)
    ├── votes (objekt)
    │   ├── mood: [0, 0, 0, 0, 0]
    │   ├── understanding: [0, 0, 0, 0, 0]
    │   ├── preference: [0, 0, 0, 0, 0]
    │   └── agreement: [0, 0, 0, 0, 0]
    └── history (pole)
        └── [{
            voteType: "mood",
            voteIndex: 3,
            timestamp: Timestamp
        }, ...]
```

## Řešení problémů

### Aplikace se nenačítá

1. Zkontrolujte konzoli (F12 → Console)
2. Ověřte Firebase konfiguraci
3. Zkontrolujte URL

### Hlasování nefunguje

- **"Firebase is not configured"** → Doplňte firebaseConfig
- **Chyba transakce** → Zkontrolujte internetové připojení

### QR kód se nezobrazuje

- Vyplňte `projectUrl` v config.js
- URL musí být kompletní včetně https://

## Contributing

Příspěvky jsou vítány! 

1. Forkněte repozitář
2. Vytvořte feature branch (`git checkout -b feature/AmazingFeature`)
3. Commitněte změny (`git commit -m 'Add some AmazingFeature'`)
4. Pushněte do branch (`git push origin feature/AmazingFeature`)
5. Otevřete Pull Request

### Coding Standards

- Používejte ES6+ syntax
- Komentujte složitější části kódu
- Testujte na různých zařízeních
- Dodržujte stávající code style

## Licence

Tento projekt je licencován pod MIT licencí - viz soubor [LICENSE](LICENSE) pro detaily.

---

💡 **Tip**: Pro nejlepší zážitek použijte aplikaci na velkoplošné obrazovce s prezentačním režimem!

⭐ **Líbí se vám aplikace?** Dejte hvězdičku na [GitHubu](https://github.com/melioro-systems/event-echo)

🐛 **Našli jste chybu?** Vytvořte [issue](https://github.com/melioro-systems/event-echo/issues)

📧 **Kontakt**: [pavel@melioro.cz](mailto:pavel@melioro.cz)

🌐 **Web**: [eventecho.cz](https://eventecho.cz) | [melioro.cz](https://melioro.cz)
