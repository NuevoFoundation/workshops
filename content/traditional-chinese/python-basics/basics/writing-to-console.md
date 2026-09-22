```markdown
---
title: "寫入控制台（Print 語句）"
date: 2022-09-19T14:45:38-07:00
draft: false
weight: 2
---

<p style="text-align: center;"><iframe title="寫入控制台（Print 語句） - YouTube 視頻" width="560" height="315" src="https://www.youtube.com/embed/NrbQCjlzhYc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## 讓你的程式與你互動！

**Print** 語句用於向控制台輸出內容。使用 `print("Hello World")` 可以在輸出螢幕上打印出 *Hello World*。稍後我們會學到，`print` 是一個函數，我們利用它來執行打印工作。不管你傳入 `print` 函數什麼內容，那些內容都會顯示在螢幕上。  
現在，讓我們先從一個簡單的 `print` 語句開始。

我們在接下來的課程中會經常使用打印語句，所以在學習下一個概念之前，請確保你已經理解了這部分內容！

### 挑戰 1
首先，在你的 Codebunga 的 main.py 中輸入以下文字，然後點擊執行（Run）。

```python
print("Hello, World!")
```

觀看你的控制台在右側屏幕上顯示 "Hello, World!" 這段訊息！`print` 告訴電腦把括號 `()` 裡的句子打印到控制台視窗，也就是右側的螢幕上。

![alt text](../../img/print.png "python 中的 hello world!")

<iframe title="挑戰 1 - Codebunga" src="https://codebunga.com/embed/fcrtud9r" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

{{% notice tip %}}
### 使用 `" "` 與打印內容

你是否注意到 Hello, World! 被 `" "` 包圍了？你是否試過刪除 `"`。結果出現了錯誤？但如果你試著使用 `print(123)`，你會發現它可以正常執行，沒有報錯。這是因為文字（在程式語言中稱為字串，Strings）需要用引號括起來來指定它是文字內容，而數字則不需要。

回到上方，試著打印不同的內容看看吧！
{{% /notice %}}

### 挑戰 2

1. 不要移除引號，試著將 `"Hello, World"` 改成另一句話。（例如 – `"My name is Nuvi!"`）按下 **執行（run）** 看看是否有什麼變化。
2. 在目前行的下方再新增一個 `print`，打印第二句文字，讓它顯示在第一句的下方。
3. 按下 **執行（run）** 看是否有兩句文字被輸出。

<iframe title="挑戰 2 - Codebunga" src="https://codebunga.com/embed/fcrtud9r" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

我們將在接下來的課程中多次使用打印，請務必在繼續學習前充分理解！

{{% notice warning %}}

## 幫助！我看到很多紅色文字！

如果你看到了紅色文字，表示你遇到了一些錯誤！請尋求幫助。特別要注意以下幾點，這些是使用 Python 編碼時常見的問題：

1. 確保你想打印的句子是 **用引號括起來的**，並且句子是位於 **括號內部** 的。

![示例：錯誤的 print 語句（未使用引號 - print(Hello, World!)）與正確的寫法（使用了引號 - print('Hello, World!')）](../../img/redLine.png)

2. 在 Python 中，空格很重要。確保每一行的開頭或結尾沒有多餘的空格或縮排。否則，Python 無法正確讀取程式碼。例如，不要在 `print` 前面加任何空格，也不要在 `print("Hello, World!")` 的最後括號後面加空格。

{{% /notice %}}
```