# Formation Radius Tokens

Official border radius tokens from the FanDuel Variable Theme. Use these tokens for all corner radius values to ensure consistent component styling.

## Source

**Figma File**: [FanDuel Variable Theme](https://www.figma.com/design/9gJbs4Xti15jTaf3hsgrVS/%E2%9A%A1%EF%B8%8F-FANDUEL-VARIABLE-THEME?m=dev)

## All Radius Tokens (5 Total)

| Token | Value | Common Usage |
|-------|-------|--------------|
| `radius0` | 0px | Sharp corners, no rounding |
| `radius1` | 4px | Small components (tags, chips, small buttons) |
| `radius2` | 8px | **Most common**, standard buttons, inputs, cards |
| `radius3` | 12px | Large components, modals, panels |
| `radius4` | 16px | Extra large components, hero sections |

## Usage Guidelines

### Component Size Mapping

**Small Components** (< 32px height):
- Use `radius1` (4px)
- Examples: Tags, chips, small badges, compact buttons

**Medium Components** (32-48px height):
- Use `radius2` (8px) ← **Most common**
- Examples: Standard buttons, input fields, cards, list items

**Large Components** (48-64px height):
- Use `radius3` (12px)
- Examples: Large buttons, feature cards, navigation items

**Extra Large Components** (> 64px height):
- Use `radius4` (16px)
- Examples: Hero sections, large panels, featured content cards

### Special Cases

**No Radius** (`radius0` - 0px):
- Full-width components that extend to screen edges
- Components that need to align flush with other elements
- Intentionally sharp/technical aesthetic

**Pill Shape**:
- For pill-shaped buttons or badges, use `radius2` (8px) or `radius3` (12px)
- Or use a very large radius value (e.g., 999px) for perfect pills

## Common Component Patterns

### Buttons
```
Small button (24-28px): radius1 (4px)
Standard button (32-40px): radius2 (8px)
Large button (48-56px): radius3 (12px)
```

### Input Fields
```
Standard input (40px): radius2 (8px)
Large input (48px): radius3 (12px)
```

### Cards
```
Small card: radius2 (8px)
Medium card: radius2 (8px)
Large card: radius3 (12px)
Featured card: radius4 (16px)
```

### Modals & Panels
```
Standard modal: radius3 (12px)
Large panel: radius4 (16px)
Bottom sheets: radius3 (12px) on top corners only
```

### Badges & Tags
```
Small badge: radius1 (4px)
Standard tag: radius2 (8px)
Pill badge: radius3 (12px) or 999px
```

## Usage Examples

### In Figma
```
Select element → Properties panel → Corner radius
Click variable icon → Select radius token
Example: Button → radius/2 (8px)
```

### Independent Corners
For different radius on each corner:
```
Top-left: radius3
Top-right: radius3
Bottom-left: radius0
Bottom-right: radius0
```
Use case: Bottom sheet with rounded top, flat bottom

### React + Formation
```jsx
import { tokens } from '@formation/variable-theme';

// Using radius tokens
<Button style={{ borderRadius: tokens.radius.radius2 }}>
  Click Me
</Button>

// Formation components (radius applied automatically)
<Button variant="primary">Click Me</Button>
```

### CSS Variables
```css
.button {
  border-radius: var(--radius-2); /* 8px */
}

.card {
  border-radius: var(--radius-3); /* 12px */
}

.tag {
  border-radius: var(--radius-1); /* 4px */
}
```

## Visual Scale

```
radius0: □ (0px - sharp corners)
radius1: ◻ (4px - slightly rounded)
radius2: ▢ (8px - standard rounding)  ← Most common
radius3: ▣ (12px - well rounded)
radius4: ▤ (16px - very rounded)
```

## Quick Reference for Common Use Cases

| Component Type | Token | Value | Example |
|---------------|-------|-------|---------|
| Standard button | `radius2` | 8px | Primary, Secondary buttons |
| Input field | `radius2` | 8px | Text inputs, selects |
| Small card | `radius2` | 8px | List item card |
| Large card | `radius3` | 12px | Feature card |
| Modal | `radius3` | 12px | Dialog, popover |
| Large panel | `radius4` | 16px | Settings panel |
| Tag/chip | `radius1` | 4px | Status tag |
| Badge | `radius1` | 4px | Count badge |
| Bottom sheet | `radius3` | 12px | Top corners only |

## Design System Compliance

### Do ✅
- Use Formation radius tokens for all border radius values
- Match radius size to component size
- Use radius2 (8px) as your default starting point
- Keep radius consistent across similar components
- Use independent corners only when necessary (e.g., bottom sheets)

### Don't ❌
- Use arbitrary radius values (e.g., 5px, 13px)
- Over-round small components (looks bloated)
- Under-round large components (looks inconsistent)
- Mix radius values on similar components

## Accessibility Considerations

- **Touch targets**: Ensure adequate touch target size (44×44px min) regardless of radius
- **Visual clarity**: Proper radius improves component recognition
- **Consistency**: Consistent radius helps users understand component hierarchy

## Responsive Behavior

Radius tokens work consistently across all screen sizes:
- **Mobile**: Same radius values
- **Tablet**: Same radius values
- **Desktop**: Same radius values

The tokens scale appropriately with component sizes rather than viewport.

## Corner Radius Psychology

Different radius sizes convey different feelings:
- **Sharp (0px)**: Technical, precise, modern
- **Small (4px)**: Subtle, refined, compact
- **Medium (8px)**: Friendly, standard, balanced ← **Default**
- **Large (12-16px)**: Soft, approachable, playful

## Related Documentation

- **[Spacing Tokens](spacing.md)** - Pairs with radius for component structure
- **[Components](components.md)** - Component-level radius patterns
- **[Colors](colors.md)** - Color tokens that work with rounded components
- **[Validation Rules](../validation-rules.md)** - Radius compliance checking

## Tips for Choosing Radius

1. **Start with radius2 (8px)** as your default
2. **Match component size**: Smaller components → smaller radius
3. **Stay consistent**: Use the same radius for similar components
4. **Consider context**: Hero sections can use larger radius
5. **Test at scale**: Ensure radius looks good at component's actual size

## Updating Radius

Radius tokens should only be updated in the official Figma Variable Theme file. Contact the Formation Design System team for token additions or modifications.

---

**Token Count**: 5 radius tokens  
**Most Common**: radius2 (8px)  
**Last Updated**: January 2026  
**Source**: FanDuel Variable Theme (Figma)
