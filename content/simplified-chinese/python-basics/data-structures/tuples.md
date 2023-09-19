---
title: "元组"
draft: false
weight: 2
---

元组也是一种有序的元素集合，就像列表一样，但元组是不可变的。这意味着一旦分配了元组，就无法更改元组的元素（与列表不同，列表允许更改）。这种不可变性使得元组非常适用于当你不希望在整个程序中更改数据的情况。此外，元组通常用于存储不同数据类型的元素。在定义列表时使用方括号（`[]`）的地方，可以通过将所有元素放在括号（`()`）中并用逗号分隔来创建元组。

```python
#创建包含两个字符串类型元素的元组
my_tuple = ('apple', 'orange')
```

{{% notice note %}}

元组也可以不使用括号创建。但最好使用括号。

{{% /notice %}}

元组也可以包含不同类型的元素。

```python
#包含不同数据类型的元组
my_tuple = ('apple', 1, 4.5)
```

### 访问元组的元素

我们可以使用方括号 `[]` 内的索引来访问元组的元素，就像列表一样。与列表一样，索引从 `0` 开始。

```python
#创建包含三个字符串类型元素的元组
my_tuple = ('apple', 'orange', 'mango')

print(my_tuple[0]) ## 输出 apple
print(my_tuple[2]) ## 输出 mango
```

### 合并两个元组

我们可以使用 `+` 运算符将两个元组合并。

```python
fruits = ('apple', 'orange', 'mango')
numbers = (1, 2, 3)

#合并两个元组 fruits 和 numbers
combined_tuple = fruits + numbers

print(combined_tuple) ## 输出 ('apple', 'orange', 'mango', 1, 2, 3)
```

### 元组的长度

`len(tuple)` 函数可以得到元组中的元素数。

```python
fruits = ('apple', 'orange', 'mango')

print(len(fruits))  ## 输出 3
```

### 重新分配元组

由于元组是不可变的，我们无法更改元组的元素。所以 `fruits[0] = 'lemon'` 会产生错误，因为我们在尝试更改 `'fruits'` 的索引 `0` 处的元素。
但是，我们可以重新分配一个元组（替换整个元组）。
```python
my_tuple = ('apple', 'orange', 'mango')

print(my_tuple)  ## 输出 ('apple', 'orange', 'mango')

# 重新分配 my_tuple
my_tuple = (1, 2, 3) 

print(my_tuple)  ## 输出 (1, 2, 3)
```

### 删除元组

我们可以使用 `del` 完全删除一个元组。


```python
fruits = ('apple', 'orange', 'mango')

print(fruits)  ## 输出 ('apple', 'orange', 'mango')

# 删除 fruits
del fruits 

print(fruits)  ## 由于元组 fruits 不再存在，因此会出现错误 
```

### 小挑战
让我们尝试一下刚才使用列表完成的相同练习，但使用元组。

从下面的水果列表开始。打印水果列表，对于每个水果，询问用户是否喜欢它。如果他们喜欢它，就保留它。如果他们不喜欢它，就从列表中删除它。接下来，要求用户添加一个缺少的水果。将其添加到列表中，并打印出用户喜欢的水果数量。

```python
fruits = ['orange', 'kiwi', 'banana', 'apple', 'mango', 'lemon']
```

<iframe src="https://trinket.io/embed/python/b238d85d0d" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>