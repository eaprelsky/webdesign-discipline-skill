# UX Journeys

Load this for user journeys, scenarios, flows, forms, feedback, navigation, ergonomic states, and page-type journey patterns.

## Journey Brief

Use before designing any new page or app screen.

```text
Page/app type:
Primary actor:
Entry source:
User goal:
Current knowledge:
Top questions:
Main objections/risks:
Primary action:
Success state:
Recovery paths:
Critical variants:
Metrics:
```

Rules:

- Goal must be an outcome, not "click CTA" or "fill form".
- Entry source must affect first-screen content.
- Top questions become section headings, comparison rows, labels, proof, help, dashboard panels.
- Objections must be answered before high-commitment CTA.
- Success must describe what the user sees after the action.

## Scenario Card

```text
Actor:
Motivator:
Intent:
Context:
High-level action:
Resolution:
Risk:
Design implication:
```

Use 1-2 strong scenarios with motivator and constraints rather than many shallow personas. A scenario must produce layout/content/state implications, not biography.

## Phase Grid

For pages or flows longer than one screen.

```text
Phase:
User question:
User action:
Information needed:
Emotion/effort:
Touchpoint/channel:
Pain point:
UI response:
Opportunity:
Owner/metric:
```

Phase count: 3-4 for landing/static; 4-6 for checkout, onboarding, dashboard decision loop, tool/editor; more than 6 means split into summary + focused subflows. Convert each pain point into a design implication.

## User Flow Skeleton

```text
Start:
Step 1:
Decision:
Step 2:
Error branch:
Empty/no data branch:
Permission branch:
Success:
Next likely action:
Return/resume:
```

Start includes entry source and preloaded context. Success must be visible state change, not just toast. Return/resume handles refresh, back, later return, saved draft.

## Page-Type Journey Patterns

### Landing

Recognize fit -> understand value -> trust claim -> resolve objections -> act/save/share.

Required: H1 = literal product/category/offer; first viewport answers "what is this and is it for me"; proof appears before high-commitment CTA; integrations/security/pricing objections appear before final CTA when relevant; post-CTA expectation is clear.

### SaaS / Admin

Orient -> detect what changed -> inspect -> act -> confirm/recover.

Required: current object/section/filters/selected rows/status visible; primary action near affected object; bulk actions show selected count; pending/save/error states local; keyboard path and focus restoration work.

### Dashboard

Ask decision question -> see signal -> understand cause -> choose action -> monitor result.

Required: explicit decision purpose; metrics have baselines/targets/dates; anomalies and risks visually prioritized; charts link to detail or action; filters/date range visible and persistent. Avoid generic KPI cards, charts without next action, equal weight for every metric.

### Ecommerce

Find -> narrow by real criteria -> compare tradeoffs -> trust -> buy/save/recover.

Required: filters match user vocabulary; product cards show real differentiators; active filters visible and removable; no-results offers recovery; delivery/return/warranty/compatibility/availability visible before purchase.

### Content / SEO

Confirm intent match -> get quick answer -> decide whether to read deeper -> trust evidence -> continue to next action.

Required: H1 matches intent; short answer early; TOC for long pages; headings follow user questions; date/source/evidence visible where freshness or authority matters.

### Portfolio / Brand

Identify -> evaluate relevance/taste -> inspect work -> understand role -> contact/explore.

Required: person/brand/object visible in first viewport; cases include context and outcome; visual expression does not block reading or navigation; contact path always reachable.

### Tool / Editor

Create or import -> manipulate -> preview -> save/export/share -> undo/recover.

Required: useful empty/import state; current selection/mode/object state visible; undo/redo and autosave designed; export/share states explain format and limitations; destructive edits have confirmation or undo.

## Task Analysis

Use when flow has forms, approvals, checkout, onboarding, imports, dashboards, editors, bulk actions, or high-risk decisions.

Decomposition:

```text
Goal:
Task 1:
  Subtask:
  Needed information:
  Decision:
  Error risk:
Task 2:
  ...
```

Mark per task: sequence (fixed/optional/repeated/conditional), frequency, complexity (memory/comparison/calculation/trust/diagnosis), input load, system support (defaults/autofill/validation/suggestions/preview), recovery (undo/retry/draft/support/back).

Implications:

- High repetition -> shortcuts, defaults, bulk actions, saved views.
- High memory load -> summaries, visible constraints, examples.
- High comparison -> tables, side-by-side, sort/filter, highlighting.
- High risk -> review step, confirmation, undo, audit trail.
- High input load -> autofill, import, masks supporting paste, progressive steps.
- Novice/expert split -> basic path + advanced controls, not one overloaded UI.

## From Journey To Layout

```text
Recognize fit -> H1, intro, category, visual signal
Need proof -> testimonials, metrics, case, screenshots, logos
Need to compare -> table, cards with differentiators, filters
Need to know process -> steps, timeline, workflow preview
Need to trust -> security, policy, return, warranty, credentials
Need to act -> CTA near readiness point
Need to recover -> error/empty/undo/retry/support states
```

Rules: actions belong near the object they affect; filters near results; help before or beside risky input; proof near claims; recovery where failure happens; progress where the user needs orientation.

## Forms

- Remove unnecessary fields.
- Order fields by user reasoning, not database schema; one column by default.
- Use visible persistent labels; placeholder is example, not the only label.
- Use helper text before errors when it prevents errors.
- Validate structured fields after field completion or submit, not while typing.
- Show inline errors plus summary for long forms; preserve entered data after failures.
- Design disabled/readonly explanations; do not disable submit without explaining what is missing.

## Feedback Modality

Choose the least disruptive pattern that still gives enough context.

| Pattern | Use for |
|---|---|
| Inline | local feedback near a field/object/action |
| Toast/snackbar | short noncritical confirmation or background completion |
| Actionable toast (undo) | optional follow-up; must persist long enough |
| Callout | persistent contextual guidance before action |
| Banner | page/app/system-wide message |
| Modal | critical blocking decision |
| Notification center | many background/system messages users may need later |

Critical messages do not auto-dismiss. One primary action per notification. Toast is not for blocking form errors. Banner/alert for persistent or high severity.

## Error Severity

- Inline field error: invalid/missing field value.
- Inline object error: one row/card/upload/item failed.
- Page/banner error: page-level or background system state.
- Dialog/blocking error: user must decide or workflow cannot continue.
- Global incident: system-wide outage, maintenance, offline.

Good error: appears near source; not color-only; states what happened in user language; says how to fix; preserves work; offers direct recovery.

## Loading And Async

- Short: button/row state, prevent duplicate submit, preserve current content.
- Medium: spinner/skeleton/progress in the affected region; keep filters/query/data context visible.
- Long: determinate progress if available; cancel/backgrounding; show where result will appear; notify completion/failure later.

Skeletons match final layout to prevent CLS. Existing data may stay visible with stale/loading indication. Do not clear the whole page if only one region is loading. Failed async offers retry and preserves inputs.

## Empty States

Differentiate: first use, no data, no permission, filtered empty, error empty, completed empty. Each must explain the cause and offer one clear next action when available; for filtered empty, show applied filters and remove/broaden controls; for permission, explain access and request path.

## Tables, Filters, Search

- Filters close to results; applied filters as removable chips with count.
- Preserve sort/filter/search across navigation; URL persistence preferred for shareable views.
- Bulk selection state with selected count; confirm destructive bulk actions or offer undo.
- No-results differs from no-data; do not erase query on no results.
- Row action menus consistent; row actions visible or discoverable, not hover-only.

## Dialogs, Drawers, Modality

Modal for: destructive confirmation, required decision, short focused form with blocking context, critical error/permission barrier.

Drawer/non-modal for: details while comparing with main content, inspector/properties editing, secondary context.

Rules: dialog title states purpose; primary action clear; secondary safe; trap focus only while modal open; restore focus to trigger on close; preserve input on validation. Avoid modals for routine success messages, nested modals, ambiguous close/back behavior.

## Destructive Actions And Undo

- Reversible: perform action, show clear result, offer undo.
- Irreversible/high-impact: separate destructive action visually, require confirmation that names object and consequence, avoid vague "Are you sure?", require typed confirmation only for high-risk operations.
- Never place destructive in the same visual hierarchy as primary save/continue.
- Bulk destructive shows selected count and affected scope.

## Navigation

- Persistent navigation stays stable; current section/object visible.
- Breadcrumbs or object headers for deep pages.
- Back/close/cancel preserve context; restore focus after route changes and dialogs.
- Search/filter/sort state visible and preserved.
- Critical in-flow actions are not accessible only via global nav.

## Keyboard And Touch

- Native controls first; tab order follows task order.
- Enter/Space conventions; Escape closes dismissible overlays.
- Focus always visible; focus moves predictably after actions.
- All pointer actions have keyboard alternatives where practical.
- Tap targets at least 24x24 CSS px or sufficiently spaced; important/frequent larger.
- Avoid clickable `div`, removed outlines without replacement, hover-only menus, drag-only reordering.

## Onboarding And Progressive Disclosure

Prefer learning by doing with contextual guidance. Explain what will happen and how long setup takes. Do not block experienced users with repeated tours. Use progressive disclosure for rare/advanced options. Keep frequently needed controls visible. Avoid more than two levels of hidden complexity.

## Edge-Case Coverage

Minimum variants: happy path, first-time, returning, empty/no data, no results after filters, validation error, system/network error, no permission, abandon/cancel/back, return/resume, mobile/narrow.

High-risk additions: destructive, bulk, payment/checkout, legal/medical/financial data, role handoff, offline/stale, long-running async, extreme data (long names, many records, zero records, missing fields).

## Review Severity

- **High**: cannot complete goal, loses work, cannot recover, performs destructive action by mistake, cannot trust critical claim.
- **Medium**: completes goal but with avoidable confusion, recall, repeated work, hidden state, missing context.
- **Low**: works but section order/copy/visual priority slows comprehension.

## Anti-Patterns

- Journey for "everyone".
- Goal written as "click", "browse", "submit", "fill".
- Page sections copied from generic SaaS template.
- CTA repeated mechanically without new readiness.
- Dashboard without decision.
- Form ordered by database fields.
- Product cards that hide comparison criteria.
- Success shown only as auto-dismissing toast.
- Error branch that clears entered data.
- No-results page with no applied-filter visibility.
- Permission-denied state with no request path.
- Mobile stack that changes decision order accidentally.
