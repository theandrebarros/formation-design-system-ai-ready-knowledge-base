# FanDuel AI Agent Rules

> Formation Design System tokens v1.6.0 — Last updated: 2026-02-18 | Figma Typography Library v3.0.0 — 2026-04-07
> This file is self-contained. All Formation token values are embedded below.
> Do NOT invent values. Do NOT approximate. Use only what is documented here.

---

## Formation DS — Documentation First (Non-Negotiable)

This rule applies to **all** AI-assisted work on FanDuel products.

### What is forbidden

- **Never invent** token values, rgba workarounds, or approximate component structures
- **Never hardcode** colors, spacing, or radii — always use Formation tokens from this file
- **Never assume** a component's HTML structure — read the component specs below
- **Never create** light/dark mode variants of tokens that do not exist in Formation
- **Never use** a gradient with invented dark/light variants — gradients are single values per business unit

### Key principle

If you are unsure about any Formation component, token, or pattern — **stop and read this file**. The cost of reading is always less than the cost of fixing an incorrect assumption.

---

## Figma Source Files

| File | Purpose | Key |
|------|---------|-----|
| CORE COMPONENTS | Component designs & variants | [prQIPGE33uoH1SyxfVTFKT](https://www.figma.com/design/prQIPGE33uoH1SyxfVTFKT) |
| FANDUEL VARIABLE THEME | Color/spacing tokens | [9gJbs4Xti15jTaf3hsgrVS](https://www.figma.com/design/9gJbs4Xti15jTaf3hsgrVS) |
| TYPOGRAPHY LIBRARY | Type styles | [524jb8ZmEXMGcb63bKQtTv](https://www.figma.com/design/524jb8ZmEXMGcb63bKQtTv) |
| UI ICONS LIBRARY | Icon catalog (374 icons, 18 categories) | [7y5OOtrBTHyJNbzvPp2GDm](https://www.figma.com/design/7y5OOtrBTHyJNbzvPp2GDm) |

---

## Theming

Apply themes using HTML attributes:
- `data-theme="sportsbook"` / `data-theme="casino"` / `data-theme="picks"` / `data-theme="fantasy"` etc.
- `data-mode="light"` / `data-mode="dark"`
- **Picks has no light mode** — it is always dark.

**Proxima Nova exception:** `data-theme="sportsbook"` and `data-theme="fantasy"` retain Proxima Nova as the primary font (licensed via "LICENSED ONLY - SBK, DFS" Figma collection, Typography Library v3.0.0). All other themes use Inter.

---

## Spacing Tokens

Base unit: 4px. Never hardcode spacing — always use tokens.

| Scale | Variable | Value | Common Use |
|-------|---------|-------|-----------|
| 0 | `--fd-space-space-0` | `0px` | No spacing |
| 1 | `--fd-space-space-1` | `4px` | Dense UI padding, label-to-input gap |
| 2 | `--fd-space-space-2` | `8px` | Component internal gaps |
| 3 | `--fd-space-space-3` | `12px` | Standard gaps |
| 4 | `--fd-space-space-4` | `16px` | Default padding (buttons, inputs) |
| 5 | `--fd-space-space-5` | `20px` | Section spacing |
| 6 | `--fd-space-space-6` | `24px` | Card padding |
| 8 | `--fd-space-space-8` | `32px` | Page section gaps |
| 10 | `--fd-space-space-10` | `40px` | Layout margins |
| 12 | `--fd-space-space-12` | `48px` | Large section padding |
| 16 | `--fd-space-space-16` | `64px` | Page-level spacing |
| 20 | `--fd-space-space-20` | `80px` | Extra large gaps |

---

## Radius Tokens

| Token | Value | Common Usage |
|-------|-------|--------------|
| `radius-xs` | `2px` | Micro-badges, tight chips |
| `radius0` | `0px` | Sharp corners |
| `radius1` | `4px` | Tags, chips, small badges |
| `radius2` | `8px` | General layout rounding (list items, containers) |
| `radius3` | `12px` | Large components, modals, panels |
| `radius4` | `16px` | Extra large components, hero sections |

**Component-specific tokens always override the general scale above:**
- `--fd-radii-component-button-corner-radius` = `4px`
- `--fd-radii-component-pill-corner-radius` = `9999px`
- `--fd-radii-component-data-input-corner-radius` = `4px`
- `--fd-radii-component-card-corner-radius` = `4px`

---

## Typography

### Font Families

| Variable | Value | Role |
|----------|-------|------|
| `--fd-fonts-font-family-010` | `Inter` | Primary UI — headings, body, buttons |
| `--fd-fonts-font-family-020` | `Shentox` | Alternate/condensed |
| `--fd-fonts-font-family-030` | `Roboto Condensed` | Labels, metadata (uppercase small text) |
| `--fd-fonts-font-family-040` | `Inter` | Numeric/data |

### Jumbo (Display)

| Style | Font | Size | Weight | Line Height |
|-------|------|------|--------|------------|
| jumbo-xxx-large | Inter | 60px | 700 | 1.1 |
| jumbo-xx-large | Inter | 48px | 700 | 1.1 |
| jumbo-x-large | Inter | 40px | 700 | 1.1 |
| jumbo-large | Inter | 32px | 700 | 1.25 |
| jumbo-medium | Inter | 28px | 700 | 1.25 |
| jumbo-small | Inter | 24px | 700 | 1.25 |

### Headings

| Style | Font | Size | Weight | Line Height |
|-------|------|------|--------|------------|
| heading-xx-large | Inter | 22px | 700 | 1.25 |
| heading-x-large | Inter | 20px | 700 | 1.25 |
| heading-large | Inter | 18px | 700 | 1.25 |
| heading-medium | Inter | 16px | 700 | 1.25 |
| heading-small | Inter | 14px | 700 | 1.25 |
| heading-x-small | Inter | 12px | 700 | 1.25 |

### Body

| Style | Font | Size | Weight | Line Height |
|-------|------|------|--------|------------|
| body-x-large-regular | Inter | 18px | 400 | 1.25 |
| body-x-large-strong | Inter | 18px | 700 | 1.25 |
| body-large-regular | Inter | 16px | 400 | 1.25 |
| body-large-strong | Inter | 16px | 700 | 1.25 |
| body-medium-regular | Inter | 14px | 400 | 1.25 |
| body-medium-strong | Inter | 14px | 700 | 1.25 |
| body-small-regular | Inter | 12px | 400 | 1.25 |
| body-small-strong | Inter | 12px | 700 | 1.25 |
| body-x-small-regular | Inter | 10px | 400 | 1.25 |
| body-x-small-strong | Inter | 10px | 700 | 1.25 |

### Labels (always uppercase, Roboto Condensed)

| Style | Font | Size | Weight | Letter Spacing |
|-------|------|------|--------|---------------|
| label-x-large | Roboto Condensed | 16px | 400 | 1px |
| label-large | Roboto Condensed | 14px | 400 | 1px |
| label-medium | Roboto Condensed | 12px | 400 | 1px |
| label-small | Roboto Condensed | 10px | 400 | 1px |
| label-x-small | Roboto Condensed | 8px | 400 | 1px |

### Metadata (always uppercase, Roboto Condensed)

| Style | Font | Size | Weight | Letter Spacing |
|-------|------|------|--------|---------------|
| metadata-medium | Roboto Condensed | 12px | 400 | 1px |
| metadata-small | Roboto Condensed | 10px | 400 | 1px |

### Button Typography

| Style | Font | Size | Weight |
|-------|------|------|--------|
| button-large | Inter | 16px | 400 |
| button-medium | Inter | 14px | 400 |
| button-small | Inter | 12px | 400 |
| button-x-small | Inter | 10px | 400 |

---

## Color Tokens

### Semantic Background

| Name | CSS Variable | FD Light | FD Dark |
|------|-------------|----------|---------|
| Background Base | `--fd-colors-background-base` | `#EAF0F6` | `#0a0a0a` |
| Background Surface | `--fd-colors-background-surface` | `#ffffff` | `#1C1D1D` |
| Background Layer | `--fd-colors-background-layer` | `#F7FBFF` | `#2B2D2E` |
| Background Primary | `--fd-colors-background-primary` | `#0070EB` | `#0070EB` |
| Background Hover | `--fd-colors-background-hover` | `#EAF4FF` | `#3C3E40` |
| Background Disabled | `--fd-colors-background-disabled` | `#EAF0F6` | `#3C3E40` |

### Semantic Content (Text)

| Name | CSS Variable | FD Light | FD Dark |
|------|-------------|----------|---------|
| Content Default | `--fd-colors-content-default` | `#1C1D1D` | `#CED4DB` |
| Content Strong | `--fd-colors-content-strong` | `#05285A` | `#ffffff` |
| Content Subtle | `--fd-colors-content-subtle` | `#6A6F73` | `#969DA3` |
| Content Disabled | `--fd-colors-content-disabled` | `#0a0a0a33` | `#ffffff33` |

### Border

| Name | CSS Variable | FD Light | FD Dark |
|------|-------------|----------|---------|
| Border Default | `--fd-colors-border-default` | `#B0B7BF` | `#6A6F73` |
| Border Active | `--fd-colors-border-active` | `#0070EB` | `#64AEFF` |
| Border Disabled | `--fd-colors-border-disabled` | `#0a0a0a1a` | `#ffffff1a` |

### Brand

| Name | CSS Variable | Value |
|------|-------------|-------|
| Product Primary (Blue) | `--fd-colors-product-colors-primary` | `#0070EB` |
| Brand Tertiary (Yellow) | `--fd-colors-brand-tertiary-default` | `#FFDC2E` |
| Brand Gradient Start (FD base) | `--fd-colors-brand-gradient-color-stops-start` | `#005FC8` |
| Brand Gradient End (FD base) | `--fd-colors-brand-gradient-color-stops-end` | `#003D81` |

### System / Status

| Type | Background | Background Subtle | Content Accent | Border |
|------|-----------|-------------------|----------------|--------|
| Positive (Green) | `#128000` | `#E9F8EF` | `#00732C` | `#128000` |
| Important/Error (Red) | `#D22839` | `#FDECED` | `#C8002B` | `#D22839` |
| Warning (Orange) | `#FF8C31` | `#FFF1E6` | `#A44800` | `#FF8C31` |
| Alert (Yellow) | `#FFDC2E` | `#FFF6BD` | `#756100` | `#FFDC2E` |
| Info (Blue) | `#005FC8` | `#EAF4FF` | `#004EA3` | `#005FC8` |
| Neutral | `#B0B7BF` | `#EAF0F6` | `#6A6F73` | `#B0B7BF` |

---

## Component Tokens

### Button

**Token prefix:** `--fd-colors-component-button-{variant}-{property}-{state}`
**Border radius:** `--fd-radii-component-button-corner-radius` = `4px`
**React:** `<Button variant="primary|secondary|tertiary|destructive|transparent|button-link" size="large|medium|small|x-small" />`

Use the token prefix pattern to reference any state — for example:
- `--fd-colors-component-button-primary-background-base`
- `--fd-colors-component-button-primary-background-hover`
- `--fd-colors-component-button-secondary-content-base`

**Variants:** `primary` (CTA/bet action) · `secondary` (informational action) · `tertiary` (ghost/outline) · `destructive` · `transparent` (on dark) · `button-link`

**Types:** `with-text` · `icon-only`

**Properties:** `background` · `border` · `content`

**States:** `base` · `hover` · `active` · `disabled` · `loading`

#### Sizing
| Size | Token suffix | Padding H | Padding V | Min Height |
|------|-------------|-----------|-----------|-----------|
| large | `large` | `--fd-space-space-4` (16px) | `--fd-space-space-3` (12px) | 48px |
| medium | `medium` | `--fd-space-space-4` (16px) | `--fd-space-space-2` (8px) | 40px |
| small | `small` | `--fd-space-space-3` (12px) | `--fd-space-space-1` (4px) | 32px |
| x-small | `x-small` | `--fd-space-space-2` (8px) | `--fd-space-space-1` (4px) | 24px |

---

### TextField / SelectField / DatePicker

**Token prefix:** `--fd-colors-component-data-input-{property}-{state}`
**Border radius:** `4px` (`--fd-radii-component-data-input-corner-radius`)
**React:** `<TextField />`, `<SelectField />`, `<DatePicker />`

**IMPORTANT: The Formation TextField has the label INSIDE the bordered container, not outside it.**

Structure:
```
┌─────────────────────────────┐
│ LABEL (Roboto Condensed)    │  ← label-medium, uppercase, inside the box
│ Input text / placeholder    │  ← body-medium
└─────────────────────────────┘
```

**Token properties:** `background` · `border` · `content` (text) · `label` (inside-box label)
**States:** `base` · `hover` · `active` · `error` · `disabled` · `layer`

Use the token prefix pattern — e.g. `--fd-colors-component-data-input-background-base`

#### State Reference (current resolved values)
| Token suffix | Property | Light value | Dark value |
|-------------|----------|-------------|------------|
| `background-base` | Background | `#ffffff` | `#1C1D1D` |
| `background-hover` | Background | `#EAF4FF` | `#3C3E40` |
| `background-layer` | Background | `#F7FBFF` | — |
| `background-error` | Background | `#FDECED` | — |
| `background-disabled` | Background | `#EAF0F6` | — |
| `border-base` | Border | `#B0B7BF` | `#6A6F73` |
| `border-active` | Border | `#005FC8` | `#64AEFF` |
| `border-error` | Border | `#D22839` | `#D22839` |
| `border-disabled` | Border | `#0a0a0a1a` | — |
| `content-base` | Text | `#1C1D1D` | `#CED4DB` |
| `content-placeholder` | Text | `#6A6F73` | `#969DA3` |
| `content-error` | Text | `#C8002B` | — |
| `content-disabled` | Text | `#0a0a0a33` | — |
| `label-base` | Inside label | `#05285A` | `#ffffff` |
| `label-active` | Inside label | `#004EA3` | `#64AEFF` |
| `label-error` | Inside label | `#C8002B` | — |
| `label-disabled` | Inside label | `#0a0a0a33` | — |

---

### PasswordField

**React:** `<PasswordField />`
**Token prefix:** same as TextField — `--fd-colors-component-data-input-{property}-{state}`
**Border radius:** `4px` (`--fd-radii-component-data-input-corner-radius`)

**This is a dedicated component, not a TextField variant.** It has a built-in show/hide password toggle.

**Props (from Figma):**
- `size`: `regular` · `condensed`
- `state`: `default` · `active/focus` · `error` · `disabled`
- `revealPassword`: `true` · `false` — shows/hides the eye icon toggle
- `helperText`: `true` · `false` — shows helper text below the field

Uses the same label-inside-box structure as TextField.

---

### Pill / PillGroup

**Token prefix:** `--fd-colors-component-pill-{variant}-{property}-{state}`
**Border radius:** `9999px` (`--fd-radii-component-pill-corner-radius`)
**React:** `<Pill />`, `<PillGroup />`

**Variants:** `primary` · `inverse`
**Sizes:** `default` (32px height) · `large` (34px height)
**Properties:** `background` · `content`
**States:** `base` · `hover` · `selected` · `active` · `disabled`

Use the token prefix pattern — e.g. `--fd-colors-component-pill-primary-background-base`

#### State Reference (current resolved values)
| Token | Value |
|-------|-------|
| `pill-primary-background-base` | `#EAF0F6` |
| `pill-primary-background-hover` | `#CED4DB` |
| `pill-primary-background-selected` | `#0070EB` |
| `pill-primary-background-active` | `#005FC8` |
| `pill-primary-background-disabled` | `#EAF0F6` |
| `pill-primary-content-base` | `#011638` |
| `pill-primary-content-selected` | `#ffffff` |
| `pill-primary-content-disabled` | `#B0B7BF` |
| `pill-inverse-background-base` | `#ffffff00` (transparent) |
| `pill-inverse-background-hover` | `#CED4DB` |
| `pill-inverse-background-selected` | `#0070EB` |
| `pill-inverse-content-base` | `#ffffff` |
| `pill-inverse-content-hover` | `#011638` |
| `pill-inverse-content-selected` | `#ffffff` |

---

### Loader / Spinner

**React:** `<Loader />`

| Property | Token |
|----------|-------|
| Spinner color | `--fd-colors-background-primary` |
| Track color | `--fd-colors-background-base` |

---

### Card

**Border radius:** `4px` (`--fd-radii-component-card-corner-radius`)

| Property | Token |
|----------|-------|
| Background | `--fd-colors-background-surface` |
| Border | `--fd-colors-border-default` |
| Padding default | `--fd-space-space-4` |
| Padding compact | `--fd-space-space-3` |

---

### Badge / Tag

Badge and Tag colors come from the system semantic token set, not a component-specific prefix.

**React:** `<Tag intent="positive|important|warning|alert|info|neutral|verification" size="condensed|large" variant="fill|outline|subtle" />`
**TagGroup:** `<TagGroup />` wraps multiple `<Tag />` — uses `variant="default|reverse"` (different from Tag's fill/outline/subtle).

**Token pattern:** `--fd-colors-system-{type}-{property}`
**Types:** `positive` · `important` · `warning` · `alert` · `info` · `neutral` · `verification`
**Properties:** `background-subtle` (badge bg) · `content-accent` (text) · `background-default` (border)

Use the token — e.g. `--fd-colors-system-positive-background-subtle` for a positive badge background.

#### State Reference (current resolved values)
| Type | Background (`background-subtle`) | Content (`content-accent`) | Border (`background-default`) |
|------|----------------------------------|---------------------------|-------------------------------|
| positive | `#E9F8EF` | `#00732C` | `#128000` |
| important | `#FDECED` | `#C8002B` | `#D22839` |
| warning | `#FFF1E6` | `#A44800` | `#FF8C31` |
| alert | `#FFF6BD` | `#756100` | `#FFDC2E` |
| info | `#EAF4FF` | `#004EA3` | `#005FC8` |
| neutral | `#EAF0F6` | `#6A6F73` | `#B0B7BF` |
| verification | — | — | — |

> `verification` intent exists in Figma (confirmed via MCP) — token values not yet extracted.

---

## Business Unit Themes

### Sportsbook (`data-theme="sportsbook"`)

- Dark mode available: **Yes**
- Brand gradient: `#005FC8` → `#003D81` (same for light and dark — no separate dark variant)

### Casino (`data-theme="casino"`)

- Dark mode available: **Yes**
- Brand gradient: `#61019B` → `#005FC8` (same for light and dark — no separate dark variant)

### FanDuel Picks (`data-theme="picks"`)

- Dark mode available: **No — always dark**
- Brand gradient: `#1F1AFE` → `#183495`
- Background Base: `#111320`
- Background Surface: `#1e2139`
- Background Layer: `#222641`
- Content Default: `#CED4DB`

### Fantasy (`data-theme="fantasy"`)

- Dark mode available: **Yes**
- Uses FD base gradient unless overridden

### Predicts (`data-theme="predicts"`)

- Dark mode available: **No**
- 50 token overrides from FD base

### Racing (`data-theme="racing"`)

- Dark mode available: **No**
- 47 token overrides from FD base

### FaceOff (`data-theme="faceoff"`)

- Dark mode available: **No**
- 7 token overrides from FD base (minimal diff)

### Poker (`data-theme="poker"`)

- Dark mode available: **No**
- See `formation-ds/business-units/poker.md` for full token table

### Mohegan Sun (`data-theme="mohegan-sun"`)

- Dark mode available: **No**
- 265 token overrides — most heavily customised non-FD theme
- See `formation-ds/business-units/mohegan-sun.md` for full token table

---

## Component Catalog (Full List)

Available Formation components — never build custom replacements for these:

**UI:** Avatar, Badge, Button, Card, Checkbox, DataChunk, DatePicker, Image, Loader, Pill, PillGroup, ProgressBar, RadioButton, SelectField, Switch, Tabs, Tag, TagGroup, TextField

**Iconography:** Icon

**Layout:** Flex, Grid, LayoutGrid, Stack

**Notifications:** FixedBanner, FloatingBanner, InlineMessage, Toast

**Typography:** BodyText, ButtonText, HeaderText, JumboText, LabelText, MetaDataText

**Primitives:** Accordion, Button (Primitive), Collapse, Collapsible, ToggleButton
