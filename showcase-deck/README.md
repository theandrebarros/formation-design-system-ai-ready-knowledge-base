# Formation Prototyping Showcase

An interactive, full-viewport presentation for showing audiences every way to prototype with the Formation Design System — using both Figma Make and Lovable.

---

## Open it

Double-click `index.html`, or serve it with any static file server:

```bash
# Python 3
python3 -m http.server 8080
# then open http://localhost:8080
```

Works offline via `file://` — no build step, no dependencies.

---

## Navigation

| Action | Keyboard | On-screen |
|--------|----------|-----------|
| Next section | → or Space | Bottom-right chevron |
| Previous section | ← | Bottom-left chevron |
| Jump to section N | Keys 1–9 (0 = section 10) | Left-rail TOC · bottom dots |
| Deep link | — | `index.html#section-3` |

---

## Sections

| # | Section | Type |
|---|---------|------|
| 1 | Cover — "Prototype in 5 minutes" | Hero |
| 2 | Figma Make · Ready-made template | Scenario |
| 3 | Figma Make · From a real design file | Scenario |
| 4 | Figma Make · Natural language only | Scenario |
| 5 | Figma Make · Build net-new, FD-rooted | Scenario |
| 6 | Chapter break — Lovable | Divider |
| 7 | Lovable · Ready-made template | Scenario |
| 8 | Lovable · From a real design file | Scenario |
| 9 | Lovable · Build net-new, FD-rooted | Scenario |
| 10 | Closing CTA | Hero |

---

## Adding videos

Each scenario section has a video pane. While no video exists the pane shows a placeholder with the expected filename. To activate a video, drop the file in the `videos/` folder:

| Section | File |
|---------|------|
| 2 | `videos/02-figma-make-template.mov` |
| 3 | `videos/03-figma-make-from-design.mov` |
| 4 | `videos/04-figma-make-natural-language.mov` |
| 5 | `videos/05-figma-make-net-new.mov` |
| 7 | `videos/07-lovable-template.mov` |
| 8 | `videos/08-lovable-from-design.mov` |
| 9 | `videos/09-lovable-net-new.mov` |

Videos autoplay muted and loop on entry. They pause automatically when you navigate away. No code changes needed — the player detects the file on load.

**Recommended recording specs:** 1920×1200 or 1280×800, H.264, 2–3 Mbps. Keep clips under 2 minutes per scenario.

---

## Updating content

All section copy lives in `index.html`. Each section is clearly commented:

```html
<!-- SECTION 3 — FIGMA MAKE: FROM A REAL DESIGN FILE -->
```

URLs in the deck (Formation template, Lovable template, Glossary) are in `index.html` as `href` attributes — search for `figma.com/make` or `lovable.dev` to find them all.

---

## Files

```
showcase-deck/
├── index.html    — all 10 sections, split layout, nav markup
├── styles.css    — Formation tokens, layout, animations, reduced-motion
├── app.js        — nav state, keyboard, hash sync, video management
├── videos/       — drop .mov files here (gitignored by default)
└── posters/      — optional static fallback poster images
```
