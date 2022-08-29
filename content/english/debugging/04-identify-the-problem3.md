---
title: "Step 1 - Finding the problem (Part 3)"
difficulty: "Intermediate"
weight: 5
draft: false
---

## Debuggers

Debugging code is such a widespread, common problem that people have built entire programs designed to help other programmers debug more efficiently. These are suitably named **debuggers**, and there are plenty of debuggers that work for the C programming language. Let's take a look at `gdb`, a common debugger used with the command line.

<iframe height="600px" width="100%" src="https://replit.com/@nuevofoundation/Debugging-Samples-C?lite=true#quicksort/quicksort.c" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

For our examples, we will make use of the <a href="https://www.youtube.com/watch?v=SLauY6PpjW4" target="_blank">Quicksort</a> algorithm.

**Quicksort** is an algorithm that sorts an array by first selecting an element in the array as a `pivot`.

Next, the elements are organized based on one of the following conditions:
- Elements lower than the pivot.
- Elements greater than the pivot.

When the sorting is done, the same process is recursively called in the upper and lower partitions of the array, taking the pivot as the middle point.

{{% notice note %}}
Our version of quicksort assumes the leftmost element is the "greater" element and the rightmost element is the pivot within the partition.
{{% /notice %}}

|             ![Quicksort using pivot as the rightmost element.](../resources/debugging_process_quicksort.svg)             |
| :----------------------------------------------------------------------------------------------------------------------: |
| Figure 1: Quicksort using the rightmost element as the pivot and assuming the leftmost element is the "greater" element. |

[GDB (GNU Project Debugger)](https://sourceware.org/gdb/) is a powerful debugger that lets you debug programs from the command line, which is useful in cases where you don’t have access to a GUI (Graphical User Interface).

It is important to understand how the program works to do effective debugging. Our 'quicksort' implementation runs a recursive implementation of quicksort and performs the sorting if the element is lesser than the pivot and assuming the first element is the "greater" element. The sorting itself occurs in the `partition` function.

Open the **Shell** tab and compile the program:

```bash
make Quicksort
```

{{% notice note %}}
When the program is compiled, the flags: `-g` and `-Og` are used. The first one tells the compiler to add **debugging information**, meaning that without that flag, gdb would not be able to debug the program. The second tells the compiler to optimize the program in a way that wouldn't affect the program's run structure. Without `-Og`, the compiler could potentially optimize away some of your code, so a debugger would not be nearly as effective.

It is important to keep note of the second flag. For debugging, you should **ALWAYS** make sure the compiler makes minimal optimizations to your code because optimizations could drastically change how the code is run!
{{% /notice %}}

Run `gdb examples/Quicksort`. This will open the GDB command line interface. To debug a program with `gdb` you can use `gdb <name of program>`.

You should see something like this:

| ![Running GDB on 'Quicksort' file.](../resources/w4-01.png) |
| :---------------------------------------------------------: |
|         Figure 2: Running GDB on 'Quicksort' file.          |

Make sure that GDB says that it is `Reading symbols from ./examples/Quicksort...`, otherwise you didn't attach the program to GDB. You can exit GDB by entering the command `quit` (or any of its prefixes: `q` works) as if it were the normal shell command line.

To debug the program, we need to run it from GDB. Enter the command `run` (or `r`). This will execute the program as if you'd run it from the normal command line.

The program first prints the contents of the array to be sorted: an array of unordered numbers. Next, it runs the sort algorithm, and finally, prints out the array sorted array. You can see how the array is shifted during the sort!

However, it seems that the sorting is not happening as intended.

Let's use one of the most important tools debuggers offer: **breakpoints**. A breakpoint tells the debugger to pause the program whenever it reaches that line of code as it is executing. This enables you to take a look at what is happening within the program in real-time. Note that the debugger does not run the line of code the breakpoint is on until after you continue executing the program.

To create a breakpoint in GDB, use the following command syntax:
`break <filename:line>`. For example, to create a breakpoint on line 15 in the **quicksort.c** file, use the following command:
```bash
break quicksort.c:27
```

If you try running the program now using `run`, the program will halt when it reaches the breakpoint on line 20, and show you some information about the program, such as the line of code it is stopping on.

While the program is paused, you can see the values of variables. We can use the `print` command to evaluate an expression and print it.

For instance, `print high` will print the variable `high`. You can get more elaborate than that by using entire expressions - `print hi + 2` will evaluate `hi + 2` and print it. 

You can manually step through your code by calling `next` (or `n`), which will tell the debugger to advance to the next line of code **without jumping into a function call**. The `step` command will move the debugger to the first line of code in a function call.

You can try it out by creating a breakpoint within the `partition` function, and try either using `next` or `step` to see which line of code you'll land on next.

If you want to have your code continue running until the next breakpoint, you can use the `continue` (or `c`) command. Finally, to delete a breakpoint, you can use the `delete` (or `d`) command followed by the breakpoint number, which you see when you set the breakpoint.

Another useful command to know is `bt` or `backtrace`. This shows you the calling stack, or which functions were called to get to the line of code the program is halted on. 

This can help track the execution order. It also works well to find out how a program crashed by seeing the functions that led up to the crash. 

There are plenty of commands GDB offers. We recommend using a cheat sheet that you can find online.

* [Reference 1](https://gist.github.com/rkubik/b96c23bd8ed58333de37f2b8cd052c30)
* [Reference 2](https://cs.brown.edu/courses/cs033/docs/guides/gdb.pdf)

### Placing Breakpoints Effectively

First let's identify where all of the element sorting takes place. Do you know where the sorting is happening?
{{% expand "***Answer***" %}}
The sorting takes place within the `for` loop and at the end of the process when the pivot is changed with the "greater" element.
{{% /expand %}}
<br/>

Place a breakpoint inside the `for` loop and run the program:
```bash
(gdb) break quicksort.c:27
(gdb) run 
```

You need to find the faulty variables that cause your program to not work as expected. Try and see if you can spot the problem!

{{% expand "***Hint: Keep an eye on how the variables in the loop change.***" %}}
Since we placed the breakpoint inside the loop, on each iteration we should see the values `p1` and `p2` change.

Try printing these variables each time the debugger stops your code.

```bash
(gdb) disp p1
(gdb) disp p2
```
{{% /expand %}}
{{% expand "***Answer***" %}}
The `p1` variable is not being increased when a number lesser than the pivot is found. Remember that our version will assume that each time a lesser element is found the pointer for the greater element must be updated

Add `p1++;` after the `swap` statement in line 27.

| ![Fixing our quicksort algorithm.](../resources/debugging_process_fixing_quicksort.svg) |
| :-------------------------------------------------------------------------------------: |
|                        Figure 3: Fixing our quicksort algorithm.                        |

{{% /expand %}}
<br/>

Note that all debuggers should have the same basic concepts: they allow you to step through your code as it runs, in real-time. You should almost always use debuggers over print statements. You won't regret it!

## Another Type of Bug: Memory Errors

A C/C++’s nightmare, memory errors are one of the most frustrating kinds of bugs that exist. Failing to address them can result in undefined behavior (non-replicable bugs!) and memory leaks. Thus, fixing them is a huge priority.

{{% notice note %}}

A memory leak happens when your program allocates memory using malloc or calloc (or other memory allocation calls), and doesn’t free it. The memory is “lost” - there’s no (easy) way to retrieve it until the program terminates.

{{% /notice %}}

Luckily, people have also written programs to help you find memory errors, and one of these programs is `valgrind`. Valgrind is a tool that not only looks for memory errors, but shows you exactly where the errors occur in your code.
Let’s use valgrind to find where memory errors occur. As an example, we have a rudimentary implementation of a vector in C,  which is the C++ standard library’s version of a dynamically sized array.

<iframe height="500px" width="100%" src="https://replit.com/@nuevofoundation/Debugging-Samples-C?lite=true#vector/vector.c" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

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
valgrind --tool=memcheck leak-check=full examples/Vector
```

It should be apparent valgrind caught some errors, perhaps related to the double free (notice the `ERROR SUMMARY` at the bottom has a few errors detected!).

Let's take a look at some of the errors.

![Valgrind error 1](../resources/w4-02.png)

The error shown above is called an invalid read, which is often because you are reading memory that was free'd in another block. Valgrind lets you see where the memory is free'd and alloc'd:

![Valgrind error 2](../resources/w4-03.png)

The block of memory was allocated by the `malloc` function in `createVectorInt`, which was called in the `main` function. The block was `free`'d by the `free` function called in the `pushBack` function.

Finally, in the heap summary, you can see that there were 96 bytes that were 'lost' - in other words, there was a memory leak. This happened because we forgot to call `deleteVectorInt` on the vector at the end of the main function.

![Valgrind error 3](../resources/w4-04.png)

Valgrind provides a plethora of information that you can use to hunt down memory errors in your C and C++ programs. It not only informs you of where errors are happening, but also where memory blocks are allocated and subsequently free'd (or not free'd, in the case of a memory leak). Can you find the bug that causes all the invalid reads in the vector example?

{{% expand "*Click to show answer*"%}}
Notice that when we are reallocating the array, we forgot to update `list->__arr`! This means that we writing to a pointer that was free'd, which explains the invalid reads and writes we see on Valgrind, the double frees (since we call free on that already free'd pointer), and the memory leaks (since we never refer to the newly allocated arrays ever again)! All you need to do is set that pointer to the new updated array, which should fix the error.
{{% /expand %}}
<br/>

In the exercises, you will be required to fix any memory errors that appear.
