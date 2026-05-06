---
name: refresh-formation-tokens
description: Skill for regenerating all Formation Design System documentation from the @fanduel/formation-tokens npm package source of truth. Invoke when token docs need updating after a package version bump or when values look wrong.
---

# Refresh Formation Tokens — Skill

Use this skill when asked to: "refresh the design tokens", "regenerate Formation docs", "update token values", "the docs look wrong, regenerate them", "new version of formation-tokens is out".

> **Path note:** Steps below assume the knowledge base is cloned at `~/Documents/GitHub/fanduel-ds-knowledge`. If yours is elsewhere, substitute your actual path.

---

## Prerequisites

- `formation-token-pipeline` project cloned locally (default location: `~/Documents/Development/Proof of Concept/Lovable/formation-token-pipeline`)
- Node.js and npm installed
- If updating to a new package version: new CSS files must be in `formation-tokens-source/`

---

## Step 0 — Locate the pipeline repo

Search common locations automatically:

```bash
for p in \
  ~/Documents/Development/Backup/AI\ Automation\ for\ Prototypes/lovable/formation-token-pipeline \
  ~/Documents/Development/Proof\ of\ Concept/Lovable/formation-token-pipeline \
  ~/Documents/GitHub/formation-token-pipeline \
  ~/formation-token-pipeline \
  ~/Documents/Development/formation-token-pipeline; do
  [ -d "$p" ] && echo "FOUND: $p" && break
done
```

- If a path prints → use it as `<pipeline-path>` for all remaining steps.
- If nothing prints → ask the user: *"Where is your `formation-token-pipeline` repo located?"* and use their answer.

---

## Step 1 — Check current token version

```bash
cd "<pipeline-path>"
cat formation-tokens-source/package.json | grep version
```

Note the version. Compare against what's in `fanduel-ds-knowledge/.agents/skills/formation-design-system/SKILL.md` (look for "Source Package" at the bottom).

---

## Step 2 — (If new version) Update token source files

If upgrading to a new package version:
1. Download `@fanduel/formation-tokens@{version}` from Artifactory
2. Copy the CSS files into `formation-tokens-source/`
3. Update version references in `fanduel-ds-knowledge/formation-ds/README.md` and `AGENTS.md`

If version is the same, skip to Step 3.

---

## Step 3 — Run the full pipeline

```bash
cd "<pipeline-path>"
npm run all
```

This runs all 5 agents (~4 seconds):
1. **Code Agent** — parses CSS, resolves all `var()` alias chains to final hex/px values
2. **Design Agent** — maps Figma variable names to CSS variable names
3. **Component Agent** — extracts component token specs (50 components)
4. **Merge Agent** — cross-references code + design tokens
5. **Generators** — writes output to both Lovable and fanduel-ds-knowledge

---

## Step 4 — Verify output

First locate the `fanduel-ds-knowledge` repo:
```bash
for p in \
  ~/Documents/GitHub/fanduel-ds-knowledge \
  /*/mnt/fanduel-ds-knowledge \
  ~/Documents/Development/*/fanduel-ds-knowledge \
  ~/fanduel-ds-knowledge; do
  [ -d "$p" ] && echo "$p" && break
done
```

Then check the output files were updated:
```bash
ls -la <repo>/.agents/skills/formation-design-system/references/core/
ls -la <repo>/.agents/skills/formation-design-system/references/business-units/
```

Spot-check a known value — primary button should always be `#128000` (green):
```bash
grep "128000" <repo>/.agents/skills/formation-design-system/references/core/colors.md
```

---

## Step 5 — Run specific generators only (if needed)

```bash
npm run gen:cursor       # Regenerate fanduel-ds-knowledge docs only
npm run gen:lovable      # Regenerate Lovable docs only
npm run gen-theme-css    # Regenerate self-contained theme CSS only
npm run extract          # Re-parse CSS tokens only
npm run extract:components  # Re-extract component specs only
```

---

## What gets regenerated

| Output | Location |
|--------|----------|
| Color tokens | `.agents/skills/formation-design-system/references/core/colors.md` |
| Spacing tokens | `.agents/skills/formation-design-system/references/core/spacing.md` |
| Typography tokens | `.agents/skills/formation-design-system/references/core/typography.md` |
| Component specs | `.agents/skills/formation-design-system/references/core/components.md` |
| All BU themes | `.agents/skills/formation-design-system/references/business-units/*.md` |
| Skill quick reference | `.agents/skills/formation-design-system/SKILL.md` (restore frontmatter manually — see PIPELINE.md) |
| Lovable design rules | `.lovable/rules/*.md` |
| Self-contained CSS | `src/styles/formation-theme.css` |

---

## Troubleshooting

**Wrong hex values in output**: CSS alias chain not resolving. Check `formation-tokens-source/` has all 13 CSS files.

**BU theme missing**: Ensure the BU's CSS file is in `formation-tokens-source/`. Theme names: fanduel-light, fanduel-dark, casino, casino-dark, sportsbook, sportsbook-dark, fantasy, picks, predicts, racing, faceoff, poker, mohegan-sun.

**Pipeline errors**: Run agents individually to isolate — `npm run extract` first, then `npm run merge`, then generators.
