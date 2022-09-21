---
title: "Functions"
weight: 5
draft: false
---
<iframe width="100%" height="600px" src="https://www.youtube.com/embed/0207zoiJ6s8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**Functions** are a way to organize pieces of similar or repeating code. Rather than having to constantly type out the same code, we can put the desired code in a function and call it whenever we want to use it.

{{% notice info %}}
**Note:** The purpose of a function is to help reduce redundant code
throughout the program.
{{% /notice %}}

## Creating a function

### Define your function - name & parameters

To make a function in python, we must use the `def`
keyword. This keyword tells the code editor where the function is
defined. `def` is followed by the name of the function. In order to
generalize the function (so that we can use it at multiple places), we might need to send some information to it. This is achieved using
parameters. They are placed in between parentheses `()` and follows
right after the name of the function. If no parameters are needed, they can be ignored. The function declaration ends with a colon. Here's what
a function looks like:

![](../img/annotated-screenshot-function.png)

{{% notice warning %}}
Make sure that the first line of your function always ends
with a colon `:`
{{% /notice %}}

### Write the function body

In Python, indentation defines which code is controlled
by the function. For example, look at the following image:
![](../img/annotated-screenshot-function2.png)

The code that is indented underneath the `sectionA` function is the code that is executed each time function `sectionA` is called.

{{% notice warning %}}
**Warning:** Since identation is very important in Python, make sure
that the body of the function always starts with 2 spaces.
{{% /notice %}}

## Using the function - Function call

To call a function, input the name of the function and its parameters
wherever you want to execute the function. For example, in order to call function `sectionA`, we would do something like this:
![](../img/annotated-screenshot-function3.png)

{{% notice warning %}}
**Be careful:** When making a function in Python, you must define the
function and its contents before it is called. In other words, in the
code, you need to put the function declaration above the function call.
Otherwise, you will receive a NameError like below. See the following
figure for an example:
![](../img/annotated-screenshot-function4-error.png)
{{% /notice %}}

### Challenge 1 - Create your own function!

**Challenge:** Create a function called addNumbers that takes 2 parameters called number1 & number2 and prints the sum on console. Call the function addNumbers with parameters 3 & 5.
What is printed on the console?

<iframe src="https://trinket.io/embed/python/52ce76e1d0" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

### Challenge 2

Let’s try to create some simple math functions. Create a function called add that takes in two parameters, number1 and number2, and return the sum of the two numbers.

{{% notice tip %}}

First copy the structure of the triple function. Change the triple function name, and replace the parameter number with number1 and number2, separated with a comma. Both number1 and number2 should be <font color="blue">int</font>, and don’t forget to add number1 and number2 together!

{{% /notice %}}

To check that your function is working correctly, add the following code after your function definition, which calls the function add() and save its value in a variable. For example:

<pre>
value2 = add(2, 3)
<font color="blue">print</font>("This should print 5: " + str(value2))
</pre>

### Challenge 3

Can you create functions for subtraction, multiplication, and division? 

Test the functions out by calling each function, saving its return value, then printing it out to the console.