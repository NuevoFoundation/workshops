---
title: "What is a micro:bit?"
date: 2019-07-25T13:24:17-07:00
weight: 1
draft: false
---

## What is a micro:bit?

A micro:bit is a programmable microcontroller! It can be coded from any web browser in various languages like JavaScript, Python, Scratch, and Blocks. For our session today, we will be using MakeCode Blocks.

Your micro:bit has many different actionable features and sensors including:

- 25 Individually Addressable LEDs
- 2 Physical Buttons
- 2 Input/Output (IO) Pins
- Compass Sensor
- Accelerometer (Motion Sensor)
- Bluetooth

<!---![Image of simulated micro:bits with the radio highlighted](../img/simulatorStart.png) --->
<img src="../img/microbit-hardware-access.jpg" alt="microbit components" style="width:800px;"/>

If you want to learn more about each individual component and all the features that come with your micro:bit, you can click [here](https://micro:bit.org/guide/features/).

Go ahead and take out the the micro:bit and the rest of the components from the bag. You should have one micro:bit, 2 batteries, a micro USB cable, and the battery holder (the black box with the red and black wires coming out of it). If you're missing anything or need help feel free to ask one of the instructors!

## Using the Simulator

While not as fun as having the actual, physical hardware, you can also use the simulator to see your code working. Look for the images of micro:bits off on the left side of your screen. If you don't see them, look for the ">" symbol on the left and click it to unhide the simulator. On the simulated micro:bits, find the Bluetooth radio antenna. It looks like a yellow square wave:

<!---![microbit components](../img/microbit-hardware-access.jpg) --->
<img src="../img/simulatorStart.png" alt="Image of simulated micro:bits with the radio highlighted" style="width:500px;"/>

If you hover your mouse cursor over this wave-shaped antenna, the actual signal strength will show up next to it. You can then click on the antenna and drag your mouse cursor left to decrease the signal strength or right to increase it. If you get the signal strong enough (`strength > -67`), the other micro:bit will update to show a frowning face. Weaken the signal again to make the micro:bit smile.

<!---![Sowing RSSI](../img/showingRSSI.png) --->
<img src="../img/showingRSSI.png" alt="Sowing RSSI" style="width:300px;"/> 
<!---![Image of sad simulator](../img/sadSimulator.png) --->
<img src="../img/sadSimulator.png" alt="Image of sad simulator" style="width:300px;"/>

Now, let's get coding!