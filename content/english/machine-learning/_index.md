---
title: "Python: Machine Learning"
description: "Basics of Machine Learning"
prereq: "none"
difficulty: "Beginner"
draft: false
---

## Let's learn some machine learning to evaluate player overall ratings in FIFA video game

Machine learning is the science to study *algorithms* and *models* that enable computers to recognize things, make decisions, even predict results without explicit instructions. As an example, when talking to your phone assistant such as Siri or Cortana, machine learning helps to translate your voice into text and further understand what you requested. Is that amazing?

Today we are going to show you how to *teach* a computer evaluate overall ratings for soccer player based on their attributes step by step.  

Let's get on to it!

## A little background

Assume that there's a formula to calculate the "Overall" ratings for soccer players by EA Sports (The developer of FIFA 2019). With this formula, we can easily calculate the overall ratings for any player even he/she is not in the game. The problem is, we don't know what exactly the formula looks like. <br>
We know the *input* which consists of player attributes and the *output* which is the Overall ratings. Then we can use an approach called "regression" to "estimate" the formula based on the input/output.

Today, we are going to use a simple model called Linear Regression. 
Let assume the formula that calculates the overall ratings of soccer player \( y = f(x)\) is
\[
    f(x) = ax + b
\]
The linear regression aims to figure out \(a\) and \(b\). The formula \(f(x)\) is called "model" in machine learning, and the process of solve/estimate the model is called "training" the model. Once we trained the model, we can use it to predict target \(y\) of new data.

Back to our story, if we only have 1 variable \(x\), estimate \(f(x)\) should be easy. Everyone should be able to solve it with a pen and a piece of paper. However, when \(x\) is a long list of attributes of soccer players like speed, power, passing, tackling, it becomes complicated. The formula should be rewritten into
\[
    f(x_1, x_2, ..., x_n) = a_1 * x_1 + a_2 * x_2 + ... + a_n * x_n + b
\]
Then we have to feed the model with a lot of high-quality data to make the model more closer to the "real" formula. Let's get started!


## Table of Contents

<details close>
<summary>Table of Contents</summary>
{{% children /%}}
</details>
