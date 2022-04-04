---
title: "Step 1 - Finding the problem (Part 2)"
difficulty: "Intermediate"
weight: 1
draft: true
---

# Tools to find bugs: Print Statements

Compiler errors are one thing, but runtime errors and bugs are another. While the compiler can easily tell you where to look, we’ll need to find runtime bugs ourselves. To do so, we’ll need to know what the program is doing when the bug happens: the values of variables, which program instruction is being executed, etc. In smaller applications (like in school assignments), we can use print statements to quickly figure out the program’s running state. Print statements are a quick and dirty way to look into a program as it’s running, and with luck you’ll be able to find what’s causing the bug without much infrastructure.

Let’s look at an example. One of the simpler algorithms you will learn or have learned is binary search, which lets you search for an item in a sorted list in logarithmic time. The idea is to check the middle of the sorted list and see if it matches the element we want; if we find the element, the algorithm is finished. If the element is higher, we search the upper half of the list. Otherwise, we search the lower half of the list.

<iframe></iframe>

To compile the program, use `make out/binary_search`. To run the program, use `./out/binary_search`. What happens?

{{% notice spoiler %}}

Try inputting a number that exists in the list. Does the program successfully find it? (Hint: This program should take less than a second to run.)

(Answer: No, in fact the program infinitely loops.)

Let’s try to debug the program. First, we’ll need to understand what the program is doing. 1. The main function first listens for the user to input a number.
2. It then calls a recursive function, bin_search(). bin_search takes three arguments: low, high, and target. The low and high variable control where we are searching.
3. bin_search will (hopefully) eventually return the found element.

However, the program doesn’t seem to terminate, and the size of the list we are searching through is small. It’s certain to be something wrong with the implementation.

To start, identify what variables and conditions are required for the recursive function to stop calling itself.

(Answer. If target is found in the list, the function returns with the index of target. Otherwise, if low and high are the same, then the function returns -1, or failure. Thus, list[mid], low, and high are nice to know).

Now you know what to print. Determine the values of low, high, and list[mid], and explain why the program is getting stuck.

(Answer: The variables low and high values don’t change because of integer division. To fix it, you need to apply proper ceiling/floor functions.)
{{% /notice %}}


Print statements are not a good tool to use when the program complexity grows. They are extremely inefficient and if a programmer forgets to remove them, someone else (a user running your program) might see the print statements. In addition, if you’re using a lot of print statements it will negatively affect performance.

## Assertions

An alternative is assertions. Assertions are conditional statements that a programmer can declare. If the condition evaluates to false, the program will crash. Otherwise, the program will continue as if the assertion statement didn’t exist.

The nice thing about assertions is that they’re silent and can be turned off at the compiler level. They also lead you directly to where the code is faulty. Let’s use assertions to fix up a different implementation of binary search. This time, the algorithm uses an iterative approach rather than a recursive approach. Compile and run the program below using `make todo`

# TODO

<iframe></iframe>

{{% notice spoiler %}}

When you run it, the program runs into a segmentation fault, which means that it tried to access some memory that it wasn’t allowed to. (For a more detailed explanation, see the aside).

We need to find where the program is trying to access this illegal memory. We can try to ensure that the program stays within bounds by writing an assertion, i.e. we never look outside the memory bound we expect.

(Work)

Aha! It seems that the assertion has caught something. The program is trying to dereference a `NULL` pointer, which should never happen. The fix is simple - we need to add an `if`-statement to make sure that the pointer is not `NULL`.

{{% /notice %}}