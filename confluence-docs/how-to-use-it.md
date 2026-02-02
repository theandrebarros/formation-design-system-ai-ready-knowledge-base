# How to Use It

Comprehensive guide for integrating the FanDuel Development Knowledge Base into your projects and workflows.

## Quick Start

### For New Projects

**Step 1: Copy the Template**
```bash
cp ~/Documents/GitHub/fanduel-dev-knowledge/templates/cursorrules-template.md \
   ~/Documents/GitHub/your-project/.cursorrules
```

**Step 2: Customize**
- Update project name and description
- Add project-specific tech stack
- Keep references to shared knowledge intact

**Step 3: Start Building**
- Formation DS tokens already documented
- Architecture patterns already explained
- Approved tools already configured

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

## Integration Methods

### Method 1: .cursorrules References (Recommended)

**Best for**: All projects

**How it works**:
- Add file path references in your `.cursorrules`
- AI agent loads only essential context initially
- Detailed docs loaded on-demand when needed

**Benefits**:
- 60-70% token reduction
- Fast initial load
- Full context available when needed

**Example**:
```markdown
## Formation Design System
When working with colors, spacing, or typography, reference:
- ~/Documents/GitHub/fanduel-dev-knowledge/formation-ds/core/colors.md
- ~/Documents/GitHub/fanduel-dev-knowledge/formation-ds/core/spacing.md
```

### Method 2: Global Agent Skill

**Best for**: Developers working across multiple projects

**How it works**:
- Install global Cursor agent skill
- Access knowledge from any project with natural language
- No project-specific configuration needed

**Location**: `~/.cursor/skills/fanduel-projects/SKILL.md`

**Usage Examples**:
```
"What's the brand/primary color?"
"Show me the spacing tokens"
"How does formation-check validate colors?"
"What's the clean architecture pattern?"
```

**Benefits**:
- Works globally across all projects
- No repetition in project `.cursorrules`
- Natural language queries

### Method 3: Direct File References

**Best for**: One-off queries or specific documentation needs

**How it works**:
- Use `@` symbol in Cursor to reference files
- AI agent loads specific documentation

**Example**:
```
@~/Documents/GitHub/fanduel-dev-knowledge/formation-ds/core/colors.md
What colors should I use for error states?
```

## Usage by Role

### Frontend Developers

#### Building UI Components
```markdown
## Project Setup
Reference Formation tokens:
- Colors: ~/Documents/GitHub/fanduel-dev-knowledge/formation-ds/core/colors.md
- Spacing: ~/Documents/GitHub/fanduel-dev-knowledge/formation-ds/core/spacing.md
- Typography: ~/Documents/GitHub/fanduel-dev-knowledge/formation-ds/core/typography.md
- Components: ~/Documents/GitHub/fanduel-dev-knowledge/formation-ds/core/components.md
```

#### Business Unit Projects
Add BU-specific theme:
```markdown
## Sportsbook Theme
- BU Theme: ~/Documents/GitHub/fanduel-dev-knowledge/formation-ds/business-units/sportsbook.md
```

#### Common Questions
- "What's the correct spacing for this button?"
- "Which color token should I use for success messages?"
- "What's the typography scale for headings?"

### Figma Plugin Developers

#### Plugin Projects
```markdown
## Figma Plugin Development
- Architecture: ~/Documents/GitHub/fanduel-dev-knowledge/figma-specific/plugin-architecture.md
- Constraints: ~/Documents/GitHub/fanduel-dev-knowledge/figma-specific/plugin-constraints.md

## Reference Projects
- Figma Super Powers: ~/Documents/GitHub/fanduel-dev-knowledge/fanduel-projects/figma-super-powers.md
- Formation Check: ~/Documents/GitHub/fanduel-dev-knowledge/fanduel-projects/formation-check.md
```

#### Reusable Patterns
- Token validation: See `formation-check.md`
- Color conversion: See `figma-super-powers.md`
- Variable operations: See `formation-variable-*.md`
- Component detection: See `formation-component-upgrader.md`

#### Common Questions
- "How do I validate colors against Formation tokens?"
- "What's the pattern for cross-file variable creation?"
- "How does formation-spacing calculate confidence scores?"

### Full-Stack Developers

#### Architecture Reference
```markdown
## Company Architecture Patterns
- Clean Architecture: ~/Documents/GitHub/fanduel-dev-knowledge/company-patterns/architecture/clean-architecture.md
- Command Pattern: ~/Documents/GitHub/fanduel-dev-knowledge/company-patterns/architecture/command-pattern.md
```

#### MCP Tool Integration
```markdown
## Approved MCP Tools
- MCP Servers: ~/Documents/GitHub/fanduel-dev-knowledge/approved-tools/mcp-servers.md
```

#### Common Questions
- "How should I structure this feature using clean architecture?"
- "Which MCP servers are approved for use?"
- "How do I implement the command pattern?"

### DevOps & Tools Teams

#### Tool Approval Reference
```markdown
## Security & Tools
- Approved MCP Servers: ~/Documents/GitHub/fanduel-dev-knowledge/approved-tools/mcp-servers.md
```

#### Common Questions
- "Which MCP servers have been security-reviewed?"
- "What's the gateway configuration for Atlassian MCP?"
- "How do developers authenticate with approved tools?"

## Best Practices

### Token Efficiency

**Do ✅**
- Reference files in `.cursorrules`, don't copy content
- Load specific docs only when needed
- Use global agent skill for cross-project queries

**Don't ❌**
- Copy entire documentation into project `.cursorrules`
- Load all documentation upfront
- Duplicate knowledge base content in projects

### Keeping Context Fresh

**Update Strategy**:
1. Knowledge base is maintained centrally
2. Projects reference via absolute paths
3. Updates propagate automatically
4. No project changes needed for knowledge base updates

**When to Reload**:
- Formation DS tokens updated in Figma
- New architecture patterns added
- New approved MCP tools added
- Project documentation improved

### Maintenance

**Knowledge Base Updates**:
1. Pull latest changes: `cd ~/Documents/GitHub/fanduel-dev-knowledge && git pull`
2. Review changes: `git log --oneline -10`
3. Continue using - no project configuration changes needed

**Project Configuration**:
- Keep `.cursorrules` references to absolute paths
- Don't hardcode token values
- Link to knowledge base, don't duplicate

## Common Workflows

### Workflow 1: Validating Design System Compliance

**Scenario**: Ensure UI uses correct Formation tokens

**Steps**:
1. Load relevant token documentation:
   ```
   @~/Documents/GitHub/fanduel-dev-knowledge/formation-ds/core/colors.md
   @~/Documents/GitHub/fanduel-dev-knowledge/formation-ds/core/spacing.md
   ```

2. Ask AI to validate:
   ```
   Review this component and check if it uses correct Formation tokens
   ```

3. Apply suggestions:
   ```
   Update to use suggested Formation tokens
   ```

### Workflow 2: Building a Figma Plugin

**Scenario**: Create new plugin with established patterns

**Steps**:
1. Start with template:
   ```bash
   cp ~/Documents/GitHub/fanduel-dev-knowledge/templates/cursorrules-template.md .cursorrules
   ```

2. Reference similar project:
   ```
   @~/Documents/GitHub/fanduel-dev-knowledge/fanduel-projects/formation-check.md
   Build a plugin similar to formation-check but for [feature]
   ```

3. Use reusable patterns:
   ```
   Use the color validation logic from formation-check
   ```

### Workflow 3: Implementing Clean Architecture

**Scenario**: Structure new feature with proper architecture

**Steps**:
1. Load architecture documentation:
   ```
   @~/Documents/GitHub/fanduel-dev-knowledge/company-patterns/architecture/clean-architecture.md
   ```

2. Review example:
   ```
   Show me how figma-super-powers implements clean architecture
   ```

3. Apply to feature:
   ```
   Structure this feature using clean architecture pattern
   ```

### Workflow 4: Using Approved MCP Tools

**Scenario**: Integrate Confluence or Jira in workflow

**Steps**:
1. Check approved tools:
   ```
   @~/Documents/GitHub/fanduel-dev-knowledge/approved-tools/mcp-servers.md
   ```

2. Configure in project:
   ```
   Set up Atlassian MCP following the approved configuration
   ```

3. Use tools:
   ```
   Create a Confluence page documenting this feature
   ```

## Troubleshooting

### File Not Found

**Issue**: AI agent can't find documentation file

**Solution**:
1. Check path is absolute: `~/Documents/GitHub/...`
2. Verify file exists: `ls ~/Documents/GitHub/fanduel-dev-knowledge/`
3. Pull latest: `cd ~/Documents/GitHub/fanduel-dev-knowledge && git pull`

### Outdated Information

**Issue**: Documentation doesn't match current Figma files

**Solution**:
1. Check for updates: `cd ~/Documents/GitHub/fanduel-dev-knowledge && git pull`
2. Report issue to Formation team
3. Reference authoritative Figma files directly

### Token Usage Too High

**Issue**: AI agent consuming too many tokens

**Solution**:
1. Don't load all docs upfront - use references in `.cursorrules`
2. Load specific files only when needed
3. Use global agent skill for queries instead of loading files

### Agent Can't Access Files

**Issue**: Path references not working

**Solution**:
1. Ensure knowledge base is cloned: `~/Documents/GitHub/fanduel-dev-knowledge/`
2. Use absolute paths starting with `~/`
3. Check file permissions

## Support

### Getting Help

**Knowledge Base Issues**:
- Check GitHub repository
- Contact Formation team
- Slack: #formation-design-system

**MCP Tool Issues**:
- Check approved tools documentation
- Slack: #builder-tools
- Security questions: Product Security team

**Project Integration Help**:
- Review this guide
- Check project README in knowledge base
- Ask in relevant team channel

### Contributing

**Updating Knowledge Base**:
1. Make changes in knowledge base repo
2. Test references in project
3. Submit PR
4. Changes propagate to all projects automatically

**Adding New Patterns**:
1. Document in appropriate folder
2. Update relevant README files
3. Reference in templates
4. Announce to teams

---

**Last Updated**: January 2026  
**Maintained by**: Formation Design System Team  
**Support**: #formation-design-system on Slack
