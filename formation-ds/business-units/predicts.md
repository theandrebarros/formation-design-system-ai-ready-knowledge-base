# Predicts Theme Extension

Predicts-specific theme tokens that extend the core Formation Design System.

## Source

**Figma File**: [Predicts Theme Extension](https://www.figma.com/design/NNkWJaRTcHtQH0dOHrgTjC/Predicts-Theme-Extension)

## Overview

The Predicts theme provides brand-specific color tokens and styling for FanDuel Predicts (prediction-based gaming product). It emphasizes choice-making and prediction confidence.

## Brand Colors

```
Predicts Primary: Predicts brand color
Predicts Choice: Choice selection colors
Predicts Confidence: Confidence indicator colors
```

## Token Overrides

### Background Overrides
```
background/prediction: Prediction card background
background/choice: Choice option background
background/confidence: Confidence meter background
```

### Content Overrides
```
content/brand: Predicts brand color
content/choice-a: Choice A color
content/choice-b: Choice B color
content/confidence: Confidence level color
```

### Component Overrides
- **Prediction Cards**: Question/prediction displays
- **Choice Buttons**: Binary or multiple choice selections
- **Confidence Meter**: Confidence level indicators
- **Results Display**: Prediction results

## Predicts-Specific Components

### Prediction Card
```
Question: Clear prediction question
Choices: Available answer choices
Deadline: Prediction deadline display
Points: Points/rewards for prediction
```

### Choice Selection
```
Option A: First choice option
Option B: Second choice option
Multiple Choice: 3+ options when applicable
Selected State: Clear selection indication
```

### Confidence Meter
```
Low: Low confidence indication
Medium: Medium confidence
High: High confidence indication
Slider: Confidence adjustment control
```

## Usage Guidelines

### When to Use Predicts Theme
- Predicts product interface
- Prediction making screens
- Confidence selection
- Results and leaderboards

### When to Use Core Formation
- Standard account features
- Navigation
- System messages
- Shared components

## Implementation

### In Figma
```
1. Enable Predicts Theme Extension library
2. Apply theme to Predicts frames
3. Use predicts-specific tokens
4. Core tokens for standard elements
```

### In Code
```jsx
import { predictsTheme } from '@formation/themes/predicts';

<ThemeProvider theme={predictsTheme}>
  <PredictsApp />
</ThemeProvider>
```

## Color Palette

### Prediction States
```
Open: Available for prediction
Selected: Prediction made
Locked: Deadline passed, locked in
Resolved: Prediction result available
```

### Result States
```
Correct: Correct prediction
Incorrect: Incorrect prediction
Partial: Partially correct (if applicable)
```

## Component Variations

### Predicts Buttons
```
Make Prediction: Primary prediction CTA
Change Prediction: Modify existing prediction
Lock In: Finalize prediction
```

### Confidence Levels
```
25%: Low confidence
50%: Medium confidence
75%: High confidence
100%: Maximum confidence
```

## Related Documentation

- **[Core Colors](../core/colors.md)** - Base color tokens
- **[Core Components](../core/components.md)** - Component patterns
- **[Other BU Themes](.)** - Other business unit themes

---

**Product**: FanDuel Predicts  
**Last Updated**: January 2026  
**Source**: Predicts Theme Extension (Figma)
