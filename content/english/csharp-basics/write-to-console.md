---
title: "Write to the Console"
description: "Introduce print methods in C#."
date: 2021-10-13T00:00:00Z
weight: 2
---

## Your first C# program

Our first excercise is to get comfortable with the structure of a simple C# application that writes to the console.

Let’s try to run a C# program that prints `Hello World` to the console.  The line of code `Console.WriteLine ("Hello World");` does this for us.  It tells the computer to write whatever is inbetween the () to the screen.

Launch the repl and fork it. Give it a try by pressing the **run** button.  The output will appear on the right. 

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/CSharpBasicsHelloWorld" target="_blank">Launch Replit</a>

Note that all your code must be between the two braces:

```c#
public static void Main (string[] args) {
     //your code here
}
```

### Let's write come code!

Add a new line of code below the first line to print "Hello *your name*".  It should look something like this.

<img src="../images/Step1.png" height="300" alt="The starting screen of a repl" />

You should see your output on the right side of the screen. Cool huh?  

Let's try printing other things.  Add some addtional lines of code to:
1. Print numbers by putting numbers in the parenthesis (i.e. `Console.WriteLine(42);`). No double quotes needed.
2. Put some text together (i.e. `Console.WriteLine("Hi " + "Sally");`)

{{% notice tip %}}
### Did you notice that all the statements you typed printed on different lines?

Sometimes we want to write on the same like.  We use a slightly different code `Console.Write` instead of `Console.WriteLine`.

Add two lines of code:
`Console.Write("I like to eat ");`
`Console.Write("apples.");`

And give it a try.
{{% /notice %}}

{{% notice warning %}}
### !! Important !! Sometimes you can't just put characters in between " "

When putting characters in between `" "` in a print statement, sometimes it's easy to confuse the computer on what characters to print.

For example, how do we tell computer to print `"`?

If you type `Console.WriteLine(""");`, you will get an error because the computer can't identify where the text ends!

Instead, certain characters need to be <b>escaped</b> by adding a `\` in front of it.

     `Console.Writeline("\"");`  // this prints out "
{{% /notice %}}
