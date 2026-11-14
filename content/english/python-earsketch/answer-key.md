---
title: "Python: EarSketch - Answer Key"
date: 2026-04-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
These are sample solutions for the EarSketch workshop. Since EarSketch is a creative music workshop, there are many valid answers. The sound clips, tempos, and track numbers you choose are up to you. Your code is correct if it runs without errors and produces music! The examples below match the sample code shown in each activity.
{{% /notice %}}

## Activity 1: Set Tempo and Add Sounds

Set a tempo and add one sound using `fitMedia()`:

```python
from earsketch import *

setTempo(120)
fitMedia(YG_TRAP_ELECTRIC_PIANO_FILTERED_1, 3, 1, 17)
```

**What each parameter means:**

| Parameter | Value | Meaning |
|-----------|-------|---------|
| Sound clip | `YG_TRAP_ELECTRIC_PIANO_FILTERED_1` | The audio clip to play (browse the Sounds pane to find clips) |
| Track | `3` | Which track to place the sound on (any positive integer) |
| Start | `1` | Measure where the sound begins |
| End | `17` | Measure where the sound ends |

{{% notice tip %}}
**Common student question:** "What tempo should I use?"

Any number between 45-220 works. Here are some guidelines:
- **80-90**: Hip-hop, Trap
- **100-130**: Pop, House
- **140-180**: Drum & Bass, Dubstep
{{% /notice %}}

## Activity 2: Make a Song (Multiple Sounds)

Add four different audio clips on different tracks:

```python
from earsketch import *

setTempo(120)
fitMedia(RD_TRAP_BELLLEAD_1, 1, 5, 9)
fitMedia(YG_TRAP_STRINGS_2, 2, 1, 17)
fitMedia(YG_TRAP_ELECTRIC_PIANO_FILTERED_1, 3, 1, 17)
fitMedia(YG_TRAP_BASS_9, 4, 1, 9)
```

{{% notice tip %}}
**Key concept:** Each `fitMedia()` call should use a different track number. This keeps sounds organized and allows multiple sounds to play at the same time. Track 1 plays one sound, track 2 plays another, and so on.
{{% /notice %}}

## Activity 3: Organize Using Functions

Use functions to create sections of a song in an A-B-A pattern:

```python
from earsketch import *

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
```

**How the A-B-A structure works:**

| Measures | Section | Function called |
|----------|---------|----------------|
| 1-9 | A | `sectionA(1, 9)` |
| 9-17 | B | `sectionB(9, 17)` |
| 17-25 | A (repeat) | `sectionA(17, 25)` |

{{% notice tip %}}
**Common student question:** "Why use functions instead of just more fitMedia calls?"

Functions let you reuse a group of sounds without copying all the `fitMedia` calls. To play section A twice, you just call `sectionA()` twice with different start/end measures instead of writing 6 `fitMedia` calls.
{{% /notice %}}

## Activity 4: Add Effects

Use `setEffect()` to add a delay effect:

```python
from earsketch import *

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
```

**setEffect parameters (4-parameter version):**

| Parameter | Value | Meaning |
|-----------|-------|---------|
| Track | `2` | Which track to apply the effect to (use `0` for master/all tracks) |
| Type | `DELAY` | The effect type |
| Parameter | `DELAY_FEEDBACK` | Which setting to adjust |
| Value | `-6.0` | The value for that setting (range: -120.0 to -1.0 for DELAY_FEEDBACK) |

## Activity 5: Fade In with Effects

Use the 7-parameter `setEffect()` to create a volume fade-in:

```python
from earsketch import *

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
```

**setEffect parameters (7-parameter version for automation):**

| Parameter | Value | Meaning |
|-----------|-------|---------|
| Track | `0` | Master track (applies to all sounds) |
| Type | `VOLUME` | Volume effect |
| Parameter | `GAIN` | Controls loudness |
| Start value | `-60` | Starting volume in decibels (very quiet) |
| Start measure | `1` | When the fade begins |
| End value | `0` | Ending volume in decibels (normal volume) |
| End measure | `3` | When the fade ends |

{{% notice tip %}}
**How the fade-in works:** The volume starts at -60 dB (nearly silent) at measure 1 and gradually increases to 0 dB (normal volume) by measure 3. This creates a smooth fade-in effect for the first 2 measures of the song.

**Volume in decibels:**
- `0 dB` = normal volume (do not exceed this)
- `-60 dB` = nearly silent
- The more negative the number, the quieter the sound
{{% /notice %}}

## EarSketch Quick Reference

| Function | Purpose | Example |
|----------|---------|---------|
| `setTempo(bpm)` | Set the song speed | `setTempo(120)` |
| `fitMedia(clip, track, start, end)` | Add a sound clip | `fitMedia(YG_TRAP_BASS_9, 1, 1, 9)` |
| `setEffect(track, type, param, value)` | Add an effect | `setEffect(2, DELAY, DELAY_FEEDBACK, -6.0)` |
| `setEffect(track, type, param, startVal, startMeasure, endVal, endMeasure)` | Automate an effect over time | `setEffect(0, VOLUME, GAIN, -60, 1, 0, 3)` |

**Common EarSketch sound clip prefixes:**
- `YG_` = Young Guru collection
- `RD_` = Richard Devine collection
- `HOUSE_` = House music collection
- Browse all clips in the Sounds pane of EarSketch
