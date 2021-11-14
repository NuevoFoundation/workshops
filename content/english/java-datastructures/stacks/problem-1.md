---
title: "Problem 1: Stack Basics"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 3
--- 
<!--<link rel="stylesheet" href="../../style.css">-->

## Task 1: Reversing Using Stack

Oh no! A new intern was hired and messed up the list of restaurants! The inputs of the restaurants are in **reverse** order! Luckily the stack is the perfect data structure for this. Can you create a new stack in the correct order?

{{%notice tip%}}
1. Remember the stack is Last In First Out (LIFO; think of a stack of plates).
2. How does the original stack look like?
{{%/notice%}}

```js javascript
	//example of current stack
    Stack<String> restaurants = new Stack<>();

	restaurants.push("McDonalds");
	restaurants.push("Carls Jr.");
	restaurants.push("Burger King");
	restaurants.push("Chipotle");
```

<iframe height="800px" width="100%" src="https://replit.com/@nuevofoundation/stackReverse?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

## Task 2: Keeping History

Another practical use of the stack is the undo function. Many programs these days include an undo button to keep track of the most recent changes. The stack is the perfect data structure for this! Can you create a function to undo the recent change? For an example:

```js javascript
	//example of current stack
    Stack<String> myOrder = new Stack<>();

	restaurants.push("Drink");
	restaurants.push("Fries");
	restaurants.push("Pizza");
	restaurants.push("Pizza");

	//User ordered an extra pizza! how can you undo the recent change?

	Stack.undo()

	//remove the most recent push
```

<iframe height="800px" width="100%" src="https://replit.com/@nuevofoundation/stackUndo?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

## Task 3: Clearing Stack

Oh no! The intern has unfortunately randomly messed up the code and the stack is filled with useless information! Can you help him clear the stack so the intern can start over?

<iframe height="800px" width="100%" src="https://replit.com/@nuevofoundation/stackClear?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>