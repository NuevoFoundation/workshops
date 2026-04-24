# Nuevo Foundation Workshops

This repo contains all of the code and content for the [Nuevo Foundation Workshop website](https://workshops.nuevofoundation.org).

<a href="https://uptimerobot.com/dashboard.php">
  <img src="https://img.shields.io/uptimerobot/status/m795338143-b057b206552c0ef54c164ded" alt="Nuevo Foundation Production Workshops Website">
</a>
<a href="https://uptimerobot.com/dashboard.php">
  <img alt="Uptime Robot ratio (30 days)" src="https://img.shields.io/uptimerobot/ratio/m795338143-b057b206552c0ef54c164ded">
</a>

## Website links

* [Workshops website](https://workshops.nuevofoundation.org) - The live site students use (production).
* [Workshops GitHub IO test site](https://nuevofoundation.github.io/workshops/) - Staging site for content validation. Updates are pushed automatically when the master branch changes.

## Prerequisites

Before you begin, install the following:

| Tool | Purpose | Install link |
|------|---------|-------------|
| **Git** | Version control | [git-scm.com/downloads](https://git-scm.com/downloads) |
| **Hugo (Extended)** | Static site generator that builds the workshop site | [gohugo.io/installation](https://gohugo.io/installation/) |
| **VS Code** (recommended) | Text editor for writing content | [code.visualstudio.com](https://code.visualstudio.com/download) |

### Quick install for Hugo

**Windows (winget):**
```
winget install Hugo.Hugo.Extended
```

**macOS (Homebrew):**
```
brew install hugo
```

**Linux (snap):**
```
snap install hugo
```

Verify the install:
```
hugo version
```

You should see output like `hugo v0.1XX.X ... extended`. The **extended** version is required.

## Clone and build locally

### 1. Fork the repo

Click **Fork** in the top right corner of the [workshops repo](https://github.com/NuevoFoundation/workshops) on GitHub. This creates your own copy to work from.

### 2. Clone your fork

Replace `[your-username]` with your GitHub username:

```bash
git clone https://github.com/[your-username]/workshops.git
cd workshops
```

### 3. Set up the upstream remote

This lets you pull in the latest changes from the main repo:

```bash
git remote add upstream https://github.com/NuevoFoundation/workshops.git
git remote set-url --push upstream no_push
```

Verify with `git remote -v`. You should see:

```
origin    https://github.com/[your-username]/workshops.git (fetch)
origin    https://github.com/[your-username]/workshops.git (push)
upstream  https://github.com/NuevoFoundation/workshops.git (fetch)
upstream  no_push (push)
```

### 4. Build and run the site locally

From the `workshops` directory, run:

```bash
hugo server -D
```

* `-D` includes draft content so you can preview work in progress.
* The site builds in a few seconds and is available at **http://localhost:1313/**.
* Hugo watches for file changes and live-reloads your browser automatically.

To stop the server, press `Ctrl+C`.

### 5. Known build issue

Some translated content files have a duplicate `hidden: true` key in their front matter (for example `content/espanol/security-phishing/answer-key.md`). If you see a build error like:

```
mapping key "hidden" already defined
```

Open the file shown in the error and remove the duplicate line.

## Making changes

### Keep your fork up to date

Before starting new work, sync with upstream:

```bash
git fetch --all --prune
git checkout master
git merge upstream/master
git push origin master
```

### Create a topic branch

```bash
git checkout master
git checkout -b my-feature-branch
git push --set-upstream origin my-feature-branch
```

### Commit and push

```bash
git add .
git commit -m "Description of what changed"
git push
```

### Open a pull request

Go to your fork on GitHub. You will usually see a prompt to create a pull request from your recent push. If not, go to **Pull Requests > New pull request**, select your branch, add a title and description, and submit.

## Project structure

```
workshops/
  config.toml          # Hugo site configuration
  content/             # All workshop content (markdown)
    english/           # English content (primary)
    espanol/           # Spanish translations
    brazilian-portuguese/
    francais/
    german/
    korean/
    simplified-chinese/
    traditional-chinese/
    kyrgyz/
  layouts/             # Custom page templates and partials
  static/              # Images, CSS, JS, and other static files
  themes/docdock/      # The DocDock Hugo theme
  workshopcode/        # Source code files used within workshops
```

### How content works

* Each workshop lives in its own folder under `content/english/` (or the equivalent language directory).
* Pages are Markdown files with YAML front matter at the top (title, description, weight for ordering).
* Hugo automatically builds the left nav and workshop listing from the folder structure.
* Custom shortcodes are available for alerts, buttons, expandable sections, and more. See the [formatting guide](https://workshops.nuevofoundation.org/guidelines/formatting/).

## Contributor guides

| Guide | Description |
|-------|-------------|
| [Site architecture](https://workshops.nuevofoundation.org/guidelines/site-architecture/) | How the Hugo site is structured |
| [Getting started](https://workshops.nuevofoundation.org/guidelines/getting-started/) | Full setup walkthrough with screenshots |
| [Formatting](https://workshops.nuevofoundation.org/guidelines/formatting/) | Markdown and custom shortcode reference |
| [New workshop guidelines](https://workshops.nuevofoundation.org/guidelines/new-workshops/) | How to create a new workshop from scratch |
| [Web developer guidelines](https://workshops.nuevofoundation.org/guidelines/web-developer/) | For developers working on the site itself |

## Quick reference

| What you want to do | Where to look |
|---------------------|---------------|
| Fix a typo or bug | Edit the `.md` file under `content/english/` and submit a PR |
| Add a new workshop | Follow the [new workshop guidelines](https://workshops.nuevofoundation.org/guidelines/new-workshops/) |
| Improve the website | See the [web developer guide](https://workshops.nuevofoundation.org/guidelines/web-developer/) |
| Report an issue | [Open a GitHub issue](https://github.com/NuevoFoundation/workshops/issues) |
| Find something to work on | Check [help wanted issues](https://github.com/NuevoFoundation/workshops/labels/help%20wanted) |

## Code of conduct

This project has adopted a code of conduct adapted from the [Contributor Covenant](http://contributor-covenant.org/) to clarify expected behavior in our community.
