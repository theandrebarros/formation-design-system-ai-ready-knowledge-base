# Formation Spacing

**Type**: Spacing Compliance Checker  
**Tech Stack**: JavaScript (ES5), HTML  
**Architecture**: Simple Plugin with Confidence-Based Matching  
**Project Path**: `~/Documents/GitHub/formation-spacing/`

## Purpose

Specialized design consistency plugin that scans designs for raw spacing values and helps apply Formation Design System spacing tokens. Features confidence-based suggestions and compliance tracking.

## Key Features

- **Automatic Token Detection** - Reads spacing variables from Figma file or team libraries
- **Scope Selection** - Scan current page or entire document
- **Confidence-Based Suggestions** - Groups issues by match confidence
- **Multiple Match Handling** - Dropdown when multiple tokens could apply
- **One-Click Apply** - Apply variables to individual elements
- **Batch Apply** - Apply all high-confidence fixes at once
- **Compliance Tracking** - Shows percentage of spacing using proper tokens

## Formation Spacing Scale

| Token | Value |
|-------|-------|
| space-0 | 0 |
| space-025 | 1px |
| space-05 | 2px |
| space-1 | 4px |
| space-2 | 8px |
| space-3 | 12px |
| space-4 | 16px |
| space-5 | 20px |
| space-6 | 24px |
| space-8 | 32px |
| space-10 | 40px |
| space-12 | 48px |

## Supported Properties

- **Gap (itemSpacing)** - Auto-layout gap between items
- **Padding Top/Right/Bottom/Left** - Auto-layout padding values

## Architecture Pattern

### Confidence-Based Matching

The key innovation - issues are categorized by match confidence:

```javascript
// Confidence levels
var CONFIDENCE_EXACT = 'exact';        // 100% match
var CONFIDENCE_CLOSE = 'close';        // Within 1-2px
var CONFIDENCE_APPROXIMATE = 'approx';  // Within 4px
var CONFIDENCE_NONE = 'none';          // No match found

function categorizeIssues(issues) {
  return {
    readyToFix: issues.filter(i => 
      i.confidence === CONFIDENCE_EXACT || 
      i.confidence === CONFIDENCE_CLOSE
    ),
    needsReview: issues.filter(i => 
      i.confidence === CONFIDENCE_APPROXIMATE
    ),
    noMatch: issues.filter(i => 
      i.confidence === CONFIDENCE_NONE
    ),
    requiresComponentEdit: issues.filter(i => 
      i.isInComponent
    )
  };
}
```

## Reusable Patterns

### 1. Spacing Match with Confidence

```javascript
function findSpacingMatches(value, spacingTokens, tolerance) {
  var matches = [];
  
  for (var i = 0; i < spacingTokens.length; i++) {
    var token = spacingTokens[i];
    var diff = Math.abs(token.value - value);
    
    var confidence;
    if (diff === 0) {
      confidence = CONFIDENCE_EXACT;
    } else if (diff <= 2) {
      confidence = CONFIDENCE_CLOSE;
    } else if (diff <= tolerance) {
      confidence = CONFIDENCE_APPROXIMATE;
    } else {
      continue; // Too far off
    }
    
    matches.push({
      variableId: token.id,
      variableName: token.name,
      tokenValue: token.value,
      difference: diff,
      confidence: confidence
    });
  }
  
  // Sort by confidence, then by difference
  matches.sort(function(a, b) {
    if (a.confidence !== b.confidence) {
      var order = {
        'exact': 0, 
        'close': 1, 
        'approx': 2
      };
      return order[a.confidence] - order[b.confidence];
    }
    return a.difference - b.difference;
  });
  
  return matches;
}
```

### 2. Comprehensive Spacing Scan

```javascript
function scanSpacing(node, spacingTokens) {
  var issues = [];
  
  if (node.layoutMode === 'NONE') return issues;
  
  var isInComponent = isNodeInComponent(node);
  
  // Check item spacing (gap)
  if (node.itemSpacing > 0) {
    var gapMatches = findSpacingMatches(
      node.itemSpacing, 
      spacingTokens, 
      4 // tolerance
    );
    
    if (gapMatches.length === 0 || gapMatches[0].difference > 0) {
      issues.push({
        nodeId: node.id,
        nodeName: node.name,
        property: 'itemSpacing',
        propertyLabel: 'Gap',
        currentValue: node.itemSpacing,
        suggestions: gapMatches.slice(0, 3), // Top 3
        confidence: gapMatches[0]?.confidence || CONFIDENCE_NONE,
        isInComponent: isInComponent
      });
    }
  }
  
  // Check padding
  var paddingProps = [
    { key: 'paddingTop', label: 'Padding Top' },
    { key: 'paddingRight', label: 'Padding Right' },
    { key: 'paddingBottom', label: 'Padding Bottom' },
    { key: 'paddingLeft', label: 'Padding Left' }
  ];
  
  paddingProps.forEach(function(prop) {
    var value = node[prop.key];
    
    if (value && value > 0) {
      var matches = findSpacingMatches(value, spacingTokens, 4);
      
      if (matches.length === 0 || matches[0].difference > 0) {
        issues.push({
          nodeId: node.id,
          nodeName: node.name,
          property: prop.key,
          propertyLabel: prop.label,
          currentValue: value,
          suggestions: matches.slice(0, 3),
          confidence: matches[0]?.confidence || CONFIDENCE_NONE,
          isInComponent: isInComponent
        });
      }
    }
  });
  
  return issues;
}
```

### 3. Component Context Detection

```javascript
function isNodeInComponent(node) {
  var current = node;
  
  while (current) {
    if (current.type === 'INSTANCE') {
      return true;
    }
    current = current.parent;
  }
  
  return false;
}
```

Why this matters: Spacing inside component instances can't be fixed directly - the main component must be edited.

### 4. Compliance Tracking

```javascript
function calculateCompliance(allNodes, spacingTokens) {
  var totalSpacingNodes = 0;
  var compliantNodes = 0;
  
  allNodes.forEach(function(node) {
    if (node.layoutMode === 'NONE') return;
    
    totalSpacingNodes++;
    
    var hasIssue = false;
    
    // Check gap
    if (node.itemSpacing > 0) {
      var gapMatches = findSpacingMatches(node.itemSpacing, spacingTokens, 0);
      if (gapMatches.length === 0 || gapMatches[0].difference > 0) {
        hasIssue = true;
      }
    }
    
    // Check padding (similar logic)
    // ...
    
    if (!hasIssue) {
      compliantNodes++;
    }
  });
  
  return {
    total: totalSpacingNodes,
    compliant: compliantNodes,
    percentage: totalSpacingNodes > 0 
      ? Math.round((compliantNodes / totalSpacingNodes) * 100)
      : 100
  };
}
```

### 5. Batch Apply with Confidence Filter

```javascript
function applyReadyFixes(issues, modeId) {
  var applied = 0;
  var skipped = 0;
  
  issues.forEach(function(issue) {
    // Only auto-apply high-confidence fixes
    if (issue.confidence !== CONFIDENCE_EXACT && 
        issue.confidence !== CONFIDENCE_CLOSE) {
      skipped++;
      return;
    }
    
    // Skip component instances
    if (issue.isInComponent) {
      skipped++;
      return;
    }
    
    // Must have a clear top suggestion
    if (!issue.suggestions || issue.suggestions.length === 0) {
      skipped++;
      return;
    }
    
    try {
      applyVariable(
        issue.nodeId,
        issue.property,
        issue.suggestions[0].variableId,
        modeId
      );
      applied++;
    } catch (e) {
      skipped++;
    }
  });
  
  return { applied: applied, skipped: skipped };
}
```

## UI Pattern (Issue Categorization)

```html
<div class="issues-container">
  <div class="category ready-to-fix">
    <h3>✅ Ready to Fix (Exact/Close Match)</h3>
    <div id="ready-issues"></div>
    <button onclick="applyAll('ready')">Apply All Ready Fixes</button>
  </div>
  
  <div class="category needs-review">
    <h3>⚠️ Needs Review (Approximate Match)</h3>
    <div id="review-issues"></div>
  </div>
  
  <div class="category no-match">
    <h3>❌ No Match Found</h3>
    <div id="nomatch-issues"></div>
  </div>
  
  <div class="category component-edit">
    <h3>🔒 Requires Component Edit</h3>
    <div id="component-issues"></div>
  </div>
</div>
```

## When to Use This Pattern

✅ **Use for:**
- Spacing-specific validation
- When you need confidence-based matching
- Projects requiring compliance metrics
- Batch operations with safety checks

❌ **Don't use for:**
- All-in-one validation (use formation-check)
- Color or radius validation
- Complex validation logic

## Key Learnings

1. **Confidence levels** prevent bad auto-fixes (designer must review "approximate")
2. **Component context** is critical - can't fix spacing in instances
3. **Tolerance threshold** (4px) balances between helpful and noisy
4. **Compliance percentage** motivates teams to fix issues
5. **Multiple suggestions** handle edge cases where multiple tokens have same value

## Comparison with Formation Check

| Feature | Formation Check | Formation Spacing |
|---------|----------------|-------------------|
| Scope | Colors, spacing, radius | Spacing only |
| Matching | Exact match only | Confidence-based (exact/close/approx) |
| Suggestions | All matches | Top 3 matches |
| Categorization | All in one list | By confidence level |
| Compliance | No | Yes (percentage) |
| Complexity | Simple | Moderate |

---

**Related Docs**:
- [Formation Check](formation-check.md) - Similar validation for all properties
- [Formation DS Spacing](../formation-ds/core/spacing.md) - Spacing token reference
