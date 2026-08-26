---
title: Esportare il contesto per una chat AI
description: Procedura semplice per allegare a ChatGPT, Claude o Gemini lo stato tecnico del sito senza condividere credenziali.
---

La funzione **AI-HTML > Esporta per AI** crea un singolo documento JSON che permette a una chat commerciale di comprendere il sito senza richiedere spiegazioni tecniche all'utente.

## Procedura

1. Aprire **AI-HTML > Esporta per AI**.
2. Controllare lo stato **Contesto completo** o le integrazioni mancanti.
3. Selezionare **Scarica contesto AI**.
4. Allegare il file `.json` a una nuova conversazione ChatGPT, Claude o Gemini.
5. Selezionare **Copia richiesta iniziale** e incollarla nella chat.
6. Descrivere pagine, contenuti, pubblico e obiettivo del sito.
7. Copiare gli artefatti restituiti nei rispettivi editor AI-HTML o SBS.
8. Validare prima di attivare o pubblicare.

## Contenuto del documento

Il formato `smart-ecommerce-ai-context` contiene:

- manifest AI-HTML;
- contratto consumer SBM;
- registry widget SBS;
- hook Code Slots disponibili;
- versioni e capability dei prodotti;
- punti di ingresso KB;
- istruzioni vincolanti per la AI.

Il documento e read-only e viene generato al momento. Non viene registrato nel database.

## Dati esclusi

La redazione automatica elimina API key, password, token, nonce, header di autorizzazione, cookie, sessioni e account WordPress. Non allegare manualmente credenziali aggiuntive.

## Output atteso

La AI deve restituire:

- `code`, `css` e `js` separati per Code Slots AI-HTML;
- `design_mode` coerente con SBM;
- JSON AI Canvas o Blueprint conforme al registry SBS;
- componenti runtime per menu, logo, contatti, social e add-on;
- istruzioni brevi di inserimento, senza chiedere all'utente di interpretare endpoint o ID.

La chat classica non modifica direttamente WordPress. L'operatore copia gli artefatti e conserva il controllo dell'attivazione.
