# What It Contains

Complete inventory of the FanDuel Development Knowledge Base.

## Formation Design System

### Core Tokens
Official tokens extracted from authoritative Figma files.

#### Colors (`formation-ds/core/colors.md`)
- **Brand colors**: Primary, secondary, tertiary with light/dark modes
- **Background colors**: Page, surface, container, overlay
- **Content colors**: Default, subdued, inverse, on-brand
- **System colors**: Positive, negative, alert, informational
- **Border colors**: Default, subdued, hover states

**Most Used**:
- `brand/primary`: #1493FF (primary actions)
- `background/surface`: #141414 (cards)
- `content/default`: #FFFFFF (text)
- `system/positive`: #00C853 (success)
- `system/alert`: #FF3B30 (errors)

#### Spacing (`formation-ds/core/spacing.md`)
16 spacing tokens from `space0` (0px) to `space40` (160px) on 4px base grid.

**Most Used**:
- `space2`: 8px (tight spacing)
- `space4`: 16px (standard spacing)
- `space6`: 24px (comfortable spacing)
- `space8`: 32px (section spacing)

#### Typography (`formation-ds/core/typography.md`)
- Font families: Proxima Nova, Proxima Nova Condensed
- Font sizes: 12px to 56px
- Font weights: 400 (regular), 600 (semibold), 700 (bold)
- Text styles: Heading, body, button, metadata

**Key Styles**:
- Heading: 22px desktop, 16px mobile
- Body: 14px
- Button: 14px
- Metadata: 12px (Proxima Nova Condensed)

#### Radius (`formation-ds/core/radius.md`)
5 border radius tokens:
- `radius0`: 4px (small components)
- `radius2`: 8px (buttons, inputs)
- `radius4`: 16px (cards)
- `radius6`: 24px (large containers)
- `radius8`: 32px (special cases)

#### Components (`formation-ds/core/components.md`)
Core component specifications and patterns for buttons, inputs, cards, modals, and more.

### Business Unit Themes

Each business unit has theme extensions with specific color overrides:

- **Casino**: Purple/gold gaming aesthetic
- **Sportsbook**: Blue sports-focused theme
- **Picks**: Entry-focused gaming theme
- **Predicts**: Prediction market theme
- **Fantasy**: Daily fantasy sports theme
- **Faceoff**: Head-to-head competition theme
- **Lottery**: Lottery-specific theme
- **Racing**: Horse racing theme

Each theme file documents:
- Color overrides for brand, system, component tokens
- Unique tokens specific to that business unit
- Source Figma files

## Company Patterns

### Architecture Patterns

#### Clean Architecture (`company-patterns/architecture/clean-architecture.md`)
- Domain-driven design principles
- Layered architecture (domain, application, infrastructure, presentation)
- Dependency inversion
- Separation of concerns
- Real examples from `figma-super-powers`

#### Command Pattern (`company-patterns/architecture/command-pattern.md`)
- Registry-based command execution
- Encapsulation of operations
- Undo/redo capabilities
- Command validation
- Implementation examples

## Approved Tools

### MCP Servers (`approved-tools/mcp-servers.md`)

Security-reviewed and approved Model Context Protocol servers:

#### Atlassian MCP
- **Status**: ✅ Approved (Oct 2025)
- **Risk**: Medium
- **Purpose**: Jira and Confluence integration
- **Tools**: Search, create, update issues/pages, bulk operations
- **Auth**: OAuth 2.0

#### Figma MCP (Remote)
- **Status**: ✅ Approved
- **Risk**: Medium
- **Purpose**: Read Figma design data
- **Tools**: Read files, extract tokens, get components
- **Auth**: Personal Access Token

#### Browser MCP
- **Status**: ✅ Approved
- **Risk**: Low
- **Purpose**: Web automation for testing
- **Tools**: Navigate, click, type, snapshot

### Gateway Configuration
- Installation guide for `fd-mcp-gateway`
- Authentication setup
- Security best practices
- Troubleshooting guide

## Figma Plugin Development

### Plugin Architecture (`figma-specific/plugin-architecture.md`)
- Common plugin patterns
- Clean architecture for complex plugins
- Simple ES5 patterns for basic plugins
- MCP integration patterns
- REST API usage for cross-file operations

### Plugin Constraints (`figma-specific/plugin-constraints.md`)
- Figma API limitations
- ES5 vs modern JavaScript
- Performance considerations
- Cross-file operation workarounds
- Common gotchas and solutions

## FanDuel Projects Documentation

Documentation for all Formation plugin projects with reusable patterns:

### Core Infrastructure
**Figma Super Powers** (`fanduel-projects/figma-super-powers.md`)
- MCP bridge with clean architecture
- Design token validation
- Auto-layout operations
- Export capabilities

### Validation & Compliance
**Formation Check** (`fanduel-projects/formation-check.md`)
- Color, spacing, radius validation
- Token suggestion engine
- ES5 implementation pattern

**Formation Spacing** (`fanduel-projects/formation-spacing.md`)
- Specialized spacing validator
- Confidence-based suggestions (exact/close/approximate)
- Batch operations

### Component Management
**Formation Component Upgrader** (`fanduel-projects/formation-component-upgrader.md`)
- Smart version detection
- Property mapping
- Override preservation

### Variable Operations
**Formation Variable Creator** (`fanduel-projects/formation-variable-creator.md`)
- Cross-file variable creation via REST API
- Mode mapping

**Formation Variable Exporter** (`fanduel-projects/formation-variable-exporter.md`)
- Export variables as JavaScript
- Reference preservation

**Formation Variable Mapper** (`fanduel-projects/formation-variable-mapper.md`)
- Natural language variable mapping
- MCP integration

## Templates

### .cursorrules Template (`templates/cursorrules-template.md`)
Pre-configured project rules template with:
- Formation DS references
- Architecture pattern links
- Approved tool configurations
- Figma plugin patterns
- Best practices

### Project README Template (`templates/project-readme-template.md`)
Standardized project documentation structure:
- Project overview
- Tech stack
- Setup instructions
- Development guide
- Deployment process

## Additional Resources

### Storybook Reference (`formation-ds/storybook-reference.md`)
Links and examples for Formation React components in Storybook.

### Confluence Links (`formation-ds/confluence-links.md`)
Additional Formation documentation on Confluence.

### Validation Rules (`formation-ds/validation-rules.md`)
Rules for checking design system compliance.

## Authoritative Sources

All Formation Design System documentation is extracted from official Figma files:

### Core Foundation Files
- **Core Components**: https://www.figma.com/design/prQIPGE33uoH1SyxfVTFKT/
- **FanDuel Variable Theme**: https://www.figma.com/design/9gJbs4Xti15jTaf3hsgrVS/
- **Typography Library**: https://www.figma.com/design/524jb8ZmEXMGcb63bKQtTv/

### Business Unit Theme Files
Each BU has a dedicated Figma file with theme extensions (links in respective documentation).

### Technical Documentation
- **Formation Storybook**: http://formation-storybook.s3-website-us-east-1.amazonaws.com/prod/react/
- **Formation Confluence**: https://fanduel.atlassian.net/wiki/spaces/FOR/pages/307655180988/Foundations

## Usage Patterns

### For Design System Work
Load: `colors.md`, `spacing.md`, `typography.md`, `components.md`

### For Plugin Development
Load: `plugin-architecture.md`, relevant project docs (`formation-check.md`, etc.)

### For Architecture Work
Load: `clean-architecture.md`, `command-pattern.md`

### For MCP Integration
Load: `mcp-servers.md`, `figma-super-powers.md`

---

**Last Updated**: January 2026  
**Documentation Count**: 40+ files  
**Maintained by**: Formation Design System Team
