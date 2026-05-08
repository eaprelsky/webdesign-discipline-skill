# Components And Design Systems

Load this when choosing or extending component libraries, tokens, variants, controls, states, governance, or design-system conventions.

## Use Existing System First

Inspect: installed UI library, CSS variables/design tokens, Tailwind/theme config, component folders, icon library, form/table/dialog primitives, accessibility helpers, existing spacing/radius/type/color patterns. Extend local patterns before inventing new ones.

## Scenario-First Workflow

Before picking a library, list the scenarios the product must assemble:

- login/password reset;
- CRUD list/detail/create/edit/delete;
- search/filter/results/no results;
- dashboard;
- settings;
- onboarding;
- data table with sort/select/pagination/actions;
- destructive confirmation;
- file upload (if relevant);
- permissions/admin (if relevant).

If the candidate library cannot assemble these without major custom work, it is not product-ready.

## Maturity Matrix

Choose the smallest set that covers the product.

| Tier | Use for | Required additions |
|---|---|---|
| **MVP Core** | prototype, narrow CRUD | button, link, input/textarea, checkbox/radio/select/switch, form field, validation message, alert, toast, modal/dialog, dropdown, tabs, card, divider, stack/grid, table/list, pagination, spinner/skeleton, empty state, badge, tooltip |
| **Product-Ready** | SaaS, admin, marketplace, internal tools | app shell, page header, side nav, breadcrumbs, search, filter bar, applied filters, combobox, date/range/time picker, file upload, drawer/sheet, popover, context menu, segmented control, stepper, data table with sorting/selection/pagination/row+batch actions, avatar, notification center, error summary, form layout |
| **Enterprise/Data-Heavy** | CRM, ERP, finance, security, infra, analytics | data grid, virtualized table/tree, treegrid, command palette, saved views, query builder, advanced filters, column visibility/order/resize, resizable panels, audit log, permission matrix, approval workflow, global search, keyboard shortcuts, density modes, high-contrast, RTL/localization stress |
| **Platform** | multi-product orgs | multi-brand themes, token pipeline, component registry, codemods, release channels, deprecation policy, contribution model, cross-framework strategy, usage analytics, a11y certification |

Common failures: enough for happy path but weak on advanced filtering, file upload, permissions, dense data; components exist but scenario patterns undocumented; visual is calm but keyboard/data workflow is underpowered.

## Tokens

For token architecture (primitive → semantic → component), token groups checklist, creating tokens from scratch, dark theme recipe, density mapping, and token anti-patterns, see `references/tokens.md`. Components in this file should reference only semantic and component tokens, never primitives.

## Design System Is Not Just A Palette

Design system = principles + foundations + tokens + components + content + governance. A theme covers more than color: typography, density, shape/radius, elevation, motion, imagery, content tone.

### Theme Audit Procedure

1. Identify domain and audience.
2. Identify risk: low / medium / high / regulated / destructive / financial / medical / public-service.
3. Identify use frequency: one-time / occasional / daily / expert.
4. Identify content/data density.
5. Identify emotional job: trust, calm, speed, fun, aspiration, authority, creativity, care.
6. Audit current visual language across all dimensions, not only color.
7. Decide whether the theme supports or contradicts product meaning.
8. Define replacement tokens/foundations.

### Theme Dimensions Matrix

| Dimension | Quiet Enterprise | Public Service | Creator Tool | Luxury | Game/Media |
|---|---|---|---|---|---|
| Color | neutral + restrained action | official + high contrast | neutral canvas + expressive accents | restrained, rich neutrals | expressive, asset-led |
| Type | readable sans | highly readable sans | UI sans + display moments | distinctive serif/display | expressive title + readable UI |
| Density | compact/comfortable | comfortable | workspace-dependent | generous | scene-dependent |
| Shape | modest radius | simple/functional | tool-specific | precise/refined | expressive |
| Motion | functional/minimal | minimal | feedback + preview | subtle | expressive |
| Imagery | rare/product data | rare/official | user assets | high-quality media | core content |
| Risk tolerance | low | very low | medium | low-medium | medium |

### Domain Defaults

- **Enterprise/Admin/CRM**: density, tables/grids, filters, saved views, batch actions, predictable neutral visuals. Avoid landing-style hero, oversized cards, gradient brand wash.
- **Public sector/government**: restrained palette, strong readable type, simple forms, accessibility-first, low decoration. Avoid persuasion patterns, hidden navigation.
- **Fintech/banking/insurance**: tabular numerals, clear transaction states, conservative motion, explicit risk/warning. Avoid casino/crypto glow, fake growth metrics, green/red-only profit-loss.
- **Healthcare/wellness**: high readability, supportive states, privacy cues, low-stress status colors. Avoid harsh red overload, playful treatment of serious actions.
- **Ecommerce**: product imagery as primary signal, consistent product cards, clear price/availability/promo tokens. Avoid promo dominating discovery, sale color conflicting with error.
- **Developer/infra/security**: technical typography, mono accents for IDs/logs/code, severity color system, dense controls, clear focus/keyboard. Avoid generic cyber neon, fake terminal aesthetics.
- **Creator/AI tools**: canvas dominance, neutral workspace, expressive accents around tools not content, asset previews. Avoid UI effects competing with user work.

## Component States

Every interactive component needs:

- default;
- hover;
- focus-visible;
- active/pressed;
- selected/current;
- disabled;
- loading/pending;
- error;
- success if relevant.

Forms also need: label, helper, error, required/optional, readonly, autocomplete/paste behavior.

### State Matrices For Critical Components

- **Button**: + danger variant, icon-only accessible name, loading without width shift; one primary action per decision area; destructive button uses text label.
- **Form field**: + invalid, success (if used), loading/autofill (if relevant); error explains recovery; field stays associated with label and error; long labels wrap.
- **Select/Combobox**: closed/open/highlighted/selected/empty options/loading/clearable/multi; keyboard nav, typeahead, Escape, outside click, mobile/touch behavior.
- **Dialog**: title, body, primary/secondary action, close, focus on open, focus trap, Escape, return focus to trigger, destructive variant, loading action, long content scroll; not used for low-risk notifications.
- **Drawer/Sheet**: + dirty/unsaved state if editing; use for supplementary task; if blocking-critical, pick dialog instead.
- **Data table**: title, columns, rows, loading/empty/error, sorting, pagination, row + batch actions, selection, filters/search; no nested tables; row actions consistent.
- **Alert/Toast**: info/success/warning/error + live region; toast must not carry critical blocking errors; banner/alert for persistent or high severity.
- **Empty state**: differentiate first-use, no-results, no-permission, error-empty, completed-empty; CTA must address the cause; decorative illustration cannot replace recovery.

## Control Choices

- Icon buttons for familiar tools/actions; add labels/tooltips.
- Segmented controls for mutually exclusive modes.
- Tabs for peer views.
- Toggles/checkboxes for binary settings.
- Sliders/steppers/inputs for numeric values.
- Menus/selects for option sets.
- Buttons for commands; links for navigation.
- Tables for exact comparison/audit.

## Variants

Keep variant axes meaningful:

- intent: neutral, brand, danger, success;
- emphasis: primary, secondary, tertiary, ghost;
- size: compact, default, large;
- state: loading, disabled, selected.

Do not create variants for one-off decoration.

## Build-Vs-Buy

Use a **styled component library** when speed matters, visual style is acceptable, broad coverage is needed, product does not need a highly distinctive UI: Material UI (broad React), Ant Design (dense enterprise/admin), Fluent UI (Microsoft/productivity), Carbon (enterprise/data), Polaris (Shopify-like commerce), USWDS/GOV.UK (public service).

Use **headless primitives** when custom visual matters and a11y must be mature: Radix Primitives, React Aria, Headless UI.

**Build custom** only when domain interaction is genuinely unique, existing libraries cannot satisfy behavior/a11y, and the team can maintain tests/docs/a11y.

Avoid custom builds for standard complex controls (combobox, date picker, dialog, menu, table) unless there is a strong reason.

## Governance

Create a new component when at least two product areas need the same behavior, existing component cannot be extended without breaking its purpose, a11y/state requirements are known, and docs/tests will be added.

Extend when purpose is the same, variation is semantic and reusable, API stays understandable, visual difference can be tokenized.

Reject when it is screen-specific styling, duplicates an existing component, hides business logic in a UI primitive, lacks a11y requirements, or only exists to mimic a screenshot.

Deprecate when there is a better replacement, a11y cannot be fixed safely, API is too broad/misleading, or usage is low and maintenance cost is high.

## Red Flags In Reviews

- Components named after pages instead of roles, or named `Custom`, `Smart`, `Universal`, `Advanced`.
- Props like `isSpecial`, `variant="custom"`, `mode="advanced"` with unclear meaning.
- Arbitrary CSS overrides as the main customization path.
- No examples for edge states; no keyboard examples for menu/dialog/tabs/combobox/table actions.
- Table actions only on hover without focus/touch alternative.
- Disabled controls used as explanation instead of help/error text.
- Loading state changes component width.
- Modal contains another modal without strict reason.
- Tooltip contains instructions required to complete the task.

## Implementation Checklist

- Component follows existing patterns and tokens.
- Semantics and ARIA correct; focus-visible obvious; keyboard path complete.
- Accessible name present for icon-only / custom controls; status not color-only.
- All required states designed and implemented.
- Fits dense and mobile contexts; long localized labels do not break layout.
- Reduced motion respected; tooltip content non-critical.
