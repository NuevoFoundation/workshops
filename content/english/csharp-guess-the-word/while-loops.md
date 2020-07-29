---
title: "While loops"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 16
---

# While loops

`while` loops are an easy way to repeat the execution of lines without having to reuse a line many times. For example, to print `Hello World` five times in a row, you can do:

```csharp
var counter = 1;
while (counter <= 5)
{
    Console.WriteLine("Hello World");
    counter = counter + 1;
}
```

Like an `if` statement, inside the `()` beside `while`, you should specify a boolean expression. If the expression is `true`, the code inside the curly braces `{ }` is executed. However, after everything inside the curly braces is executed, we go back to the top of the `while` loop and check the boolean expression again. If the boolean expression continues to be `true`, the loop will be repeated.

![While 1](../media/while-1.png)

You can also place `if` statements in `while` loops to do some interesting behavior:

```csharp
var counter = 1;
while (counter <= 10)
{
    if (counter < 5)
    {
        Console.WriteLine("Smaller than 5!");
    }
    else
    {
        Console.WriteLine("Greater than or equal to 5!");
    }
    counter = counter + 1;
}
```

![While 2](../media/while-2.png)

Here is an example of an infinite loop - do you see what's wrong? What can you do so that the following piece of code prints `Spam!` only 100 times?

```csharp
var counter = 100;
while (counter > 0)
{
    Console.WriteLine("Spam!");
}
```

{{% panel theme="primary" header="Instructions"%}}

## Working Together

Take your code from the previous activity. Let's expand the code so that instead of the program finishing after the user inputs once, allow the user to answer the question 10 times before exiting. Be careful about infinite loops!

{{% /panel %}}
