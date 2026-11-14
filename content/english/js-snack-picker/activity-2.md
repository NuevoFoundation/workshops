---
title: "Activity 2 - Welcome a visitor"
date: 2026-11-14
draft: false
weight: 3
---

Every visitor currently asks for the first snack. Let's give Nuvi a variety of orders!

Keep working in the files you extracted in Activity 1.

## Explore the order list

At the top of `script.js`, find `const snacks = [...]`. An **array** is an ordered list. Each item here is an **object**, which groups information about one snack:

```javascript
{ id: "bingsu", order: "A shaved-ice dessert for me, please!", hint: "Look for the shaved-ice dessert." }
```

The `id` connects the order to a menu card. The `order` is what the visitor says, and the `hint` helps after an incorrect choice.

Array positions are called **indexes**. JavaScript starts counting at `0`, so `snacks[0]` is the first item. `snacks.length` tells us how many items are in the list.

## Choose an order

A **function** is a named group of instructions. Find `function showOrder()` in `script.js`. It currently uses `const index = 0`, so it always chooses the first item.

Replace that entire function, from `function showOrder() {` through its closing `}`, with:

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

The first three lines inside the function do the new work:

- `Math.random()` gives a number from `0` up to, but **not including**, `1`.
- Multiplying by `snacks.length` and rounding down with `Math.floor()` gives a valid list index. With eight snacks, the indexes are `0` through `7`.
- `currentOrder = snacks[index]` remembers the chosen object. `orderText.textContent` puts its `order` text on the page.

The other lines prepare the page for a choice. `setMenuEnabled(true)` is a helper already provided in your starter; it makes the menu buttons available.

Save and refresh several times. You may see different orders, but **random choices can repeat**. The menu still does not check your answers, and the counter still stays at zero.

## Challenge: give a visitor a new request

In the Bingsu object, change only the `order` text to another request for shaved ice. Keep its `id` and `hint` unchanged.

{{% notice tip %}}
Keep the quotation marks around the request and the commas between the object's pieces of information. Refreshing might not choose Bingsu immediately. To check your edit, temporarily use `const index = 3` inside `showOrder()`, then restore the random-index line.
{{% /notice %}}

## Checkpoint

Nuvi can display an order from the list. Next, we will teach the game to recognize the matching snack!

Need a hand? See the [Activity 2 answer](../answer-key/#activity-2).
