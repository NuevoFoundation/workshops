---
title: "Data Structure"
description: "Introduce basic data structures in Java."
date: 2020-07-16T00:00:00Z
weight: 8
---
In previous exercises, we discussed how to store a piece of data in a variable to access and modify that data in the future. But, what if we want to store a bunch of similiar data? Is there a good way to organize them?

In programming, we often can store multiple pieces of data of the same type in a <b>data structure</b>. Data structure is an efficient way to store and access large pieces of data. In this exercise, we will learn about 2 data structures: <b>array</b> and <b>ArrayList</b> in Java.

### 1. Array
Let's say we want to store Patrick's 🐥 top 5 favorite movies. Instead of creating 5 variables, we can store all 5 pieces of data in an array, our first data structure!

To declare and store data in an array, we do the following:

1. We first declare an array of a specific data type and the size.
```java
String topMovies[] = new String[5]; // create an array of Strings of size 5.
```
2. We iterate through the array (go through all the data spots) and assign the data in each spot. 

Note that we access the array by its name and an index (use 0 to access the first element, 1 for the second).
```java
topMovies[0] = "Birds Of Prey";
topMovies[1] = "The Birds";
topMovies[2] = "Angry Birds";
topMovies[3] = "Bird Box";
topMovies[4] = "The Secret Life of Pets";
```

{{% notice tip %}}
#### Alternating Way to declare and initialize an array:
If we know all pieces of data for an array, we can create and initialize the array in one line by listing them between `{` and `}`. For example:
```java
String topMovies[] = {"Birds Of Prey", "The Birds", "Angry Birds", "Bird Box", "The Secret Life of Pets"};
```
With this initialization, we can access each data with its index as well. For example:
```java
String movie1 = topMovies[0]; // movie1 has value "Birds Of Prey"
```
{{% /notice %}}

It is often useful to know how many elements is in an array after declaring it and we can get the number of elements in the array by putting `.length` after the array name. For example
```java
int numOfMovie = topMovies.length; // numOfMovie has value 5
```
<br />
#### Exercise: Write a method `printArr()` that takes an array as input and prints out all the elements in that array in order 
(Hint: utilize for loop and `.length` to help you).

For example, the method call, `printArr(topMovies)` should print the following:
```
"Birds Of Prey", "The Birds", "Angry Birds", "Bird Box", "The Secret Life of Pets"
```
<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/JavaBasicsArray?lite=true#Bird.java" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

### 2. ArrayList
ArrayList is another popular data structure in Java. It is similiar to an array that user can access store data by index.

You create an ArrayList with the following line of code:
```java
ArrayList<String> topMoviesList = new ArrayList<String>();
```

To add elements, we call the method `add()` on the ArrayList. For example:
```java
topMoviesList.add("Birds Of Prey");
topMoviesList.add("The Birds");
topMoviesList.add("Angry Birds");
topMoviesList.add("Bird Box");
topMoviesList.add("The Secret Life of Pets");
```

And, to get the number of elements in the ArrayList, we call the method `size()`. For example:
```java
int numOfMovie2 = topMoviesList.size(); // numOfMovie2 has value 5
```

One critical difference between array and ArrayList is that you need to know number of elements to store in an array upfront, but you don't for an ArrayList.

- With the line of code `String topMovies[] = new String[5]` the array `topMovies` will forever have 5 elements in it. As a result, you can't store more than 5 Strings in `topMovies` after declaring it.

- However, with the line of code `ArrayList<String> topMoviesList = new ArrayList<String>()`, the ArrayList starts with 0 element in it and can be infinitely added to or remove from.

To remove an element in an ArrayList, we call the method `remove()`. For example:
```java
System.out.print(topMoviesList.size()); // prints out 5
topMoviesList.remove("Birds Of Prey");
System.out.print(topMoviesList.size()); // prints out 4
```

#### Exercise: Write a method `printList()` that takes an ArrayList as input and prints out all the elements in that ArrayList in order 
(Hint: utilize for loop and `.size` to help you).

For example, the method call, `printList(topMovieList)` should print the following:
```
"Birds Of Prey", "The Birds", "Angry Birds", "Bird Box", "The Secret Life of Pets"
```
<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/JavaBasicsList?lite=true#Bird.java" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

### End Of Workshop 🐥 
<b>Patrick</b> 🐥 thank you for participating! Hope you learned a lot from this course :)
![animation of duck Patrick](https://media.giphy.com/media/l49JKwmJLChtS6d44/giphy.gif) 

<p style="text-align: center;">(image created by Molang: giphy.com/molangofficialpage)</p>