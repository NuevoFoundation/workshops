---
title: "Using the simulator"
date: 2025-10-20T01:00:18-05:00
weight: 1
draft: false
---

<link rel="stylesheet" href="../_logic-gates.css" type="text/css" />

## Introduction

You have arrived at the Magic Forest of Costa Rica. In this place lives a sphere that protects the animals and nature, but its energy is disappearing.  
To restore it, we first need to learn how to use the logic circuit simulator.

---

<img src="../media/pattern.webp" alt="Decorative pattern for the logic workshop" width="100%" />

## Basic simulator usage

Before learning about logic gates, we need to understand how to place components and how to connect them correctly.

### 1. Main interface

On the left side, there is a bar with all available components, such as:

- Inputs (Input) 
<img src="../media/logicinput.png" alt="Icon of an input" width="40px" class="lg-img"/>

- Outputs (Output) 
<img src="../media/logicoutput.png" alt="Icon of an output" width="40px" class="lg-img"/>

- Clock (CLK) 
<img src="../media/logicclock.png" alt="Icon of a clock" width="64px" class="lg-img"/>

- Logic gates (AND, OR, NOT, etc.)  
<div style="margin-left: 20px; display: flex; gap: 5px; align-items: center;">
   <img src="../media/logicand.png" alt="Icon of an AND logic gate" width="64px"/>
   <img src="../media/logicor.png" alt="Icon of an OR logic gate" width="64px"/>
   <img src="../media/logicnot.png" alt="Icon of a NOT logic gate" width="64px"/>
</div>

At the top there are important buttons:
- **Edit**: mode for placing components.
- **Move**: move components that are already placed.
- **Delete**: remove components.
- **Save / Load**: save or load circuits.
<img src="../media/menu.png" alt="Icon of the simulator menu" class="lg-img"/>


The white area is where you will build your circuit.

---

## First mission: connect an input with an output

### Steps

1. Make sure **Edit** mode is selected.
2. In the left bar, click on **Input**.
3. Click anywhere in the white space to place it.
4. Then select **Output** and click again to place it to the right of or near the input.
5. To connect them:
   - Click on the small circle of the input.
   - Then click on the circle of the output.
   - A wire will be drawn automatically.
6. Click on the input symbol to toggle its value on or off:
   - `0` = off
   - `1` = on

If the input is at `1` and the output shows `1`, your circuit is working.

---

## What did you learn?

- How to place components (click the component, then click the white space).
- How to connect them using the connection circles.
- How to toggle input signals.
- This circuit does not use logic gates yet, just a direct connection.

---

## Simulator

<iframe src="https://drendog.github.io/Logic-Circuit-Simulator/" title="Logic gate simulator" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

---

## Next up

When you are ready, in the next activity you will meet the Toucan (Tucán) and learn how to use the **AND** logic gate.