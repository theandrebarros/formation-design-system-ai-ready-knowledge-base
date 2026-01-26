# Formation Color Tokens

Official color tokens from the FanDuel Variable Theme. Use these tokens for all color values to ensure consistency and design system compliance.

## Source

**Figma File**: [FanDuel Variable Theme](https://www.figma.com/design/9gJbs4Xti15jTaf3hsgrVS/%E2%9A%A1%EF%B8%8F-FANDUEL-VARIABLE-THEME?m=dev)

## All Color Tokens (13 Total)

### Brand Colors

Brand colors for primary actions, links, and brand identity.

| Token | Value | RGB | Usage |
|-------|-------|-----|-------|
| `brand/primary` | #1493FF | rgb(20, 147, 255) | Primary actions, links, brand elements |
| `brand/primaryTint` | #1493FF | rgb(20, 147, 255) | Lighter brand accent |

**When to use:**
- Primary buttons and CTAs
- Active navigation items
- Links and interactive elements
- Brand-forward UI elements

### Background Colors

Background colors for surfaces and layers.

| Token | Value | RGB | Usage |
|-------|-------|-----|-------|
| `background/base` | #0A0A0A | rgb(10, 10, 10) | Page/app background (darkest) |
| `background/surface` | #141414 | rgb(20, 20, 20) | Cards, panels, elevated surfaces |

**When to use:**
- `background/base`: Main app background, full-page backgrounds
- `background/surface`: Cards, modals, panels, elevated UI components

### Content Colors

Text and content colors for different emphasis levels.

| Token | Value | RGB | Usage |
|-------|-------|-----|-------|
| `content/default` | #FFFFFF | rgb(255, 255, 255) | Primary text, default content |
| `content/subtle` | #949494 | rgb(148, 148, 148) | Secondary text, metadata, labels |
| `content/onDark` | #FFFFFF | rgb(255, 255, 255) | Text on dark/colored backgrounds |

**When to use:**
- `content/default`: Body text, headings, primary content
- `content/subtle`: Captions, metadata, secondary information
- `content/onDark`: Text over colored buttons or dark surfaces

### System Colors

Status and feedback colors for user interface states.

| Token | Value | RGB | Usage |
|-------|-------|-----|-------|
| `system/positive` | #00C853 | rgb(0, 200, 83) | Success states, confirmations |
| `system/alert` | #FF3B30 | rgb(255, 59, 48) | Errors, critical alerts, destructive actions |
| `system/warning` | #FF9500 | rgb(255, 149, 0) | Warnings, cautions |

**When to use:**
- `system/positive`: Success messages, confirmed states, positive feedback
- `system/alert`: Error messages, failed states, destructive actions (delete, remove)
- `system/warning`: Warning messages, cautionary states, attention needed

### Border Colors

Border and divider colors.

| Token | Value | RGB | Usage |
|-------|-------|-----|-------|
| `border/default` | #333333 | rgb(51, 51, 51) | Default borders, dividers |
| `border/subtle` | #1F1F1F | rgb(31, 31, 31) | Subtle dividers, section separators |

**When to use:**
- `border/default`: Input borders, card outlines, visible separators
- `border/subtle`: Subtle section dividers, low-emphasis borders

## Usage Examples

### In Figma
```
Select element → Set fill to variable → Choose token
Example: button fill → brand/primary
```

### In Code (React + Formation)
```jsx
import { tokens } from '@formation/variable-theme';

// Using tokens directly
<Button style={{ background: tokens.brand.primary }} />

// Using Formation components (tokens applied automatically)
<Button variant="primary">Primary Action</Button>
```

### Common Patterns

**Primary Button:**
- Background: `brand/primary`
- Text: `content/onDark`
- Border: none

**Card:**
- Background: `background/surface`
- Border: `border/subtle`
- Text: `content/default`

**Success Message:**
- Background: `system/positive` (with opacity)
- Text: `system/positive`
- Icon: `system/positive`

**Error Message:**
- Background: `system/alert` (with opacity)
- Text: `system/alert`
- Icon: `system/alert`

## Accessibility

All Formation color tokens meet WCAG AA accessibility standards for their intended uses:

- **Content colors on backgrounds**: 4.5:1 minimum contrast ratio
- **System colors**: High contrast for visibility
- **Brand colors**: Tested for colorblind accessibility

**Important:**
- Always use `content/onDark` for text on colored backgrounds
- Don't rely solely on color to convey information
- Test custom color combinations for sufficient contrast

## Design System Compliance

### Do ✅
- Use Formation color tokens for all color values
- Reference tokens by name, not hex values
- Follow usage guidelines for each token category
- Test designs in both light and dark modes (when applicable)

### Don't ❌
- Hardcode hex values directly
- Create custom colors outside the design system
- Use brand colors for error states
- Use system colors for brand elements

## Quick Reference for Common Use Cases

| Use Case | Token |
|----------|-------|
| Primary button background | `brand/primary` |
| Primary button text | `content/onDark` |
| Body text | `content/default` |
| Secondary text/labels | `content/subtle` |
| Card background | `background/surface` |
| Page background | `background/base` |
| Success indicator | `system/positive` |
| Error indicator | `system/alert` |
| Warning indicator | `system/warning` |
| Input border | `border/default` |
| Section divider | `border/subtle` |

## Related Documentation

- **[Spacing Tokens](spacing.md)** - For consistent spacing and layout
- **[Typography](typography.md)** - For text styling that pairs with colors
- **[Components](components.md)** - For component-level color usage
- **[Validation Rules](../validation-rules.md)** - For checking color compliance

## Updating Colors

Colors should only be updated in the official Figma Variable Theme file. Changes propagate to:
1. Design files using Formation variables
2. Code via Formation token libraries
3. This documentation (manually update when Figma changes)

**Contact**: Formation Design System team for token additions or modifications

---

**Token Count**: 13 color tokens  
**Last Updated**: January 2026  
**Source**: FanDuel Variable Theme (Figma)
