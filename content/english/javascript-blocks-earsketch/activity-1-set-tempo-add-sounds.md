---
title: "Activity 1 - Set tempo & add sounds"
description: "Setting up headphones"
prereq: "Python Basics: Print, Comments, Functions"
difficulty: "Intermediate"
weight: 3
draft: false
---

Let's take a closer look at the pre-existing code and understand what it means. 

<img src="../img/screenshot-setup-complete.png" height="400"/>

The `setTempo()` function allows you to set the overall project tempo. Tempo is the speed at which a piece of music is played. Changing a project's tempo allows for different styles of music to be created. Try changing the tempo of your `setTempo` function by changing the number in the block and see what happens! Please make sure it is a number between 45-220. Below are some suggestions for tempos you can use.

<img src="../img/img-tempo1.png" height="200"/>

Now that our tempo is set, it is time to add sounds. To do so, we must utilize the `fitMedia()` function. We will be placing new code below the `setTempo()` function block.

## Activity 1

1. Find the purple `fitMedia()` block on the left side of the code editor.
2. Drag the `fitMedia()` block to insert it below the `setTempo` block.
3. You may notice that when the block is added, Earsketch produces some placeholder texts that we will need to replaced later. These placeholder texts are also known as `parameters`.

<img src="../img/screenshot-parameters.png" height="100"/>

We will be replacing each of these texts with a valid value.

- `sound` - Navigate to the "Sounds" pane and find a sound you like. Click on "sound" in the `fitMedia()` function block, then press the "Paste" button beside the sound you wish to add. The name of the sound should now appear inside of the `fitMedia()` block.
- `trackNumber` - Use the dropdown to select any positive integer as the track number. For this example, select `1`.
- `start/end` - These parameters are positive integers quantified in measures. A measure is a segment of time which correlates to a specific number of beats. Try setting `start` to `1` and `end` to `9`.

Your code should now look something like this:

<img src="../img/screenshot-fit-media.png" height="400"/>

{{% notice warning %}}

Make sure the function blocks and text are placed correctly.

{{% /notice %}}

5. Once you have input your own parameters, press run, then click on play to listen to your audio clip!

    - **If you see any red text, you have encountered some errors! Please ask for help.** The `fitMedia()` function is the backbone to making music in Earsketch. We will be using this function a lot, so if you have any questions regarding its usage, please ask!

{{% notice info %}}

The **Digital Audio Workstation** (DAW) is the area which the sounds appear in. It is at the center top of your EarSketch window. The following is an example of how different sections of a song may look in the DAW.

<img src="../img/screenshot-daw.png" height="400"/>

{{% /notice %}}