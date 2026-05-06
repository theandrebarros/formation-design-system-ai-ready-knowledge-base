# FanDuel AI-Powered Prototyping: How the Development Knowledge Base Changes the Way We Build

## Source Document for NotebookLM Podcast Generation

> This document is intended as a source for Google NotebookLM's Audio Overview feature. It covers the FanDuel Development Knowledge Base, the Formation Design System, Figma Make prototyping, and Lovable — written in an informational, narrative style so NotebookLM can generate a natural, easy-to-digest podcast conversation.

---

## The Problem This Solves

Anyone who has used an AI tool — whether that's Figma Make, Lovable, Bolt, v0.dev, or a coding assistant like Cursor or Claude Code — to build a FanDuel interface has run into the same frustration. The AI confidently generates a beautiful UI. It looks nothing like FanDuel. The buttons are the wrong shade of blue. The spacing is arbitrary. The fonts aren't right. There's no purple gradient for Casino or the distinctive Sportsbook blue.

That happens because AI tools don't automatically know how FanDuel's design system works. They have to be told — every time, in every tool, in every project. Without that context, the AI invents. It approximates. It creates something generic.

The FanDuel Development Knowledge Base is the solution. It is a centralized, structured repository of information that teaches AI tools how to "speak Formation" — how to use FanDuel's real design system, tokens, components, and brand themes correctly. Once an AI tool has this knowledge loaded, it stops guessing and starts producing on-brand output.

The practical impact is measurable. Before the knowledge base, each new project required roughly 23,000 tokens of context to be loaded before an AI could work correctly. After wiring a project to the knowledge base, that drops to 2,000–7,000 tokens. That's a 60–70% reduction in baseline token usage, lower AI costs, and faster responses.

---

## What Formation Is

Formation is FanDuel's cross-platform design system. It is the single source of truth for how every product at FanDuel looks and feels — whether that's the Sportsbook betting interface, the Casino game lobby, Fantasy Sports lineup building, FanDuel Picks, Horse Racing, FaceOff, Poker, or the Mohegan Sun casino brand.

Formation provides three fundamental things.

First, design tokens. A design token is a named CSS variable — like `--fd-colors-background-surface` or `--fd-space-space-4` — whose value changes depending on which business unit theme and color mode are active. Instead of hardcoding a hex value like `#ffffff` for a card background, you use the token. When a user switches from FanDuel Base to Casino, the card background automatically becomes the right color for Casino. Same code. Different result. No manual changes.

Formation has over 500 of these `--fd-*` CSS variables covering colors, spacing, border radius, and typography.

Second, components. Formation provides a React component library — Button, Card, Tag, Pill, TextField, Tabs, InlineMessage, Toast, and over 30 more. When you use a Formation Button, it already knows its own colors, padding, border radius, and states. You don't have to define any of that. The knowledge base documents all 50+ components with their correct token usage, variants, sizing, and props.

Third, business unit themes. FanDuel operates nine distinct product brands, each with its own visual identity. Formation supports all of them through a two-attribute theming system. You put `data-theme="casino"` on the root element, and the entire interface switches to Casino's purple-to-blue gradient, Casino-specific colors, and Casino's typography. Add `data-mode="dark"` and you get the dark version. It is pure CSS cascade — zero JavaScript required.

---

## The Nine Brand Themes

One of the most important things designers and developers need to understand about Formation is the business unit theme system. Here's a tour of all nine.

**FanDuel Base** supports both light and dark modes. It uses Inter and Roboto Condensed fonts. The brand gradient runs from `#005FC8` to `#003D81` — a rich navy blue.

**Sportsbook** also supports both light and dark modes, with the same blue gradient as FanDuel Base. However, Sportsbook uses Proxima Nova for headings and body text alongside Roboto Condensed for labels. Proxima Nova is a licensed font — it should never be named directly in prompts, because the theme applies it automatically.

**Casino** supports both light and dark modes. Its distinctive gradient runs from `#61019B` (deep purple) to `#005FC8` (brand blue). It uses Inter and Roboto Condensed.

**Fantasy Sports** is light-mode only. It uses Proxima Nova (also licensed, applied automatically). It's the other licensed-font exception alongside Sportsbook.

**FanDuel Picks** is always dark — there is no light mode variant. Its gradient runs from `#1F1AFE` to `#183495`. It uses a distinct dark background (`#111320`) rather than the standard Formation dark surface. Picks uses Inter.

**Predicts** is light-mode only, with a navy gradient (`#004AAA` to `#001C55`).

**Horse Racing** is light-mode only, using the FD base gradient.

**FaceOff** is light-mode only with a striking teal-to-blue gradient (`#00E5B4` to `#0070EB`).

**Poker** is always dark. It has the most visually unique token set — pill-shaped buttons (9999px border radius instead of Formation's standard 4px), primary red CTAs, and teal secondary actions.

**Mohegan Sun** is always dark. It has 265 token overrides, making it the most heavily customized theme in the Formation system.

A critical rule: Poker and Mohegan Sun should never have `data-mode` set — they are dark by definition and the attribute has no effect. Fantasy, Predicts, Racing, and FaceOff are always light. Only FanDuel Base, Sportsbook, and Casino support both modes.

---

## Figma Make: AI-Powered Prototyping

Figma Make is Figma's AI-powered, prompt-to-code prototyping tool. You describe what you want in natural language, and Figma Make generates a working, interactive web prototype — no coding required. It produces React applications that run in the browser.

For designers, product managers, and anyone who wants to prototype with FanDuel's real design system without writing code, Figma Make is transformative. The key word is "real." You're not using placeholder colors or generic components. You're using Formation's actual tokens, the actual component library, and the actual brand themes.

This is possible because of the Formation Figma Make Template.

### The Formation Figma Make Template

The Formation Figma Make Template is the canonical starting point for any Figma Make prototype at FanDuel. It comes pre-wired with:

- All nine business unit themes, ready to use by simply mentioning the BU name in your prompt
- The Formation React component library (`@fanduel/formation-react-components`) connected as a Make Kit
- AI guidelines loaded via Figma Make's "Adjust guidelines" feature, which teach the AI correct token usage, component names, and what to avoid
- All Formation CSS variables (`--fd-*`) ready to resolve at runtime

There are two ways to access the template. The recommended approach is to create a new Figma Make file and look under "Start from an example." The Formation template appears there — often as the first card — and creates a personal copy pre-configured with everything. The alternative is to open the template directly and click "Use in new file" in the top right corner.

An important rule: never edit the canonical template itself. Changes there affect every FanDuel designer who uses it. Always work in your personal copy.

### The Three-Step Workflow

Once you've opened your personal copy of the Formation Figma Make Template, the workflow is simple.

Step one: rename your file. Give it a meaningful name like "Casino — Promo Card exploration" or "Sportsbook — Bet Slip dark." This keeps your work organized and signals to the AI what you're building.

Step two: write your first prompt. Describe what you want and which product it's for. The AI reads the business unit name and automatically sets `data-theme` and `data-mode`, selects the correct fonts, and uses the right token values. You don't need to specify CSS variables or component imports.

Step three: iterate. Refine with follow-up prompts. Click elements to point-and-edit. Use the code panel if you need manual control. The Formation library and guidelines stay active throughout the entire session.

### Writing Effective Prompts

The quality of what Figma Make generates is directly proportional to the quality of the prompt. A well-crafted first message produces better results than hours of follow-up corrections.

The TC-EBC Framework is a structured approach to writing prompts. It stands for Task, Context, Elements, Behavior, and Constraints. Not every prompt needs all five parts, but covering more reduces the need for follow-up exchanges.

- **Task** — what Figma Make should build or change
- **Context** — where this screen fits in the product and which business unit it's for
- **Elements** — which UI components, data, and sections to include
- **Behavior** — interactions, states, animations
- **Constraints** — device target, layout rules, visual restrictions

A practical starter template that anyone can copy and paste:

```
[BU name] [light|dark] [screen name]

Show: [the main data or content to display]
Layout: [overall structure]
Components: [specific Formation components — Tabs, Pill, Tag, DataChunk, Card]
Interactions: [clickable cards, toggle, tab switching, form submission]
States: [empty state, loading state, error state]
Constraints: [mobile viewport, max-width 480px]
```

**Good prompt example:** "sportsbook dark bet slip with 3 selections, odds, stake input, and a Place Bet button"

**Vague prompt to avoid:** "Create a dashboard UI"

The specificity difference is what separates a single-generation prototype from a five-round iteration cycle.

**Formation-specific prompt tips:**

Always mention the BU name and mode ("sportsbook dark" or "casino light"). This is how the AI applies the correct theme. Never ask for specific hex colors — say "primary action button" or "success state" instead, and the AI maps these to the correct `--fd-*` tokens automatically. Never specify font names like "use Inter" or "use Proxima Nova" — the theme applies licensed fonts correctly, and naming them can cause the AI to override them incorrectly. When you know which Formation components you want, name them explicitly: "use a Pill group for filters," "show a Tag with intent positive for win status," "use a DataChunk for the stat display."

### What Figma Make Is and Isn't

Figma Make generates React prototypes — not production-ready code. It is designed for exploration, stakeholder demos, and design validation. Prototypes are web-based; native mobile app generation is not supported. Complex animations or highly custom interactions may require manual editing in the code panel after generation.

Understanding this scope is important. Figma Make is a prototyping tool that produces Formation-compliant interactive outputs quickly. It is not a code deployment pipeline.

---

## The Make Kit Architecture

The Formation Figma Make Template is an example of a Figma Make Kit — a reusable configuration that packages a design system into one shareable unit. Understanding what a Make Kit contains helps explain why the Formation template works so well.

A Make Kit has three components.

**An npm package.** This is a published React component library. Figma Make installs it at build time. The Formation kit uses `@fanduel/formation-react-components`, `@fanduel/formation-theming`, and `@fanduel/formation-tokens`. This is where the actual component code lives — Button, Card, Tag, Pill, TextField, and the rest.

**A Figma Design library.** This is a connected Figma file that provides variables, color styles, and component styles. The Formation kit uses the Beta Formation Figma Make Library, which makes Formation components visually available in Figma's design canvas and binds them to Formation variables.

**Guidelines.** These are markdown files that teach the AI how to use the design system correctly — component names, token usage patterns, what to do and what not to do. On the Formation template, these are stored in Figma Make's "Adjust guidelines" option under the three-dot menu.

Guidelines do not update automatically. When Formation tokens are bumped to a new version or a business unit theme changes, the template maintainer needs to re-paste the latest `figma-make-guidelines.md` from the Formation Design System AI-Ready Knowledge Base repository into the template's Adjust guidelines section.

---

## Using Lovable and Other Cloud AI Tools

Figma Make is not the only place where designers and engineers prototype with AI. Tools like Lovable, Bolt, and v0.dev are cloud-based AI code generators that are popular for building full web application prototypes. They present a different challenge: unlike local IDE tools, they can't read files from a local repository.

The knowledge base solves this with "coach files" — four self-contained markdown documents designed to be pasted directly into cloud AI tools.

**`formation-reference.md`** is a full Formation DS reference document. It can be pasted into Lovable's Knowledge section, Bolt's instructions, or v0.dev's system prompt. Once it's there, the tool understands all Formation tokens, components, themes, and rules — and won't invent values.

**`figma-make-context.md`** is a lightweight context snippet specifically designed for Figma Make's context window. It covers the non-negotiable rules (never hardcode colors, never invent tokens), the correct npm package names, how to apply themes via HTML attributes, key token values, spacing scale, typography rules, and border radius values.

**`guidelines.md`** is the Figma-native design rules document — covering Formation variables, spacing, radius, typography, button variants, component catalog, and accessibility minimums. Designed for Figma Make and design review prompts.

**`figma-make-guidelines.md`** in the `figma-make/` directory is the comprehensive Formation rules document that gets pasted into Figma Make's "Adjust guidelines" and kept up to date as tokens are versioned.

The workflow for Lovable is straightforward. Paste `formation-reference.md` into the Knowledge section of your Lovable project. Then prompt with the BU name, mode, and what you want to build. Lovable will produce Formation-compliant code that uses the correct CSS variables, components, and theme structure.

This is the same pattern that makes Figma Make work — the AI needs to be told what Formation is and how it works. The coach files are the portable version of that knowledge, designed for tools that can't connect to a local repository.

---

## AI Skills for IDE Users

For engineers and designers working in local IDEs like Cursor or Claude Code, the knowledge base provides a more powerful integration path: executable AI skills.

There are six skills, each a step-by-step procedural workflow that an AI agent can follow.

**`formation-design-system`** is the master reference skill. It contains all Formation tokens — colors, spacing, typography, radius — for all ten themes, 50+ component specs, and the icon catalog (374 icons across 18 categories). It includes inline quick-reference tables so most lookups require no file reads. This skill has `disable-model-invocation: true`, meaning it must be explicitly invoked — it doesn't run automatically.

**`validate-formation-usage`** is an eight-step audit workflow. It checks code or Figma designs for hardcoded colors, off-grid spacing, invalid typography, incorrect radii, missing or incorrectly used components, and accessibility violations. It supports Figma MCP validation, meaning it can check a live Figma file directly.

**`refresh-formation-tokens`** runs the formation-token-pipeline — a five-agent automated pipeline that extracts token updates from Figma, processes them through Code, Design, Component, Merge, and Generator agents, and outputs updated documentation to both the knowledge base repository and connected Lovable projects. This is how the knowledge base stays current when Formation releases a new token version.

**`create-figma-plugin`** scaffolds a new FanDuel Figma plugin. It supports two complexity tiers: a simple ES5 pattern for lightweight plugins and a TypeScript clean-architecture pattern for more complex ones. It generates the plugin manifest, message bridge, command registry, Formation styling, and MCP server setup.

**`publish-to-confluence`** publishes knowledge base content to Confluence, under the Foundations > AI Automation section. It supports the Atlassian MCP for automated publishing or provides manual copy-paste instructions.

**`integrate-knowledge-base`** wires Formation references into a new or existing project. It copies the `.cursorrules` template, guides selection of the correct BU theme, adds architecture and tools references, and verifies the setup is complete.

---

## Real Projects Using This System

The knowledge base is not theoretical. Seven FanDuel Figma plugins were built using it, and all of them demonstrate the system in practice.

**Formation Check** validates design system compliance across Figma files. It checks colors, spacing, and radius against Formation token definitions and suggests corrections. It can validate thousands of elements in seconds.

**Formation Spacing** is a specialized spacing validator with a three-tier confidence scoring system — exact matches, close matches, and approximate matches. It can run batch operations across entire Figma files.

**Formation Component Upgrader** detects which version of Formation components are used in a Figma file and automatically upgrades them, preserving property mappings and handling overrides.

**Formation Variable Creator** creates Figma variables across multiple files using the Figma REST API — useful for setting up Formation tokens in new files programmatically.

**Formation Variable Exporter** exports Figma variables as JavaScript token files, preserving alias references for the token-to-code pipeline.

**Formation Variable Mapper** uses natural language and MCP to map variables in Figma — a user-friendly interface for what is otherwise a complex variable management task.

**Formation Studio (Figma Super Powers)** is a comprehensive MCP bridge for Figma with design system validation, natural language commands, and reusable clean architecture that other plugins extend.

All seven share common patterns documented in the knowledge base. About 40% of code is reused across these projects. The Formation team estimates they built all seven plugins in the time it would have previously taken to build three or four.

---

## The Bigger Picture: What This Changes

Before the FanDuel Development Knowledge Base existed, every AI tool that touched FanDuel's products operated in a vacuum. Each project duplicated Formation DS documentation — about 15,000 tokens for design system context, 5,000 tokens for architecture patterns, 3,000 tokens for tool configurations. Every project paid that cost separately, every time.

After the knowledge base, a new project references the central repository. Context loads on-demand. Baseline token usage drops to 2,000–7,000 per project. Design system compliance goes from roughly 60% to 95%. Project setup time goes from 2–4 hours to under 10 minutes. Maintenance — updating documentation when tokens change — drops from updating seven projects individually to updating once and having it propagate everywhere.

The Confluence knowledge base serves as the public-facing documentation layer. Under the Formation space, the Foundations > AI Automation section documents everything: an overview of the knowledge base, what it contains, how to use it by role, project documentation, templates, and architecture patterns. Raw download links are available for every source file so any team member can pull content directly into their AI tool of choice.

The Figma Make Glossary Template — the interactive app built in Figma Make itself — is also a demonstration of the system's own capability. It was built using Formation components, Formation tokens, and BU themes. It's a working example of what you can build in Figma Make when the AI has the right context.

For designers, the path to a Formation-compliant prototype used to require engineering help or extensive knowledge of CSS variables. With the Formation Figma Make Template, a designer can type "sportsbook dark bet slip with 3 selections, odds, and a Place Bet button" and get a working prototype in seconds — with the right fonts, right colors, right button styles, and right spacing. No guessing.

For engineers, the knowledge base means Formation compliance is built into the workflow rather than enforced afterward. The `validate-formation-usage` skill catches violations before they reach design QA. The `refresh-formation-tokens` pipeline keeps documentation synchronized with Figma automatically.

For product managers and stakeholders, it means prototypes in review meetings are genuinely representative of what the final product will look like — not generic wireframes with placeholder styles.

The vision is company-wide adoption: a single development knowledge base that teams across Sportsbook, Casino, Fantasy, Picks, and every other FanDuel product can use to produce consistent, compliant, brand-accurate output from any AI tool they choose.

---

## Key Terms: Glossary

For anyone new to this ecosystem, here are the essential terms.

**Formation** — FanDuel's cross-platform design system. Provides components, tokens, and theme support for all business units.

**Design Token** — A named CSS variable (`--fd-*`) whose value resolves per theme and mode at runtime. Always use tokens — never hardcode hex values, pixel spacing, or radius values.

**Make Kit** — A reusable Figma Make configuration combining three things: an npm package (React components), a Figma Design library (styles and variables), and guidelines (markdown instructions for the AI).

**Guidelines** — Markdown files inside a Make Kit that teach the AI how to correctly use a design system: component names, token usage, dos and don'ts.

**Component** — A reusable UI building block from the Formation library — Button, Card, Tag, Pill, TextField, Tabs, and 30+ more. Naming components in prompts gives more precise results.

**Theme vs Mode** — Two independent settings. Theme (`data-theme`) controls which business unit's brand tokens are active. Mode (`data-mode`) controls light or dark appearance. They combine independently: Casino light and Casino dark are different combinations of the same theme.

**Prompt** — The natural-language instruction typed into Figma Make's AI chat. Quality of the prompt determines quality of output. Include BU name, mode, components, and behaviors in the first message.

**Remix** — Copying a public Figma Make community file to your own Figma account so you can edit and experiment with it.

**Adjust guidelines** — The option inside Figma Make's three-dot menu where you paste Formation AI rules. Used to update the official Formation template after a token bump.

**data-theme** — HTML attribute that activates a specific business unit's design token overrides. Example: `data-theme="casino"` applies Casino-specific colors, gradients, and styles.

**data-mode** — HTML attribute set to "light" or "dark" on the root element. Controls the active color mode. Poker and Mohegan Sun are always dark — never add data-mode for these themes.

**Formation Figma Make Template** — The canonical Figma Make file pre-wired with the Formation library, AI guidelines, and all nine BU themes. Start here rather than a blank file.

**TC-EBC Framework** — A structured prompt-writing approach: Task, Context, Elements, Behavior, Constraints.

---

## Where to Start

If you're a designer or PM who wants to prototype with Formation today:

1. Open Figma Make and create a new file
2. Under "Start from an example," select the Internal Formation Powered Figma Make Template
3. Rename your file for the product you're working on
4. Type your first prompt, starting with the BU name and mode

If you're an engineer setting up a new project:

1. Clone the Formation Design System AI-Ready Knowledge Base repository
2. Run the `integrate-knowledge-base` skill
3. Copy the `.cursorrules` template and customize it for your project

If you're using a cloud tool like Lovable or Bolt:

1. Open the `coach/formation-reference.md` file from the knowledge base
2. Paste it into your tool's Knowledge or instructions section
3. Start prompting with the BU name and what you want to build

The Confluence knowledge base is at:
`fanduel.atlassian.net/wiki/spaces/FOR/pages/311405642557/FanDuel+Development+Knowledge+Base`

Everything is there — token reference, AI prototyping tools, approved MCP servers, project documentation, templates, and architecture patterns.

---

*Document based on: FanDuel Development Knowledge Base, Formation Design System tokens v1.6.0, Formation Figma Make Template Glossary (figma.com/make/ksmjFkqzmJEha0bmh0craZ), and Confluence Foundations > AI Automation section. Last updated: April 2026.*
