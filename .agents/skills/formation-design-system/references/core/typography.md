---
source: figma+tokens-pkg
note: Auto-derivable from @fanduel/formation-tokens/build/json/fanduel.json
---
# Formation Typography Tokens

> Auto-generated from `@fanduel/formation-tokens` v1.6.0
> Last updated: 2026-04-27

---

## Font Families

| Variable | Value | Role |
|----------|-------|------|
| `--fd-fonts-font-family-010` | **`Proxima Nova`** | Primary UI font (headings, body, buttons) |
| `--fd-fonts-font-family-020` | `Shentox` | Alternate/condensed |
| `--fd-fonts-font-family-030` | `Proxima Nova Condensed` | Label/metadata font |
| `--fd-fonts-font-family-040` | `Inter` | Numeric/data font (Inter) |

---

## Font Size Scale (Primitive)

| Variable | Resolved Value |
|----------|---------------|
| `--fd-font-sizes-font-size-010` | `8px` |
| `--fd-font-sizes-font-size-020` | `10px` |
| `--fd-font-sizes-font-size-030` | `12px` |
| `--fd-font-sizes-font-size-040` | `14px` |
| `--fd-font-sizes-font-size-050` | `16px` |
| `--fd-font-sizes-font-size-060` | `18px` |
| `--fd-font-sizes-font-size-070` | `20px` |
| `--fd-font-sizes-font-size-080` | `22px` |
| `--fd-font-sizes-font-size-090` | `24px` |
| `--fd-font-sizes-font-size-100` | `28px` |
| `--fd-font-sizes-font-size-110` | `32px` |
| `--fd-font-sizes-font-size-130` | `40px` |
| `--fd-font-sizes-font-size-140` | `48px` |

## Font Weights (Primitive)

| Variable | Value |
|----------|-------|
| `--fd-font-weights-font-weight-020` | `400` |
| `--fd-font-weights-font-weight-040` | `600` |
| `--fd-font-weights-font-weight-050` | `700` |

## Line Heights (Primitive)

| Variable | Value |
|----------|-------|
| `--fd-line-heights-line-height-010` | `1` |
| `--fd-line-heights-line-height-020` | `1.1` |
| `--fd-line-heights-line-height-030` | `1.25` |
| `--fd-line-heights-line-height-040` | `1.5` |

---

## Semantic Typography Styles

Format: `--fd-fonts-{style}`, `--fd-font-sizes-{style}`, `--fd-font-weights-{style}`, `--fd-line-heights-{style}`, `--fd-letter-spacings-{style}`

### Jumbo (Display / Scoreboards)

| Style | Font | Size | Weight | Line Height | Letter Spacing |
|-------|------|------|--------|------------|---------------|
| jumbo-xx-large | `Proxima Nova` | `48px` | `700` | `1.1` | `0` |
| jumbo-x-large | `Proxima Nova` | `40px` | `700` | `1.1` | `0` |
| jumbo-large | `Proxima Nova` | `32px` | `700` | `1.25` | `0` |
| jumbo-medium | `Proxima Nova` | `28px` | `700` | `1.25` | `0` |
| jumbo-small | `Proxima Nova` | `24px` | `700` | `1.25` | `0` |

### Headings

| Style | Font | Size | Weight | Line Height | Letter Spacing |
|-------|------|------|--------|------------|---------------|
| heading-xx-large | `Proxima Nova` | `22px` | `700` | `1.25` | `0` |
| heading-x-large | `Proxima Nova` | `20px` | `700` | `1.25` | `0` |
| heading-large | `Proxima Nova` | `18px` | `700` | `1.25` | `0` |
| heading-medium | `Proxima Nova` | `16px` | `700` | `1.25` | `0` |
| heading-small | `Proxima Nova` | `14px` | `700` | `1.25` | `0` |
| heading-x-small | `Proxima Nova` | `12px` | `700` | `1.25` | `0` |

### Body

| Style | Font | Size | Weight | Line Height | Letter Spacing |
|-------|------|------|--------|------------|---------------|
| body-x-large-regular | `Proxima Nova` | `18px` | `400` | `1.25` | `0` |
| body-x-large-strong | `Proxima Nova` | `18px` | `700` | `1.25` | `0` |
| body-large-regular | `Proxima Nova` | `16px` | `400` | `1.25` | `0` |
| body-large-strong | `Proxima Nova` | `16px` | `700` | `1.25` | `0` |
| body-medium-regular | `Proxima Nova` | `14px` | `400` | `1.25` | `0` |
| body-medium-strong | `Proxima Nova` | `14px` | `700` | `1.25` | `0` |
| body-small-regular | `Proxima Nova` | `12px` | `400` | `1.25` | `0` |
| body-small-strong | `Proxima Nova` | `12px` | `700` | `1.25` | `0` |
| body-x-small-regular | `Proxima Nova` | `10px` | `400` | `1.25` | `0` |
| body-x-small-strong | `Proxima Nova` | `10px` | `700` | `1.25` | `0` |

### Labels (Uppercase)

| Style | Font | Size | Weight | Line Height | Letter Spacing |
|-------|------|------|--------|------------|---------------|
| label-x-large | `Proxima Nova Condensed` | `16px` | `400` | `1.25` | `1px` |
| label-large | `Proxima Nova Condensed` | `14px` | `400` | `1.25` | `1px` |
| label-medium | `Proxima Nova Condensed` | `12px` | `400` | `1.25` | `1px` |
| label-small | `Proxima Nova Condensed` | `10px` | `400` | `1.25` | `1px` |
| label-x-small | `Proxima Nova Condensed` | `8px` | `400` | `1.25` | `1px` |

### Metadata

| Style | Font | Size | Weight | Line Height | Letter Spacing |
|-------|------|------|--------|------------|---------------|
| metadata-medium | `Proxima Nova Condensed` | `12px` | `400` | `1.25` | `1px` |
| metadata-small | `Proxima Nova Condensed` | `10px` | `400` | `1.25` | `1px` |

### Button Typography

| Style | Font | Size | Weight | Line Height |
|-------|------|------|--------|------------|
| button-large-regular | `Proxima Nova` | `16px` | `400` | `1.25` | `0` |
| button-large-strong | `Proxima Nova` | `16px` | `700` | `1.25` | `0` |
| button-medium-regular | `Proxima Nova` | `14px` | `400` | `1.25` | `0` |
| button-medium-strong | `Proxima Nova` | `14px` | `700` | `1.25` | `0` |
| button-small-regular | `Proxima Nova` | `12px` | `400` | `1.25` | `0` |
| button-small-strong | `Proxima Nova` | `12px` | `700` | `1.25` | `0` |
| button-x-small-regular | `Proxima Nova` | `10px` | `400` | `1.25` | `0` |
| button-x-small-strong | `Proxima Nova` | `10px` | `700` | `1.25` | `0` |
