---
title: "Introduction"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 1
--- 

<!--<link rel="stylesheet" href="../../style.css">-->

![image](../../img/mapIntro.png)

<hr>

A hashmap is a table that holds a collection of key-value pairs. It "maps" numerous keys to their respective values. A hashmap is very similar to a dictionary. In a dictionary, you might want to look up a definition for a certain word. You simply look up the keyword in the dictionary and by doing so, you can get the definition attached to that keyword. The dictionary maps words (the "keys") to their definition (the "values").

Let's think about how we could use a hashmap to to help our driver find the address he needs to deliver the order. Suppose they have four customer orders to deliver. We can use a hashmap to store this information, where the keys are the customer names and the values are each customer's address.

![image](../../img/customerName.png)

We want our driver to be able to access the addresses just like how you would look up definitions in a dictionary. By looking up "Melissa", you would return Melissa's address. We'll learn how to implement this behavior in the next page.