---
title: Modificare pagine SBS con una AI
description: Flusso semantico verificabile per aggiornare widget Smart Builder Site senza riscrivere codice non necessario.
---

Questa procedura e il percorso standard per Smart AI Studio, agenti privati e integrazioni API. Una chat classica senza accesso autenticato puo seguirla per preparare una proposta, ma non puo applicarla direttamente al sito.

## Flusso obbligatorio

1. **Leggi il contesto SBS** per identificare pagina, template e capability disponibili.
2. **Leggi il catalogo widget** per conoscere campi, alias e vincoli.
3. **Leggi la pagina o il singolo widget** prima di proporre modifiche.
4. **Usa la PATCH semantica** per contenuti, media, CTA, responsive e motion.
5. **Apri la preview SBS** e verifica il risultato.
6. **Controlla il frontend** a mobile, tablet e desktop.
7. **Conferma la revisione** o ripristina quella precedente.

## Responsabilita dello stack

| Fase | Prodotto responsabile |
| --- | --- |
| Identita, menu, header, footer e risorse globali | AI-HTML |
| Pagina, widget e contenuti | Smart Builder Site |
| Token, Bootstrap, responsive e motion runtime | Smart Bootstrap Manager |
| Conversazione, proposta, conferma e orchestrazione | Smart AI Studio |
| Pacchetti e aggiornamenti | Smart Repository |
| Contratti leggibili da persone e AI | Knowledge Base |

## Quando usare AI Canvas

AI Canvas serve quando il catalogo SBS non rappresenta l'esperienza richiesta. Non va scelto automaticamente per cambiare un titolo, un'immagine, una CTA o una regola responsive. In un Canvas i campi HTML, CSS e JavaScript restano separati per validazione e manutenzione; Bootstrap, GSAP e le librerie autorizzate vengono caricate da SBM, non dal codice del Canvas.

## Verifica di accettazione

- nessun header o footer duplicato nella pagina;
- nessuna libreria Bootstrap o GSAP caricata dal widget;
- testi essenziali presenti nel DOM iniziale;
- immagini con testo alternativo;
- CTA con URL valido;
- motion disattivabile con `prefers-reduced-motion`;
- nessun errore nella console;
- revisione SBS disponibile dopo il salvataggio.

Un flusso che richiede all'utente di conoscere endpoint, indici o chiavi interne non e una UX consumer completa: questi dettagli devono essere risolti da Smart AI Studio o dall'interfaccia WordPress.
