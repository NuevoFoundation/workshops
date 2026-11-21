---
title: "Bonus: Coffee farm"
date: 2026-11-20T00:00:00-08:00
weight: 6
draft: false
---

<img src="../media/Cafe.png" alt="Sharky licking its lips next to two coffee beans" width="40%">

Welcome to Grandpa's coffee farm! People in Costa Rica have grown coffee for more than 200 years, and Tarrazú is one of its most famous coffee regions. Did you know that a coffee bean is really the seed of a small red fruit called a coffee cherry? Let's follow coffee from the plant to the cup.

This is a bonus activity. Finish Activities 1, 2 and 3 first.

## What you'll learn

- How to turn on a new component in `App.jsx`
- How to pick an item from a list by its position number
- How to move through steps, one click at a time

## Turn on the coffee farm

The coffee card is turned off: in `App.jsx` it's a comment, so React skips it. Let's turn it on. Click `App.jsx` in the file list. It's in the `src` folder, not in `components`.

**Find this line:**

```jsx
// import CoffeeFarm from "./components/CoffeeFarm.jsx";
```

**Delete the `//` and the space at the start, so it looks like this:**

```jsx
import CoffeeFarm from "./components/CoffeeFarm.jsx";
```

**Then find this line, near the bottom:**

```jsx
      {/* <CoffeeFarm /> */}
```

**Delete the `{/*` before it and the `*/}` after it, so it looks like this:**

```jsx
      <CoffeeFarm />
```

**What you should see:** Scroll down to the bottom of your app. There's a new coffee card that says **Stage 1 of 5** and **🌱 Plant the coffee**. The **Next stage ➡️** button doesn't work yet.

## Open your file

Click `CoffeeFarm.jsx` in the file list (`src` → `components`). At the top there's a list called `stages` with the 5 stages of making coffee.

## Step 1 — TODO 1: Remember which stage you're on

`step` is the position of the stage you're on. Computers start counting at **0**, so step `0` is the first stage, step `1` is the second, and so on. `stages[step]` picks the stage at that position. We put `step` in state so that React updates the card when it changes.

**Find this line:**

```jsx
  const step = 0;
```

**Delete it and type this in its place:**

```jsx
  const [step, setStep] = useState(0);
```

**What you should see:** Nothing changes yet. It still says **Stage 1 of 5**. (The card shows `step + 1`, because people start counting at 1!)

## Step 2 — TODO 2: Go to the next stage

There are 5 stages, so `stages.length` is `5`. We start counting at 0, so the last stage is number `4`, which is `stages.length - 1`. We only move forward if we're not on the last stage yet.

**Find these lines:**

```jsx
  const next = () => {

  };
```

**Type 3 new lines in the middle, so it looks like this:**

```jsx
  const next = () => {
    if (step < stages.length - 1) {
      setStep(step + 1);
    }
  };
```

{{% notice tip %}}
When you type `(` or `{`, the editor sometimes adds the closing `)` or `}` for you. Check that your code matches the box above, with no extra `}` left over.
{{% /notice %}}

**What you should see:** Click **Next stage ➡️**. The card shows **Stage 2 of 5** and **🍒 Pick the coffee cherries**. Keep clicking! On stage 5, **☕ Enjoy a cup of coffee**, the button goes away and you see **You finished the whole coffee process!**

## Checkpoint

<img src="../media/checkpoint-coffee.png" alt="The coffee card on Stage 3 of 5, Dry the beans in the sun, with a brown Next stage button" width="50%">

Test your coffee card:

1. Click **Next stage ➡️**. Does the stage number go up by one each time?
2. Do you see a different coffee stage each time?
3. On stage 5, do you see **You finished the whole coffee process!**?

## Your turn

Add a new stage to the `stages` list. For example, add `"📦 Pack the coffee in bags"` between roasting and enjoying. Put quotes around it and a comma after it. Now the card says **of 6**!

## Stuck?

Compare your code with the finished file. Click **Show the complete file** to open it.

To catch up, you can replace your whole file with it:

1. Click just before `import` at the top of the box, then hold **Shift** and click after the last `}` at the bottom. Copy it (**Ctrl + C**, or **Cmd + C** on a Mac).
2. In StackBlitz, click inside `CoffeeFarm.jsx` and press **Ctrl + A** (**Cmd + A** on a Mac) to select everything.
3. Paste (**Ctrl + V**, or **Cmd + V** on a Mac).

In `App.jsx`, you only need the two changes from [Turn on the coffee farm](#turn-on-the-coffee-farm).

<details>
<summary>▶ Show the complete file</summary>

```jsx
import { useState } from "react";

export default function CoffeeFarm() {
  const stages = [
    "🌱 Plant the coffee",
    "🍒 Pick the coffee cherries",
    "🌞 Dry the beans in the sun",
    "🔥 Roast the beans",
    "☕ Enjoy a cup of coffee",
  ];

  const [step, setStep] = useState(0);

  const next = () => {
    if (step < stages.length - 1) {
      setStep(step + 1);
    }
  };

  return (
    <div className="coffee-farm">
      <h2>☕ Grandpa's Coffee Farm</h2>
      <p className="stage-number">
        Stage {step + 1} of {stages.length}
      </p>
      <p className="stage">{stages[step]}</p>

      {step < stages.length - 1 ? (
        <button className="next-button" onClick={next}>
          Next stage ➡️
        </button>
      ) : (
        <h3 className="final-message">You finished the whole coffee process!</h3>
      )}
    </div>
  );
}
```

</details>

## Not working?

- **The whole app disappeared and the right side is blank.** You turned on `<CoffeeFarm />`, but the `import CoffeeFarm` line still starts with `//`. Delete the `//`. You need both changes in `App.jsx`!
- **You see `/*` and `*/` on the page.** You deleted the `{` and `}` but not the `/*` and `*/`. That line should be just `<CoffeeFarm />`.
- **There's no coffee card.** Scroll to the bottom of your app. Still missing? Check that `<CoffeeFarm />` isn't inside `{/* */}` anymore.
- **The error box says `Identifier 'step' has already been declared`.** Delete the old line `const step = 0;`.
- **The error box says `Unexpected token` or `'return' outside of function`.** You have a missing or an extra bracket. Every `(` needs a `)`, and every `{` needs a `}`. Compare your file with the complete file above.
- **Next stage does nothing.** Check that `setStep` is spelled the same in TODO 1 and TODO 2, with a capital **S**.
