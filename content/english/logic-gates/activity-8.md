---
title: "Activity 8 - The Little Monkey's mirror chamber (Equality with AND/OR/NOT)"
date: 2025-10-20T02:55:00-05:00
weight: 9
draft: false
---

<link rel="stylesheet" href="../_logic-gates.css" type="text/css" />

<img src="../media/monito.jpg" alt="Nuvi dressed as a little monkey" width="20%" />

## Introduction

In the hall of reflections, the **Little Monkey (Monito)** explains:

> "To activate the chamber, the signals must **match**.  
> If A and B are equal, the door opens."

---

<img src="../media/pattern.webp" alt="Decorative pattern for the logic workshop" width="100%" />

## Logical goal

Build an output that equals 1 when **A = B**, using **AND/OR/NOT**:

<details class="lg-details">
<summary class="lg-summary">
See full truth table
</summary>

<div class="lg-div">

| A | B | NOT A | NOT B | A AND B | (NOT A AND NOT B) | Output |
|---|---|-------|-------|---------|--------------------|--------|
| 0 | 0 |   1   |   1   |    0    |         1          |   1    |
| 0 | 1 |   1   |   0   |    0    |         0          |   0    |
| 1 | 0 |   0   |   1   |    0    |         0          |   0    |
| 1 | 1 |   0   |   0   |    1    |         0          |   1    |

</div>
</details>

---

<img src="../media/paisaje_bosque.webp" alt="Landscape of the magic forest" width="100%" />

## Simulator instructions

### 1. Place
- **Inputs**: A, B  
- **NOT Gate** (x2)  
- **AND Gate** (x2)  
- **OR Gate**  
- **Output**

<img src="../media/actividad_8.png" alt="Visual example of the XNOR circuit using AND, OR, and NOT with two inputs and one output" width="20%" class="lg-img"/>

### 2. Connect
1. A ➔ **NOT**: `NOT_A`  
2. B ➔ **NOT**: `NOT_B`  
3. A and B ➔ **AND1**  (branch "both 1")  
4. `NOT_A` and `NOT_B` ➔ **AND2** (branch "both 0")  
5. **AND1** and **AND2** ➔ **OR**  
6. **OR** ➔ **Output**

### 3. Test
- Try 00, 01, 10, 11.  
- The output should be 1 for 00 and 11.

**Victory condition:** output = 1 if and only if A and B match.

---

## Quick tips

- If the output is 1 for 01 or 10, check the cables from `NOT_A`/`NOT_B` to **AND₂**.  
- Keep the two branches symmetrical so the circuit is easy to read.

---

## Simulator

<iframe src="https://drendog.github.io/Logic-Circuit-Simulator/" title="Logic gate simulator" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

---

## What did you learn?

- How to build the "**they are equal**" condition using only **AND/OR/NOT**.  
- How to use **parallel branches** to cover complementary cases.