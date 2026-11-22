---
title: "Slides"
type: "slide"
hidden: true
weight: 22
---

# React: Costa Rica Adventure

<img src="../media/Sharky.png" alt="Sharky, a smiling orange shark" width="25%">

Build your first **React** app on a trip to Costa Rica 🇨🇷

Note:
**[1 min, 0:01 elapsed]** (The time is where you should be when you leave this slide.)

- **Say:** "Hi everyone! Today we're going on a trip to Costa Rica, and we'll build a real app with React while we travel. You don't need to know any React. If you can type and click, you can do this."
- **Do:** Introduce yourself and your helpers. Have the finished app open in another tab, ready for slide 4.
- **Check-in:** "Raise your hand if you have ever made a website or a game." (Tells you who might go fast.)
- **Watch for:** Nobody types yet. Ask everyone to have a browser open (Chrome, Edge or Firefox).

---

## You won a trip to Costa Rica!

<img src="../media/mapa-costa-rica.jpg" alt="Colorful illustrated map of Costa Rica between the Pacific Ocean and the Caribbean Sea" width="22%">

Your guide: **Sharky**, the orange shark 🦈

Note:
**[1 min, 0:02 elapsed]**

- **Say:** "Congratulations, you just won a trip to Costa Rica! It's a small country in Central America with beaches on two oceans. It's tiny, but about 5 out of every 100 kinds of plants and animals on Earth live there. Our guide is Sharky, a very unusual shark that fishermen found in Costa Rica's waters. An orange shark! We have three stops: turtles, a beach and sloths."
- **Check-in:** "Who can name an animal that lives in Costa Rica?" Take one or two answers, then move on.
- **Watch for:** This slide is only one minute. Don't let the chat run long; the next slide takes time.

---

## Open your starter project — now!

1. Go to **workshops.nuevofoundation.org/aventura-react**
2. Click [**Get your starter project**](../get-started/)
3. Click the big link. It opens **StackBlitz**
4. ⭐ **Keep this ONE tab open all workshop**

Note:
**[2 min, 0:04 elapsed]**

- **Say:** "Let's open our project first, because it takes a minute to load. Go to the workshop page, click 'Get your starter project', then click the big link. It opens a website called StackBlitz. You don't need an account. Very important: keep this ONE tab open the whole time. Don't click the start link again. It gives you a brand-new empty copy, and your work stays in the old tab."
- **Do:** Open it yourself on the projector so they see what to expect. If you have a chat, paste the direct link: https://stackblitz.com/github/NuevoFoundation/workshops/tree/master/workshopcode/english/aventura-react?file=src%2Fcomponents%2FTurtles.jsx
- **Check-in:** "Thumbs up when you see code on your screen. It's OK if the right side is still loading."
- **Watch for:** (1) The first load installs things and can take a minute or two. Tell them to wait, not to click again. (2) A laptop where StackBlitz won't open (old browser, blocked network): pair that student with a neighbor right away. Don't debug it now.

---

## What we'll build today

<img src="../media/finished-app.png" alt="The finished Costa Rica Adventure app with the turtle game, the beach cleanup and the sloth rescue" width="45%">

🐢 Save turtles · 🏖️ Clean a beach · 🦥 Rescue sloths

Note:
**[1 min, 0:05 elapsed]**

- **Say:** "While your project loads, here's where we're going. Your app will have three parts: a turtle game with a counter, a beach where you click the trash to pick it up, and sloth cards you can rescue. Right now the buttons don't work. You will turn on every part yourself."
- **Do:** Show the finished app live in your other tab and click a few buttons (20 seconds). Moving buttons are more exciting than a picture. Finished app: https://stackblitz.com/github/NuevoFoundation/workshops/tree/master/workshopcode/english/aventura-react-solution?file=src%2FApp.jsx
- **Check-in:** "Thumbs up if your StackBlitz has loaded."
- **Watch for:** Students who closed the tab or opened two tabs. Help them end up with exactly one.

---

## What is React?

<img src="../media/React.png" alt="Sharky next to the blue React logo" width="22%">

- React helps us build apps out of **pieces**
- Each piece is a **component**, like a LEGO brick 🧱
- Snap the pieces together → a whole app!

Note:
**[2 min, 0:07 elapsed]**

- **Say:** "React is a tool for building apps. It was made at Facebook, and apps like Instagram use it. Imagine a big box of LEGO. Each brick has one job: one brick is a button, one is a counter, one is a card. In React, each brick is called a component. You build small components, then snap them together to make the whole app."
- **Check-in:** "In your own words: what is a component?" (A piece of the app.)
- **Watch for:** Older students asking about HTML or JavaScript. One sentence is enough: "React is JavaScript. The parts that look like HTML are called JSX."

---

## Find your way around

<img src="../media/start-app.png" alt="The starter app: Tortuguero, Beach Cleanup and Sloth Rescue, before any code is added" width="30%">

- **Left:** files · **Middle:** code · **Right:** your app
- You change 3 files: `Turtles.jsx`, `Beach.jsx`, `Sloths.jsx`
- Look for the comments that say `TODO`

Note:
**[1 min, 0:08 elapsed]**

- **Say:** "StackBlitz has three parts. On the left, the list of files. In the middle, the code. On the right, your app running. When you change the code, the app on the right changes by itself. In the code you'll see comments that start with TODO. TODO means 'to do'. Each TODO turns on one thing."
- **Do:** Point at the three areas on the projector. Click "Save a turtle" to show that nothing happens yet.
- **Check-in:** "Thumbs up if you can see 'Tortuguero National Park' on the right side."
- **Watch for:** An empty right side means it is still installing. Wait 30 seconds. Never click the start link again or reload the tab. Later, if a change doesn't show up on the right, press Ctrl+S (Cmd+S on a Mac) to save the file.

---

## Our app is made of components

```jsx
export default function App() {
  return (
    <div className="App">
      <h1>My Costa Rica Adventure</h1>

      <Turtles />
      <Beach />
      <Sloths />
```

Note:
**[1 min, 0:09 elapsed]**

- **Say:** "This is App.jsx, the box that holds all our LEGO bricks. See `<Turtles />`, `<Beach />` and `<Sloths />`? Each one is a component, and each one lives in its own file in the components folder. They're already snapped in for you, so you don't change this file today."
- **Do:** Click `App.jsx` in the file list so they see the real file, then click back to `Turtles.jsx` (it is in `src`, then `components`).
- **Check-in:** "Thumbs up when you have Turtles.jsx open."
- **Watch for:** Students typing in App.jsx. If they changed it by accident: Ctrl+Z (Cmd+Z on a Mac) until it's back.

---

## If something breaks

- 🟥 **Error box?** Read the line number. Look for a missing `)` `}` or `"`
- ⬜ **White app?** Press **Ctrl+Z** to undo your last change
- 😕 **Behind?** Open **Stuck? Show the complete file** on the page
- ✋ Still stuck? Raise your hand!

Note:
**[1 min, 0:10 elapsed]**

- **Say:** "Everybody's code breaks, even professional programmers', every day. While you're in the middle of typing, your app may go blank or show the error box for a moment, and that's normal: it goes away when you finish typing. If the error box is still there after you finish, it tells you the file and the line. Usually a bracket or a quote is missing. If the whole app goes white, undo your last change. And if you fall behind, no problem: every activity page has a part called 'Stuck?' with the complete file. Copy it, paste it over your whole file, and you're caught up."
- **Do:** Show the Activity 1 page and scroll to "Stuck? Show the complete file". Open it so they see what it looks like. Point out "Not working?" just below it: a short list of the most common mistakes for that activity.
- **Check-in:** "Thumbs up if you know where to find 'Stuck?'."
- **Watch for:** Nervous kids. Tell them they can't break the computer, and the complete file always fixes their file. Tip for you: the line number in the error box is where the computer got confused. The real mistake is often a few lines above it.

---

## Activity 1: Save the turtles 🐢

<img src="../media/Tortuga.png" alt="Sharky looking surprised next to a turtle shell" width="25%">

- Thousands of sea turtles lay eggs at **Tortuguero** every year
- Open `src/components/Turtles.jsx`
- 🔍 on a slide = let's figure it out together · 💡 = a clue

Note:
**[2 min, 0:12 elapsed]**

- **Say:** "First stop: Tortuguero National Park, on the Caribbean coast. Every year thousands of green sea turtles crawl onto this beach to lay their eggs. Our mission: save 10 turtles! Open the file Turtles.jsx. When you see the magnifying glass on a slide, I won't tell you the code. We'll look at the code that's already there and figure out the missing piece together. If we get stuck, I have clues."
- **Do:** Make your editor font bigger (Ctrl and +) so the back row can read your code. Keep the Activity 1 page open in another tab for the "Stuck?" part.
- **Check-in:** "Thumbs up when you see `TODO 1` in your file."
- **Watch for:** Students in the wrong file. Look at the file name on the tab above their code.

---

## State = React's memory 🧠

- A normal variable: React **doesn't notice** when it changes
- A **state** variable: React remembers it **and** redraws the screen
- Like a scoreboard: the score changes → everyone sees it

Note:
**[2 min, 0:14 elapsed]**

- **Say:** "Right now the turtle counter is a normal number: `const turtles = 0;`. It's stuck at 0 forever. We need React to remember the number and update the screen when it changes. That's called state. Think of a scoreboard at a soccer game: when a team scores, someone presses a button and the big screen shows the new score. State is the scoreboard. The set function is the button."
- **Do:** No typing yet. Point at `const turtles = 0;` in your file.
- **Check-in:** "In one word, what is state?" (Memory!)
- **Watch for:** Students who start typing early. That's fine if they type the right line.

---

## 🔍 TODO 1: Why is it stuck at 0?

```jsx
  const turtles = 0;
```

🗣️ What kind of variable is `turtles`? What does React need instead?

<div class="fragment clue">

💡 Look at the very first line of the file. Which React tool is waiting there?

</div>

<div class="fragment clue">

💡 `useState` gives you **two** things: the value, and a function that changes it. That function's name starts with `set`

</div>

<div class="fragment clue">

💡 Fill in the blanks:

```jsx
  const [turtles, set_______] = useState(___);
```

</div>

Note:
**[4 min, 0:18 elapsed]**

- **Ask:** "Click Save a turtle. Nothing happens, and that's on purpose. Using what we just learned: what kind of variable is `turtles`? What does React need instead?" Give them 30 seconds to talk with a neighbor, then take 2 or 3 answers. You're listening for "it's a normal variable" and "it needs to be state".
- **Clues:** Press → to reveal one clue at a time, only when the room has been stuck for about 30 seconds. Stop revealing as soon as someone has it.
- **Build it together:** When a student has the line, ask them to dictate it while you type it in your StackBlitz, saying each piece out loud. Then everyone types it.
- **Answer (keep it off the slide):** `const [turtles, setTurtles] = useState(0);` replaces `const turtles = 0;`. `turtles` is the number React remembers, `setTurtles` is the scoreboard button that changes it, and `0` is where it starts.
- **Say:** "Nothing changes on the screen yet. That's OK! We gave React a memory, but we don't use it yet."
- **Check-in:** "Thumbs up when your line matches mine and the app still says 0 of 10."
- **Watch for:** (1) Kept the old line and added the new one → error box "Identifier 'turtles' has already been declared". Delete the old line. (2) `usestate` with a small s → the whole app goes white. Capital letters matter. (3) Round brackets instead of square ones around `turtles, setTurtles`.

---

## 🔍 TODO 2: What should a click do?

```jsx
  const saveTurtle = () => {

  };
```

🗣️ This runs on every click of **Save a turtle**. What should happen? Should we ever reach 11?

<div class="fragment clue">

💡 Which of our two names **changes** the number: `turtles` or `setTurtles`?

</div>

<div class="fragment clue">

💡 New number = old number **+ 1**, but only **if** we have fewer than `total`. `<` means "less than"

</div>

<div class="fragment clue">

💡 Fill in the blanks:

```jsx
    if (turtles ___ total) {
      setTurtles(___________);
    }
```

</div>

Note:
**[5 min, 0:23 elapsed]**

- **Ask:** "`saveTurtle` is a function: a little list of instructions that runs every time someone clicks. Right now the list is empty. What should happen when you click?" (The number goes up by one.) "And should we be able to save 11 turtles out of 10?" (No! We need to stop at `total`.)
- **Clues:** One at a time, only when the room is stuck. The first clue connects back to TODO 1: `setTurtles` is the scoreboard button.
- **Build it together:** Let one student dictate the `if` line and another the `setTurtles` line while you type them on the projector. Point out that the editor sometimes adds the closing `}` or `)` for you, so check you don't end up with two.
- **Answer (keep it off the slide):** inside `saveTurtle`: `if (turtles < total) { setTurtles(turtles + 1); }`
- **Check-in:** "Click 'Save a turtle' a few times. Thumbs up when your counter goes up!"
- **Watch for:** (1) Lines typed below the `};` instead of inside the `{ }` → either the app goes white (the console says "Too many re-renders") or the counter jumps straight to 10 by itself. Move them inside. (2) A missing `}` → error box "Unexpected token", often pointing at the last line of the file. Check the braces you just typed. (3) Counter doesn't move and no error box → a typo in TODO 1 like `setturtles`; the console (F12) says "setTurtles is not defined".
- **Catch-up:** "If you're behind, open 'Stuck? Show the complete file' on the Activity 1 page."

---

## What happens at 10?

```jsx
      {turtles < total ? (
        <button onClick={saveTurtle}>Save a turtle</button>
      ) : (
        <>
          <p className="success">All the turtles are safe!</p>
          <button onClick={restart}>Restart mission</button>
        </>
      )}
```

Note:
**[2 min, 0:25 elapsed]**

- **Say:** "This part is already written. You don't type it. It asks a question: is `turtles` less than `total`? The `?` means 'if yes, show this'. The `:` means 'if not, show that'. So while you have fewer than 10, you see the 'Save a turtle' button. At 10, you see 'All the turtles are safe!' and a 'Restart mission' button. The `<>` and `</>` are an invisible box that holds two things together."
- **Do:** Click "Save a turtle" until 10 on your screen so they see the message appear.
- **Check-in:** "Click until you reach 10. Thumbs up when you see 'All the turtles are safe!'. Now click Restart mission. Does it work?" (No! That's TODO 3.)
- **Watch for:** Students editing this code. Remind them it's already done. Fast students: ask them to explain `?` and `:` to a neighbor.

---

## 🔍 TODO 3: Start the mission again

```jsx
  const restart = () => {

  };
```

🗣️ What number should the counter go back to? Which function can change it?

<div class="fragment clue">

💡 You already used the function that changes `turtles` in TODO 2

</div>

<div class="fragment clue">

💡 This time we don't add anything, and we don't need an `if`. We just give it the starting number

</div>

<div class="fragment clue">

💡 Fill in the blanks:

```jsx
    set_______(___);
```

</div>

Note:
**[3 min, 0:28 elapsed]**

- **Ask:** "Restart should put the counter back. Back to what number?" (0.) "Which function changes the turtles number?" (`setTurtles`!) This one is short: most rooms get it before the second clue. Let a student who hasn't spoken yet answer.
- **Build it together:** One student dictates the line while you type it inside `restart`.
- **Answer (keep it off the slide):** `setTurtles(0);` inside `restart`.
- **Tip:** "Tired of clicking 10 times? Change `const total = 10;` to `const total = 3;` to test faster."
- **Check-in:** "Get to the end and click Restart mission. Thumbs up when you're back at 0!"
- **Watch for:** (1) `setTurtles(0);` typed inside `saveTurtle` instead of `restart` → the counter stops going up. (2) `setTurtles = 0` instead of `setTurtles(0)` → Restart does nothing. It needs round brackets.

---

## Checkpoint ✅

<img src="../media/checkpoint-turtles.png" alt="The Tortuguero card in the middle of the game, showing You have saved 3 of 10 turtles" width="40%">

- **Save a turtle** → the number goes up
- At the end → **All the turtles are safe!**
- **Restart mission** → back to 0

Note:
**[1 min, 0:29 elapsed]**

- **Say:** "Let's test the whole thing. Click Save a turtle, get to the end, click Restart."
- **Do:** Walk around (or ask your helpers to) and look at screens.
- **Check-in:** "Thumbs up if all three things work. Thumbs sideways if something doesn't."
- **Catch-up:** Thumbs sideways → open the Activity 1 page, "Stuck? Show the complete file", copy it, click in Turtles.jsx, select everything (Ctrl+A), paste. Don't wait more than 2 minutes for one student. Helpers keep fixing while you move on.
- **Watch for:** Students who changed `total` to 3. That's fine; it's their game.

---

## Your turn ✨

```jsx
  const total = 10;
```

- Change 10 to any number. What changes on the screen?
- Behind? Open **Stuck? Show the complete file**

Note:
**[1 min, 0:30 elapsed]**

- **Say:** "Your turn: change the total to any number you like: 5, 20, 100. Watch the sentence on the right. It says 'of 20 turtles' by itself. You changed ONE number, and React updated everything that uses it."
- **Check-in:** "Shout out your number!"
- **Extra (on the page):** change the words on the button too, like `Save a baby turtle 🐢`.
- **Recap before moving on:** "In Activity 1 you learned state. `useState` gives React a memory, and `setTurtles` changes it."
- **Watch for:** A total of 0 shows 'All the turtles are safe!' right away. That's not a bug: 0 is not less than 0. Fun to explain to older students.

---

## Activity 2: Clean the beach 🏖️

<img src="../media/Playa.png" alt="Sharky watching three people pick up trash on a beach" width="35%">

- Costa Rica has beaches on **two oceans**
- Trash on the beach can end up in the sea
- Open `src/components/Beach.jsx`

Note:
**[2 min, 0:32 elapsed]**

- **Say:** "Next stop: the beach! Costa Rica has beaches on the Pacific Ocean and on the Caribbean Sea. Trash left on the beach can wash into the sea, and a sea turtle can mistake a plastic bag for a jellyfish and eat it. Let's clean up! Open Beach.jsx."
- **Check-in:** "Thumbs up when you have Beach.jsx open and you see TODO 1."
- **Watch for:** Students still in Turtles.jsx typing beach code there. Check the file name on the tab.

---

## A list in state 📋

```jsx
  const trash = [
    "🧃 Plastic bottle",
    "🍾 Glass",
    "🥫 Can",
    "📄 Paper",
  ];
```

- `[ ]` with commas = a **list** (an array)
- This time React must remember a whole list

Note:
**[2 min, 0:34 elapsed]**

- **Say:** "Square brackets with things inside, separated by commas, make a list. In code it's called an array. Our beach has 4 pieces of trash. When we pick one up, the list gets shorter, so React has to remember the list, just like it remembered the turtle number. Same trick as Activity 1!"
- **Say:** "Heads up: on this beach, nothing shows up until the last step. That's normal."
- **Check-in:** "How many pieces of trash are in the list?" (4)
- **Watch for:** Nothing to type yet.

---

## 🔍 TODO 1: Remember a whole list

```jsx
  const trash = [
    "🧃 Plastic bottle", … ,
  ];
```

🗣️ Picking up trash will change this list. How did we make React remember the turtles?

<div class="fragment clue">

💡 Same trick as Activity 1: `useState`, plus a function whose name starts with `set`

</div>

<div class="fragment clue">

💡 The trash in the middle stays the same. Only the **first** and the **last** line change. The whole list goes inside `useState( )`, where the `0` was

</div>

<div class="fragment clue">

💡 Fill in the blanks:

```jsx
  const [trash, ________] = useState([
    "🧃 Plastic bottle", … ,
  ]___;
```

</div>

Note:
**[4 min, 0:38 elapsed]**

- **Ask:** "When we pick up a piece of trash, the list gets shorter. So React has to remember this list. How did we make React remember the turtles?" (`useState`!) "What will we call the function that changes `trash`?" (`setTrash`.)
- **Clues:** One at a time. The tricky part isn't the idea, it's the brackets: the list keeps its `[ ]`, and it goes inside `useState( )`.
- **Build it together:** A student dictates the first line, another the last line, while you edit only those two lines. Don't retype the emoji.
- **Answer (keep it off the slide):** first line `const [trash, setTrash] = useState([`, last line `]);`. The four pieces of trash in the middle don't change.
- **Say:** "Nothing changes on screen yet. That's OK."
- **Check-in:** "Thumbs up when your list ends with `]);`."
- **Watch for:** (1) Forgot the `)` at the end → error box "Unexpected token, expected ','". (2) Deleted a quote or a comma between the items → error box. (3) `settrash` with a small t.

---

## 🔍 TODO 2: Pick it up!

```jsx
  const pickUp = (item) => {

  };
```

🗣️ `item` is the piece you clicked. What should the new list be? Which function saves it?

<div class="fragment clue">

💡 The new list = every piece of trash **except** the one you clicked

</div>

<div class="fragment clue">

💡 `filter` keeps only the items that pass a test. `!==` means "is not":

```jsx
["🍎", "🍌", "🍇"].filter((f) => f !== "🍌")
// → ["🍎", "🍇"]
```

</div>

<div class="fragment clue">

💡 Fill in the blanks:

```jsx
    setTrash(trash.filter((t) => t ___ ____));
```

</div>

Note:
**[5 min, 0:43 elapsed]**

- **Ask:** "`pickUp` runs when you click a piece of trash, and `item` is the piece you clicked. Say we click the Glass. What should the list look like after?" (Bottle, Can, Paper: everything except the Glass.) "Which function saves a new list?" (`setTrash`.)
- **Clues:** The second clue introduces `filter` with fruit, not trash, so students still have to make the jump themselves. Analogy: filter is like checking each thing in your backpack and keeping everything that is NOT the thing you want to throw out.
- **Build it together:** Ask "In the fruit example, what was the thing we threw out? What is it here?" (`item`.) A student dictates the line while you type it. At the end, count the brackets out loud: "two round brackets, then a semicolon".
- **Answer (keep it off the slide):** inside `pickUp`: `setTrash(trash.filter((t) => t !== item));`
- **Check-in:** "Thumbs up when you typed it. The beach is still empty. That's normal: the buttons come in TODO 3."
- **Watch for:** (1) `===` instead of `!==` → later, clicking one piece removes all the OTHER pieces. (2) Missing `))` at the end → error box. (3) Typed outside the `{ }` of `pickUp`.

---

## 🔍 TODO 3: One button per piece

```jsx
{/* TODO 3: Make one button for each piece of trash. */}
```

🗣️ How do we get one button for each piece of trash?

<div class="fragment clue">

💡 `map` turns every item of a list into something new, like a button:

```jsx
  {["🍎", "🍌"].map((f) => <p key={f}>I like {f}</p>)}
```

</div>

<div class="fragment clue">

💡 Each button needs a `key` (its name tag), an `onClick` that calls `pickUp` with **its** piece, and the words `Pick up` plus the piece

</div>

<div class="fragment clue">

💡 Fill in the blanks:

```jsx
{trash.map((item) => (
  <button key={____} onClick={() => ______(____)}>
    Pick up {____}
  </button>
))}
```

</div>

Note:
**[5 min, 0:48 elapsed]**

- **Ask:** "We have 4 pieces of trash, so we want 4 buttons. We could write 4 buttons by hand. But what if someone adds a fifth piece? Or 100?" Let them suggest ideas: "a loop", "repeat it", "one for each". Any of those is the right idea. Then: "Each button needs to know three things. What are they?" (Which piece it is, what to do on click, what words to show.)
- **Clues:** The first clue shows `map` with fruit. Analogy: one list goes in, one button per item comes out. The second clue is the checklist for one button. The `() =>` in `onClick` makes it wait for the click; without it, everything is picked up right away.
- **Build it together:** Type the `{trash.map((item) => (` line and its closing `))}` first, then ask the room for each of the three blanks inside the button. Type slowly and say the brackets out loud.
- **Answer (keep it off the slide):** replace the TODO 3 comment with:
  `{trash.map((item) => (<button key={item} onClick={() => pickUp(item)}>Pick up {item}</button>))}` (on 5 lines, as in the third clue).
- **Say:** "Now everything works at once: 4 buttons, and clicking one picks it up!"
- **Check-in:** "Click all the trash. Thumbs up when you see 'The beach is clean!'"
- **Watch for:** (1) Curly brackets `{ }` after the `=>` instead of round ones `( )` → no buttons and no error. (2) `onClick={pickUp(item)}` without `() =>` → it says 'The beach is clean!' right away, with no buttons. (3) Forgot the `{ }` around `trash.map(...)` → the app goes white. (4) Forgot `key` → it works, but there is a warning in the console. Add it anyway.

---

## Checkpoint ✅

<img src="../media/checkpoint-beach.png" alt="The Beach Cleanup card with four Pick up buttons" width="40%">

- 4 buttons, one for each piece of trash
- Click one → it disappears
- All gone → **The beach is clean!**

Note:
**[1 min, 0:49 elapsed]**

- **Say:** "Test it: four buttons, click one and it disappears, click them all and the beach is clean."
- **Do:** Walk around and look at screens.
- **Check-in:** "Thumbs up if it works, thumbs sideways if not."
- **Catch-up:** "If you're behind, open 'Stuck? Show the complete file' on the Activity 2 page, copy it and paste it over all of Beach.jsx." Don't wait more than 2 minutes for one student.
- **Watch for:** Every button says "Pick up item" → they typed `Pick up item` without the curly brackets. It must be `Pick up {item}`.

---

## Your turn ✨

- Add **your own** piece of trash to the list in `useState([ ])`
- Use quotes `" "` and a comma
- Emoji? **Windows key + .** or **Ctrl + Cmd + Space**
- Behind? Open **Stuck? Show the complete file**

Note:
**[1 min, 0:50 elapsed]**

- **Say:** "Add your own piece of trash: an old shoe, a straw, a bag. A new button appears by itself, because `map` makes one button for every item in the list."
- **Show:** Add a new line `"👟 Old shoe",` right after `"📄 Paper",` (before `]);`). Emoji are optional, but the quotes and the comma are not.
- **Check-in:** "Thumbs up when your new button shows up! What did you add?"
- **Recap before moving on:** "In Activity 2 you kept a list in state. `filter` takes things out, and `map` makes one button for each thing."
- **Watch for:** (1) A missing comma or quote → error box. (2) Two items with the same name → both disappear together, and the console warns about two children with the same key.

---

## Activity 3: Rescue the sloths 🦥

<img src="../media/Perezoso.png" alt="A sloth hanging from a branch with a laptop, next to Sharky" width="30%">

- Sloths move so slowly that algae, tiny plant-like living things, grow in their fur!
- Open `src/components/Sloths.jsx`

Note:
**[2 min, 0:52 elapsed]**

- **Say:** "Last stop: the rainforest! Costa Rica has two kinds of sloths: two-toed and three-toed. They move so slowly that tiny plant-like living things called algae grow in their fur, which helps them hide in the trees. Some sloths need our help. Open Sloths.jsx."
- **Check-in:** "Thumbs up when you have Sloths.jsx open."
- **Watch for:** This is the hardest activity. If time is short, see "If you're short on time" in the instructor guide: you can demo this one instead of coding along.

---

## Components inside components 🧩

- `Sloth` (small) = **one** sloth card
- `Sloths` (big) = the whole rescue area
- Make one card, use it many times, like a cookie cutter 🍪

Note:
**[2 min, 0:54 elapsed]**

- **Say:** "Remember the LEGO bricks? This file has two components. The small one, `Sloth` with no s, draws ONE card. The big one, `Sloths` with an s, is the whole rescue area, and it uses the small one. We write the card once and use it as many times as we want, like a cookie cutter: one cutter, lots of cookies."
- **Do:** Scroll through your file and point at `function Sloth` and `export default function Sloths`.
- **Check-in:** "Which one draws one card: Sloth or Sloths?" (Sloth.)
- **Watch for:** Mixing up Sloth and Sloths. One letter, big difference.

---

## Props = info you hand to a component

```jsx
function Sloth({ name, saved, onRescue }) {
```

- `name`: the sloth's name
- `saved`: is it safe yet? (true or false)
- `onRescue`: what to do when you click **Rescue**

Note:
**[2 min, 0:56 elapsed]**

- **Say:** "How does one card know which sloth it is? We hand it information, like giving it a name tag. That information is called props. The Sloth card gets three props: its name, whether it's saved, and what to do when someone clicks Rescue. Look lower down in the file: `<Sloth name="Mau" ... />`. That's where we hand Mau's name to the card."
- **Do:** Point at the line `<Sloth name="Mau" saved={rescued.includes("Mau")} onRescue={rescue} />` in your editor.
- **Check-in:** "What is the sloth's name on that line?" (Mau.)
- **Watch for:** Older students asking about the `{ }` in `({ name, saved, onRescue })`. One sentence: "The curly brackets take the props out of the bag by their names."

---

## Already written for you: rescue

```jsx
  const [rescued, setRescued] = useState([]);

  const rescue = (name) => {
    if (!rescued.includes(name)) {
      setRescued([...rescued, name]);
    }
  };
```

Note:
**[2 min, 0:58 elapsed]**

- **Say:** "You don't type this part. `rescued` is a list in state, like the trash, but it starts empty: `[]`. When you rescue a sloth, its name is added to the list. `includes` asks: is this name already in the list? The `!` means 'not'. So: if it's not rescued yet, add it. The three dots `...` mean 'everything already in the list', plus the new name."
- **Check-in:** "Click Rescue on the card. What happens?" (It turns green and says Safe!)
- **Watch for:** Students changing this code. It doesn't need any changes.

---

## 🔍 TODO 1: Who is this sloth?

```jsx
function Sloth({ name, saved, onRescue }) {
  …
      <h3>🦥 A sloth</h3>
```

🗣️ Every card says "A sloth". The card already **gets** the sloth's name. Where? How do we show it?

<div class="fragment clue">

💡 Look at the first line: `name` is one of the props the card receives

</div>

<div class="fragment clue">

💡 In JSX, curly brackets `{ }` mean "this is code: show its value". You already did this on the beach: `Pick up {item}`

</div>

<div class="fragment clue">

💡 Fill in the blanks:

```jsx
      <h3>🦥 ________</h3>
```

</div>

Note:
**[4 min, 1:02 elapsed]**

- **Ask:** "Every card says 'A sloth'. But the card already knows its sloth's name. Where is it hiding?" (In the props on the first line: `name`.) "How do we show a value instead of plain text? We did it on the beach." (Curly brackets, like `Pick up {item}`.)
- **Clues:** One at a time. Most rooms get this one after the second clue.
- **Build it together:** A student tells you what replaces `A sloth`. Type it. Keep the emoji.
- **Answer (keep it off the slide):** `<h3>🦥 {name}</h3>`
- **Ask (older students):** "What would the card show if we wrote `name` without the curly brackets?" (The word "name".)
- **Check-in:** "Thumbs up when your card says 🦥 Mau!"
- **Watch for:** (1) `name` without curly brackets → the card says "name". (2) `{Name}` with a capital N → the app goes white (the console says "Name is not defined"). (3) Deleted the emoji or the `<h3>` by accident → Ctrl+Z.

---

## 🔍 TODO 2: Four sloths, one card

```jsx
const sloths = ["Mau", "Rick", "Luna", "Toby"];
<Sloth name="Mau" saved={rescued.includes("Mau")} onRescue={rescue} />
```

🗣️ 4 names, only 1 card. Where did we fix this before?

<div class="fragment clue">

💡 On the beach, `map` made one **button** per piece of trash. Here we want one `<Sloth />` per **name**

</div>

<div class="fragment clue">

💡 Start from the Mau line: everywhere it says `"Mau"`, use the name from the list instead. Add a `key`, then delete the old Mau line

</div>

<div class="fragment clue">

💡 Fill in the blanks:

```jsx
{sloths.map((name) => (
  <Sloth key={____} name={____}
    saved={rescued.includes(____)} onRescue={rescue} />
))}
```

</div>

Note:
**[6 min, 1:08 elapsed]**

- **Ask:** "The `sloths` list has 4 names: Mau, Rick, Luna and Toby. But we only see one card, because somebody wrote Mau's card by hand. Where did we already turn a list into lots of things?" (The beach! `map`.) "What should come out of `map` this time?" (One `<Sloth />` card per name.)
- **Clues:** The second clue is the big hint: the hand-written Mau line already has everything, it just uses `"Mau"` instead of a name from the list.
- **Build it together:** Type the `{sloths.map((name) => (` and `))}` lines first. Then ask the room what goes in each blank, and why there are no quotes around `name`. When you type `name={name}`, say: "the name on the left is the name tag; the name on the right is the sloth from the list." Finally delete the Mau line together.
- **Answer (keep it off the slide):** replace the Mau line with
  `{sloths.map((name) => (<Sloth key={name} name={name} saved={rescued.includes(name)} onRescue={rescue} />))}`. The student page puts each prop on its own line; both work.
- **Check-in:** "Thumbs up when you see 4 sloth cards. Rescue all of them. Do you see 'You rescued all the sloths!'?"
- **Watch for:** (1) Kept the Mau line → 5 cards, Mau twice. (2) `<sloth` with a small s → no cards at all (React thinks it's an HTML tag). (3) `rescued.includes("name")` with quotes → the cards never turn green. (4) Missing `/>` or `))}` → error box.
- **Catch-up:** "If you're behind, open 'Stuck? Show the complete file' on the Activity 3 page."

---

## Checkpoint ✅

<img src="../media/checkpoint-sloths.png" alt="Four sloth cards with names, two of them green and marked Safe" width="45%">

- 4 cards, each with a name
- **Rescue** → the card turns green ✅
- All 4 → **You rescued all the sloths!**

Note:
**[1 min, 1:09 elapsed]**

- **Say:** "Test it: four cards with names, rescue turns them green, and after all four you get the final message."
- **Do:** Walk around and look at screens.
- **Check-in:** "Thumbs up if all your sloths are safe!"
- **Catch-up:** Thumbs sideways → Activity 3 page, "Stuck? Show the complete file", paste over all of Sloths.jsx. Don't wait more than 2 minutes for one student.
- **Watch for:** Cards that never turn green (see `includes("name")` on the previous slide).

---

## Your turn ✨

```jsx
  const sloths = ["Mau", "Rick", "Luna", "Toby"];
```

- Add a sloth with **your own** name for it
- Behind? Open **Stuck? Show the complete file**

Note:
**[1 min, 1:10 elapsed]**

- **Say:** "Add a fifth sloth. Give it any name: your name, your pet's name. A new card appears by itself. And look: now you have to rescue 5 sloths to see the final message. The code compares with `sloths.length`, so it counts for you."
- **Show:** `"Toby"` becomes `"Toby", "Pura Vida"` (any name, in quotes, after a comma; the page uses the same example).
- **Check-in:** "Thumbs up when you see 5 cards. Who wants to share their sloth's name?"
- **Recap before moving on:** "In Activity 3 you made one small component and used it many times, handing it props."
- **Watch for:** (1) Missing quotes or comma → error box. (2) Two sloths with the same name → both turn green together.
- **Short on time?** Skip this slide.

---

## What we learned 🎓

- 🐢 **State:** `useState` gives React a memory
- 🏖️ **Lists:** `filter` takes things out, `map` makes one thing per item
- 🦥 **Components + props:** one card, used many times
- You built a real React app! 🎉

Note:
**[2 min, 1:12 elapsed]**

- **Say:** "Look at what you built! You used state to make React remember things, lists with filter and map, and components with props. These are the same tools that programmers use in real apps every day."
- **Check-in:** "Which activity was your favorite? Turtles, beach or sloths? Show me with fingers: 1, 2 or 3."
- **Watch for:** Students still finishing. Let them; the complete files are on each page.

---

## Keep exploring 🧭

<img src="../media/Cafe.png" alt="Sharky licking its lips next to two coffee beans" width="22%"> <img src="../media/Volcan.png" alt="Sharky looking surprised next to an erupting volcano" width="28%">

- **Bonus: Coffee farm** ☕ and **Bonus: Arenal volcano** 🌋
- First, turn them on in `App.jsx` (the bonus pages show how)
- Learn more React at **react.dev**

Note:
**[2 min, 1:14 elapsed]**

- **Say:** "Want more? There are two bonus activities on the workshop page. On the coffee farm, you follow coffee from the plant to the cup. Costa Rica is famous for its coffee, from places like Tarrazú. At the Arenal volcano, you rescue animals using everything you learned. Arenal was erupting from 1968 until 2010! The bonus pages show you how to switch them on in App.jsx."
- **Do:** Fast finishers can start a bonus now. Everyone else can do them at home: the pages work on their own.
- **Check-in:** "Thumbs up if you want to try a bonus!"
- **Watch for:** In App.jsx, students must remove the `//` at the start of the import line AND the `{/* */}` around the tag. Only the import → nothing new shows. Only the tag → the app goes white ("CoffeeFarm is not defined"). Removed `{ }` but kept `/* */` → `/*` and `*/` show up as text.

---

## ¡Pura vida! 🇨🇷

<img src="../media/Sharky.png" alt="Sharky, a smiling orange shark" width="20%">

- You did it! Thanks for traveling with Sharky
- See the [finished app](https://stackblitz.com/github/NuevoFoundation/workshops/tree/master/workshopcode/english/aventura-react-solution?file=src%2FApp.jsx)
- The workshop pages stay online: keep coding at home!

Note:
**[1 min, 1:15 elapsed]**

- **Say:** "'Pura vida' is what people in Costa Rica say for hello, goodbye, and 'life is good'. You built a React app today. Pura vida, programmers!"
- **Do:** If students want to keep their code, StackBlitz has a Fork button that saves a copy to a free account. Otherwise they can open the finished app any time.
- **Check-in:** "One last thumbs up if you had fun!"
- **Watch for:** Before they close the tab, remind them the pages and the starter link will still be there next time.
