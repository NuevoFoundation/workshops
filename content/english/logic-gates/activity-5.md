---
title: "Activity 5 - The Toucan's inverted gate (AND + NOT)"
date: 2025-10-20T02:10:00-05:00
weight: 6
draft: false
---

<link rel="stylesheet" href="../_logic-gates.css" type="text/css" />

<img src="../media/tucan.png" alt="Nuvi dressed as a toucan" width="15%" />

## Introduction


In front of the stone gate, the **Toucan** winks at you:

> "Remember my **AND** gate? Today we're going to **invert** it with the help of **NOT**.  
> The gate will open **unless** both torches are lit."

---

<img src="../media/pattern.webp" alt="Decorative pattern for the logic workshop" width="100%" />

## Logical goal

Build an output that is true **except** when A = 1 **and** B = 1:

<details class="lg-details">
<summary class="lg-summary">
See full truth table
</summary>

<div class="lg-div">

| A | B | A AND B | Output = NOT(A AND B) |
|---|---|---------|------------------------|
| 0 | 0 |    0    |           1            |
| 0 | 1 |    0    |           1            |
| 1 | 0 |    0    |           1            |
| 1 | 1 |    1    |           0            |

</div>
</details>

---

<img src="../media/paisaje_puerta.webp" alt="Landscape of the stone gate in the forest" width="100%" />

## Simulator instructions

### 1. Place the components
1. Make sure you are in **Edit** mode.
- **Inputs**: A, B  
- **AND Gate**  
- **NOT Gate**  
- **Output**

<img src="../media/actividad_5.png" alt="Visual example of the AND followed by NOT circuit with two inputs and one output" width="20%" class="lg-img"/>

### 2. Connect
1. A and B ➔ **AND**  
2. **AND** output ➔ **NOT**  
3. **NOT** output ➔ **Output**

### 3. Test
- Go through 00, 01, 10, 11.  
- The gate opens in all cases **except** 11.

**Victory condition:** the output is 0 only when A = 1 and B = 1.

---

## Quick tips

- If it always gives 0, you probably connected the **Output** to the **AND** instead of the **NOT**.  

---

## Simulator

<iframe src="https://drendog.github.io/Logic-Circuit-Simulator/" title="Logic gate simulator" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

---

## What did you learn?

- How to **negate** a compound condition: first **AND**, then **NOT**.
