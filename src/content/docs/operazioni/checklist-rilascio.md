---
title: Checklist Rilascio
description: Controlli minimi prima di pubblicare una nuova versione prodotto.
---

Questa checklist riduce regressioni tra codice, documentazione e sito pubblicato.

## Prima del pacchetto

- Aggiornare changelog del prodotto.
- Aggiornare stato sviluppo del componente.
- Eseguire lint PHP/JS quando disponibili.
- Verificare BOM su file PHP, JS, CSS e Markdown tecnici.
- Controllare che endpoint/API documentati siano allineati al codice.

## Prima del deploy

- Creare backup o snapshot se il prodotto lo prevede.
- Verificare compatibilita con AI-HTML, Smart Bootstrap Manager e Smart Builder Site.
- Testare header, footer, menu, mobile, form e contenuti principali.
- Validare che i contenuti critici siano server-side.

## Dopo il deploy

- Verificare pagina pubblica.
- Verificare console browser.
- Verificare REST API principali.
- Aggiornare questa KB se il rilascio cambia workflow o contratti.

## Checklist specifica AI

- La pagina prodotto della KB e aggiornata.
- Il manuale operativo AI non contraddice il nuovo comportamento.
- Endpoint e tool nuovi sono documentati.
- Le azioni distruttive richiedono conferma.
- Le credenziali non sono state scritte in file o documentazione.
