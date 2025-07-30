---
title: "Passo 2 - Corrigindo o problema"
difficulty: "Intermediate"
weight: 7
draft: false
---

Once you’ve figured out what’s causing the bug, you can start thinking about how to fix the bug. Compiler errors are easy enough - most of the time, the compiler gives you plenty of hints on how to fix it, and during times you can’t figure it out by compiler output alone, you can turn to the web. Chances are, someone ran into the same problem as you years ago and asked the question already on a forum such as [StackOverflow](https://stackoverflow.com/). 

When it comes to fixing runtime errors, it comes down to the application you are debugging. You’ll want to think about what your program is doing, what you want it to do, and how to write code to tell it to do what you want it to do.

For instance, a general way to fix a memory bug is to understand that you’ll need to ensure that the program only accesses memory it is allowed to. The obvious place to look is to see where memory accesses happen. Dereferencing pointers and/or using array indexing is usually where these problems occur. As we showed in the last part, a tool like `valgrind` is also valuable in finding memory leaks and where your program can be buggy.

To fix a program that exhibits strange behavior, the first place to look is to see whether your algorithm or strategy seems appropriate. The next place is whether your program actually implements the algorithm correctly. More often than not, a complex algorithm is difficult to get correct. There are many implementations of secure algorithms in cybersecurity, but a lot of them have faulty implementations that make them insecure!

The most important thing is to find the correct questions to ask yourself as you debug. *Rubber duck coding* involves the programmer talking aloud to a rubber duck, and being able to hear yourself explain what you are doing can catch erroneous errors.

Unfortunately, fixing an error is often extremely specific to the program. It is difficult to offer more than general suggestions.

{{% notice note %}}
There are many tools you can use to help figure out a problem - _linters_ are available for most languages and can catch syntax errors like formatting issues, missing brackets, and misspelled keywords.

With the advancement of artificial intelligence (AI), tools like Github Copilot can also help suggest fixes for your errors. But, remember that AI responses can be incorrect, so use your best judgement!

{{% /notice %}}