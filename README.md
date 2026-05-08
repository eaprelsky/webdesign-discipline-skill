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

The current AI frontend landscape is strong at generating code and shipping prototypes quickly, but most tools optimize for execution surfaces rather than design discipline.

Examples from the landscape:

- [v0 by Vercel](https://v0.app/docs) is an AI agent for creating real code, full-stack apps, live prototypes, high-fidelity UI from prompts or mockups, and Vercel deployment.
- [Lovable](https://docs.lovable.dev/introduction/welcome) is a full-stack AI development platform that can generate working applications with frontend, backend, database, authentication, integrations, GitHub sync, and deployment workflows.
- [Bolt](https://support.bolt.new/building/intro-bolt) is an AI-powered builder for websites, web apps, and mobile apps, with in-browser development, hosting, databases, domains, and model choice.
- IDE agents such as [Windsurf Cascade](https://windsurf.com/cascade) and rule systems such as [Cursor Rules](https://docs.cursor.com/context/rules-for-ai) focus on coding workflow context, file edits, commands, project rules, live previews, deployment, and developer productivity.
- Native agent skill systems, such as [Claude Agent Skills](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview), provide a progressive-disclosure package format: metadata, main instructions, references, and executable scripts loaded only when needed.

Web Design Discipline is different: it is not a prompt-to-app platform, not a hosted builder, not a component library, and not a framework starter. It is a portable decision and quality layer that can sit above any capable coding agent or UI generator.

The core idea:

```text
Generator gives speed.
Component library gives primitives.
Design system gives consistency.
Web Design Discipline gives judgment, constraints, task flow, taste, and QA.
```

It tells an agent what to care about before and after code generation:

- what kind of surface is being designed;
- which domain and risk level should shape the visual language;
- which common AI-design patterns must be rejected;
- when to use density, restraint, motion, data visualization, SEO/GEO, localization, or accessibility rules;
- which references to load for the current task;
- how to validate the result in browser screenshots and audit scripts.

## How It Differs

| Category | Typical focus | Web Design Discipline focus |
|---|---|---|
| Prompt-to-app builders | Generate a working app from natural language; often include hosting, backend, auth, database, deployment. | Improve the design reasoning and QA of whatever agent or builder is used. |
| AI UI generators | Quickly create UI components/pages, often tied to React, Tailwind, shadcn/ui, or a deployment ecosystem. | Stay stack-neutral; define visual direction, constraints, responsive behavior, accessibility, and anti-slop rules. |
| IDE agents and rules | Help code faster inside a repo, follow project conventions, edit files, run commands. | Add frontend-specific design judgment that normal coding rules rarely encode deeply. |
| Component libraries | Provide accessible primitives, components, tokens, variants. | Decide when to use those primitives, how to theme them, and how to avoid generic library-looking output. |
| Agent skill systems | Provide a packaging/loading mechanism for task-specific instructions and scripts. | Use that mechanism for a specific discipline: modern web interface design and review. |

## Advantages

- **Portable**: works as an instruction pack for any agent that can read files.
- **Stack-neutral**: useful with static HTML/CSS, React, Vue, Svelte, Tailwind, component libraries, or custom CSS.
- **Progressive**: `SKILL.md` routes the agent to focused references instead of loading everything.
- **Taste-aware**: includes hard constraints, style directions, taste dial, domain defaults, before/after fixes, and anti-patterns.
- **Task-first**: starts with user journey, domain, page type, entry context, risk, and success state.
- **Quality-oriented**: covers responsive QA, accessibility, visual QA, data visualization, Russian copy, SEO/GEO, localization, and performance risks.
- **Practical**: includes Node/Playwright audit scripts for repeatable checks.

## Out Of Scope

This pack deliberately does not try to be:

- a hosted app builder;
- a replacement for v0, Lovable, Bolt, Cursor, Windsurf, Claude, Codex, or another coding agent;
- a full-stack scaffold for backend, database, auth, payments, storage, or deployment;
- a component library or CSS framework;
- a Figma/design-file generator;
- a full brand strategy process;
- a substitute for real user research, accessibility testing with users, legal/compliance review, or production observability;
- a guarantee of good design without browser screenshots, real content, and human review.

It is best used as the design discipline layer around generation and implementation, not as the generation engine itself.

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
