---
title: "Supply Chain Analytics - Answer Key"
date: 2026-04-29T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
This is a teacher's reference for the Supply Chain Analytics workshop. It contains the complete optimization setup, Excel Solver configuration, and solutions for both the main problem and the extra challenge. Students also have access to the answers Excel file linked on the Solving page.
{{% /notice %}}

## Problem setup

Students run a cookie bakery selling two types of cookies. The goal is to maximize profit using Excel Solver.

### Data from the scenario

**Revenue, cost, and profit per batch (12 cookies):**

| Cookie | Revenue | Cost | Profit |
|--------|---------|------|--------|
| Chocolate Chip | $20 | $10 | $10 |
| Sugar Cookie | $15 | $7 | $8 |

**Ingredients required per batch:**

| Ingredient | Chocolate Chip | Sugar Cookie | Available |
|------------|---------------|--------------|-----------|
| Eggs | 3 | 2 | 24 |
| Flour (cups) | 8 | 5 | 55 |
| Sugar (cups) | 5 | 6 | 50 |

## Optimization formulation

Let **x** = batches of chocolate chip cookies, **y** = batches of sugar cookies.

**Decision variables:** x and y (must be non-negative integers)

**Objective function (maximize):**

```
Profit = 10x + 8y
```

**Constraints:**

```
3x + 2y ≤ 24    (eggs)
8x + 5y ≤ 55    (flour)
5x + 6y ≤ 50    (sugar)
x, y ≥ 0        (non-negative)
x, y integer     (whole batches only)
```

{{% notice tip %}}
**Teacher tip:** Walk students through translating the word problem into math. Each row of the constraint table becomes one inequality. The left side is "how much of this ingredient we use" and the right side is "how much we have."
{{% /notice %}}

## Solution: main problem

**Optimal answer: 5 batches of chocolate chip, 3 batches of sugar cookies**

**Maximum profit: $74**

Calculation: Profit = 10(5) + 8(3) = 50 + 24 = **$74**

### Constraint verification

| Constraint | Calculation | Used | Available | Slack |
|-----------|-------------|------|-----------|-------|
| Eggs | 3(5) + 2(3) = 21 | 21 | 24 | 3 leftover |
| Flour | 8(5) + 5(3) = 55 | 55 | 55 | 0 (fully used) |
| Sugar | 5(5) + 6(3) = 43 | 43 | 50 | 7 leftover |

{{% notice tip %}}
**Teacher tip:** Point out that flour is the "binding constraint" (zero slack). This means flour is the ingredient limiting how many cookies we can make. If we could get more flour, we could make more profit. Eggs and sugar have leftover capacity.
{{% /notice %}}

## Excel Solver setup

In the Solver dialog, students should configure:

| Solver field | Cell/value |
|-------------|------------|
| **Set Objective** | The Total Profit cell (Step 3) |
| **To** | Max |
| **By Changing Variable Cells** | The two "# of batches" cells (Step 2) |
| **Subject to Constraints** | Egg formula ≤ 24, Flour formula ≤ 55, Sugar formula ≤ 50 |
| **Integer Constraint** | Batch cells = Integer (so Solver returns whole numbers) |
| **Make Unconstrained Variables Non-Negative** | Checked |
| **Solving Method** | Simplex LP |

Also make sure "Make Unconstrained Variables Non-Negative" is checked in the Solver options.

### Excel formula reference

| Cell purpose | Formula pattern |
|-------------|----------------|
| Profit per batch | `=Revenue - Cost` (e.g., `=C7-D7`) |
| Total Profit | `=Profit_CC * Batches_CC + Profit_Sugar * Batches_Sugar` |
| Egg usage | `=Eggs_per_CC * Batches_CC + Eggs_per_Sugar * Batches_Sugar` |
| Flour usage | `=Flour_per_CC * Batches_CC + Flour_per_Sugar * Batches_Sugar` |
| Sugar usage | `=Sugar_per_CC * Batches_CC + Sugar_per_Sugar * Batches_Sugar` |

## Extra challenge: egg shortage

The fence breaks and chickens escape. Available eggs drop from 24 to 15.

**New optimal answer: 1 batch of chocolate chip, 6 batches of sugar cookies**

**New maximum profit: $58**

Calculation: Profit = 10(1) + 8(6) = 10 + 48 = **$58**

### Constraint verification (challenge)

| Constraint | Calculation | Used | Available | Slack |
|-----------|-------------|------|-----------|-------|
| Eggs | 3(1) + 2(6) = 15 | 15 | 15 | 0 (fully used) |
| Flour | 8(1) + 5(6) = 38 | 38 | 55 | 17 leftover |
| Sugar | 5(1) + 6(6) = 41 | 41 | 50 | 9 leftover |

**Profit decreased by $16** (from $74 to $58).

{{% notice tip %}}
**Teacher tip:** This is a great discussion moment. Ask students:
- Why did the mix shift from mostly chocolate chip to mostly sugar cookies? (Sugar cookies use only 2 eggs per batch vs. 3 for chocolate chip, so you can make more batches with limited eggs.)
- Which constraint is binding now? (Eggs, not flour.)
- What does this teach us about supply chain disruptions? (A shortage in one ingredient can completely change your production plan and reduce profits.)
{{% /notice %}}

## Key concepts summary

| Concept | What it means | Cookie bakery example |
|---------|--------------|----------------------|
| Decision variables | What you control | How many batches of each cookie |
| Objective function | What you want to maximize or minimize | Total profit |
| Constraints | Limits on resources | Available eggs, flour, sugar |
| Binding constraint | A resource fully used up | Flour (main problem), Eggs (challenge) |
| Slack | Leftover unused resource | 3 eggs leftover in main problem |
| Sensitivity | How the answer changes when data changes | Egg shortage shifts production to sugar cookies |

## Common student questions

**Q: Why can't I just make all chocolate chip cookies since they have higher profit?**
A: Because each batch of chocolate chip uses more ingredients than sugar cookies. With limited ingredients, making only chocolate chip cookies would hit the constraints faster and waste potential capacity.

**Q: What if I get a different answer from Solver?**
A: Make sure "Make Unconstrained Variables Non-Negative" is checked and that you added an integer constraint on the batch cells. Also verify your formulas reference the correct cells.

**Q: What does "Simplex LP" mean?**
A: It stands for "Simplex Linear Programming." It is the mathematical method Excel uses behind the scenes to find the best answer. You do not need to understand the math; Solver handles it for you.
