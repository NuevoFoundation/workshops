# Workshop brief questionnaire

Collect these answers before planning or creating a workshop. Ask all missing
questions together.

## Required questions

1. **Workshop topic and title**
   - What should students build or learn?
   - Example: `Python: Build a Weather Assistant`

2. **Student age range**
   - Example: `Ages 10–13`

3. **Target duration**
   - Suggested choices: `20 minutes`, `45 minutes`, `90 minutes`, `2 hours`,
     or `half day`

4. **Previous coding experience**
   - What coding experience should students have before the workshop?
   - Suggested choices: `None`, `Some exposure`, `Comfortable with the basics`,
     or a specific prerequisite skill
   - Default: `None`
   - The skill maps this answer and the lesson complexity to one Workshops tab
     difficulty tag: `beginner`, `intermediate`, or `advanced`.
   - Typical mapping: no experience or basic block coding → `beginner`;
     comfortable with variables, loops, and functions → `intermediate`;
     independent projects or advanced language concepts → `advanced`.

5. **Learning outcomes**
   - List two to five specific skills students should demonstrate by the end.
   - Example: `variables, input, if statements`

6. **Coding language**
   - Which programming language or coding platform should the workshop use?
   - Choose a value represented by the canonical `languages` list in
     `data/taxonomy.yaml`.
   - Current mappings include Scratch/block coding → `blocks`, Python →
     `python`, JavaScript → `javascript`, Java → `java`, C# → `csharp`, C++ →
     `cpp`, C → `c`, HTML/CSS → `html-css`, SQL → `sql`, Kusto → `kusto`,
     Arduino → `arduino`, Linux/shell → `linux`, and conceptual activities →
     `no-code`.

7. **Workshop topic tags**
   - Choose one or more values from the canonical `topics` list in
     `data/taxonomy.yaml`.
   - Current options: `programming-basics`, `games`, `web`, `ai`,
     `cybersecurity`, `data`, `hardware`, `music`, `graphics`, `mobile`,
     `engineering`, or `tools`
   - Do not invent a new topic tag. If none fits, resolve the classification
     with the user before scaffolding.

8. **Delivery format**
   - Choices: `In-person` or `Virtual`

9. **Number of activities**
   - Enter a whole number from `1` to `25`, or answer `choose for me`.
   - The skill must honor the requested number even when it is likely to take
     longer than the target duration.

## Creative and delivery questions

10. **Story or theme**
   - What character, setting, or mission should connect the activities?
   - The user may answer `choose for me`.

11. **Special requirements or exclusions**
   - Examples: accessibility needs, required platform, prohibited external
     services, hardware constraints, or topics to avoid.
   - Default: `None`

Workshop content defaults to English unless the user explicitly requests a
translation under special requirements.

## Activity-duration estimate

Use this as planning guidance, not as a hard limit:

- Allow approximately 5–10 minutes for the introduction and setup.
- Allow approximately 10–15 minutes per hands-on activity.
- Add time for account setup, downloads, hardware, or complex debugging when
  those are required.
- Virtual workshops may need extra time for navigation and technical support.

When the requested activity count likely exceeds the target duration, show a
warning before the normalized brief:

```text
Time warning: 6 activities are estimated to take approximately 65–100 minutes,
which may exceed the requested 45 minutes. A 45-minute workshop would usually
fit 3 activities. I will keep all 6 requested activities.
```

The warning is informational. Continue with the requested activity count
without asking the user to approve it again. Never silently reduce the count.

If the user answers `choose for me`, select an activity count that fits the
duration, student experience, learning outcomes, and delivery format.

## Confirmation

Before creating files, summarize the normalized brief in this format:

```text
Title:
Topic:
Age range:
Duration:
Previous coding experience:
Learning outcomes:
Coding language:
Workshop tab difficulty tag:
Workshop tab language tag:
Workshop tab topic tags:
Delivery format:
Activities:
Story/theme:
Special requirements:
```

If an answer is ambiguous or conflicts with another answer, resolve that
specific issue before scaffolding. Otherwise proceed without requesting a
second confirmation.
