# Confluence Documentation - 🤖 AI Automation

This folder contains documentation formatted for publishing to Confluence under the Foundations page as a subfolder called "🤖 AI Automation".

## Files

### Main Page
**`ai-automation-overview.md`**
- Overview of the FanDuel Development Knowledge Base
- Purpose and structure
- Key benefits summary
- How it works at a high level

### Subpages

**`what-it-contains.md`**
- Complete inventory of knowledge base content
- Formation DS tokens and business unit themes
- Company patterns and architecture
- Approved tools and MCP servers
- Figma plugin documentation
- Project documentation

**`how-to-use-it.md`**
- Integration guide for projects
- Usage by role (frontend, plugin devs, full-stack, DevOps)
- Best practices and workflows
- Troubleshooting guide

**`projects-and-benefits.md`**
- Real-world projects using the knowledge base
- Measurable benefits and ROI
- Success stories
- Adoption metrics

## Publishing to Confluence

### Option 1: Using Atlassian MCP (Recommended)

If the Atlassian MCP is active in your Cursor session:

1. Restart Cursor to activate the MCP server
2. Use AI to create pages directly:
   ```
   Create a Confluence page under Foundations (ID: 307655180988) 
   titled "🤖 AI Automation" with content from ai-automation-overview.md
   ```
3. Create subpages for each document

### Option 2: Manual Copy/Paste

1. **Navigate to Foundations page**:
   https://fanduel.atlassian.net/wiki/x/vIKtoUc

2. **Create main page**:
   - Click "+" to add child page
   - Title: "🤖 AI Automation"
   - Copy content from `ai-automation-overview.md`
   - Format as needed in Confluence editor

3. **Create subpages** under "🤖 AI Automation":
   - "What It Contains" → `what-it-contains.md`
   - "How to Use It" → `how-to-use-it.md`
   - "Projects and Benefits" → `projects-and-benefits.md`

### Option 3: Confluence Import

1. Convert markdown to Confluence format (if needed)
2. Use Confluence import feature
3. Or use a markdown-to-Confluence converter tool

## Structure in Confluence

```
Foundations
└── 🤖 AI Automation (ai-automation-overview.md)
    ├── What It Contains (what-it-contains.md)
    ├── How to Use It (how-to-use-it.md)
    └── Projects and Benefits (projects-and-benefits.md)
```

## Formatting Notes

### Markdown to Confluence Conversion

**Code blocks**: Confluence supports code blocks with language specification
**Links**: Convert markdown links `[text](url)` to Confluence link format
**Headings**: Markdown `#` becomes Confluence H1, `##` becomes H2, etc.
**Lists**: Both use similar syntax
**Tables**: May need manual formatting in Confluence

### Emojis

- 🤖 AI Automation (main page)
- Other emojis render correctly in Confluence

### Internal Links

Update any internal links to point to actual Confluence pages once created.

## Activating Atlassian MCP

If the MCP isn't working, try:

1. **Restart Cursor completely**
2. **Check gateway configuration**:
   ```bash
   cat ~/.cursor/fd-mcp-gateway.json
   ```
3. **Verify gateway is running**:
   ```bash
   fd-mcp-gateway --help
   ```
4. **Check extension is installed**:
   ```bash
   fd-mcp-gateway install-remote-extension
   ```

## Parent Page Details

**Foundations Page**:
- URL: https://fanduel.atlassian.net/wiki/x/vIKtoUc
- Page ID: 307655180988
- Space: Formation (FOR)

## Next Steps

1. Choose publishing method (MCP, manual, or import)
2. Create main page "🤖 AI Automation" under Foundations
3. Create three subpages with content from the markdown files
4. Link pages together
5. Share with Formation team
6. Add to Formation Confluence navigation

## Maintenance

Update these files when knowledge base changes:
- New Formation DS tokens added
- New projects documented
- New architecture patterns added
- Usage metrics updated

Then republish to Confluence to keep documentation in sync.

---

**Created**: January 2026  
**Target Location**: Foundations > 🤖 AI Automation  
**Maintained by**: Formation Design System Team
