---
title: Configurare OAuth in Smart Login
description: Dove ottenere e come inserire le credenziali Google, Microsoft, GitHub e Apple.
---

Smart Login usa OAuth per autenticare l'identita presso un provider esterno e aprire una sessione WordPress. Non importa password social nel sito. Ogni sito deve avere credenziali proprie e una callback HTTPS registrata esattamente.

## Prima di iniziare

1. Apri **Smart Login > Impostazioni > Identity / OAuth**.
2. Copia la callback mostrata nel riquadro del provider. Non ricostruirla manualmente.
3. Decidi se consentire la creazione automatica degli utenti WordPress.
4. Imposta ruolo e domini consentiti nel riquadro Provisioning utenti.
5. Conserva i secret fuori dal repository. In produzione sono consigliate le costanti in `wp-config.php`.

## Parametri richiesti

| Provider | Parametri da copiare nel plugin | Portale di origine |
| --- | --- | --- |
| Google | Client ID, Client Secret | Google Cloud Console, client OAuth Web |
| Microsoft | Application Client ID, Client Secret, Tenant | Microsoft Entra admin center, App registrations |
| GitHub | Client ID, Client Secret | GitHub, Settings, Developer settings, OAuth Apps |
| Apple | Services ID, Team ID, Key ID, chiave privata P8 | Apple Developer, Certificates, Identifiers & Profiles |

## Google

1. Apri [Google Cloud Console](https://console.cloud.google.com/) e seleziona o crea un progetto.
2. Configura la schermata consenso OAuth e il pubblico dell'applicazione.
3. In **APIs & Services > Credentials** crea un client **Web application**.
4. Incolla la callback di Smart Login tra gli **Authorized redirect URIs**.
5. Copia Client ID e Client Secret nel plugin, salva e abilita Google.

La callback ha forma:

```text
https://tuosito.it/wp-admin/admin-post.php?action=sslpp_google_callback
```

Il redirect deve coincidere esattamente, inclusi HTTPS, dominio e percorso. Riferimento: [OAuth 2.0 per applicazioni Web](https://developers.google.com/identity/protocols/oauth2/web-server).

## Microsoft

1. Apri [Microsoft Entra admin center](https://entra.microsoft.com/) e vai in **App registrations > New registration**.
2. Scegli i tipi di account ammessi.
3. In **Authentication** aggiungi una piattaforma **Web** e incolla la callback di Smart Login.
4. In **Certificates & secrets** crea un client secret e copiane subito il **Value**, non il Secret ID.
5. Copia nel plugin l'**Application (client) ID**, il secret e il tenant.

La callback ha forma:

```text
https://tuosito.it/wp-admin/admin-post.php?action=sslpp_oauth_callback_microsoft
```

Usa `common` per account personali e organizzativi, `organizations` per soli account di lavoro, oppure il **Directory (tenant) ID** per limitare l'accesso a una singola organizzazione. Riferimento: [registrazione e login Web Microsoft](https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-web-app-sign-in).

## GitHub

1. In GitHub apri **Settings > Developer settings > OAuth Apps**.
2. Seleziona **New OAuth App** e inserisci nome e Homepage URL.
3. Incolla la callback di Smart Login in **Authorization callback URL**.
4. Registra l'app, copia Client ID e genera un nuovo Client Secret.
5. Inserisci entrambi nel plugin, salva e abilita GitHub.

La callback ha forma:

```text
https://tuosito.it/wp-admin/admin-post.php?action=sslpp_oauth_callback_github
```

Evita callback wildcard: una callback esatta riduce l'esposizione del codice di autorizzazione. Riferimento: [creare una OAuth App GitHub](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app).

## Apple

Apple richiede l'iscrizione all'Apple Developer Program e piu passaggi degli altri provider.

1. Abilita **Sign in with Apple** su un App ID primario.
2. Crea un **Services ID**, abilita Sign in with Apple e associa il sito all'App ID primario.
3. Registra dominio e Return URL copiando la callback mostrata da Smart Login.
4. Crea una chiave con Sign in with Apple, scarica il file `.p8` e annota il Key ID.
5. Recupera il Team ID dall'account sviluppatore.
6. Inserisci Services ID, Team ID, Key ID e contenuto completo del file `.p8` nel plugin.

La Return URL ha forma:

```text
https://tuosito.it/wp-admin/admin-post.php?action=sslpp_oauth_callback_apple
```

Il file `.p8` viene scaricato una sola volta: conservalo in un secret manager. Riferimenti: [configurazione Web Sign in with Apple](https://developer.apple.com/help/account/capabilities/configure-sign-in-with-apple-for-the-web/) e [creazione della chiave privata](https://developer.apple.com/help/account/capabilities/create-a-sign-in-with-apple-private-key/).

## Creazione e associazione utenti

Il toggle **Crea utente WordPress automaticamente** decide se un'identita verificata e non ancora presente puo generare un nuovo account. Se e disattivato, il provider funziona solo per identita gia associate o per utenti esistenti secondo la policy configurata.

Per un sito pubblico usa un ruolo privo di privilegi, normalmente Subscriber o Customer. Non e possibile assegnare automaticamente Administrator. L'associazione automatica per email verificata e comoda, ma va attivata solo quando il dominio e la governance degli account sono affidabili.

## Collaudo prima della pubblicazione

1. Salva la configurazione e apri **Configurazione guidata**.
2. Verifica che il provider risulti pronto e che la callback sia raggiungibile.
   Il controllo mostra separatamente credenziali richieste, callback HTTPS, raggiungibilita, stato HTTP e tempo di risposta. Non effettua una login e non invia i secret al browser o al provider durante la diagnosi.
3. Prova una login reale in una finestra privata.
4. Verifica utente creato o associato, ruolo assegnato e redirect finale.
5. Prova anche rifiuto del consenso, email non consentita e account non registrato.
6. Mantieni almeno un accesso amministrativo locale di recupero durante il collaudo.

## Errori frequenti

- **Configurazione incompleta:** manca un campo o il secret e vuoto.
- **redirect_uri_mismatch:** la callback registrata non coincide con quella mostrata dal plugin.
- **Accesso negato:** dominio email, registrazione o policy utente non consentono il login.
- **Pulsante disabilitato:** il provider e stato abilitato prima di completare le credenziali.
- **Apple token non valido:** Services ID, Team ID, Key ID o chiave P8 non appartengono alla stessa configurazione.

## Gestione dei secret

Le esportazioni JSON non includono i secret. In `wp-config.php` sono disponibili:

```php
define('SSLPP_GOOGLE_CLIENT_SECRET', '...');
define('SSLPP_MICROSOFT_CLIENT_SECRET', '...');
define('SSLPP_GITHUB_CLIENT_SECRET', '...');
define('SSLPP_APPLE_PRIVATE_KEY', "-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----");
```

Non inserire queste costanti in repository pubblici e ruota immediatamente una credenziale esposta.
