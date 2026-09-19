```markdown
---
title: "方法"
description: "介紹C#中的方法。"
date: 2024-09-16T00:00:00Z
weight: 7
---

## 什麼是方法？

到目前為止，我們已經學習了如何將數據存儲在變數中、打印數據和句子，以及使用 `if`-條件語句、`for`-循環和 `while`-循環來做出決策。

在最後的練習中，我們知道以下代碼塊可以計算從1到100的總和：

```C#
int total = 0;
int num = 1;
while(num <= 100){
    total = total + num;
    num = num + 1;
}
Console.WriteLine("Sum: " + total);
```

但是，如果我們想計算從1到77的總和呢？我們如何在不重新編寫整段代碼的情況下做到這一點？

我們想要創建一個✨魔法盒✨，無論我們想對哪兩個數字進行總和計算，這個魔法盒都可以幫助我們完成！
<img src="../images/method.png" height="250" alt="第一個數字和第二個數字的箭頭指向一個圓圈，圓圈中寫著'Magic Box'(魔法盒)，箭頭從圓圈中指向'第一個數字到第二個數字的總和'"/> 

在 C# 中，**方法**就像是一個可以通過運行一段代碼並使用用戶輸入來執行特定任務的魔法盒。

方法包含兩個部分：方法簽名和方法主體。

{{% notice note %}}
### 方法簽名

要定義一個方法，我們需要先寫出其<b>方法簽名</b>。方法簽名由四個主要部分組成：

```
access_specifier return_type method_name(list_of_parameters)
```

**部分名稱** | **描述** | **示例或可能的選項**
----|----|----
**存取修飾符 (access specifier)** | 提供方法的訪問級別  | `public` 告訴電腦所有人都可以使用此方法。`private` 告訴電腦此方法僅能在類內部調用。（我們將在下一頁學習類別！）`protected` 告訴電腦此方法只能被同一類的對象調用。
**返回型別 (return type)** | 要返回給調用函數的數據型別，從技術上講，返回類型在 C# 中不是方法簽名的一部分  | `string` 或 `int`，如果方法不返回任何東西，則使用 `void`。
**方法名稱 (method name)** | 方法的名字，用來調用此方法 | 根據方法的功能選擇一個描述性的名稱。
**參數列表 (list of parameters)** | 使用方法時必須提供的輸入列表 | 可以有零個或多個參數，格式為 (`type` `input name`, `type` `input name`, ... )。若無參數，使用 ()。

```
// 一個接收字串作為參數並返回另一個響應字符串的示例
public string artist (string songName)
```
**注意：** 參數的變數名稱不必與傳遞給方法的數據的變數名稱相同。

### 方法主體

接下來，我們將與方法相關的代碼塊放在**方法主體**中，它位於方法簽名後的 `{` 和 `}` 之間。

若要返回一些數據，我們使用關鍵字 `return` 並跟隨一個變數名稱或要返回的值。

**注意：** 一旦執行了 `return`，該方法中之後的內容將不會執行。

以下是一個定義計算從 `numA` 到 `numB` 總和的方法範例：

```c#
/* 方法名稱：sumNum
 * 輸入參數：兩個整數類型的數字
 * 功能：返回從 numA 到 numB 的總和
 */
public int sumNum(int numA, int numB){
    int total = 0;
    int num = numA;      // 我們用變數名 numA 訪問第一個輸入
    while(num <= numB){  // 我們用變數名 numB 訪問第二個輸入
        total = total + num;
        num = num + 1;
    }
    return total; // 返回語句
}
```

### 方法呼叫

最後，要在代碼中執行方法，我們需要進行**方法呼叫**。我們使用方法名稱和適當的輸入來呼叫它。 
例如：

```C#
sumNum(1, 3); // 一行代碼呼叫方法 sumNum() 並返回值 6
```

知道 `sumNum(1, 3)` 返回從1到3的總和（`int`類型）後，我們可以這樣做，存儲並打印該值：

呼叫此方法的代碼如下：
```c#
    int sum = 0;
    sum = sumNum(1, 3);
    Console.WriteLine(sum); // 輸出6
```

使用方法的強大功能之一是我們可以多次呼叫它：
```C#
    int sum = 0;
    sum = sumNum(1, 3);
    Console.WriteLine(sum); // 輸出6
    sum = sumNum(1, 4);
    Console.WriteLine(sum); // 輸出10
```

我們甚至可以直接打印方法的返回值，而不需要將其存儲在變數中：
```c#
    Console.WriteLine(sumNum(1,3)); // 輸出6
    Console.WriteLine(sumNum(1,4)); // 輸出10
```
{{% /notice %}}

## 數一數金字塔！🔺

下面是一個平方數金字塔的圖片，其中每一層的形狀是從頂部開始數的該層數的平方。

<img src="../images/pyramid.png" height="250" alt="彩色珠子構成的金字塔。底層是黃色，接著是藍色、棕色、白色、粉色、淺藍色、橙色、珊瑚色、綠色，最後一層是紅色" /> 

最上面的一層