```markdown
---
title: "集合"
draft: false
weight: 3
---

就像列表一樣，集合也是一組項目的集合。不同的是，集合不能包含重複的項目。因此，如果你有 5 塊巧克力並將它們放入集合中，最後只會留下 1 塊巧克力，因為重複的項目會被移除。😢

<a href = "https://www.youtube.com/watch?v=mLIuHU5Sj5w">
<img src="../../img/sets_example.jpg" width="500" alt="兩個圓圈的圖片，左邊圓圈內有象棋和乒乓球，右邊圓圈內有足球和板球拍，兩個圓圈的重疊部分有籃球和羽毛球" />
</a>

在上圖中，左側代表 **<font color="#b00020">室內遊戲</font>**（象棋和乒乓球），而右側代表 **<font color="#2e6b2e">室外遊戲</font>**（板球和足球）。中間代表兩個集合之間的共同部分，這些是既可以在室內玩也可以在室外玩的遊戲（籃球和羽毛球）。中間部分也稱為兩個集合的交集。

{{% notice tip %}}
可以使用 `set()` 函數或者將所有元素放置在一對大括號中來創建集合。
{{% /notice %}}

```python
indoorGames = set(["Chess", "Table Tennis", "Basketball", "Badminton"])
outdoorGames = {"Cricket", "Football", "Basketball", "Badminton"}
print('** 室內遊戲 **')
print(indoorGames)
print('** 室外遊戲 **')
print(outdoorGames)
```

**輸出**
```
** 室內遊戲 **
set(["Chess", "Table Tennis", "Basketball", "Badminton"])
** 室外遊戲 **
set(["Cricket", "Football", "Basketball", "Badminton"])
```

### 集合的並集
如果我們有兩個集合，這兩個集合的並集將包含來自兩個集合的遊戲。輸出將是一個新的集合，其中的重複項目會被移除。

並集使用的符號是 `|`。

```python
allGames = indoorGames | outdoorGames
print('** 所有遊戲 **')
print(allGames)
```

**輸出**
```
** 所有遊戲 **
set(["Chess", "Table Tennis", "Basketball", "Badminton", "Cricket", "Football"])
```

### 集合的交集
兩個集合的交集將是同時屬於室內和室外的遊戲集合。

交集使用的符號是 `&`。

```python
commonGames = indoorGames & outdoorGames
print('** 共同的遊戲 **')
print(commonGames)
```

**輸出**
```
** 共同的遊戲 **
set(["Basketball", "Badminton"])
```

### 集合的差集
兩個集合的差集將是包含只屬於其中一個集合但不屬於另一個集合的遊戲。

差集使用的符號是 `-`。

```python
indoorOnlyGames = indoorGames - outdoorGames
print('** 僅限室內的遊戲 **')
print(indoorOnlyGames)
```

**輸出**
```
** 僅限室內的遊戲 **
set(["Chess", "Table Tennis"])
```

### 輸出集合中的項目
集合中的項目無法像列表那樣用索引號輸出。集合中的元素沒有固定的順序。

因此，無法像列表中那樣執行 `indoorGames[0]` 或 `indoorGames[1]`。不過，可以使用 `for` 循環來遍歷集合中的元素。

```python
for g in indoorGames:
  print(g)
```

**輸出**
```
Chess
Table Tennis
Basketball
Badminton
```

### 向集合添加項目
我們可以使用 `.add` 函數向集合中新增新遊戲。
```python
indoorGames.add("Carrom")
print('** 室內遊戲 **')
print(indoorGames)
```

**輸出**
```
** 室內遊戲 **
set(["Chess", "Table Tennis", "Basketball", "Badminton", "Carrom"])
```

### 從集合中移除項目
我們可以使用 `.discard` 函數從集合中移除某個項目。
```python
indoorGames.discard("Chess")
print('** 室內遊戲 **')
print(indoorGames)
```

**輸出**

```
** 室內遊戲 **
set(["Table Tennis", "Basketball", "Badminton", "Carrom"])
```
{{% notice note %}}
如果移除集合中不存在的項目，不會產生任何錯誤。另一方面，如果試圖從列表中移除不存在的項目，則會引發 `ValueError`！
{{% /notice %}}

### 挑戰
讓我們嘗試用集合來解決之前用列表和元組完成的相同練習。

從下面的水果列表開始。打印出水果列表，並對於每種水果，詢問用戶是否喜歡它。如果喜歡，保留；如果不喜歡，從列表中刪除。接下來，詢問用戶添加一種列表中缺少的水果。將它添加到集合中，並列印出用戶喜歡的水果數量。

```python
fruits = ['orange', 'kiwi', 'banana', 'apple', 'mango', 'lemon']
```

<iframe title="挑戰 - Codebunga" src="https://codebunga.com/embed/i7wzei96" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
```