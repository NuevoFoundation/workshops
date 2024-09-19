---
title: "If-else statements"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 14
---

## If-else statements

You can use `if` statements to **run** code statement only if certain conditions are met. Here is an example:

```csharp
var myNum = (93 + 41) / 12;
if (myNum == 11)
{
    Console.WriteLine("They are equal!");
}
```

Inside the `()` beside `if`, you should specify a boolean expression. If the expression is `true`, the code inside `{ }` is executed. In this case, since `myNum` is equal to `11`, `They are equal!` is printed.

![alt text height="600px" width="70%"](../media/if-true.png "If-else true case")

If the condition is `false`, nothing happens! For example, since `10` is not greater than `11`, `Print me!` will not show up to the console.

```csharp
var happy = 10;
if (happy > 11)
{
    Console.WriteLine("Print me!");
}
```

![alt text height="600px" width="70%"](../media/if-false.png "If-else false case")

Use `else` to tell the computer what to do if the condition is false. In this example, `now I got printed instead!` will be printed to the console.

```csharp
var happy = 10;
if (happy > 11)
{
    Console.WriteLine("Print me!");
}
else
{
    Console.WriteLine("I got printed instead!");
}
```

![alt text height="600px" width="70%"](../media/if-else.png "If-else")

You can chain many cases together using `else if`. Note that when using `else if`, only the first case will be evaluated. For example, in the following code snippet, `Statement` 1 will be printed. We will skip the check that `sad == 4` and `Statement 2` will not be printed, even though `sad == 4` is `true`.

```csharp
var sad = 4;
if (sad < 9)
{
    Console.WriteLine("Statement 1");
}
else if (sad == 4)
{
    Console.WriteLine("Statement 2");
}
else
{
    Console.WriteLine("Statement 3");
}
```

![alt text height="600px" width="70%"](../media/if-three.png "If-else three statements")

You can also place `if` statements inside other `if` statements for some interesting behavior:

```csharp
var num1 = 10;
var num2 = 20;
if (num1 < num2)
{
    if (num2 < 30)
    {
        Console.WriteLine("Hello!");
    }
    else
    {
        Console.WriteLine("Hola!");
    }
}
```

![alt text height="600px" width="70%"](../media/if-nested.png "If-else nested")

{{% notice tip %}}

## Working Together

Let's write a program that first prints the following line to console:

```
Is coding fun?
```

Afterwards, the console waits for user input.

- If the user enters yes, the computer prints out `Yes, I'm glad you're enjoying it!`.
- If the user enters no, the computer prints out `Oh no, that's too bad!`.
- Otherwise, the computer prints out: `I don't understand you! Goodbye!`.

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/ULv0JH" frameborder="0"></iframe>

{{% /notice %}}

{{% notice info %}}

## Fun Fact: Switch statements

Using multiple `if`, `else` statements could get very long and confusing. You can use `switch` statements instead if you want to compare a single variable against multiple values. For example, the **Working Together** activity can be completed using the following piece of code:

```csharp
    var input = Console.ReadLine();
    switch (input)
    {
        case "yes":
            Console.WriteLine("Yes, I'm glad you're enjoying it!");
            break;
        case "no":
            Console.WriteLine("Oh no, that's too bad!");
            break;
        default:
            Console.WriteLine("I don't understand you! Goodbye!");
            break;
    }
```

Each case represents a possible value that the variable input might take. Make sure you use the `break` statement to tell the computer that you have completed all the actions associated with this case.

{{% /notice %}}
