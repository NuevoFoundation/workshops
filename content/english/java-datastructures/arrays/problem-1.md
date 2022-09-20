---
title: "Problem 1: Array basics"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
---
<!--<link rel="stylesheet" href="../../style.css">-->

## Task 1: Printing

We've created an array of existing restaurants in our system! We need your help to print out everything so we do not include the same restaurants.

{{%notice tip%}}
1. Use a `for` Loop to print out on Replit below.
2. Use the `length()` method to find the size of the array!
3. Look at example below!
{{%/notice%}}

If we are given the array below:

```js javascript
String[] restaurants = { "Burger King", "Chipotle", "Panda Express", "McDonalds" };
```

the answer should print out:

```js javascript
String answer = "Burger King,Chipotle,Panda Express,McDonalds";
```

<iframe height="800px" width="100%" src="https://replit.com/@nuevofoundation/Problem-1-getRestaurant?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

## Task 2: Changing Elements

Oh no! McDonalds is out of food! Change the restaurant list before people start ordering from McDonalds, and be disappointed with no food. Luckily "Pizza Hut" is willing to help out! Replace McDonalds with Pizza Hut in the index.

{{%notice tip%}}
1. Find the index of McDonalds first
2. Remember quotes around `"Pizza Hut"`
3. Look at the example below!
{{%/notice%}}

```js javascript
String[] restaurants = {"Burger King", "Chipotle", "Panda Express", "McDonalds"};
//replace "McDonalds" with "Pizza Hut"

```

<iframe height="800px" width="100%" src="https://replit.com/@nuevofoundation/Problem-2-insertRestaurant?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>