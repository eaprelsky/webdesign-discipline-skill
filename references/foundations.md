# Foundations

Load this for visual foundations: avoiding AI slop, perception, composition, typography, color, iconography, and page polish.

## Design Vocabulary

When reasoning about visual and interaction decisions, use these precise terms. Thinking in these categories produces better output than generic "looks good" judgments.

### Visual Principles

- **Visual hierarchy** — size, color, position, and whitespace signal importance order.
- **Figure/ground** — contrast between foreground content and background; clear separation.
- **Vertical rhythm** — consistent baseline spacing across all typographic elements.
- **Gestalt principles** — proximity (group related), similarity (repeat patterns), continuity (align flows), closure (simplify shapes), common region (shared container).
- **Focal point** — single dominant visual entry per viewport.

### Interactive Principles

- **Affordance** — visual cues that communicate how to interact (button looks pressable).
- **Signifiers** — explicit indicators of affordance (hover cursor, focus ring, underline on links).
- **Feedback** — immediate, proportional response to every user action.
- **Mapping** — spatial or conceptual relationship between control and effect.
- **Constraints** — visual and functional limits that prevent errors.

### Emotional Dimensions

- **Visual weight** — how much attention an element demands (color, size, position, motion).
- **Tension/release** — visual conflict that resolves on interaction or scroll.
- **Personality** — distinct character communicated through type, color, shape, imagery.
- **Calm** — predictable rhythm, restrained color, clear structure; no visual noise.

### Anti-Vocabulary (avoid thinking in these terms)

- "modern" / "clean" / "sleek" — too vague to guide decisions.
- "pop" / "stand out" — usually means "make bigger/brighter" without purpose.
- "premium feel" — usually means gold gradients or serifs without substance.
- "feels off" — restate as which principle is violated (hierarchy, rhythm, figure/ground, contrast).

## Anti-Slop Baseline

- Start from domain, audience, task, content, and constraints, not from a trendy composition.
- Make the first viewport specific: product/category/place/person/object must be visible or literally named.
- Avoid generic gradient/orb/bento/card-heavy pages unless the product context actually calls for them.
- Use real content density. SaaS/admin must be scannable and operational, not a marketing hero.
- Do not fill empty sections with decorative icons and vague copy.
- Every visual choice needs a role: hierarchy, grouping, affordance, feedback, brand, data, or emotion.
- Do not invent fake metrics ("10x faster", "99.9% uptime", "50k users") without a source. Use realistic placeholders or remove the claim.
- Do not pick a default UI font (Inter, Roboto, Aptos, Helvetica, system stack) without a reason. Choose a domain-appropriate pair, then keep it consistent across hero, body, labels, controls.
- Avoid the "cyan-on-slate AI dashboard" aesthetic, decorative gradient text, and "effect soup" (gradient mesh + glass + glow + noise + blur).

## Perception And Cognition

- Group related items with proximity and alignment before adding borders/backgrounds.
- Use similarity for repeated controls and contrast for hierarchy.
- Make primary action, current object, status, and selected state visually obvious.
- Do not rely on color alone; combine color with label, shape, icon, position, or weight.
- Keep visual rhythm predictable: consistent spacing, type scale, control size, alignment.
- Reduce cognitive load: show current filters, previous choices, summaries, progress, consequences.
- Separate intrinsic complexity (domain calculations, permissions, financial decisions) from extraneous complexity (unclear labels, hidden filters, inconsistent terms). Preserve and explain the first; remove or rename the second.
- Fix false signifiers (hover effects on static cards, link-colored non-links, button-like badges) and missing signifiers (no hover/focus, action far from target, unexplained disabled controls).
- One primary action per step or decision area. Decorative animation near forms breaks attention.

### AI-Touching Surfaces

When the UI presents AI output, drafts, suggestions, or autonomous actions:

- Show what input/context the AI used (provenance).
- Distinguish draft/suggestion from committed action visually and in copy.
- Explain confidence/uncertainty carefully; do not show a raw probability without meaning.
- Always provide undo and require explicit confirmation before AI performs irreversible actions.
- Do not lean on visual "trust aesthetics" when the underlying behavior is unverified.

## Typography

Roles to define before sizing:

- display, page heading, section heading, subheading, body, body-compact, label, helper, error, caption, button, code, numeric.

Rules:

- Use a small type scale; reserve hero scale for true hero contexts. Compact panels need compact headings.
- Use line length and line height for readability; do not solve layout by shrinking text.
- Do not scale fonts with viewport width.
- Use sentence case for Russian UI; reserve uppercase for rare labels/codes, not normal buttons.
- Body text effective size around 16px; longform 16-20px with line-height 1.5-1.7 and measure 60-75 chars.
- Use `rem` for sizes and unitless `line-height`.
- Use `font-variant-numeric: tabular-nums` for aligned numeric columns in tables, dashboards, finance.
- Load fonts as WOFF2; declare `@font-face` only for fonts actually used; use `font-display` deliberately; subset where possible.
- Make long words and Russian strings fit via layout, wrapping, or shorter copy. Test 200% zoom and longest localized labels.

## Color System

Use roles, not scattered hex values:

```css
--color-bg-page
--color-bg-surface
--color-bg-muted
--color-bg-elevated
--color-text-primary
--color-text-secondary
--color-text-inverse
--color-border-subtle
--color-border-strong
--color-action-primary-bg
--color-action-primary-text
--color-link
--color-focus-ring
--color-info
--color-success
--color-warning
--color-danger
```

Rules:

- Build neutral surfaces/text/borders first, then brand/action colors.
- For every strong background (action, semantic, dark surface) define an explicit on-color foreground token; never pick `text-primary` on a saturated background by eye.
- Semantic state recipe: each state needs subtle background + strong background + text + border + icon variants; use semantic colors only for state, never as decorative category color.
- Avoid one-hue interfaces unless the brand context truly needs it.
- WCAG 2.2 AA baseline: normal text 4.5:1, large text 3:1, essential non-text UI and meaningful icons 3:1.
- Check contrast on photos, gradients, translucent layers, disabled states, hover/selected states, and dark themes.
- Dark theme is not mechanical inversion: lower chroma on accents, retune charts, give white-background images a backplate, choose near-white text rather than pure white.

### Chart Palette Types

- Categorical: distinct hues for unrelated categories; keep count low; keep category-to-color mapping stable across charts.
- Sequential: one hue or perceptually ordered ramp for ordered values.
- Diverging: two arms around a meaningful midpoint for above/below target, deviation, anomaly.
- Highlight: neutral context plus one accent for the finding.
- Never red/green only; pair with label or icon.

## Composition

- Page structure follows user decision order. Do not put company history before problem fit, feature grid before outcome, or pricing before value.
- One focal point per viewport.
- Whitespace separates groups; it is not a substitute for missing content.
- Heading must sit closer to its own content than to the previous section.
- Use grids for alignment, comparison, repeated items.
- Do not nest cards. Hero pages need real media, not generic SVG/gradient when content actually matters.
- Leave a hint of the next section visible in landing heroes on mobile and desktop.

### Macro Layout Selection

- **Single column**: focused flows, prose, simple forms, confirmations.
- **2/3 + 1/3**: main content + supporting context, TOC, summary, metadata.
- **List-detail**: inboxes, tasks, CRM records, docs, messages, master-detail.
- **Supporting pane**: editor + properties, dashboard + detail, object + inspector.
- **Grid/feed**: cards, galleries, product lists, repeated objects.
- **Table + filters**: data-heavy operational screens.
- **Full-bleed scene + overlay**: maps, games, 3D, immersive heroes, visual tools.

Choose multi-column only if it improves comparison, context retention, or work speed. Otherwise stay linear.

## Iconography And Assets

- Use a single icon set per product where possible (Lucide/Heroicons/Tabler/Fluent/Carbon depending on stack); do not mix without reason.
- One concept ↔ one icon, one icon ↔ one meaning.
- Icon-only controls need accessible name and tooltip. Use icon + text for destructive, financial, medical, legal, deploy/revoke, payment, invite/grant, and any rare domain command.
- Decorative icons get `aria-hidden="true"` (or empty `alt=""` for `<img>`).
- Sizes: 16/20/24 px tokens; keep stable on hover/active so layout does not shift; non-text contrast 3:1 for meaningful icons.
- Match icon stroke, weight, filled/outline style across the set.
- License/trademark: do not use OSS icon sets as your product logo, do not recolor brand logos casually, do not use Apple SF Symbols for general web UI.
- Status icons must always carry text (success/info/warning/error/pending/locked/offline). No emoji as gameplay-critical or compliance-critical control.
- Use imagery that reveals the actual product, place, object, state, gameplay, or person when inspection matters.

## Foundation Checklist

- Does the page look specific to this domain?
- Is there a clear hierarchy without decoration doing the work?
- Are colors role-based and accessible, with explicit on-color tokens?
- Are typography scale, tabular-nums, and font loading stable across viewports?
- Do icons/assets communicate real content; are icon-only controls labeled?
- Does the first screen answer what this is and why it matters?
- Are AI provenance and undo handled if AI is involved?
