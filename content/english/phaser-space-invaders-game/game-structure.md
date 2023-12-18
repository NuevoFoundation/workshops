---
title: "The Game's File Structure"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 2
---

As you can see, we've already created many files for you. The structure of the game has already been laid out, and you will be filling each file with content. So, in order to begin, we must first have at least a basic understanding of what each file does and how they relate to each other.

Firstly, `phaser.min.js` is simply a JavaScript file that contains code that allows the game to run Phaser, the framework we are using to make the game. You don't have to worry about this file very much, and you won't be editing it.

Next, look at `index.html`. This is an html file that makes up the backbone of our entire project by importing all of the JavaScript files that are used.

Next is `Game.js`. This is the file that essentially represents our game. Within it, the actual game code branches out through `Scene1.js` and `Scene2.js`. These scene files are where you're going to write the majority of your code, and we will go into further details on Phaser scenes a bit later.

`PlayerBullet.js`, `EnemyBullet.js`, and `Explosion.js` are files that create specific objects for our game.

Finally, the `assets` folder contains all of the images that our game uses.