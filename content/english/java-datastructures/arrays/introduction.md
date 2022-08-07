---
title: "Introduction"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 1
---

Arrays are a data structure where each of its elements are arranged in a numerical sequence and each item is referenced by its position number. In Java, each of these elements are of one type (`String`, `int`, `double`, etc.) and are zero indexed, which means that the first element in an array starts at `0`, the second element with `1`, and so on.

![image](../img/array.png)

Here are some important vocabulary that you will need to know before we talk more about arrays.

- The number of items in an array is called the **length** of the array.
- The type of the individual items in an array is called the **base type** of the array.
- The position number of an item in an array is called the **index** of that item.

For our purposes, we want to create an array that can hold all of the various restaurants in our app. Let’s say our program will need to process the names of one thousand different restaurants. We’ll need a way to be able to sort through and deal with all the data. Without an array data structure, we would have to solve the issue by creating a thousand different variables for each restaurant and if we wanted to do something as simple as say, print out the names of each restaurant, we would have to put 1000 print statements. To accomplish this feat would be a great challenge. 

On the contrary, arrays have the capability to allow us to do the same actions, but in one single step. The array is simply a single variable, but it contains all 1000 restaurants inside of it. 

![image](../img/array2.png)

The **length** of the array would be 1000, since there are 1000 individual names. The **base type** of the array would be `String` since the items in the array are strings. The first name would be at **index** `0` in the array, the second name at index `1`, and so on, up to the thousandth name at index `999`.


