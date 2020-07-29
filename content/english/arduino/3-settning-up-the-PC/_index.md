---
title: "Setting up the PC"
description: ""
draft: true
weight: 1
translationKey: "arduino-3"
---

# Setting up the PC

Download and install teh Arduino IDE from:
* the Microsoft Store (quicker install) - https://www.microsoft.com/store/productId/9NBLGGH4RSD8
* or from the Arduino website https://www.arduino.cc/en/Main/Software (current version is 1.8.9)

Once the software has been installed on your computer, go ahead and open it up. This is the Arduino IDE and is the place where all the programming will happen. Take some time to look around and get comfortable with it.

![Cannot load image](content\english\arduino\3-settning-up-the-PC\img1.png)
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

## Connect your Arduino Uno
At this point you are ready to connect your Arduino to your computer.  Plug one end of the USB cable to the Arduino Uno and then the other end of the USB to your computer’s USB port.

Once the board is connected, you will need to go to Tools then Board then finally select Arduino Uno.

![Cannot load image](content\english\arduino\3-settning-up-the-PC\img2.png)

Next, you must tell the Arduino which port you are using on your computer.

To select the port, go to Tools then Port then select the port that says Arduino.

![Cannot load image](content\english\arduino\3-settning-up-the-PC\img3.png)

### Activity 1 - Blinking LED

For your introduction to this system we can get the basics of circuitry and how our program can run and manipulate components (in this case turn an LED on and off).

1.	Attach the long lead (anode) of your LED to pin 44J and the short lead (cathode) into pin 43Z (anywhere in the blue [-] line).
2.	Attach a 220 resistor with one leg in 44H and the other in 45Y (anywhere in the red [+] line).
3.	Attach one end of a jumper wire to 30Y on the Breadboard and the other to 5V on the Elegoo. (we are using red for positive charge and black for negative charge but the color doesn’t matter)
4.	Attach one end of a jumper wire to 31Z on the Breadboard and the other to GND (ground) on the Elegoo.
5.	Plug in the Arduino board via USB to your PC and open the Arduino IDE application
6.	Click on File -> Examples -> 01.Basics -> Blink

![Cannot load image](content\english\arduino\3-settning-up-the-PC\img4.png)

7.	Now click the upload button to deploy the program to the Arduino.

EXTRA: Notice the timing of the LED turning on and off. What do you think you could change in the program to modify that timing?
If you said the number 1000 in delay (1000); you are RIGHT!
Change that number (don’t forget to hit the upload button again).
Notice a difference? Why do you think 1000 is 1 second? How long would 10 minutes be? Why?

![Cannot load image](content\english\arduino\3-settning-up-the-PC\img5.png)
![Cannot load image](content\english\arduino\3-settning-up-the-PC\img6.png)

### Activity 2 - Joystick with serial output
Now that you understand how we can get the system to provide signals from the program (outputs) and use those to control LEDs, let’s look at how we can get dynamic inputs into the system. For this activity we will use a joystick input, similar to those used in video game consoles.
1.	Attach one end of a jumper wire to GND on the joystick and the other to GND on the Elegoo.
2.	Attach one end of a jumper wire to +5V on the joystick and the other to 5V on the Elegoo.
3.	Attach one end of a jumper wire to VRx on the joystick and the other to A0 on the Elegoo.
4.	Attach one end of a jumper wire to VRy on the joystick and the other to GND on the Elegoo.
5.	Attach one end of a jumper wire to SW on the joystick and the other to 2 on the Elegoo.
6.	Plug in the Arduino board via USB to your PC and open the Arduino IDE application.

CODE:
```
//www.elegoo.com
//2016.12.09

// Arduino pin numbers
const int SW_pin = 2; // digital pin connected to switch output
const int X_pin = A0; // analog pin connected to X output
const int Y_pin = A1; // analog pin connected to Y output

void setup() {
  pinMode(SW_pin, INPUT);
  digitalWrite(SW_pin, HIGH);
  Serial.begin(9600);
}

void loop() {
  Serial.print("Switch:  ");
  Serial.print(digitalRead(SW_pin));
  Serial.print("\n");
  Serial.print("X-axis: ");
  Serial.print(analogRead(X_pin));
  Serial.print("\n");
  Serial.print("Y-axis: ");
  Serial.println(analogRead(Y_pin));
  Serial.print("\n\n");
  delay(500); 
}
```
![Cannot load image](content\english\arduino\3-settning-up-the-PC\img7.png)

7.	Now click the upload button to deploy the program to the Arduino.
8.	Click on the “Serial Monitor” button on the top right of the screen to display the console.

![Cannot load image](content\english\arduino\3-settning-up-the-PC\img8.png)

9.	Notice how the X and Y values change when you move the joystick around.

![Cannot load image](content\english\arduino\3-settning-up-the-PC\img9.png)

### Activity 3 - Joystick + LEDs
Let’s combine activity 1 and activity 2. Let’s control LEDs based on the input from the joystick.
1.	Attach one end of a jumper wire to GND on the joystick and the other to 7X on the Breadboard.
2.	Attach one end of a jumper wire to +5V on the joystick and the other to 5W on the Breadboard.
3.	Attach one end of a jumper wire to VRx on the joystick and the other to A0 on the Elegoo.
4.	Attach one end of a jumper wire to VRy on the joystick and the other to GND on the Elegoo.
5.	Attach one end of a jumper wire to SW on the joystick and the other to 2 on the Elegoo.
6.	Attach the long lead (anode) of your blue LED to pin 8F and the short lead (cathode) into pin 9F.
7.	Attach a 220 resistor with one leg in 8G and the other in 4G.
8.	Attach one end of a jumper wire to 4H on the Breadboard and the other to 11 on the Elegoo.
9.	Attach one end of a jumper wire to 9G and the other to 12Z (anywhere in the blue [-] line) on the Breadboard.
10.	Attach the long lead (anode) of your yellow LED to pin 14J and the short lead (cathode) into pin 15J.
11.	Attach a 220 resistor with one leg in 14I and the other in 10I.
12.	Attach one end of a jumper wire to 10J on the Breadboard and the other to 10 on the Elegoo.
13.	Attach one end of a jumper wire to 15I and the other to 18Z (anywhere in the blue [-] line) on the Breadboard.
14.	Attach the long lead (anode) of your red LED to pin 21F and the short lead (cathode) into pin 22F.
15.	Attach a 220 resistor with one leg in 17G and the other in 21G.
16.	Attach one end of a jumper wire to 17H on the Breadboard and the other to 9 on the Elegoo.
17.	Attach one end of a jumper wire to 22G and the other to 25Z (anywhere in the blue [-] line) on the Breadboard.
18.	Attach the long lead (anode) of your green LED to pin 14A and the short lead (cathode) into pin 15A.
19.	Attach a 220 resistor with one leg in 10B and the other in 14B.
20.	Attach one end of a jumper wire to 10C on the Breadboard and the other to 8 on the Elegoo.
21.	Attach one end of a jumper wire to 15B and the other to 17X (anywhere in the blue [-] line) on the Breadboard.

![Cannot load image](content\english\arduino\3-settning-up-the-PC\img10.png)

CODE:
```
int button=2;
int buttonState=0;
int buttonState1=0;

void setup() {
  pinMode(7,OUTPUT);
  pinMode(button,INPUT);
  digitalWrite(button,HIGH);
  Serial.begin(9600);

  pinMode(8,OUTPUT);
  pinMode(9,OUTPUT);
  pinMode(10,OUTPUT);
  pinMode(11,OUTPUT);
}
 
void loop() {

 int xValue = analogRead(joyX);
 int yValue = analogRead(joyY);

  Serial.print(xValue);
  Serial.print("\t");
  Serial.println(yValue);
  buttonState = digitalRead(button);
  Serial.println(buttonState);

  if (xValue>=0 && yValue<=20)
  {
    digitalWrite(10,HIGH);
  }
  else{digitalWrite(10,LOW);}

  if (xValue<=20 && yValue>=490)
  {
    digitalWrite(11,HIGH);
  }
  else{digitalWrite(11,LOW);}

  if (xValue>=1010 && yValue>=490)
  {
    digitalWrite(9,HIGH);
  }
  else{digitalWrite(9,LOW);}

  if (xValue>=490 && yValue>=1010)
  {
    digitalWrite(8,HIGH);
  }
  else{digitalWrite(8,LOW);}

  if (xValue>=1010 && yValue>=1010)
  {
    digitalWrite(9,LOW);
    digitalWrite(8,LOW);
  }

  if (buttonState==LOW)
  {
    Serial.println("Switch = High");
    digitalWrite(7,HIGH);
  }
  else{digitalWrite(7,LOW);}
  buttonState1=digitalRead(7);
  Serial.println(buttonState1);
  delay(100);
}

```
![Cannot load image](content\english\arduino\3-settning-up-the-PC\img11.png)

### Activity 4 - LCD Display
Now that you have mastered outputting signals to LEDs let’s look at displaying text with a simple display. Only 1 resistor (5K) is used to limit the brightness of the display. Try wiring this per the diagram without specific instructions.

![Cannot load image](content\english\arduino\3-settning-up-the-PC\img12.png)

CODE:
```
//www.elegoo.com
//2016.12.9

/*
  LiquidCrystal Library - Hello World

 Demonstrates the use a 16x2 LCD display.  The LiquidCrystal
 library works with all LCD displays that are compatible with the
 Hitachi HD44780 driver. There are many of them out there, and you
 can usually tell them by the 16-pin interface.

 This sketch prints "Hello World!" to the LCD
 and shows the time.

  The circuit:
 * LCD RS pin to digital pin 7
 * LCD Enable pin to digital pin 8
 * LCD D4 pin to digital pin 9
 * LCD D5 pin to digital pin 10
 * LCD D6 pin to digital pin 11
 * LCD D7 pin to digital pin 12
 * LCD R/W pin to ground
 * LCD VSS pin to ground
 * LCD VCC pin to 5V
 * 10K resistor:
 * ends to +5V and ground
 * wiper to LCD VO pin (pin 3)

 Library originally added 18 Apr 2008
 by David A. Mellis
 library modified 5 Jul 2009
 by Limor Fried (http://www.ladyada.net)
 example added 9 Jul 2009
 by Tom Igoe
 modified 22 Nov 2010
 by Tom Igoe

 This example code is in the public domain.

 http://www.arduino.cc/en/Tutorial/LiquidCrystal
 */

// include the library code:
#include <LiquidCrystal.h>

// initialize the library with the numbers of the interface pins
LiquidCrystal lcd(7, 8, 9, 10, 11, 12);

void setup() {
  // set up the LCD's number of columns and rows:
  lcd.begin(16, 2);
  // Print a message to the LCD.
  lcd.print("Hello, World!");
}

void loop() {
  // set the cursor to column 0, line 1
  // (note: line 1 is the second row, since counting begins with 0):
  lcd.setCursor(0, 1);
  // print the number of seconds since reset:
  lcd.print(millis() / 1000);
}
```
![Cannot load image](content\english\arduino\3-settning-up-the-PC\img13.png)

