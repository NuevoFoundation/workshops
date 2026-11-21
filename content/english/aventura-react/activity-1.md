---
title: "Activity 1: Save the turtles"
date: 2019-07-25T13:24:17-07:00
weight: 2
draft: false
---

<img src="../media/Tortuga.png" alt="Sharky looking surprised next to a brown turtle shell" width="35%">

Your first stop is **Tortuguero National Park**, on Costa Rica's Caribbean coast. It's one of the most important beaches in the world where green sea turtles lay their eggs. Sharky needs your help to get 10 baby turtles safely to the sea!

## What you'll learn

- What **state** is: React's memory
- How to make a button do something when you click it
- How React updates the screen by itself when state changes

## Open your file

Go to your StackBlitz tab. `Turtles.jsx` should already be open in the middle. If it isn't, click it in the file list: `src` → `components` → `Turtles.jsx`.

Don't have a StackBlitz tab? Go back to [Get your starter project](../get-started/).

## Step 1 — TODO 1: Give React a memory

Right now `turtles` is a plain number, `0`. If it changed, React wouldn't notice, so the screen would stay the same. We need **state**: a value that React remembers and watches. State is like a scoreboard: when the score changes, everyone sees the new number.

**Find this line:**

```jsx
  const turtles = 0;
```

**Delete it and type this in its place:**

```jsx
  const [turtles, setTurtles] = useState(0);
```

`useState(0)` makes state that starts at `0`. It gives you two things: `turtles` is the number right now, and `setTurtles` is how you change it. (`useState` comes from React. The first line of the file, `import { useState } from "react";`, brings it in.)

**What you should see:** Nothing changes on the screen yet. It still says **0 of 10**. That's OK!

## Step 2 — TODO 2: Save a turtle on each click

Near the bottom of the file there's a button: `<button onClick={saveTurtle}>`. `onClick` means "when this button is clicked, run `saveTurtle`". But `saveTurtle` is empty, so nothing happens yet. Let's fill it in.

**Find these lines:**

```jsx
  const saveTurtle = () => {

  };
```

**Click the empty line in the middle and type 3 new lines, so it looks like this:**

```jsx
  const saveTurtle = () => {
    if (turtles < total) {
      setTurtles(turtles + 1);
    }
  };
```

`if (turtles < total)` checks that there are still turtles to save (`<` means "less than"). `setTurtles(turtles + 1)` changes the state to one more turtle. React sees the change and updates the card.

{{% notice tip %}}
When you type `(` or `{`, the editor sometimes adds the closing `)` or `}` for you. Check that your code matches the box above, with no extra `}` left over.
{{% /notice %}}

**What you should see:** Click **Save a turtle**. The number goes up: 1 of 10, 2 of 10, 3 of 10… When you reach 10, the button goes away. You see **All the turtles are safe!** and a **Restart mission** button.

**How did that message appear?** You didn't type it. This part was already in the file:

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

Read it like a question: are there still turtles to save? If **yes** (after the `?`), show the Save button. If **no** (after the `:`), show the message and the Restart button. The `<>` and `</>` just hold those two things together.

## Step 3 — TODO 3: Restart the mission

Click **Restart mission**. Nothing happens, because `restart` is empty. To play again, the counter has to go back to 0.

**Find these lines:**

```jsx
  const restart = () => {

  };
```

**Type 1 new line in the middle, so it looks like this:**

```jsx
  const restart = () => {
    setTurtles(0);
  };
```

**What you should see:** Click **Restart mission**. The card goes back to **0 of 10**, and the **Save a turtle** button comes back.

**Tip:** Tired of clicking 10 times? While you test, change `const total = 10;` to `const total = 3;`.

## Checkpoint

<img src="../media/checkpoint-turtles.png" alt="The turtle card saying You have saved 3 of 10 turtles, with a red Save a turtle button" width="50%">

Test your turtle card:

1. Click **Save a turtle** a few times. Does the number go up by one each time?
2. Keep going until every turtle is saved. Do you see **All the turtles are safe!**?
3. Click **Restart mission**. Are you back at 0?

## Your turn

Make the mission your own! Change `total` to a new number, like `5` or `25`. Then change the words on the button, for example to `Save a baby turtle 🐢`. Save all the turtles and check that the message still appears.

## Stuck?

Compare your code with the finished file. Click **Show the complete file** to open it.

To catch up, you can replace your whole file with it:

1. Select all the code in the box with your mouse and copy it (**Ctrl + C**, or **Cmd + C** on a Mac).
2. In StackBlitz, click inside `Turtles.jsx` and press **Ctrl + A** (**Cmd + A** on a Mac) to select everything.
3. Paste (**Ctrl + V**, or **Cmd + V** on a Mac).

<details>
<summary>▶ Show the complete file</summary>

```jsx
import { useState } from "react";

export default function Turtles() {
  const [turtles, setTurtles] = useState(0);

  const total = 10;

  const saveTurtle = () => {
    if (turtles < total) {
      setTurtles(turtles + 1);
    }
  };

  const restart = () => {
    setTurtles(0);
  };

  return (
    <div className="turtles">
      <h2>🐢 Tortuguero National Park</h2>
      <p>You have saved {turtles} of {total} turtles</p>

      {turtles < total ? (
        <button onClick={saveTurtle}>Save a turtle</button>
      ) : (
        <>
          <p className="success">All the turtles are safe!</p>
          <button onClick={restart}>Restart mission</button>
        </>
      )}
    </div>
  );
}
```

</details>

## Not working?

- **A dark box with red writing says `Identifier 'turtles' has already been declared`.** You still have the old line `const turtles = 0;`. Delete it. Only `const [turtles, setTurtles] = useState(0);` should be left.
- **The number doesn't go up.** Check that `setTurtles` is spelled the same in TODO 1 and TODO 2, with a capital **T**. Capital letters matter in code! Also check that your TODO 2 lines are *inside* `saveTurtle`, between `() => {` and `};`.
- **A red box says `Unexpected token`.** A bracket is missing or there's an extra one. Every `(` needs a `)`, and every `{` needs a `}`. Compare your file with the complete file above.
- **The whole app disappeared and the right side is blank.** Look for a spelling mistake, like `usestate` instead of `useState`. When you fix it, the app comes back.
- **Your change doesn't show up.** Press **Ctrl + S** (**Cmd + S** on a Mac) to save.
