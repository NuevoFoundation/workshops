---
title: "循环"
draft: false
weight: 2
---

## Python 中的循环

如果你想多次执行一个任务，Python 有一种简单的方法来实现，即使用循环。Python 中有两种基本的循环类型：for 循环和 while 循环。

### For 循环

For 循环用于遍历序列。假设你想重复一个简单的任务 5 次。下面是如何做的示例。

以下 for 循环遍历列表 [1,2,3,4,5] 中的每个数字，将值 x 赋给它，然后执行 for 循环内的代码。

```python
for x in [1,2,3,4,5]:    
    print("We're on loop number",x)
```

<iframe src="https://trinket.io/embed/python/ddcca3b818" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

如果你想重复一个任务 10 次怎么办？100 次？1000 次？？

编写包含 1000 个数字 [1,2,3,4,5,6,..........,998,999,1000] 的列表将会很困难。有一个函数可以为你创建这个列表。

以下是使用 `range` 函数创建列表的示例：

下面的代码创建了一个从 1 开始到 10 结束的列表。

```
range(1,11)
```

现在尝试将上面示例中的列表 [1,2,3,4,5] 替换为这个 `range` 函数！

在 for 循环中的列表不仅可以是数字，还可以是任何东西！下面是另一个示例：

```python
fruits = ["apple","banana","orange"]

for x in fruits:
    print(x)
```

<iframe src="https://trinket.io/embed/python/3fd98a6bf4" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

### While 循环

While 循环与 for 循环类似，但它们不是遍历序列，而是在满足某个条件的情况下重复执行。

例如，让我们创建一个重复 5 次的 while 循环。

```python
count = 0

while count < 5:
    print("The current count is", count)
    count += 1  #这等同于count = count + 1
```

<iframe src="https://trinket.io/embed/python/6d4f0c86f0" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

我们发现，只要变量count小于5，while循环下面的所有代码都会执行。

要小心！确保该条件在某个时候变为 `false`，否则循环将无限继续。

### Break语句

我们之前学习了for循环和while循环在遍历完列表或满足某个条件之前都会继续执行。

还有一种方法可以在列表结束之前或在满足条件之前停止运行这些循环。

你可以使用 `break` 语句来实现这一点。它允许我们在for循环或while循环中退出循环。

以下是一个在while循环中使用 `break` 的示例：

```python
count = 0

while True:  #这将使while循环一直运行下去！除非在循环中的某个地方有break语句。
    print("count is", count)
    
    if (count == 10): #这表示如果计数等于10，然后退出while循环
        print("Breaking out of the loop!")
        break
    
    count += 1  #这等同于count = count + 1
```

<iframe src="https://trinket.io/embed/python/6cd0debfe5" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

### 小挑战

1. 给定一个食物列表，编写一个程序，除非它是用户最不喜欢的食物，否则输出 "I like [name of food]"

```python
foodList = ["apples", "ice cream", "pizza", "bananas", "carrots", "squash", "cucumbers", "sandwich", "oatmeal", "cookies", "cake", "spinach", "kale"]
```

2. 给定一个大列表，例如下面的列表，编写一个程序，可以从该列表中找到特定的数字。

```python
numList = [69, 430, 363, 80, 166, 476, 250, 38, 84, 405, 41, 302, 480, 57, 155, 17, 350, 87, 313, 36, 191, 367, 163, 167, 185, 93, 131, 314, 444, 452, 47, 457, 28, 21, 405, 350, 241, 121, 411, 152, 244, 207, 199, 371, 193, 4, 286, 482, 496, 283, 23, 466, 8, 84, 47, 231, 112, 329, 328, 85, 208, 161, 42, 251, 277, 207, 496, 3, 137, 138, 436, 447, 442, 313, 479, 464, 191, 19, 78, 333, 480, 36, 378, 232, 438, 451, 139, 444, 392, 75, 245, 151, 225, 50, 369, 49, 73, 325, 430, 335]
```

例如，请用户在控制台中输入一个数字，然后将是否找到了该数字的结果写入控制台。
提示：我们需使用  `int(x)` 将用户输入的信息转换为整数。

<iframe src="https://trinket.io/embed/python/1beb594e30" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

### 提问

如果列表非常大，我们要如何更改这个程序？如果找到一个数字，是否需要继续搜索列表的其余部分？