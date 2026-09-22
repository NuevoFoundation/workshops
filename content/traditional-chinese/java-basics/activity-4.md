---
title: "控制結構"
description: "介紹 Java 中的 if-else, for, 和 while 迴圈。"
date: 2021-10-13T00:00:00Z
weight: 5
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/X8HzOuCel9A" title="Java 控制結構教學影片" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## 做出決定：If 判斷式

Patrick 🐥 是一隻非常有禮貌的鴨子，會根據當前時間向他遇到的人說「早安」、「午安」或「晚安」。

![太陽快速升起於山後](https://media.giphy.com/media/hpWrLS1RDBd5pwkgjy/giphy.gif)
<p style="text-align: center;">(圖片來源：National Geographic: giphy.com/natgeochannel)</p>

如我們之前學過的，我們可以用以下程式碼來印出這些問候語：

```java
System.out.println("早安");   // 在 0:00 - 11:59 時說早安
System.out.println("午安"); // 在 12:00 - 19:59 時說午安
System.out.println("晚安");     // 在 20:00 - 23:59 時說晚安
```

然而，我們知道 Patrick 🐥 只應根據當前時間選擇一個句子來說。

換言之，我們需要撰寫可以根據情況條件來進行決策的程式碼。

在 Java 中，我們可以使用 **if 判斷式** 或 **if...else 判斷式** 來進行決策。請閱讀以下筆記：

{{% notice note %}}
### If 判斷式

```
if(布林表達式){
    要執行的動作
}
```

**If 判斷式** 是按照以上結構執行的。只有當布林表達式的值為 `true` 時，程式才會執行 if 區塊中的動作（陳述）。否則，若布林表達式為 `false`，程式會跳到區塊後面的語句。
### If-Else 判斷式

```
if(布林表達式){
    要執行的動作 A
}else{
    要執行的動作 B
}
```

**If-Else 判斷式** 是按照以上結構執行的。如果布林表達式為 `true`，程式將執行 if 區塊內的 "動作 A"。否則，程式僅執行 else 區塊內的 "動作 B"。

### 範例

```java
boolean likeMusic = true;
if(likeMusic == true) {
    System.out.println("我喜歡音樂");
} else {
    System.out.println("我不喜歡音樂");
}
```

上述程式碼會印出「我喜歡音樂」，因為布林表達式 `likeMusic == true` 為真。
{{% /notice %}}

現在，讓我們回到上面的問候範例，為 Patrick 做出決策，以判斷是否應說「早安」、「午安」或「晚安」。

Patrick 應在 0:00 - 11:59 時說「早安」，12:00 - 19:59 時說「午安」，20:00 - 23:59 時說「晚安」。

1. 我們有一個變數 `currentHour`，儲存當前時間的小時。
2. 填寫正確的 `布林表達式 A` 和 `布林表達式 B` 來完成程式。
3. 透過將變數 `currentHour` 指派為 0 到 23 的數字來測試結果：

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaBasicsIfStatement" target="_blank">啟動 Replit</a>

## 重複執行：For 迴圈、While 迴圈

在數學課上，Patrick 🐥 的老師給出了班上的一個數學挑戰，而他可能需要一些幫助。

老師要求他們找到 **1, 2, 3, ...., 100 的總和**。換句話說，就是 **1 + 2 + 3 + 4 ... + 99 + 100**？

雖然我們可以用計算機計算這個，但是會花一些時間。幸運的是，在 Java 中，只需要 3 行程式碼，就能藉助 **for 迴圈** 或 **while 迴圈** 輕鬆完成這個計算。

{{% notice note %}}
**For 迴圈** 和 **While 迴圈** 是 Java 中的控制結構，允許你多次執行程式區塊。

### While 迴圈

```
while(布林表達式){
    要執行的動作
}
```

只要 while 區塊中的 `布林表達式` 為 `true`，就會執行區塊內的動作。

以下是一個印出 1 到 10 的範例：

```java
int number = 1;
while(number <= 10){
    System.out.println(number);
    number = number + 1;        // 將 number 增加 1
}
```

在上面的 while 迴圈中，只要條件 `number <= 10` 為真，程式就會一直印出 `number` 的值，並逐次增加 `number` 的數值。該迴圈在 `number` 等於 11 時終止。

**注意：** 使用 `while` 迴圈時，必須記得增量條件變數，否則可能會導致程式進入無限迴圈。

### For 迴圈

```
for(初始化; 終止條件; 更新語句){
    要執行的動作
}
```

`for` 迴圈的條件區塊內有三個部分：`初始化`、`終止條件` 和 `更新語句`。

1. 執行 `for` 迴圈時，程式會先執行「初始化」部分，例如 `int number = 1`。
2. 然後檢