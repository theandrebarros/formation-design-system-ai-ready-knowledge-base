# Picks Theme Extension

Picks-specific theme tokens that extend the core Formation Design System.

## Source

**Figma File**: [Picks Theme Extension](https://www.figma.com/design/ZDkb6CEhx2mpguB3xxOZb6/Picks-Theme-Extension)

## Overview

The Picks theme provides brand-specific color tokens and styling for FanDuel Picks (prop picking product). It features a simplified, engaging interface optimized for quick pick selections.

## Brand Colors

Picks uses playful, accessible brand colors:

```
Picks Primary: Picks brand color
Picks More/Less: More/Less selection colors
Picks Correct: Correct pick indication
```

## Token Overrides

### Background Overrides
```
background/pick-card: Pick selection card background
background/submitted: Submitted entry background
background/result: Results display background
```

### Content Overrides
```
content/more: "More" selection color
content/less: "Less" selection color
content/correct: Correct pick color
content/incorrect: Incorrect pick color (neutral, not error)
```

### Component Overrides
Picks provides theme-specific treatments for:
- **Pick Cards**: Simple prop selection cards
- **More/Less Buttons**: Binary choice selection
- **Entry Builder**: Multi-pick entry builder
- **Results Cards**: Pick result displays

## Picks-Specific Components

### Pick Card
```
Background: Clean, simple background
Prop: Clear prop statement
Line: Prop line/value display
Selection: More/Less button pair
```

### More/Less Selection
```
More Button: "More" option styling
Less Button: "Less" option styling
Selected State: Clear selection indication
Locked State: Submitted pick styling
```

### Entry Builder
```
Pick Counter: Number of picks selected
Multiplier: Entry multiplier display
Payout: Potential payout display
Submit: Entry submission button
```

## Usage Guidelines

### When to Use Picks Theme
- Picks product interface
- Prop selection screens
- Entry building
- Results displays

### When to Use Core Formation
- Account management
- Standard navigation
- System-level UI
- Shared components

## Implementation

### In Figma
```
1. Enable Picks Theme Extension library
2. Apply theme to Picks frames
3. Use picks-specific tokens for prop selections
4. Core tokens for standard elements
```

### In Code
```jsx
import { picksTheme } from '@formation/themes/picks';

<ThemeProvider theme={picksTheme}>
  <PicksApp />
</ThemeProvider>
```

## Color Palette

### Selection States
```
Unselected: Neutral, selectable state
More Selected: More option selected
Less Selected: Less option selected
Locked: Submitted, cannot change
```

### Result States
```
Correct: Correct pick indication (green)
Incorrect: Incorrect pick indication (neutral/subtle)
Pending: Result not yet determined
Voided: Voided pick indication
```

## Component Variations

### Picks Buttons
```
More Button: More selection
Less Button: Less selection
Submit Entry: Entry submission CTA
Quick Pick: Auto-fill picks
```

### Pick Display Sizes
```
Compact: List view pick card
Standard: Default pick card
Featured: Promoted pick card
```

## Picks-Specific Patterns

### Entry Multipliers
```
2X, 3X, 5X, etc.: Multiplier badges
Risk/Reward: Clear risk indication
Payout Display: Potential winnings
```

### Pick Results
```
Win Display: Winning entry celebration
Loss Display: Non-winning entry (neutral)
Partial Win: Some correct picks
```

## Accessibility

Picks theme emphasizes accessibility:
- **Color + Icon**: Never rely on color alone
- **Large Touch Targets**: Easy selection on mobile
- **Clear States**: Obvious selected/unselected states
- **Result Clarity**: Clear win/loss indication

## Related Documentation

- **[Core Colors](../core/colors.md)** - Base color tokens
- **[Core Components](../core/components.md)** - Component patterns
- **[Other BU Themes](.)** - Other business unit themes

## Notes

Picks theme prioritizes simplicity and speed. Interface is optimized for quick prop selections and casual user engagement.

---

**Product**: FanDuel Picks  
**Last Updated**: January 2026  
**Source**: Picks Theme Extension (Figma)
