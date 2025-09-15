---
title: "Activity 1 - Set tempo & add sounds"
description: "Setting up headphones"
prereq: "Python Basics: Print, Comments, Functions"
difficulty: "Intermediate"
weight: 5
draft: false
---
<p style="text-align: center;"><iframe width="560" height="315" src="https://youtube.com/embed/INHMwQoni-M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

Let's take a closer look at the pre-existing code and understand what it means. 

<img src="../img/screenshot-setup-complete.png" height="400"/>

The `setTempo()` function allows you to set the overall project tempo. Tempo is the speed at which a piece of music is played. Changing a project's tempo allows for different styles of music to be created. Try changing the tempo of your `setTempo` function by changing the number in the block and see what happens! Please make sure it is a number between 45-220. Below are some suggestions for tempos you can use.

<img src="../img/img-tempo1.png" height="200"/>

Now that our tempo is set, it is time to add sounds. To do so, we must utilize the `fitMedia()` function. We will be placing the new code below the `setTempo()` function.

## Activity 1

1. Make sure the cursor in your program is below the `setTempo()` functions

<img src="../img/screenshot-cursor.png" height="200"/>

2. Scroll through the **API** list on the left side of the code editor and find the `fitMedia()` function.

<img src="../img/screenshot-find-fitmedia.png" height="400"/>

3. Click on the **Paste** icon on the right corner of `fitMedia()` to insert the function below the `setTempo` function.

<img src="../img/icon-paste.png"/>

4. You may notice that when you paste the function, Earsketch produces some placeholder texts that we will need to replace later. These placeholder texts are also known as `parameters`.

<img src="../img/screenshot-fitmedia.png" />

You can specify your own values for the following:

- `sound` - Navigate to the \'Sounds\' pane and find a sound you like.
- `track` - Select any positive integer as the track number.
- `start/end` - These parameters are quantified in measures. A measure is a segment of time which correlates to a specific number of beats.

If you are not sure what values to choose, try this:

- `fitMedia(YG_TRAP_ELECTRIC_PIANO_FILTERED_1, 3, 1, 17)`

Your code should now look something like this:

```python
from earsketch import *

setTempo(120)
fitMedia(YG_TRAP_ELECTRIC_PIANO_FILTERED_1, 3, 1, 17)
```

{{% notice warning %}}
Make sure the capitalization of the method call is correct. Most programming languages, Python included, are case sensitive. This means that adding capital letters can call a different function than expected. For example: `fitMedia()` is not the same as `FitMedia()`.
{{% /notice %}}

6. Once you have input your own parameters, press run, then click on play to listen to your audio clip!

<img src="../img/icon-play.png" />

- **If you see any red text, you have encountered some errors! Please ask for help.** The `fitMedia()` function is the backbone to making music in Earsketch. We will be using this function a lot, so if you have any questions regarding its usage, please ask!

{{% notice info %}}

Digital Audio Workstation (DAW) is the area which the sounds appear in. It is at the center top of your EarSketch window. The following is an example of how different sections of a song may look in the DAW.

<img src="../img/screenshot-daw.png" height="400"/>

{{% /notice %}}