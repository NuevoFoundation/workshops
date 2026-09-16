from __future__ import annotations

import importlib.util
import sys
import tempfile
import unittest
from pathlib import Path


MODULE_PATH = Path(__file__).with_name("validate-workshop.py")
sys.path.insert(0, str(MODULE_PATH.parent))
SPEC = importlib.util.spec_from_file_location("validate_workshop", MODULE_PATH)
validate_workshop = importlib.util.module_from_spec(SPEC)
assert SPEC.loader is not None
sys.modules[SPEC.name] = validate_workshop
SPEC.loader.exec_module(validate_workshop)


VALID_INDEX = """\
---
title: "Test Workshop"
description: "A test"
date: 2026-09-14
prereq: "None"
language: "python"
topics: ["programming-basics"]
difficulties: ["beginner"]
draft: false
hidden: false
alwaysopen: false
icon: "fas fa-code"
weight: 1
---

<img src="media/hero.svg" alt="A test hero">

{{% children /%}}
"""

VALID_ACTIVITY = """\
---
title: "Activity 1"
date: 2026-09-14
draft: false
weight: 3
---

```python
print("hello")
```
"""

VALID_ANSWER_KEY = """\
---
title: "Answer Key"
date: 2026-09-14
draft: false
weight: 15
hidden: true
---

```python
print("hello")
```
"""


class WorkshopValidatorTests(unittest.TestCase):
    def create_workshop(self) -> tuple[tempfile.TemporaryDirectory, Path]:
        temporary_directory = tempfile.TemporaryDirectory()
        workshop = Path(temporary_directory.name)
        (workshop / "media").mkdir()
        (workshop / "media" / "hero.svg").write_text("<svg/>", encoding="utf-8")
        (workshop / "_index.md").write_text(VALID_INDEX, encoding="utf-8")
        (workshop / "activity-1.md").write_text(VALID_ACTIVITY, encoding="utf-8")
        (workshop / "answer-key.md").write_text(VALID_ANSWER_KEY, encoding="utf-8")
        return temporary_directory, workshop

    def test_valid_workshop_has_no_findings(self):
        temporary_directory, workshop = self.create_workshop()
        self.addCleanup(temporary_directory.cleanup)

        self.assertEqual(validate_workshop.validate_workshop(workshop), [])

    def test_missing_media_is_reported(self):
        temporary_directory, workshop = self.create_workshop()
        self.addCleanup(temporary_directory.cleanup)
        (workshop / "media" / "hero.svg").unlink()

        messages = [
            finding.message
            for finding in validate_workshop.validate_workshop(workshop)
        ]

        self.assertIn("image file does not exist: media/hero.svg", messages)

    def test_invalid_python_is_reported(self):
        temporary_directory, workshop = self.create_workshop()
        self.addCleanup(temporary_directory.cleanup)
        (workshop / "activity-1.md").write_text(
            VALID_ACTIVITY.replace('print("hello")', "if True print('hello')"),
            encoding="utf-8",
        )

        messages = [
            finding.message
            for finding in validate_workshop.validate_workshop(workshop)
        ]

        self.assertTrue(
            any(message.startswith("Python code block has invalid syntax") for message in messages)
        )

    def test_visible_answer_key_is_reported(self):
        temporary_directory, workshop = self.create_workshop()
        self.addCleanup(temporary_directory.cleanup)
        (workshop / "answer-key.md").write_text(
            VALID_ANSWER_KEY.replace("hidden: true", "hidden: false"),
            encoding="utf-8",
        )

        messages = [
            finding.message
            for finding in validate_workshop.validate_workshop(workshop)
        ]

        self.assertIn("answer key must set hidden: true", messages)

    def test_hidden_workshop_is_reported(self):
        temporary_directory, workshop = self.create_workshop()
        self.addCleanup(temporary_directory.cleanup)
        index = workshop / "_index.md"
        index.write_text(
            VALID_INDEX.replace("hidden: false", "hidden: true"),
            encoding="utf-8",
        )

        messages = [
            finding.message
            for finding in validate_workshop.validate_workshop(workshop)
        ]

        self.assertIn("workshop landing page must set hidden: false", messages)

    def test_trinket_reference_is_marked_for_replacement(self):
        temporary_directory, workshop = self.create_workshop()
        self.addCleanup(temporary_directory.cleanup)
        activity = workshop / "activity-1.md"
        activity.write_text(
            VALID_ACTIVITY
            + '\n<iframe src="https://trinket.io/embed/python/example"></iframe>\n',
            encoding="utf-8",
        )

        findings = validate_workshop.find_deprecated_ide_references([activity])

        self.assertEqual(len(findings), 1)
        self.assertIn("TODO-IDE-Replace", findings[0].message)

    def test_unsupported_taxonomy_tags_are_reported(self):
        temporary_directory, workshop = self.create_workshop()
        self.addCleanup(temporary_directory.cleanup)
        index = workshop / "_index.md"
        index.write_text(
            VALID_INDEX
            .replace('language: "python"', 'language: "ruby"')
            .replace(
                'topics: ["programming-basics"]',
                'topics: ["space-science"]',
            )
            .replace('difficulties: ["beginner"]', 'difficulties: ["expert"]'),
            encoding="utf-8",
        )

        messages = [
            finding.message
            for finding in validate_workshop.validate_workshop(workshop)
        ]

        self.assertTrue(
            any("unsupported language tag 'ruby'" in item for item in messages)
        )
        self.assertTrue(
            any(
                "unsupported topics tag(s) space-science" in item
                for item in messages
            )
        )
        self.assertTrue(
            any("unsupported difficulties tag(s) expert" in item for item in messages)
        )


if __name__ == "__main__":
    unittest.main()
