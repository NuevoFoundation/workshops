---
title: "Reading from Console"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 12
---

# Reading from Console

Now that we know the basics about variables, we can now accept input from the user. Use the following line to tell the console to wait until the user types something into the console. Then, the computer takes whatever is typed into the console, and stores it into the variable called `input`.

```csharp
var input = Console.ReadLine();
```

Here's an example of how to use `Console.ReadLine` to accept user input:

```csharp
Console.WriteLine("Type in something:");
var input = Console.ReadLine();
Console.WriteLine("You typed in: " + input);
```

When the user presses **run**, the user is greeted with the following program:

![Reading from input before typing in input](../media/reading-input-1.png)

In this case, after the user types in `Hello World!` into the console, the program finishes outputting to the console:

![Reading from input after typing in input](../media/reading-input-2.png)

{{% notice tip %}}

## Working Together

Write a program that first prints the following two lines to console:

```
Welcome!
How can I help you today?
```

Afterwards, the console waits for user input. After the user types in something and presses Enter, the computer prints out:

```
You asked: [input]?
I don't know the answer to that! Goodbye!
```

`[input]` should be replaced with whatever the user had typed into the console.

<!--<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/NF-CSharp-blank?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>-->

{{% /notice %}}
