---
title: "Variables"
date: 2022-09-19T14:45:38-07:00
draft: false
weight: 4
--- 

In a previous exercise, we learned to print different contents with `print("")`. While it is great to print out a number or a sentence, we haven't given them a meaning. Variables are simply names that we can give to values such as strings, numbers, and booleans. Here’s how to make a variable named s in Python. We say s is a string that has the value `"Hello, World!"`. 

```python
s = "Hello, World!"
x = 88
happy = True
```
Press run. 

![Screenshot of what variables example looks like in replit](../../img/variables.png "image of how variables look in replit") 

Note that variables are not printed out to the console. Instead, the variable simply saves the string, number, or boolean into the computer’s memory. We can use these variables in other statements. For example, the following code would print `"Hello Nuevo Foundation"` to the console:

```python
str1 = "Hello"
str2 = "Nuevo Foundation"
print(str1 + " " + str2)
```

You can also do the following to print strings together while adding spaces in between the words.

```python
str1 = "Hello"
str2 = "Nuevo Foundation"
print(str1, str2)
```
## What the Type!

Before learning how to create variables, we need to learn the concept of **type**. Type describes what is being stored in the box.

Python is a dynamically typed language, meaning, unlike languages like Java, you don't have to specify the type of variable it is before you assign a value to it.  And, if you have an integer in the box and then you remove the integer and place a string in the box, python will allow you to do that. But, you must use the variable based on the type.


{{% notice note %}}
The following are the important data types:

**Type** | **Description** | **Examples**
--------|-----------|----------
`integer` | integer | `20`, `30`, `35`
`string` | a sequence of `char` | `"Hello"`, `"Bonjour"`, `"Hola"`
`boolean` | has a value of either `true` or `false` | `true`, `false`
`float` | fractional numbers | `2.0`, `3.14`, `9.33`

{{% /notice %}}

Let's revisit the three variables we talked about in the first example and identify their data types. `s` is a string, `x` is an int, and `happy` is a boolean.

### Challenge

- Create two new variables: A variable named `comp` that stores the string `"Computer"`.
- A variable named `five` that stores the number `5`.

Next, use the variables and what you learned in the previous activities to `print` out the following to the console. You _must_ use the variables!

    Computer
    5
    ComputerComputer
    10
    ComputerComputerComputer
    15

{{% notice tip %}}

Hint: If you're stuck, consider using the `+` operator. Remember that you can use the variables **comp** and **five** multiple times in the same line!

{{% /notice %}}

<iframe src="https://trinket.io/embed/python/b238d85d0d" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
