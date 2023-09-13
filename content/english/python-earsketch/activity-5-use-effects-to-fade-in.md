---
title: "Activity 5 - Use effects to fade in"
description: "Setting up headphones"
weight: 9
prereq: "Python Basics: Print, Comments, Functions"
difficulty: "Intermediate"
draft: false
---
<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/x3_gZYBX00I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><p>

Now that you have one effect in your song, let's try to fade in the introduction of our song.

In activity 4, we used `setEffect` function to apply an effect to a specific track
for the entire duration of the song, but what if you only want a
specific section of your song to have an effect? Use the `setEffect`
function with more parameters!

<img src="../img/screenshot-seteffect2.png" alt="Code snippet" width="60%"/>


- `effectStartValue`: The starting value applied to the parameter
- `effectStartLocation`: The measure at which the starting value is set
- `effectEndValue`: The ending value of the parameter
- `effectEndLocation`: The measure at which the ending value is set

This version of the `setEffect` allows for us to perform *automation*
on a specific piece of our song. Automation is a way to change the value
of an effect over time. One use of automation is to make a song fade in
or fade out. To do so, we must adjust the **GAIN** `effectParameter`'s
volume in the **VOLUME** `effectType` over time. For example, if we
define our `effectStartValue` at -60 db and our `effectEndValue` at 0
db, it will sound like our song is fading in over time. To adjust the
starting point and length of the effect, specify the
`effectStartLocation` and `effectEndLocation`.

![DJ Nuvi](https://media.giphy.com/media/OTk8FTCvQ5WQQfJqVf/giphy.gif)

## Add another setEffect function to your song

1. Add another `setEffect` function call into your code, but ensure all 7 parameters are present in the call.
2. Set the `effectType` to VOLUME.
3. Use the "Every Effect Explained in Detail" reference guide to see which parameters `VOLUME` has. To adjust the loudness of an audio clip, use the GAIN `effectParameter`.
4. If we want to make something sound like it is fading in, we must have the sound's volume start at nothing and increase it until around 0 decibels. To do so, set effectStartValue at a very low value, and effectEndValue to be a higher value.

{{% notice tip %}}
*Hint:* Volume is measured in decibels. In decibels, the more positive a number is, the louder it gets. Also, try not to exceed 0 decibels.
{{% /notice %}}

5. Set values for `effectStartLocation` and `effectEndLocation` to specify when to start and stop the fade in effect.

Your code should now look something like this:

```python
    from earsketch import *

    init()
    setTempo(120)

    fitMedia(HOUSE_DEEP_CRYSTALCHORD_001, 3, 1, 5)
    fitMedia(HOUSE_DEEP_CRYSTALCHORD_002, 3, 5, 9)

    # Section A
    def sectionA(startMeasure, endMeasure):
        fitMedia(RD_UK_HOUSE__AIRYPAD_1, 1, startMeasure, endMeasure)
        fitMedia(HOUSE_MAIN_BEAT_002, 4, startMeasure, endMeasure)
        fitMedia(HOUSE_ROADS_BASS_001, 5, startMeasure, endMeasure)

    # Section B
    def sectionB(startMeasure, endMeasure): 
        fitMedia(Y37_ORGAN_1, 2, startMeasure, endMeasure)
        fitMedia(HOUSE_ROADS_BASS_001, 5, startMeasure, endMeasure)
        fitMedia(RD_UK_HOUSE__ARPLEAD_1, 6, startMeasure, endMeasure)

    sectionA(1, 9)
    sectionB(9, 17)
    sectionA(17, 25)
    setEffect(2, DELAY, DELAY_FEEDBACK, -6.0)
    setEffect(2, DELAY, DELAY_TIME, 1200.0)
    setEffect(0, VOLUME, GAIN, -60, 1, 0, 3)

    finish()
```
