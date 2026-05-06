---
source: figma+tokens-pkg
note: Auto-derivable from @fanduel/formation-tokens/build/json/fanduel.json
---
# Formation Spacing Tokens

> Auto-generated from `@fanduel/formation-tokens` v1.6.0
> Base unit: `--fd-space-space-base` = `4px`

All spacing tokens use a 4px base grid. Never hardcode spacing values — use tokens.

| Scale | Variable | Resolved Value | Multiplier | Common Use |
|-------|---------|---------------|-----------|-----------|
| 0 | `--fd-space-space-0` | `0px` | 0× | No spacing |
| 0.25 | `--fd-space-space-025` | `1px` | 0.25× | Micro adjustments |
| 0.5 | `--fd-space-space-05` | `2px` | 0.5× | Tight inline gaps |
| 1 | `--fd-space-space-1` | `4px` | 1× | Dense UI padding |
| 2 | `--fd-space-space-2` | `8px` | 2× | Component internal padding |
| 3 | `--fd-space-space-3` | `12px` | 3× | Standard gaps |
| 4 | `--fd-space-space-4` | `16px` | 4× | Default padding (buttons, inputs) |
| 5 | `--fd-space-space-5` | `20px` | 5× | Section spacing |
| 6 | `--fd-space-space-6` | `24px` | 6× | Card padding |
| 8 | `--fd-space-space-8` | `32px` | 8× | Page section gaps |
| 10 | `--fd-space-space-10` | `40px` | 10× | Layout margins |
| 12 | `--fd-space-space-12` | `48px` | 12× | Large section padding |
| 16 | `--fd-space-space-16` | `64px` | 16× | Page-level spacing |
| 20 | `--fd-space-space-20` | `80px` | 20× | Extra large gaps |
| 30 | `--fd-space-space-30` | `120px` | 30× | XXL spacing |
| 40 | `--fd-space-space-40` | `160px` | 40× | Maximum spacing |

---

## Breakpoints

| Name | CSS Variable | Value | Notes |
|------|-------------|-------|-------|
| xs | `--fd-breakpoints-xs` | `0` | Mobile first default |
| sm | `--fd-breakpoints-sm` | `640` | Large mobile |
| md | `--fd-breakpoints-md` | `960` | Tablet |
| lg | `--fd-breakpoints-lg` | `1024` | Desktop |
| xl | `--fd-breakpoints-xl` | `1440` | Wide desktop |

---

## Spacing Rules

- All spacing must be multiples of 4px (the base unit)
- Use `space-4` (16px) as the standard component padding
- Use `space-2` (8px) for internal component gaps
- Use `space-6` (24px) for card padding
- Use `space-8` to `space-12` for section-level spacing
