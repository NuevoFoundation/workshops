---
title: "Confidence Interval"
description: "Make computers learn to predict outcomes."
prereq: "Python"
icon: ""
draft: false
weight: 3
---

From the last section, we were able to find the coefficient and intercept of our linear equation using a sample dataset of 30 random employees.
<h3>
\[
    Intercept = 25792.20
\]
\[
    Coefficient= 9449.96
\]
\[
    SALARY = 9449.96(XP) + 25792.20 + ε
\]
</h3>

But this bring up another question, is salary REALLY related to the years of experience? Is the relationship between the two values strong enough to claim they are related? Are 30 employees enough? How can we make sure these are the correct values?

You need to recall that you found the values by working with a small sample that was drawn from a much larger number of employees. Since we have only one sample, there will be more uncertain with the value of the intercept and coefficient.

What can we do to make sure the values are valid?

{{% expand "**Click to show answer**" %}}

We need to run the linear model with more samples of data.

{{% /expand %}}

# Exercise 1: Checking More Samples

Suppose you were able to find over 10,000 records 😯! This is great since, in the world of machine learning, the more data you have the better the results. Now let's take 30 records from that 10,000+ dataset and check if the intercept and coefficient values differ from the original sample we had. On the Replit window below run the code as many times as you want but notice how the **intercept** and **coefficient** values are somewhat similar to the ones we calculated before and how the new predicted line 

<iframe height="500px" width="100%" src="https://replit.com/@nuevofoundation/LinearRegression-ConsoleApp#src/03-e1.py" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

Why is this happening? Why are the **intercept** and **coefficient** values different every time?
{{% expand "**Click to show answer**" %}} 
This is because every time you run the program, a random sample of 30 records is selected. On any random sample you run, both values will be different. But the good thing is, all these values are obtained from the same data set.
{{% /expand %}}

How can we say that we are **confident** that the values we getting represent the data we have?

# Confidence Intervals

The previous example teaches us that, when you work random samples from a larger dataset, the **intercept** and **coefficient** values fall in a range. We know that the actual value must lie between 2 values but we don't know what they are! This is known as the [confidence interval](https://www.geeksforgeeks.org/confidence-intervals-for-machine-learning/).

When you run the code from **Exercise 1** several times you can see that the value of the **coefficient** may changes every time but notice how it rarely drops below 9000 or is rarely above 10000. What is the difference between all the possible **coefficients** we can find running the code multiple times? What is that value? This is known as the **standard error**.

**[Standard Error](https://www.statology.org/standard-error-regression/)** - the average distance that the values fall from the regression line.

# Example 2: Finding the Standard Error.

We can use the [StatsModels](https://www.statsmodels.org/stable/index.html) package to get all sorts of values from our linear regression. Run the Replit below and you should see an output like so:

|![Statmodels result](../resources/finding_stderror.png)|
|:--:|
|Summary of Statsmodel run|


<iframe height="500px" width="100%" src="https://replit.com/@nuevofoundation/LinearRegression-ConsoleApp#src/03-e2.py" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

Lets focus on the **stderr** value in the table. In this case, is **409.40**. This means is that, for any random sample set, the **coefficient** or **slope** of our line will vary by 409.40.

# The Normal Distribution

Let's take a step back and ask, from the coefficients or slopes that we can see in "Exercise 2" how likely is it that they will repeat when running the program for other samples?

Machine learning uses a lot of statistics to determine the values we have gathered. In the world of statistics, there is a graph used to measure the likelihood of a value appearing in the data. This is known as the "Normal Distribution" or "Bell Curve" and it looks something like this:

|![Normal Distribution](../resources/normal_distribution.png)|
|:--:|
|Figure #: Normal Distribution or Bell Curve|

Let's take the following example, how likely is it to see a very short person? How likely is it to see a very tall person?

If we make this relation with a bell curve you will get something like this:

|![Normal Distribution](../resources/normal_distribution_height.png)|
|:--:|
|Figure #: Normal Distribution or Bell Curve with people's height.|

As you can see, it is very unlikely to see a very short person or a very tall person. But it is quite normal to see people of average height.

If you run the Replit below you will see how the generated histogram resembles the bell curve.

<iframe height="500px" width="100%" src="https://replit.com/@nuevofoundation/LinearRegression-ConsoleApp#src/03-e3.py" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

When this happens we can use the standard error and the following equation to say:

"We are 95% confident that the value of the coefficient will be in this interval".

<h3>
\[
    CoefficientRange = Coefficient \pm2*(StdError)
\]
</h3>

What is that range? Let's find out!


# Example 3: Calculating Confidence Interval

Since we know that the standard error is 409.40 we can calculate the range of the coefficient like so:

<h3>
\[
    StdError = 409.40
\]
\[
    Coefficient = 9449.96
\]
\[
    CoefficientRange = Coefficient \pm 2 * StdError
\]
\[
    CoefficientRange = 9449.96 \pm 2 * StdError
\]
\[
    CoefficientRange = [8,631.16, 10,268.76]
\]
</h3>

The code below will take 100 random samples and find the coefficients of each of the samples. The generated graph shows the occurrence of each coefficient. Notice how they resemble a bell curve.

<iframe height="500px" width="100%" src="https://replit.com/@nuevofoundation/LinearRegression-ConsoleApp#src/03-e3.py" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

As you can see the coefficients lie between the interval we established. [8,631.16, 10,268.76].
