# Formation Typography System

Official typography guidelines from the FanDuel Variable Theme and Typography Library. Use these font families, sizes, and weights for consistent text styling across all FanDuel products.

## Source

**Figma Files**: 
- [FanDuel Variable Theme](https://www.figma.com/design/9gJbs4Xti15jTaf3hsgrVS/%E2%9A%A1%EF%B8%8F-FANDUEL-VARIABLE-THEME?m=dev)
- [Typography Library](https://www.figma.com/design/524jb8ZmEXMGcb63bKQtTv/%E2%9A%A1%EF%B8%8F-TYPOGRAPHY-LIBRARY?node-id=24-11&p=f&t=28K1fkVyqbE5bhmg-0)

## Font Families

Formation supports **two typography standards** based on product licensing:

### Typography Standards

**Proxima Nova Standard** (Licensed Products):
- For products with existing Proxima Nova license
- Legacy products (before January 2025)

**Inter/Roboto Standard** (New Products):
- For products launched after January 2025
- No licensing fees required
- Google Fonts (free and open source)

### Choosing the Right Standard

- **Use Proxima Nova**: If your product has an existing license
- **Use Inter/Roboto**: For all new products (post-January 2025)
- **Auto-detection**: Formation Studio can auto-detect which standard your project uses

### Proxima Nova Standard (Licensed Products)

#### Proxima Nova (Primary)
**Weight Range**: 400 (Regular), 600 (Semibold), 700 (Bold)

Primary font for all body text, headings, and UI elements.

```
Font Family: "Proxima Nova"
Weights Available:
- 400 (Regular) - Body text, paragraphs
- 600 (Semibold) - Emphasis, subheadings
- 700 (Bold) - Headings, strong emphasis
```

#### Proxima Nova Condensed (Secondary)
**Weight Range**: 600 (Semibold), 700 (Bold), 800 (Extrabold)

Used for metadata, labels, and compact UI elements.

```
Font Family: "Proxima Nova Condensed"
Weights Available:
- 600 (Semibold) - Labels, metadata
- 700 (Bold) - Emphasized labels
- 800 (Extrabold) - Very strong emphasis
```

### Inter/Roboto Standard (New Products)

#### Inter (Primary)
**Weight Range**: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)

Primary font for all body text, headings, and UI elements.

```
Font Family: "Inter"
Weights Available:
- 400 (Regular) - Body text, paragraphs
- 500 (Medium) - Slight emphasis
- 600 (Semibold) - Emphasis, subheadings
- 700 (Bold) - Headings, strong emphasis
Source: Google Fonts (free, open source)
Variable Font: Yes (supports all weights 100-900)
```

#### Roboto (Secondary/Condensed)
**Weight Range**: 400 (Regular), 500 (Medium), 700 (Bold)

Used for metadata, labels, and compact UI elements.

```
Font Family: "Roboto"
Weights Available:
- 400 (Regular) - Labels, metadata
- 500 (Medium) - Emphasized labels
- 700 (Bold) - Very strong emphasis
Source: Google Fonts (free, open source)
Condensed Variant: Roboto Condensed available
```

## Typography Scale

### Heading Styles

| Style | Desktop Size | Mobile Size | Weight | Font Family | Usage |
|-------|-------------|-------------|---------|-------------|--------|
| **Heading** | 22px | 16px | 700 (Bold) | Proxima Nova | Page titles, section headers |
| **Subheading** | 18px | 14px | 600 (Semibold) | Proxima Nova | Subsection titles |

### Body Styles

| Style | Size | Weight | Font Family | Usage |
|-------|------|---------|-------------|--------|
| **Body** | 14px | 400 (Regular) | Proxima Nova | Standard body text, paragraphs |
| **Body Bold** | 14px | 700 (Bold) | Proxima Nova | Emphasized body text |
| **Body Semibold** | 14px | 600 (Semibold) | Proxima Nova | Semi-emphasized text |

### UI Element Styles

| Style | Size | Weight | Font Family | Usage |
|-------|------|---------|-------------|--------|
| **Button** | 14px | 700 (Bold) | Proxima Nova | Button labels, CTAs |
| **Label** | 14px | 600 (Semibold) | Proxima Nova | Form labels, field labels |
| **Metadata** | 12px | 600 (Semibold) | Proxima Nova Condensed | Timestamps, counts, secondary info |
| **Caption** | 12px | 400 (Regular) | Proxima Nova | Small descriptive text |

### Display Styles

| Style | Size | Weight | Font Family | Usage |
|-------|------|---------|-------------|--------|
| **Display Large** | 32px | 700 (Bold) | Proxima Nova | Hero text, large callouts |
| **Display** | 24px | 700 (Bold) | Proxima Nova | Feature headings |

## Line Height Guidelines

Proper line height ensures readability and visual rhythm.

| Text Size | Line Height | Ratio |
|-----------|-------------|-------|
| 12px | 16px | 1.33 |
| 14px | 20px | 1.43 |
| 16px | 22px | 1.38 |
| 18px | 24px | 1.33 |
| 22px | 28px | 1.27 |
| 24px | 32px | 1.33 |
| 32px | 40px | 1.25 |

## Usage Examples

### In Figma

**Apply Text Style:**
```
1. Select text layer
2. Properties panel → Text section
3. Click style dropdown
4. Select Formation style (e.g., "Heading", "Body", "Metadata")
```

**Manual Typography:**
```
Font: Proxima Nova
Size: 14px
Weight: Regular (400)
Line height: 20px
```

### React + Formation

```jsx
import { Text, Heading } from '@formation/typography';

// Using Formation typography components
<Heading level="1">Page Title</Heading>
<Heading level="2">Section Title</Heading>
<Text variant="body">Standard body text</Text>
<Text variant="metadata">Additional info</Text>
```

### CSS

```css
/* Heading style */
.heading {
  font-family: 'Proxima Nova', sans-serif;
  font-size: 22px;
  font-weight: 700;
  line-height: 28px;
}

/* Body style */
.body {
  font-family: 'Proxima Nova', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}

/* Metadata style */
.metadata {
  font-family: 'Proxima Nova Condensed', sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
}
```

## Common Component Typography

### Buttons
```
Font: Proxima Nova
Size: 14px
Weight: 700 (Bold)
Text transform: None
Letter spacing: 0
```

### Input Fields
```
Font: Proxima Nova
Size: 14px
Weight: 400 (Regular)
Placeholder weight: 400 (Regular)
Label weight: 600 (Semibold)
```

### Cards
```
Title: 16px Bold (Proxima Nova)
Body: 14px Regular (Proxima Nova)
Metadata: 12px Semibold (Proxima Nova Condensed)
```

### Navigation
```
Nav item: 14px Semibold (Proxima Nova)
Active nav: 14px Bold (Proxima Nova)
Sub-nav: 12px Semibold (Proxima Nova Condensed)
```

## Responsive Typography

### Desktop (> 1024px)
- Use full typography scale
- Heading: 22px
- Comfortable line heights

### Tablet (768px - 1024px)
- Standard scale works well
- Heading: 20px (optional reduction)
- Standard line heights

### Mobile (< 768px)
- Reduce heading sizes
- Heading: 16px
- Body: 14px (same as desktop)
- Tighter line heights acceptable

## Typography Hierarchy

Create clear visual hierarchy through size, weight, and spacing:

1. **Primary (Most Important)**
   - Size: 22-32px
   - Weight: 700 (Bold)
   - Color: content/default

2. **Secondary**
   - Size: 16-18px
   - Weight: 600-700 (Semibold/Bold)
   - Color: content/default

3. **Tertiary (Body)**
   - Size: 14px
   - Weight: 400 (Regular)
   - Color: content/default

4. **Quaternary (Metadata)**
   - Size: 12px
   - Weight: 600 (Semibold Condensed)
   - Color: content/subtle

## Accessibility Guidelines

### Minimum Sizes
- Body text: Minimum 14px
- Metadata: Minimum 12px
- Never go below 12px

### Contrast
- Default text on dark background: content/default (#FFFFFF)
- Subtle text on dark background: content/subtle (#949494)
- Text on colored backgrounds: content/onDark (#FFFFFF)

### Readability
- Line length: 45-75 characters optimal
- Line height: 1.3-1.5 for body text
- Paragraph spacing: space4-space6 (16-24px)

## Design System Compliance

### Do ✅
- Use Formation typography styles from library
- Match font sizes to their intended use cases
- Maintain proper line heights
- **For licensed products**: Use Proxima Nova for primary text
- **For new products (post-Jan 2025)**: Use Inter for primary text, Roboto for condensed
- Follow responsive sizing guidelines
- Stick to one font standard per product

### Don't ❌
- Create custom font sizes outside the scale
- Mix Proxima Nova with Inter/Roboto in the same product
- Use fonts outside the two approved standards
- Use weights not in the Formation system
- Ignore line height guidelines
- Use text smaller than 12px

## Quick Reference for Common Use Cases

| Use Case | Font | Size | Weight |
|----------|------|------|--------|
| Page title | Proxima Nova | 22px | 700 |
| Section heading | Proxima Nova | 18px | 600 |
| Body paragraph | Proxima Nova | 14px | 400 |
| Button label | Proxima Nova | 14px | 700 |
| Form label | Proxima Nova | 14px | 600 |
| Card title | Proxima Nova | 16px | 700 |
| Metadata | Proxima Nova Condensed | 12px | 600 |
| Timestamp | Proxima Nova Condensed | 12px | 600 |
| Caption | Proxima Nova | 12px | 400 |

## Font Loading

### Web Font Loading
```css
@font-face {
  font-family: 'Proxima Nova';
  src: url('/fonts/proxima-nova-regular.woff2') format('woff2');
  font-weight: 400;
  font-display: swap;
}

@font-face {
  font-family: 'Proxima Nova';
  src: url('/fonts/proxima-nova-semibold.woff2') format('woff2');
  font-weight: 600;
  font-display: swap;
}

@font-face {
  font-family: 'Proxima Nova';
  src: url('/fonts/proxima-nova-bold.woff2') format('woff2');
  font-weight: 700;
  font-display: swap;
}
```

## Related Documentation

- **[Colors](colors.md)** - Text color tokens
- **[Spacing](spacing.md)** - Text spacing and margins
- **[Components](components.md)** - Component-level typography patterns
- **[Validation Rules](../validation-rules.md)** - Typography compliance checking

## Updating Typography

Typography styles should only be updated in the official Figma Typography Library. Contact the Formation Design System team for additions or modifications.

---

**Font Families**: 2 (Proxima Nova, Proxima Nova Condensed)  
**Weight Range**: 400-800  
**Most Common Size**: 14px  
**Last Updated**: January 2026  
**Source**: Formation Typography Library (Figma)
