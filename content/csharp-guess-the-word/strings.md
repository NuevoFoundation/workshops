---
title: "Strings"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 5
---
# Strings

Anything that is surrounded in quotation marks is called a string. This is how a computer represents words or sentences. For example, `"a"`, `"2"`, `"banana!"`, and `"Hello World"` are strings, but `Hello World` and `2` are not strings, because the quotation marks are missing.

You can combine many strings together using the `+` operator. For example:

- `"Apple" + "Pineapple"` produces the string `"ApplePineapple"`.
- `"Nuevo" + " " + "Foundation"` produces the string `"Nuevo Foundation"`.

![Combining strings with +](../media/strings-intro.png)

{{% notice tip %}}

## Working Together

In the repl.it window below, we started the code with the line `Console.WriteLine("Nuevo" + " " + "Foundation");`.

Note that there are many ways to combine strings together. For example, another way to print Nuevo Foundation would be to write `Console.WriteLine("Nue" + "vo Fou" + "ndation");`.

We will brainstorm at least one more way to print the string `"Nuevo Foundation"` using two `+` symbols in each `Console.WriteLine` statement. Verify that Nuevo Foundation is printed out 3 times. In other words, your console should look like this after you press **run**:

```
Nuevo Foundation
Nuevo Foundation
Nuevo Foundation
```

<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/NF-CSharp-Strings?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

{{% /notice %}}
