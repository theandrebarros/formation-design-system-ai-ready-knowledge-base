# Sportsbook Theme Extension

Sportsbook-specific theme tokens that extend the core Formation Design System.

## Source

**Figma File**: [Sportsbook Theme Extension](https://www.figma.com/design/DYIB18bksdl3DwHwBktUL7/%F0%9F%94%B5-Sportsbook-Theme-Extension)

## Overview

The Sportsbook theme provides brand-specific color tokens and styling for the FanDuel Sportsbook product. As the flagship FanDuel product, Sportsbook maintains close alignment with core Formation tokens while adding sport-specific enhancements.

## Brand Colors

### Primary Brand Colors
Sportsbook uses the core FanDuel brand with specific extensions:

```
Sportsbook Primary: Aligned with core brand/primary
Sportsbook Accent: Sport-specific accent colors
Sportsbook Live: Live betting indicator colors
```

## Token Overrides

### Background Overrides
```
background/live: Live betting background treatment
background/featured: Featured game/event backgrounds
background/odds: Odds display background
```

### Content Overrides
```
content/live: Live betting text color
content/odds: Odds display text color
content/favorite: Favorite/bookmarked item color
```

### Component Overrides
Sportsbook provides theme-specific treatments for:
- **Bet Slip**: Custom bet slip styling
- **Odds Display**: Odds-specific typography and colors
- **Live Indicators**: Live betting indicators
- **Event Cards**: Sport event card treatments

## Sportsbook-Specific Components

### Odds Display
```
Background: Specialized odds background
Text: High contrast for quick scanning
Size: Optimized for readability at small sizes
```

### Bet Slip
```
Background: Distinct from main app background
Accent: Clear action colors for bet placement
Border: Strong visual separation
```

### Live Betting Indicators
```
Color: High visibility live indicator
Animation: Subtle pulse or glow effect
Icon: Live indicator icon
```

## Usage Guidelines

### When to Use Sportsbook Theme
- Sportsbook product pages
- Betting interfaces
- Sports event displays
- Sportsbook-specific features

### When to Use Core Formation
- Shared navigation
- System messages
- Standard forms
- Base layouts

## Implementation

### In Figma
```
1. Enable Sportsbook Theme Extension library
2. Apply theme to Sportsbook frames
3. Use sportsbook-specific tokens for betting UI
4. Core tokens for standard components
```

### In Code
```jsx
import { sportsbookTheme } from '@formation/themes/sportsbook';

<ThemeProvider theme={sportsbookTheme}>
  <SportsbookApp />
</ThemeProvider>
```

## Color Palette

### Betting States
```
Available: Standard interaction colors
Selected: Clear selection indication
Placed: Confirmed bet indication
Won: Success/positive color
Lost: Neutral indication (not error red)
Pending: In-progress indication
```

### Live vs Pre-match
```
Live: Distinct live event styling
Pre-match: Standard event styling
Starting Soon: Transition state styling
```

## Component Variations

### Sportsbook Buttons
```
Place Bet: High visibility CTA
Quick Bet: Streamlined bet placement
Odds Button: Odds selection button
```

### Event Cards
```
Live Event: Live indicator + styling
Featured Event: Promotional treatment
Standard Event: Clean event display
```

## Responsive Considerations

Sportsbook interfaces are heavily used on mobile:
- **Touch Targets**: Minimum 48×48px for bet selections
- **Odds Sizing**: Larger for easy tapping
- **Bet Slip**: Sticky positioning on mobile

## Related Documentation

- **[Core Colors](../core/colors.md)** - Base color tokens
- **[Core Components](../core/components.md)** - Component patterns
- **[Other BU Themes](.)** - Other business unit themes

## Notes

Sportsbook theme is the most widely used BU theme and maintains close alignment with core Formation. For detailed token values, refer to the Figma Theme Extension file.

---

**Product**: FanDuel Sportsbook  
**Last Updated**: January 2026  
**Source**: Sportsbook Theme Extension (Figma)
