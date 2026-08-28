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
- Gestione backend dei widget per singola pagina.
- Revisioni ripristinabili per modifiche al JSON e al codice dei widget.

## Pagine e widget nel backend

La schermata **Pagine e widget** elenca soltanto le pagine che usano un template SBS. Aprendo una pagina si lavora su un solo documento alla volta e si dispone di:

- anteprima integrata della pagina;
- Builder JSON e, per i template blog, Compose JSON;
- editor individuale del codice di ogni widget;
- editor guidato di testi, immagini, CTA, responsive e motion;
- campi HTML, CSS e JavaScript separati per AI Canvas;
- comandi per spostare, duplicare, attivare, disattivare ed eliminare un widget.

Ogni comando riscrive il JSON canonico dopo la sanitizzazione e crea una revisione. Backend, Customizer e API non possiedono copie differenti: sono tre interfacce sullo stesso storage WordPress.

## Confini di proprieta

| Elemento | Prodotto responsabile |
| --- | --- |
| Header, footer e shell del sito | AI-HTML |
| Widget e contenuti della pagina | Smart Builder Site |
| Token, Bootstrap, librerie e governance visuale | Smart Bootstrap Manager |
| Navigazione, URL, media e contenuti | WordPress runtime |

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
- leggere e aggiornare un singolo widget tramite campi semantici senza riscrivere l'intera pagina.

Da SBS `1.22.0` il percorso preferito per modifiche ordinarie e:

```text
GET context -> GET widget schema -> GET pagina/widget -> PATCH campi semantici -> preview -> verifica frontend
```

Il tipo del widget non e modificabile dalla PATCH semantica. Per sostituire la struttura si usa il contratto Builder completo, con validazione e revisione.

Una AI non deve:

- mettere header/footer nel JSON pagina se appartengono ad AI-HTML;
- caricare librerie motion duplicate;
- annidare CSS/JS condivisi dentro ogni widget;
- salvare JSON senza validazione o revisione quando impatta pagine live.
- duplicare nel Customizer una configurazione gia aggiornata dal backend.
- usare un'operazione widget senza identificare pagina, modalita Builder/Compose e indice corrente.

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
