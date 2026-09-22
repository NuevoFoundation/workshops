---
title: "Tuples"
draft: false
weight: 2
---

元組 (Tuple) 就像列表 (list) 一樣，是有序的元素集合，但元組是不可變的。因此，在元組被指派後，您無法更改元組的元素（與列表不同，列表允許更改內容）。這種不可變的特性在您希望整個程式中保持數據不被改動時非常有用。此外，元組通常用來存儲不同數據類型的元素。列表是用方括號 (`[]`) 定義的，而元組可以通過將所有元素放在括號 `()` 內並以逗號分隔來創建。

```python
# 創建一個包含兩個字串元素的元組
my_tuple = ('apple', 'orange')
```

{{% notice note %}}

元組也可以在沒有括號的情況下創建。然而，使用括號是較好的編程習慣。

{{% /notice %}}

元組可以包含不同類型的元素。

```python
# 一個包含不同數據類型元素的元組
my_tuple = ('apple', 1, 4.5)
```

### 訪問元組的元素

我們可以像列表一樣使用方括號 `[]` 中的索引來訪問元組的元素。同樣，索引從 `0` 開始。

```python
# 創建一個包含三個字串元素的元組
my_tuple = ('apple', 'orange', 'mango')

print(my_tuple[0]) ## 輸出 apple
print(my_tuple[2]) ## 輸出 mango
```

### 合併兩個元組

我們可以使用 `+` 運算符來合併兩個元組。

```python
fruits = ('apple', 'orange', 'mango')
numbers = (1, 2, 3)

# 合併兩個元組 fruits 和 numbers
combined_tuple = fruits + numbers

print(combined_tuple) ## 輸出 ('apple', 'orange', 'mango', 1, 2, 3)
```

### 元組的長度

使用 `len(tuple)` 函數可以獲取元組中元素的數量。

```python
fruits = ('apple', 'orange', 'mango')

print(len(fruits))  ## 輸出 3
```

### 重新指派元組

由於元組是不可變的，我們不能更改元組的某個元素。因此，`fruits[0] = 'lemon'` 將產生錯誤，因為我們試圖更改 `fruits` 中索引 `0` 的元素。但是我們可以重新指派整個元組（替換整個元組）。

```python
my_tuple = ('apple', 'orange', 'mango')

print(my_tuple)  ## 輸出 ('apple', 'orange', 'mango')

# 重新指派 my_tuple
my_tuple = (1, 2, 3)

print(my_tuple)  ## 輸出 (1, 2, 3)
```

### 刪除元組

我們可以使用關鍵字 `del` 完全刪除元組。

```python
fruits = ('apple', 'orange', 'mango')

print(fruits)  ## 輸出 ('apple', 'orange', 'mango')

# 刪除 fruits
del fruits 

print(fruits)  ## 產生錯誤，因為元組 fruits 已不存在
```

### 挑戰
讓我們用元組來嘗試剛剛我們用列表做的練習。

以下是水果的列表。打印出水果列表，並對每種水果詢問用戶是否喜歡它。如果喜歡，就保留它。如果不喜歡，就將其移除列表。接著，詢問用戶是否有遺漏的水果並將其加入列表。最後打印出用戶喜歡的水果數量。

```python
fruits = ['orange', 'kiwi', 'banana', 'apple', 'mango', 'lemon']
```

<iframe title="Challenge - Codebunga" src="https://codebunga.com/embed/f25jnzdr" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>