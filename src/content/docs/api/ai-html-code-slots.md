---
title: Code Slots AI-HTML
description: Hook, API e regole operative per gli slot codice del tema AI-HTML.
---

I Code Slots consentono di inserire blocchi HTML, CSS e JavaScript in hook controllati del tema AI-HTML.

## Endpoint

```text
GET  /wp-json/aihtml/v1/ai/code-slots
POST /wp-json/aihtml/v1/ai/code-slots
GET  /wp-json/aihtml/v1/ai/code-slots/hooks
POST /wp-json/aihtml/v1/ai/code-slots/import
```

## Regole

- Ogni slot appartiene a un hook.
- Piu slot sullo stesso hook sono ordinati per priorita.
- HTML e JavaScript sono liberi, ma vanno importati solo da fonti attendibili.
- CSS/JS condivisi devono essere centralizzati quando attraversano piu pagine o widget.

## Documento locale

La fonte tecnica completa e `AI-html/CODE-SLOTS-GUIDE.md`.
