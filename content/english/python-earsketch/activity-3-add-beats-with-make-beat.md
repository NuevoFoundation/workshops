---
title: "Activity 3 - Add beats to your song with makeBeat"
description: "Setting up headphones"
prereq: "Python Basics: Functions"
difficulties: ["intermediate"]
weight: 7
draft: false
---

Let's try to add some interesting beats to the song! We will be using the `makeBeat` function.

Before we use the `makeBeat` function, let's understand how `strings` work.

## Strings

Anything you see in **quotation marks** is called a **string**. A string is just a sequence of characters (whether they are letters, numbers, or symbols). For example, `"hello world"` is a string.

For `makeBeat`, we will be mix and matching the following three types of beats to create an interesting beat for our song:

- `"0"` plays the sound for one note.
- `"-"` rests (i.e. creates silence) for one note.
- `"+"` ties (i.e. holds) the sound or silence for an additional note.

To make things easier, we will create strings that are exactly 16-characters in length when creating our beat. You can also use strings of any length, but making them multiples of 16 in length (i.e., 16, 32, 48, etc.) work best.

Here are some examples of valid beats:

- `"0+------0+------"`: plays 2 sounds per measure, and each sound lasts for 2 notes.

<figure>
    <audio
        controls
        src="../audio/makebeat1.mp3">
            Test audio to see if your browser supports the audio element. If you cannot play the audio, it likely means your browser does not support this. 
            <code>audio</code> element.
    </audio>
</figure>

- `"0-0-0-0-0-0-0-0-"`: plays 8 sounds per measure, and each sound lasts for 1 note.

<figure>
    <audio
        controls
        src="../audio/makebeat2.mp3">
            Test audio to see if your browser supports the audio element. If you cannot play the audio, it likely means your browser does not support this. 
            <code>audio</code> element.
    </audio>
</figure>

- `"0++0++0++0++0-0-"`: plays 6 sounds in a swinging pattern.

<figure>
    <audio
        controls
        src="../audio/makebeat3.mp3">
            Test audio to see if your browser supports the audio element. If you cannot play the audio, it likely means your browser does not support this. 
            <code>audio</code> element.
    </audio>
</figure>

Now, it's time to add beats to your song!

## Activity 3

1. Make sure the cursor in your program is below the `fitMedia()` functions.

2. Scroll through the **API** list on the left side of the code editor and find the first `makeBeat()` function.

<img src="../img/screenshot-find-makebeat.png" height="400"/>

3. Click on the **Paste** icon on the right corner of `makeBeat()` to insert the function below the `fitMedia` function.

<img src="../img/icon-paste.png"/>

4. Once again, when you paste the function, Earsketch produces some `parameters` that we will need to replace later.

<img src="../img/screenshot-makebeat.png" />

You can specify your own values for the following:

- `sound` - Navigate to the **Sounds** pane. Click on **GENRES** and then click on the **MAKEBEAT** filter. Find a sound you like from this list.

<img src="../img/screenshot-makebeat-sounds.png" height="400"/>

- `track` - Select any positive integer as the track number. Make sure it's a track number that you haven't used yet.
- `start` - Specify which measure to start the beat.
- `beat` - Specify the beat you wish to add as a `string`, which should be 16 characters long (or any multiple of 16).

If you are not sure what values to choose, try this:

- `makeBeat(OS_CLAP01, 6, 1, "--0+--0+--0+0+0+")`

Afterwards, add some more `makeBeat` functions to your song. Try to add at least two `makeBeat` functions.

Your code should now look something like this:

```python
from earsketch import *

setTempo(120)

fitMedia(HOUSE_DEEP_CRYSTALCHORD_001, 3, 1, 5)
fitMedia(HOUSE_DEEP_CRYSTALCHORD_002, 3, 5, 9)

fitMedia(RD_UK_HOUSE__AIRYPAD_1, 1, startMeasure, endMeasure)
fitMedia(HOUSE_MAIN_BEAT_002, 4, startMeasure, endMeasure)
fitMedia(HOUSE_ROADS_BASS_001, 5, startMeasure, endMeasure)  

fitMedia(Y37_ORGAN_1, 2, startMeasure, endMeasure)
fitMedia(HOUSE_ROADS_BASS_001, 5, startMeasure, endMeasure)
fitMedia(RD_UK_HOUSE__ARPLEAD_1, 6, startMeasure, endMeasure)

makeBeat(OS_CLAP01, 6, 1, "--0+--0+--0+0+0+")
makeBeat(OS_CLAP01, 6, 2, "--0+--0+--000000")
makeBeat(OS_CLAP01, 6, 3, "0+-0+-0+-0+-0-0-")
makeBeat(OS_CLAP01, 6, 4, "0+-0+-0+-0+-0000")
```