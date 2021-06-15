---
title: "Example"
draft: false
weight: 2
---
<link rel="stylesheet" href="../../style.css">

![array](../../img/example.png)

<hr>

<br><br>

<center><b><h2 style="font-size:2vw; font-family: sans-serif; font-weight: 600;">Creating an Array</h2></b></center>

<p>Arrays are used to store multiple values in a single variable, instead of declaring separate variables for each value. To declare an array, define the variable type with square brackets.</p>

```java

{
    String[] restaurants;
}

```
<p>We have now declared a variable that holds an array of strings. To insert values to it, we can use an array literal - place the values in a comma-separated list, inside curly braces:</p>

```java

{
    String[] restaurants = {"Burger King", "Chipotle", "Panda Express", "Subway"};
}

```

<p>To create an array of integers, you could write:</p>

```java

{
    int[] myNum = {10, 20, 30, 40};
}

```
<hr>
<br>

<center><b><h2 style="font-size:2vw; font-family: sans-serif; font-weight: 600;">Accessing Elements of an Array</h2></b></center>

You access an array element by referring to the index number. This statement accesses the value of the first element in restaurants:</p>

```java

{
    String[] restaurants = {"Burger King", "Chipotle", "Panda Express", "Subway"};
    System.out.println(restaurants[0]);
    //system will output "Burger King"
}

```

<hr>
<br>

<center><b><h2 style="font-size:2vw; font-family: sans-serif; font-weight: 600;">Change an Array Element</h2></b></center>

<p>To change the value of a specific element, refer to the index number:</p>

```java

{
    String[] restaurants = {"Burger King", "Chipotle", "Panda Express", "Subway"};
    System.out.println(restaurants[0]);
    //system will output "Burger King"
    restaurants[0] = "McDonalds";
    System.out.println(restaurants[0]);
    //System now outputs "McDonalds"
}

```

<hr>
<br>

<center><b><h2 style="font-size:2vw; font-family: sans-serif; font-weight: 600;">Array Length</h2></b></center>

<p>To find out how many elements an array has, use the length property:</p>

```java

{
    String[] restaurants = {"Burger King", "Chipotle", "Panda Express", "Subway"};
    System.out.println(restaurants.length);
    //system will output 4
}

```
<hr>
<br>
<center><b><h2 style="font-size:2vw; font-family: sans-serif; font-weight: 600;">Looping Through an Array</h2></b></center>

<p>You can loop through the array elements with the for loop, and use the length property to specify how many times the loop should run. The following example outputs all elements in the restaurants array:</p>

```java

{
    String[] restaurants = {"Burger King", "Chipotle", "Panda Express", "Subway"};
    for (int i = 0; i < restaurants.length; i++) {
        System.out.println(restaurants[i]);
    }
    //Outputs Burger King
    //Outputs Chipotle
    //Outputs Panda Express
    //Outputs Subway
}

```