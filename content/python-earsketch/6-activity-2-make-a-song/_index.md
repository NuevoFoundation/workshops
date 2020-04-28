---
title: "Activity 2 - Make a song!"
description: "Setting up headphones"
prereq: "Python Basics: Print, Comments, Functions"
difficulty: "Beginner"
weight: 6
draft: false
---

Now that you have learned how to add sounds to Earsketch, let's try and make a song! You should already have one audio clip in Earsketch, but
songs are made up of various instruments, so we need to add more audio clips.

1.  Add another `fitMedia()` call.
2.  Find an audio clip you would like to add to your current song and
    input it under the `fileName` parameter.
3.  The `trackNumber` parameter should be a unique number. This will
    allow us to place our sounds on different tracks. Having different
    sounds on different tracks allows us to maintain organization of our sounds and play different sounds at the same time. Example: If the first `fitMedia()` call is on track 1, the second `fitMedia()` call should be on track 2.
4.  Complete the rest of the parameters.
5.  Repeat these steps until you have four different audio sounds in
    your song.

Your code should now look something like this:
    {{% notice %}}

    from earsketch import *\\
    init()
    setTempo(120)\\
    fitMedia(RD_TRAP_BELLLEAD_1, 1, 5, 9)
    fitMedia(YG_TRAP_STRINGS_2, 2, 1, 17) 
    fitMedia(YG_TRAP_ELECTRIC_PIANO_FILTERED_1, 3, 1, 17) 
    fitMedia(YG_TRAP_BASS_9, 4, 1, 9)\\
    finish()
    {{% /notice %}}