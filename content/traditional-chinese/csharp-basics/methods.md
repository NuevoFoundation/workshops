```markdown
---
title: "Methods"
description: "Introduce methods in C#."
date: 2024-09-16T00:00:00Z
weight: 7
---

## 什麼是方法？

到目前為止，我們學會了如何將數據存儲在變量中、打印數據和句子，以及使用 `if` 語句、`for` 循環和 `while` 循環進行決策。

從上一次的練習中，我們知道以下代碼塊計算從 1 到 100 的總和：

```C#
int total = 0;
int num = 1;
while(num <= 100){
    total = total + num;
    num = num + 1;
}
Console.WriteLine("Sum: " + total);
```

但是如果我們想計算從 1 到 77 的總和呢？如何在不重寫整個代碼塊的情況下做到這一點？

我們想在代碼中創建一個 ✨ 魔法盒 ✨，無論我們想要計算哪兩個數字的總和，它都能為我們進行計算！
<img src="../images/method.png" height="250" alt="Num 1 和 Num 2 指向一個帶有魔法盒文字的圓圈，圓圈外有一條箭頭指向 Num 1 到 Num 2 的總和"/> 

在 C# 中，**方法** 就像是一個執行特定任務的魔法盒，通過運行一個可以使用用戶輸入的代碼塊來完成。

方法有兩個部分：簽名和主體：

{{% notice note %}}
### 方法簽名

要定義一個方法，我們首先需要寫出其<b>方法簽名</b>。簽名頭部有四個主要部分：

```
access_specifier return_type method_name(list_of_parameters)
```

**部分名稱** | **描述** | **示例或可能的選項**
----|----|----
**存取規範** | 提供對方法的訪問級別 | `public` 告訴計算機任何人都可以使用此方法。`private` 告訴計算機它只能在類內調用。（我們將在下一頁學習類！）`protected` 告訴計算機它可以被相同類別的對象調用。
**返回類型** | 返回給調用函數的數據類型，技術上在 C# 中返回類型不是簽名的一部分 | `string` 或 `int`，如果方法不返回任何內容則使用 `void`。
**方法名稱** | 方法的名稱，用於調用它 | 一個根據方法執行的內容選擇的描述性名稱。
**參數列表** | 使用方法時必須提供的輸入列表 | 可以有零個或多個參數，格式為 (`type` `input name`, `type` `input name`, ... )。無參數使用 ()。

```
// 一個接受字符串作為參數並以另一個字符串作為響應的示例
public string artist (string songName)
```
**注意：** 參數的變量名稱不必與傳入方法的數據變量名稱匹配。

### 方法主體

接下來，我們將與方法相關聯的代碼塊放入 **方法主體**，它位於方法簽名後的 `{` 和 `}` 之間。

要返回一些數據，我們使用關鍵字 `return`，後跟要返回的變量名稱或值。

**注意：** 一旦 `return`，在方法中的任何後續代碼都不會運行。

這是一個如何定義從 `numA` 到 `numB` 的數字總和的方法的示例：

```c#
/* 方法名稱：sumNum
 * 輸入/參數：2 個整型數字
 * 功能：返回從 numA 到 numB 的總和
 */
public int sumNum(int numA, int numB){
    int total = 0;
    int num = numA;      // 我們使用名稱 numA 訪問第一個輸入
    while(num <= numB){  // 我們使用名稱 numB 訪問第二個輸入
        total = total + num;
        num = num + 1;
    }
    return total; // 返回陳述