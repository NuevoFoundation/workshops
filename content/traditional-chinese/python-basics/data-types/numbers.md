```markdown
---
title: "Numbers"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
---

電腦也可以進行數學運算。使用 `print()` 來列印出數學運算的結果。不需要使用引號包裹數字！與字串不同的是，您可以對數字進行數學運算。

```python
print(7-3)  #列印 4
print(5 * -6 + 7)   #列印 -23
print(24 * (8-3) / 6)   #列印 20.0
```

{{% notice note %}}
在 Python 3 中，`/` 運算符始終返回小數結果。若要進行除法並獲得整數（丟棄餘數），請使用 `//` 代替。

例如：

`15 / 4` 得到 `3.75`
`15 // 4` 得到 `3`

{{% /notice %}}

您也可以試著使用數學符號來創建自己的數學運算公式！

| 符號             | 用途           | 符號         | 用途           |
| ---------------- | ------------- | ----------- | ------------- |
| `+`             | 加法           | `*`          | 乘法           | 
| `-`             | 減法           | `/`          | 除法           | 

### 挑戰 1

讓我們用 Python 嘗試解答以下問題。試著列印出以下的結果(<b>請確保您沒有遺漏任何括號</b>)：

- 2 - 19
- (3 + 5) * 6
- (13 + 5 * 8) / (6 - (3 + 7))

### 挑戰 2

您能列印出以下的句子嗎？ `"527 times 199 is: __"`

您需填入空格部分，把 `(527 * 199)` 的答案填進去。如果您希望將字串和數字一起列印出來，必須先將數字轉換為字串。

以下是一個示例：<font color="#005a9c">print</font>(`"Hello, World!"` + str(5))

{{% notice tip %}}

使用 `str(5)` 將數字轉換為字串 `"5"`。將一種型別轉換為另一種型別稱為「型別轉換」。

{{% /notice%}}

{{% notice info %}}

#### 有趣小知識：隨機數

以下是如何列印介於 1（包含）到 10（包含）的隨機數：

 ```python 
 # 此行導入所需的庫
 from random import randint
 # 此行列印介於 1（包含）到 10（包含）的隨機數
 print(randint(1,10))
 ```

想了解更多嗎？可以尋求幫助或在網路上探索！每位程式設計師的最佳朋友是一個搜尋引擎！

特別是試著理解 <font color="#005a9c">from</font> 和 <font color="#005a9c">import</font> 這些詞的含義。我們稍後在專案中會再次提到這些詞。

{{% /notice %}}

<iframe title="Fun Fact: Random Numbers - Codebunga" src="https://codebunga.com/embed/nuthi3gj" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
```