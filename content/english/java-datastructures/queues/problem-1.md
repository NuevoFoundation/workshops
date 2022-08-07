---
title: "Problem 1: Queue Basics"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 3
--- 
<!--<link rel="stylesheet" href="../../style.css">-->

## Task 1: Clearing Queue for New Orders

A new restaurant has been added into Nuevo Eats! New orders have been flooding in and the Queue is flooded with orders! The popularity of the different tacos grew fast and the restaurant is overloaded. Look for a way to clear all elements to save the restaurant!

{{%notice tip%}}
1. How can you iterate through the Queue?
2. Try to clear the Queue as you go through it!
3. Look at the example menu!
{{%/notice%}}

```js javascript
// This uses a list as the organizer of the queue.
Queue<String> orders = new PriorityQueue<>();

orders.add("Fish Taco");
orders.add("Beef Taco");
orders.add("Chicken Taco");
orders.add("Fish Taco");
orders.add("Beef Taco");
```

<iframe height="800px" width="100%" src="https://replit.com/@nuevofoundation/Clear?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

## Task 2: Using Priority Queue to find minimum price

A restaurant is using a Priority Queue to manager orders. The restaurant wants to be able to look at orders based on their prices to better prepare what meals they are making. Specifically, they would like to be able to find the nth minimum price currently in their list. Write a function that looks at their queue of orders and returns the nth minimum price.

{{%notice tip%}}
1. How will you make sure the list is in order?
2. What makes it easiest to find the minimum price?
3. What if they are looking for the 5th minimum (or lowest) price?
{{%/notice%}}

<iframe height="800px" width="100%" src="https://replit.com/@nuevofoundation/Min?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>