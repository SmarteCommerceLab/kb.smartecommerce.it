---
title: Smart Builder Site
description: Page builder JSON, widget, rendering server-side e AI Canvas.
---

Smart Builder Site e il renderer dei contenuti pagina. Converte JSON builder in HTML semantico Bootstrap-first e mantiene compatibilita con Customizer, API e AI Canvas.

## Responsabilita

- Catalogo widget.
- Rendering server-side dei contenuti.
- Import/export JSON builder.
- AI Canvas per sezioni HTML/CSS/JS controllate.
- Attributi motion dichiarativi per SBM.

## Regole operative

- Il contenuto critico deve restare nel DOM iniziale.
- CSS e JS condivisi vanno nei Code Slots AI-HTML quando sono trasversali.
- Il JSON builder deve rimanere leggibile, versionabile e trasportabile.
- L'engine deve evitare logica visuale duplicata rispetto a Smart Bootstrap Manager.

## Operativita AI

Una AI puo:

- leggere contesto SBS e lista widget;
- generare o modificare JSON builder;
- applicare blueprint;
- aggiornare documentazione widget;
- proporre AI Canvas con HTML server-side leggibile.

Una AI non deve:

- mettere header/footer nel JSON pagina se appartengono ad AI-HTML;
- caricare librerie motion duplicate;
- annidare CSS/JS condivisi dentro ogni widget;
- salvare JSON senza validazione o revisione quando impatta pagine live.

## Verifica

- controllare schema JSON;
- verificare rendering server-side;
- aprire la pagina pubblica;
- controllare console browser se ci sono JS o motion;
- aggiornare `BUILDER-JSON-EXAMPLES.md` se cambia il contratto.

## Documenti locali utili

- `smart-builder-site/DEVELOPMENT-STATUS.md`
- `smart-builder-site/MOTION-SYSTEM.md`
- `smart-builder-site/WIDGET-REFERENCE.md`
- `smart-builder-site/BUILDER-JSON-EXAMPLES.md`
- `smart-builder-site/AI-API-GUIDE.md`
