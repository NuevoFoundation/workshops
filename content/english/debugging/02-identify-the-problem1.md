---
title: "Step 1 - Finding the problem (Part 1)"
difficulty: "Intermediate"
weight: 1
draft: true
---

Let’s start and take a look at one of the first daunting problems a novice programmer faces: reading and understanding errors. For more experienced programmers, this section is more of a review. 

There are two kinds of errors: compiler and runtime errors. A compiler error usually indicates a problem with your syntax. Perhaps you wanted to express an idea in the program but didn't adhere to the rules of the programming language. These are caught when you compile your program.

Compiler errors are nice because they are relatively easy to fix. In C, compilers like `gcc` and will usually give a lot of information about what went wrong during compiling. Let’s take a look at one. Open the 'Shell' in the repl.it frame below and run `make out/HelloWorld`.

<iframe height="500px" width="100%" src="" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>



{{% notice tip %}}


{{% /notice %}}


Common C compiler errors include missing semicolons, unknown/incompatible types, and unbalanced curly braces and parentheses. However, you might also have *linker* errors, and those usually have to do with `#include` directives.



On the other hand, runtime errors indicate something wrong in your logic. By and far the most common runtime error you'll likely see in C is a "segmentation fault", which is a *memory error*. We'll focus on memory errors in a future section.
