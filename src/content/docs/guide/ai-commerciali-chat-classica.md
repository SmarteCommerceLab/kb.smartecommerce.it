---
title: Usare ChatGPT e Claude dalla chat classica
description: Come istruire una AI commerciale con la KB Smart eCommerce e ottenere codice Canvas senza collegarla direttamente a WordPress.
---

Questa modalita serve a progettare contenuti e codice con la normale interfaccia di ChatGPT, Claude o Gemini. La chat legge la Knowledge Base pubblica, prepara una proposta e restituisce un payload da controllare e inserire in Smart Builder Site.

La chat classica **non e collegata al sito**, non conosce automaticamente lo stato corrente di WordPress e non puo pubblicare o fare rollback. Per operazioni dirette e governate usare Smart AI Studio con il plugin Smart AI Studio.

## Flusso semplice

```text
Brief dell'utente
-> pagine KB pubbliche
-> ChatGPT / Claude / Gemini
-> JSON AI Canvas o proposta di configurazione
-> controllo umano
-> Smart Builder Site / AI-HTML / SBM
```

1. Indicare alla AI le pagine KB pertinenti.
2. Descrivere sito, pagina, obiettivo, pubblico e contenuto richiesto.
3. Allegare il manifest live del sito quando la proposta usa menu, logo, contatti, form o impostazioni.
4. Chiedere un output conforme al tipo di destinazione.
5. Controllare il risultato prima di inserirlo nel Canvas o applicarlo in WordPress.

## Prompt iniziale

```text
Lavora come progettista Smart eCommerce.
Leggi prima:
- https://kb.smartecommerce.it/ai/contesto-training/
- https://kb.smartecommerce.it/guide/authoring-ai-canvas/
- https://kb.smartecommerce.it/api/wordpress-runtime-canvas/

Destinazione: widget AI Canvas di Smart Builder Site.
Non inventare menu, URL, logo, contatti, form, ID media o impostazioni WordPress.
Usa i componenti runtime AI-HTML per le risorse globali e i token SBM per il design.
Restituisci soltanto JSON valido con html, css, js, design_mode e gsap_plugins.
Il contenuto deve funzionare senza JavaScript; JavaScript e solo progressive enhancement.
```

## Informazioni da fornire

La qualita dipende dal contesto disponibile. Fornire almeno:

- nome e settore del sito;
- pagina e obiettivo;
- pubblico e tono;
- contenuti verificati;
- prodotti Smart eCommerce installati e relative versioni;
- manifest AI-HTML, catalogo widget SBS e contratto SBM quando disponibili;
- media autorizzati o indicazione di usare segnaposto.

Se questi dati non sono disponibili, la AI deve produrre una bozza e indicare chiaramente cosa resta da collegare. Non deve simulare dati del sito.

## Output ammessi

| Richiesta | Output corretto | Destinazione |
| --- | --- | --- |
| Sezione o pagina visuale | JSON AI Canvas | Smart Builder Site |
| Struttura pagina | Blueprint JSON | Smart Builder Site |
| Header o footer alternativo | Code Slot con componenti runtime | AI-HTML |
| Palette, font, spaziatura | Proposta di valori conformi allo schema | Smart Bootstrap Manager |
| Opzioni tema | Proposta conforme allo schema opzioni | AI-HTML |

La chat non deve restituire PHP da incollare nel Canvas. Non deve creare un secondo Bootstrap, un secondo header globale o link di navigazione statici.

## Quando usare Smart AI Studio

Usare Smart AI Studio, e non la sola chat classica, quando occorre:

- ispezionare capability e configurazioni live;
- selezionare automaticamente KnowledgePack compatibili;
- creare preview e diff;
- chiedere conferma;
- eseguire operazioni tipizzate;
- verificare il sito pubblicato;
- registrare costi, audit e rollback.

Le API key BYOK di OpenAI, Anthropic o Google appartengono all'utente e vengono configurate nello Studio. Non vanno inserite nei prompt, nella KB o nel plugin WordPress.
