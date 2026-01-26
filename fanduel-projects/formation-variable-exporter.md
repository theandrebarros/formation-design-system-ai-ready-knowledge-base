# Formation Variable Exporter

**Type**: Variable to Code Exporter  
**Tech Stack**: TypeScript, React, Vite  
**Architecture**: React UI with Transform Pipeline  
**Project Path**: `~/Documents/GitHub/formation-variable-exporter/`

## Purpose

Exports Figma design variables/tokens as JavaScript files with support for nested or flat structures, reference preservation, and multi-mode exports. Built with Formation Design System UI components.

## Key Features

### Export Modes
- **Simple Mode** - One-click export of all collections and modes
- **Advanced Mode** - Full control over collections, modes, and output format

### Capabilities
- Export to nested JavaScript objects or flat camelCase
- Preserve token references (`{core.blue}`) or resolve to values
- Single file or ZIP download for multiple modes
- Search and filter variables before export
- Support all variable types (COLOR, FLOAT, STRING, BOOLEAN)
- Automatic alias resolution (including external library references)
- Copy to clipboard with toast notifications

## Architecture Pattern

### React + Vite Build System

```
src/
├── code.ts                   # Plugin logic (Figma sandbox)
├── ui/
│   ├── index.html           # UI entry point
│   ├── App.tsx              # Main React application
│   ├── components/          # React components
│   │   ├── CodePreview.tsx  # Syntax-highlighted preview
│   │   ├── CollectionList.tsx
│   │   ├── ExportButton.tsx
│   │   ├── ModeSelector.tsx
│   │   ├── Toast.tsx
│   │   └── VariableSearch.tsx
│   └── styles/
│       └── theme.css        # Formation theme
├── transformers/            # Export format transformers
│   ├── javascript.ts
│   └── sanitizer.ts
└── types/
    └── index.ts
```

### Build Configuration (Vite)

```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        ui: 'src/ui/index.html'
      },
      output: {
        entryFileNames: '[name].js'
      }
    }
  }
});
```

## Reusable Patterns

### 1. Variable Collection Loading

```typescript
// code.ts
interface VariableData {
  collections: VariableCollection[];
  variables: Variable[];
}

async function loadAllVariables(): Promise<VariableData> {
  const collections = await figma.variables.getLocalVariableCollectionsAsync();
  const allVariables: Variable[] = [];
  
  for (const collection of collections) {
    for (const varId of collection.variableIds) {
      const variable = await figma.variables.getVariableByIdAsync(varId);
      if (variable) {
        allVariables.push({
          id: variable.id,
          name: variable.name,
          resolvedType: variable.resolvedType,
          valuesByMode: variable.valuesByMode,
          collectionId: collection.id,
          scopes: variable.scopes
        });
      }
    }
  }
  
  return { collections, variables: allVariables };
}
```

### 2. Alias Resolution

```typescript
// transformers/javascript.ts
function resolveAliases(
  value: any,
  variables: Variable[],
  modeId: string
): any {
  if (typeof value === 'object' && value.type === 'VARIABLE_ALIAS') {
    // Find the referenced variable
    const refVar = variables.find(v => v.id === value.id);
    
    if (refVar) {
      const refValue = refVar.valuesByMode[modeId];
      
      // Recursively resolve (handle chained aliases)
      return resolveAliases(refValue, variables, modeId);
    }
  }
  
  return value;
}
```

### 3. Transform to Nested Structure

```typescript
function transformToNested(
  variables: Variable[],
  modeId: string,
  preserveReferences: boolean
): Record<string, any> {
  const result: Record<string, any> = {};
  
  variables.forEach(variable => {
    const value = variable.valuesByMode[modeId];
    
    // Get final value (resolved or reference)
    const finalValue = preserveReferences 
      ? formatAsReference(value, variables)
      : resolveValue(value, variable.resolvedType, variables, modeId);
    
    // Build nested path: "component/button/background" → { component: { button: { background: ... } } }
    const parts = variable.name.split('/');
    let current = result;
    
    for (let i = 0; i < parts.length - 1; i++) {
      const part = sanitizeKey(parts[i]);
      if (!current[part]) {
        current[part] = {};
      }
      current = current[part];
    }
    
    const lastPart = sanitizeKey(parts[parts.length - 1]);
    current[lastPart] = finalValue;
  });
  
  return result;
}
```

### 4. Transform to Flat Structure

```typescript
function transformToFlat(
  variables: Variable[],
  modeId: string,
  preserveReferences: boolean
): Record<string, any> {
  const result: Record<string, any> = {};
  
  variables.forEach(variable => {
    const value = variable.valuesByMode[modeId];
    
    const finalValue = preserveReferences
      ? formatAsReference(value, variables)
      : resolveValue(value, variable.resolvedType, variables, modeId);
    
    // Convert "component/button/background" → "componentButtonBackground"
    const camelKey = toCamelCase(variable.name);
    result[camelKey] = finalValue;
  });
  
  return result;
}

function toCamelCase(str: string): string {
  return str
    .split('/')
    .map((part, index) => {
      part = sanitizeKey(part);
      return index === 0 
        ? part 
        : part.charAt(0).toUpperCase() + part.slice(1);
    })
    .join('');
}
```

### 5. Value Formatting

```typescript
function resolveValue(
  value: any,
  type: VariableResolvedDataType,
  variables: Variable[],
  modeId: string
): any {
  // Resolve aliases first
  const resolved = resolveAliases(value, variables, modeId);
  
  switch (type) {
    case 'COLOR':
      return formatColor(resolved);
    
    case 'FLOAT':
      return resolved;
    
    case 'STRING':
      return resolved;
    
    case 'BOOLEAN':
      return resolved;
    
    default:
      return resolved;
  }
}

function formatColor(color: RGB): string {
  const r = Math.round(color.r * 255);
  const g = Math.round(color.g * 255);
  const b = Math.round(color.b * 255);
  
  const toHex = (n: number) => n.toString(16).padStart(2, '0').toUpperCase();
  
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function formatAsReference(value: any, variables: Variable[]): string {
  if (typeof value === 'object' && value.type === 'VARIABLE_ALIAS') {
    const refVar = variables.find(v => v.id === value.id);
    if (refVar) {
      return `{${refVar.name.replace(/\//g, '.')}}`;
    }
  }
  
  return resolveValue(value, 'COLOR', variables, ''); // fallback
}
```

### 6. Generate JavaScript File

```typescript
// transformers/javascript.ts
export function generateJavaScriptFile(
  tokens: Record<string, any>,
  fileName: string
): string {
  const jsonString = JSON.stringify(tokens, null, 2);
  
  return `/**
 * Design Tokens
 * Generated from Figma Variables
 * ${new Date().toISOString()}
 */

export const ${sanitizeVariableName(fileName)} = ${jsonString};

export default ${sanitizeVariableName(fileName)};
`;
}

function sanitizeVariableName(name: string): string {
  // "My Tokens" → "myTokens"
  return name
    .replace(/[^a-zA-Z0-9_]/g, ' ')
    .trim()
    .split(' ')
    .map((word, i) => 
      i === 0 
        ? word.toLowerCase() 
        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join('');
}
```

### 7. Multi-Mode ZIP Export

```typescript
// App.tsx
import JSZip from 'jszip';

async function exportMultipleModes(
  collections: Collection[],
  modes: Mode[],
  format: 'nested' | 'flat',
  preserveRefs: boolean
) {
  const zip = new JSZip();
  
  for (const mode of modes) {
    const tokens = transformVariables(
      collections,
      mode.id,
      format,
      preserveRefs
    );
    
    const fileContent = generateJavaScriptFile(
      tokens,
      `tokens-${mode.name}`
    );
    
    zip.file(`${mode.name}.js`, fileContent);
  }
  
  const blob = await zip.generateAsync({ type: 'blob' });
  downloadBlob(blob, 'design-tokens.zip');
}
```

## React Component Patterns

### Code Preview with Syntax Highlighting

```tsx
// components/CodePreview.tsx
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export function CodePreview({ code }: { code: string }) {
  return (
    <div className="code-preview">
      <div className="code-header">
        <span>Preview</span>
        <button onClick={() => navigator.clipboard.writeText(code)}>
          Copy
        </button>
      </div>
      
      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        customStyle={{
          margin: 0,
          borderRadius: '0 0 8px 8px',
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
```

### Toast Notification System

```tsx
// components/Toast.tsx
interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'info';
  onClose: () => void;
}

export function Toast({ message, type, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);
  
  return (
    <div className={`toast toast-${type}`}>
      {type === 'success' && '✓ '}
      {type === 'error' && '⚠ '}
      {message}
    </div>
  );
}
```

## When to Use This Pattern

✅ **Use for:**
- Variable to code exports
- Design token distribution
- When you need React UI
- Syntax highlighting in preview
- Multi-mode exports
- Reference preservation

❌ **Don't use for:**
- Simple plugins (React overhead)
- Plugins without complex UI
- When ES5 compatibility required

## Key Learnings

1. **Alias resolution can be recursive** - handle chained references
2. **External library aliases** need special handling
3. **Nested vs flat** - designers prefer nested, developers often prefer flat
4. **Preserve references** option enables token composition
5. **ZIP export** essential for multi-mode workflows
6. **Syntax highlighting** dramatically improves preview UX
7. **Vite** provides fast dev experience for React plugins

## Output Examples

### Nested with Preserved References
```javascript
export const tokens = {
  core: {
    blue: {
      500: "#0070EB"
    }
  },
  component: {
    button: {
      primary: {
        background: "{core.blue.500}"
      }
    }
  }
};
```

### Flat with Resolved Values
```javascript
export const tokens = {
  coreBlue500: "#0070EB",
  componentButtonPrimaryBackground: "#0070EB"
};
```

---

**Related Docs**:
- [Formation Variable Creator](formation-variable-creator.md) - Create variables across files
- [Formation Variable Mapper](formation-variable-mapper.md) - Map variables
