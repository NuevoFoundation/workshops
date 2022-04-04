---
title: "Exercise 3 - The Burrows-Wheeler Transform"
difficulty: "Intermediate"
weight: 1
draft: true
---
# Burrows-Wheeler Transform

The Burrows-Wheeler transform is an algorithm used in data compression. It takes as an input a string, and outputs an encoded string, which usually has similar characters clustered together. The algorithm is relatively straightforward and easy to understand.

Take the input string and extract all of its rotational transformations. (See picture).
Sort the rotations in lexicographical order.
Take the last column of the sorted transform; this is the output.

(Picture)

An efficient way to implement the BWT is using a data structure called a suffix array. To create a suffix array, we first take all suffixes of an input string, and give it a numbered label:
(Picture)
The $ is a symbol used to denote the end of the string, and is lexicographically ‘less’ than the other letters. We then sort it lexicographically, and the list of labels is the suffix array.

(Picture)

Wait, the suffixes look just like our rotations, and it is sorted the way we want it! We just need to change things up a little. To get the last column, all we need to do is take the letter before the suffix like so.

(Picture)

We've implemented the suffix array and with it the Burrows-Wheeler transform. However, we were tired at the time and missed quite a few bugs, so your job is to fix them for us.

All your work should be in `work.c`. What you need to do:

1. Fix all compiler bugs.
2. Fix any logical errors, so the output is correct.
3. Fix all memory bugs, such that there are no memory leaks.

Use any tools like gdb and valgrind to your advantage. Good luck!

<iframe></iframe>