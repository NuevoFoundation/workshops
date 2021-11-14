---
title: "Problem 1: Array Basics"
draft: false
weight: 2
---

## Array Task 1: Printing

<p style="margin-center: auto;padding: 1em 1em 1em 1em; margin-left: auto; margin-right: auto; width: 80em; font-size: 1vw; font-family: sans-serif; color:grey; line-height: 200%">We've created an array of existing restaurants in our system! We need your help to print out everything so we do not include the same restaurants.</p>

{{%notice tip%}}
1. Use a `for` Loop to print out on repl.it below.
2. Use the `length()` method to find the size of the array!
3. Look at example below!
{{%/notice%}}

<p style="margin-center: auto;padding: 1em 1em 1em 1em; margin-left: auto; margin-right: auto; width: 80em; font-size: 1vw; font-family: sans-serif; color:grey; line-height: 200%">If we are given the array below</p>

```js javascript
    String[] restaurants = { "Burger King", "Chipotle", "Panda Express", "McDonalds" };
```
<p style="margin-center: auto;padding: 1em 1em 1em 1em; margin-left: auto; margin-right: auto; width: 80em; font-size: 1vw; font-family: sans-serif; color:grey; line-height: 200%">The answer should print out:</p>

```js javascript
    String answer = "Burger King,Chipotle,Panda Express,McDonalds";
```
<iframe height="800px" width="100%" src="https://replit.com/@nuevofoundation/Arrays1?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

## Array Task 2: Changing Elements

<p style="margin-center: auto;padding: 1em 1em 1em 1em; margin-left: auto; margin-right: auto; width: 80em; font-size: 1vw; font-family: sans-serif; color:grey; line-height: 200%">Oh no! McDonalds is out of food! Change the restaurant list before people start ordering from McDonalds, and be disappointed with no food. Luckily "Pizza Hut" is willing to help out! Replace McDonalds with Pizza Hut in the index.</p>

{{%notice tip%}}
1. Find the index of McDonalds first
2. Remember quotes around `"Pizza Hut"`
3. Look at the example below!
{{%/notice%}}

```js javascript
    String[] restaurants = {"Burger King", "Chipotle", "Panda Express", "McDonalds"};

    //replace "McDonalds" with "Pizza Hut"
    String[] restaurants = {"Burger King", "Chipotle", "Panda Express", "Pizza Hut"};

```

<iframe height="800px" width="100%" src="https://replit.com/@nuevofoundation/Array2?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>