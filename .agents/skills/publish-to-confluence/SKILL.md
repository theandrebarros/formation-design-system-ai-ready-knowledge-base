---
name: publish-to-confluence
description: Skill for publishing knowledge base documentation to Confluence under Foundations > AI Automation using the Atlassian MCP. Invoke when asked to publish, update, or create Confluence pages from knowledge base content.
---

# Publish to Confluence — Skill

Use this skill when asked to: "publish this to Confluence", "create a Confluence page", "update the Confluence docs", "push this to Foundations".

> **Path note:** All paths below assume this repo is cloned at `~/Documents/GitHub/fanduel-ds-knowledge`. If yours is elsewhere, substitute accordingly.

---

## Target structure in Confluence

```
Foundations (ID: 307655180988)
└── 🤖 AI Automation  ← main page (ai-automation-overview.md)
    ├── What It Contains  ← what-it-contains.md
    ├── How to Use It     ← how-to-use-it.md
    └── Projects and Benefits ← projects-and-benefits.md
```

Confluence space: **Formation (FOR)**
Foundations URL: https://fanduel.atlassian.net/wiki/x/vIKtoUc

---

## Method 1: Atlassian MCP (preferred)

The Atlassian MCP must be active. If it's not responding, see troubleshooting below.

### Step 1 — Check MCP is active

Use `mcp__claude_ai_Atlassian__atlassianUserInfo` to verify connection.

### Step 2 — Read the source file

Read the markdown file to publish from `~/Documents/GitHub/fanduel-ds-knowledge/confluence-docs/`.

### Step 2.5 — Discover cloudId and spaceId (first time only)

The MCP requires `cloudId` and `spaceId`, not the space key (`FOR`). Look them up once:

```
mcp__claude_ai_Atlassian__getAccessibleAtlassianResources  → returns cloudId for your site
mcp__claude_ai_Atlassian__getConfluenceSpaces (cloudId: <id>)  → find the Formation space, copy its ID
```

Save these for the steps below.

### Step 2.6 — Check if page already exists

Before creating, search for the page to avoid duplicates:

```
mcp__claude_ai_Atlassian__searchConfluenceUsingCql
  cql: 'title = "PAGE TITLE" AND space = "FOR"'
  cloudId: <from Step 2.5>
```

- If results found → the page exists. Use `updateConfluencePage` with its ID (skip to "Updating existing" below).
- If no results → proceed to create.

### Step 3 — Create or update the page

**Creating new**:
Use `mcp__claude_ai_Atlassian__createConfluencePage` with:
- `cloudId`: your Atlassian cloud ID (from Step 2.5)
- `spaceId`: Formation space ID (from Step 2.5 — not the key `FOR`)
- `parentId`: `307655180988` (Foundations page) or the AI Automation page ID (for subpages)
- `title`: as specified
- `body`: page content (markdown or ADF)
- `contentFormat`: `"markdown"` for simple pages

**Updating existing**:
Use `mcp__claude_ai_Atlassian__updateConfluencePage` with:
- `cloudId`: your Atlassian cloud ID
- `pageId`: the page ID to update
- `body`: updated content
- `contentFormat`: `"markdown"`

### Step 4 — Create subpages in order

1. Main page: "🤖 AI Automation" from `ai-automation-overview.md`
2. Subpage: "What It Contains" from `what-it-contains.md`
3. Subpage: "How to Use It" from `how-to-use-it.md`
4. Subpage: "Projects and Benefits" from `projects-and-benefits.md`

### Step 5 — Notify the Formation team (optional)

After publishing, notify the Formation channel on Slack:

1. Find the channel: `mcp__claude_ai_Slack__slack_search_channels` (search: `"formation"`)
2. Send a message: `mcp__claude_ai_Slack__slack_send_message` with a brief note:
   > "Formation AI Automation docs updated in Confluence: [link to the page]"

---

## Method 2: Manual copy/paste

If MCP is unavailable:

1. Go to https://fanduel.atlassian.net/wiki/x/vIKtoUc (Foundations)
2. Click "+" → Create child page
3. Title: "🤖 AI Automation"
4. Paste content from `confluence-docs/ai-automation-overview.md`
5. Repeat for each subpage under the main page

---

## Markdown → Confluence conversion notes

| Markdown | Confluence |
|----------|-----------|
| `# Heading` | H1 |
| `` ```bash `` blocks | Code macro with language |
| `[text](url)` links | Inline links |
| Tables | Tables (paste directly, may need formatting) |
| `**bold**` | Bold |

---

## Troubleshooting MCP

**MCP not responding**:
```bash
# Check gateway config
cat ~/.cursor/fd-mcp-gateway.json

# Restart gateway
fd-mcp-gateway --help

# Reinstall extension if needed
fd-mcp-gateway install-remote-extension
```

Then restart Cursor completely before retrying.

### Large page bodies freeze or time out

`updateConfluencePage` sends the **full** `body` in one request. Markdown reports of **~10 KB+** (many tables) often cause **long hangs** or **client/gateway timeouts** on the Atlassian remote MCP path.

**Mitigations:**

1. **Manual paste** — Edit the Confluence page and paste from `confluence-docs/*.md` (see Method 2).
2. **Split content** — Put long tables on a **child page** and link from the parent; run smaller MCP updates.
3. **Payload file + automation outside chat** — Generate JSON (see `confluence-docs/SYNC-CASINO-CONFLUENCE.md` for the Casino report example) and invoke the MCP or REST API from a **short** terminal job, not a long agent turn.

---

## Source files

All content to publish lives in:
`~/Documents/GitHub/fanduel-ds-knowledge/confluence-docs/`

- `ai-automation-overview.md` — main page
- `what-it-contains.md` — subpage 1
- `how-to-use-it.md` — subpage 2
- `projects-and-benefits.md` — subpage 3
