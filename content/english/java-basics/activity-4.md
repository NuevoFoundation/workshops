---
title: "Control Structures"
description: "Introduce if-else, for, and while loops in Java."
date: 2020-07-13T00:00:00Z
weight: 5
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/X8HzOuCel9A" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### 1. Make a Decision: If-Statement
Patrick 🐥 is a very polite duck who likes to greet everyone he meets with "Good Morning," "Good Afternoon," or "Good Night" depends on the current time.

![animation of duck Patrick](https://media.giphy.com/media/hpWrLS1RDBd5pwkgjy/giphy.gif) 
<p style="text-align: center;">(image by National Geographic: giphy.com/natgeochannel)</p>

As we learned before, we can print these statements as below:
```java
System.out.println("Good Morning");   // say it between 0:00 - 11:59
System.out.println("Good Afternoon"); // say it between 12:00 - 19:59
System.out.println("Good Night");     // say it between 20:00 - 23:59
```

However, we also know Patrick 🐥 should only decide to say one of these statements depends on the time. 

In other words, we need to write code that makes a decision on what to print depend on a situation.

In Java, we make a decision by using <b>if statement</b> or <b>if...else statement</b>. Read the notes below:

{{% notice note %}}
#### If Statement
```
if(boolean expression){
    statement(s)
}
```
An <b>if statement</b> follows the structure shown above. The statement in the block will only be executed if the boolean expression is `true`. Otherwise, the program will skip to the statement after the block.
#### If-Else Statement
```
if(boolean expression){
    statement(s) A
}else{
    statement(s) B
}
```
An <b>if-else statement</b> follows the structure shown above. If the boolean expression is `true`, the program will execute the if-block with `statement(s) A`. Otherwise, the program executes only the else-block with `statement(s) B`.
#### Example
```java
boolean likeMusic = true;
if(likeMusic == true){
    System.out.println("I like Music");
}else{
    System.out.println("I don't like Music");
}
```
The code above will print the statement `I like Music` because the boolean expression, `likeMusic == true`, is true.
{{% /notice %}}

Let's revisit the greating example above, and make decision for Patrick on whether to say "Good Morning," "Good Afternoon," "Good Night". 

Patrick should say "Good Morning" between 0:00 - 11:59, "Good Afternoon" between 12:00 - 19:59, and "Good Night" between 20:00 - 23:59.

1. We have a variable `currentHour` that stores the current hour. 
2. Fill out the correct `boolean expression A` and `boolean expression B` to complete the program. 
3. Test your result by assigning the variable `currentHour` to numbers from 0 to 23:

<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/JavaBasicsIfStatement?lite=true#Main.java" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

### 2. Repeat It Again: For-Loop, While-Loop
In math class, Patrick's 🐥 teacher ask the class to solve a math challenge, and he might need some help. 

The teacher asks them to find the <b>sum of 1, 2, 3, ...., 100</b>. That is what is <b>1 + 2 + 3 + 4 ... + 99 + 100</b>?

While we can plug this in to a calculator, that is gonna take a while. Thankfully, in Java, you can easily calculate this in 3 lines with the help of a <b>for loop</b> or <b>while loop</b>.

{{% notice note %}}
<b>For loop</b> and <b>While loop</b> are control structures in Java that allow you to execute blocks of code multiples times.

#### While Loop
```
while(boolean expression){
    statement(s)
}
```
`statement(s)` in the while block will be executed as long as the `boolean expression` is true. 

The following is an example that prints out 1 through 10:
```java
int number = 1;
while(number <= 10){
    System.out.println(number);
    number = number + 1;        // number is incremented by 1
}
```
In the while loop above, the program will print out the value of `number` and increment `number`. This step will be performed as long as `number <= 10`, and in this case the loop terminates when `number` is 11.
#### For Loop
```
for(initialization; termination condition; update statement){
    statement(s)
}
```
In a for loop, there are three parts the in condition block: `initialization`, `termination condition`, and `update statement`.
1. When executing a for loop, the program will execute the `initialization` part. An example is, `int number = 1`.
2. Next, the program checks for `termination condition`. An example is `number <= 10`.
3. If it is `true`, execute the `statement(s)` and the `update statement` (an example is `number = number + 1`) then repeat step 2.
   If it is `false`, exit the for loop.

The following is an example that prints out 1 through 10:
```java
for(int number = 1; number <= 10; number = number + 1){
    System.out.println(number);
}
```
{{% /notice %}}

After learning about for loop and while loop, let's see how do we help Patrick 🐥 and calculate <b>1 + 2 + 3 + 4 ... + 99 + 100</b> easily?

Let's try to do it in a while loop: 
1. We have a variable called `total` that tracks the total addition sum we get so far.
2. We have a variable called `num` that tracks the next number to be added to `total`.
3. Write out the appropriate `boolean expression` and write out the while loop.

By following those step we will get a while loop like this:
```java
int total = 0;
int num = 1;
while(num <= 100){
    total = total + num;
    num = num + 1;
}
System.out.println("Answer calculated in a while loop: " + total);
```
Test this out below by clicking `Run` and write a for loop version that calculates the same thing! You should get the same answer!

<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/JavaBasicsForWhile?lite=true#Main.java" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
