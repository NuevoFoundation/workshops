## Summary

<!-- One line: what does this PR fix or add? -->

## Changes

<!-- List files changed and what was fixed/added in each -->

## Languages affected

<!-- List all language versions checked. If you changed English content, did you check if translations exist? -->
- [ ] English
- [ ] Brazilian Portuguese (`content/brazilian-portuguese/`)
- [ ] Spanish (`content/espanol/`)
- [ ] Korean (`content/korean/`)
- [ ] Other: ___

## Checklist

<!-- Check all that apply. PRs that skip required items may be sent back for changes. -->

### Required
- [ ] Hugo builds without errors (`hugo --quiet`)
- [ ] All image references use **lowercase** extensions (`.png`, `.jpg`, `.gif` — not `.PNG`)
- [ ] All `<img>` tags have quoted attributes and `alt` text
- [ ] YAML frontmatter has no duplicate keys
- [ ] If I changed English content, I checked for matching translations and either fixed them too or noted which ones need updating

### If adding images
- [ ] Images are under 500 KB (compress large screenshots)
- [ ] Image filenames are descriptive (not `image1.png`)
- [ ] Images have `width` attributes to control sizing

### If adding a new workshop
- [ ] Workshop follows the standard folder structure (see CONTRIBUTING.md)
- [ ] `_index.md` has correct frontmatter (title, description, prereq, difficulty, icon, draft)
- [ ] Table of contents uses `<details>/<summary>` pattern
- [ ] All activities are numbered with correct `weight` values

### If translating
- [ ] Translated ALL user-visible text (titles, descriptions, button labels)
- [ ] Kept image paths, code blocks, and shortcodes unchanged
- [ ] YAML frontmatter keys are in English (only values are translated)
