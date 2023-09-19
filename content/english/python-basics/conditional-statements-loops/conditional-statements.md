---
title: "Conditional statements"
date: 2022-09-19T14:45:38-07:00
draft: false
weight: 1
---

Now that we know the basics of print statements, variables, and reading in input from the user – we can combine all these awesome skills with conditional statements. Conditional statements allow the computer to make **decisions** based off the **value** of an expression. In the real world, we use conditional statements all the time to make decisions! For example, if it is raining outside, then I use an umbrella. In this example, the I evaluated the weather outside and because it was raining, I made the sequential decision to use an umbrella.

What conditional statements can you think of that you use in everyday life?

# If statements

We’ll start off with an if statement in its simplest form! Looking at the real world example, you can see certain words used and those apply to programming statements as well. **If** it is raining outside, then I use an umbrella. `if` tells us that we need to make a decision. Is it raining? That question is called the expression. Then, if it is raining, I use an umbrella. That is a statement that applies when the expression is truthful.

```python
if (expr):
    statement
```


Shown above we have three different parts:

1. If – this tells the computer that we are going to be deciding based off the expression inside the parenthesis
2. Expr – this represents the expression that we are evaluating. If the expression is "truthful" then the computer will enter the if statement and execute the statement.
3. Statement – what the computer will complete if the expression is "truthful"

```python
x = 0
y = 5

if (x<y):       #truthful
    print('yes')
if (y<x):       #falsy
    print('yes')
if (x == 10):   #falsy
    print('yes')
```

Let’s break down the example above and decide why some statements are "truthful" or "falsy".

We are given two variables `x` and `y` are they are each assigned a value. In the first if statement we are testing if the value of `x` is less than the value of `y`. Since `0` is less than `5`, this is true! So, the first `if`- statement will print yes.

However, we can see that `y` is not less than `x`, so it evaluates to `false`. The inside of the `if` statement will not be executed then. The same applies for the `if` statement evaluating if `x` is equal to `10`. We see that `x` is equal to `0`, so this expression is `false`, and the inside of the `if` statement won’t be executed.

# Else statements

Now that we know how to use if statements to conditionally execute a single statement or multiple statements, let’s see what `else` we can do!

Sometimes, you need to evaluate a condition in order to act accordingly if it is `true`, but if it `false` we act differently. Here is the simplest form of the `else` statement.

```python
if (expr):
    statement1
else: 
    statement2
```    

This is really like the `if` statement! However here, if the `if` statement is `false` (not truthful), the program will automatically execute the `statement2` in the `else` statement.

A real-life example is if I’m hungry, I’ll eat. Else (in other words, I’m not hungry), I won’t eat. Let’s take a look in python code!

```python
if (hungry):
    eat
else:
    dont_eat
```

### Challenge

Let’s put together everything we've learned so far! Let’s see if we can create a program that prompts the user for their name. The user can write their name into the console. Then the computer can decide if their name is equal to your name and print out a response. Else, print out a different response!

<iframe src="https://trinket.io/embed/python/b238d85d0d" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

Hint: Try talking out the different paths a computer can take! Make sure to identify what the if and else conditions are.