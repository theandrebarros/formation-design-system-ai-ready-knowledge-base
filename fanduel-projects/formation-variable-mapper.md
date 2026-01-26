# Formation Variable Mapper

**Type**: Natural Language Variable Mapping  
**Tech Stack**: TypeScript, React, MCP Integration  
**Architecture**: NLP-Powered Variable Operations  
**Project Path**: `~/Documents/GitHub/formation-variable-mapper/`

## Purpose

Bulk map variables with natural language input and intelligent cross-collection support. Leverages Figma MCP for intelligent suggestions, enabling designers to describe mappings conversationally instead of manually selecting.

## Key Features

- **Variable Search** - Search and filter variables by name, collection, or type
- **Natural Language Input** - Describe variable mappings conversationally
- **MCP Integration** - Intelligent suggestions from Figma MCP server
- **Formation Components** - Uses Formation design system for consistent UI
- **Real-time Updates** - See changes instantly in your Figma file
- **Bulk Operations** - Map multiple variables at once

## Architecture Pattern

### Natural Language Processing Flow

```
┌──────────────┐   Query    ┌──────────────┐   Suggest   ┌──────────────┐
│   Designer   │────────────▶│  Plugin UI   │────────────▶│  MCP Server  │
│              │             │              │             │              │
└──────────────┘             └──────┬───────┘             └──────┬───────┘
                                   │ Apply                       │
                                   ▼                             │
                            ┌──────────────┐                    │
                            │ Figma Plugin │◀───────────────────┘
                            │  (Sandbox)   │   Suggestions
                            └──────────────┘
```

### Code Structure

```
src/
├── code.ts           # Plugin code (Figma sandbox)
└── ui.tsx            # UI with NLP integration

ui.html               # UI HTML template
vite.config.ts        # Build configuration
```

## Reusable Patterns

### 1. Natural Language Query Processing

```typescript
// ui.tsx
interface MappingQuery {
  query: string;                    // "map to Predicts library variable"
  variable: VariableInfo;           // Current variable
  availableVariables: VariableInfo[]; // All variables
}

async function getSuggestions(query: MappingQuery): Promise<Mapping[]> {
  const response = await fetch(`${MCP_SERVER_URL}/suggest-mapping`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(query)
  });
  
  const result = await response.json();
  
  return result.mappings.map((m: any) => ({
    targetVariableId: m.targetVariableId,
    targetVariableName: m.targetVariableName,
    confidence: m.confidence,
    reason: m.reason
  }));
}
```

### 2. Query Examples

```typescript
const queryExamples = [
  "map to Predicts Theme Extension library variable",
  "replace with core/redD2",
  "connect to buttonLinkDestructive/content/base from library",
  "alias to component/button/primary",
  "link to same variable name in THEME collection",
  "find closest match in Predicts collection"
];
```

### 3. Variable Search with Filtering

```typescript
interface VariableFilter {
  searchTerm: string;
  collections: string[];  // Filter by collection IDs
  types: VariableResolvedDataType[];  // COLOR, FLOAT, STRING, BOOLEAN
}

function filterVariables(
  variables: Variable[],
  filter: VariableFilter
): Variable[] {
  return variables.filter(v => {
    // Search term match
    if (filter.searchTerm) {
      const term = filter.searchTerm.toLowerCase();
      if (!v.name.toLowerCase().includes(term)) {
        return false;
      }
    }
    
    // Collection filter
    if (filter.collections.length > 0) {
      if (!filter.collections.includes(v.collectionId)) {
        return false;
      }
    }
    
    // Type filter
    if (filter.types.length > 0) {
      if (!filter.types.includes(v.resolvedType)) {
        return false;
      }
    }
    
    return true;
  });
}
```

### 4. Apply Variable Mapping

```typescript
// code.ts
interface ApplyMappingRequest {
  sourceVariableId: string;
  targetVariableId: string;
  modeId: string;
}

async function applyMapping(request: ApplyMappingRequest) {
  const sourceVar = await figma.variables.getVariableByIdAsync(
    request.sourceVariableId
  );
  const targetVar = await figma.variables.getVariableByIdAsync(
    request.targetVariableId
  );
  
  if (!sourceVar || !targetVar) {
    throw new Error('Variable not found');
  }
  
  // Set source variable to alias target variable
  sourceVar.setValueForMode(request.modeId, {
    type: 'VARIABLE_ALIAS',
    id: targetVar.id
  });
  
  return {
    success: true,
    sourceVariable: sourceVar.name,
    targetVariable: targetVar.name
  };
}
```

### 5. Bulk Mapping Operations

```typescript
interface BulkMappingRequest {
  mappings: {
    sourceId: string;
    targetId: string;
  }[];
  modeId: string;
}

async function applyBulkMappings(request: BulkMappingRequest) {
  const results = {
    successful: 0,
    failed: 0,
    errors: [] as string[]
  };
  
  for (const mapping of request.mappings) {
    try {
      await applyMapping({
        sourceVariableId: mapping.sourceId,
        targetVariableId: mapping.targetId,
        modeId: request.modeId
      });
      results.successful++;
    } catch (error) {
      results.failed++;
      results.errors.push(`${mapping.sourceId}: ${error.message}`);
    }
  }
  
  return results;
}
```

### 6. MCP Server Configuration

```typescript
// ui.tsx
interface MCPConfig {
  url: string;
  timeout: number;
}

const defaultConfig: MCPConfig = {
  url: 'https://mcp.figma.com/mcp', // Or http://localhost:5000 for local
  timeout: 30000
};

function loadMCPConfig(): MCPConfig {
  const saved = localStorage.getItem('mcp-config');
  return saved ? JSON.parse(saved) : defaultConfig;
}

function saveMCPConfig(config: MCPConfig) {
  localStorage.setItem('mcp-config', JSON.stringify(config));
}
```

### 7. Confidence-Based Suggestion UI

```tsx
interface Suggestion {
  targetVariableId: string;
  targetVariableName: string;
  confidence: number;  // 0-1
  reason: string;
}

function SuggestionList({ suggestions }: { suggestions: Suggestion[] }) {
  // Sort by confidence
  const sorted = [...suggestions].sort((a, b) => b.confidence - a.confidence);
  
  return (
    <div className="suggestions">
      {sorted.map((s, i) => (
        <div 
          key={s.targetVariableId}
          className={`suggestion confidence-${getConfidenceLevel(s.confidence)}`}
        >
          <div className="suggestion-header">
            <span className="variable-name">{s.targetVariableName}</span>
            <span className="confidence">{Math.round(s.confidence * 100)}%</span>
          </div>
          
          <div className="suggestion-reason">{s.reason}</div>
          
          <button onClick={() => applyMapping(s)}>
            Apply
          </button>
        </div>
      ))}
    </div>
  );
}

function getConfidenceLevel(confidence: number): 'high' | 'medium' | 'low' {
  if (confidence >= 0.8) return 'high';
  if (confidence >= 0.5) return 'medium';
  return 'low';
}
```

### 8. Cross-Collection Mapping Pattern

```typescript
function findCrossCollectionMatches(
  sourceVariable: Variable,
  targetCollection: Collection,
  allVariables: Variable[]
): Variable[] {
  // Find variables in target collection
  const targetVars = allVariables.filter(v => 
    v.collectionId === targetCollection.id
  );
  
  // Match by name similarity
  return targetVars
    .map(v => ({
      variable: v,
      similarity: calculateNameSimilarity(sourceVariable.name, v.name)
    }))
    .filter(m => m.similarity > 0.7)
    .sort((a, b) => b.similarity - a.similarity)
    .map(m => m.variable);
}

function calculateNameSimilarity(name1: string, name2: string): number {
  // Simple similarity: count matching path segments
  const parts1 = name1.split('/');
  const parts2 = name2.split('/');
  
  const matches = parts1.filter(p1 => 
    parts2.some(p2 => p2.toLowerCase() === p1.toLowerCase())
  ).length;
  
  return matches / Math.max(parts1.length, parts2.length);
}
```

## MCP Server Integration

### Expected MCP Endpoint

```
POST /suggest-mapping
Content-Type: application/json

Request:
{
  "query": "map to Predicts Theme Extension library variable",
  "variable": {
    "id": "VariableID:123",
    "name": "component/button/buttonLinkDestructive/content/base",
    "collectionName": "PRODUCT"
  },
  "availableVariables": [
    {
      "id": "VariableID:456",
      "name": "component/button/buttonLinkDestructive/content/base",
      "collectionName": "THEME"
    },
    // ... more variables
  ]
}

Response:
{
  "mappings": [
    {
      "targetVariableId": "VariableID:456",
      "targetVariableName": "component/button/buttonLinkDestructive/content/base",
      "confidence": 0.95,
      "reason": "Exact name match in THEME collection"
    }
  ]
}
```

## When to Use This Pattern

✅ **Use for:**
- Bulk variable mapping
- Cross-collection operations
- When natural language input improves UX
- MCP-powered features
- Variable aliasing workflows

❌ **Don't use for:**
- Simple single mappings
- When MCP server not available
- Plugins without network access

## Key Learnings

1. **Natural language reduces friction** - "map to THEME collection" vs manual search/select
2. **Confidence scoring** helps users trust or question suggestions
3. **Reason explanation** makes AI decisions transparent
4. **Cross-collection mapping** is common workflow for theme extensions
5. **Bulk operations** save massive time vs one-by-one
6. **MCP integration** enables intelligent features impossible with Plugin API alone
7. **Fallback to manual** when NLP fails or confidence too low

## Troubleshooting

| Issue | Solution |
|-------|----------|
| MCP server not responding | Check URL in settings, verify network access in manifest.json |
| Low confidence suggestions | Refine query, check variable naming conventions |
| Variables not updating | Ensure edit permissions, verify variable IDs are correct |
| CORS errors | Configure CORS on custom MCP server |

---

**Related Docs**:
- [Figma Super Powers](figma-super-powers.md) - MCP bridge architecture
- [Formation Variable Creator](formation-variable-creator.md) - Cross-file variable creation
- [Formation Variable Exporter](formation-variable-exporter.md) - Export variables
