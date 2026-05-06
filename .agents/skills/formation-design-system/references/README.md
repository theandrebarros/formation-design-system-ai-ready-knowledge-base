---
source: hand-curated
note: Quick-reference overview
---
# Formation Design System — Knowledge Base

> Auto-generated from `@fanduel/formation-tokens` v1.6.0
> Last updated: 2026-04-27

## Quick Reference

### Brand Colors

| Role | CSS Variable | FD Light Value |
|------|-------------|----------------|
| Product Primary (brand blue) | `--fd-colors-product-colors-primary` | `#0070EB` |
| Product Secondary (navy) | `--fd-colors-product-colors-secondary` | `#184C8B` |
| Brand Tertiary (yellow) | `--fd-colors-brand-tertiary-default` | `#FFDC2E` |

> **Note:** The PRIMARY button is green (`#128000`), not blue. Blue is secondary.

### System Status Colors

| State | CSS Variable | FD Light Value |
|-------|-------------|----------------|
| Error/Critical | `--fd-colors-system-important-background-default` | `#D22839` |
| Success | `--fd-colors-system-positive-background-default` | `#128000` |
| Warning | `--fd-colors-system-warning-background-default` | `#FF8C31` |
| Notification | `--fd-colors-system-alert-background-default` | `#FFDC2E` |
| Informational | `--fd-colors-system-info-background-default` | `#005FC8` |

### Typography

| Variable | Value |
|----------|-------|
| Primary font | `Proxima Nova` |
| Numeric font | `Inter` |

### Spacing

Base = **4px** (`--fd-space-space-base`). Scale: 4, 8, 12, 16, 24, 32, 40, 48...

---

## Documentation Files

| File | Contents |
|------|---------|
| `core/colors.md` | Complete color token reference (all semantic + palette) |
| `core/spacing.md` | Spacing scale, breakpoints |
| `core/typography.md` | Full type scale (all styles, families, weights) |
| `core/components.md` | Component token cross-reference |
| `business-units/` | Per-BU theme overrides |

## Themes Available

`data-theme` values: `fanduel` (default), `casino`, `sportsbook`, `fantasy`, `picks`, `predicts`, `racing`, `faceoff`, `poker`, `mohegan-sun`

Dark mode: add `data-mode="dark"` (supported: fanduel, casino, sportsbook)

## npm Packages

```
@fanduel/formation-tokens@1.6.0       — All design tokens
@fanduel/formation-react-components@1.6.0 — React components
@fanduel/formation-web-components@0.1.1   — Web components
@fanduel/formation-theming@1.6.0      — Theme utilities
```

## Legacy Naming Reference

| Old (incorrect) | New (correct) |
|-----------------|--------------|
| `--color-brand-primary` | `--fd-colors-product-colors-primary` |
| `brand/primary: #1493FF` | `--fd-colors-product-colors-primary: #0070EB` |
| `system/alert` = red error | `--fd-colors-system-important-*` = red |
| `system/alert` = yellow notif | `--fd-colors-system-alert-*` = yellow |
| Primary button = blue | Primary button = green `#128000` |
