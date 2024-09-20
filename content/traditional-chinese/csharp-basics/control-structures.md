---
title: "控制結構"
description: "介紹 C# 中的 if-else、for 和 while loops。"
date: 2024-09-16T00:00:00Z
weight: 6
---

## 做決策：If-Statement

Patrick 🐥 是一隻非常有禮貌的鴨子，他喜歡根據當前時間向他遇到的每個人打招呼，說「早安」、「午安」或「晚安」。

![太陽快速升起在山峰後面](https://media.giphy.com/media/hpWrLS1RDBd5pwkgjy/giphy.gif)
<p style="text-align: center;">(來源：國家地理 giphy.com/natgeochannel)</p>

如我們之前所學，我們可以這樣打印這些語句：

```C#
Console.WriteLine("Good Morning");   // 在 0:00 - 11:59 之間說
Console.WriteLine("Good Afternoon"); // 在 12:00 - 19:59 之間說
Console.WriteLine("Good Night");     // 在 20:00 - 23:59 之間說
```

然而，我們也知道 Patrick 🐥 應該只根據當前時間說其中一個語句。

換句話說，我們需要編寫程式碼來根據情況條件做出決定該打印什麼（有條件地）。

在 C# 中，我們通過使用**if 語句**或**if...else 語句**來做決策。請閱讀下面的說明：

{{% notice note %}}
### If 語句

```
if(boolean expression){
    Action(s) to Take
}
```

**If 語句**遵循上面的結構。只有當布林表達式為 `true` 時，方塊中的動作（語句）才會被執行。否則，如果布林表達式為 `false`，程式將跳過方塊後的語句。

### If-Else 語句

```
if(boolean expression){
    Action(s) to Take A
}else{
    Action(s) to Take B
}
```

**If-else 語句**遵循上面的結構。如果布林表達式為 `true`，程式將執行 `if` 塊中的 `Action(s) to Take A`。否則，程式僅執行 `else` 塊中的 `Action(s) to Take B`。

### 範例

```C#
    bool likeMusic = true;
    if(likeMusic == true) 
    {
        Console.WriteLine("I like Music");
    } 
    else 
    {
        Console.WriteLine("I don't like Music");
    }   
```

上面的程式碼將打印語句 `I like Music`，因為布林表達式 `likeMusic == true` 是 true。
{{% /notice %}}

讓我們重新訪問上面的問候例子，並替 Patrick 做決策，無論是說「早安」、「午安」還是「晚安」。

Patrick 應該在 0:00 - 11:59 之間說「早安」，在 12:00 - 19:59 之間說「午安」，在 20:00 - 23:59 之間說「晚安」。

1. 我們有一個變數 `currentHour`，它儲存當前小時。
2. 填寫正確的 `boolean expression A` 和 `boolean expression B` 來完成程式。
3. 通過將變數 `currentHour` 設定為 0 到 23 之間的數字來測試結果：

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/T6AUdh" frameborder="0"></iframe>

## 重複：For-Loop, While-Loop

在數學課上，Patrick 的 🐥 老師要求全班解決一個數學挑戰，他可能需要一些幫助。

老師要求他們找出 **1, 2, 3, ...., 100 的總和**。也就是 **1 + 2 + 3 + 4 ... + 99 + 100** 是多少？

雖然我們可以用計算機來計算，但這可能會花一點時間。幸運的是，在 C# 中，你可以使用 **for loop** 或 **while loop** 輕