# Fantasy Theme Extension

Fantasy-specific theme tokens that extend the core Formation Design System.

## Source

**Figma File**: [Fantasy Theme (Via Template)](https://www.figma.com/design/dTZVaPCzjDwEiNauO2jIFz/Fantasy-Theme--Via-Template-)

## Overview

The Fantasy theme provides brand-specific color tokens and styling for FanDuel Fantasy products including Daily Fantasy Sports (DFS). It extends core Formation tokens with fantasy-specific colors and treatments.

## Brand Colors

Fantasy uses distinctive brand colors that differentiate it from Sportsbook:

```
Fantasy Primary: Custom fantasy brand color
Fantasy Accent: Fantasy-specific accent
Fantasy Success: Contest entry success color
```

## Token Overrides

### Background Overrides
```
background/contest: Contest card backgrounds
background/entry: Entry form backgrounds
background/live: Live contest backgrounds
```

### Content Overrides
```
content/brand: Fantasy brand color
content/salary: Salary cap display color
content/points: Points display color
```

### Component Overrides
Fantasy provides theme-specific treatments for:
- **Player Cards**: Unique player selection cards
- **Contest Cards**: Contest entry displays
- **Lineup Builder**: Lineup construction interface
- **Salary Display**: Salary cap indicators

## Fantasy-Specific Components

### Player Cards
```
Background: Player card background
Salary: Salary display styling
Points: Projected/actual points styling
Position: Position indicator colors
```

### Lineup Builder
```
Position Slots: Available position slots
Filled Slots: Completed player selections
Empty Slots: Empty position indicators
Salary Remaining: Salary cap display
```

### Contest Cards
```
Entry Fee: Entry cost display
Prize Pool: Prize information
Contest Type: Contest type indicators
Entry Status: Entered/available states
```

## Usage Guidelines

### When to Use Fantasy Theme
- Fantasy product pages
- Lineup building interfaces
- Contest browsing and entry
- Fantasy-specific features

### When to Use Core Formation
- Shared account features
- Standard navigation
- System messages
- Common forms

## Implementation

### In Figma
```
1. Enable Fantasy Theme library
2. Apply theme to fantasy-specific frames
3. Use fantasy tokens for branded elements
4. Core tokens for standard components
```

### In Code
```jsx
import { fantasyTheme } from '@formation/themes/fantasy';

<ThemeProvider theme={fantasyTheme}>
  <FantasyApp />
</ThemeProvider>
```

## Color Palette

### Contest States
```
Open: Available for entry
Entering: In-progress entry
Entered: Confirmed entry
Live: Contest in progress
Final: Contest completed
```

### Player States
```
Available: Selectable player
Selected: In current lineup
Unavailable: Cannot be selected
Locked: Game started, locked
```

## Component Variations

### Fantasy Buttons
```
Enter Contest: Primary contest entry CTA
Build Lineup: Lineup builder action
Quick Entry: Fast entry button
Edit Lineup: Lineup modification
```

### Position Indicators
```
QB, RB, WR, TE, etc.: Position-specific styling
Flex: Flexible position indicator
D/ST: Defense/Special Teams
```

## Fantasy-Specific Patterns

### Salary Cap Display
```
Total Budget: Total available salary
Remaining: Salary remaining
Per Position: Positional breakdown
Warning: Low salary alerts
```

### Live Scoring
```
Points: Real-time point display
Rank: Current standing
Projection: Projected finish
Updates: Live score updates
```

## Related Documentation

- **[Core Colors](../core/colors.md)** - Base color tokens
- **[Core Components](../core/components.md)** - Component patterns
- **[Other BU Themes](.)** - Other business unit themes

## Notes

Fantasy theme supports multiple fantasy products (DFS, Best Ball, etc.). For detailed token values, refer to the Figma Theme file.

---

**Product**: FanDuel Fantasy  
**Last Updated**: January 2026  
**Source**: Fantasy Theme (Figma)
