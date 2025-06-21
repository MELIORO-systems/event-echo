# Event Echo - Aplikace pro sběr živé zpětné vazby

## 📋 Obsah

1. [Co je Event Echo?](#co-je-event-echo)
2. [Ukázka aplikace](#ukázka-aplikace)
3. [Klíčové funkce](#klíčové-funkce)
4. [Požadavky](#požadavky)
5. [Rychlý start (5 minut)](#rychlý-start-5-minut)
6. [Detailní návod k nasazení](#detailní-návod-k-nasazení)
   - [Krok 1: Vytvoření Firebase projektu](#krok-1-vytvoření-firebase-projektu)
   - [Krok 2: Získání konfiguračních údajů](#krok-2-získání-konfiguračních-údajů)
   - [Krok 3: Konfigurace aplikace](#krok-3-konfigurace-aplikace)
   - [Krok 4: Nasazení na hosting](#krok-4-nasazení-na-hosting)
7. [Struktura projektu](#struktura-projektu)
8. [Detailní popis config.js](#detailní-popis-configjs)
9. [Typy otázek a jejich použití](#typy-otázek-a-jejich-použití)
10. [Přizpůsobení vzhledu](#přizpůsobení-vzhledu)
11. [Správa více událostí](#správa-více-událostí)
12. [Jak aplikace funguje](#jak-aplikace-funguje)
13. [Řešení problémů](#řešení-problémů)
14. [Bezpečnost a GDPR](#bezpečnost-a-gdpr)
15. [Tipy pro použití na akcích](#tipy-pro-použití-na-akcích)
16. [Často kladené otázky](#často-kladené-otázky)

## Co je Event Echo?

Event Echo je jednoduchá webová aplikace pro okamžitý sběr zpětné vazby od publika během živých událostí. Účastníci hlasují pomocí svých mobilních telefonů a výsledky se zobrazují v reálném čase na velkoplošné obrazovce.

**Ideální pro:**
- 🎓 Školení a workshopy
- 🎤 Konference a přednášky
- 💒 Svatby a oslavy
- 🏢 Firemní meetingy
- 🎭 Kulturní akce

## Ukázka aplikace

### Hlavní obrazovka (pro účastníky)
- Jednoduchý design s tlačítkem pro hlasování
- Zobrazení aktuálních statistik
- Možnost změny jazyka a barevného motivu

### Prezentační obrazovka (pro promítání)
- Velké čísla a grafy
- QR kód pro snadné připojení
- Automatická aktualizace v reálném čase

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

⚠️ **Důležité:** Testovací režim umožňuje přístup komukoliv po dobu 30 dnů. Pro produkční použití nastavte bezpečnostní pravidla (viz sekce Bezpečnost).

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
   projectUrl: "https://vase-domena.cz/event-echo/",
   ```
   Toto je URL, kde bude aplikace dostupná. Použije se pro QR kód.

4. **Nastavte unikátní ID projektu**
   ```javascript
   projectId: "skoleni-excel-2025-01",
   ```
   ⚠️ **Důležité:** Každá událost MUSÍ mít unikátní ID!

5. **Vyberte typ otázek**
   ```javascript
   activeQuestionSet: 'mood', // nebo 'understanding', 'preference', 'agreement'
   ```

6. **Nastavte frekvenci hlasování**
   ```javascript
   votingFrequency: 'daily', // nebo 'hourly', 'once'
   ```

### Krok 4: Nasazení na hosting

#### Možnost A: GitHub Pages (zdarma)

1. **Vytvořte GitHub repozitář**
   - Přihlaste se na [github.com](https://github.com)
   - Klikněte "New repository"
   - Pojmenujte ho (např. "moje-event-echo")
   - Nastavte jako Public

2. **Nahrajte soubory**
   - Nahrajte všechny soubory projektu
   - Commitněte změny

3. **Aktivujte GitHub Pages**
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: main, folder: / (root)
   - Save

4. **Aplikace bude dostupná na:**
   ```
   https://[váš-username].github.io/[název-repozitáře]/
   ```

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
└── readme.md           # Dokumentace
```

## Detailní popis config.js

### Základní nastavení

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
                            // Nechte prázdné pro výchozí pozadí
    recommended_width: "500px",
    recommended_height: "750px",
    recommended_format: "JPG, PNG, WEBP"
}
```

### Přizpůsobení textů

Všechny texty aplikace můžete upravit v sekci `translations`. Příklad:

```javascript
translations: {
    cs: {
        appTitle: "Váš vlastní název",
        appSubtitle: "Váš vlastní podtitul",
        buttonText: "Klikněte zde",
        // ... atd
    }
}
```

## Typy otázek a jejich použití

### 1. Nálada (mood)
**Použití:** Zjištění celkové atmosféry
- 😢 Hrozně
- 😟 Špatně  
- 😐 Neutrálně
- 😊 Dobře
- 😄 Skvěle

**Vhodné pro:** Začátek/konec akce, pravidelné měření během dne

### 2. Pochopení (understanding)
**Použití:** Kontrola, zda publikum rozumí
- ❌ Vůbec
- ❓ Trochu
- ✓ Dobře
- ✓✓ Většinou
- ✓✓✓ Perfektně

**Vhodné pro:** Školení, přednášky, technické prezentace

### 3. Líbivost (preference)
**Použití:** Hodnocení obsahu nebo nápadu
- ⭐ Vůbec ne
- ⭐⭐ Ujde to
- ⭐⭐⭐ Je to dobré
- ⭐⭐⭐⭐ Líbí se mi to
- ⭐⭐⭐⭐⭐ Je to super

**Vhodné pro:** Hodnocení produktů, návrhů, vystoupení

### 4. Souhlas (agreement)
**Použití:** Hlasování o návrzích
- 👎👎 Zásadně nesouhlasím
- 👎 Nesouhlasím
- 🤷 Neutrální
- 👍 Souhlasím
- 👍👍 Zcela souhlasím

**Vhodné pro:** Rozhodování, schvalování, týmové meetingy

## Přizpůsobení vzhledu

### Barevné motivy

Aplikace obsahuje 5 předdefinovaných motivů:
- **Default** - Modrá profesionální
- **Dark** - Tmavý režim
- **Forest** - Zelená přírodní
- **Ocean** - Tyrkysová mořská
- **Sunset** - Oranžová teplá

Uživatelé si mohou motiv změnit v nastavení aplikace.

### Vlastní pozadí

1. Připravte obrázek (doporučeno 500x750px)
2. Nahrajte ho do hlavní složky projektu
3. V config.js nastavte:
   ```javascript
   backgroundImage: {
       filename: "moje-pozadi.jpg"
   }
   ```

### Úprava CSS

Pro pokročilé úpravy editujte:
- `style.css` - vzhled hlavní aplikace
- `zobraz-kod.css` - vzhled prezentačního režimu

## Správa více událostí

### Metoda 1: Různá projectId (doporučeno)

Použijte stejnou instalaci pro více událostí změnou `projectId`:

```javascript
// Pondělní školení
projectId: "skoleni-excel-pondeli",

// Úterní školení  
projectId: "skoleni-excel-utery",

// Firemní party
projectId: "vanoce-2025",
```

### Metoda 2: Samostatné instalace

Pro každou událost vytvořte kopii všech souborů v jiné složce:
```
/skoleni-excel/
/firemni-party/
/konference-2025/
```

## Jak aplikace funguje

### Tok dat

1. **Uživatel otevře aplikaci** → Načte se konfigurace
2. **Klikne na tlačítko** → Otevře se okno s možnostmi
3. **Vybere možnost** → Kontrola, zda už nehlasoval
4. **Hlas se odešle** → Firebase transakce zajistí bezpečný zápis
5. **Databáze se aktualizuje** → Všichni vidí nové výsledky
6. **Zobrazí se poděkování** → S personalizovanou zprávou

### Technické detaily

- **Real-time synchronizace:** Firebase `onSnapshot` listenery
- **Prevence duplicit:** localStorage ukládá časovou značku
- **Transakce:** Zajišťují konzistenci při současném hlasování
- **Historie:** Ukládá se max 1000 posledních hlasů

## Řešení problémů

### Aplikace se nenačítá

1. **Zkontrolujte konzoli** (F12 → Console)
2. **Ověřte Firebase konfiguraci** - jsou všechny údaje správně?
3. **Zkontrolujte URL** - odpovídá nastavení v config.js?

### Hlasování nefunguje

- **"Firebase is not configured"** → Doplňte firebaseConfig
- **"Using default projectId"** → Změňte projectId na unikátní
- **Chyba transakce** → Zkontrolujte internetové připojení

### QR kód se nezobrazuje

- Vyplňte `projectUrl` v config.js
- URL musí být kompletní včetně https://

### Statistiky se neaktualizují

1. Ověřte, že Firebase projekt běží
2. Zkontrolujte, zda nevypršel testovací režim (30 dnů)
3. Refreshněte stránku (Ctrl+F5)

## Bezpečnost a GDPR

### Ochrana dat

✅ **Aplikace NEUKLÁDÁ:**
- Žádné osobní údaje
- IP adresy
- Cookies (kromě technických)
- Identifikátory zařízení

✅ **Aplikace UKLÁDÁ pouze:**
- Typ hlasu (0-4)
- Časovou značku
- Typ otázky

### Firebase bezpečnostní pravidla

Pro produkční použití nastavte v Firebase Console → Firestore → Rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /moodStats/{document} {
      allow read: if true;
      allow write: if request.auth == null 
        && request.resource.data.keys().hasAll(['votes', 'history'])
        && request.resource.data.votes is map
        && request.resource.data.history is list;
    }
  }
}
```

## Tipy pro použití na akcích

### Před akcí

1. **Otestujte vše předem** - včetně promítání
2. **Připravte QR kód** - vytiskněte nebo připravte slide
3. **Zkontrolujte internet** - na místě akce
4. **Nastavte správný typ otázek** - podle typu akce

### Během akce

1. **Ukažte QR kód** na začátku
2. **Vyzvěte k hlasování** v klíčových momentech
3. **Komentujte výsledky** - využijte je k interakci
4. **Promítejte statistiky** - použijte zobraz-kod.html

### Po akci

1. **Stáhněte data** - screenshot nebo export z Firebase
2. **Analyzujte trendy** - kdy byla nejlepší nálada?
3. **Sdílejte výsledky** - s organizátory/účastníky

## Často kladené otázky

**Q: Kolik hlasů zvládne aplikace?**
A: Firebase free tier: 50 000 čtení a 20 000 zápisů denně. To stačí na tisíce hlasujících.

**Q: Lze exportovat data?**
A: Ano, z Firebase Console můžete data exportovat do JSON.

**Q: Funguje offline?**
A: Ne, aplikace vyžaduje internetové připojení.

**Q: Lze přidat více jazyků?**
A: Ano, stačí přidat nový jazyk do sekce `translations` v config.js.

**Q: Jak dlouho se data uchovávají?**
A: Dokud je nesmazete nebo nezrušíte Firebase projekt.

**Q: Je to zdarma?**
A: Ano, pro běžné použití. Firebase má velkorysé free limity.

---

💡 **Potřebujete pomoc?** Kontaktujte [MELIORO Systems](https://melioro.cz)

⭐ **Líbí se vám aplikace?** Dejte hvězdičku na [GitHubu](https://github.com/melioro-systems/event-echo)
