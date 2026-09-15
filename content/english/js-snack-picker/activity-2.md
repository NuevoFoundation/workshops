---
title: "Activity 2: Make it cute (CSS)"
date: 2026-05-07T00:00:00-07:00
draft: false
weight: 2
---

CSS is what turns a boring page into something **cute and colorful**. Think of HTML as the bones and CSS as the outfit. 👗

We'll use the **Nuevo Foundation color palette** so our snack picker matches the rest of the Nuevo site.

| Color | Hex | Used for |
|---|---|---|
| Emphasis (dark) | `#36374d` | Headings and body text |
| Coral accent | `#e96469` | Button gradient (light) |
| Red accent | `#e13126` | Button gradient (dark) |
| Cyan accent | `#00bed5` | Pronunciation text |
| Yellow accent | `#fcb415` | Focus outline |
| Blush accent | `#fbe6e0` | Background and card border |

## Step 1: Add the Nuevo background

Open `styles.css` and paste in the code below.

```css
/* Reset the default page margins so our gradient fills the screen */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* Soft blush, white, blush gradient (Nuevo palette) */
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

/* Center everything in a nice column */
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

/* Korean half of the bilingual title sits a touch smaller and softer */
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
```

Refresh `index.html` in your browser. Clean and friendly! 💖

## Step 2: Style the snack card

Add this to the bottom of `styles.css`:

```css
/* The white snack card with a soft shadow */
.card {
  background: #ffffff;
  border-radius: 24px;
  padding: 2rem 1.5rem;
  box-shadow: 0 12px 30px rgba(54, 55, 77, 0.15);
  margin-bottom: 1.5rem;
  /* A subtle border in the Nuevo blush accent */
  border: 3px solid #fbe6e0;
}

/* The big emoji at the top of the card */
.emoji {
  font-size: 5rem;
  line-height: 1;
  margin-bottom: 0.75rem;
}

/* The snack name */
.snack-name {
  font-size: 1.5rem;
  margin-bottom: 0.25rem;
  color: #36374d;
}

/* Pronunciation guide in the cyan Nuevo accent */
.snack-pronounce {
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
  color: #00bed5;
  font-style: italic;
}

/* The fun fact under the name */
.snack-fact {
  font-size: 1rem;
  color: #505150;
  line-height: 1.4;
}
```

## Step 3: Style the button

```css
/* A big, tappable, Nuevo-coral button */
.pick-btn {
  background: linear-gradient(135deg, #e96469, #e13126);
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  border: none;
  border-radius: 999px; /* fully rounded "pill" */
  padding: 1rem 2rem;
  cursor: pointer;
  box-shadow: 0 8px 20px rgba(225, 49, 38, 0.35);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

/* Lift the button on hover with a slight scale + brighter shadow.
   Tiny details like this make the page feel premium. */
.pick-btn:hover {
  transform: translateY(-3px) scale(1.03);
  box-shadow: 0 16px 30px rgba(225, 49, 38, 0.55);
}

/* Press-down effect when clicked */
.pick-btn:active {
  transform: translateY(0) scale(1);
}

/* Yellow Nuevo accent when tabbing with the keyboard (accessibility) */
.pick-btn:focus-visible {
  outline: 3px solid #fcb415;
  outline-offset: 3px;
}

/* "Did you know?" callout that appears under the snack fact */
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

/* Tiny page footer so students see the stack they just used */
.footer {
  margin-top: 1.25rem;
  font-size: 0.85rem;
  color: #737474;
}

.footer .stack {
  color: #36374d;
  font-weight: 600;
}
```

Refresh the page. It should look like a real, friendly little Nuevo app now! 🌸

{{% notice tip %}}
**Challenge:** Swap the card border color from `#fbe6e0` to the cyan accent `#00bed5`, then change it back. Notice how a single hex value can change the whole feel of the page!
{{% /notice %}}
