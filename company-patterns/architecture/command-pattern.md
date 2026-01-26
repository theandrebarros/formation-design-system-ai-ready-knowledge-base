# Command Pattern Implementation

The Command Pattern encapsulates operations as objects, enabling flexible command execution, validation, undo/redo, and centralized handling.

## Overview

Every operation in clean architecture is represented as a **command** with a **handler**:

```typescript
Command → Handler → Result
```

**Benefits**:
- Uniform interface for all operations
- Easy validation before execution
- Built-in error handling
- Testable in isolation
- Supports undo/redo
- Centralized command registry

## Core Interface

### ICommandHandler

```typescript
export interface ICommandHandler<TParams, TResult> {
  // Execute the command
  handle(params: TParams): Promise<TResult>;
  
  // Optional validation before execution
  validate?(params: TParams): ValidationResult;
  
  // Optional undo operation
  undo?(result: TResult): Promise<void>;
}

export interface ValidationResult {
  isValid: boolean;
  errors?: string[];
}
```

## Implementation Pattern

### 1. Define Command Parameters

```typescript
// domains/design-tokens/models/ApplyTokenParams.ts
export interface ApplyTokenParams {
  nodeId: string;
  tokenName: string;
  property?: 'fill' | 'stroke';
}
```

### 2. Create Handler

```typescript
// domains/design-tokens/handlers/ApplyTokenHandler.ts
import { ICommandHandler } from '../../../shared/interfaces';

export class ApplyTokenHandler implements ICommandHandler<ApplyTokenParams, Result> {
  constructor(
    private tokenService: TokenService,
    private logger: ILogger
  ) {}
  
  // Validate before executing
  validate(params: ApplyTokenParams): ValidationResult {
    const errors: string[] = [];
    
    if (!params.nodeId) {
      errors.push('nodeId is required');
    }
    if (!params.tokenName) {
      errors.push('tokenName is required');
    }
    
    return {
      isValid: errors.length === 0,
      errors: errors.length > 0 ? errors : undefined
    };
  }
  
  // Execute the command
  async handle(params: ApplyTokenParams): Promise<Result> {
    try {
      this.logger.info('Applying token', { params });
      
      const result = await this.tokenService.applyToken(
        params.nodeId,
        params.tokenName,
        params.property
      );
      
      if (!result.success) {
        this.logger.error('Failed to apply token', result.error);
      }
      
      return result;
    } catch (error) {
      this.logger.error('Token handler error', error);
      throw error;
    }
  }
}
```

### 3. Register Handler

```typescript
// registry/handler-map.ts
import { CommandRegistry } from './CommandRegistry';
import { DesignTokensModule } from '../domains/design-tokens';

export function registerAllHandlers(registry: CommandRegistry): void {
  const tokensModule = new DesignTokensModule();
  
  registry.register('applyToken', tokensModule.applyTokenHandler);
  registry.register('getTokens', tokensModule.getTokensHandler);
  registry.register('validateColor', tokensModule.validateColorHandler);
  
  // ... more registrations
}
```

### 4. Execute Commands

```typescript
// Main entry point
const registry = new CommandRegistry();
registerAllHandlers(registry);

// Execute command
const result = await registry.execute('applyToken', {
  nodeId: '123:456',
  tokenName: 'brand/primary'
});
```

## Command Registry

Centralized registry for all commands:

```typescript
// registry/CommandRegistry.ts
export class CommandRegistry {
  private handlers = new Map<string, ICommandHandler<any, any>>();
  
  register<TParams, TResult>(
    commandName: string,
    handler: ICommandHandler<TParams, TResult>
  ): void {
    if (this.handlers.has(commandName)) {
      throw new Error(`Command "${commandName}" already registered`);
    }
    this.handlers.set(commandName, handler);
  }
  
  async execute<TParams, TResult>(
    commandName: string,
    params: TParams
  ): Promise<TResult> {
    const handler = this.handlers.get(commandName);
    
    if (!handler) {
      throw new Error(`Command "${commandName}" not found`);
    }
    
    // Validate if handler supports it
    if (handler.validate) {
      const validation = handler.validate(params);
      if (!validation.isValid) {
        throw new Error(`Validation failed: ${validation.errors?.join(', ')}`);
      }
    }
    
    // Execute
    return await handler.handle(params);
  }
  
  has(commandName: string): boolean {
    return this.handlers.has(commandName);
  }
  
  getAll(): string[] {
    return Array.from(this.handlers.keys());
  }
}
```

## Advanced Patterns

### Command with Undo

```typescript
export class SetSpacingHandler implements ICommandHandler<SetSpacingParams, Result> {
  private originalSpacing?: number;
  
  async handle(params: SetSpacingParams): Promise<Result> {
    // Save original value for undo
    this.originalSpacing = await this.layoutService.getSpacing(params.nodeId);
    
    // Execute command
    await this.layoutService.setSpacing(params.nodeId, params.spacing);
    
    return { success: true, nodeId: params.nodeId };
  }
  
  async undo(result: Result): Promise<void> {
    if (this.originalSpacing !== undefined) {
      await this.layoutService.setSpacing(result.nodeId, this.originalSpacing);
    }
  }
}
```

### Command with Transaction

```typescript
export class ApplyMultipleTokensHandler implements ICommandHandler<ApplyMultipleParams, Result> {
  async handle(params: ApplyMultipleParams): Promise<Result> {
    const results: Result[] = [];
    const rollbackStack: (() => Promise<void>)[] = [];
    
    try {
      for (const tokenApplication of params.applications) {
        const original = await this.saveState(tokenApplication.nodeId);
        rollbackStack.push(() => this.restoreState(tokenApplication.nodeId, original));
        
        const result = await this.applyToken(tokenApplication);
        results.push(result);
      }
      
      return { success: true, results };
    } catch (error) {
      // Rollback all changes
      for (const rollback of rollbackStack.reverse()) {
        await rollback();
      }
      throw error;
    }
  }
}
```

### Command with Progress

```typescript
export class BatchExportHandler implements ICommandHandler<BatchExportParams, Result> {
  constructor(
    private exportService: ExportService,
    private progressCallback?: (progress: number) => void
  ) {}
  
  async handle(params: BatchExportParams): Promise<Result> {
    const total = params.nodeIds.length;
    const results: ExportResult[] = [];
    
    for (let i = 0; i < total; i++) {
      const result = await this.exportService.exportNode(params.nodeIds[i]);
      results.push(result);
      
      // Report progress
      if (this.progressCallback) {
        this.progressCallback((i + 1) / total * 100);
      }
    }
    
    return { success: true, results };
  }
}
```

## Message Bus Integration

Commands work seamlessly with message-based systems:

```typescript
// UI sends command message
postMessage({
  type: 'command',
  id: 'msg-123',
  command: 'applyToken',
  params: {
    nodeId: '123:456',
    tokenName: 'brand/primary'
  }
});

// Plugin receives and executes
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
```

## MCP Tool Integration

Commands map directly to MCP tools:

```typescript
// MCP tool definition
{
  name: 'figma_apply_token',
  description: 'Applies a Formation token to a node',
  inputSchema: {
    type: 'object',
    properties: {
      nodeId: { type: 'string' },
      tokenName: { type: 'string' },
      property: { type: 'string', enum: ['fill', 'stroke'] }
    },
    required: ['nodeId', 'tokenName']
  }
}

// MCP tool handler
async function handleMcpTool(toolName: string, args: any) {
  // Map MCP tool to command
  const commandName = toolToCommandMap[toolName];
  
  // Execute via command registry
  return await registry.execute(commandName, args);
}
```

## Testing

### Unit Test Handler

```typescript
describe('ApplyTokenHandler', () => {
  let handler: ApplyTokenHandler;
  let mockService: jest.Mocked<TokenService>;
  let mockLogger: jest.Mocked<ILogger>;
  
  beforeEach(() => {
    mockService = createMockTokenService();
    mockLogger = createMockLogger();
    handler = new ApplyTokenHandler(mockService, mockLogger);
  });
  
  it('validates params', () => {
    const result = handler.validate({ nodeId: '', tokenName: '' });
    
    expect(result.isValid).toBe(false);
    expect(result.errors).toContain('nodeId is required');
    expect(result.errors).toContain('tokenName is required');
  });
  
  it('executes command', async () => {
    mockService.applyToken.mockResolvedValue({ success: true });
    
    const result = await handler.handle({
      nodeId: '123:456',
      tokenName: 'brand/primary'
    });
    
    expect(result.success).toBe(true);
    expect(mockService.applyToken).toHaveBeenCalledWith(
      '123:456',
      'brand/primary',
      undefined
    );
  });
  
  it('handles errors', async () => {
    mockService.applyToken.mockRejectedValue(new Error('Token not found'));
    
    await expect(handler.handle({
      nodeId: '123:456',
      tokenName: 'invalid'
    })).rejects.toThrow('Token not found');
    
    expect(mockLogger.error).toHaveBeenCalled();
  });
});
```

### Integration Test via Registry

```typescript
describe('Command Registry Integration', () => {
  let registry: CommandRegistry;
  
  beforeEach(() => {
    registry = new CommandRegistry();
    registerAllHandlers(registry);
  });
  
  it('executes applyToken command', async () => {
    const result = await registry.execute('applyToken', {
      nodeId: '123:456',
      tokenName: 'brand/primary'
    });
    
    expect(result.success).toBe(true);
  });
  
  it('throws on invalid command', async () => {
    await expect(
      registry.execute('invalidCommand', {})
    ).rejects.toThrow('Command "invalidCommand" not found');
  });
  
  it('validates before executing', async () => {
    await expect(
      registry.execute('applyToken', { nodeId: '', tokenName: '' })
    ).rejects.toThrow('Validation failed');
  });
});
```

## Benefits

### Consistency
- All operations follow the same pattern
- Uniform error handling
- Predictable behavior

### Flexibility
- Easy to add new commands
- Commands are composable
- Support for undo/redo

### Testability
- Handlers test in isolation
- Mock dependencies easily
- Integration tests via registry

### Maintainability
- Clear command interface
- Self-documenting code
- Easy to find and modify

## Related Documentation

- **[Clean Architecture](clean-architecture.md)** - Overall architecture principles
- **[Domain-Driven Design](domain-driven-design.md)** - DDD patterns
- **[Figma Plugin Architecture](../../figma-specific/plugin-architecture.md)** - Plugin-specific patterns

---

**Last Updated**: January 2026  
**Source**: FanDuel engineering best practices
