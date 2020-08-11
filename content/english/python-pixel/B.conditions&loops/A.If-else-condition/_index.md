---
title: "If-else Condition"
draft: false
weight: 3
---

We have already learned some basic if-else conditions from previous workshops, click on the link below if you want to review.

- <a href="../../python-basics/conditional-statements" target="_blank"> Conditional statements </a>

We will introduce a new condition called "elif".

### Elif Condition

**Elif  Keyword** represents the "else-if" condition. It is used when you want to have if the last `if` condition is not true, try this condition.

```python
# This is my first line of code
if expression:
    statement(s)
elif expression:
    statement(s)
else:
    statement(s)
```

#### Let's see an example
```python
# This is an example
if 1 > 3:
    print('1>3')
elif 1 == 3:
    print('1=3')
else:
    print('1<3')
```
Since we can see that `1` greater than `3` is false, so it evaluates to `False`. The inside of the `if` statement will not be executed then. Since last `if` statement is `False`, we will then evaluate the `elif` statement if `1` is equal to `3`, so it evaluates to `False`. So what is in `else` will be printed.
### Warning: `elif` is different from `if`  
#### Let's see two examples
#### Example A
```python
# This is Example A of two if statements
if 1 == 1:
    print('1=1')
if 3 == 3:
    print('3=3')
else:
    print('wrong')
```
Example A will print out:
    1=1
    3=3

#### Example B
```python
# This is Example of two if statements
if 1 == 1:
    print('1=1')
elif 3 == 3:
    print('3=3')
else:
    print('wrong')
```
Example B will print out:<br/>
`1=1`<br/>

In Example A we will evaluate the first `if` statement (`1==1`) to be `True`. The inside of first `if` statement will be executed then. We will then evaluate second `if` statement (`3==3`) to be `True` as well. The inside of second `if` statement will also be executed.<br/>
In Example B we will evaluate the first `if` statement (`1==1`) to be `true`. Then the rest part of `elif` and `else` will not be evaluated since `if` is already correct.
