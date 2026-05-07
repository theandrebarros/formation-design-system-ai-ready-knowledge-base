#!/usr/bin/env bash
# Sync the Figma Make guidelines.md into the showcase deck.
#
# Source: fanduel/formation-figma-plugins monorepo
#   packages/fanduel-ds-knowledge/kits/figma-make/figma-make-guidelines.md
#
# - Downloads the raw file → showcase-deck/guidelines.md
#   (so the "Download raw file" link always serves the latest version)
# - Inlines the content into showcase-deck/index.html between
#   <!-- GUIDELINES_BEGIN --> and <!-- GUIDELINES_END --> markers
#   (so the in-page expandable preview renders even via file://)
#
# Usage:
#   ./showcase-deck/sync-guidelines.sh             # fetches from default branch
#   TAG=fanduel-ds-knowledge-v1.2.0 ./showcase-deck/sync-guidelines.sh  # pin a release
#
# Also runs automatically in the deploy workflow before publishing.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Monorepo coordinates — update TAG to pin a specific release.
REPO="fanduel/formation-figma-plugins"
TAG="${TAG:-fanduel-ds-knowledge}"   # default: tracking branch; set TAG env var to pin a release tag
REMOTE_PATH="packages/fanduel-ds-knowledge/kits/figma-make/figma-make-guidelines.md"
SRC_URL="https://raw.githubusercontent.com/${REPO}/${TAG}/${REMOTE_PATH}"

DEST_RAW="${SCRIPT_DIR}/guidelines.md"
DEST_HTML="${SCRIPT_DIR}/index.html"

# 1. Fetch raw guidelines from monorepo
echo "Fetching: ${SRC_URL}"
if command -v curl >/dev/null 2>&1; then
  curl -fsSL "${SRC_URL}" -o "${DEST_RAW}"
elif command -v wget >/dev/null 2>&1; then
  wget -q "${SRC_URL}" -O "${DEST_RAW}"
else
  echo "Error: neither curl nor wget found." >&2
  exit 1
fi
echo "Downloaded: ${DEST_RAW}"

# 2. Inline content between markers in index.html
python3 - "${DEST_RAW}" "${DEST_HTML}" <<'PY'
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
