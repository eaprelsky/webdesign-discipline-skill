# Visual QA And Data Visualization

Load this for final browser validation, screenshots, accessibility checks, responsive QA, data visualization, charts, dashboards, and frontend quality gates.

## Browser QA

Test realistic viewport sizes:

- 375x667;
- 390x844;
- 768x1024;
- 1280x800;
- 1440x900.

Check:

- no unintended horizontal scroll;
- no text/control overlap;
- no clipped headings, buttons, labels, errors;
- focus indicators visible;
- hover/active/selected/disabled states coherent;
- media, images, canvas, charts, and 3D scenes render;
- sticky headers/footers do not cover content;
- modals/drawers fit short mobile screens;
- longest Russian/translated strings fit;
- 200% browser zoom and user text spacing reflow without losing content (WCAG 1.4.10 / 1.4.12);
- breakpoints work between named sizes, not only at exact design frames.

## Scenario QA Matrix

For the primary flow run all of:

- happy path;
- empty / first use;
- filtered no-results;
- validation error;
- system/network error;
- no permission;
- abandon/cancel/back, then return/resume;
- success state and post-success next action.

Verify each variant on desktop and mobile. Most "looks done" frontends fail one of error/empty/permission/return.

## Accessibility QA

- Semantic landmarks exist; heading order logical.
- Buttons are buttons; links are links; clickable `div`/`span` is a red flag.
- Forms have labels associated with inputs; error messages attached to fields via `aria-describedby`.
- Icon-only controls have accessible names and tooltips.
- Images have useful alt or are explicitly decorative (`alt=""`, `aria-hidden="true"`).
- Text contrast meets WCAG 2.2 AA (4.5:1 normal, 3:1 large).
- Essential non-text UI (meaningful icons, focus indicators, state borders) meets 3:1.
- Status not color-only; combine color with label, shape, or icon.
- Keyboard focus order is usable; focus visible at all times; Escape closes overlays; focus returns to trigger after dialog/popover.
- Status/error messages perceivable; live regions used for dynamic announcements.
- Reduced motion respected; tooltip content non-critical; no hover-only access to essential information.

## Accessibility Quick Audit (Manual)

Run this in the browser before delivery. The static script cannot replace these checks.

- **Tab through the entire page.** Is the focus order logical and matches reading order? Is the focus indicator visible at every step? Do you reach all controls without needing the mouse?
- **Escape behavior.** Does Escape close every modal, drawer, popover, and combobox listbox? Does focus return to the trigger?
- **200% browser zoom.** No clipped text, no horizontal scroll on regular content, no critical controls hidden by sticky bars. Test in Firefox or Chrome with `Ctrl/Cmd +`.
- **Text spacing.** Apply user text spacing (line-height ≥ 1.5, letter-spacing ≥ 0.12em, word-spacing ≥ 0.16em, paragraph spacing ≥ 2× font-size). Layout should not break (WCAG 1.4.12).
- **`prefers-reduced-motion`.** Toggle OS-level reduced motion. Does the UI provide a static path? Is critical content reachable without animation?
- **Screen reader spot check (optional but valuable).** Use VoiceOver on macOS, NVDA on Windows, or TalkBack on Android. Landmarks are read; control names are meaningful (not "button", not file paths); form errors are announced; live regions update.
- **Keyboard traps.** Custom widgets (date pickers, comboboxes, modals) do not trap focus accidentally; Tab and Shift+Tab work to enter and leave each widget.
- **Long text.** Test the longest realistic Russian/translated label, error message, and table cell. No clipping, no broken layout.

## Data Visualization

Start with the brief; if `Decision/action` is empty, use a table or text summary.

```text
User question:
Decision/action:
Data type:
Grain:
Period:
Segments:
Baseline/target:
Primary insight:
Risk if misread:
```

### Chart Choices

- Ranking/comparison: sorted horizontal bar, dot plot, table.
- Trend: line or column.
- Few categories over time: line with direct labels.
- Many categories over time: small multiples or table.
- Distribution: histogram; box plot only for statistically literate audiences.
- Composition comparison: 100% stacked bar.
- Single composition: pie/donut only for 2-4 simple parts.
- Deviation from goal: diverging bar or bullet chart.
- Correlation: scatter plot; bubble carefully (size encoding is hard to read).
- Geography: map only when geographic pattern matters.
- Exact audit: table.

### Labeling

- Title answers "what is this showing?" or states the main insight.
- Subtitle gives period, source, segment, and caveat.
- Axis labels include units; do not hide on mobile.
- Direct labels beat legends when there are few series.
- Annotations explain spikes, dips, targets, policy changes.
- Tooltips repeat units and date range; do not make tooltip the only access to values.

### Color Encoding

- Sequential data -> sequential palette (one hue or perceptually ordered ramp).
- Divergence from target -> diverging palette with meaningful midpoint.
- Categories -> categorical palette, limited count, stable across charts.
- Key insight -> neutral context + one highlight color.
- Status -> semantic colors plus labels/icons.
- Never red/green only; never rainbow scale for ordered data.
- Re-tune charts for dark theme; do not invert mechanically.

### Dashboard Skeleton

```text
Header: scope, owner, period, freshness, filter summary
Signal row: 3-5 metrics with comparison/target
Priority block: anomalies, risks, bottlenecks, exceptions
Diagnostic block: charts explaining cause
Detail block: affected objects table/list
Action block: assign/export/drill-down/resolve/compare
State block: empty/loading/error/stale/permissions
```

### Data States And Honesty

Design and visibly indicate:

- loading;
- empty;
- filtered no-results;
- partial data (some sources missing);
- sampled data (subset, not full population);
- stale data (last updated time);
- failed fetch;
- permission denied;
- selected mark/series;
- drill-down active;
- export pending/success/failure.

Never silently hide stale, missing, partial, or sampled data. A KPI that cannot be trusted must say so or not appear.

### Responsive Charts

- Desktop dashboard -> mobile stacked sections.
- Wide chart -> summarized card + "show table" or detail route.
- Dense legend -> direct labels or collapsible legend.
- Long category labels -> horizontal bars.
- Multiple series -> small multiples.
- Fixed canvas/SVG -> responsive container with aspect ratio and min height.

### Chart Accessibility

- Title/caption summarizes insight.
- Units, period, source, filters visible.
- Color is not the only encoding.
- Underlying table/data available.
- Hover tooltip content available on focus/click or via table.
- Mobile chart readable without tiny legends.
- No motion required to understand values.
- Keyboard-reachable filters and chart controls.

## Performance QA

Quick checks before delivery:

- LCP image optimized and dimensioned; no CLS spikes from late images or fonts.
- INP not blocked by hydration or long tasks on first input.
- Below-fold media lazy-loaded; LCP not lazy-loaded.
- Bundle and CSS size reasonable for static surfaces; no unused framework CSS shipped if avoidable.

## Scriptable Checks

Use bundled scripts when possible:

- `audit-html-css.mjs <path-or-url>`: static HTML/CSS semantics and risk scan.
- `audit-responsive.mjs <url>`: Playwright viewport scroll/console/basic layout scan.
- `audit-visual.mjs <url>`: screenshot and simple overlap/clipping heuristic.

Treat scripts as signal, not authority. Browser screenshots and human judgment remain required.

## Final QA Checklist

- Desktop and mobile first screens work.
- Primary workflow happy path works; one failure/empty/permission/return state checked.
- 200% zoom reflow does not hide content.
- No obvious generic AI visual patterns (default font only, gradient/orb/bento as concept, fake metrics, cyan-on-slate dashboard, effect soup, decorative gradient text).
- SEO/GEO metadata, semantic HTML, canonical/robots, structured data match visible content when relevant.
- Charts have decision purpose, source/units/period, baselines, and honest data states; no cropped axes, no rainbow scales, no pie with many slices, no tooltip-only data access.
- Performance signals (LCP/CLS/INP) are not obviously broken.
- Russian/localized strings fit containers; longest labels tested.
