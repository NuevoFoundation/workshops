---
title: "Simple Linear Regression"
description: "Make computers learn to predict outcomes."
prereq: "Python"
icon: ""
draft: false
weight: 2
---

# What is simple linear regression?
Simple linear regression aims to find a correlation between two variables. One dependent and one independent. With regression in general, we want to know:

1. Is there a **relationship** between the variables we have?

    As an example, you can determine the relationship between income and spending, experience and salary, or humidity and temperature. But there is NO relation between a student's height and their exam scores.

2. Can we **forecast / predict** values with this?

    With regression, we can train the model and find out if we can predict values with certainty. Can we use what we know about the relationship to predict new values?
    
    Example: What will be the temperature tomorrow? How much will my bakery sell this year compared to last year? How much will my salary be if I have 5 years of experience?

# Variable roles
In simple linear regression, variables can take one of 2 roles.

1. **Dependent Variable**

    The variable whose value we want to predict or forecast. We call it dependent because its value depends on something else. We call this variable **y**.

2. **Independent Variables**

    The variable that explains the behavior of the dependent variable. We call this variable **x**.

# The Simple Linear Equation Model

When we use simple linear regression we call it **linear** because, well... the model for it is an equation that represents a straight line in a 2D plane.

What is the equation of a straight line?
{{% expand "**Click to show answer**" %}}
This equation may seem familiar to you. If it is, it's the general equation for a straight line.

<h1>
\[
    y = ax + b
\]
</h1>

- **y** is the dependent value.
- **x** is the independent variable.
- **a** is the slope or coefficient of the line.
- **b** is the intercept or the value of **y** when **x**=0.

With this equation we will elaborate on how linear regression models calculate and predict new ones.

{{% /expand %}}

# True World Examples

In the real world, data is not linear and behaves in all sorts of weird ways. At first glance, it may not seem that the data you get has no relation at all. What you need to look for is data that somewhat follows a linear pattern. Let me show you.

Suppose that you work for the human resources department of a company that has over 10,000 employees and wanted to know if the years of experience of an employee has anything to do with the amount of money they win. Of course, you can check the database of employees and verify:

1. What is their current salary? 
2. How many years of experience do they have? 

After you were done, you were able to get information from 30 employees:

|Employee ID|Years of Experience|Salary|
|:--:|:--:|:--:|
|1|1.1|39343|
|2|1.3|46205|
|3|1.5|37731|
|4|2.0|43525|
|5|2.2|39891|
|6|2.9|56642|
|7|3.0|60150|
|8|3.2|54445|
|...|...|...|
|26|9.0|105582|
|27|9.5|116969|
|28|9.6|112635|
|29|10.3|122391|
|30|10.5|121872|

After you had this table, you plotted all these values in a 2D scatter plot.

|![Years of Experience vs Salary](../resources/Years_vs_Salary.png)|
|:--:|
|Scatter Plot: Years of Experience vs Salary.|

As you can see, the dots somewhat resemble a line. Let's go ahead and draw an imaginary line and see if we can pass through all the dots.

|![Years of Experience vs Salary with Trendline](../resources/Years_vs_Salary_with_trendline.png)|
|:--:|
|Scatter Plot: Years of Experience vs Salary with line.|

You can see that in general, the line doesn't pass through ALL the dots, but it's somewhat close. What does this mean? Why in some cases are the dots close or far away from our imaginary line?

So far we know that our data follows a **linear** approach and has only one variable **YEARS OF EXPERIENCE**. This means, that we can **model** our data with an equation like:

<h1>
\[
    y = ax + b
\]
</h1>

# The Possibility of Errors
As we mentioned before, data may or may not be always consistent. What this means is that our linear equation needs to consider a possible error. But how do we represent that error in the equation? How can that error be visualized in the scatter plot?

|![Error Lines for Simple Linear Regression](../resources/error-lines.svg)|
|:--:|
|Error Lines for Simple Linear Regression|

In our linear equation, let's add that error with the greek letter **ε**.

<h1>
\[
    y = ax + b + ε
\]
</h1>

**ε** is the possible error our data can have. What simple linear regression aims to do is to draw an imaginary line that minimizes this error. This error is a very minimal value that often can be ignored. But the important thing is that our linear equation will consider this and we can represent the linear equation in a way that is familiar to our example.

<h1>
\[
    Salary = a(Experience) + b + ε
\]
</h1>

With the equation like this, we are assuming that "Years of experience explains the salary an employee has".

# Exercise 1: Playing with Scikit-learn

Scikit-learn is a machine-learning library that will help us analyze and use the built-in linear regression model to predict data.

In the Replit window below, you can run the "02-e2.py" program and see how the code plots the data similar to the images above:

<iframe height="500px" width="100%" src="https://replit.com/@nuevofoundation/LinearRegression-ConsoleApp#src/02-e1.py" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

# Excersice 2: Finding the Coefficients and Intercept

Before we go any further, lets analyze our equation. We know that our equation has been updated like so:

<h1>
\[
    Salary = a(Experience) + b + ε
\]
</h1>

We have been able to correlate **x** and **y** but what about **a** and **b**. Lets us recall from above what each value means.

- **y** is the dependent value.
- **x** is the independent variable.
- **a** is the slope or coefficient of the line.
- **b** is the intercept or the value of **y** when **x**=0.

Using scikit-learn we can use the Linear Regression model and find the value of **a** and **b**

On the Replit window below, lets analyze the code:

First, we need to import the data from the CSV file:

```python
# Importing dataset
dataset = pd.read_csv("Experience_vs_Salary.csv")
x = dataset.iloc[:, :-1].values # Get all the values from "Experience"
y = dataset.iloc[:, 1].values # Get all the values from "Salary"
```

Then we instantiate the `LinearRegression` model class and **fit** the model to the data:
```python
model = linear_model.LinearRegression()
model.fit(x,y)
```

The `fit` function will take the values from our CSV file and find the **coefficient** and **intercept** values.

<iframe height="500px" width="100%" src="https://replit.com/@nuevofoundation/LinearRegression-ConsoleApp#src/02-e2.py" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

As you can see, the code has returned the value for the **coefficient** and **intercept** of our linear equation. Let's update our linear equation with this.

<h3>
\[
    Intercept = 25792.20
\]
\[
    Coefficient= 9449.96
\]
\[
    Salary = 9449.96(Experience) + 25792.20 + ε
\]
</h3>
We know that the model gave us an intercept of 25792.20. What this means is that an employee with NO experience would have a salary is 25792.20. But what does the 9449.96 mean? This means that, for every year of experience, the salary of employees has an increase of 9449.96.

But wait a moment, how can we make sure these are the correct values? Do we have confidence that these are indeed the correct values? If we grab another 30 employees and ask them for their salaries, will we get the same?
