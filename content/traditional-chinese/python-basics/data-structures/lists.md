---
title: "Lists"
draft: false
weight: 1
---

列表是一種有序的項目集合，可以通過逗號分隔並放在方括號 `[]` 中來建立。如同我們在迴圈課程中看到的，列表可以包含任何數據類型，例如字串或整數。

```python
#建立一個包含 5 種水果的列表
fruits = ['orange', 'apple', 'banana', 'apple', 'mango']
```

如果你想參考列表中的特定元素，可以通過使用方括號內的索引（位置）來完成。第一個元素的索引（位置）是 `0`，列表的索引範圍為 `（列表元素數量 - 1）`。例如，包含 6 個元素的列表，其索引會是 0 到 5。

```python
#建立一個包含 5 種水果的列表
fruits = ['orange', 'apple', 'banana', 'apple', 'mango']

#輸出索引為 2 的元素
print(fruits[2])     ##輸出 banana
```

**索引** | **項目**
-------|-------
0 | orange
1 | apple
2 | banana
3 | apple
4 | mango

{{% notice note %}}

如同此示例顯示，列表可以包含重複的元素。

{{% /notice %}}

在 Python 中，列表中的元素不必全都屬於同一數據類型，因此單個列表可以包含字符串和數字的組合。

```python
#列表可以包含不同的數據類型
my_list = ['candy', 10, 2.5]
```

### 列表的長度

你可以通過使用 `len(list)` 函數獲取列表的長度，並將列表名稱作為參數傳遞。

```python
length = len(fruits)  ##length = 5
```

### 在列表中追加元素

你可以通過使用 `append` 函數 `list.append(x)` 在列表中添加項目，其中 `list` 是列表的名稱，`x` 是你想要追加的元素。此函數在列表的末尾添加項目。

```python
#原始列表為 ['orange', 'apple', 'banana', 'apple', 'mango']
fruits.append('lemon')
#現在列表是 ['orange', 'apple', 'banana', 'apple', 'mango', 'lemon']
```

### 在指定索引位置插入元素

如果你想控制添加新元素的位置，可以使用 `list.insert(i, x)` 函數，在列表的特定索引位置插入元素。這裡 `list` 是列表名稱，`i` 是插入位置的索引，`x` 是要插入的元素。注意：這會將位置 `i` 之後的所有元素往後移動一個索引。

```python
fruits.insert(1, 'guava')
#現在列表為 ['orange', 'guava', 'apple', 'banana', 'apple', 'mango', 'lemon']
```

### 從列表中移除元素

`list.remove(x)` 函數會尋找列表中第一個出現的給定元素 `x` 並將其移除。

```python
fruits.remove('apple')
#現在列表是 ['orange', 'guava', 'banana', 'apple', 'mango', 'lemon']
```

{{% notice note %}}

如果要移除的元素 `x` 不在列表中，`list.remove(x)` 會引發一個值錯誤（ValueError）。

此外，第二個 `'apple'` 項目仍然保留在列表中。

{{% /notice %}}

### 移除特定位置的元素

`list.pop(i)` 函數會移除指定索引 `i` 的元素。

```python
fruits.pop(0)
#現在列表為 ['guava', 'banana', 'apple', 'mango', 'lemon']
```

{{% notice note %}}

如果未指定索引，`list.pop()` 則會移除列表中的最後一個元素。

{{% /notice %}}

### 逆置列表中的元素

`list.reverse()` 函數會逆置列表中的元素。

```python
fruits.reverse()
#現在列表是 ['lemon', 'mango', 'apple', 'banana', 'guava']
```

### 獲取列表的最小和最大元素

`min(list)` 函數返回列表中的最小元素，而最大元素可以通過使用 `max(list)` 函數來獲得。如果列表包含數字，它會返回列表中數值型元素的最低或最高值。如果列表包含字符串，它會返回按字母排列的最早或最晚的值。

```python

my_list = [4, 1, 2, 5, 3]  ## 定義一個新的整數列表

print(min(my_list)) ## 輸出 1，my_list 的最小元素
print(max(my_list)) ## 輸出 5，my_list 的最大元素

```

{{% notice note %}}

如果列表同時包含字符串和數字，`min` 和 `max` 函數會導致錯誤。

{{% /notice %}}

### 挑戰

現在來試試看自己動手操作。從下面的水果列表開始，輸出水果列表，然後對於每種水果，詢問使用者是否喜歡。如果他們喜歡，就保留它；如果不喜歡，就從列表中移除它。接下來，要求使用者添加列表中缺少的水果。將該水果添加到列表中，並輸出使用者喜歡的水果數量。

```python
fruits = ['orange', 'kiwi', 'banana', 'apple', 'mango', 'lemon']
```

<iframe title="Challenge - Codebunga" src="https://codebunga.com/embed/cv4h3m89" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

提示：你需要使用 `str(int)` 函數將 `length` 整數轉換為字符串。