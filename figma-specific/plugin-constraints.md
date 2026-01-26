# Figma Plugin Constraints and Workarounds

Known limitations of the Figma Plugin API and how to work around them.

## JavaScript Constraints

### No Optional Chaining

**Issue**: Figma plugins don't support the optional chaining operator (`?.`)

```typescript
// ❌ DOESN'T WORK
const name = node?.name;
const firstFill = node?.fills?.[0];
const color = node?.fills?.[0]?.color?.r;

// ✅ WORKS
const name = node && node.name;
const firstFill = node && node.fills && node.fills[0];
const color = node && node.fills && node.fills[0] && node.fills[0].color && node.fills[0].color.r;

// ✅ BETTER: Helper function
function safeGet<T>(obj: any, path: string[], defaultValue?: T): T | undefined {
  let current = obj;
  for (const key of path) {
    if (current == null) return defaultValue;
    current = current[key];
  }
  return current ?? defaultValue;
}

const color = safeGet(node, ['fills', 0, 'color', 'r'], 0);
```

### No Nullish Coalescing

**Issue**: The `??` operator is not supported

```typescript
// ❌ DOESN'T WORK
const value = node.name ?? 'Untitled';

// ✅ WORKS
const value = node.name || 'Untitled';
// Or more precisely:
const value = node.name !== null && node.name !== undefined ? node.name : 'Untitled';
```

### No Top-Level Await

**Issue**: Can't use await at the top level of plugin code

```typescript
// ❌ DOESN'T WORK
await figma.loadFontAsync({ family: 'Roboto', style: 'Regular' });

// ✅ WORKS
(async () => {
  await figma.loadFontAsync({ family: 'Roboto', style: 'Regular' });
  // ... rest of your code
})();

// ✅ BEST: Wrap in async function
async function main() {
  await figma.loadFontAsync({ family: 'Roboto', style: 'Regular' });
  // ... rest of your code
}

main().catch(error => {
  console.error('Plugin error:', error);
  figma.closePlugin();
});
```

##API Limitations

### No Direct Network Access

**Issue**: Plugin sandbox can't make fetch/HTTP requests

**Workaround**: Use UI iframe to make requests

```typescript
// UI (has network access)
async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  
  // Send to plugin
  parent.postMessage({
    pluginMessage: {
      type: 'data',
      data
    }
  }, '*');
}

// Plugin
figma.ui.onmessage = (msg) => {
  if (msg.type === 'data') {
    processData(msg.data);
  }
};
```

### No localStorage/sessionStorage

**Issue**: Standard browser storage APIs not available

**Workaround**: Use `figma.clientStorage`

```typescript
// Save data
await figma.clientStorage.setAsync('myKey', { value: 123 });

// Load data
const data = await figma.clientStorage.getAsync('myKey');

// Delete data
await figma.clientStorage.deleteAsync('myKey');
```

### Font Must Be Loaded Before Text Changes

**Issue**: Changing text requires fonts to be loaded first

```typescript
// ❌ WILL FAIL
textNode.characters = 'New text';

// ✅ CORRECT
await figma.loadFontAsync(textNode.fontName as FontName);
textNode.characters = 'New text';

// ✅ BETTER: Load all fonts in range
const fontNames = textNode.getRangeAllFontNames(0, textNode.characters.length);
await Promise.all(fontNames.map(font => figma.loadFontAsync(font)));
textNode.characters = 'New text';
```

### Limited Node Types for Children

**Issue**: Not all nodes can have children

```typescript
// These can have children:
// - PAGE, FRAME, GROUP, SECTION, COMPONENT, INSTANCE

// These CANNOT:
// - RECTANGLE, ELLIPSE, LINE, POLYGON, STAR, VECTOR, TEXT

// Check before adding children
if ('children' in node) {
  node.appendChild(childNode);
} else {
  console.error('Node cannot have children');
}
```

## Performance Constraints

### Slow Node Traversal

**Issue**: Recursive traversal is very slow for large files

```typescript
// ❌ SLOW
function findAllFrames(node: BaseNode): FrameNode[] {
  const frames: FrameNode[] = [];
  if (node.type === 'FRAME') frames.push(node as FrameNode);
  if ('children' in node) {
    for (const child of node.children) {
      frames.push(...findAllFrames(child));
    }
  }
  return frames;
}

// ✅ FAST: Use findAll
const frames = figma.currentPage.findAll(node => node.type === 'FRAME') as FrameNode[];
```

### Batch Operations

**Issue**: Many small operations are slow

```typescript
// ❌ SLOW: Multiple API calls
for (const node of nodes) {
  node.x += 10;
  await figma.saveVersionHistoryAsync(`Moved ${node.name}`);
}

// ✅ FAST: Batch and save once
for (const node of nodes) {
  node.x += 10;
}
await figma.saveVersionHistoryAsync('Moved all nodes');
```

## Plugin UI Constraints

### iframe Limitations

**Issue**: UI runs in iframe, limited communication with plugin

**Workaround**: Use postMessage for all communication

```typescript
// UI → Plugin
parent.postMessage({
  pluginMessage: { type: 'command', data: {} }
}, '*');

// Plugin → UI
figma.ui.postMessage({ type: 'result', data: {} });
```

### UI Sizing

**Issue**: UI window size is fixed on creation

```typescript
// Set size when showing UI
figma.showUI(__html__, {
  width: 400,
  height: 600,
  title: 'My Plugin'
});

// Resize later (from plugin)
figma.ui.resize(500, 700);
```

## Type Safety Constraints

### TypeScript Challenges

**Issue**: Figma types can be incomplete or incorrect

```typescript
// Sometimes need to use type assertions
const node = figma.getNodeById(id) as FrameNode;

// Or type guards
function isFrameNode(node: BaseNode): node is FrameNode {
  return node.type === 'FRAME';
}

if (isFrameNode(node)) {
  // TypeScript knows node is FrameNode
  node.layoutMode = 'HORIZONTAL';
}

// Sometimes need @ts-ignore for newer APIs
// @ts-ignore - New API not in types yet
node.setBoundVariable('fills', variable);
```

## Data Serialization Constraints

### Can't Send Complex Objects

**Issue**: postMessage can't send functions, circular refs, or Figma objects

```typescript
// ❌ WILL FAIL
figma.ui.postMessage({
  node: frameNode  // Can't send Figma node directly!
});

// ✅ SERIALIZE FIRST
figma.ui.postMessage({
  node: {
    id: frameNode.id,
    name: frameNode.name,
    type: frameNode.type,
    x: frameNode.x,
    y: frameNode.y
  }
});
```

**Helper Function**:
```typescript
export function serializeNode(node: SceneNode): SerializedNode {
  const base = {
    id: node.id,
    name: node.name,
    type: node.type,
    visible: node.visible
  };
  
  if ('x' in node) {
    return { ...base, x: node.x, y: node.y, width: node.width, height: node.height };
  }
  
  return base;
}
```

## Variable/Style Constraints

### Variable Binding Complexity

**Issue**: Binding variables requires correct syntax

```typescript
// Correct way to bind variable
const variable = await figma.variables.getVariableByIdAsync(variableId);
if (!variable) throw new Error('Variable not found');

// Different properties use different methods
if ('fills' in node) {
  // @ts-ignore
  node.setBoundVariable('fills', variable);
}

if ('layoutMode' in node) {
  // @ts-ignore
  node.setBoundVariable('itemSpacing', variable);
}
```

### Style Application

**Issue**: Styles apply differently than direct properties

```typescript
// Applying paint style
if ('fillStyleId' in node) {
  node.fillStyleId = styleId;
}

// This REPLACES fills with style
// To keep custom overrides, don't use style
```

## Related Documentation

- **[Plugin Architecture](plugin-architecture.md)** - Overall plugin patterns
- **[Figma API Reference](figma-api-reference.md)** - API details
- **[WebSocket Bridge](websocket-bridge.md)** - External connectivity

---

**Last Updated**: January 2026  
**Source**: Figma Super Powers development experience
