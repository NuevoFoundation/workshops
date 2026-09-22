```yaml
---
title: "方法"
description: "介紹 Java 中的方法。"
date: 2021-10-13T00:00:00Z
weight: 6
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/mO6S9Yq_K4I" title="Java 方法教學影片" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## 什麼是方法？

到目前為止，我們已經學習了如何將數據儲存到變數中、打印數據和句子，並使用條件語句（if 陳述句）、for 循環和 while 循環來進行決策。

在上一個練習中，我們知道以下的代碼塊可以計算從 1 到 100 的總和：

```java
int total = 0;
int num = 1;
while(num <= 100){
    total = total + num;
    num = num + 1;
}
System.out.println("Sum: " + total);
```

但如果我們想計算從 1 到 77 的總和該怎麼辦？要怎樣才能在不重新編寫整個代碼塊的情況下完成這個計算呢？

我們希望在代碼中創建一個 ✨ 魔法盒 ✨ ，無論我們想計算哪兩個數字之間的總和，它都可以幫我們進行計算！
<img src="../images/method.png" height="250" alt="數字 1 和數字 2 有箭頭指向一個寫著魔法盒的圓形，並有另一箭頭從該圓形指向數字 1 到數字 2 的總和" /> 

在 Java 中，**方法** 就像是一個執行特定任務的魔法盒，它通過運行一段可以使用用戶輸入的代碼來完成任務。

一個方法包含兩個部分：方法標頭和方法主體：

{{% notice note %}}
### 方法標頭

要定義一個方法，我們需要首先寫出它的<b>方法標頭</b>。方法標頭包含以下四個主要部分：

**部分名稱** | **描述** | **示例或可能選項**
----|----|----
**訪問修飾符 (access specifier)** | 提供對方法的訪問等級  | `public` 表示任何人可使用該方法；`private` 表示只能在類內部調用該方法（我們將在下一頁學習更多關於類的知識！）；`protected` 表示只能由同類型的對象調用。
**返回類型 (return type)** | 返回的數據類型（傳遞給調用函數） | 如果該方法什麼都不返回，則使用 `void`。
**方法名稱 (method name)** | 用於調用該方法的名稱 | 根據方法的功能由用戶自定義。
**參數清單 (list of parameters)** | 調用方法時需要提供的輸入參數清單 | 格式為 (`類型` `參數名稱`, `類型` `參數名稱`, ...)。

```
// 範例
public void sing (String songName)
   1.    2.   3.        4.
```
**注意：** 參數的變量名稱不必與傳遞給方法的數據變量名稱相匹配。

<br />

### 方法主體

接下來，需要將與方法相關的代碼放置在寫在方法標頭之後的 **方法主體** 內，方法主體是被 `{` 和 `}` 包圍的一段代碼。

若需返回一些數據，則使用關鍵字 `return`，後接變量名稱或需返回的值。

**注意：** 一旦執行了 `return`，方法中該語句之後的代碼將不會執行。

以下是一個定義從 `numA` 到 `numB` 數字總和的方法的範例：

```java
/* 方法名稱: sumNum
 * 輸入/參數: 兩個 int 類型的數字
 * 功能: 返回從 numA 到 numB 的總和
 */
public int sumNum(int numA, int numB){
    int total = 0;
    int num = numA;      // 透過名稱 numA 訪問第一個輸入參數
    while(num <= numB){  // 透過名稱 numB 訪問第二個輸入參數
        total = total + num;
        num = num + 1;
    }
    return total; // 返回語句
}
```

<br />

### 方法調用

最後，若要在代碼中執行一個方法，我們需要進行一個<b>方法調用</b>。這是通過寫下方法名稱並附加適當的輸入來完成的。
例如：

```java
sumNum(1, 3); //一行代碼，調用 sumNum() 方法，返回值為 6
```

知道 `sumNum(1, 3)` 返回的是從 1 到 3 的總和（int 類型），我們還可以這樣執行來存儲返回值：

```java
int sum1to3 = sumNum(1, 3); 
```
{{% /notice %}}

## 數數金字塔！🔺

<img src="../images/pyramid.png" height="250" alt="由彩色珠子組成的金字塔。底層是黃色，其次是藍色、棕色、白色、粉色、淺藍色、橙色、珊瑚色、綠色，最後是紅色" /> 
<p style="text-align: center;">（圖片來源: aliexpress.com/item/32306945847.html）</p>

上面是一個正方形數字金字塔的圖片，每一層的珠子數量是從上往下數到當前層數的平方。

也就是說，頂層有 `1 * 1` 個珠子，第二層有 `2 * 2` 個珠子。

<br />
現在來寫一個方法，該方法接受金字塔的總層數作為輸入，並輸出金字塔中的珠子總數！

一旦你解決了這項挑戰，你將看到以下信息：

```
Congratulations! Challenge Solved!
``