<!-- Nahradit v zobraz-kod.html sekci <head> tímto kódem -->
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title data-config-key="pageTitle">Zobrazení hlasování</title>
    <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>📊</text></svg>">
    <link rel="stylesheet" href="zobraz-kod.css">
    
    <script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/qrcodejs@1.0.0/qrcode.min.js"></script>

    <!-- Dynamické načítání konfigurace (stejné jako v index.html) -->
    <script>
        // Získat parametr config z URL
        const urlParams = new URLSearchParams(window.location.search);
        const configName = urlParams.get('config');
        
        // Whitelist povolených konfiguračních souborů
        const allowedConfigs = ['mood', 'understanding', 'preference', 'agreement', 'demo'];
        
        // Určit který config soubor načíst
        let configFile = 'config.js'; // výchozí
        
        if (configName && allowedConfigs.includes(configName)) {
            configFile = `config-${configName}.js`;
            console.log(`Loading custom config: ${configFile}`);
        } else if (configName) {
            console.warn(`Invalid config parameter: ${configName}. Using default config.`);
        }
        
        // Dynamicky vytvořit script tag pro config
        document.write('<script src="' + configFile + '"><\/script>');
    </script>
    
    <script src="zobraz-kod.js" defer></script>
</head>
