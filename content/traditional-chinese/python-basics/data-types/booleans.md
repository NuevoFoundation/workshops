---
title: "Booleans"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 3
---

布林值（Booleans）是 <font color="#005a9c">True</font> 或 <font color="#005a9c">False</font> 的陳述句。不同於字串或數字，<b>布林值</b>儲存的是真理的陳述：我所說的是正確的還是錯誤的？

例如，如果我說「你是一個機器人」，布林值可以儲存這個陳述是對還是錯。在這個例子裡，因為你不是機器人（希望如此！），所以會儲存 <font color="#005a9c">False</font>。

以下這些關於你的問題，布林值的答案是什麼？

1. 我是一個人。_______  
2. 我有25根手指。_______  
3. 我喜歡餅乾。_______  
4. 我最喜歡的顏色是藍色。_______  

布林值運算的最常見形式是比較運算，例如小於或大於。在 Python 中，它們的表示方法如下表所示：

| 運算符 | 描述               | 運算符 | 描述                   |
| ------ | ------------------ | ------ | --------------------- |
| `<`    | 小於               | `>`    | 大於                  |
| `<=`   | 小於或等於          | `>=`   | 大於或等於             |
| `==`   | 等於               | `!=`   | 不等於                |

### 挑戰 1
一如既往，使用 `print` 輸出以下結果：

```python
print(5 + 8 < 10)
print(((3 + 5) * 6) == (65 - 17))
```

第一個陳述應該回傳 <font color="#005a9c">False</font>。第二個應該回傳 <font color="#005a9c">True</font>。

![alt text](../../img/booleans.png "顯示上述範例的圖片，其中第一個為False，第二個為True") 

### 挑戰 2
嘗試使用 `print` 輸出以下表達式的答案。如果有任何陳述的結果讓你不明白，請記得尋求幫助！ 

- 54 < (10 + 32)
- (37 / 5) != 7
- "Hello" + "World" == "Hello World"
- <font color="#005a9c">False</font> == <font color="#005a9c">False</font>

### 挑戰 3 
嘗試創造自己的布林表達式！ 

### 趣聞：使用 AND 和 OR 運算符連接布林值

你可以使用 AND 和 OR 運算符連接布林表達式。以下是描述當我們連接布林值時會發生什麼的圖表：

| 表達式                        | 結果                      |
|-------------------------------|---------------------------|
| <font color="#005a9c">True</font> and <font color="#005a9c">True</font>  | <font color="#005a9c">True</font>  |
| <font color="#005a9c">True</font>  and <font color="#005a9c">False</font> | <font color="#005a9c">False</font> |
| <font color="#005a9c">False</font> and <font color="#005a9c">True</font> | <font color="#005a9c">False</font> |
| <font color="#005a9c">False</font> and <font color="#005a9c">False</font> | <font color="#005a9c">False</font> |
| <font color="#005a9c">True</font>  or <font color="#005a9c">True</font>  | <font color="#005a9c">True</font>  |
| <font color="#005a9c">True</font>  or <font color="#005a9c">False</font> | <font color="#005a9c">True</font>  |
| <font color="#005a9c">False</font> or <font color="#005a9c">True</font>  | <font color="#005a9c">True</font>  |
| <font color="#005a9c">False</font>  or <font color="#005a9c">False</font> | <font color="#005a9c">False</font> |

總結來說，AND 需要兩個布林表達式都為真，而 OR 只需要其中一個布林表達式為真。以下是一些額外的範例：

- (5 < 8) and (9 != 10) 會產生 <font color="#005a9c">True</font>，因為 5 小於 8 且 9 不等於 10。
- (8 <= 2) or ("h" + "e" == "he") 會產生 <font color="#005a9c">True</font>，因為即使 8 不小於或等於 2，「h」+「e」結果為「he」。
- (6 != 2 * 3) or (8 < 2 * 4) 會產生 <font color="#005a9c">False</font>，因為 6 等於 2*3，且 8 也並不小於 2*4。

#### 你認為以下表達式會產生什麼結果？

- (11-2 < 10) and (7+3 > 10)  
- (<font color="#005a9c">True</font> or 3 < 1) and (<font color="#005a9c">False</font> or 3>1)

<iframe title="你認為以下表達式會產生什麼結果？ - Codebunga" src="https://codebunga.com/embed/c2vqd36f" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>