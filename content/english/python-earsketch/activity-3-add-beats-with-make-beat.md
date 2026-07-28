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
- `"+"` ties (i.e. holds) the sound for an additional note.
- `"-"` rests (i.e. creates silence) for one note.

When creating a beat, to simpilfy the process, we will create strings that are exactly 16-characters in length. You can also use strings of any length, but they should be multiples of 16 (i.e., 16, 32, 48, etc.)

Here is an example of valid beats:

- `"0+------0+------"`: plays 2 sounds per measure, and each sound lasts for 2 notes.
- `"0-0-0-0-0-0-0-0-"`: plays 8 sounds per measure, and each sound lasts for 1 note.
- `"0++0++0++0++0-0-"`: plays 6 sounds in a swinging pattern.

Now, it's time to add beats to your song!

## Activity 3

1. Make sure the cursor in your program is below the `fitMedia()` functions

2. Scroll through the **API** list on the left side of the code editor and find the `makeBeat()` function.

3. Click on the **Paste** icon on the right corner of `makeBeat()` to insert the function below the `fitMedia` function.

4. Once again, when you paste the function, Earsketch produces some `parameters` that we will need to replace later.

You can specify your own values for the following:

- `sound` - Navigate to the \'Sounds\' pane and find a sound you like. You should use a short sound such as a **clap** or a **banjo drum**.
- `track` - Select any positive integer as the track number.
- `start` - Specify which measure to start the beat.
- `steps` - Specify the beat you wish to add, as a `string`. Ensure the string is 16 characters long (or any multiple of 16).
- `stepsPerMeasure` - Specify the length of time for a single character in your beat string. The best value will be 16 for now.

If you are not sure what values to choose, try this:

- `makeBeat(OS_CLAP01, 6, 1, "--0+--0+--0+0+0+", 16)`

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

makeBeat(OS_CLAP01, 6, 1, "--0+--0+--0+0+0+", 16)
makeBeat(OS_CLAP01, 6, 2, "--0+--0+--000000", 16)
makeBeat(OS_CLAP01, 6, 3, "0+-0+-0+-0+-0-0-", 16)
makeBeat(OS_CLAP01, 6, 4, "0+-0+-0+-0+-0000", 16)
```