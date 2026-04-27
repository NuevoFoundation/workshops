# Install update-dates.py as a git pre-commit hook (Windows).
# Run from the repo root: .\tools\install-hooks.ps1

$ErrorActionPreference = "Stop"

$hook = ".git\hooks\pre-commit"
$script = "tools\update-dates.py"

if (-not (Test-Path $script)) {
    Write-Error "Run this from the repo root (cannot find $script)"
    exit 1
}

if (Test-Path $hook) {
    Write-Warning "$hook already exists:"
    Get-Content $hook
    $answer = Read-Host "Overwrite? [y/N]"
    if ($answer -notin @("y", "Y")) {
        Write-Host "Aborted."
        exit 0
    }
}

if (-not (Test-Path ".git\hooks")) {
    New-Item -ItemType Directory -Path ".git\hooks" -Force | Out-Null
}

$hookContent = @"
#!/usr/bin/env bash
# Pre-commit hook: update frontmatter dates on staged .md files
if command -v python3 &>/dev/null; then
    python3 tools/update-dates.py
elif command -v python &>/dev/null; then
    python tools/update-dates.py
else
    echo "Warning: python not found, skipping date update" >&2
fi
"@

# Write UTF-8 without BOM to avoid breaking the shebang line
$resolvedHook = Join-Path (Resolve-Path ".").Path $hook
[System.IO.File]::WriteAllText(
    $resolvedHook,
    $hookContent,
    [System.Text.UTF8Encoding]::new($false)
)

Write-Host "Installed pre-commit hook at $hook"
