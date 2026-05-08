# Before / After

Concrete repair examples for common AI-design failures. Each pair: what the failure looks like, why it fails, what to do instead. Treat these as few-shot patterns: when the brief matches the failure shape, apply the fix.

---

## 1. Cookie-Cutter SaaS Hero

**What it looks like:**
Navbar (logo left, links right) → pill badge "New feature" → centered H1 in Inter Bold 48px → muted-gray subtitle → two buttons (primary "Get started", secondary "Learn more") → abstract SaaS illustration (gradient shapes, isometric cubes, or generic dashboard mockup).

**Why it fails:**
Generic. Tells the user nothing about the actual product. H1 says "Transform your workflow" but does not name the workflow. The illustration could belong to any of 50 competitors. User leaves without knowing what this IS.

**How to fix:**
- H1 names the product category and primary outcome literally: `Автоматический расчёт смет в строительстве`, not `Стройте быстрее с нашей платформой`.
- Hero visual shows real interface, diagram, or output of the product, not abstract decoration.
- Proof appears in first viewport: number of проектов/смет, name/logo of a real client, a concrete result metric with a source.
- For Russian B2B: цена, процесс, и результат visible early, not hidden behind a contact form.
- Remove the pill badge unless there is an actual announcement with substance.
- Use a typographic system, not Inter-only. See `references/style-directions.md` for direction options.

---

## 2. KPI Gallery Dashboard

**What it looks like:**
Six identical metric cards in a 3x2 grid: "Total Users 12,432", "Active Now 1,204", "Revenue $48,210", "Conversion 3.4%", "Sessions 8,991", "Bounce 42%". Below: a single line chart, a recent-activity list, and a progress ring.

**Why it fails:**
No decision purpose. The user cannot tell what is good, bad, or actionable. Every metric has equal weight. No baselines, targets, or comparisons. No path from signal to action. This is the "fake dashboard" pattern.

**How to fix:**
- Define the decision question first: "what is this dashboard for?" If you cannot answer, replace with a table or a text summary.
- Reduce to 3-5 signals that map to actual decisions; each has comparison (vs target, vs previous period) and freshness.
- Add a priority block: anomalies, exceptions, things requiring action.
- Add a diagnostic block: charts that explain cause for the priority items.
- Add a detail block: affected objects in a table or list with row actions.
- Show data states honestly: stale, partial, sampled, permission-denied. Never silently hide them.

---

## 3. Bento-For-Everything Landing

**What it looks like:**
Hero, then 9 rounded cards in a bento grid, each with an icon, a 2-3 word title, and one sentence of vague benefit copy. No real product, no proof, no flow.

**Why it fails:**
The bento grid replaces structure with decoration. Every card looks equally important. The page argues nothing. It is "modern" by aesthetic only. User leaves still not understanding the product.

**How to fix:**
- Replace the bento with a content-driven section sequence: problem/context → outcome → use cases → proof → process → integrations/security → pricing/commitment → FAQ → final CTA.
- Use bento or card grids only for genuinely repeated objects (use cases, integrations, plans), and only when the items have content density (real screenshot, real metric, real customer name).
- Each repeated item must vary meaningfully, not just by icon and adjective.
- Keep a clear hierarchy: hero, primary argument, supporting argument, proof, CTA. The page is an argument, not a wall of cards.

---

## 4. Glassmorphism Overkill

**What it looks like:**
Translucent panels stacked over a busy gradient background. Cards have backdrop-blur, semi-transparent fills, and white text with subtle shadows. The dashboard data sits behind frosted layers.

**Why it fails:**
Translucency over uncontrolled backgrounds destroys contrast. Reading data through a frosted layer is fatiguing. The "premium feel" hides actual content. Glassmorphism is appropriate for immersive media UIs over controlled cinematic backgrounds, not for productivity dashboards.

**How to fix:**
- Use solid surfaces for any UI where data must be read accurately (dashboards, forms, tables, admin).
- Reserve glass for immersive contexts (media players, lock screens, AR/VR overlays) where the backdrop is controlled and content remains legible.
- If translucency is required, ensure WCAG AA contrast against worst-case backdrop and provide a readability backstop (scrim, text shadow, opaque stripe).
- Pick one material system. Do not stack glass + gradient mesh + glow + noise + blur + heavy shadows.

---

## 5. Default-Font-Only Page

**What it looks like:**
Inter (or Roboto, or Aptos, or system-ui) at three sizes used for everything: H1 64px Bold, H2 32px Semibold, body 16px Regular. No display moment, no typographic personality, no role differentiation beyond size.

**Why it fails:**
Reads as AI-default. Nothing distinguishes this product from any other generated site. The "hero-only typography" pattern is also common: the H1 looks designed but everything else falls back to defaults.

**How to fix:**
- Choose a typographic direction from `references/style-directions.md` first; do not pick fonts in isolation.
- Use a pairing: distinctive display + readable body, or a thoughtful single family with strong weight contrast (humanist sans, superfamily, expressive variable font).
- Define role tokens: display, heading-lg/md/sm, body, body-compact, label, helper, error, caption, button, code, numeric.
- Use `font-variant-numeric: tabular-nums` for aligned numeric columns in tables, dashboards, finance.
- Style every level: section headings, body, labels, captions, buttons, metadata, errors, table text, not just the hero.
- Load fonts via WOFF2 with `font-display`, subset where possible.

---

## 6. Color-Only Status Encoding

**What it looks like:**
A table where row status is communicated only by background tint: red row = error, yellow row = warning, green row = success. No icon, no label, no shape, no text.

**Why it fails:**
Inaccessible (color blindness, low-vision users, grayscale printing, dark theme). Ambiguous (red could be sale, error, urgent, deleted). WCAG 1.4.1 violation. Users have to guess meaning by hue.

**How to fix:**
- Combine color with a second encoding: status icon (check/triangle/x) + label text + position. The icon and the label carry the meaning; the color is reinforcement.
- Use semantic tokens (`info`/`success`/`warning`/`danger`) with subtle bg + strong bg + text + border + icon variants. Never use semantic colors as decorative category colors.
- For data viz, never red/green only and never rainbow scales for ordered data. Pair with direct labels or a clear legend.
- Verify in grayscale and with a CVD simulator before delivery.

---

## 7. Cards-Inside-Cards Layout

**What it looks like:**
Page background → outer card with shadow and rounded corners → section card inside it → metric card inside the section card → button card inside the metric card. Every UI region is wrapped in a card frame.

**Why it fails:**
Visual hierarchy collapses. Every region claims equal importance. Spacing budget is consumed by frames instead of content. Mobile viewports cannot afford this nesting. The pattern is a hallmark of generated UI without composition decisions.

**How to fix:**
- Decide what a card IS for: a repeated object (product, post, user), a modal/overlay, or a framed tool. Not "every section".
- Use whitespace, headings, and dividers to separate groups before reaching for a card.
- Keep page sections full-width or unframed unless the framing has a real job (data widget, repeated card list, isolated tool).
- Never nest a card inside another card. If you find yourself doing it, the inner element should be a plain region with whitespace separation.

---

## 8. Vague Empty State

**What it looks like:**
A centered illustration of an empty box or magnifying glass. Below it: "Nothing here yet." A primary button: "Add" or "Get started".

**Why it fails:**
Does not explain which kind of empty this is (first use, filtered out, no permission, failed load, completed). The CTA does not address the cause. The illustration replaces useful guidance. Users with active filters see "Nothing here yet" and assume the dataset is empty.

**How to fix:**
- Differentiate the empty type and write copy for each:
  - **first use**: "Здесь появятся проекты после создания. Создать первый проект."
  - **filtered empty**: "По этим фильтрам ничего не найдено." Show applied filters as removable chips with a "Сбросить фильтры" action.
  - **no permission**: "Нет доступа к этому списку. Запросите роль у администратора."
  - **failed load**: "Не удалось загрузить данные." Offer "Повторить".
  - **not configured**: "Подключите источник данных, чтобы увидеть отчет."
- Provide one clear next action that addresses the cause.
- Decorative illustration is optional and never replaces causal copy.

---

## 9. Gradient Text Headlines

**What it looks like:**
H1 with a CSS background-clip: text gradient from purple to pink. Metric values rendered with gradient fills. Hero copy uses gradient on alternating words for "premium feel".

**Why it fails:**
Reduces contrast and readability. Reads as generic "AI-generated premium aesthetic". Decorative gradient text rarely survives translation, dark mode, or screenshot. Often fails WCAG contrast against any backdrop variation.

**How to fix:**
- Solve emphasis with typography, layout, and contrast: stronger weight, larger size, color differentiation that meets contrast, position prominence.
- If a brand demands a colored accent on the headline, use a single solid color with clear contrast, an underline, a marker, or a small domain artifact next to the word.
- Use gradient only when it carries brand or material meaning (e.g., representing a real product surface, a sky, a measured spectrum), and verify it remains readable.

---

## 10. Mobile-As-Afterthought

**What it looks like:**
Desktop layout designed first with multiple columns, dense filters, sidebars, and hover-only actions. Mobile is the same DOM squeezed into one column; cards overflow, filters disappear, primary CTAs end up below the fold, hover actions become invisible.

**Why it fails:**
Mobile users see a degraded desktop, not a layout designed for their context. Decision order changes accidentally. Filter state hides. Actions that exist on desktop become unreachable. Often paired with `display: none` for "mobile-only" duplicate DOM, which breaks SEO and a11y.

**How to fix:**
- Start from mobile content priority. What does the user need to do first on a small screen? Reorder DOM accordingly.
- Single-column semantic order on narrow viewports; promote primary CTA, current object, and critical state.
- For navigation: collapse to drawer/tab bar/overflow menu, not a hamburger that hides everything.
- For filters: become a sheet or disclosure with applied-filter chips visible; preserve filter state across navigation.
- For tables: use column priority + horizontal scroll, or list-detail transformation. Never a card pile that loses comparability.
- Hover-only actions need a visible touch alternative (long-press, dedicated button, row action menu).
- One DOM, responsive layout. No duplicated mobile/desktop markup with `display: none`.

---

## How To Use These

When the user's request matches the shape of a failure (e.g., "сделай дашборд", "сделай лендинг для SaaS"), check whether you are about to produce one of these anti-patterns. If yes, apply the fix before generating. The fix sequences are not rules to recite — they are concrete moves to make.
