---
title: "Get your starter project"
date: 2026-11-20T00:00:00-08:00
weight: 1
draft: false
---

<img src="../media/React.png" alt="Sharky smiling next to the blue React logo" width="30%">

Sharky has packed your bags! Your app is already started. You just need to open it.

## Open your starter project

Click the button below. Your project opens in a new tab on **StackBlitz**, a website where you can write code and see your app right away. You don't need an account.

### <a class="btn btn-info" href="https://stackblitz.com/github/NuevoFoundation/workshops/tree/master/workshopcode/english/aventura-react?file=src%2Fcomponents%2FTurtles.jsx" target="_blank" rel="noopener">👉 Open my Costa Rica app</a>

Now wait about a minute while StackBlitz gets your app ready. You may see lines of text scrolling at the bottom of the screen. That's normal!

Still no app after 2 minutes? Make sure you're using Chrome, Edge or Firefox, then ask your instructor or an adult for help.

{{% notice warning %}}
**Keep this one StackBlitz tab open until the end of the workshop.** Don't click the button above again, and don't close or reload the StackBlitz tab. The button always opens a brand-new copy, without your work.
{{% /notice %}}

## What you'll see

StackBlitz has three parts:

- **On the left: the file list.** All the files in your project.
- **In the middle: the code.** The file you clicked. `Turtles.jsx` is already open.
- **On the right: your app.** It runs your code.

If you can't see the file list, click the files icon on the far left of the screen.

Your app should look like this:

<img src="../media/start-app.png" alt="The starter app: the title My Costa Rica Adventure, a turtle card that says You have saved 0 of 10 turtles, an empty beach card, and a sloth card that says A sloth" width="50%">

It doesn't do much yet. That's your job!

- 🐢 The **Save a turtle** button does nothing yet. You'll fix it in Activity 1.
- 🏖️ The beach card has no trash to pick up yet. That's Activity 2.
- 🦥 There's only one sloth, and it's just called "A sloth". That's Activity 3.

## Your files

In the file list, open the `src` folder. All your code lives there, and the cards live in the `components` folder inside it. Here's what each file does:

| File | What it is | Will you change it? |
|---|---|---|
| `components/Turtles.jsx` | The turtle card | ✏️ Yes, in Activity 1 |
| `components/Beach.jsx` | The beach card | ✏️ Yes, in Activity 2 |
| `components/Sloths.jsx` | The sloth card | ✏️ Yes, in Activity 3 |
| `components/CoffeeFarm.jsx` | The coffee card | ✏️ Yes, in a bonus activity |
| `components/Volcano.jsx` | The volcano card | ✏️ Yes, in a bonus activity |
| `App.jsx` | Puts all the cards on the page | Only in the bonus activities |
| `main.jsx` and `style.css` | Start the app and make it colorful | 🚫 No |
| All the other files | Project setup | 🚫 No |

## How the pieces fit together

In React, each part of the screen is a **component**. A component is a small piece of code that makes one part of the screen. Each file in the `components` folder holds one component.

`App.jsx` puts the components on the page. It's already done for you:

```jsx
import Turtles from "./components/Turtles.jsx";
import Beach from "./components/Beach.jsx";
import Sloths from "./components/Sloths.jsx";

// BONUS: When you get to a bonus activity, remove the // at the
// start of its import line below, and the {/* */} around its tag.
// import CoffeeFarm from "./components/CoffeeFarm.jsx";
// import Volcano from "./components/Volcano.jsx";

export default function App() {
  return (
    <div className="App">
      <h1>My Costa Rica Adventure</h1>

      <Turtles />
      <Beach />
      <Sloths />

      {/* <CoffeeFarm /> */}
      {/* <Volcano /> */}
    </div>
  );
}
```

- `import Turtles from "./components/Turtles.jsx";` brings in the turtle component from its file.
- `<Turtles />` means "show the turtle card here".
- Lines that start with `//`, and anything inside `{/* */}`, are **comments**: notes for people. React skips them. That's why the coffee farm and volcano cards don't show yet. You'll turn them on in the bonus activities.

## How every activity works

1. Click the file that the activity tells you to open.
2. Find the comment that says `TODO 1` (then `TODO 2`, and so on). *TODO* means "to do". It marks where your code goes.
3. Type the code from the activity page. Typing it yourself helps you learn!
4. Look at your app on the right. It updates a moment after you type. If it doesn't, press **Ctrl + S** (**Cmd + S** on a Mac) to save.

While you're in the middle of typing, your app may go blank or show **the error box**: a dark box with red writing that covers your app. That's normal! It goes away when you finish typing. Only look at **Not working?**, at the end of each activity, if it's still there after you finish.

{{% notice tip %}}
Made a mistake? Press **Ctrl + Z** (**Cmd + Z** on a Mac) to undo it.
{{% /notice %}}

**Lost your StackBlitz tab?** Click the button at the top of this page to open a new copy. Then catch up: for each activity you already finished, paste in the complete file from its **Stuck?** section.

Ready? Let's go to [Activity 1: Save the turtles](../activity-1/)!
