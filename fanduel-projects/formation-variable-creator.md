# Formation Variable Creator

**Type**: Cross-File Variable Creation  
**Tech Stack**: TypeScript, Figma REST API  
**Architecture**: REST API Integration with Mode Mapping  
**Project Path**: `~/Documents/GitHub/formation-variable-creator/`

## Purpose

Enables cross-file variable creation by fetching variables from any source file and creating them in a destination file via Figma's REST API. Includes smart mode mapping and conflict detection.

## Key Features

- **Browse Source Variables** - Fetch and search variables from any Figma file
- **Cross-File Creation** - Create variables in a different file via REST API
- **Smart Mode Mapping** - Auto-matches modes by name with manual override
- **Conflict Detection** - Detects existing variables and offers skip/update options
- **Preview JSON** - See exactly what will be sent before executing

## Requirements

### Critical
- **Figma Enterprise plan** with full seat (required for `POST /variables` endpoint)
- Personal Access Token with scopes:
  - `file_variables:read` - Fetch variables from files
  - `file_variables:write` - Create variables in destination file
- **Edit access** to destination file (read access to source)

## Architecture Pattern

### REST API Integration

```
┌─────────────────┐        GET         ┌─────────────────┐
│  Source File    │◄──────────────────│  Plugin UI      │
│  (Variables)    │   /variables/local │  (Browser)      │
└─────────────────┘                    └────────┬────────┘
                                               │ POST
                                               │ /variables
                                               ▼
                                    ┌─────────────────┐
                                    │ Destination File│
                                    │  (Create Vars)  │
                                    └─────────────────┘
```

### Code Structure

```
src/
├── code.ts         # Plugin sandbox (token storage only)
├── types.ts        # Figma API type definitions
└── ui.ts           # (optional) TypeScript UI

ui.html             # Main UI with API logic
dist/               # Compiled output
```

## Reusable Patterns

### 1. Secure Token Storage

```typescript
// code.ts (runs in Figma sandbox)
figma.showUI(__html__, { width: 600, height: 700 });

figma.ui.onmessage = async (msg) => {
  switch (msg.type) {
    case 'save-token':
      await figma.clientStorage.setAsync('figma_api_token', msg.token);
      figma.ui.postMessage({ type: 'token-saved' });
      break;
      
    case 'get-token':
      const token = await figma.clientStorage.getAsync('figma_api_token');
      figma.ui.postMessage({ type: 'token-retrieved', token });
      break;
      
    case 'delete-token':
      await figma.clientStorage.deleteAsync('figma_api_token');
      figma.ui.postMessage({ type: 'token-deleted' });
      break;
  }
};
```

### 2. Fetch Variables from File

```javascript
// In UI (ui.html)
async function fetchVariables(fileKey, token) {
  const url = `https://api.figma.com/v1/files/${fileKey}/variables/local`;
  
  const response = await fetch(url, {
    headers: {
      'X-Figma-Token': token
    }
  });
  
  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.statusText}`);
  }
  
  const data = await response.json();
  
  return {
    collections: data.meta.variableCollections,
    variables: data.meta.variables,
    modes: extractModes(data.meta.variableCollections)
  };
}

function extractModes(collections) {
  const modes = [];
  
  Object.values(collections).forEach(collection => {
    collection.modes.forEach(mode => {
      modes.push({
        collectionId: collection.id,
        collectionName: collection.name,
        modeId: mode.modeId,
        modeName: mode.name
      });
    });
  });
  
  return modes;
}
```

### 3. Smart Mode Mapping

```javascript
function autoMapModes(sourceModes, destModes) {
  const mapping = {};
  
  sourceModes.forEach(sourceMode => {
    // Try exact name match first
    let match = destModes.find(dm => 
      dm.name.toLowerCase() === sourceMode.name.toLowerCase()
    );
    
    // Try fuzzy matching
    if (!match) {
      match = destModes.find(dm => {
        const sourceLower = sourceMode.name.toLowerCase();
        const destLower = dm.name.toLowerCase();
        
        // "FD Base Light" → "Light"
        if (sourceLower.includes(destLower) || 
            destLower.includes(sourceLower)) {
          return true;
        }
        
        // "FD Base Dark" → "Dark Mode"
        const sourceWords = sourceLower.split(' ');
        const destWords = destLower.split(' ');
        
        return sourceWords.some(sw => destWords.some(dw => 
          sw === dw || sw.includes(dw) || dw.includes(sw)
        ));
      });
    }
    
    if (match) {
      mapping[sourceMode.modeId] = match.modeId;
    }
  });
  
  return mapping;
}
```

### 4. Conflict Detection

```javascript
function detectConflicts(
  sourceVariables,
  destVariables,
  targetCollectionId
) {
  const conflicts = [];
  
  sourceVariables.forEach(sourceVar => {
    // Check if variable with same name exists in target collection
    const existing = destVariables.find(dv => 
      dv.name === sourceVar.name &&
      dv.variableCollectionId === targetCollectionId
    );
    
    if (existing) {
      conflicts.push({
        sourceVar,
        existingVar: existing,
        action: 'skip' // default action
      });
    }
  });
  
  return conflicts;
}
```

### 5. Build API Request Payload

```javascript
function buildVariableCreationPayload(
  sourceVariables,
  modeMapping,
  targetCollectionId,
  conflicts
) {
  const payload = {
    variableCollections: [],
    variables: [],
    variableModeValues: []
  };
  
  // If creating new collection
  if (targetCollectionId.startsWith('temp-')) {
    payload.variableCollections.push({
      action: 'CREATE',
      id: targetCollectionId,
      name: 'New Collection',
      variableIds: []
    });
  }
  
  sourceVariables.forEach(sourceVar => {
    // Check if skipped due to conflict
    const conflict = conflicts.find(c => c.sourceVar.id === sourceVar.id);
    if (conflict && conflict.action === 'skip') {
      return;
    }
    
    const tempVarId = `temp-var-${Date.now()}-${Math.random()}`;
    
    // Create variable
    payload.variables.push({
      action: conflict && conflict.action === 'update' ? 'UPDATE' : 'CREATE',
      id: conflict ? conflict.existingVar.id : tempVarId,
      name: sourceVar.name,
      variableCollectionId: targetCollectionId,
      resolvedType: sourceVar.resolvedType,
      scopes: sourceVar.scopes || ['ALL_SCOPES']
    });
    
    // Create mode values
    Object.entries(sourceVar.valuesByMode).forEach(([sourceModeId, value]) => {
      const destModeId = modeMapping[sourceModeId];
      
      if (destModeId) {
        payload.variableModeValues.push({
          action: conflict && conflict.action === 'update' ? 'UPDATE' : 'CREATE',
          variableId: conflict ? conflict.existingVar.id : tempVarId,
          modeId: destModeId,
          value: transformValue(value, sourceVar.resolvedType)
        });
      }
    });
  });
  
  return payload;
}
```

### 6. Execute Variable Creation

```javascript
async function createVariables(fileKey, token, payload) {
  const url = `https://api.figma.com/v1/files/${fileKey}/variables`;
  
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'X-Figma-Token': token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(`API Error: ${error.message || response.statusText}`);
  }
  
  return await response.json();
}
```

### 7. Value Transformation

```javascript
function transformValue(value, resolvedType) {
  switch (resolvedType) {
    case 'COLOR':
      // Ensure color has all required properties
      return {
        r: value.r || 0,
        g: value.g || 0,
        b: value.b || 0,
        a: value.a !== undefined ? value.a : 1
      };
      
    case 'FLOAT':
      return parseFloat(value);
      
    case 'STRING':
      return String(value);
      
    case 'BOOLEAN':
      return Boolean(value);
      
    default:
      return value;
  }
}
```

## When to Use This Pattern

✅ **Use for:**
- Cross-file variable propagation
- Design system distribution
- Theme duplication across files
- Creating variables from external sources

❌ **Don't use for:**
- Same-file operations (use Plugin API instead)
- If you don't have Enterprise plan
- Read-only operations

## Key Learnings

1. **Enterprise plan is required** for POST /variables endpoint
2. **Mode mapping is critical** - auto-match by name, allow manual override
3. **Conflict detection prevents duplicates** - let user choose skip vs update
4. **Temporary IDs** needed for new variables, collections, modes
5. **Preview before execute** builds trust and catches errors
6. **Token security** - store in clientStorage, never expose
7. **Edit permissions** required on destination file

## API Endpoints

### GET Variables
```
GET https://api.figma.com/v1/files/:file_key/variables/local
Headers: X-Figma-Token: <token>
```

### POST Variables (Enterprise Only)
```
POST https://api.figma.com/v1/files/:file_key/variables
Headers: 
  X-Figma-Token: <token>
  Content-Type: application/json
Body: {
  variableCollections: [...],
  variables: [...],
  variableModeValues: [...]
}
```

## Troubleshooting

| Error | Cause | Solution |
|-------|-------|----------|
| "Access denied" | Missing Enterprise plan or wrong token scopes | Verify Enterprise plan, check token has `file_variables:write` |
| "File not found" | Invalid file key or no access | Check URL, verify file access |
| "Mode not found" | Mode mapping incorrect | Review mode mapping, ensure destination modes exist |
| Variables not creating | Invalid payload structure | Check preview JSON, verify all required fields |

---

**Related Docs**:
- [Formation Variable Mapper](formation-variable-mapper.md) - Map variables within a file
- [Formation Variable Exporter](formation-variable-exporter.md) - Export variables to code
