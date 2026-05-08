# Cultural Localization

Load this for international pages, Russian/US/China market adaptation, neutral multi-locale defaults, locale-sensitive forms, data formats, trust signals, symbols, and imagery.

## Locale Brief

```text
Target country/region:
Language(s):
Audience:
Product context:
Primary device:
Local channels:
Payment/support expectations:
Legal/privacy constraints:
Trust signals:
Data formats:
Risky symbols/colors:
```

## Translate Tasks, Not Just Words

Localization is about the task flow, trust signals, and expectations, not only string translation. Validate that the localized page changes section order, proof, contact, and form layout when needed; do not just swap copy.

## What To Localize

- language and task vocabulary;
- tone (operational vs marketing) and formality;
- date/time/timezone/calendar where relevant;
- numbers, decimal/thousand separators, currency;
- units of measurement;
- sorting/collation rules;
- plurals (one/few/many/other);
- names and name order;
- addresses and postal codes;
- phone format with country code;
- tax/legal IDs (conditional by country);
- payment, delivery, support;
- privacy/consent and legal disclosures;
- imagery, symbols, gestures, colors;
- forms and validation messages;
- local search/social/support channels.

## Lang And Semantic HTML

- Set `lang` on `<html>` for the dominant language; use `lang="..."` on regions or inline elements when language changes (Russian product page with English testimonial, Chinese FAQ with English code).
- Use locale-specific number/date formatting via `Intl.NumberFormat` / `Intl.DateTimeFormat` or `<time datetime="...">` so machine-readable values stay stable while display is localized.
- Important text must not live only in images or canvas; localized image text cannot be translated by the browser, blocks accessibility, and breaks SEO.

## International / Neutral Locale

When the target is multi-region or unclear:

- pick neutral phrasing without idioms;
- use `YYYY-MM-DD` or unambiguous date formats with month name;
- spell out currency code (`USD`, `EUR`, `RUB`) instead of `$` alone when ambiguity matters;
- use 24-hour time when audience is international/B2B;
- use SI units, with imperial in parentheses if US is in scope;
- use country selector (text + ISO code), not flags;
- avoid US-only legal/policy assumptions (sales tax labels, shipping zones, support hours).

## Market Heuristics

Use as hypotheses, not stereotypes.

### US

- Clear value proposition early.
- Self-service path and direct CTA.
- Transparent pricing/trial/cancellation.
- Reviews, logos, certifications, privacy/security proof.
- Mobile-first expectations in consumer contexts.

Avoid: excessive institutional copy, hidden pricing/cancellation/support, dense unscannable paragraphs.

### Russia

- Concrete price/schedule/process/documents/responsibility.
- Trust through cases, roles, company details, contacts.
- Natural Russian copy, not English calques.
- Dense-but-scannable B2B/professional pages can work well.
- Do not hide contacts and operational certainty for high-trust decisions.

Avoid: abstract CTA-only pages for high-trust B2B decisions, hidden contacts, over-Americanized startup tone.

### China

- Mobile-first and local ecosystem expectations.
- QR/chat/service paths where relevant.
- Trust through platform affiliation, certifications, transaction/proof signals.
- Local payments/logistics/support.
- Higher commercial information density can be expected.

Avoid: assuming Western whitespace-heavy pages fit, unsupported payment/logistics assumptions, untranslated diagrams or image text.

## Forms And Formats

- Avoid hardcoded US address/name assumptions; use full name field or adaptable name parts.
- Country-specific address templates; postal code rules differ.
- Phone input allows paste and country code; do not strip leading zeros or `+`.
- Date input supports local display + machine-readable value.
- Legal/tax IDs conditional by country; do not require US SSN-shaped fields globally.
- Support text expansion (German, Russian can be 30-50% longer than English), CJK fonts and font fallback, RTL where relevant (Arabic, Hebrew).
- Validation messages localized and recoverable, not just translated.

## Format Depth Checklist

- Dates and date ordering.
- Time, 12 vs 24 hour, timezone.
- Calendar (Gregorian default; aware of others where relevant).
- Currency: code, symbol position, decimal/thousand separators.
- Phone: country code, masking, paste tolerance.
- Names and name order.
- Addresses and postal codes.
- Tax/legal IDs.
- Units of measurement.
- Sorting/collation (locale-aware `Intl.Collator`, not byte order).
- Plurals (use `Intl.PluralRules` or framework i18n; do not hardcode "1 item / N items").

## Imagery And Symbols

Check:

- flags, maps, borders;
- hand gestures (thumbs up, OK sign read differently across regions);
- religious, political, national symbols;
- animal/mascot references;
- color meanings (red, white, green carry different meaning by market);
- stock imagery that reads foreign or generic;
- jokes, idioms, metaphors that do not survive translation.

Do not use flags as language selector unless selecting a country/region. Use a country/region picker with text and ISO codes; offer language picker separately.

## Verification

- Is target locale/audience explicit?
- Is tone, vocabulary, and density appropriate to the market?
- Do trust signals fit local risk and regulation?
- Are forms tested with realistic local data (long names, local phone, local address)?
- Does typography handle the language (CJK fonts, Russian Cyrillic, Arabic shaping)?
- Are images/symbols safe and locally legible?
- Is task flow adapted, not only translated strings?
- Is `lang` set correctly and no important text trapped in images?

## Anti-Patterns

- Treating country as persona ("Russian users want...").
- Translating strings without changing task flow, contact path, or proof.
- Hardcoded US address/name/phone/state formats.
- Flags as language selector.
- Assuming color or gesture meaning is universal.
- Ignoring text expansion, CJK font fallback, or RTL.
- Important content trapped in untranslated images or canvas.
