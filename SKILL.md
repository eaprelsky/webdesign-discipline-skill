---
name: web-design
description: "Design, build, and review modern static frontends and web UI: landing pages, SaaS/admin apps, dashboards, ecommerce, content pages, portfolios, tools/editors, and immersive/game-like experiences. Use for frontend visual design, UX flows, responsive layout, component systems, typography, color, iconography, Russian UI copy, SEO/GEO, cultural localization, data visualization, accessibility, performance, and visual QA."
---

# Web Design

Use this skill when creating or reviewing a browser UI where design quality matters. Optimized for static frontend and modern web apps built from scratch or improved from an existing codebase.

## Core Rule

Design from the user's task and content before choosing visual style. The output should feel specific to the domain, usable in real states, responsive, accessible, and free of generic AI-design patterns.

## Hard Constraints (never violate)

These rules are non-negotiable unless the user explicitly requests an exception.

### Typography

- NO Inter, Roboto, Aptos, Helvetica, Arial, system-ui as default font stack without a domain-specific reason.
- NO Space Grotesk as the universal "AI-unique fix".
- NO viewport-width font sizing (`vw` units on `font-size`).
- Every font choice must have a domain-appropriate reason.

### Color

- NO purple/blue gradient + white rounded cards as the visual concept.
- NO cyan-on-slate "AI dashboard" aesthetic.
- NO decorative gradient text on headlines or metrics.
- NO one-hue interface without explicit brand justification.
- Dark theme is NOT mechanical inversion of light theme.

### Content

- NO fake metrics ("10x faster", "99.9% uptime", "50k users") without source.
- NO placeholder-only labels on form fields.
- NO generic SaaS copy ("Transform your workflow", "Unlock your potential").
- First viewport MUST show literal product/category/offer/person/object.

### Layout

- NO cards inside cards.
- NO every page section styled as a floating card.
- NO `order` used to fake source order.
- NO duplicate DOM for mobile and desktop.
- NO Bootstrap/Tailwind/MUI added "for one grid".

### Components

- NO `div`/`span` as buttons or links.
- NO custom modal, menu, combobox, date picker without full a11y.
- NO icon-only destructive, financial, medical, legal actions.
- NO disabled control without explanation.
- NO hover-only access to essential information.

### Data Visualization

- NO KPI gallery without a decision question.
- NO 3D charts; NO rainbow scales for ordered data; NO pie with more than 4 slices.
- NO cropped or truncated axes; NO tooltip-only data access.
- NO silently hidden stale, partial, sampled, or missing data.

### AI Interfaces

- NO AI output rendered as authoritative without provenance.
- NO AI performs irreversible action without explicit confirmation and undo.

## Quick Workflow

1. **Classify the surface**: landing, SaaS/admin, dashboard, ecommerce, content, portfolio/brand, tool/editor, game/immersive. Then run domain auto-detection below.
2. **Set the taste dial** (if the user has not specified style preferences):
   - Design Variance: conservative | standard | experimental
   - Motion Budget: minimal | moderate | expressive
   - Visual Density: compact | standard | comfortable | spacious
3. Define audience, cultural context, primary device, user goal, entry context, trust/risk level, and success state.
4. Check whether a design system, component library, brand assets, or existing CSS conventions already exist.
5. Build a lightweight journey brief before layout:

```text
Page/app type:
Primary actor:
Entry source:
User goal:
Top questions:
Main objections/risks:
Primary action:
Success state:
Critical variants:
```

6. Choose structure: information architecture, section order, routes, states, components.
7. Pick a visual direction from `references/style-directions.md`. Then derive typography, color roles, spacing, density, icons, imagery, motion, data-viz style consistent with the direction and the dial settings.
8. Implement with semantic HTML, responsive constraints, accessible controls, real states.
9. Validate: desktop/mobile screenshots, overflow/overlap, focus, contrast, performance risk, SEO/GEO, copy, page-type-specific checks.

### Auto-Detect Domain

Match keywords in the user's request and apply domain defaults before layout.

| Keywords | Domain | Immediate Rules |
|---|---|---|
| банк, платёж, кредит, ипотека, счёт, транзакция, fintech, insurance | Finance/Banking | tabular-nums, conservative motion, explicit risk/warning, no casino glow, no red/green-only profit-loss |
| врач, пациент, клиника, медицина, health, мед-, фарма | Healthcare | high readability, supportive states, privacy cues, no harsh red overdose, no playful treatment of serious actions |
| разработчик, API, SDK, CLI, dev, infra, security, логи, мониторинг | Developer/Infra | mono accents for IDs/code, severity color system, dense controls, keyboard-first, no generic cyber neon |
| товар, корзина, купить, доставка, цена, каталог, магазин, marketplace | Ecommerce | product imagery primary, clear price/availability tokens, promo color != error color, crawler-ready product links |
| админ, CRM, ERP, управление, документы, сотрудники, отчёты | Enterprise/Admin | density, tables/grids, filters, saved views, batch actions, predictable neutrals, no landing-style hero |
| госуслуги, правительство, заявление, регламент, public sector | Government | restrained palette, strong readable type, simple forms, a11y-first, low decoration, no persuasion patterns |
| ИИ, AI, генерация, промпт, модель, агент | AI Product | provenance visible, draft vs committed distinct, undo on AI actions, no magic-only metaphor for high-risk |
| дети, обучение, школа, курсы, education, kids | Education | warm, readable, no dark mode default, clear progress, supportive error tone, no harsh red |

If multiple domains match, the most specific or highest-risk wins (financial > admin; healthcare > generic SaaS).

## Page-Type Defaults

- **Landing**: recognize fit -> trust -> understand offer -> act. H1 = literal product/category/offer; proof before high-commitment CTA.
- **SaaS/admin**: orient -> detect priority -> act -> confirm/recover. Dense but organized; visible filters/status/selection; local pending/error states.
- **Dashboard**: question -> signal -> cause -> action. Every chart needs a decision purpose; no random KPI galleries.
- **Ecommerce**: find -> compare -> trust -> choose -> recover. Filters/cards reflect real buying criteria.
- **Content/SEO**: intent match -> answer -> confidence -> next action. Direct answer early.
- **Portfolio/brand**: identify -> evaluate relevance/taste -> inspect work -> understand role -> contact.
- **Tool/editor**: create/import -> manipulate -> preview -> save/export/share. Design selection, modes, undo, autosave, keyboard, empty/error/export states.
- **Game/immersive**: build the playable experience first; verify canvas/3D rendering in browser.

## Decision Rules

- Prefer existing project design system, CSS variables, component library, conventions.
- If no system exists, create a small semantic token set; for full architecture see `references/tokens.md`.
- **Framework choice**: clean CSS for custom brand and small/medium pages with strict performance; Tailwind when project uses it and tokens act as design API; component library for complex app surfaces (tables, forms, overlays, dates); headless primitives + custom CSS when brand visuals must be unique but a11y must be mature; Bootstrap-like only for prototypes/admin where standard look is acceptable. Do not add a framework "for one grid".
- For static marketing/content pages, prefer HTML/CSS or static generation over hydration-heavy UI.
- For dashboards, define data questions and states before choosing charts.
- For Russian interfaces, write natural Russian UI copy; avoid English calques, title case, vague slashes/arrows/pluses, placeholder-only labels.
- For international pages, localize task flow, trust signals, data formats, forms, imagery, not just strings. Use neutral/international locale when target is multi-region.
- For SEO/GEO pages, make topic/entity/answer explicit in text and semantic HTML; static generation preferred.
- For AI-touching surfaces, show provenance, distinguish draft/suggestion from committed action, require confirmation before irreversible AI actions, explain confidence carefully.

## Reference Navigation

Read only the files needed for the task.

- `references/style-directions.md`: 21 curated visual directions. Load when picking a visual language, before choosing typography/color. Avoids generic AI defaults.
- `references/taste-dial.md`: design variance, motion budget, visual density dials. Load when the user sets style preferences or you need to propagate dial settings consistently.
- `references/foundations.md`: design vocabulary, anti-slop, perception, typography, color, composition, iconography. Load when designing visual language, hero, type scale, palette, or first viewport.
- `references/tokens.md`: token architecture, creation from scratch, dark theme recipe, density mapping. Load when creating a design system from scratch or theming.
- `references/layout-responsive.md`: page structure, spacing tokens, grids, breakpoints, container queries, responsive images, overflow fixes, framework choice. Load when implementing or auditing layout/CSS.
- `references/components-design-system.md`: component libraries, variants, states, governance, build-vs-buy, theme dimensions matrix, domain defaults. Load when picking/extending a library or theming.
- `references/ux-journeys.md`: journeys, scenarios, flows, forms, feedback, navigation, ergonomics, page-type journey patterns. Load when shaping a flow or reviewing UX.
- `references/content-seo-geo.md`: Russian UI copy, content pages, SEO, JavaScript SEO, GEO/AI-friendly structure, performance. Load for content/marketing/docs/ecommerce SEO surfaces.
- `references/cultural-localization.md`: Russia/US/China/international locale checks, formats, symbols. Load for any multi-locale or culturally sensitive page.
- `references/visual-qa.md`: data viz, screenshot QA, accessibility, browser validation, responsive QA. Load before final review and for any data-heavy product.
- `references/before-after.md`: 10 anti-pattern -> fix examples. Load when the brief matches a common AI-slop shape (cookie-cutter hero, KPI gallery, bento landing, etc.).
- `references/anti-patterns.md`: consolidated failure patterns. Always skim before final delivery.

## Implementation Rules

- Use semantic landmarks and controls: `main`, `nav`, `section`, `article`, real buttons, real links, labels, tables where tabular.
- Stable dimensions matter: `aspect-ratio`, min/max constraints, grid tracks, responsive media rules to prevent layout shift.
- Do not scale font size with viewport width. Use type steps and responsive layout, not `vw` typography.
- Cards are for repeated items, modals, or framed tools; do not nest cards or turn every page section into a floating card.
- Use icons for familiar tools/actions; add accessible names/tooltips for icon-only controls.
- Avoid one-note palettes and overused decorative gradients/orbs. Use color roles and enough neutral structure.
- Text must fit real containers on mobile and desktop. Check longest labels, Russian strings, and error states.
- Websites need real visual assets where inspection matters; avoid purely atmospheric media when the user needs product/place/object clarity.
- Performance baseline: optimize LCP image, set image dimensions to prevent CLS, use `font-display` and WOFF2, lazy-load below-fold media, do not block INP with hydration-heavy UI.

## Validation

When a browser is feasible:

1. Run the app/page.
2. Capture desktop and mobile screenshots at 375, 390, 768, 1280, 1440 widths.
3. Check horizontal scroll, clipped text, overlapping elements, blank media/canvas, focus visibility, 200% zoom reflow, and key states.
4. Run a scenario matrix on the primary flow: happy + error + empty + permission + return/resume + post-success.
5. Run relevant scripts:

```bash
node scripts/audit-html-css.mjs <path-or-url>
node scripts/audit-responsive.mjs <url>
node scripts/audit-visual.mjs <url>
```

Scripts are advisory. Fix obvious false positives with judgment, but do not ignore real overlap, inaccessible controls, unreadable contrast, or broken responsive behavior.

## Final Review Checklist

- User goal, entry context, success state are reflected in structure.
- First viewport identifies the product/page and gives the next useful action.
- Visual hierarchy follows decision priority; one primary action per decision area.
- Typography, color, spacing, icons, imagery, data-viz choices fit the domain and the chosen style direction.
- Empty, loading, error, success, selected, disabled, focus, mobile states are designed.
- SEO/GEO pages have literal H1, answer-first content, semantic HTML, metadata, crawlable links.
- Russian/cultural copy and formats fit the target locale.
- Browser screenshots show no incoherent overlap, clipping, horizontal scroll.
- Performance signals (LCP/CLS/INP) are not obviously broken.
- No Hard Constraint violations and no AI-slop tells from `references/anti-patterns.md`.
