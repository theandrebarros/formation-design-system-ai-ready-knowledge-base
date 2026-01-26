# Casino Theme Extension

Casino-specific theme tokens that extend the core Formation Design System.

## Source

**Figma File**: [Casino Variable Theme](https://www.figma.com/design/yNvR3pYhRX3SSoO2NBSlsK/%F0%9F%9F%A3-Casino-Variable-Theme)

## Overview

The Casino theme provides brand-specific color tokens and styling for the FanDuel Casino product. It extends core Formation tokens with Casino-specific brand colors and UI treatments.

## Brand Colors

### Primary Brand Colors
Casino uses distinctive brand colors that override core Formation tokens:

```
Casino Primary: Custom brand color
Casino Accent: Custom accent color
Casino Highlight: Custom highlight color
```

These are applied to:
- Primary CTAs and actions
- Navigation active states
- Key UI accents
- Brand moments

## Token Overrides

The Casino theme overrides specific Formation core tokens:

### Background Overrides
```
background/branded: Casino-specific branded background
background/accent: Casino accent background for special sections
```

### Content Overrides
```
content/brand: Casino brand color for branded text
content/accent: Casino accent color for emphasis
```

### Component Overrides
Casino provides theme-specific treatments for:
- **Buttons**: Custom brand colors
- **Cards**: Casino-specific card treatments
- **Navigation**: Branded navigation styles
- **Badges**: Casino-specific badge colors

## Usage Guidelines

### When to Use Casino Theme
- Casino product pages and features
- Casino-specific UI components
- Casino marketing materials
- Casino brand moments

### When to Use Core Formation
- Shared cross-product components
- System-level UI (errors, success states)
- Standard form inputs
- Base layout structures

## Implementation

### In Figma
```
1. Enable Casino Variable Theme library
2. Apply theme to frame or component
3. Token overrides apply automatically
4. Use casino-specific tokens where needed
```

### In Code
```jsx
import { casinoTheme } from '@formation/themes/casino';

// Apply Casino theme
<ThemeProvider theme={casinoTheme}>
  <CasinoApp />
</ThemeProvider>
```

## Color Palette

### Light Mode (if applicable)
Casino-specific light mode tokens...

### Dark Mode (default)
Casino-specific dark mode tokens...

## Component Variations

### Casino Buttons
```
Primary: Casino brand color background
Secondary: Casino brand color border/text
Tertiary: Casino brand color text only
```

### Casino Cards
```
Featured Card: Casino accent border
Promotional Card: Casino branded background
Standard Card: Core Formation with Casino accents
```

## Related Documentation

- **[Core Colors](../core/colors.md)** - Base color tokens
- **[Core Components](../core/components.md)** - Component patterns
- **[Other BU Themes](.)** - Other business unit themes

## Notes

For detailed Casino-specific token values, refer to the Figma Variable Theme file. This theme is maintained by the Casino product team in collaboration with the Formation team.

---

**Product**: FanDuel Casino  
**Last Updated**: January 2026  
**Source**: Casino Variable Theme (Figma)
