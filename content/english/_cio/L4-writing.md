---
title: "C:I/O"
description: "Creating a file format using C"
date: 2021-07-221T14:51:26-07:00
prereq: "???"
difficulty: "Intermediate"
download: " "
draft: true
hidden: false 
weight: 4
---
# Writing These Data Types to a File
How can we write these data types to a file? We know how to write `char`s, but it takes more work to write these multi-byte data types. We will show two ways to handle this.

## Some Bookkeeping
Before we do anything, let's perform some bookkeeping to keep things tidy. Let's first define a function for writing each of the data types:
<!--Begin replit section (SKELETON)-->
```c
    #include <stdio.h>

    /*
     * Write shorts to stream.
     */
    void writeShort(short s, FILE *stream);

    /*
     * Write ints to stream
     */
    void writeInt(int i, FILE *stream);

    /*
     * Write longs to stream
     */
    void writeLong(long l, FILE *stream);

    /*
     * Write long longs to stream
     */
    void writeLLong(long long l, FILE *stream);

    /*
     * Write floats to stream
     */
    void writeFloat(float f, FILE *stream);

    /*
     * Write doubles to stream
     */
    void writeDouble(double d, FILE *stream);

    void writeString(const char *str, FILE *stream);


```
<!--End Replit section (SKELETON)-->
This code will be defined in a header file, `cio.h`. We'll define our functions in a separate file, `cio.c`:

```c
    #include "cio.h"

    /*
     * Write shorts to stream.
     */
    void writeShort(short s, FILE *stream)
    {
        //code here
    }

    /*
     * Write ints to stream
     */
    void writeInt(int i, FILE *stream)
    {

    }

    /*
     * Write longs to stream
     */
    void writeLong(long l, FILE *stream)
    {

    }

    /*
     * Write long longs to stream
     */
    void writeLLong(long long l, FILE *stream)
    {

    }

    /*
     * Write floats to stream
     */
    void writeFloat(float f, FILE *stream)
    {

    }

    /*
     * Write doubles to stream
     */
    void writeDouble(double d, FILE *stream)
    {

    }

    /*
     * Writes strings to stream
     */
    void writeString(const char *str, FILE *stream)
    {

    }
        
```
`cio.c` will *not* contain a `main` function, because it is not a program, but a library to be used by another program. To test our library we will use yet another file, `cio_test.c`, which will contain a `main` function:

```c
    #include "cio.h"

    int main() 
    {
        //test code will be here
        return 0;
    } 

```

We are finally ready to write some code!

### Writing a Short
Let's take a look at how we can write a `short`. A `short` is usually 2 bytes, so let's think about what we can do. Here's a picture of what a `short` looks like:
<!--Image of 2 blocks (bytes) = short-->

One strategy is to write the `short` byte by byte. If we treat the `short` as 2 separate `char`s, we can write them individually as two `char`s.

<!--Replit section-->
```c

    void writeShort(short s, FILE *stream)
    {
        fputc(); //first byte
        fputc(); //second byte
    }

```
<!--Replit section end-->

A few things need to happen before we write the bytes. First, `s` needs to be casted to an `unsigned short`. Next, we need to perform masking and shifting, as well as some more casting.

### Casting
Casting is a feature in C that lets you treat one data type as another. To cast, use the following syntax:
```c
    short s = -1; //(signed) short
    unsigned short us_s = (unsigned short) s; //casting to an unsigned short
```
In the example above, `s` is declared as a `signed short` and initialized to `-1`. We then declare an `unsigned short`, `us_s`, which is initialized to the value of `s`, casted to an `unsigned short`.

Casting a variable or value does not change the data of the variable/value; rather, it changes how the data is interpreted by a computer when it is used in operations.

There are also times when casting is *implicit*, meaning that casting is performed even if you didn't explicitly tell the computer to do so. One of the more common occurences is when you set a `char` to a number:

```c
    char c = 0;
```

Numbers like `0` (with no prefixes or suffixes) are treated as `int`s. In the code above, `0` is implicitly casted to a `char`.

### Masking
Next, we need to mask the `char`, which is a technique that hides bytes that we don't want to be written at the time. Masking uses the `&` operator, which is a *bitwise operator* in this context. `&`'ing a `0` with any data will always yield a `0`, which we can use to filter out the bytes. We can create a window by `&`'ing a `1` with the data we care about.

<!--Image of masking operation,visualized-->

Here, we only want a window of 1 byte. So we'll use a mask that looks like the following:
```c
    int mask = 0xFF; //0xFF is 255 in hexidecimal, which is the maximum a `char` can store.
```

And we'll apply it like so:

```c
    void writeShort(short s, FILE *stream)
    {
        unsigned short data = (unsigned short) s;
        int mask = 0xFF;
        fputc(mask & data, stream); //write the first byte
    }

```
Great! We've written the first byte.
### Shifting
To write the second byte, we need to *shift* the data to the right. A right bit shift uses the `>>` operator. 

Here's an example of shifting 1 byte to the right:
```c
    int x = 10;
    int y = x >> 8; //shifts 8 bits = 1 byte to the right
```
Shifting fills in the data with `0`s if the data is unsigned:

<!--Image of shifting operation, visualized-->

Keep in mind that shifting `signed` values that are negative creates behavior that depends on your compiler, hence why we casted to an `unsigned short`.

We'll apply it to our function like so:
```c

    void writeShort(short s, FILE *stream)
    {
        unsigned short data = (unsigned short) s;
        int mask = 0xFF;
        fputc(mask & data, stream); //write the first byte
        fputc(mask & (data >> 8), stream); //write the second byte
    }

```
The parentheses force the order of operations to shift 1 byte right first, then mask the data. This way we don't lose the data!

And just like that, we've written a short.

## For Loops
For longer data types like `int`s and `long`s, it is cumbersome to write 4 or 8 different calls to `fputc`, each with their own masking and shifting operations. We can do better by utilizing a `for` statement, which lets you run code in a loop with some conditions.

The syntax of a `for` loop is as follows:

`for(<declaration>; <conditions>; <updates>) ...`

* In the declarations, you declare variable(s) that you might want to use in the loop scope. This code is run once before the loop starts.
* Under conditions, you write an expression, similar to one used in a `if` statement. If the condition evaluates to `0` (false), the loop will terminate. This code is run before the start of each loop iteration.
* In updates, you can call code that will be run after the main body of the loop.

We can use this to avoid repetition in our code. Let's go over a high level of what we will do:

<!--High level image overview-->

Let's look over what our declaration, conditions, and updates will be.
* **Declaration**. We want to loop over X number of times, so we will declare an `int`. This `int` will start at 0 and count up to X.
* **Conditions**. We want to check if the counter reached X, so our condition will be of the form `i < X`.
* **Updates**. We want the counter to increment after every iteration. Here we will use the prefix *increment* operator, which is used in front of a variable. The increment operator is `++`.

For the `short`, it might looks something like this:
```c
    for(int i = 0; i < sizeof(short); ++i)
    {
        //....
    }
```

{{% notice note%}}
    The `sizeof` operator takes in a type or variable and returns its memory size in bytes.
{{% /notice note%}}

Inside the loop, we want to shift it byte by byte. For the first byte, we want no shift. For the second byte, we want to shift 8 bits to the right. For the third byte, 16 bits, and so on. This is where the `i` counter comes in handy. If we multiply `i` by 8, we will get exactly the shift amount we want.

```c
    const int mask = 0xFF; //no change, but is outside since it doesnt change. const means it can't change
    for(int i = 0; i < sizeof(short); ++i)
    {
        fputc(mask & (data >> (8 * i)), stream);
    }

```

And our code now works the same, just with a for loop!

## Writing the Other Data Types
In fact, we've already done the hardest part. We can now copy this code and put any data type into the `sizeof()` operator, and it should work the same.
<!--Exercise?-->
```c
    void writeInt(int i, FILE *stream)
    {
        
    }

```

We can even extend our functions to write any number of `int`s, `long`s, etc. We can use a for loop that has `writeInt()` that will write X number of `int`s. We'll leave this for you to do!

<!--Exercise?-->

# Writing Data Using `fwrite`
Hopefully you've learned a bit about the language and how to design some programs. Fortunately/unfortunately, the C `stdio` library has a function that lets you write any data type, and any number of them. This function is called `fwrite`.

`fwrite` takes in the following arguments:
1. A pointer to the first element of your data.
2. The size of each element of the data, in bytes
3. The number of elements to write
4. The file stream.

If we wanted to write a single `int` easily to `stream`, we can use the following code.

```c
    int data = 5;
    fwrite(&data, sizeof(int), 1, stream);
```

And that's it. We can also use it for `long`s:

```c
    long data = 2313;
    fwrite(&data, sizeof(long), 1, stream);
```

If we have an array of `int`s of length 10, we can do that too:
```c
    int *data = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    fwrite(&data, sizeof(int), 10, stream);
```

Overall, `fwrite` is a very versatile function, and will make it easy to write raw binary data to files.

# Writing Strings
Strings are a bit of a special case of data since it is useful to know the string's length when we read the data, which will let us allocate a large enough `char` array for that string. Thus, it is a good idea to prepend each string with its length when we write it.

1. As an exercise, try writing the string "A good day to write a string!" to the file. Do not include the terminating zero.