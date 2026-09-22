---
title: "Loops"
draft: false
weight: 2
---

## Python 的迴圈

如果您想要多次重複執行某個任務，Python 提供了一種使用迴圈輕鬆完成的方法。  
Python 中有兩種基本的迴圈類型：`for` 迴圈和 `while` 迴圈。

### For 迴圈

For 迴圈會遍歷一個序列。假設您想要重複一個簡單的任務 5 次，您可以這樣做。

以下的 for 迴圈依序迭代列表 [1,2,3,4,5] 中的每個數字，並將其指定給變數 x，然後執行 for 迴圈內的程式碼。

```python
for x in [1,2,3,4,5]:    
    print("我們現在在第", x, "次迴圈")
```

<iframe title="For loops - Codebunga" src="https://codebunga.com/embed/2xipqayk" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

如果您想要重複一個任務 10 次呢？100 次？1000 次呢？

要手動撰寫一個包含 1000 個數字 [1,2,3,4,5,6,..........,998,999,1000] 的列表將十分困難。不過，有一個函數可以幫助您建立這樣的列表。

以下是一個使用 `range` 函數創建列表的範例：

以下程式碼創建了一個從 1 到 10 的列表：
```
range(1,11)
```
現在，將上述範例中的列表 [1,2,3,4,5] 替換為這個 `range` 函數試試看吧！

For 迴圈中的列表不一定只包含數字，它也可以是其他類型的內容！以下是另一個範例：

```python
fruits = ["apple", "banana", "orange"]

for x in fruits:
    print(x)
```

<iframe title="For loops - Codebunga 2" src="https://codebunga.com/embed/2xipqayk" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

### While 迴圈

While 迴圈與 for 迴圈類似，但它是基於某一條件為真時重複執行程式碼。  
例如，讓我們建立一個 while 迴圈來重複 5 次。

```python
count = 0

while count < 5:
    print("目前的計數是", count)
    count += 1  #這與 count = count + 1 相同
```

<iframe title="While loops - Codebunga" src="https://codebunga.com/embed/2xipqayk" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

正如您所見，while 迴圈下方的所有程式碼，會在變數 count 小於 5 時執行。

要小心！確保條件在某個時候會變為 `False`，否則迴圈將無限執行下去。

### Break 聲明

前面提到，for 迴圈與 while 迴圈會重複執行，直到到達序列的結尾或是某個條件成立時為止。

但是，也有另一種方式可以在到達列表結尾或條件成立之前停止執行迴圈。

這可以通過 `break` 語句來實現。它讓您可以在 for 迴圈或 while 迴圈中提前跳出迴圈。

以下是一個在 while 迴圈中使用 `break` 的範例：

```python
count = 0

while True:  #這將使 while 迴圈永遠運行！除非在迴圈的某處有一個 break 語句
    print("計數是", count)
    
    if (count == 10): #當 count 等於 10 時，退出 while 迴圈
        print("跳出迴圈！")
        break
    
    count += 1  # 這相當於 count = count + 1
```

<iframe title="Break statements - Codebunga" src="https://codebunga.com/embed/2xipqayk" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

### 挑戰題

1. 給定一個食物列表，編寫一個程式來輸出「我喜歡 [食物名稱]」，  
   除非它是使用者最不喜歡的食物（需在程式開始時詢問），跳過顯示。

```python
foodList = ["apples", "ice cream", "pizza", "bananas", "carrots", "squash", "cucumbers", "sandwich", "oatmeal", "cookies", "cake", "spinach", "kale"]
```

2. 給定一個大型列表（如下所示），編寫一個能從此列表中找到特定數字的程式。

```python
numList = [69, 430, 363, 80, 166, 476, 250, 38, 84, 405, 41, 302, 480, 57, 155, 17, 350, 87, 313, 36, 191, 367, 163, 167, 185, 93, 131, 314, 444, 452, 47, 457, 28, 21, 405, 350, 241, 121, 411, 152, 244, 207, 199, 371, 193, 4, 286, 482, 496, 283, 23, 466, 8, 84, 47, 231, 112, 329, 328, 85, 208, 161, 42, 251, 277, 207, 496, 3, 137, 138, 436, 447, 442, 313, 479, 464, 191, 19, 78, 333, 480,