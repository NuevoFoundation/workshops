---
title: "Loops"
draft: false
weight: 2
---

## Loops in Python

If you want to repeat a task multiple times, Python has a way to do that easily using loops.
There are two types of basic loops in python:  `for` loops and `while` loops.

### For loops

For loops iterate over a sequence.  Let's say you wanted to repeat a simple task 5 times. Here is how you would do it.

The following for loop iterates through each of the numbers in the list [1,2,3,4,5], and assigns the value x to it.  Then, it executes the code within the for loop.


<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/Loops-forloop-range?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

What if you wanted to repeat a task 10 times instead? 100 times? 1000 times??

It would be difficult to write a list with 1000 numbers [1,2,3,4,5,6,..........,998,999,1000].  There is a function that can create this list for you.

Here's an example of how to create the list using the `range` function:

The below code creates a list starting at 1 and ending at 10. Try replacing the list [1,2,3,4,5] in the above example with this range function!
```
range(1,11)
```

The list in the for loop doesn't just have to be numbers, it can be anything!  Here is another example of what you can do with it:
<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/python-forloop-fruits?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

### While loops

While loops are similar to for loops, but instead of iterating over a sequence, they repeat for as long as a certain condition is met.
For example, let's create a while loop that repeates 5 times.

<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/python-loops-while?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

As you can see, all of the code below the while loop gets executed as long as the variable count is less than 5.

Be careful! Make sure that the condition becomes False at some point, or the loop will continue infinitely.

#### Break statements

You learned earlier that for loops and while loops keep iterating over a sequence until it reaches the end or until a condition is met.

There is another way to stop running these loops before the end of the list or before a condition is met.

You can do this with the break statement.  This lets you break out of the loop in either a for loop or while loop.  

Here's an example with a while loop:
<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/Python-loops-break?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>


### Challenges
1. Using a `for` loop or `while` loop, try printing the following pattern
```
1 
1 2 
1 2 3 
1 2 3 4 
1 2 3 4 5
```

2. Given a large list such as the one below, write a program that can find a particular number from this list.
For example, ask the user to enter a number in the console, then write to console if it was found.
<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/python-loops-activity?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

How would you change this program if the list is very large?  If you've found a number, do you need to continue searching the rest of the list?