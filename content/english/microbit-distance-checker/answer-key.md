---
title: "micro:bit distance checker - Answer key"
date: 2024-07-29T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
This is a teacher reference for the micro:bit Wireless Social Distancing workshop. The workshop walks students through building a complete project step by step using MakeCode Blocks. This answer key provides the final complete code (in both Blocks description and JavaScript), explains the key concepts, and includes troubleshooting guidance.
{{% /notice %}}

## Complete solution

### Final code (JavaScript equivalent)

This is the complete program that students build across all workshop activities:

```javascript
radio.onReceivedNumber(function (receivedNumber) {
    strength = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    if (strength > -67) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
let strength = 0
radio.setGroup(1)
basic.forever(function () {
    radio.sendNumber(0)
})
```

### Final code (Blocks description)

For teachers who prefer to follow along with the block-based view:

| Block location | Block | Settings |
|---------------|-------|----------|
| **on start** | `radio set group` | Group: `1` |
| **forever** | `radio send number` | Number: `0` |
| **on radio received (receivedNumber)** | `set strength to` | `received packet signal strength` |
| (inside received block) | `if strength > -67 then` | Show icon: sad face |
| (else) | `else` | Show icon: happy face |

**What it does:** Each micro:bit continuously broadcasts a radio signal. When it receives a signal from another micro:bit, it checks the signal strength. If the signal is stronger than -67 dBm (meaning the micro:bits are less than 6 feet / 2 meters apart), it shows a sad face. If the signal is weaker (meaning they are far enough apart), it shows a happy face.

## Step-by-step breakdown

### Step 1: What is a micro:bit (page 1)

This is an introductory page. No code is written. Key points:

- micro:bit features: 25 LEDs, 2 buttons, IO pins, compass, accelerometer, Bluetooth
- Students unpack their hardware: micro:bit, 2 batteries, USB cable, battery holder
- **Simulator:** Students without hardware can use the MakeCode simulator with two virtual micro:bits side by side. The radio antenna (yellow square wave) can be clicked and dragged to simulate signal strength changes.
- Signal strength threshold for the simulator: `strength > -67` triggers the sad face

### Step 2: Broadcasting a signal (page 2)

**Code added in this step:**

```javascript
// on start
radio.setGroup(1)

// forever
basic.forever(function () {
    radio.sendNumber(0)
})
```

**Key concepts:**
- `radio set group 1` goes in the "on start" block so it runs once when the micro:bit powers on
- All micro:bits must use the same group number to communicate
- `radio send number 0` goes in the "forever" block to continuously broadcast
- The actual number sent (0) does not matter for this project; we only care about signal strength

### Step 3: Receiving a message (page 3)

**Code added in this step:**

```javascript
radio.onReceivedNumber(function (receivedNumber) {
    strength = radio.receivedPacket(RadioPacketProperty.SignalStrength)
})
let strength = 0
```

**Key concepts:**
- The `on radio received` block triggers every time the micro:bit gets a number from another micro:bit
- A **variable** called `strength` is created to store the received signal strength
- `received packet signal strength` gives the RSSI (Received Signal Strength Indicator) value
- Variables are named containers that store information and can be used and updated later

### Step 4: Interpreting signal strength (page 4)

**Code added in this step:**

```javascript
if (strength > -67) {
    // too close - less than 6 feet apart
} else {
    // safe distance - more than 6 feet apart
}
```

**Key concepts:**
- -67 dBm is the pre-measured signal strength at 6 feet (2 meters) for micro:bit Bluetooth
- Signal strength closer to 0 = stronger signal = closer distance
- Signal strength farther from 0 (more negative) = weaker signal = farther distance
- `strength > -67` means the devices are **closer** than 6 feet (stronger signal than the threshold)

**Common student question:** "Why -67?" Because -67 dBm was measured as the power level when two micro:bits are 6 feet apart. Different Bluetooth radios may have different values at the same distance.

### Step 5: Lighting it up (page 5)

**Code added in this step:**

```javascript
if (strength > -67) {
    basic.showIcon(IconNames.Sad)    // too close
} else {
    basic.showIcon(IconNames.Happy)  // safe distance
}
```

**Key concepts:**
- Sad face = too close (less than 6 feet)
- Happy face = safe distance (6 feet or more)
- Icons are found in the Basic section of MakeCode

For a visual reference of the final blocks code, see the screenshot at the end of the [Lighting it up](../light-it-up) page.

### Step 6: Downloading the code (page 6)

No new code is written. This page covers:

1. **Pairing:** USB connect, click `...` next to Download, select "Pair device", click "BBC micro:bit CMSIS-DAP", then Connect
2. **Downloading:** Click `...` again, select "Download to micro:bit", wait for "Download complete" bubble
3. Students only need to pair once

## Troubleshooting

| Problem | Cause | Solution |
|---------|-------|----------|
| Micro:bits cannot communicate | Different radio groups | Verify all micro:bits use the same group number |
| Always shows sad face | Signal too strong (micro:bits too close) | Move micro:bits farther apart (more than 6 feet) |
| Always shows happy face | Signal too weak or no signal | Move micro:bits closer, check they are powered on and running the same code |
| No face shows at all | Code not downloaded or micro:bit not receiving | Re-download code, check USB connection, verify both micro:bits are running |
| Simulator does not respond | Signal strength not adjusted | Click and drag the yellow square wave antenna on the simulated micro:bit to change signal strength |

## Extension ideas for advanced students

- Change the threshold value (-67) to test different distances
- Add a number display to show the actual signal strength value (`basic.showNumber(strength)`)
- Use different icons or LED patterns instead of sad/happy faces
- Add sound using `music.playTone()` when devices are too close (requires micro:bit v2 or external speaker on pin 0)
- Create a "traffic light" system with three zones (close/medium/far) using multiple if/else conditions
