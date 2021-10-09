# Variables

## Checkpoint Questions
1. How many bytes is a `char`?
2. What is the type of the string `"Hello"`?

## Exercises
1. The following program, `printNumber.c`, will print out an `int` named `number` to the terminal.

```c
#include <stdio.h>
    
int main() 
{
    int number;
//Do not delete the next few lines.
    printf("%d", number); //prints out the number
}

```
Before compiling and running it, what do you think will be printed out?

Now compile it. What is actually printed out? Why?
* Uninitialized variables are undefined.

How can you guarantee that `printNumber.c` will always print `0`? `215`? `9999`? `3,000,000,000`?
* Set `number` to `0`, `215`, or `9999`. You cannot store `3,000,000,000` in an `int`, so you must replace `int` with `long` or `long long`.

2. You may ask yourself, why do we need pointers? We'll examine one case: modifying values of variables not in the current scope. Consider the following code:
```c
#include <stdio.h>
void reset(int x)
{
    x = 0;
}


int main()
{
    int a = 12413515;
    reset(a);
    printf("%d", a); //What does this print out?
}

```
We want to have `reset` set the variable we pass in to 0. What will the program print out now?
* No. It'll say 12413515.

To make it work as intended, we'll need to use pointers. First, change the type of the argument in `reset` to take in a `int` pointer. This done the same way as a `char` pointer, i.e. `int* x`.

The code will not compile as is, because of we are passing an `int` when we should be passing an `int*`. Pass in the address of `a` instead: `&a`. We'll also need to change `x = 5;` to `*x = 5;` because we need to dereference the pointer.

Once you've made these changes, try compiling the program. What does the program print out now?
* `0`.

The reason this works is because pointers involve the memory addresses rather than the variables themselves. Passing in the memory address modifies the value directly at the memory:
<!--Picture of memory modification-->

If we didn't use a pointer, this is what happens instead:
<!--Picture of memory modification, 2 blocks no pointer-->

Hopefully, this exercise has helped you understand one way we can use pointers! Note that we can use this way to pass values back to the caller as an alternative to return values - just pass in pointers to variables that will store the return values, and the function could fill them with values for you.