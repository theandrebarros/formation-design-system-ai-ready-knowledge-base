# Formation Design System — Figma vs Knowledge Base Audit

> Audit date: 2026-03-25
> Scope: 4 core Figma libraries vs `.agents/skills/formation-design-system/references/`
> Method: Figma MCP metadata + variable extraction + direct file reads

---

## TL;DR

The knowledge base has a **solid foundation** across all four Figma libraries, but there are meaningful gaps that would cause an AI tool (Figma Make, Cursor, Lovable, Claude) to produce incorrect or incomplete output. The most critical gap is the **missing icon catalog** — no tool can use Formation icons correctly without knowing what icon names exist. Secondary gaps are a handful of missing Figma node IDs, an undocumented font size (60px), and an unverified token discrepancy.

---

## 1. ⚡ Core Components (`prQIPGE33uoH1SyxfVTFKT`)

### ✅ What's covered

- **36 components tracked** across `components.md` and `figma-components.md`
- All 19 major UI components have full color-state token tables (Button, Tabs, Pill, TextField, Checkbox, RadioButton, Switch, Badge, Tag, Card, Notifications, ProgressBar, Avatar, Loader, Icon)
- **31 out of 36** components have confirmed Figma node IDs with direct links
- Code snippets for most production components
- In-progress and new components (`🔥 Tooltip + Popover`, `🟠 Filters`) are flagged

### ❌ Gaps

| Component | Issue | Priority |
|-----------|-------|----------|
| PillGroup | Figma node ID: TBD | Medium |
| TagGroup | Figma node ID: TBD | Medium |
| Button (Primitive) | Figma node ID: TBD | Low |
| Filters | Figma node ID: TBD + no design specs | High (in progress) |
| Grouped Filter | Figma node ID: TBD + no design specs | High (in progress) |
| Password Field | No node ID, no dedicated spec — listed as "likely TextField variant" | Medium |
| **Pattern: Alerts** | All TBD — no Figma node, no structure doc | High |
| **Pattern: Application Header** | All TBD — no Figma node, no structure doc | High |
| **Pattern: Promotions** | All TBD — no Figma node, no structure doc | High |
| **Icon catalog** | No list of icon names / categories anywhere in the knowledge base | **Critical** |

> **Icon catalog note:** `icons.md` covers design guidelines and sizing but not the actual icons. An AI tool has no way to know valid icon names like `chevron-right`, `trophy`, `dollar-sign`, etc. This needs a dedicated `icon-catalog.md` extracted from the UI Icons Library.

---

## 2. ⚡ Variable Theme (`9gJbs4Xti15jTaf3hsgrVS`)

### ✅ What's covered

- **All 9 Business Unit themes are documented** with dedicated files:
  - `casino.md`, `sportsbook.md`, `fantasy.md`, `picks.md`, `predicts.md`, `racing.md`, `faceoff.md`, `poker.md`, `mohegan-sun.md`
- Each file includes full token override tables vs the FD base theme
- Dark mode overrides documented where applicable (Casino, Sportsbook)
- Theme application instructions (`data-theme`, `data-mode` attributes)

### ⚠️ Gaps / Discrepancies

| Item | Issue | Priority |
|------|-------|----------|
| `fontSize/150` (60px) | Present in Figma variable defs — **not in any knowledge base file** | High |
| `background/transparent` | Figma variable defs show `#FFFFFF`; KB shows `#ffffff00` — needs verification | Medium |
| Variable completeness | Figma MCP returned ~70 variables; the full token set is hundreds. Extraction pipeline may have missed tokens | Medium |
| Component-to-variable mapping | Node `5261-62460` (Components page of Variable Theme) shows how Figma variables map to components — this mapping is not explicitly captured in any reference file | Low |

---

## 3. ⚡ Typography Library (`524jb8ZmEXMGcb63bKQtTv`)

### ✅ What's covered

- Comprehensive `typography.md` with all font families, semantic type scales, and usage guidelines
- Font licensing documented (Inter default for all products; Proxima Nova retained for Sportsbook and Fantasy only via licensed "LICENSED ONLY - SBK, DFS" collection — Typography Library v3.0.0)
- All semantic styles: Jumbo (5 sizes), Heading (6), Body (10), Label (5), Metadata (2), Button (8)
- Font size primitive scale: 8px → 48px
- Responsive breakpoints, accessibility minimums, and component pairing guidelines

### ❌ Gaps

| Item | Issue | Priority |
|------|-------|----------|
| `fontSize/150` = **60px** | Present in Figma variable defs, confirmed missing from typography.md — likely used for large scoreboards or hero displays | High |
| Typography Library Figma pages | Only one node was inspected; the library may contain additional pages (e.g., brand/display type, motion type specs) that aren't covered | Low |

---

## 4. ⚡ UI Icons Library (`7y5OOtrBTHyJNbzvPp2GDm`)

### ✅ What's covered

- Full `icons.md` with all 7 design principles
- Icon sizes (S=16, M=20, L=24, XL=32, XXL=48px) with use cases
- Color token guidance for icons (content tokens, never hardcoded hex)
- Icon Container component reference with variant properties and Figma node IDs

### ❌ Gaps

| Item | Issue | Priority |
|------|-------|----------|
| **Icon name catalog** | **No list of icon names or categories exists anywhere in the knowledge base.** An AI tool cannot reference a valid icon name without this. | **Critical** |
| Icon categories | The library organizes icons by category (arrows, sports, finance, etc.) — these categories are undocumented | High |
| Icon keyword search index | Figma tags icons with keywords for search — not captured in KB | Medium |

---

## Summary Scorecard

| Library | Coverage | Critical Gaps | Status |
|---------|----------|--------------|--------|
| Core Components | 86% (31/36 node IDs confirmed) | Icon catalog absent; 3 Patterns TBD | 🟡 Good but incomplete |
| Variable Theme / BU Themes | 95% (all 9 BUs documented) | 60px font size missing; `transparent` discrepancy | 🟢 Strong |
| Typography Library | 95% | 60px font size missing | 🟢 Strong |
| UI Icons Library | 40% (guidelines only) | **No icon catalog — critical** | 🔴 Major gap |

---

## Recommended Actions (Priority Order)

### 🔴 Critical

1. **Create `icon-catalog.md`** — Extract the full list of icon names and categories from the UI Icons Library Figma file. This is the single highest-impact addition for AI tools. Without it, Figma Make and Cursor cannot correctly reference icons.

### 🟠 High

2. **Add `fontSize/150` (60px)** — Update `typography.md` and `colors.md` (if needed) with the 60px Jumbo-XXL scale step confirmed in the Figma variable defs.

3. **Resolve the 3 Figma-only Patterns** — For Alerts, Application Header, and Promotions: capture the node IDs and document the component structure (which atoms compose the pattern, layout rules).

4. **Document Filters / Grouped Filter** — These are in-progress in Figma. As soon as they stabilize, capture the node IDs and design specs.

### 🟡 Medium

5. **Fill 5 TBD node IDs** — PillGroup, TagGroup, Button (Primitive), Filters, GroupedFilter. Steps: open Figma file, select the variant group frame, read `node-id=X-Y` from URL, update `figma-components.md`.

6. **Verify `background/transparent`** — Check if the `#FFFFFF` shown in Figma variable defs is a Figma display artifact or a real discrepancy vs the `#ffffff00` in the knowledge base.

7. **Password Field spec** — Confirm whether it's a TextField variant in code and document the difference explicitly.

### 🟢 Low

8. **Check Typography Library for additional pages** — Verify that the Figma file doesn't contain brand display or motion type specs not yet captured.

---

## Figma File Registry (confirmed keys)

| Library | Figma Key | Entry Node |
|---------|-----------|-----------|
| Core Components | `prQIPGE33uoH1SyxfVTFKT` | `29684-1267` (Accordion doc) |
| Variable Theme | `9gJbs4Xti15jTaf3hsgrVS` | `5261-62460` (Components) |
| Typography Library | `524jb8ZmEXMGcb63bKQtTv` | `2040-916` |
| UI Icons Library | `7y5OOtrBTHyJNbzvPp2GDm` | `9005-8239` (Guidelines) |
