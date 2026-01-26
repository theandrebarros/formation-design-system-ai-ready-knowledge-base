# Formation Component Upgrader

**Type**: Component Version Management  
**Tech Stack**: TypeScript, esbuild  
**Architecture**: Modular TypeScript with Scanner/Detector/Upgrader pattern  
**Project Path**: `~/Documents/GitHub/formation-component-upgrader/`

## Purpose

Automatically upgrades legacy Formation design system components to their newer versions. Intelligently detects old vs new components by analyzing usage patterns, then swaps them while preserving overrides and properties.

## Key Features

- **Smart Detection** - Automatically identifies old vs new components by analyzing usage patterns
- **Dynamic Matching** - No hardcoded keys required; finds new components by name matching
- **Override Preservation** - Maintains text, visibility, and fill overrides during upgrade
- **Property Mapping** - Automatically maps old variant properties to new ones
- **Flexible Scope** - Upgrade selected components, current page, or entire document

## Supported Components

✅ Button, Avatar, Text Field, Select Field, Checkbox, Radio Button, Toast, Inline Message, Fixed Banner, Floating Banner, Data Chunk, Tag, Badge, Tab, Loader, Icon Container

## Architecture Pattern

### Modular TypeScript Structure

```
src/
├── code.ts          # Main plugin entry point
├── scanner.ts       # Component scanning by scope
├── detector.ts      # Smart old/new detection logic
├── upgrader.ts      # Component swap & override preservation
├── types.ts         # TypeScript type definitions
└── mappings/        # Property mapping configurations
    ├── index.ts
    ├── button.ts
    ├── avatar.ts
    ├── forms.ts
    ├── notifications.ts
    └── misc.ts
```

## Reusable Patterns

### 1. Smart Detection Algorithm

The killer feature - automatically determines which component version is "new" based on usage frequency:

```typescript
// detector.ts
export function detectOldComponents(
  instances: ComponentInstance[]
): DetectionResult {
  // Group instances by component type name
  const groupedByType = groupBy(instances, (inst) => 
    inst.mainComponent?.parent?.name || 'Unknown'
  );
  
  const results: DetectionResult = {
    old: [],
    new: new Map(),
    unchanged: []
  };
  
  for (const [typeName, typeInstances] of Object.entries(groupedByType)) {
    // Group by component key
    const groupedByKey = groupBy(typeInstances, (inst) => 
      inst.mainComponent?.key || 'unknown'
    );
    
    // If multiple keys exist, most common = NEW
    if (Object.keys(groupedByKey).length > 1) {
      let maxCount = 0;
      let newComponentKey: string | null = null;
      
      for (const [key, instances] of Object.entries(groupedByKey)) {
        if (instances.length > maxCount) {
          maxCount = instances.length;
          newComponentKey = key;
        }
      }
      
      // Flag less common keys as OLD
      for (const [key, instances] of Object.entries(groupedByKey)) {
        if (key !== newComponentKey) {
          results.old.push(...instances);
          
          // Find a NEW instance as upgrade target
          const newInstances = groupedByKey[newComponentKey];
          if (newInstances.length > 0) {
            results.new.set(typeName, newInstances[0].mainComponent!);
          }
        }
      }
    } else {
      // Only one version exists - mark as unchanged
      results.unchanged.push(...typeInstances);
    }
  }
  
  return results;
}
```

**Key insight**: No hardcoded component keys! The plugin determines old vs new dynamically.

### 2. Property Mapping Pattern

Each component type has custom property mappings:

```typescript
// mappings/button.ts
export const buttonMapping: PropertyMapping = {
  componentType: 'Button',
  
  propertyMaps: {
    // Old property → New property
    'Style': 'Variant',
    'Size': 'Size',        // Same name
    'State': 'State',      // Same name
    'Icon': 'Has Icon'     // Renamed
  },
  
  valueTransforms: {
    // Transform old values to new values
    'Style': {
      'primary': 'Primary',
      'secondary': 'Secondary',
      'tertiary': 'Tertiary'
    }
  }
};

// mappings/index.ts
export const allMappings: PropertyMapping[] = [
  buttonMapping,
  avatarMapping,
  textFieldMapping,
  // ... more
];

export function getMappingForComponent(
  componentName: string
): PropertyMapping | undefined {
  return allMappings.find(m => 
    componentName.toLowerCase().includes(m.componentType.toLowerCase())
  );
}
```

### 3. Upgrade with Override Preservation

```typescript
// upgrader.ts
export function upgradeComponent(
  oldInstance: ComponentInstance,
  newComponent: ComponentNode,
  mapping?: PropertyMapping
): UpgradeResult {
  try {
    // 1. Capture current state
    const oldProps = captureProperties(oldInstance);
    const overrides = captureOverrides(oldInstance);
    
    // 2. Swap to new component
    oldInstance.swapComponent(newComponent);
    
    // 3. Map and apply properties
    if (mapping) {
      applyMappedProperties(oldInstance, oldProps, mapping);
    }
    
    // 4. Restore overrides
    restoreOverrides(oldInstance, overrides);
    
    return { success: true, instance: oldInstance };
  } catch (error) {
    return { 
      success: false, 
      error: error.message,
      instance: oldInstance 
    };
  }
}

function captureOverrides(instance: ComponentInstance): Override[] {
  const overrides: Override[] = [];
  
  // Walk all children
  instance.findAll().forEach((node) => {
    if (node.type === 'TEXT') {
      overrides.push({
        nodeId: node.id,
        type: 'TEXT',
        value: node.characters
      });
    }
    
    if ('visible' in node && !node.visible) {
      overrides.push({
        nodeId: node.id,
        type: 'VISIBILITY',
        value: false
      });
    }
    
    if ('fills' in node && hasOverriddenFill(node)) {
      overrides.push({
        nodeId: node.id,
        type: 'FILL',
        value: node.fills
      });
    }
  });
  
  return overrides;
}

function restoreOverrides(
  instance: ComponentInstance, 
  overrides: Override[]
): void {
  overrides.forEach((override) => {
    try {
      const node = instance.findOne(n => n.id === override.nodeId);
      if (!node) return;
      
      switch (override.type) {
        case 'TEXT':
          if (node.type === 'TEXT') {
            node.characters = override.value;
          }
          break;
        case 'VISIBILITY':
          node.visible = override.value;
          break;
        case 'FILL':
          if ('fills' in node) {
            node.fills = override.value;
          }
          break;
      }
    } catch (e) {
      // Node structure may have changed - skip
    }
  });
}
```

### 4. Scanner Pattern (by Scope)

```typescript
// scanner.ts
export function scanByScope(
  scope: 'selection' | 'page' | 'document'
): ComponentInstance[] {
  let instances: ComponentInstance[] = [];
  
  switch (scope) {
    case 'selection':
      instances = figma.currentPage.selection
        .filter(node => node.type === 'INSTANCE') as ComponentInstance[];
      break;
      
    case 'page':
      instances = figma.currentPage
        .findAll(node => node.type === 'INSTANCE') as ComponentInstance[];
      break;
      
    case 'document':
      instances = figma.root
        .findAll(node => node.type === 'INSTANCE') as ComponentInstance[];
      break;
  }
  
  // Filter out non-Formation components
  return instances.filter(inst => 
    inst.mainComponent && 
    isFormationComponent(inst.mainComponent.name)
  );
}

function isFormationComponent(name: string): boolean {
  const formationTypes = [
    'Button', 'Avatar', 'TextField', 'Select',
    'Checkbox', 'Radio', 'Toast', 'Banner',
    'Tag', 'Badge', 'Tab', 'Loader'
  ];
  
  return formationTypes.some(type => 
    name.toLowerCase().includes(type.toLowerCase())
  );
}
```

## When to Use This Pattern

✅ **Use for:**
- Component migration projects
- Design system updates
- Bulk component management
- When you need smart version detection
- Override preservation is critical

❌ **Don't use for:**
- Single component updates (use manual swap)
- Non-component node operations
- When component structure changes dramatically

## Key Learnings

1. **Usage frequency** is a reliable indicator of "current" vs "old" versions
2. **Dynamic detection** eliminates hardcoded component keys
3. **Property mapping** must be flexible - not all properties transfer 1:1
4. **Override preservation** is challenging but critical for user trust
5. **Nested instances** may require special handling
6. **Component must exist in document** to serve as upgrade target

## Debug Pattern

```typescript
function debugComponentInfo(instance: ComponentInstance): void {
  const main = instance.mainComponent;
  
  console.log({
    name: main?.name,
    key: main?.key,
    remote: main?.remote,
    setName: main?.parent?.name,
    properties: Object.keys(instance.componentProperties || {})
  });
}
```

Use debug mode to inspect components when troubleshooting upgrade issues.

---

**Related Docs**:
- [Figma Plugin Architecture](../figma-specific/plugin-architecture.md)
- [Figma Plugin Constraints](../figma-specific/plugin-constraints.md) - Component swap limitations
