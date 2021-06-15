---
title: "Problem 1: Array Basics"
draft: false
weight: 2
---
<link rel="stylesheet" href="../style.css">

## Array Task 1: Return Element

<p>Welcome to your first repl.it problem! You will be writing code to find the element in the given index! For an example: </p>

```java

{
	//if we have this array:
    String[] restaurants = {"McDonalds", "Outback", "Chipotle", "Panda Express", "KFC", "TGIF", "Carls Jr."};

    //if this is called:
	getRestaurant(0, restaurants);

	//would return "McDonalds" since it is at element 0
}

```

{{%notice tip%}}
1. Use what you learned so far, be careful if the user calls for an position outside of the array! 
2. You can press run to do a basic test.
3. Press run on Unit Tests on the left to see if you have implemeneted the problem correctly.
{{%/notice%}}


<iframe frameborder="0" width="100%" height="800px" src="https://replit.com/@nuevofoundation/Problem-1-getRestaurant?lite=true"></iframe>

## Array Task 2: Replacing Elements

<p>There has been an error in the system! We need to update and replace restaurants in the array. Help write a program for a way to replace elements at a certain index in the array. </p>

```java

{
	//if we have this array:
    String[] restaurants = {"McDonalds", "Outback", "Chipotle", "Panda Express", "KFC", "TGIF", "Carls Jr."};

    //if this is called:
	insertRestaurant(0, restaurants, "Food at home")

	//the new array would change "McDonalds" to "Food at home"
	String[] restaurants = {"Food at home", "Outback", "Chipotle", "Panda Express", "KFC", "TGIF", "Carls Jr."};
}

```


{{%notice tip%}}
1. If you don't seem to remember how indexes work, you can go back and review the examples in earlier pages.
3. Keep in mind what each section in `insertRestaurant()` function means.
{{%/notice%}}


<iframe frameborder="0" width="100%" height="800px" src="https://replit.com/@nuevofoundation/Problem-2-insertRestaurant?lite=true"></iframe>