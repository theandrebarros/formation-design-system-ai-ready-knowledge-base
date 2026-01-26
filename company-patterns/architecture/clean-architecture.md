# Clean Architecture Principles

FanDuel development follows Clean Architecture principles to create maintainable, testable, and scalable codebases.

## Core Principles

### 1. Separation of Concerns

Code is organized by **what it does** (business domain), not **how it's built** (technical layer):

```
❌ BAD (Technical layers):
controllers/
services/
repositories/

✅ GOOD (Business domains):
design-tokens/
auto-layout/
export/
```

### 2. Dependency Rule

**Dependencies flow inward**:
- Outer layers depend on inner layers
- Inner layers never depend on outer layers
- Business logic has no external dependencies

```
┌───────────────────────┐
│   UI / External APIs  │ ← Frameworks, tools
├───────────────────────┤
│  Adapters (Ports)     │ ← API wrappers
├───────────────────────┤
│  Domain Services      │ ← Business logic
├───────────────────────┤
│  Domain Models        │ ← Pure data structures
└───────────────────────┘
```

### 3. Testability First

Business logic is testable without external dependencies:

```typescript
// ✅ GOOD: Service takes adapter interface
class TokenService {
  constructor(private nodeAdapter: INodeAdapter) {}
  
  applyToken(nodeId: string, token: Token) {
    // Test with mock adapter
  }
}

// ❌ BAD: Service directly uses Figma API
class TokenService {
  applyToken(nodeId: string, token: Token) {
    const node = figma.getNodeById(nodeId); // Can't test!
  }
}
```

## Directory Structure

### Standard Clean Architecture Layout

```
project/
├── core/               # Infrastructure (logging, errors)
├── adapters/           # External API wrappers
├── domains/            # Business domains
│   ├── domain-name/
│   │   ├── models/     # Data structures
│   │   ├── services/   # Business logic
│   │   ├── repositories/ # Data access (optional)
│   │   ├── handlers/   # Command handlers
│   │   └── index.ts    # Domain module (wiring)
│   └── ...
├── shared/             # Shared utilities
├── registry/           # Command registry (optional)
└── main.ts             # Entry point
```

### Domain Structure

Each domain is self-contained:

```
design-tokens/
├── models/
│   ├── Token.ts          # Token data structure
│   └── ValidationResult.ts
├── services/
│   ├── TokenService.ts   # Token business logic
│   └── ValidationService.ts
├── repositories/
│   └── TokenRepository.ts # Token data access
├── handlers/
│   ├── GetTokensHandler.ts
│   ├── ApplyTokenHandler.ts
│   └── ValidateHandler.ts
└── index.ts              # DesignTokensModule
```

## Implementation Patterns

### 1. Domain Module

Each domain has a module class for wiring:

```typescript
// domains/auto-layout/index.ts
export class AutoLayoutModule {
  // Adapters
  private nodeAdapter: FigmaNodeAdapter;
  
  // Services
  public layoutService: LayoutService;
  
  // Handlers
  public setSpacingHandler: SetSpacingHandler;
  
  constructor() {
    // Wire dependencies
    this.nodeAdapter = new FigmaNodeAdapter();
    this.layoutService = new LayoutService(this.nodeAdapter);
    this.setSpacingHandler = new SetSpacingHandler(this.layoutService);
  }
}
```

### 2. Service Layer

Pure business logic, no external dependencies:

```typescript
// domains/design-tokens/services/TokenService.ts
export class TokenService {
  constructor(
    private tokenRepo: ITokenRepository,
    private nodeAdapter: INodeAdapter
  ) {}
  
  async applyToken(nodeId: string, tokenName: string): Promise<Result> {
    // 1. Validate
    const token = await this.tokenRepo.findByName(tokenName);
    if (!token) return { success: false, error: 'Token not found' };
    
    // 2. Business logic
    const node = await this.nodeAdapter.getNode(nodeId);
    if (!this.canApplyToken(node, token)) {
      return { success: false, error: 'Cannot apply token to this node' };
    }
    
    // 3. Execute
    await this.nodeAdapter.setFill(nodeId, token.value);
    return { success: true };
  }
  
  private canApplyToken(node: Node, token: Token): boolean {
    // Pure business logic
    return node.type === 'FRAME' && token.type === 'COLOR';
  }
}
```

### 3. Adapter Layer

Wraps external APIs:

```typescript
// adapters/figma/nodes.ts
export interface INodeAdapter {
  getNode(id: string): Promise<SceneNode>;
  setFill(id: string, color: RGB): Promise<void>;
}

export class FigmaNodeAdapter implements INodeAdapter {
  async getNode(id: string): Promise<SceneNode> {
    const node = figma.getNodeById(id);
    if (!node) throw new Error('Node not found');
    return node;
  }
  
  async setFill(id: string, color: RGB): Promise<void> {
    const node = await this.getNode(id);
    if ('fills' in node) {
      node.fills = [{ type: 'SOLID', color }];
    }
  }
}
```

### 4. Model Layer

Pure data structures:

```typescript
// domains/design-tokens/models/Token.ts
export interface Token {
  id: string;
  name: string;
  type: 'COLOR' | 'SPACING' | 'RADIUS';
  value: string | number;
}

export interface ColorToken extends Token {
  type: 'COLOR';
  value: string; // hex color
  rgb: RGB;
}

export interface SpacingToken extends Token {
  type: 'SPACING';
  value: number; // pixels
}
```

## Benefits

### Maintainability

**Small Files**:
- Each file: 100-300 lines
- Clear, focused responsibility
- Easy to understand and modify

**Easy Navigation**:
- Find code by feature/domain
- Related code is co-located
- Clear file structure

**Clear Ownership**:
- Each domain can have a team/owner
- Changes stay within domain boundaries
- Minimal cross-domain dependencies

### Testability

**Unit Tests** (Fast, isolated):
```typescript
describe('TokenService', () => {
  it('applies token to node', async () => {
    const mockRepo = createMockRepo();
    const mockAdapter = createMockAdapter();
    const service = new TokenService(mockRepo, mockAdapter);
    
    const result = await service.applyToken('node-1', 'brand/primary');
    
    expect(result.success).toBe(true);
    expect(mockAdapter.setFill).toHaveBeenCalled();
  });
});
```

**Integration Tests** (Real adapters):
```typescript
describe('TokenService Integration', () => {
  it('applies token in real Figma', async () => {
    const realAdapter = new FigmaNodeAdapter();
    const service = new TokenService(tokenRepo, realAdapter);
    // Test with real Figma API
  });
});
```

### Scalability

**Add Features Without Breaking Existing Code**:
- New domain = new directory
- No changes to existing domains
- Parallel development possible

**Team Scalability**:
- Multiple teams work on different domains
- Clear boundaries prevent conflicts
- Domain expertise develops

**Performance**:
- Tree-shakeable (unused domains excluded)
- Lazy loading possible
- Optimized bundle sizes

## Migration Strategy

### From Monolith to Clean Architecture

**Step 1: Identify Domains**
```
Look at your codebase and identify feature areas:
- What are the major features?
- What business capabilities exist?
- What would a user describe as separate areas?
```

**Step 2: Extract One Domain**
```
Pick the most isolated feature:
1. Create domain directory structure
2. Move relevant code to services/
3. Extract data structures to models/
4. Wrap external APIs in adapters/
5. Test thoroughly
```

**Step 3: Repeat**
```
Gradually extract more domains:
- Start with least-coupled features
- Work toward most-coupled features
- Refactor as you learn
```

**Step 4: Delete Old Code**
```
Once all features are extracted:
- Remove monolith file(s)
- Clean up imports
- Celebrate! 🎉
```

## Common Pitfalls

### ❌ Leaky Abstraction
```typescript
// BAD: Adapter exposes Figma-specific types
export class FigmaAdapter {
  getNode(): SceneNode { ... } // Figma type leaked!
}

// GOOD: Adapter uses domain types
export class FigmaAdapter {
  getNode(): Node { ... } // Domain type
}
```

### ❌ God Service
```typescript
// BAD: Service does everything
class MegaService {
  getTokens() { }
  applyTokens() { }
  validateDesign() { }
  exportAssets() { }
  // ... 50 more methods
}

// GOOD: Split into focused services
class TokenService { }
class ValidationService { }
class ExportService { }
```

### ❌ Circular Dependencies
```typescript
// BAD: Services depend on each other
class ServiceA {
  constructor(private serviceB: ServiceB) { }
}
class ServiceB {
  constructor(private serviceA: ServiceA) { } // Circular!
}

// GOOD: Extract shared logic or use events
class ServiceA {
  constructor(private sharedService: SharedService) { }
}
class ServiceB {
  constructor(private sharedService: SharedService) { }
}
```

## Related Documentation

- **[Domain-Driven Design](domain-driven-design.md)** - DDD principles
- **[Command Pattern](command-pattern.md)** - Command/handler pattern
- **[Hexagonal Architecture](hexagonal-architecture.md)** - Ports & adapters
- **[Figma Plugin Architecture](../../figma-specific/plugin-architecture.md)** - Figma-specific patterns

## Examples

See these FanDuel projects for clean architecture examples:
- **Figma Super Powers**: Full clean architecture implementation
- **formation-variable-mapper**: Simpler clean architecture example

---

**Last Updated**: January 2026  
**Source**: FanDuel engineering best practices
