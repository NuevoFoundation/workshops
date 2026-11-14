"""Load the controlled workshop-explorer taxonomy using the Python standard library."""

from __future__ import annotations

from pathlib import Path


TAXONOMY_PATH = Path(__file__).resolve().parent.parent / "data" / "taxonomy.yaml"
REQUIRED_GROUPS = ("difficulties", "languages", "topics")


def load_taxonomy(path: Path = TAXONOMY_PATH) -> dict[str, tuple[str, ...]]:
    """Parse the repository's simple top-level taxonomy lists."""
    groups: dict[str, list[str]] = {}
    current_group: str | None = None

    for raw_line in path.read_text(encoding="utf-8").splitlines():
        line = raw_line.split("#", 1)[0].rstrip()
        if not line.strip():
            continue

        if not line.startswith((" ", "\t")) and line.endswith(":"):
            current_group = line[:-1].strip()
            groups[current_group] = []
            continue

        stripped = line.strip()
        if current_group and stripped.startswith("- "):
            groups[current_group].append(stripped[2:].strip())

    missing = [group for group in REQUIRED_GROUPS if not groups.get(group)]
    if missing:
        raise ValueError(
            f"Taxonomy file {path} is missing values for: {', '.join(missing)}"
        )

    return {group: tuple(groups[group]) for group in REQUIRED_GROUPS}
