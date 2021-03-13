---
title: "Strings"
date: 2020-07-27T14:17:07.42-07:00
draft: false
hidden: false
weight: 8
---
Anything that is surrounded in quotation marks is called a string. This is how a computer represents words or sentences. For example, `"a"`, `"2"`, `"banana!"`, and `"Hello World"` are strings, but `Hello World` and `2` are not strings, because the quotation marks are missing. You can combine many strings together using the + operator. For example:

- `"Apple" + "Pineapple"` produces the string `"ApplePineapple"`.
- `"Nuevo" + " " + "Foundation"` produces the string `"Nuevo Foundation"`.

{{% notice tip %}}
## Working Together

Delete all your `System.out.println` text in your code. Start your code with the line `System.out.println("Nuevo" + " " + "Foundation");`. Note that there are many ways to combine strings together. For example, another way to print Nuevo Foundation would be to write `System.out.println("Nue" + "vo Fou" + "ndation");`. We will brainstorm at least one more way to print the string `"Nuevo Foundation"` using two `+` symbols in each `System.out.println` statement. Verify that Nuevo Foundation is printed out 3 times. In other words, your console should look like this after you press run:

        Nuevo Foundation
        Nuevo Foundation
        Nuevo Foundation
{{% /notice %}}