# Figma Make — AI Tooling Pitch Deck Prompt

A paste-ready Figma Make prompt that generates a 10-slide, branded pitch deck selling AI design tooling (Figma Make, Lovable) to FanDuel designers. Open the [Formation Figma Make Template](https://www.figma.com/make/7zIyVB72qQuqW2gZSZFBiL/) and click **Use in new file**, rename it (e.g. "AI Tooling — Designer Pitch"), then paste the prompt below.

---

## Prompt

```
Build a full-viewport, single-page slide deck app with 10 slides and left/right arrow navigation between them.

---

CORE RULES — NEVER BREAK

Apply data-theme="fanduel" data-mode="dark" to the root element.
Use only Formation components from the connected library. Never build custom replacements.
All colors must use --fd-* CSS variables. No hardcoded hex values.
All spacing must use --fd-space-space-N tokens (multiples of 4px). No hardcoded px values for spacing.
Button text is always weight 400 (Regular), never bold.
Label and metadata text is always UPPERCASE, font Roboto Condensed.
Headings and body text use Inter.
Forbidden words: never write "Storybook" anywhere in the app. Do not compare any asset to Storybook.
Only use these URLs — do not invent any others:
  - Formation Figma Make Template: https://www.figma.com/make/7zIyVB72qQuqW2gZSZFBiL/
  - Figma Make Glossary: https://www.figma.com/make/ksmjFkqzmJEha0bmh0craZ/Figma-Make-Template-Glossary?fullscreen=1
  - Lovable DS Template (WIP): https://lovable.dev/projects/4f65ba10-5079-4026-9cfe-95233f085e36

---

NAVIGATION

Each slide is full-viewport (100vw × 100vh). Only one slide is visible at a time.
State: a currentSlide integer, starting at 0, max 9.

Fixed footer bar (position: fixed, bottom: var(--fd-space-space-6), left: 0, right: 0):
  - Display flex, justify-content center, align-items center, gap var(--fd-space-space-4).
  - Left: Formation Button variant="tertiary" type="icon-only" with icon "chevron-left". Disabled and visually faded when currentSlide === 0.
  - Centre: A row of 10 small dots (8px circles), gap var(--fd-space-space-2).
    Active dot: background var(--fd-colors-product-colors-primary).
    Inactive dots: background var(--fd-colors-content-subtle), opacity 0.4.
  - Right: Formation Button variant="tertiary" type="icon-only" with icon "chevron-right". Disabled and visually faded when currentSlide === 9.

Keyboard listener on the document: ArrowLeft decrements currentSlide (min 0), ArrowRight increments (max 9). No other keys handled.

Slide transitions: a smooth 300ms horizontal slide using CSS transform translateX. Slide entering from the right, leaving to the left (forward nav). Reverse for back nav.

---

SLIDE 1 — COVER

Background: full-bleed linear gradient from left to right using var(--fd-colors-brand-gradient-color-stops-start) to var(--fd-colors-brand-gradient-color-stops-end). No image, no texture.
Content centered horizontally and vertically in the viewport.
Vertical stack, gap var(--fd-space-space-6), max-width 720px, centered.

Row 1: MetaDataText "AI TOOLING FOR FANDUEL DESIGNERS", color rgba(255,255,255,0.7) — this is the one exception where rgba is allowed because it is applied to white text on a gradient, not to a background token.
Row 2: JumboText "Ship a Formation prototype in 5 minutes." — jumbo-x-large (40px, weight 700), color white.
Row 3: BodyText large regular — "Figma Make and Lovable — wired to Formation, ready from your first prompt." — color rgba(255,255,255,0.85).

No navigation dots visible on slide 1 (the fixed footer is still rendered but slides 1–10 count from 0 so dots are still correct).

---

SLIDE 2 — THE SHIFT

Background: var(--fd-colors-background-base). Full-viewport.
Content: max-width 800px centered, padding var(--fd-space-space-10) horizontally.

Eyebrow: LabelText "THE OLD WAY VS NOW", color var(--fd-colors-content-subtle), margin-bottom var(--fd-space-space-6).
Heading: HeaderText "Prompting is the new prototyping." heading-xx-large (22px weight 700), color var(--fd-colors-content-strong).
Gap below heading: var(--fd-space-space-8).

Two-column grid (gap var(--fd-space-space-6)). Each column is a Formation Card, padding var(--fd-space-space-6), background var(--fd-colors-background-surface), border 1px solid var(--fd-colors-border-default), border-radius var(--fd-radii-component-card-corner-radius).

LEFT CARD — "Before":
  - LabelText "BEFORE", color var(--fd-colors-system-important-content-accent) (red).
  - Vertical list of 4 BodyText medium regular rows, gap var(--fd-space-space-3), color var(--fd-colors-content-default):
    · "Sketch the idea in Figma"
    · "Manually apply BU colors and spacing"
    · "Re-check every token by hand"
    · "Share a static mock — no interaction"

RIGHT CARD — "Now":
  - LabelText "NOW", color var(--fd-colors-system-positive-content-accent) (green).
  - Vertical list of 4 BodyText medium regular rows, gap var(--fd-space-space-3), color var(--fd-colors-content-default):
    · "Describe what you want in plain English"
    · "Formation theme applied automatically"
    · "Tokens enforced — no invented values"
    · "Share a live, interactive prototype link"

---

SLIDE 3 — WHY IT WORKS FOR US NOW

Background: var(--fd-colors-background-base). Full-viewport.
Content: max-width 800px centered, padding var(--fd-space-space-10) horizontally.

Eyebrow: LabelText "WHAT MAKES THIS DIFFERENT", color var(--fd-colors-content-subtle), margin-bottom var(--fd-space-space-6).
Heading: HeaderText "Formation is already wired in." heading-xx-large, color var(--fd-colors-content-strong).
Gap: var(--fd-space-space-8).

A 2×2 grid of Formation Cards (gap var(--fd-space-space-4)), each card: padding var(--fd-space-space-5), flex row, gap var(--fd-space-space-4).
Each card has an icon (size M, color var(--fd-colors-product-colors-primary)) on the left and a vertical stack on the right (gap var(--fd-space-space-1)):
  - BodyText medium strong (weight 700): the title
  - BodyText small regular, color var(--fd-colors-content-subtle): the description

Card 1: icon "component" — "10 BU themes" — "Sportsbook, Casino, Picks, Fantasy, Poker and more — all pre-configured."
Card 2: icon "color" — "Production tokens" — "--fd-* CSS variables enforced. No hardcoded hex values, ever."
Card 3: icon "sparkle" — "No setup" — "Open the template, click Use in new file, and start prompting."
Card 4: icon "lock" — "Governance built in" — "The AI follows Formation rules. Deviations are structurally blocked."

---

SLIDE 4 — TOOL 1: FIGMA MAKE

Background: var(--fd-colors-background-base). Full-viewport.
Content: max-width 800px centered, padding var(--fd-space-space-10) horizontally.

Eyebrow: LabelText "TOOL 01", color var(--fd-colors-content-subtle), margin-bottom var(--fd-space-space-4).
Heading: HeaderText "Figma Make" heading-xx-large, color var(--fd-colors-content-strong).
Subheading: BodyText large regular, color var(--fd-colors-content-subtle), margin-bottom var(--fd-space-space-8):
"Prompt-to-interactive-prototype, inside Figma. No code required. Share via a live URL."

Three-column flex row (gap var(--fd-space-space-4)), each column is a Formation Card, padding var(--fd-space-space-5):

Card 1: LabelText "BEST FOR", then BodyText medium regular: "Rapid UI exploration · Bet slips, cards, flows · Designer-led concepting"
Card 2: LabelText "HOW TO START", then BodyText medium regular: "Open the Formation template · Click Use in new file · Describe what you want"
Card 3: LabelText "TIME TO FIRST RESULT", then BodyText medium regular: "Under 5 minutes from a blank file to a shareable, Formation-themed prototype"

Gap below cards: var(--fd-space-space-8).

CTA row: flex row, gap var(--fd-space-space-3), align-items center.
- Formation Button variant="primary" size="medium": "Open the template" — href https://www.figma.com/make/7zIyVB72qQuqW2gZSZFBiL/
- Formation Button variant="tertiary" size="medium": "See the glossary →" — href https://www.figma.com/make/ksmjFkqzmJEha0bmh0craZ/Figma-Make-Template-Glossary?fullscreen=1

---

SLIDE 5 — SEE IT IN ACTION: THE GLOSSARY

Background: var(--fd-colors-background-base). Full-viewport.
Content: max-width 800px centered, padding var(--fd-space-space-10) horizontally.

Eyebrow: LabelText "BUILT WITH FIGMA MAKE + FORMATION", color var(--fd-colors-product-colors-primary), margin-bottom var(--fd-space-space-4).
Heading: HeaderText "The Figma Make Glossary" heading-xx-large, color var(--fd-colors-content-strong).
Body: BodyText large regular, color var(--fd-colors-content-subtle), margin-bottom var(--fd-space-space-8):
"A living reference app built entirely with Figma Make and the Formation library. It covers components, tokens, and design patterns — all interactive, all shareable via a URL."

Formation Card, padding var(--fd-space-space-6), background var(--fd-colors-background-surface), border 1px solid var(--fd-colors-border-default):
Inside the card: a vertical stack (gap var(--fd-space-space-4)):
  - LabelText "WHAT IT SHOWS", color var(--fd-colors-content-subtle)
  - A 2-column grid (gap var(--fd-space-space-3)) of 4 BodyText medium regular rows with a bullet icon (icon "check-circle" size S, color var(--fd-colors-system-positive-content-accent)) to the left of each:
    · "Formation component catalogue"
    · "Token values per BU theme"
    · "Live interactive examples"
    · "Prompt-to-result patterns for Figma Make"

Gap: var(--fd-space-space-8).

CTA: Formation Button variant="primary" size="medium": "Open the glossary" — href https://www.figma.com/make/ksmjFkqzmJEha0bmh0craZ/Figma-Make-Template-Glossary?fullscreen=1

---

SLIDE 6 — TOOL 2: LOVABLE

Background: var(--fd-colors-background-base). Full-viewport.
Content: max-width 800px centered, padding var(--fd-space-space-10) horizontally.

Eyebrow row (flex row, gap var(--fd-space-space-3), align-items center, margin-bottom var(--fd-space-space-4)):
  - LabelText "TOOL 02", color var(--fd-colors-content-subtle)
  - Formation Tag intent="warning" size="condensed" variant="subtle": "WIP"

Heading: HeaderText "Lovable" heading-xx-large, color var(--fd-colors-content-strong).
Subheading: BodyText large regular, color var(--fd-colors-content-subtle), margin-bottom var(--fd-space-space-8):
"Prompt-to-React-app. Deeper flows, real code output, and Formation rules pasted in as guidelines."

Three-column flex row (gap var(--fd-space-space-4)), each column is a Formation Card, padding var(--fd-space-space-5):

Card 1: LabelText "BEST FOR", then BodyText medium regular: "Full app flows · Multi-screen prototypes · When you need real React output to hand off"
Card 2: LabelText "HOW TO START", then BodyText medium regular: "Open the WIP DS template · Fork it · Paste Formation guidelines · Start prompting"
Card 3: LabelText "DIFFERENCE VS FIGMA MAKE", then BodyText medium regular: "Output is React code, not a Figma layer — better for longer flows and developer handoff"

Gap: var(--fd-space-space-8).

CTA row: flex row, gap var(--fd-space-space-3), align-items center.
- Formation Button variant="primary" size="medium": "Open the WIP DS template" — href https://lovable.dev/projects/4f65ba10-5079-4026-9cfe-95233f085e36
- BodyText small regular, color var(--fd-colors-content-subtle): "Template is a work in progress — expect rough edges."

---

SLIDE 7 — THE 5-MINUTE TEMPLATE

Background: var(--fd-colors-background-base). Full-viewport.
Content: max-width 800px centered, padding var(--fd-space-space-10) horizontally.

Eyebrow: LabelText "HOW TO USE IT", color var(--fd-colors-content-subtle), margin-bottom var(--fd-space-space-6).
Heading: HeaderText "From zero to shareable in under 5 minutes." heading-xx-large, color var(--fd-colors-content-strong).
Gap: var(--fd-space-space-8).

Three Formation Cards in a horizontal flex row (gap 0, no space between cards — instead connected with a visual arrow between them). Each card: flex 1, padding var(--fd-space-space-6), background var(--fd-colors-background-surface), border 1px solid var(--fd-colors-border-default), border-radius var(--fd-radii-component-card-corner-radius).

Between card 1 and card 2: a Formation Icon "arrow-right" size L, color var(--fd-colors-product-colors-primary), flex-shrink 0, aligned to center vertically.
Between card 2 and card 3: same arrow.

CARD 1 — Step 1:
  - A circle badge: 32px, background var(--fd-colors-product-colors-primary), white BodyText medium strong "1", centered.
  - Gap var(--fd-space-space-3).
  - LabelText "OPEN", color var(--fd-colors-content-subtle).
  - BodyText medium regular: "Go to the Formation Figma Make Template and click Use in new file. Rename it for your project."

CARD 2 — Step 2:
  - Circle badge "2" (same style).
  - Gap var(--fd-space-space-3).
  - LabelText "PROMPT", color var(--fd-colors-content-subtle).
  - BodyText medium regular: "Describe what you want: product, component, dark or light. The AI applies the right theme, tokens, and fonts."

CARD 3 — Step 3:
  - Circle badge "3" (same style).
  - Gap var(--fd-space-space-3).
  - LabelText "SHARE", color var(--fd-colors-content-subtle).
  - BodyText medium regular: "Copy the live preview URL from Figma Make and drop it in Slack or Jira. No exports, no handoff doc."

---

SLIDE 8 — SELLING POINTS

Background: var(--fd-colors-background-base). Full-viewport.
Content: max-width 800px centered, padding var(--fd-space-space-10) horizontally.

Eyebrow: LabelText "WHY THIS MATTERS", color var(--fd-colors-content-subtle), margin-bottom var(--fd-space-space-6).
Heading: HeaderText "Four reasons to use this now." heading-xx-large, color var(--fd-colors-content-strong).
Gap: var(--fd-space-space-8).

A 2×2 grid of Formation Cards (gap var(--fd-space-space-5)), each card padding var(--fd-space-space-6):
Each card: vertical stack, gap var(--fd-space-space-3).
  - Icon (size L, color var(--fd-colors-product-colors-primary))
  - HeaderText heading-medium (16px weight 700), color var(--fd-colors-content-strong)
  - BodyText medium regular, color var(--fd-colors-content-subtle)

Card 1: icon "lightning" — "Speed" — "A prompt replaces a morning of mockup work. First result in under 5 minutes."
Card 2: icon "check-circle" — "Consistency" — "Formation is enforced by the AI. No invented tokens, no rogue hex values, no re-spec in review."
Card 3: icon "refresh" — "Brand-first by default" — "The template inverts the usual pattern — branding and tokens come first, not as a retrofit."
Card 4: icon "repeat" — "Repeatable at scale" — "Workflows can be templated, shared via URL, and kept in sync using GitHub Actions."

---

SLIDE 9 — GET STARTED

Background: var(--fd-colors-background-base). Full-viewport.
Content: max-width 800px centered, padding var(--fd-space-space-10) horizontally.

Eyebrow: LabelText "RESOURCES", color var(--fd-colors-content-subtle), margin-bottom var(--fd-space-space-6).
Heading: HeaderText "Everything you need to start." heading-xx-large, color var(--fd-colors-content-strong).
Gap: var(--fd-space-space-8).

Formation Card, padding var(--fd-space-space-6), background var(--fd-colors-background-surface):
Inside the card: a vertical stack, gap var(--fd-space-space-5).

ROW 1 — primary links: flex row, flex-wrap wrap, gap var(--fd-space-space-3).
  - Formation Button variant="primary" size="medium": "Formation Figma Make Template →" — href https://www.figma.com/make/7zIyVB72qQuqW2gZSZFBiL/
  - Formation Button variant="secondary" size="medium": "Figma Make Glossary →" — href https://www.figma.com/make/ksmjFkqzmJEha0bmh0craZ/Figma-Make-Template-Glossary?fullscreen=1
  - Formation Button variant="secondary" size="medium": "Lovable DS Template (WIP) →" — href https://lovable.dev/projects/4f65ba10-5079-4026-9cfe-95233f085e36

Divider: 1px solid var(--fd-colors-border-default), full width.

ROW 2 — who to ask: flex row, align-items center, gap var(--fd-space-space-4).
  - Formation Icon "person" size M, color var(--fd-colors-content-subtle).
  - Vertical stack, gap var(--fd-space-space-1):
    · LabelText "WHO TO ASK", color var(--fd-colors-content-subtle)
    · BodyText medium regular, color var(--fd-colors-content-default): "Andre Barros — Senior Product Designer, AI & Prototyping. Reach out on Slack for Figma Make, Lovable, Cursor, or Formation questions."

Divider: same style.

ROW 3 — channel: flex row, align-items center, gap var(--fd-space-space-4).
  - Formation Icon "slack" size M, color var(--fd-colors-content-subtle).
  - BodyText medium regular, color var(--fd-colors-content-default): "#formation on Slack — the primary channel for Formation questions, issues, and contributions."

---

SLIDE 10 — CLOSING CTA

Background: full-bleed linear gradient, same as Slide 1: left to right var(--fd-colors-brand-gradient-color-stops-start) to var(--fd-colors-brand-gradient-color-stops-end).
Content: centered horizontally and vertically, max-width 640px.
Vertical stack, gap var(--fd-space-space-6), text-align center.

Row 1: MetaDataText "READY TO TRY IT?", color rgba(255,255,255,0.7).
Row 2: JumboText "Use it on your next ticket." — jumbo-x-large (40px weight 700), color white.
Row 3: BodyText large regular, color rgba(255,255,255,0.85):
"Open the Formation template, describe your screen, and share the link. That's it."
Row 4: flex row, justify-content center, gap var(--fd-space-space-4).
  - Formation Button variant="primary" size="large": "Open the template" — href https://www.figma.com/make/7zIyVB72qQuqW2gZSZFBiL/
  - Formation Button variant="tertiary" size="large" (style: white border, white text for legibility on gradient): "See the glossary" — href https://www.figma.com/make/ksmjFkqzmJEha0bmh0craZ/Figma-Make-Template-Glossary?fullscreen=1

---

FINAL CHECKS

Before rendering, verify:
- All slides share the same fixed navigation footer (dots + arrows). It sits above all slide content using z-index.
- No slide overflows vertically — all content fits within 100vh minus the footer height (~80px). Scale down font sizes or reduce gaps if needed on any slide.
- No hardcoded hex values anywhere except the two rgba(255,255,255,...) exceptions on gradient slides, which are white text opacity adjustments only.
- No mention of Storybook anywhere in any text content, label, tooltip, or comment.
- The three approved URLs are the only external hrefs used. No invented or placeholder URLs.
```
