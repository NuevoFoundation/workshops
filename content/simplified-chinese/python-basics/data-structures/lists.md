---
title: "列表"
draft: false
weight: 1
---

列表是有序的项目集合，可以用方括号 `[]` 内的逗号分隔的值来表示。正如我们在循环课程中所看到的，列表可以包含任何数据类型，例如字符串或整数。

```python
#创建一个包含 5 个水果的列表
fruits = ['orange', 'apple', 'banana', 'apple', 'mango']
```

如果你想引用列表的特定元素，可以通过在方括号内使用索引（位置）来实现。第一个元素的索引（位置）为 `0`，列表的索引范围从 `0` 到 `(列表中的元素数量 - 1)`。因此，一个包含 6 个元素的列表将具有从 0 到 5 的索引。

```python
#创建一个包含 5 个水果的列表
fruits = ['orange', 'apple', 'banana', 'apple', 'mango']

#创建一个包含 5 个水果的列表
print(fruits[2])     ##打印出 banana
```

**索引** | **项目**
-------|-------
0 | orange
1 | apple
2 | banana
3 | apple
4 | mango

{{% notice note %}}

正如我们在这个示例中所看到的，列表可以包含重复的元素。

{{% /notice %}}

在Python中，列表不必全部是相同的数据类型，因此一个列表可以包含字符串和数字的组合。

```python
# 列表也可以包含不同的数据类型
my_list = ['candy', 10, 2.5]
```

### 列表的长度

我们可以使用 `len(list)`` 函数来获取列表的长度，将列表名称作为参数传递给函数。
```python
length = len(fruits)  ##length = 5
```

### 向列表中添加元素

您可以使用 `append` 函数来向列表中添加项目，`list.append(x)` 函数中，`list` 是列表的名称，`x` 是要添加的元素。它将元素添加到列表的末尾

```python
#之前的列表是 ['orange', 'apple', 'banana', 'apple', 'mango']
fruits.append('lemon')
#现在的列表是 ['orange', 'apple', 'banana', 'apple', 'mango', 'lemon']
```

### 在特定索引位置插入元素

如果我们想要控制新元素的位置，可以使用 `list.insert(i, x)` 函数在列表的特定索引处插入元素。这里 `list` 是列表的名称，`i` 是要插入的索引，`x` 是要插入的元素。注意：这将移动从位置 `i` 开始的所有元素一个索引。


```python
fruits.insert(1, 'guava')
#现在的列表是 ['orange', 'guava', 'apple', 'banana', 'apple', 'mango', 'lemon']
```

### 从列表中删除元素

`list.remove(x)` 函数搜索给定元素 `x` 的第一个实例，并将其从列表中删除。

```python
fruits.remove('apple')
#现在的列表是 ['orange', 'guava', 'banana', 'apple', 'mango', 'lemon']
```

{{% notice note %}}

如果元素 `x` 不在列表中，`list.remove(x)` 会引发值错误。

此外，请注意列表中仍然存在`apple`的第二个实例。

{{% /notice %}}


### 在特定位置删除元素

`list.pop(i)` 函数删除索引 `i` 处的元素。

```python
fruits.pop(0)
#现在的列表是 ['guava', 'banana', 'apple', 'mango', 'lemon']
```

{{% notice note %}}

如果不指定索引，`list.pop()` 将删除列表中的最后一个元素。

{{% /notice %}}


### 反转列表中的元素

`list.reverse()` 函数反转列表的元素。

```python
fruits.reverse()
#现在列表是 ['lemon', 'mango', 'apple', 'banana', 'guava']
```

### 获取列表的最小和最大元素
`min(list)` 函数返回列表的最小元素，最大元素可以使用 `max(list)` 函数找到。如果列表是数字列表，它将返回列表中最低或最高的值。如果列表是字符串列表，它将按字母顺序返回第一个或最后一个值。

```python

my_list = [4, 1, 2, 5, 3]  ## 定义一个新的整数列表
print(min(my_list)) ## 打印 1，my_list 的最小元素
print(max(my_list)) ## 打印 5，my_list 的最大元素

```
{{% notice note %}}

如果你的列表包含字符串和数字的混合，`min` 和 `max` 函数将返回一个错误。

{{% /notice %}}

### 小挑战

现在让我们自己尝试一下。从下面的水果列表开始。打印水果列表，对于每个水果，询问用户是否喜欢它。如果他们喜欢它，就保留它。如果他们不喜欢它，就从列表中删除它。接下来，要求用户添加一个缺少的水果。将其添加到列表中，并打印出用户喜欢的水果数量。

```python
fruits = ['orange', 'kiwi', 'banana', 'apple', 'mango', 'lemon']
```

<iframe src="https://trinket.io/embed/python/b238d85d0d" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

提示：你需要使用 `str(int)` 函数将 `length` 整数转换为字符串。