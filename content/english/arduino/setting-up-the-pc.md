---
title: "Setting up the PC"
draft: false
weight: 3
---

## Getting to know the Arduino IDE

Download and install the Arduino IDE from:
* the Microsoft Store (quicker install) - https://www.microsoft.com/store/productId/9NBLGGH4RSD8
* or from the Arduino website https://www.arduino.cc/en/Main/Software (pick the latest version)

Once the software has been installed on your computer, go ahead and open it up. This is the Arduino IDE and is the place where all the programming will happen. Take some time to look around and get comfortable with it.

![Alt Text: Labeled picture of the Arduino IDE](../img/ArduinoIDE-labeled.png)
*https://www.makerspaces.com/simple-arduino-projects-beginners/*

1.	Menu Bar:  Gives you access to the tools needed for creating and saving Arduino sketches.
2.	Verify Button: Compiles your code and checks for errors in spelling or syntax.
3.	Upload Button: Sends the code to the board that’s connected such as Arduino Uno in this case.  Lights on the board will blink rapidly when uploading.
4.	New Sketch: Opens a new window containing a blank sketch.
5.	Sketch Name: When the sketch is saved, the name of the sketch is displayed here.
6.	Open Existing Sketch: Allows you to open a saved sketch or one from the stored examples.
7.	Save Sketch: This saves the sketch you currently have open.
8.	Serial Monitor:  When the board is connected, this will display the serial information of your Arduino
9.	Code Area: This area is where you compose the code of the sketch that tells the board what to do.
10.	Message Area:  This area tells you the status on saving, code compiling, errors and more.  
11.	Text Console: Shows the details of an error messages, size of the program that was compiled and additional info.
12.	Board and Serial Port: Tells you what board is being used and what serial port it’s connected to.

## Connect your Arduino
At this point you are ready to connect your Arduino to your computer.  Plug one end of the USB cable to the Arduino Uno and then the other end of the USB to your computer’s USB port.

Once the board is connected, you will need to go to Tools then Board then finally select Arduino Uno.

![Alt Text: Screenshot of Arduino IDE showing how to select our board type](../img/board-select.png)

Next, you must tell the Arduino which port you are using on your computer.

To select the port, go to Tools then Port then select the port that says Arduino.

![Alt Text: Screenshot of Arduino IDE showing how to select the COMM port](../img/COMM-port.png)
