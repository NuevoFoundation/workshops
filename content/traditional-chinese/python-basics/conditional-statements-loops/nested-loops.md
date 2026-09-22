---
title: "巢狀迴圈"
description: "迴圈的進階應用"
date: 2020-07-16T00:00:00Z
weight: 4
---


### 巢狀迴圈
*巢狀迴圈* 是基於上個練習中我們學到的 `for` 迴圈和 `while` 迴圈的進一步應用。在開始之前，您可能會想先回顧 <a href="../loops/" target="blank">For-loop 和 While-loop</a> 頁面。

在本節中，我們將學習如何在一個迴圈中使用另一個迴圈，這被稱為 *巢狀迴圈*。
<hr/>

### 巢狀 while 迴圈
```python
# 這是巢狀 while 迴圈的格式
while expressionA:
    while expressionB:
        statement(B)
    statement(A)
```
在上述 `while` 迴圈中，當 `expressionA` 為 `False` 時，我們會跳過整段程式碼塊。當 `expressionA` 為 `True` 時，我們會進入內層的 `while` 迴圈並檢查 `expressionB`。如果 `expressionB` 為 `True`，則執行 `statement(B)`。如果 `expressionB` 為 `False`，我們會跳過內層的 `while` 迴圈，直接執行 `statement(A)`。

如果 `expressionA` 為 `False`，則任何語句都不會被執行；只有當 `expressionA` 和 `expressionB` 同時為 `True` 時，`statement(A)` 和 `statement(B)` 才會被執行。

讓我們看一個巢狀 while 迴圈的例子：
 ```python
 # 這是巢狀 while 迴圈的例子：
 x = 0
 y = 0
 # 以下是外層迴圈
 while x < 3:
     # 如果 "x < 3" 為 True，則輸出
     print("Go through outer while loop, x is", x, "y is", y, sep = " ")
     # 以下是內層迴圈
     while y < 5:
         # 如果 "y < 5" 為 True，則輸出
         print("Go through inner while loop, x is", x, "y is", y, sep = " ")
         y += 1
     # 以下程式碼在完成每一次內層的迴圈後執行。
     x += 1
     y = 0
 ```
以下是上述範例的輸出：

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

#### 問題
您能試著找出 `x` 和 `y` 的值如何變化並解釋原因嗎？

(**提示**：我們分別進入外層迴圈和內層迴圈多少次？)

<hr/>

### 挑戰一
試著改變巢狀 while 迴圈中的整數，並預測輸出結果。接著執行程式並觀察輸出結果，它們是否符合您的預測？

<iframe title="挑戰一 - Codebunga" src="https://codebunga.com/embed/wgwzwt4z" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
<br/><br/>
<hr/>

### 巢狀 for 迴圈

```python
# 這是巢狀 for 迴圈的格式
for variableA in rangeA:
   for variableB in rangeB:
      statements(B)
   statements(A)
```
在上述 `for` 迴圈中，當 `variableA` 不在 `rangeA` 中時，我們會跳過整段程式碼塊。當 `variableA` 在 `rangeA` 中時，我們會進入內層的 `for` 迴圈。如果 `variableB` 在 `rangeB` 中，`statement(B)` 將被執行。如果 `variableB` 不在 `rangeB` 中，我們會跳過內層的 `for` 迴圈並回到外層的迴圈。

如果 `variableA` 不在 `rangeA` 中，則所有語句都不會被執行；只有當 `variableA` 在 `rangeA` 和 `variableB` 在 `rangeB` 中時，`statement(A)` 和 `statement(B)` 才會被執行。

讓我們看一個例子。

```python
# 這是巢狀 for 迴圈的例子
# 以下是外層迴圈
for n in range(0, 3):
    # 以下是內層迴圈
    for m in range(0, 3):
        # 如果 m 在 range(0, 3)，則輸出
        print("(", n, ",", m, ")", end = " ")
    # 如果 n 在 range(0, 3)，則輸出
    print("")
```
以下是上述範例的輸出：

```output
( 0 , 0 ) ( 0 , 1 ) ( 0 , 2 ) 
( 1 , 0 ) ( 1 , 1 ) ( 1 , 2 ) 
( 2 ,