```---
title: "2. 讀取並處理輸入"
description: "使用 Scanner 類別讀取輸入並檢查錯誤情況"
date: 2021-10-14T00:00:00Z
prereq: "設置棋盤！"
difficulties: ["中級"]
weight: 3
draft: false
---

## 引入套件

在 Java 中，獲取用戶輸入的一種高效方式是使用 `java.util` 套件中的 `Scanner` 類別。要使用此類別及其所有方法，我們需要在檔案的頂部添加以下程式碼來 `import` 該類別。

```java
import java.util.Scanner;
```

## 使用 Scanner 類別

在 `main()` 中，我們需要首先透過調用其構造函數來建立一個名為 `sc` 的 `Scanner` 物件（如下所示）。

我們希望 `Scanner` 能從標準輸入流讀取我們的輸入。為此，我們需要傳遞 `System.in`（標準輸入流物件）進去。

```java
// 創建 Scanner 物件
Scanner sc = new Scanner(System.in);
```

## 獲取用戶輸入

在上一個活動中，我們提示用戶輸入 1 到 9 之間的數字。因此，我們將期望輸入流中的是一個 `int`。

為了獲取儲存於 `Scanner` 物件中的 `int`，我們對 `sc`（Scanner 物件）調用方法 `nextInt()`。

```java
int input = sc.nextInt();
```

## 測試程式（可選）

要測試您的程式，請添加一個打印語句以打印出您從 `nextInt()` 儲存的數值。

嘗試運行您的程式，並輸入一些數字，然後按下「Enter」鍵。您應該會看到您輸入的數字正確顯示出來。例如：

```
<<<~ 井字遊戲 ~>>>
* 選擇一個數字 1 - 9 進行您的步驟
* 玩家: 'X' 電腦: 'O'

 1 | 2 | 3 
---+---+---
 4 | 5 | 6 
---+---+---
 7 | 8 | 9 
輸入您的移動位置 (1-9): 2                <------- 您輸入的數字
輸入的數字: 2                            <------- 打印語句正確打印了輸入的數字
```

{{% notice warning %}}
#### 如果用戶輸入的不是數字會發生什麼？

在編寫程式時，我們永遠不能假設用戶輸入的值是正確的，即使在提示中明確指出。

由於我們的程式僅期望一個 `int` 輸入，如果您輸入不是整數的內容，例如：`hi`、`$`、`20.1`，程式將會崩潰。您將看到類似以下的錯誤訊息：

```
Exception in thread "main" java.util.InputMismatchException      <------ 告訴您發生了什麼錯誤
    at java.base/java.util.Scanner.throwFor(Scanner.java:939)
    at java.base/java.util.Scanner.next(Scanner.java:1594)
    at java.base/java.util.Scanner.nextInt(Scanner.java:2258)
    at java.base/java.util.Scanner.nextInt(Scanner.java:2212)
    at Main.main(Main.java:15)                                   <------ 告訴您程式碼的哪一行引發了錯誤（Main.java 的第 15 行）
```

此外，注意範圍之外（不在 1 - 9 范圍內的）數字輸入不會導致程式崩潰，但這些是我們同樣不期望的輸入。
{{% /notice %}}

## 使用 Scanner 處理無效輸入

Scanner 類別提供了可以檢查有效或無效輸入的方式。例如，`hasNextInt` 方法會檢查用戶輸入的值是否為整數並返回 `true` 或 `false`。這個方法可以用於確保用戶輸入是有效的。

使用控制結構來驗證用戶的輸入。如果輸入無效，再次請求輸入有效值。

```java
if(sc.hasNextInt()) { // 是否輸入了整數
	move = sc.nextInt(); // 獲取整數輸入
   if (!(move > 0 && move <= 9)) { // 整數是否在 1 到 9 之間
		System.out.print("位置無效; 請重新輸入您的移動位置 (1-9): ");
   }
} else { // 如果輸入的不是整數
   sc.next(); // 清空 Scanner
	System.out.print("輸入無效; 請重新輸入您的移動位置 (1-9): ");
}
```

## 測試程式（可選）

透過點擊 `Run` 測試您的程式，當您輸入非數字或不在 1 到 9 之間的數字時，您應看到訊息 `位置無效; 請重新輸入您的移動位置 (1-9):`。

## 接收多次輸入

現在我們已有一個能接受一次輸入並評估其是否有效的程式，我們希望可以反覆要求玩家輸入下一步，直到遊戲結束。

為了持續提示用戶輸入，我們將整個 `hasNextInt` 的 `if` 條件放入 `while` 循環中。這個 `while` 循環的參數設為 `true`，表示程式將不斷循環直到指示停止。

注意，我們需要在每次迭代結尾執行 `printBoard(board)` 並提示用戶，如下所示：

```java
while(true){
    // 把 hasNextInt() 的條件語句插入這裡

   // 將以下內容移至 hasNextInt() 的條件語句中
    printBoard(board);
    System.out.print("輸入您的移動位置 (1-9): "); 
}
```

## 處理無效輸入

當用戶輸入無效值時，我們不希望程式調用 `printBoard(board)` 或打印 `輸入您的移動位置 (1-9): `。

換句話說，我們希望程式繼續到下一次