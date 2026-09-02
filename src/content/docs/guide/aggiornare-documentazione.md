---
title: Aggiornare Documentazione
description: Procedura per mantenere la Knowledge Base allineata allo sviluppo.
---

La KB deve essere aggiornata insieme al codice. Ogni modifica funzionale deve produrre almeno una verifica documentale.

## Quando aggiornare

- Nuovo endpoint REST.
- Nuovo widget o modifica schema JSON.
- Cambio contratto tra tema e plugin.
- Nuova capability o policy di sicurezza.
- Rilascio di versione.
- Modifica visibile alla UI o ai flussi illustrati da screenshot.
- Modifica a installazione, deploy o rollback.

## Procedura

1. Aggiornare il documento sorgente locale del componente.
2. Aggiornare o creare la pagina corrispondente in questa KB.
3. Eseguire `npm run build`.
4. Pubblicare la cartella `dist/` su `kb.smartecommerce.it/httpdocs`.
5. Verificare URL, ricerca e navigazione laterale.
6. Se la UI e cambiata, acquisire nuovamente le schermate dall'ultima release installata.

## Convenzioni

- Titoli chiari e stabili.
- Endpoint in blocchi codice.
- Tabelle per versioni, capability e responsabilita.
- Link interni quando una procedura dipende da un altro prodotto.
- Screenshot reali, senza credenziali o dati personali, nominati con prodotto,
  pagina e versione: `smart-login-identity-oauth-2.8.2.webp`.
- Ogni immagine deve avere testo alternativo utile e indicare nella didascalia
  la versione del prodotto. Mockup e schermate di versioni precedenti non devono
  essere usati come riferimento operativo.
