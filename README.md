# FanDuel Development Knowledge Base

A centralized, reusable knowledge base for all FanDuel development projects. This reduces token usage by 60-70% while providing consistent context across multiple projects.

## Quick Navigation

### Formation Design System
- **[Core Tokens](formation-ds/core/)** - Colors, spacing, radius, typography from official Figma files
- **[Business Unit Themes](formation-ds/business-units/)** - Casino, Sportsbook, Picks, Predicts, etc.
- **[Storybook Reference](formation-ds/storybook-reference.md)** - React component documentation
- **[Confluence Links](formation-ds/confluence-links.md)** - Additional Formation documentation
- **[Validation Rules](formation-ds/validation-rules.md)** - DS compliance checking

### Company Patterns
- **[Architecture](company-patterns/architecture/)** - Clean architecture, DDD, hexagonal patterns
- **[API Standards](company-patterns/api-standards/)** - REST conventions, error handling
- **[Code Standards](company-patterns/code-standards/)** - TypeScript, naming, documentation

### Approved Tools
- **[MCP Servers](approved-tools/mcp-servers.md)** - Security-vetted MCP servers
- **[Atlassian MCP](approved-tools/atlassian-mcp.md)** - Jira and Confluence integration
- **[Cursor Configuration](approved-tools/cursor-config.md)** - IDE setup guide

### Figma Development
- **[Plugin Architecture](figma-specific/plugin-architecture.md)** - Common plugin patterns
- **[Plugin Constraints](figma-specific/plugin-constraints.md)** - Figma limitations and workarounds
- **[Figma API Reference](figma-specific/figma-api-reference.md)** - Common API operations
- **[WebSocket Bridge](figma-specific/websocket-bridge.md)** - Bridge server pattern

### Templates
- **[.cursorrules Template](templates/cursorrules-template.md)** - Project .cursorrules template
- **[README Template](templates/project-readme-template.md)** - Project README structure
- **[MCP Tool Template](templates/mcp-tool-template.md)** - MCP tool documentation format

## How to Use

### For New Projects

1. **Copy the template:**
   ```bash
   cp ~/Documents/GitHub/fanduel-dev-knowledge/templates/cursorrules-template.md ~/Documents/GitHub/your-project/.cursorrules
   ```

2. **Customize for your project:**
   - Update project name and description
   - Add project-specific tech stack
   - Keep references to shared knowledge intact

3. **Start building:**
   - Formation DS tokens already documented
   - Architecture patterns already explained
   - Approved tools already listed

### For Existing Projects

Add to your project's `.cursorrules`:

```markdown
## Shared FanDuel Knowledge

**Formation DS:**
- Colors: ~/Documents/GitHub/fanduel-dev-knowledge/formation-ds/core/colors.md
- Spacing: ~/Documents/GitHub/fanduel-dev-knowledge/formation-ds/core/spacing.md
- Typography: ~/Documents/GitHub/fanduel-dev-knowledge/formation-ds/core/typography.md

**Architecture:**
- Clean Architecture: ~/Documents/GitHub/fanduel-dev-knowledge/company-patterns/architecture/clean-architecture.md
- Command Pattern: ~/Documents/GitHub/fanduel-dev-knowledge/company-patterns/architecture/command-pattern.md

**Tools:**
- MCP Servers: ~/Documents/GitHub/fanduel-dev-knowledge/approved-tools/mcp-servers.md
```

## Authoritative Sources

All Formation Design System documentation is extracted from official Figma files:

### Core Foundation
- **Core Components**: [Figma File](https://www.figma.com/design/prQIPGE33uoH1SyxfVTFKT/%E2%9A%A1%EF%B8%8F-CORE-COMPONENTS?node-id=55-128&p=f&t=kcJlRKTVda3OnyKw-0)
- **FanDuel Variable Theme**: [Figma File](https://www.figma.com/design/9gJbs4Xti15jTaf3hsgrVS/%E2%9A%A1%EF%B8%8F-FANDUEL-VARIABLE-THEME?m=dev)
- **Typography Library**: [Figma File](https://www.figma.com/design/524jb8ZmEXMGcb63bKQtTv/%E2%9A%A1%EF%B8%8F-TYPOGRAPHY-LIBRARY?node-id=24-11&p=f&t=28K1fkVyqbE5bhmg-0)

### Business Unit Themes
- **Casino**: [Figma File](https://www.figma.com/design/yNvR3pYhRX3SSoO2NBSlsK/%F0%9F%9F%A3-Casino-Variable-Theme)
- **Faceoff**: [Figma File](https://www.figma.com/design/aHgN6dNggHtMPWRWTg8YW7/Faceoff-Theme--Via-Template-)
- **Fantasy**: [Figma File](https://www.figma.com/design/dTZVaPCzjDwEiNauO2jIFz/Fantasy-Theme--Via-Template-)
- **Lottery**: [Figma File](https://www.figma.com/design/e1P86bukeNV2mIHRY5Eu57/Lotto-Shop-Theme-Extension)
- **Picks**: [Figma File](https://www.figma.com/design/ZDkb6CEhx2mpguB3xxOZb6/Picks-Theme-Extension)
- **Predicts**: [Figma File](https://www.figma.com/design/NNkWJaRTcHtQH0dOHrgTjC/Predicts-Theme-Extension)
- **Racing**: [Figma File](https://www.figma.com/design/NNkWJaRTcHtQH0dOHrgTjC/Predicts-Theme-Extension)
- **Sportsbook**: [Figma File](https://www.figma.com/design/DYIB18bksdl3DwHwBktUL7/%F0%9F%94%B5-Sportsbook-Theme-Extension)

### Technical Documentation
- **Formation Storybook**: http://formation-storybook.s3-website-us-east-1.amazonaws.com/prod/react/
- **Confluence Foundations**: https://fanduel.atlassian.net/wiki/spaces/FOR/pages/307655180988/Foundations
- **Confluence Overview**: https://fanduel.atlassian.net/wiki/x/KwSfpkc

## Benefits

### Token Efficiency
- **60-70% reduction** in documentation token usage
- Essential context always available (.cursorrules)
- Detailed docs loaded only when needed

### Consistency
- Single source of truth for Formation DS
- Same architecture patterns everywhere
- Same company standards across all projects

### Maintainability
- Update once, apply everywhere
- Clear documentation structure
- Easy to find information

### Scalability
- Add 10 projects, shared knowledge loaded once
- New projects set up in 10 minutes
- No duplication of documentation

## Structure

```
fanduel-dev-knowledge/
├── README.md (this file)
├── formation-ds/
│   ├── core/                     # Official Figma extractions
│   ├── business-units/           # BU theme extensions
│   ├── storybook-reference.md
│   ├── confluence-links.md
│   ├── validation-rules.md
│   └── migration-guide.md
├── company-patterns/
│   ├── architecture/
│   ├── api-standards/
│   └── code-standards/
├── approved-tools/
│   ├── mcp-servers.md
│   ├── atlassian-mcp.md
│   └── cursor-config.md
├── figma-specific/
│   ├── plugin-architecture.md
│   ├── plugin-constraints.md
│   ├── figma-api-reference.md
│   └── websocket-bridge.md
└── templates/
    ├── cursorrules-template.md
    ├── project-readme-template.md
    └── mcp-tool-template.md
```

## Contributing

### Updating Shared Knowledge

1. **Formation DS updates**: Extract from official Figma files
2. **Pattern updates**: Improve based on project learnings
3. **Tool additions**: Document new approved tools with security reviews

### Guidelines

- Keep docs concise and focused (~300-600 tokens each)
- Link to authoritative sources
- Include practical examples
- Cross-reference related documentation

## Projects Using This Knowledge Base

- **Figma Super Powers** - Figma plugin with MCP integration
- **formation-variable-mapper** - Variable mapping plugin
- **formation-check** - Design system compliance checker
- **formation-component-upgrader** - Component version management
- **formation-spacing** - Spacing validation with confidence scoring
- **formation-variable-creator** - Cross-file variable creation
- **formation-variable-exporter** - Variable to JavaScript export

## Agent Skill

A comprehensive Cursor agent skill provides global access to all knowledge in this repository:

**Location**: `~/.cursor/skills/fanduel-projects/SKILL.md`

**Capabilities**:
- Formation DS tokens on demand
- Architecture pattern guidance
- Figma plugin development help
- Project-specific utilities and patterns
- Approved tools and MCP servers

**Usage**: Simply ask questions from any project - "What's brand/primary?", "How does formation-check validate?", "Show me the clean architecture pattern"

The skill works globally across all your projects thanks to absolute path references to this knowledge base.

## Support

For questions or issues:
1. Check the relevant documentation section
2. Review authoritative sources (Figma files, Confluence)
3. Contact the Formation team

---

**Last Updated**: January 2026  
**Maintained by**: Formation Design System Team
