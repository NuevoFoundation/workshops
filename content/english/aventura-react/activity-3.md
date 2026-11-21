---
title: "Activity 3: Rescue the sloths"
date: 2019-07-25T13:24:17-07:00
weight: 4
draft: false
---

<img src="../media/Perezoso.png" alt="A happy sloth hanging from a branch with a laptop, next to a smiling Sharky" width="40%">

Last stop: the rainforest! Costa Rica has two kinds of sloths, two-toed and three-toed. They move so slowly that tiny green plants called algae grow on their fur, which helps them hide in the trees. Four sloths need your help!

## What you'll learn

- How to use one small component many times
- How to send information to a component with **props**
- How to make one component for each item in a list with `.map()`

## Open your file

Click `Sloths.jsx` in the file list (`src` → `components`).

This file has **two** components:

- `Sloth`, at the top, is small. It shows **one** sloth card.
- `Sloths`, further down, is big. It's the whole rescue area, and it uses `Sloth` cards inside it.

`Sloth` is like a cookie cutter, and each `<Sloth />` is a cookie. One cutter, lots of cookies!

## Step 1 — TODO 1: Show the sloth's name

When the big component writes `<Sloth name="Mau" ... />`, it hands the small one some information. This information is called **props**. The small component catches its props in its first line: `function Sloth({ name, saved, onRescue })`. But right now the card ignores `name` and always says "A sloth".

**Find this line** in the small `Sloth` component, near the top:

```jsx
      <h3>🦥 A sloth</h3>
```

**Change it to:**

```jsx
      <h3>🦥 {name}</h3>
```

Only change `A sloth` to `{name}`, and keep the 🦥. The curly braces `{ }` mean "show the value of `name`". Without them, you would just see the word "name".

**What you should see:** The card now says **🦥 Mau**.

## Step 2 — TODO 2: One card for each sloth

In the big `Sloths` component there's a list of four names: `const sloths = ["Mau", "Rick", "Luna", "Toby"];`. But only Mau gets a card, because the `<Sloth ... />` line is written just for Mau. Let's use `.map()` to make one card for each name, like the trash buttons in Activity 2.

**Find this line** near the bottom, under the TODO 2 comment:

```jsx
        <Sloth name="Mau" saved={rescued.includes("Mau")} onRescue={rescue} />
```

**Delete it and type this in its place:**

```jsx
        {sloths.map((name) => (
          <Sloth
            key={name}
            name={name}
            saved={rescued.includes(name)}
            onRescue={rescue}
          />
        ))}
```

Each card gets four props:

- `key={name}`: a name React uses to keep track of each card.
- `name={name}`: the sloth's name. You show it on the card in TODO 1.
- `saved={rescued.includes(name)}`: `true` if this sloth is on the rescued list, `false` if not.
- `onRescue={rescue}`: the function to run when you click **Rescue**. There's no `()` after `rescue`, because we're handing the function over, not running it yet.

**Already in the file for you:** `rescued` is a list in state that starts empty, `useState([])`. The `rescue` function adds a sloth's name to that list:

```jsx
  const [rescued, setRescued] = useState([]);

  const rescue = (name) => {
    if (!rescued.includes(name)) {
      setRescued([...rescued, name]);
    }
  };
```

`!rescued.includes(name)` means "if this name is **not** on the list yet". `[...rescued, name]` means "everything already on the list, plus this new name".

**What you should see:** Four cards: **Mau**, **Rick**, **Luna** and **Toby**. Click **Rescue** on a card. It turns green and says **✅ Safe!** Rescue all four and you see **You rescued all the sloths!**

## Checkpoint

<img src="../media/checkpoint-sloths.png" alt="Four sloth cards named Mau, Rick, Luna and Toby. Two of them are green and say Safe" width="50%">

Test your sloth cards:

1. Do you see four cards with four different names?
2. Click **Rescue** on two of them. Do they turn green and say **✅ Safe!**?
3. Rescue the rest. Do you see **You rescued all the sloths!**?

## Your turn

Add your own sloth to the `sloths` list, like `"Pura Vida"` (that's how people in Costa Rica say hello, thanks and "all good"!). Put quotes around the name and a comma before it, and make it different from the other names. A new card appears, and now you have to rescue 5 sloths to finish.

## Stuck?

Compare your code with the finished file. Click **Show the complete file** to open it.

To catch up, you can replace your whole file with it:

1. Select all the code in the box with your mouse and copy it (**Ctrl + C**, or **Cmd + C** on a Mac).
2. In StackBlitz, click inside `Sloths.jsx` and press **Ctrl + A** (**Cmd + A** on a Mac) to select everything.
3. Paste (**Ctrl + V**, or **Cmd + V** on a Mac).

<details>
<summary>▶ Show the complete file</summary>

```jsx
import { useState } from "react";

// A SMALL component: one sloth card.
// It gets its information from props: name, saved and onRescue.
function Sloth({ name, saved, onRescue }) {
  return (
    <div className={saved ? "sloth-card saved" : "sloth-card"}>
      <h3>🦥 {name}</h3>

      <p>{saved ? "✅ Safe!" : "Needs help"}</p>

      {!saved && <button onClick={() => onRescue(name)}>Rescue</button>}
    </div>
  );
}

// A BIG component: the whole rescue area.
export default function Sloths() {
  const sloths = ["Mau", "Rick", "Luna", "Toby"];
  const [rescued, setRescued] = useState([]);

  const rescue = (name) => {
    if (!rescued.includes(name)) {
      setRescued([...rescued, name]);
    }
  };

  return (
    <div className="sloths">
      <h2>🦥 Sloth Rescue</h2>
      <p className="instructions">Click a sloth to rescue it from the forest.</p>

      <div className="sloth-list">
        {sloths.map((name) => (
          <Sloth
            key={name}
            name={name}
            saved={rescued.includes(name)}
            onRescue={rescue}
          />
        ))}
      </div>

      {rescued.length === sloths.length && (
        <h3 className="final-message">You rescued all the sloths!</h3>
      )}
    </div>
  );
}
```

</details>

## Not working?

- **The card still says "A sloth".** TODO 1 goes in the small `Sloth` component at the top of the file, not in the big one.
- **Every card says "name".** You forgot the curly braces. It should be `{name}`.
- **You see Mau twice (5 cards).** You added the `.map` code but didn't delete the old `<Sloth name="Mau" ... />` line. Delete it.
- **No sloth cards at all.** Component names start with a capital letter: `<Sloth`, not `<sloth`.
- **Clicking Rescue does nothing.** Check that it says `onRescue={rescue}`, with no `()` after `rescue`.
