---
title: "Problem 1: Stack Basics"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 3
--- 

<p style="text-align: center;"><iframe width="60%" height="600px" src="https://www.youtube.com/embed/DAOVFDsdHt4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<link rel="stylesheet" href="../style.css">


## Task 1: Reversing Using Stack

<p>Oh no! A new intern was hired and messed up the list of restaurants! The inputs of the restaurants are in REVERSE order! Luckily the stack is the perfect data structure for this. Can you create a new stack in the correct order?</p>


{{%notice tip%}}
1. Remember the stack is Last in First out (think of a stack of papers)
2. How does the original stack look like?
{{%/notice%}}

```java

	//example of current stack
    Stack<String> restaurants = new Stack<>();
        restaurants.push("McDonalds");
        restaurants.push("Carls Jr.");
        restaurants.push("Burger King");
        restaurants.push("Chipotle");
        Stack<String> reverse = reverse(restaurants);
        reverse.pop() == "McDonalds";

```

<iframe frameborder="0" width="100%" height="800px" src="https://replit.com/@nuevofoundation/stackReverse?lite=true"></iframe>

## Task 2: Keeping History

<p>Another practical use of the stack is the undo. Many programs these days include an undo button to keep track of the most recent changes. The stack is the perfect data structure for this! Can you create a function to undo the recent change? For an example:</p>


```java

	//example of current stack
    Stack<String> myOrder = new Stack<>();

    	restaurants.push("Drink");
    	restaurants.push("Fries");
    	restaurants.push("Pizza");
    	restaurants.push("Pizza");

    	//User ordered an extra pizza! how can you undo the recent change?

        undo(myOrder);

    	//remove the most recent push

```

<iframe frameborder="0" width="100%" height="800px" src="https://replit.com/@nuevofoundation/stackUndo?lite=true"></iframe>