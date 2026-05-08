# Style Directions

Curated visual directions to choose from before picking typography, color, spacing, and motion. Use this list to skip generic AI defaults and commit to one coherent aesthetic that fits the domain.

Pick one direction. Then derive concrete tokens and components from it. Do not blend more than two directions — pick a primary and at most one accent move.

## How To Use

1. Read the brief: domain, audience, primary device, tone, density.
2. Scan the directions; pick the closest match.
3. Read its parameters and the matching domain default in `components-design-system.md`.
4. Derive type pair, color roles, spacing scale, motion budget. Then build.
5. Verify against `Anti-signals` of your chosen direction during QA.

---

## 1. Swiss Minimal

Type: distinctive display sans (Akzidenz-Grotesk Extended, Folio, Helvetica Now Display) + clean body sans
Color: black, white, one restrained accent (red, blue, or none)
Spacing: generous, asymmetric, strong negative space
Radius: none to subtle (0–4px)
Motion: minimal, sharp, no easing fluff
Good for: architecture, luxury, professional services, portfolios, editorial brand pages
Anti-signals: rounded cards, gradients, icons everywhere, decorative shadows

## 2. Editorial Classic

Type: serif headlines (Source Serif, Lyon, Tiempos) + readable sans body
Color: paper/off-white background, ink text, one editorial accent
Spacing: comfortable measure (60-75ch), strong vertical rhythm, asymmetric grid moments
Radius: none or 2px
Motion: page-rest, no decorative animation
Good for: publications, blogs, longform documentation, knowledge bases, cultural sites
Anti-signals: SaaS card grids, full-width hero gradients, icon-per-bullet patterns

## 3. Tech Utility

Type: humanist sans (Inter, IBM Plex Sans) + mono accent for IDs/code/logs
Color: low-saturation neutrals, one signal accent, severity color system
Spacing: compact, dense rows, predictable rhythm
Radius: 4-6px
Motion: functional only (focus, loading)
Good for: dev tools, CLIs, infra, security, observability, internal admin
Anti-signals: glassmorphism, marketing hero, decorative gradients, oversized illustration

## 4. Modern SaaS

Type: distinct display + readable body (avoid Inter+Roboto only)
Color: neutral foundation + one brand action color + semantic states
Spacing: standard, balanced; clear section breathing without marketing airiness on app surfaces
Radius: 8-12px
Motion: subtle hover transitions (150-200ms), skeleton loading, toast slide
Good for: B2B SaaS, productivity apps, standard product surfaces
Anti-signals: bento as concept, cyan-on-slate "AI dashboard", purple gradient hero

## 5. Warm Organic

Type: humanist sans or rounded sans + supporting serif moments
Color: warm off-white, soft greens/clays/sand, low-saturation accents
Spacing: comfortable, breathing, soft section transitions
Radius: 12-20px
Motion: gentle, organic easing
Good for: health, wellbeing, education, mindful consumer, lifestyle
Anti-signals: harsh red overload, neon accents, sharp grid dominance, cyber aesthetics

## 6. Brutalist Raw

Type: monospace or expressive display + utilitarian body
Color: high contrast, primary colors used boldly, no gradients
Spacing: intentional misalignment, exposed grid, asymmetric
Radius: 0
Motion: snap, no easing, deliberate jank
Good for: experimental portfolios, creative studios, art/music, indie products
Anti-signals: rounded cards, smooth gradients, polished SaaS conventions

## 7. Enterprise Blue

Type: neutral sans (Source Sans, IBM Plex Sans, Fluent UI Web) with tabular numerals
Color: navy/blue dominant + neutral surfaces + tight semantic palette
Spacing: compact, table-friendly, stable rows
Radius: 2-4px
Motion: minimal, predictable; never decorative
Good for: CRM, ERP, large enterprise admin, finance/insurance ops, B2B platforms
Anti-signals: marketing hero on app surfaces, decorative cards, oversized illustration

## 8. Government / Public Service

Type: highly readable sans (GDS Transport-style, Source Sans) at slightly larger sizes
Color: official restrained palette (deep blue/black/red), high contrast
Spacing: comfortable, accessible target sizes, clear section breaks
Radius: 0-4px
Motion: minimal; no persuasion patterns
Good for: government services, regulatory portals, public-sector SaaS
Anti-signals: brand extravagance, playful illustration, hidden navigation, dark patterns

## 9. Ecommerce Clean

Type: neutral sans + one display moment for category/brand
Color: neutral product grid + clear sale color (distinct from danger), trust signals
Spacing: stable card grids, comparable rows, predictable rhythm
Radius: 4-8px
Motion: hover lift on cards (subtle), loading skeletons
Good for: online stores, marketplaces, product catalogs, B2C shopping
Anti-signals: promo dominating discovery, sale=red same as error, inconsistent product cards

## 10. Dark Tech

Type: technical sans + mono for code/data
Color: dark neutral base (not pure black), restrained accent, severity palette retuned for dark
Spacing: compact, dense, command-center feel
Radius: 2-6px
Motion: functional, no decorative animation
Good for: IDEs, terminals, monitoring/observability dashboards, dev portals
Anti-signals: cyan glow as default, fake terminal aesthetics, mechanical light-to-dark inversion

## 11. Nordic Light

Type: humanist sans (clean Scandinavian) + occasional serif for editorial moments
Color: cool whites, soft greys, muted blues/greens, single restrained accent
Spacing: airy but disciplined, generous margins, clear hierarchy
Radius: 4-8px
Motion: calm, no flourish
Good for: lifestyle, design studios, architecture, minimalist consumer brands
Anti-signals: saturated palettes, bold gradients, dense card walls

## 12. Japanese Refined

Type: precise sans (or Japanese-influenced grotesk) + thin display moments
Color: minimal palette, off-white, ink text, one quiet accent
Spacing: asymmetric, quiet, intentional empty space
Radius: 0 or sharp
Motion: subtle, precise, no exaggeration
Good for: minimalist consumer products, design-led brands, cultural projects
Anti-signals: Western SaaS card patterns, busy hero, decorative illustration

## 13. Russian Professional

Type: readable sans with strong Cyrillic support (PT Sans, Inter Cyrillic, Manrope) + tabular numerals
Color: neutral foundation + one brand action color + semantic states; restraint over flash
Spacing: dense but scannable, structured comparison/process blocks, B2B-appropriate
Radius: 4-8px
Motion: minimal, functional
Good for: Russian B2B services, professional/legal/financial RU products, enterprise RU
Anti-signals: over-Americanized startup tone, hidden contacts, abstract CTA-only pages, English calques

## 14. Data-Dense Dashboard

Type: compact UI sans + mandatory tabular numerals + mono for IDs
Color: neutral shell, low-chroma gridlines, data-specific palettes (categorical/sequential/diverging)
Spacing: compact, stable widget dimensions, aligned numbers
Radius: 2-4px
Motion: only for data updates and feedback
Good for: BI, analytics, ops dashboards, monitoring, financial dashboards
Anti-signals: KPI gallery without decision purpose, rainbow scales, oversized hero, decorative cards

## 15. Playful Brand

Type: rounded display + friendly readable body (or one expressive variable font)
Color: bold but accessible primary palette, warm accents, semantic states
Spacing: comfortable, large tap targets, clear hierarchy
Radius: 12-24px
Motion: bouncy but bounded; always respect prefers-reduced-motion
Good for: consumer apps, kids/youth products, casual games, lifestyle, social
Anti-signals: childish styling for adults, low readability for "fun", dark patterns, gamification noise

## 16. Financial Trust

Type: precise sans with tabular numerals + occasional serif for authority
Color: restrained palette, conservative accents, explicit risk/warning/danger semantics
Spacing: stable rows, clear transaction states, generous form spacing
Radius: 2-6px
Motion: conservative, no flourish, never on financial values
Good for: banking, insurance, fintech, trading, investment, payments
Anti-signals: casino/crypto glow, fake growth metrics, green/red-only profit-loss, ambiguous destructive actions

## 17. Creator Tool

Type: neutral UI sans (workspace fades back) + readable mono for code/IDs
Color: neutral canvas dominance, expressive accents only on tools/inspectors, not on user content
Spacing: tool-dense panels, generous canvas
Radius: 4-8px
Motion: feedback + preview; decorative motion forbidden during work
Good for: editors, IDEs, design tools, AI media tools, video/audio editors, canvas apps
Anti-signals: decorative panels around canvas, UI effects competing with user work, hidden frequent tools

## 18. Neo-Brutalist

Type: bold sans or mono + heavy weights, oversized type moments
Color: bold primaries, hard borders, no gradients, sharp contrast
Spacing: intentional density variation, exposed structure
Radius: 0 (or harsh 4px maximum)
Motion: snap or none, never smooth easing
Good for: indie startups, Gen Z brands, bold marketing, statement portfolios
Anti-signals: smooth rounded cards, gradient surfaces, polished SaaS conventions

## 19. Glass Elegance

Type: refined sans + light display moments
Color: light/airy palette, translucent surfaces over controlled backgrounds with readability backstop
Spacing: balanced, breathing
Radius: 12-20px
Motion: smooth, subtle
Good for: light brand sites, mobile apps with controlled backgrounds, premium consumer
Anti-signals: glassmorphism over busy/uncontrolled backgrounds, low contrast text on translucent layers, glass on dense data UI

## 20. Industrial Mono

Type: mono primary + utility sans for support
Color: graphite/steel neutrals, amber or signal-green status accents
Spacing: compact technical tables and panels, dense
Radius: 0-2px
Motion: minimal, severity-led
Good for: logistics, manufacturing, B2B industrial, ops control rooms, fleet/asset management
Anti-signals: marketing hero, decorative illustration, glassmorphism, casino-style charts

## 21. Gaming / Immersive

Type: expressive display for title/splash + readable UI sans for HUD/controls
Color: expressive scene palette + stable high-contrast UI overlay roles
Spacing: scene-dependent, controls grouped at edges, HUD off main action area
Radius: variant by world style
Motion: expressive but not blocking gameplay; always respect reduced-motion
Good for: games, immersive 3D, interactive experiences, AR/VR companion UIs
Anti-signals: text directly over busy canvas without scrim, decorative card framing the scene, blank canvases

---

## Checklist Before Committing To A Direction

- Does the direction match the domain and audience?
- Does the user task tolerate the implied density and motion?
- Does the typography support the required languages (Cyrillic, CJK, RTL)?
- Are the implied component states (focus, error, selected) compatible with this aesthetic?
- Does the direction conflict with brand assets that already exist?
- Are the `Anti-signals` clearly avoidable in the planned implementation?
