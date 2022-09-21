---
title: "Else-if Condition"
draft: false
weight: 2
---

We have already learned some basic if-else conditions from previous workshops, click on the link below if you want to review.

- <a href="../../python-basics/conditional-statements"> Conditional statements </a>

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
Since we can see that `1` greater than `3` is false, so it evaluates to `false`. The inside of the `if` statement will not be executed then. Since last `if` statement is `false`, we will then evaluate the `elif` statement if `1` is equal to `3`, so it evaluates to `false`. So what is in `else` will be printed.
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
Example A will print out:<br/>
`1=1`<br/>
`3=3`<br/>

#### Example B
```python
# This is Example of elif statements
if 1 == 1:
    print('1=1')
elif 3 == 3:
    print('3=3')
else:
    print('wrong')
```
Example B will print out:<br/>
`1=1`<br/>

In Example A we will evaluate the first `if` statement (`1==1`) to be `true`. The inside of first `if` statement will be executed then. We will then evaluate second `if` statement (`3==3`) to be `true` as well. The inside of second `if` statement will also be executed.<br/>
In Example B we will evaluate the first `if` statement (`1==1`) to be `true`. Then the rest part of `elif` and `else` will not be evaluated since `if` is already correct.
<br/><br/>
#### Challenge
Can you utilize the knowledge you learnt in Python-Basics-booleans to make your own example for `elif`?
You may want to review boolean to finish this challenge.
- <a href="../../python-basics/data-types/booleans"> Booleans </a>
<br/><br/>
<iframe height="600px" width="100%" src="https://replit.com/@nuevofoundation/Basic-else-if?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
