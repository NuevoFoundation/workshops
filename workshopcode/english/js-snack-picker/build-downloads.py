"""Build the lesson downloads from the maintained starter and solution files."""

from pathlib import Path
from zipfile import ZIP_DEFLATED, ZipFile, ZipInfo


def main() -> None:
    source = Path(__file__).resolve().parent
    media = source.parents[2] / "content" / "english" / "js-snack-picker" / "media"
    for kind, script in (("starter", "starter.js"), ("solution", "script.js")):
        destination = media / f"snack-stall-{kind}.zip"
        with ZipFile(destination, "w") as archive:
            for filename in ("index.html", "styles.css", "script.js"):
                path = source / (script if filename == "script.js" else filename)
                info = ZipInfo(filename)
                info.compress_type = ZIP_DEFLATED
                archive.writestr(info, path.read_bytes())
        print(f"Built {destination.relative_to(source.parents[2])}")


if __name__ == "__main__":
    main()
