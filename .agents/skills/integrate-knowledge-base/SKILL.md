---
name: integrate-knowledge-base
description: Skill for wiring up the fanduel-ds-knowledge base into a new or existing project — setting up .cursorrules references, choosing the right Formation theme, and configuring AI agents to use correct tokens. Invoke when starting a new project or onboarding a project to the knowledge base.
---

# Integrate Knowledge Base — Skill

Use this skill when asked to: "set up this project with Formation", "add Formation DS to this project", "wire up the knowledge base", "onboard this project to Formation", "set up .cursorrules for this project".

> **Path note:** All paths below assume this repo is cloned at `~/Documents/GitHub/fanduel-ds-knowledge`. If yours is elsewhere, substitute accordingly.

---

## Step 1 — Determine project type

| Project type | Go to |
|---|---|
| New project (nothing exists yet) | Step 2A |
| Existing project (add Formation references) | Step 2B |
| Figma plugin project | Also read `create-figma-plugin` skill |

---

## Step 2A — New project setup

Copy the cursorrules template:

```bash
cp ~/Documents/GitHub/fanduel-ds-knowledge/templates/cursorrules-template.md \
   ~/Documents/GitHub/your-project/.cursorrules
```

Then customise:
- Update project name and description at the top
- Add the project's specific tech stack
- Keep all Formation DS references intact

---

## Step 2B — Existing project setup

Add a `## Shared FanDuel Knowledge` section to the project's `.cursorrules`:

```markdown
## Formation Design System

All colors, spacing, and typography must use Formation tokens. Never hardcode values.

**Token reference:**
- Colors: ~/Documents/GitHub/fanduel-ds-knowledge/.agents/skills/formation-design-system/references/core/colors.md
- Spacing: ~/Documents/GitHub/fanduel-ds-knowledge/.agents/skills/formation-design-system/references/core/spacing.md
- Typography: ~/Documents/GitHub/fanduel-ds-knowledge/.agents/skills/formation-design-system/references/core/typography.md
- Radius: ~/Documents/GitHub/fanduel-ds-knowledge/.agents/skills/formation-design-system/references/core/radius.md
- Components: ~/Documents/GitHub/fanduel-ds-knowledge/.agents/skills/formation-design-system/references/core/components.md

**Key rules (memorise these — do not look up unless unsure):**
- Primary button uses `--fd-colors-component-button-primary-background-base` — never hardcode its color
- Product primary (links, interactive) = `--fd-colors-product-colors-primary`
- Error/red = system/important tokens; Warning/yellow = system/alert tokens
- All CSS variables use --fd-* prefix (NOT --color-*)
- Spacing is 4px base grid only
```

---

## Step 3 — Select the right business unit theme

Ask which BU this project belongs to, then add:

```markdown
## Business Unit Theme

This project uses the **{BU name}** theme.
Theme reference: ~/Documents/GitHub/fanduel-ds-knowledge/.agents/skills/formation-design-system/references/business-units/{bu-name}.md

Apply theme: <body data-theme="{bu-name}">
```

Available themes: `fanduel` (default), `casino`, `sportsbook`, `fantasy`, `picks`, `predicts`, `racing`, `faceoff`, `poker`, `mohegan-sun`

Dark mode (where supported): add `data-mode="dark"` alongside `data-theme`.
Full dark support: `fanduel`, `casino`, `sportsbook`.

---

## Step 4 — Add architecture references (if needed)

For projects with complex structure:

```markdown
## Architecture Patterns
- Clean Architecture: ~/Documents/GitHub/fanduel-ds-knowledge/company-patterns/architecture/clean-architecture.md
- Command Pattern: ~/Documents/GitHub/fanduel-ds-knowledge/company-patterns/architecture/command-pattern.md
```

---

## Step 5 — Add approved tools references (if needed)

For projects using Atlassian, Figma, or Browser MCPs:

```markdown
## Approved MCP Tools
Reference: ~/Documents/GitHub/fanduel-ds-knowledge/approved-tools/mcp-servers.md
```

---

## Step 6 — Verify setup

Ask the AI agent a Formation question to confirm knowledge is loading:
- "What token do I use for the primary button background?"  → Should answer: `--fd-colors-component-button-primary-background-base`
- "What spacing token is 16px?"       → Should answer: `--fd-space-space-4`
- "What's the error color token?"     → Should answer: `--fd-colors-system-important-background-default`

If answers are wrong, check that paths in `.cursorrules` are absolute (`~/Documents/...`) and that the knowledge base is cloned at `~/Documents/GitHub/fanduel-ds-knowledge/`.

---

## Token efficiency tips

- Reference files in `.cursorrules`, don't paste content into it
- Only add the BU theme file if the project actually uses that theme
- Use the global Cursor skill (`~/.cursor/skills/fanduel-projects/SKILL.md`) for cross-project queries instead of duplicating references

---

## Reference files

- Template: `~/Documents/GitHub/fanduel-ds-knowledge/templates/cursorrules-template.md`
- Integration guide: `~/Documents/GitHub/fanduel-ds-knowledge/confluence-docs/how-to-use-it.md`
- All Formation DS docs: `~/Documents/GitHub/fanduel-ds-knowledge/.agents/skills/formation-design-system/references/`
