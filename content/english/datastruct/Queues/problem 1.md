---
title: "Problem 1: Queue Basics"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 3
--- 
<link rel="stylesheet" href="../style.css">

## Task 1: Clearing the Queue

<p>A new restaurant has been added into Nuevo Eats! New orders have been flooding in and the Queue is flooded with orders! The popularity of the different tacos grew fast and the restaurant is overloaded. Look for a way to clear all elements to save the restaurant!</p>


{{%notice tip%}}
1. How can you iterate through the list?
2. Try to clear the Queue as you go through it!
3. What method can help clear a queue?
{{%/notice%}}

```java
	
	   //this uses a list as the organizer of the queue.
        PriorityQueue<String> orders = new PriorityQueue<String>();
     	orders.add("Fish Taco");
     	orders.add("Beef Taco");
     	orders.add("Chicken Taco");
     	orders.add("Fish Taco");
     	orders.add("Beef Taco");

        clear(pQueue);
        //After calling clear, orders should now be empty!

```
<iframe frameborder="0" width="100%" height="800px" src="https://replit.com/@nuevofoundation/Clear?lite=true"></iframe>


## Task 2: Finding the Kth Least Element

<p>Our restaurant wants our customers to find items based on their prices. What if a customer wanted the 4th least expensive item? Well it's up to you to decide how they could find out!</p>

{{%notice tip%}}
1. Think about how a queue is ordered!
2. What happens if multiple items in a row are the same price?
{{%/notice%}}

```java
	
Given an integer k of range 1...k, return the kth least element of the queue @return the kth minimum element
Example: 
        pQueue.add(60);
        pQueue.add(30);
        pQueue.add(50);
        pQueue.add(50);
        pQueue.add(40);
        pQueue.add(40);
        pQueue.add(10);
        pQueue.add(10);
        pQueue.add(10);

        minList(pQueue, 4) should return 50 since 50 is the fourth smallest element

```
<iframe frameborder="0" width="100%" height="800px" src="https://replit.com/@nuevofoundation/Min?lite=true"></iframe>
