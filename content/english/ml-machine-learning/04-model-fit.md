---
title: "Model Fit"
prereq: "Python"
icon: ""
draft: false
weight: 4
---

# Does our model fit?

Remember that the linear equation we built has a random error value (**ε**).

<h3>
\[
    SALARY = 9449.96(XP) + 25792.20 + ε
\]
</h3>

This raises the question, how well does our model `fit` or represent reality? There are many ways to find this but in the world of machine learning and statistics, there is a value we can use. This value is called the **R-Squared** or **R<sup>2</sup>**.

[R-Squared](https://www.ncl.ac.uk/webtemplate/ask-assets/external/maths-resources/statistics/regression-and-correlation/coefficient-of-determination-r-squared.html#:~:text=6%20See%20Also-,Definition,line%20approximates%20the%20actual%20data.) - is a measure that provides information about the goodness of fit of a model. In the context of regression it is a statistical measure of how well the regression line approximates the actual data.

As a rule of thumb, if the value of **R<sup>2</sup>** is close to 1 it means that the data we have has a good fitting or relationship. In other words, the closer the value of **R<sup>2</sup>** is to 1, the more confident we can be in order to say that "the years of experience of an employee has a impact in the salary of an employee."

## Exercise 1: R-Squared

The `Experience_vs_Salary-More_Data` file has over 10,000+ entries where you can see the salary and years of experience of employees of the company you work for. The Replit code below will take the initial sample of 30 employees and find the standard error and R<sup>2</sup>.

<iframe height="500px" width="100%" src="https://replit.com/@nuevofoundation/LinearRegression-ConsoleApp#src/04-e1.py" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

As you can see, the value of R<sup>2</sup> is 0.973. Now if anyone asks us if there is any relation in our data, we can say that "we are 97.3% confident that the years of experience of an employee is related to the salary they have".

I encourage you to change the 'sample_size' variable to a larger or shorter size to see how the R<sup>2</sup> value gets affected. 

Now let's go and make some predictions!
