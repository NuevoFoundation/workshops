---
title: "Arduino - Activity 1"
description: ""
draft: true
weight: 1
translationKey: "arduino-4"
---


### Activity 1 - Blinking LED

For your introduction to this system we can get the basics of circuitry and how our program can run and manipulate components (in this case turn an LED on and off).

1.	Attach the long lead (anode) of your LED to pin 44J and the short lead (cathode) into pin 43Z (anywhere in the blue [-] line).
2.	Attach a 220 resistor with one leg in 44H and the other in 45Y (anywhere in the red [+] line).
3.	Attach one end of a jumper wire to 30Y on the Breadboard and the other to 5V on the Elegoo. (we are using red for positive charge and black for negative charge but the color doesn’t matter)
4.	Attach one end of a jumper wire to 31Z on the Breadboard and the other to GND (ground) on the Elegoo.
5.	Plug in the Arduino board via USB to your PC and open the Arduino IDE application
6.	Click on File -> Examples -> 01.Basics -> Blink

![Cannot load image](content\english\arduino\4-activity1\img4.png)

7.	Now click the upload button to deploy the program to the Arduino.

EXTRA: Notice the timing of the LED turning on and off. What do you think you could change in the program to modify that timing?
If you said the number 1000 in delay (1000); you are RIGHT!
Change that number (don’t forget to hit the upload button again).
Notice a difference? Why do you think 1000 is 1 second? How long would 10 minutes be? Why?

![Cannot load image](content\english\arduino\4-activity1\img5.png)
![Cannot load image](content\english\arduino\4-activity1\img6.png)