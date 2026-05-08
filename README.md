# Web Design Discipline

Agent instruction pack for designing, building, and reviewing modern web interfaces with disciplined taste, UX flow, responsive layout, accessibility, SEO/GEO, localization, and visual QA.

This repository is intentionally platform-neutral. Any coding or design agent can use it by reading `SKILL.md` first, then loading only the relevant files from `references/` for the current task. Platforms with native "skills" or "agents" support can wire the same files into their own loaders.

## What It Is For

Use this pack when an agent needs to create or review:

- landing pages;
- SaaS/admin interfaces;
- dashboards and analytics screens;
- ecommerce listings and product pages;
- content, docs, SEO/GEO pages;
- portfolios and brand pages;
- tools, editors, and immersive web experiences.

It is designed to prevent common AI-generated frontend failures: generic gradient heroes, card soup, fake metrics, weak typography, one-note palettes, inaccessible custom controls, broken mobile layouts, and decorative UI that does not serve a user task.

## Why This Exists

The closest peers are not app builders like v0 or Lovable, and not IDEs like Cursor or Windsurf. The relevant comparison set is other frontend/design skills for AI agents:

- [UI/UX Pro Max](https://nextlevelbuilder-ui-ux-pro-max-skill.mintlify.app/) emphasizes design intelligence through searchable datasets: UI styles, palettes, font pairings, product categories, UX guidelines, stack rules, and a design-system generator.
- [Impeccable](https://impeccable.style/) gives agents design fluency through deep references and command-style steering for typography, color, motion, spatial design, interaction, responsive behavior, and UX writing.
- [Anthropic Frontend Design](https://github.com/anthropics/skills/tree/main/skills/frontend-design) focuses on distinctive, production-grade frontend interfaces by forcing an intentional aesthetic direction before implementation.
- [Open Design](https://opendesigner.io/) is a larger open-source ecosystem with many skills, design systems, visual directions, exports, and local-first workflows.

Those projects are useful. They also reveal the main tension in AI design skills: a skill can become a style catalog, a command vocabulary, a preset library, or a methodology.

Web Design Discipline is intentionally the methodology layer.

Most AI design skills improve the default output by giving the agent more style knowledge: "fintech dashboard" maps to a palette, a type pairing, a layout archetype, or a named aesthetic. That is valuable, but it can fail when the domain is ambiguous, the product has strong constraints, the interface is not a marketing page, or the agent must explain why a design decision is appropriate.

This skill takes the opposite starting point. It does not ask the agent to pick a style first. It gives the agent a pipeline:

```text
Hard constraints cut off AI slop before generation.
Journey brief defines user goal, objections, risk, and success state.
Taste dial propagates variance, motion, and density across decisions.
Curated style directions carry parameters and anti-signals.
Before/after patterns teach concrete repairs.
References cover the task-specific domain.
Executable scripts validate the result.
```

The concept:

```text
Style catalogs answer: "What should this look like?"
Command skills answer: "How do I steer the model?"
Design-system libraries answer: "Which reusable system can I apply?"
Web Design Discipline answers: "How should the agent reason from task to visual decision to validation?"
```

It is meant to sit around any coding agent or UI generator as a design discipline layer: before generation, during implementation, and during final browser QA.

## How It Differs

| Peer category | Typical strength | Web Design Discipline focus |
|---|---|---|
| Style/resource databases | Broad coverage, fast matching, many palettes/styles/fonts/patterns. | Fewer presets, deeper decision flow, explicit constraints, and validation. |
| Command-driven design skills | Strong steering vocabulary and critique actions. | Pipeline-first workflow that works even when the user does not know design vocabulary. |
| Aesthetic-direction skills | Better visual distinctiveness and anti-generic guidance. | Adds UX journey, domain risk, localization, SEO/GEO, data-viz, and scriptable QA. |
| Design-system libraries | Reusable brand/system presets and tokens. | Decides when a system fits, when it is too generic, and how to validate the resulting UI. |
| Full design ecosystems | Many skills, exports, systems, previews, and workflows. | A compact, agent-portable discipline pack focused on reasoning quality rather than ecosystem breadth. |

## Advantages

- **Full pipeline**: constraints -> journey -> taste dial -> style direction -> implementation rules -> validation.
- **Journey-first UX**: user goal, entry context, objections, risk, and success state come before visual choice.
- **Taste dial**: design variance, motion budget, and visual density propagate through the whole task without rewriting prompts.
- **Curated directions with anti-signals**: 21 hand-picked directions, each with "do this" and "never do this" guidance.
- **Concrete before/after repairs**: 10 fix patterns for common AI-slop shapes such as cookie-cutter heroes, KPI galleries, bento landings, weak forms, and generic dashboards.
- **Executable QA**: three scripts for HTML/CSS audit, responsive scan, and visual overlap/screenshot checks.
- **Beyond default English SaaS**: first-class Russian UI copy, Russia/US/China cultural localization, SEO, and GEO/AI-friendly content structure.
- **Portable and stack-neutral**: works with any agent that can read files and any frontend stack the project already uses.

## Out Of Scope

This pack deliberately does not try to be:

- instant style matching by keyword search;
- brand cloning from a URL, screenshot, or competitor reference;
- a slash-command interface for live interactive design critique;
- a library of 60+ brand-level design-system presets;
- a visual mockup/image generator;
- a component library or CSS framework;
- a hosted app builder, full-stack scaffold, backend/auth/database/deployment workflow, or IDE;
- a replacement for real user research, accessibility testing with users, legal/compliance review, or production observability.

The tradeoff is deliberate: fewer presets, more reasoning. If you need one-click access to a Stripe-like palette or a large style database, use a style/resource skill. If you need an agent to reason about design decisions, validate its own output, and stop producing generic AI-slop under ambiguous constraints, use Web Design Discipline.

## How Agents Should Use It

1. Read `SKILL.md`.
2. Classify the page/app type and domain.
3. Follow the hard constraints, quick workflow, and decision rules.
4. Load only the reference files named by `SKILL.md` for the task at hand.
5. Use the audit scripts when a runnable frontend or static HTML is available.
6. Treat scripts as advisory signals; final quality still requires browser inspection and design judgment.

Expected behavior is selective loading. Do not load every reference file by default.

## Structure

```text
webdesign-discipline/
├── SKILL.md
├── agents/
│   └── openai.yaml
├── references/
│   ├── anti-patterns.md
│   ├── before-after.md
│   ├── components-design-system.md
│   ├── content-seo-geo.md
│   ├── cultural-localization.md
│   ├── foundations.md
│   ├── layout-responsive.md
│   ├── style-directions.md
│   ├── taste-dial.md
│   ├── tokens.md
│   ├── ux-journeys.md
│   └── visual-qa.md
└── scripts/
    ├── audit-html-css.mjs
    ├── audit-responsive.mjs
    └── audit-visual.mjs
```

`agents/openai.yaml` is optional adapter metadata for OpenAI-style skill surfaces. Other agent runtimes can ignore it.

## Installation

Clone the repository wherever your agent runtime can read instruction packs:

```bash
git clone https://github.com/eaprelsky/webdesign-discipline-skill.git
```

Common integration patterns:

- Native skill loaders: install or copy the folder into the runtime's skills directory.
- Project-local agents: reference `SKILL.md` from `AGENTS.md`, `CLAUDE.md`, Cursor rules, opencode instructions, or an equivalent project instruction file.
- One-off use: paste or attach `SKILL.md` to the agent, then let it request specific `references/` files as needed.

For Codex/OpenAI-style local skills, the frontmatter skill name is `webdesign-discipline`, so the folder can be installed as:

```bash
git clone https://github.com/eaprelsky/webdesign-discipline-skill.git "$CODEX_HOME/skills/webdesign-discipline"
```

## Usage

Platform-neutral prompt:

```text
Use the Web Design Discipline instructions to design and validate a modern responsive landing page for ...
```

Native skill invocation where supported:

```text
Use $webdesign-discipline to design and validate a modern responsive landing page for ...
```

Example task:

```text
Build a dense admin dashboard for operations metrics. It must work on mobile, use real dashboard decision logic, and avoid generic AI design.
```

## Audit Scripts

All scripts require Node.js. Browser-based scripts also require Playwright in the project where they are run.

```bash
node scripts/audit-html-css.mjs <html-file-or-url>
node scripts/audit-responsive.mjs <url>
node scripts/audit-visual.mjs <url> [out-dir]
```

What they do:

- `audit-html-css.mjs`: static scan for semantic HTML, metadata, labels, CSS overflow/focus/motion risks.
- `audit-responsive.mjs`: Playwright viewport audit for horizontal overflow, clipped elements, console/page errors, and basic heading checks.
- `audit-visual.mjs`: Playwright screenshots plus simple overlap and tiny-text heuristics.

The scripts are not a design oracle. They catch obvious issues and support final review.

## Validation

Generic checks:

```bash
node --check scripts/audit-html-css.mjs
node --check scripts/audit-responsive.mjs
node --check scripts/audit-visual.mjs
```

If you use a native skill runtime, validate with that runtime's validator as well. For Codex/OpenAI-compatible skills, the `skill-creator` validator can be used when available:

```bash
python /path/to/skill-creator/scripts/quick_validate.py .
```

## Repository Discipline

This repository should stay focused on the runnable instruction pack:

- keep `SKILL.md` compact and navigational;
- put detailed guidance in `references/`;
- keep adapter metadata under `agents/`;
- do not add research drafts, TODO files, screenshots, generated reports, or local validation scratch files;
- do not commit secrets, `.env` files, `node_modules`, or Playwright output;
- add scripts only when they provide repeatable value.
