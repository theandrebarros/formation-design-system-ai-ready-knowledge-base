# Formation Design System — Figma Make Guidelines

> Paste into: Figma Make file → `...` menu → **Adjust guidelines** (for the **official** Formation template — keeps AI behaviour in sync with this file)
>
> **Optional:** If you are building a **custom** Make file, you do not have to paste this into **Adjust guidelines**. You can use this document as **reference only** (same rules apply; pasting is how the official Formation template stays updated).
>
> Library to connect: **Beta - Formation Figma Make Library** (single library — includes components, colors, typography, and icons)
>
> No setup needed. Just describe what you want to build and which product it's for.
> Example prompts: "sportsbook dark bet slip" · "casino light game card" · "picks score tracker"

---

## How the AI should use these guidelines

When the user mentions a product or BU in their prompt, use the matching theme section below to set `data-theme` and `data-mode`, apply the correct colors and fonts, and follow all core rules. Never ask for clarification on theme or mode if it can be inferred from context.

---

## Core Rules — Never Break

- Never hardcode colors, spacing, or radius — always use `--fd-*` CSS variables
- Never invent token values — read them from Figma file variables or from the BU section below
- Use Formation components from the connected library — never build custom replacements
- All spacing must be a multiple of 4px using `--fd-space-space-N` tokens
- Primary button color resolves per theme — use the token, never hardcode the hex
- TextField and SelectField labels sit **inside** the bordered container, not above it
- Button text is always weight **400 (Regular)** — never bold, regardless of variant or size
- Gradients have no separate dark/light variants — one gradient per BU, used in both modes

---

## npm Packages

```
@fanduel/formation-react-components   ← components 
@fanduel/formation-theming            ← theme CSS
@fanduel/formation-tokens             ← raw token values
```

Never use `@formation/react`, `@formation/themes`, or any other variant.

---

## Theme Application Pattern

```html
<body data-theme="[theme-id]" data-mode="[light|dark]">
```

Picks and Poker use no `data-mode` — they are always dark:
```html
<body data-theme="picks">
<body data-theme="poker">
```

---

## Business Unit Themes

### FanDuel Base (`data-theme="fanduel"`)
Dark mode: yes (`data-mode="dark"`)

| Token | Light | Dark |
|-------|-------|------|
| Background Base | `#EAF0F6` | `#0a0a0a` |
| Background Surface | `#ffffff` | `#1C1D1D` |
| Content Default | `#1C1D1D` | `#CED4DB` |
| Product Primary | `#0070EB` | `#0070EB` |
| Button Primary BG | `#128000` | `#128000` |
| Gradient | `#005FC8` → `#003D81` | same |

---

### Sportsbook (`data-theme="sportsbook"`)
Dark mode: yes (`data-mode="dark"`)
**Fonts: Proxima Nova (body/headings/buttons) + Roboto Condensed (labels/metadata) — licensed.**
Key colors same as FD base. Minor differences: links and tab indicators are slightly darker blue (`#004EA3` base, `#003D81` hover).

| Token | Light | Dark |
|-------|-------|------|
| Background Base | `#EAF0F6` | `#0a0a0a` |
| Background Surface | `#ffffff` | `#1C1D1D` |
| Content Default | `#1C1D1D` | `#CED4DB` |
| Product Primary | `#0070EB` | `#0070EB` |
| Button Primary BG | `#128000` | `#128000` |
| Gradient | `#005FC8` → `#003D81` | same |

---

### Casino (`data-theme="casino"`)
Dark mode: yes (`data-mode="dark"`)
Background base is **white** (not grey-blue). Gradient is purple-to-blue.

| Token | Light | Dark |
|-------|-------|------|
| Background Base | `#ffffff` | `#0a0a0a` |
| Background Surface | `#ffffff` | `#1C1D1D` |
| Content Default | `#1C1D1D` | `#CED4DB` |
| Product Primary | `#0070EB` | `#0070EB` |
| Button Primary BG | `#128000` | `#128000` |
| Gradient | `#61019B` → `#005FC8` | same |

---

### Fantasy Sports (`data-theme="fantasy"`)
Dark mode: no (light only)
**Fonts: Proxima Nova (body/headings/buttons) + Roboto Condensed (labels/metadata) — licensed.**
Subtle differences from FD base: links slightly darker, content subtle darker.

| Token | Value |
|-------|-------|
| Background Base | `#EAF0F6` |
| Background Surface | `#ffffff` |
| Content Default | `#1C1D1D` |
| Product Primary | `#0070EB` |
| Button Primary BG | `#128000` |
| Gradient | `#005FC8` → `#003D81` |

---

### FanDuel Picks (`data-theme="picks"`)
**Always dark — never add `data-mode`.** 296 token overrides from FD base. Accent color is bright blue `#1F1AFE`.

| Token | Value |
|-------|-------|
| Background Base | `#111320` |
| Background Surface | `#1e2139` |
| Background Layer | `#222641` |
| Content Default | `#CED4DB` |
| Product Primary | `#0070EB` |
| Button Primary BG | `#128000` |
| Accent / Active | `#1F1AFE` |
| System Error | `#A40023` |
| System Success | `#005D23` |
| Gradient | `#1F1AFE` → `#183495` |

---

### FaceOff (`data-theme="faceoff"`)
Dark mode: no (light only)
Brand secondary is teal. Gradient is teal-to-blue.

| Token | Value |
|-------|-------|
| Background Base | `#EAF0F6` |
| Background Surface | `#ffffff` |
| Product Primary | `#0070EB` |
| Brand Secondary | `#75EBD2` |
| Button Primary BG | `#128000` |
| Gradient | `#00E5B4` → `#0070EB` |

---

### FanDuel Predicts (`data-theme="predicts"`)
Dark mode: no (light only)
**Fonts: Inter (body/headings) + Roboto Condensed (labels/metadata).** Gradient is 180deg vertical.

| Token | Value |
|-------|-------|
| Background Base | `#EAF0F6` |
| Background Surface | `#ffffff` |
| Content Default | `#1C1D1D` |
| Product Primary | `#0070EB` |
| Button Primary BG | `#128000` |
| Gradient | `#004AAA` → `#001C55` (180deg, vertical) |

---

### Horse Racing (`data-theme="racing"`)
Dark mode: no (light only)
**Fonts: Inter (body/headings) + Roboto Condensed (labels/metadata).** Same font pattern as Predicts.

| Token | Value |
|-------|-------|
| Background Base | `#EAF0F6` |
| Background Surface | `#ffffff` |
| Content Default | `#1C1D1D` |
| Product Primary | `#0070EB` |
| Button Primary BG | `#128000` |

---

### Poker (`data-theme="poker"`)
**Always dark — never add `data-mode`.** 275 token overrides. **Button radius = 9999px (pill-shaped).** Primary is red, CTA is teal.

| Token | Value |
|-------|-------|
| Background Base | `#1C1D1D` |
| Background Surface | `#0a0a0a` |
| Content Default | `#CED4DB` |
| Product Primary | `#d70a0a` |
| Button Primary BG | `#02BD9C` |
| Button Radius | `9999px` (overrides default 4px) |
| System Error | `#A40023` |

---

### Mohegan Sun (`data-theme="mohegan-sun"`)
**Always dark — never add `data-mode`.** 265 token overrides. Primary and button are both orange.

| Token | Value |
|-------|-------|
| Background Base | `#162740` |
| Background Surface | `#051725` |
| Content Default | `#CED4DB` |
| Product Primary | `#ef6000` |
| Button Primary BG | `#ef6000` |
| System Error | `#A40023` |

---

## Formation Component Catalog

Use these names exactly. Never build a custom replacement for any of these.

**Actions:** Button · Pill · PillGroup
**Forms:** TextField · SelectField · Checkbox · RadioButton · Switch · DatePicker · PasswordField
**Navigation:** Tabs
**Feedback:** Tag · TagGroup · Badge · FixedBanner · FloatingBanner · InlineMessage · Toast · Loader · ProgressBar
**Layout:** Card · DataChunk · Image · Flex · Grid · LayoutGrid · Stack
**Media:** Avatar · Icon
**Typography:** BodyText · ButtonText · HeaderText · JumboText · LabelText · MetaDataText
**Primitives:** Accordion · Collapse · Collapsible · ToggleButton

**Button variants:** `primary` · `secondary` · `tertiary` · `destructive` · `transparent` · `button-link`

---

## "Edit Styles" Template

Paste this into Figma Make → `...` → **Edit styles**. Corrected to match Formation DS tokens.

> **Typography note:** The `font-family` declarations below use `Proxima Nova`, which is **licensed for Sportsbook and Fantasy only**. For all other themes (Casino, Picks, Predicts, Racing, FaceOff, Poker, Mohegan Sun), replace every `'Proxima Nova'` with `'Inter'` and `'Proxima Nova Condensed'` with `'Roboto Condensed'`.

```css
@custom-variant dark (&:is(.dark *));

:root {
  --font-size: 16px;
  /* Typography variables */
  --text-2xl: 48px;
  --text-xl: 32px;
  --text-lg: 18px;
  --text-base: 16px;
  --text-sm: 12px;
  /* Background Base (canvas) — uses Surface (#fff) as Figma Make canvas convention */
  --background: rgba(255, 255, 255, 1.00);
  /* Content Default light */
  --foreground: rgba(28, 29, 29, 1.00);
  /* Background Surface light */
  --card: rgba(255, 255, 255, 1.00);
  --card-foreground: rgba(28, 29, 29, 1.00);
  /* Background Layer light */
  --popover: rgba(247, 251, 255, 1.00);
  --popover-foreground: rgba(28, 29, 29, 1.00);
  /* Button Primary BG / System Positive */
  --primary: rgba(18, 128, 0, 1.00);
  --primary-foreground: rgba(255, 255, 255, 1.00);
  /* Product Primary (FD Blue) */
  --secondary: rgba(0, 112, 235, 1.00);
  --secondary-foreground: rgba(255, 255, 255, 1.00);
  /* Background Base / Disabled light */
  --muted: rgba(234, 240, 246, 1.00);
  /* Content Subtle light */
  --muted-foreground: rgba(106, 111, 115, 1.00);
  /* Product Primary */
  --accent: rgba(0, 112, 235, 1.00);
  --accent-foreground: rgba(255, 255, 255, 1.00);
  /* System Important / Error */
  --destructive: rgba(210, 40, 57, 1.00);
  --destructive-foreground: rgba(255, 255, 255, 1.00);
  /* Border Default light */
  --border: rgba(176, 183, 191, 1.00);
  /* TextField background base light */
  --input: rgba(255, 255, 255, 1.00);
  --input-background: rgba(255, 255, 255, 1.00);
  --font-weight-medium: 700;
  --font-weight-normal: 400;
  /* Border Active / focus ring */
  --ring: rgba(0, 112, 235, 1.00);
  --elevation-sm: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
  --chart-1: rgba(0, 112, 235, 1.00);
  --chart-2: rgba(18, 128, 0, 1.00);
  --chart-3: rgba(210, 40, 57, 1.00);
  --chart-4: rgba(5, 40, 90, 1.00);
  --chart-5: rgba(106, 111, 115, 1.00);
  /* Component default radius */
  --radius: 4px;
  /* Sidebar — Content Strong / FD dark navy */
  --sidebar: rgba(5, 40, 90, 1.00);
  --sidebar-foreground: rgba(255, 255, 255, 1.00);
  --sidebar-primary: rgba(0, 112, 235, 1.00);
  --sidebar-primary-foreground: rgba(255, 255, 255, 1.00);
  --sidebar-accent: rgba(18, 128, 0, 1.00);
  --sidebar-accent-foreground: rgba(255, 255, 255, 1.00);
  --sidebar-border: rgba(176, 183, 191, 1.00);
  --sidebar-ring: rgba(0, 112, 235, 1.00);
}

.dark {
  /* Background Base dark */
  --background: rgba(10, 10, 10, 1.00);
  /* Content Strong dark */
  --foreground: rgba(255, 255, 255, 1.00);
  /* Background Surface dark */
  --card: rgba(28, 29, 29, 1.00);
  --card-foreground: rgba(255, 255, 255, 1.00);
  /* Background Layer dark */
  --popover: rgba(43, 45, 46, 1.00);
  --popover-foreground: rgba(255, 255, 255, 1.00);
  --primary: rgba(18, 128, 0, 1.00);
  --primary-foreground: rgba(255, 255, 255, 1.00);
  --secondary: rgba(0, 112, 235, 1.00);
  --secondary-foreground: rgba(255, 255, 255, 1.00);
  /* Background Hover / Disabled dark */
  --muted: rgba(60, 62, 64, 1.00);
  /* Content Subtle dark */
  --muted-foreground: rgba(150, 157, 163, 1.00);
  --accent: rgba(0, 112, 235, 1.00);
  --accent-foreground: rgba(255, 255, 255, 1.00);
  --destructive: rgba(210, 40, 57, 1.00);
  --destructive-foreground: rgba(255, 255, 255, 1.00);
  /* Border Default dark */
  --border: rgba(106, 111, 115, 1.00);
  /* TextField background base dark */
  --input: rgba(28, 29, 29, 1.00);
  --input-background: rgba(28, 29, 29, 1.00);
  --ring: rgba(0, 112, 235, 1.00);
  --font-weight-medium: 700;
  --font-weight-normal: 400;
  --chart-1: rgba(0, 112, 235, 1.00);
  --chart-2: rgba(18, 128, 0, 1.00);
  --chart-3: rgba(210, 40, 57, 1.00);
  --chart-4: rgba(5, 40, 90, 1.00);
  --chart-5: rgba(176, 183, 191, 1.00);
  --sidebar: rgba(5, 40, 90, 1.00);
  --sidebar-foreground: rgba(255, 255, 255, 1.00);
  --sidebar-primary: rgba(0, 112, 235, 1.00);
  --sidebar-primary-foreground: rgba(255, 255, 255, 1.00);
  --sidebar-accent: rgba(18, 128, 0, 1.00);
  --sidebar-accent-foreground: rgba(255, 255, 255, 1.00);
  --sidebar-border: rgba(106, 111, 115, 1.00);
  --sidebar-ring: rgba(0, 112, 235, 1.00);
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-input-background: var(--input-background);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --radius-sm: calc(var(--radius) - 2px);
  --radius-md: var(--radius);
  --radius-lg: calc(var(--radius) + 2px);
  --radius-xl: calc(var(--radius) + 4px);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }

  body {
    @apply bg-background text-foreground;
    font-family: 'Proxima Nova', sans-serif; /* SBK/Fantasy only — use Inter for all other themes */
  }
}

h1 {
  font-family: 'Proxima Nova', sans-serif;
  font-size: var(--text-2xl);
  font-weight: var(--font-weight-medium);
  line-height: 1.1;
}

h2 {
  font-family: 'Proxima Nova', sans-serif;
  font-size: var(--text-xl);
  font-weight: var(--font-weight-medium);
  line-height: 1.1;
}

h3 {
  font-family: 'Proxima Nova', sans-serif;
  font-size: var(--text-lg);
  font-weight: var(--font-weight-medium);
  line-height: 1.25;
}

h4 {
  font-family: 'Proxima Nova', sans-serif;
  font-size: var(--text-base);
  font-weight: var(--font-weight-medium);
  line-height: 1.25;
}

p {
  font-family: 'Proxima Nova', sans-serif;
  font-size: var(--text-base);
  font-weight: var(--font-weight-normal);
  line-height: 1.25;
}

span {
  font-family: 'Proxima Nova', sans-serif;
  font-size: var(--text-base);
  font-weight: var(--font-weight-normal);
  line-height: 1.25;
}

label {
  font-family: 'Proxima Nova Condensed', sans-serif; /* Use 'Roboto Condensed' for non-SBK/Fantasy themes */
  font-size: var(--text-sm);
  font-weight: var(--font-weight-normal);
  line-height: 1.5;
  text-transform: uppercase;
  letter-spacing: 1px;
}

button {
  font-family: 'Proxima Nova', sans-serif;
  font-size: var(--text-base);
  font-weight: var(--font-weight-normal); /* Always 400 — never bold */
  line-height: 1.5;
}

input {
  font-family: 'Proxima Nova', sans-serif;
  font-size: var(--text-base);
  font-weight: var(--font-weight-normal);
  line-height: 1.25;
}

html {
  font-size: var(--font-size);
}
```

---

## Key Semantic Tokens (FD Base — override per BU section above)

| Purpose | CSS Variable |
|---------|-------------|
| Primary button BG | `--fd-colors-component-button-primary-background-base` |
| Product primary (links) | `--fd-colors-product-colors-primary` |
| Background base | `--fd-colors-background-base` |
| Background surface | `--fd-colors-background-surface` |
| Background layer | `--fd-colors-background-layer` |
| Content default (text) | `--fd-colors-content-default` |
| Content subtle | `--fd-colors-content-subtle` |
| Content strong | `--fd-colors-content-strong` |
| Border default | `--fd-colors-border-default` |
| Error | `--fd-colors-system-important-background-default` |
| Warning | `--fd-colors-system-alert-background-default` |
| Success | `--fd-colors-system-positive-background-default` |
| Info | `--fd-colors-system-info-background-default` |

---

## Spacing

Base unit: `4px`. All spacing must be a multiple of 4.

| Token | Value |
|-------|-------|
| `--fd-space-space-1` | 4px |
| `--fd-space-space-2` | 8px |
| `--fd-space-space-3` | 12px |
| `--fd-space-space-4` | 16px |
| `--fd-space-space-6` | 24px |
| `--fd-space-space-8` | 32px |
| `--fd-space-space-10` | 40px |
| `--fd-space-space-12` | 48px |

---

## Border Radius

Component tokens take priority over general scale:

| Component | Token | Value |
|-----------|-------|-------|
| Button | `--fd-radii-component-button-corner-radius` | 4px |
| TextField / SelectField / DatePicker | `--fd-radii-component-data-input-corner-radius` | 4px |
| Card | `--fd-radii-component-card-corner-radius` | 4px |
| Pill / PillGroup | `--fd-radii-component-pill-corner-radius` | 9999px |
| Avatar | `--fd-radii-border-radius-circle` | 9999px |

**Exception: Poker** — button radius = 9999px (pill-shaped), overrides the 4px default.

General scale (layout / custom elements only): `2px` · `4px` · `8px` · `12px` · `16px`

---

## Typography

**All products:**
- Body / headings / buttons → `Inter`
- Labels / metadata (always UPPERCASE) → `Roboto Condensed`

> Proxima Nova is licensed for **Sportsbook and Fantasy only** (via "LICENSED ONLY - SBK, DFS" Figma collection, Typography Library v3.0.0). All other products use Inter. Do not use Proxima Nova outside these two themes.

Valid weights: `400` · `600` · `700`
Valid sizes (px): `8` · `10` · `12` · `14` · `16` · `18` · `20` · `22` · `24` · `28` · `32` · `40` · `48` · `60`

**Button text:** weight `400` (Regular) for all variants (primary, secondary, tertiary, destructive, transparent, button-link) and all sizes (large, medium, small, x-small). Never bold.
