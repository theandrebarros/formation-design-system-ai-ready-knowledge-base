# Racing Theme Extension

Racing-specific theme tokens that extend the core Formation Design System.

## Source

**Figma File**: [Racing Theme Extension](https://www.figma.com/design/NNkWJaRTcHtQH0dOHrgTjC/Predicts-Theme-Extension)
*Note: Verify correct Figma URL - may be shared with Predicts*

## Overview

The Racing theme provides brand-specific color tokens and styling for FanDuel Racing (horse and harness racing product). It emphasizes traditional racing aesthetics with modern UI patterns.

## Brand Colors

```
Racing Primary: Racing brand color
Racing Track: Track/venue related colors
Racing Silks: Jockey silk color treatments
```

## Token Overrides

### Background Overrides
```
background/race-card: Race card background
background/runner: Individual runner/horse background
background/bet-slip: Racing bet slip background
```

### Content Overrides
```
content/brand: Racing brand color
content/favorite: Favorite runner indication
content/odds: Racing odds display
content/result: Race result indication
```

### Component Overrides
- **Race Cards**: Race information displays
- **Runner Cards**: Individual horse/runner displays
- **Bet Types**: Racing-specific bet type displays
- **Results**: Race result displays

## Racing-Specific Components

### Race Card
```
Race Number: Race number display
Track: Track/venue name
Post Time: Race start time
Distance: Race distance
Surface: Track surface type
```

### Runner Display
```
Number: Runner/post position number
Name: Horse name
Jockey: Jockey name
Odds: Current odds display
Form: Recent form indicator
```

### Bet Types
```
Win: Win bet
Place: Place bet
Show: Show bet
Exacta, Trifecta, etc.: Exotic bet types
```

## Usage Guidelines

### When to Use Racing Theme
- Racing product pages
- Race browsing and selection
- Racing bet placement
- Results and replays

### When to Use Core Formation
- Standard account features
- Navigation
- System messages
- Shared components

## Implementation

### In Figma
```
1. Enable Racing Theme Extension library
2. Apply theme to Racing frames
3. Use racing-specific tokens
4. Core tokens for standard elements
```

### In Code
```jsx
import { racingTheme } from '@formation/themes/racing';

<ThemeProvider theme={racingTheme}>
  <RacingApp />
</ThemeProvider>
```

## Color Palette

### Race States
```
Upcoming: Scheduled race
Live: Race in progress
Final: Race completed
Results Official: Official results posted
```

### Runner States
```
Active: Available for betting
Scratched: Withdrawn from race
Winner: Race winner
Placed: Placed (2nd/3rd)
```

## Component Variations

### Racing Buttons
```
Place Bet: Racing bet placement
Quick Bet: Fast bet placement
Watch Live: Live race viewing
View Results: Results display
```

### Race Display Formats
```
List View: Compact race list
Card View: Detailed race cards
Featured Race: Promoted race display
```

## Racing-Specific Patterns

### Odds Display
```
Win Odds: Win betting odds
Place Odds: Place betting odds
Show Odds: Show betting odds
Fractional/Decimal: Odds format options
```

### Form Indicators
```
Recent Finishes: 1-2-3 position history
Win Percentage: Win rate indicator
Earnings: Career/recent earnings
```

## Related Documentation

- **[Core Colors](../core/colors.md)** - Base color tokens
- **[Core Components](../core/components.md)** - Component patterns
- **[Other BU Themes](.)** - Other business unit themes

## Notes

Racing theme balances traditional racing industry conventions with modern FanDuel design patterns. For detailed token values, refer to the Figma Theme file.

---

**Product**: FanDuel Racing  
**Last Updated**: January 2026  
**Source**: Racing Theme Extension (Figma)
