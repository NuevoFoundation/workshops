---
title: "Problem 1: Queue Basics"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 3
--- 
<link rel="stylesheet" href="../style.css">

## Task 1: Clearing Queue for New Orders

<p>A new restaurant has been added into Nuevo Eats! New orders have been flooding in and the Queue is flooded with orders! The popularity of the different tacos grew fast and the restaurant is overloaded. Look for a way to clear all elements to save the restaurant!</p>


{{%notice tip%}}
1. How can you iterate through the list?
2. Try to clear the Queue as you go through it!
3. Look at the example menu!
{{%/notice%}}

```java
	
	//this uses a list as the organizer of the queue.
     Queue<String> orders = new LinkedList<>();

     	orders.add("Fish Taco");
     	orders.add("Beef Taco");
     	orders.add("Chicken Taco");
     	orders.add("Fish Taco");
     	orders.add("Beef Taco");

```

<iframe frameborder="0" width="100%" height="500px" src="https://replit.com/@nuevofoundation/Min?lite=true"></iframe>

## Task 2: Using Priority Queue to find median price

<p>A restaurant has been using Arrays to hold their list of prices and has a hard time organizing it. They want to switch to a priority queue to make finding the median easier. Turn this array into a priority queue! Then find the median price.</p>

{{%notice tip%}}
1. How do you initialize a priorty queue?
2. How do you find the median?
{{%/notice%}}

```java
	
	String[] prices = {1,5,6,14,7,9,11,2,3}

```

<iframe frameborder="0" width="100%" height="500px" src="https://replit.com/@nuevofoundation/Clear?lite=true"></iframe>