---
title: "Answer Key"
date: 2026-05-07T00:00:00-07:00
draft: false
weight: 99
hidden: true
---

Complete reference solution for the Korean Snack Picker workshop. Use this when a student is stuck or as a check that everything works end-to-end.

## Final file structure

```text
snack-picker/
├── index.html
├── styles.css
└── script.js
```

## index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Korean Snack Picker</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <main class="app">
      <h1>🍡 Korean Snack Picker <span class="kr">한국 간식 추천 게임</span></h1>
      <p class="subtitle">Tap the button to discover a tasty Korean snack!</p>

      <div id="card" class="card">
        <div class="emoji">🍱</div>
        <h2 class="snack-name">Press the button to start!</h2>
        <p class="snack-pronounce">&nbsp;</p>
        <p class="snack-fact">Nuvi can't wait to try one with you.</p>
        <p class="snack-did-you-know" hidden></p>
      </div>

      <button id="pickBtn" class="pick-btn">Pick a snack! / 간식 골라줘!</button>

      <footer class="footer">
        Built with <span class="stack">HTML, CSS, JavaScript</span> + AI assistance 🤖
      </footer>
    </main>

    <script src="script.js"></script>
  </body>
</html>
```

## styles.css

```css
/* Nuevo Foundation palette
   Emphasis (dark):   #36374d
   Accents:           #00bed5 (cyan)  #e13126 (red)  #e96469 (coral)
                      #fcb415 (yellow) #fbe6e0 (blush) */

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Segoe UI", "Apple SD Gothic Neo", "Helvetica Neue", sans-serif;
  background: linear-gradient(135deg, #fbe6e0 0%, #ffffff 50%, #fbe6e0 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  color: #36374d;
}

.app {
  text-align: center;
  max-width: 420px;
  width: 100%;
}

h1 {
  font-size: 1.7rem;
  margin-bottom: 0.25rem;
  color: #36374d;
  line-height: 1.3;
}

.kr {
  display: block;
  font-size: 1.1rem;
  color: #737474;
  font-weight: 500;
  margin-top: 0.25rem;
}

.subtitle {
  font-size: 1rem;
  margin-bottom: 1.5rem;
  color: #737474;
}

.card {
  background: #ffffff;
  border-radius: 24px;
  padding: 2rem 1.5rem;
  box-shadow: 0 12px 30px rgba(54, 55, 77, 0.15);
  margin-bottom: 1.5rem;
  border: 3px solid #fbe6e0;
}

.emoji {
  font-size: 5rem;
  line-height: 1;
  margin-bottom: 0.75rem;
}

.snack-name {
  font-size: 1.5rem;
  margin-bottom: 0.25rem;
  color: #36374d;
}

.snack-pronounce {
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
  color: #00bed5;
  font-style: italic;
}

.snack-fact {
  font-size: 1rem;
  color: #505150;
  line-height: 1.4;
}

.pick-btn {
  background: linear-gradient(135deg, #e96469, #e13126);
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  border: none;
  border-radius: 999px;
  padding: 1rem 2rem;
  cursor: pointer;
  box-shadow: 0 8px 20px rgba(225, 49, 38, 0.35);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.pick-btn:hover {
  transform: translateY(-3px) scale(1.03);
  box-shadow: 0 16px 30px rgba(225, 49, 38, 0.55);
}

.pick-btn:active {
  transform: translateY(0) scale(1);
}

.pick-btn:focus-visible {
  outline: 3px solid #fcb415;
  outline-offset: 3px;
}

.snack-did-you-know {
  margin-top: 0.75rem;
  padding: 0.6rem 0.9rem;
  background: #fbe6e0;
  border-radius: 12px;
  font-size: 0.9rem;
  color: #36374d;
  line-height: 1.4;
}

.snack-did-you-know strong {
  color: #e13126;
}

.footer {
  margin-top: 1.25rem;
  font-size: 0.85rem;
  color: #737474;
}

.footer .stack {
  color: #36374d;
  font-weight: 600;
}

@keyframes pop {
  0%   { transform: scale(0.5) rotate(-6deg); opacity: 0;   }
  40%  { transform: scale(1.15) rotate(4deg);  opacity: 1;   }
  70%  { transform: scale(0.95) rotate(-2deg);              }
  100% { transform: scale(1)    rotate(0);     opacity: 1;   }
}

.pop {
  animation: pop 0.55s cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

## script.js

```javascript
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

function pickRandomSnack() {
  const index = Math.floor(Math.random() * snacks.length);
  return snacks[index];
}

const emojiEl      = document.querySelector(".emoji");
const nameEl       = document.querySelector(".snack-name");
const pronounceEl  = document.querySelector(".snack-pronounce");
const factEl       = document.querySelector(".snack-fact");
const didYouKnowEl = document.querySelector(".snack-did-you-know");
const button       = document.getElementById("pickBtn");

function showSnack() {
  const snack = pickRandomSnack();
  emojiEl.textContent     = snack.emoji;
  nameEl.textContent      = snack.name;
  pronounceEl.textContent = snack.pronounce;
  factEl.textContent      = snack.fact;
  didYouKnowEl.innerHTML  = "<strong>Did you know?</strong> " + snack.didYouKnow;
  didYouKnowEl.hidden     = false;

  const card = document.getElementById("card");
  card.classList.remove("pop");
  void card.offsetWidth;
  card.classList.add("pop");

  button.textContent = "Try another snack / 다른 간식 보기";
}

button.addEventListener("click", showSnack);
```

## Teacher notes

- This curriculum is intentionally **remixable**. Students should be encouraged to swap snacks, colors, and copy.
- The `void card.offsetWidth` trick in Activity 4 is the canonical way to restart a CSS animation from JavaScript. If a student asks "why?", the short answer is: it forces the browser to re-evaluate the element's style before re-adding the `.pop` class.
- Stretch challenge #1 (no repeats) is a great spot to introduce a `let lastIndex` variable plus a `while` loop.
- Stretch challenge #2 (favorites) is a good intro to `array.push()` and `array.map().join()` for rendering a list.
- If a student's snack list shows `undefined`, they almost certainly have a typo in one of the property names (`emoji`, `name`, `pronounce`, `fact`, `didYouKnow`).
