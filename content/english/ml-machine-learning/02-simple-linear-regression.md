---
title: "Simple Linear Regression"
description: "Make computers learn to predict outcomes."
prereq: "Python"
icon: ""
draft: false
weight: 2
---

# What is simple linear regression?
Simple linear regression aims to find a correlation between two variables. Once dependent and one independent. The main objectives are:

1. Establish a **relationship** between two variables.

    As an example, you can determine the relationship between income and spending, humidity and temperature or NO relations such as students' height and exam scores.

2. Forecasting / Predicting new values.
    Can we use what we know about the relationship to predict unobserved values?
    Example: What will be the temperature tomorrow? How much will my bakery sell this year compared to last year?

# Variable roles
In linear regression, variables can take one of 2 roles.

1. **Dependent Variable**

The variable whose values we want to predict or forecast. We call it dependent because its value depends on something else. We call this variable **y**.

2. **Independent Variables**

The variable that explains the dependent variable. Its value is independent. We call this variable **x**.

# The Linear Equation

When we use linear regression we call it **linear** because, well... the equation represents a straight line in a 2D plane.

What is the equation of a straight line?
{{% expand "**Show Answer?**" %}}  
<h1>
\[
    y = ax + b
\]
</h1>

- **y** is the dependent value.
- **x** is the independent variable.
- **a** is the slope of the line.
- **b** is the intercept or the value of **y** when **x**=0.
{{% /expand %}}

# True World Examples

In the real world, data is not linear and behaves in all sorts of weird ways. At first glance, it may not seem that the data you get has no relation at all. What you need to look for is data that somewhat follows a linear pattern.

Suppose you have a bunch of data that tells you how much money a family wins per year and how much money they are spending on their monthly expenses. This is how the data looks if we plot it in 2D:

|![Random values from Income vs Expense]()|
|:--:|
|Figure #: Income vs Expenses|

As you can see, the data is somewhat linear and if we draw an imaginary line, in the center of the dots we can see that in general, the line doesn't pass through ALL the dots. Rather, there are going to be errors between the imaginary line and the dots. When we need to understand is that our linear equation needs to consider that possible error.

In our linear equation, let's add that error with the greek letter **ε**.

<h1>
\[
    y = ax + b + ε
\]
</h1>

- **y** is the dependent value.
- **x** is the independent variable.
- **a** is the slope of the line.
- **b** is the constant value. (The value of **y** when **x**=0.)
- **ε** is the error term which will be something very small.

# Step 1: Analyzing the Data.

Let's hop back again at the data from figure # and let's think about something for a second.

**What can explain a family's amount of expenses per month?**

In general, larger families tend to spend more since there are more family members. But in the previous section, we showed the **Income vs Expenses** plot and, notice how the data resembles a line. 

Does this mean that the more money a family has, the more they tend to spend regardless of the number of family members? How can we use the income and expense values of the data to determine this?

Let's see if there is any relationship or if it's just a coincidence 👏! 

First lets see how we can relate the dependent (income) and independent (expenses) variables with the linear equation.

<h1>
\[
    y = ax + b + ε
\]
</h1>

<h1>
\[
    Expenses = a*Income + b + ε
\]
</h1>

Remember that we are assuming that income is a good enough variable to explain the number of expenses each family has.
