---
title: "Placing things into Phaser"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 5
---

## Placing Text

Now, you will learn how to place things within Phaser. Look at the repl below.

Let's first go over how to place text!

```javascript
message = this.add.text(20, 10, "Hello World!", {
	font: "25px Arial",
	fill: "white"
});
```

These lines of code create a variable named "message." This variable adds the text "Hello World" to the (X, Y) coordinate (20, 10) on our game window. The code also specifices that the text is created to be the color white, have font Arial, and have font size 25 px.

Put this line in your `create()` method at the bottom of the page and see if it pops up in your game window.

{{% notice note %}}

1. When creating text, the variable name is not the text that gets displayed the screen, it is what you put in quotations
2. This syntax can also be used to place text that is stored in a String variable.

{{% /notice %}}

{{% notice warning %}}

### Help! My game window is very small!

Don't worry, it's actually relatively big, but repl minimizes it as default. You can extend your window view by dragging around the bars in between them.

{{% /notice %}}

## Placing a Background

Texts are very simple, but when we want to use our own custom sprites for the game (which you almost always will), you have to first load the sprite in preload() before you specify its location in create().

Let's start by creating a background. Put this code into your `preload()` method.

```javascript
this.load.image('background', 'assets/sky.png');
```

This simply loads the image into the game. Next, let's add this image to the game with `create()`:

```javascript
this.add.image(400, 300, 'sky');
```

This line simply places the image on coordinate (400, 300). Try it out, and see if your background is no longer a black screen!

{{% notice note %}}

The coordinate (400, 300) refers to the location where we are placing the center pixel of our image. This means that (400, 300) will be the center of the image. We are placing the image here so that it covers the whole screen like a background should.

{{% /notice %}}

## Placing a Character

Next, let's put a character into our world.

The code that goes into your preload() function looks like this:

```javascript
this.load.spritesheet('dude', 'assets/dude.png', {
    frameWidth: 32,
    frameHeight: 48
});
```

This requires a bit more code because it is a spritesheet instead of a simple sprite. Spritesheets look like this:
![dude](../media/example-dude.png)
This is the spritesheet for our character. Spritesheets are essentially a collection of sprites of a single character or thing in multiple positions. When played back to back, they will create animation for our game (which we will describe in more detail in the next lesson). Although it is obvious to us that it is a bunch of images of the same character, the computer isn't able to easily detect this on its own. So we have to have more syntax to tell the computer how big each character sprite is in the spritesheet (in this case, 32x48).

The syntax to place this spritesheet in `create()` is nearly the same as with the image, but with a physics tag:

```javascript
dude = this.physics.add.sprite(250, 200, 'dude');
```

In this line, we are creating variable "player" that adds the first image in the spritesheet at coordinate (250, 200). The image is also given the name "dude."

In this line, player is the name of a variable that we are creating. 250 and 200 are the X and Y coordinates that we have placed the sprite, so it will be placed at the coordinate (250, 200) on our screen. "dude" is the name of our sprite, but it won't come into play in this particular lesson.

Try adding in the character! Do you see the character on your screen?

{{% notice note %}}

1. In order to see the character, the dude variable in `create()` MUST be created after the background. This is because code is read by the computer from top to bottom, so if the character is placed before the background, then the computer will put the background on top of the character, covering him and making him not visible by the user.
2. The dude is supposed to be looking to the left because at first placement, spritesheets will always be placed in the first entry in the sheet, and for our dude, he's looking to the left

{{% /notice %}}

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/PhasorPlacingThings" target="_blank">Launch Replit</a>