---
title: "Blocks: EarSketch - Answer Key"
date: 2026-04-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
This is a teacher's reference for the JavaScript Blocks EarSketch workshop. The workshop uses drag-and-drop blocks, but each block generates JavaScript code underneath. This answer key shows the equivalent JavaScript code for each activity so teachers can verify student work. Since this is a creative music workshop, there are many valid answers. Your code is correct if it runs without errors and produces music!
{{% /notice %}}

## Activity 1: Set Tempo and Add Sounds

Drag a `fitMedia()` block below the `setTempo` block and fill in the parameters:

**Equivalent JavaScript:**
```javascript
setTempo(120);
fitMedia(YG_TRAP_ELECTRIC_PIANO_FILTERED_1, 1, 1, 9);
```

**Block parameters:**

| Parameter | Value | How to set it |
|-----------|-------|--------------|
| Sound | `YG_TRAP_ELECTRIC_PIANO_FILTERED_1` | Click "sound" in the block, then paste from the Sounds pane |
| Track | `1` | Use the dropdown |
| Start | `1` | Start measure |
| End | `9` | End measure |

## Activity 2: Make a Song (Multiple Sounds)

Add four `fitMedia()` blocks, each on a different track:

**Equivalent JavaScript:**
```javascript
setTempo(120);
fitMedia(RD_TRAP_BELLLEAD_1, 1, 1, 9);
fitMedia(YG_TRAP_STRINGS_2, 2, 1, 17);
fitMedia(YG_TRAP_ELECTRIC_PIANO_FILTERED_1, 3, 1, 17);
fitMedia(YG_TRAP_BASS_9, 4, 1, 9);
```

{{% notice tip %}}
**Key concept for students:** Each `fitMedia()` block should use a different track number. This keeps sounds organized and lets multiple sounds play at the same time.
{{% /notice %}}

## Activity 3: Add Effects

Drag a `setEffect()` block (the 4-parameter version) below the `fitMedia()` blocks:

**Equivalent JavaScript:**
```javascript
setTempo(120);
fitMedia(RD_TRAP_BELLLEAD_1, 1, 1, 9);
fitMedia(YG_TRAP_STRINGS_2, 2, 1, 17);
fitMedia(YG_TRAP_ELECTRIC_PIANO_FILTERED_1, 3, 1, 17);
fitMedia(YG_TRAP_BASS_9, 4, 1, 9);
setEffect(2, DELAY, DELAY_FEEDBACK, -6.0);
```

**setEffect parameters (4-parameter version):**

| Parameter | Value | Meaning |
|-----------|-------|---------|
| Track | `2` | Which track (use `0` for master/all tracks) |
| Effect type | `DELAY` | Select from dropdown |
| Parameter | `DELAY_FEEDBACK` | Select from dropdown |
| Value | `-6.0` | Range: -120.0 to -1.0 |

## Activity 4: Fade In with Effects

Drag the 7-parameter `setEffect()` block to create a volume fade-in:

**Equivalent JavaScript:**
```javascript
setTempo(120);
fitMedia(RD_TRAP_BELLLEAD_1, 1, 1, 9);
fitMedia(YG_TRAP_STRINGS_2, 2, 1, 17);
fitMedia(YG_TRAP_ELECTRIC_PIANO_FILTERED_1, 3, 1, 17);
fitMedia(YG_TRAP_BASS_9, 4, 1, 9);
setEffect(2, DELAY, DELAY_FEEDBACK, -6.0);
setEffect(0, VOLUME, GAIN, -60, 1, 0, 3);
```

**setEffect parameters (7-parameter version):**

| Parameter | Value | Meaning |
|-----------|-------|---------|
| Track | `0` | Master track (all sounds) |
| Effect type | `VOLUME` | Volume control |
| Parameter | `GAIN` | Loudness setting |
| Start value | `-60` | Nearly silent (in decibels) |
| Start measure | `1` | When the fade begins |
| End value | `0` | Normal volume |
| End measure | `3` | When the fade ends |

{{% notice tip %}}
**How the fade-in works:** Volume starts at -60 dB (nearly silent) at measure 1 and increases to 0 dB (normal volume) by measure 3. The more negative the decibel number, the quieter the sound. Do not exceed 0 dB.
{{% /notice %}}

## EarSketch Quick Reference

| Block | Purpose | Key Parameters |
|-------|---------|---------------|
| `setTempo(bpm)` | Set song speed | 45-220 BPM |
| `fitMedia(clip, track, start, end)` | Add a sound | Choose clip from Sounds pane |
| `setEffect(track, type, param, value)` | Add an effect | Choose type/param from dropdowns |
| `setEffect(track, type, param, startVal, start, endVal, end)` | Automate an effect | For fade-in/fade-out |
