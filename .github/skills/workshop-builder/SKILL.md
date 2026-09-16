---
name: workshop-builder
version: 0.1.0
description: >
  Create, revise, or review Nuevo Foundation coding workshops in this
  repository. Use when the user asks for a new workshop, curriculum or lesson
  sequence, student activities, an answer key, workshop validation, or help
  turning an educational brief into a story-driven, self-paced experience.
---

# Nuevo Foundation workshop builder

## Overview

This skill provides the authoring workflow for Nuevo Foundation workshops. It
is not a standalone application: it guides Copilot to use the repository's
guidelines, scaffolding script, validator, Hugo site, and browser checks.

Use it only for workshop content in this repository. Do not apply these
requirements to unrelated documentation or application code.

## Choose the workflow before acting

Determine which workflow the user requested:

1. **Create** — collect the standard brief, scaffold a new directory, write all
   content and assets, and validate the result.
2. **Revise** — inspect the existing workshop and requested changes. Preserve
   its working narrative and structure unless the user asks for a redesign. Do
   not run the scaffold over an existing directory.
3. **Review** — inspect and validate without modifying files unless the user
   explicitly asks for fixes. Report concrete findings with file paths.

If the request is ambiguous between these workflows, resolve that distinction
before modifying files.

## Preflight

Before planning or editing:

1. Confirm the current directory is the workshops repository.
2. Inspect Git status and preserve unrelated changes.
3. Confirm the target workshop path and ensure creation will not overwrite an
   existing directory.
4. Read `data/taxonomy.yaml`. Treat it as the only source of valid Workshops
   tab difficulty, coding-language, and topic tags.
5. Check that the required local tools for the requested workflow are
   available. Creation requires Python; full preview requires Hugo; browser
   validation requires Playwright.
6. Identify external accounts, hosted editors, hardware, or network access the
   workshop would require. Prefer an account-free browser experience when it
   can satisfy the learning objectives.

## Required brief

For the **create** workflow, collect the standard workshop brief from
`WORKSHOP-BRIEF.md` before planning or creating files.

Ask all missing questions together in one structured interaction. Use a
structured user-input tool when one is available; otherwise present the
questions as one numbered list. Do not ask them one at a time.

Accept `choose for me` for optional creative decisions. Apply the defaults in
`WORKSHOP-BRIEF.md` when the user omits an optional answer. Do not begin
scaffolding until every required field has an answer or an explicit default.

If the user already supplied part of the brief, preserve those answers and ask
only for the missing fields.

After normalizing the brief, compare the requested activity count with the
target duration using the estimation guidance in `WORKSHOP-BRIEF.md`. If the
workshop will likely take longer:

- Warn with the estimated duration and a suggested activity count.
- Keep the user's requested activity count.
- Do not require another confirmation or block creation.
- Do not silently shorten activities or remove learning outcomes to force the
  workshop into the original duration.

Map the brief to Workshops tab metadata before scaffolding:

- Derive one canonical `difficulties` value from previous coding experience
  and lesson complexity.
- Map the requested coding language or platform to one canonical `language`
  value.
- Use only the canonical `topics` values selected in the brief.
- Show these three metadata choices in the normalized brief so the user can see
  how the workshop will be categorized.

## Source of truth

Read and follow these repository guides before writing content:

- `content/english/guidelines/new-workshops.md`
- `content/english/guidelines/site-architecture.md`
- `content/english/guidelines/formatting.md`
- `content/english/guidelines/images-and-gifs.md`
- `content/english/guidelines/navigation.md`
- `content/english/guidelines/code-and-interactivity.md`
- `content/english/guidelines/tags-and-metadata.md`

Study at least one gold-standard workshop using the same language or
interaction style.

## Create workflow

1. Inspect the worktree and keep the workshop changes isolated. Never overwrite
   an existing workshop or unrelated user changes.
2. Use `tools/new-workshop.py` to scaffold the workshop. Run it with
   `--dry-run` before creating files. Pass `--difficulty`,
   `--coding-language`, and `--topics` using canonical values from
   `data/taxonomy.yaml`.
3. Design a short narrative with a character, mission, and visible ending.
4. Use the requested activity count, or determine it from the target duration
   when the user selected `choose for me`. Divide the workshop into progressive
   activities and teach one main concept per activity.
5. Write the landing page, every activity, and a complete hidden answer key.
6. Provide a working starting point for every coding activity.
7. Create original diagrams or other locally owned media when useful. Never
   copy copyrighted assets.
8. Make examples personalizable and suitable for the requested age range.
   Adapt facilitation notes and interaction patterns to the selected in-person
   or virtual delivery format.
9. Run every code example. Test meaningful branches, not only syntax.
10. Run `python tools/validate-workshop.py WORKSHOP_PATH`.
11. Build the complete site with Hugo and inspect the generated workshop pages
    with Playwright. Open the Workshops tab, verify the workshop card appears,
    and confirm it remains visible when its difficulty, coding-language, and
    topic filters are selected.
13. Report any external-account requirement, untested hardware dependency, or
    deferred interactive-editor work plainly.

## Revise workflow

1. Read the complete target workshop and the relevant authoring guides.
2. Identify the requested behavior or learning change and all affected pages,
   assets, answers, and navigation.
3. Make a coherent update across student instructions and the answer key.
4. Preserve valid links, translations, and established story details that are
   outside the requested scope.
5. Run the same code, validator, Hugo, and browser checks required for creation.

## Review workflow

1. Run `python tools/validate-workshop.py WORKSHOP_PATH`.
2. Read the workshop as a student from beginning to end.
3. Map every challenge to its answer-key solution.
4. Execute code examples and meaningful branches.
5. Build Hugo and inspect the rendered pages.
6. Report only actionable issues. Separate publication blockers from
   improvements and existing `TODO-IDE-Replace` warnings.

## Content requirements

- Use a warm, encouraging tone without talking down to students.
- Define technical terms before relying on them.
- Keep instructions self-contained and usable without a teacher.
- Keep code focused; split examples that become difficult to scan.
- Include a challenge and useful hint in each activity.
- Map every challenge to a solution in `answer-key.md`.
- Include descriptive alt text for instructional images.
- Use valid Hugo frontmatter and intentional navigation weights.
- Ensure `_index.md` contains `hidden: false` plus canonical `language`,
  `topics`, and `difficulties` metadata so the workshop appears in the
  Workshops tab and responds to all three filters.
- Do not leave scaffold placeholders, fake URLs, or untested code.

## Boundaries and safe behavior

- Do not copy lesson text or artwork from another workshop. Existing workshops
  are structural and pedagogical references only.
- Do not introduce copyrighted media, secrets, student personal data, or
  unreviewed external scripts.
- Do not silently replace the requested coding language, delivery format, or
  learning outcomes because a preferred tool is unavailable.
- Do not install system-wide dependencies or create hosted-service accounts
  without user approval.
- Do not delete or rewrite an existing workshop during a create workflow.
- Do not treat a failed validation step as success or hide it behind a
  generated fallback.

## Failure handling

- If a required tool is unavailable, state which check cannot run and what is
  needed to enable it.
- If scaffolding reports an existing target directory, stop and preserve it.
- If example code fails, fix the code or instructions before continuing.
- If Hugo fails, resolve errors caused by the workshop. Report unrelated
  pre-existing failures separately.
- If browser or hardware testing is unavailable, provide the exact manual test
  still required.
- If an external editor or link is unavailable, do not invent a replacement
  URL. Mark the integration work explicitly.

## Completion standard

A workshop is complete only when its code runs, its local assets resolve, the
validator passes, Hugo builds successfully, and its card appears under the
expected Workshops tab filters. If browser or hardware validation cannot be
automated, document the exact remaining manual check instead of claiming full
validation.

Report completion with:

- Workshop path
- Student outcome and activity count
- Execution environment and delivery format
- Validation commands completed
- Any warnings or manual checks still open

## References

- Intake questionnaire: `WORKSHOP-BRIEF.md`
- Scaffold: `tools/new-workshop.py`
- Validator: `tools/validate-workshop.py`
- Contributor workflow: `content/english/guidelines/new-workshops.md`
