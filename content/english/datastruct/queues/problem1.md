---
title: "Problem 1: Queue Basics"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 3
--- 
<link rel="stylesheet" href="../style.css">

<h1>Task 1: Clearing Queue for New Orders</h1>

<p>A new restraunt has been added into Neuvo Eats! New orders have been flooding in and the Queue is flooded with orders! The popularity of the different tacos grew fast and the restraunt is overloaded. Look for a way to clear all elements to save the restraunt!</p>


{{%notice tip%}}
1. How can you iterate through the list?
2. Try to clear the Queue as you go through it!
3. Look at the example menu!
{{%/notice%}}

```js javascript
	
	//this uses a list as the organizer of the queue.
     Queue<String> orders = new LinkedList<>();

     	orders.add("Fish Taco");
     	orders.add("Beef Taco");
     	orders.add("Chicken Taco");
     	orders.add("Fish Taco");
     	orders.add("Beef Taco");

```
<iframe height="800px" width="100%" src="https://replit.com/@nuevofoundation/ClearningQ?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

<h1>Task 2: Using Priority Queue to find meadian price</h1>

<p>A restruant has been using Arrays to hold their list of prices and has a hard time organizing it. They want to switch to a priority queue to make finding the median easier. Turn this array into a priority queue! Then find the median price.</p>

{{%notice tip%}}
1. How do you initialize a priorty queue?
2. How do you find the median?
{{%/notice%}}

```js javascript
	
	String[] prices = {1,5,6,14,7,9,11,2,3}

```
<iframe height="800px" width="100%" src="https://replit.com/@nuevofoundation/PriorityQ?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>