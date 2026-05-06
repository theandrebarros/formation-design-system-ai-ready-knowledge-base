---
name: validate-formation-usage
description: Step-by-step skill for checking whether code or Figma designs comply with Formation Design System rules — colors, spacing, typography, radius, components. Invoke when asked to audit, check, or validate Formation compliance.
---

# Validate Formation Usage — Skill

Use this skill when asked to: "check if this uses Formation tokens", "validate design system compliance", "audit this component", "does this follow Formation rules?"

> **Path note:** Reference file paths below assume this repo is cloned at `~/Documents/GitHub/fanduel-ds-knowledge`. If yours is elsewhere, substitute accordingly.

---

## Step 1 — Identify what to validate

Determine scope from context:
- **Code (CSS/React)**: Check for hardcoded values vs token usage
- **Figma**: Check fills, spacing, text styles, radius reference variables
- **Both**: Run code checks first, then Figma

---

## Step 1.2 — Figma MCP validation (if scope includes Figma)

If validating a Figma design node, use the Figma MCP instead of manual inspection:

**Get authoritative token usage for the component:**
Use `mcp__claude_ai_Figma__get_design_context` with the Figma node ID or URL.
This returns the component's actual variable bindings, variant values, and structure — use it as the ground truth for what the design intends.

**Verify the Figma file uses Formation variables (not hardcoded fills):**
Use `mcp__claude_ai_Figma__get_variable_defs` with:
- `fileKey`: `prQIPGE33uoH1SyxfVTFKT` (Formation Core Components file)

This shows which variables are defined in the Figma file. If fills are hardcoded hex values instead of bound to `--fd-*` variables, flag as a Figma-level violation.

The Figma MCP output is more authoritative than manual fill inspection — use it as the Figma baseline before comparing against code.

---

## Step 1.5 — Run automated linting (if available)

Before manually scanning files, check whether the project has automated style linting configured:

```bash
cat package.json | grep -E '"lint:styles|lint:css|lint:tokens'
```

- If a matching script exists → run it (e.g. `npm run lint:styles`) and use the output as the baseline list of violations. ESLint/Stylelint findings take priority over manual observations.
- If not found → proceed with manual checks in Steps 2–7.

---

## Step 2 — Color validation

**Rule**: All colors must use `--fd-*` CSS variables. No hardcoded hex values.

Check for these violations:
```
❌ color: #ABC123         → ✅ var(--fd-colors-product-colors-primary)   (any hardcoded hex)
❌ background: #128000    → ✅ var(--fd-colors-component-button-primary-background-base)
❌ --color-brand-primary  → ✅ --fd-colors-product-colors-primary  (old prefix)
```

Key color gotchas:
- Primary button uses `--fd-colors-component-button-primary-background-base` — never hardcode its hex
- Product primary (links, interactive) = `--fd-colors-product-colors-primary`
- Error/red = `--fd-colors-system-important-*` (NOT `system/alert`)
- Warning/yellow = `--fd-colors-system-alert-*`

For full token list → read `references/core/colors.md`

---

## Step 3 — Spacing validation

**Rule**: All spacing must be multiples of 4px using `--fd-space-space-N` tokens.

Check for:
```
❌ padding: 18px    → ✅ var(--fd-space-space-4) = 16px  or  var(--fd-space-space-5) = 20px
❌ gap: 10px        → ✅ var(--fd-space-space-2) = 8px   or  var(--fd-space-space-3) = 12px
```

Valid spacing tokens: 0, 1, 2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 120, 160px

---

## Step 4 — Typography validation

**Rule**: Only Formation font families, sizes, and weights.

Valid fonts: `Inter`, `Roboto Condensed`, `Shentox` — Proxima Nova is **not permitted** except for `data-theme="sportsbook"` and `data-theme="fantasy"` (licensed only)
Valid sizes: 8, 10, 12, 14, 16, 18, 20, 22, 24, 28, 32, 40, 48px
Valid weights: 400, 600, 700
Minimums: body ≥ 14px, labels/metadata ≥ 12px

---

## Step 5 — Border radius validation

**Rule**: Only Formation radius tokens.

```
❌ border-radius: 7px   → ✅ var(--fd-radii-border-radius-default) = 4px  or  var(--fd-radii-border-radius-2) = 8px
```

Valid values: 0px (none), 2px (xs), 4px (default/1), 8px (2), 12px (3), 16px (4), 9999px (round/pill)

---

## Step 6 — Component validation

**Rule**: Use Formation components from the library. Do not detach or recreate.

Check:
- Button variants: primary (green), secondary (blue), tertiary, destructive, transparent, button-link
- Never invent custom button styles
- Form inputs → use TextField, SelectField, Checkbox, RadioButton, Switch
- Notifications → use FixedBanner, FloatingBanner, InlineMessage, or Toast

---

## Step 7 — Accessibility checks

- Touch targets: ≥ 44×44px mobile, ≥ 32×32px desktop
- Color contrast: ≥ 4.5:1 for body text, ≥ 3:1 for large text (WCAG AA)
- Interactive elements: must have hover, focus, active, disabled states
- Icon-only buttons: must have `aria-label`

---

## Step 8 — Report findings

Group issues by severity:

**Error (must fix)**:
- Hardcoded colors instead of tokens
- Insufficient contrast
- Touch targets below minimum
- Missing accessibility labels

**Warning (should fix)**:
- Off-grid spacing (1–2px off)
- Non-standard font sizes close to valid values
- Missing hover states

**Info (nice to fix)**:
- Layer naming conventions
- Component organisation

---

## Reference files

For full token tables, locate the `fanduel-ds-knowledge` repo first:

```bash
for p in \
  /*/mnt/fanduel-ds-knowledge \
  ~/Documents/GitHub/fanduel-ds-knowledge \
  ~/Documents/Development/*/fanduel-ds-knowledge \
  ~/fanduel-ds-knowledge; do
  [ -d "$p" ] && echo "$p" && break
done
```

Then read from `{repo}/.agents/skills/formation-design-system/references/`:
- Colors: `references/core/colors.md`
- Spacing: `references/core/spacing.md`
- Typography: `references/core/typography.md`
- Radius: `references/core/radius.md`
- Components: `references/core/components.md`
- Validation rules: `references/validation-rules.md`
