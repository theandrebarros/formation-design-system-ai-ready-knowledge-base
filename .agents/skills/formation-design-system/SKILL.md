---
name: formation-design-system
description: Complete FanDuel Formation Design System reference — design tokens (colors, spacing, typography, radius), all 13 themes including every Business Unit override, component specs, and Figma variable cross-references. All values are sourced directly from @fanduel/formation-tokens v1.6.0. Invoke explicitly via /formation-design-system.
disable-model-invocation: true
---

# Formation Design System — Knowledge Skill

All content in this skill is auto-generated from `@fanduel/formation-tokens` v1.6.0 via the `formation-token-pipeline`.

**To refresh**: Run the `refresh-formation-tokens` skill — it handles pipeline path detection automatically.

---

## ⚡ Quick Reference (most common lookups — no file read needed)

### Key Colors
| Purpose | CSS Variable | FD Light | FD Dark |
|---------|-------------|----------|---------|
| **Primary CTA (button)** | `--fd-colors-component-button-primary-background-base` | `#128000` | `#128000` |
| **Product primary (links, interactive)** | `--fd-colors-product-colors-primary` | `#0070EB` | `#0070EB` |
| **Background surface** | `--fd-colors-background-surface` | `#FFFFFF` | `#1C1D1D` |
| **Background base** | `--fd-colors-background-base` | `#EAF0F6` | `#0a0a0a` |
| **Content default (text)** | `--fd-colors-content-default` | `#1C1D1D` | `#CED4DB` |
| **System positive (success)** | `--fd-colors-system-positive-background-default` | `#128000` | `#128000` |
| **System important (error/red)** | `--fd-colors-system-important-background-default` | `#D22839` | `#D22839` |
| **System alert (warning/yellow)** | `--fd-colors-system-alert-background-default` | `#FFDC2E` | `#FFDC2E` |
| **System info (blue)** | `--fd-colors-system-info-background-default` | `#005FC8` | `#005FC8` |

> **Authority:** If any value here conflicts with `references/core/colors.md`, treat `colors.md` as the canonical source.

### Key Token System Reminders
| Common mistake | Correct approach |
|----------------|-----------------|
| Hardcoding hex for primary button | Use `--fd-colors-component-button-primary-background-base` — resolves per theme |
| Using `system/alert` for errors | `system/important` = red errors; `system/alert` = yellow notifications |
| Using `--color-*` CSS naming | All variables use **`--fd-*`** prefix |

### Spacing Scale (4px base grid)
| Token | Value | Multiplier |
|-------|-------|-----------|
| `--fd-space-space-0` | `0px` | 0× |
| `--fd-space-space-1` | `4px` | 1× |
| `--fd-space-space-2` | `8px` | 2× |
| `--fd-space-space-3` | `12px` | 3× |
| `--fd-space-space-4` | `16px` | 4× |
| `--fd-space-space-5` | `20px` | 5× |
| `--fd-space-space-6` | `24px` | 6× |
| `--fd-space-space-8` | `32px` | 8× |
| `--fd-space-space-10` | `40px` | 10× |
| `--fd-space-space-12` | `48px` | 12× |

### Typography
| Purpose | Family | CSS Variable |
|---------|--------|-------------|
| Primary headings & UI | Inter | `--fd-fonts-font-family-010` |
| Labels & metadata | Roboto Condensed | `--fd-fonts-font-family-030` |
| Body & data | Inter | `--fd-fonts-font-family-040` |
| Display / brand | Shentox | `--fd-fonts-font-family-020` |

### Radius Tokens
| Token | Value | Usage |
|-------|-------|-------|
| `--fd-radii-border-radius-none` | `0px` | No rounding |
| `--fd-radii-border-radius-xs` | `2px` | Subtle rounding |
| `--fd-radii-border-radius-default` | `4px` | Standard (buttons, inputs) |
| `--fd-radii-border-radius-1` | `4px` | Same as default |
| `--fd-radii-border-radius-2` | `8px` | Cards, modals |
| `--fd-radii-border-radius-3` | `12px` | Large cards |
| `--fd-radii-border-radius-4` | `16px` | Prominent elements |
| `--fd-radii-border-radius-round` | `9999px` | Pills, avatars |

### Themes (10 total)
Dark mode: add `data-mode="dark"` to the element — it's never a separate `data-theme` value.

| Theme | `data-theme` | Dark mode supported |
|-------|-------------|---------------------|
| FanDuel Base | `fanduel` | Yes |
| Casino | `casino` | Yes |
| Sportsbook | `sportsbook` | Yes |
| Fantasy Sports | `fantasy` | No |
| FanDuel Picks | `picks` | Always dark — no `data-mode` needed |
| FanDuel Predicts | `predicts` | No |
| Horse Racing | `racing` | No |
| FaceOff | `faceoff` | No |
| Poker | `poker` | No |
| Mohegan Sun | `mohegan-sun` | No |

---

## How to Use This Skill

### Tier 1: Quick lookups (inline above)
Brand colors, button colors, spacing scale, font families, radius, theme list — answered inline, no file read needed.

### Tier 2: Detailed token tables (read `references/`)

| Question | Read this file |
|----------|---------------|
| Full color token reference (all semantic + brand + system) | `references/core/colors.md` |
| Spacing scale + breakpoints | `references/core/spacing.md` |
| Full typography scale (all sizes, weights, line heights, styles) | `references/core/typography.md` |
| Component specs (50 components, token-level detail) | `references/core/components.md` |
| **Icon names and categories (374 icons, all 18 categories)** | **`references/core/icon-catalog.md`** |
| Icon design guidelines (sizes, coloring rules, container) | `references/core/icons.md` |
| All theme delta overrides (what changes per BU) | `references/README.md` |
| Casino-specific colors and overrides | `references/business-units/casino.md` |
| Sportsbook-specific colors and overrides | `references/business-units/sportsbook.md` |
| Any other BU theme | `references/business-units/{bu-name}.md` |

All reference files live at:
```
.agents/skills/formation-design-system/references/   ← in the fanduel-ds-knowledge repo (authoritative)
~/.cursor/skills/formation-design-system/references/ ← when installed as a Cursor user skill (may be synced here)
├── core/
│   ├── colors.md
│   ├── spacing.md
│   ├── typography.md
│   └── components.md
├── README.md
└── business-units/
    ├── casino.md
    ├── sportsbook.md
    ├── fantasy.md
    ├── picks.md
    ├── predicts.md
    ├── racing.md
    ├── faceoff.md
    ├── poker.md
    └── mohegan-sun.md
```

If files aren't found at `~/.cursor/skills/...`, read them from `.agents/skills/formation-design-system/references/` in the repo instead.

### Using in Lovable projects

The self-contained theme CSS is generated by the pipeline into `src/styles/formation-theme.css` inside your Lovable project directory.

Apply a theme: `<body data-theme="casino" data-mode="dark">`

No npm package needed — all `--fd-*` variables are pre-resolved in this file.

---

## Component Quick Reference

| Category | Components |
|----------|-----------|
| Actions | Button (6 variants), Pill, PillGroup |
| Forms | TextField, Checkbox, RadioButton, SelectField, Switch, DatePicker |
| Navigation | Tabs |
| Feedback | Badge, Tag, TagGroup, Notifications (FixedBanner, FloatingBanner, InlineMessage, Toast), Loader, ProgressBar |
| Layout | Card, DataChunk, Image, Flex, Grid, LayoutGrid, Stack |
| Media | Avatar, Icon |
| Typography | BodyText, ButtonText, HeaderText, JumboText, LabelText, MetaDataText |
| Utilities | useBreakpoint |
| Primitives | Accordion, Button (Primitive), Collapse, Collapsible, ToggleButton |
| In Figma (WIP) | Filters 🟠, Grouped filter 🟠, Slider, Password Field, Tooltip + Popover 🔥, Gradient Mask |
| Patterns (Figma) | Alerts 🔥, Application Header 🔥, Promotions 🔥 |

**Button variants**: primary · secondary · tertiary · destructive · transparent · button-link

**Figma file**: [CORE COMPONENTS](https://www.figma.com/design/prQIPGE33uoH1SyxfVTFKT) — 29 pages (26 components + 3 patterns)

For Figma node IDs and variant details → read `references/core/figma-components.md`

---

## Live Figma Lookup (when docs may be stale)

For the most authoritative Formation token values — bypassing generated docs entirely — query the Figma source directly using `figma_execute` via the **local** Figma Console MCP (`figmaConsoleMcpLocal`).

**Important:** The remote southleft.com upstream (`https://figma-console-mcp.southleft.com/mcp`) is blocked by FanDuel's org policy (AIM). Always use the local npx server.

**Setup required (one-time):**
1. Ensure `~/.cursor/mcp.json` has the `figmaConsoleMcpLocal` entry (uses `npx figma-console-mcp`)
2. Open Figma Desktop and run the **Figma Desktop Bridge** plugin in your file
3. The plugin auto-connects to the local server on `localhost:9223`

**Example — list all local variable collections:**
```js
// Call via figma_execute on figmaConsoleMcpLocal
const collections = await figma.variables.getLocalVariableCollectionsAsync();
return collections.map(c => ({ name: c.name, id: c.id, varCount: c.variableIds.length }));
```

**To look up Formation Core Components** (file key `prQIPGE33uoH1SyxfVTFKT`):
Open that file in Figma Desktop, run the bridge plugin, then call `figma_execute` — it reads whichever file is currently open.

Use this when a generated doc value seems wrong or you need ground-truth before shipping.

---

## When to Read Reference Files

| Question | Read this file |
|----------|---------------|
| Full color token reference | `references/core/colors.md` |
| Spacing scale + breakpoints | `references/core/spacing.md` |
| Full typography scale | `references/core/typography.md` |
| Component specs (token-level) | `references/core/components.md` |
| **Icon names and categories (374 icons)** | **`references/core/icon-catalog.md`** |
| Icon design guidelines (sizes, coloring rules) | `references/core/icons.md` |
| **Figma node IDs, variants, Code Connect, Figma Make** | **`references/core/figma-components.md`** |
| All BU theme overrides | `references/README.md` |
| Casino / Sportsbook / other BU | `references/business-units/{bu-name}.md` |

---

## Data Pipeline

This skill's `references/` content is generated by:
```
formation-token-pipeline/
├── src/generate/cursor.ts           ← generates all files in references/
├── src/agents/figma-components.ts   ← generates figma-components.md (see PIPELINE.md)
├── canonical/                       ← intermediate JSON
└── package.json                     ← npm run all | gen:skill
```

Token source: `@fanduel/formation-tokens` v1.6.0 CSS files in `formation-tokens-source/`

---

**Source Package**: `@fanduel/formation-tokens@1.6.0`
**Maintained by**: FanDuel Formation Team
