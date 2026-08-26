---
title: Usare ChatGPT e Claude dalla chat classica
description: Come istruire una AI commerciale con la KB Smart eCommerce e ottenere codice Canvas senza collegarla direttamente a WordPress.
---

Questa modalita serve a progettare contenuti e codice con la normale interfaccia di ChatGPT, Claude o Gemini. La chat legge la Knowledge Base pubblica, prepara una proposta e restituisce un payload da controllare e inserire in Smart Builder Site.

La chat classica **non e collegata al sito**, non conosce automaticamente lo stato corrente di WordPress e non puo pubblicare o fare rollback. Per operazioni dirette e governate usare Smart AI Studio con il plugin Smart AI Studio.

## Cosa deve conoscere l'utente

L'utente deve descrivere soltanto obiettivo, pubblico, contenuti, pagine e preferenze editoriali. Non deve conoscere endpoint REST, menu location, ID, token CSS, hook, capability o nomi dei widget.

Questi dati tecnici appartengono al contratto macchina del sito. Smart AI Studio li scopre automaticamente attraverso il collegamento governato del sito. Nella chat commerciale classica vengono invece esportati da WordPress con un unico comando e allegati come pacchetto di contesto.

Chiedere all'utente di copiare separatamente Manifest AI-HTML, contratto SBM e catalogo SBS e un flusso di emergenza, non l'esperienza finale prevista.

## Due percorsi supportati

| Modalita | Dati tecnici | Cosa puo fare la AI | Intervento utente |
| --- | --- | --- | --- |
| Chat classica | Manifest o pacchetto contesto allegato | Progetta e genera artefatti | Copia il pacchetto, poi copia Code Slot o Canvas |
| Smart AI Studio | Discovery, validazione e scrittura integrate | Genera, valida, applica, verifica e ripristina | Conferma le operazioni governate |

Una normale chat web non puo leggere endpoint WordPress protetti solo perche riceve il loro URL. Il precedente percorso basato su Custom GPT Actions, connector generici o MCP non e il flusso consumer supportato: e stato sostituito da Smart AI Studio, che collega il sito alla Smart Private AI e consente di scegliere nello Studio la AI privata oppure un provider commerciale configurato con API key personale.

Le API key dei provider restano nello Studio. I token del sito e `X-Smart-AI-Key` non devono essere incollati nella conversazione o inseriti nel pacchetto esportato.

## Pacchetto contesto con un solo copia e incolla

Quando non esiste un connector, WordPress deve offrire un unico export **Contesto per AI** che raccolga almeno:

- Manifest AI-HTML;
- consumer contract SBM per AI-HTML;
- catalogo e schema dei widget SBS;
- hook Code Slots disponibili;
- versioni e capability dei prodotti;
- soli dati operativi necessari, senza API key, nonce, utenti o altri segreti.

La chat deve trattare il pacchetto come read-only. L'utente non deve interpretarlo: lo allega e continua a parlare in linguaggio naturale.

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

Se disponibile, al punto 3 usare il pacchetto unico **Contesto per AI** invece dei singoli documenti tecnici.

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

Per `header_full` e `footer_full` deve inoltre leggere [Code Slots AI-HTML](/api/ai-html-code-slots/) e il consumer contract SBM. Se la modalita globale e `governed`, ogni valore visuale deve derivare da token semantici; un risultato con colori, font, spacing, scala tipografica o radius hardcoded e da considerare non valido prima dell'inserimento.

## Prova cieca di una chat commerciale

Per valutare realisticamente ChatGPT, Claude o Gemini senza vantaggi indebiti:

1. aprire una nuova conversazione senza memoria del progetto;
2. fornire soltanto il brief, gli URL pubblici della KB e un Manifest AI-HTML redatto dei segreti;
3. non allegare repository, sorgenti PHP, test, payload corretti precedenti o messaggi del validatore;
4. chiedere prima un piano del sito e poi gli artefatti uno alla volta;
5. conservare integralmente prompt e risposte;
6. validare gli output con gli endpoint dei prodotti senza correggerli manualmente;
7. misurare primo esito, numero di tentativi e violazioni.

La prova supera il requisito minimo quando la AI:

- assegna correttamente responsabilita ad AI-HTML, SBS e SBM;
- non inventa risorse WordPress;
- produce payload JSON validi e codice separato per destinazione;
- usa componenti runtime per logo, menu, social, contatti e form;
- rispetta il `design_mode` e i token;
- mantiene pagine e slot non attivi fino alla verifica;
- non richiede credenziali nel prompt.

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

## Obiettivo UX

Il percorso minimo per una persona non tecnica deve essere:

```text
Descrivi il sito
-> la AI scopre automaticamente lo stato WordPress
-> la AI propone pagine, header e footer
-> l'utente approva
-> copia e incolla Code Slot e Canvas
```

In una chat senza connector e ammesso un passaggio aggiuntivo: **Esporta Contesto per AI** in WordPress e allegalo alla conversazione. Qualsiasi flusso che richieda di scegliere endpoint, estrarre token o spiegare una menu location e troppo tecnico e deve essere considerato una lacuna del prodotto o dell'integrazione.
