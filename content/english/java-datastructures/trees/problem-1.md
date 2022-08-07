---
title: "Problem 1: Tree Basics"
date: 2022-08-06T13:24:17-07:00
draft: false
weight: 3
--- 

## Task 1: Find a Value in a Binary Tree

Now that we know the basics of traversing through a tree, implement binary search based on the process (or algorithm) we talked about in the previous page. Here's a quick refresher:
* If the current value is less than what we want, go to the right node.
* If the current value is more than what we want, go to the left node.
* If the current value is what we want, you're done!

<iframe height="800px" width="100%" src="https://replit.com/@nuevofoundation/BinarySearch?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

Congrats! If you've made it this far, then you have officially programmed binary search!

{{% showanswer "SPOILER: Click here if you need help with the solution!" %}}
```js javascript
public static Node findValue(Node root, int value) {
    // We start at the root of the tree
    Node current = root;

    // We follow the logic we described above 
    while (current.value != value) {
        System.out.println("current value is: " + current.value);
        if (value < current.value) {
            current = current.left;
        }
        if (value > current.value) {
            current = current.right;
        }
    }

    // If we are here, we reached the node with
    // the correct value!
    return current;
}
```
{{% /showanswer %}}
