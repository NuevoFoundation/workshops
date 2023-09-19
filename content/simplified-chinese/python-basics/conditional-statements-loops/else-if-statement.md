---
title: "Else-if 条件"
draft: false
weight: 2
---

在上一个练习中，我们学习了基本的if-else条件语句。如果需要快速复习，你可以查看<a href="../../python-basics/conditional-statements">条件语句</a>。

在本节中，我们将介绍一个新的条件，叫做 "elif"。

### Elif 条件

**Elif关键字** 代表"else-if"条件。一个现实世界的例子是：如果我非常饿，我会吃蛋糕，否则如果我只是有点饿，我会吃一个苹果，否则我什么都不吃。您可以看到，当你希望在第一个条件不成立时尝试另一个条件时，可以使用它

```python
# elif语句的基本格式
if expression:
    statement(s)
elif expression:
    statement(s)
else:
    statement(s)
```

#### 让我们再看一个例子
```python
# 一个例子
if 1 > 3:
    print('1>3')
elif 1 == 3:
    print('1=3')
else:
    print('1<3')
```

由于我们可以看到第一个语句，`1` 大于 `3`，是假的，它评估为 `false` 。`if` 语句的内部将不会被执行。然后我们将评估 `elif` 语句，`1` 等于 `3`，这也评估为 `false`。`elif` 语句的内部也不会执行。因此，将打印 `else` 中的内容。

### 注意: `elif` 与 `if` 语句不同  
#### 让我们来看两个例子
#### 示例 A
```python
# 两个if语句的示例 A
if 1 == 1:
    print('1=1')
if 3 == 3:
    print('3=3')
else:
    print('wrong')
```
示例A将打印:

```
1 = 1
3 = 3
```

#### 示例 B
```python
# elif语句的示例 B
if 1 == 1:
    print('1=1')
elif 3 == 3:
    print('3=3')
else:
    print('wrong')
```
示例B将打印:

```
1 = 1
```

在示例A中，我们将评估第一个 `if` 语句（`1==1`）为 `true` 。然后将执行第一个 `if` 语句的内部。然后，我们将评估第二个 `if` 语句（`3==3`），它也将评估为 `true` 。第二个 `if` 语句的内部也将执行。

在示例B中，我们将评估第一个 `if` 语句（`1==1`）为 `true`。然后，`elif` 和 `else` 的其余部分都不会被评估，因为 `if` 已经正确。

#### 小挑战
你能利用您在 "Python基础:布尔值" 中学到的知识来制作自己的elif示例吗？你可能需要复习布尔值来完成这个挑战。
- <a href="../../python-basics/data-types/booleans"> 布尔值 </a>
<br/><br/>

<iframe src="https://trinket.io/embed/python/5292ae7e3a" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
