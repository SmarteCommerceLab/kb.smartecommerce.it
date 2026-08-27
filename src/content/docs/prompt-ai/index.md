---
title: Libreria Prompt AI
description: Prompt pronti per iniziare una conversazione con ChatGPT, Claude o Gemini usando il contesto esportato da AI-HTML.
---

Questa sezione aiuta una persona non tecnica a iniziare una conversazione con una AI commerciale. I prompt non contengono password, API key o dettagli da interpretare manualmente: questi ultimi provengono dal file `smart-ecommerce-ai-context` esportato da WordPress.

## Procedura breve

1. In WordPress apri **AI-HTML > Esporta per AI**.
2. Scarica il file di contesto aggiornato.
3. Copia sempre [Prompt 1: Avviare la chat AI](/prompt-ai/primo-prompt/).
4. Allega file e prompt alla stessa conversazione.
5. Verifica il riepilogo restituito dalla AI.
6. Scegli il caso d'uso successivo e continua nella stessa chat.
7. Copia gli artefatti negli editor indicati, mantenendoli inattivi o in bozza fino alla verifica.

## Scegli un obiettivo

- [1. Avviare la chat AI](/prompt-ai/primo-prompt/): primo messaggio per comprendere sito, prodotti e vincoli.
- [Creare un sito completo](/prompt-ai/sito-completo/): architettura, pagine, header, footer e Canvas.
- [Header e footer](/prompt-ai/header-footer/): shell globale dinamica basata su WordPress.
- [Landing e pagine](/prompt-ai/landing-pagine/): pagine orientate a un'offerta o a una conversione.
- [eCommerce e contenuti](/prompt-ai/ecommerce-contenuti/): catalogo, schede prodotto, magazine e piano editoriale.
- [Analisi e correzione](/prompt-ai/analisi-correzione/): diagnosi di layout, responsive, accessibilita o runtime.

## Perche il Prompt 1 viene prima

Una chat commerciale non viene addestrata in modo permanente dal file allegato. Il primo prompt esegue invece un **grounding di sessione**: obbliga la AI a leggere i contratti, riepilogarli e attendere conferma. Questo riduce risposte generiche, codice incompatibile e domande tecniche rivolte all'utente.

## Regola per tutte le chat

La AI deve leggere il contesto come fonte autorevole, non inventare risorse assenti e non chiedere all'utente di scegliere hook, ID, menu location, token o widget. Se manca un dato commerciale, deve formulare una domanda semplice. Se manca una capability tecnica, deve segnalarlo senza creare una falsa compatibilita.

Ogni prompt deve inoltre chiedere alla AI di consultare `required_knowledge` e `knowledge_entry_points`, dichiarando i documenti effettivamente letti e la versione del Knowledge Pack. Se la chat non dispone della navigazione, deve dichiararlo e usare esclusivamente il `knowledge_snapshot` incorporato nel file esportato.

## Informazioni da aggiungere alla richiesta

Il file esportato contiene i dettagli tecnici. L'utente deve specificare soltanto:

1. obiettivo del sito o della pagina;
2. pubblico principale e problema da risolvere;
3. prodotti o servizi reali e loro priorita;
4. tono del brand ed eventuali riferimenti;
5. azione principale desiderata, come contatto, acquisto, preventivo o demo.

## Risultato atteso

Una risposta corretta contiene:

1. breve sintesi delle scelte;
2. eventuali domande indispensabili;
3. artefatti separati e completi;
4. destinazione di ogni artefatto;
5. checklist desktop, mobile, accessibilita e runtime;
6. nessuna pubblicazione automatica dalla chat classica.
