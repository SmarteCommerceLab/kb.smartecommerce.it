# Deploy KB Smart eCommerce

La KB e un sito statico Astro/Starlight. Il server finale deve servire solo il contenuto della cartella `dist/`.

## Build locale

```powershell
npm.cmd run build
```

## Deploy FTP

Impostare le variabili d'ambiente nella sessione PowerShell:

```powershell
$env:KB_FTP_HOST = "kb.smartecommerce.it"
$env:KB_FTP_USER = "<utente-ftp>"
$env:KB_FTP_PASS = "<password-ftp>"
$env:KB_FTP_REMOTE_ROOT = "httpdocs"
npm.cmd run deploy:ftp
```

Il comando ricostruisce il sito e carica ricorsivamente i file in `httpdocs`.

## URL pubblici

- Home: https://kb.smartecommerce.it/
- Sitemap: https://kb.smartecommerce.it/sitemap-index.xml
- Robots: https://kb.smartecommerce.it/robots.txt
