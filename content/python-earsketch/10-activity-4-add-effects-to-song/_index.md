---
title: "Activity 4 - Add effects to your song"
description: "Setting up headphones"
weight: 10
draft: false
---

Activity 4 - Add effects to your song
-------------------------------------

Since we are more familiar with using effects, let\'s add an effect to
our song.

1.  On the API browser on the left, scroll to `setEffect` API.
2.  Insert a `setEffect` function call into your code, using the paste
    ![](img/icon-paste.png){.img-icon} icon.
3.  We need to replace the parameters with our own values. Put an
    integer value for `trackNumber`. Let\'s put 2.
4.  For the rest of the effect parameters, click on the eye
    ![](img/icon-eye.png){.img-icon} on the `setEffect` API and you will
    see a link to \"Every Effect Explained in Detail\". Click on it to
    open this section on the right side of your window.
5.  You may notice that Earsketch has many different variations of
    effects. By default, you should see section 30.4 BANDPASS on the
    right. For now, we will use the DELAY from section 30.4 as
    `effectType` in our `setEffect` function call.
6.  Now that we have chosen our `effectType`, we need an
    `effectParameter`. Navigate to section 30.4 on the right to check
    out different parameters supported for DELAY. Here is a picture of
    that section. We recommend using the DELAY\_FEEDBACK.
    ![](img/screenshot-effect-parameter.png)
7.  For the final parameter, input a valid value. Since we have chosen
    DELAY\_FEEDBACK, we must specify a number between -120.0 and -1.0
    (as shown in the picture above). Example: Use -6.0 as your effect
    value for DELAY\_FEEDBACK.

[Show full code]

Your code should now look something like this:
`                                             from earsketch import *                                             init()                                             setTempo(120)                                                                                          fitMedia(HOUSE_DEEP_CRYSTALCHORD_001, 3, 1, 5)                                             fitMedia(HOUSE_DEEP_CRYSTALCHORD_002, 3, 5, 9)                                                                                          # Section A                                             def sectionA(startMeasure, endMeasure):                                             Â Â Â Â fitMedia(RD_UK_HOUSE__AIRYPAD_1, 1, startMeasure, endMeasure)                                             Â Â Â Â fitMedia(HOUSE_MAIN_BEAT_002, 4, startMeasure, endMeasure)                                             Â Â Â Â fitMedia(HOUSE_ROADS_BASS_001, 5, startMeasure, endMeasure)                                               # Section B                                             def sectionB(startMeasure, endMeasure):                                             Â Â Â Â fitMedia(Y37_ORGAN_1, 2, startMeasure, endMeasure)                                             Â Â Â Â fitMedia(HOUSE_ROADS_BASS_001, 5, startMeasure, endMeasure)                                             Â Â Â Â fitMedia(RD_UK_HOUSE__ARPLEAD_1, 6, startMeasure, endMeasure)                                              sectionA(1, 9)                                             sectionB(9, 17)                                             sectionA(17, 25)                                                                                          setEffect(2, DELAY, DELAY_FEEDBACK, -6.0)                                             setEffect(2, DELAY, DELAY_TIME, 1200.0)                                             setEffect(0, VOLUME, GAIN, -60, 1, 0, 3)                                             finish()       `