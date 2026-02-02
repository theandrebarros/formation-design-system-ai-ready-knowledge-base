# Formation Studio

**Formerly**: Figma Super Powers  
**Type**: Comprehensive MCP Bridge Plugin  
**Tech Stack**: TypeScript, Node.js, WebSocket, MCP Protocol  
**Architecture**: Clean Architecture / Domain-Driven Design  
**Project Path**: `~/Documents/GitHub/formation-studio/`

## Purpose

A custom Model Context Protocol (MCP) bridge that enables AI agents in Cursor to **read AND write** to Figma designs. Unlike the built-in read-only Figma MCP, this system allows comprehensive design manipulation, design system validation, and batch operations.

## Key Features

### Design System Capabilities
- **Token Validation** - Validate colors and spacing against Formation DS tokens
- **Automatic Token Loading** - Design tokens load automatically and refresh in background
- **Live Selection Sync** - Real-time updates when selecting in Figma
- **Batch Validation** - Audit entire pages for DS compliance
- **AI Token Access** - Cursor AI can fetch design tokens on demand via MCP

### Write Operations
- Change colors, strokes, and fills
- Duplicate frames and artboards
- Modify text content
- Create new shapes and frames
- Move, resize, and delete nodes
- Set auto-layout properties (spacing, padding, direction)
- Export images as PNG, JPG, SVG, PDF

## Architecture Pattern

### Clean Architecture Implementation

**97% smaller entry point** (90 lines vs 3,468 lines)

```
plugin/
├── core/                   # Core infrastructure
│   ├── logger.ts
│   ├── serialization.ts
│   ├── errors.ts
│   └── constants.ts
├── adapters/               # External interfaces (Figma API, WebSocket)
│   └── figma/
│       ├── nodes.ts       # Node operations
│       ├── variables.ts   # Variable operations
│       ├── styles.ts      # Style operations
│       └── export.ts      # Export operations
├── domains/                # Business domains (features)
│   ├── design-tokens/
│   ├── auto-layout/
│   ├── export/
│   └── formation-check/
├── shared/                 # Shared utilities and interfaces
│   ├── interfaces/
│   └── utils/
├── registry/               # Command registry system
│   ├── CommandRegistry.ts
│   └── handler-map.ts
└── code-new.ts            # Main entry point (90 lines)
```

### Domain Structure

Each domain follows this pattern:

```
domain-name/
├── models/         # Domain models and types
├── services/       # Business logic
├── repositories/   # Data access (optional)
├── handlers/       # Command handlers
└── index.ts        # Module class (wiring)
```

## Reusable Patterns

### 1. Command Pattern

Every operation is a command with a handler implementing `ICommandHandler`:

```typescript
export interface ICommandHandler<TParams, TResult> {
  handle(params: TParams): Promise<TResult>;
  validate?(params: TParams): ValidationResult;
}
```

**Usage Example**:

```typescript
class SetSpacingHandler implements ICommandHandler {
  constructor(
    private layoutService: LayoutService,
    private nodeAdapter: FigmaNodeAdapter
  ) {}

  async handle(params: SetSpacingParams): Promise<void> {
    const node = this.nodeAdapter.getNodeById(params.nodeId);
    await this.layoutService.setItemSpacing(node, params.spacing);
  }
}
```

### 2. Domain Module Pattern

Each domain has a module class that wires components together:

```typescript
export class AutoLayoutModule {
  private nodeAdapter: FigmaNodeAdapter;
  public layoutService: LayoutService;
  public setSpacingHandler: SetSpacingHandler;

  constructor() {
    this.nodeAdapter = new FigmaNodeAdapter();
    this.layoutService = new LayoutService();
    this.setSpacingHandler = new SetSpacingHandler(
      this.layoutService,
      this.nodeAdapter
    );
  }
}
```

### 3. Command Registry

Central command registry for execution:

```typescript
const registry = new CommandRegistry();
registerAllHandlers(registry);

figma.ui.onmessage = async (msg) => {
  if (msg.type === 'command') {
    const result = await registry.execute(msg.command, msg.params);
    sendResponse(msg.id, true, result);
  }
};
```

## Utility Functions

### Color Utilities (`shared/utils/color-utils.ts`)

- `hexToRgb(hex: string): RGB`
- `rgbToHex(r: number, g: number, b: number): string`
- `figmaColorToRgb(color: RGB): RGB`
- `calculateColorSimilarity(color1: RGB, color2: RGB): number`

### Node Utilities (`shared/utils/node-utils.ts`)

- `isAutoLayout(node: SceneNode): boolean`
- `hasVariable(node: SceneNode, property: string): boolean`
- `getNodePath(node: SceneNode): string`

## Token Validation Pattern

From `domains/design-tokens/services/ValidationService.ts`:

```typescript
class ValidationService {
  validateFillColor(node: SceneNode, tokens: ColorToken[]): ValidationResult {
    if (!node.fills || node.fills.length === 0) {
      return { isValid: true, issues: [] };
    }

    const fill = node.fills[0];
    if (fill.type !== 'SOLID') return { isValid: true, issues: [] };

    // Check if bound to variable
    if (hasVariable(node, 'fills')) {
      return { isValid: true, issues: [] };
    }

    // Find matching token
    const hex = rgbToHex(fill.color.r, fill.color.g, fill.color.b);
    const matches = findColorTokens(hex, tokens);

    return {
      isValid: matches.length > 0,
      issues: matches.length === 0 ? [{
        nodeId: node.id,
        property: 'fill',
        currentValue: hex,
        suggestions: findClosestTokens(hex, tokens, 5)
      }] : []
    };
  }
}
```

## MCP Integration

### Tool Definition (`mcp-server/src/tools/`)

```typescript
export const designTokenTools = [
  {
    name: 'figma_get_color_tokens',
    description: 'Get all color design tokens from Formation DS',
    inputSchema: {
      type: 'object' as const,
      properties: {
        library: { type: 'string', optional: true }
      }
    }
  }
];
```

### Bridge Architecture

```
┌─────────────────┐     ┌──────────────────┐     ┌─────────────────┐
│   Cursor IDE    │     │  Bridge Server   │     │  Figma Desktop  │
│                 │     │                  │     │                 │
│  ┌───────────┐  │     │  ┌────────────┐  │     │  ┌───────────┐  │
│  │ AI Agent  │──┼─MCP─┼──│ MCP Server │  │     │  │  Plugin   │  │
│  └───────────┘  │     │  └─────┬──────┘  │     │  └─────┬─────┘  │
│                 │     │        │         │     │        │        │
│                 │     │  ┌─────▼──────┐  │     │        │        │
│                 │     │  │ WebSocket  │──┼─WS──┼────────┘        │
│                 │     │  │  Server    │  │     │                 │
└─────────────────┘     └──────────────────┘     └─────────────────┘
```

## When to Use This Pattern

✅ **Use for:**
- Complex plugins with multiple features
- MCP integration requirements
- Plugins that need to scale
- Projects with multiple developers
- When you need comprehensive testing

❌ **Don't use for:**
- Simple, single-purpose plugins
- Quick prototypes
- When ES5 compatibility is required

## Setup & Integration

See full docs in project:
- [`ARCHITECTURE.md`](~/Documents/GitHub/figma-super-powers/ARCHITECTURE.md) - Complete architecture guide
- [`IMPLEMENTATION_GUIDE.md`](~/Documents/GitHub/figma-super-powers/IMPLEMENTATION_GUIDE.md) - Developer how-to
- [`MCP_TOKEN_TOOL_TESTING.md`](~/Documents/GitHub/figma-super-powers/MCP_TOKEN_TOOL_TESTING.md) - MCP tool testing

## Key Learnings

1. **Domain-driven design** makes large codebases manageable
2. **Command pattern** enables easy addition of new features
3. **Adapter pattern** isolates Figma API from business logic
4. **MCP bridge** requires WebSocket for real-time communication
5. **Token caching** (5 min) dramatically improves performance

---

**Related Docs**:
- [Clean Architecture](../company-patterns/architecture/clean-architecture.md)
- [Command Pattern](../company-patterns/architecture/command-pattern.md)
- [Figma Plugin Architecture](../figma-specific/plugin-architecture.md)
