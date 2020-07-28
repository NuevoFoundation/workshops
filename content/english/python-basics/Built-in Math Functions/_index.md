---
title: "Built-in Math Functions"
date: 2019-07-28T11:45:38-07:00
draft: false
weight: 9
---

Python provides a number of important built-in functions that we can use without needing to provide the function definition. In this section, we will learn about some of the built-in math functions using that you can perform mathematical tasks on numbers.

The  `max()` and  `min()` functions give us the largest and smallest values in a list, respectively:

```python
x = min(20, 10, 50, 25)		#finds the minimum of 20, 10, 50 and 25
print(x)
y = max(20, 10, 50, 25)		#finds the maximum of 20, 10, 50 and 25
print(y)
```

The  `abs()` function give us the absolute(positive) value of number:

```python
x = abs(-34)		#x = 34
print(x)
y = abs(90)			#x = 90
print(y)
```

The  `pow(a, b)` function give us the value of a raised to the power of b (a<sup>b</sup>):

```python
x = pow(3,4)		#x  = 81
print(x)
```

### Challenge

Let’s put it all together! Let’s see if we can create a program that takes 5 numbers from the user (say 2,7,4,11,9) and print the value of minimum of those numbers raised to the power of maximum of them (2<sup>11</sup>).

<iframe height="600px" width="100%" 
 src="https://repl.it/@nuevofoundation/python-blank?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>