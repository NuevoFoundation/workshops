---
title: "Functions"
description: "Setting up headphones"
weight: 7
draft: false
---
# Functions

**Functions** are a way to organize pieces of similar or repeating code.
Rather than having to constantly type out the same code, we can put the
desired code in a method and call it whenever we want to use it.

::: {.alert .alert-info role="alert"}
**Note:** The purpose of a function is to help reduce redundant code
throughout the program.
:::

## Creating a function - Function declaration & definition

**Declaration:** To make a function in python, we must use the `def`
keyword. This keyword tells the code editor where the function is
defined. `def` is followed by the name of the function. In order to
generalize the function (so that we can use it at multiple places), we
might need to send some information to it. This is achieved using
parameters. They are placed in between parentheses `()` and follows
right after the name of the function. If no parameters are needed, they
can be ignored. The function declaration ends with a colon. Here\'s what
a function looks like:

![](img/annotated-screenshot-function.png)

**Warning:** Make sure that the first line of your function always ends
with a colon `:`

**Definition:** In Python, indentation defines which code is controlled
by the function. For example, look at the following image:
![](img/annotated-screenshot-function2.png)
The code that is indented underneath the `sectionA` function is the code
that is executed each time function `sectionA` is called.

**Warning:** Since identation is very important in Python, make sure
that the body of the function always starts with 2 spaces.

## Using the function - Function call

To call a function, input the name of the function and its parameters
wherever you want to execute the function. For example, in order to call
function `sectionA`, we would do something like this:
![](img/annotated-screenshot-function3.png)

**Be careful:** When making a function in Python, you must define the
function and its contents before it is called. In other words, in the
code, you need to put the function declaration above the function call.
Otherwise, you will receive a NameError like below. See the following
figure for an example:
![](img/annotated-screenshot-function4-error.png)

## Challenge - Create your own function!

**Challenge:** Create a function called addNumbers that takes 2
parameters called number1 & number2 and prints the sum on console. Call
the function addNumbers with parameters 3 & 5.\
What is printed on the console?
{datacamp-exercise="" lang="python"}
`                                     # This will get executed each time the exercise gets initialized                                 `{type="pre-exercise-code"}
`                                     # Create a function called addNumbers                                      # that takes 2 parameters called number1 & number2                                     # and prints the sum on console.                                     # Call the function addNumbers with parameters 3 & 5.                                     # What is printed on the console?                                 `{type="sample-code"}
`                                     # Create a function called addNumbers                                      # that takes 2 parameters called number1 & number2                                     # and prints the sum on console.                                     # Call the function addNumbers with parameters 3 & 5.                                     # What is printed on the console?                                      def addNumbers(number1, number2):                                         print(number1+number2)                                      addNumbers(3,5)                                 `{type="solution"}
`                                     test_function("addNumbers")                                     success_msg("Great job!")                                 `{type="sct"}
::: {type="hint"}
Use (`def`) to create a function. Code inside function should be
\"TAB\"d. Call the function with parameters `3` & `5`.
