# Web Design Discipline Skill

Codex/OpenAI skill for designing, building, and reviewing modern web interfaces with disciplined taste, UX flow, responsive layout, accessibility, SEO/GEO, localization, and visual QA.

The skill is intentionally structured for progressive disclosure:

- `SKILL.md` contains the core workflow, hard constraints, domain detection, page-type defaults, decision rules, and reference navigation.
- `references/` contains deeper guidance that an agent loads only when the task needs it.
- `scripts/` contains advisory audit tools for semantic HTML/CSS, responsive behavior, and visual QA.
- `agents/openai.yaml` contains UI-facing metadata for OpenAI/Codex skill surfaces.

## What It Is For

Use this skill when an agent needs to create or review:

- landing pages;
- SaaS/admin interfaces;
- dashboards and analytics screens;
- ecommerce listings and product pages;
- content, docs, SEO/GEO pages;
- portfolios and brand pages;
- tools, editors, and immersive web experiences.

It is designed to prevent common AI-generated frontend failures: generic gradient heroes, card soup, fake metrics, weak typography, one-note palettes, inaccessible custom controls, broken mobile layouts, and decorative UI that does not serve a user task.

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

## Installation

Clone or copy this repository into your Codex skills directory. The skill frontmatter name is `web-design`, so this folder can be installed under either the repository name or a shorter local folder name:

```bash
git clone https://github.com/eaprelsky/webdesign-discipline-skill.git "$CODEX_HOME/skills/web-design"
```

If `CODEX_HOME` is not set, use your local Codex skills directory directly.

## Usage

Invoke explicitly:

```text
Use $web-design to design and validate a modern responsive landing page for ...
```

Or ask for web UI work that matches the skill description, such as:

```text
Build a dense admin dashboard for operations metrics. It must work on mobile and avoid generic AI design.
```

The root `SKILL.md` tells the agent which reference file to load for each kind of task. The expected behavior is selective loading, not reading every reference for every request.

## Audit Scripts

All scripts require Node.js. Browser-based scripts also require Playwright in the project where they are run.

```bash
node scripts/audit-html-css.mjs <html-file-or-url>
node scripts/audit-responsive.mjs <url>
node scripts/audit-visual.mjs <url> [out-dir]
```

The scripts are advisory. They are meant to catch obvious issues and guide final review, not replace browser screenshots, accessibility judgment, or domain-specific design critique.

## Validation

Validate the skill structure with the Codex `skill-creator` validator when available:

```bash
python /path/to/skill-creator/scripts/quick_validate.py .
```

Basic script syntax checks:

```bash
node --check scripts/audit-html-css.mjs
node --check scripts/audit-responsive.mjs
node --check scripts/audit-visual.mjs
```

## Repository Discipline

This repository should stay focused on the runnable skill package:

- keep `SKILL.md` compact and navigational;
- put detailed guidance in `references/`;
- do not add research drafts, TODO files, screenshots, generated reports, or local validation scratch files;
- do not commit secrets, `.env` files, `node_modules`, or Playwright output;
- add scripts only when they provide repeatable value.
