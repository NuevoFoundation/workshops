---
title: "Data Structure (Array & ArrayList)"
description: "Introduce basic data structures in Java."
date: 2020-07-16T00:00:00Z
weight: 8
---
In previous exercises, we learned that variables allow us to access and store a piece data. But, what if we want to store a bunch of similiar data? Is there a good way to organize them without declaring multiple variables?

In programming, <b>data structure</b> are structures that allowed coders to store multiple pieces of data of the same type. Using data structure is an efficient way to store and access large pieces of data. In this exercise, we will learn about 2 data structures used in Java: <b>array</b> and <b>ArrayList</b>.

### 1. Array
Let's say we want to store Patrick's 🐥 top 5 favorite movies. Instead of creating 5 variables, we can store all 5 pieces of data in an array, our first data structure!

To store data in an array, we do the following:

1. We first declare an array by specifying a data type and size (number of data can be stored).
```java
String topMovies[] = new String[5]; // create an array of Strings of size 5.
```
2. We iterate through the array (go through all the data spots) and assign the data to a spot in the array. 

Note that we access the array with its name and an index (`0` to access the 1st element, `1` for the 2nd ... ).
```java
topMovies[0] = "Birds Of Prey";
topMovies[1] = "The Birds";
topMovies[2] = "Angry Birds";
topMovies[3] = "Bird Box";
topMovies[4] = "The Secret Life of Pets";
// the array topMovies now store "Birds Of Prey", "The Birds", "Angry Birds", "Bird Box", "The Secret Life of Pets" in order
```

{{% notice tip %}}
#### An alternating way to create an array:
If we know all pieces of data for an array in advance, we can create the array in one line by listing all the data between `{` and `}`. 

For example:
```java
String topMovies[] = {"Birds Of Prey", "The Birds", "Angry Birds", "Bird Box", "The Secret Life of Pets"};
```
Just like how we initialize data with its index, we can access/modify each data with its index as well. 

For example:
```java
String movie1 = topMovies[0]; // movie1 has value "Birds Of Prey"
```
{{% /notice %}}

It is often useful to know how many elements is in an array after creating it (to access the last element in the array for example). And, we can get the number of elements in the array from the `length` field of the array, typing `array_name.length`. 

For example:
```java
int numOfMovie = topMovies.length; // numOfMovie has value 5
```
<br />

#### Exercise: Write a method `printArr()` that takes an array input and prints out all the elements in that array in order 
(Hint: utilize for loop and `.length` to help you).

After clicking `Run`, the program should print the following:
```
Birds Of Prey, The Birds, Angry Birds, Bird Box, The Secret Life of Pets
```
<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/JavaBasicsArray?lite=true#Bird.java" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

### 2. ArrayList
ArrayList is another popular data structure in Java. `ArrayList` is a class that was implemented using arrays. It is similiar to an array that user access, store, and modify data by an index.

You create an ArrayList by specifying a name and the type between `<` and `>`. 
For example:
```java
ArrayList<String> topMoviesList = new ArrayList<String>();
```

To add elements, we call the method `add()` on the ArrayList. 
For example:
```java
topMoviesList.add("Birds Of Prey");
topMoviesList.add("The Birds");
topMoviesList.add("Angry Birds");
topMoviesList.add("Bird Box");
topMoviesList.add("The Secret Life of Pets");
// the ArrayList now store "Birds Of Prey", "The Birds", "Angry Birds", "Bird Box", "The Secret Life of Pets" in order
```

To access an element at a particular index, we call the method `get()`.
For example:
```java
String movie1 = topMoviesList.get(0); // numOfMovie2 has value "Birds Of Prey"
```

And, to get the number of elements in the ArrayList, we call the method `size()`.
For example:
```java
int numOfMovie2 = topMoviesList.size(); // numOfMovie2 has value 5
```
<br />

One critical difference between array and ArrayList is that you need to know number of elements to store in an array upfront, but you do not for an ArrayList.

- With the line of code `String topMovies[] = new String[5]` the array `topMovies` will forever have length 5. As a result, you can't store more than 5 Strings in `topMovies` after creating it.

- However, with the line of code `ArrayList<String> topMoviesList = new ArrayList<String>()`, the ArrayList starts with 0 element and can be infinitely added to or remove from.

To remove an element from an ArrayList, we call the method `remove()`. 
For example:
```java
System.out.print(topMoviesList.size()); // prints out 5
topMoviesList.remove("Birds Of Prey");
System.out.print(topMoviesList.size()); // prints out 4
```
<br />

#### Exercise: Write a method `printList()` that takes an ArrayList as input and prints out all the elements in that ArrayList in order 
(Hint: utilize for loop and `size()` to help you).

After clicking `Run`, the program should print the following:
```
Birds Of Prey, The Birds, Angry Birds, Bird Box, The Secret Life of Pets
```
<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/JavaBasicsList?lite=true#Bird.java" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

### End Of Workshop 🐥 
<b>Patrick</b> 🐥 thank you for participating! Hope you learned a lot from this course :)
![animation of duck Patrick](https://media.giphy.com/media/l49JKwmJLChtS6d44/giphy.gif) 

<p style="text-align: center;">(image created by Molang: giphy.com/molangofficialpage)</p>
