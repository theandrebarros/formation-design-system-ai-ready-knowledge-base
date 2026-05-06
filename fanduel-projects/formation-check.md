# Formation Check

**Type**: Design System Compliance Checker  
**Tech Stack**: JavaScript (ES5), HTML  
**Architecture**: Simple Plugin (No build step)  
**Project Path**: `~/Documents/GitHub/formation-check/`

## Purpose

A lightweight design consistency plugin that validates designs against Formation Design System tokens. Automatically detects tokens from your Figma file and suggests correct variables for raw color, spacing, and radius values.

## Key Features

- **Automatic Token Detection** - Reads variable collections directly from Figma file
- **Scope Selection** - Lint current page or entire document
- **Token Suggestions** - Suggests matching tokens for raw values
- **Multiple Match Handling** - Dropdown selection when multiple tokens share the same value
- **One-Click Apply** - Apply variables to individual elements
- **Batch Apply** - Apply all suggested fixes at once
- **Visual Feedback** - Toast notifications for success/error states

## Supported Checks

| Property | What it checks |
|----------|---------------|
| **Fill Colors** | Solid fill colors → Color variables |
| **Stroke Colors** | Solid stroke colors → Color variables |
| **Corner Radius** | Border radius values → Number variables |
| **Item Spacing** | Auto-layout gap → Spacing variables |
| **Padding** | Auto-layout padding → Spacing variables |

## Architecture Pattern

### Simple ES5 Plugin

**No build step required** - Pure JavaScript (ES5) and HTML

```
formation-check/
├── manifest.json    # Plugin configuration
├── code.js          # Main plugin logic (ES5 compatible)
├── ui.html          # Plugin UI (Formation dark theme)
├── icon.png         # Plugin icon
└── README.md
```

### Code Structure

```javascript
// code.js structure
figma.showUI(__html__, { width: 480, height: 720 });

// Load variables from file
function loadVariables() {
  var collections = figma.variables.getLocalVariableCollections();
  // ... collection loading logic
}

// Scan nodes for issues
function scanNodes(scope, selectedCollections, selectedMode) {
  var nodes = scope === 'page' 
    ? figma.currentPage.findAll()
    : figma.root.findAll();
  
  var issues = [];
  
  for (var i = 0; i < nodes.length; i++) {
    var node = nodes[i];
    
    // Check fills
    if (node.fills && node.fills.length > 0) {
      var issue = checkFill(node, tokens);
      if (issue) issues.push(issue);
    }
    
    // Check spacing
    if (node.layoutMode !== 'NONE') {
      var spacingIssue = checkSpacing(node, spacingTokens);
      if (spacingIssue) issues.push(spacingIssue);
    }
  }
  
  return issues;
}

// Apply variable to node
function applyVariable(nodeId, property, variableId, modeId) {
  var node = figma.getNodeById(nodeId);
  var variable = figma.variables.getVariableById(variableId);
  
  node.setBoundVariable(property, variable);
}
```

## Reusable Patterns

### 1. Variable Collection Loading

```javascript
function loadVariables() {
  var collections = figma.variables.getLocalVariableCollections();
  var result = [];
  
  for (var i = 0; i < collections.length; i++) {
    var collection = collections[i];
    var collectionData = {
      id: collection.id,
      name: collection.name,
      modes: [],
      variables: []
    };
    
    // Load modes
    for (var j = 0; j < collection.modes.length; j++) {
      collectionData.modes.push({
        id: collection.modes[j].modeId,
        name: collection.modes[j].name
      });
    }
    
    // Load variables
    for (var k = 0; k < collection.variableIds.length; k++) {
      var varId = collection.variableIds[k];
      var variable = figma.variables.getVariableById(varId);
      
      if (variable.resolvedType === 'COLOR' || 
          variable.resolvedType === 'FLOAT') {
        collectionData.variables.push({
          id: variable.id,
          name: variable.name,
          type: variable.resolvedType,
          values: variable.valuesByMode
        });
      }
    }
    
    result.push(collectionData);
  }
  
  return result;
}
```

### 2. Color Matching Logic

```javascript
function findColorMatches(hexColor, colorTokens) {
  var matches = [];
  
  for (var i = 0; i < colorTokens.length; i++) {
    var token = colorTokens[i];
    var tokenHex = rgbToHex(token.value.r, token.value.g, token.value.b);
    
    if (tokenHex === hexColor) {
      matches.push({
        variableId: token.id,
        variableName: token.name,
        similarity: 100
      });
    }
  }
  
  return matches;
}

// RGB to Hex conversion
function rgbToHex(r, g, b) {
  var toHex = function(n) {
    var hex = Math.round(n * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  
  return '#' + toHex(r) + toHex(g) + toHex(b);
}
```

### 3. Batch Apply Pattern

```javascript
function applyAllFixes(issues, modeId) {
  var successCount = 0;
  var failCount = 0;
  
  for (var i = 0; i < issues.length; i++) {
    var issue = issues[i];
    
    if (issue.suggestion && issue.suggestion.variableId) {
      try {
        applyVariable(
          issue.nodeId,
          issue.property,
          issue.suggestion.variableId,
          modeId
        );
        successCount++;
      } catch (e) {
        failCount++;
      }
    }
  }
  
  return { success: successCount, failed: failCount };
}
```

### 4. Toast Notification Pattern

```javascript
// In UI (ui.html)
function showToast(message, type) {
  var toast = document.getElementById('toast');
  toast.textContent = message;
  toast.className = 'toast ' + type; // 'success' or 'error'
  toast.style.display = 'block';
  
  setTimeout(function() {
    toast.style.display = 'none';
  }, 3000);
}
```

## UI Pattern (Formation Dark Theme)

```html
<style>
  /* Formation tokens — apply via data-theme attribute, not manual CSS variables */
  /* See: @fanduel/formation-tokens for the full token set */
  /* Example: <body data-theme="fanduel" data-mode="dark"> */
  
  body {
    background: var(--bg-base);
    color: var(--content-default);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    padding: var(--space-4);
  }
  
  .button-primary {
    background: var(--brand-primary);
    color: var(--content-default);
    border: none;
    border-radius: var(--radius-2);
    padding: var(--space-2) var(--space-4);
    cursor: pointer;
  }
  
  .button-primary:hover {
    filter: brightness(1.1);
  }
</style>
```

## When to Use This Pattern

✅ **Use for:**
- Simple, focused plugins
- Quick prototypes
- When you need maximum Figma compatibility (ES5)
- Plugins with minimal external dependencies
- When build complexity is not justified

❌ **Don't use for:**
- Complex plugins with many features
- When you need TypeScript type safety
- Projects requiring npm packages
- When you need sophisticated state management

## Key Utilities

### Spacing Validation

```javascript
function checkSpacing(node, spacingTokens) {
  // Check item spacing (gap)
  if (node.itemSpacing !== 0) {
    var matches = findSpacingMatches(node.itemSpacing, spacingTokens);
    if (matches.length === 0) {
      return {
        nodeId: node.id,
        nodeName: node.name,
        property: 'itemSpacing',
        currentValue: node.itemSpacing,
        suggestions: findClosestSpacing(node.itemSpacing, spacingTokens)
      };
    }
  }
  
  // Check padding
  if (node.paddingTop || node.paddingRight || 
      node.paddingBottom || node.paddingLeft) {
    // Similar logic for padding...
  }
  
  return null;
}
```

### Radius Validation

```javascript
function checkRadius(node, radiusTokens) {
  if (!node.cornerRadius) return null;
  
  var matches = findRadiusMatches(node.cornerRadius, radiusTokens);
  
  if (matches.length === 0) {
    return {
      nodeId: node.id,
      nodeName: node.name,
      property: 'cornerRadius',
      currentValue: node.cornerRadius,
      suggestions: findClosestRadius(node.cornerRadius, radiusTokens)
    };
  }
  
  return null;
}
```

## Key Learnings

1. **ES5 works great** for simple plugins - no build complexity
2. **Variable collections** are the source of truth for tokens
3. **Batch operations** save significant time for designers
4. **Visual feedback** (toasts) are critical for UX
5. **Multiple matches** require dropdown UIs for selection

---

**Related Docs**:
- [Formation Spacing](formation-spacing.md) - Similar validation with confidence scoring
- [Figma Plugin Constraints](../figma-specific/plugin-constraints.md)
