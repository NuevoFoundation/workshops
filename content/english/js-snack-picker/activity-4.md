---
title: "Activity 4: Bring it to life (animation)"
date: 2026-05-07T00:00:00-07:00
draft: false
weight: 4
---

The game works! But every click feels the same. Let's add a big **bounce** so the card pops every time a new snack appears, and switch the button to Korean once they've started playing. 🎀

## Step 1: Add a bouncy pop animation in CSS

At the bottom of `styles.css`, add:

```css
/* Bouncy "pop" animation: shrinks + rotates in, then settles.
   Big enough that students go "ooh!" every click. */
@keyframes pop {
  0%   { transform: scale(0.5) rotate(-6deg); opacity: 0;   }
  40%  { transform: scale(1.15) rotate(4deg);  opacity: 1;   }
  70%  { transform: scale(0.95) rotate(-2deg);              }
  100% { transform: scale(1)    rotate(0);     opacity: 1;   }
}

/* Any element with the .pop class plays the animation once.
   The cubic-bezier curve gives a springy "bouncing ball" feel. */
.pop {
  animation: pop 0.55s cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

## Step 2: Trigger the animation from JavaScript

We can't just leave the `.pop` class on the card forever, because it would only animate once. The trick is to **remove and re-add** the class on every click.

Update `showSnack()` in `script.js` to look like this:

```javascript
function showSnack() {
  const snack = pickRandomSnack();
  emojiEl.textContent     = snack.emoji;
  nameEl.textContent      = snack.name;
  pronounceEl.textContent = snack.pronounce;
  factEl.textContent      = snack.fact;
  didYouKnowEl.innerHTML  = "<strong>Did you know?</strong> " + snack.didYouKnow;
  didYouKnowEl.hidden     = false;

  // Find the whole card, remove the animation class, then add it back.
  // The void line below forces the browser to "see" the change so the
  // animation actually replays from the beginning every click.
  const card = document.getElementById("card");
  card.classList.remove("pop");
  void card.offsetWidth;
  card.classList.add("pop");
}
```

Refresh and click. The card should bounce in every time! 🪩 If you don't see the bounce, double-check that the `.pop` rule is in your `styles.css`.

## Step 3: Switch the button to Korean after the first pick

The first time the page loads, the button says **"Pick a snack! / 간식 골라줘!"**. After the first click, swap it to Korean to invite another pick.

Add this line at the end of `showSnack()`:

```javascript
button.textContent = "Try another snack / 다른 간식 보기";
```

## You did it! 🎉

You just built a real, working JavaScript mini-game with:

- An HTML skeleton
- A cute Nuevo CSS theme
- A bilingual title and button (English + Korean!)
- A random picker using arrays and `Math.random()`
- A click-driven, bouncy CSS animation

Show it to a friend, share the screen with your class, or send it to your family. 사랑해, Nuvi! 💕

## 🌶️ Your turn: add your favorite snack

Open `script.js` and add **your favorite Korean snack** (or any snack from your culture!) to the `snacks` array. Pick an emoji, write the name, add a pronunciation guide, and write a one-line fact about it. Make sure to keep the comma between items!

```javascript
{ emoji: "🍓", name: "Your snack", pronounce: "(YOUR-snack)", fact: "Why you love it!", didYouKnow: "Where it comes from!" }
```

Refresh the page and click the button until your snack appears. 🎉

## Stretch challenges (if you finish early)

1. **No repeats.** Make sure the picker never shows the same snack twice in a row.
2. **Favorites button.** Add a little ❤️ button under the snack that saves the name to a list at the bottom.
3. **Sound effect.** Play a tiny "pop" sound when the snack changes. Use the HTML `<audio>` element.
4. **K-pop edition.** Replace the snacks array with K-pop songs, K-dramas, or your favorite Seoul neighborhoods.
5. **Share button.** Add a button that copies "I just got recommended {snack name}!" to the clipboard with `navigator.clipboard.writeText(...)`.
