---
title: "Print Statements and Comments"
description: "Introduce println() methods and comments in Java."
date: 2021-10-13T00:00:00Z
weight: 2
---

<p style="text-align: center;"><iframe width="50%" height="500px" src="https://www.youtube.com/embed/uYoq-4juYBY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## Let the Program Speak!

Let’s try to write a program that says `Hello World` out by typing the line of code `System.out.print("Hello World");` 

The program prints out whatever you typed in the parenthesis of `System.out.print`. And, each line of code ends with `;`.

After, add more statements to print numbers by putting numbers in the parenthesis (i.e. `System.out.print(2020)`) or a symbol by putting one symbol between 2 single quotes `'` (i.e. `System.out.print('@')`).

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaBasicsHelloWorld" target="_blank">Launch Replit</a>

{{% notice tip %}}
### Did you notice that all the statements you typed printed in one line?

Sometimes we want to enter a new line when typing.
To do that, we type a slightly different code `System.out.println();`

(Note: we type `println` instead of `print` to create a new line after)

Go back up and give it a try. Make all the statements print on different lines!
{{% /notice %}}

{{% notice tip %}}
### How to print multiple symbols in one line of code?

We learned that to print symbols we put them around 2 single quotes `'`, but how do we print multiple symbols in one line?

We can simple put them between 2 double quotes `"` (i.e. `System.out.print("@ , - h A #");`)

{{% /notice %}}

{{% notice tip %}}
### !! Important !! Sometimes you can't just put characters in between " "

When putting characters in between `" "` in a print statement, sometimes it's easy to confuse the computer on what characters to print.

For example, how do we tell computer to print `"`?

If you type `System.out.print(""");`, you will get an error! because the computer can't identify where the text ends!

Instead, certain characters need to be <b>escaped</b> by adding a `\` in front of it.

     System.out.print("\"");  // this prints out "

Other characters that needs to be escaped in Java includes: `'`, `"`, `\`.
{{% /notice %}}

## Print an Owl

Let's meet 🐥 Patrick's first friend, the owl Minerva 🦉!

Use what you just learn and recreate this owl below using just 4 lines of code! (Art credit: asciiart.eu/animals/birds-land)

        , ___    / ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ \
     `\/{o,o}  <   Hi, I am Minerva. Patrick's friend!  |
      / /)  )    \ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ /
     /,--"-"- 


<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaBasicsOwl" target="_blank">Launch Replit</a>

{{% notice warning %}}
#### I got an error!

     Main.java:4: error: reached end of file while parsing
If you get an error like this such as, it is posible that you forgot to escape chararcters such as `"` and `\`.

Revisit the third tip above to see how to escape characters in a print statement!
{{% /notice %}}

## Make a Comment

When creating a Java program, we can jot down some notes by adding one line comment using `//` or multi-line comment using `/*` and `*/` (Note: The instructions in the previous activities were written as comments).

Also, adding comments will not affect the program whatsoever. So, you can add any notes with comments throughout your code!

     // sample one line comment
     /* sample
      * multi-line
      * comment */