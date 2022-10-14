---
title: "Control Structures"
description: "Introduce if-else, for, and while loops in Java."
date: 2021-10-13T00:00:00Z
weight: 5
---

<p style="text-align: center;"><iframe width="50%" height="500px" src="https://www.youtube.com/embed/X8HzOuCel9A" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## Make a Decision: If-Statement

Patrick 🐥 is a very polite duck who likes to greet everyone he meets with "Good Morning," "Good Afternoon," or "Good Night" depending on the current time.

![Sun rising rapidly over a mountain](https://media.giphy.com/media/hpWrLS1RDBd5pwkgjy/giphy.gif)
<p style="text-align: center;">(image by National Geographic: giphy.com/natgeochannel)</p>

As we learned before, we can print these statements as below:

```java
System.out.println("Good Morning");   // say it between 0:00 - 11:59
System.out.println("Good Afternoon"); // say it between 12:00 - 19:59
System.out.println("Good Night");     // say it between 20:00 - 23:59
```

However, we also know Patrick 🐥 should only decide to say one of these statements based on the current time.

In other words, we need to write code that makes a decision on what to print based on the conditions of the situation (conditionally).

In Java, we make a decision by using an **if statement** or an **if...else statement**. Read the notes below:

{{% notice note %}}
### If Statement

```
if(boolean expression){
    Action(s) to Take
}
```

An **if statement** follows the structure shown above. The actions to take (statements) in the block will only be executed if the boolean expression is `true`. Otherwise, the program will skip to the statement after the block if the Boolean expression is `false`.
### If-Else Statement

```
if(boolean expression){
    Action(s) to Take A
}else{
    Action(s) to Take B
}
```

An **if-else statement** follows the structure shown above. If the boolean expression is `true`, the program will execute the `Action(s) to Take A` within the `if` block. Otherwise, the program executes only `Action(s) to Take B` within the `else`-block.

### Example

```java
boolean likeMusic = true;
if(likeMusic == true) {
    System.out.println("I like Music");
} else {
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

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaBasicsIfStatement" target="_blank">Launch Replit</a>

## Repeat It Again: For-Loop, While-Loop

In math class, Patrick's 🐥 teacher ask the class to solve a math challenge, and he might need some help. 

The teacher asks them to find the **sum of 1, 2, 3, ...., 100**. That is what is **1 + 2 + 3 + 4 ... + 99 + 100**?

While we can plug this into a calculator, that is gonna take a while. Thankfully, in Java, you can easily calculate this in 3 lines with the help of a **for loop** or **while loop**.

{{% notice note %}}
**For loops** and **While loops** are control structures in Java that allow you to execute blocks of code multiples times.

### While Loop

```
while(boolean expression){
    Action(s) to Take
}
```

`Action(s) to Take` in the while block will be executed as long as the `boolean expression` is `true`. 

The following is an example that prints out 1 through 10:

```java
int number = 1;
while(number <= 10){
    System.out.println(number);
    number = number + 1;        // number is incremented by 1
}
```

In the while loop above, the program will print out the value of `number` and increment `number`. This step will be performed as long as `number <= 10`, and in this case the loop terminates when `number` is 11.

**Note:** For `while` loops, you must remember to increment the conditional variable, otherwise you will introduce an infinite loop into your program.

### For Loop

```
for(initialization; termination condition; update statement){
    Action(s) to Take
}
```

In a `for` loop, there are three parts the in condition block: `initialization`, `termination condition`, and `update statement`.

1. When executing a for loop, the program will execute the `initialization` part. An example is, `int number = 1`.
2. Next, the program checks for `termination condition`. An example is `number <= 10`.
3. If it is `true`:
    1. execute the `Action(s) to Take` 
    2. execute the `update statement` (an example is `number = number + 1`) 
4. Repeat step 2 and 3.
5. If the `termination condition` is `false`, exit the `for` loop.

The following is an example that prints out 1 through 10:

```java
for(int number = 1; number <= 10; number = number + 1){
    System.out.println(number);
}
```

{{% /notice %}}

After learning about for loop and while loop, let's see how do we help Patrick 🐥 and calculate **1 + 2 + 3 + 4 ... + 99 + 100**  easily?

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

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaBasicsForWhile" target="_blank">Launch Replit</a>
