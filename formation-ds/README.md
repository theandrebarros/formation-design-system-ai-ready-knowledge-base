# Formation Design System Documentation

Official Formation Design System tokens and patterns, extracted from authoritative Figma files.

## Core Foundation

### Design Tokens
- **[Colors](core/colors.md)** - Brand, background, content, system, and border colors
- **[Spacing](core/spacing.md)** - 16 spacing tokens (space0-space40) with 4px base grid
- **[Radius](core/radius.md)** - 5 border radius tokens for different component sizes
- **[Typography](core/typography.md)** - Font families, sizes, weights, and scales
- **[Components](core/components.md)** - Core component patterns and specifications

### Source Files (Figma)
- **Core Components**: https://www.figma.com/design/prQIPGE33uoH1SyxfVTFKT/%E2%9A%A1%EF%B8%8F-CORE-COMPONENTS
- **FanDuel Variable Theme**: https://www.figma.com/design/9gJbs4Xti15jTaf3hsgrVS/%E2%9A%A1%EF%B8%8F-FANDUEL-VARIABLE-THEME
- **Typography Library**: https://www.figma.com/design/524jb8ZmEXMGcb63bKQtTv/%E2%9A%A1%EF%B8%8F-TYPOGRAPHY-LIBRARY

## Business Unit Theme Extensions

Each business unit has its own theme extension with specific color overrides and unique tokens:

- **[Casino](business-units/casino.md)** - Casino-specific theme tokens
- **[Faceoff](business-units/faceoff.md)** - Faceoff theme tokens
- **[Fantasy](business-units/fantasy.md)** - Fantasy theme tokens
- **[Lottery](business-units/lottery.md)** - Lottery theme tokens
- **[Picks](business-units/picks.md)** - Picks theme tokens
- **[Predicts](business-units/predicts.md)** - Predicts theme tokens
- **[Racing](business-units/racing.md)** - Racing theme tokens
- **[Sportsbook](business-units/sportsbook.md)** - Sportsbook theme tokens

## Additional Resources

- **[Storybook Reference](storybook-reference.md)** - React component documentation and examples
- **[Confluence Links](confluence-links.md)** - Additional Formation documentation on Confluence
- **[Validation Rules](validation-rules.md)** - Design system compliance rules and checking
- **[Migration Guide](migration-guide.md)** - How to migrate to Formation Design System

## Quick Reference

### Most Used Tokens

**Colors:**
- `brand/primary`: #1493FF (primary actions, links)
- `system/positive`: #00C853 (success states)
- `system/alert`: #FF3B30 (errors, critical alerts)
- `background/surface`: #141414 (card/panel backgrounds)
- `content/default`: #FFFFFF (primary text)

**Spacing:**
- `space2`: 8px (tight spacing)
- `space4`: 16px (standard spacing)
- `space6`: 24px (comfortable spacing)
- `space8`: 32px (section spacing)

**Typography:**
- **Heading**: 22px desktop, 16px mobile
- **Body**: 14px (regular text)
- **Button**: 14px (CTA text)
- **Metadata**: 12px (Proxima Nova Condensed)

## Usage Guidelines

### In Your Project's .cursorrules

Reference specific documentation as needed:

```markdown
## Formation Design System

**Colors:** ~/Documents/GitHub/fanduel-dev-knowledge/formation-ds/core/colors.md
**Spacing:** ~/Documents/GitHub/fanduel-dev-knowledge/formation-ds/core/spacing.md
**Typography:** ~/Documents/GitHub/fanduel-dev-knowledge/formation-ds/core/typography.md
```

### When to Load Full Docs

- **colors.md**: When working with colors or theming
- **spacing.md**: When setting up layouts or auto-layout
- **typography.md**: When working with text styles
- **components.md**: When building UI components
- **business-units/[bu].md**: When working on specific BU project

## Token Naming Convention

Formation DS uses a hierarchical naming structure:

```
{category}/{subcategory}/{variant}/{state}
```

**Examples:**
- `brand/primary` - Primary brand color
- `background/surface` - Surface background color
- `content/default` - Default text color
- `system/positive/accent` - Success accent color
- `component/button/primary/background/base` - Primary button background

## Design System Principles

1. **Consistency**: Use tokens, not hardcoded values
2. **Accessibility**: Follow WCAG guidelines (included in token docs)
3. **Scalability**: Tokens work across all screen sizes
4. **Maintainability**: Update tokens in Figma, propagate everywhere

## Support

- **Figma Files**: See source files above for latest tokens
- **Storybook**: See [storybook-reference.md](storybook-reference.md) for React implementation
- **Confluence**: See [confluence-links.md](confluence-links.md) for detailed guidelines
- **Formation Team**: Contact for questions or token additions

---

**Last Updated**: January 2026  
**Data Source**: Official Formation Figma files  
**Maintained by**: Formation Design System Team
