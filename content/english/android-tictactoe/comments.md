---
title: "Comments"
date: 2021-03-13T14:17:07.42-07:00
draft: false
weight: 6
---
Developers often need to collaborate with other developers. Comments are an easy way for developers to write notes in the code and communicate with others. Comments are ignored by the computer; thus, they are also an easy way to tell the computer to not run certain lines of code. There are two ways to create comments:

1. To comment out one line, place `//` in front of a line of code. For example:

```kotlin
// This is a single-line comment.
```

2. To comment out multiple lines at once, indicate the start of the comment with `/*` and the end of the comment with `*/`. For example:

```kotlin
/* This is a multi-line comment.
This line is also part of the comment. */
```

To remove a comment (or uncomment a line), simply delete the `//` for a single-line comment, or the `/*` and the `*/` characters for the multi-line comment.

{{% notice tip %}}
## Working Together

1. Type `//` in front of `Toast.makeText(this, "Welcome to Tic-Tac-Toe”, Toast.LENGTH_LONG).show()`. After pressing the play button (►), check to make sure that `Welcome to Tic-Tac-Toe` does not show up on the screen.
2. Delete the `//` and instead, surround `Toast.makeText(this, "Welcome to Tic-Tac-Toe”, Toast.LENGTH_LONG).show()` with `/*` and `*/`. Check that `Welcome to Tic-Tac-Toe` is still not printed to the console after pressing the play button (►).
3. Delete both `/*` and `*/`, and press the play button (►). Welcome to Tic-Tac-Toe should now be printed to the console.
   Throughout today's puzzles, you will see various multi-line comments and `// PUZZLE` comments (like the one for Puzzle 2). These comments will guide us towards completing the Tic-Tac-Toe game, so be sure you understand how to comment and uncomment code.

{{% /notice %}}