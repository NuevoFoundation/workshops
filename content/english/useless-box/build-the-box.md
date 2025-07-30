---
title: "Build the box - circuit design"
description: ""
draft: true
weight: 3
---

## Let's build the box

Here's the circuit design:
![diagram of the final circuit](../img/circuit-color.png)
**How do we read the diagram above?**

The circle with the “M” represents the motor and the circle with the “B” represents the battery. We will be using a breadboard below to build the connections. A breadboard is a device that allows us to make electrical connections without gluing the wires together (which is called “soldering”!). We'll talk more about it and show a picture a bit later.

When the limit switch connects and something (for example: you) changes the position of the toggle switch ON, the battery powers the motor, which moves the finger.  
The mechanical finger from inside the box comes out and toggles the switch OFF, so the mechanical finger retracts.

Let's review the components. We have a 12 total wires in play:
- 2 yellow, 3 green, 3 blue, 2 red, 2 black.
- The bottom **limit switch** is connected to 2 wires (yellow, green) from its 2 terminals. 
![limit switch with wires](../img/limitSwitchWithWires.jpg)
- The **battery pack** is connected to 2 wires (red, black). 
![battery pack with wires](../img/batteryPackWithWires.jpg)
- The **motor** is connected to 2 wires (green, blue). 
![motor with 2 wires](../img/motorWith2Wires.jpg)
- The motor should have an acrylic finger attached.
![motor with acrylic finger](../img/motorWithFinger.jpg)
- The top **toggle switch** is connected to 6 wires (yellow, green, 2 blue, red, black) from its 6 terminals labeled in the figure above. 
It should look something like this:
![switch with wires](../img/switchWithWires.jpg)

Here's a broader view of the part that has the motor, finger and limit switch attached:
![view of piece with motor, finger and limit switch with wires attached](../img/motorFingerAndLimitSwitchPiece.jpg)
- A **breadboard/protoboard** works by making electrical connections for you! Each row on each side of the vertical divider of the breadboard is connected together.  The middle divider separates the two halves of the board- the two halves are also not connected together, so for example 1A-1E are connected together or 7F-7J. Wires in the same column are not connected together.
![breadboard](../img/breadboard1.png)
Here's a breadboard diagram (which shows that yellow rows are connected):

	![breadboard diagram](../img/breadboardDiagram.png)

