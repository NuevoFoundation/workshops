---
title: "Activity 1 - The Toucan's gate (AND)"
date: 2025-10-20T01:15:00-05:00
weight: 2
draft: false
---

<link rel="stylesheet" href="../_logic-gates.css" type="text/css" />

<img src="../media/tucan.png" alt="Illustration of Nuvi in a toucan costume" width="15%" />

## Introduction


As you walk through the forest, you reach a large wooden door.  
A toucan appears beside it and says:

> "This door only opens if both torches are lit at the same time.  
> If only one is lit, the door won't move.  
> Here we use AND logic."

Your mission is to test this behavior using the logic gate simulator.

---

<img src="../media/pattern.webp" alt="Decorative pattern for the logic workshop" width="100%" />

## What is the AND gate?

- It has **two inputs** and **one output**.  
- The output turns on (`1`) **only if both inputs are on (`1`)**.  
- If one or both inputs are off (`0`), the output stays off (`0`).

<details class="lg-details">
<summary class="lg-summary">
See full truth table
</summary>

<div class="lg-div">

| Input A | Input B | AND Output |
|---------|---------|------------|
| 0       | 0       | 0          |
| 0       | 1       | 0          |
| 1       | 0       | 0          |
| 1       | 1       | 1          |

</div>
</details>

---

<img src="../media/paisaje_puerta.webp" alt="Landscape of the door in the forest" width="100%" />

## Simulator instructions

### 1. Place the components
1. Make sure you are in **Edit** mode.
2. From the left sidebar, click on:
   - **Input** ➔ place **two** inputs (A and B).
   - **AND Gate** ➔ place an AND gate.
   - **Output** ➔ place an output to the right of the gate.

<img src="../media/actividad_1.png" alt="Visual example of the AND circuit with two inputs and one output" width="20%" class="lg-img"/>

### 2. Connect the components
1. Click on the output circle of **Input A**, then click on one of the AND gate inputs.  
2. Repeat the same with **Input B**.  
3. From the AND gate output, connect to the **Output** circle.

### 3. Test the circuit
- Click on each input to toggle between `0` and `1`.  
- Try all possible combinations.  
- The Toucan's door only "opens" (output = 1) when Input A is 1 and Input B is 1 (A=1 AND B=1).


---

## Simulator

<iframe src="https://drendog.github.io/Logic-Circuit-Simulator/" title="Logic gate simulator" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

---

## What did you learn?

- AND represents conditions that must be met together: the output is only activated when A = 1 and B = 1 at the same time.
- If one of the inputs is 0, the output will also be 0, with no exceptions.

---

## Next up

In the next activity, you will walk down the trail until you meet the Sloth (Perezoso) and discover how the OR gate works.