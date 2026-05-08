# Taste Dial

Three explicit dials that parameterize all visual decisions. Set them at the start (or accept user override) and apply consistently across typography, color, layout, components, and motion.

If the user says "сделай консервативно и компактно" or "сделай экспериментально с expressive motion", read it as a taste-dial setting and propagate to every decision below.

## Dial 1: Design Variance

How much the result deviates from familiar conventions.

- **conservative**: safe, conventional, widely familiar patterns; minimum risk of alienating users.
- **standard**: balanced; recognizable layout with one or two distinctive choices.
- **experimental**: bold, unconventional layouts; surprising typography; asymmetric composition; high visual impact.

Effect on decisions:

| Dimension | conservative | standard | experimental |
|---|---|---|---|
| Typography | one proven pair, modest scale | distinct display + body | unexpected pair, variable fonts, oversized moments |
| Color | neutral dominant + one accent | balanced neutrals + brand action | saturated, unusual combinations, off-palette accents |
| Layout | single column or 2-col, predictable | 2/3+1/3, list-detail, table+filters | asymmetric, overlapping, diagonal, full-bleed scenes |
| Radius | modest (4-8px), consistent | varied by component context | sharp (0) or extreme (>20px) |
| Motion | none or focus only | hover/transition basics | scroll-triggered reveals, parallax, transitions |
| Imagery | stock-restrained, real product | curated photography or product UI | bold art direction, custom illustration, 3D |

Defaults by surface:

- enterprise/admin/finance/healthcare/government: conservative or standard.
- standard SaaS, ecommerce, content, B2B: standard.
- portfolios, creative tools, consumer/lifestyle, gaming: standard or experimental.

## Dial 2: Motion Budget

How much animation the UI carries.

- **minimal**: no animation except focus rings and essential loading states.
- **moderate**: hover transitions (150-200ms), loading skeletons, subtle scroll reveals, toast slide.
- **expressive**: staggered reveals, parallax, scroll-triggered animations, page transitions, hero motion.

Universal rules:

- Always respect `prefers-reduced-motion: reduce`. Provide a static path.
- Motion never blocks content access or readability.
- Expressive motion only when it serves story or emotion, not decoration.
- Critical UI surfaces (forms, tables, dashboards, financial flows, healthcare, public services) stay at minimal or moderate regardless of marketing pages.
- Never animate financial values, counts, or status changes that the user must read precisely.

Defaults:

- finance, healthcare, government, dev tools, admin/data: minimal.
- standard SaaS, ecommerce, content: moderate.
- brand pages, portfolios, immersive, consumer marketing: moderate to expressive.

## Dial 3: Visual Density

See `references/layout-responsive.md` "Density Modes" for full layout implications. Summary:

- **compact**: data-forward, tight spacing, expert users, dashboards, admin tools.
- **standard**: balanced, most SaaS products.
- **comfortable**: more whitespace, larger targets, public services, onboarding, mobile.
- **spacious**: editorial, luxury, portfolio; generous but controlled.

Each density mode affects:

- gap tokens (group, section, page);
- padding tokens (card, input, button);
- font size steps (compact scales body/UI 1 step down to ~14-15px effective minimum);
- line height (compact tighter, spacious looser);
- tap target minimums (compact still meets 24x24 CSS px minimum or sufficient spacing).

Density per surface within one product is allowed: marketing pages comfortable, app shell standard, tables/dashboards compact.

## Combining The Dials

Common combinations and what they imply:

| Combination | Use for |
|---|---|
| conservative + minimal + compact | financial trading, ops control, regulated B2B admin |
| conservative + minimal + comfortable | public sector, healthcare patient portals, accessibility-first products |
| standard + moderate + standard | typical B2B/B2C SaaS, dashboards (non-trading), most ecommerce |
| standard + moderate + comfortable | onboarding, education, consumer mobile apps |
| experimental + moderate + standard | brand-led SaaS, creator products with serious app surfaces |
| experimental + expressive + spacious | marketing/brand pages, portfolios, immersive landing, cultural projects |
| experimental + expressive + compact | rare; expert creator tools with bold aesthetic — be cautious |

If the user does not specify, default to **standard / moderate / standard** for unknown SaaS or content surfaces, and adjust per `Auto-Detect Domain` rules in `SKILL.md`.

## Verification

- Are all three dials set explicitly (default or chosen) before designing?
- Are typography, color, spacing, radius, motion, and imagery decisions consistent with the dial setting?
- Does the chosen `style-directions.md` direction match the dials? If not, adjust direction or dials, do not mix conflicting signals.
- For multi-surface products, are per-surface dial overrides documented (e.g., marketing = expressive, app = standard)?
