---
title: "Activity 1: Build the stage (HTML)"
date: 2026-05-07T00:00:00-07:00
draft: false
weight: 1
---

Every web page needs a **skeleton**. That's what HTML is for, it tells the browser *what* is on the page (a heading, a button, a card), but not yet what it looks like or what it does.

## Step 1: Make a project folder

On your computer, create a new folder called `snack-picker`. Inside it, create three empty files:

```text
snack-picker/
├── index.html
├── styles.css
└── script.js
```

{{% notice tip %}}
Use VS Code: **File → Open Folder…** → pick `snack-picker`, then right-click in the sidebar → **New File**.
{{% /notice %}}

## Step 2: Write the HTML skeleton

Open `index.html` and paste in the code below. Read the comments, they explain every line.

```html
<!DOCTYPE html>
<!-- Tells the browser this is a modern HTML page -->
<html lang="en">
  <head>
    <!-- <meta> tags give the browser info about the page -->
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Korean Snack Picker</title>

    <!-- Hook up our stylesheet so the page looks nice -->
    <link rel="stylesheet" href="styles.css" />
  </head>

  <body>
    <main class="app">
      <h1>🍡 Korean Snack Picker <span class="kr">한국 간식 추천 게임</span></h1>
      <p class="subtitle">Tap the button to discover a tasty Korean snack!</p>

      <!-- The card where we'll show the random snack -->
      <div id="card" class="card">
        <div class="emoji">🍱</div>
        <h2 class="snack-name">Press the button to start!</h2>
        <p class="snack-pronounce">&nbsp;</p>
        <p class="snack-fact">Nuvi can't wait to try one with you.</p>
        <!-- This will hold a "Did you know?" fact once a snack is picked -->
        <p class="snack-did-you-know" hidden></p>
      </div>

      <!-- The button students will click -->
      <button id="pickBtn" class="pick-btn">Pick a snack! / 간식 골라줘!</button>

      <!-- A tiny footer so students see the stack they just used -->
      <footer class="footer">
        Built with <span class="stack">HTML, CSS, JavaScript</span> + AI assistance 🤖
      </footer>
    </main>

    <!-- Hook up our JavaScript at the END of <body>
         so the HTML is loaded before the script runs -->
    <script src="script.js"></script>
  </body>
</html>
```

## Step 3: Open it in your browser

Double-click `index.html`. You should see something like this, plain, but it works! 🎉

Right now everything looks like raw text because we haven't written any CSS yet. That's our next job!

{{% notice tip %}}
**Challenge:** Change the `<h1>` text to your own title (maybe "Yujin's Snack Picker"?), and update the subtitle.
{{% /notice %}}
