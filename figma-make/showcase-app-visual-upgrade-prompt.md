# Figma Make — Visual Upgrade Prompt

Paste the prompt below as a **follow-up message** into the existing Formation Showcase app Figma Make file. It upgrades the visual design and reorders the Showcase screen content — no rebuild of routing or data is needed.

> **Prerequisite:** The base app from `showcase-app-prompt.md` must already exist in the file.

---

## Prompt

```
Apply the following upgrades to the existing app. Do not rebuild the routing logic, navigation structure, or screen content — only update visual styles and reorder the sections within the Showcase screen as described below. Continue to use --fd-* CSS variables and Formation components throughout. No hardcoded colors or spacing values.

---

CONTENT REORDER — SHOWCASE SCREEN ONLY

Reorder the sections within the Showcase screen so that FanDuel-specific content appears before community examples. The new order top to bottom is:

1. Hero section (updated in Upgrade 1 below)
2. "START BUILDING" section — the clickable prompt Pills (currently "TRY IT WITH FORMATION")
3. "WHAT'S SET UP FOR YOU" section — the 4-card grid explaining what the template provides
4. "COMMUNITY EXAMPLES" section — the 6 community project cards
5. "GO DEEPER" section — the 4 external resource cards

Do not change any content within these sections — only their order. The section label for the Pills section should be renamed from "TRY IT WITH FORMATION" to "START BUILDING".

---

UPGRADE 1 — HERO SECTION (Showcase screen)

Replace the existing page header with a clean typography-led hero. Do not use any gradient or animation.

Hero container:
- background: var(--fd-colors-background-surface)
- border-bottom: 1px solid var(--fd-colors-border-default)
- padding: var(--fd-space-space-12) var(--fd-space-space-8)  (48px top/bottom, 32px left/right)
- margin-bottom: var(--fd-space-space-8)

Hero contents — left-aligned, max-width 640px:

1. Eyebrow label: font-family Roboto Condensed, font-size 12px, font-weight 400, text-transform uppercase, letter-spacing 1px, color var(--fd-colors-content-subtle), margin-bottom 12px.
   Text: "FORMATION × FIGMA MAKE"

2. Heading: font-family Inter, font-size 48px, font-weight 700, line-height 1.15, color var(--fd-colors-content-strong), margin-bottom var(--fd-space-space-3).
   Text: "What can you build with Figma Make?"

3. Subtitle: font-family Inter, font-size 16px, font-weight 400, line-height 1.6, color var(--fd-colors-content-subtle), max-width 560px, margin-bottom var(--fd-space-space-5).
   Text: "Figma Make is Figma's AI-powered prompt-to-code tool. Describe what you want, and it generates a working interactive prototype — no code required. At FanDuel, the Formation template is pre-wired with 10 BU themes, production tokens, and the Formation component library — ready from your first prompt."

4. Single Button: variant="primary" size="large" label="Open Formation template →" — opens https://www.figma.com/make/7zIyVB72qQuqW2gZSZFBiL/ in a new tab.
   No second button. No decorative elements.

---

UPGRADE 2 — SIDEBAR (App Shell)

Update the sidebar background from --fd-colors-background-surface to --fd-colors-background-layer.

In light mode this resolves to #F7FBFF — a very pale blue-white, one step above the page canvas.
In dark mode this resolves to #2B2D2E — a slightly lighter dark than the base canvas.

This creates the surface hierarchy: canvas (base) → sidebar (layer) → cards (surface) without using any color.

Keep the right border: 1px solid var(--fd-colors-border-default)

Logo area — add below the "FIGMA MAKE" LabelText:
- border-bottom: 1px solid var(--fd-colors-border-default)
- padding-bottom: var(--fd-space-space-3)
- margin-bottom: var(--fd-space-space-3)

Nav item state updates (replace existing state colors):
- Default: color var(--fd-colors-content-default), background transparent
- Hover: background var(--fd-colors-background-hover), color var(--fd-colors-content-default)
- Active: background var(--fd-colors-background-hover), color var(--fd-colors-content-strong), border-left: 2px solid var(--fd-colors-product-colors-primary)

Sidebar footer — replace the existing MetaDataText with a two-part block:
- Part 1 (always visible): MetaDataText, color var(--fd-colors-content-subtle).
  Text: "Active theme: " followed by a <span> that reads the current data-theme attribute value from document.documentElement and updates reactively via React state (see Upgrade 6 for the shared activeTheme state).
- Part 2 (conditionally visible — show only when activeTheme !== 'fanduel'):
  A Button variant="button-link" size="x-small" label="Reset to FanDuel Base"
  On click: set activeTheme to 'fanduel', call document.documentElement.setAttribute('data-theme', 'fanduel'), remove data-mode, then re-detect window.matchMedia('(prefers-color-scheme: dark)') and set data-mode accordingly.
- gap between parts: var(--fd-space-space-1)

---

UPGRADE 3 — COMMUNITY CARDS (Showcase screen, "COMMUNITY EXAMPLES" section)

Update every card in the community examples grid:

Remove: any border-top accent bar that may exist.

Add:
- transition: box-shadow 200ms ease
- On hover: box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25)
  (This is the --elevation-sm value from the Formation Edit styles template.)
  No transform. No color change on hover.

Author chip — add between the title and the description text:
- display: inline-flex
- align-items: center
- background: var(--fd-colors-background-layer)
- border-radius: 9999px
- padding: 2px 8px
- margin-top: 4px
- margin-bottom: 4px
- Inside: MetaDataText, color var(--fd-colors-content-subtle), showing the author name (e.g. "by Thierry")

---

UPGRADE 4 — CLICKABLE PILLS (Showcase screen, "START BUILDING" section)

Make every Pill in the "START BUILDING" section interactive.

Add onClick to each Pill:
1. Call navigator.clipboard.writeText(promptText) where promptText is the label string of that Pill.
2. Trigger a Formation Toast notification at the app root level with message "Copied — paste into Figma Make!". Duration 3 seconds. Use the Toast component from the connected Formation library. Manage a single Toast state at the App root — do not render one Toast per Pill.
3. Temporarily reduce the clicked Pill's opacity to 0.6 using a brief React state toggle, then restore to 1 after 400ms. No variant change.

Add cursor: pointer to all Pills in this section.

Below the Pills row, add a BodyText x-small, color var(--fd-colors-content-subtle), margin-top var(--fd-space-space-2):
Text: "Click any prompt to copy it"

---

UPGRADE 5 — GLOSSARY LETTER NAVIGATION (Glossary screen)

Add a compact alphabetical navigation bar above the search TextField.

Replace the existing alphabetical jump bar (if it uses Formation Pill components) with compact letter chip buttons. These are plain <button> elements — do NOT use the Formation Pill component here as it is too visually heavy for 26 adjacent items.

Each letter chip styles:
- width: 28px, height: 28px
- display: inline-flex, align-items: center, justify-content: center
- background: transparent
- border: 1px solid var(--fd-colors-border-default)
- border-radius: var(--fd-radii-component-button-corner-radius)  (4px)
- color: var(--fd-colors-content-subtle)
- font-family: Roboto Condensed
- font-size: 12px
- font-weight: 400
- cursor: pointer
- transition: background 120ms ease, color 120ms ease, border-color 120ms ease

Hover state:
- background: var(--fd-colors-background-hover)
- color: var(--fd-colors-content-default)

Active/selected state (the most recently clicked letter):
- background: var(--fd-colors-background-hover)
- color: var(--fd-colors-content-strong)
- border-color: var(--fd-colors-border-active)  (blue border only — no blue fill)

Disabled state (letters with no matching terms):
- opacity: 0.3
- cursor: not-allowed
- pointer-events: none

Jump bar container:
- position: sticky, top: 0, z-index: 10
- background: var(--fd-colors-background-base)
- border-bottom: 1px solid var(--fd-colors-border-default)
- padding: var(--fd-space-space-2) 0
- margin-bottom: var(--fd-space-space-4)
- display: flex, flex-wrap: wrap, gap: 4px

Logic:
- Derive the set of active letters from the glossary term list (first character, case-insensitive). Letters with no terms are disabled.
- On click of an active letter: smooth-scroll to the first glossary card whose term starts with that letter using scrollIntoView({ behavior: 'smooth', block: 'start' }). After 100ms, apply a temporary highlight to that card: set its background to var(--fd-colors-background-hover) via React state for 1200ms, then revert to var(--fd-colors-background-surface).
- Track the selected letter in React state. Reset it when the user types in the search TextField.
- When the search TextField has a non-empty value, hide the jump bar entirely (display: none).

---

UPGRADE 6 — BU THEME RECIPES (BU Theme Recipes screen)

Gradient swatches:
- Increase swatch height from 16px to 40px
- Add border-radius: var(--fd-radii-component-button-corner-radius) to each swatch
- Remove any existing animation or @keyframes from swatches. Swatches are static.

Live theme switcher:
- At the bottom of each theme card, after the example prompt row, add a Formation Button: variant="tertiary" size="small" label="Preview theme"
- On click, call the shared setActiveTheme handler (see below) with the relevant themeId string (e.g. 'sportsbook', 'casino', 'picks', etc.)

Theme state — lift to App root:
- Add const [activeTheme, setActiveTheme] = useState('fanduel') at the App component level.
- Create a handleThemeChange(themeId) function at App root that:
  1. Sets activeTheme state to themeId
  2. Calls document.documentElement.setAttribute('data-theme', themeId)
  3. For always-dark themes (picks, poker, mohegan-sun): calls document.documentElement.removeAttribute('data-mode')
  4. For light-only themes (fantasy, predicts, racing, faceoff): calls document.documentElement.setAttribute('data-mode', 'light')
  5. For dual-mode themes (fanduel, sportsbook, casino): preserves the current data-mode value (does not change it)
- Pass handleThemeChange down to the BU Recipes screen and to the sidebar footer Reset button.
- The sidebar footer's Active theme label reads from activeTheme state.

---

GLOBAL CSS ADDITIONS

Append these rules to the existing stylesheet. Do not remove or replace any existing rules.

/* Card hover elevation */
.community-card {
  transition: box-shadow 200ms ease;
}
.community-card:hover {
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
}

/* Clickable pill cursor */
.pill-interactive {
  cursor: pointer;
}
```
