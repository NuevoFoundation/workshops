---
title: "Booleans"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 3
---

Booleans are <font color="blue">True</font> or <font color="blue">False</font> statements. Unlike strings or numbers, <b>booleans</b> store statements of truth: is what I'm saying true or false? 

For example, if I say, "You are a robot", a boolean can store whether this statement is true. In this case, since you are not a robot (hopefully!), <font color="blue">False</font> would be stored. 

What are the boolean answers to these questions about you?

1. I am a human. _______
2. I have 25 fingers. _______
3. I like cookies. _______
4. My favorite color is blue. ______


| Operator | Description           | Operator | Description              |
| -------- | --------------------- | -------- | ------------------------ |
| `<`      | Less than             | `>`      | Greater than             |
| `<=`     | Less than or equal to | `>=`     | Greater than or equal to |
| `==`     | Equal to              | `!=`     | Not equal to             |

### Challenge 1
As usual, use `print` to print out your results to the following:

```python
print(5 + 8 < 10)
print((3 + 5) * 6) == (65 - 17)
```

The first statement should return <font color="blue">False</font>. And the second should return <font color="blue">True</font>. 

![alt text](../../img/booleans.png "image of how booleans are used in python code") 

### Challenge 2
Try printing out the answers to the following expressions using `print`. If the results for any of these statements don't make sense, please ask for help! 

- 54 < (10 + 32)
- (37 / 5) != 7
- "Hello" + "World" == "Hello World"
- <font color="blue">False</font> == <font color="blue">False</font>

### Challenge 3 
Try making your own expressions! 

### Fun Fact: Connecting Booleans with AND and OR operators

You can also connect boolean expressions together using the AND and the OR operator. Here's a chart that describes what happens when we connect booleans together:

Expression  | Result 
------------|----------
<font color="blue">True</font> and <font color="blue">True</font>  | <font color="blue">True</font> 
<font color="blue">True</font>  and <font color="blue">False</font> | <font color="blue">False</font>
<font color="blue">False</font> and <font color="blue">True</font> | <font color="blue">False</font>
<font color="blue">False</font> and <font color="blue">False</font> | <font color="blue">False</font>
<font color="blue">True</font>  or <font color="blue">True</font>  | <font color="blue">True</font> 
<font color="blue">True</font>  or <font color="blue">False</font> | <font color="blue">True</font> 
<font color="blue">False</font> or <font color="blue">True</font>  | <font color="blue">True</font> 
<font color="blue">False</font>  and <font color="blue">False</font> | <font color="blue">False</font>

To summarize, AND requires both boolean expressions to be true, while OR only requires one of the two Boolean expressions to be true. Here are some more examples:

- (5 < 8) and (9 != 10) produces <font color="blue">True</font> since both 5 is less than 8 and 9 is not equal to 10.
- (8 <= 2) or ("h" + "e" == "he") produces <font color="blue">True</font> since "h" + "e" results in "he", even though 8 is not less than or equal to 2.
- (6 != 2 * 3) or (8 < 2 * 4) produces <font color="blue">False</font> since both 6 not equal to 2 * 3, and 8 being less than 2 * 4, produce <font color="blue">False</font>.

#### What do you think the following expressions produce?

- (11-2 < 10) and (7+3 > 10)
- (<font color="blue">True</font> or 3 < 1) and (<font color="blue">False</font> or 3>1)
