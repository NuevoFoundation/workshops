---
title: "C:I/O"
description: "Creating a file format using C"
date: 2021-07-221T14:51:26-07:00
prereq: "???"
difficulty: "Intermediate"
download: " "
draft: true
hidden: false 
weight: 1
---

# C Variables
Variables store data, and you can perform certain operations on them to perform calculations. In C, variables need a *type* and a name. Let's take a look at the most basic variable type: `char`.

## The Char

A `char` is a type that stores one byte of data. To declare one, you can use the following syntax:
```c
    char data; //declares "data" as a char variable
```
Here's what the code means:
* **char** is the variable type.
* **data** is the name of the variable. It can include English letters and numbers, but cannot start with a number. It also cannot be a *reserved* keyword. `char` is one such reserved keyword.

`data` is uninitialized, meaning that we didn't set it to a value when we declared it. To initialize it, you can use the `=` sign followed by an initial value. For example:

```c
    char data = 0; //declares "data", then sets its value to 0
```

{{% notice note%}}
    Using an uninitialized variable creates what is called *undefined behavior*. If we use `data` before we initialized it, `data` could have some random value and cause a lot of hidden bugs! C does not automatically set variables to a value, so make sure you initialize your variables or set them to a value you know before you use them!
{{% /notice%}}

You can also declare more than one variable on the same line:
```c
    char a, b, c; //declares 3 variables, all uninitialized
    char x = 0, y = 2, z = 3; //declares 3 variables, initialized to some value
```

Finally, we've been using `char` to store a number. We can also use it to store ASCII characters. The following code will work:
```c
    char letter = 'a';
```
The computer will find the ASCII value of 'a', then store it in `letter`.

## The Int
In this lesson, we'll be using a data type called `int` a lot. `int` is a data type that can hold a number, and in modern computers is 4 bytes in size. We'll discuss `int` in more detail in lesson 3.

## Using Variables

### Modifying
If you need to modify the value of a variable, you can use the `=` sign like in initialization:
```c
    char c = 'X'; //Initializes "c" to the ASCII code for 'X' (88)
    c = 0; //sets "c" to 0
```
{{% notice note%}}
    Setting an uninitialized variable to a value is the same as initializing it.
{{& /notice%}}

You can set variables to other variables too:
```c
    char a = 'A', b = 'B';
    a = b; //sets the value of "a" to "b"
```

### Pointing
Variables are stored in memory, and C provides a way for you to modify the value of a variable through its memory address. Using an address lets you do a lot of things with the variable in question.

{{% notice note%}}
    The memory address of a variable is where it is stored in memory.
{{% /notice%}}

To use memory addresses, you first need a special variable called a *pointer*. Pointers store the memory address of a type of variable. To declare a pointer, you can use the following syntax:
```c
    char *ptr; //declares a char pointer (uninitialized)
    char *ptr_A, *ptr_B; //Declares 2 pointers on the same line.
```

{{% notice note%}}
    If you want to declare multiple pointers on the same line, you MUST have the `*` in front of each variable you declare. Any variable without the `*` will be a normal variable!
{{% /notice%}}

To get the memory address, you can use the address operator, `&`:
```c
    char a = 'a';
    char *a_ptr = &a; //store the memory address of "a" into "a_ptr"
```

### Arrays and Strings
What if we wanted to store a lot of data of the same type? For example, if we wanted to store 50 `char`'s, would we have to declare 50 different variables?

No. C has a solution to that using arrays. An array is a variable that can store a large number of the same type of data. To declare an array, use the following syntax:

```c
    char arr[10]; //declares an array of 10 chars
```

To initialize an array, there are several ways. First, you can use an *initializer list*:

```c
    char init_list[] = {'a', 'b', 0}; //an initializer list
```

For `char` arrays *only*, you can also use the concept of a **string**. A string is a collection of text, and in C is any text surrounded by double quotation marks (`"`). C strings are synonyms for `char` arrays, and the type of a string is a `char` array. For instance:

```c
    char str[] = "Hello!"; //A string
```
You can leave out the size of the string and allow the C compiler to figure it out for you, or you can do add it if you want a large `char` array off the bat:

```c
    char str[100] = "Hello!"; //A char array holding with 100 available spaces, but only 7 are used (see note below)
```

Another feature of C strings are that they are *zero-terminated*, meaning that at the end of each string is a character value of `\0`. This helps determines where a string ends, because a raw C string does not carry any information about its length! In fact, all arrays lack information about how long it is. Therefore, it is always wise to keep track of array lengths.

{{% notice note%}}
    The `\0` in a string takes up one `char` space. Therefore, if you want to have enough space for a string of length 5, you'd need to use a `char` array of length 6.
    (Image of array allocation here)
{{% /notice%}}

### Arrays and Pointers
While it seems that arrays are a new concept, in fact array variables are pointers in disguise! Let's try it out with a string.

```c
    char *str = "Hello!";
```
The pointer `str` will point to the first memory address of the array:

<!--Image of memory look-->

# Functions: Arguments and Return Values
We'll revisit functions again, this time to examine a few features that made functions not very useful.

## Arguments
Recall that a function has two parentheses. You can declare *arguments* in between the parentheses to pass information to the function.

Here's an example:

```c
    void aFunction(int x) 
    {
        x = 5;
    }

    int main() 
    {
        aFunction(5); //valid
        int y = 0;
        aFunction(y); //also valid

        return 0;
    }
```
In `aFunction`, we can pass an integer to it as an argument. You can use these passed in arguments as if they were variables. However, note that any changes you make to the variable will not carry over when the function returns to the caller. So in the function above, `aFunction` will not affect the value of `y`. This is because `x` has its value copied from `y`, and is separate from it. We'll explore how to bypass this using pointers in Exercise 2.

## Scope
For now, variables will always become inaccessible once it leaves the scope it was declared in. A scope is characterized by the curly braces `{}`. The `{` indicates entering a scope, and `}` indicates leaving the scope. Leaving the scope makes all variables that were declared within unable to be used. Take the following example:
```c

    int main()
    {
        int y = 0;
        {
            int z = 6;
        }
        z = 4; //z is now out of scope!
        return 0;
    }
```
`z` is declared within the inner `{}`, so after exiting the scope, it will become inaccessible. Functions have their own scope as indicated with their curly braces. Any variables declared within the function body won't be accessible from the outside. This leaves a problem. What if we want to give information back to the function caller? One way to do this is through return values.

## Return Values
Return values provide a logical way to pass information back to the caller of a function. The return value type is indicated by the data type next to the name of the function. For instance, the `main` function returns a value that is of type `int`.

On a `return` statement, the function stops executing code. Then, the expression next to the `return` keyword is *returned* to the caller. 

Take the following example:

```c
    int multiplyBy2(int x)
    {
        return x * 2;
    }

    int main()
    {
        int x = 5;
        int y = multiplyBy2(x); //y will be 10
        return 0;
    }
```
The code above takes the `int` and multiplies it by 2. It then returns the result to the caller. Notice that `multiplyBy2` is now being used as an expression, and we can set `y` equal to it.