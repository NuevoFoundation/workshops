---
title: "Activity 4 - Serve five visitors"
date: 2026-11-14
draft: false
weight: 5
---

Nuvi can take an order and check a snack choice. Let's give the player a goal: **serve five visitors to complete the game!**

## Keep count

Near the top of `script.js`, the starter has:

```javascript
const totalVisitors = 5;
let served = 0;
```

A **variable** stores a value. We use `let` for `served` because its value changes during the game. We use `const` for `totalVisitors` because the goal stays the same during a round.

`served = served + 1` takes the current count, adds one, and stores the new count. An incorrect choice must not increase it.

## Finish an order or finish the game

Replace the entire `checkAnswer()` function with:

```javascript
function checkAnswer(snackId) {
  if (snackId === currentOrder.id) {
    served = served + 1;
    updateProgress();
    if (served === totalVisitors) {
      finishGame();
    } else {
      finishOrder();
    }
  } else {
    feedback.textContent = "Try again! " + currentOrder.hint;
    feedback.dataset.kind = "hint";
  }
}
```

The second `if` is inside the correct-answer branch. It checks whether you have reached the goal.

The page helpers are already provided:

| Helper | What it does |
|---|---|
| `updateProgress()` | Updates the count and progress bar. |
| `finishOrder()` | Thanks the player, disables the menu so the same visitor cannot count twice, and shows **Next visitor**. |
| `finishGame()` | Replaces the game board with a celebration and a **Play again** button. |
| `restartGame()` | Sets `served` back to `0`, clears the celebration, and displays a new order. The **Play again** button already calls it. |

Save and refresh. Select a matching snack, then use **Next visitor** to continue. After five correct orders, you should see the celebration!

## Challenge: test your game

Try these actions and check the result:

1. Choose an incorrect snack. The hint appears, but the order and count do not change.
2. Choose the correct snack. The count increases by exactly one, and the menu pauses until **Next visitor**.
3. Serve all five visitors. The celebration appears.
4. Select **Play again**. The count returns to zero and the menu works again.

Now change `totalVisitors` from `5` to `3`, save, and refresh. Can you complete a shorter round? The goal text and progress bar should change too.

{{% notice tip %}}
Change the number in `const totalVisitors = 5`, not the HTML progress text. The helpers update the page from that variable. Use a whole number greater than zero. Restore `5` when you finish experimenting.
{{% /notice %}}

## Extra challenge: add your favorite snack

Nuvi would love to offer a snack from your culture too! Add both of these pieces:

1. In `index.html`, copy one whole `<button class="snack-button"...>...</button>` inside the menu. Give it a new `data-snack`, name, and description. You can replace its `<svg>...</svg>` picture with an emoji using the example in the answer key.
2. In the `snacks` array in `script.js`, add an object with a matching `id`, an `order`, and a `hint`.

{{% notice tip %}}
The HTML `data-snack` and JavaScript `id` must match exactly. Add a comma between array items. Write an order that matches your new description, and keep all the existing snacks. `snacks.length` automatically includes the new item.
{{% /notice %}}

## You did it!

You turned a practice menu into a game with choices, hints, progress, a goal, and replay. Show someone your stall and let them try serving Nuvi's visitors!

Need a hand? The [Activity 4 answer](../answer-key/#activity-4) includes the finished game and an example extra snack.
