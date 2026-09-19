```markdown
---
title: "控制結構"
description: "介紹 C# 中的 if-else, for 和 while 迴圈。"
date: 2024-09-16T00:00:00Z
weight: 6
---

## 做出決策：If-語句

Patrick 🐥 是一隻非常有禮貌的鴨子，他喜歡根據當前時間向遇到的每個人說「早安」、「午安」或是「晚安」。

![太陽快速升起在山峰上](https://media.giphy.com/media/hpWrLS1RDBd5pwkgjy/giphy.gif)
<p style="text-align: center;">(圖片來源：National Geographic: giphy.com/natgeochannel)</p>

如同我們之前學過的，我們可以用以下方式輸出這些問候語：

```C#
Console.WriteLine("早安");   // 在 0:00 - 11:59 之間說出
Console.WriteLine("午安");   // 在 12:00 - 19:59 之間說出
Console.WriteLine("晚安");   // 在 20:00 - 23:59 之間說出
```

然而，我們也知道 Patrick 🐥 應該根據當前的時間來決定說出哪一句話。

換句話說，我們需要撰寫程式碼，以根據當前情況的條件來決定要輸出什麼內容。

在 C# 中，我們可以透過使用 **if 語句** 或 **if...else 語句** 來做出決定。請閱讀以下筆記：

{{% notice note %}}
### If 語句

```
if(布林表達式){
    執行的動作
}
```

**If 語句** 遵循如上所述的結構。只有當布林表達式為 `true` 時，程式才會執行區塊內的動作。如果布林表達式為 `false`，程式將跳過該區塊並執行下一段語句。

### If-Else 語句

```
if(布林表達式){
    執行的動作 A
}else{
    執行的動作 B
}
```

**If-Else 語句** 遵循如上所述的結構。如果布林表達式為 `true`，程式將執行 `if` 區塊中的動作 A。否則，程式只會執行 `else` 區塊中的動作 B。

### 範例

```C#
    bool likeMusic = true;
    if(likeMusic == true) 
    {
        Console.WriteLine("我喜歡音樂");
    } 
    else 
    {
        Console.WriteLine("我不喜歡音樂");
    }   
```

上述程式碼會輸出字串 `我喜歡音樂`，因為布林表達式 `likeMusic == true` 是 true。
{{% /notice %}}

讓我們回到上面的問候語範例，為 Patrick 做出決策，決定是否說出「早安」、「午安」或「晚安」。

Patrick 應該在 0:00 - 11:59 之間說「早安」，在 12:00 - 19:59 之間說「午安」，以及在 20:00 - 23:59 之間說「晚安」。

1. 我們有一個儲存當前時間的變數 `currentHour`。 
2. 填寫正確的 `布林表達式 A` 和 `布林表達式 B` 來完成程式。
3. 通過將變數 `currentHour` 指定為從 0 到 23 的數字來測試結果：

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/T6AUdh" title="互動式 C# 條件語句練習" frameborder="0"></iframe>

## 重複執行：For 迴圈、While 迴圈

在數學課上，Patrick 🐥 的老師給全班學生出了一道數學挑戰，他可能需要一些幫助。

老師要求他們找出 **1, 2, 3, ..., 100 的總和**。也就是 **1 + 2 + 3 + 4 ... + 99 + 100** 是多少？

雖然我們可以用計算器計算，但這樣會花很多時間。幸運的是，在 C# 中，通過使用 **for 迴圈** 或 **while 迴圈**，你可以輕鬆用三行程式碼計算出來。

{{% notice note %}}
**For 迴圈** 和 **While 迴圈** 是 C# 中的控制結構，允許你重複執行程式碼區塊。

### While 迴圈

```
while(布林表達式){
    執行的動作
}
```

只要 `布林表達式` 為 `true`，`while` 區塊中的動作就會被執行。

以下是一個範例：此程式將列印 1 到 10：

```C#
int number = 1;
while(number <= 10){
    Console.WriteLine(number);
    number = number + 1;        // 每次將 number 增加 1
}
```

在上述的 while 迴圈中，程式將列印出 `number` 的值並增加 `number` 的值。只要 `number <= 10`，就會執行這個步驟，當 `number` 等於 11 時，迴圈終止。

**注意**：對於 `while` 迴圈，必須記得更新條件變數，否則可能會引入無窮迴圈。

### For 迴圈

```
for(初始化; 終止條件; 更新語句){
    執行的動作
}
```

在 `for 迴圈` 中，條件區塊分為三部分：`初始化`、`終止條件` 和 `更新語句`。

1. 執行 for 迴圈時，程式將執行 `初始化` 部分。例如：`int number = 1`。
2. 接著，程式將檢查 `終止條件`，例如：`number <= 10`。
3. 如果條件為 `true`：
    1. 執行 `