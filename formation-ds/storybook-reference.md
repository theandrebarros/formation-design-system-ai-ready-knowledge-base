# Formation Storybook Reference

Quick reference to Formation Design System React component documentation on Storybook.

## Storybook URL

**Live Storybook**: http://formation-storybook.s3-website-us-east-1.amazonaws.com/prod/react/

## How to Use

1. Browse component categories in the sidebar
2. View component variants and props
3. Copy code examples
4. Test interactive examples
5. Review accessibility notes

## Core Components

### Buttons
- **URL**: `/react/?path=/story/components-button`
- **Variants**: Primary, Secondary, Tertiary, Icon
- **Props**: variant, size, disabled, loading, onClick
- **Usage**: CTAs, actions, navigation

### Form Inputs
- **URL**: `/react/?path=/story/components-forms`
- **Components**: Input, Textarea, Select, Checkbox, Radio
- **Props**: value, onChange, error, disabled, placeholder
- **Validation**: Built-in error states

### Cards
- **URL**: `/react/?path=/story/components-card`
- **Variants**: Standard, Featured, Interactive
- **Props**: padding, elevation, onClick
- **Usage**: Content containers, lists

### Modals/Dialogs
- **URL**: `/react/?path=/story/components-modal`
- **Components**: Modal, Dialog, Drawer, BottomSheet
- **Props**: isOpen, onClose, title, size
- **Usage**: Overlays, confirmations

### Typography
- **URL**: `/react/?path=/story/components-typography`
- **Components**: Heading, Text, Label
- **Props**: variant, size, weight, color
- **Usage**: All text content

### Navigation
- **URL**: `/react/?path=/story/components-navigation`
- **Components**: Nav, NavItem, Breadcrumb, Tabs
- **Props**: active, onClick, variant
- **Usage**: App navigation, page navigation

### Badges & Tags
- **URL**: `/react/?path=/story/components-badge`
- **Components**: Badge, Tag, StatusIndicator
- **Props**: variant, color, size
- **Usage**: Labels, status, counts

### Lists
- **URL**: `/react/?path=/story/components-list`
- **Components**: List, ListItem, Menu, Dropdown
- **Props**: items, onSelect, dividers
- **Usage**: Selectable lists, menus

### Layout
- **URL**: `/react/?path=/story/components-layout`
- **Components**: Box, Stack, Grid, Container
- **Props**: spacing, direction, align, justify
- **Usage**: Page layout, component spacing

### Icons
- **URL**: `/react/?path=/story/components-icons`
- **Library**: Formation icon set
- **Sizes**: 16, 20, 24, 32px
- **Usage**: All icon needs

### Toast/Alerts
- **URL**: `/react/?path=/story/components-toast`
- **Components**: Toast, Alert, Banner
- **Props**: variant (success, error, warning), message, onClose
- **Usage**: Notifications, system messages

## Business Unit Components

### Sportsbook Components
- **URL**: `/react/?path=/story/bu-sportsbook`
- **Components**: BetSlip, OddsDisplay, EventCard
- **Usage**: Sportsbook-specific UI

### Fantasy Components
- **URL**: `/react/?path=/story/bu-fantasy`
- **Components**: PlayerCard, LineupBuilder, ContestCard
- **Usage**: Fantasy-specific UI

### Casino Components
- **URL**: `/react/?path=/story/bu-casino`
- **Components**: GameCard, CasinoNav, PromoCard
- **Usage**: Casino-specific UI

## Common Patterns

### Form Example
```jsx
import { Input, Button, Stack } from '@formation/react';

<Stack direction="vertical" spacing="space4">
  <Input
    label="Email"
    type="email"
    placeholder="Enter email"
    error={errors.email}
  />
  <Button variant="primary" onClick={handleSubmit}>
    Submit
  </Button>
</Stack>
```

### Card with Actions
```jsx
import { Card, Heading, Text, Button, Stack } from '@formation/react';

<Card padding="space5">
  <Stack direction="vertical" spacing="space4">
    <Heading level="3">Card Title</Heading>
    <Text>Card content goes here</Text>
    <Button variant="secondary">Action</Button>
  </Stack>
</Card>
```

### Modal Example
```jsx
import { Modal, Button } from '@formation/react';

<Modal
  isOpen={isOpen}
  onClose={handleClose}
  title="Modal Title"
>
  <p>Modal content</p>
  <Button onClick={handleConfirm}>Confirm</Button>
</Modal>
```

## Props Reference

### Common Props (Most Components)

```typescript
// Styling
className?: string;
style?: CSSProperties;

// Spacing
padding?: SpacingToken;
margin?: SpacingToken;

// Interaction
onClick?: (event: MouseEvent) => void;
disabled?: boolean;

// Accessibility
aria-label?: string;
aria-describedby?: string;
role?: string;
```

### Spacing Tokens
```typescript
type SpacingToken = 
  | 'space0' | 'space1' | 'space2' | 'space3'
  | 'space4' | 'space5' | 'space6' | 'space8'
  | 'space10' | 'space12' | 'space16' | 'space20'
  | 'space30' | 'space40';
```

### Color Tokens
```typescript
type ColorToken = 
  | 'brand/primary'
  | 'background/base' | 'background/surface'
  | 'content/default' | 'content/subtle'
  | 'system/positive' | 'system/alert' | 'system/warning'
  | 'border/default' | 'border/subtle';
```

## Theme Provider

All Formation components require ThemeProvider:

```jsx
import { ThemeProvider } from '@formation/react';
import { coreTheme } from '@formation/themes';

function App() {
  return (
    <ThemeProvider theme={coreTheme}>
      {/* Your app */}
    </ThemeProvider>
  );
}
```

### Business Unit Themes
```jsx
import { casinoTheme } from '@formation/themes/casino';
import { sportsbookTheme } from '@formation/themes/sportsbook';
import { fantasyTheme } from '@formation/themes/fantasy';

// Apply BU theme
<ThemeProvider theme={casinoTheme}>
  <CasinoApp />
</ThemeProvider>
```

## Installation

```bash
# Install Formation React
npm install @formation/react

# Install themes
npm install @formation/themes

# Install icons (if needed)
npm install @formation/icons
```

## TypeScript Support

All Formation components are fully typed:

```typescript
import { ButtonProps, InputProps } from '@formation/react';

// Props are typed and autocompleted
const MyButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};
```

## Accessibility

All Formation components follow WCAG AA standards:
- Proper ARIA labels
- Keyboard navigation
- Focus management
- Screen reader support
- Color contrast compliance

## Responsive Design

Formation components are mobile-first and responsive:
- Touch-friendly on mobile (48px minimum targets)
- Responsive spacing
- Breakpoint utilities included
- Mobile-optimized interactions

## Best Practices

### Do ✅
- Use Formation components when available
- Apply spacing via tokens (space4, space6, etc.)
- Use color tokens for all colors
- Follow component patterns from Storybook
- Test components in Storybook before implementing

### Don't ❌
- Create custom components that duplicate Formation
- Override component internals
- Use hardcoded spacing or colors
- Detach from Formation design tokens

## Getting Help

- **Storybook**: http://formation-storybook.s3-website-us-east-1.amazonaws.com/prod/react/
- **Confluence**: See [confluence-links.md](confluence-links.md)
- **Formation Team**: Contact for questions or additions

## Updates

Storybook is updated with each Formation release. Check the Storybook for the latest components and patterns.

---

**Last Updated**: January 2026  
**URL**: http://formation-storybook.s3-website-us-east-1.amazonaws.com/prod/react/  
**Maintained by**: Formation Design System Team
