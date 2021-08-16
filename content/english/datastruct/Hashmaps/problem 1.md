---
title: "Problem 1: Hashing"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
--- 

<p style="text-align: center;"><iframe width="60%" height="600px" src="https://www.youtube.com/embed/Gii8_e-ydDM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<link rel="stylesheet" href="../style.css">


## Task 1: Find that Code!

Every order has a special code. The code appears once when a customer places an order and appears again when the customer receives the order. One of the customers never received their order! Find that special code linked to their order to verify their order!
{{%notice tip%}}
1. How could you use a hashmap to keep track of the single number?
2. Remember the hashmap methods!
{{%/notice%}}

```java

Example 1:
Input: nums = [2,2,1]
Output: 1

Example 2:
Input: nums = [4,1,2,1,2]
Output: 4

Example 3:
Input: nums = [1]
Output: 1

```

<iframe frameborder="0" width="100%" height="800px" src="https://replit.com/@nuevofoundation/SingleNumber?lite=true"></iframe>

## Task 2: Code Breaker

<p>NuevoEats utilizes an encryption system to verify all orders, and you have to find a way to decrypt it. Everyone has a copy of the nums array. However, you are the only one with the target key. The password is a 2 key password. To get this password, you must find the indices of the array that add up to the target. Examples are below for you to better understand the problem. </p>


{{%notice tip%}}
1. Do you remember the hashmap methods?
2. Take a look at the hashmap methods containsKey() or containsValue() online and see how they could be useful here.
{{%/notice%}}

```java

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
```

<iframe frameborder="0" width="100%" height="800px" src="https://replit.com/@nuevofoundation/TwoSum?lite=true"></iframe>