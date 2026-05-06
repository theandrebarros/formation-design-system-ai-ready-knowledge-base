# Figma Make — Content Improvements Prompt

Paste this as a **follow-up message** after the visual upgrade and responsive prompts have been applied. It reorders navigation, restructures content for a mixed designer/non-designer audience, adds missing sections, and moves maintainer-only content out of user-facing pages.

> **Paste order:** 1. Base app prompts → 2. Visual upgrade → 3. Responsive layout → 4. This prompt.

---

## Prompt

```
Apply the following content improvements to the existing app. Do not change any visual styles, token usage, or responsive layout rules already in place. Only update navigation order, section content, section order within screens, and add new sections as described.

---

CHANGE 1 — NAVIGATION REORDER

Update the sidebar navigation items to reflect a learning journey order. The new order is:

1. "Showcase"        → route: showcase
2. "Getting Started" → route: getting-started
3. "Writing Prompts" → route: writing-prompts
4. "BU Theme Recipes"→ route: bu-recipes
5. "How It Works"    → route: how-it-works   (renamed from "Make Kits")
6. "Glossary"        → route: glossary

Update the route key for the Make Kits screen from "make-kits" to "how-it-works". Update the sidebar label from "Make Kits" to "How It Works". The screen content is restructured in Change 6 below.

---

CHANGE 2 — SHOWCASE SCREEN

2a. Add audience line
Below the existing subtitle paragraph, add a BodyText small, color var(--fd-colors-content-subtle), font-style italic, margin-top var(--fd-space-space-2):
Text: "For designers, PMs, and anyone who wants to prototype with FanDuel's real design system — no code needed."

2b. Replace the "WHAT'S SET UP FOR YOU" section with explicitly defined content
Remove the existing 4-card grid in this section and replace it with the following 4 cards. Each card: Formation Card component, padding var(--fd-space-space-4), background var(--fd-colors-background-surface), border 1px solid var(--fd-colors-border-default).

Card layout: vertical stack, gap var(--fd-space-space-2).
Row 1: Tag component, variant "fill", intent "info", size "condensed" — label as specified per card.
Row 2: BodyText medium strong (weight 700), color var(--fd-colors-content-strong) — title as specified.
Row 3: BodyText small regular, color var(--fd-colors-content-subtle) — description as specified.

Card 1:
- Tag label: "10 BU THEMES"
- Title: "Every brand, ready to go"
- Description: "Sportsbook, Casino, Picks, Fantasy, Poker, Predicts, Racing, FaceOff, Mohegan Sun, FanDuel Base — all pre-wired with their correct data-theme and data-mode attributes."

Card 2:
- Tag label: "PRODUCTION TOKENS"
- Title: "500+ --fd-* CSS variables"
- Description: "Colors, spacing, border-radius, and typography all resolve at runtime per theme and mode. The AI is instructed to use them — never hardcode hex or pixel values."

Card 3:
- Tag label: "FORMATION COMPONENTS"
- Title: "Button, Card, Tag, and 30+ more"
- Description: "The Formation React component library is connected as a Make Kit. Button, TextField, Pill, InlineMessage, Tag, Tabs, and every other component are available from your first prompt."

Card 4:
- Tag label: "AI GUIDELINES"
- Title: "Rules that teach the AI"
- Description: "Markdown guidelines in the kit teach the AI correct token usage, component names, dos and don'ts, and which fonts are licensed. No prompt engineering required on your end."

2c. Add "WHAT FIGMA MAKE IS NOT" section
Insert this section between "WHAT'S SET UP FOR YOU" and "COMMUNITY EXAMPLES".

Section label: LabelText "GOOD TO KNOW" color var(--fd-colors-content-subtle), gap below var(--fd-space-space-3).

A single Formation Card, padding var(--fd-space-space-4).
Three rows inside, each row: flex row, align-items flex-start, gap var(--fd-space-space-3), padding-bottom var(--fd-space-space-3), border-bottom 1px solid var(--fd-colors-border-default) (remove border-bottom on the last row).
Left: Icon component, size XS, color var(--fd-colors-content-subtle) — use "info" or "alert-circle" icon.
Right: BodyText small regular, color var(--fd-colors-content-subtle).

Row 1: "Figma Make generates React prototypes — not production-ready code. Use it for exploration, stakeholder demos, and design validation."
Row 2: "Prototypes are web-based. Native mobile app generation is not supported."
Row 3: "Complex animations or highly custom interactions may need manual editing in the code panel after generation."

Gap below section: var(--fd-space-space-8)

---

CHANGE 3 — GETTING STARTED SCREEN

3a. Remove the "FIRST PROMPT EXAMPLES" section entirely (it duplicates the Showcase Pills).

3b. Replace it with a "YOUR FIRST 3 PROMPTS" section showing an iterative workflow.

Section label: LabelText "YOUR FIRST 3 PROMPTS" color var(--fd-colors-content-subtle), gap below var(--fd-space-space-3).
BodyText small color var(--fd-colors-content-subtle), margin-bottom var(--fd-space-space-4):
Text: "Figma Make works best as a conversation. Start broad, then refine. Here is what a typical first session looks like."

A Formation Card, padding var(--fd-space-space-5).
Three rows, each row: flex row, align-items flex-start, gap var(--fd-space-space-3), padding-bottom var(--fd-space-space-4), border-bottom 1px solid var(--fd-colors-border-default) (remove border-bottom on last row).

Left of each row: a circular step badge — 28px diameter, background var(--fd-colors-background-layer), border 1px solid var(--fd-colors-border-default), border-radius 9999px, display flex, align-items center, justify-content center. Inside: BodyText small strong, color var(--fd-colors-content-strong), showing the step number.

Right of each row: vertical stack, gap var(--fd-space-space-1).
- BodyText small strong, color var(--fd-colors-content-strong): step label
- A code-style block: background var(--fd-colors-background-layer), border-radius var(--fd-radii-component-button-corner-radius), padding var(--fd-space-space-2) var(--fd-space-space-3), font-family monospace, font-size 13px, color var(--fd-colors-content-default), margin-top var(--fd-space-space-1): the example prompt text
- BodyText x-small regular, color var(--fd-colors-content-subtle): the explanation

Step 1:
- Label: "Build the layout"
- Prompt: "sportsbook dark bet slip with 3 selections, odds, and a Place Bet button"
- Explanation: "Name the BU and mode first. Describe the key components and actions. The AI infers theme, tokens, and fonts automatically."

Step 2:
- Label: "Refine the details"
- Prompt: "Make the odds larger. Add a running total above the Place Bet button. Show selection names in bold."
- Explanation: "Follow-up prompts are faster than rewrites. Target one thing at a time."

Step 3:
- Label: "Add states"
- Prompt: "Add a loading state to the Place Bet button. Show an error InlineMessage if the total stake is below the minimum."
- Explanation: "Once the layout is right, add interaction states. Mention Formation component names when you know them."

Gap below section: var(--fd-space-space-6)

3c. Add "COMMON MISTAKES" section at the bottom of the Getting Started screen (after the existing warning InlineMessage).

Section label: LabelText "COMMON MISTAKES" color var(--fd-colors-content-subtle), gap below var(--fd-space-space-3).

Four Formation InlineMessage components, variant "warning", stacked vertically, gap var(--fd-space-space-2).

Message 1: "Editing the canonical Formation template instead of making a personal copy via Start from an example or Use in new file."
Message 2: "Asking for specific hex colors (e.g. '#0070EB') — let the theme apply the correct tokens automatically."
Message 3: "Starting from a blank Figma Make file — you lose the Formation library, guidelines, and BU theme pre-configuration."
Message 4: "Specifying font names like 'use Inter' or 'use Proxima Nova' — the theme applies the correct licensed fonts automatically, and naming them can cause the AI to override them incorrectly."

---

CHANGE 4 — WRITING PROMPTS SCREEN

Reorder the sections within this screen. Do not change any section content — only their order.

New section order:
1. Page header (unchanged — keep at top)
2. "COPY-PASTE STARTER TEMPLATE" section (move from position 5 to position 2)
3. "GOOD VS BAD PROMPTS" section (move from position 3 to position 3 — no change)
4. "THE TC-EBC FRAMEWORK" section (move from position 2 to position 4)
5. "FORMATION-SPECIFIC TIPS" section (unchanged — keep at bottom)

---

CHANGE 5 — BU THEME RECIPES SCREEN

Make each theme card's example prompt copyable.

For every theme card in the "ALL 10 THEMES" grid, update the example prompt row:

- Wrap the example prompt text in a container with: cursor pointer, border-radius var(--fd-radii-component-button-corner-radius), padding var(--fd-space-space-1) var(--fd-space-space-2), transition background 120ms ease.
- On hover: background var(--fd-colors-background-hover).
- Add onClick to this container:
  1. Call navigator.clipboard.writeText(promptText) where promptText is the example prompt string for that card.
  2. Trigger the shared app-level Toast with message "Copied — paste into Figma Make!" (same Toast used by the Showcase Pills — reuse the existing handler, do not create a second Toast).
- Add a small copy icon (Icon component, size XS, color var(--fd-colors-content-subtle)) to the right of the prompt text, inline. On hover of the container, change icon color to var(--fd-colors-content-default).

---

CHANGE 6 — "HOW IT WORKS" SCREEN (renamed from Make Kits)

Update the screen title and page header:
- Screen title: "How It Works"
- Page header heading: "How Figma Make Works with Formation"
- Page header subtitle: "The Formation Figma Make template is already a Make Kit — a reusable configuration that packages the design system into one shareable unit. Here is what's inside it, and how to maintain it."

Keep the existing 3-card "WHAT'S IN A MAKE KIT" section unchanged at the top.

After the 3-card section, add a maintainer divider before the technical content:

Divider element: a horizontal rule (1px, var(--fd-colors-border-default)), margin-top and margin-bottom var(--fd-space-space-8).

Below the divider, add:
LabelText "FOR TEMPLATE MAINTAINERS" color var(--fd-colors-content-subtle), gap below var(--fd-space-space-3).
Formation InlineMessage variant "info":
"The sections below are for people who maintain the Formation Figma Make template. If you just want to use it, you can stop here."
Gap below: var(--fd-space-space-6)

Then keep the existing sections in this order (all below the divider):
- "GUIDELINES FOLDER STRUCTURE" section (unchanged)
- "UPDATING THE FORMATION TEMPLATE GUIDELINES" section (unchanged)
- "ORGANISATION ADMIN" section (unchanged)

Add one new section at the very bottom of this screen (below Organisation Admin):

Section label: LabelText "SHARED TOKEN PATTERNS" color var(--fd-colors-content-subtle), gap below var(--fd-space-space-4).
BodyText small color var(--fd-colors-content-subtle) margin-bottom var(--fd-space-space-3): "These tokens exist in every theme — their resolved values change per BU, but the names are always the same."

Move the existing "SHARED TOKEN PATTERNS" table from the BU Theme Recipes screen to here. Remove it from BU Theme Recipes.

The table: Formation Card, padding var(--fd-space-space-5). A 2-column grid of token name + description pairs. Token names in code style (monospace, background var(--fd-colors-background-layer), border-radius 2px, padding 0 4px). Gap between rows 8px.

Tokens:
- --fd-colors-background-base | Page canvas background
- --fd-colors-background-surface | Card and panel background
- --fd-colors-background-layer | Elevated or nested background
- --fd-colors-content-default | Primary body text
- --fd-colors-content-subtle | Secondary / muted text
- --fd-colors-product-colors-primary | Brand primary (links, active states)
- --fd-colors-border-default | Component and layout borders
- --fd-colors-component-button-primary-background-base | Primary CTA button background

---

CHANGE 7 — GLOSSARY SCREEN

7a. Split the glossary into two labelled groups.

Remove the single flat list. Replace with two sections:

SECTION A:
LabelText "EVERYDAY TERMS" color var(--fd-colors-content-subtle), gap below var(--fd-space-space-3).
BodyText small color var(--fd-colors-content-subtle) margin-bottom var(--fd-space-space-4): "Start here. These are the terms you'll use every time you work with Figma Make."
Then the card list for these terms (same card style as before — two-column layout, term left, definition right):

Terms in this group (alphabetical):
- Adjust guidelines
- Component (NEW — see 7b)
- Formation
- Formation Figma Make Library
- Formation Figma Make Template
- Guidelines
- Make Kit
- Prompt
- Remix
- Start from an example
- Theme vs Mode (NEW — see 7b)
- Use in new file

SECTION B:
Gap above: var(--fd-space-space-8)
LabelText "TECHNICAL REFERENCE" color var(--fd-colors-content-subtle), gap below var(--fd-space-space-3).
BodyText small color var(--fd-colors-content-subtle) margin-bottom var(--fd-space-space-4): "For when you need to understand what's happening under the hood."
Then the card list for these terms:

Terms in this group (alphabetical):
- BU Theme
- data-mode
- data-theme
- Design Token
- Edit styles
- prefers-color-scheme

7b. Add 3 new terms.

Add these to the Everyday Terms group (alphabetical position):

Term: Component
Definition: "A reusable UI building block from the Formation library — Button, Card, Tag, Pill, TextField, Tabs, and 30+ more. When you use the Formation template, the AI uses these components instead of generating custom HTML. You can name them in your prompts to get more precise results."

Term: Theme vs Mode
Definition: "Two independent settings. Theme (data-theme) controls which business unit's brand tokens are active — for example, data-theme='casino' applies Casino-specific colors and gradients. Mode (data-mode) controls light or dark appearance. They combine independently: Casino light and Casino dark are different combinations of the same theme."

7c. Keep the existing search TextField and letter jump bar. The search should filter across both groups simultaneously. The letter jump bar should derive active letters from all terms in both groups combined.
```
