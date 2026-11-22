---
title: "Instructor guide"
hidden: true
weight: 21
draft: false
---

Students (ages 10–18, no React needed) build a small React app on a trip to Costa Rica with Sharky: they save turtles (state), clean a beach (a list in state, `filter`, `map`) and rescue sloths (components and props). Everyone opens the same StackBlitz starter: nothing to install, `App.jsx` already wired up, and each file has numbered `TODO` comments. For each TODO, the slide shows the code that's already there and asks a question. The room works out the missing code together, with clues you reveal one at a time if they get stuck. Then a student dictates it while you type it, everyone types it, you check thumbs, and you move on. About 75 minutes, hard stop at 90. The same pages work self-paced, and every activity ends with the complete file, so nobody stays behind for long.

## Links

- **Student pages:** [Get started](../get-started/) · [Activity 1](../activity-1/) · [Activity 2](../activity-2/) · [Activity 3](../activity-3/) · [You did it!](../finish/) · [Bonus 1](../bonus-1/) · [Bonus 2](../bonus-2/). Public address: `workshops.nuevofoundation.org/aventura-react`
- **Slides:** [../slides/](../slides/). Press **S** for speaker view (allow pop-ups). Every slide's notes have the timing, what to say or ask, a check-in and the mistakes to watch for. On the 🔍 slides, the notes also have the answer, which is never on the slide.
- **Starter (what students open):** [StackBlitz starter](https://stackblitz.com/github/NuevoFoundation/workshops/tree/master/workshopcode/english/aventura-react?file=src%2Fcomponents%2FTurtles.jsx)
- **Finished app (to demo):** [StackBlitz finished app](https://stackblitz.com/github/NuevoFoundation/workshops/tree/master/workshopcode/english/aventura-react-solution?file=src%2FApp.jsx)
- **Answer key:** [../answer-key/](../answer-key/)

## Before the session

- **The day before, test on the real venue laptops and network.** Open the starter link and wait for the app to appear on the right (the first load installs packages, which takes a minute or two). Then click "Save a turtle". StackBlitz needs a recent Chrome, Edge or Firefox, and school networks sometimes block it. If it fails, ask IT to allow StackBlitz, or bring a hotspot.
- **Decide how students get the link.** Send them to the Get started page, or paste the starter link into the chat. Tell them to open it **once** and keep that **one tab** all session. Opening the link again starts a fresh, empty copy.
- **Do the three activities yourself once** in the starter (about 20 minutes), so you know where every TODO is.
- **Open your tabs:** the slides (press **S**), your own starter, the finished app (you demo it on slide 4) and the Activity 1–3 pages (to show the "Stuck?" fold-out).
- **Zoom in your editor** so the back row can read your code.
- **Brief your helpers** on the common errors table below.

## Timing

| Part | Slides | Minutes | Be here by |
|---|---|---|---|
| Welcome, story, open the starter | 1–8 | 10 | 0:10 |
| Activity 1: Save the turtles (`Turtles.jsx`, state) | 9–16 | 20 | 0:30 |
| Activity 2: Clean the beach (`Beach.jsx`, lists, `filter`, `map`) | 17–23 | 20 | 0:50 |
| Activity 3: Rescue the sloths (`Sloths.jsx`, components, props) | 24–31 | 20 | 1:10 |
| Wrap-up and bonus pages | 32–34 | 5 | 1:15 |
| Buffer for setup trouble and questions | | up to 15 | 1:30 hard stop |

Each speaker note starts with a cue like `[3 min, 0:17 elapsed]`: the minutes for that slide, and where you should be when you leave it. If you are more than 5 minutes behind, see "If you're short on time" below.

## How to run the discussions

The slides never hand out the code. Each concept slide (state, lists, components, props) teaches the idea with an analogy: scoreboard, backpack, cookie cutter. Then a 🔍 slide shows the code that's already in the file and asks the room to work out what's missing. Use the same rhythm for every 🔍 slide:

1. **Ask the question on the slide.** Give the room about 30 seconds to talk it over with a neighbor, then take 2 or 3 answers. Wrong answers are welcome: "What would happen if we tried that?" keeps the discussion going.
2. **Reveal clues only when they're stuck.** Press → to show the next clue, about every 30 seconds of silence. The clues go from a nudge to a fill-in-the-blank. As soon as someone has it, skip the rest: **Alt+→** (Option+→ on a Mac) goes to the next slide without showing the remaining clues.
3. **Build it together.** A student dictates the code while you type it in your StackBlitz on the projector. Say the brackets out loud. The answer is in the speaker notes, in case the room lands on something else that also works.
4. **Everyone types it.** Then the thumbs-up check ("thumbs up when your counter goes up"). Look for the missing thumbs.
5. **Move on.** Never wait more than about 2 minutes for one student. Stragglers (or a helper) open **Stuck? Show the complete file** at the bottom of the activity page, copy it, click in their file, select all (Ctrl+A) and paste. They're caught up. The "Not working?" list on each page covers the usual mistakes.

The activity pages still show every step's code, so students working alone at home can follow along. During the session, ask students to keep the activity page closed and open it only for **Stuck?** when they fall behind.

Things to say ahead of time:

- **Beach:** nothing shows up until TODO 3, and then everything works at once. This is normal.
- **Some code is already written:** the `? :` in `Turtles.jsx`, and `rescued` plus `rescue` in `Sloths.jsx`. Explain it, but students don't type it.
- **The editor may add closing brackets and quotes for you.** Watch for doubled `))` or `}}`.
- **Never reload the browser tab or click the starter link again.** If a change doesn't show up on the right, press Ctrl+S (Cmd+S on a Mac) to save the file.

## Mixed ages (10–18)

- **Younger students (10–12):** pair them up. They answer each 🔍 question together, one types, and they swap each activity. Praise good guesses, not only right answers. They don't need to understand every symbol.
- **Older or faster students:** ask them to hold their answer for 30 seconds so others get a chance to think, then call on them to explain *why* it works. Give them the **Your turn** challenge at the end of each activity, then the bonus pages (Coffee farm, then Arenal volcano, which has fewer hints). Ask them to help a neighbor by explaining, not typing. The notes have extra questions for them ("explain `?` and `:`").
- Don't slow the room down for the fastest or the slowest student. The pages let everyone go at their own speed.

## Common errors

The code mistakes below were tested in the starter project. Messages marked "console" only show in the browser console (**F12 → Console**). The app itself just looks wrong. The student pages call Vite's error overlay (red writing over the app) "the error box", so use the same words.

| What the student sees | Cause | Fix |
|---|---|---|
| Error box over the app: "Unexpected token" with a file and line number | Missing `)`, `}`, `]` or `"` | Check that line and the few lines above it. If a `}` is missing, the line number often points at the end of the file. Compare with the page. |
| Error box: "'return' outside of function" | An extra `}`, often because the editor auto-closed a bracket and the student typed one too | Delete the extra `}`. Compare with the complete file on the page. |
| Error box: "Identifier 'turtles' has already been declared" | Typed the new TODO 1 line but kept `const turtles = 0;` | Delete the old line. |
| Error box in the trash list: "Unexpected token, expected ','" | Beach TODO 1: forgot the `)` in `]);`, or deleted a quote or comma | The list's last line must be `]);` and every item needs quotes and a comma |
| Whole app goes white, no error box | Code that breaks while running: `usestate`, `{Name}`, lines typed outside a function's `{ }`, a missing `{ }` around `trash.map(...)` | Ctrl+Z. The console says what's wrong, e.g. "usestate is not defined", "Too many re-renders" or "item is not defined". |
| Counter jumps to 10 by itself and Restart mission does nothing | The TODO 2 `if` was typed below `};`, outside `saveTurtle` | Move those lines inside the `{ }` of `saveTurtle`. |
| Turtle counter stays at 0 | TODO 2 not done (`saveTurtle` is empty), or a TODO 1 typo (console: "setTurtles is not defined") | Do TODO 2. Check `setTurtles` has a capital T in both places. |
| "Restart mission" does nothing | TODO 3 not done, typed inside `saveTurtle`, or `setTurtles = 0` | `setTurtles(0);` inside `restart`. |
| Nothing on the beach | TODO 3 not done yet. That's normal. | Do TODO 3. If TODO 3 is done: they used `{ }` after `=>` instead of `( )`. |
| "The beach is clean!" right away, no buttons | `onClick={pickUp(item)}` | `onClick={() => pickUp(item)}` |
| Clicking trash does nothing | TODO 2 not done, or TODO 1 not done (console: "setTrash is not defined") | Finish TODO 1 and TODO 2. |
| Clicking one piece removes all the others | `===` instead of `!==` in `filter` | `t !== item` |
| The card shows `))}` as text, no error | The editor auto-closed `{trash.map((item) => (` and the student typed `))}` too (same in Sloths) | Delete one `))}`. |
| Every button says "Pick up item" | Missing curly brackets | `Pick up {item}` |
| Sloth card says "🦥 name" | Missing curly brackets | `<h3>🦥 {name}</h3>` |
| 5 sloth cards, Mau twice | Kept the hard-coded `<Sloth name="Mau" … />` line | Delete it. |
| No sloth cards at all, no error | `<sloth` with a small s | `<Sloth` |
| Rescue never turns the card green | `rescued.includes("name")` with quotes | `rescued.includes(name)` |
| Console: "Each child in a list should have a unique key prop" | Forgot `key=` | The app still works. Add the `key`. |
| Bonus doesn't appear / app white / `/*` shows as text | Only uncommented the import (nothing shows), only the tag (white, "CoffeeFarm is not defined"), or left the `/* */` | Remove the `//` on the import **and** the whole `{/* */}` around the tag. |
| Student sees the empty starter again | Clicked the starter link again or opened a new tab | Go back to the old tab. If it's gone, paste the complete files from the "Stuck?" sections. |
| A change doesn't show up | The file isn't saved yet | Ctrl+S (Cmd+S on a Mac). |
| Right side stays empty | First load is still installing, or StackBlitz is blocked or the browser is too old | Wait 1–2 minutes. Then pair the student with a neighbor. |

## If you're short on time

- **A few minutes behind:** on the 🔍 slides, reveal the clues sooner, after about 15 seconds instead of 30.
- **First cut:** Activity 3's **Your turn** (slide 31), then the other Your turn slides. Students can do them at home.
- **Behind by 10 minutes or more:** demo Activity 3 instead of coding along. You type it while they watch, then they paste the complete `Sloths.jsx` from the page's "Stuck?" fold-out and click Rescue.
- **Way behind (setup trouble):** finish Activity 2, show the finished app, and do the wrap-up. Activity 3 and the bonus pages work self-paced at home.
- **Never cut the wrap-up.** Ending on "you built a real React app" is the point of the session.
- **Extra time?** Fast finishers start Bonus 1 (Coffee farm). The volcano is a practice round with fewer hints.
