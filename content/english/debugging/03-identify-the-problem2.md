---
title: "Step 1 - Finding the problem (Part 2)"
difficulty: "Intermediate"
weight: 4
draft: false
---

## Print Statements

Compiler errors are one thing, but runtime errors and bugs are another. While the compiler can easily tell you where to look, runtime bugs are caused by how your program executes. We need to understand what the program is doing when the bug happens:
- What variables are being used?
- Which instruction is being called? 
- Is there a missing statement we needed?

In smaller applications, we can use print statements in the code to quickly figure out the program’s running state. Print statements are a quick and dirty way to look into a program as it’s running, and with luck, you’ll be able to find what’s causing the bug without much struggle.

## Binary Search

One of the simpler algorithms you will learn or have learned is binary search, which lets you search for an item in a sorted list in logarithmic time. The idea is to check the middle of the sorted list and see if it matches the element we want; if we find the element, the algorithm is finished. If the element is higher, we search the upper half of the list. Otherwise, we search the lower half of the list. We repeat the process until we find the item we are searching for.

|![Searching for number 7 in an ordered list of 10 numbers using Binary Search](../resources/binary_search.svg)|
|:--:|
|Searching for number **7** in an ordered list of **10** numbers using Binary Search|

<iframe height="600px" width="100%" src="https://replit.com/@nuevofoundation/Debugging-Samples-C?lite=true#binary_search/binary_search.c" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

Our program will ask you to search for a name based on the position they are located at. 

Open the **Shell** on the Replit window and compile the program:
``` bash
make BinarySearch
```

Run the program like so:
``` bash
./examples/BinarySearch
```

You should see a list of names and their numbers in a list. Search Emily by typing 6 on the prompt and click `Enter`.

|![Searching for Amy](../resources/debugging_process_searching_for_amy.svg)|
|:--:|
|Searching for Amy.|

Now run the program again and search for the number for `Ramona`. The program breaks with a `Segmentation fault (core dumped)` message! 😮

When faced with such a problem, you should ask yourself, what is the behavior of the bug?
Segmentation fault errors are usually a sign of one of the following problems:
- Accessing an array out of bounds.
- Dereferencing a NULL pointer.
- Memory / Stack overflows.

For more information check [List of Common Reasons for Segmentation Faults in C](https://www.tutorialspoint.com/List-of-Common-Reasons-for-Segmentation-Faults-in-C-Cplusplus#:~:text=List%20of%20Common%20Reasons%20for%20Segmentation%20Faults%20in,7%20Stack%20overflow%208%20Writing%20to%20read-only%20memory).

Let's take a look at the code that implements the binary search our code:

1. The `binary_search()` function takes three arguments: the array of elements, the array length, and the number we are searching for. It then calls the recursive function `rbin_search()`.

2. `rbin_search()` performs the binary search recursively and returns the index of the element if found. Else, it returns `-1`.

A `recursive function` breaks a problem into a bunch of smaller problems by calling itself and makes the problem easier to handle with a set of **base cases**. A recursive function that doesn't terminate usually has problems in one of the following:

1. The base cases are incomplete. 
2. The recursive calls are set in the wrong way.

Let's do some debugging!

## Using Print Statements

Placing `print` statements across your code is a dirty but sometimes effective way to know if your code is working as intended. Go ahead and check if the `rbin_search()` is working correctly by placing print statements across to see the values change.

{{% expand "***Hint 1: What makes the problem we are trying to solve smaller?***" %}} 
- Try placing the print statement after the `middle` variable on the `rbinary_search` function to see how the `lo`, `hi` and `middle` values are changing. Go ahead and search something. 
|![Placing print statement to check values "lo", "hi" and "middle".](../resources/debugging_process_print_statement.svg)|
|:--:|
|Placing print statement to check values `lo`, `hi` and `middle`.|

- Keep an eye on the values as they get printed.
{{% /expand %}}

{{% expand "**Click to show answer**" %}} 
The recursive call for searching on the lower half of the array is searching on the upper half instead. 

To fix it, the `lo` and `hi` arguments of the `rbin_search()` need to be `lo` and `middle-1`.

|![Fixing lower half recursive call.](../resources/debugging_process_fixing_lowerhalf_search.svg)|
|:--:|
|Fixing lower half recursive call.|

|![Looking how the "lo", "hi" and "middle" variables change when searching for Becky.](../resources/debugging_process_searching_for_becky.svg)|
|:--:|
|Looking how the "lo", "hi" and "middle" variables change when searching for Becky.|

Run your program again and search for a number below `5` and see how the `lo`, `hi` and `index` change.
{{% /expand %}}
<br/>

Print statements are not the best tool to use when the program complexity grows. They are extremely inefficient and if a programmer forgets to remove them, someone else (e.g. a user running your program) might see the print statements.  Only use print statements in isolated sections of your code and **ALWAYS** remember to remove them 🙂.
