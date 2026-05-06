# Formation DS — Design Guidelines

> Formation Design System v1.6.0 — Figma-native reference
> Paste into: Figma Make, Figma AI tools, design review prompts, or any design-focused AI context.
> For development (React/CSS), use `coach/formation-reference.md` instead.

---

## Non-Negotiable Rules

- **Never hardcode colors, spacing, or radii** — always use Formation variables
- **Never invent tokens** — if it's not documented here, it doesn't exist
- **Primary button uses the `primary` variant** — in the FD base theme this resolves to a CTA green; in other themes it resolves differently. Don't override the token.
- **No light/dark gradient variants** — each business unit has one gradient used in both modes
- **Never detach Formation components** without a documented reason
- **Component-specific radius tokens always override general radius guidelines**

---

## Theming

Set the theme on the root Figma frame using the `Theme` and `Mode` variable collections:

| Variable | Values |
|----------|--------|
| Theme | `fanduel` · `sportsbook` · `casino` · `fantasy` · `picks` · `predicts` · `racing` · `faceoff` · `poker` · `mohegan-sun` · `lottery` |
| Mode | `light` · `dark` |

**Dark mode supported on:** `fanduel`, `sportsbook`, `casino` only.
**Picks:** always dark — do not apply a light mode.

---

## Spacing (4px Grid)

Base unit: 4px. All spacing must be a multiple of 4.

| Figma Variable | Value | Use |
|---------------|-------|-----|
| `space1` | 4px | Dense padding, label-to-input gap |
| `space2` | 8px | Component internal gaps |
| `space3` | 12px | Standard gaps |
| `space4` | 16px | Default padding (buttons, inputs, cards) |
| `space5` | 20px | Section spacing |
| `space6` | 24px | Card padding |
| `space8` | 32px | Section gaps |
| `space10` | 40px | Layout margins |
| `space12` | 48px | Large section padding |
| `space16` | 64px | Page-level spacing |

---

## Radius (Component Truth Table)

> Component tokens override general radius values. Always check this table.

| Component | Figma Variable | Value |
|-----------|---------------|-------|
| Button | `component/button/cornerRadius` | **4px** |
| TextField / SelectField / DatePicker | `component/dataInput/cornerRadius` | **4px** |
| Card | `component/card/cornerRadius` | **4px** |
| Pill / PillGroup | `component/pill/cornerRadius` | **9999px** |
| Avatar | `borderRadius/circle` | **9999px** |

**General radius scale** (for layout/custom elements only):

| Token | Value |
|-------|-------|
| `borderRadius010` | 2px — micro elements |
| `borderRadiusDefault` | 4px — small elements |
| `borderRadius020` | 8px — layout rounding |
| `borderRadius040` | 12px — panels, modals |
| `borderRadius060` | 16px — hero sections |

---

## Typography

### Font Families

| Figma Variable | Font | Use |
|---------------|------|-----|
| `primaryFont` | Inter | Headings, body, buttons |
| `labelFont` | Roboto Condensed | Labels, metadata (always UPPERCASE) |
| — | Shentox | Alternate/condensed display |

### Type Scale Quick Reference

| Style | Size | Weight | Notes |
|-------|------|--------|-------|
| `jumbo/xxLarge` | 48px | 700 | Scoreboards |
| `jumbo/xLarge` | 40px | 700 | |
| `jumbo/large` | 32px | 700 | |
| `jumbo/medium` | 28px | 700 | |
| `jumbo/small` | 24px | 700 | |
| `heading/xxLarge` | 22px | 700 | |
| `heading/xLarge` | 20px | 700 | |
| `heading/large` | 18px | 700 | |
| `heading/medium` | 16px | 700 | |
| `heading/small` | 14px | 700 | |
| `heading/xSmall` | 12px | 700 | |
| `body/xLarge` | 18px | 400 | |
| `body/large` | 16px | 400 | |
| `body/medium` | 14px | 400 | Default body |
| `body/small` | 12px | 400 | |
| `body/xSmall` | 10px | 400 | |
| `label/xLarge` | 16px | 400 | Uppercase, 1px tracking |
| `label/large` | 14px | 400 | Uppercase, 1px tracking |
| `label/medium` | 12px | 400 | Uppercase, 1px tracking |
| `label/small` | 10px | 400 | Uppercase, 1px tracking |
| `label/xSmall` | 8px | 400 | Uppercase, 1px tracking — extreme space only |

**Valid font sizes:** 8, 10, 12, 14, 16, 18, 20, 22, 24, 28, 32, 40, 48px — nothing else.

---

## Key Semantic Colors

Use Figma variable names — the values resolve per theme and mode automatically.

### Background

| Figma Variable | When to Use |
|---------------|-------------|
| `background/base` | Page / screen background |
| `background/surface` | Cards, panels, modals |
| `background/layer` | Nested containers inside a surface |
| `background/hover` | Hover state overlay |
| `background/primary` | Primary action highlight |

### Content (Text)

| Figma Variable | When to Use |
|---------------|-------------|
| `content/default` | Primary body text |
| `content/strong` | Headings, emphasis |
| `content/subtle` | Secondary / helper text |
| `content/disabled` | Disabled state text |
| `content/inverse` | Text on dark backgrounds |

### System / Status

| Figma Variable prefix | Status |
|----------------------|--------|
| `system/positive/*` | Success, positive outcomes |
| `system/important/*` | Errors, critical states |
| `system/warning/*` | Caution, degraded state |
| `system/alert/*` | Notifications (yellow) |
| `system/info/*` | Informational |
| `system/neutral/*` | Default neutral state |

Each status type has these sub-tokens: `background/default` · `background/subtle` · `content/accent` · `border/default`

### Brand

| Figma Variable | Role |
|---------------|------|
| `product/colors/primary` | Brand blue — links, secondary actions |
| `brand/tertiary/default` | Brand yellow — accents |

---

## Button Variant Reference

Use the `variant` property on the Button component — never override individual colors.

| Variant | Role |
|---------|------|
| `primary` | CTA / betting action (resolves to CTA color per theme) |
| `secondary` | Supporting actions (resolves to brand blue in FD base) |
| `tertiary` | Ghost / outline — low-emphasis |
| `destructive` | Destructive actions (resolves to error red) |
| `transparent` | On dark backgrounds only |
| `button-link` | Inline text link style |

---

## Business Unit Gradients

Each theme has a single brand gradient — no separate light/dark variants.

| Theme | Variable | Use |
|-------|----------|-----|
| `fanduel`, `sportsbook` | `brand/gradient/colorStops/start` → `end` | Headers, hero sections |
| `casino` | `brand/gradient/colorStops/start` → `end` | Casino-purple gradient |
| `picks` | `brand/gradient/colorStops/start` → `end` | Picks-blue gradient |

**Picks** also has unique background variables: `background/base`, `background/surface`, `background/layer` all resolve to dark values — do not override.

---

## TextField Anatomy

The Formation TextField label sits **inside** the bordered container — not above it.

```
┌─────────────────────────────┐
│ LABEL (Roboto Condensed)    │  ← label/medium, uppercase, inside the box
│ Input text / placeholder    │  ← body/medium
└─────────────────────────────┘
```

---

## Component Catalog (Full List)

Never build custom replacements for these:

**UI:** Avatar · Badge · Button · Card · Checkbox · DataChunk · DatePicker · Image · Loader · Pill · PillGroup · ProgressBar · RadioButton · SelectField · Switch · Tabs · Tag · TagGroup · TextField

**Iconography:** Icon (sizes: S/16px · M/20px · L/24px · XL/32px · XXL/48px)

**Layout:** Flex · Grid · LayoutGrid · Stack

**Notifications:** FixedBanner · FloatingBanner · InlineMessage · Toast

**Typography:** BodyText · ButtonText · HeaderText · JumboText · LabelText · MetaDataText

**Primitives:** Accordion · Button (Primitive) · Collapse · Collapsible · ToggleButton

---

## Icon Rules

- Always use one of the 5 fixed sizes (S/M/L/XL/XXL)
- Icons are monochromatic — use Formation content tokens for color, never hardcode
- For team/league logos only: enable `Multi-Colour` boolean property
- Never scale icons to arbitrary dimensions

---

## Accessibility Minimums

- Color contrast: WCAG AA (4.5:1 normal text, 3:1 large text)
- Touch targets: 44×44px minimum on mobile, 48×48px recommended
- All interactive elements must have focus states (2px outline)
- Icon-only buttons must have an `aria-label`
