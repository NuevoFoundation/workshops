---
title: "Else-if 條件"
draft: false
weight: 2
---

在上一個練習中，我們學習了基本的 if-else 條件。如果您需要快速複習，可以查看 <a href="../conditional-statements/">條件語句</a>。

在本節中，我們將進一步介紹一個稱為 "elif" 的新條件。

### Elif 條件

**Elif 關鍵字** 代表 "else-if" 條件。一個現實世界的例子是：如果我非常餓，我會吃一塊蛋糕；如果我只是有點餓，我會吃一個蘋果；否則，我什麼都不會吃。您可以看到，當第一個條件不成立時，它用於嘗試另一個條件。

```python
# 這是基本的 elif 語法
if expression:
    statement(s)
elif expression:
    statement(s)
else:
    statement(s)
```

#### 讓我們看看一個例子
```python
# 這是一個例子
if 1 > 3:
    print('1>3')
elif 1 == 3:
    print('1=3')
else:
    print('1<3')
```
由於我們可以看到第一個語句 "`1` 大於 `3`" 是錯誤的，它的結果為 `false`。因此，`if` 語句內的程式碼不會執行。然後我們會評估 `elif` 語句，"`1` 等於 `3`" 的結果同樣為 `false`。`elif` 內的程式碼也不會被執行。因此，`else` 中的內容將被列印出來。

### 注意： `elif` 與 `if` 不同  
#### 讓我們看看兩個例子
#### 範例 A
```python
# 這是範例 A，兩個 if 語句的例子
if 1 == 1:
    print('1=1')
if 3 == 3:
    print('3=3')
else:
    print('wrong')
```
範例 A 的輸出為：

```
1 = 1
3 = 3
```

#### 範例 B
```python
# 這是 elif 語句的例子
if 1 == 1:
    print('1=1')
elif 3 == 3:
    print('3=3')
else:
    print('wrong')
```
範例 B 的輸出為：

```
1 = 1
```

在範例 A 中，我們將評估第一個 `if` 語句（`1==1`）為 `true`。因此第一個 `if` 語句內的程式碼會被執行。我們接著評估第二個 `if` 語句（`3==3`）為 `true`，因此第二個 `if` 語句內的程式碼也會被執行。

在範例 B 中，我們將評估第一個 `if` 語句（`1==1`）為 `true`。由於第一個 `if` 條件已經成立，因此後續的 `elif` 和 `else` 將不再被評估。

#### 挑戰
您能利用在 Python 基礎 - 布林值 中學到的知識，創建您自己的 `elif` 例子嗎？
您可能需要回顧一下布林值知識來完成此挑戰。
- <a href="../../data-types/booleans/">布林值</a>
<br/><br/>

<iframe title="挑戰 - Codebunga" src="https://codebunga.com/embed/7e6i4vm8" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>