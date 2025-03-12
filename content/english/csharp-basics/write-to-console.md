---
title: "Write to the Console"
description: "Introduce print methods in C#."
date: 2024-09-16T00:00:00Z
weight: 2
---

## Your first C# program

Our first excercise is to get comfortable with the structure of a simple C# application that writes to the console.

Let’s try to run a C# program that prints `Hello World` to the console.  The line of code `Console.WriteLine ("Hello World");` does this for us.  It tells the computer to write whatever is inbetween the () to the screen.

### Let's write some code!

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/0g4Vu7" frameborder="0"></iframe>

In the above .NET Fiddle frame, add a new line of code below the first line to print "Hello *your name*".  It should look something like this.

<img src="../images/Step1.png" height="300" alt="The starting screen of a fiddle" />

You should see your output on the bottom of the screen. Cool huh?  

Let's try printing other things. Add some additional lines of code to:
1. Print numbers by putting numbers in the parenthesis (i.e. `Console.WriteLine(42);`). No double quotes needed.
2. Put some text together (i.e. `Console.WriteLine("Hi " + "Sally");`)

{{% notice tip %}}
### Did you notice that all the statements you typed printed on different lines?

Sometimes we want to write on the same like. We use a slightly different code `Console.Write` instead of `Console.WriteLine`.

Add two lines of code:
```csharp
Console.Write("I like to eat ");
Console.Write("apples.");
```

And give it a try.
{{% /notice %}}

{{% notice warning %}}
### !! Important !! Sometimes you can't just put characters in between " "

When putting characters in between `" "` in a print statement, sometimes it's easy to confuse the computer on what characters to print.

For example, how do we tell computer to print `"`?

If you type `Console.WriteLine(""");`, you will get an error because the computer can't identify where the text ends!

Instead, certain characters need to be <b>escaped</b> by adding a `\` in front of it.

```csharp
Console.Writeline("\"");`  // this prints out "
```
{{% /notice %}}
