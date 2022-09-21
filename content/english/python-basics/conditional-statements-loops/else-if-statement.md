---
title: "Else-if Condition"
draft: false
weight: 2
---

In the last exercise, we learned basic if-else conditions. If you need a quick refresher, you can review <a href="../../python-basics/conditional-statements"> Conditional statements</a>.

In this section, we'll expand to introduce a new condition called "elif".

### Elif Condition

**Elif  Keyword** represents the "else-if" condition. A real world example would be: If I am really hungry, I will eat a cake, else if I am only a little hungry, I will have an apple, else I won't eat anything. You can see it is used when you want to try another condition if the first one is not true.

```python
# This is the basic elif syntax
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
Since we can see that the first statement, `1` greater than `3`, is false, it evaluates to `false`. The inside of the `if` statement will not be executed then. We will then evaluate the `elif` statement, `1` is equal to `3`, which also evaluates to `false`. The inside of the `elif` will not be executed. So what is in `else` will be printed.

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

`1=1`<br/>
`3=3`

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
Example B will print out:

\```
1 = 1
\```

In Example A we will evaluate the first `if` statement (`1==1`) to be `true`. The inside of first `if` statement will be executed then. We will then evaluate second `if` statement (`3==3`) to be `true` as well. The inside of second `if` statement will also be executed.

In Example B we will evaluate the first `if` statement (`1==1`) to be `true`. Then the rest part of `elif` and `else` will not be evaluated since `if` is already correct.

### Challenge
Let's use the knowledge you learned in Python-Basics-booleans to make your own example for `elif`?
You may want to [review the boolean section](../../python-basics/data-types/booleans) to finish this challenge.

<iframe height="600px" width="100%" src="https://replit.it/@nuevofoundation/Basic-else-if?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>