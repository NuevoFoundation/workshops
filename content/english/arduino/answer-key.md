---
title: "Arduino - Answer key"
date: 2024-07-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
This is a teacher reference for the Arduino Light Game workshop. The workshop walks students through 4 hardware activities using an Arduino UNO and the Elegoo starter kit. All code is provided in the workshop, so this answer key consolidates the complete solutions, explains key concepts, and flags a source code bug that teachers should be aware of.
{{% /notice %}}

## Activity 1: Blinking LED

### Wiring summary

1. LED long lead (anode) to pin 25J, short lead (cathode) to blue [-] rail
2. 220 ohm resistor from 25H to red [+] rail
3. Jumper wire from red [+] rail to 5V on Arduino
4. Jumper wire from blue [-] rail (31Z) to GND on Arduino
5. Connect Arduino via USB

### Code

Students load the built-in example: **File > Examples > 01.Basics > Blink**

The code below is the functional core of the built-in Blink example. The full example loaded by students includes additional comments and attribution.

```c++
void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH);
  delay(1000);
  digitalWrite(LED_BUILTIN, LOW);
  delay(1000);
}
```

### Key concepts

- `setup()` runs once when the Arduino powers on
- `loop()` runs repeatedly forever
- `pinMode()` sets a pin as INPUT or OUTPUT
- `digitalWrite()` sets a pin HIGH (on) or LOW (off)
- `delay(1000)` pauses for 1000 milliseconds (1 second)

### Extra challenge answer

The workshop asks: "What could you change to modify the timing?" Answer: change the number in `delay(1000)`. For example, `delay(500)` makes the LED blink twice as fast. 1000 milliseconds = 1 second, so 10 minutes = 600000 milliseconds.

## Activity 2: Joystick with serial output

### Wiring summary

1. Joystick GND to Arduino GND
2. Joystick +5V to Arduino 5V
3. Joystick VRx to analog pin A0
4. Joystick VRy to analog pin A1
5. Joystick SW to digital pin 2
6. Connect Arduino via USB

### Code

```c++
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

### Key concepts

- `Serial.begin(9600)` starts serial communication at 9600 baud rate
- `Serial.print()` sends text to the Serial Monitor (click the magnifying glass icon in the Arduino IDE)
- `analogRead()` reads a value from 0 to 1023 from an analog pin
- `digitalRead()` reads HIGH (1) or LOW (0) from a digital pin
- `digitalWrite(SW_pin, HIGH)` enables the internal pull-up resistor on pin 2, so the switch reads HIGH when not pressed and LOW when pressed
- Joystick center position is approximately X=490, Y=490

### Expected serial output

When the joystick is centered, students should see values near:
```
Switch:  1
X-axis: 490
Y-axis: 490
```

Moving the joystick changes X and Y values (range 0-1023). Pressing the joystick button changes Switch from 1 to 0.

## Activity 3: Joystick and LEDs

### Wiring summary

This activity combines the joystick and 4 colored LEDs (blue, yellow, red, green) plus a 5th LED on pin 7 for the button. Full wiring has 25 steps detailed in the workshop. Key connections:

| Component | Arduino pin |
|-----------|------------|
| Joystick VRx | A0 |
| Joystick VRy | GND |
| Joystick SW | Digital pin 2 |
| Joystick +5V | Breadboard red [+] rail |
| Joystick GND | Breadboard blue [-] rail |
| Blue LED | Digital pin 11 |
| Yellow LED | Digital pin 10 |
| Red LED | Digital pin 9 |
| Green LED | Digital pin 8 |
| Button LED | Digital pin 7 |

### Code

{{% notice warning %}}
**Workshop source code bug:** The code uses variables `joyX` and `joyY` that are never declared. The code will not compile as written. Teachers should add the missing variable declarations shown below before the `setup()` function.

Additionally, the workshop wiring step 4 connects VRy to GND instead of an analog pin. This appears to be a wiring error - the code expects a live Y-axis signal from `analogRead(joyY)`, which requires VRy connected to A1 (as in Activity 2). Teachers should wire VRy to A1 instead of GND for the code to work correctly.
{{% /notice %}}

{{% notice info %}}
**Missing wiring for pin 7 LED:** The code uses pin 7 as an OUTPUT for a button-triggered LED, but the workshop's 25 wiring steps do not include wiring an LED to pin 7. Teachers should add a 5th LED with a 220 ohm resistor connected to digital pin 7, following the same LED wiring pattern from Activity 1.
{{% /notice %}}

**Fixed version** (with missing declarations added):

```c++
const int joyX = A0;  // ADD THIS LINE - missing from workshop
const int joyY = A1;  // ADD THIS LINE - missing from workshop

int button = 2;
int buttonState = 0;
int buttonState1 = 0;

void setup() {
  pinMode(7, OUTPUT);
  pinMode(button, INPUT);
  digitalWrite(button, HIGH);
  Serial.begin(9600);

  pinMode(8, OUTPUT);
  pinMode(9, OUTPUT);
  pinMode(10, OUTPUT);
  pinMode(11, OUTPUT);
}

void loop() {
  int xValue = analogRead(joyX);
  int yValue = analogRead(joyY);

  Serial.print(xValue);
  Serial.print("\t");
  Serial.println(yValue);
  buttonState = digitalRead(button);
  Serial.println(buttonState);

  if (xValue >= 0 && yValue <= 20) {
    digitalWrite(10, HIGH);         // Yellow LED on
  } else {
    digitalWrite(10, LOW);
  }

  if (xValue <= 20 && yValue >= 490) {
    digitalWrite(11, HIGH);         // Blue LED on
  } else {
    digitalWrite(11, LOW);
  }

  if (xValue >= 1010 && yValue >= 490) {
    digitalWrite(9, HIGH);          // Red LED on
  } else {
    digitalWrite(9, LOW);
  }

  if (xValue >= 490 && yValue >= 1010) {
    digitalWrite(8, HIGH);          // Green LED on
  } else {
    digitalWrite(8, LOW);
  }

  if (xValue >= 1010 && yValue >= 1010) {
    digitalWrite(9, LOW);           // Both red and green off
    digitalWrite(8, LOW);           // in diagonal corner
  }

  if (buttonState == LOW) {
    Serial.println("Switch = High");
    digitalWrite(7, HIGH);          // Button LED on
  } else {
    digitalWrite(7, LOW);
  }
  buttonState1 = digitalRead(7);
  Serial.println(buttonState1);
  delay(100);
}
```

### Key concepts

- Each joystick direction lights up a different LED based on analog values
- The joystick button (SW) controls a 5th LED on pin 7
- Analog values range from 0 to 1023; center is approximately 490
- Multiple `if/else` blocks check different joystick positions independently

### LED behavior map

| Joystick position | X value | Y value | LED |
|-------------------|---------|---------|-----|
| Up | any | 0-20 | Yellow (pin 10) |
| Left | 0-20 | ~490+ | Blue (pin 11) |
| Right | 1010+ | ~490+ | Red (pin 9) |
| Down | ~490+ | 1010+ | Green (pin 8) |
| Button pressed | n/a | n/a | Pin 7 LED |

**Note:** The workshop wiring connects joystick VRy to GND (not A1 like Activity 2). This appears to be a wiring error since the code reads `analogRead(joyY)` which expects a live analog signal. Teachers should wire VRy to A1 for the joystick Y-axis to work properly. Also note: the condition `xValue >= 0` is always true for analog reads (range 0-1023), so the "Up" condition effectively means just `yValue <= 20`.

**Note:** The serial output `"Switch = High"` prints when `buttonState` is actually LOW (button pressed). This is misleading - the print string refers to the LED being turned on, not the button's electrical state.

## Activity 4: LCD Display

### Wiring summary

Students wire the LCD panel using the diagram. Only one resistor is used for brightness/contrast control. The workshop text says 5K ohm but the code comment inherited from the Elegoo/Arduino example says 10K. Either value works for contrast control; use whichever is in the kit. The workshop encourages students to try wiring without step-by-step instructions.

LCD pin connections:

| LCD pin | Arduino connection |
|---------|-------------------|
| RS | Digital pin 7 |
| Enable | Digital pin 8 |
| D4 | Digital pin 9 |
| D5 | Digital pin 10 |
| D6 | Digital pin 11 |
| D7 | Digital pin 12 |
| R/W | GND |
| VSS | GND |
| VCC | 5V |
| VO (pin 3) | Resistor wiper (middle pin of potentiometer or 5K/10K resistor) |

### Code

The workshop code includes an attribution comment block (public domain, originally by David A. Mellis). The code below shows only the functional portion.

```c++
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

### Key concepts

- `#include <LiquidCrystal.h>` imports the LCD library (built into the Arduino IDE)
- `LiquidCrystal lcd(7, 8, 9, 10, 11, 12)` maps LCD pins to Arduino digital pins
- `lcd.begin(16, 2)` configures a 16-column, 2-row display
- `lcd.print()` writes text to the current cursor position
- `lcd.setCursor(column, row)` moves the cursor (0-indexed: row 0 is the top, row 1 is the bottom)
- `millis()` returns the number of milliseconds since the Arduino was reset

### Expected behavior

The LCD displays "Hello, World!" on the first row and a running count of seconds on the second row.

## Appendix: Component reference

| Component | Description | Key detail |
|-----------|-------------|------------|
| Breadboard | Temporary circuit platform for testing | Rows are connected horizontally; red/blue rails run vertically |
| LED | Light Emitting Diode | Long lead = anode (positive), short lead = cathode (negative) |
| Resistor | Limits current flow | Omnidirectional (either lead can go to positive) |
| 220 ohm resistor | Used with LEDs | Protects LEDs from too much current |
| 5K/10K ohm resistor | Used with LCD | Controls display contrast |
