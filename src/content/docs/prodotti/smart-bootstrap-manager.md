---
title: Smart Bootstrap Manager
description: Prodotto commerciale per Bootstrap, Customizer, componenti, token visuali e motion system.
---

Smart Bootstrap Manager `1.10.18` e il sistema che governa Bootstrap e il design condiviso nell'ecosistema Smart eCommerce. Offre a WordPress, Smart Builder Site e AI-HTML un unico runtime, regole visuali coerenti e contratti tecnici verificabili. Dalla versione 1.9 incorpora anche le funzionalita utili precedentemente distribuite come Smart Customizer Frameworks.

## Panoramica prodotto

SBM e l'**unico responsabile del runtime Bootstrap**. Carica e configura Bootstrap 5.3.8 una sola volta, impedendo a tema e plugin compatibili di introdurre copie concorrenti. Questo riduce conflitti tra versioni, duplicazione degli asset, differenze impreviste nel layout e costi di manutenzione.

Il valore del prodotto si articola in cinque aree.

### Token, palette, tipografia e Customizer integrati

Colori, font, spaziature, raggi, breakpoint e altre decisioni visuali vengono governati attraverso token condivisi. Il Customizer consente di intervenire sul design senza separare la configurazione visuale dal runtime che la applica. Tema, pagine e componenti consumano quindi le stesse regole, evitando variabili CSS parallele e correzioni ripetute in piu prodotti.

### Compatibilita con SBS e AI-HTML

Smart Builder Site e AI-HTML possono generare pagine e widget sapendo quale versione di Bootstrap, quali token e quali capacita sono disponibili. SBM espone un contratto consumer stabile: i prodotti collegati non devono caricare librerie duplicate e possono produrre markup coerente con il sito. Questo rende piu affidabile sia l'editing umano sia la generazione assistita dall'AI.

### Componenti governati e contratti JSON/API

Cataloghi, preset e configurazioni dei componenti sono descritti tramite dati strutturati e JSON validato. Le API e la specifica OpenAPI rendono queste informazioni ispezionabili anche da integrazioni e agenti AI. Prima di applicare una modifica e quindi possibile leggere lo stato, verificare lo schema, validare il dato e controllare il risultato.

### Migrazione automatica da SCF

SBM incorpora le funzioni operative di Smart Customizer Frameworks e riconosce le configurazioni storiche gia presenti nel sito. L'aggiornamento conserva option, funzioni e hook compatibili, permettendo di rimuovere SCF come plugin separato senza ricostruire il design o interrompere i consumer esistenti.

### Diagnostica dei conflitti e controllo degli asset

Gli strumenti di sistema verificano runtime, aggiornamenti, compatibilita e possibili duplicazioni. L'obiettivo non e soltanto segnalare un errore, ma identificare quale prodotto sta caricando Bootstrap o una libreria condivisa fuori dal contratto previsto. Il controllo centralizzato facilita manutenzione, supporto e verifica delle installazioni prima della pubblicazione.

In termini commerciali, SBM non e un semplice caricatore di Bootstrap: e il livello di **governance del design e del runtime** che rende compatibili WordPress, Smart Builder Site, AI-HTML e i componenti dell'ecosistema.

## Esperienza amministrativa

La navigazione interna usa sezioni esplicite, coerenti con Smart Builder Site e AI-HTML:

- **Panoramica**: contiene la Dashboard e gli accessi rapidi.
- **Progettazione**: raccoglie Design Bootstrap e Componenti.
- **Integrazioni**: contiene API e automazioni.
- **Sistema**: contiene controlli sul runtime, aggiornamenti e ripristino.

Le sezioni organizzano le funzioni senza aggiungere pagine duplicate. La console mantiene quattro flussi operativi:

- **Design Bootstrap**: configurazione e anteprima di palette, tipografia, layout e componenti.
- **Componenti**: riepilogo KPI, registri Builder e Compose, JSON validato, import, export e backup.
- **API e automazioni**: JSON avanzato, REST API, OpenAPI e strumenti per agenti AI.
- **Sistema**: diagnostica, aggiornamenti, compatibilita e ripristino selettivo.

Le vecchie route Inspector, JSON/API, OpenAPI, Diagnostica e Reset restano compatibili ma non occupano piu voci separate nel menu.

### Pagina Componenti e widget

La pagina mette per primi i quattro indicatori necessari a capire lo stato della configurazione: componenti totali, abilitati, disabilitati e backup disponibili. Subito dopo espone stato dello schema e azioni di download, ripristino e backup. Gli inventari estesi non vengono duplicati nella schermata: il dato completo resta disponibile negli editor JSON separati.

![Gerarchia della pagina Componenti con KPI in testa](/images/sbm-componenti-gerarchia-1.10.18.svg)

### Cosa rappresentano i tre registri

I registri non contengono il codice HTML, CSS, JavaScript o PHP del widget. Dichiarano componenti gia implementati da Smart Builder Site o da un consumer compatibile e permettono a SBM di governarne disponibilita e metadati.

| Registro | Contenuto | Utilizzo |
| --- | --- | --- |
| Builder `items` | Componenti standard e corporate | Pagine e widget del controllo Builder |
| Builder `special_items` | Tipi speciali gia supportati | Componenti con comportamento dedicato |
| Compose `items` | Componenti editoriali e blog | Layout gestiti dal controllo Compose |

![Relazione tra registri SBM e renderer dei componenti](/images/sbm-registri-componenti-1.10.18.svg)

Ogni voce usa un `code` che deve coincidere con l'ID del renderer reale, piu `label`, `suffix`, `category` e stato `enabled`. Registrare un ID inesistente non crea un widget: produce soltanto una voce senza renderer utilizzabile.

### Gestione operativa dei registri

1. Implementare o verificare il renderer nel prodotto responsabile, normalmente Smart Builder Site.
2. Registrare lo stesso ID tecnico nel registro Builder o Compose appropriato.
3. Controllare il payload nell'editor JSON avanzato e formattarlo prima del salvataggio.
4. Salvare entrambi i registri; SBM valida il dato e crea lo snapshot necessario al ripristino.
5. Usare download, import, default e backup per trasferimento o recupero della configurazione.

La rimozione delle tre tabelle dalla pagina non elimina alcun componente e non modifica i JSON salvati. Riduce una rappresentazione duplicata: ispezione e CRUD continuano a essere disponibili nell'area JSON, mentre questa KB conserva definizioni e procedura.

## Responsabilita

- Fornire Bootstrap e componenti condivisi.
- Gestire token CSS, palette e tipografia.
- Esporre librerie UI/FX senza duplicazioni.
- Eseguire effetti dichiarati tramite attributi `data-sbin-*`.
- Governare compliance visuale e `prefers-reduced-motion`.
- Fornire i controlli Customizer Builder e Compose.
- Gestire cataloghi componenti e widget tramite JSON validato.
- Offrire CRUD, import, export e backup delle configurazioni componenti.

## Migrazione da SCF

Le option storiche `smart_mizer_option_*`, le funzioni `smart_customizer_framework_*` e i relativi hook restano compatibili. Aggiornare prima SBM alla versione 1.9 o successiva, quindi disattivare e rimuovere Smart Customizer Frameworks. SBM rileva automaticamente i dati esistenti e li espone nella pagina **Componenti e widget**.

SCF non e piu un requisito separato e non deve essere installato nei nuovi siti.

## Edizioni commerciali

La versione 1.10 dichiara il futuro perimetro Free/Premium senza applicare ancora limitazioni.

**Free** mantiene runtime Bootstrap, design token di base, controlli Customizer, diagnostica essenziale, compatibilita SBS e migrazione SCF.

**Premium** e previsto per cataloghi componenti personalizzati, backup e revisioni, import/export professionale, JSON/API AI, governance avanzata, librerie effetti estese, audit e strumenti multi-sito.

Il runtime, il design gia pubblicato e la compatibilita del sito non devono essere disabilitati quando una licenza Premium scade. La licenza governa aggiornamenti, supporto e strumenti avanzati, non la resa del sito.

## Regola di integrazione

Tema e plugin consumer non devono caricare copie proprie di Bootstrap o GSAP se SBM e attivo. Devono consumare i contratti SBM e produrre markup compatibile.

## Operativita AI

SBM e interrogabile e modificabile tramite il namespace REST:

```text
/wp-json/smart-bootstrap-manager/v1
```

Una AI autenticata deve seguire il flusso `context -> schema -> validate -> confirm -> update -> verify`. Consulta [API AI Smart Bootstrap Manager](/api/smart-bootstrap-manager-ai-api/) e [Governare SBM con una AI](/guide/smart-bootstrap-manager-ai-workflow/).

Una AI puo:

- aggiornare token e preset documentati;
- correggere compliance motion;
- documentare librerie integrate;
- verificare che i consumer non duplicano asset;
- proporre effetti con fallback content-first.

Una AI non deve:

- spostare responsabilita di rendering widget dentro SBM;
- aggiungere librerie globali senza contratto e changelog;
- forzare motion critico senza `prefers-reduced-motion`;
- cambiare palette dominante senza verificare pagine consumer.

## Verifica

- nessun doppio Bootstrap;
- attributi `data-sbin-*` interpretati correttamente;
- degrado senza JavaScript accettabile;
- documentazione librerie aggiornata.

## Contratto AI-HTML

AI-HTML deve leggere il consumer contract SBM e usare i token runtime `--bs-*` e `--sbin-*`. Non deve caricare una seconda copia di Bootstrap, sostituire la palette con token paralleli o inizializzare librerie motion gia governate da SBM.

```text
GET /wp-json/smart-bootstrap-manager/v1/ai/consumer-contract?consumer=ai-html
```

La specifica centrale e disponibile nello [Swagger SBM](https://repository.smartecommerce.it/swagger/smart-bootstrap-manager/).

## Documenti locali utili

- `smart-bootstrap-manager/INTEGRATION-GUIDE.md`
- `smart-bootstrap-manager/MOTION-EFFECTS-CATALOG.md`
- `smart-bootstrap-manager/COMPLIANCE-GUIDE-2026.md`
- `smart-bootstrap-manager/SMART-BUILDER-SITE-INTEGRATION.md`
- `smart-bootstrap-manager/LIBRARIES-OFFICIAL-REFERENCES.md`
