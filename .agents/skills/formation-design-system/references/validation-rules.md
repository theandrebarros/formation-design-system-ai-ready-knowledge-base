---
source: hand-curated
note: Pass/fail validation rules for Formation DS compliance
---
# Formation Design System Validation Rules

Automated and manual validation rules for ensuring Formation Design System compliance.

## Overview

This document outlines validation rules for checking design system compliance in Figma files and code. Use these rules for design reviews, PR checks, and automated validation.

## Color Validation

### Rule: Use Formation Color Tokens Only
```
✅ PASS: Fill uses a --fd-colors-* CSS variable (e.g. --fd-colors-product-colors-primary)
❌ FAIL: Fill uses any hardcoded hex value
```

**How to Check**:
- Figma: Inspect fill/stroke — it should reference a variable, not a raw color
- Code: Search for hex patterns (`#[0-9a-fA-F]{3,6}`) in CSS — none should appear outside token definitions

**Fix**: Replace hardcoded colors with a `--fd-colors-*` semantic token. Never invent a new token — use only what is documented in `core/colors.md`

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
✅ PASS: Padding = space4 variable / --fd-space-space-4
❌ FAIL: Padding = 17px hardcoded value
```

**How to Check**:
- Figma: Inspect padding/gap — it should reference a spacing variable, not a raw px value
- Code: Search for raw `px` values in spacing properties — none should appear outside token definitions

**Fix**: Use the nearest `--fd-space-space-{n}` token. The scale is 4px-based: 0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80px

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

### Rule: Use Formation Text Style Tokens
```
✅ PASS: Text uses a Formation text style (e.g. body-medium-regular, heading-large)
❌ FAIL: Text has manually set font family / size / weight
```

**How to Check**:
- Figma: Text layer should reference a text style from the Formation library
- Code: Use `--fd-fonts-*` tokens for font family; font size and weight should come from a defined type scale style
- Valid font families: `Inter`, `Roboto Condensed`, `Shentox` — Proxima Nova is not permitted, **exception: `data-theme="sportsbook"` and `data-theme="fantasy"` (licensed only)**
- Valid font sizes: 8, 10, 12, 14, 16, 18, 20, 22, 24, 28, 32, 40, 48px
- Valid font weights: 400, 600, 700

**Fix**: Apply a Formation text style rather than setting individual properties. See `core/typography.md` for the full style list

### Rule: Minimum Text Size
```
✅ PASS: Body text = 14px
❌ FAIL: Body text = 11px (below minimum)
```

**Minimums**:
- Body text: 14px minimum
- Labels / metadata: 10px minimum (`label-small`)
- Absolute minimum: 8px (`label-x-small`) — use only for extreme space constraints
- Never below 8px

**Fix**: Increase to minimum size

## Border Radius Validation

### Rule: Use Formation Radius Tokens Only
```
✅ PASS: Corner radius = radius2 variable / --fd-radii-radius2
❌ FAIL: Corner radius = 7px hardcoded
```

**How to Check**:
- Figma: Corner radius should reference a radius variable, not a raw value
- Code: Use `--fd-radii-*` tokens — or component-specific tokens where they exist

**Component-specific tokens always override the general scale:**
- Buttons: `--fd-radii-component-button-corner-radius` (4px)
- Inputs: `--fd-radii-component-data-input-corner-radius` (4px)
- Cards: `--fd-radii-component-card-corner-radius` (4px)
- Pills: `--fd-radii-component-pill-corner-radius` (9999px)

**Fix**: Use the component-specific radius token for Formation components, or the nearest general scale token (`radius0`–`radius4`) for custom elements

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
- [ ] Text meets minimum sizes (8px absolute minimum; 14px for body)

## Common Violations and Fixes

### Hardcoded Color
```
❌ Fill: #ABC123  (any hardcoded hex)
✅ Fill: var(--fd-colors-product-colors-primary)
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
