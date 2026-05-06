# Formation Design System — Complete Reference

> Single-file source for Coach, Lovable, Bolt, v0.dev. Formation v1.6.0 | Last updated: 2026-03-19
> **This file is self-contained. All answers are here. Do not reference other files for Formation information.**
>
> Cross-tool use: paste this file into Lovable, Bolt, or any cloud AI system prompt/Knowledge section.
> For Figma Make only, use `coach/figma-make-context.md` instead (lighter, Figma-specific).

---

# Part 1 — Overview

FanDuel uses the **Formation Design System** across all products. All design tokens are in `@fanduel/formation-tokens` and exported as CSS custom properties with the `--fd-*` prefix.

**Themes:** Apply via HTML attributes:
```html
<div data-theme="fanduel|casino|sportsbook|fantasy|picks|predicts|racing|faceoff|poker|mohegan-sun">
  <div data-mode="dark">...</div>
</div>
```

**Dark mode:** `data-mode="dark"` — supported on: `fanduel`, `casino`, `sportsbook`. **Picks has no light mode — it IS the dark theme.**

**npm packages:**
- `@fanduel/formation-tokens` — CSS variables
- `@fanduel/formation-react-components` — React components
- `@fanduel/formation-web-components` — Web components
- `@fanduel/formation-theming` — Theme utilities

**Figma source files:**
- CORE COMPONENTS: `prQIPGE33uoH1SyxfVTFKT`
- FANDUEL VARIABLE THEME: `9gJbs4Xti15jTaf3hsgrVS`
- TYPOGRAPHY LIBRARY: `524jb8ZmEXMGcb63bKQtTv`

---

# Part 2 — Color System

All CSS variables use `--fd-*` prefix.

## Semantic Background Colors

| Name | CSS Variable | FD Light | FD Dark |
|------|-------------|----------|---------|
| Background Base | `--fd-colors-background-base` | `#EAF0F6` | `#0a0a0a` |
| Background Surface | `--fd-colors-background-surface` | `#ffffff` | `#1C1D1D` |
| Background Layer | `--fd-colors-background-layer` | `#F7FBFF` | `#2B2D2E` |
| Background Accent | `--fd-colors-background-accent` | `#0a0a0a0d` | `#ffffff0d` |
| Background Primary | `--fd-colors-background-primary` | `#0070EB` | `#0070EB` |
| Background Secondary | `--fd-colors-background-secondary` | `#184C8B` | `#0a0a0a` |
| Background Promotional | `--fd-colors-background-promotional` | `#011638` | `#011638` |
| Background Hover | `--fd-colors-background-hover` | `#EAF4FF` | `#3C3E40` |
| Background Active | `--fd-colors-background-active` | `#0070EB` | `#0070EB` |
| Background Disabled | `--fd-colors-background-disabled` | `#EAF0F6` | `#3C3E40` |

## Semantic Content (Text) Colors

| Name | CSS Variable | FD Light | FD Dark |
|------|-------------|----------|---------|
| Content Default | `--fd-colors-content-default` | `#1C1D1D` | `#CED4DB` |
| Content Strong | `--fd-colors-content-strong` | `#05285A` | `#ffffff` |
| Content Subtle | `--fd-colors-content-subtle` | `#6A6F73` | `#969DA3` |
| Content Disabled | `--fd-colors-content-disabled` | `#0a0a0a33` | `#ffffff33` |
| Content On Dark | `--fd-colors-content-on-dark` | `#ffffff` | `#ffffff` |
| Content On Light | `--fd-colors-content-on-light` | `#05285A` | `#011638` |

## Brand Colors

| Name | CSS Variable | Value |
|------|-------------|-------|
| Product Primary (Blue) | `--fd-colors-product-colors-primary` | `#0070EB` |
| Product Secondary (Navy) | `--fd-colors-product-colors-secondary` | `#184C8B` |
| Brand Tertiary (Yellow) | `--fd-colors-brand-tertiary-default` | `#FFDC2E` |
| Brand Gradient Start | `--fd-colors-brand-gradient-color-stops-start` | `#005FC8` |
| Brand Gradient End | `--fd-colors-brand-gradient-color-stops-end` | `#003D81` |

Apply gradient: `linear-gradient(160deg, var(--fd-colors-brand-gradient-color-stops-start), var(--fd-colors-brand-gradient-color-stops-end))`

## Brand Gradients by Business Unit

| Theme | `data-theme` | Start | End |
|-------|--------------|-------|-----|
| FD Base / Sportsbook | `fanduel`, `sportsbook` | `#005FC8` | `#003D81` |
| Casino | `casino` | `#61019B` | `#005FC8` |
| FanDuel Picks | `picks` | `#1F1AFE` | `#183495` |

## System / Status Colors

> **Naming:** "important" = error/critical (red), "alert" = notification (yellow)

### Positive (Success — Green)
| CSS Variable | FD Light | FD Dark |
|-------------|----------|---------|
| `--fd-colors-system-positive-background-default` | `#128000` | `#005D23` |
| `--fd-colors-system-positive-background-subtle` | `#E9F8EF` | `#002E11` |
| `--fd-colors-system-positive-border-default` | `#128000` | `#005D23` |
| `--fd-colors-system-positive-content-accent` | `#00732C` | `#7FD9A1` |

### Important (Error — Red)
| CSS Variable | FD Light | FD Dark |
|-------------|----------|---------|
| `--fd-colors-system-important-background-default` | `#D22839` | `#A40023` |
| `--fd-colors-system-important-background-subtle` | `#FDECED` | `#40020D` |
| `--fd-colors-system-important-border-default` | `#D22839` | `#A40023` |
| `--fd-colors-system-important-content-accent` | `#C8002B` | `#F198A1` |

### Warning (Orange)
| CSS Variable | FD Light | FD Dark |
|-------------|----------|---------|
| `--fd-colors-system-warning-background-default` | `#FF8C31` | `#A44800` |
| `--fd-colors-system-warning-background-subtle` | `#FFF1E6` | `#692E00` |
| `--fd-colors-system-warning-content-accent` | `#A44800` | `#FFB77E` |

### Alert (Notification — Yellow)
| CSS Variable | FD Light | FD Dark |
|-------------|----------|---------|
| `--fd-colors-system-alert-background-default` | `#FFDC2E` | `#756100` |
| `--fd-colors-system-alert-background-subtle` | `#FFF6BD` | `#4B3F00` |
| `--fd-colors-system-alert-content-accent` | `#756100` | `#FFDC2E` |

### Info (Blue)
| CSS Variable | FD Light | FD Dark |
|-------------|----------|---------|
| `--fd-colors-system-info-background-default` | `#005FC8` | `#004EA3` |
| `--fd-colors-system-info-background-subtle` | `#EAF4FF` | `#002650` |
| `--fd-colors-system-info-content-accent` | `#004EA3` | `#99CAFF` |

## Border & Link Colors

| CSS Variable | FD Light | FD Dark |
|-------------|----------|---------|
| `--fd-colors-border-default` | `#B0B7BF` | `#6A6F73` |
| `--fd-colors-border-subtle` | `#C6D3E1` | `#4D5153` |
| `--fd-colors-border-active` | `#0070EB` | `#64AEFF` |
| `--fd-colors-link-default-base` | `#0070EB` | `#64AEFF` |
| `--fd-colors-link-default-hover` | `#004EA3` | `#0070EB` |
| `--fd-colors-link-destructive-base` | `#D22839` | `#EA6875` |

---

# Part 3 — Typography

## Font Families

| Variable | Value | Role |
|----------|-------|------|
| `--fd-fonts-font-family-010` | **`Inter`** | Primary UI font (headings, body, buttons) |
| `--fd-fonts-font-family-020` | `Shentox` | Alternate/condensed |
| `--fd-fonts-font-family-030` | `Roboto Condensed` | Label/metadata font |
| `--fd-fonts-font-family-040` | `Inter` | Numeric/data font |

> **Proxima Nova exception (Figma Typography Library v3.0.0):** `data-theme="sportsbook"` and `data-theme="fantasy"` retain Proxima Nova as the primary font (licensed via "LICENSED ONLY - SBK, DFS" collection). All other products use Inter. Do not use Proxima Nova outside these two themes.

## Font Weights: 400 (regular), 600 (semibold), 700 (bold)

## Semantic Typography Styles

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

### Labels (Uppercase, letter-spacing: 1px)
| Style | Font | Size | Weight |
|-------|------|------|--------|
| label-x-large | Roboto Condensed | 16px | 400 |
| label-large | Roboto Condensed | 14px | 400 |
| label-medium | Roboto Condensed | 12px | 400 |
| label-small | Roboto Condensed | 10px | 400 |
| label-x-small | Roboto Condensed | 8px | 400 |

### Metadata (always uppercase, Roboto Condensed)
| Style | Font | Size | Weight |
|-------|------|------|--------|
| metadata-medium | Roboto Condensed | 12px | 400 |
| metadata-small | Roboto Condensed | 10px | 400 |

### Button Typography
| Style | Font | Size | Weight |
|-------|------|------|--------|
| button-large | Inter | 16px | 400/700 |
| button-medium | Inter | 14px | 400/700 |
| button-small | Inter | 12px | 400/700 |
| button-x-small | Inter | 10px | 400/700 |

---

# Part 4 — Spacing

Base unit: `--fd-space-space-base` = `4px`. All spacing is multiples of 4px. Never hardcode.

| Scale | Variable | Value | Common Use |
|-------|---------|-------|-----------|
| 0 | `--fd-space-space-0` | `0px` | No spacing |
| 1 | `--fd-space-space-1` | `4px` | Dense UI padding |
| 2 | `--fd-space-space-2` | `8px` | Component internal padding |
| 3 | `--fd-space-space-3` | `12px` | Standard gaps |
| 4 | `--fd-space-space-4` | `16px` | Default padding (buttons, inputs) |
| 5 | `--fd-space-space-5` | `20px` | Section spacing |
| 6 | `--fd-space-space-6` | `24px` | Card padding |
| 8 | `--fd-space-space-8` | `32px` | Page section gaps |
| 10 | `--fd-space-space-10` | `40px` | Layout margins |
| 12 | `--fd-space-space-12` | `48px` | Large section padding |
| 16 | `--fd-space-space-16` | `64px` | Page-level spacing |
| 20 | `--fd-space-space-20` | `80px` | Extra large gaps |

**Breakpoints:** xs=0, sm=640, md=960, lg=1024, xl=1440

---

# Part 5 — Radius

| Token | Value | Common Usage |
|-------|-------|--------------|
| `radius-xs` | 2px | Micro-badges, tight chips |
| `radius0` | 0px | Sharp corners, no rounding |
| `radius1` | 4px | Small components (tags, chips) |
| `radius2` | 8px | General layout rounding (containers, list items) |
| `radius3` | 12px | Large components, modals |
| `radius4` | 16px | Hero sections, large panels |

**Component-specific tokens (these override the general guidelines above):**

| Component | Token | Value |
|-----------|-------|-------|
| Button | `--fd-radii-component-button-corner-radius` | **4px** |
| Input/Select/DatePicker | `--fd-radii-component-data-input-corner-radius` | **4px** |
| Card | `--fd-radii-component-card-corner-radius` | **4px** |
| Pill | `--fd-radii-component-pill-corner-radius` | **9999px** |
| Avatar | `--fd-radii-border-radius-circle` | **9999px** |

> Note: Poker theme overrides button radius to 9999px (pill-shaped buttons).

---

# Part 6 — Components

**Total: 34 UI + 5 Primitives**

Components: Avatar, Badge, Button, Card, Checkbox, DataChunk, DatePicker, Image, Loader, Pill, PillGroup, ProgressBar, RadioButton, SelectField, Switch, Tabs, Tag, TagGroup, TextField

Layout: Flex, Grid, LayoutGrid, Stack

Notifications: FixedBanner, FloatingBanner, InlineMessage, Toast

Typography: BodyText, ButtonText, HeaderText, JumboText, LabelText, MetaDataText

Primitives: Accordion, Button (Primitive), Collapse, Collapsible, ToggleButton

## Button

**Token prefix:** `--fd-colors-component-button-{variant}-{property}-{state}` — use this, never hardcode hex.
**React:** `<Button variant="primary|secondary|tertiary|destructive|transparent|button-link" size="large|medium|small|x-small" />`
**Border radius:** 4px (`--fd-radii-component-button-corner-radius`)

### Color States (current resolved values — reference only)

#### Primary (CTA/Bet)
| State | Background | Content |
|-------|-----------|---------|
| base | `#128000` | `#ffffff` |
| hover | `#00732C` | `#ffffff` |
| active | `#005D23` | `#ffffff` |
| disabled | `#EAF0F6` | `#0a0a0a33` |

#### Secondary (Blue)
| State | Background | Content |
|-------|-----------|---------|
| base | `#0070EB` | `#ffffff` |
| hover | `#005FC8` | `#ffffff` |
| active | `#004EA3` | `#ffffff` |
| disabled | `#EAF0F6` | `#0a0a0a33` |

#### Tertiary (Ghost/Outline)
| State | Background | Border | Content |
|-------|-----------|--------|---------|
| base | transparent | `#0070EB` | `#0070EB` |
| hover | `#EAF4FF` | `#0070EB` | `#0070EB` |
| active | `#0070EB` | `#0070EB` | `#ffffff` |

#### Destructive (Red)
| State | Background | Content |
|-------|-----------|---------|
| base | `#D22839` | `#ffffff` |
| hover | `#C8002B` | `#ffffff` |
| active | `#A40023` | `#ffffff` |

#### Transparent (On Dark)
| State | Background | Border | Content |
|-------|-----------|--------|---------|
| base | transparent | `#ffffff` | `#ffffff` |
| hover | `#ffffff1a` | `#ffffff` | `#ffffff` |

### Button Sizing
| Size | Padding H | Padding V | Min Height |
|------|-----------|-----------|-----------|
| large | 16px | 12px | 48px |
| medium | 16px | 8px | 40px |
| small | 12px | 4px | 32px |
| x-small | 8px | 4px | 24px |

## TextField / SelectField / DatePicker

**Border radius:** 4px | **React:** `<TextField />`, `<SelectField />`, `<DatePicker />`

| State | Background | Border | Content |
|-------|-----------|--------|---------|
| base | `#ffffff` | `#B0B7BF` | `#1C1D1D` |
| hover | `#EAF4FF` | `#B0B7BF` | `#1C1D1D` |
| active/focus | `#ffffff` | `#005FC8` | `#1C1D1D` |
| error | `#FDECED` | `#D22839` | `#C8002B` |
| disabled | `#EAF0F6` | `#0a0a0a1a` | `#0a0a0a33` |
| placeholder | `#ffffff` | — | `#6A6F73` |

## Tabs

**React:** `<Tabs />` with `<Tab />` children

### Primary Tabs (On Light Background)
| Property | Base | Hover | Active |
|----------|------|-------|--------|
| Label | `#05285A` | `#004EA3` | `#0070EB` |
| Indicator | transparent | `#004EA3` | `#0070EB` |

### Inverse Tabs (On Dark Background)
| Property | Base | Hover | Active |
|----------|------|-------|--------|
| Label | `#ffffff` | `#ffffff` | `#ffffff` |
| Indicator | transparent | `#ffffff` | `#ffffff` |

## Pill / PillGroup

**Border radius:** 9999px | **React:** `<Pill />`, `<PillGroup />`

| State | Background | Content |
|-------|-----------|---------|
| base | `#EAF0F6` | `#011638` |
| hover | `#CED4DB` | `#011638` |
| selected | `#0070EB` | `#ffffff` |
| disabled | `#EAF0F6` | `#B0B7BF` |

## Badge / Tag

Tags use system color tokens:
| Type | Background | Content | Border |
|------|-----------|---------|--------|
| Positive | `#E9F8EF` | `#00732C` | `#128000` |
| Important | `#FDECED` | `#C8002B` | `#D22839` |
| Warning | `#FFF1E6` | `#A44800` | `#FF8C31` |
| Alert | `#FFF6BD` | `#756100` | `#FFDC2E` |
| Info | `#EAF4FF` | `#004EA3` | `#005FC8` |
| Neutral | `#EAF0F6` | `#6A6F73` | `#B0B7BF` |

## Card

**Border radius:** 4px | Background: `#ffffff` | Border: `#B0B7BF` | Padding default: 16px

## Component Token Naming Convention

```
--fd-colors-component-{component}-{variant}-{property}-{state}
```

---

# Part 7 — Business Units

Apply with `data-theme="{id}"` on the root element. All themes inherit FD base and override specified tokens only.

## FD Base (Default)
`data-theme="fanduel"` | Dark mode: yes | Background: `--fd-colors-background-base` | Product Primary: `--fd-colors-product-colors-primary` | Button Primary: `--fd-colors-component-button-primary-background-base`

## Casino
`data-theme="casino"` | Dark mode: yes | 5 overrides

Key differences from FD base:
- Background Base → `#ffffff` (white, not grey-blue)
- Background Secondary → `#0a0a0a`
- Gradient: purple-to-blue (`#61019B` → `#005FC8`)

## Sportsbook
`data-theme="sportsbook"` | Dark mode: yes | 19 overrides

Key differences:
- Links are darker blue (`#004EA3` base, `#003D81` hover)
- Tab indicators darker (`#004EA3` active, `#003D81` hover)
- All system link-on-subtle tokens → `#004EA3`

## Fantasy Sports
`data-theme="fantasy"` | Dark mode: no | 30 overrides

Key differences:
- Links slightly darker (`#005FC8` base)
- Content Subtle → `#4D5153` (darker)
- Border Subtle → `#EAF0F6`
- Tab styles darker

## FanDuel Picks
`data-theme="picks"` | **No light mode — Picks IS the dark theme** | 296 overrides

Key colors:
- Background Base: `#111320` (dark navy)
- Background Surface: `#1e2139`
- Content Default: `#CED4DB`
- Accent/Active color: `#1F1AFE` (bright blue)
- Gradient: `#1F1AFE` → `#183495`
- System Important (Error): `#A40023`
- System Positive (Success): `#005D23`

> Do NOT apply `data-mode="dark"` to Picks — it already is dark.

## FaceOff
`data-theme="faceoff"` | Dark mode: no | 7 overrides

Key differences:
- Brand Secondary → teal (`#75EBD2`)
- Gradient: teal-to-blue (`#00E5B4` → `#0070EB`)

## Predicts
`data-theme="predicts"` | Dark mode: no | 50 overrides

Key differences:
- Gradient direction: 180deg (vertical, instead of 160deg)
- Gradient: `#004AAA` → `#001C55`

## Racing
`data-theme="racing"` | Dark mode: no | 47 overrides

Key differences:
- Different gradient from FD base (uses racing-specific values)

## Poker
`data-theme="poker"` | Dark mode: no | 275 overrides (dark by default)

Key colors:
- Background Base: `#1C1D1D` (near-black)
- Background Surface: `#0a0a0a`
- Product Primary: **red** `#d70a0a`
- Button Primary BG: **teal** `#02BD9C`
- Button radius: **9999px** (pill-shaped, overrides the 4px default)

## Mohegan Sun
`data-theme="mohegan-sun"` | Dark mode: no | 265 overrides (dark by default)

Key colors:
- Background Base: `#162740` (dark blue)
- Background Surface: `#051725`
- Product Primary: **orange** `#ef6000`
- Button Primary BG: **orange** `#ef6000`

## Lottery
> ⚠️ **DRAFT — NO REAL TOKEN VALUES.** The Lottery theme is not yet implemented in `@fanduel/formation-tokens`. Do not use for code generation. All "token" values in the lottery file are placeholder text, not real CSS variables or hex codes.

---

# Part 8 — Validation Rules (Summary)

Key rules — violating these is an error:
1. **No hardcoded colors** — always use `--fd-*` CSS variables
2. **4px grid** — all spacing must be multiples of 4px
3. **Formation fonts only** — Inter, Roboto Condensed, Shentox. Proxima Nova is licensed for **Sportsbook and Fantasy only** — not permitted in any other product.
4. **Valid font weights:** 400, 600, 700 only
5. **Valid font sizes:** 8, 10, 12, 14, 16, 18, 20, 22, 24, 28, 32, 40, 48px
6. **Minimum text size:** 14px for body, 8px absolute minimum (`label-x-small`)
7. **WCAG AA contrast:** 4.5:1 for normal text, 3:1 for large text
8. **Touch targets:** 44×44px minimum on mobile
9. **Use Formation components** from `@fanduel/formation-react-components` — do not create custom replacements
10. **No detaching** Formation components without a clear reason

---

# Part 9 — Resources

**Confluence:** Contact the Formation team for internal documentation links.
**Formation team contact:** #formation Slack channel
