---
title: "Numbers"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
---

The computer can also do math. Use `print()` to print out the result from the math expressions. No quotation marks are needed for numbers! Unlike strings, you can do math on numbers.

```python
print(7-3)  #prints 4
print(5 * -6 + 7)   #prints -23
print(24 * (8-3) / 6)   #prints 20.0
```

{{% notice note %}}
The computer does division of integers differently from your regular calculator. Division of integers will exclude remainders or decimals. 

For example, 

`15/4` makes `3` 
`15.0/4.0` makes `3.75`

{{% /notice %}}

You can also try using the math symbols to make your own expressions! 

| Symbol          | Use           | Symbol      | Use         |
| --------------- | ------------- | ----------- | ----------- |
| `+`             | Add           | `*`         | Multiply    | 
| `-`             | Subtract      | `/`         | Divide      | 

### Challenge 1

Let's try to figure out the answers to the following using Python. Try printing out the result of the below (<b>make sure you don't miss any parentheses</b>):

- 2 - 19
- (3 + 5) * 6
- (13 + 5 * 8) / (6 - (3 + 7))

### Challenge 2

Can you print out this statement? `"527 time 199 is: __"`

You will fill in the blank with the answer of what `(527 * 199)` is. If you want to print a string and a number together, you first have to convert the number into a string. 

Here's an example: <font color="blue">print</font>(`"Hello, World!"` + str(5))

{{% notice tip %}}

Using `str(5)` turns the number into the string `"5"`. Converting one type of thing to another is called "casting".

{{% /notice%}}

{{% notice info %}}

#### Fun Fact: Random Numbers

Here is how to print a random number between 1 (inclusive) and 10 (inclusive):

 ```python 
 # This line imports the library needed
 from random import 
 # This line prints a random number between 1 (inclusive) and 10 (inclusive)
 print(randint(1,10))
 ```

Want to know more? Ask for help or poke around on the internet! Every coder's best friend is a search engine! 

In particular, try understanding what the <font color="blue">from</font> and the <font color="blue">import</font> words mean. We will come back to these words later during the project. 

{{% /notice %}}

<iframe src="https://trinket.io/embed/python/b238d85d0d" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
