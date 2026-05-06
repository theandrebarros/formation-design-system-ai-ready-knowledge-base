# Approved MCP Servers and Tools

List of Model Context Protocol (MCP) servers approved for use at FanDuel, with security reviews and usage guidelines.

## Overview

MCP servers must be security-reviewed and approved before use. All MCP traffic goes through the `fd-mcp-gateway` for centralized security and configuration management.

## Approved MCP Servers

### Atlassian MCP (Jira & Confluence)

**Status**: ✅ APPROVED (Oct 1, 2025)  
**Risk Rating**: MEDIUM  
**Security Reviewer**: @Eamon Marmion (Sep 19, 2025)

**Purpose**:
- Summarize and search Jira and Confluence content
- Create and update issues or pages
- Bulk process tasks from meeting notes or specs

**Authentication**: OAuth 2.0  
**Data Access**: User's existing Atlassian permissions only

**Available Tools**:
- Jira: Search issues, create/update issues, bulk create
- Confluence: Summarize pages, create pages, navigate spaces
- Combined: Link Jira tickets to Confluence pages

**Security Notes**:
- Product Security team completed security testing (Sep 2025)
- No major vulnerabilities found
- Access scoped to user's existing permissions
- OAuth tokens are session-based and scoped to cloud site

**Installation**:
```bash
fd-mcp-gateway install-remote-extension
# Add to ~/.cursor/fd-mcp-gateway.json
```

**Usage Example**:
```
"Find all open bugs in Project Alpha"
"Summarize the Q2 planning page"
"Create a Jira story titled 'Redesign onboarding'"
```

**Documentation**: See user rules for full security review

### Figma MCP (Remote)

**Status**: ✅ APPROVED  
**Risk Rating**: MEDIUM  
**Purpose**: Access Figma files, read design tokens, extract component data

**Authentication**: Figma Personal Access Token  
**Data Access**: User's Figma file permissions

**Available Tools**:
- Read file structure
- Extract variables/tokens
- Get component properties
- Read text and node data

**Security Notes**:
- Read-only access to Figma files
- Token scoped to user's access level
- No write operations (safer)
- Token stored securely in MCP gateway

**Installation**: Via fd-mcp-gateway remote MCPs

**Usage Example**:
```
"Get all color variables from the Formation Figma file"
"Extract spacing tokens from FanDuel Variable Theme"
"List components in the Core Components file"
```

### Browser MCP (cursor-ide-browser)

**Status**: ✅ APPROVED (Internal Tool)  
**Risk Rating**: LOW  
**Purpose**: Navigate web pages and interact with page elements

**Authentication**: None required (local tool)  
**Data Access**: Public web pages

**Available Tools**:
- browser_navigate: Navigate to URLs
- browser_snapshot: Get page structure
- browser_click: Click elements
- browser_type: Type into inputs
- browser_tabs: Manage browser tabs

**Security Notes**:
- Local browser automation
- No data sent externally
- Useful for testing web apps
- Cannot access authenticated pages (unless you're logged in)

**Usage Example**:
```
"Test the search input on localhost:3000"
"Click the submit button and check the result"
```

**Important**: Lock browser before interactions:
```
1. browser_navigate → open page
2. browser_lock → lock for interactions
3. browser_click/type → interact
4. browser_unlock → release when done
```

## Using MCP Servers

### Gateway Installation

```bash
# Install fd-mcp-gateway
PIP_EXTRA_INDEX_URL="https://fanduel.jfrog.io/artifactory/api/pypi/fd-python/simple" \
  pipx install fd-mcp-gateway

# Install Cursor extension (for remote MCPs)
fd-mcp-gateway install-remote-extension

# Create config
fd-mcp-gateway create-config
```

### Configuration

Remote MCPs are configured in `~/.cursor/fd-mcp-gateway.json`:

```json
{
  "remote_servers": {
    "atlassianMcp": {
      "url": "https://mcp.atlassian.com",
      "auth": {
        "type": "oauth2"
      }
    },
    "figmaRemoteMcp": {
      "url": "https://mcp.figma.com",
      "auth": {
        "type": "token",
        "token_env": "FIGMA_ACCESS_TOKEN"
      }
    }
  }
}
```

### Authentication

**Atlassian OAuth**:
- Browser window opens on first use
- Log in with Atlassian account
- Approve requested scopes
- Token valid for limited time

**Figma Token**:
- Generate Personal Access Token in Figma
- Set environment variable: `export FIGMA_ACCESS_TOKEN=your_token`
- Restart Cursor

## MCP Tool Naming Conventions

### Atlassian Tools
- `jira_*`: Jira operations (jira_search, jira_create_issue)
- `confluence_*`: Confluence operations (confluence_summarize, confluence_create_page)

### Figma Tools
- `figma_*`: Figma operations (figma_get_file, figma_get_variables)

### Browser Tools
- `browser_*`: Browser operations (browser_navigate, browser_click)

## Security Best Practices

### Do ✅
- Use approved MCP servers only
- Keep gateway updated
- Use environment variables for tokens
- Review MCP tool permissions before using
- Use minimal scopes necessary

### Don't ❌
- Install unapproved MCP servers
- Share access tokens
- Hardcode tokens in code
- Grant excessive permissions
- Bypass gateway security checks

## Restricted Tools

Some MCP tools may have restrictions:

**Write Operations**: Use with caution
- Creating/updating Jira issues: OK for automation
- Creating Confluence pages: OK for documentation
- Bulk operations: Review before executing

**Data Exports**: Must follow data classification
- Exporting Jira data: Check for sensitive info
- Downloading Confluence content: Verify data classification

## Request New MCP Server

To request approval for a new MCP server:

1. **Submit request** to #builder-tools Slack channel
2. **Provide**:
   - MCP server name and purpose
   - Source/vendor information
   - Required permissions
   - Business justification
   - Data classification impacts

3. **Security review**:
   - Product Security team reviews
   - Risk assessment performed
   - Security testing may be required

4. **Approval/Rejection**:
   - Approved: Added to allowlist
   - Rejected: Provide alternative or address concerns

**Timeline**: 2-4 weeks for security review

## Troubleshooting

### MCP Not Working

**Check gateway status**:
```bash
fd-mcp-gateway --help
```

**Verify configuration**:
```bash
cat ~/.cursor/fd-mcp-gateway.json
```

**Check logs**:
```bash
tail -f ~/.cursor/mcp-gateway.log
```

### Authentication Failures

**Atlassian**:
- Re-authenticate via browser flow
- Check token expiration
- Verify Atlassian permissions

**Figma**:
- Regenerate Personal Access Token
- Check environment variable is set
- Restart Cursor after setting token

### Common Issues

**"MCP server not found"**:
- Server not in allowlist
- Check spelling of server name
- Request approval if needed

**"Invalid credentials"**:
- Token expired or invalid
- Re-authenticate
- Check environment variables

**"Gateway connection failed"**:
- Gateway not running
- Restart Cursor
- Reinstall gateway extension

## Related Documentation

- **[Atlassian MCP Details](atlassian-mcp.md)** - Full Atlassian MCP documentation
- **[Cursor Configuration](cursor-config.md)** - Cursor IDE setup
- **[Security Best Practices](../company-patterns/security/)** - Security guidelines

## Support

- **Slack**: #builder-tools
- **Gateway Issues**: Create ticket in ARB
- **Security Questions**: Contact Product Security team

---

**Last Updated**: January 2026  
**Gateway Version**: 2.x  
**Maintained by**: Builder Tools team
