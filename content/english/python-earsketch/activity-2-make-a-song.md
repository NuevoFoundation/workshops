---
title: "Activity 2 - Make a song!"
description: "Setting up headphones"
prereq: "Python Basics: Print, Comments, Functions"
difficulties: ["intermediate"]
weight: 6
draft: false
---
<p style="text-align: center;"><iframe width="560" height="315" src="https://youtube.com/embed/GVG8DlG1Tuo" title="Activity 2 - Make a song! - YouTube video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

Now that you have learned how to add sounds to Earsketch, let's try and make a song! You should already have one audio clip in Earsketch, but songs are made up of various instruments, so we need to add more audio clips.

1. Add another `fitMedia()` call.
2. Find an audio clip you would like to add to your current song and input it under the `fileName` parameter.
3. The `track` parameter should be a unique number. This will allow us to place our sounds on different tracks. Having different sounds on different tracks allows us to maintain organization of our sounds and play different sounds at the same time. Example: If the first `fitMedia()` call is on track 1, the second `fitMedia()` call should be on track 2.
4. Complete the rest of the parameters.
5. Repeat these steps until you have at least four different audio sounds in your song.

Your code should now look something like this:
```python
from earsketch import *

setTempo(120)

fitMedia(HOUSE_DEEP_CRYSTALCHORD_001, 3, 1, 5)
fitMedia(HOUSE_DEEP_CRYSTALCHORD_002, 3, 5, 9)

fitMedia(RD_UK_HOUSE__AIRYPAD_1, 1, 1, 9)
fitMedia(HOUSE_MAIN_BEAT_002, 4, 1, 9)
fitMedia(HOUSE_ROADS_BASS_001, 5, 1, 9)

fitMedia(Y37_ORGAN_1, 2, 9, 17)
fitMedia(HOUSE_ROADS_BASS_001, 5, 9, 17)
fitMedia(RD_UK_HOUSE__ARPLEAD_1, 6, 9, 17)
```

![Robot making a song](https://media.giphy.com/media/9RJRzvIuKGrL3tAchc/giphy.gif)