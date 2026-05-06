# Figma Make — Responsive Layout Prompt

Paste this as a **follow-up message** after the visual upgrade prompt has already been applied. It adds three responsive breakpoints to the app shell, hero, and all card grids — eliminating the dead space at wider viewports.

> **Paste order:** 1. Base app prompts → 2. `showcase-app-visual-upgrade-prompt.md` → 3. This prompt.

---

## Prompt

```
Add responsive layout support to the existing app using CSS media queries. Do not change any content, routing logic, or Formation token usage. Use only @media queries and CSS — no new libraries or layout frameworks.

The three breakpoints are:
- Mobile:  < 768px
- Tablet:  768px – 1199px  (current default behaviour)
- Desktop: ≥ 1200px        (primary fix — eliminates dead space at wide viewports)

Formation does not define breakpoint tokens, so these pixel values are hardcoded in the media queries only. All spacing, color, and radius values must continue to use --fd-* tokens.

---

CHANGE 1 — APP SHELL

The current layout is: fixed sidebar (240px) + scrollable main content area (max-width 800px, centered).

DESKTOP (≥ 1200px):
- Sidebar: width 240px — unchanged
- Main content area: remove the max-width constraint entirely. The content area fills all remaining viewport width after the sidebar.
- Add an inner content wrapper inside the main area: max-width 1200px, margin: 0 auto, padding: 0 var(--fd-space-space-8). This centers content on very wide screens (> 1440px) while filling the space at 1200–1440px.

TABLET (768px – 1199px):
- Sidebar: width 200px (reduced from 240px)
- Main content area: fills remaining width, no max-width
- Inner content wrapper: padding 0 var(--fd-space-space-6)

MOBILE (< 768px):
- Sidebar: hidden (display: none)
- Add a horizontal top navigation bar at the top of the viewport:
  - height: 48px
  - background: var(--fd-colors-background-layer)
  - border-bottom: 1px solid var(--fd-colors-border-default)
  - display: flex, align-items: center
  - padding: 0 var(--fd-space-space-4)
  - Contains the same 6 nav items as the sidebar, rendered as horizontal text links:
    - BodyText small, color var(--fd-colors-content-default)
    - Active state: color var(--fd-colors-content-strong), font-weight 700
    - gap between items: var(--fd-space-space-4)
    - overflow-x: auto, white-space: nowrap (allows horizontal scroll on very small screens)
  - The "FIGMA MAKE" logo label appears at the far left, separated from nav items by a 1px vertical divider (border-right: 1px solid var(--fd-colors-border-default), margin-right: var(--fd-space-space-4), padding-right: var(--fd-space-space-4))
- Main content area: full width, padding var(--fd-space-space-4)

---

CHANGE 2 — HERO SECTION (Showcase screen)

DESKTOP (≥ 1200px):
- Change the hero from a single-column text block to a two-column layout:
  - Left column (flex: 1, max-width 560px): eyebrow label + heading + subtitle + CTA button — unchanged content
  - Right column (flex: 1, display: flex, align-items: center, justify-content: flex-end): a stat block showing 3 Formation facts
  - gap between columns: var(--fd-space-space-8)
  - The two columns sit inside a flex row with align-items: center

  Stat block (right column) — 3 items stacked vertically, gap var(--fd-space-space-4):
  Each stat item: a Card component, padding var(--fd-space-space-4), background var(--fd-colors-background-layer), border 1px solid var(--fd-colors-border-default), min-width 200px.
  Inside each card: two rows —
    Row 1: font-family Inter, font-size 28px, font-weight 700, color var(--fd-colors-content-strong)
    Row 2: BodyText small regular, color var(--fd-colors-content-subtle)

  Stat 1: "10" / "BU themes pre-configured"
  Stat 2: "500+" / "--fd-* CSS variables"
  Stat 3: "30+" / "Formation components"

TABLET (768px – 1199px):
- Single column (current behaviour)
- Heading font-size: 36px
- Hero padding: var(--fd-space-space-10) var(--fd-space-space-6)

MOBILE (< 768px):
- Single column
- Heading font-size: 28px, line-height: 1.2
- Hero padding: var(--fd-space-space-8) var(--fd-space-space-4)
- CTA button: full width (width: 100%)

---

CHANGE 3 — COMMUNITY EXAMPLES GRID (Showcase screen)

Currently: 2-column CSS grid, gap var(--fd-space-space-4).

Update to use CSS grid with responsive column count:

DESKTOP (≥ 1200px): grid-template-columns: repeat(3, 1fr)  — 6 cards become 2 rows of 3
TABLET (768px – 1199px): grid-template-columns: repeat(2, 1fr)  — unchanged
MOBILE (< 768px): grid-template-columns: 1fr  — single column

---

CHANGE 4 — "WHAT'S SET UP FOR YOU" GRID (Showcase screen)

Currently: 2-column grid of 4 cards.

This grid stays 2-column at all breakpoints — the card content is too wide for 3 columns to be readable.

DESKTOP (≥ 1200px): grid-template-columns: repeat(2, 1fr), gap: var(--fd-space-space-5) — increase gap slightly
TABLET (768px – 1199px): grid-template-columns: repeat(2, 1fr) — unchanged
MOBILE (< 768px): grid-template-columns: 1fr

---

CHANGE 5 — "GO DEEPER" RESOURCE CARDS GRID (Showcase screen)

Currently: 2-column grid of 4 cards.

DESKTOP (≥ 1200px): grid-template-columns: repeat(4, 1fr)  — all 4 cards in a single row
TABLET (768px – 1199px): grid-template-columns: repeat(2, 1fr)  — unchanged
MOBILE (< 768px): grid-template-columns: 1fr

---

CHANGE 6 — BU THEME RECIPES GRID (BU Theme Recipes screen)

Currently: 2-column grid of 10 cards.

DESKTOP (≥ 1200px): grid-template-columns: repeat(3, 1fr)  — 10 cards become 3+3+3+1
TABLET (768px – 1199px): grid-template-columns: repeat(2, 1fr)  — unchanged
MOBILE (< 768px): grid-template-columns: 1fr

---

CHANGE 7 — MAKE KITS 3-COLUMN GRID (Make Kits screen)

Currently: 3-column grid of 3 cards (npm Package, Figma Library, Guidelines).

TABLET (768px – 1199px): grid-template-columns: repeat(3, 1fr)  — unchanged
MOBILE (< 768px): grid-template-columns: 1fr  — stack vertically

---

CHANGE 8 — PROMPT PILLS CONTAINER (Showcase screen, "START BUILDING" section)

Currently: wrapping flex row. At wide viewports the container has a max-width that causes early wrapping.

DESKTOP (≥ 1200px): remove any max-width from the Pills container so Pills use the full available content width before wrapping.
TABLET and MOBILE: unchanged.

---

CHANGE 9 — GLOSSARY LAYOUT (Glossary screen)

Currently: full-width single-column card list.

DESKTOP (≥ 1200px): the glossary card list stays single-column but the two-column layout inside each card (term left, definition right) gains more breathing room — increase the left column (term) width from 240px to 280px.

MOBILE (< 768px): inside each glossary card, switch from two-column to single-column layout (term above, definition below, gap var(--fd-space-space-2)).

---

GLOBAL CSS ADDITIONS

Append these responsive rules to the existing stylesheet. Do not remove or replace any existing rules.

/* ─── App Shell ─────────────────────────────────────────── */

/* Desktop: remove content max-width, add inner wrapper centering */
@media (min-width: 1200px) {
  .main-content-area {
    max-width: none;
  }
  .content-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--fd-space-space-8);
  }
  .sidebar {
    width: 240px;
  }
}

/* Tablet: narrow sidebar */
@media (min-width: 768px) and (max-width: 1199px) {
  .sidebar {
    width: 200px;
  }
  .content-inner {
    padding: 0 var(--fd-space-space-6);
  }
}

/* Mobile: hide sidebar, show top nav */
@media (max-width: 767px) {
  .sidebar {
    display: none;
  }
  .top-nav-mobile {
    display: flex;
  }
  .main-content-area {
    padding: var(--fd-space-space-4);
  }
}

/* ─── Hero ───────────────────────────────────────────────── */

@media (min-width: 1200px) {
  .hero-inner {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--fd-space-space-8);
  }
  .hero-text {
    flex: 1;
    max-width: 560px;
  }
  .hero-stats {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: var(--fd-space-space-4);
  }
  .hero-heading {
    font-size: 48px;
  }
}

@media (min-width: 768px) and (max-width: 1199px) {
  .hero-heading {
    font-size: 36px;
  }
  .hero-stats {
    display: none;
  }
}

@media (max-width: 767px) {
  .hero-heading {
    font-size: 28px;
    line-height: 1.2;
  }
  .hero-stats {
    display: none;
  }
  .hero-cta-button {
    width: 100%;
  }
}

/* ─── Card Grids ─────────────────────────────────────────── */

/* Community examples: 3-col at desktop */
@media (min-width: 1200px) {
  .community-cards-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  .resource-cards-grid {
    grid-template-columns: repeat(4, 1fr);
  }
  .bu-recipes-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  .setup-cards-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--fd-space-space-5);
  }
}

/* Mobile: all grids single column */
@media (max-width: 767px) {
  .community-cards-grid,
  .resource-cards-grid,
  .bu-recipes-grid,
  .setup-cards-grid,
  .make-kits-grid {
    grid-template-columns: 1fr;
  }
}

/* ─── Glossary ───────────────────────────────────────────── */

@media (min-width: 1200px) {
  .glossary-card-inner {
    grid-template-columns: 280px 1fr;
  }
}

@media (max-width: 767px) {
  .glossary-card-inner {
    grid-template-columns: 1fr;
    gap: var(--fd-space-space-2);
  }
}

/* ─── Pills container ────────────────────────────────────── */

@media (min-width: 1200px) {
  .pills-container {
    max-width: none;
  }
}
```
