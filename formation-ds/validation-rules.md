# Formation Design System Validation Rules

Automated and manual validation rules for ensuring Formation Design System compliance.

## Overview

This document outlines validation rules for checking design system compliance in Figma files and code. Use these rules for design reviews, PR checks, and automated validation.

## Color Validation

### Rule: Use Formation Color Tokens Only
```
✅ PASS: Fill uses brand/primary variable
❌ FAIL: Fill uses hardcoded #1493FF
```

**How to Check**:
- Figma: Check if fills/strokes reference variables
- Code: Ensure all colors use token imports

**Fix**: Replace hardcoded values with Formation color tokens

### Rule: Sufficient Color Contrast
```
✅ PASS: content/default on background/base = 21:1 ratio
❌ FAIL: content/subtle on background/surface = 3.8:1 ratio (needs 4.5:1)
```

**How to Check**:
- Use Figma contrast checker plugin
- WCAG AA standard: 4.5:1 for normal text, 3:1 for large text

**Fix**: Use higher contrast color tokens or adjust text size

## Spacing Validation

### Rule: Use Formation Spacing Tokens Only
```
✅ PASS: Padding = space4 variable (16px)
❌ FAIL: Padding = 17px hardcoded value
```

**How to Check**:
- Figma: Check if spacing values reference variables
- Code: Ensure spacing uses token values

**Fix**: Round to nearest Formation spacing token

### Rule: Adhere to 4px Grid
```
✅ PASS: Element positioned at y=24 (divisible by 4)
❌ FAIL: Element positioned at y=25 (not on grid)
```

**How to Check**:
- All spacing values must be multiples of 4px
- Position, padding, gaps must align to grid

**Fix**: Adjust values to nearest 4px increment

## Typography Validation

### Rule: Use Formation Font Families Only
```
✅ PASS: Font = "Proxima Nova"
❌ FAIL: Font = "Arial"
```

**How to Check**:
- Only Proxima Nova, Proxima Nova Condensed, Shentox allowed
- Check font family in text properties

**Fix**: Replace with Formation font family

### Rule: Use Formation Font Sizes
```
✅ PASS: Font size = 14px (in scale)
❌ FAIL: Font size = 15px (not in scale)
```

**Valid Sizes**: 8, 10, 12, 14, 16, 18, 20, 22, 24, 28, 32, 36, 40, 48, 60px

**Fix**: Use nearest Formation font size

### Rule: Use Formation Font Weights
```
✅ PASS: Font weight = 700 (Bold)
❌ FAIL: Font weight = 750 (not in system)
```

**Valid Weights**: 300, 400, 500, 600, 700, 800, 900

**Fix**: Use nearest Formation font weight

### Rule: Minimum Text Size
```
✅ PASS: Body text = 14px
❌ FAIL: Body text = 11px (below minimum)
```

**Minimums**:
- Body text: 14px minimum
- Metadata/labels: 12px minimum
- Never below 12px

**Fix**: Increase to minimum size

## Border Radius Validation

### Rule: Use Formation Radius Tokens Only
```
✅ PASS: Corner radius = radius2 variable (8px)
❌ FAIL: Corner radius = 7px hardcoded
```

**Valid Values**: 0, 4, 8, 12, 16px (radius0-radius4)

**Fix**: Use nearest Formation radius token

## Component Validation

### Rule: Use Formation Components from Library
```
✅ PASS: Button is instance of Formation Button component
❌ FAIL: Button is custom/detached frame
```

**How to Check**:
- Component should show library icon in Figma
- Check if component is from Formation library

**Fix**: Replace with Formation component instance

### Rule: Don't Detach Without Reason
```
✅ PASS: Component instance with overrides
❌ FAIL: Detached component with custom modifications
```

**When Detaching is OK**:
- Creating new component type not in Formation
- Unique one-off variation
- Prototyping/exploration

**Fix**: Use overrides instead of detaching

## Layout Validation

### Rule: Use Auto-Layout for Spacing
```
✅ PASS: Frame uses auto-layout with space4 gap
❌ FAIL: Frame uses absolute positioning for spacing
```

**How to Check**:
- Frames should use auto-layout when possible
- Use itemSpacing/padding variables

**Fix**: Convert to auto-layout with token-based spacing

### Rule: Consistent Padding
```
✅ PASS: Card has space5 padding on all sides
❌ FAIL: Card has mixed padding (20px top, 16px sides)
```

**Fix**: Use consistent spacing tokens

## Accessibility Validation

### Rule: Minimum Touch Target Size
```
✅ PASS: Button = 48×48px
❌ FAIL: Button = 28×36px (too small for mobile)
```

**Minimums**:
- Mobile: 44×44px minimum
- Desktop: 32×32px minimum
- Recommended: 48×48px

**Fix**: Increase component size

### Rule: Visible Focus States
```
✅ PASS: Button has 2px focus ring
❌ FAIL: Button has no focus indicator
```

**Fix**: Add focus state with 2px outline

### Rule: Sufficient Label Text
```
✅ PASS: Button has visible text or aria-label
❌ FAIL: Icon-only button with no label
```

**Fix**: Add visible label or aria-label

## State Validation

### Rule: All Interactive Components Have States
```
✅ PASS: Button has hover, active, focus, disabled states
❌ FAIL: Button only has default state
```

**Required States**:
- Default
- Hover
- Active/Pressed
- Focus
- Disabled (if applicable)

**Fix**: Add missing states as component variants

## Naming Validation

### Rule: Follow Formation Naming Conventions
```
✅ PASS: Layer named "Primary Button"
❌ FAIL: Layer named "btn_primary_1"
```

**Conventions**:
- Use descriptive names
- Title case for components
- No abbreviations
- No version numbers in names

**Fix**: Rename following conventions

## Validation Tools

### Figma Plugins
- **Formation Validator**: Check token usage
- **Contrast Checker**: Validate color contrast
- **Accessibility Checker**: Check WCAG compliance
- **Linter**: Check layer naming and structure

### Code Linters
- **ESLint Formation Plugin**: Check React code compliance
- **Stylelint Formation Config**: Check CSS compliance

### Automated Checks
- **PR Checks**: Run validation on pull requests
- **Design Review Checklist**: Manual review items
- **Storybook Accessibility**: A11y addon in Storybook

## Manual Review Checklist

Use this checklist for design reviews:

- [ ] All colors use Formation tokens
- [ ] All spacing uses Formation tokens (4px grid)
- [ ] All typography uses Formation fonts/sizes/weights
- [ ] All radius values use Formation tokens
- [ ] Components are from Formation library (not detached)
- [ ] Color contrast meets WCAG AA (4.5:1)
- [ ] Touch targets meet minimum size (44×44px mobile)
- [ ] All interactive elements have focus states
- [ ] Icon-only buttons have labels
- [ ] Text meets minimum sizes (12px minimum)

## Common Violations and Fixes

### Hardcoded Color
```
❌ Fill: #1493FF
✅ Fill: brand/primary variable
```

### Off-Grid Spacing
```
❌ Padding: 18px
✅ Padding: space4 (16px) or space5 (20px)
```

### Non-Standard Font Size
```
❌ Font size: 15px
✅ Font size: 14px or 16px
```

### Small Touch Target
```
❌ Button: 32×32px on mobile
✅ Button: 48×48px on mobile
```

### Missing Focus State
```
❌ Only default and hover states
✅ Add focus state with 2px outline
```

## Enforcement Levels

### Error (Must Fix)
- Hardcoded colors instead of tokens
- Insufficient color contrast
- Touch targets below minimum
- Missing accessibility labels

### Warning (Should Fix)
- Off-grid spacing (1-2px off)
- Non-standard font sizes (close to valid sizes)
- Missing hover states
- Inconsistent component usage

### Info (Nice to Fix)
- Layer naming conventions
- Component organization
- Documentation completeness

## Related Documentation

- **[Colors](core/colors.md)** - Color token reference
- **[Spacing](core/spacing.md)** - Spacing token reference
- **[Typography](core/typography.md)** - Typography reference
- **[Components](core/components.md)** - Component patterns

---

**Last Updated**: January 2026  
**Maintained by**: Formation Design System Team
