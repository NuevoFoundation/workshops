---
title: "嵌套循环"
description: "循环的高阶应用"
date: 2020-07-16T00:00:00Z
weight: 4
---


### 嵌套循环
*嵌套循环* 是我们在前面练习中学到的关于for循环和while循环知识的拓展。在继续学习之前，你可能需要回顾一下 <a href="../../../python-basics/loops" target="blank">For循环和While循环</a>页面。

在本节课中，我们将在一个循环中使用另一个循环，这称为 *嵌套循环*。

<hr/>

### 嵌套while循环
```python
#这是嵌套while循环的格式
while expressionA:
    while expressionB:
        statement(B)
    statement(A)
```
在上面的 `while` 循环中，当表达式A产生 `false` 时，我们将跳过整个代码块。当表达式A产生 `true` 时，我们将进入内部while循环并检查表达式B。如果表达式B产生 `true` ，则将执行语句(B)。如果表达式B产生 `false`，我们将跳过内部while循环并执行语句(A)。

如果表达式A产生`false`，则不会执行任何语句；只有当表达式A和表达式B都产生`true`时，才会执行语句(A)和语句(B)。

让我们看一个嵌套while循环的示例。
 ```python
 #这是嵌套while循环的示例。
 x = 0
 y = 0
 #以下是外部循环
 while x < 3:
     #如果"x < 3"是true，则打印
     print("Go through outer while loop, x is", x, "y is", y, sep = " ")
     #以下是内部循环
     while y < 5:
         #如果"y < 5"是true，则打印
         print("Go through inner while loop, x is", x, "y is", y, sep = " ")
         y += 1
     #完成每个内部循环后执行以下代码。
     x += 1
     y = 0
 ```
这是我们示例的输出。

 ```output
Go through outer while loop, x is 0 y is 0
Go through inner while loop, x is 0 y is 0
Go through inner while loop, x is 0 y is 1
Go through inner while loop, x is 0 y is 2
Go through inner while loop, x is 0 y is 3
Go through inner while loop, x is 0 y is 4
Go through outer while loop, x is 1 y is 0
Go through inner while loop, x is 1 y is 0
Go through inner while loop, x is 1 y is 1
Go through inner while loop, x is 1 y is 2
Go through inner while loop, x is 1 y is 3
Go through inner while loop, x is 1 y is 4
Go through outer while loop, x is 2 y is 0
Go through inner while loop, x is 2 y is 0
Go through inner while loop, x is 2 y is 1
Go through inner while loop, x is 2 y is 2
Go through inner while loop, x is 2 y is 3
Go through inner while loop, x is 2 y is 4
 ```

#### 提问
你能否尝试找出x和y值的变化并解释原因？

(**提示**: 我们分别执行外部循环和内部循环多少次？)

<hr/>

### 小挑战一
尝试更改嵌套while循环中的整数并预测输出结果。然后运行代码并观察输出结果。它们是否与您的预测相符？

<iframe src="https://trinket.io/embed/python/386ca3182b" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
<br/><br/>
<hr/>

### 嵌套for循环

```python
#这是嵌套for循环的格式
for variableA in rangeA:
   for variableB in rangeB:
      statements(B)
   statements(A)
```

在上面的 `for` 循环中，当变量A不在范围A内时，我们将跳过整个代码块。当变量A在范围A内时，我们将进入内部for循环。如果变量B在范围B内，将执行语句(B)。如果变量B不在范围B内，我们将跳过内部for循环并进入外部循环。

如果变量A不在范围A内，将不会执行任何语句；只有当变量A在范围A内且变量B在范围B内时，才会执行语句(A)和语句(B)。

让我们看一个示例。

```python
#这是嵌套for循环的示例
#以下是外部循环
for n in range(0, 3):
    #以下是内部循环
    for m in range(0, 3):
        #如果m在范围(0, 3)内，则打印
        print("(", n, ",", m, ")", end = " ")
    #如果n在范围(0, 3)内，则打印
    print("")
```
这是我们示例的输出。

```output
( 0 , 0 ) ( 0 , 1 ) ( 0 , 2 ) 
( 1 , 0 ) ( 1 , 1 ) ( 1 , 2 ) 
( 2 , 0 ) ( 2 , 1 ) ( 2 , 2 ) 
```

#### 提问
你能否尝试解释打印的规律？

(**提示**: 我们分别执行外部循环和内部循环多少次？)

<hr/>

### 小挑战二
尝试更改嵌套for循环中的整数并预测输出结果。
然后运行代码并观察输出结果。它们是否与预测相符？

<iframe src="https://trinket.io/embed/python/8b9effdbd6" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

#### 提问
尝试初始化n和m。这会改变我们的嵌套循环的输出吗？为什么？
然后运行代码并观察输出结果。它们是否与预测相符？

<iframe src="https://trinket.io/embed/python/1ea8b47667" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

#### 提问
在本节课结束时，让我们思考以下问题：
1. 为什么初始化不会改变输出？

(**提示**: for循环中的变量代表什么？)

2. 如果我们想从(1, 1)开始打印，应该怎么做？

(**提示**: 如果更改范围会发生什么？)

### 小挑战三

使用嵌套 `for` 循环或 `while` 循环，尝试打印以下排列

    ```
    1 
    1 2 
    1 2 3 
    1 2 3 4 
    1 2 3 4 5
    ```

提示: 打印而不换行，可以使用 `print(x, end=" ")`。如果要强制换行，可以使用 `print()`。