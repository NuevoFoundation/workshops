---
title: "Activity 3: Pick a snack (JavaScript)"
date: 2026-05-07T00:00:00-07:00
draft: false
weight: 3
---

The page looks cute, but the button doesn't do anything yet. Time for **JavaScript**, the language that makes pages *interactive*. ⚡

## Step 1: Build a snack list

Open `script.js` and start with a list of snacks. Each snack has five pieces of info: an `emoji`, a `name`, a `pronounce` guide (so you know how to say it!), a one-line `fact`, and a `didYouKnow` historical or cultural tidbit.

```javascript
// An array is just a list. Each item in this list is an "object"
// holding info about one Korean snack.
const snacks = [
  { emoji: "🌶️", name: "Tteokbokki",   pronounce: "(duck-BO-kee)",     fact: "Spicy chewy rice cakes in red pepper sauce.",                                       didYouKnow: "Originally a royal court dish in the 1800s, made with soy sauce, not red pepper." },
  { emoji: "🍙", name: "Kimbap",        pronounce: "(GIM-bap)",         fact: "Rice and veggies rolled in seaweed, perfect for a picnic.",                          didYouKnow: "Often packed for school field trips and picnics across Korea." },
  { emoji: "🥞", name: "Hotteok",       pronounce: "(ho-DDOK)",         fact: "Sweet pancakes filled with brown sugar and cinnamon.",                              didYouKnow: "Brought to Korea by Chinese merchants in the late 1800s." },
  { emoji: "🍧", name: "Bingsu",        pronounce: "(BING-soo)",        fact: "Shaved ice piled with fruit, red bean, and condensed milk.",                        didYouKnow: "Bingsu became popular in Korea during the Joseon era as a royal summer treat." },
  { emoji: "🍫", name: "Pepero",        pronounce: "(PEH-peh-roh)",     fact: "Crunchy chocolate-dipped sticks. Pepero Day is November 11!",                       didYouKnow: "Pepero Day (11/11) is one of Korea's biggest friendship holidays." },
  { emoji: "🍯", name: "Yakgwa",        pronounce: "(YAK-gwa)",         fact: "Honey-glazed flower-shaped cookies, a classic Korean dessert.",                     didYouKnow: "A traditional Joseon dynasty dessert served at weddings and royal ceremonies." },
  { emoji: "🍪", name: "Choco Pie",     pronounce: "(CHO-ko pie)",      fact: "Two soft cakes with marshmallow inside, dipped in chocolate.",                      didYouKnow: "Korean soldiers became fans in the 1970s, turning it into a national snack." },
  { emoji: "🐟", name: "Bungeoppang",   pronounce: "(BUNG-uh-PPANG)",   fact: "Fish-shaped bread filled with sweet red bean paste, a winter street food.",         didYouKnow: "First appeared in Korea in the 1930s, inspired by Japan's taiyaki." }
];
```

## Step 2: Pick a random snack

Add this function to the bottom of `script.js`:

```javascript
// Math.random() gives a number between 0 and 1 (like 0.4271...).
// Multiply by snacks.length to stretch it across the array,
// then Math.floor() rounds DOWN to a whole number, a valid index.
function pickRandomSnack() {
  const index = Math.floor(Math.random() * snacks.length);
  return snacks[index];
}
```

## Step 3: Show the snack on the card

To change what the page shows, JavaScript needs to **find** the HTML elements first, then **update their text**.

```javascript
// Grab the parts of the card we want to update.
// document.querySelector(".class-name") finds the first match.
const emojiEl      = document.querySelector(".emoji");
const nameEl       = document.querySelector(".snack-name");
const pronounceEl  = document.querySelector(".snack-pronounce");
const factEl       = document.querySelector(".snack-fact");
const didYouKnowEl = document.querySelector(".snack-did-you-know");
const button       = document.getElementById("pickBtn");

// This function picks a snack and writes it into the card.
function showSnack() {
  const snack = pickRandomSnack();
  emojiEl.textContent     = snack.emoji;
  nameEl.textContent      = snack.name;
  pronounceEl.textContent = snack.pronounce;
  factEl.textContent      = snack.fact;

  // The "Did you know?" callout starts hidden in the HTML.
  // We fill it in and reveal it the first time a snack is picked.
  didYouKnowEl.innerHTML = "<strong>Did you know?</strong> " + snack.didYouKnow;
  didYouKnowEl.hidden = false;
}

// Run showSnack() every time the button is clicked.
button.addEventListener("click", showSnack);
```

Save and refresh. Click the button, you should see a different Korean snack each time, with its name, how to say it, a fun fact, AND a "Did you know?" tidbit! 🎉

{{% notice warning %}}
**Stuck?** Open the browser's developer tools (right-click, **Inspect**, **Console** tab). Any red text there is a clue about what's wrong. Most bugs are typos in element names like `".snak-name"` instead of `".snack-name"`.
{{% /notice %}}

{{% notice tip %}}
**Challenge:** Add **two of your own favorite snacks** to the `snacks` array. Make sure to keep the same shape (`emoji`, `name`, `pronounce`, `fact`, `didYouKnow`) and don't forget the comma between items!
{{% /notice %}}
