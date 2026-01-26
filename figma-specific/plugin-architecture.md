# Figma Plugin Architecture Patterns

Common architecture patterns and best practices for building Figma plugins at FanDuel.

## Plugin Structure

### Standard Plugin Layout

```
plugin-name/
├── plugin/                 # Plugin code (runs in Figma sandbox)
│   ├── core/              # Infrastructure
│   ├── adapters/          # Figma API wrappers
│   ├── domains/           # Business features
│   ├── shared/            # Shared utilities
│   ├── registry/          # Command registry
│   └── code.ts            # Main entry point
├── web-ui/                 # UI code (runs in iframe)
│   ├── index.html         # UI structure
│   ├── styles/            # CSS/styling
│   ├── components/        # UI components
│   └── services/          # UI services
├── mcp-server/             # MCP server (optional)
│   ├── src/
│   │   ├── tools/         # MCP tool definitions
│   │   └── server.ts      # MCP server
│   └── package.json
├── manifest.json           # Figma plugin manifest
└── package.json
```

## Plugin & UI Communication

### Message-Based Architecture

Plugin and UI communicate via `postMessage`:

```typescript
// UI → Plugin
postMessage({
  type: 'command',
  id: 'msg-123',
  command: 'applyToken',
  params: { nodeId: '123:456', tokenName: 'brand/primary' }
});

// Plugin → UI
figma.ui.postMessage({
  type: 'response',
  id: 'msg-123',
  success: true,
  data: { applied: true }
});
```

### Request/Response Pattern

```typescript
// web-ui/services/plugin-bridge.ts
export class PluginBridge {
  private pendingRequests = new Map<string, PendingRequest>();
  
  async sendCommand<T>(command: string, params: any): Promise<T> {
    const id = generateId();
    
    return new Promise((resolve, reject) => {
      this.pendingRequests.set(id, { resolve, reject });
      
      parent.postMessage({
        pluginMessage: {
          type: 'command',
          id,
          command,
          params
        }
      }, '*');
      
      // Timeout after 30s
      setTimeout(() => {
        this.pendingRequests.delete(id);
        reject(new Error('Request timeout'));
      }, 30000);
    });
  }
  
  handleResponse(msg: ResponseMessage) {
    const request = this.pendingRequests.get(msg.id);
    if (!request) return;
    
    this.pendingRequests.delete(msg.id);
    
    if (msg.success) {
      request.resolve(msg.data);
    } else {
      request.reject(new Error(msg.error));
    }
  }
}

// Usage in UI
const bridge = new PluginBridge();
const result = await bridge.sendCommand('applyToken', {
  nodeId: '123:456',
  tokenName: 'brand/primary'
});
```

### Plugin Message Handler

```typescript
// plugin/code.ts
const registry = new CommandRegistry();
registerAllHandlers(registry);

figma.ui.onmessage = async (msg) => {
  if (msg.type === 'command') {
    try {
      const result = await registry.execute(msg.command, msg.params);
      sendResponse(msg.id, true, result);
    } catch (error) {
      sendError(msg.id, error.message);
    }
  }
};

function sendResponse(id: string, success: boolean, data: any) {
  figma.ui.postMessage({
    type: 'response',
    id,
    success,
    data
  });
}
```

## Plugin Constraints

### No Optional Chaining

Figma plugins don't support optional chaining (`?.`):

```typescript
// ❌ DON'T
const name = node?.name;
const fill = node?.fills?.[0];

// ✅ DO
const name = node && node.name;
const fill = node && node.fills && node.fills[0];
```

### No Top-Level Await

```typescript
// ❌ DON'T
await figma.loadFontAsync({ family: 'Roboto', style: 'Regular' });

// ✅ DO
(async () => {
  await figma.loadFontAsync({ family: 'Roboto', style: 'Regular' });
})();
```

### Sandbox Environment

Plugin code runs in a **sandboxed environment**:
- No access to browser APIs (fetch, localStorage, etc.)
- No direct network requests
- Limited to Figma Plugin API

**Solution**: Use UI iframe for network requests:

```typescript
// UI makes network request
async function fetchData() {
  const response = await fetch('/api/data');
  return response.json();
}

// Send result to plugin
bridge.sendCommand('processData', { data });
```

## Common Patterns

### Selection Watching

```typescript
// plugin/code.ts
figma.on('selectionchange', () => {
  const selection = figma.currentPage.selection;
  
  figma.ui.postMessage({
    type: 'selectionChanged',
    selection: serializeNodes(selection)
  });
});

function serializeNodes(nodes: SceneNode[]): SerializedNode[] {
  return nodes.map(node => ({
    id: node.id,
    name: node.name,
    type: node.type,
    // ... safe properties only
  }));
}
```

### Font Loading

Always load fonts before setting text:

```typescript
async function setText(node: TextNode, text: string) {
  // Load all fonts used in the text node
  const fontNames = node.getRangeAllFontNames(0, node.characters.length);
  await Promise.all(
    fontNames.map(font => figma.loadFontAsync(font))
  );
  
  // Now safe to set text
  node.characters = text;
}
```

### Variable Binding

```typescript
// Bind node property to variable
async function bindVariable(
  node: SceneNode,
  property: BindableProperty,
  variableId: string
) {
  const variable = await figma.variables.getVariableByIdAsync(variableId);
  if (!variable) throw new Error('Variable not found');
  
  // @ts-ignore (Figma types may not be complete)
  node.setBoundVariable(property, variable);
}

// Example: Bind fill to color variable
await bindVariable(node, 'fills', colorVariableId);
```

### Batch Updates

Minimize Figma API calls by batching:

```typescript
// ❌ BAD: Multiple API calls
for (const node of nodes) {
  node.x = node.x + 10;
  node.y = node.y + 10;
  await figma.saveVersionHistoryAsync(node.name);
}

// ✅ GOOD: Batch operations
for (const node of nodes) {
  node.x = node.x + 10;
  node.y = node.y + 10;
}
// Single save at end
await figma.saveVersionHistoryAsync('Moved nodes');
```

## WebSocket Bridge Pattern

For advanced plugins that need external connectivity:

```typescript
// External WebSocket server
const wss = new WebSocketServer({ port: 3001 });

wss.on('connection', (ws) => {
  ws.on('message', async (message) => {
    const { command, params } = JSON.parse(message);
    
    // Execute in Figma via UI bridge
    const result = await figmaBridge.execute(command, params);
    
    ws.send(JSON.stringify({ success: true, result }));
  });
});

// UI connects to WebSocket
const ws = new WebSocket('ws://localhost:3001');
ws.onmessage = (event) => {
  const { command, params } = JSON.parse(event.data);
  bridge.sendCommand(command, params);
};
```

## MCP Integration

Plugins can expose MCP tools for AI interaction:

```typescript
// mcp-server/src/tools/design-tokens.tools.ts
export const designTokenTools = [
  {
    name: 'figma_apply_token',
    description: 'Apply Formation token to node',
    inputSchema: {
      type: 'object',
      properties: {
        nodeId: { type: 'string' },
        tokenName: { type: 'string' }
      },
      required: ['nodeId', 'tokenName']
    }
  }
];

// MCP tool handler maps to plugin command
async function handleMcpTool(toolName: string, args: any) {
  const command = toolToCommandMap[toolName];
  return await figmaWebSocket.sendCommand(command, args);
}
```

## Error Handling

### Plugin Errors

```typescript
// plugin/core/errors.ts
export class PluginError extends Error {
  constructor(
    message: string,
    public code: string,
    public context?: any
  ) {
    super(message);
    this.name = 'PluginError';
  }
}

export class NodeNotFoundError extends PluginError {
  constructor(nodeId: string) {
    super(`Node ${nodeId} not found`, 'NODE_NOT_FOUND', { nodeId });
  }
}

// Usage
try {
  const node = figma.getNodeById(nodeId);
  if (!node) throw new NodeNotFoundError(nodeId);
} catch (error) {
  logger.error('Failed to get node', error);
  figma.ui.postMessage({
    type: 'error',
    error: {
      message: error.message,
      code: error.code
    }
  });
}
```

### UI Error Display

```typescript
// web-ui/services/error-handler.ts
export function displayError(error: PluginError) {
  const toast = document.createElement('div');
  toast.className = 'error-toast';
  toast.textContent = error.message;
  
  document.body.appendChild(toast);
  
  setTimeout(() => toast.remove(), 5000);
}
```

## Performance

### Node Traversal

```typescript
// ❌ SLOW: Recursive traversal
function findAllFrames(node: BaseNode): FrameNode[] {
  const frames: FrameNode[] = [];
  
  if (node.type === 'FRAME') {
    frames.push(node as FrameNode);
  }
  
  if ('children' in node) {
    for (const child of node.children) {
      frames.push(...findAllFrames(child));
    }
  }
  
  return frames;
}

// ✅ FAST: Use findAll
const frames = figma.currentPage.findAll(node => node.type === 'FRAME');
```

### Minimize Reflows

```typescript
// ❌ BAD: Multiple layout calculations
node.resize(200, 100);
node.x = 50;
node.y = 50;
node.fills = [{ type: 'SOLID', color: { r: 1, g: 0, b: 0 } }];

// ✅ GOOD: Set in one operation
Object.assign(node, {
  x: 50,
  y: 50,
  resize: () => node.resize(200, 100),
  fills: [{ type: 'SOLID', color: { r: 1, g: 0, b: 0 } }]
});
```

## Testing

### Unit Tests (Business Logic)

```typescript
describe('TokenService', () => {
  it('validates token exists', async () => {
    const service = new TokenService(mockRepo);
    
    const result = await service.validateToken('brand/primary');
    
    expect(result.isValid).toBe(true);
  });
});
```

### Integration Tests (with Figma)

Difficult to test Figma API directly. Options:
1. **Mock Figma API**: Create mock implementations
2. **Manual testing**: Test in actual Figma
3. **Snapshot testing**: Compare serialized results

## Related Documentation

- **[Clean Architecture](../../company-patterns/architecture/clean-architecture.md)** - Architecture principles
- **[Command Pattern](../../company-patterns/architecture/command-pattern.md)** - Command/handler pattern
- **[Figma Constraints](plugin-constraints.md)** - Detailed constraints
- **[WebSocket Bridge](websocket-bridge.md)** - WebSocket server pattern

---

**Last Updated**: January 2026  
**Source**: Figma Super Powers, formation-variable-mapper
