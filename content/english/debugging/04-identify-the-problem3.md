---
title: "Step 1 - Finding the problem (Part 3)"
difficulty: "Intermediate"
weight: 5
draft: false
---

## Debuggers

Debugging code is such a widespread, common problem that people have built entire programs designed to help other programmers debug more efficiently. These are suitably named **debuggers**, and there are plenty of debuggers that work for the C programming language. Let's take a look at `gdb`, a common debugger used on the command line.

[GDB (GNU Project Debugger)](https://sourceware.org/gdb/) is a powerful debugger that lets you debug programs from the command line, which is useful in cases where you don’t have access to a GUI. Open the **Shell** tab in the Replit window below. 

First, let's compile the program:

```bash
make examples/quicksort
```

Next, run `gdb examples/quicksort`. This should open the GDB command line interface. In general, to debug a program with `gdb` you can use `gdb <name of program>`.

{{% notice note %}}
Quicksort is an algorithm that sorts an array by first selecting an element in the array as a `pivot`. Next, the elements are organized into two groups: elements with a value less than the pivot, and elements with a value greater than the pivot. Finally, the algorithm is recursively run on the two groups. 

More information can be found online.
{{% /notice %}}

<iframe height="600px" width="100%" src="https://replit.com/@nuevofoundation/Debugging-Samples-C?lite=true#quicksort/quicksort.c" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

We can use GDB as an aide in identifying where bugs occur. As usual, it is important to understand the program. It runs a recursive implementation of quicksort (see the note for a quick summary). The sorting itself occurs in the `sort` function. The pivot chosen is the far right element for simplicity and performs comparisons in the array starting from `lo` and ending at the pivot index.

![Our Quicksort Algorithm](../resources/w4-05.png)

First, compile the program:

```bash
make Quicksort
```

Now you can "attach" the program to gdb:
```bash
gdb examples/Quicksort
```

{{% notice note %}}
When the program is compiled, we use two flags: `-g` and `-Og`. The first tells the compiler to add **debugging information**, meaning that without that flag, gdb would not be able to debug the program. The second tells the compiler to optimize the program in a way that wouldn't affect the program's run structure. Without `-Og`, the compiler could potentially optimize away some of your code, so a debugger would not be nearly as effective.

It is important to keep note of the second flag. For debugging, you should ALWAYS make sure the compiler makes minimal optimizations to your code because optimizations could drastically change how the code is run!
{{% /notice %}}

You should see something like this:

![GDB Sample Picture](../resources/w4-01.png)

Make sure that GDB says that it is `Reading symbols from examples/Quicksort...`, otherwise you didn't attach the program to GDB. You can exit GDB by entering the command `quit` (or any of its prefixes: `q` works) as if it were the normal shell command line.

To debug the program, we need to run it from GDB. Enter the command `run` (or `r`). This will execute the program as if you'd run it from the normal command line.

The program first prints the contents of the array to be sorted: an array index along with its corresponding value. This value is used to perform the sort. Next, it runs the sort algorithm, and finally, prints out the array sorted along its values. You can see how the array indices are shifted during the sort!

However, it seems that there is an array entry out of place! In theory, we can add a print statement somewhere in the `sort`.

From there, you can use one of the most important tools that GDB provides: **breakpoints**. A breakpoint tells the debugger to pause the program whenever it reaches that line of code as it is executing. This enables you to take a look at what is happening within the program in real time. Note that the debugger does not run the line of code the breakpoint is on until after you continue executing the program.

To create a breakpoint in GDB, use the following command syntax:
`break <filename:line>`. For example, to create a breakpoint on line 15 in the **quicksort.c** file, use the following command:
```
break quicksort.c:15
```

If you try running the program now using `run`, the program will halt when it reaches the breakpoint on line 14, and show you some information about the program, such as the line of code it is stopping on.

While the program is paused, you can see the values of variables. The print command evaluates an expression and prints it. For instance, `print hi` will print the variable `hi`. You can get more elaborate than that by using entire expressions - `print hi + 2` will evaluate `hi + 2` and print it. 

You can manually step through your code by calling `next` (or `n`), which will tell the debugger to advance to the next line of code **without jumping into a function call**. A related command is `step`, which will move the debugger to the first line of code in a function call. You can try it out by creating a breakpoint within the `quicksort` function, and try either using `next` or `step` to see which line of code you'll land on next.

If you want to have your code continue running until the next breakpoint, you can use the `continue` (or `c`) command. Finally, to delete a breakpoint, you can use the `delete` (or `d`) command followed by the breakpoint number, which you see when you set the breakpoint.

Another useful command to know is `bt` or `backtrace`. This shows you the calling stack, or which functions were called to get to the line of code the program is halted on. This can help track the execution order and find control flow bugs. It also works well to find out how a program crashed by seeing the functions that led up to the crash. 

There are plenty of commands GDB offers. We recommend using a cheat sheet that you can find online.

* [Reference 1](https://gist.github.com/rkubik/b96c23bd8ed58333de37f2b8cd052c30)
* [Reference 2](https://cs.brown.edu/courses/cs033/docs/guides/gdb.pdf)

### Planning Where to Place Breakpoints

For this example, where is all the sorting taking place?
{{% expand "*Click to show answer*" %}}
The sorting takes place within the `for` loop. Here, the elements are being moved around. 

Another place the sorting takes place is in the base case - if there are two elements, the function simply swaps the values if they are not sorted. Does the code reflect that?
{{% /expand %}}
<br/>
You should now insert a breakpoint where much of the sorting takes place (with the `break` command). Next, enter the `run` command, and say 'yes' if GDB asks you to restart the program. The program should stop at your breakpoint.

Here's where the frustrating part happens - you need to find the faulty variables that cause your program to not work as expected. What variables are changing within the loop?

{{% expand "*Click to show answer*" %}}
`i`, `pivotIdx`, and `tmp` change (technically `tmp` is declared inside the loop though). 
{{% /expand %}}
<br/>
You can make GDB display these variables every time the debugger pauses by using the `disp` command. Run these two commands:

```bash
disp i
disp pivotIdx
```

Now, whenever the debugger stops, it'll display the values of `i` and `pivotIdx`.

At this stage, it is crucial to understand what the implementation is doing. Refer to the picture above to get an idea of the process, then try to match it with the code. Next, run a few iterations of the loop, watching the indices update. If you need a hint, open the expander below.

{{% expand "*Click to show hint*"%}}
When should `i` be updated - in the loop header, or under certain conditions within the loop body?
{{% /expand %}}
<br/>

Note that all debuggers should have the same basic concepts: they allow you to step through your code as it runs, in real time. You should almost always use debuggers over print statements. You won't regret it!

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
