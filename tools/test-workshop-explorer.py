"""Browser regression tests against a Hugo build, without changing workshop content."""

import argparse
from functools import partial
from hashlib import sha256
from html.parser import HTMLParser
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from threading import Thread
import unittest
from urllib.parse import urljoin, urlsplit
from urllib.request import urlopen

from playwright.sync_api import sync_playwright


class QuietHandler(SimpleHTTPRequestHandler):
    def log_message(self, *_args):
        pass


class MetadataParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.values = []
        self.collecting = False

    def handle_starttag(self, tag, attrs):
        if tag == "span" and dict(attrs).get("class") == "metadata-value":
            self.collecting = True
            self.values.append("")

    def handle_endtag(self, tag):
        if tag == "span":
            self.collecting = False

    def handle_data(self, data):
        if self.collecting:
            self.values[-1] += data


class WorkshopExplorerTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.server = ThreadingHTTPServer(
            ("127.0.0.1", 0), partial(QuietHandler, directory=str(BUILD_DIR))
        )
        cls.thread = Thread(target=cls.server.serve_forever, daemon=True)
        cls.thread.start()
        cls.base_url = f"http://127.0.0.1:{cls.server.server_port}"
        cls.playwright = sync_playwright().start()
        cls.browser = cls.playwright.chromium.launch(channel=BROWSER_CHANNEL)

    @classmethod
    def tearDownClass(cls):
        cls.browser.close()
        cls.playwright.stop()
        cls.server.shutdown()
        cls.server.server_close()
        cls.thread.join()

    def setUp(self):
        self.context = self.browser.new_context()
        self.context.route(
            "**/*",
            lambda route: route.continue_()
            if urlsplit(route.request.url).hostname == "127.0.0.1"
            else route.abort(),
        )
        self.page = self.context.new_page()
        self.errors = []
        self.page.on("pageerror", lambda error: self.errors.append(str(error)))
        self.open_catalog()

    def tearDown(self):
        self.context.close()
        # The existing image lightbox uses a CDN blocked by these offline tests.
        self.assertEqual(
            [error for error in self.errors if error != "$(...).featherlight is not a function"],
            []
        )

    def open_catalog(self, path="/"):
        self.page.goto(self.base_url + path, wait_until="domcontentloaded")
        toggle = self.page.locator("#we-toggle")
        if toggle.get_attribute("aria-expanded") == "false":
            toggle.click()
        self.cards = self.page.locator(".workshop-button")
        self.prereqs = self.page.locator('[data-dimension="prereq"]')

    def chip(self, label):
        token = sha256(label.encode("utf-8")).hexdigest()
        return self.prereqs.locator(f'.we-chip[data-value="{token}"]')

    def visible_titles(self):
        return sorted(self.page.locator(".workshop-button:visible").evaluate_all(
            "(cards) => cards.map(c => c.dataset.title)"
        ))

    def expected_titles(self, labels):
        tokens = [sha256(label.encode("utf-8")).hexdigest() for label in labels]
        return sorted(self.cards.evaluate_all(
            "(cards, tokens) => cards.filter(c => tokens.includes(c.dataset.prereq))"
            ".map(c => c.dataset.title)", tokens
        ))

    def test_exact_metadata_options_and_localized_labels(self):
        for language in ["", "es/", "fr/", "pt-br/", "de/", "zh-hans/",
                         "zh-hant/", "kr/", "ky/"]:
            with self.subTest(language=language or "en"):
                self.open_catalog("/" + language)
                groups = self.page.locator(".we-chip-group").evaluate_all(
                    "(groups) => groups.map(g => g.dataset.dimension)"
                )
                self.assertEqual(groups, ["difficulties", "prereq", "language", "topics"])
                options = self.prereqs.locator(".we-chip").evaluate_all(
                    "(chips) => chips.map(c => ({id:c.dataset.value, "
                    "label:c.querySelector('span').textContent}))"
                )
                card_ids = set(self.cards.evaluate_all(
                    "(cards) => cards.map(c => c.dataset.prereq).filter(Boolean)"
                ))
                self.assertEqual(card_ids, {option["id"] for option in options})
                self.assertEqual(len(options), len(card_ids))
                for option in options:
                    self.assertEqual(
                        option["id"], sha256(option["label"].encode("utf-8")).hexdigest()
                    )
                # Compare each displayed option with the actual workshop metadata panel.
                for option in options:
                    card = self.page.locator(
                        f'.workshop-button[data-prereq="{option["id"]}"]'
                    ).first
                    href = card.locator(".workshop-button-title a").get_attribute("href")
                    metadata = MetadataParser()
                    with urlopen(urljoin(self.base_url, href), timeout=10) as response:
                        metadata.feed(response.read().decode("utf-8"))
                    # Older sections with singular difficulty have no metadata panel.
                    if metadata.values:
                        self.assertEqual(metadata.values[0].strip(), option["label"].strip())
                if language == "":
                    self.assertEqual(self.prereqs.get_attribute("aria-label"), "Pre-requisite")
                    self.assertEqual(self.chip("None").count(), 1)
                    self.assertEqual(self.chip("none").count(), 0)
                    self.assertEqual(self.chip("None.").count(), 0)
                    self.assertEqual(self.chip("Java Basics").count(), 1)
                    self.assertEqual(self.chip("JavaScript Basics").count(), 1)
                    self.assertEqual(self.chip("Java: Basics").count(), 0)
                    self.assertEqual(self.chip("JavaScript: Basics").count(), 0)
                    self.assertEqual(
                        [option["label"] for option in options if option["label"].startswith("Python")],
                        ["Python Basics"]
                    )
                elif language == "es/":
                    self.assertEqual(self.prereqs.get_attribute("aria-label"), "Requisito previo")
        self.page.goto(self.base_url + "/ru/", wait_until="domcontentloaded")
        self.assertEqual(self.page.locator("#we-toggle").count(), 0)
        self.assertGreater(self.page.locator(".workshop-button").count(), 0)

    def test_selection_combines_with_existing_filters_and_clears(self):
        total = self.cards.count()
        self.chip("Python Basics").click()
        self.assertEqual(self.visible_titles(), self.expected_titles(["Python Basics"]))
        for title in ["Python: Choose Your Own Adventure Game",
                      "Python: Create music with EarSketch",
                      "Machine Learning: Linear Regression"]:
            self.assertIn(title, self.visible_titles())
        self.assertEqual(self.page.locator(".we-active-count").inner_text(), "1")
        self.assertEqual(self.chip("Python Basics").get_attribute("aria-pressed"), "true")
        self.chip("email").click()
        self.assertEqual(self.visible_titles(), self.expected_titles(["Python Basics", "email"]))
        self.page.locator('[data-dimension="language"] [data-value="python"]').click()
        self.assertTrue(self.page.locator(".workshop-button:visible").count())
        self.assertTrue(self.page.locator(".workshop-button:visible").evaluate_all(
            "(cards) => cards.every(c => c.dataset.language === 'python')"
        ))
        self.page.locator("#we-search-input").fill("zz-no-such-workshop")
        self.page.locator(".workshop-explorer-empty").wait_for(state="visible")
        self.assertEqual(self.visible_titles(), [])
        self.page.locator("#we-clear").click()
        self.assertEqual(self.page.locator(".workshop-button:visible").count(), total)
        self.assertTrue(self.page.locator(".we-active-count").is_hidden())
        self.assertNotIn("#", self.page.url)

    def test_shared_url_preserves_punctuation_and_multiple_selections(self):
        labels = ["Web Basics, C#", "email"]
        for label in labels:
            self.chip(label).click()
        expected = self.expected_titles(labels)
        self.assertEqual(self.visible_titles(), expected)
        self.page.reload()
        self.assertEqual(self.visible_titles(), expected)
        for label in labels:
            self.assertEqual(self.chip(label).get_attribute("aria-pressed"), "true")
        self.assertEqual(self.page.locator(".we-active-count").inner_text(), "2")
        self.assertIn("#prereq=", self.page.url)

    def test_grouping_and_missing_metadata(self):
        total = self.cards.count()
        missing = self.page.locator('.workshop-button[data-prereq=""]').count()
        self.assertGreater(missing, 0)
        self.page.locator("#we-groupby").select_option("prereq")
        self.assertEqual(self.page.locator(".we-active-count").inner_text(), "1")
        self.assertEqual(self.page.locator(".workshop-button:visible").count(), total)
        unknown = self.page.locator(".workshop-explorer-group").filter(
            has=self.page.get_by_role("heading", name="Not specified", exact=True)
        )
        self.assertEqual(unknown.locator(".workshop-button").count(), missing)
        self.chip("None").click()
        self.assertEqual(self.visible_titles(), self.expected_titles(["None"]))
        self.assertEqual(self.page.locator('.workshop-button[data-prereq=""]:visible').count(), 0)
        self.page.locator("#we-clear").click()
        self.assertEqual(self.page.locator(".workshop-button:visible").count(), total)
        self.assertEqual(self.page.locator(".workshop-explorer-groups").count(), 0)

    def test_prerequisite_accent_is_visible(self):
        self.page.emulate_media(reduced_motion="reduce")
        for width in [1440, 390]:
            with self.subTest(width=width):
                self.page.set_viewport_size({"width": width, "height": 900})
                appearance = self.prereqs.evaluate("""group => {
                    const style = getComputedStyle(group);
                    const ctx = document.createElement("canvas").getContext("2d");
                    function luminance(color) {
                        ctx.fillStyle = color;
                        ctx.fillRect(0, 0, 1, 1);
                        const rgb = [...ctx.getImageData(0, 0, 1, 1).data].slice(0, 3);
                        const linear = rgb.map(v => {
                            v /= 255;
                            return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
                        });
                        return linear[0] * 0.2126 + linear[1] * 0.7152 + linear[2] * 0.0722;
                    }
                    const bar = luminance(style.borderLeftColor);
                    const background = luminance(style.backgroundColor);
                    const outer = luminance(getComputedStyle(group.closest(
                        ".workshop-explorer-filters")).backgroundColor);
                    const contrast = other =>
                        (Math.max(bar, other) + 0.05) / (Math.min(bar, other) + 0.05);
                    return {
                        width: style.borderLeftWidth,
                        style: style.borderLeftStyle,
                        contrast: Math.min(contrast(background), contrast(outer))
                    };
                }""")
                self.assertEqual(appearance["width"], "4px")
                self.assertEqual(appearance["style"], "solid")
                self.assertGreaterEqual(appearance["contrast"], 3)
        self.chip("Python Basics").click()
        self.assertEqual(
            self.chip("Python Basics").evaluate("(c) => getComputedStyle(c).backgroundColor"),
            "rgb(241, 246, 241)"
        )

    def test_python_basics_link_navigates_only_from_workshop_metadata(self):
        self.assertEqual(self.chip("Python Basics").locator("a").count(), 0)
        for path in ["/adventure/", "/python-earsketch/", "/ml-machine-learning/"]:
            with self.subTest(path=path):
                self.page.goto(self.base_url + path, wait_until="domcontentloaded")
                link = self.page.locator(".metadata-value").get_by_role(
                    "link", name="Python Basics", exact=True
                )
                self.assertEqual(link.count(), 1)
                self.assertEqual(link.get_attribute("href"), "/python-basics/")
                link.click()
                self.page.wait_for_url(self.base_url + "/python-basics/")
                self.assertEqual(self.page.locator(".metadata-row").first.locator("a").count(), 0)
        self.page.goto(self.base_url + "/java-tictactoe/", wait_until="domcontentloaded")
        self.assertEqual(
            self.page.locator(".metadata-row").first.locator(".metadata-value").inner_text(),
            "Java Basics"
        )
        self.assertEqual(self.page.locator(".metadata-row").first.locator("a").count(), 0)

    def test_mobile_keyboard_selection_and_pale_green(self):
        self.open_catalog("/pt-br/")
        self.page.set_viewport_size({"width": 390, "height": 844})
        self.page.emulate_media(reduced_motion="reduce")
        labels = self.prereqs.locator(".we-chip span").all_text_contents()
        longest = max(labels, key=len)
        self.assertGreater(len(longest), 80)
        chip = self.chip(longest)
        chip.focus()
        self.page.keyboard.press("Space")
        self.assertEqual(chip.get_attribute("aria-pressed"), "true")
        self.assertEqual(chip.evaluate("(c) => getComputedStyle(c).backgroundColor"), "rgb(241, 246, 241)")
        self.assertEqual(chip.evaluate("(c) => getComputedStyle(c).outlineStyle"), "solid")
        self.assertIn("inset", chip.evaluate("(c) => getComputedStyle(c).boxShadow"))
        self.assertEqual(chip.evaluate("(c) => getComputedStyle(c).transform"), "none")
        for button in self.prereqs.locator(".we-chip").all():
            self.assertLessEqual(
                button.evaluate("(c) => c.scrollWidth"), button.evaluate("(c) => c.clientWidth")
            )
        self.page.keyboard.press("Enter")
        self.assertEqual(chip.get_attribute("aria-pressed"), "false")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("build_dir", type=Path, help="Hugo output directory")
    parser.add_argument("--browser-channel", default=None, help="Installed browser, e.g. msedge")
    args = parser.parse_args()
    BUILD_DIR = args.build_dir.resolve()
    BROWSER_CHANNEL = args.browser_channel
    if not (BUILD_DIR / "index.html").is_file():
        parser.error("build_dir must contain a Hugo build with index.html")
    unittest.main(argv=[__file__], verbosity=2)
