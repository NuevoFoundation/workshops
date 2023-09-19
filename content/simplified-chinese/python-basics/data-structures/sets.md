---
title: "集合"
draft: false
weight: 3
---

就像列表一样，集合也是一组项目。集合和列表的区别在于集合不能包含重复项。因此，如果你原来有 5 块巧克力，将它们放入一个集合中，你将只剩下 1 块巧克力，因为重复项将被删除。 😢

<a href = "https://www.youtube.com/watch?v=mLIuHU5Sj5w">
<img src="../../img/sets_example.jpg" width="500" alt="Picture of two circles with chess and ping pong in the left circle, soccer and cricket bat in the right circle, and basketball and badminton in both circles where they overlap" />
</a>

上图中，左边表示 **<font color="red">室内游戏</font>**（国际象棋和乒乓球），右边表示 **<font color="green">室外游戏</font>**（板球和足球）。中间表示这两个集合的共同部分。这些是既可以在室内又可以在室外玩的游戏（篮球和羽毛球）。中间部分也称为两个集合之间的交集。

{{% notice tip %}}
可以使用 `set()` 函数或将所有元素放在一对花括号中来创建集合。
{{% /notice %}}

```python
indoorGames = set(["Chess", "Table Tennis", "Basketball", "Badminton"])
outdoorGames = {"Cricket", "Football", "Basketball", "Badminton"}
print('** Indoor Games **')
print(indoorGames)
print('** Outdoor Games **')
print(outdoorGames)
```

**输出**
```
** Indoor Games - 室内游戏 **
set(["Chess", "Table Tennis", "Basketball", "Badminton"])
** Outdoor Games - 室外游戏 **
set(["Cricket", "Football", "Basketball", "Badminton"])
```

### 集合的并集
如果我们有上面的 2 个集合，这两个集合的并集包含来自两个集合的游戏。输出将是一个新的集合。重复项将被删除。

并集的符号是 `|`。

```python
allGames = indoorGames | outdoorGames
print('** All Games **')
print(allGames)
```

**输出**
```
** All Games - 所有游戏 **
set(["Chess", "Table Tennis", "Basketball", "Badminton", "Cricket", "Football"])
```


### 集合的交集
2 个集合的交集将是包含室内和室外游戏的集合。

交集的符号是 `&`。

```python
commonGames = indoorGames & outdoorGames
print('** Common Games **')
print(commonGames)
```


**输出**
```
** Common Games - 室内和室外都能玩的游戏 **
set(["Basketball", "Badminton"])
```

### 集合的差异
2 个集合的差异将是包含一个集合中存在但在另一个集合中不存在的游戏的集合。

差异的符号是 `-`。

```python
indoorOnlyGames = indoorGames - outdoorGames
print('** Indoor Only Games **')
print(indoorOnlyGames)
```

**输出**
```
** Indoor Only Games - 只能在室内玩的游戏 **
set(["Chess", "Table Tennis"])
```

### 打印集合的项目
我们不能像列表一样使用项目编号来打印集合的项目。集合的元素不是固定顺序的。

因此，不能像在列表中那样做 `indoorGames[0]` 或 `indoorGames[1]`。但是，您可以使用 `for` 循环遍历集合的元素。

```python
for g in indoorGames:
  print(g)
```

**输出**
```
Chess
Table Tennis
Basketball
Badminton
```

### 向集合中添加项目
我们可以使用 ``.add`` 函数将新游戏添加到集合中。
```python
indoorGames.add("Carrom")
print('** Indoor Games **')
print(indoorGames)
```


**输出**
```
** Indoor Games - 室内游戏**
set(["Chess", "Table Tennis", "Basketball", "Badminton", "Carrom"])
```

### 从集合中删除项目
我们可以使用 `.discard` 函数从集合中删除项目。
```python
indoorGames.discard("Chess")
print('** Indoor Games **')
print(indoorGames)
```

**输出**

```
** Indoor Games - 室内游戏**
set(["Table Tennis", "Basketball", "Badminton", "Carrom"])
```
{{% notice note %}}
如果你删除一个不在集合中的项目，你将不会得到任何错误。另一方面，如果你尝试从列表中删除一个不在集合中的项目，将得到 `ValueError`！
{{% /notice %}}

### 小挑战
让我们尝试一下刚才使用列表和元组完成的相同练习，但使用集合。

从下面的水果列表开始。打印水果列表，对于每个水果，询问用户是否喜欢它。如果他们喜欢它，就保留它。如果他们不喜欢它，就从列表中删除它。接下来，要求用户添加一个缺少的水果。将其添加到列表中，并打印出用户喜欢的水果数量。

```python
fruits = ['orange', 'kiwi', 'banana', 'apple', 'mango', 'lemon']
```

<iframe src="https://trinket.io/embed/python/b238d85d0d" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>