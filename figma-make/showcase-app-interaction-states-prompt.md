# Figma Make — Interaction States Prompt

Paste this as a **follow-up message** after the content improvements prompt has been applied. It adds hover, active, focus, and disabled interaction states to every interactive element that is not already covered by the Formation component library or earlier prompts.

> **Paste order:** 1. Base app prompts → 2. Visual upgrade → 3. Responsive layout → 4. Content improvements → 5. This prompt.

**What this prompt does NOT touch** (already handled):
- Sidebar nav hover/active — covered in the visual upgrade prompt
- Community card hover elevation — covered in the visual upgrade prompt
- Showcase Pills opacity dip on click — covered in the visual upgrade prompt
- Glossary letter chips hover/active/disabled — covered in the visual upgrade prompt
- BU Theme Recipes prompt row hover — covered in the content improvements prompt
- Formation `<Button>`, `<TextField>`, `<Pill>`, `<Tag>`, `<InlineMessage>` — the Formation component library manages their own states internally via `--fd-colors-component-*` tokens

---

## Prompt

```
Apply the following interaction state improvements to the existing app. Do not change any visual styles, layout, content, or routing already in place. Only add or update CSS transitions, hover states, active states, focus states, and click handlers as described below.

---

STATE 1 — GLOBAL FOCUS RING

Add a global :focus-visible rule to the stylesheet. This applies to all <button>, <a>, and any element with tabIndex that does not already have a custom focus style from the Formation library.

CSS:
:focus-visible {
  outline: 2px solid var(--fd-colors-border-active);
  outline-offset: 2px;
  border-radius: var(--fd-radii-component-button-corner-radius);
}

This ensures keyboard navigation is always visible using the Formation active border token (blue in FD base, adapts per BU theme). Do not suppress outline on any interactive element.

---

STATE 2 — SIDEBAR NAV TRANSITION

The sidebar nav items already have correct hover and active colors from the visual upgrade. Add smooth transitions so the state changes are not instant.

For every nav item element in the sidebar, add:
  transition: background 120ms ease, color 120ms ease, border-color 120ms ease;

Apply this to the same element that receives the background and border-left active styles.

---

STATE 3 — MOBILE TOP NAV (small screens, <768px)

The responsive prompt adds a top navigation bar on mobile. Apply the following interaction states to each nav item in the top bar, matching the sidebar nav token pattern:

Default:
  color: var(--fd-colors-content-default)
  background: transparent

Hover:
  background: var(--fd-colors-background-hover)
  color: var(--fd-colors-content-default)

Active/selected (current screen):
  background: var(--fd-colors-background-hover)
  color: var(--fd-colors-content-strong)
  border-bottom: 2px solid var(--fd-colors-product-colors-primary)
  (use border-bottom instead of border-left for horizontal nav)

Transition:
  transition: background 120ms ease, color 120ms ease, border-color 120ms ease;

---

STATE 4 — "GO DEEPER" RESOURCE CARDS (Showcase screen)

The "GO DEEPER" section contains external link cards. Make them feel interactive.

For each card in this section:
- Add cursor: pointer
- Add transition: box-shadow 200ms ease, background 200ms ease
- On hover:
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
    background: var(--fd-colors-background-hover);
  (same elevation as community cards, plus a subtle background tint)
- On :active (mouse press):
    box-shadow: none;
    background: var(--fd-colors-background-layer);

Ensure each card is wrapped in an <a> tag (or has an onClick that opens the URL in a new tab). If it is already an <a>, these styles apply directly. If it is a <div>, add role="link" tabIndex={0} and an onKeyDown handler that triggers the link on Enter or Space.

---

STATE 5 — CODE-STYLE PROMPT BLOCKS (Getting Started and Writing Prompts screens)

The monospace code blocks that display example prompts (styled with background-layer, border-radius, monospace font) should be copyable on click.

For every code-style prompt block across all screens:

a) Add interaction styles:
   cursor: pointer
   transition: background 120ms ease
   position: relative

   On hover:
     background: var(--fd-colors-background-hover)

   On :active:
     background: var(--fd-colors-background-layer)
     (revert to original — gives a press-and-release feel)

b) Add a copy icon inside the block, positioned top-right:
   position: absolute
   top: var(--fd-space-space-2)
   right: var(--fd-space-space-2)
   Icon component, size XS, color var(--fd-colors-content-subtle)
   transition: color 120ms ease

   On hover of the parent block:
     icon color: var(--fd-colors-content-default)

c) Add onClick handler:
   1. Call navigator.clipboard.writeText(blockText) where blockText is the full text content of that code block.
   2. Trigger the shared app-level Toast with message "Copied — paste into Figma Make!" (reuse the same single Toast instance used by the Showcase Pills and BU Theme Recipes — do not create additional Toast instances).
   3. Briefly swap the copy icon for a checkmark icon for 1200ms using React state, then revert to the copy icon. Use Icon component with the "check" or "checkmark" icon name.

This applies to:
- The 3 step prompt blocks in the "YOUR FIRST 3 PROMPTS" card on Getting Started
- The copy-paste starter template block on Writing Prompts
- The good/bad example blocks on Writing Prompts (if they are code-style blocks)

---

STATE 6 — GLOSSARY TERM CARDS — HOVER STATE

The glossary term cards are currently non-interactive visually, but the letter jump bar already highlights them temporarily on scroll. Add a persistent hover state so users can see they are readable/scannable elements.

For each glossary term card:
  transition: background 120ms ease
  On hover:
    background: var(--fd-colors-background-hover)

This is a read-only hover — no cursor: pointer, no click handler. It simply acknowledges the user's pointer position and makes the list feel alive.

---

STATE 7 — STEP BADGES (Getting Started "YOUR FIRST 3 PROMPTS")

The circular step number badges (28px, border, border-radius 9999px) are non-interactive. No states needed. Confirm they do NOT have cursor: pointer or any click handler — they are decorative.

---

STATE 8 — "WHAT'S SET UP FOR YOU" CARDS (Showcase screen)

These cards are informational, not clickable. Confirm they do NOT have cursor: pointer or hover states. They should remain visually static.

---

STATE 9 — SIDEBAR FOOTER "RESET TO FANDUEL BASE" BUTTON

This is a Formation Button variant="button-link" size="x-small". Formation handles its own hover and active states via component tokens. No custom CSS needed.

Confirm the button is only visible when activeTheme !== 'fanduel' (as specified in the visual upgrade prompt). When it transitions into view, add:
  transition: opacity 200ms ease
  Initial state (hidden): opacity: 0, pointer-events: none
  Visible state: opacity: 1, pointer-events: auto

Use React state to toggle the opacity class rather than conditional rendering, so the fade-out is visible rather than an instant disappear.

---

GLOBAL CSS ADDITIONS

Append these rules to the existing stylesheet. Do not remove or replace any existing rules.

/* Global focus ring */
:focus-visible {
  outline: 2px solid var(--fd-colors-border-active);
  outline-offset: 2px;
  border-radius: var(--fd-radii-component-button-corner-radius);
}

/* Sidebar nav transition */
.sidebar-nav-item {
  transition: background 120ms ease, color 120ms ease, border-color 120ms ease;
}

/* Mobile top nav item states */
.mobile-nav-item {
  transition: background 120ms ease, color 120ms ease, border-color 120ms ease;
}
.mobile-nav-item:hover {
  background: var(--fd-colors-background-hover);
  color: var(--fd-colors-content-default);
}
.mobile-nav-item.active {
  background: var(--fd-colors-background-hover);
  color: var(--fd-colors-content-strong);
  border-bottom: 2px solid var(--fd-colors-product-colors-primary);
}

/* Go Deeper card states */
.resource-card {
  cursor: pointer;
  transition: box-shadow 200ms ease, background 200ms ease;
}
.resource-card:hover {
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
  background: var(--fd-colors-background-hover);
}
.resource-card:active {
  box-shadow: none;
  background: var(--fd-colors-background-layer);
}

/* Code block copy states */
.prompt-code-block {
  cursor: pointer;
  position: relative;
  transition: background 120ms ease;
}
.prompt-code-block:hover {
  background: var(--fd-colors-background-hover);
}
.prompt-code-block:active {
  background: var(--fd-colors-background-layer);
}
.prompt-code-block .copy-icon {
  position: absolute;
  top: var(--fd-space-space-2);
  right: var(--fd-space-space-2);
  color: var(--fd-colors-content-subtle);
  transition: color 120ms ease;
}
.prompt-code-block:hover .copy-icon {
  color: var(--fd-colors-content-default);
}

/* Glossary term card hover */
.glossary-term-card {
  transition: background 120ms ease;
}
.glossary-term-card:hover {
  background: var(--fd-colors-background-hover);
}

/* Sidebar reset button fade */
.sidebar-reset-btn {
  transition: opacity 200ms ease;
}
.sidebar-reset-btn.hidden {
  opacity: 0;
  pointer-events: none;
}
.sidebar-reset-btn.visible {
  opacity: 1;
  pointer-events: auto;
}
```
