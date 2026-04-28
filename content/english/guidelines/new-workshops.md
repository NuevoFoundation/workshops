---
title: "Creating a new workshop"
date: 2026-04-26T00:00:00-07:00
draft: false
weight: 2
---

This guide walks you through creating a new workshop from idea to pull request. Before you begin, complete the [Getting Started](../getting-started/) setup (Git, Hugo, fork) and read the [Site Architecture](../site-architecture/) overview.

## Our philosophy

Nuevo Foundation workshops should feel like **guided adventures**, not textbooks. Every workshop tells a story that students follow at their own pace. The best workshops are:

- **Story-driven**: students follow a character on a mission (Benji the Dog needs a website, Alex the Bee needs a honeycomb, DJ Nuvi needs a hit mixtape)
- **Personalizable**: students can easily swap the theme to match their interests (their pet instead of Benji, their country instead of Costa Rica)
- **Self-paced**: clear enough that students can work on their own, even when the teacher steps away
- **Progressive**: activities build on each other, one concept at a time
- **Fun**: encouraging tone, mascot characters, visual rewards, and celebration at the end

## Learn from our best workshops

Study these gold-standard workshops before building your own:

### Web basics (HTML/CSS) — [content/english/web-basics/](https://github.com/NuevoFoundation/workshops/tree/master/content/english/web-basics)

- **Theme**: Help Benji the Dog (displaced by Hurricane Harvey) find his forever home by building him a website
- **Why it works**: emotional hook, YouTube video on every page, CodePen embeds for instant coding, Activity 5 lets students build their own site, deploys to real GitHub Pages
- **Key pattern**: narrative → concept → video → reference table → hands-on exercise

### Python turtle — [content/english/python-turtle/](https://github.com/NuevoFoundation/workshops/tree/master/content/english/python-turtle)

- **Theme**: Help Alex the Bee build a honeycomb home using Python drawing
- **Why it works**: 11 YouTube videos, embedded Trinket IDE, visual results (students SEE their code draw shapes), progressive complexity (line → square → hexagon → honeycomb → mandala flower)
- **Key pattern**: story context → video → code example → interactive Trinket → challenge

### EarSketch (Python and JS blocks) — [content/english/python-earsketch/](https://github.com/NuevoFoundation/workshops/tree/master/content/english/python-earsketch)

- **Theme**: Help DJ Nuvi produce a hit mixtape using code
- **Why it works**: students HEAR their code (music!), immediate audible feedback, professional tool (Georgia Tech), creative freedom in sound choices
- **Key pattern**: music concept → code concept → build → listen → iterate

## Step 1: scaffold your workshop

Use the scaffold script to generate the correct directory structure and template files. Do not create workshop files manually — the scaffold ensures correct Hugo frontmatter, file naming, and directory layout.

**Requirement:** Python 3.7 or later. Verify with `python --version` (or `python3 --version` on macOS/Linux).

Run this from the root of the `workshops` repository:

```bash
python tools/new-workshop.py --name "my-workshop" --title "My Workshop"
```

Use `--dry-run` first to preview what would be created without writing any files:

```bash
python tools/new-workshop.py --name "my-workshop" --title "My Workshop" --dry-run
```

This generates the standard starter structure:

```
content/english/my-workshop/
├── _index.md          ← Landing page (intro, prerequisites, TOC)
├── activity-1.md      ← First activity
├── activity-2.md      ← Second activity
├── activity-3.md      ← Third activity
├── answer-key.md      ← Answer key (hidden from navigation)
└── media/
    └── .gitkeep       ← Folder for screenshots and images
```

### Scaffold options

| Option | Default | Description |
|--------|---------|-------------|
| `--name` | (required) | Directory name in kebab-case (e.g. `python-web-scraping`) |
| `--title` | (required) | Display title (e.g. `"Python: Web Scraping"`) |
| `--activities` or `-n` | 3 | Number of activity files to generate (1 to 25) |
| `--difficulty` | Beginner | `Beginner`, `Intermediate`, or `Advanced` |
| `--description` | (empty) | Short description for the landing page |
| `--prereq` | `"None"` | Prerequisite workshop name |
| `--icon` | `fas fa-code` | Font Awesome icon class |
| `--language` or `-l` | english | Language folder (e.g. `espanol`, `korean`) |
| `--no-answer-key` | (off) | Skip generating the answer key file |
| `--dry-run` | (off) | Preview without writing files |

### Example: intermediate workshop with 5 activities

```bash
python tools/new-workshop.py \
  --name "python-web-scraping" \
  --title "Python: Web Scraping" \
  --activities 5 \
  --difficulty Intermediate \
  --prereq "Python Basics" \
  --description "Learn to scrape data from websites using Python"
```

## Step 2: fill in your content

Open the generated files and replace the placeholder text:

1. **`_index.md`** (landing page): Write the introduction. Set up your story, explain what students will learn, and list prerequisites. The `{{% children /%}}` shortcode at the bottom auto-generates the table of contents — leave it in place.
2. **`activity-N.md`** files: Write step-by-step instructions for each activity. Replace placeholder titles with descriptive names (e.g. `"Activity 1: Drawing shapes"`). Include a challenge at the end of each activity.
3. **`answer-key.md`**: Add solutions for every activity challenge. This file has `hidden: true` in its frontmatter so it won't appear in navigation.
4. **`media/`**: Add screenshots, diagrams, or images. Use `media/image-name.png` in `_index.md` and `../media/image-name.png` in activity pages (activity pages render one level deeper in Hugo, so they need `../` to reach the media folder).

For formatting help, see the [Formatting](../formatting/) and [Code and interactivity](../code-and-interactivity/) guides.

## Step 3: preview locally

From the `workshops` directory:

```bash
hugo server -D
```

Open **http://localhost:1313/** and navigate to your workshop. Click through every activity to check that content renders correctly, images load, and navigation works.

## Step 4: open a pull request

```bash
git checkout -b workshop/my-workshop
git add content/english/my-workshop/
git commit -m "Add my-workshop workshop"
git push --set-upstream origin workshop/my-workshop
```

Then open a pull request from your fork to the main repo.

## Workshop quality checklist

Use this checklist before submitting your PR. Reviewers will check the same items.

### Landing page (`_index.md`)

- [ ] Metadata block is complete (title, description, date, prereq, difficulty, draft, icon)
- [ ] Story introduction sets up the adventure theme and character
- [ ] Prerequisites are clearly listed
- [ ] "What you'll learn" section with clear learning outcomes
- [ ] Theme is personalizable so students can swap names, characters, or topics
- [ ] `{{% children /%}}` shortcode present at bottom for auto-generated table of contents

### Activities (`activity-N.md`)

- [ ] One concept per activity (no concept overload)
- [ ] Activities build on each other (progressive difficulty)
- [ ] Step-by-step instructions clear enough for a student to follow without a teacher
- [ ] Code snippets are syntactically correct and actually runnable
- [ ] Images throughout to help visual learners
- [ ] All images have descriptive alt text (see [Images and GIFs](../images-and-gifs/))
- [ ] Interactive coding environment embedded when possible (Replit, Trinket, CodePen — see [Code and interactivity](../code-and-interactivity/))
- [ ] Encouraging tone ("Great job!", "You're doing amazing!")
- [ ] Use `{{% notice tip %}}` for best practices and `{{% notice warning %}}` for common pitfalls
- [ ] Weight values create correct page ordering in sidebar (see [Navigation](../navigation/))

### Answer key (`answer-key.md`)

- [ ] Metadata has `hidden: true` so students don't see it in navigation
- [ ] Contains answers for ALL activity challenges
- [ ] Complex activities have step-by-step solutions, not just final code
- [ ] Optional/bonus challenges are also covered
- [ ] Teacher notes where helpful ("This curriculum allows students to be creative. The below is just an example.")

### Media and assets

- [ ] All referenced images exist in the media folder
- [ ] File names match references exactly (case-sensitive — `Cafe.png` is NOT `cafe.png` on Linux)
- [ ] No unreferenced files sitting unused in media
- [ ] Images are optimized (not unnecessarily large)
- [ ] Videos hosted on YouTube, not committed to the repo as MP4 files

### Writing and language

- [ ] No typos or grammar errors
- [ ] Technical terms are accurate and jargon is explained the first time it appears
- [ ] Warm, encouraging tone throughout
- [ ] Instructions are self-contained so a student can learn independently
- [ ] Code blocks have language tags (` ```python `, ` ```html `, etc.)
- [ ] File ends with a newline

### Hugo and build

- [ ] `hugo server -D` builds without errors
- [ ] No `draft: true` on published content
- [ ] Frontmatter YAML is valid (no duplicate keys, correct indentation)
- [ ] All pages render correctly in the browser

## PR review checklist (for reviewers)

When reviewing a workshop PR:

1. **Does it actually run?** Follow the instructions yourself. Can a student get working code?
2. **Answer key complete?** Map every activity's challenge to its answer
3. **Images load?** Check for case-sensitivity issues
4. **Language quality?** Read for typos, grammar, and accuracy
5. **Self-paced friendly?** Could a student complete this without a teacher?
6. **Fun factor?** Is the theme engaging? Can students personalize it?
7. **Accessibility?** Descriptive alt text on all images, clear instructions
8. **Progressive difficulty?** Activities build on each other, one concept at a time
9. **Hugo build clean?** Run `hugo server -D` and check for warnings
10. **Walk through it yourself.** Complete the workshop as a student would, start to finish

{{% notice info %}}
The Hugo theme automatically adds a Nuvi "You did it! Workshop complete" celebration to the last page of every workshop. You do not need to create a separate conclusion file. If your workshop has a special story ending, you can optionally add a `conclusion.md` page.
{{% /notice %}}

## Resources

- [Getting started](../getting-started/) — Git, Hugo, and fork setup
- [How the site is built](../site-architecture/) — understand the Hugo directory structure
- [Formatting](../formatting/) — markdown syntax and shortcodes
- [Images and GIFs](../images-and-gifs/) — sizing, alt text, file naming
- [Navigation](../navigation/) — frontmatter fields for page ordering
- [Code and interactivity](../code-and-interactivity/) — embedding Replit, Trinket, CodePen
- [Tags and metadata](../tags-and-metadata/) — complete frontmatter reference
- [Translation volunteer guide](../translation-volunteer/) — translating workshops to other languages
