---
title: "Activity 3 - Organize your songs using functions"
description: "Setting up headphones"
prereq: "Python Basics: Functions"
difficulty: "Beginner"
weight: 8
draft: false
---

In Earsketch, functions are mostly used to organize different sections of a song. The most common musical form is A-B-A where each section is
four measures in length, and the A sections sound different from the B section.

Now that we learned how to use functions, let's try to use them to organize our songs better.

1.  Define your function with a `startMeasure` parameter and
    `endMeasure` parameter.
2.  Place the sounds you would like to have the function represent
    underneath your function definition.
3.  Try to make multiple sections of a song (verse, chorus, intro, etc.)
    and define them with your functions. If you don't do this, and only
    use multiple `fitMedia` calls, you will notice that your program
    will become long and hard to understand. To help avoid having a
    large project file, use functions!

Your code should now look something like this:
    
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

    finish()