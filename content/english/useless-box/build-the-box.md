---
title: "Build the box"
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
![breadboard](../img/breadBoard.png)
Here's a breadboard diagram (showing yellow rows ar:

	![breadboard diagram](../img/breadboardDiagram.png)

### Time to start building Nuvi a house!

1. Let's place the 12 wires into the breadboard. All the same-colored wires should go in the same rows, as follows:

	Note that the ranges below represent the rows and columns of the breadboard. We need to insert the end of each of the wires in any of the slots in the ranges specified below.
	1. Yellow: 26F - 26J 
	2. Green: 23F - 23J 
	3. Blue: 20A - 20E 
	
	Hint: Place the battery pack's wires last.
	
	4. Red: 1F - 1J
	5. Black: 1A - 1E

Now, it should look like this:
![breadboard with wires connected](../img/connectedBreadboard.jpg)

Here's a top view of the breadboard:
![breadboard top view](../img/breadboardWiring.png)
Here's a broader view of the same, where you can see the piece that has the motor and limit switch attached:
![broader view of the breadboard connections](../img/boarderViewBreadboard.jpg)

2. Now let’s be sure to test if it works before putting it in the box! We will need to flick the toggle switch (the red colored switch in the picture) and see the finger move forward. If you flick the toggle switch the other way, then the finger will move backwards. If the finger is moving backwards and you press the limit switch (the black colored switch in the picture), then the finger should stop. 

3. Let's put the circuit in the box! 
	1. Disconnect the battery pack’s red and black wires from the breadboard. 
	2. Insert the middle piece (#8) into the base acrylic piece (#1). Be sure that the motor is on the smaller half of the base (#1) and the finger (#9) is on the larger half. This will center the finger with the box. 
	![motor piece attached to the base](../img/buildingTheBox1.jpg)
	3. Insert the two side acrylic pieces (#2 and #3) into the side of the base (#1) as seen below:
	![sides attached to the box](../img/buildingTheBox2.jpg)
	4. Align the top with the toggle switch piece (#7) with the side pieces (#2 and #3). There is a nook at the end of the side pieces (#2 and #3) that the top piece (#7) will sit on. 
	![one top piece placed on the box](../img/buildingTheBox3.jpg)
	5. Repeat this step with the other top piece (#6) on the other side of pieces #2 and #3. There is a nook at the end of the side pieces (#2 and #3) that the top piece (#6) will sit on.
	![second top piece placed on the box](../img/buildingTheBox4.jpg)
	6. Reconnect the battery pack’s wires to their appropriate rows on the breadboard (Red: 1F – 1J, Black: 1A- 1E from earlier suggestion). **Make sure that all red wires are in the same row and all black wires are in the same row.** 
	*Note: All same-colored wires should be in rows of their own in the same half section of the breadboard as each other. Remember only rows are connected with each other and the two vertical sections are totally disconnected from one another even if they are in the same row.*
	7. Place the battery pack snugly on its side in the box. It should be beside the motor and opposite the breadboard. Make sure no wires get disconnected in the process.
	8.Use the two end pieces (#4 and #5) to close the box. The hooks on the side pieces (#2 and #3) bend down to hook the end pieces into place and lock the box. 
![complete box built](../img/completeBox.jpg)
4. Your box is complete!
![another view of the completed box built](../img/completeBox1.jpg)
5. Flip the switch and make sure it works! Make sure no wires are in the way of the finger (#9) for when it moves up. 
*Hint: You might have to hold down the top piece (#6) across the top switch to make sure that Nuvi doesn’t get stuck when trying to flip the switch back.*

You have built a home for Nuvi!

### CONGRATS! You've done it. Feel free to play with your box and learn or experiment with more basic circuits.

Supporting resources: 

1. http://makezine.com/projects/the-most-useless-machine/
2. http://www.youtube.com/watch?v=aqAUmgE3WyM
