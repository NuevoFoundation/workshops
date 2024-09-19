---
title: "Methods"
description: "Introduce methods in C#."
date: 2024-09-16T00:00:00Z
weight: 7
---

## 什麼是方法？

到目前為止，我們學習了如何將數據存儲在變數中、打印數據和句子，以及使用 `if` 條件語句、`for` 迴圈和 `while` 迴圈進行決策。

在最後的練習中，我們知道以下代碼塊計算從 1 到 100 的總和：

```C#
int total = 0;
int num = 1;
while(num <= 100){
    total = total + num;
    num = num + 1;
}
Console.WriteLine("Sum: " + total);
```

但如果我們想計算從 1 到 77 的總和呢？怎麼才能不重寫整個代碼塊呢？

我們希望創建一個代碼中的 ✨ 魔法盒 ✨ ，無論我們想計算哪兩個數字的總和，它都可以為我們進行計算！
<img src="../images/method.png" height="250" alt="Num 1 和 Num 2 指向有魔法盒字樣的圓圈，圓圈指向 Num 1 到 Num 2 的總和"/> 

在 C# 中，**方法** 就像一個魔法盒，通過運行一段可以使用用戶輸入的代碼來執行特定任務。

方法有兩個部分：簽名和主體：

{{% notice note %}}
### 方法簽名

定義方法時，我們首先需要寫出其 <b>方法簽名</b>。簽名標題有四個主要部分：

```
access_specifier return_type method_name(list_of_parameters)
```

**部分名稱** | **描述** | **範例或可能的選項**
----|----|----
**訪問說明符** | 提供對方法的訪問級別 | `public` 表示任何人都可以使用此方法。`private` 表示只能在類內調用此方法。（我們將在下一頁學習類！）`protected` 表示可以被相同類的對象調用。
**返回類型** | 返回給調用函數的數據類型，從技術上講，返回類型在 C# 中不是簽名的一部分 | `string` 或 `int`，如果方法不返回任何內容則使用 `void`。
**方法名稱** | 方法的名稱，用於調用 | 根據方法的功能選擇的描述性名稱。
**參數列表** | 使用方法時必須提供的輸入列表 | 可以有零個或多個參數，格式為 (`type` `input name`, `type` `input name`, ... )。不帶參數時使用 ()。

```
// 一個將字串作為參數並返回另一個字串的範例
public string artist (string songName)
```
**注意：** 參數的變數名稱無需與傳遞進方法的數據變數名稱匹配。

### 方法主體

接下來，我們將與方法相關的代碼塊放入 **方法主體** 中，位於方法簽名後的 `{` 和 `}` 之間。

要返回一些數據，我們在要返回的變數名稱或值前加上關鍵字 `return`。

**注意：** 一旦 `return`，方法中的其餘部分將不會運行。

這是如何定義一個方法以計算從 `numA` 到 `numB` 的數字總和的範例：

```c#
/* 方法名稱：sumNum
 * 輸入/參數：2 個整數型數字
 * 功能：返回從 numA 到 numB 的總和
 */
public int sumNum(int numA, int numB){
    int total = 0;
    int num = numA;      // 我們使用名稱 numA 訪問第一個輸入
    while(num <= numB){  // 我們使用名稱 numB 訪問第一個輸入
        total = total + num;
        num = num + 1;
    }
    return total; // 返回語句
}
```

### 方法調用

最後，要在代碼中執行方法，我們需要進行 **方法調用**。我們寫出方法