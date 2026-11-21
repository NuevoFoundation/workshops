---
title: "Activity 2: Clean the beach"
date: 2019-07-25T13:24:17-07:00
weight: 3
draft: false
---

<img src="../media/Playa.png" alt="Sharky floating above a beach while three kids pick up trash and put it in green recycling bags" width="45%">

The turtles are safe. Now let's clean their beach! Costa Rica has beaches on two seas, the Pacific Ocean and the Caribbean Sea. Sea turtles can mistake a floating plastic bag for a jellyfish, which many of them eat, so every piece of trash you pick up helps.

## What you'll learn

- How to keep a **list** in state
- How to remove an item from a list with `.filter()`
- How to show one button for each item in a list with `.map()`

## Open your file

In your StackBlitz tab, click `Beach.jsx` in the file list. It's in the same `components` folder as `Turtles.jsx`.

{{% notice info %}}
In this activity, nothing new shows on the screen until Step 3. Then everything works at once!
{{% /notice %}}

## Step 1 — TODO 1: Put the trash list in state

`trash` is a **list** (programmers call it an *array*): items inside square brackets `[ ]`, with commas between them. We want React to remember this list and update the screen when it changes. So, just like `turtles` in Activity 1, we put it in state. This time the state starts as a list instead of `0`.

**Find these lines:**

```jsx
  const trash = [
    "🧃 Plastic bottle",
    "🍾 Glass",
    "🥫 Can",
    "📄 Paper",
  ];
```

**Change the first and last lines, so it looks like this:**

```jsx
  const [trash, setTrash] = useState([
    "🧃 Plastic bottle",
    "🍾 Glass",
    "🥫 Can",
    "📄 Paper",
  ]);
```

You don't have to touch the items in the middle. Only two lines change:

1. The first line: `const trash = [` becomes `const [trash, setTrash] = useState([`.
2. The last line: `];` becomes `]);`.

**What you should see:** Nothing changes on the screen yet. That's OK!

## Step 2 — TODO 2: Pick up a piece of trash

`pickUp` will run when you click a piece of trash. The piece you clicked is called `item`. We use `.filter()` to make a new list that keeps every piece of trash that is **not** `item`. It's like emptying your backpack and putting back everything except the banana peel. Then `setTrash` saves the new list.

**Find these lines:**

```jsx
  const pickUp = (item) => {

  };
```

**Type 1 new line in the middle, so it looks like this:**

```jsx
  const pickUp = (item) => {
    setTrash(trash.filter((t) => t !== item));
  };
```

`(t) => t !== item` looks at each piece of trash, `t`, one at a time. `!==` means "is not the same as".

**What you should see:** Nothing changes yet, because there are no buttons to click. That's the next step!

## Step 3 — TODO 3: Make a button for each piece of trash

`.map()` goes through a list one item at a time and turns each item into something to show. Here, each piece of trash becomes a button: 4 pieces of trash, 4 buttons. When the list gets shorter, there are fewer buttons.

**Find these lines:**

```jsx
      <div className="trash-buttons">
        {/* TODO 3: Make one button for each piece of trash. */}
      </div>
```

**Replace the TODO 3 comment with this code, so it looks like this:**

```jsx
      <div className="trash-buttons">
        {trash.map((item) => (
          <button key={item} onClick={() => pickUp(item)}>
            Pick up {item}
          </button>
        ))}
      </div>
```

- `key={item}` gives each button its own name, so React can keep track of them.
- `onClick={() => pickUp(item)}` means "when this button is clicked, pick up this item". In Activity 1 we just wrote `onClick={saveTurtle}`. Here we also have to tell `pickUp` *which* item, so we wrap it in a little function, `() =>`, that runs only when you click. Don't forget it!
- Look at the end: `))}`. The first `)` closes the button part, the second closes `.map(`, and `}` closes the `{` at the start.

**What you should see:** Four buttons appear: **Pick up 🧃 Plastic bottle**, **Pick up 🍾 Glass**, **Pick up 🥫 Can** and **Pick up 📄 Paper**. Click one and it disappears! Pick up all four and you see **The beach is clean!**

That message comes from a line that was already in the file:

```jsx
      {trash.length === 0 && <p className="final-message">The beach is clean!</p>}
```

`trash.length` is how many items are in the list. `&&` means "only if the part before me is true, show the part after me". So the message shows only when the list is empty.

## Checkpoint

<img src="../media/checkpoint-beach.png" alt="The beach card with four green buttons: Pick up Plastic bottle, Pick up Glass, Pick up Can and Pick up Paper" width="50%">

Test your beach card:

1. Do you see 4 buttons?
2. Click one. Does only that button disappear?
3. Click the rest. Do you see **The beach is clean!**?

## Your turn

Add your own piece of trash to the list in TODO 1. Make a new line after `"📄 Paper",` and type something like `"👟 Old shoe",` with quotes around it and a comma at the end. Make it different from the other items. A new button appears!

Emoji are optional. To add one, press **Windows key + .** on Windows, or **Ctrl + Cmd + Space** on a Mac.

## Stuck?

Compare your code with the finished file. Click **Show the complete file** to open it.

To catch up, you can replace your whole file with it:

1. Select all the code in the box with your mouse and copy it (**Ctrl + C**, or **Cmd + C** on a Mac).
2. In StackBlitz, click inside `Beach.jsx` and press **Ctrl + A** (**Cmd + A** on a Mac) to select everything.
3. Paste (**Ctrl + V**, or **Cmd + V** on a Mac).

<details>
<summary>▶ Show the complete file</summary>

```jsx
import { useState } from "react";

export default function Beach() {
  const [trash, setTrash] = useState([
    "🧃 Plastic bottle",
    "🍾 Glass",
    "🥫 Can",
    "📄 Paper",
  ]);

  const pickUp = (item) => {
    setTrash(trash.filter((t) => t !== item));
  };

  return (
    <div className="beach">
      <h2>🏖️ Beach Cleanup</h2>
      <p className="instructions">
        Click the trash to pick it up and protect sea life.
      </p>

      <div className="trash-buttons">
        {trash.map((item) => (
          <button key={item} onClick={() => pickUp(item)}>
            Pick up {item}
          </button>
        ))}
      </div>

      {trash.length === 0 && <p className="final-message">The beach is clean!</p>}
    </div>
  );
}
```

</details>

## Not working?

- **No buttons appear.** Check that your `.map` code is between `<div className="trash-buttons">` and `</div>`. It must start with `{` and end with `))}`.
- **All the trash vanished right away, and it says "The beach is clean!"** You probably wrote `onClick={pickUp(item)}`, like the turtle button. Add `() =>` so it says `onClick={() => pickUp(item)}`. Without it, React runs `pickUp` for every item as soon as it shows the buttons, instead of waiting for a click.
- **The buttons don't go away when you click them.** Check that your TODO 2 line is inside `pickUp`, and that `setTrash` is spelled the same as in TODO 1, with a capital **T**.
- **A red box says `Unexpected token`.** A bracket is missing. TODO 1 must end with `]);` and TODO 3 must end with `))}`. Compare your file with the complete file above.
