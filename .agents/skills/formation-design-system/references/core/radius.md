---
source: figma+tokens-pkg
note: Auto-derivable from @fanduel/formation-tokens/build/json/fanduel.json
---
# Formation Radius Tokens

> Source: FanDuel Variable Theme — `9gJbs4Xti15jTaf3hsgrVS`
> Last verified: March 2026

## All Radius Tokens (6 Total)

| Token | Figma Variable Name | CSS Variable | Value | Notes |
|-------|-------------------|-------------|-------|-------|
| `radius-xs` | `borderRadius010` | `--fd-radii-border-radius-010` | `2px` | Micro-badges, very tight chips |
| `radius0` | `borderRadiusSharp` | — | `0px` | Sharp corners, full-width elements |
| `radius1` | `borderRadiusDefault` | `--fd-radii-border-radius-default` | `4px` | Tags, chips, small badges |
| `radius2` | `borderRadius020` | `--fd-radii-border-radius-020` | `8px` | General layout rounding, list items |
| `radius3` | `borderRadius040` | `--fd-radii-border-radius-040` | `12px` | Large panels, modals |
| `radius4` | `borderRadius060` | `--fd-radii-border-radius-060` | `16px` | Hero sections, extra large panels |

> **Component-specific tokens always override these general values.** Check the table below before applying a radius to any Formation component.

## Component Radius Tokens (Source of Truth)

| Component | Token | Value |
|-----------|-------|-------|
| Button | `--fd-radii-component-button-corner-radius` | `4px` |
| TextField / SelectField / DatePicker | `--fd-radii-component-data-input-corner-radius` | `4px` |
| Card | `--fd-radii-component-card-corner-radius` | `4px` |
| Pill / PillGroup | `--fd-radii-component-pill-corner-radius` | `9999px` |
| Avatar | `--fd-radii-border-radius-circle` | `9999px` |

## Usage in Figma

Select element → Properties panel → Corner radius → click variable icon → select radius token.

For independent corners (e.g. bottom sheet rounded on top only):
- Top-left / Top-right: `radius3`
- Bottom-left / Bottom-right: `radius0`

## Usage in CSS

```css
/* General layout */
.card-container {
  border-radius: var(--fd-radii-border-radius-020); /* 8px */
}

/* Always use component-specific tokens for Formation components */
.button {
  border-radius: var(--fd-radii-component-button-corner-radius); /* 4px */
}
```

## Related

- **[Components](components.md)** — Component-level radius tokens
- **[Spacing](spacing.md)** — Pairs with radius for component structure
