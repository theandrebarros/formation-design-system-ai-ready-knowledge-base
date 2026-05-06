# Figma Make — Formation Template

A Formation-compliant Figma Make master template with the design system library pre-configured. The official template can include Formation AI rules via **Adjust guidelines**; teams can also use [`figma-make-guidelines.md`](figma-make-guidelines.md) as a standalone reference when building a **custom** Make file (no paste required).

---

## For BU designers — using the template

**Two ways to start from the official Formation template:**

1. **Start from an example** — When you create a **new Figma Make** document, under **Start from an example**, choose the Internal **Formation Powered Figma Make Template** (it is often the first card).
2. **Use in new file** — Open the [Formation Figma Make template](https://www.figma.com/make/7zIyVB72qQuqW2gZSZFBiL/), then click **Use in new file** (top right).

Rename your new file for your project, then start prompting. Formation rules and the library are already configured on the official template.

**Example prompts to get started:**
- `"sportsbook dark bet slip with odds and place bet button"`
- `"casino light promo card with CTA"`
- `"picks leaderboard with scores and avatar"`
- `"fantasy dark lineup card"`

The AI will infer the correct theme (`data-theme`, `data-mode`, colors, fonts) from your prompt.

**Custom templates:** To build your own Make file, follow [`figma-make-guidelines.md`](figma-make-guidelines.md) for tokens, themes, and components. Pasting that file into **Adjust guidelines** is optional; using it as reference alone is valid.

---

## Add the intro page

The official template should have an intro page as its first screen — it explains what the template is and what designers can build.

1. Open the [Formation Figma Make template](https://www.figma.com/make/7zIyVB72qQuqW2gZSZFBiL/)
2. Paste the prompt from `intro-page-prompt.md` into the Figma Make input
3. Send — the intro page is generated using Formation components and FanDuel dark theme

This only needs to be done once per template setup (or if you want to regenerate it after changes).

---

## For template maintainers — updating the template

The official Formation template stores Formation AI rules in **Adjust guidelines** — they are saved in the file. When Formation tokens change or the guidelines are updated:

1. Open the [Formation Figma Make template](https://www.figma.com/make/7zIyVB72qQuqW2gZSZFBiL/)
2. Click `...` → **Adjust guidelines**
3. Replace the content with the latest `figma-make-guidelines.md` from this folder
4. Click save — updates apply to the template file and to flows that start from it (**Start from an example** / **Use in new file**)

> **Note:** Guidelines are not updated automatically. Re-paste after any Formation token package bump or BU theme change.

To verify the library is connected: open the library picker in the file and confirm **Beta - Formation Figma Make Library** is listed.

---

## Files in this folder

| File | Purpose |
|------|---------|
| `figma-make-guidelines.md` | Source of truth for Formation rules in Figma Make — paste into **Adjust guidelines** on the official template, **or** use as reference only for custom templates. |
| `intro-page-prompt.md` | Figma Make prompt to generate the template intro/cover page. Paste into Figma Make once during setup. |
| `ai-tooling-pitch-prompt.md` | Figma Make prompt to generate a 10-slide pitch deck selling AI design tooling (Figma Make, Lovable) to FanDuel designers, using Formation tokens and FD gradients with arrow + keyboard navigation. Paste into a fresh file from the Formation template. |
