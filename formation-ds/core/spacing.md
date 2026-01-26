# Formation Spacing Tokens

Official spacing tokens from the FanDuel Variable Theme. Use these tokens for all spacing values (padding, gaps, margins) to ensure consistent rhythm and alignment.

## Source

**Figma File**: [FanDuel Variable Theme](https://www.figma.com/design/9gJbs4Xti15jTaf3hsgrVS/%E2%9A%A1%EF%B8%8F-FANDUEL-VARIABLE-THEME?m=dev)

## Base Grid System

Formation uses a **4px base grid** for all spacing values. Every spacing token is a multiple of 4px, ensuring consistent alignment and visual rhythm across all components.

## All Spacing Tokens (16 Total)

| Token | Value | Multiplier | Common Usage |
|-------|-------|------------|--------------|
| `space0` | 0px | ×0 | No spacing, reset spacing |
| `space025` | 1px | ×0.25 | Hairline borders, minimal gaps |
| `space05` | 2px | ×0.5 | Very tight spacing |
| `space1` | 4px | ×1 | Tight internal spacing |
| `space2` | 8px | ×2 | Compact spacing, icon gaps |
| `space3` | 12px | ×3 | Standard internal padding |
| `space4` | 16px | ×4 | **Most common**, standard spacing |
| `space5` | 20px | ×5 | Comfortable spacing |
| `space6` | 24px | ×6 | Section spacing |
| `space8` | 32px | ×8 | Large section spacing |
| `space10` | 40px | ×10 | Extra large spacing |
| `space12` | 48px | ×12 | Major section breaks |
| `space16` | 64px | ×16 | Page-level spacing |
| `space20` | 80px | ×20 | Large page sections |
| `space30` | 120px | ×24 | Extra large sections |
| `space40` | 160px | ×40 | Massive spacing, hero sections |

## Usage Guidelines

### Auto-Layout Properties

In Figma, spacing tokens are used for:
- **paddingTop/Bottom/Left/Right**: Internal padding of frames
- **itemSpacing**: Gap between children in auto-layout
- **gap**: Space between elements

### Common Patterns

#### Component Internal Padding
```
Small components: space3 (12px)
Medium components: space4 (16px)
Large components: space5-space6 (20-24px)
```

#### Gap Between Elements
```
Icons and text: space2 (8px)
Related items: space3 (12px)
Standard gap: space4 (16px)
Section items: space6 (24px)
```

#### Section Spacing
```
Tight sections: space4 (16px)
Standard sections: space6 (24px)
Major sections: space8 (32px)
Page sections: space12-space16 (48-64px)
```

## Usage Examples

### Button Padding
```
Small button: space2 (8px) horizontal, space1 (4px) vertical
Medium button: space4 (16px) horizontal, space2 (8px) vertical
Large button: space6 (24px) horizontal, space3 (12px) vertical
```

### Card Padding
```
Card padding: space5 (20px) all sides
Card gap (between elements): space4 (16px)
```

### Form Fields
```
Label to input: space2 (8px)
Between fields: space4 (16px)
Form section gap: space6 (24px)
```

### Navigation
```
Nav item padding: space4 (16px) horizontal, space2 (8px) vertical
Nav item gap: space1 (4px)
Nav sections: space6 (24px)
```

## Responsive Considerations

### Mobile
- Use tighter spacing (space2-space4) for compact layouts
- Reduce section spacing by 1-2 steps
- Example: Desktop space6 → Mobile space4

### Desktop
- Use standard spacing (space4-space8)
- Generous section spacing (space8-space16)
- More breathing room between elements

### Tablet
- Middle ground between mobile and desktop
- Standard spacing works well (space3-space6)

## Quick Reference for Common Use Cases

| Use Case | Token | Value |
|----------|-------|-------|
| Button horizontal padding | `space4` | 16px |
| Button vertical padding | `space2` | 8px |
| Icon-text gap | `space2` | 8px |
| Card padding | `space5` | 20px |
| Standard element gap | `space4` | 16px |
| Section spacing | `space6` | 24px |
| Major section break | `space8` | 32px |
| Page section | `space12` | 48px |
| List item padding | `space3` | 12px |
| Modal padding | `space6` | 24px |

## Design System Compliance

### Do ✅
- Use Formation spacing tokens for all spacing values
- Follow the 4px grid system
- Use space4 (16px) as your default starting point
- Scale up or down from space4 based on hierarchy
- Use consistent spacing within similar components

### Don't ❌
- Use arbitrary spacing values (e.g., 13px, 27px)
- Mix spacing systems (stick to Formation tokens)
- Use negative spacing
- Create custom spacing outside the token system

## Figma Usage

### Setting Auto-Layout Spacing
```
1. Select frame with auto-layout
2. In properties panel, find padding/gap fields
3. Click variable icon
4. Select spacing token (e.g., space/4 for 16px)
```

### Common Auto-Layout Patterns

**Vertical Stack (Column):**
- Direction: Vertical
- Item spacing: space4 (16px)
- Padding: space5 (20px)

**Horizontal Stack (Row):**
- Direction: Horizontal
- Item spacing: space2-space3 (8-12px)
- Padding: space3-space4 (12-16px)

## Code Usage

### React + Formation
```jsx
import { tokens } from '@formation/variable-theme';

// Using spacing tokens
<Box padding={tokens.space.space4}>
  <Text marginBottom={tokens.space.space2}>Title</Text>
  <Text>Content</Text>
</Box>

// Formation components (spacing built-in)
<Stack spacing="space4">
  <Text>Item 1</Text>
  <Text>Item 2</Text>
</Stack>
```

### CSS Variables
```css
.card {
  padding: var(--space-5); /* 20px */
  gap: var(--space-4); /* 16px */
}

.button {
  padding: var(--space-2) var(--space-4); /* 8px 16px */
}
```

## Spacing Scale Visualization

```
space0:   [0px]
space025: [1px] •
space05:  [2px] ••
space1:   [4px] ••••
space2:   [8px] ••••••••
space3:   [12px] ••••••••••••
space4:   [16px] ••••••••••••••••  ← Most common
space5:   [20px] ••••••••••••••••••••
space6:   [24px] ••••••••••••••••••••••••
space8:   [32px] ••••••••••••••••••••••••••••••••
space10:  [40px] ••••••••••••••••••••••••••••••••••••••••
space12:  [48px] ••••••••••••••••••••••••••••••••••••••••••••••••
space16:  [64px] ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
```

## Related Documentation

- **[Colors](colors.md)** - Color tokens that pair with spacing
- **[Components](components.md)** - Component-level spacing patterns
- **[Typography](typography.md)** - Text spacing and line heights
- **[Validation Rules](../validation-rules.md)** - Spacing compliance checking

## Tips for Choosing Spacing

1. **Start with space4 (16px)** as your default
2. **Go smaller** (space2-space3) for compact UI or related elements
3. **Go larger** (space6-space8) for clear section breaks
4. **Use consistent spacing** within a component
5. **Create visual hierarchy** through spacing variation

## Updating Spacing

Spacing tokens should only be updated in the official Figma Variable Theme file. Contact the Formation Design System team for token additions or modifications.

---

**Token Count**: 16 spacing tokens  
**Base Grid**: 4px  
**Most Common**: space4 (16px)  
**Last Updated**: January 2026  
**Source**: FanDuel Variable Theme (Figma)
