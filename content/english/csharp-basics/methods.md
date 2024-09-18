---
title: "Methods"
description: "Introduce methods in C#."
date: 2024-09-16T00:00:00Z
weight: 7
---

## What is a Method?

So far, we've learned about how to store data in variables, print data and sentences, and make decisions with `if`-statements, `for`-loops, and `while`-loops. 

From the last exercise, we know the following block of code calculates the sum from 1 to 100:

```C#
int total = 0;
int num = 1;
while(num <= 100){
    total = total + num;
    num = num + 1;
}
Console.WriteLine("Sum: " + total);
```

But what if we want to calculate the sum from 1 to 77 instead? How do we do it without writing the whole blocks of code again?

We want to create a ✨ magic box ✨ in code that does the calculation for us no matter which 2 numbers we want to create a sum for!
<img src="../images/method.png" height="250" alt="Num 1 and Num 2 with arrow pointing into a circle with the words Magic Box and an arrow pointing out of the circle pointing to Sum of Num 1 to Num 2"/> 

In C#, a **method** is like the magic box that performs a specific task by running a block of code that can use user inputs.

There are 2 parts in a method: signature and body:

{{% notice note %}}
### Method Signature

To define a method, we need to first write out its <b>method signature</b>. A signature header has four main parts:

```
access_specifier return_type method_name(list_of_parameters)
```

**Part Name** | **Description** | **Examples or possible options**
----|----|----
**access specifier** | provides the level of access to the method  | `public` tells the computer that anyone can use this method. `private` tells the computer it can only be called within a class. (We'll learn about classes on the next page!) `protected` tells the computer it can be called by objects of the same class.
**return type** | data type that is returned to the calling function, technically the return type is not a part of the signaure in C#  | `string` or `int`, use `void` if the method doesn't return anything.
**method name** | name of the method, used to call it | a descriptive name you choose based on what the method does.
**list of parameters** | list of inputs that must be provided when the method is used | can have zero or more parameters in the form of (`type` `input name`, `type` `input name`, ... ).  Use () for no parameters.

```
// an example that takes a string as a parameter and retuns another string in response
public string artist (string songName)
```
**Note:** The variable names for the parameters do not have to match the variable name of the data being passed into the method.

### Method Body

Next, we put the block of code associated with the method in the **method body**, which is between `{` and `}` after the method signature.

To return some data, we put the keyword `return` followed by a variable name or a value to be returned. 

**Note:** Once you `return`, nothing else after that in the method runs.

This is an example of how to define a method that sum of numbers from `numA` through `numB`:

```c#
/* Method Name: sumNum
 * Input/Parameter: 2 numbers of type int
 * Funtionality: return the sum from numA through numB
 */
public int sumNum(int numA, int numB){
    int total = 0;
    int num = numA;      // we access the first input with the name numA
    while(num <= numB){  // we access the first input with the name numB
        total = total + num;
        num = num + 1;
    }
    return total; // return statement
}
```

### Method Call

Lastly, to execute a method in your code, we need to make a **method call**. We write out the method name with appropriate input. 
For example:

```C#
sumNum(1, 3); // one line of code that calls method sumNum() with the return value 6
```

Knowing `sumNum(1, 3)` returns an `int` with the sum from 1 to 3, we can do the following to store and then print the value:

To call this method you could do this
```c#
    int sum = 0;
    sum = sumNum(1, 3);
    Console.WrlineLine(sum); // prints 6
```

One of the reasons methods are powerful is we can call them more than once:
```C#
    int sum = 0;
    sum = sumNum(1, 3);
    Console.WrlineLine(sum); // prints 6
    sum = sumNum(1, 4);
    Console.WrlineLine(sum); // prints 10
```

 We could have written the above to just print the return numbers without storing them in a variable:
```c#
    Console.WriteLine(sumNum(1,3)); // prints 6
    Console.WriteLine(sumNum(1,4)); // prints 10
```
{{% /notice %}}

## Count the Pyramid!🔺

Here is an image of square-number pyramid where each level is a perfect square of the number of current level counting from the top. 

<img src="../images/pyramid.png" height="250" alt="pyramid with layers of colorful beads. Bottom layer is yellow, next blue, next brown, next white, next pink, next light blue, next orange, next coral, next green, last red" /> 

The top level has `1 * 1` bead, the 2nd level has `2 * 2` beads, and so on.

Let's write a method that takes in the number of total levels and output the total number of beads in the pyramid!

Once you solved the challenge, you will see the following message:

```
Congratulations! Challenge Solved!
```

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/ireaAA" frameborder="0"></iframe>
