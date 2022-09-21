---
title: "Creating Animations"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 7
---

## Animation in Phaser

Animation works by showing a set of images back to back very quickly. When we do this quickly, our mind sees it as movement. In a way, you're tricking the mind to think that this set of images is just one thing that is moving.

![animation](../media/animation.png)

We use spritesheets for things we want to be animated because we can create that animation by scrolling through the spritesheets. In order to animate spritesheets, there are two steps we must do.

The first step is to create the "instructions" for the animation

```javascript
this.anims.create({
    key: "dude_anim",
	frames: this.anims.generateFrameNumbers("dude"),
	frameRate: 10,
	repeat: -1
});
```

This creates an animation called "dude_anim" that works on top of "dude". The frame rate is essentially the speed of the animation. Repeat essentially refers to how many times the animation repeats when played, and a negative number means that the animation plays infinitely.

The next step is to simply tell the game to play the animation specified in our instructions. This can also be done in `create()`.

```javascript
this.dude.anims.play("dude_anim");
```

{{% notice note %}}

When you make this play statement, the line must be put after dude is placed onto the screen, because code is written top to bottom, so if we make this play statement before we place the dude, the computer won't know what to animate.

{{% /notice %}}

Try animating the dude from the last lesson. Feel free to play around with values and see how they change the end result.
<iframe height="800px" width="100%" src="https://replit.com/@nuevofoundation/PhasorAnimation?lite=true" scrolling="yes" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>