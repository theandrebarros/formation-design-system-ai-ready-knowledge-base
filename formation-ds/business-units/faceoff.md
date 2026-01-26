# Faceoff Theme Extension

Faceoff-specific theme tokens that extend the core Formation Design System.

## Source

**Figma File**: [Faceoff Theme (Via Template)](https://www.figma.com/design/aHgN6dNggHtMPWRWTg8YW7/Faceoff-Theme--Via-Template-)

## Overview

The Faceoff theme provides brand-specific color tokens and styling for FanDuel Faceoff (head-to-head competition product). It emphasizes competitive, versus-style interactions.

## Brand Colors

```
Faceoff Primary: Faceoff brand color
Faceoff Versus: Head-to-head indicator colors
Faceoff Win: Win indication color
```

## Token Overrides

### Background Overrides
```
background/matchup: Matchup card background
background/player-a: Player A side background
background/player-b: Player B side background
background/versus: Versus divider/indicator background
```

### Content Overrides
```
content/brand: Faceoff brand color
content/player-a: Player A color
content/player-b: Player B color
content/versus: Versus indicator color
```

### Component Overrides
- **Matchup Cards**: Head-to-head matchup displays
- **Player Cards**: Individual player selections
- **Versus Indicator**: Visual separator/indicator
- **Results Display**: Winner/loser displays

## Faceoff-Specific Components

### Matchup Card
```
Layout: Split or versus layout
Player A: Left/top player
Player B: Right/bottom player
Versus Icon: Central divider
Selection: Pick winner interface
```

### Player Display
```
Name: Player name
Team: Team indicator
Stats: Relevant stats
Odds: Selection odds (if applicable)
```

### Versus Indicator
```
Visual: "VS" or versus symbol
Divider: Visual separator
Animation: Optional versus animation
```

## Usage Guidelines

### When to Use Faceoff Theme
- Faceoff product interface
- Matchup selection screens
- Head-to-head displays
- Competition results

### When to Use Core Formation
- Standard account features
- Navigation
- System messages
- Shared components

## Implementation

### In Figma
```
1. Enable Faceoff Theme library
2. Apply theme to Faceoff frames
3. Use faceoff-specific tokens for matchups
4. Core tokens for standard elements
```

### In Code
```jsx
import { faceoffTheme } from '@formation/themes/faceoff';

<ThemeProvider theme={faceoffTheme}>
  <FaceoffApp />
</ThemeProvider>
```

## Color Palette

### Matchup States
```
Open: Available for selection
Selected: Pick made
Locked: Selection locked in
Live: Matchup in progress
Final: Matchup completed
```

### Result States
```
Won: Correct pick
Lost: Incorrect pick
Tie: Matchup tied
```

## Component Variations

### Faceoff Buttons
```
Pick Player A: Select player A
Pick Player B: Select player B
Lock In: Finalize selection
View Matchup: Details view
```

### Matchup Layouts
```
Side-by-Side: Horizontal layout
Stacked: Vertical layout
Card Format: Card-based matchups
```

## Faceoff-Specific Patterns

### Head-to-Head Display
```
Split Screen: 50/50 visual split
Player Images: Facing or versus pose
Stats Comparison: Side-by-side stats
Selection Indicator: Clear pick indication
```

### Competitive Elements
```
Win Streaks: Streak indicators
Leaderboard: Rankings display
Record: Win/loss record
```

## Related Documentation

- **[Core Colors](../core/colors.md)** - Base color tokens
- **[Core Components](../core/components.md)** - Component patterns
- **[Other BU Themes](.)** - Other business unit themes

## Notes

Faceoff theme emphasizes competitive, head-to-head dynamics. Interface optimized for quick player-versus-player selections.

---

**Product**: FanDuel Faceoff  
**Last Updated**: January 2026  
**Source**: Faceoff Theme (Figma)
