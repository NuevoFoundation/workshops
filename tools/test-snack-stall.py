"""Exercise the snack stall downloads, lesson stages, and player interactions."""

import argparse
from pathlib import Path
import re
from tempfile import TemporaryDirectory
import unittest
from zipfile import ZipFile

from playwright.sync_api import Page, sync_playwright


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "workshopcode" / "english" / "js-snack-picker"
LESSONS = ROOT / "content" / "english" / "js-snack-picker"


def code_blocks(filename: str, language: str = "javascript") -> list[str]:
    text = (LESSONS / filename).read_text(encoding="utf-8")
    return re.findall(rf"```{language}\n(.*?)```", text, re.DOTALL)


def lesson_function(filename: str, name: str) -> str:
    return next(
        block.strip()
        for block in code_blocks(filename)
        if block.startswith(f"function {name}(")
    )


def replace_function(script: str, name: str, replacement: str) -> str:
    pattern = rf"^function {name}\([^)]*\) \{{.*?^\}}"
    result, count = re.subn(
        pattern, lambda _: replacement, script, count=1, flags=re.MULTILINE | re.DOTALL
    )
    if count != 1:
        raise ValueError(f"Expected one {name} function in the source")
    return result


class SnackStallTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls) -> None:
        cls.playwright = sync_playwright().start()
        cls.browser = cls.playwright.chromium.launch(channel=BROWSER_CHANNEL)
        cls.finished = (SOURCE / "script.js").read_text(encoding="utf-8")
        cls.starter = (SOURCE / "starter.js").read_text(encoding="utf-8")
        cls.html = (SOURCE / "index.html").read_text(encoding="utf-8")

    @classmethod
    def tearDownClass(cls) -> None:
        cls.browser.close()
        cls.playwright.stop()

    def setUp(self) -> None:
        self.directory = TemporaryDirectory(prefix="nf-snack-stall-")
        self.path = Path(self.directory.name)
        (self.path / "styles.css").write_bytes((SOURCE / "styles.css").read_bytes())
        self.context = self.browser.new_context(reduced_motion="reduce")
        self.context.set_offline(True)
        self.errors = []
        self.pages = []

    def tearDown(self) -> None:
        self.context.close()
        self.directory.cleanup()
        self.assertEqual(self.errors, [])

    def open_game(
        self, script: str, random_value: float = 0.01, html: str | None = None
    ) -> Page:
        (self.path / "index.html").write_text(
            self.html if html is None else html, encoding="utf-8"
        )
        (self.path / "script.js").write_text(script, encoding="utf-8")
        page = self.context.new_page()
        self.pages.append(page)
        page.on("pageerror", lambda error: self.errors.append(str(error)))
        page.add_init_script(f"Math.random = () => {random_value};")
        page.goto((self.path / "index.html").as_uri())
        return page

    def test_downloads_match_maintained_sources(self) -> None:
        for kind, script in (("starter", "starter.js"), ("solution", "script.js")):
            with self.subTest(kind=kind):
                with ZipFile(LESSONS / "media" / f"snack-stall-{kind}.zip") as archive:
                    self.assertEqual(
                        set(archive.namelist()), {"index.html", "styles.css", "script.js"}
                    )
                    for name in archive.namelist():
                        source_name = script if name == "script.js" else name
                        self.assertEqual(
                            archive.read(name), (SOURCE / source_name).read_bytes()
                        )

    def test_lesson_steps_build_the_finished_game(self) -> None:
        stage2 = replace_function(
            self.starter, "showOrder", lesson_function("activity-2.md", "showOrder")
        )
        stage3 = replace_function(
            stage2, "checkAnswer", lesson_function("activity-3.md", "checkAnswer")
        )
        stage4 = replace_function(
            stage3, "checkAnswer", lesson_function("activity-4.md", "checkAnswer")
        )
        self.assertEqual(stage4, self.finished)
        for stage, script in enumerate((self.starter, stage2, stage3, stage4), start=1):
            with self.subTest(stage=stage):
                page = self.open_game(script, 0.45)
                expected = "tteokbokki" if stage == 1 else "bingsu"
                self.assertEqual(page.evaluate("currentOrder.id"), expected)
                wrong = "kimbap"
                page.locator(f'[data-snack="{wrong}"]').click()
                self.assertEqual(page.evaluate("served"), 0)
                if stage >= 3:
                    self.assertIn("Try again!", page.locator("#feedback").inner_text())
                else:
                    self.assertIn("You selected", page.locator("#feedback").inner_text())
                page.locator(f'[data-snack="{expected}"]').click()
                self.assertEqual(page.evaluate("served"), 1 if stage == 4 else 0)
                if stage >= 3:
                    self.assertIn("That's the one!", page.locator("#feedback").inner_text())
                page.close()

    def test_answer_key_functions_match_the_lesson(self) -> None:
        answers = code_blocks("answer-key.md")
        order = next(block.strip() for block in answers if block.startswith("function showOrder"))
        checks = [block.strip() for block in answers if block.startswith("function checkAnswer")]
        self.assertEqual(order, lesson_function("activity-2.md", "showOrder"))
        self.assertEqual(checks[-1], lesson_function("activity-4.md", "checkAnswer"))
        practice = replace_function(self.finished, "checkAnswer", checks[0])
        page = self.open_game(practice)
        page.locator('[data-snack="kimbap"]').click()
        self.assertIn(page.evaluate("currentOrder.hint"), page.locator("#feedback").inner_text())
        self.assertEqual(page.evaluate("served"), 0)

    def test_every_menu_choice_can_be_served(self) -> None:
        for index in range(8):
            with self.subTest(index=index):
                value = 0 if index == 0 else (0.999999 if index == 7 else index / 8)
                page = self.open_game(self.finished, value)
                self.assertEqual(page.evaluate("snacks.indexOf(currentOrder)"), index)
                menu_ids = page.locator(".snack-button").evaluate_all(
                    "(buttons) => buttons.map(button => button.dataset.snack).sort()"
                )
                self.assertEqual(menu_ids, page.evaluate("snacks.map(snack => snack.id).sort()"))
                target = page.evaluate("currentOrder.id")
                page.locator(f'[data-snack="{target}"]').click()
                self.assertEqual(page.evaluate("served"), 1)
                page.close()

    def test_wrong_choice_single_scoring_win_and_replay(self) -> None:
        page = self.open_game(self.finished)
        for count in range(1, 6):
            target = page.evaluate("currentOrder.id")
            previous_order = page.locator("#order-text").inner_text()
            page.locator('[data-snack="kimbap"]').click()
            self.assertEqual(page.evaluate("served"), count - 1)
            self.assertEqual(page.locator("#order-text").inner_text(), previous_order)
            self.assertIn(page.evaluate("currentOrder.hint"), page.locator("#feedback").inner_text())
            chosen = page.locator(f'[data-snack="{target}"]')
            chosen.click()
            chosen.evaluate("(button) => button.click()")
            self.assertEqual(page.evaluate("served"), count)
            self.assertEqual(page.locator(".snack-button:enabled").count(), 0)
            self.assertEqual(page.locator("#progress").evaluate("(bar) => bar.value"), count)
            if count < 5:
                page.locator("#next-visitor").click()
                self.assertEqual(page.evaluate("served"), count)
                self.assertEqual(page.locator(".snack-button:enabled").count(), 8)
        self.assertTrue(page.locator("#game-panel").is_hidden())
        self.assertTrue(page.locator("#finish-panel").is_visible())
        self.assertEqual(page.locator("#finish-message").inner_text(), "You served all 5 visitors!")
        self.assertEqual(page.evaluate("document.activeElement.id"), "finish-heading")
        self.assertEqual(
            page.locator("#finish-panel").evaluate("(el) => getComputedStyle(el).animationName"),
            "none",
        )
        page.locator("#restart").click()
        self.assertEqual(page.evaluate("served"), 0)
        self.assertEqual(page.locator("#progress").evaluate("(bar) => bar.value"), 0)
        self.assertEqual(page.locator("#visitor-label").text_content(), "Visitor 1")
        self.assertTrue(page.locator("#finish-panel").is_hidden())
        self.assertTrue(page.locator("#game-panel").is_visible())
        self.assertEqual(page.locator(".snack-button:enabled").count(), 8)
        self.assertTrue(page.locator("#next-visitor").is_hidden())
        page.locator('[data-snack="tteokbokki"]').click()
        self.assertEqual(page.evaluate("served"), 1)

    def test_shorter_rounds_use_the_same_goal_everywhere(self) -> None:
        for goal in (1, 3):
            with self.subTest(goal=goal):
                script = self.finished.replace("const totalVisitors = 5;", f"const totalVisitors = {goal};")
                page = self.open_game(script)
                self.assertEqual(page.locator("#visitor-goal").inner_text(), str(goal))
                self.assertEqual(page.locator("#progress").evaluate("(bar) => bar.max"), goal)
                for count in range(goal):
                    page.locator('[data-snack="tteokbokki"]').click()
                    if count < goal - 1:
                        page.locator("#next-visitor").click()
                self.assertTrue(page.locator("#finish-panel").is_visible())
                self.assertIn(str(goal), page.locator("#finish-message").inner_text())
                page.close()

    def test_extra_snack_example_is_playable(self) -> None:
        button = next(block for block in code_blocks("answer-key.md", "html") if 'data-snack="popcorn"' in block)
        snack = next(block.strip() for block in code_blocks("answer-key.md") if block.startswith('{ id: "popcorn"'))
        html = self.html.replace(
            '<div class="menu-grid">', '<div class="menu-grid">\n' + button
        )
        script = self.finished.replace("\n];", ",\n  " + snack + "\n];", 1)
        page = self.open_game(script, 0.999999, html)
        self.assertEqual(page.evaluate("snacks.length"), 9)
        self.assertEqual(page.evaluate("currentOrder.id"), "popcorn")
        page.locator('[data-snack="kimbap"]').click()
        self.assertIn("popcorn", page.locator("#feedback").inner_text())
        page.locator('[data-snack="popcorn"]').click()
        self.assertEqual(page.evaluate("served"), 1)

    def test_keyboard_and_narrow_layout(self) -> None:
        page = self.open_game(self.finished)
        page.set_viewport_size({"width": 390, "height": 844})
        self.assertLessEqual(
            page.evaluate("document.documentElement.scrollWidth"),
            page.evaluate("window.innerWidth"),
        )
        choice = page.locator('[data-snack="tteokbokki"]')
        choice.focus()
        choice.press("Enter")
        self.assertEqual(page.evaluate("served"), 1)
        self.assertEqual(page.evaluate("document.activeElement.id"), "next-visitor")
        page.locator("#next-visitor").press("Enter")
        self.assertEqual(page.evaluate("document.activeElement.id"), "order-heading")
        self.assertEqual(page.locator(".snack-button:enabled").count(), 8)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--browser-channel", default=None)
    BROWSER_CHANNEL = parser.parse_args().browser_channel
    unittest.main(argv=[__file__], verbosity=2)
