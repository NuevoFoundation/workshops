---
title: "Step 1 - Finding the problem (Part 4)"
difficulty: "Intermediate"
weight: 6
draft: false
---

## Another Type of Bug: Memory Errors

A C/C++’s nightmare, memory errors are one of the most frustrating kinds of bugs that exist. Failing to address them can result in undefined behavior (non-replicable bugs!) and memory leaks. Thus, fixing them is a huge priority.

{{% notice note %}}

A memory leak happens when your program allocates memory using malloc or calloc (or other memory allocation calls), and doesn’t free it. The memory is “lost” - there’s no (easy) way to retrieve it until the program terminates.

{{% /notice %}}

Luckily, people have also written programs to help you find memory errors, and one of these programs is `valgrind`. Valgrind is a tool that not only looks for memory errors, but shows you exactly where the errors occur in your code.
Let’s use valgrind to find where memory errors occur. As an example, we have a rudimentary implementation of a vector in C,  which is the C++ standard library’s version of a dynamically sized array.

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Debugging-Samples-C" target="_blank">Launch Replit</a>

First make the program using 

```bash 
make Vector
``` 

Now run it using

```bash
examples/Vector
```

Notice that there's an error called a 'double free'! This is a type of memory caused by calling `free` to a pointer twice.

Now instead of using gdb, use valgrind to check how memory is allocated and used. Run the command:

```bash
valgrind --tool=memcheck --leak-check=full examples/Vector
```

It should be apparent valgrind caught some errors, perhaps related to the double free (notice the `ERROR SUMMARY` at the bottom has a few errors detected!).

Let's take a look at some of the errors.

![Valgrind error 1](../resources/w4-02.png "Screenshot of console error with the text 'Invalid read of size 8 at 0x484522D...'")

The error shown above is called an invalid read, which is often because you are reading memory that was free'd in another block. Valgrind lets you see where the memory is free'd and alloc'd:

![Valgrind error 2](../resources/w4-03.png "Screenshot of console error with the text 'Address 0x4b74040 is 0 bytes inside a block of size 16 free'd...'")

The block of memory was allocated by the `malloc` function in `createVectorInt`, which was called in the `main` function. The block was `free`'d by the `free` function called in the `pushBack` function.

Finally, in the heap summary, you can see that there were 96 bytes that were 'lost' - in other words, there was a memory leak. This happened because we forgot to call `deleteVectorInt` on the vector at the end of the main function.

![Valgrind error 3](../resources/w4-04.png "Screenshot of console error with the text 'HEAP SUMMARY: in use at exit: 96 bytes in 2 blocks... 96 bytes in 2 blocks are definitely lost in loss record...'")

Valgrind provides a plethora of information that you can use to hunt down memory errors in your C and C++ programs. It not only informs you of where errors are happening, but also where memory blocks are allocated and subsequently free'd (or not free'd, in the case of a memory leak). Can you find the bug that causes all the invalid reads in the vector example?

{{% expand "**Click to show answer**"%}}
Notice that when we are reallocating the array, we forgot to update `list->__arr`! This means that we writing to a pointer that was free'd, which explains the invalid reads and writes we see on Valgrind, the double frees (since we call free on that already free'd pointer), and the memory leaks (since we never refer to the newly allocated arrays ever again)! All you need to do is set that pointer to the new updated array, which should fix the error.
{{% /expand %}}
<br/>

In the exercises, you will be required to fix any memory errors that appear.
