# 📋 Workshop Standards & Checklist

> **For contributors, interns, and reviewers of Nuevo Foundation workshops.**
> Follow this guide when creating new workshops or reviewing existing ones.

---

## 🎯 Our Philosophy

Nuevo Foundation workshops should feel like **guided adventures**, not textbooks. Every workshop tells a story that students follow at their own pace. The best workshops are:

- **Story-driven**: Students follow a character on a mission (Benji the Dog needs a website, Alex the Bee needs a honeycomb, DJ Nuvi needs a hit mixtape)
- **Personalizable**: Students can easily swap the theme to match their interests (their pet instead of Benji, their country instead of Costa Rica)
- **Self-paced**: Clear enough that students can learn on their own, even when the teacher steps away
- **Progressive**: Activities build on each other, one concept at a time
- **Fun**: Encouraging tone, mascot characters, visual rewards, and celebration at the end

---

## 🌟 What Good Looks Like (Our Best Workshops)

These workshops are our gold standard. Study them before building your own:

### Web Basics (HTML/CSS) - [content/english/web-basics/](content/english/web-basics/)
- **Theme**: Help Benji the Dog (displaced by Hurricane Harvey) find his forever home by building him a website
- **Why it works**: Emotional hook, YouTube video on every page, CodePen embeds for instant coding, Activity 5 lets students build their own site, deploys to real GitHub Pages
- **Key pattern**: Narrative > Concept > Video > Reference table > Hands-on exercise

### Python Turtle - [content/english/python-turtle/](content/english/python-turtle/)
- **Theme**: Help Alex the Bee build a honeycomb home using Python drawing
- **Why it works**: 11 YouTube videos, embedded Trinket IDE, visual results (students SEE their code draw shapes), bee puns, progressive complexity (line > square > hexagon > honeycomb > mandala flower)
- **Key pattern**: Story context > Video > Code example > Interactive Trinket > Challenge

### EarSketch (Python & JS Blocks) - [content/english/python-earsketch/](content/english/python-earsketch/)
- **Theme**: Help DJ Nuvi produce a hit mixtape using code
- **Why it works**: Students HEAR their code (music!), immediate audible feedback, professional tool (Georgia Tech), creative freedom in sound choices
- **Key pattern**: Music concept > Code concept > Build > Listen > Iterate

---

## 📁 Required Workshop Structure

Every workshop **must** have the following:

```
content/{language}/{workshop-name}/
├── _index.md              # Landing page: story intro, prereqs, YouTube overview video
├── activity-1.md          # First activity (one concept per activity)
├── activity-2.md          # Second activity (builds on first)
├── ...                    # As many activities as needed (3-11 is typical)
├── answer-key.md          # All answers, hidden from student navigation
└── media/                 # Images, diagrams (NO video files, use YouTube)
    ├── descriptive-name.png
    └── ...
```

> **Note:** The Hugo theme automatically adds a Nuvi "You did it! Workshop complete" celebration
> to the last page of every workshop. You do not need to create a separate conclusion file.
> If your workshop has a special story ending (like web-basics' Benji adoption story),
> you can optionally add a `conclusion.md` page.

---

## ✅ New Workshop Checklist

### Landing Page (`_index.md`)

- [ ] **Metadata block is complete** (the YAML between `---` markers at the top of each file, called "front matter" in Hugo):
  ```yaml
  ---
  title: "Workshop Title"
  description: "One-line description of what students will learn"
  date: 2026-01-01T00:00:00-00:00
  prereq: "None" or "Python Basics" etc.
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  draft: false
  icon: "fas fa-code"
  ---
  ```
- [ ] **Story introduction** sets up the adventure theme and the character students will help
- [ ] **Prerequisites** are clearly listed so students know what they need before starting
- [ ] **YouTube video** embedded introducing the workshop topic
- [ ] **Nuvi mascot** welcomes students (use [Nuevo Foundation GIPHY](https://giphy.com/nuevofoundation))
- [ ] **"What you'll learn"** section with clear learning outcomes
- [ ] **Theme is personalizable** so students can swap names, characters, or topics to match their interests

### Activities (`activity-N.md`)

- [ ] **Metadata block includes weight** for proper sidebar ordering:
  ```yaml
  ---
  title: "Activity 1 - Descriptive Title"
  date: 2026-01-01T00:00:00-00:00
  draft: false
  weight: 3
  ---
  ```
- [ ] **One concept per activity** (not concept overload)
- [ ] **Activities build upon each other** (progressive difficulty)
- [ ] **YouTube video** embedded explaining the concept
- [ ] **Step-by-step instructions** clear enough for a student to follow without a teacher
- [ ] **Code snippets** are syntactically correct and actually runnable
- [ ] **Images** throughout to help visual learners
- [ ] **All images have descriptive alt text** (not generic "Decoration" or "Image")
- [ ] **Diagrams** (Mermaid or images) for complex concepts
- [ ] **Interactive coding environment** embedded when possible (Trinket, CodePen, Playcode.io, EarSketch)
- [ ] **Encouraging tone** ("Great job!", "You're doing amazing!", "Fear not!")
- [ ] Use `{{% notice tip %}}` for best practices and `{{% notice warning %}}` for common pitfalls

### Answer Key (`answer-key.md`)

- [ ] **Metadata block has `hidden: true`** so students don't see it in navigation:
  ```yaml
  ---
  title: "Answer Key"
  draft: false
  hidden: true
  weight: 300
  ---
  ```
- [ ] **Contains answers for ALL activities** (map every challenge to its solution)
- [ ] **Complex activities have step-by-step solutions**, not just final code
- [ ] **Optional/bonus challenges** are also covered
- [ ] **Teacher notes** where helpful ("This curriculum allows students to be creative. The below is just an example")

### Media & Assets (`media/`)

- [ ] **All referenced images exist** in the media folder
- [ ] **File names match references exactly** (case-sensitive! `Cafe.png` is NOT `cafe.png` on Linux/GitHub Pages)
- [ ] **No unreferenced files** sitting unused in media/
- [ ] **Images are optimized** (not unnecessarily large)
- [ ] **Videos hosted on YouTube**, not committed to the repo as MP4 files
- [ ] **Nuvi mascot** images used where appropriate ([GIPHY collection](https://giphy.com/nuevofoundation))

### Language & Writing

- [ ] **Written in the target language** (no untranslated sections)
- [ ] **Consistent verb conjugation** (for Spanish: use **tu** form for broad Latin American accessibility, not voseo)
- [ ] **No typos or grammar errors**
- [ ] **Technical terms are accurate** (truth tables, function names, etc.)
- [ ] **Jargon is explained** the first time it appears
- [ ] **Warm, encouraging tone** throughout (see examples from web-basics and python-turtle)
- [ ] **Instructions are self-contained** so a student can learn independently

### Hugo & Technical

- [ ] **Weight values** create correct page ordering in sidebar
- [ ] **No `draft: true`** on published content
- [ ] **Code blocks have language tags** (` ```python `, ` ```javascript `, ` ```html `, etc.)
- [ ] **No inline HTML style hacks** (use CSS classes or Hugo shortcodes instead)
- [ ] **File ends with a newline**

---

## 🔍 PR Review Checklist (For Reviewers)

When reviewing a workshop PR, verify:

1. **Does it actually run?** Follow the instructions yourself. Can a student get working code?
2. **Answer key complete?** Map every activity's challenge to its answer in answer-key.md
3. **Images load?** Check for case-sensitivity issues (`Cafe.png` vs `cafe.png`)
4. **YouTube videos on every page?** Each activity should have an embedded video
5. **Language quality?** Read for typos, grammar, verb consistency
6. **Self-paced friendly?** Could a student complete this without a teacher?
7. **Fun factor?** Is the theme engaging? Can students personalize it?
8. **Accessibility?** Descriptive alt text on all images, clear instructions
9. **Completion**: Hugo theme auto-adds Nuvi "You did it!" to the last page (no action needed)
10. **Progressive difficulty?** Activities build on each other, one concept at a time

---

## 📐 Available Hugo Shortcodes

See [content/guidelines/shortcodes/](content/guidelines/shortcodes/) for full documentation:

| Shortcode | Use For | Example |
|---|---|---|
| `{{% notice tip %}}` | Best practices and helpful hints | "Strings must be wrapped in quotes!" |
| `{{% notice warning %}}` | Common pitfalls and errors | "HELP! Nothing shows up on the screen!" |
| `{{% notice info %}}` | Additional context | Background on a concept |
| `{{% expand "Click for hint" %}}` | Collapsible hints/answers | Optional help students can reveal |
| `{{% children /%}}` | Auto-generated table of contents | Landing page navigation |
| `{{< mermaid >}}` | Flowcharts and diagrams | Logic flows, decision trees |
| `{{< button >}}` | Call-to-action buttons | "Try it yourself!" |
| `{{< attachments >}}` | Downloadable files | Starter code, assets |

---

## 🏗️ Creating a New Workshop (Step by Step)

1. **Pick a theme** that students can personalize (animals, places, hobbies, music)
2. **Create a character** students will help (Benji, Alex the Bee, DJ Nuvi, etc.)
3. **Start from the template** at [content/example/](content/example/)
4. **Write the story** in `_index.md` with clear prereqs, learning outcomes, and a YouTube intro
5. **Build activities** that progress in difficulty, one concept per activity (3-11 activities is typical)
6. **Record YouTube videos** for each activity page explaining the concept
7. **Add media** with descriptive alt text and consistent, case-sensitive file naming
8. **Create the answer key** with solutions for every challenge (set `hidden: true`)
9. **Verify completion**: The Hugo theme auto-adds Nuvi "You did it!" to the last page. Optionally add a `conclusion.md` if your story has a special ending
10. **Add Mermaid diagrams** for complex concepts
11. **Self-test**: Follow your own workshop start to finish as if you were a student
12. **Translate** if creating a bilingual version (use tu for Spanish)
13. **Submit PR** and use this checklist for self-review before requesting reviews

---

## 🌍 Translation Guidelines

When translating a workshop to another language:

- [ ] Translate ALL text content (titles, descriptions, instructions, alt text)
- [ ] Keep code snippets in the original programming language (variable/function names stay in English)
- [ ] Translate comments inside code to the target language
- [ ] Update metadata block `title` and `description` to the target language
- [ ] Reuse the same media files (images are language-neutral)
- [ ] For Spanish: use **tu** conjugation for broad Latin American accessibility
- [ ] Verify the translation reads naturally, not like a machine translation

---

*This guide is maintained by [Nuevo Foundation](https://nuevofoundation.org). Questions? Open an issue or reach out to the workshop team.*

*"Si usted tiene, usted tiene que dar." - If you have, you have to give.*
