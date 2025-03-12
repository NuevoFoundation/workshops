---
title: "Step 1 - Finding the problem (Part 1)"
difficulty: "Intermediate"
weight: 3
draft: false
---

## Compiler Errors

Let’s start and take a look at one of the first daunting problems a novice programmer faces: **reading** and **understanding** errors.

There are two kinds of errors: **compiler** and **runtime** errors. 

A **compiler** error usually indicates a problem with your syntax. Perhaps you wanted to express an idea in the program but didn't adhere to the rules of the programming language. These are caught when you compile your program. Compiler errors are nice because they are relatively easy to fix. Compilers like `gcc` usually give a lot of information about what went wrong when the code is compiled. Let’s explore some of these errors. 

Open the **Shell** tab in the Replit program below and run the following command: 

```bash
make CompilerErrors
```

{{% notice note %}}
For this example, we will not be running the program - this program is meant to showcase some common compiler errors that you may encounter.

{{% /notice %}}

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Debugging-Samples-C" target="_blank">Launch Replit</a>

The first error should look like this (or similar):

![Error 1: Missing Semicolon](../resources/w2-01.png "A screenshot of a compiler error that says 'error: expected ';' after top level declarator'")


You'll notice the error contains:

- the name of the file we tried to compile (**`CompilerErrors.c`**).
- the line where the error was found (**`12`**).
- the position on the line where the error is located (**`19`**).

As you can see, the compiler gives you the line of code and points to where the error actually occurred! It then gives a brief name of the error - in this case, the compiler expected a semicolon (**`;`**) at the end of the line. You can simply add a semicolon to fix this error.

The other error mentions that there is a missing curly brace (**`}`**) when it didn't expect one. The fix for this one is also relatively simple: you can add the corresponding curly brace `{` next to `func()`.

{{% notice warning %}}
A missing curly brace is often the reason for seemingly extraordinary errors. The compiler is not great at picking up where a curly brace should be, so if you're including a header file with a missing curly brace, it'll blow up in your face. In almost all cases, when the compiler outputs a number of errors in code you didn't write, chances are it's a curly brace missing somewhere in your (or perhaps even the library's) code!
{{% /notice %}}

Once you've fixed it, you can compile the code again using the same command.

```bash
make CompilerErrors
```

Wait, there are more errors! As mentioned in the warning box, the compiler isn't great at picking up errors if there's a missing curly brace. A compiler error can "hide" others.

We'll use a table to showcase common compiler errors and their general cause.

| Error | Cause | General Fix |
|---|---|---|
| Missing semicolon | Missing semicolon. | Add the semicolon `;`.|
| Expected function body after function declarator | Missing curly bracket `{`, usually at the beginning of a function body declaration. | Add the curly brace `{` where it belongs. |
| Expected identifier or '('| In the context of a curly brace, usually means you have an extra dangling curly brace `{`. | Remove the curly brace or add a corresponding `}` after it.|
| Redefinition of ... | Somewhere in your code you declared a variable. Later you declared it again. | Rename the variables, or remove one of them. |
| Use of undeclared type... | The compiler can't find the declaration of a type you want to use. | Usually this comes from improper `#include` directives (as types are usually declared in header files). Make sure there are no typos. |
| Must use `struct` (or `enum`) tag | C requires you to use `struct NAME_OF_TYPE` or `enum NAME_OF_ENUM` whenever you want to refer to the struct/enum type. | Usually C developers use a `typedef` statement so they don't have to type `struct` or `enum` to refer to those types. You can add those keywords yourself, though. |
| No member named... | In your `struct`, there's no field of the name you requested. | Probably a typo, or you haven't defined a field in your `struct` yet. |
| Incompatible types... | You're mixing and matching types, which is not allowed in C without explicit casting. | Either check whether an assignment is accurate, or use explicit casting to silence the error during compile time. This could lead to runtime errors though. |
| Argument type is incomplete | If a function returns void, you can't pass it in as an argument to another function! | Fix the function declaration to nonvoid, and be sure that you want such behavior. |
| Extraneous '(' or ')' before ';' | Mismatched parentheses `()` | You have an extra set of parentheses somewhere. Double check to make sure there's a matching pair for each of them! |

If applying a general fix doesn't work, *then* you should turn to the internet for help. For common errors with simple fixes, knowing how to read the error and decipher what it wants fixed can be a lot faster than looking it up.

{{% notice warning %}}
Not all compilers give useful information. For instance, C++ compiler errors can range from simple ones (like in `CompilerErrors.c`), to enormous blocks of text, especially when working with templates. The point of this lesson is NOT to turn you away from internet sources completely, but rather to get you familiar enough with them to give you some more intuition as to how to fix simple errors.
{{% /notice %}}