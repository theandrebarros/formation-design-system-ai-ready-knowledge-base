---
name: create-figma-plugin
description: Step-by-step skill for scaffolding a new FanDuel Figma plugin using established patterns — directory structure, message bridge, command registry, Formation DS styling. Invoke when starting a new Figma plugin project.
---

# Create Figma Plugin — Skill

Use this skill when asked to: "create a new Figma plugin", "scaffold a Figma plugin", "build a Formation Figma plugin", "start a new plugin project".

> **Path note:** All paths below assume this repo is cloned at `~/Documents/GitHub/fanduel-ds-knowledge`. If yours is elsewhere, substitute accordingly.

---

## Prerequisites

Decide the plugin complexity before starting:

| Type | When to use | Reference project |
|------|-------------|-------------------|
| **Simple (ES5, no build)** | Validation, one-shot operations | `formation-check`, `formation-spacing` |
| **Complex (TypeScript + clean arch)** | MCP integration, domains, full DDD | `formation-studio` |

For MCP-enabled plugins, also read: `fanduel-projects/figma-super-powers.md`

---

## Step 1 — Set up directory structure

### Simple plugin (ES5, no build step)
```
plugin-name/
├── code.js           # All plugin logic (ES5 only — no optional chaining, no top-level await)
├── ui.html           # UI (inline script + styles)
└── manifest.json
```

### Complex plugin (TypeScript)
```
plugin-name/
├── plugin/
│   ├── core/         # Infrastructure (errors, logger, types)
│   ├── adapters/     # Figma API wrappers
│   ├── domains/      # Business features (one folder per domain)
│   ├── shared/       # Shared utilities
│   ├── registry/     # Command registry
│   └── code.ts       # Entry point
├── web-ui/
│   ├── index.html
│   ├── styles/
│   ├── components/
│   └── services/
│       └── plugin-bridge.ts   # Message bridge
├── manifest.json
└── package.json
```

---

## Step 2 — Create manifest.json

```json
{
  "name": "Plugin Name",
  "id": "unique-plugin-id",
  "api": "1.0.0",
  "main": "plugin/code.ts",
  "ui": "web-ui/index.html",
  "editorType": ["figma"]
}
```

---

## Step 3 — Set up message bridge (complex plugins only)

UI → Plugin communication via `postMessage`. Use the request/response pattern with unique IDs:

```typescript
// web-ui/services/plugin-bridge.ts
export class PluginBridge {
  private pendingRequests = new Map<string, { resolve: Function; reject: Function }>();

  async sendCommand<T>(command: string, params: any): Promise<T> {
    const id = Math.random().toString(36).slice(2);
    return new Promise((resolve, reject) => {
      this.pendingRequests.set(id, { resolve, reject });
      parent.postMessage({ pluginMessage: { type: 'command', id, command, params } }, '*');
      setTimeout(() => {
        this.pendingRequests.delete(id);
        reject(new Error('Request timeout'));
      }, 30000);
    });
  }

  handleResponse(msg: any) {
    const req = this.pendingRequests.get(msg.id);
    if (!req) return;
    this.pendingRequests.delete(msg.id);
    msg.success ? req.resolve(msg.data) : req.reject(new Error(msg.error));
  }
}
```

---

## Step 4 — Set up command registry in plugin

```typescript
// plugin/code.ts
const registry = new CommandRegistry();
registerAllHandlers(registry);

figma.ui.onmessage = async (msg) => {
  if (msg.type !== 'command') return;
  try {
    const result = await registry.execute(msg.command, msg.params);
    figma.ui.postMessage({ type: 'response', id: msg.id, success: true, data: result });
  } catch (error) {
    figma.ui.postMessage({ type: 'response', id: msg.id, success: false, error: error.message });
  }
};
```

---

## Step 5 — Apply Formation DS styling to UI

The UI iframe runs standard browser JS — use Formation CSS variables directly.

```html
<!-- web-ui/index.html -->
<style>
  :root { /* Formation FD dark theme (used in all plugins) */ }
  body {
    background: var(--fd-colors-background-base);
    color: var(--fd-colors-content-default);
    font-family: 'Proxima Nova', sans-serif;
  }
  .btn-primary {
    background: var(--fd-colors-component-button-primary-background-base); /* #128000 */
    border-radius: var(--fd-radii-border-radius-default); /* 4px */
    padding: var(--fd-space-space-2) var(--fd-space-space-4); /* 8px 16px */
  }
</style>
```

---

## Step 6 — Critical Figma API constraints

These will cause silent failures if missed:

```typescript
// ❌ NO optional chaining in plugin code
const name = node?.name;         // BREAKS
const name = node && node.name;  // ✅

// ❌ NO top-level await
await figma.loadFontAsync(...);  // BREAKS
(async () => { await figma.loadFontAsync(...); })();  // ✅

// ❌ NO fetch/localStorage in plugin code (sandbox)
// ✅ Make network calls from UI iframe, send results via postMessage

// ✅ Load fonts before setting text
const fonts = node.getRangeAllFontNames(0, node.characters.length);
await Promise.all(fonts.map(f => figma.loadFontAsync(f)));
node.characters = 'new text';

// ✅ Use findAll instead of recursive traversal
const frames = figma.currentPage.findAll(n => n.type === 'FRAME');
```

---

## Step 7 — Watch selection (if needed)

```typescript
figma.on('selectionchange', () => {
  const selection = figma.currentPage.selection.map(node => ({
    id: node.id,
    name: node.name,
    type: node.type,
  }));
  figma.ui.postMessage({ type: 'selectionChanged', selection });
});
```

---

## Step 8 — (Optional) Add MCP server

For AI-accessible plugins, add an `mcp-server/` folder:

```typescript
// mcp-server/src/tools/my-tools.ts
export const tools = [{
  name: 'plugin_action',
  description: 'What this tool does',
  inputSchema: {
    type: 'object',
    properties: { nodeId: { type: 'string' } },
    required: ['nodeId']
  }
}];
```

MCP tool handlers send commands via WebSocket → UI iframe → plugin bridge.

## Figma Canvas Access from AI (Cursor)

To drive the Figma canvas from Cursor, always use the **local** Figma Console MCP — NOT the remote southleft.com gateway (blocked by FanDuel AIM policy):

**`~/.cursor/mcp.json` entry (required):**
```json
{
  "mcpServers": {
    "figmaConsoleMcpLocal": {
      "command": "npx",
      "args": ["-y", "figma-console-mcp"]
    }
  }
}
```

**Usage pattern:**
- Read or write canvas: call `figma_execute` on `figmaConsoleMcpLocal`
- Desktop Bridge plugin must be running in Figma Desktop (auto-connects to `localhost:9223`)
- Do NOT use tools that proxy through `https://figma-console-mcp.southleft.com/mcp`

---

## Reference files

- Architecture patterns: `~/Documents/GitHub/fanduel-ds-knowledge/figma-specific/plugin-architecture.md`
- API constraints: `~/Documents/GitHub/fanduel-ds-knowledge/figma-specific/plugin-constraints.md`
- Simple plugin example: `~/Documents/GitHub/formation-check/` *(FanDuel-internal repo — may not be available to all teammates)*
- Complex plugin example: `~/Documents/GitHub/formation-studio/` *(FanDuel-internal repo — may not be available to all teammates)*
- Formation tokens for UI styling: `~/Documents/GitHub/fanduel-ds-knowledge/.agents/skills/formation-design-system/references/core/`
