---
title: "Micro:Bit - Answer key"
date: 2026-04-28T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
This is a teacher reference guide for the Micro:Bit workshop. The workshop is primarily a guided tutorial with inline code examples rather than fill-in-the-blank exercises. This answer key consolidates all key concepts, code samples, tutorial outcomes, and sample projects for the open-ended "Your Turn" section.
{{% /notice %}}

## JavaScript basics reference

### Variables and data types

The workshop introduces five data types. Here is a summary with examples:

| Data Type | Description | Example |
|-----------|-------------|---------|
| Integer | Whole numbers (no decimals) | `var a = 5;` |
| Double | Numbers with decimals | `var x = 0.5;` |
| String | Text (in double quotes) | `var company = "My company";` |
| Character | Single letter (in single quotes) | `var letter = 'A';` |
| Boolean | True or false values | `var codingIsCool = true;` |

**Key rules for variable names:**
- Can contain letters, digits, underscores, and dollar signs
- Cannot have spaces
- Must start with a letter

### Math operations

| Operation | Operator | Example | Result |
|-----------|----------|---------|--------|
| Addition | `+` | `var c = 13 + 10;` | `c = 23` |
| Subtraction | `-` | `var c = 15 - 10;` | `c = 5` |
| Multiplication | `*` | `var c = 2 * 5;` | `c = 10` |
| Division | `/` | `var c = 20 / 2;` | `c = 10` |
| Modulo | `%` | `var d = 10 % 2;` | `d = 0` |

**Note:** The workshop source shows `c = a + b; // c = 25` but 13 + 10 = 23. This is a typo in the original workshop.

**Shorthand operators:**
- `c += a;` adds `a` to `c`
- `c -= a;` subtracts `a` from `c`
- `c *= a;` multiplies `c` by `a`
- `c /= a;` divides `c` by `a`
- `c++` increments by 1, `c--` decrements by 1

**Note:** The workshop's division example comments show `c /= a; // c = 5` but the actual result is `0.5` (10 divided by 20). Teachers should be aware of this discrepancy.

### Print statements

```javascript
// Display in browser console (not visible on webpage)
console.log("Hello!");

// Display as a pop-up window
alert("Hello!");

// Pop-up with input box - stores the user's response
var userResponse = prompt("What is your name?");
```

### Conditionals

```javascript
var age = 10;
if (age < 18) {
  print("You're not an adult yet! :( ");
}
```

**Note:** The workshop uses `print()` in this example, which is not standard JavaScript in browsers. In MakeCode, the equivalent would be `basic.showString()`. In a browser, use `console.log()` or `alert()`. Also, the workshop source has a comment typo: it says "If age is less than 10" but the condition checks `age < 18`.

### Loops

```javascript
// while loop - counts down from 10
var count = 10;
while (count > 0) {
  alert(count);
  count--;
}

// for loop - counts down from 10
for (var i = 10; i > 0; i--) {
  alert(i);
}
```

**Important:** An endless `while (true)` loop will freeze a browser. On the micro:bit, `basic.forever()` is the safe equivalent for continuous execution.

**Additional:** The `break;` statement can stop a loop immediately and move execution to the line below the loop.

## Micro:bit setup

### Hardware overview

The micro:bit has:
- 25 individually-programmable LEDs (5×5 grid)
- 2 programmable buttons (A and B)
- Physical connection pins
- Motion sensors (accelerometer and compass)
- Wireless communication (Bluetooth and radio)
- USB interface

### Connecting to a computer

1. Plug in the micro:bit via USB cable
2. It appears as a drive called `MICROBIT` in File Explorer
3. To load programs: copy `.hex` files to the MICROBIT drive (or right-click → Send To → MICROBIT)
4. The yellow LED on the back blinks while downloading code

### MakeCode editor

The programming environment is at [makecode.microbit.org](https://makecode.microbit.org/). Students can switch between Block and JavaScript views.

## Tutorial outcomes

### Flashing Heart tutorial

Students follow the built-in MakeCode tutorial. The expected result:

```javascript
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(500)
})
```

**What it does:** Alternates between a large heart and small heart icon on the LED display, creating an animation that looks like a beating heart.

### Micro Chat tutorial

Students follow the built-in MakeCode tutorial. The expected result:

```javascript
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("Hello")
    basic.showString("Hello")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("Goodbye")
    basic.showString("Goodbye")
})
radio.setGroup(1)
```

**What it does:** Sends and receives text messages between two micro:bits using radio communication. Button A sends "Hello" and Button B sends "Goodbye". Both micro:bits must be set to the same radio group.

**Note:** This tutorial requires two micro:bits to test the radio communication. In the MakeCode simulator, two virtual micro:bits appear side by side.

## Micro:bit JavaScript cheat sheet

This is the reference section at the end of the workshop, consolidated for quick lookup:

| Command | What it does |
|---------|-------------|
| `basic.forever(function() { ... })` | Runs code continuously in a loop |
| `basic.showNumber(42)` | Displays a number on the LED grid |
| `basic.showString("Hi")` | Scrolls text across the LED grid |
| `basic.showIcon(IconNames.Heart)` | Displays a built-in icon |
| `basic.pause(1000)` | Pauses execution (in milliseconds) |
| `Math.randomRange(0, 10)` | Generates a random number in the given range (inclusive) |
| `input.onButtonPressed(Button.A, function() { ... })` | Runs code when button A is pressed |

**Important:** On the micro:bit, use `let` instead of `var` for variable declarations:

```javascript
let name = "Gonzo";
basic.showString(name);
```

**Notes for teachers:**
- The workshop source uses the legacy `Math.random(number)` syntax. The current MakeCode API uses `Math.randomRange(min, max)` for generating random numbers in a range.
- The workshop source incorrectly states `basic.pause()` takes microseconds. The MakeCode API uses milliseconds (1000 ms = 1 second).

## Asteroids game demo

The workshop includes a pre-built "Asteroids" game as an example of what students can build. The `.hex` file is available at `resources/files/microbit-Asteroids.hex` and the MakeCode source code can be viewed at [makecode.microbit.org/_bhJYfUURARgx](https://makecode.microbit.org/_bhJYfUURARgx). Controls: A+B to shoot, tilt to move. The game speeds up as the player destroys more asteroids.

## Sample "Your Turn" projects

The workshop ends with an open-ended challenge: "code your own program from scratch." Here are three sample projects teachers can suggest or use as reference:

### Project 1: Digital die

```javascript
input.onButtonPressed(Button.A, function () {
    let roll = Math.randomRange(1, 6)
    basic.showNumber(roll)
})
```

**What it does:** Press button A to roll a random number from 1 to 6.

### Project 2: Step counter

```javascript
let steps = 0
basic.showNumber(steps)

input.onGesture(Gesture.Shake, function () {
    steps += 1
    basic.showNumber(steps)
})

input.onButtonPressed(Button.A, function () {
    steps = 0
    basic.showNumber(steps)
})
```

**What it does:** Counts steps using the accelerometer shake detection. Button A resets the counter.

### Project 3: Rock-paper-scissors

```javascript
input.onGesture(Gesture.Shake, function () {
    let choice = Math.randomRange(1, 3)
    if (choice == 1) {
        basic.showString("R")
    } else if (choice == 2) {
        basic.showString("P")
    } else {
        basic.showString("S")
    }
})
```

**What it does:** Shake the micro:bit to randomly display R (rock), P (paper), or S (scissors). Students can play against each other.
