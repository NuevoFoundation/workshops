---
title: "Step 1 - Finding the problem (Part 2)"
difficulty: "Intermediate"
weight: 4
draft: false
---

## Print Statements

Compiler errors are one thing, but runtime errors and bugs are another. While the compiler can easily tell you where to look, we’ll need to find runtime bugs ourselves. To do so, we’ll need to know what the program is doing when the bug happens: the values of variables, which program instruction is being executed, etc. In smaller applications (like in school assignments), we can use print statements to quickly figure out the program’s running state. Print statements are a quick and dirty way to look into a program as it’s running, and with luck you’ll be able to find what’s causing the bug without much infrastructure.

## Binary Search

Let’s look at an example of how you can use print statements effectively to fix a bug. One of the simpler algorithms you will learn or have learned is binary search, which lets you search for an item in a sorted list in logarithmic time. The idea is to check the middle of the sorted list and see if it matches the element we want; if we find the element, the algorithm is finished. If the element is higher, we search the upper half of the list. Otherwise, we search the lower half of the list. The program below tries to implement this algorithm in C.

<iframe height="500px" width="100%" src="https://replit.com/@nuevofoundation/Debugging-Samples-C#binary_search/binary_search.c" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

First, we’ll need to understand what the program is doing. 
1. The main function first waits for the user to type a number.
2. It then calls the binary search function, `binary_search()`. `binary_search` takes three arguments: The array, the array length, and the element we are searching for.
3. `binary_search` will then call the recursive function, `rbin_search()`, which takes 4 arguments: The array, the index to start searching from, the index to stop searching on, and the element query.
4. `rbin_search()` performs the binary search and returns the element if it is found - in theory.

To compile the program, open the **Shell** tab and use 
```bash
make BinarySearch
``` 
You can run the program with the command 
```bash
examples/BinarySearch
```

The implementation we gave you seems to work. After running the program, try inputting `1`. The program seems to find the answer immediately. However, try inputting `2`. The program stalls!

{{% notice tip %}}
You can use `Ctrl + C` to terminate a running program on the command line. (`⌘ + C` on Mac)
{{% /notice %}}

When faced with such a problem, you should ask yourself, what is the behavior of the bug? In this case, it is an infinite loop occuring somewhere in the code. This should quickly narrow down where you need to search for the bug, because there's only one function where infinite looping *can* occur: the recursive `rbin_search()` function.

A recursive function tries to break a problem into a bunch of smaller problems, which are easier to handle separately as a set of *base cases*. A recursive function that doesn't terminate usually has problems in its handling of base cases and/or how it breaks up the problem into smaller ones. So, when dealing with such a problem, it is important to ask the following questions:
1. What are the base cases we are trying to handle? Could there be a bug in the base cases?

{{% expand "*Click to show answer*" %}} 
The base case for binary search is if we find manage to find the element, we return it. Otherwise, if the search is over (i.e. the size of the region we are searching is `0`), we return `NULL`.
{{% /expand %}}
<br/>

2. What makes the problem we are trying to solve smaller? Is there a bug in how we handle that?
{{% expand "*Click to show answer*" %}}
To make the problem smaller, binary search looks in only the relevant half of the array. We constantly compare the desired element with the middle element.
{{% /expand %}}

<br/>

You can insert print statements to show the state of variables as the program runs. A useful thing to know, for example, is the values of `hi` and `lo` because they indicate whether the problem is shrinking. If `hi` and `lo` don't change and are never equal to each other, we've found the problem! Try inserting a print statemente before the line `if(key < query>)`, and print out the values of `hi` and `lo`. Don't forget to recompile the code!

{{% expand "*Spoiler*"%}}
You should see that the program is infinitely looping, because the values of `hi` and `lo` stop changing and thus never fulfill the exit condition. This is a case where the programmer overlooked how the problem gets smaller: When we recursively call `rbin_search`, because `hi` and `lo` have *inclusive* ranges, the problem doesn't get smaller for certain inputs.

You can try to fix the problem yourself, but you aren't required to for this part of the workshop. As a hint for those who want to try, think about how the middle element (`index`) is used *after* we compare it with the `query`. Do we need to include it as part of the next recursive call?
{{% /expand %}}

<br/>

Print statements are not a good tool to use when the program complexity grows. They are extremely inefficient and if a programmer forgets to remove them, someone else (e.g. a user running your program) might see the print statements. In addition, if you’re using a lot of print statements it will negatively affect performance. In summary, only use print statements for small projects and for 5 minute debugging.

<!-- 
## Assertions

An alternative is assertions. Assertions are conditional statements that a programmer can declare. If the condition evaluates to false, the program will crash. Otherwise, the program will continue as if the assertion statement didn’t exist.

The nice thing about assertions is that they’re silent and can be turned off at the compiler level. They also lead you directly to where the code is faulty. Let’s use assertions to fix up a different implementation of binary search. This time, the algorithm uses an iterative approach rather than a recursive approach. Compile and run the program below using `make todo`

# TODO

<iframe></iframe>


When you run it, the program runs into a segmentation fault, which means that it tried to access some memory that it wasn’t allowed to. (For a more detailed explanation, see the aside).

We need to find where the program is trying to access this illegal memory. We can try to ensure that the program stays within bounds by writing an assertion, i.e. we never look outside the memory bound we expect.

(Work)

Aha! It seems that the assertion has caught something. The program is trying to dereference a `NULL` pointer, which should never happen. The fix is simple - we need to add an `if`-statement to make sure that the pointer is not `NULL`. -->
