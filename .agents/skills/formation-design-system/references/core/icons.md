---
source: hand-curated
note: Icon usage guidelines prose
---
# Formation UI Icons — Design Guidelines

> Figma source: UI ICONS LIBRARY — file key `7y5OOtrBTHyJNbzvPp2GDm`
> Guidelines node: `9005:8239`
> Last updated: 2026-03-12

---

## Introduction

Welcome to the Formation Design System icon documentation. We've made these guidelines to help designers create and contribute high-quality icons that integrate seamlessly with our system.

---

## About Formation Icons

Formation icons are vector-based, ensuring they scale perfectly and remain high-quality across all sizes. Here's what makes them work for you:

- **Easy customization:** From simple color swaps to proportional stroke weight adjustments when resizing
- **Organization:** We've organized them by category and tagged them with keywords
- **Simple integration:** Easy to find and integrate into your projects

---

## Icon Sizes

Formation icons ship in five fixed sizes. Always use one of these — never scale icons to arbitrary dimensions.

| Size | Token / Prop | Dimensions | Common Use |
|------|-------------|-----------|-----------|
| S | `size="S"` | 16×16px | Inline text, dense UI, labels |
| M | `size="M"` | 20×20px | Compact components, secondary actions |
| L | `size="L"` | 24×24px | Default UI size, navigation, buttons |
| XL | `size="XL"` | 32×32px | Feature highlights, prominent actions |
| XXL | `size="XXL"` | 48×48px | Hero sections, empty states, illustrations |

---

## Icon Container Component

Formation provides an `<Icon />` component (the **Icon Container**) that wraps any icon from the library and handles sizing and coloring.

**React:** `<Icon />`

### How to use

1. Choose the icon size from the five defaults above
2. Select the icon using the `◇ Icon Instance` swap property in the right panel (Figma) or the `name` prop in code
3. Set the icon color using `--fd-colors-content-default` or any semantic content token — change it via **Selection colors** in Figma's right panel
4. For multi-colored icons (team icons, league logos), enable the `Multi-Colour` boolean property to retain original colors

### Color tokens for icons

| Context | Token | Value (Light) | Value (Dark) |
|---------|-------|--------------|-------------|
| Default | `--fd-colors-content-default` | `#1C1D1D` | `#CED4DB` |
| Strong / Emphasis | `--fd-colors-content-strong` | `#05285A` | `#ffffff` |
| Subtle / Secondary | `--fd-colors-content-subtle` | `#6A6F73` | `#969DA3` |
| On dark backgrounds | `--fd-colors-content-ondark` | `#ffffff` | `#ffffff` |
| Disabled | `--fd-colors-content-disabled` | `#0a0a0a33` | `#ffffff33` |
| Primary brand | `--fd-colors-background-primary` | `#0070EB` | `#0070EB` |

> Never hardcode icon colors. Always use a Formation content token so icons respond correctly to theme and mode changes.

---

## Design Principles

This section walks designers through the step-by-step process of adding a new icon to the Formation UI Icons Library, from initial concept to final submission.

### 01 — Define the purpose

Before drawing anything, answer these questions:

- What is the icon's primary function?
- Who is the target audience?
- Does an existing icon in the library already serve this purpose?

### 02 — Choose clear symbolism

Choose a symbol that's universally recognizable or clearly conveys its function. Avoid overly abstract designs.

**Icons are monochromatic.** A single path color is used across the entire icon — do not introduce multiple fill colors unless the icon is explicitly a multi-color team or league logo.

### 03 — Maintain consistency

Match the line weight, corner radius, and level of detail of the existing Formation icon set. The new icon must blend seamlessly.

- **Stroke weight:** consistent with the existing set at each size
- **Corner radius:** follow the rounded style of adjacent icons — do not use sharp corners where the set uses rounded ones
- **Level of detail:** match the visual complexity of existing icons at the target size

### 04 — Build with basic shapes

Build from foundational shapes (square, circle, rectangle) using paths. Avoid freehand drawing. Anchor points should sit on whole-pixel coordinates wherever possible.

### 05 — Optimize paths

Reduce the number of points in a path and remove any blank containers. Avoid merging paths unless you need control over individual elements.

- Remove redundant anchor points
- Delete empty frames and groups
- Keep the path count as low as possible while preserving the icon's legibility

### 06 — Manage layers

Avoid grouping layers in folders; use a single combined group layer at the end.

- Flatten sub-groups into a single top-level group
- Name the group layer clearly (e.g. `Icons/Category/IconName`)
- Do not nest folders inside the icon frame

### 07 — Design edge-to-edge

For strokes that reach the edge of the frame, disable **Snap to Pixel Grid** and adjust the stroke to half a pixel off the snapped grid position to ensure it reaches the edge precisely.

> **Why:** Figma's pixel grid snapping can cause strokes at the frame boundary to be clipped by half a pixel. Offsetting by 0.5px ensures the stroke visually fills the frame edge.

---

## Figma Source Files

| File | Purpose | Key |
|------|---------|-----|
| UI ICONS LIBRARY | Icon components & guidelines | [7y5OOtrBTHyJNbzvPp2GDm](https://www.figma.com/design/7y5OOtrBTHyJNbzvPp2GDm) |
| CORE COMPONENTS | Component designs & variants | [prQIPGE33uoH1SyxfVTFKT](https://www.figma.com/design/prQIPGE33uoH1SyxfVTFKT) |
| FANDUEL VARIABLE THEME | Color/spacing tokens | [9gJbs4Xti15jTaf3hsgrVS](https://www.figma.com/design/9gJbs4Xti15jTaf3hsgrVS) |
