#!/usr/bin/env bash
# Install update-dates.py as a git pre-commit hook.
# Run from the repo root: bash tools/install-hooks.sh

set -e

HOOK=".git/hooks/pre-commit"
SCRIPT="tools/update-dates.py"

if [ ! -f "$SCRIPT" ]; then
    echo "Error: run this from the repo root (cannot find $SCRIPT)"
    exit 1
fi

if [ -f "$HOOK" ]; then
    echo "Warning: $HOOK already exists."
    echo "Existing content:"
    cat "$HOOK"
    echo ""
    read -p "Overwrite? [y/N] " answer
    if [ "$answer" != "y" ] && [ "$answer" != "Y" ]; then
        echo "Aborted."
        exit 0
    fi
fi

mkdir -p .git/hooks

cat > "$HOOK" << 'EOF'
#!/usr/bin/env bash
# Pre-commit hook: update frontmatter dates on staged .md files
if command -v python3 &>/dev/null; then
    python3 tools/update-dates.py
elif command -v python &>/dev/null; then
    python tools/update-dates.py
else
    echo "Warning: python not found, skipping date update" >&2
fi
EOF

chmod +x "$HOOK"
echo "Installed pre-commit hook at $HOOK"
