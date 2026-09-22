---
title: "從控制台讀取輸入"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 6
prereq: "Python 基礎：變數"
difficulties: ["中級"]
---

現在我們已經了解了有關變數的基礎知識，我們可以向用戶請求輸入。使用以下這行程式碼，可以讓我們的程式等待用戶在控制台輸入內容。然後，計算機會將在控制台中輸入的內容儲存到名為 **value** 的變數中。

```python
value = input()
```

以下是使用 `input()` 接收用戶輸入的範例：

```python
print("你叫什麼名字？")
value = input()
print("你好 " + value + "!")
```

試試看這個吧！當你按下執行時，你會注意到下面的圖像尚未出現在控制台上。

![控制台結束符號的截圖](../../img/end_symbol.png "控制台結束符號的圖像")

![控制台等待用戶輸入時的截圖](../../img/console_read_waiting.png "控制台等待用戶輸入時的圖像")

這是因為程式正在等待你輸入內容！在右側的控制台中輸入你的名字或是 'Nuvi'，按下 Enter，並確認它是否正確地打印出來。

![用戶輸入完成後控制台的截圖](../../img/console_read_input.png "程式讀取用戶輸入後控制台的狀態圖像")

{{% notice note %}}

即使我們輸入一個數字，比如 `8`，變數 value 也會包含字串 `"8"`。嘗試對輸入變數進行數學運算時要小心！

{{% /notice %}}

## 挑戰

讓我們試著撰寫一個程式，它首先在控制台打印出以下兩行文字：

    Welcome!
    How can I help you today?

隨後，控制台會等待用戶輸入。在用戶於控制台中輸入內容並按下 _Enter_ 鍵後，計算機會打印出以下內容：

    You asked: [input]?
    I don’t know the answer to [input]. Goodbye!

`[input]` 應被替換為用戶在控制台中輸入的內容。例如，如果你想問 "我幾歲？"，計算機將打印出它不知道這個問題的答案。

{{% notice tip %}}

這與我們之前一起講解的範例非常相似。試著在之前的基礎上進行一些小的修改。

{{% /notice %}}

<iframe title="挑戰 - Codebunga" src="https://codebunga.com/embed/wamnbqtn" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>