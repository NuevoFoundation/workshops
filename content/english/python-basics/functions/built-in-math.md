---
title: "Built-in Math Functions"
date: 2019-07-28T11:45:38-07:00
draft: false
weight: 3
---

Python provides a number of important built-in functions that we can use without needing to provide the function definition. In this section, we will learn about some of the built-in math functions using that you can perform mathematical tasks on numbers.

The `max()` and  `min()` functions give us the largest and smallest values in a list, respectively:

```python
x = min(20, 10, 50, 25)		#x = 10
print(x)
y = max(20, 10, 50, 25)		#y = 50
print(y)
```

The `abs()` function give us the absolute(positive) value of number:

```python
x = abs(-34)		         #x = 34
print(x)
y = abs(90)			         #y = 90
print(y)
```

The `pow(a, b)` function give us the value of `a` raised to the power of `b` (a<sup>b</sup>):

```python
x = pow(3,4)		        #x = 81
print(x)
```

### Challenge

Let’s put it all together! Let’s see if we can create a program that takes 5 numbers from the user and prints the value of minimum of those numbers raised to the power of maximum. For example, given the number 2,7,4,11,9, return 2<sup>11</sup>. Bonus points if you can break it into functions!

<iframe src="https://trinket.io/embed/python/b238d85d0d" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>