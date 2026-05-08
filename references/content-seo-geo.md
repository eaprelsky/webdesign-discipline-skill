# Content, Russian Copy, SEO, GEO

Load this for content pages, Russian UI text, SEO, GEO/AI-friendly pages, metadata, structured data, JavaScript SEO, performance for content surfaces, and crawler readiness.

## Russian UI Copy

Rules:

- Use natural Russian sentence case: `Создать задачу`, not Title Case or ALL CAPS.
- Button text names the action; destructive actions name the object: `Удалить договор` / `Отмена`, not `Да` / `Нет`.
- Visible persistent labels; placeholder is example, not the only label.
- Error text says what happened, where, and how to recover.
- Empty states differentiate first use, filtered empty, permission, failed load, and not configured.
- Avoid English calques, канцелярит (`осуществить`, `производится`, `данный`, `имеется возможность`), vague slashes, arrows, and plus signs (replace with `и` / `или`).
- Use local formats: `7 мая 2026`, `12 500 ₽`, Russian phone and legal identifiers where relevant.

### Tone

- **Operational/admin**: direct, status-rich, no jokes, no inflated claims; objects, dates, owners, next actions.
- **Marketing/brand**: clearer than clever; CTA stays concrete; proof and claims use precise nouns and numbers.

### Label / Helper / Placeholder / Error Scaffold

```text
Label: Что вводится
Helper: Формат/ограничение/пример, если нужен
Placeholder: Пример, не единственный label
Error: Что исправить
```

Examples:

- `Дата оплаты` + `ДД.ММ.ГГГГ`
- `Сумма договора` + `В рублях, без НДС`
- Bad `Ошибка` -> `Не удалось сохранить изменения. Проверьте соединение и повторите`.
- Bad `Файл не подходит` -> `Файл больше 20 МБ. Загрузите файл меньшего размера`.
- Bad `Нет прав` -> `У вас нет доступа к этому проекту. Запросите роль у администратора`.

### Async CTA States

Async buttons need: idle, pending (label changes to active form, e.g. `Сохраняем...`), final state (`Сохранено`) or failure with retry. Avoid bare `Продолжить` everywhere; name the action. Disable to prevent duplicate submit, do not change width on transition.

### Rewrite Checklist

- Remove канцелярит and English calques.
- Add object to risky actions.
- Make errors actionable and specific.
- Make empty states causal.
- Test longest Russian strings in mobile containers, button widths, table columns.

## SEO Brief

```text
Page type:
Primary intent:
Secondary intents:
Target entities/topics:
Canonical URL:
Title:
H1:
Meta description:
Structured data:
Internal links:
Freshness:
Conversion/next action:
```

## Base HTML Checklist

- `<title>` unique.
- `<meta name="description">` useful, not duplicated across pages.
- `<link rel="canonical">` correct.
- One `<h1>`, logical heading order.
- `<main>` exists; landmarks (`header`, `nav`, `main`, `aside`, `footer`) used where relevant.
- Nav links are `<a href>`, not buttons or `div` handlers.
- Informative images have `alt`; decorative images have empty `alt=""`.
- Tables use real headers and captions when tabular.
- Forms have visible labels associated with inputs.
- `lang` attribute set on `<html>`; switch where content language changes.

## SEO Rules

- Logical headings and semantic landmarks.
- Main content rendered in HTML text, not generated only on user interaction.
- Crawlable links with descriptive anchors.
- Intentional `robots`/`noindex`/`canonical`.
- Structured data only when it matches visible content.
- Optimize LCP image, set image dimensions, font loading, JS cost, CLS, and INP.

## JavaScript SEO

- Critical content rendered without user interaction (SSR or static generation preferred).
- Links discoverable as `<a href>` anchors, not click handlers on `<div>`.
- Server returns correct status codes (404, 410, 301/302) for redirects and missing pages, not 200 with a "not found" client view.
- Do not let auth/loading shells get indexed as content.
- Structured data must be present in the final rendered HTML, not injected only on hydration.
- Static generation preferred for marketing/content pages; CSR-only blank shells for content do not work.

## Performance For Content Pages

- LCP element optimized; preload critical hero image and primary font sparingly.
- Images have `width`/`height` to prevent CLS; below-fold media lazy-loaded; do not lazy-load LCP.
- Fonts use WOFF2 and `font-display`; subset where possible; avoid layout shift on swap.
- INP: avoid blocking long tasks on input; split heavy JS; do not delay interactions with hydration-heavy UI.
- Keep JS bundles lean for static pages; remove unused framework CSS where build allows.

## GEO / AI-Friendly

Make sections extractable.

### Answer-First Page Skeleton

```text
H1: literal topic/entity/offer
Summary: direct answer in 2-4 sentences
For whom / when to use:
Key facts:
Evidence / sources / methodology:
Details:
Comparison / alternatives:
FAQ:
Author / organization / updated date:
Next action:
```

### Chunk Checklist

Each important section:

- has a descriptive heading;
- starts with the main answer (first sentence = answer);
- names the entity explicitly;
- includes units/date/scope when relevant;
- links sources near the claim;
- avoids `this/it/they` ambiguity (each chunk should stand alone when quoted);
- can be extracted as a standalone quote.

### Claim Pattern

```text
Claim:
Evidence:
Source:
Date/freshness:
Caveat:
Design implication:
```

### Entity Pattern

```text
Entity name:
Category:
Alternate names:
Organization/person:
Location/service area:
Canonical URL:
sameAs / profiles:
Contact:
Updated:
```

### GEO Technical Checklist

- Canonical URL set.
- Sitemap exists for larger sites.
- `robots.txt` intentional; aware of separate rules for Google, Yandex, OpenAI/AI crawlers if you want differentiated access.
- No accidental `noindex`/`nosnippet`.
- Important content in HTML text, not image-only or canvas-only.
- Crawlable anchor links.
- Structured data matches visible content.
- Images have meaningful `alt` and captions for screenshots/diagrams.
- Tables have headers/captions.
- Dates use `<time datetime="...">` where feasible.

Optional `llms.txt` may list key URLs and licensing/citation preference for documentation-heavy sites; do not rely on it for discoverability or quality.

## Page-Type Recipes

### Landing / Service

- H1: literal offer/category.
- First viewport: what, for whom, why now, primary CTA, proof hint.
- Sections: use cases, proof, process, integrations/security, pricing/commitment, FAQ, final CTA.
- Schema: Organization, LocalBusiness, SoftwareApplication, or Product as appropriate.

### Article / Guide

- Direct answer near top; TOC for long pages; author/date/updated date.
- Examples, caveats, sources; related internal links.
- Schema: Article.

### Ecommerce Category

- Crawlable product links; useful category intro.
- Facet URL policy: decide which filter combinations are indexable; avoid infinite faceted URL indexation; use `noindex` or canonical for sort/filter combinations that are not unique landing pages.
- Schema: BreadcrumbList; Product on product pages.

### Documentation

- Version/date; code as text (not in images); breadcrumb/sidebar nav.
- Canonical for duplicate versions; searchable headings.

## Verification

- Can the page be understood from H1 + first section alone?
- Is content useful to humans, not stuffed for search?
- Are metadata, canonical, robots, structured data correct and matching visible content?
- Does Russian copy fit real UI containers?
- Are date/source/entity/freshness clear where needed?
- Do crawlers see the rendered content (curl/view-source check)?
- Is there no fake FAQ, fake review schema, or hidden text?
