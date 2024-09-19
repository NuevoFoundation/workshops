---
title: "控制結構"
description: "介紹 C# 中的 if-else、for 和 while 迴圈。"
date: 2024-09-16T00:00:00Z
weight: 6
---

## 做出決定：If 語句

Patrick 🐥 是一隻非常有禮貌的鴨子，喜歡根據當前時間與每個遇到的人打招呼，說“早上好”、“下午好”或“晚安”。

![太陽快速升起在山上](https://media.giphy.com/media/hpWrLS1RDBd5pwkgjy/giphy.gif)
<p style="text-align: center;">(圖片來源：National Geographic: giphy.com/natgeochannel)</p>

如我們之前所學，我們可以如下打印這些語句：

```C#
Console.WriteLine("Good Morning");   // 在 0:00 - 11:59 之間說
Console.WriteLine("Good Afternoon"); // 在 12:00 - 19:59 之間說
Console.WriteLine("Good Night");     // 在 20:00 - 23:59 之間說
```

然而，我們也知道 Patrick 🐥 應該根據當前時間只選擇說其中的一句。

換句話說，我們需要編寫決定根據情況條件（有條件地）打印什麼的代碼。

在 C# 中，我們使用 **if 語句** 或 **if...else 語句** 來做出決定。請閱讀下面的說明：

{{% notice note %}}
### If 語句

```
if(boolean expression){
    Action(s) to Take
}
```

**If 語句** 遵循如上結構。只有當布林表達式為 `true` 時，塊中的動作（語句）才會執行。否則，如果布林表達式為 `false`，程式將跳過該塊後的語句。

### If-Else 語句

```
if(boolean expression){
    Action(s) to Take A
}else{
    Action(s) to Take B
}
```

**If-Else 語句** 遵循如上結構。如果布林表達式為 `true`，程式將執行 `if` 塊內的 `Action(s) to Take A`。否則，程式僅執行 `else` 塊內的 `Action(s) to Take B`。

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

上面的代碼將打印語句 `I like Music`，因為布林表達式 `likeMusic == true` 為 true。
{{% /notice %}}

讓我們回顧上面的問候範例，並為 Patrick 做出決定是說“早上好”、“下午好”或“晚安”。

Patrick 應該在 0:00 - 11:59 之間說“早上好”，在 12:00 - 19:59 之間說“下午好”，在 20:00 - 23:59 之間說“晚安”。

1. 我們有一個變數 `currentHour` 存儲當前小時。
2. 填寫正確的 `boolean expression A` 和 `boolean expression B` 以完成程式。
3. 通過將變數 `currentHour` 設為 0 到 23 之間的數字來測試您的結果：

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/T6AUdh" frameborder="0"></iframe>

## 再次重複：For 迴圈、While 迴圈

在數學課上，Patrick 🐥 的老師要求班級解決一個數學挑戰，他可能需要一些幫助。

老師要求他們找出 **1, 2, 3, ..., 100** 的總和。這就是 **1 + 2 + 3 + 4 ... + 99 + 100** 是多少？

雖然我們可以將其輸入計算器，但這需要一段時間。幸運的是，在 C# 中，您可以使用 **for 迴圈** 或