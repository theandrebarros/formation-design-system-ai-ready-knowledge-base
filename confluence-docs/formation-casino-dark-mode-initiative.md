# Formation x Casino — Dark Mode Initiative

> **Draft — verification report before Casino sync.** This document summarises current Formation tokens, Figma sources, and Jira context. It is not an approved design specification.

**Parent:** [Formation Cross-team Initiatives](https://fanduel.atlassian.net/wiki/spaces/FOR/pages/310246802955/Formation+Cross-team+Initiatives)

**Confluence (draft):** [Formation x Casino — Dark Mode Initiative](https://fanduel.atlassian.net/wiki/x/V4Cpgkg) (page id `311429791831` — use **Publish** when ready).

**Colour matrix (draft child page, MCP-safe size):** [Formation x Casino — iPhone colour matrix (Figma 5127:23421)](https://fanduel.atlassian.net/wiki/x/0YCsgkg) (page id `311429988561` — compact table; full tables in this repo file).

If Atlassian MCP **freezes** updating the long main draft, use [confluence-docs/SYNC-CASINO-CONFLUENCE.md](SYNC-CASINO-CONFLUENCE.md): paste from [`_matrix_only_for_confluence.md`](_matrix_only_for_confluence.md) or this full file into Confluence manually.

**Related:** [Dark Mode Initiative 2025 - Summary and Next Steps](https://fanduel.atlassian.net/wiki/spaces/FOR/pages/310810346352/Dark+Mode+Initiative+2025+-+Summary+and+Next+Steps)

**Formation knowledge base:** Formation Design System AI-Ready Knowledge Base — `.agents/skills/formation-design-system/references/` (tokens from `@fanduel/formation-tokens` v1.6.0, last updated 2026-02-18).

---

## Purpose

Verify the current state of **Casino dark mode** vs **FanDuel base dark** and **Sportsbook dark** before conversations with the Casino team. No token or code changes are implied by this report — only alignment and open questions.

---

## Jira context

### [FOR-37](https://fanduel.atlassian.net/browse/FOR-37) — Casino dark theme updates

- **Type:** General request | **Status:** In Progress | **Sprint:** Q2 April - Formation 2026
- **Reporter:** Stewart Bradford | **Assignee:** Andre Barros
- **Parent:** UXDFORM-768 (Key Projects Engagement and Support Framework)

**Request (summary):** Casino dark exists in Figma and likely in theme packages; colours may need updates because the theme is currently **generic**; apply **tiger team** learnings. Formation support requested for sense-checking, feedback, and help updating Figma and engineering theme packages.

**Linked story:** [UXDFORM-790](https://fanduel.atlassian.net/browse/UXDFORM-790)

### [UXDFORM-790](https://fanduel.atlassian.net/browse/UXDFORM-790) — [CASINO] Dark Theme refinement and updates

- **Type:** Story | **Status:** To Do

**Formation role (in scope):** Sense-check token values; feedback on approach; assist Figma library updates; support engineering alignment; keep consistency with Design System patterns.

**Out of scope:** Owning primary design decisions; full Casino rollout; net-new dark-only components; production QA.

**Casino contacts:** Stewart Bradford, Mallory Robbins

---

## How Formation models dark mode

- **FanDuel base:** default theme; **dark** = `data-mode="dark"` (not a separate `data-theme`).
- **Casino / Sportsbook:** `data-theme="casino"` or `data-theme="sportsbook"` **plus** `data-mode="dark"`.
- **Typography:** Casino uses **Inter** (same as FD base). Sportsbook uses **Proxima Nova** (licensed exception with Fantasy).

---

## Theme shape overview

| Topic | FanDuel base | Sportsbook | Casino (Formation v1.6.0) | Casino target (from Jira / Figma) |
|--------|--------------|------------|-----------------------------|-----------------------------------|
| Primary UI font | Inter | Proxima Nova | Inter | Inter |
| Dark mode | Yes | Yes | Yes | Refinement expected (FOR-37) |
| Overrides vs FD **light** | 0 | 19 | 5 | Pending Casino proposals |
| Dark override volume (docs) | Full semantic set | Large BU dark layer (~187+ rows after excerpt) | Large BU dark layer (~191+ rows after excerpt) | Apply tiger team learnings |
| Brand (light) | FD greys / blues | Link + tab navy shift | White base; gradient **#61019B → #005FC8** | Same intent in Figma |
| Brand (dark) | FD dark neutrals | Shared dark stack | **Same generic stack as FD dark** in practice | Casino-specific tuning TBD |

---

## FanDuel base dark — key semantics (documentation)

Canonical CSS variables (FD Dark column) from Formation colour reference:

| Role | Token | FD Dark (hex) |
|------|--------|---------------|
| Page background | `--fd-colors-background-base` | `#0a0a0a` |
| Cards / sheets | `--fd-colors-background-surface` | `#1C1D1D` |
| Nested layer | `--fd-colors-background-layer` | `#2B2D2E` |
| Body text | `--fd-colors-content-default` | `#CED4DB` |
| Emphasis | `--fd-colors-content-strong` | `#ffffff` |
| Secondary text | `--fd-colors-content-subtle` | `#969DA3` |
| Border | `--fd-colors-border-default` | `#6A6F73` |
| Active border | `--fd-colors-border-active` | `#64AEFF` |
| Brand gradient | start / end | `#005FC8` / `#003D81` (no separate dark variant in platform rules) |

**Figma Variable Theme** ([FanDuel Variable Theme](https://www.figma.com/design/9gJbs4Xti15jTaf3hsgrVS), node `5902:27518`): sampled variables for dark mode align with the above pattern (e.g. `background/hover` `#3c3e40`, `content/link` `#64aeff`, pill/selection-control blues for dark UI).

---

## Casino light — deltas vs FD light (5 overrides)

| Token | FD Light | Casino Light |
|-------|----------|----------------|
| Theme name | Fanduel Light | Casino Light |
| `--fd-colors-background-base` | `#EAF0F6` | `#ffffff` |
| `--fd-colors-background-secondary` | `#184C8B` | `#0a0a0a` |
| `--fd-colors-brand-gradient-color-stops-start` | `#005FC8` | `#61019B` |
| `--fd-colors-brand-gradient-color-stops-end` | `#003D81` | `#005FC8` |

---

## Sportsbook vs Casino dark (Formation docs excerpt)

For **Pill**, **Selection control**, and related component tokens shown in the generated `sportsbook.md` and `casino.md` dark tables, **values match** between Sportsbook Dark and Casino Dark (e.g. pill selected `#64AEFF`, selection hover `#002650`). Full spreadsheets are truncated in markdown (“187 more” / “191 more” rows) — treat **`@fanduel/formation-tokens` CSS** as source of truth for a complete diff.

**Implication:** Casino **dark** today inherits the **same generic dark component layer** as Sportsbook for those tokens; differentiation is mainly **light** branding (white canvas + purple gradient) plus **typography**, not a separate Casino dark palette in the published excerpt.

---

## Casino iPhone Dark Mode Library (Figma)

- **File:** [iPhone — DARK MODE LIBRARY](https://www.figma.com/design/pD3woLOeqEwCQoLRoPJdOj/iPhone--DARK-MODE-LIBRARY-?node-id=5127-23421) — section **THEMED** (`5127:23421`), which contains annotated Casino screens with resolved colour token chips.
- **Previously cited node** `4758:21412` ("Depth example") is a separate child frame in the same file; the link you shared (`5127:23421`) is the broader THEMED screens section.
- **Content:** Multiple iPhone Casino dark screens with `Color` annotation components identifying exactly which Formation semantic token is applied to each UI role.

> **Important context:** All annotations in node `5127:23421` are **Casino light mode** resolved values (the annotation chip background is `#EA6875` which is the library's "flagged / needs review" state — values are light Casino). These document how Casino **currently** uses Formation semantics on a white canvas, not the dark target. They are the **baseline** from which dark overrides will be designed.

**Extensions in Figma (not in core Formation token list):** `themeExtension/component/gameLabel/*` (exclusive, new, jackpot) — observed in an earlier frame audit. **Governance open:** product-only vs Formation token package vs shared BU pattern.

---

## Casino iPhone THEMED section — resolved colour annotations (node `5127:23421`)

> **Source:** Figma MCP extraction from file `pD3woLOeqEwCQoLRoPJdOj`, section `5127:23421`, inspected 2026-04-16. Values are resolved at inspect time. Annotations show **Casino light** mode (white base). "Status" in the table is the alignment verdict between what the Figma file uses and the Formation token documentation.

| UI role (Figma annotation label) | Figma token name | Resolved hex (light) | Formation CSS variable | Formation Casino Light | Formation FD Dark | Status |
|-----------------------------------|-----------------|---------------------|------------------------|------------------------|-------------------|--------|
| Background (page) | `background.base` | `#FFFFFF` | `--fd-colors-background-base` | `#FFFFFF` ✓ | `#0A0A0A` | **Aligned** — Casino overrides FD light grey to white |
| Background (card / surface) | `background.surface` | `#FFFFFF` | `--fd-colors-background-surface` | `#FFFFFF` ✓ | `#1C1D1D` | **Aligned** |
| Background (footer / nested layer) | `background.layer` | `#F6F6F6` | `--fd-colors-background-layer` | `#F7FBFF` (FD light) | `#2B2D2E` | **⚠ Gap — `#F6F6F6` vs `#F7FBFF`** — Casino Figma uses a neutral grey; Formation uses a blue-tinted white. Needs explicit Casino override token or formal drift acceptance. |
| Active background | `background.active` | `#0070EB` | `--fd-colors-background-active` | `#0070EB` ✓ | `#0070EB` | **Aligned** |
| Background secondary (nav / dark bar) | `background.secondary` | `#0A0A0A` | `--fd-colors-background-secondary` | `#0A0A0A` ✓ | `#0A0A0A` | **Aligned** — Casino overrides from FD navy `#184C8B` to `#0A0A0A` |
| Lobby titles / most body text | `content.default` | `#1C1D1D` | `--fd-colors-content-default` | `#1C1D1D` ✓ | `#CED4DB` | **Aligned** |
| Game title | `content.default` | `#1C1D1D` | `--fd-colors-content-default` | `#1C1D1D` ✓ | `#CED4DB` | **Aligned** |
| Text and icons (general) | `content.default` | `#1C1D1D` | `--fd-colors-content-default` | `#1C1D1D` ✓ | `#CED4DB` | **Aligned** |
| Metadata | `content.subtle` | `#6A6F73` | `--fd-colors-content-subtle` | `#6A6F73` ✓ | `#969DA3` | **Aligned** |
| Footer links text and icons | `content.subtle` | `#6A6F73` | `--fd-colors-content-subtle` | `#6A6F73` ✓ | `#969DA3` | **Aligned** |
| Active text colour | `content.onDark` | `#FFFFFF` | `--fd-colors-content-on-dark` | `#FFFFFF` ✓ | `#FFFFFF` | **Aligned** |
| Inactive text colour (nav links) | `content.link` | `#0070EB` | `--fd-colors-content-link` | `#0070EB` ✓ | `#64AEFF` | **Aligned** (light). Dark target = `#64AEFF` per Formation — verify Casino intends same. |
| Active tab | `content.link` | `#0070EB` | `--fd-colors-content-link` | `#0070EB` ✓ | `#64AEFF` | **Aligned** |
| Divider | `border.default` | `#B0B7BF` | `--fd-colors-border-default` | `#B0B7BF` ✓ | `#6A6F73` | **Aligned** |
| Border (game tile, subtle) | `border.subtle` | `#C6D3E1` | `--fd-colors-border-subtle` | `#C6D3E1` ✓ | `#4D5153` | **Aligned** |
| Game art border | `core.whiteTint030 → core.whiteTint020` (gradient) | n/a — core palette gradient | No direct `--fd-*` equivalent | — | — | **⚠ Non-Formation token** — uses raw core tints, not a semantic variable. Governance needed. |
| Top 10 number gradients | `linear gradient, left to right` | resolves to `content/default` swatch `#1C1D1D` | `--fd-colors-content-default` | `#1C1D1D` | `#CED4DB` | **Aligned for light** — gradient treatment for dark TBD with Casino. |

### What these annotations tell us

- The team has **correctly wired** the majority of Casino UI to Formation semantic tokens: content, backgrounds, borders, and link colours all match the Casino light overrides as documented in `casino.md`.
- The single confirmed value gap is **`background/layer`**: `#F6F6F6` (Figma) vs `#F7FBFF` (Formation). This is a 1-step hue shift from blue-tinted white to pure neutral grey. Whether intentional or drift, it needs a decision before the dark pass — because the dark equivalent (`#2B2D2E`) should be calibrated against the agreed light value.
- Two items use **non-semantic tokens** (`core.whiteTint030/020` gradient, and a raw linear gradient for numbering). These require governance: either promote to Formation extension tokens or keep as Casino-local values with documented rationale.
- `content.link` (`#0070EB` light → `#64AEFF` dark) is used for both **inactive nav** and **active tab** state in light; verify that the dark counterpart assignments are consistent with Formation's intent (link vs active state).

---

## Dark mode target values (for discussion — not yet in Formation)

The annotations above are **light mode**. The dark equivalents that Formation would provide (from `colors.md` and `casino.md` documentation) are:

| Semantic role | Casino Light (Figma) | FD Dark (Formation) | Casino Dark note |
|---------------|---------------------|---------------------|-----------------|
| `background/base` | `#FFFFFF` | `#0A0A0A` | Casino dark likely targets same — but visual identity is in gradient, not base |
| `background/surface` | `#FFFFFF` | `#1C1D1D` | Shared generic dark — **no Casino-specific override documented** |
| `background/layer` | `#F6F6F6` ⚠ | `#2B2D2E` | The light gap compounds here — if Casino wants neutral grey in light, what is the dark equivalent? |
| `background/secondary` | `#0A0A0A` | `#0A0A0A` | No change needed in dark |
| `content/default` | `#1C1D1D` | `#CED4DB` | Shared dark |
| `content/subtle` | `#6A6F73` | `#969DA3` | Shared dark |
| `content/link` | `#0070EB` | `#64AEFF` | Shared dark |
| `border/default` | `#B0B7BF` | `#6A6F73` | Shared dark |
| `border/subtle` | `#C6D3E1` | `#4D5153` | Shared dark |
| Brand gradient | `#61019B → #005FC8` | `#005FC8 → #003D81` (FD) | **⚠ Purple gradient does not carry to dark** — Casino-specific dark gradient is the main open design question |

---

## Pain points (for discussion with Casino)

1. **Generic dark:** Casino dark matches FD generic dark for the documented component slice; the purple Casino brand gradient (`#61019B → #005FC8`) does **not** carry into dark mode — this is the biggest identity gap and the primary design question for FOR-37.
2. **`background/layer` drift:** `#F6F6F6` (Casino Figma) vs `#F7FBFF` (Formation FD light) — a 1-step hue shift from blue-tinted to pure neutral grey. Whether intentional or drift, it should be formalised as a Casino override in `formation-tokens` if kept, or corrected in Figma if unintended. The dark equivalent (`#2B2D2E`) should be validated against the agreed light value.
3. **Non-semantic core tokens in use:** Game art border uses raw core palette gradients (`core.whiteTint030 → core.whiteTint020`) rather than a Formation semantic variable. Top-10 number gradients are similarly undocumented as Formation tokens. These need governance resolution.
4. **`content.link` dual usage:** The same `content/link` token (`#0070EB` light, `#64AEFF` dark) is annotated for both **inactive nav** and **active tab** state. If the intent differs (link vs selected), a separate Formation token should be used — or Casino should confirm they are intentionally the same.
5. **Truncated BU token tables:** The `casino.md` dark table shows "191 more tokens" — full parity checks require the `@fanduel/formation-tokens` CSS, not the markdown excerpt alone.
6. **Contrast (metadata):** `content/subtle` (`#6A6F73` light, `#969DA3` dark) on surface/layer backgrounds — watch WCAG AA for small game metadata text. Dense Casino game UIs stress this token more than other verticals.
7. **Handoff artefact:** UXDFORM-790 assumes Casino supplies token decisions. Agree on a **single source of truth** (variable export from [FanDuel Variable Theme](https://www.figma.com/design/9gJbs4Xti15jTaf3hsgrVS) vs iPhone library) before any engineering work begins to prevent split-brain.

---

## Suggested next steps (pre–Casino meeting)

1. Walk through [Dark Mode Initiative 2025 - Summary and Next Steps](https://fanduel.atlassian.net/wiki/spaces/FOR/pages/310810346352/Dark+Mode+Initiative+2025+-+Summary+and+Next+Steps) with Casino — layering, shadows, cross-vertical alignment.
2. Ask for a **token delta list**: semantic role → current value → proposed value → rationale (especially surfaces, gradient, game labels).
3. Confirm **single source of truth** for edits: [FanDuel Variable Theme](https://www.figma.com/design/9gJbs4Xti15jTaf3hsgrVS) vs iPhone library — avoid split-brain.
4. After agreement, schedule **`formation-tokens`** bump + doc refresh (`refresh-formation-tokens` skill in the Formation Design System AI-Ready Knowledge Base).

---

## Conceptual layering (text)

- **FD base:** Light semantics → Dark semantics (`data-mode="dark"`).
- **Sportsbook:** FD light + 19 light overrides → dark + large component dark layer.
- **Casino:** FD light + 5 light overrides → dark + large component dark layer (**currently same generic dark behaviour** as excerpt shows for SB).
- **Target:** Casino-specific dark refinements driven by Casino design + tiger team principles → tracked in FOR-37 / UXDFORM-790.

---

## Summary

**Casino dark in Formation v1.6.0 behaves like the shared FanDuel dark stack** for the documented component overrides, with Casino’s identity expressed mainly in **light** tokens (white base, purple–blue gradient). Stewart’s FOR-37 note that dark is the **“generic theme”** matches this verification. Formation’s role per **UXDFORM-790** is partnership and implementation support, not owning Casino’s colour decisions. Use this page as the **pre-sync fact base**; promote from draft after Casino review.

---

_Last updated 2026-04-16. Source: Formation Design System AI-Ready Knowledge Base analysis + Atlassian/Figma MCP reads. Formation token package v1.6.0. Figma annotations extracted from [iPhone DARK MODE LIBRARY, node 5127:23421](https://www.figma.com/design/pD3woLOeqEwCQoLRoPJdOj/iPhone--DARK-MODE-LIBRARY-?node-id=5127-23421). Values resolved at inspect time._
