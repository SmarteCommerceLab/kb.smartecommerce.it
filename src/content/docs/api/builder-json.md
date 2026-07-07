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
