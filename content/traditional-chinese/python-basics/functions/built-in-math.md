---
title: "內建數學函式"
date: 2019-07-28T11:45:38-07:00
draft: false
weight: 3
---

Python 提供了許多重要的內建函式，我們不需要自行定義這些函式即可使用。在本節中，我們將學習一些內建的數學函式，這些函式允許你對數字執行數學運算。

`max()` 和 `min()` 函式分別返回列表中的最大值與最小值：

```python
x = min(20, 10, 50, 25)		#x = 10
print(x)
y = max(20, 10, 50, 25)		#y = 50
print(y)
```

`abs()` 函式可返回數字的絕對值（正數值）：

```python
x = abs(-34)		         #x = 34
print(x)
y = abs(90)			         #y = 90
print(y)
```

`pow(a, b)` 函式返回 `a` 的 `b` 次方的值 (a<sup>b</sup>)：

```python
x = pow(3,4)		        #x = 81
print(x)
```

### 挑戰

讓我們把這些功能結合在一起吧！試試看撰寫一個程式，讓使用者輸入 5 個數字，並輸出這些數字中最小值的最大次方。例如，給定數字 2, 7, 4, 11, 9，程式會返回 2<sup>11</sup>。如果你能將程式拆解為函式，將獲得額外加分！

<iframe title="挑戰 - Codebunga" src="https://codebunga.com/embed/3sw68wix" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>