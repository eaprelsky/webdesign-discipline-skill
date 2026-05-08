# Design Tokens

Load this when creating a design system from scratch, theming an existing one, or auditing token architecture. Tokens are the contract between design intent and implementation; without layered tokens, components hardcode values and themes break.

## Three-Layer Architecture

Always layer tokens; never bind components directly to primitive values.

1. **Primitive**: raw scales (gray-50 to gray-950, blue-100 to blue-900, space-100 to space-2000, font sizes, radii, durations). No semantic meaning, just inventory.
2. **Semantic**: roles and usage (`bg-page`, `text-primary`, `border-subtle`, `action-primary-bg`, `stack-md`). Each value references a primitive.
3. **Component**: per-component, per-state mappings only when component behavior needs special override (`button.primary-bg-hover`, `input.border-invalid`). Reference semantic, not primitive.

```json
{
  "primitive": {
    "color": { "gray-0": "#ffffff", "gray-900": "#111827" },
    "space":  { "100": "0.25rem", "200": "0.5rem" }
  },
  "semantic": {
    "color": {
      "bg-page": "{primitive.color.gray-0}",
      "text-primary": "{primitive.color.gray-900}"
    },
    "space": { "stack-md": "{primitive.space.200}" }
  },
  "component": {
    "button": { "primary-bg-default": "{semantic.color.action-primary-bg}" }
  }
}
```

Theme modes (light/dark/high-contrast/density) are alternate values for the same semantic and component tokens, never new primitives.

## Token Groups Checklist

A complete system covers:

- **color**: backgrounds (page/surface/muted/elevated), text (primary/secondary/inverse/disabled), borders (subtle/strong), action (primary/secondary/danger), link, focus ring, semantic states (info/success/warning/danger), data viz palettes.
- **typography**: family (sans/serif/mono), size scale, line-height, weight, letter-spacing, role tokens (display, heading-lg/md/sm, body, body-compact, label, helper, error, caption, button, code, numeric).
- **spacing**: primitive scale (4-80px or rem equivalent) + semantic aliases (`gap-inline-xs/sm`, `gap-stack-sm/md`, `gap-group`, `gap-section`, `padding-card`, `padding-panel`, `page-margin`).
- **radius**: scale (none, xs, sm, md, lg, pill).
- **border**: width (hairline, thin, medium, strong), style (solid usually).
- **shadow / elevation**: layered shadows for raised/floating/overlay; one ramp, not three competing.
- **z-index**: named layers (base, dropdown, sticky, banner, overlay, modal, popover, tooltip).
- **motion**: duration (instant, fast, base, slow), easing curves (standard, decelerate, accelerate, sharp), reduced-motion variants.
- **breakpoints**: tokens, not device names (sm/md/lg/xl/2xl in `rem`).
- **density**: per-density overrides for spacing and component padding (compact/standard/comfortable/spacious).

## Creating Tokens From Scratch

Step-by-step when no design system exists.

1. **Set 2-3 brand/action colors.** One primary action, optionally one secondary brand color. Skip if the project must be neutral.
2. **Build a neutral scale.** Gray ramp 50/100/200/300/400/500/600/700/800/900/950. Use cool, warm, or true gray depending on brand.
3. **Define semantic color tokens.** Background (page/surface/muted/elevated), text (primary/secondary/inverse/disabled), border (subtle/strong), link, focus ring, action primary bg+text, semantic states (info/success/warning/danger) each with subtle bg + strong bg + text + border.
4. **Define explicit on-color tokens.** For every strong/saturated background, define the matching foreground (`action-primary-text`, `danger-strong-text`). Never pick `text-primary` on a saturated background by eye.
5. **Define spacing scale.** 4 or 8 px base, 10-12 steps from 0.25 rem to 5 rem. Then add semantic aliases.
6. **Define type scale.** 10-12 steps. Assign role tokens to scale steps.
7. **Define radius scale.** 3-4 steps + pill. Smaller controls = smaller radius; pill only for badges/chips/segmented.
8. **Define density overrides.** Compact/standard/comfortable/spacious modify spacing and component padding tokens, not primitives.
9. **Define dark theme mapping.** See "Dark Theme Recipe" below. Never invert mechanically.
10. **Validate the contract.** Components reference only semantic and component tokens, never primitives directly. Theme switch changes only the values, not the structure.

## Dark Theme Recipe

Dark theme is not light theme inverted.

- **Page background**: very dark neutral, not pure black. Pure black causes halation around white text and crushes shadow detail. Try `gray-950` to `gray-900`.
- **Surface**: slightly lighter than page background; elevated surface another step lighter or with clearer separation.
- **Text primary**: near white, not pure white. `gray-50` or `gray-100`. Pure white over near-black is harsh.
- **Text secondary**: readable muted; do not crush below 4.5:1 contrast.
- **Border subtle**: visible enough for grouping; raise opacity vs light theme.
- **Action and semantic colors**: lower chroma and adjust lightness for dark background; saturated light-theme colors look neon on dark.
- **Charts**: re-tune categorical/sequential/diverging palettes for dark base. Do not just invert.
- **White-background images and screenshots**: add a backplate or border to prevent visual glow.
- **Focus ring**: ensure it remains visible against dark surfaces; may need a different hue or stronger contrast than light theme.

Validate: primary text readable but not harsh; colored buttons have correct on-color text; semantic subtle backgrounds are not muddy; charts remain distinguishable; images do not glow.

## Density Mapping

Define density as a mode that overrides spacing and component padding, not a separate token group.

```css
:root {
  --density-padding-button-y: var(--space-2);
  --density-padding-input-y: var(--space-2);
  --density-gap-stack: var(--space-4);
  --density-gap-section: var(--space-12);
}

[data-density="compact"] {
  --density-padding-button-y: var(--space-1);
  --density-padding-input-y: var(--space-1);
  --density-gap-stack: var(--space-3);
  --density-gap-section: var(--space-8);
}

[data-density="comfortable"] {
  --density-padding-button-y: var(--space-3);
  --density-padding-input-y: var(--space-3);
  --density-gap-stack: var(--space-5);
  --density-gap-section: var(--space-16);
}
```

Compact mode still respects 24x24 CSS px tap target minimum or sufficient spacing.

## Token Anti-Patterns

- Components reference primitive tokens directly (`color: var(--gray-900)` instead of `var(--color-text-primary)`).
- Choosing a semantic token by visual color match instead of by role.
- Using `text-primary` on saturated backgrounds without an explicit on-color token.
- Mechanical light-to-dark inversion as the entire dark theme.
- Creating a token for every one-off value; a token is for a repeated structural decision.
- Defining tokens but bypassing them with arbitrary CSS values "just this once".
- Naming tokens by appearance (`blue-button`) instead of role (`action-primary`).
- Spacing values not on the scale; arbitrary `padding: 13px`.
- Theme = palette only; ignoring typography, density, shape, motion, imagery dimensions.

## Verification

- Are tokens layered (primitive → semantic → component)?
- Do components only reference semantic and component tokens?
- Are there explicit on-color foreground tokens for every strong background?
- Does the spacing scale cover micro/component/group/section/page roles?
- Is density a mode that overrides spacing/padding, not a duplicate token tree?
- Does the dark theme retune chroma, charts, and image surfaces, not just invert?
- Does the type scale include numeric/code/label roles, not only display/body?
- Are motion durations and easings defined as tokens, not magic values?
- Is the breakpoint set named tokens, not device names?
