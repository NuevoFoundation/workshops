---
title: "Problem 1: ArrayList Basics"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 3
---

<p style="text-align: center;"><iframe width="60%" height="600px" src="https://www.youtube.com/embed/unwrTbTILmA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<!--<link rel="stylesheet" href="../../style.css">-->

## Task 1: Insertion

Tacos Truck is now available down the street! New employees are struggling to get keep track of all the different orders. Help them organize all the items using `ArrayList`s!

```js javascript
/*
Dan is ordering from his favorite taco shop:
    - 2 orders of "carne asada"
    - 4 orders of "carnitas"
    - 1 order of "pollo"
    - 2 orders of "birria"

    Return an ArrayList of all of these elements in that order
*/
```

{{%notice tip%}}
1. How can you add items onto the list?
2. What does Dan want in the order?
{{%/notice%}}

<iframe frameborder="0" width="100%" height="800px" src="https://replit.com/@nuevofoundation/2DInsert?lite=true"></iframe>

## Task 2: Getting elements

A restaurant selling Chinese food has just opened nearby. A huge number of orders has just come in and the manager has trouble keeping track of everything, so they have put it all in an `ArrayList`. Help finish the program to return the given string at a given index.

```js javascript
ArrayList<String> menu = new ArrayList<>(); 

menu.add("Pizza"); 
menu.add("Hotdog"); 
menu.add("Hamburger"); 
menu.add("Hotdog"); 

// Returns "Pizza" since it is the 0th item in the menu
item = find(menu, 0);
```

{{%notice tip%}}
1. How can you iterate through the list?
2. Look at the example menu!
{{%/notice%}}

<iframe frameborder="0" width="100%" height="800px" src="https://replit.com/@nuevofoundation/2DFind?lite=true"></iframe>

## Task 3: Removing Elements

The same Chinese restaurant has a bug in their code! Orders have been duplicated randomly and the `ArrayList` are filled with copies of orders. Help the owner out by writing a program to remove the first `n` occurrences of a given order in the `ArrayList`.

```js javascript
ArrayList<String> menu = new ArrayList<>(); 

menu.add("Pizza"); 
menu.add("Hotdog"); 
menu.add("Hamburger"); 
menu.add("Pizza");
menu.add("Pizza");
menu.add("Hotdog"); 

// Remove the first two Pizza orders
item = remove(menu,"Pizza", 2);

// Menu will not be the following array: {"Hotdog", "Hamburger", "Pizza", "Hotdog"}
```

<iframe frameborder="0" width="100%" height="800px" src="https://replit.com/@nuevofoundation/2DRemove?lite=true"></iframe>


