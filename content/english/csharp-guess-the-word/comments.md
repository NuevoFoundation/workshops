---
title: "Comments"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 2
---

## Comments

Developers often need to collaborate with other developers. Comments are an easy way for developers to write notes in the code and communicate with others. Comments are ignored by the computer; thus, they are also an easy way to tell the computer to not run certain lines of code. There are two ways to create comments:

1. To comment out one line, place `//` in front of a line of code. For example:

```csharp
// This is a single-line comment.
```

2. To comment out multiple lines at once, indicate the start of the comment with `/*` and the end of the comment with `*/`. For example:

```csharp
/* This is a multi-line comment.
   This line is also part of the comment. */
```

To remove a comment (or uncomment a line), simply delete the `//` for a single-line comment, or the `/*` and the `*/` characters for the multi-line comment.

{{% notice tip %}}

## Working Together

1. Place `//` in front of `Console.WriteLine("Hello World");`. After pressing **run**, check to make sure that `Hello World` is not printed to the console.
2. Delete the `//` and instead, surround `Console.WriteLine("Hello World");` with `/*` and `*/`. Check that `Hello World` is still not printed to the console after pressing **run**.
3. Delete both `/*` and `*/`, and press **run**. `Hello World` should now be printed to the console.

<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/NF-CSharp-WritingToConsole?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

Throughout today's activity you will see various multi-line comments and `// TODO` comments. These comments will guide us towards completing the Guess the Word game, so be sure you understand how to comment and uncomment code.

{{% /notice %}}
