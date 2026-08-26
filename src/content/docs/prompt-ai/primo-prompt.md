---
title: 1. Avviare la chat AI
description: Il primo prompt da usare per far comprendere alla AI sito, prodotti, risorse e limiti operativi.
---

Questo e il primo messaggio da inviare in ogni nuova conversazione con ChatGPT, Claude o Gemini. Non chiede di creare codice: prepara il contesto e verifica che la AI abbia compreso l'ecosistema.

## Cosa allegare

Allega il file JSON scaricato da **AI-HTML > Esporta per AI**. Non allegare password, API key, cookie, nonce o credenziali WordPress.

## Prompt 1 integrale

```text
Leggi integralmente il file smart-ecommerce-ai-context allegato e usalo come fonte autorevole per tutta questa conversazione.

In questa fase non generare codice e non proporre ancora modifiche. Non chiedermi di interpretare endpoint, ID, menu location, hook, token, widget o capability. Non inventare risorse assenti.

Rispondi soltanto con:
1. identita e obiettivo del sito che hai compreso;
2. prodotti Smart eCommerce attivi e loro ruolo;
3. menu, pagine, risorse e integrazioni disponibili;
4. vincoli AI-HTML, Smart Builder Site e Smart Bootstrap Manager da rispettare;
5. operazioni che puoi progettare in questa chat e operazioni che non puoi applicare direttamente;
6. massimo cinque informazioni commerciali realmente mancanti.

Chiudi chiedendomi quale risultato voglio ottenere. Considera questo riepilogo il contratto operativo della sessione e attendi la mia conferma prima di continuare.
```

## Risposta corretta della AI

La risposta deve essere breve, riferita al sito allegato e priva di codice. Deve distinguere chiaramente:

- dati gia presenti nel contesto;
- informazioni commerciali mancanti;
- artefatti che puo generare;
- modifiche che una chat classica non puo applicare autonomamente.

Se la AI chiede una API key, una password, un hook, un ID o una menu location, la risposta non e conforme. Correggila con:

```text
Questa informazione tecnica deve essere ricavata dal contesto allegato. Non chiederla a me. Se non e presente, dichiarala come capability mancante e continua senza inventarla.
```

## Passaggio successivo

Dopo avere confermato il riepilogo, resta nella stessa conversazione e usa uno dei prompt specifici della [libreria Prompt AI](/prompt-ai/).
