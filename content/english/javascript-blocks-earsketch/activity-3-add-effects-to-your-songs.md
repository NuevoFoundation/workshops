---
title: "Activity 3 - Add effects to your song"
description: "Add effects to your songs"
weight: 5
prereq: "None"
difficulty: "Beginner"
draft: false
---

## Effects in EarSketch

**Effects** allows the producer to alter the sound of the audio clip into its own unique sound. Similar to how we used `fitMedia()` to add new audio clips, we must use the `setEffect()` function to define specific effects for each audio clip. It is important to note that multiple effects can be placed on the same track. This allows for the producer to combine multiple effects together. Earsketch has many effects built-in. To reference all the effects, visit this [link](https://earsketch.gatech.edu/earsketch2/#?curriculum=5-1-0&language=python) and make sure *Curriculum* pane is selected in the navigation bar.

Before we start adding effects to our song, let's breakdown the pieces of the two `setEffect` functions:

<img src="../img/screenshot-seteffect1.png" height="30"/>

- `track`: The track number to which the effect is applied to. Note: To apply an effect to the Master track, use 0 as the value for track. The master track is where all the audio is collectively played together. This is an easy way to apply an effect to all the sounds being processed.
- `effectType`: The specific effect being used
- `effectParameter`: The setting for the effect being used
- `effectValue`: The value applied to the effectParameter
<style>
* {
  box-sizing: border-box;
}

.column {
  float: left;
  width: 33.3%;
}

/* Clearfix (clear floats) */
.row::after {
  content: "";
  clear: both;
  display: table;
}
</style>

<div class="row">
  <div class="column">
    <img src="../img/Robot_2_Pink.PNG" width="45%">
  </div>
  <div class="column">
    <img src="../img/Robot_1_Green.PNG" width="45%">
  </div>
  <div class="column">
    <img src="../img/Robot_2_Blue.PNG" width="45%">
  </div>
</div>

## Add setEffect function to your song

Now that we are more familiar with using effects, let's add an effect to our song.

1. Find the `setEffect` function block. There are two `setEffect` block; choose the topmost one. Drag the block into the script below your existing code blocks.
2. We need to replace the parameters with our own values. Use the dropdown to replace `track` with 2 (or any number you wish).
3. Use the dropdown to see the various different effects that can be selected for the `effectType` parameter. Let's select DELAY as `effectType`.
4. Now that we have chosen our `effectType`, we need a `parameter`. Let's select DELAY_FEEDBACK for `parameter`.
5. For the final parameter, input a valid value. Since we have chosen DELAY_FEEDBACK, we must specify a number between -120.0 and -1.0. Example: Use -6.0 as your effect value for DELAY_FEEDBACK.

Your code should now look something like this:

<img src="../img/screenshot-set-effect-1.png" height="400"/>
