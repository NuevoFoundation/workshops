---
title: "Activity 4 - The Little Monkey's mission (Combining gates)"
date: 2025-10-20T01:55:00-05:00
weight: 5
draft: false
---

<link rel="stylesheet" href="../_logic-gates.css" type="text/css" />

<img src="../media/monito.jpg" alt="Nuvi dressed as a little monkey" width="20%" />

## Introduction


From the top of a tree, the **Little Monkey (Monito)** greets you with excitement:

> "You've come a long way! You already know **AND**, **OR**, and **NOT**.  
> Now it's time to **combine them** to restore energy to the **Forest Sphere**."

In this activity, you will build a circuit that uses **all** the gates to solve a challenge.

---

<img src="../media/pattern.webp" alt="Decorative pattern for the logic workshop" width="100%" />

## Goal

Build and verify the logic circuit:

- The **Sphere** turns on if:
  - **B** is on, **or**
  - **A** is on **and** **C** is off.

This circuit uses **NOT**, **AND**, and **OR**.

---

## Required components

- 3 **Input**: A, B, C  
- 1 **NOT Gate**  
- 1 **AND Gate**  
- 1 **OR Gate**  
- 1 **Output**

<img src="../media/actividad_4.png" alt="Visual example of the combined AND, OR, NOT circuit with three inputs and one output" width="20%" class="lg-img"/>

---

<img src="../media/paisaje_bosque.webp" alt="Landscape of the magic forest" width="100%" />

## Simulator instructions

### 1. Place the components
1. Make sure you are in **Edit** mode.
2. In the left sidebar, select and place:
  - Place **A**, **B**, **C** (Inputs).  
  - Place **NOT**, **AND**, **OR**.  
  - Place an **Output** on the right.

### 2. Connect the components
1. Connect **C ➔ NOT** (this creates **NOT C**).  
2. Connect **A** and **NOT C** to the **AND** (this creates **A AND NOT C**).  
3. Connect **(A AND NOT C)** and **B** to the **OR**.  
4. Connect the **OR output ➔ Output**.

---

## Guided tests

Try these combinations and verify the **Output**:

1. **A = 1, B = 0, C = 0** ➔ `NOT C = 1` ➔ `A AND NOT C = 1` ➔ `Output = 1`  
2. **A = 1, B = 0, C = 1** ➔ `NOT C = 0` ➔ `A AND NOT C = 0` ➔ `Output = 0` 
3. **A = 0, B = 1, C = 1** ➔ `B = 1` ➔ `Output = 1`
4. **A = 0, B = 0, C = 0** ➔ both paths give `0` ➔ `Output = 0`

If all four match, the Sphere lights up correctly!

---

## Truth table

<details class="lg-details">
<summary class="lg-summary">
See full truth table
</summary>

<div class="lg-div">

| A | B | C | NOT C | A AND NOT C | Output = (A AND NOT C) OR B |
|---|---|---|-------|-------------|------------------------------|
| 0 | 0 | 0 |   1   |      0      |              0               |
| 0 | 0 | 1 |   0   |      0      |              0               |
| 0 | 1 | 0 |   1   |      0      |              1               |
| 0 | 1 | 1 |   0   |      0      |              1               |
| 1 | 0 | 0 |   1   |      1      |              1               |
| 1 | 0 | 1 |   0   |      0      |              0               |
| 1 | 1 | 0 |   1   |      1      |              1               |
| 1 | 1 | 1 |   0   |      0      |              1               |

</div>
</details>

---

## Simulator

<iframe src="https://drendog.github.io/Logic-Circuit-Simulator/" title="Logic gate simulator" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

---

## Common mistakes and how to fix them

- **The output is always 0:** check that the **OR** receives **two signals**: `B` **and** `A AND NOT C`.  

---

## What did you learn?

- Gates can be combined to create more complex decisions than a single gate can provide.
- NOT lets you invert a signal; AND lets you combine simultaneous conditions; OR lets you join alternative paths.
- The final output depends on how the gates are connected and the order in which signals are processed.

---

## Next up

In the next mission, you will meet the forest characters again to solve bigger challenges using the same three gates.
