---
title: "Activity 3 - Match the order"
date: 2026-11-14
draft: false
weight: 4
---

A visitor has placed an order. Now the player needs to serve the matching snack!

## How a choice reaches the code

Your starter already listens for menu clicks. When a player selects a card, it calls `checkAnswer(snackId)`. The **argument** `snackId` is the selected card's identifier, such as `"hotteok"`.

The correct identifier is stored in `currentOrder.id`. We can compare the two with `===`, which asks whether they are exactly equal.

## Check the choice

An **`if` statement** runs instructions when a condition is true. Its **`else`** part runs when the condition is false.

Replace the entire `checkAnswer()` function in `script.js` with:

```javascript
function checkAnswer(snackId) {
  if (snackId === currentOrder.id) {
    feedback.textContent = "That's the one!";
    feedback.dataset.kind = "success";
  } else {
    feedback.textContent = "Try again!";
    feedback.dataset.kind = "hint";
  }
}
```

`feedback.textContent` changes the message. The provided CSS uses `feedback.dataset.kind` to choose the message's background color. The words explain the result too, so players do not have to rely on color.

Save and refresh. Read the visitor's order, choose an incorrect snack, then choose the correct one. Your messages should change!

At this stage you are practicing answer checking. The counter remains at zero, and you stay with the same visitor. We will add progress in Activity 4.

## Challenge: offer a useful hint

"Try again!" is encouraging, but it does not tell the player what to look for. Change the incorrect-choice message so it also includes `currentOrder.hint`.

In JavaScript, `+` can join pieces of text. For example, `"Hello, " + "Nuvi!"` becomes `"Hello, Nuvi!"`.

{{% notice tip %}}
Change the message inside `else`. Join `"Try again! "` with `currentOrder.hint`. Keep the space after the exclamation mark so the words do not run together.
{{% /notice %}}

## Checkpoint

Correct choices get a success message. Incorrect choices get a helpful hint and another try. No one loses a life or has to race a timer.

If nothing happens, open your browser's developer tools and check the **Console** for errors. Make sure you replaced the old function rather than adding a second copy, and check your quotation marks and braces `{}`.

Need a hand? See the [Activity 3 answer](../answer-key/#activity-3).
