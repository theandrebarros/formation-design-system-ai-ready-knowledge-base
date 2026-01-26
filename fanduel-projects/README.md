# FanDuel Formation Projects

This folder documents patterns, architectures, and reusable logic from all FanDuel Formation plugin projects. Use these as reference when building new plugins or features.

## Project Index

### 🎯 Core Infrastructure
- **[Figma Super Powers](figma-super-powers.md)** - Comprehensive MCP bridge with clean architecture, design token validation, auto-layout operations, and export capabilities

### ✅ Validation & Compliance
- **[Formation Check](formation-check.md)** - Design system compliance checker that validates colors, spacing, and radius against Formation tokens
- **[Formation Spacing](formation-spacing.md)** - Specialized spacing validator with confidence-based suggestions and batch operations

### 🔄 Component Management  
- **[Formation Component Upgrader](formation-component-upgrader.md)** - Smart component version detection and upgrade with property mapping and override preservation

### 🎨 Variable Operations
- **[Formation Variable Creator](formation-variable-creator.md)** - Cross-file variable creation via REST API with smart mode mapping
- **[Formation Variable Exporter](formation-variable-exporter.md)** - Export variables as JavaScript files with reference preservation
- **[Formation Variable Mapper](formation-variable-mapper.md)** - Natural language variable mapping with MCP integration

## Common Patterns

### Architecture
- **Clean Architecture** - figma-super-powers implements full DDD with domains, adapters, services
- **Command Pattern** - Registry-based command execution (see figma-super-powers)
- **Simple Plugins** - formation-check and formation-spacing use ES5 with no build step

### Token Operations
- **Token Loading** - All projects load local variable collections from Figma files
- **Validation Logic** - formation-check and formation-spacing have comprehensive validation patterns
- **Confidence Scoring** - formation-spacing uses exact/close/approximate matching

### Cross-File Operations
- **REST API** - formation-variable-creator uses Figma REST API for cross-file writes
- **Authentication** - Personal Access Token pattern with clientStorage

### UI Patterns
- **Formation Dark Theme** - All projects use Formation Design System styling
- **Toast Notifications** - Visual feedback pattern across all plugins
- **Batch Operations** - Apply All pattern for bulk operations

## Reusable Utilities

### Color Utilities
- RGB/Hex conversion (figma-super-powers)
- Color similarity matching (formation-check)
- Token suggestion logic (formation-check, formation-spacing)

### Variable Operations
- Collection scanning (all variable projects)
- Mode mapping (formation-variable-creator, formation-variable-mapper)
- Alias resolution (formation-variable-exporter)

### Component Operations
- Smart detection by usage patterns (formation-component-upgrader)
- Property mapping (formation-component-upgrader)
- Override preservation (formation-component-upgrader)

### Validation Patterns
- Confidence-based matching (formation-spacing)
- Batch validation (figma-super-powers, formation-check)
- Issue categorization (formation-spacing)

## Quick Reference

| Need to... | See Project |
|------------|-------------|
| Validate design system compliance | formation-check, formation-spacing |
| Apply spacing tokens | formation-spacing |
| Upgrade components | formation-component-upgrader |
| Build MCP integration | figma-super-powers |
| Implement clean architecture | figma-super-powers |
| Export variables to code | formation-variable-exporter |
| Map variables | formation-variable-mapper |
| Create variables across files | formation-variable-creator |
| Add natural language input | formation-variable-mapper |

## When Building New Plugins

1. **Simple plugins** - Use ES5 pattern from formation-check
2. **Complex plugins** - Use TypeScript + clean architecture from figma-super-powers
3. **Variable operations** - Reference variable-exporter, variable-creator, variable-mapper
4. **Validation** - Follow formation-check or formation-spacing patterns
5. **MCP integration** - Use figma-super-powers as reference

## Project Locations

All projects are in `~/Documents/GitHub/`:
- `figma-super-powers/`
- `formation-check/`
- `formation-component-upgrader/`
- `formation-spacing/`
- `formation-variable-creator/`
- `formation-variable-exporter/`
- `formation-variable-mapper/`

---

**Last Updated**: January 2026  
**Maintained by**: FanDuel Formation Team
