Event Echo - Aplikace pro sběr živé zpětné vazby
Vítejte v dokumentaci pro aplikaci Event Echo. Tento soubor vám poskytne veškeré informace potřebné k nasazení, konfiguraci a pochopení fungování této univerzální aplikace pro sběr zpětné vazby v reálném čase.

Obsah
Co je Event Echo?

Klíčové funkce

Struktura souborů

Návod k nasazení (krok za krokem)

Krok 1: Vytvoření databáze na Firebase

Krok 2: Získání konfiguračních údajů

Krok 3: Nastavení config.js

Krok 4: Nasazení na hosting

Detailní popis config.js

Jak aplikace funguje

Hlavní aplikace (index.html)

Prezentační režim (zobraz-kod.html)

Ladění a hlášky v konzoli

Co je Event Echo?
Event Echo je jednoduchá, ale výkonná webová aplikace navržená pro okamžitý sběr zpětné vazby od publika během živých událostí, jako jsou školení, prezentace, konference nebo společenské akce. Umožňuje účastníkům snadno a anonymně vyjádřit své pocity nebo názory pomocí mobilního telefonu, přičemž výsledky se v reálném čase promítají na hlavní obrazovku.

Aplikace je plně konfigurovatelná a umožňuje sbírat různé typy zpětné vazby – od nálady až po míru souhlasu s prezentovaným tématem.

Klíčové funkce
Čtyři typy zpětné vazby: Možnost volby mezi sadami otázek pro Náladu, Pochopení, Líbivost a Souhlas.

Živé statistiky: Výsledky hlasování se díky databázi Firebase zobrazují v reálném čase bez nutnosti obnovovat stránku.

Podpora více projektů: Jedna databáze může obsluhovat neomezený počet různých událostí, každá s vlastními statistikami.

Prezentační režim: Specializovaná stránka (zobraz-kod.html) s QR kódem pro snadné připojení účastníků a zobrazení výsledků na velkém plátně.

Plná konfigurovatelnost: Veškeré texty, popisky, typy otázek a nastavení se mění na jediném místě v souboru config.js.

Lokalizace: Aplikace je připravena pro češtinu a angličtinu.

Personalizace vzhledu: Možnost nastavit vlastní obrázek na pozadí a vybrat si z pěti barevných motivů.

Struktura souborů
Projekt se skládá ze dvou hlavních částí:

1. Hlavní aplikace (pro uživatele):

index.html: Hlavní stránka, kde uživatelé hlasují.

style.css: Styly pro hlavní aplikaci.

script.js: Veškerá logika hlavní aplikace (hlasování, zobrazení statistik, nastavení).

2. Prezentační režim (pro promítání):

zobraz-kod.html: Stránka určená pro promítání na plátno. Zobrazuje statistiky a QR kód.

zobraz-kod.css: Styly pro prezentační režim.

zobraz-kod.js: Logika pro prezentační režim (načítání dat a generování QR kódu).

3. Společný konfigurační soubor:

config.js: Srdce celé aplikace. Zde probíhá veškeré nastavení.

Návod k nasazení (krok za krokem)
Krok 1: Vytvoření databáze na Firebase
Pro sběr hlasů v reálném čase aplikace využívá bezplatnou databázi Firestore od Googlu.

Jděte na stránku Firebase.

Klikněte na "Přejít do konzole" (Go to console) a přihlaste se svým Google účtem.

Klikněte na "+ Vytvořit projekt".

Pojmenujte svůj projekt (např. event-echo-database) a pokračujte. Můžete nechat Google Analytics zapnuté, nebo je vypnout.

Po vytvoření projektu se ocitnete v jeho hlavní konzoli. V menu vlevo klikněte na "Sestavení" (Build) -> "Firestore Database".

Klikněte na velké tlačítko "Vytvořit databázi".

Nyní se vás zeptá na bezpečnostní pravidla. Pro jednoduchost a testování vyberte "Spustit v testovacím režimu".

Upozornění: Testovací režim povolí komukoliv číst a zapisovat do vaší databáze po dobu 30 dnů. Pro produkční aplikaci by se pravidla musela nastavit přísněji.

Vyberte umístění serverů (např. eur3 (Frankfurt)) a klikněte na "Povolit".

Vaše online databáze je připravena!

Krok 2: Získání konfiguračních údajů
V konzoli vašeho nového Firebase projektu klikněte na ikonu ozubeného kola vedle "Přehled projektu" a zvolte "Nastavení projektu".

V sekci "Vaše aplikace" klikněte na ikonu pro web: </>.

Zadejte přezdívku pro vaši aplikaci (např. "Event Echo Web") a klikněte na "Zaregistrovat aplikaci".

Firebase vám nyní zobrazí kód s vašimi unikátními klíči. Najděte v něm objekt nazvaný firebaseConfig. Zkopírujte celý obsah tohoto objektu (od { až po }).

Krok 3: Nastavení config.js
Otevřete soubor config.js ve vašem projektu a proveďte následující úpravy:

Vložte Firebase údaje: Najděte sekci firebaseConfig a vložte do ní zkopírovaný objekt z předchozího kroku.

Nastavte URL projektu: Do položky projectUrl vložte kompletní URL adresu, na které bude běžet vaše hlavní aplikace (index.html). Je to klíčové pro správné vygenerování QR kódu.

Příklad pro GitHub Pages: "https://VASEJMENO.github.io/NAZEV-REPOZITARE/"

Nastavte ID projektu: Změňte projectId z "default-project-id" na unikátní název pro vaši událost (např. "skoleni-excel-2025"). Tento název musí být unikátní pro každou událost, aby se jejich statistiky nepletly.

Zvolte typ otázek: V položce activeQuestionSet si vyberte jeden ze čtyř typů otázek: 'mood', 'understanding', 'preference', nebo 'agreement'.

Krok 4: Nasazení na hosting
Nyní stačí nahrát všechny soubory (index.html, style.css, script.js, config.js, zobraz-kod.html, zobraz-kod.css, zobraz-kod.js a případný obrázek na pozadí) na jakýkoliv webový hosting. Skvělou a bezplatnou volbou je GitHub Pages.

Detailní popis config.js
Toto je nejdůležitější soubor pro přizpůsobení aplikace.

const config = {
    // DŮLEŽITÉ: Vložte sem URL adresu, kde je nasazena vaše hlavní aplikace (index.html)
    // Příklad: "[https://uzivatel.github.io/event-echo/](https://uzivatel.github.io/event-echo/)"
    projectUrl: "", 

    // DŮLEŽITÉ: Změňte pro každou kopii/nasazení aplikace na unikátní název!
    // Příklad: "svatba-jana-a-eva-2025" nebo "skoleni-excel-pokrocili"
    projectId: "default-project-id", 
    
    // Jak často může uživatel hlasovat? Možnosti: 'daily', 'hourly', 'once'
    votingFrequency: 'daily',

    // Jaký typ otázek se má zobrazit? Možnosti: 'mood', 'understanding', 'preference', 'agreement'
    activeQuestionSet: 'mood',

    // Nastavení obrázku na pozadí hlavní aplikace
    backgroundImage: {
        filename: "", // např. "pozadi.jpg". Pokud je prázdné, obrázek se nezobrazí.
        recommended_width: "500px",
        recommended_height: "750px",
        recommended_format: "JPG, PNG, WEBP"
    },

    // Překlady a texty aplikace.
    translations: {
        // ...
    },
    
    // Vaše unikátní klíče z Firebase.
    firebaseConfig: {
        // ...
    }
};

Jak aplikace funguje
Hlavní aplikace (index.html)
Uživatelské rozhraní: Uživatel vidí hlavní stránku, kde může kliknutím na tlačítko otevřít modální okno a hlasovat. Po odhlasování se mu zobrazí personalizovaná zpráva.

Statistiky projektu: Na hlavní stránce se v reálném čase zobrazují statistiky pouze pro aktuální projectId.

Nastavení: Po kliknutí na ikonu ozubeného kola se rozbalí panel, kde si uživatel může změnit jazyk a barevný motiv. Zde se také zobrazují globální statistiky sečtené ze všech projektů v databázi.

Místní úložiště (localStorage): Aplikace si do prohlížeče uživatele ukládá:

Zvolený jazyk a motiv.

Časovou značku posledního hlasování pro daný projekt, aby respektovala nastavení votingFrequency.

Prezentační režim (zobraz-kod.html)
Účel: Tato stránka je navržena pro zobrazení na velkoplošné obrazovce.

Funkčnost:

Načte projectId a projectUrl z config.js.

Připojí se k databázi a v reálném čase zobrazuje statistiky pouze pro daný projectId.

Pomocí knihovny qrcode.js vygeneruje QR kód, který odkazuje na projectUrl, aby se účastníci mohli snadno připojit.

Ladění a hlášky v konzoli
Pokud otevřete vývojářskou konzoli prohlížeče (obvykle klávesou F12), uvidíte logovací hlášky, které vám pomohou pochopit, co se děje:

--- Event Echo App Initializing ---: Znamená, že se skript script.js úspěšně spustil.

Firebase initialized successfully.: Aplikace se úspěšně připojila k vaší databázi.

Applying translations for language: cs: Aplikace nastavuje texty pro zvolený jazyk.

Rendering options for: mood: Aplikace vykresluje ikony a popisky pro zvolenou sadu otázek.

Vote cast for option 2: Uživatel kliknul na třetí možnost.

Processing vote...: Skript začal zpracovávat hlas.

Vote successfully saved.: Hlas byl úspěšně zapsán do databáze.

Běžné varování a chyby:

WARNING: Using default 'projectId'...: Zapomněli jste v config.js změnit výchozí projectId.

WARNING: Firebase is not configured...: Nevložili jste své údaje do firebaseConfig. Aplikace poběží, ale bez ukládání a zobrazování statistik.

Error during vote transaction...: Problém při komunikaci s databází. Zkontrolujte připojení k internetu a správnost firebaseConfig.
