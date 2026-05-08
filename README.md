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

For Codex/OpenAI-style local skills, the frontmatter skill name is `web-design`, so the folder can be installed as:

```bash
git clone https://github.com/eaprelsky/webdesign-discipline-skill.git "$CODEX_HOME/skills/web-design"
```

## Usage

Platform-neutral prompt:

```text
Use the Web Design Discipline instructions to design and validate a modern responsive landing page for ...
```

Native skill invocation where supported:

```text
Use $web-design to design and validate a modern responsive landing page for ...
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
