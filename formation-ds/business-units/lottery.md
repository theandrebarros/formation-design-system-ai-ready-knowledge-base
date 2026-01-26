# Lottery Theme Extension

Lottery-specific theme tokens that extend the core Formation Design System.

## Source

**Figma File**: [Lotto Shop Theme Extension](https://www.figma.com/design/e1P86bukeNV2mIHRY5Eu57/Lotto-Shop-Theme-Extension)

## Overview

The Lottery theme provides brand-specific color tokens and styling for FanDuel Lottery products. It balances traditional lottery aesthetics with modern digital experience patterns.

## Brand Colors

```
Lottery Primary: Lottery brand color
Lottery Accent: Lottery accent colors
Lottery Jackpot: Jackpot/prize highlight colors
```

## Token Overrides

### Background Overrides
```
background/ticket: Lottery ticket background
background/draw: Draw display background
background/jackpot: Jackpot highlight background
```

### Content Overrides
```
content/brand: Lottery brand color
content/numbers: Number selection colors
content/jackpot: Jackpot amount color
content/prize: Prize tier colors
```

### Component Overrides
- **Ticket Displays**: Digital lottery ticket designs
- **Number Selectors**: Number picking interfaces
- **Draw Results**: Drawing result displays
- **Prize Displays**: Prize tier and amount displays

## Lottery-Specific Components

### Ticket Display
```
Background: Ticket-style background
Numbers: Selected number displays
Date: Draw date/time
Cost: Ticket cost display
```

### Number Selector
```
Grid: Number selection grid
Selected: Selected number indication
Quick Pick: Auto-select numbers
Clear: Clear selections
```

### Draw Results
```
Winning Numbers: Drawn numbers display
Match: Matched numbers indication
Prize Tier: Prize tier achieved
Amount Won: Prize amount display
```

## Usage Guidelines

### When to Use Lottery Theme
- Lottery product pages
- Ticket purchase interface
- Number selection
- Results and winnings display

### When to Use Core Formation
- Account management
- Navigation
- System messages
- Shared components

## Implementation

### In Figma
```
1. Enable Lottery Shop Theme Extension library
2. Apply theme to Lottery frames
3. Use lottery-specific tokens
4. Core tokens for standard elements
```

### In Code
```jsx
import { lotteryTheme } from '@formation/themes/lottery';

<ThemeProvider theme={lotteryTheme}>
  <LotteryApp />
</ThemeProvider>
```

## Color Palette

### Ticket States
```
Draft: Unsaved ticket
Saved: Saved but not purchased
Purchased: Active ticket
Expired: Past draw date
```

### Result States
```
No Win: No numbers matched
Minor Win: Lower tier prize
Major Win: Significant prize
Jackpot: Jackpot winner
```

## Component Variations

### Lottery Buttons
```
Quick Pick: Auto-number selection
Clear Numbers: Clear selections
Buy Ticket: Purchase ticket
Check Results: View results
```

### Number Display Formats
```
Ball Style: Traditional lottery ball design
Grid Style: Modern grid display
List Style: Number list format
```

## Lottery-Specific Patterns

### Number Selection
```
Grid Layout: Clickable number grid
Selection Limit: Max numbers per ticket
Required Numbers: Minimum selection
Bonus Numbers: Bonus/power ball selection
```

### Jackpot Display
```
Large Emphasis: Prominent jackpot amount
Progressive: Growing jackpot indicator
Countdown: Draw countdown timer
```

### Prize Tiers
```
Jackpot: Top prize tier
Major: High-value prizes
Minor: Mid-value prizes
Base: Entry-level prizes
```

## Accessibility

Lottery theme ensures clarity for number selection:
- **Large Touch Targets**: Easy number selection
- **Clear States**: Selected vs unselected
- **Color + Pattern**: Not relying on color alone
- **Result Clarity**: Clear win/no-win indication

## Related Documentation

- **[Core Colors](../core/colors.md)** - Base color tokens
- **[Core Components](../core/components.md)** - Component patterns
- **[Other BU Themes](.)** - Other business unit themes

## Notes

Lottery theme balances familiar lottery conventions (balls, tickets) with modern digital UX. Optimized for easy number selection and clear result communication.

---

**Product**: FanDuel Lottery  
**Last Updated**: January 2026  
**Source**: Lotto Shop Theme Extension (Figma)
