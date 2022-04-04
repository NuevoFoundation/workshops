---
title: "Exercise 1 - Binary Tree Implementation"
difficulty: "Intermediate"
weight: 1
draft: true
---
# Binary Tree

The binary tree is one of the simplest data structures in computer science and the ideas it uses are very useful. It stores sortable data and boasts an optimal runtime of O(log n) for searching, adding, and removing elements.

## How it works

A binary tree consists of many nodes that are linked together with edges. Each node holds an element, and is connected to at most three other nodes: its parent and its two children. Its parent always contains an element that is greater than (or equal to) its value. The left child always contains an element that is less than its value, while the right child contains an element that is greater than its value (but less than its parent). The root is a special node that has no parent. Finally, a leaf is a node that has no children.

(Picture of how it works)

{{% notice note %}}
	For elements that have equal value, we can just as easily store it on the right child.
{{% /notice %}}

An important concept to think about is the binary tree’s recursive nature. We can think of each node as its own tree. Its children are in fact subtrees, so we don’t have to think about the structure of the tree as a whole, only the subtree that we are currently interested in.


(picture)

To add an element, we start at the root of the tree. We compare the value of the root to the element, and if the element is greater, we move to the root’s right child. Otherwise, we move to the left. When we finally reach a leaf or an empty spot we can slot the element in, we stop and attach it to the tree there.

(picture)

To remove an element, it’s a bit more tricky. We first need to find the element that we are removing. However, once we remove it we’ll need to fill in the “hole” that we’ve made in the tree.

(Picture)

We can’t just fill in the hole with any plain element; we need to maintain the binary tree ordering property. A convenient element to take is the deepest, leftmost element from the hole’s right subtree.

(picture)
We’ve already implemented most of the code needed to implement the binary tree. However, it has parts that don’t work. There are simple bugs (compiler errors) and logical errors in all the functions, except for the printing functions. The printing functions are there for your own benefit, and are guaranteed to work as expected. As a hint, the in-order print should print a sorted list.

All your work should be in `work.c`. What you need to do:
1. Fix all compiler bugs.
2. Fix any logical errors, so the output is correct.
3. Fix all memory bugs, such that there are no memory leaks.

Use any tools, like gdb, valgrind, etc. to your advantage. Good luck! Note that the test cases are intentionally hidden, so you are encouraged to practice writing your own! In the end, all that matters here is a working implementation.

<iframe> </iframe>