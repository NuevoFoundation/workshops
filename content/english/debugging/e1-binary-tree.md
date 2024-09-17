---
title: "Exercise 1 - Binary Tree Implementation"
difficulty: "Intermediate"
weight: 9
draft: false
---

The binary tree is one of the simplest data structures in computer science and the ideas it uses are very useful. It stores sortable data and boasts an optimal runtime of O(log n) for searching, adding, and removing elements. However, this performance depends heavily on the order in which elements are added or removed, which limits its use to academic discussion.

## The Theory

A binary tree consists of many nodes that are linked together. Each node has a parent nodes, or its predecessor, and up to two children nodes. A node that has no children is called a leaf. 

In a **rooted** binary tree, one node is specified as a root, meaning it has no parent. In the diagram below, node A is the parent of nodes B and C. Likewise, B is the parent of D and E. A is the root, and D, E, F and G are leaves.

![Binary Tree Basics](../resources/e1-01.png "Binary Tree graph with labels pointing at the root, leaves, parent, and left and right children.") 

The binary tree is a recursive data structure. Each node can contain 0-2 children, and 1 parent. We can limit ourselves to looking at a specific subtree of the original binary tree without worrying too much about the entire tree as a whole, and that subtree is a valid binary tree on its own.

### Using the Binary Tree

We can use a binary tree to store information about a list's ordering. Each node can store one value, and its children must be ordered as follows:
- The left child must have smaller value than its parent.
- The right child must have a larger value than its parent.
- Duplicate values can be stored on the left or the right; however, it is important to ensure that duplicates are stored in a consistent fashion. So if dupes are stored on the left, they are only stored on the left, and likewise for the right.

The following diagram shows an example binary tree. Notice that the left children are all smaller than its parent, while the right children are larger. Besides this tree ordering property, can see that there is no strict requirement on the shape of the tree.

![Binary Tree Example 1](../resources/e1-02.png "An example binary tree where the left children are all smaller than its parent, while the right children are larger.") 

### Adding to a Binary Tree

To add an element, we need to find where it fits in the tree. To do this, we will perform a **tree traversal**. The idea is to move from node to node until we find a "spot" for the element we want to add. First, we start at the root. We then compare the value at the root with the element to add. If the element is larger, move to the right child. Otherwise, move to the left.

We can repeat this process again, until we find a node that can be the new element's parent. The diagram below illustrates adding 7 to a binary tree.

![Binary Tree Add](../resources/e1-03.png "Diagram illustrating the process of adding 7 to a binary tree.")

1. In step 1 (blue), we compare `10` and `7`. Since `7 < 10`, we proceed down the left child.
2. In step 2 (green), we compare `5` and `7`. `7 > 5`, so we proceed down its right child, only to find that `5` has no right child! Thus, we can insert `7` into that spot.

### Removing from a Binary Tree

To remove an element, it’s a bit more tricky. We first need to find the element that we are removing. However, once we remove it we’ll need to fill in the “hole” that we’ve made in the tree. We can’t just fill in the hole with any plain element; we need to maintain the binary tree ordering property. A convenient element to take is the deepest, leftmost element from the hole’s right subtree.

The diagram below shows how to remove elements in several cases. Dotted lines indicate that the connection may or may not exist. So in case 2 for instance, the blue parent might not exist if the node to remove is the root of the tree.
- In the first case, the node has no children - we can safely remove it with no issues.
- In the second case, the node has 1 child on the left or the right. We can slide the child up to this node's former spot. This works for both the left and right side.
- The the third case, the node has 2 children. There are a few ways to go about this, but the way we'll use is to take the smallest element of the right subtree and insert it into the "hole" that we'll make. If that element has a right child (the green node), we need to slide that node up, so its former parent (orange) becomes that child's parent.

![Binary Tree Removal](../resources/e1-04.png "Diagram illustrating the 3 cases of removing an element from a binary tree.")

The third case is tricky to get correct because of the number of edge cases that exist. For instance, the smallest value of the right subtree could be the right child itself. Or, the min child could contain no right child.

## The Implementation

At the Nuevo team, we've created an implementation for the binary tree. However, the programmer was sloppy and didn't check their work, so there are errors and bugs! For this exercise, you will fix those bugs and errors. **Your goal is to have all tests pass.**

* To debug the code, you can use the command `make debug`. This will regenerate the debug files needed in the `debug/` directory and run `gdb` for you.
* To use `valgrind`, you can run the command `make valgrind`. This will recompile your code and run `valgrind` with the appropriate arguments.
* To test the code, you can click on the green "run" button, or use the command `make test`.

Let's take a look at what the existing code is doing. First, the binary tree data structure is defined in the `binary_tree.h` file. It can be referenced as a type called `BinaryTree`. The data is stored within a type called a `BTNode`, which represents a binary tree node. 

The tree itself contains a *sentinel node*, which makes other tree operations easier to handle. To get the actual root of the tree, we need to reference the left child of the sentinel. Thus, the root's parent is the sentinel node, rather than `NULL`.

![Implementation Data Structures](../resources/e1-05.png "Picture of a BinaryTree structure that points out the sentinel node.")

{{% notice note %}}
Using a sentinel lets us not worry about operations that involve updating the parent. For instance, if we remove a node, we would need to update both the parent pointer's child node and the child node's parent pointer. With a sentinel, we wouldn't worry about the parent pointer being `NULL`. This leads to a point of confusion - the name of the sentinel is `__root` in `BinaryTree`! Seems like the programmer wasn't paying attention when they wrote it...
{{% /notice %}}

Each node is allocated on the heap using `malloc`, so you'll need to make sure that there are no memory leaks! 

Tree operations are defined in `binary_tree.h` too. If you are unsure of what a tree operation does, make sure to read its description there. We'll also include some reference pictures below. 

{{% notice tip %}}
There are multiple correct ways to implement `treeRemove`. Our tests will not discriminate between different (correct) ways of implementing the behavior. As long as the binary tree property is satisfied, it should work. The implementation we have uses a `findMin` operation, which essentially looks for the smallest element in the binary tree. In other words, the bottom leftmost node on the tree.
{{% /notice %}}

Once again, the implementation does not need to handle duplicates within the tree. Addition, it does not need to implement any of the tree `print` functions. 

Good luck!

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Debugging-Exercise-1" target="_blank">Launch Replit</a>

