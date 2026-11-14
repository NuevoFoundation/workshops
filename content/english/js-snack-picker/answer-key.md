---
title: "Snack stall answer key"
date: 2026-11-14
draft: false
weight: 99
hidden: true
---

## Complete finished game

<a class="my-2 mx-4 btn btn-info" href="../media/snack-stall-solution.zip" download>Download the complete snack stall solution</a>

Extract the ZIP and keep its three files together. Open `index.html` in a browser to play. `styles.css` contains the styling, and `script.js` contains the complete game rules and page helpers.

The solution needs no account, server, or internet connection after download. It includes all eight menu choices, hints, five-visitor progress, disabled choices between visitors, a finish screen, and replay.

The answers below cover each activity and its challenges. Different stall names, colors, and personal snack choices are valid.

## Activity 1

A possible heading:

```html
<h1>Nuvi's snack stop</h1>
```

For the optional blue card border, change the `border` declaration inside `.snack-button` in `styles.css` to:

```css
border: 2px solid #2d6da4;
```

The starter's buttons identify the selected snack, but do not check answers or advance the count yet. This is expected, not a broken game.

## Activity 2

The completed order function is:

```javascript
function showOrder() {
  const index = Math.floor(Math.random() * snacks.length);
  currentOrder = snacks[index];
  orderText.textContent = currentOrder.order;
  visitorLabel.textContent = "Visitor " + (served + 1);
  feedback.textContent = "Choose a snack from the menu.";
  feedback.dataset.kind = "info";
  nextButton.hidden = true;
  setMenuEnabled(true);
}
```

For eight snacks, `Math.random() * snacks.length` is at least `0` and less than `8`. Rounding down gives indexes `0` through `7`. Repeated orders are allowed; randomness does not promise a different choice each time.

One answer to the new-request challenge is to change only Bingsu's `order` value:

```javascript
{ id: "bingsu", order: "Could I try the shaved ice, please?", hint: "Look for the shaved-ice dessert." }
```

To check that edit, temporarily set `const index = 3` in `showOrder()`, save, and refresh. Restore the random-index line afterward. The count still stays at zero until Activity 4.

## Activity 3

The answer-checking function, including the useful-hint challenge, is:

```javascript
function checkAnswer(snackId) {
  if (snackId === currentOrder.id) {
    feedback.textContent = "That's the one!";
    feedback.dataset.kind = "success";
  } else {
    feedback.textContent = "Try again! " + currentOrder.hint;
    feedback.dataset.kind = "hint";
  }
}
```

`===` compares the chosen card's identifier with the current order's identifier. An incorrect choice reaches `else`; joining the message and `currentOrder.hint` gives the player a clue. Neither branch changes the count at this stage.

## Activity 4

The final rules replace the Activity 3 function:

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

| Player action | Expected result |
|---|---|
| Incorrect choice | A hint appears. The order and count stay unchanged. |
| Correct choice before the goal | The count increases once. All snack buttons are disabled, and **Next visitor** appears. |
| **Next visitor** | A new order is chosen and the menu becomes available again. The count does not increase. |
| Correct choice at the goal | The progress bar is full and the finish screen replaces the game board. |
| **Play again** | The count returns to zero, the finish screen disappears, and a new order is shown. |

For the shorter-round challenge, change the existing constant to:

```javascript
const totalVisitors = 3;
```

The game now finishes after three correct orders. `updateProgress()` also reads this value to set the goal text and progress-bar maximum. Restore `5` for the original round.

## Extra snack challenge

For example, add this button inside `.menu-grid` in `index.html`:

```html
<button class="snack-button" type="button" data-snack="popcorn">
  <span class="snack-emoji" aria-hidden="true">🍿</span>
  <strong>Popcorn</strong>
  <span class="description">Popped corn kernels</span>
</button>
```

Add a comma after the previous object in the `snacks` array, then add:

```javascript
{ id: "popcorn", order: "I'd like the popped corn kernels!", hint: "Look for the popcorn card." }
```

The button's `data-snack` and the object's `id` are both `"popcorn"`. The provided click listeners include the new card, and `snacks.length` includes the new order.

With this item appended after the original eight, temporarily use `const index = 8` in `showOrder()` to check the new order and both correct and incorrect choices. Restore the random-index line afterward.

## Notes for facilitators

Keep the four stages distinct: opening a practice board, choosing orders, checking choices, and tracking a complete round. Students should save and refresh after each change, and replace functions rather than append duplicate definitions.

The HTML, CSS, menu data, and page helpers are scaffolding provided to the student. The learning focus is the JavaScript rules they change. The game is deliberately untimed and uses visible menu descriptions, so no prior knowledge of Korean snacks is required.
