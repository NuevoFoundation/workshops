---
title: "Activity 7 - The Frog's bridge (Different values with AND/OR/NOT)"
date: 2025-10-20T02:40:00-05:00
weight: 8
draft: false
---

<link rel="stylesheet" href="../_logic-gates.css" type="text/css" />

<img src="../media/ranita.jpg" alt="Nuvi dressed as a frog" width="15%" />

## Introduction

The **Frog (Rana)** guards a bridge with a precise rule:

> "Only those carrying **exactly one** lit torch may cross.  
> If you carry none or both, the bridge closes."

---

<img src="../media/pattern.webp" alt="Decorative pattern for the logic workshop" width="100%" />

## Logical goal

Build an output that equals 1 when A and B are **different**.  
It is built using **only** AND, OR, and NOT:

<details class="lg-details">
<summary class="lg-summary">
See full truth table
</summary>

<div class="lg-div">

| A | B | A OR B | A AND B | NOT(A AND B) | Output |
|---|---|--------|---------|---------------|--------|
| 0 | 0 |   0    |    0    |       1       |   0    |
| 0 | 1 |   1    |    0    |       1       |   1    |
| 1 | 0 |   1    |    0    |       1       |   1    |
| 1 | 1 |   1    |    1    |       0       |   0    |

</div>
</details>

---

<img src="../media/paisaje_lago.webp" alt="Landscape of the lake in the forest" width="100%" />

## Simulator instructions

### 1. Place
- **Inputs**: A, B  
- **OR Gate**  
- **AND Gate** (x2)  
- **NOT Gate**  
- **Output**

<img src="../media/actividad_7.png" alt="Visual example of the XOR circuit using AND, OR, and NOT with two inputs and one output" width="20%" class="lg-img"/>

### 2. Connect
1. A and B ➔ **OR**: `OR_AB`  
2. A and B ➔ **AND1**: `AND_AB`  
3. `AND_AB` ➔ **NOT**: `NOT_AND_AB`  
4. `OR_AB` and `NOT_AND_AB` ➔ **AND2**  
5. **AND2** ➔ **Output**

### 3. Test
- Verify 00, 01, 10, 11.  
- The output should be 1 only for 01 and 10.

**Victory condition:** output = 1 when A ≠ B.

---

## Quick tips

- If you get 1 for 11, you are missing the negation of `AND_AB`.  
- Visually separate the `OR_AB` and `NOT_AND_AB` branches to avoid crossed wires.

---

## Simulator

<iframe src="https://drendog.github.io/Logic-Circuit-Simulator/" title="Logic gate simulator" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

---

## What did you learn?

- How to build the "**they are different**" condition using **AND/OR/NOT**.