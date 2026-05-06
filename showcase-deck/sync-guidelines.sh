#!/usr/bin/env bash
# Sync the Figma Make guidelines.md into the showcase deck.
#
# - Copies figma-make/figma-make-guidelines.md → showcase-deck/guidelines.md
#   (so the "Download raw file" link serves the latest version)
# - Inlines the content into showcase-deck/index.html between
#   <!-- GUIDELINES_BEGIN --> and <!-- GUIDELINES_END --> markers
#   (so the in-page expandable preview always renders, even via file://)
#
# Run locally: ./showcase-deck/sync-guidelines.sh
# Also runs automatically in the deploy workflow before publishing.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "${SCRIPT_DIR}/.." && pwd)"

SRC="${REPO_ROOT}/figma-make/figma-make-guidelines.md"
DEST_RAW="${SCRIPT_DIR}/guidelines.md"
DEST_HTML="${SCRIPT_DIR}/index.html"

if [[ ! -f "${SRC}" ]]; then
  echo "Source not found: ${SRC}" >&2
  exit 1
fi

# 1. Copy raw file
cp "${SRC}" "${DEST_RAW}"
echo "Copied: ${SRC} -> ${DEST_RAW}"

# 2. Inline content between markers in index.html
python3 - "$SRC" "$DEST_HTML" <<'PY'
import sys, re, pathlib

src_path, html_path = sys.argv[1], sys.argv[2]
content = pathlib.Path(src_path).read_text(encoding='utf-8')

# Safety: escape any literal </script> in the markdown so the inline
# <script type="text/markdown"> wrapper isn't terminated prematurely.
content = content.replace('</script>', '<\\/script>')

html = pathlib.Path(html_path).read_text(encoding='utf-8')

begin = '<!-- GUIDELINES_BEGIN -->'
end = '<!-- GUIDELINES_END -->'

new_block = f'{begin}\n{content}\n{end}'

if begin in html and end in html:
    pattern = re.compile(re.escape(begin) + r'.*?' + re.escape(end), re.DOTALL)
    html = pattern.sub(new_block, html)
else:
    # First-run insertion: place a <script type="text/markdown"> block
    # immediately before the existing <script src="app.js"> tag.
    inject = (
        '<script type="text/markdown" id="guidelines-source">\n'
        f'{new_block}\n'
        '</script>\n'
    )
    if '<script src="app.js"></script>' not in html:
        raise SystemExit('Could not find <script src="app.js"></script> insertion anchor in index.html')
    html = html.replace(
        '<script src="app.js"></script>',
        inject + '<script src="app.js"></script>',
        1,
    )

pathlib.Path(html_path).write_text(html, encoding='utf-8')
print(f'Inlined into: {html_path}')
PY
