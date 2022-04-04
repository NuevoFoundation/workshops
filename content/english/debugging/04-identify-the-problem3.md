---
title: "Step 1 - Finding the problem (Part 3)"
difficulty: "Intermediate"
weight: 1
draft: true
---

# Tools to find bugs: Debuggers

Debugging code is such a widespread, common problem that people have built entire programs designed to help other programmers debug more efficiently. These are suitably named “debuggers”, and there are plenty of debuggers that work for C. We’ll look at two debuggers: gdb and the built-in Repl.it debugger.

GDB(GNU Project Debugger) is a powerful debugger that lets you debug a program from the command line, which is useful in cases where you don’t have access to a GUI. To use GDB, open a console in the replit below. First, compile the program we’ll use with GDB by typing `make examples/quicksort` (see the aside on quicksort). Next, run `gdb examples/out/quicksort`. This should open the GDB command line interface. In general, to debug a program with `gdb` you can use `gdb <name of program>`.

{{% notice note %}}
	Quicksort is an algorithm that sorts an array by first selecting an element in the array as a pivot. Next, the elements are organized into two groups: elements with a value less than the pivot, and elements with a value greater than the pivot. Finally, the algorithm is recursively run on the two groups. The implementation we provided contains one or more subtle bugs that you can identify by using GDB.

	TODO: Find a video animation?
{{% /notice %}}

<iframe></iframe>

Following our debugging process, we can use GDB as an aide in identifying where bugs occur. As usual it is important to understand the program. It runs a recursive implementation of quicksort (see the aside for a quick summary). Try running the program by entering `run` into the GDB command line:

TODO: Picture

Does the program work?

(Answer: No. It creates a segmentation fault.)

Immediately, you can see more information is given by gdb than if you had run it. It shows what line of code caused the segmentation fault and some values of variables at the time the crash occurred, and is a great place to start.

From there, you can use one of the most important tools that GDB provides: breakpoints. A breakpoint tells the debugger to pause the program whenever it reaches that line of code as it is executing. This enables you to take a look at what is happening within the program “in real time”.

To create a breakpoint in GDB, use the following command syntax:
“break <filename:line>”. To create a breakpoint on line 12 in the work.c file, use the following command:
`break work.c:12`

If you try running the program now using `run`, the program will halt when it reaches the breakpoint on line 12, and show you some information about the program, such as the line of code it is stopping on. Note that the debugger halts the program before it runs the breakpoint line. 

While the program is paused, you can see the values of variables. The print command evaluates an expression and prints it. For instance, `print hi` will print the variable ‘hi’. You can get more elaborate than that - `print hi + 2` will evaluate `hi + 2` and print it. You can then manually step through your code by calling `next` (or `n`), which will tell the debugger to advance to the next line of code *without jumping into a function call*. A related command is `step`, which will move the debugger to the first line of code in a function call.

Another useful command to know is `bt` or `backtrace`. This shows you the calling stack, or which functions were called in order to get to the line of code the program is halted on. This can be helpful in tracking execution order and finding control flow bugs.


Note that all debuggers should have the same basic concepts: they allow you to step through your code as it runs, in real time. They're so useful that print statements are universally frowned upon.

# Memory Errors

A C/C++’s nightmare, memory errors are one of the most frustrating kinds of bugs that exist. Failing to address them can result in undefined behavior (non-replicable bugs!) and memory leaks. Thus, fixing them is a huge priority.

{{% notice note %}}

A memory leak happens when your program allocates memory using malloc or calloc (or other memory allocation calls), and doesn’t free it. The memory is “lost” - there’s no (easy) way to retrieve it until the program terminates.

{{% /notice %}}

Luckily, people have also written programs to help you find memory errors, and one of these programs is valgrind. Valgrind is a tool that not only looks for memory errors, but shows you exactly where the errors occur in your code.
Let’s use valgrind to find where memory errors occur. As an example, we have a rudimentary implementation of a vector, which is the C++ standard library’s version of a dynamically sized array.

<iframe></iframe>

First make the program using `make out/vector`. To run the program, enter the command: `out/vector`. The test program creates a vector instance, then fills it with 16 random elements. Notice that there is a segmentation fault!
Now instead of using gdb, use valgrind to check how memory is allocated and used. Run the command:

`valgrind --tool=memcheck leak-check=full ./out/vector`

While some of the language is esoteric, it should be apparent that valgrind found a memory leak in the code. You can tell because in the “Leak Summary”, it should say “definitely lost X bytes”, which means that valgrind is certain that 64 bytes of memory have been allocated but cannot be recovered.

Valgrind shows you where the allocation occurred.

(TODO: picture of sample output)

In the picture above, you can see that at some instruction address, malloc was called by the function createArray on line 6, which in turn was called by main. This lets you find memory allocations that will eventually lead to a memory leak.

The solution to this is calling free() after you finish using a piece of memory allocated by malloc() or some other memory allocation function. You can try to add free(array) to the end of the main function to see the valgrind error disappear.

Be careful about using a freed pointer, and make sure you don’t free the same pointer twice! The program can crash in the best case. In the worst case it can linger in the background and become a security vulnerability in the future. You can find this error using valgrind as well. We’ll use a program that implements the linked list as an example.. Run `make out/linked_list` in the console below, and then `valgrind --tool=memcheck --leak-check=full out/linked_list`. You should see something like the following:

(Picture)

In valgrind, it is listed as an invalid read/write, or double free.

In the exercises, you will be required to fix any memory errors that appear.
