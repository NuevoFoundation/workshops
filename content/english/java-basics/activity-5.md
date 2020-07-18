---
title: "Methods"
description: "Introduce methods in Java."
date: 2020-07-13T00:00:00Z
weight: 6
---

### 1. What is A Method?
So far, we've learned about how to store data in variables, print data and sentences, and make decisions. But, what should we do if we want to reuse a block of code many times in the future?

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

We want to create a ✨ magic box ✨ in code that does the calculation for us no matter what 2 numbers we give to create a sum for!
<img src="../images/method.png" height="250"/> 

In Java, <b>method</b> is like the magic box! A method is block of code that performs a specfic task with a list of user input. 

{{% notice note %}}
#### Method Header
To define a method, we need to first write out its <b>method header</b>. A method header has four main parts:

  (1) <b>access specifier</b>. `public` tells the computer that anyone can use this method, `private` is another option. (More details to come in the next page!)

  (2) <b>return type</b>. `void` means the method doesn't return anything.

  (3) <b>method name</b>. 

  (4) <b>list of parameters</b> or user inputs in the format of `type` `input name`.

```
// an example
public void sing (String songName)
  (1)   (2)  (3)        (4)
```
#### Method Body
Next, we put the block of code associated with the method in the <b>method body</b>, which is between `{` and `}` after the method header.

To return some data, we put the keyword `return` followed by a variable name or a value to be returned. 

This is an example of how to define a method that sum of numbers from numA through numB:
```java
/*
 * Method Name: sumNum
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
#### Method Call
Lastly, to execute a method in your code, we need to make a <b>method call</b>. We write out the method name with appropriate input. For example:
```java
sumNum(1, 3); // one line of code that calls method sumNum() with the return value 6
```
Knowing `sumNum(1, 3)` returns an `int` with the sum from 1 to 3, we can do the following to store the value:
```java
int sum1to3 = sumNum(1, 3); 
```
{{% /notice %}}

### 2. Count the Pyramid!🔺
There is this pyramid where each level is a perfect square of the number of current level counting from the top. 

Let's write a function that takes in the number of total levels and output the total number of beads in the pyramid!

<img src="../images/pyramid.png" height="250"/> 
<p style="text-align: center;">(photo credit: aliexpress.com/item/32306945847.html)</p>

Once you solved the challenge, you will see the following message:
```
Congradulations! Challenge Solved!
```

<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/JavaBasicsPyramid?lite=true#Main.java" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>