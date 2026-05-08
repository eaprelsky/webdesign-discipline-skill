# Layout And Responsive

Load this for page structure, responsive layout, spacing tokens, grids, breakpoints, container queries, responsive images, mobile/desktop behavior, overflow prevention, and framework choice.

## Structure First

For every page, define:

```text
Primary goal:
Primary object/content:
Navigation model:
Section/screen order:
Critical controls:
Responsive priority:
States:
```

Then choose layout.

## Semantic HTML Baseline

Before any CSS:

- landmarks: `header`, `nav`, `main`, `aside`, `footer` where relevant;
- one `<h1>`, logical heading order;
- real `<button>` for actions, real `<a href>` for navigation;
- labels connected to inputs;
- lists/tables stay semantic when they are lists/tables;
- DOM order matches reading and tab order;
- UI still makes sense with CSS disabled;
- never use `order` to fake a better source order, never duplicate mobile/desktop DOM with hidden mobile copy.

## Layout Patterns

- **Landing/content**: constrained reading width, full-width section bands, clear section rhythm.
- **Admin/SaaS**: app shell, stable nav, dense tables/lists, filters near data, detail drawer/panel.
- **Dashboard**: header filters, summary signals, priority findings, diagnostic charts, detail table.
- **Ecommerce**: filter/sort + product grid/list + comparison + product details.
- **Tool/editor**: toolbar, canvas/work area, inspector, layers/list, status/export.

## Framework Decision

| Stack | Use when | Guardrails |
|---|---|---|
| Clean CSS / CSS Modules / SCSS | Custom brand, small/medium pages, strict performance, native controls dominate | Define spacing/container/breakpoint tokens; use partials, not one giant stylesheet |
| Tailwind / utility-first | Project already uses it, custom UI assembled in components, tokens act as design API | Avoid arbitrary values, extract repeated clusters into components, no business logic in class soup |
| Bootstrap-like | Prototype/admin/server-rendered, standard look acceptable | Customize tokens early, avoid deep row/col nesting, do not override every component |
| Component framework (MUI/Ant/Fluent/Carbon/Polaris/USWDS) | Many complex controls, a11y/keyboard central, tables/forms/overlays/dates dominate | Check visual fit before adoption, measure bundle, do not wrap every component locally |
| Headless primitives (Radix, React Aria, Headless UI) + custom CSS | Brand-unique visuals, mature a11y behavior needed | Specify states before styling, test focus management, do not casually mix multiple headless libs |

If the answer is "we only need a grid", do not add a framework.

## Mobile-First CSS

Default/narrow first; widen with `min-width` enhancement.

```css
.layout {
  display: grid;
  gap: var(--space-4);
}

@media (min-width: 48rem) {
  .layout {
    grid-template-columns: minmax(0, 2fr) minmax(16rem, 1fr);
    align-items: start;
  }
}
```

Rules:

- avoid undo-heavy desktop-first CSS;
- breakpoint units in `rem`;
- breakpoints content-driven, not device-named.

## Responsive Vs Adaptive Vs Container Queries

- Responsive: same layout adapts via stack/wrap/grid.
- Adaptive: task model itself changes (sidebar -> drawer, table -> list-detail, multi-step -> single screen).
- Container queries: when a component appears in sidebar, modal, grid, and main content, its layout depends on local container width, not viewport.

```css
.profile-card { container-type: inline-size; }

@container (min-width: 28rem) {
  .profile-card__body {
    grid-template-columns: auto minmax(0, 1fr);
    align-items: center;
  }
}
```

Do not put container queries on every wrapper.

## Spacing Tokens

```css
--space-1: 0.25rem; --space-2: 0.5rem; --space-3: 0.75rem; --space-4: 1rem;
--space-5: 1.25rem; --space-6: 1.5rem; --space-8: 2rem; --space-10: 2.5rem;
--space-12: 3rem; --space-16: 4rem; --space-20: 5rem;
```

Semantic aliases:

```css
--gap-inline-sm: var(--space-2);
--gap-stack-md: var(--space-4);
--gap-group: var(--space-6);
--gap-section: var(--space-12);
--padding-card: var(--space-6);
--page-margin: clamp(var(--space-4), 4vw, var(--space-12));
```

Roles: micro (icon+label), component (button/input padding), group (label+field, toolbar+table), section (page block to page block), page (top/bottom rhythm).

## Density Modes

- **Compact** for expert tools, tables, dashboards: smaller group/section gaps, clear row rhythm, no tiny targets for core actions.
- **Standard** for general SaaS.
- **Comfortable** for public services, onboarding, mobile, occasional users: larger target spacing, simpler columns.
- **Spacious** for editorial, luxury, portfolios: generous but controlled.

Tap targets at least 24x24 CSS px or sufficiently spaced; important/frequent targets larger.

## Borders, Dividers, Cards, Radius

Choose the lightest separator that still works:

- whitespace: groups already clear, page is spacious, heading carries the break;
- divider: dense lists/tables, light boundary between related sections;
- border: component containment, focus/selected state, panel framing;
- card/panel: repeated objects, functional regions, portable groups.

Radius scale `--radius-xs/sm/md/lg/pill`. Smaller controls need smaller radius; pill = badge/chip/segmented affordance, not every button. Joined controls should not create inner rounded gaps. Screen-edge panels often skip outer rounding.

Anti-pattern: cards inside cards, every page section as a floating card, divider after every paragraph.

## Container, Grid, App Shell

```css
.container {
  width: min(100% - 2rem, 72rem);
  margin-inline: auto;
}

.card-grid {
  display: grid;
  gap: var(--gap-group);
  grid-template-columns: repeat(auto-fit, minmax(min(18rem, 100%), 1fr));
}

.app-shell {
  min-block-size: 100dvh;
  display: grid;
  grid-template-rows: auto 1fr;
}

.app-main { min-inline-size: 0; }

@media (min-width: 64rem) {
  .app-shell {
    grid-template-columns: 16rem minmax(0, 1fr);
    grid-template-rows: auto 1fr;
  }
  .app-sidebar { grid-row: 1 / span 2; }
}
```

Rules: grid for two-axis macro layout; flexbox for one-axis rows/stacks/toolbars; full-bleed only for media/canvas/map; prose and forms need smaller max width than dashboards.

## Responsive Images

```css
img, video, iframe { max-inline-size: 100%; }
img, video { block-size: auto; }
```

```html
<img
  src="hero-800.jpg"
  srcset="hero-480.jpg 480w, hero-800.jpg 800w, hero-1280.jpg 1280w"
  sizes="(min-width: 72rem) 64rem, 100vw"
  width="1280" height="720" alt="...">
```

Use `<picture>` when crop/aspect/format changes. Always set intrinsic `width`/`height` to prevent CLS. Do not ship one oversized desktop image to mobile.

## Tables And Dense Data

- Local horizontal scroll for comparison-heavy tables.
- Column priority/hide controls for dense admin tables.
- List-detail on mobile for complex rows.
- Keep `<table>` semantics; do not flatten data tables into inaccessible card piles without a reason.

```css
.table-scroll { overflow-x: auto; max-inline-size: 100%; }
.table-scroll > table { min-inline-size: 48rem; }
```

## Common Overflow Fixes

Causes: `width: 100vw`, fixed-width children, grid/flex children missing `min-inline-size: 0`, images without max width, long unbroken strings, negative margins, absolutely positioned decoration.

```css
.grid-child, .flex-child { min-inline-size: 0; }
.long-value { overflow-wrap: anywhere; }
```

Replace `height: 320px` with `min-block-size: 20rem` for dynamic content; keep fixed height only for media/canvas/chart slots.

Sticky/fixed regions: include safe top/bottom padding, test at 200% zoom, ensure skip links and anchors are not hidden under sticky headers, avoid multiple sticky bars on small screens.

## Performance For Static Frontends

- Optimize LCP element (hero image, primary text block) and preload critical fonts/images sparingly.
- Avoid hydration-heavy components on content/marketing pages; prefer static generation.
- Lazy-load below-fold media; do not lazy-load LCP.
- Watch INP: avoid blocking long tasks on user input; split heavy JS.
- Keep CSS bundles lean; remove unused framework CSS where build allows.

## Responsive QA

Test at 375x667, 390x844, 768x1024, 1280x800, 1440x900. Check:

- no horizontal scroll except intentional data table/tool canvas;
- no overlapping text/controls; no clipped buttons or headings;
- tap targets remain usable; longest Russian/translated strings fit;
- media/canvas/chart not blank;
- 200% zoom reflow works; sticky/fixed do not cover content;
- breakpoints work between named sizes, not only at exact design frames;
- first viewport still makes sense.

## Anti-Patterns

- Exact Figma frames treated as the only supported widths.
- Device-named CSS (`iphone14`, `ipad`, `desktop1440`).
- Desktop-first overrides fighting mobile patches.
- Adding Bootstrap/Tailwind/MUI for one layout problem.
- Utility classes full of arbitrary one-off values.
- Custom modal/menu/combobox/date picker without accessibility behavior.
- `order` used to fake source order; duplicated DOM for mobile and desktop.
- Mobile nav missing items available on desktop.
- Data tables flattened into inaccessible card piles.
