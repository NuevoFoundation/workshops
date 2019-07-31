---
title: "Activity 5 - Fade in"
description: "Setting up headphones"
weight: 11
draft: false
---
Now that you have one effect in your song, let\'s try to fade in the
introduction of our song.

1.  Add another `setEffect` function call into your code, but ensure the
    following parameters are present:
    ![](img/screenshot-seteffect2.png){.rounded .mx-auto .d-block}
2.  Set the effectType to VOLUME.
3.  Use the \"Every Effect Explained in Detail\" reference guide to see
    which parameters `VOLUME` has. To adjust the loudness of an audio
    clip, use the GAIN `effectParameter`.
4.  If we want to make something sound like it is fading in, we must
    have the sound\'s volume start at nothing and increase it until
    around 0 decibels. To do so, set effectStartValue at a very low
    value, and effectEndValue to be a higher value.
    **Hint:** Volume is measured in decibels. In decibels, the more
    positive a number is, the louder it gets. Also, try not to exceed 0
    decibels.

5.  Set values for effectStartLocation and effectEndLocation to specify
    when to start and stop the fade in effect.
