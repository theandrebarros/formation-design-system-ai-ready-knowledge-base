# Formation Token Pipeline

**Type**: Formation DS Automation Tool (not a Figma plugin)
**Tech Stack**: TypeScript + Node.js, `tsx` runtime (no compilation step)
**Architecture**: 5-agent pipeline with dual-consumer generators
**Project Path**: `/Users/andre.barros/Documents/Development/Proof of Concept/Lovable/formation-token-pipeline/`

## Purpose

An automated pipeline that extracts every Formation Design System token from the `@fanduel/formation-tokens` npm package CSS files, resolves all alias chains to final hex/px values, and regenerates accurate documentation for two consumers simultaneously:

1. **Lovable** — `.lovable/rules/*.md` + `lovable-knowledge.md` + `src/styles/formation-theme.css`
2. **Formation Design System AI-Ready Knowledge Base** — `formation-ds/core/*.md` + `formation-ds/business-units/*.md` + `README.md`

This pipeline fixes the root cause of incorrect or inconsistent documentation (wrong hex values, missing components, placeholder BU themes) by generating everything directly from the npm package source of truth.

## Key Corrections Enforced

| Legacy Documentation (wrong) | Pipeline-enforced (correct) |
|------------------------------|----------------------------|
| Primary button color hardcoded | Use `--fd-colors-component-button-primary-background-base` — resolves per theme |
| `system/alert` = red error | `system/important` = red errors; `system/alert` = yellow notifications |
| Old/wrong brand color values | Product primary = `--fd-colors-product-colors-primary` |
| `--color-*` CSS variable naming | Correct `--fd-*` naming from the npm package |
| BU themes with placeholder text | All 9 BUs with real token override tables and hex values |

## Architecture

```
formation-token-pipeline/
├── src/
│   ├── index.ts                  ← CLI orchestrator (7 commands)
│   ├── parse.ts                  ← Code Agent: CSS parser + alias resolver
│   ├── merge.ts                  ← Merge Agent: code + design cross-reference
│   ├── components.ts             ← Component Agent: extract component specs
│   ├── agents/
│   │   └── extract-design.ts     ← Design Agent: Figma MCP name mapping
│   └── generate/
│       ├── lovable.ts            ← Lovable generator (5 output files)
│       ├── cursor.ts             ← Cursor/knowledge generator (14 output files)
│       └── theme-css.ts          ← Self-contained theme CSS generator
└── canonical/
    ├── code-tokens.json          ← 13 themes, all resolved values
    ├── design-tokens.json        ← Figma name ↔ CSS var cross-references
    ├── merged-tokens.json        ← Combined code + design output
    └── components.json           ← Structured component specs
```

## Agent Responsibilities

### Code Agent (`parse.ts`)
- Reads all 13 CSS files from `formation-tokens-source/`
- Themes: fanduel-light, fanduel-dark, casino, casino-dark, sportsbook, sportsbook-dark, fantasy, picks, predicts, racing, faceoff, poker, mohegan-sun
- Resolves alias chains: `var(--fd-*)` → hex via up to 25 passes
- Resolves `calc(var(--fd-space-space-base) * N)` → `N*4px`
- Outputs `canonical/code-tokens.json`

### Design Agent (`agents/extract-design.ts`)
- Maps Figma variable names (e.g. `content/brandPrimary`) to CSS variable names
- Uses naming convention algorithm: `content/brandPrimary` → `--fd-colors-content-brand-primary`
- Seed data collected from Figma Remote MCP `get_variable_defs` calls
- Figma file keys documented inline for future expansion
- Outputs `canonical/design-tokens.json`

### Component Agent (`components.ts`)
- Extracts all `--fd-colors-component-*` and `--fd-radii-component-*` tokens
- Covers: button (6 variants), pill, tab, data-input (TextField), selection-control (Checkbox/Radio)
- Documents semantic-token-based components: Card, Badge, Tag, Notifications, Avatar, Loader
- Outputs `canonical/components.json`

### Merge Agent (`merge.ts`)
- Cross-references Code + Design tokens using name-convention matching, with hex-value fallback
- Outputs `canonical/merged-tokens.json`

### Generators
- **`generate/lovable.ts`** — produces tokens.md, typography.md, buttons.md, forms.md, navigation.md, system.md, lovable-knowledge.md
- **`generate/cursor.ts`** — produces core/colors.md, core/spacing.md, core/typography.md, core/components.md, README.md, all 9 business-units/*.md
- **`generate/theme-css.ts`** — produces a 2,600-line self-contained CSS with all 13 themes, delta-compressed (only overrides vs FD base)

## Commands

```bash
cd "/Users/andre.barros/Documents/Development/Proof of Concept/Lovable/formation-token-pipeline"

npm run all              # Run all 5 agents + all generators (~4 seconds)
npm run extract          # Code Agent only → canonical/code-tokens.json
npm run extract:design   # Design Agent only → canonical/design-tokens.json
npm run extract:components # Component Agent only → canonical/components.json
npm run merge            # Merge Agent only → canonical/merged-tokens.json
npm run gen:lovable      # Lovable generator only
npm run gen:cursor       # Cursor/knowledge generator only
npm run gen-theme-css    # Theme CSS generator only
```

## Token Source Files

All CSS source files live at:
```
/Users/andre.barros/Documents/Development/Proof of Concept/Lovable/formation-tokens-source/
```

Downloaded from `@fanduel/formation-tokens@1.6.0` via Artifactory. To update to a new version:
1. Re-download the package from Artifactory
2. Copy the CSS/JSON files to `formation-tokens-source/`
3. Run `npm run all`

## Generated Output Files

### Lovable Consumer
| File | Description |
|------|-------------|
| `.lovable/rules/tokens.md` | Colors, spacing, radius, breakpoints |
| `.lovable/rules/typography.md` | Full type scale (Inter default; Proxima Nova for SBK/Fantasy only) |
| `.lovable/rules/buttons.md` | All button variants + states |
| `.lovable/rules/forms.md` | TextField, Checkbox, SelectField states |
| `.lovable/rules/navigation.md` | Tabs, Pills states |
| `.lovable/system.md` | Master Lovable design system config |
| `lovable-knowledge.md` | Standalone comprehensive reference |
| `src/styles/formation-theme.css` | Self-contained CSS (no npm needed) |

### Cursor/Knowledge Consumer
| File | Description |
|------|-------------|
| `formation-ds/core/colors.md` | Complete color token reference |
| `formation-ds/core/spacing.md` | Spacing scale + breakpoints |
| `formation-ds/core/typography.md` | Full type scale |
| `formation-ds/core/components.md` | Component specs (50 components) |
| `formation-ds/README.md` | Quick reference |
| `formation-ds/business-units/casino.md` | Casino theme overrides |
| `formation-ds/business-units/sportsbook.md` | Sportsbook theme overrides |
| + 7 more BU files | fantasy, picks, predicts, racing, faceoff, poker, mohegan-sun |

## Key Technical Patterns

### CSS Alias Resolution
Multi-pass iterative resolver — handles chains like:
```
--fd-colors-brand-primary-default
  → var(--fd-colors-product-colors-primary)
  → var(--fd-colors-core-blue)
  → #0070EB
```

### Delta Compression for Theme CSS
BU theme sections only contain tokens that differ from the FD base:
```typescript
function delta(base: Vars, override: Vars): Vars {
  // returns only keys where override value !== base value
}
```

### Figma Name → CSS Variable Convention
```typescript
"content/brandPrimary"          → "--fd-colors-content-brand-primary"
"system/positive/background/subtle" → "--fd-colors-system-positive-background-subtle"
"background/surface"            → "--fd-colors-background-surface"
```

### Component Token Structure
```
--fd-colors-component-{component}-{variant}-{property}-{state}
component: button | pill | tab | data-input | selection-control
variant:   primary | secondary | tertiary | destructive | transparent | inverse
property:  background | border | content | label | icon | indicator
state:     base | hover | active | disabled | selected | error | success
```

## Figma Source Files

| File | Key | Purpose |
|------|-----|---------|
| FANDUEL VARIABLE THEME | [9gJbs4Xti15jTaf3hsgrVS](https://www.figma.com/design/9gJbs4Xti15jTaf3hsgrVS) | Color/spacing tokens |
| TYPOGRAPHY LIBRARY | [524jb8ZmEXMGcb63bKQtTv](https://www.figma.com/design/524jb8ZmEXMGcb63bKQtTv) | Type styles |
| CORE COMPONENTS | [prQIPGE33uoH1SyxfVTFKT](https://www.figma.com/design/prQIPGE33uoH1SyxfVTFKT) | Component designs |

## When to Reference This Project

- Refreshing Formation DS documentation after a token update
- Adding a new Business Unit theme
- Understanding how Formation CSS aliases resolve
- Building other token extraction or documentation pipelines
- Troubleshooting incorrect token values in Lovable or Cursor docs
- Understanding the Figma variable name → CSS variable name convention

---

**Last Updated**: February 2026
**Maintained by**: FanDuel Formation Team
