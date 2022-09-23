---
title: "Methods"
description: "Introduce methods in Java."
date: 2021-10-13T00:00:00Z
weight: 6
---

<p style="text-align: center;"><iframe width="50%" height="500px" src="https://www.youtube.com/embed/mO6S9Yq_K4I" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## What is a Method?

So far, we've learned about how to store data in variables, print data and sentences, and make decisions with if-statement, for-loop, and while-loop. 

From the last exercise, we know the following block of code calculates the sum from 1 to 100:

```java
int total = 0;
int num = 1;
while(num <= 100){
    total = total + num;
    num = num + 1;
}
System.out.println("Sum: " + total);
```

But what if we want to calculate the sum from 1 to 77 instead? How do we do it without writing the whole blocks of code again?

We want to create a ✨ magic box ✨ in code that does the calculation for us no matter which 2 numbers we want to create a sum for!
<img src="../images/method.png" height="250" alt="Num 1 and Num 2 with arrow pointing into a circle with the words Magic Box and an arrow pointing out of the circle pointing to Sum of Num 1 to Num 2"/> 

In Java, a **method** is like the magic box that performs a specific task by running a block of code that can use user inputs. 

There are 2 parts in a method: header and body:

{{% notice note %}}
### Method Header

To define a method, we need to first write out its <b>method header</b>. A method header has four main parts:

**Part Name** | **Description** | **Examples or possible options**
----|----|----
**access specifier** | provides the level of access to the method  | `public` tells the computer that anyone can use this method. `private` tells the computer it can only be called within a class. (We'll learn about classes on the next page!) `protected` tells the computer it can be called by objects of the same class.
**return type** | data type that is returned to the calling function | use `void` if the method doesn't return anything.
**method name** | name of the method used to call it | user defined based on what the method does
**list of parameters** | list of inputs that must be provided when the method is used | format of (`type` `input name`, `type` `input name`, ... ).

```
// an example
public void sing (String songName)
   1.    2.   3.        4.
```
**Note:** The variable names for the parameters do not have to match the variable name of the data being passed into the method.

<br />

### Method Body

Next, we put the block of code associated with the method in the **method body**, which is between `{` and `}` after the method header.

To return some data, we put the keyword `return` followed by a variable name or a value to be returned. 

**Note:** Once you `return`, nothing else after that in the method runs.

This is an example of how to define a method that sum of numbers from `numA` through `numB`:

```java
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

<br />

### Method Call

Lastly, to execute a method in your code, we need to make a <b>method call</b>. We write out the method name with appropriate input. 
For example:

```java
sumNum(1, 3); // one line of code that calls method sumNum() with the return value 6
```

Knowing `sumNum(1, 3)` returns an `int` with the sum from 1 to 3, we can do the following to store the value:

```java
int sum1to3 = sumNum(1, 3); 
```
{{% /notice %}}

## Count the Pyramid!🔺

<img src="../images/pyramid.png" height="250" alt="pyramid with layers of colorful beads. Bottom layer is yellow, next blue, next brown, next white, next pink, next light blue, next orange, next coral, next green, last red" /> 
<p style="text-align: center;">(photo credit: aliexpress.com/item/32306945847.html)</p>

The above is an image of square-number pyramid where each level is a perfect square of the number of current level counting from the top. 

That is the top level has `1 * 1` bead, the 2nd level has `2 * 2` beads.

<br />
Let's write a method that takes in the number of total levels and output the total number of beads in the pyramid!

Once you solved the challenge, you will see the following message:

```
Congratulations! Challenge Solved!
```

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaBasicsPyramid" target="_blank">Launch Replit</a>
