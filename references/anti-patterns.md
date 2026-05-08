# Anti-Patterns

Load this for a compact failure checklist before finalizing a frontend.

## Generic AI Design

- Generic gradient/orb/bokeh/mesh background as the whole visual concept.
- Bento/card grid used as the whole concept regardless of content.
- Decorative icons for every bullet or every card.
- Vague hero copy with no literal product/category/offer.
- Stock-like atmospheric image when user needs to inspect real product/place/object.
- Same purple/blue/slate/beige palette as every generated site.
- Cyan-on-slate "AI dashboard" aesthetic with glow and metrics regardless of domain.
- Decorative gradient text on headlines or metrics for "premium feel".
- Effect soup: gradient mesh + glass + glow + noise + blur + particles + big shadows in the same surface.
- Glassmorphism by default over busy backgrounds with no readability backstop.
- Oversized hero on operational tools.
- Cookie-cutter SaaS hero (navbar, pill badge, centered headline, two buttons, abstract screenshot).
- Card-stack app where every screen is a vertical stack of large rounded cards.
- Fake dashboard with metric cards, line chart, and progress rings unrelated to product.

## Typography And Copy

- Default UI font (Inter, Roboto, Aptos, Helvetica, system stack) chosen without reason and used everywhere.
- Single "AI unique" font (Space Grotesk and similar) substituted as a universal anti-AI fix.
- Hero-only typography: H1 looks designed, body/labels/UI fall back to defaults.
- Random type scale (`text-sm`, `text-lg`, `text-2xl`, `text-7xl` scattered without role).
- Tiny, low-contrast muted UI text for labels, helpers, captions.
- Russian Title Case or ALL CAPS for normal buttons/headings.
- Placeholder-only labels.
- `Да/Нет` in destructive confirmations.
- Slashes/arrows/pluses used instead of words.
- Канцелярит and English calques.
- Text overflow ignored in Russian/translated strings.
- Fake metrics ("10x faster", "99.9% uptime", "50k users") without source.
- Generic SaaS copy ("Transform your workflow", "Unlock your potential", "Seamless integration").

## Color

- Low-contrast muted text below WCAG AA.
- Color-only error/selection/status/category encoding.
- Red/green-only data encoding.
- Brand color applied everywhere, including non-action surfaces.
- White text on bright color without contrast check.
- Sale color conflicting with error color in the same context without labels.
- Dark mode created by mechanical inversion; charts not retuned; white-image glow ignored.
- No explicit on-color foreground tokens for strong/saturated backgrounds.

## Layout

- Cards inside cards.
- Every page section styled as a floating card.
- Fixed widths causing mobile overflow; `100vw` on regular sections.
- Text scaled with viewport width (`vw`-based font sizes).
- Buttons resize layout on hover or label change.
- Sticky/fixed bars covering content; no safe padding; broken at 200% zoom.
- Tables squeezed into unreadable mobile cards without column priority decisions.
- Data tables flattened into inaccessible card piles.
- Grid/flex children missing `min-inline-size: 0`, causing overflow with long values.
- `order` used to fake source order; duplicate DOM for mobile and desktop.
- Adding Bootstrap/Tailwind/MUI for one layout problem; framework chosen by habit.
- Exact Figma frames treated as the only supported widths; device-named breakpoints.

## UX

- Designing from visual trend before user goal.
- Journey ends at submit/save without success/next step.
- Only happy path designed.
- Filters, selected state, current object, or progress hidden.
- Errors blame the user or lose entered data.
- Disabled controls with no explanation.
- Hover-only access to essential information.
- Dashboard without a decision purpose.
- Form ordered by database fields.
- Product cards that hide comparison criteria.
- Success shown only as auto-dismissing toast.
- No-results state with no applied-filter visibility.
- Permission-denied state with no request path.
- Mobile stack that changes decision order accidentally.
- Trust aesthetics (locks, shields, "secure" badges) without actual security/behavior.

## Components

- `div`/`span` used as buttons or links.
- Custom modal, menu, combobox, date picker without accessibility behavior.
- Icon-only critical/destructive controls without accessible name and confirmation.
- Inconsistent button hierarchy; primary and secondary visually equal.
- Semantic colors used as decorative category colors.
- Variants created for one-off decoration.
- Missing focus, loading, selected, disabled, error states.
- Modal used for routine notifications; nested modals; modal that contains another modal.
- Tooltip carries instructions required to complete the task.
- Loading state changes component width or layout.

## AI Interfaces

- AI output rendered as authoritative without provenance, sources, or context used.
- Confidence number shown without explanation of meaning.
- Draft/suggestion not visually distinguished from committed action.
- AI performs irreversible action without explicit confirmation and undo.
- Magic-only metaphor (sparkles, glow) used for high-risk domains.
- Decorative AI badges that imply quality the system does not deliver.

## Iconography

- Icon-only destructive, financial, medical, legal, or public-service action.
- Brand icons used as decoration or as your product logo.
- Apple SF Symbols used as a generic web icon set.
- Mixed icon sets without a documented reason.
- One icon used for two unrelated concepts, or two icons used for the same concept.
- Hover-only labels for navigation; abstract sparkles/layers/grid icons without text.
- Color-only icon states; non-text contrast below 3:1 for meaningful icons.

## Data Visualization

- KPI gallery without a decision question.
- Pie chart with many slices.
- 3D charts.
- Rainbow scale for ordered data.
- Cropped or truncated axis that exaggerates differences.
- No source/date/unit/baseline visible.
- Mobile chart unreadable; tiny legends; long labels overlapping after resize.
- Tooltip-only data access.
- Hidden stale, partial, sampled, or missing data.
- Brand color reused for every series.

## SEO / GEO

- Hidden or non-literal H1; vague hero slogan as H1.
- Thin keyword page; keyword stuffing for AI.
- Client-only blank shell for main content; CSR-only content pages.
- Fake FAQ; fake review/structured data; structured data not visible on page.
- Important facts only in images or canvas.
- Unsupported claims with no date/source.
- No author/date for time-sensitive content.
- Accidental `noindex`/`nosnippet`/canonical/robots error.
- Button or `div` navigation instead of crawlable `<a href>`.
- Infinite faceted/sort URL indexation in ecommerce listings.
- Duplicate title/meta across pages.

## Cultural / Localization

- Country treated as persona ("Russian users want...").
- Strings translated without localizing task flow, trust, or contact path.
- Hardcoded US address/name/phone/state formats.
- Flags used as language selector.
- Local trust/payment/support/legal expectations ignored.
- Color or gesture meaning assumed universal.
- Untranslated diagrams or important text trapped in images.
- Text expansion, CJK font fallback, or RTL ignored.
