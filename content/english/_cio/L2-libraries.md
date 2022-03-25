---
title: "C:I/O"
description: "Creating a file format using C"
date: 2021-07-221T14:51:26-07:00
prereq: "???"
difficulty: "Intermediate"
download: " "
draft: true
hidden: false 
weight: 2
---

# C Libraries
It takes a lot of effort to code everything up from scratch. Luckily C provides a set of utility code, the C Standard Library, which you can use so that you don't need to code the nitty gritty details of everything.

## Header Files and `#include`
The C Standard Library is provided in the form of header files. Header files have the extension `.h`, and you can add its code using the C preprocessor statement, `#include`.

{{% notice note%}}
    The C preprocessor looks for preprocessor statements, which all begin with a `#`, such as `#include`. Before your code is compiled, the preprocessor changes the source text depending on what statements it found.
{{% /notice%}}

Using `#include` indicates to the C preprocessor to replace the `#include` line with the entirety of the indicated file, which allows you to work with variables and functions defined in it.

A header file usually does not contain any definitions, but rather only declarations. Definitions are written within a `.c` file, which can be *linked* to any program that included the header file. This `.c` file is usually part of the compiler package that you download, and is specific to your operating system.

## `stdio.h`
The library we will be using the most is `stdio.h`, which has many functions that make it easier for us to work with files. We'll write our first complete program now:
<!--Replit section-->
```c
    #include <stdio.h>

    int main()
    {
        printf("Hello World!");
        return 0;
    }
```
<!--End replit section-->
This is the famous *Hello World* program that every beginner learns at first. Alas, we've put it off until now. If you compile and run it, you should see "Hello World!" printed out! Here's what each part of the code does.
* `#include <stdio.h>` tells the preprocessor to copy the entire contents of `stdio.h` to where it was included. This lets you use the `printf` function contained within it.
* `int main() {...}` is the function definition for a function called `main`. The `main` function is the starting point of a C program.
* `printf(...);` allows you to print "Hello World". Notice that the parentheses have an argument ("Hello World!"), which we previously stated to be information we need to pass to the function. In this case, we are passing what we want to print to the function.
* `return 0` indicates that the function should stop and return `0` to the caller. In the context of the `main` function, however, it means that the program ran successfully and there were no errors (the `0` means success).

## Writing to a file: Opening a File
*Hello World* is a simple program that doesn't accomplish much. `stdio.h` contains other functions that we'll use to work with files.

### `fopen`
Opening a file is pretty complicated and depends on your operating system. Writing code by yourself to do this will take lots of time. Luckily, `stdio.h` was written by talented programmers so that you don't have to! There are a lot of functions we can use to manipulate files, and the first of these is called `fopen`.

`fopen` (file open) opens a file and sets it up in what is called a *file stream*. The function has two arguments:
1. `char*`: A string that is the name of the file to be opened.
2. `char*`: A string that tells the computer which mode to open the file in, such as reading, writing, or both.

{{% notice note%}}
    We can define custom types using structs and alias. We'll explain these concepts later, but for the meanwhile just assume that `FILE` is just another type like `char` - it contains some data, and `*FILE` is the pointer for that type.
{{% /notice%}}

The first argument you pass is the name of the file you'd like to open and is a string (a `char` pointer). The second argument is what kind of operations you'd like to perform on the file. For writing, the string to use is `"w"`.

Let's try it now. Open a file called "HelloWorldTest.txt". If you are doing this locally, make sure there is no existing file called that in the same folder as your compiled program, otherwise its contents may be replaced.
<!--Begin replit section (SKELETON)-->
```c
    #include <stdio.h>

    int main() 
    {
        FILE *file; //declare the file object
        file = ???
        fclose(file); //clean up
    }
```
<!--End replit section (SKELETON)-->
<!--Begin replit section (SOLUTION)-->
```c
    #include <stdio.h>

    int main()
    {
        FILE *file; //declare the file object
        file = fopen("HelloWorldTest.txt", "w");
        fclose(file); //Clean up
    }
```
<!--End replit section (SOLUTION)-->

#### Closing the File
After opening a file stream, we must close it when we are done using it. This avoids some problems that can occur from keeping a file open. To close the file, use the function `fclose`, which takes in a `FILE*` and closes the file associated to it.

### Writing a Char to the File
Now that we know how to open the file stream, we can write to it. We can write a single `char` to the file by using a function in `stdio.h` called `fputc`. `fputc` has the following arguments:
1. an `int`: This is the data that will be written to the stream. Treat it as a `char` for now; we'll discuss `int` in the next lesson.
2. a `FILE*`: This is the file stream that will be written to.

Let's try it. Write a single `char`, `'a'`, to a file called `a.txt`. Don't forget to close the file after!
<!--Begin replit section (SKELETON)-->
```c
    #include <stdio.h>

    int main()
    {
        FILE *file;
        file = ???
        fputc();

    }

```
<!--End replit section (SKELETON)-->
{{% notice note%}}
    To compile this locally, you can run the following:
    ```c
        gcc \<program_name\>.c
    ```
    Replace \<program_name\> with the name of your `.c` file.
{{% /notice%}}
After running the compiled program, you should notice the existence of a new file, `a.txt`. Opening this file in a text editor, you should see a single `a` inside. So great! We now know how to write `char`s to files.

In the next lesson, we'll look at writing more complex data.