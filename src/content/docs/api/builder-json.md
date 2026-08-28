---
title: Builder JSON
description: Convenzioni operative per JSON builder, import/export e AI Canvas.
---

Il Builder JSON e il formato di trasporto delle pagine Smart Builder Site.

## Principi

- Il JSON descrive contenuto, layout e impostazioni widget.
- Il rendering finale deve produrre HTML semantico.
- Motion e animazioni restano dichiarative.
- CSS e JS condivisi non devono essere annidati inutilmente nel JSON se appartengono al tema o a Code Slots.

## AI Canvas

AI Canvas puo contenere HTML/CSS/JS per sezioni avanzate, ma il contenuto informativo deve restare leggibile nel markup iniziale.

Nel backend SBS i tre campi sono separati per rendere esplicita la responsabilita di markup, stile locale e comportamento. La separazione non carica librerie: Bootstrap, GSAP e le altre risorse autorizzate restano sotto il controllo di Smart Bootstrap Manager.

## Operazioni sul singolo widget

SBS conserva i widget come array ordinato. Le operazioni disponibili nel backend modificano sempre l'array completo:

- **Sposta su/giu** scambia la posizione con il widget adiacente.
- **Attiva/disattiva** normalizza il campo `active` a `on` oppure `off`.
- **Duplica** inserisce una copia immediatamente dopo l'originale.
- **Elimina** rimuove il widget dall'array.

Dopo ogni operazione SBS applica il sanitizzatore Builder o Compose, aggiorna lo storage condiviso e crea una revisione. Una AI deve quindi leggere nuovamente il JSON dopo un'operazione prima di usare gli indici dei widget.

## Storage condiviso

Le chiavi seguono il contratto:

```text
sbs_page_{PAGE_ID}_builder_json
sbs_page_{PAGE_ID}_compose_json
```

Il backend, il Customizer e le API leggono queste stesse chiavi. Non bisogna sincronizzare manualmente piu copie dello stesso documento.

## Checklist AI prima del salvataggio

- Il JSON e valido.
- I testi principali sono server-side.
- Immagini hanno `alt` o campo equivalente.
- CTA e link sono URL verificabili.
- Motion e opzionale e dichiarativo.
- CSS/JS riutilizzabile non e duplicato inutilmente.
- Header/footer non sono inclusi come contenuto pagina.

## Documenti locali utili

- `smart-builder-site/BUILDER-JSON-EXAMPLES.md`
- `smart-builder-site/AI-API-GUIDE.md`
- `docs/smart-stack/AI-CANVAS-SPEC.md`
- `docs/smart-stack/AI-CANVAS-AUTHORING-GUIDE.md`
