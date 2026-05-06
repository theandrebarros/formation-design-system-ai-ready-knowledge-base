# Figma Make — Intro Page Prompt

Paste the prompt below into the Figma Make input to generate the template intro page. Do this once when setting up or resetting the master template.

---

## Prompt

```
Create a full-viewport intro/cover page for a Formation Design System Figma Make template.

Apply data-theme="fanduel" data-mode="dark" to the root element.
Use only Formation components from the connected library. Never build custom replacements.
All colors must use --fd-* CSS variables. No hardcoded hex values.
All spacing must be multiples of 4px using --fd-space-space-N tokens.
Button text weight is 400 (Regular), never bold.
Label text is always UPPERCASE, Roboto Condensed.

Layout: single full-width page, max-width 960px, centered, vertical Stack with 32px gaps between sections.

---

SECTION 1 — Gradient banner (full width, 120px tall)
Background: linear-gradient(to right, #005FC8, #003D81)
Contents centered horizontally and vertically:
- Icon: star (from Formation icon library), white, size M
- Immediately right of icon: HeaderText "Formation Figma Make Template" in white, weight 700

---

SECTION 2 — Hero copy
BodyText large, color var(--fd-colors-content-default):
"Start from this template and build anything — bet slips, game cards, onboarding flows, score trackers, dashboards. Every BU. Every theme. Already configured."

---

SECTION 3 — "How to use" Card
Use Formation Card component. Padding 24px. Background var(--fd-colors-background-surface).
Inside the Card:
- LabelText "HOW TO USE" at top, color var(--fd-colors-content-subtle)
- 3 rows, each row: a circular number badge (24px, background var(--fd-colors-product-colors-primary), white number text) + BodyText medium beside it. 12px gap between rows.
  Row 1: "New Figma Make file: under Start from an example, pick the Internal Formation Powered template — or open this file and click Use in new file (top right)"
  Row 2: "Rename your new file for your project (e.g. Casino — Promo Card explorations). Do not edit the canonical template."
  Row 3: "Type what you want to build and which product. The AI picks the right theme, colors, and fonts automatically."

---

SECTION 4 — Example prompts
LabelText "WHAT TO TYPE" at top, color var(--fd-colors-content-subtle), 16px margin below.
A horizontal wrapping flex row of 4 Pill components (variant primary, size default):
- "sportsbook dark bet slip"
- "casino light game card"
- "picks score tracker"
- "fantasy lineup card"
8px gap between pills.

---

SECTION 5 — What's already set up
LabelText "WHAT'S SET UP FOR YOU" at top, color var(--fd-colors-content-subtle), 16px margin below.
A 2-column grid (gap 16px) of 4 small Card components. Each card: padding 16px, flex row, icon on left (size S, color var(--fd-colors-product-colors-primary)), BodyText small beside it.
Card 1: checkmark icon — "10 BU themes — Sportsbook, Casino, Picks, Fantasy, Poker, Predicts, Racing, FaceOff, Mohegan Sun, FanDuel"
Card 2: component icon — "Formation component library connected"
Card 3: code icon — "Design tokens via --fd-* CSS variables"
Card 4: sparkle or magic icon — "Official template: Formation AI guidelines via Adjust guidelines (optional reference: figma-make-guidelines.md for custom files)"

---

SECTION 6 — Footer
MetaDataText centered, color var(--fd-colors-content-subtle):
"Formation Design System v1.6.0 · Beta - Formation Figma Make Library · Prefer Start from an example or Use in new file — do not edit the canonical template"
```
