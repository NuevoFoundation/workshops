---
title: "Machine Learning: Linear Regression - Answer Key"
date: 2026-04-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
This answer key covers all exercises and key calculations from the Linear Regression workshop. The workshop uses Replit for Python exercises with an Experience vs. Salary dataset. Some exercises produce different results each run due to random sampling.
{{% /notice %}}

## Section 1: What is Regression?

### Exercise 1 Answers

**Q1:** Can you know the shape type based on the area?

**A:** No. A square (3x3 = 9) and a triangle (base 6, height 3, area = 6x3/2 = 9) can have the same area but are different shapes.

**Q2:** What relationship determines shape type?

**A:** The number of sides. It is a direct linear relationship: 3 sides = triangle, 4 sides = square, 5 sides = pentagon, etc.

## Section 2: Simple Linear Regression

### Key Formula

The linear regression equation:

```
y = ax + b + ε
```

Where:
- `x` = independent variable (Years of Experience)
- `y` = dependent variable (Salary)
- `a` = slope/coefficient (how much y changes per unit of x)
- `b` = intercept (y value when x = 0)
- `ε` = error term

### Exercise 1: Playing with Scikit-learn

Load and visualize the dataset:

```python
import pandas as pd
from sklearn import linear_model

dataset = pd.read_csv("Experience_vs_Salary.csv")
x = dataset.iloc[:, :-1].values  # Experience column
y = dataset.iloc[:, 1].values     # Salary column

model = linear_model.LinearRegression()
model.fit(x, y)
```

### Exercise 2: Finding Slope and Intercept

**Answers:**
- **Intercept (b):** 25,792.20
- **Coefficient/Slope (a):** 9,449.96
- **Equation:** SALARY = 9,449.96 × (Experience) + 25,792.20 + ε

**Interpretation:**
- An employee with 0 years of experience earns approximately $25,792
- Each additional year of experience increases salary by approximately $9,450

## Section 3: Confidence Intervals

### Key Formula

```
CoefficientRange = Coefficient ± 2 × StandardError
```

### Exercise 2: Finding Standard Error

**Answer:** Standard Error = **409.40**

### Confidence Interval Calculation

```
CoefficientRange = 9,449.96 ± 2 × 409.40
CoefficientRange = 9,449.96 ± 818.80
CoefficientRange = [8,631.16 , 10,268.76]
```

**Interpretation:** We are 95% confident that each year of experience increases salary by between $8,631.16 and $10,268.76.

### Exercise 1: Checking More Samples

**Q:** Why do the intercept and coefficient values differ each run?

**A:** Each run selects a different random sample of 30 records from the 10,000+ dataset. Different samples produce slightly different results, but the values stay within the confidence interval range.

### Exercise 3: Normal Distribution

The histogram of coefficient values from many samples forms a Bell Curve (normal distribution). This confirms that the values cluster around the true coefficient, with most falling within the confidence interval.

## Section 4: Model Fit

### Exercise 1: Finding R-Squared

**Answer:** R² = **0.973**

**Interpretation:** We are 97.3% confident that years of experience is related to employee salary. The model explains 97.3% of the variation in salary.

{{% notice tip %}}
**For teachers:** R² ranges from 0 to 1. Values above 0.9 indicate a very strong relationship. If students get a lower R², ask them to check their sample size. Encourage students to change the `sample_size` variable and observe how R² changes.
{{% /notice %}}

## Section 5: Making Predictions

### Key Concept: Train/Test Split

- **Training set:** 70% of data (used to build the model)
- **Testing set:** 30% of data (used to verify the model)
- Both R² values should be similar (if testing R² is much lower, the model is overfitting)

### Exercise 1: Making Predictions

```python
# The Replit code creates training/testing datasets
# and generates prediction lines for both
# Key check: training R² ≈ testing R²
```

### Exercise 2: Custom Predictions

Students change the `experience` variable to predict salary for any years of experience:

| Years of Experience | Predicted Salary (approx.) |
|--------------------|-----------------------------|
| 0 | $25,792 |
| 5 | $73,042 |
| 10 | $120,292 |
| 15 | $167,542 |
| 20 | $214,792 |

**Formula used:** Salary = 9,449.96 × Experience + 25,792.20

{{% notice tip %}}
**Common student question:** "Why doesn't my prediction exactly match the table?"

The exact coefficient and intercept depend on which random sample was selected. The values above use the workshop's reference values (slope = 9,449.96, intercept = 25,792.20). Your specific values will be slightly different but should produce similar predictions.
{{% /notice %}}

## Quick Reference

| Concept | Value | Meaning |
|---------|-------|---------|
| Slope (a) | 9,449.96 | Salary increase per year of experience |
| Intercept (b) | 25,792.20 | Starting salary with 0 experience |
| Standard Error | 409.40 | Average distance from regression line |
| 95% Confidence Range | [8,631 - 10,269] | Range for the true slope value |
| R² | 0.973 | Model explains 97.3% of salary variation |
| Train/Test Split | 70/30 | Standard split ratio |
