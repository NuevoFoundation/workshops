---
title: "Introduction"
date: 2022-08-06T13:24:17-07:00
draft: false
weight: 1
--- 

Trees are made up of two components: **edges** and **nodes**. Let's take a look at each of these components in a bit more detail.

### Edges

You can imagine an edge as the line that connects two nodes. Edges always connect exactly two nodes. Edges can carry some information, but they don't need to.

### Nodes

Nodes are just points on a tree that represent some data. A tree needs at least one node and each node can have as many edges as it wants, as long as there is another different node that it is connected to.

### Why Trees?

Trees are very simple data structures that can store a lot of data while still allowing you to find it quickly. Many algorithms that rely on finding the best match organize their data in a tree before searching to optimize their speed. Some examples of trees being used in the real world include:
* [Spanning Tree Protocol](https://en.wikipedia.org/wiki/Spanning_Tree_Protocol) - A protocol foundational to using the Internet, 
* [Binary Search](https://en.wikipedia.org/wiki/Binary_search_algorithm) - One of the most efficient algorithms to search for data in a sorted set,
* [TreeMaps](https://docs.oracle.com/javase/8/docs/api/java/util/TreeMap.html) - The sibling to the HashMap data structure in Java that uses a tree to organize the data

Some trees have more specific rules about how data is added to them and how the data inside is maintained, which means that there is almost always a tree ready for any scenario.

## Visualizing Trees

Trees will have what is called a root node, which is the node where the rest of the tree connects to, either directly or indirectly. We call this data structure a tree because nodes seem to branch off of the root node. When you see a tree drawn, you will usually see the root node at the top, but that won't always be the case!
