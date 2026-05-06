# Formation Design System AI-Ready Knowledge Base

A centralized, reusable knowledge base for all FanDuel development projects. This reduces token usage by 60-70% while providing consistent context across multiple projects.

## Quick Navigation

### Formation Design System
- **[Core Tokens](.agents/skills/formation-design-system/references/core/)** - Colors, spacing, radius, typography from official Figma files
- **[Business Unit Themes](.agents/skills/formation-design-system/references/business-units/)** - Casino, Sportsbook, Picks, Predicts, etc.
- **[Validation Rules](.agents/skills/formation-design-system/references/validation-rules.md)** - DS compliance checking

### Company Patterns
- **[Architecture](company-patterns/architecture/)** - Clean architecture, DDD, hexagonal patterns

### Approved Tools
- **[MCP Servers](approved-tools/mcp-servers.md)** - Security-vetted MCP servers

### Figma Make
- **[Formation Figma Make template](https://www.figma.com/make/7zIyVB72qQuqW2gZSZFBiL/)** - Start from Internal example when creating Make, or open file and use **Use in new file**
- **[Guidelines](figma-make/figma-make-guidelines.md)** - Formation rules for Figma Make (paste into Adjust guidelines on the official template, or use as reference for custom files; all 10 BU themes)

### Figma Development
- **[Plugin Architecture](figma-specific/plugin-architecture.md)** - Common plugin patterns
- **[Plugin Constraints](figma-specific/plugin-constraints.md)** - Figma limitations and workarounds

### Templates
- **[.cursorrules Template](templates/cursorrules-template.md)** - Project .cursorrules template
- **[README Template](templates/project-readme-template.md)** - Project README structure

## How to Use

### For New Projects

1. **Copy the template:**
   ```bash
   cp ~/Documents/GitHub/fanduel-ds-knowledge/templates/cursorrules-template.md ~/Documents/GitHub/your-project/.cursorrules
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
- Colors: ~/Documents/GitHub/fanduel-ds-knowledge/.agents/skills/formation-design-system/references/core/colors.md
- Spacing: ~/Documents/GitHub/fanduel-ds-knowledge/.agents/skills/formation-design-system/references/core/spacing.md
- Typography: ~/Documents/GitHub/fanduel-ds-knowledge/.agents/skills/formation-design-system/references/core/typography.md

**Architecture:**
- Clean Architecture: ~/Documents/GitHub/fanduel-ds-knowledge/company-patterns/architecture/clean-architecture.md
- Command Pattern: ~/Documents/GitHub/fanduel-ds-knowledge/company-patterns/architecture/command-pattern.md

**Tools:**
- MCP Servers: ~/Documents/GitHub/fanduel-ds-knowledge/approved-tools/mcp-servers.md
```

## Using with AI Tools

Different tools need different things. Skills (`.agents/skills/`) are executable workflows for local IDE agents only. Cloud tools need context injection — a document pasted into their system prompt or Knowledge section.

| Tool | What to use | How |
|------|-------------|-----|
| **Cursor / Windsurf** | `.cursorrules` + all 6 skills | Copy `templates/cursorrules-template.md` → see "How to Use" above |
| **Claude Code** | `AGENTS.md` auto-loads | Clone repo; AGENTS.md is picked up automatically |
| **Figma Make** | Official template + [`figma-make-guidelines.md`](figma-make/figma-make-guidelines.md) | New Make file → **Start from an example** → Internal Formation Powered card, **or** open the [template](https://www.figma.com/make/7zIyVB72qQuqW2gZSZFBiL/) → **Use in new file**. Guidelines optional for custom templates. |
| **Lovable / Bolt** | `coach/formation-reference.md` | Paste full file into Lovable's Knowledge section or system prompt |
| **v0.dev / other cloud tools** | `coach/formation-reference.md` | Paste into the system prompt; trim if the tool has a short context limit |

### Key rule for cloud tools
Cloud tools (Figma Make, Lovable, v0.dev) cannot read local files. Do **not** reference `~/Documents/...` paths. Paste the relevant `coach/` file directly into the tool.

---

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
- **Racing**: [Figma File](https://www.figma.com/design/M8mhjVPWAaUWdSbhhHnf2x/%F0%9F%96%8D%EF%B8%8F-Racing-Theme-Extension)
- **Sportsbook**: [Figma File](https://www.figma.com/design/DYIB18bksdl3DwHwBktUL7/%F0%9F%94%B5-Sportsbook-Theme-Extension)

### Technical Documentation
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
fanduel-ds-knowledge/
├── README.md (this file)
├── AGENTS.md (AI agent rules + full Formation token reference — auto-loaded by Claude Code)
├── figma-make/                   # Official Figma Make template + Formation rules for Make
│   ├── README.md                 # Start from example / Use in new file; maintainer notes
│   └── figma-make-guidelines.md  # Paste into Adjust guidelines (official file) or reference for custom Make (all 10 BU themes)
├── coach/                        # Context files for cloud AI tools (Lovable, v0.dev)
│   ├── formation-reference.md    # Full self-contained reference (paste into Lovable/Bolt/v0)
│   ├── figma-make-context.md     # Optional lightweight snippet for Figma Make context window
│   ├── guidelines.md             # Figma-native design rules
│   └── team.md                   # Formation team directory + escalation routing
├── .agents/skills/               # Executable skills for local IDE agents (Cursor, Claude Code)
│   ├── formation-design-system/  # Full Formation DS reference (pipeline-generated)
│   │   ├── SKILL.md
│   │   └── references/
│   │       ├── core/             # colors, spacing, typography, radius, components, icons, icon-catalog
│   │       ├── business-units/   # BU theme extensions (10 themes)
│   │       └── validation-rules.md
│   ├── refresh-formation-tokens/ # Regenerate docs after token package update
│   ├── validate-formation-usage/ # Audit code/Figma for DS compliance
│   ├── create-figma-plugin/      # Scaffold a new Figma plugin
│   ├── publish-to-confluence/    # Push docs to Confluence via MCP
│   └── integrate-knowledge-base/ # Wire up Formation refs in a new project
├── company-patterns/
│   └── architecture/             # Clean architecture, command pattern
├── approved-tools/
│   └── mcp-servers.md
├── figma-specific/
│   ├── plugin-architecture.md
│   ├── plugin-constraints.md
│   └── design-system-audit.md   # Figma vs KB gap audit (2026-03-25)
├── fanduel-projects/             # Project documentation
│   ├── formation-token-pipeline.md
│   ├── figma-super-powers.md     # formation-studio
│   └── (other plugin docs)
├── confluence-docs/              # Content staged for Confluence publishing
└── templates/
    ├── cursorrules-template.md
    └── project-readme-template.md
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

- **Formation Studio** (formerly Figma Super Powers) - Figma plugin with MCP integration
- **formation-variable-mapper** - Variable mapping plugin
- **formation-check** - Design system compliance checker
- **formation-component-upgrader** - Component version management
- **formation-spacing** - Spacing validation with confidence scoring
- **formation-variable-creator** - Cross-file variable creation
- **formation-variable-exporter** - Variable to JavaScript export

## Agent Skills

Skills are procedural, task-oriented prompts — invoke them when you need to *do* something, not just look something up. They live in `.agents/skills/`.

### Reference skill (for token lookups)

**`formation-design-system`** — Full Formation token reference (colors, spacing, typography, radius, all 13 themes, all components). Invoke with `/formation-design-system`.
Location: `.agents/skills/formation-design-system/SKILL.md`

### Task skills

| Skill | Invoke when you want to… |
|-------|--------------------------|
| `validate-formation-usage` | Audit code or Figma for Formation DS compliance |
| `refresh-formation-tokens` | Regenerate token docs after a package version bump |
| `create-figma-plugin` | Scaffold a new FanDuel Figma plugin |
| `publish-to-confluence` | Publish knowledge base docs to Confluence |
| `integrate-knowledge-base` | Wire up Formation references in a new or existing project |

All task skills are in `.agents/skills/{skill-name}/SKILL.md`.

## Support

For questions or issues:
1. Check the relevant documentation section
2. Review authoritative sources (Figma files, Confluence)
3. Contact the Formation team

---

**Last Updated**: March 2026
**Maintained by**: Formation Design System Team
