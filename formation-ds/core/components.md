# Formation Component Patterns

Common component patterns and specifications from the Formation Design System. Use these guidelines when building UI components.

## Source

**Figma File**: [Core Components](https://www.figma.com/design/prQIPGE33uoH1SyxfVTFKT/%E2%9A%A1%EF%B8%8F-CORE-COMPONENTS?node-id=55-128&p=f&t=kcJlRKTVda3OnyKw-0)

## Button Components

### Primary Button
```
Background: brand/primary (#1493FF)
Text: content/onDark (#FFFFFF)
Font: Proxima Nova, 14px, Bold (700)
Padding: space4 (16px) horizontal, space2 (8px) vertical
Radius: radius2 (8px)
Min height: 40px
Min width: 80px

States:
- Hover: Lighten background 10%
- Active: Darken background 10%
- Disabled: Opacity 40%
```

### Secondary Button
```
Background: transparent
Border: 1px solid brand/primary
Text: brand/primary
Font: Proxima Nova, 14px, Bold (700)
Padding: space4 (16px) horizontal, space2 (8px) vertical
Radius: radius2 (8px)
Min height: 40px

States:
- Hover: background/surface with border
- Active: Darken border
- Disabled: Opacity 40%
```

### Tertiary Button (Text Only)
```
Background: transparent
Text: brand/primary
Font: Proxima Nova, 14px, Bold (700)
Padding: space3 (12px) horizontal, space1 (4px) vertical
No border
Min height: 32px

States:
- Hover: text opacity 80%
- Active: text opacity 60%
- Disabled: Opacity 40%
```

## Input Components

### Text Input
```
Background: background/surface (#141414)
Border: 1px solid border/default (#333333)
Text: content/default, 14px, Regular (400)
Placeholder: content/subtle
Padding: space3 (12px) all sides
Radius: radius2 (8px)
Height: 40px

States:
- Focus: Border brand/primary, 2px
- Error: Border system/alert
- Disabled: Opacity 50%
- Read-only: Border subtle, no interaction
```

### Label
```
Text: content/default, 14px, Semibold (600)
Margin bottom: space2 (8px)
Required indicator: system/alert "*"
```

### Helper Text
```
Text: content/subtle, 12px, Regular (400)
Margin top: space1 (4px)
```

### Error Message
```
Text: system/alert, 12px, Semibold (600)
Margin top: space1 (4px)
Icon: Alert icon, system/alert
```

## Card Components

### Standard Card
```
Background: background/surface (#141414)
Border: 1px solid border/subtle (#1F1F1F)
Radius: radius2 (8px)
Padding: space5 (20px)
Gap: space4 (16px) between elements

Shadow (optional): 
- 0 2px 8px rgba(0, 0, 0, 0.24)

States:
- Hover: Border border/default, subtle scale 1.02
- Active: Border brand/primary
```

### Featured Card
```
Background: background/surface
Border: 1px solid border/default
Radius: radius3 (12px)
Padding: space6 (24px)
Gap: space4 (16px)

Optional accent:
- Top border: 2px solid brand/primary
```

### Card Header
```
Title: 16px Bold Proxima Nova
Subtitle: 14px Regular, content/subtle
Gap: space2 (8px)
Margin bottom: space4 (16px)
```

### Card Actions
```
Layout: Horizontal, end-aligned
Gap: space3 (12px)
Margin top: space5 (20px)
Border top (optional): 1px border/subtle
Padding top: space4 (16px)
```

## Modal/Dialog Components

### Modal Container
```
Background: background/surface
Border: 1px solid border/default
Radius: radius3 (12px)
Padding: space6 (24px)
Max width: 600px
Shadow: 0 8px 24px rgba(0, 0, 0, 0.48)

Backdrop:
- Background: rgba(0, 0, 0, 0.6)
- Backdrop blur: 4px
```

### Modal Header
```
Title: 22px Bold Proxima Nova
Close button: 32×32px, icon 16×16px
Gap: space4 (16px)
Padding bottom: space4 (16px)
Border bottom: 1px border/subtle
```

### Modal Body
```
Padding: space5 (20px) vertical
Max height: 60vh
Overflow: auto
```

### Modal Footer
```
Layout: Horizontal, end-aligned
Gap: space3 (12px)
Padding top: space4 (16px)
Border top: 1px border/subtle
```

## Navigation Components

### Nav Item
```
Padding: space4 (16px) horizontal, space2 (8px) vertical
Font: 14px Semibold Proxima Nova
Radius: radius2 (8px)
Min height: 36px

States:
- Default: content/default
- Hover: background/surface
- Active: brand/primary text, background 10% brand
```

### Nav Section
```
Gap: space1 (4px) between items
Margin bottom: space6 (24px) between sections
Section header: 12px Semibold Condensed, content/subtle
```

## Badge/Tag Components

### Badge
```
Background: system/positive (or alert/warning)
Text: content/onDark, 12px Semibold Condensed
Padding: space1 (4px) horizontal, 2px vertical
Radius: radius1 (4px)
Min height: 20px
```

### Count Badge
```
Background: system/alert
Text: content/onDark, 12px Bold
Padding: space1 (4px) all sides
Radius: radius3 (12px) or full pill
Min size: 20×20px
```

### Status Tag
```
Background: system color with 20% opacity
Border: 1px solid system color
Text: system color, 12px Semibold Condensed
Padding: space2 (8px) horizontal, space1 (4px) vertical
Radius: radius1 (4px)
```

## List Components

### List Item
```
Padding: space4 (16px) horizontal, space3 (12px) vertical
Min height: 48px
Border bottom: 1px border/subtle
Gap: space3 (12px) between elements

States:
- Hover: background/surface
- Active: border-left 3px brand/primary
- Selected: background 10% brand/primary
```

### List Item with Icon
```
Icon size: 20×20px
Icon color: content/subtle
Icon margin right: space3 (12px)
```

## Toast/Notification Components

### Toast
```
Background: background/surface
Border: 1px solid border/default
Border-left: 3px solid system color
Radius: radius2 (8px)
Padding: space4 (16px)
Gap: space3 (12px)
Shadow: 0 4px 16px rgba(0, 0, 0, 0.32)
Min width: 320px
Max width: 480px

Icon: 20×20px, system color
Title: 14px Bold
Message: 14px Regular
Close button: 24×24px
```

## Icon Guidelines

### Icon Sizes
```
Small: 16×16px (inline with text)
Medium: 20×20px (standard UI)
Large: 24×24px (emphasis)
Extra large: 32×32px (feature icons)
```

### Icon Colors
```
Default: content/default
Subtle: content/subtle
Interactive: brand/primary
Success: system/positive
Error: system/alert
Warning: system/warning
```

## Layout Patterns

### Container Widths
```
Full width: 100%
Content container: 1200px max
Narrow container: 800px max
Form container: 600px max
```

### Grid System
```
Columns: 12 column grid
Gutter: space6 (24px) desktop, space4 (16px) mobile
Margin: space8 (32px) desktop, space4 (16px) mobile
```

## Component States

### Interactive States Priority
1. **Disabled**: Lowest priority, 40% opacity
2. **Default**: Base state
3. **Hover**: Cursor over, subtle background
4. **Focus**: Keyboard focus, 2px outline
5. **Active**: Mouse down, pressed state
6. **Selected**: Persistent selection state

### State Colors
```
Focus outline: brand/primary
Error state: system/alert
Success state: system/positive
Warning state: system/warning
Disabled: 40% opacity
```

## Accessibility Requirements

### Touch Targets
- Minimum: 44×44px (mobile)
- Recommended: 48×48px
- Desktop: 32×32px minimum

### Focus Indicators
- Visible focus ring: 2px solid brand/primary
- Offset: 2px from element
- Never remove focus indicators

### Contrast
- Text on background: 4.5:1 minimum (WCAG AA)
- Large text (18px+): 3:1 minimum
- Icons and controls: 3:1 minimum

## Animation/Transition Guidelines

### Duration
```
Fast: 150ms (micro-interactions)
Standard: 250ms (most transitions)
Slow: 350ms (modals, drawers)
```

### Easing
```
Ease-out: User-initiated actions (button clicks)
Ease-in: Dismissals (closing modals)
Ease-in-out: State changes (tabs switching)
```

### Properties to Animate
```
Recommended: opacity, transform
Acceptable: background-color, border-color
Avoid: width, height, padding (causes layout shift)
```

## Related Documentation

- **[Colors](colors.md)** - Color tokens for components
- **[Spacing](spacing.md)** - Spacing tokens for component layout
- **[Radius](radius.md)** - Border radius for components
- **[Typography](typography.md)** - Text styling in components
- **[Storybook Reference](../storybook-reference.md)** - React component implementations

## Figma Component Libraries

Access pre-built Formation components in Figma:
- **Core Components**: Base component set
- **BU Theme Components**: Business unit variations
- Enable as library in Figma for instant access

## Implementation Notes

### React/Web
- Use Formation component library when available
- Build custom components following these patterns
- Apply tokens via CSS variables or design token package

### Figma
- Use component instances from Formation library
- Override text, colors, spacing using variables
- Detach only when absolutely necessary

---

**Last Updated**: January 2026  
**Source**: Formation Core Components (Figma)  
**Maintained by**: Formation Design System Team
