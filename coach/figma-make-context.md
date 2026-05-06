# Formation DS — Figma Make Context

> Paste this into Figma Make's context/instructions window before generating code.
> Figma Make can already see Formation variables from the Figma file — this snippet tells it how to use them correctly.

---

## Non-Negotiable Rules

- **Never hardcode colors, spacing, or radii.** Always use `--fd-*` CSS variables.
- **Never invent token values.** Read them from the Figma file's variables — they are already bound to Formation tokens.
- **Primary button** uses `--fd-colors-component-button-primary-background-base` — never hardcode its color. The token resolves per theme.
- **Never create light/dark variants that don't exist in Formation.**

---

## Package Names (for generated code)

```
@fanduel/formation-react-components   ← React components
@fanduel/formation-theming            ← Theme CSS / tokens
@fanduel/formation-tokens             ← Raw token values
```

Do NOT use `@formation/react`, `@formation/themes`, or any other package name — those are old/incorrect.

---

## Applying Themes

Themes are applied via HTML attributes, not a ThemeProvider component:

```html
<body data-theme="sportsbook" data-mode="dark">
```

```html
<body data-theme="casino" data-mode="dark">
```

Available `data-theme` values:
`fanduel` | `sportsbook` | `casino` | `fantasy` | `picks` | `predicts` | `racing` | `faceoff` | `poker` | `mohegan-sun` | `lottery`

Available `data-mode` values:
`light` | `dark`

Dark mode is only supported for: `fanduel`, `sportsbook`, `casino`. All others are light-only. `picks` is always dark (no `data-mode` needed).

---

## Key Token Quick Reference

| Purpose | CSS Variable | Light | Dark |
|---------|-------------|-------|------|
| Primary button background | `--fd-colors-component-button-primary-background-base` | `#128000` | `#128000` |
| Product primary (links) | `--fd-colors-product-colors-primary` | `#0070EB` | `#0070EB` |
| Background base | `--fd-colors-background-base` | `#EAF0F6` | `#0a0a0a` |
| Background surface | `--fd-colors-background-surface` | `#FFFFFF` | `#1C1D1D` |
| Content default (text) | `--fd-colors-content-default` | `#1C1D1D` | `#CED4DB` |
| Error / red | `--fd-colors-system-important-background-default` | `#D22839` | `#D22839` |
| Warning / yellow | `--fd-colors-system-alert-background-default` | `#FFDC2E` | `#FFDC2E` |

> For all other token values: read them from the Figma file's variables — they are authoritative.

---

## Spacing

Base unit: `4px`. All spacing uses `--fd-space-space-N` tokens.

Common values: `4px` (space-1) · `8px` (space-2) · `12px` (space-3) · `16px` (space-4) · `24px` (space-6) · `32px` (space-8)

---

## Typography

Primary font: `Inter` · Condensed/labels: `Roboto Condensed` · Data/numbers: `Inter`

Valid weights: `400` (regular) · `600` (semibold) · `700` (bold)

Valid font sizes: `8` · `10` · `12` · `14` · `16` · `18` · `20` · `22` · `24` · `28` · `32` · `40` · `48` px — no others.

Minimum sizes: `14px` for body text · `8px` absolute minimum (`label-x-small`) — never go below 8px.

---

## Border Radius

**Component tokens (source of truth — always use these for Formation components):**

| Component | Token | Value |
|-----------|-------|-------|
| Button | `--fd-radii-component-button-corner-radius` | **4px** |
| TextField / SelectField / DatePicker | `--fd-radii-component-data-input-corner-radius` | **4px** |
| Card | `--fd-radii-component-card-corner-radius` | **4px** |
| Pill / PillGroup | `--fd-radii-component-pill-corner-radius` | **9999px** |
| Avatar | `--fd-radii-border-radius-circle` | **9999px** |

**General radius scale (layout/custom elements only):**

| Token | Value |
|-------|-------|
| `--fd-radii-border-radius-010` | `2px` |
| `--fd-radii-border-radius-default` | `4px` |
| `--fd-radii-border-radius-020` | `8px` |
| `--fd-radii-border-radius-040` | `12px` |
| `--fd-radii-border-radius-060` | `16px` |
