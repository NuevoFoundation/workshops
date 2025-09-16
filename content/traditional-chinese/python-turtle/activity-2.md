```markdown
---
title: "活動 2 - 使用迴圈簡化程式碼"
date: 2019-07-25T13:24:17-07:00
weight: 4
draft: false
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/kGhMGdqqV-w" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

太好了！你畫了一個正方形。但注意到我們不斷重複寫相同的行嗎？我們不得不重複畫線和左轉的指令 4 次。如果我們可以只給一次指令，然後告訴程式重複 4 次，那不是很好嗎？別擔心，我們可以做到！

為此，我們需要使用迴圈。迴圈會多次運行一組指令。讓我們使用迴圈來創建一個三角形。三角形是一種有三條邊和三個角的形狀。讓我們建造一個邊和角相同的三角形。如果你將 360 度除以需要轉動的次數（對於三角形是 3 次），你會得到你需要轉的角度。

因此，360 度 ÷ 3 次轉動 = 每次轉動 120 度。

這意味著每次完成畫一邊的三角形後，你需要轉動 120 度來準備畫下一邊。通過這樣做三次，你就完成了三角形。

要看到這個過程，這裡是一些畫三角形的範例程式碼：

``` python
for i in range(3):
  turtle.forward(50)
  turtle.left(120)
```

讓我們了解這段程式碼的作用。`for i in range(3):` 這個語句告訴程式在迴圈中運行指令。`range(3)` 設置了迴圈運行的次數（在這種情況下是 3 次）。字母 `i` 被稱為一個 **變數**。它用來記錄我們執行迴圈內容的次數。

{{% notice warning %}}

## 棘手的 Python 語法 - 第 1 部分

**語法** 是我們用來編寫語言以便理解的方式。在英語中，我們有拼寫和語法規則來幫助彼此理解。同樣，Python 語言有語法規則，使計算機能夠理解我們的碼。

首先，注意在 `for` 行的末尾，我們加了一個冒號 (`:`)；這表示下一行將是 `for` 迴圈的一部分。如果你忘了 `:`，計算機會抱怨！

此外，我們在上面範例中的某些代碼行前添加了一個製表符。這個製表符告訴計算機這些語句被認為是 `for` 迴圈的一部分。

看看這對整個代碼有多大的影響，請看下面的代碼。因為我們移除了 `turtle.left(120)` 前的製表符，所以代碼將不再正確運行。現在，我們只重複 `turtle.forward(50)` 三次，得到的是一條直線！

``` python
for i in range(3):
  turtle.forward(50)
turtle.left(120)
```

{{% /notice %}}

現在，從我們提供的範例代碼中稍作修改，使其畫出一個正方形，而不是三角形。你可以回顧一下你在活動 1 中所做的作為提示。

<iframe src="https://trinket.io/embed/python/892913b49a" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
```