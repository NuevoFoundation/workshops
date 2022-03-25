---
title: "C:I/O"
description: "Creating a file format using C"
date: 2021-07-221T14:51:26-07:00
prereq: "???"
difficulty: "Intermediate"
download: " "
draft: true
hidden: false 
weight: 5
---
# Reading Files
We now need a way to read files. Reading files is really the same as writing to them, but in reverse.

## Opening the file in reading mode
To read a file, we need to open it in reading mode. We use the same file utility function, `fopen`, to do this:
```c
    fopen(fileName, "r");
```

### Checking if the file was opened with `if` statements
If the file could not be opened, `fopen` will return a `NULL` pointer. We can check for this by using an `if` statement.

An `if` statement has the following syntax:
```c
    if(condition) {
         //code
    }
```

First, the computer will check if the condition evaluates to true (a nonzero value). If it is, it proceeds to run the code within the curly braces `{}`. Otherwise, that code is skipped.

There is also another form that we might find more useful, the `if-else` statement. It has the following syntax:
```c
    if(condition) {
        //code if condition is true
    } else {
        //code if condition is false
    }

```
Similar to the other form, the `if` statement checks if the condition is true. If it is, then it runs code within the `if` block.

However, if the condition is false, it runs the code in the `else` block.

In our case, our condition is whether the file pointer we get is NULL or not. We use the operator `==` or `!=` to figure this out.

* `==` checks whether something is equal to something else. If it is, it evaluates to 1. Otherwise, it evaluates to 0.
* `!=` is the opposite of `==`. If something is not equal to something else, it evaluates to 1. Otherwise, it evaluates to 0.

```c
    FILE *ptr = fopen(fileName, "r");
    if(ptr == NULL) {
        //make an error here.
        printf("Could not read %s", fileName);  
    } else {
        //run read code
    }
```

The code above will print out an error message if the file cannot be read, and then skip over the code that would read the contents of the file, if we could.

## `fread`
There are methods that read streams one byte at a time, but we will skip that in favor of jumping straight to the reading version of `fwrite`. This function is called `fread`, and takes in the following arguments:
* a pointer of any type that will store the data
* the size of each item to be read
* the number of items to be read
* the file stream.

To read an `int` from a file pointer named `file`, we would use the following code:

```c
    int *ptr;
    fread(ptr, sizeof(int), 1, file);
```

Looks similar to writing, right? Once again, reading is very similar to writing; the only difference is which direction the data is going.

Exercises:

1. Read a short from a file
2. Read a 3 `int`s from a file
3. Read a `short`, `int`, and 2 `long long`s from a file