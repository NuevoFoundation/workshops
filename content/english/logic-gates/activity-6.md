---
title: "Activity 6 - The Sloth's silent summit (OR + NOT)"
date: 2025-10-20T02:25:00-05:00
weight: 7
draft: false
---

<link rel="stylesheet" href="../_logic-gates.css" type="text/css" />

<img src="../media/perezoso.webp" alt="Nuvi dressed as a sloth" width="10%" />

## Introduction


The **Sloth (Perezoso)** is waiting for you on the mountain:

> "I want total silence: the output only turns on when **no** trail has light.  
> Let's use **OR** to detect if there's light, and **NOT** to invert."

---

<img src="../media/pattern.webp" alt="Decorative pattern for the logic workshop" width="100%" />

## Logical goal

The output should be 1 only if **A = 0 and B = 0**:

<details class="lg-details">
<summary class="lg-summary">
See full truth table
</summary>

<div class="lg-div">

| A | B | A OR B | Output = NOT(A OR B) |
|---|---|--------|----------------------|
| 0 | 0 |   0    |          1           |
| 0 | 1 |   1    |          0           |
| 1 | 0 |   1    |          0           |
| 1 | 1 |   1    |          0           |

</div>
</details>

---

<img src="../media/paisaje_camino.webp" alt="Landscape of the mountain summit" width="100%" />

## Simulator instructions

### 1. Place
- **Inputs**: A, B  
- **OR Gate**  
- **NOT Gate**  
- **Output**

<img src="../media/actividad_6.png" alt="Visual example of the OR followed by NOT circuit with two inputs and one output" width="20%" class="lg-img"/>

### 2. Connect
1. A and B ➔ **OR**  
2. **OR** output ➔ **NOT**  
3. **NOT** output ➔ **Output**

### 3. Test
- Try 00, 01, 10, 11.  
- Only with 00 should the output be 1.

**Victory condition:** if there is **any** light in A or B, the output is 0.

---

## Quick tips

- If the output always stays at 1, the cable from **OR** to **NOT** may be missing.  
- Name the intermediate signal `OR_AB`.

---

## Simulator

<iframe src="https://drendog.github.io/Logic-Circuit-Simulator/" title="Logic gate simulator" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

---

## What did you learn?

- How to express "**none** of the inputs are active" with **OR** followed by **NOT**.