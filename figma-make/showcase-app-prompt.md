# Figma Make — Showcase App Prompts

A multi-page documentation app showcasing Figma Make's power alongside the Formation Design System library. Paste each prompt sequentially into the Figma Make AI chat to build the full app screen by screen.

> **Before you start:** Open the [Formation Figma Make template](https://www.figma.com/make/7zIyVB72qQuqW2gZSZFBiL/) and click **Use in new file**. Rename it (e.g. "Formation — Figma Make Showcase"). Then paste Prompt 1 first.

---

## Prompt 1 — App Shell + Showcase (Home Screen)

```
Build a multi-page documentation app. This is the full app — it must include a persistent sidebar, route switching between 6 screens, and the first screen (Showcase) fully rendered.

THEME SETUP
Apply data-theme="fanduel" to the root element.
Detect the user's system color preference using window.matchMedia('(prefers-color-scheme: dark)'):
- If dark: set data-mode="dark" on the root element
- If light: set data-mode="light" on the root element
Also listen for changes with matchMedia.addEventListener so the app re-evaluates when the OS preference changes.
Use only --fd-* CSS variables for all colors. No hardcoded hex values.
All spacing must use --fd-space-space-N tokens (multiples of 4px). No hardcoded px values for spacing.
Use Formation components from the connected library. Never build custom replacements.
Button text is always weight 400 (Regular), never bold.
Label text is always UPPERCASE, font Roboto Condensed.
Body and heading text uses Inter.

---

APP SHELL LAYOUT
Full viewport. Two-column layout: fixed sidebar (240px wide) + scrollable main content area.

SIDEBAR
Background: var(--fd-colors-background-surface)
Right border: 1px solid var(--fd-colors-border-default)
Padding: var(--fd-space-space-4) (16px) on all sides
No shrink, fixed height 100vh.

Sidebar contents (top to bottom):
1. Logo area — LabelText "FIGMA MAKE" in var(--fd-colors-content-subtle), 16px margin bottom
2. Navigation list — 6 items. Each nav item is a clickable row:
   - Padding: var(--fd-space-space-2) var(--fd-space-space-3) (8px 12px)
   - Border radius: var(--fd-radii-component-button-corner-radius) (4px)
   - BodyText medium, color var(--fd-colors-content-default)
   - Active state: background var(--fd-colors-background-hover), color var(--fd-colors-content-strong), left border 3px solid var(--fd-colors-product-colors-primary)
   - Hover state: background var(--fd-colors-background-hover)
   - 4px gap between items
   Nav items (label, route key):
   - "Showcase" → route: showcase
   - "Glossary" → route: glossary
   - "Getting Started" → route: getting-started
   - "Writing Prompts" → route: writing-prompts
   - "Make Kits" → route: make-kits
   - "BU Theme Recipes" → route: bu-recipes
3. Spacer (flex-grow)
4. Footer area — MetaDataText "Formation DS v1.6.0", color var(--fd-colors-content-subtle)

Default active route on load: showcase

MAIN CONTENT AREA
Background: var(--fd-colors-background-base)
Overflow-y: scroll
Padding: var(--fd-space-space-8) (32px)
Max-width 800px, centered with auto margins.
Renders the active screen component.

---

SHOWCASE SCREEN (default home)

This is a documentation and inspiration page for Figma Make at FanDuel.

SECTION 1 — Page header
HeaderText "What can you build with Figma Make?" — heading-xx-large (22px, weight 700)
BodyText regular below it, color var(--fd-colors-content-subtle):
"Figma Make is Figma's AI-powered prompt-to-code tool. Describe what you want, and it generates a working interactive prototype — no code required. At FanDuel, the Formation template is pre-wired: 10 BU themes, production tokens, and the Formation component library, ready from your first prompt."
Gap below: var(--fd-space-space-8) (32px)

SECTION 2 — Community showcase
LabelText "COMMUNITY EXAMPLES" at top, color var(--fd-colors-content-subtle), gap below: var(--fd-space-space-4)
A 2-column responsive grid (gap: var(--fd-space-space-4)) of 6 Card components.
Each card: padding var(--fd-space-space-4), background var(--fd-colors-background-surface), border 1px solid var(--fd-colors-border-default), border-radius var(--fd-radii-component-card-corner-radius).
Card internal layout (vertical Stack, gap 8px):
- Tag component (variant "fill", intent "info") showing a category label (see below)
- BodyText strong (weight 700): project title
- BodyText small regular, color var(--fd-colors-content-subtle): one-sentence description
- Flex row, gap 8px, margin-top auto: two Button components (variant "button-link", size "small") — "Live demo →" linking to the live URL, and "Remix" linking to the community file URL

Card 1:
- Tag: "Interaction"
- Title: "Interactive Eye-Following Card"
- Author: "by Thierry"
- Description: "Move your cursor and the card follows — a delightful example of cursor-based interaction and emotional design."
- Live: https://cookie-monster-color.figma.site/
- Remix: https://www.figma.com/community/file/1530305855415503769

Card 2:
- Tag: "Storytelling"
- Title: "Designer's Trauma — Scratch Card"
- Author: "by Akansha Sharma"
- Description: "A scratch-card mechanic reveals relatable designer moments — interaction as narrative, pacing as the message."
- Live: https://designerstrauma.figma.site/
- Remix: https://www.figma.com/community/file/1542481994374791908

Card 3:
- Tag: "Persistent State"
- Title: "Bunny Mini Tamagotchi"
- Author: "by Grace Ling"
- Description: "A Tamagotchi-inspired pet that responds and persists over time — small interactions that stack into something emotionally engaging."
- Live: https://bet-lake-66598449.figma.site/
- Remix: https://www.figma.com/community/file/1554762998273549737

Card 4:
- Tag: "Product Flow"
- Title: "Interactive Grocery App"
- Author: "by Ana Boyer"
- Description: "A real multi-step product flow — featured in Figma's official intro tutorial. Paste your Figma designs in, get a clickable app out."
- Live: https://jog-rice-16263441.figma.site/
- Remix: https://www.figma.com/community/file/1541837713049692391

Card 5:
- Tag: "Ambitious"
- Title: "Figmacraft — 3D Game"
- Author: "by krisxsee"
- Description: "A full 3D world with platforms, movement, and progression. Built in 7 days. The upper edge of what's possible today."
- Live: https://lion-deer-67928836.figma.site/
- Remix: https://www.figma.com/community/file/1547324502833297389

Card 6:
- Tag: "Award"
- Title: "Figma Make-a-thon Winners"
- Author: "Figma Community"
- Description: "Grand Prize: Web Poetry by Cara Ellis. Most Creative: Weather Synthesizer. Most Innovative: Package Customizer. Browse all winners."
- Live: https://www.linkedin.com/pulse/figma-make-a-thon-winners-announced-figma-0xpmc
- Remix: https://figma.com/gallery

Gap below section: var(--fd-space-space-8)

SECTION 3 — Try it with Formation
LabelText "TRY IT WITH FORMATION" at top, color var(--fd-colors-content-subtle), gap below: var(--fd-space-space-3)
BodyText small, color var(--fd-colors-content-subtle): "Paste any of these into the Formation Figma Make template and the AI will apply the correct theme, colors, and fonts automatically."
Gap below: var(--fd-space-space-3)
A wrapping flex row of 8 Pill components (variant "primary", size "default"), gap: var(--fd-space-space-2):
- "sportsbook dark bet slip"
- "casino light promo card with CTA"
- "picks leaderboard with scores and avatar"
- "fantasy dark lineup card"
- "poker dark table lobby"
- "predicts light pick card"
- "racing form guide card"
- "mohegan sun game tile dark"

Gap below section: var(--fd-space-space-8)

SECTION 4 — External resources
LabelText "GO DEEPER" at top, color var(--fd-colors-content-subtle), gap below: var(--fd-space-space-4)
A 2-column grid (gap: var(--fd-space-space-3)) of 4 small Card components.
Each card: padding var(--fd-space-space-3) var(--fd-space-space-4), flex row with gap var(--fd-space-space-3), align-items center.
Left: Icon component (size S, color var(--fd-colors-product-colors-primary)) — use "external-link" or "arrow-right" icon.
Right: vertical stack — BodyText small strong (weight 700) as the link text, BodyText x-small regular color var(--fd-colors-content-subtle) as description. Wrap the card title in an anchor tag opening in a new tab.

Resource 1: "8 Essential Tips for Using Figma Make" — "Official Figma Blog guide to building with Figma Make" — https://figma.com/blog/8-ways-to-build-with-figma-make
Resource 2: "What People Are Actually Building" — "Real community projects dissected — perfect if you want inspiration before starting" — https://medium.com/design-bootcamp/what-people-are-actually-building-with-figma-make-3db22d987458
Resource 3: "Introducing Make Kits" — "How to bring your design system package into Figma Make as a reusable kit" — https://www.figma.com/blog/introducing-make-kits-and-make-attachments/
Resource 4: "Community Gallery" — "Browse all public Figma Make and Sites projects from the community" — https://figma.com/gallery
```

---

## Prompt 2 — Glossary Screen

```
Add the Glossary screen. When the user clicks "Glossary" in the sidebar, render this content in the main area.

SECTION 1 — Page header
HeaderText "Figma Make Glossary" — heading-xx-large (22px, weight 700)
BodyText regular below, color var(--fd-colors-content-subtle):
"Key terms for Figma Make and the Formation Design System. Use this as a reference when reading documentation or working with the Formation template."
Gap below: var(--fd-space-space-6)

SECTION 2 — Search input
A Formation TextField component.
Label (inside the box, as per Formation spec): "SEARCH TERMS"
Placeholder: "Filter by keyword…"
Full width.
On input, filter the glossary list below in real time (case-insensitive match against term name and definition).
Gap below: var(--fd-space-space-4)

SECTION 3 — Glossary list
Display as a vertical Stack of Card components. Each card: padding var(--fd-space-space-3) var(--fd-space-space-4), background var(--fd-colors-background-surface), border 1px solid var(--fd-colors-border-default).
Inside each card: two-column layout (term on left, definition on right, 240px left column, rest on right, gap var(--fd-space-space-4)).
Term column: BodyText medium strong (weight 700), color var(--fd-colors-content-strong).
Any term that is a token or code value (starts with -- or data- or contains backtick-style code) should be wrapped in a <code> element styled with: font-family monospace, font-size 13px, background var(--fd-colors-background-layer), border-radius 2px, padding 0 4px, color var(--fd-colors-content-default).
Definition column: BodyText medium regular, color var(--fd-colors-content-default).
Gap between cards: var(--fd-space-space-2)

Terms to render (in this order, alphabetical):

1. Adjust guidelines — The option inside Figma Make's ··· menu where you paste Formation AI rules. Used to update the official Formation template after a token bump.

2. BU Theme — A business-unit theme applied via the data-theme HTML attribute. Each BU (Sportsbook, Casino, Picks, etc.) swaps Formation's base tokens for brand-specific values.

3. data-mode — HTML attribute set to "light" or "dark" on the root element. Controls the active color mode. Picks, Poker, and Mohegan Sun are always dark — never add data-mode for these themes.

4. data-theme — HTML attribute that activates a specific business unit's design token overrides. Example: data-theme="casino" applies Casino-specific colors, gradients, and styles.

5. Design Token — A named CSS variable (--fd-*) whose value resolves per theme and mode at runtime. Always use tokens — never hardcode hex values, pixel spacing, or radius values.

6. Edit styles — The Figma Make option (··· → Edit styles) where you can paste a CSS block to override Figma Make's default style variables with Formation-aligned values.

7. Formation — FanDuel's cross-platform design system. Provides components, tokens (colors, spacing, radius, typography), and theme support for all business units.

8. Formation Figma Make Library — The Figma component library connected inside the official Formation Figma Make template. Provides Formation UI components directly in Make.

9. Formation Figma Make Template — The canonical Figma Make file pre-wired with the Formation library, AI guidelines, and all 10 BU themes. Start here rather than a blank file.

10. Guidelines — Markdown files inside a Make kit that teach the AI how to correctly use your design system: component names, token usage, dos and don'ts. The Formation template stores these in Adjust guidelines.

11. Make Kit — A reusable Figma Make configuration combining three things: an npm package (React components), a Figma Design library (styles and variables), and guidelines (markdown instructions for the AI).

12. prefers-color-scheme — A CSS media feature (and matchMedia API) that detects the user's OS-level light or dark mode preference. The Formation template should use this to set data-mode automatically.

13. Prompt — The natural-language instruction you type into Figma Make's AI chat. The quality of your prompt determines the quality of the output. Include BU name, mode, components, and behaviors in your first message.

14. Remix — Copying a public Figma Make community file to your own Figma account so you can edit and experiment with it.

15. Start from an example — The section shown when creating a new Figma Make file that displays available templates, including the internal Formation Powered template.

16. Use in new file — A button visible on the Formation Figma Make template file (top right) that creates a personal copy you can rename and build in, without editing the canonical template.
```

---

## Prompt 3 — Getting Started Screen

```
Add the Getting Started screen. When the user clicks "Getting Started" in the sidebar, render this content in the main area.

SECTION 1 — Page header
HeaderText "Getting Started with the Formation Template" — heading-xx-large (22px, weight 700)
BodyText regular below, color var(--fd-colors-content-subtle):
"Two ways to start. Both give you a Formation-pre-configured Make file with 10 BU themes, the component library, and AI guidelines already set up."
Gap below: var(--fd-space-space-8)

SECTION 2 — Two paths (side-by-side cards)
A 2-column grid (gap: var(--fd-space-space-4)).

Card A — "Start from an example":
Formation Card, padding var(--fd-space-space-5).
Top: Tag variant "fill" intent "positive" label "RECOMMENDED"
HeaderText (heading-large, 18px, weight 700): "Start from an example"
BodyText medium regular, color var(--fd-colors-content-default), margin-top 8px:
"When you create a new Figma Make file, look under Start from an example. Select the Internal Formation Powered Figma Make Template card — it's often the first card shown."
Divider (1px, var(--fd-colors-border-default)) margin-top and margin-bottom 16px.
LabelText "WHAT YOU GET" color var(--fd-colors-content-subtle), 8px margin below.
Four rows, each row: Icon (checkmark, size XS, color var(--fd-colors-product-colors-primary)) + BodyText small "All 10 BU themes pre-configured" / "Formation component library connected" / "AI guidelines loaded via Adjust guidelines" / "Formation token CSS variables ready"
Gap between rows: 8px

Card B — "Use in new file":
Formation Card, padding var(--fd-space-space-5).
Top: Tag variant "fill" intent "neutral" label "ALTERNATIVE"
HeaderText (heading-large, 18px, weight 700): "Use in new file"
BodyText medium regular, color var(--fd-colors-content-default), margin-top 8px:
"Open the Formation Figma Make template directly. Then click Use in new file (top right corner). This gives you the same pre-configured setup as a personal copy."
Divider (1px, var(--fd-colors-border-default)) margin-top and margin-bottom 16px.
Button variant "secondary" size "medium" label "Open Formation template →" — href: https://www.figma.com/make/7zIyVB72qQuqW2gZSZFBiL/ (opens in new tab)

Gap below section: var(--fd-space-space-8)

SECTION 3 — After you open the file (numbered steps)
LabelText "AFTER YOU OPEN THE FILE" color var(--fd-colors-content-subtle), gap below: var(--fd-space-space-4)
Formation Card, padding var(--fd-space-space-5).
Three numbered steps. Each step: a circular badge (24px diameter, background var(--fd-colors-product-colors-primary), BodyText small strong white number inside) + vertical Stack on the right (gap 4px).
Gap between steps: var(--fd-space-space-4)
Left column (badge): width 24px, flex-shrink 0. Right column: flex 1.

Step 1:
BodyText medium strong "Rename your file"
BodyText medium regular color var(--fd-colors-content-subtle):
"Give it a project name right away — for example: 'Casino — Promo Card exploration' or 'Sportsbook — Bet Slip dark'. Do not work inside the canonical template file."

Step 2:
BodyText medium strong "Write your first prompt"
BodyText medium regular color var(--fd-colors-content-subtle):
"Describe what you want to build and which product it's for. The AI infers the BU theme, color mode, fonts, and components automatically from your description."

Step 3:
BodyText medium strong "Iterate"
BodyText medium regular color var(--fd-colors-content-subtle):
"Refine with follow-up prompts. Click elements to point-and-edit. Use the code panel if you need manual control. The library and guidelines stay active throughout."

Gap below section: var(--fd-space-space-6)

SECTION 4 — First prompt examples
LabelText "FIRST PROMPT EXAMPLES" color var(--fd-colors-content-subtle), gap below: var(--fd-space-space-3)
Four InlineMessage components (variant "info") stacked vertically with 8px gap between them.
Each InlineMessage contains a BodyText small with the example prompt in italics:
- "sportsbook dark bet slip with live odds, stake input, and a Place Bet button"
- "casino light promo card with a game image, title, RTP badge, and Play Now CTA"
- "picks leaderboard screen dark — show a ranked list of 5 players with avatars, scores, and rank badges"
- "fantasy lineup card light — show a player card with position label, name, salary, and projected points"

Gap below section: var(--fd-space-space-6)

SECTION 5 — Important callout
Formation InlineMessage variant "warning":
"Do not edit the canonical Formation Figma Make template. Always use Start from an example or Use in new file to get a personal copy. Changes to the canonical template affect everyone."
```

---

## Prompt 4 — Writing Effective Prompts Screen

```
Add the Writing Effective Prompts screen. When the user clicks "Writing Prompts" in the sidebar, render this content in the main area.

SECTION 1 — Page header
HeaderText "Writing Effective Prompts" — heading-xx-large (22px, weight 700)
BodyText regular below, color var(--fd-colors-content-subtle):
"The quality of what Figma Make generates is directly proportional to the quality of your prompt. Front-load your first message with everything the AI needs — it's easier than fixing a wrong result."
Gap below: var(--fd-space-space-8)

SECTION 2 — TC-EBC Framework card
LabelText "THE TC-EBC FRAMEWORK" color var(--fd-colors-content-subtle), gap below: var(--fd-space-space-3)
Formation Card, padding var(--fd-space-space-5), background var(--fd-colors-background-surface).
BodyText small strong "Task · Context · Elements · Behavior · Constraints" color var(--fd-colors-content-strong), gap below 12px.
BodyText small regular color var(--fd-colors-content-subtle): "A structured way to write prompts. Not every prompt needs all five — but covering more reduces follow-up exchanges."
Gap below: var(--fd-space-space-4)
Five rows in a 2-column layout (label on left 140px, description on right):
Row 1: BodyText medium strong "Task" | BodyText medium regular "What Figma Make should build or change"
Row 2: BodyText medium strong "Context" | BodyText medium regular "Where this screen fits in the product — which BU, which user flow"
Row 3: BodyText medium strong "Elements" | BodyText medium regular "Key UI components, data to display, sections to include"
Row 4: BodyText medium strong "Behavior" | BodyText medium regular "Interactions, states, animations, transitions"
Row 5: BodyText medium strong "Constraints" | BodyText medium regular "Device target, layout rules, visual restrictions"
Gap between rows: var(--fd-space-space-3)

Gap below section: var(--fd-space-space-8)

SECTION 3 — Good vs bad comparison
LabelText "GOOD VS BAD PROMPTS" color var(--fd-colors-content-subtle), gap below: var(--fd-space-space-4)
Two comparison pairs, each pair in a Formation Card, padding var(--fd-space-space-4), gap between cards: var(--fd-space-space-4).
Inside each card: two columns (gap var(--fd-space-space-4)).
Left column header: Tag intent "important" label "TOO VAGUE"
Right column header: Tag intent "positive" label "SPECIFIC"

Pair 1:
Left: BodyText medium regular color var(--fd-colors-content-default): "Create a dashboard UI"
Right: BodyText medium regular color var(--fd-colors-content-default): "sportsbook dark analytics dashboard — show last 7 days of bet activity, a total stake counter, a win/loss ratio, and a recent bets list. Use Tabs for time range (7d / 30d / All time)."

Pair 2:
Left: BodyText medium regular color var(--fd-colors-content-default): "Make it look clean and modern"
Right: BodyText medium regular color var(--fd-colors-content-default): "Use a two-column layout with a header row above the fold. Primary action button top right. Card components for each data section. Breathable spacing between sections."

Gap below section: var(--fd-space-space-8)

SECTION 4 — Formation-specific tips
LabelText "FORMATION-SPECIFIC TIPS" color var(--fd-colors-content-subtle), gap below: var(--fd-space-space-4)
A vertical Stack of 5 Card components, padding var(--fd-space-space-4), gap var(--fd-space-space-3).
Each card: flex row, gap var(--fd-space-space-3). Left: Icon size S color var(--fd-colors-product-colors-primary). Right: vertical stack — BodyText small strong as tip title, BodyText small regular color var(--fd-colors-content-subtle) as description.

Tip 1 (icon: "palette"): "Always mention the BU and mode" — "Say 'sportsbook dark' or 'casino light' in your prompt. The AI reads this and sets data-theme and data-mode — you don't need to specify tokens."

Tip 2 (icon: "component"): "Name Formation components you want" — "If you know the component, say it: 'use a Pill group for filters', 'show a Tag with intent positive for win status', 'use a DataChunk for the stat display'. The AI will use them from the library."

Tip 3 (icon: "type"): "Don't mention font names" — "Never say 'use Inter' or 'use Proxima Nova'. The theme applies the correct licensed fonts automatically. Mentioning fonts can cause the AI to override them incorrectly."

Tip 4 (icon: "tokens" or "code"): "Don't ask for specific hex colors" — "Say 'primary action button' or 'success state'. The AI maps these to the correct --fd-* tokens for your theme. Hardcoding hex values bypasses the token system."

Tip 5 (icon: "refresh"): "Iterate rather than rewrite" — "After the first generation, refine with targeted follow-up prompts: 'move the header to the left', 'make the stat numbers larger', 'add a disabled state to the button'. Small changes are faster than a full rewrite."

Gap below section: var(--fd-space-space-6)

SECTION 5 — Prompt template
LabelText "COPY-PASTE STARTER TEMPLATE" color var(--fd-colors-content-subtle), gap below: var(--fd-space-space-3)
BodyText small color var(--fd-colors-content-subtle): "Fill in the brackets, delete what doesn't apply, then paste into Figma Make."
Gap below: var(--fd-space-space-3)
A pre-formatted code block styled with: background var(--fd-colors-background-layer), border 1px solid var(--fd-colors-border-default), border-radius var(--fd-radii-component-card-corner-radius), padding var(--fd-space-space-4), font-family monospace, font-size 13px, color var(--fd-colors-content-default), white-space pre-wrap, line-height 1.6.
A copy-to-clipboard Button (variant "tertiary", size "small") in the top-right corner of the block.
Code block content:
[BU name] [light|dark] [screen name]

Show: [describe the main data or content to display]
Layout: [overall structure — e.g. single column, card grid, two-column with sidebar]
Components: [any specific Formation components — e.g. Tabs, Pill, Tag, DataChunk, Card]
Interactions: [e.g. clickable cards, toggle, tab switching, form submission]
States: [e.g. empty state, loading state, error state]
Constraints: [e.g. mobile viewport, no horizontal scroll, max-width 480px]
```

---

## Prompt 5 — Make Kits Screen

```
Add the Make Kits screen. When the user clicks "Make Kits" in the sidebar, render this content in the main area.

SECTION 1 — Page header
HeaderText "Using Make Kits with Formation" — heading-xx-large (22px, weight 700)
BodyText regular below, color var(--fd-colors-content-subtle):
"A Make Kit is a reusable Figma Make configuration that packages your design system — code, library, and AI instructions — into one shareable unit. The Formation Figma Make template is already a Make Kit."
Gap below: var(--fd-space-space-8)

SECTION 2 — What a Make Kit contains
LabelText "WHAT'S IN A MAKE KIT" color var(--fd-colors-content-subtle), gap below: var(--fd-space-space-4)
A 3-column grid of Card components, padding var(--fd-space-space-5), gap var(--fd-space-space-4).

Card 1 — npm Package:
Icon size M, color var(--fd-colors-product-colors-primary) — use "package" or "box" icon.
BodyText large strong "npm Package" margin-top 12px.
BodyText medium regular color var(--fd-colors-content-default) margin-top 8px:
"A published React component package. Figma Make installs it at build time. The Formation kit uses @fanduel/formation-react-components, @fanduel/formation-theming, and @fanduel/formation-tokens."

Card 2 — Figma Library:
Icon size M, color var(--fd-colors-product-colors-primary) — use "figma" or "layers" icon.
BodyText large strong "Figma Library" margin-top 12px.
BodyText medium regular color var(--fd-colors-content-default) margin-top 8px:
"A connected Figma Design library that provides variables, color styles, and component styles. The Formation kit uses the Beta - Formation Figma Make Library."

Card 3 — Guidelines:
Icon size M, color var(--fd-colors-product-colors-primary) — use "file-text" or "book" icon.
BodyText large strong "Guidelines" margin-top 12px.
BodyText medium regular color var(--fd-colors-content-default) margin-top 8px:
"Markdown files that teach the AI how to use your system correctly — component names, token patterns, dos and don'ts. Stored in Adjust guidelines on the Formation template."

Gap below section: var(--fd-space-space-8)

SECTION 3 — Guidelines structure
LabelText "GUIDELINES FOLDER STRUCTURE" color var(--fd-colors-content-subtle), gap below: var(--fd-space-space-3)
BodyText small color var(--fd-colors-content-subtle): "Figma's recommendation: many short files, organized by component and foundation. Progressive disclosure keeps the AI's context window focused."
Gap below: var(--fd-space-space-3)
A pre-formatted code block: background var(--fd-colors-background-layer), border 1px solid var(--fd-colors-border-default), border-radius var(--fd-radii-component-card-corner-radius), padding var(--fd-space-space-4), font-family monospace, font-size 13px, color var(--fd-colors-content-default), white-space pre-wrap, line-height 1.6.
Code block content:
guidelines/
├── overview.md          ← top-level: introduce the system, route to sub-files
├── setup.md             ← npm imports, CSS setup, ThemeProvider
├── foundations/
│   ├── colors.md        ← token groups, semantic usage, decision trees
│   ├── spacing.md       ← 4px base grid, token scale
│   ├── typography.md    ← font families, type scale, composite classes
│   └── radius.md        ← component-specific vs general tokens
└── components/
    ├── overview.md      ← full component catalog, alternative names
    ├── button.md        ← variants, sizing, props, examples
    ├── text-field.md    ← label-inside structure, states, tokens
    ├── pill.md          ← variants, sizes, states
    └── tag.md           ← intents, sizes, TagGroup usage

Gap below section: var(--fd-space-space-8)

SECTION 4 — How to update the Formation guidelines
LabelText "UPDATING THE FORMATION TEMPLATE GUIDELINES" color var(--fd-colors-content-subtle), gap below: var(--fd-space-space-4)
Formation Card, padding var(--fd-space-space-5).
Numbered step list (same style as Getting Started — circular badge + text):

Step 1: "Open the Formation Figma Make template at figma.com/make/7zIyVB72qQuqW2gZSZFBiL/"
Step 2: "Click ··· → Adjust guidelines"
Step 3: "Replace the content with the latest figma-make-guidelines.md from the fanduel-ds-knowledge repo"
Step 4: "Click Save — guidelines update applies to the file and to all Start from an example / Use in new file flows"

Gap below: var(--fd-space-space-4)
Formation InlineMessage variant "info": "Guidelines do not update automatically. Re-paste after any Formation token package bump or BU theme change."

Gap below section: var(--fd-space-space-6)

SECTION 5 — Org admin controls
LabelText "ORGANISATION ADMIN" color var(--fd-colors-content-subtle), gap below: var(--fd-space-space-3)
BodyText medium regular color var(--fd-colors-content-default):
"On Figma Organisation and Enterprise plans, admins can approve Make kits to recommend them org-wide, and set a kit as the default so it's automatically included in all new Make files without manual searching."
Gap below: var(--fd-space-space-3)
Button variant "button-link" size "medium" label "Manage Make kits for an organisation →" — opens https://help.figma.com/hc/en-us/articles/39313426360087 in a new tab.
```

---

## Prompt 6 — BU Theme Recipes Screen

```
Add the BU Theme Recipes screen. When the user clicks "BU Theme Recipes" in the sidebar, render this content in the main area.

SECTION 1 — Page header
HeaderText "BU Theme Recipes" — heading-xx-large (22px, weight 700)
BodyText regular below, color var(--fd-colors-content-subtle):
"Quick-reference for all 10 Formation business unit themes. Mention the BU name in your Figma Make prompt and the AI will apply the correct data-theme, data-mode, fonts, and tokens automatically."
Gap below: var(--fd-space-space-6)

SECTION 2 — Always-dark callout
Formation InlineMessage variant "warning":
"Picks, Poker, and Mohegan Sun are always dark — never add data-mode for these themes. All other themes support both light and dark modes."
Gap below: var(--fd-space-space-6)

SECTION 3 — Proxima Nova callout
Formation InlineMessage variant "info":
"Proxima Nova is a licensed font used only for Sportsbook and Fantasy. For all other themes the AI uses Inter for body/headings and Roboto Condensed for labels. Never manually specify a font family in your prompt."
Gap below: var(--fd-space-space-8)

SECTION 4 — Theme reference cards
LabelText "ALL 10 THEMES" color var(--fd-colors-content-subtle), gap below: var(--fd-space-space-4)
A 2-column grid (gap: var(--fd-space-space-4)) of 10 Formation Card components.
Each card: padding var(--fd-space-space-4), background var(--fd-colors-background-surface), border 1px solid var(--fd-colors-border-default).

Card internal layout:
- Top row: BodyText medium strong (weight 700) — theme display name. Flex row space-between with Tag on the right (intent: "neutral" for themes with dark mode available, "important" intent with label "ALWAYS DARK" for always-dark themes, "alert" with label "LIGHT ONLY" for light-only themes).
- LabelText row: MetaDataText showing data-theme value in a code style (monospace, background var(--fd-colors-background-layer), padding 2px 4px, radius 2px). data-mode info beside it.
- Gradient swatch (if theme has one): a 100% × 16px div with border-radius 2px, the specified gradient as background.
- Font line: MetaDataText "FONT:" + font name (BodyText x-small regular).
- Example prompt: BodyText small italic color var(--fd-colors-content-subtle), prefixed with a small quote icon.
- Gap between internal rows: 6px.

Theme 1 — FanDuel Base:
Name: "FanDuel Base"
data-theme="fanduel" | light or dark
Gradient: linear-gradient(to right, #005FC8, #003D81)
Font: Inter + Roboto Condensed
Example prompt: "fanduel dark account settings page with profile card and notification preferences"

Theme 2 — Sportsbook:
Name: "Sportsbook"
data-theme="sportsbook" | light or dark
Gradient: linear-gradient(to right, #005FC8, #003D81)
Font: Proxima Nova + Roboto Condensed (licensed)
Tag: "LICENSED FONT" intent "alert"
Example prompt: "sportsbook dark bet slip with 3 selections, odds, stake input, and a Place Bet button"

Theme 3 — Casino:
Name: "Casino"
data-theme="casino" | light or dark
Gradient: linear-gradient(to right, #61019B, #005FC8)
Font: Inter + Roboto Condensed
Example prompt: "casino light game tile grid — 6 tiles with game image, name, RTP badge, and Jackpot tag"

Theme 4 — FanDuel Picks:
Name: "FanDuel Picks"
data-theme="picks" | always dark (no data-mode)
Gradient: linear-gradient(to right, #1F1AFE, #183495)
Font: Inter + Roboto Condensed
Always dark tag
Example prompt: "picks leaderboard dark — ranked list with avatars, scores, pick accuracy, and rank badges"

Theme 5 — Fantasy Sports:
Name: "Fantasy Sports"
data-theme="fantasy" | light only
Font: Proxima Nova + Roboto Condensed (licensed)
Light-only tag
Example prompt: "fantasy light lineup card with player name, position label, salary, and projected points"

Theme 6 — Predicts:
Name: "Predicts"
data-theme="predicts" | light only
Gradient: linear-gradient(180deg, #004AAA, #001C55)
Font: Inter + Roboto Condensed
Light-only tag
Example prompt: "predicts light pick card — market question, two answer options as buttons, confidence meter"

Theme 7 — Horse Racing:
Name: "Horse Racing"
data-theme="racing" | light only
Font: Inter + Roboto Condensed
Light-only tag
Example prompt: "racing light race card — race name, distance, going, top 3 runners with odds and jockey names"

Theme 8 — FaceOff:
Name: "FaceOff"
data-theme="faceoff" | light only
Gradient: linear-gradient(to right, #00E5B4, #0070EB)
Font: Inter + Roboto Condensed
Light-only tag
Example prompt: "faceoff light head-to-head card — two players side by side with stats and a Challenge button"

Theme 9 — Poker:
Name: "Poker"
data-theme="poker" | always dark (no data-mode)
Font: Inter + Roboto Condensed
Always dark tag
Note: Poker uses pill-shaped buttons (border-radius 9999px). Primary is red, CTA is teal.
Example prompt: "poker dark lobby — tournament list with buy-in, prize pool, player count, and a Register button"

Theme 10 — Mohegan Sun:
Name: "Mohegan Sun"
data-theme="mohegan-sun" | always dark (no data-mode)
Font: Inter + Roboto Condensed
Always dark tag
Example prompt: "mohegan-sun dark game carousel — featured tiles with game name, category tag, and Play CTA"

Gap below section: var(--fd-space-space-8)

SECTION 5 — Token quick reference
LabelText "SHARED TOKEN PATTERNS" color var(--fd-colors-content-subtle), gap below: var(--fd-space-space-4)
Formation Card, padding var(--fd-space-space-5).
BodyText small color var(--fd-colors-content-subtle) margin-bottom 12px: "These tokens exist in every theme — their resolved values change per BU, but the names are always the same."
A 2-column grid of 8 MetaDataText/BodyText pairs (token name left in code style, description right):
- --fd-colors-background-base | Page canvas background
- --fd-colors-background-surface | Card and panel background
- --fd-colors-background-layer | Elevated or nested background
- --fd-colors-content-default | Primary body text
- --fd-colors-content-subtle | Secondary / muted text
- --fd-colors-product-colors-primary | Brand primary (links, active states)
- --fd-colors-border-default | Component and layout borders
- --fd-colors-component-button-primary-background-base | Primary CTA button background
Gap between rows: 8px
```
