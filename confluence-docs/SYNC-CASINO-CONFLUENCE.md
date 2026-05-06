# Syncing the Casino dark mode report to Confluence (when MCP freezes)

## Why Cursor / Atlassian MCP hangs

- `updateConfluencePage` sends the **entire** `body` string in one JSON payload. For `formation-casino-dark-mode-initiative.md` that is roughly **17 KB+** of markdown plus escaping.
- The **fd-mcp-gateway** → **Atlassian remote MCP** path can **block for a long time** or hit **timeouts**, especially with **Task/subagents** or very large tool arguments. That looks like a “freeze”, not a silent failure.

> **Atlassian MCP transport:** After **30 June 2026**, the HTTP+SSE endpoint at `https://mcp.atlassian.com/v1/sse` will no longer be supported. Clients should move to **Streamable HTTP** at `https://mcp.atlassian.com/v1/mcp`. See the [HTTP+SSE deprecation notice](https://community.atlassian.com/forums/Atlassian-Remote-MCP-Server/HTTP-SSE-Deprecation-Notice/ba-p/3205484).

## Reliable options (pick one)

### A. Manual paste (fastest, no credentials in scripts)

1. Open the draft: [Formation x Casino — Dark Mode Initiative](https://fanduel.atlassian.net/wiki/x/V4Cpgkg) (page id `311429791831`).
2. In Cursor/VS Code, open the canonical markdown:
   - Full report: [`formation-casino-dark-mode-initiative.md`](formation-casino-dark-mode-initiative.md)
   - **Matrix-only extract** (~7 KB, easier to paste): [`_matrix_only_for_confluence.md`](_matrix_only_for_confluence.md)
3. **Edit** the Confluence page → select all → paste → review tables (Confluence sometimes reflows wide tables).

### B. Smaller MCP calls

- Ask the agent to **create or update a separate child page** with only the matrix (`_matrix_only_for_confluence.md`), then add a short link from the main draft. Smaller payloads rarely freeze.

**Done (2026-04-16):** a **compact matrix** child draft was created successfully (small payload, no freeze):

- [Formation x Casino — iPhone colour matrix (Figma 5127:23421)](https://fanduel.atlassian.net/wiki/x/0YCsgkg) — page id `311429988561`, parent [Formation Cross-team Initiatives](https://fanduel.atlassian.net/wiki/spaces/FOR/pages/310246802955).

The **full** narrative + wide tables remain in [`formation-casino-dark-mode-initiative.md`](formation-casino-dark-mode-initiative.md); paste or merge into the main draft when convenient.

### C. Payload file for tooling / automation

- [`_mcp_update_casino_matrix.json`](_mcp_update_casino_matrix.json) — JSON with `cloudId`, `pageId`, `body` (full markdown), `contentFormat: markdown`, `status: draft`. Regenerate anytime with:
  ```bash
  python3 -c "import json; b=open('formation-casino-dark-mode-initiative.md',encoding='utf-8').read(); json.dump({'cloudId':'fanduel.atlassian.net','pageId':'311429791831','body':b,'contentFormat':'markdown','status':'draft','versionMessage':'sync from repo'}, open('_mcp_update_casino_matrix.json','w'),ensure_ascii=False)"
  ```
  Use this with whatever internal automation your team uses to call `updateConfluencePage` **outside** a long chat context (CI, one-off script with gateway, etc.).

## Related skill

See [`.agents/skills/publish-to-confluence/SKILL.md`](../.agents/skills/publish-to-confluence/SKILL.md) — Method 2 (manual) and troubleshooting.
