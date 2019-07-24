---
title: "Effects in EarSketch"
description: "Setting up headphones"
weight: 9
draft: false
---

**Effects** allows the producer to alter the sound of the audio clip
into its own unique sound. Similar to how we used `fitMedia()` to add
new audio clips, we must use the `setEffect()` function to define
specific effects for each audio clip. It is important to note that
multiple effects can be placed on the same track. This allows for the
producer to combine multiple effects together. Earsketch has many
effects built-in. To reference all the effects, visit this
[link](https://earsketch.gatech.edu/earsketch2/#?curriculum=5-1-0&language=python)

Before we start adding effects to our song, let\'s breakdown the pieces
of the two `setEffect` functions:
![](img/screenshot-seteffect1.png)

-   `track`: The track number to which the effect is applied to. Note:
    To apply an effect to the Master track, use 0 as the value for
    track. The master track is where all the audio is collectively
    played together. This is an easy way to apply an effect to all the
    sounds being processed.
-   `effectType`: The specific effect being used
-   `effectParameter`: The setting for the effect being used
-   `effectValue`: The value applied to the effectParameter

This `setEffect` function is used to apply an effect to a specific track
for the entire duration of the song, but what if you only want a
specific section of your song to have an effect? Use the `setEffect`
function with more parameters!
![](img/screenshot-seteffect2.png)

-   `effectStartValue`: The starting value applied to the parameter
-   `effectStartLocation`: The measure at which the starting value is
    set
-   `effectEndValue`: The ending value of the parameter
-   `effectEndLocation`: The measure at which the ending value is set

This version of the `setEffect` allows for us to perform \"automation\"
on a specific piece of our song. Automation is a way to change the value
of an effect over time. One use of automation is to make a song fade in
or fade out. To do so, we must adjust the **GAIN** `effectParameter`
volume in the **VOLUME** `effectType` over time. For example, if we
define our `effectStartValue` at -60 db and our `effectEndValue` at 0
db, it will sound like our song is fading in over time. To adjust the
starting point and length of the effect, specify the
`effectStartLocation` and `effectEndLocation`.
