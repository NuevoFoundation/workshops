---
title: "内置数学函数"
date: 2019-07-28T11:45:38-07:00
draft: false
weight: 3
---

Python 提供了许多重要的内置函数，我们可以在不需要提供函数定义的情况下使用它们。在本节中，我们将学习一些内置数学函数，使用这些函数可以对数字执行数学任务。

`max()` 和 `min()` 函数分别给我们提供了列表中的最大值和最小值：

```python
x = min(20, 10, 50, 25)		#x = 10
print(x)
y = max(20, 10, 50, 25)		#y = 50
print(y)
```

`abs()` 函数给我们提供了数字的绝对值（正数）：

```python
x = abs(-34)		         #x = 34
print(x)
y = abs(90)			         #y = 90
print(y)
```

`pow(a, b)` 函数给我们提供了 a 的 b 次方的值（a<sup>b</sup>）：

```python
x = pow(3,4)		        #x = 81
print(x)
```

### 小挑战

让我们把这些知识整合起来！我们看看能否创建一个程序，从用户那里获取 5 个数字，并打印出这些数字中最小的数的幂次最大值。例如，给定数字 2、7、4、11、9，返回 2<sup>11</sup>。如果你能将它拆分成函数，那将获得额外的奖励分数！

<iframe src="https://trinket.io/embed/python/b238d85d0d" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>