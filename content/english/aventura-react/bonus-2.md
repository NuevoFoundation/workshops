---
title: "Bonus: Arenal volcano"
date: 2026-11-20T00:00:00-08:00
weight: 7
draft: false
---

<img src="../media/Volcan.png" alt="Sharky looking scared next to an erupting cartoon volcano" width="45%">

**Arenal Volcano**, in the north of Costa Rica, was one of the most active volcanoes in the world from 1968 until 2010. Today it's resting, surrounded by rainforest and hot springs. But in our story, Arenal starts to rumble! Help Sharky get the animals to safety.

<img src="../media/Arenal.jpg" alt="Photo of Arenal Volcano, a tall cone-shaped mountain with a cloud at its top, behind a blue lake and green rainforest" width="45%">

{{% notice info %}}
This bonus is practice, so it has fewer hints. You already did everything here in Activity 2. Try each step on your own first. If you need help, click **Hint**.
{{% /notice %}}

## What you'll learn

- Practice: put a list in state, remove items with `.filter()`, and show them with `.map()`
- How to make a list item with text **and** a button inside it

## Turn on the volcano

Click `App.jsx` in the file list (in the `src` folder). Turn on the volcano with two changes:

1. Find the line `// import Volcano from "./components/Volcano.jsx";` and delete the `//` and the space at the start.
2. Find the line `{/* <Volcano /> */}` near the bottom and delete the `{/*` and `*/}` around `<Volcano />`.

<details>
<summary>▶ Hint</summary>

The two lines should look like this:

```jsx
import Volcano from "./components/Volcano.jsx";
```

```jsx
      <Volcano />
```

</details>

**What you should see:** A volcano card at the very bottom of your app that says **The volcano is rumbling! Evacuate every animal.** There are no animals in it yet.

## Open your file

Click `Volcano.jsx` in the file list (`src` → `components`).

## Step 1 — TODO 1: Add animals and put them in state

**Goal:** a list of at least 5 animals that React remembers, with a `setAnimals` function to change it.

**Find this line:**

```jsx
  const animals = ["🐒 Howler monkey", "🦜 Toucan"];
```

First, add at least 3 more animals that live in Costa Rica. Some ideas: jaguar, red-eyed tree frog, three-toed sloth, scarlet macaw, coati or tapir. Every animal must be different. Then turn the list into state, just like `trash` in Activity 2.

<details>
<summary>▶ Hint</summary>

Your animals can be different. Putting each animal on its own line makes the list easier to read:

```jsx
  const [animals, setAnimals] = useState([
    "🐒 Howler monkey",
    "🦜 Toucan",
    "🐆 Jaguar",
    "🐸 Red-eyed tree frog",
    "🦥 Three-toed sloth",
  ]);
```

</details>

**What you should see:** Nothing changes on the screen yet.

## Step 2 — TODO 2: Evacuate an animal

**Goal:** when `evacuate(animal)` runs, that animal is removed from the list. Look at `pickUp` in `Beach.jsx`. It's almost the same!

**Find these lines:**

```jsx
  const evacuate = (animal) => {

  };
```

<details>
<summary>▶ Hint</summary>

```jsx
  const evacuate = (animal) => {
    setAnimals(animals.filter((a) => a !== animal));
  };
```

</details>

**What you should see:** Nothing changes yet. There are no buttons to click.

## Step 3 — TODO 3: Show the animals

**Goal:** one list item for each animal. Each item shows the animal, the words **is in danger!**, and an **Evacuate** button that calls `evacuate`. Use `.map()` like the trash buttons. This time each item is an `<li>` (a *list item*) with the text and the `<button>` inside it. Put the `key` on the `<li>`.

**Find these lines:**

```jsx
        <ul>
          {/* TODO 3: Make one list item for each animal, with an Evacuate button. */}
        </ul>
```

<details>
<summary>▶ Hint</summary>

Replace the TODO 3 comment, so it looks like this:

```jsx
        <ul>
          {animals.map((animal) => (
            <li key={animal}>
              {animal} is in danger!
              <button onClick={() => evacuate(animal)}>Evacuate</button>
            </li>
          ))}
        </ul>
```

</details>

**What you should see:** Each animal shows up with an **Evacuate** button. Click one, and that animal leaves the list. Evacuate them all and you see **All the animals are safe!**

## Checkpoint

<img src="../media/checkpoint-volcano.png" alt="The volcano card with a list of animals. Each one says is in danger! and has an orange Evacuate button" width="50%">

Test your volcano card:

1. Do you see every animal you added?
2. Click **Evacuate** on one. Does only that animal leave?
3. Evacuate the rest. Do you see **All the animals are safe!**?

## Your turn

Show how many animals are still in danger. After the `</p>` line that ends the instructions, add this line:

~~~jsx
      <p>Animals still in danger: {animals.length}</p>
~~~

`{animals.length}` shows how many animals are in the list, the same way the turtle card shows `{turtles}`. Then click **Evacuate** and watch the number go down.

## Stuck?

Compare your code with the finished files. Click **Show the complete file** to open them.

To catch up, you can replace a whole file:

1. Click just before `import` at the top of one box, then hold **Shift** and click after the last `}` at the bottom of that box. Copy it (**Ctrl + C**, or **Cmd + C** on a Mac).
2. In StackBlitz, click inside the file with the same name and press **Ctrl + A** (**Cmd + A** on a Mac) to select everything.
3. Paste (**Ctrl + V**, or **Cmd + V** on a Mac).

<details>
<summary>▶ Show the complete file</summary>

`Volcano.jsx`:

```jsx
import { useState } from "react";

export default function Volcano() {
  const [animals, setAnimals] = useState([
    "🐒 Howler monkey",
    "🦜 Toucan",
    "🐆 Jaguar",
    "🐸 Red-eyed tree frog",
    "🦥 Three-toed sloth",
  ]);

  const evacuate = (animal) => {
    setAnimals(animals.filter((a) => a !== animal));
  };

  return (
    <div className="volcano">
      <h2>🌋 Arenal Volcano</h2>
      <p className="instructions">
        The volcano is rumbling! Evacuate every animal.
      </p>

      {animals.length > 0 ? (
        <ul>
          {animals.map((animal) => (
            <li key={animal}>
              {animal} is in danger!
              <button onClick={() => evacuate(animal)}>Evacuate</button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="final-message">All the animals are safe!</p>
      )}
    </div>
  );
}
```

`App.jsx`, with both bonus cards turned on:

```jsx
import Turtles from "./components/Turtles.jsx";
import Beach from "./components/Beach.jsx";
import Sloths from "./components/Sloths.jsx";
import CoffeeFarm from "./components/CoffeeFarm.jsx";
import Volcano from "./components/Volcano.jsx";

export default function App() {
  return (
    <div className="App">
      <h1>My Costa Rica Adventure</h1>

      <Turtles />
      <Beach />
      <Sloths />

      <CoffeeFarm />
      <Volcano />
    </div>
  );
}
```

</details>

## Not working?

- **The whole app disappeared and the right side is blank.** In `App.jsx`, the `import Volcano` line still starts with `//`. Delete the `//`.
- **You see `/*` and `*/` on the page.** In `App.jsx`, that line should be just `<Volcano />`.
- **All the animals vanished right away.** The button needs `() =>`: `onClick={() => evacuate(animal)}`.
- **One click evacuates two animals.** Two animals have exactly the same name. Make every animal different.
- **The error box says `Unexpected token` or `'return' outside of function`.** You have a missing or an extra bracket, or a missing comma or quote. Check the commas and quotes between your animals, the `]);` at the end of the list, and the `))}` at the end of `.map`.
- **You see `))}` written on your card.** The editor added `))}` for you and you typed it again. Delete one of them.

## Trip complete!

You finished every stop! ¡Pura vida! 🦈

Want to keep your app? Ask an adult to help you sign in to StackBlitz and save your own copy with the **Fork** button at the top.
