---
title: "Activity 4 - Use effects to fade in"
date: 2019-07-23T11:45:38-07:00
weight: 6
draft: false
---

Now that you have one effect in your song, let's try to fade in the introduction of our song.

In activity 3, we used `setEffect` function to apply an effect to a specific track for the entire duration of the song, but what if you only want a specific section of your song to have an effect? Use the `setEffect` function with more parameters!

<img src="../img/screenshot-seteffect2.png" height="30"/>

- `startValue`: The starting value applied to the parameter
- `start`: The measure at which the starting value is set
- `endValue`: The ending value of the parameter
- `end`: The measure at which the ending value is set

This version of the `setEffect` allows for us to perform *automation* on a specific piece of our song. Automation is a way to change the value of an effect over time. One use of automation is to make a song fade in or fade out. To do so, we must adjust the **GAIN** `parameter`'s volume in the **VOLUME** `effectType` over time. For example, if we define our `startValue` at -60 db and our `endValue` at 0db, it will sound like our song is fading in over time. To adjust the starting point and length of the effect, specify the `start` and `end`.

![DJ Nuvi](https://media.giphy.com/media/OTk8FTCvQ5WQQfJqVf/giphy.gif)

## Add another setEffect function to your song

1. Add another `setEffect` block into your code, but ensure that 7 parameters are present in the block.
2. Select VOLUME for `effectType` using the dropdown.
3. Select GAIN for `parameter` using the dropdown.
4. If we want to make something sound like it is fading in, we must have the sound's volume start very low and increase it gradually. To do so, set `startValue` at a very low value (such as -60), and `endValue` to be a higher value (such as 0).

{{% notice tip %}}
*Hint:* Volume is measured in decibels. In decibels, the more positive a number is, the louder it gets. Also, try not to exceed 0 decibels.
{{% /notice %}}

5. Set values for the `start` and `end` parameters to specify when to start and stop the fade in effect.

Your code should now look something like this:

<img src="../img/screenshot-set-effect-2.png" height="400"/>
