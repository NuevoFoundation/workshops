---
title: "Model Fit"
prereq: "Python"
icon: ""
draft: false
weight: 4
---


# Does our model fit?

Remember that the linear equation we built has an error value (**ε**)that we cannot explain.

<h3>
\[
    Salary = a(Experience) + b + ε
\]
</h3>

This raises the question, how well does our model "fit" the reality? There are many ways to find this but in the world of machine learning and statistics, there is a value we can use. This value is called the **R-Squared** or **R<sup>2</sup>**.

## Exercise 1: R-Squared

The Experience_vs_Salary-More_Data showcases how likely is the dependent variable from the independent variable. Its value is always between 0 and 1. 

If we translate this to our example of salary and years of experience, we can say

"How likely will the **salary** of an employee change based on their **experience**?".

As a rule of thumb, if the value of **R<sup>2</sup>** is close to 1 it means that the data we have has a good relationship.

The Replit code below will take the initial sample of 30 employees and find the standard error and R<sup>2</sup>.

<iframe height="500px" width="100%" src="https://replit.com/@nuevofoundation/LinearRegression-ConsoleApp#src/04-e1.py" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

As you can see, the value of R<sup>2</sup> is 0.973. Now if anyone asks us if there is any relation in our data, we can tell:

"We are 97.3% confident that the years of experience of an employee is related to the salary they have". 

Now let's go and make some predictions!
