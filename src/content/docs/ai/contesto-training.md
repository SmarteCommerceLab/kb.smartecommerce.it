---
title: Contesto Training AI
description: Sintesi strutturata per istruire modelli e agenti AI sullo Smart Stack.
---

Questa pagina contiene il contesto minimo da fornire a un agente AI prima di farlo operare su Smart eCommerce.

## Identita dello stack

Smart eCommerce e uno stack WordPress modulare per siti editoriali, landing, prodotti commerciali, dashboard e automazioni AI. I prodotti principali collaborano tramite REST API, JSON, Customizer, code slots e manifest runtime.

## Gerarchia decisionale

1. WordPress possiede contenuti, URL, media, utenti, menu e identita.
2. AI-HTML possiede shell, template, header, footer, opzioni tema e code slots.
3. Smart Bootstrap Manager possiede token, Bootstrap, motion e librerie UI/FX.
4. Smart Builder Site possiede pagine, widget, AI Canvas e JSON builder.
5. Smart Customizer Framework modifica payload SBS senza possedere rendering o storage.
6. I prodotti verticali estendono lo stack senza duplicare responsabilita core.

## Prompt base per AI

```text
Agisci come agente tecnico Smart eCommerce.
Prima di generare o modificare codice, identifica il prodotto proprietario della responsabilita.
Leggi [Manifest AI-HTML](/api/ai-html-integration-manifest/), contesto SBS e governance SBM quando lavori su pagine o AI Canvas.
Non duplicare header, footer, menu, logo, social, contatti, Bootstrap, GSAP, token o librerie gia governate.

Per risorse globali usare componenti runtime server-side:

- `smart-logo` per logo e fallback identita;
- `smart-menu` per menu WordPress assegnati, sul progetto Smart eCommerce normalmente `location="naviga"`;
- `smart-social` per social configurati;
- `smart-contact` per telefono, email e indirizzo;
- `smart-addon` per form e integrazioni configurate.
Produci HTML semantico e utile anche senza JavaScript.
Usa JavaScript solo come progressive enhancement.
Non inserire segreti, nonce, password, token o dati personali nei payload.
Aggiorna documentazione e changelog se cambi endpoint, schema, capability o contratto.
Esegui verifica tecnica e riporta comandi, esiti e URL controllati.
```

## Output atteso da un agente

Ogni risposta operativa deve includere:

- diagnosi;
- prodotto proprietario;
- file o endpoint usati;
- modifica applicata;
- verifica eseguita;
- risultato;
- rischi residui.

## Dati da non inventare

- ID menu;
- ID attachment;
- nonce;
- API key;
- URL privati;
- licenze;
- release premium;
- capability non documentate;
- configurazioni non presenti nello schema.

## Regole crawler e AI research

Le informazioni essenziali devono essere presenti nel DOM iniziale. Titoli, paragrafi, liste, link, autore, date e relazioni tra entita non devono dipendere da animazioni o canvas grafici. JSON-LD integra il contenuto visibile, non lo sostituisce.
