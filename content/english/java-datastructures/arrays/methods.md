---
title: "Array Methods and Examples"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
---

<p style="text-align: center;"><iframe width="60%" height="600px" src="https://www.youtube.com/embed/NQXV586afr8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<!--<link rel="stylesheet" href="../../style.css">-->

![array](../../img/example.png)

<hr>

## Creating an array

Arrays are used to store multiple values in a single variable, instead of declaring separate variables for each value. To declare an array, define the variable type with square brackets.

```js javascript
String[] restaurants;
```
We have now declared a variable that holds an array of strings. To insert values to it, we can use an array literal - place the values in a comma-separated list, inside curly braces:

```js javascript
String[] restaurants = {"Burger King", "Chipotle", "Panda Express", "Subway"};
```

To create an array of integers, you could write:

```js javascript
int[] myNum = {10, 20, 30, 40};
```
<hr>

## Accessing elements of an array

You access an array element by referring to the index number. This statement accesses the value of the first element in restaurants:

```js javascript
String[] restaurants = {"Burger King", "Chipotle", "Panda Express", "Subway"};
System.out.println(restaurants[0]);

// System will output "Burger King"
```

<hr>

## Changing an array element

To change the value of a specific element, refer to the index number:

```js javascript
String[] restaurants = {"Burger King", "Chipotle", "Panda Express", "Subway"};
System.out.println(restaurants[0]);
// System will output "Burger King"

restaurants[0] = "McDonalds";
System.out.println(restaurants[0]);
// System now outputs "McDonalds"
```

<hr>

## Finding the length of an array

To find out how many elements an array has, use the `length` property:

```js javascript
String[] restaurants = {"Burger King", "Chipotle", "Panda Express", "Subway"};
System.out.println(restaurants.length);
// System will output 4
```
<hr>

## Looping through an array

You can loop through the array elements with the `for` loop, and use the `length` property to specify how many times the loop should run. The following example outputs all elements in the restaurants array:

```js javascript
String[] restaurants = {"Burger King", "Chipotle", "Panda Express", "Subway"};
for (int i = 0; i < restaurants.length; i++) {
    System.out.println(restaurants[i]);
}

// Outputs:
// Burger King
// Chipotle
// Panda Express
// Subway
```