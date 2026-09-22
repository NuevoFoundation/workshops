---
title: "Micro:Bit - 答案指南"
date: 2026-04-28T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
這是一份適用於 Micro:Bit 工作坊的教師參考指南。工作坊主要以帶有內嵌程式範例的引導式教程為主，而非填空練習題。此答案指南彙總了所有關鍵概念、程式碼範例、教程成果以及開放式 "輪到你" 部分的範例專案。
{{% /notice %}}

## JavaScript 基礎參考

### 變數與資料型別

工作坊介紹了五種資料型別。以下是其摘要以及範例：

| 資料型別 | 描述 | 範例 |
|-----------|-----|---------|
| 整數 (Integer) | 整數（不含小數） | `var a = 5;` |
| 浮點數 (Double) | 帶有小數的數字 | `var x = 0.5;` |
| 字串 (String) | 文本（雙引號） | `var company = "My company";` |
| 字元 (Character) | 單一字母（單引號） | `var letter = 'A';` |
| 布林值 (Boolean) | 真或假值 | `var codingIsCool = true;` |

**變數命名的關鍵規則：**
- 可以包含字母、數字、底線以及美元符號
- 不得包含空格
- 必須以字母開頭

### 數學運算

| 運算 | 運算符 | 範例 | 結果 |
|-------|--------|---------|------|
| 加法 | `+` | `var c = 13 + 10;` | `c = 23` |
| 減法 | `-` | `var c = 15 - 10;` | `c = 5` |
| 乘法 | `*` | `var c = 2 * 5;` | `c = 10` |
| 除法 | `/` | `var c = 20 / 2;` | `c = 10` |
| 取餘數 | `%` | `var d = 10 % 2;` | `d = 0` |

**注意：** 工作坊原始文件顯示 `c = a + b; // c = 25`，但實際情況是 13 + 10 = 23。這是原始工作坊中的文字錯誤。

**簡寫運算符：**
- `c += a;` 將 `a` 加到 `c`
- `c -= a;` 從 `c` 減去 `a`
- `c *= a;` 將 `c` 乘以 `a`
- `c /= a;` 將 `c` 除以 `a`
- `c++` 每次加 1，`c--` 每次減 1

**注意：** 工作坊的除法範例註解顯示 `c /= a; // c = 5`，但實際結果為 `0.5`（10 除以 20）。教師應留意此不一致之處。

### 顯示語句 (Print Statements)

```javascript
// 在瀏覽器控制台顯示（不會在網頁上可見）
console.log("Hello!");

// 顯示彈出窗口
alert("Hello!");

// 帶有輸入框的彈出窗口 - 存儲用戶的回應
var userResponse = prompt("What is your name?");
```

### 條件判斷

```javascript
var age = 10;
if (age < 18) {
  print("You're not an adult yet! :( ");
}
```

**注意：** 範例中使用了 `print()`，然而這不是瀏覽器標準的 JavaScript 用法。在 MakeCode 中，對應的語法是 `basic.showString()`。在瀏覽器中，應使用 `console.log()` 或 `alert()`。此外，工作坊中的原始註解錯誤地表示 "如果年齡小於 10"，而條件實際檢查的是 `age < 18`。

### 迴圈

```javascript
// while 迴圈 - 從 10 倒數
var count = 10;
while (count > 0) {
  alert(count);
  count--;
}

// for 迴圈 - 從 10 倒數
for (var i = 10; i > 0; i--) {
  alert(i);
}
```

**重要事項：** 無限迴圈（例如 `while (true)`）將會卡住瀏覽器。在 micro:bit 中，使用 `basic.forever()` 是連續執行的安全選擇。

**額外補充：** 使用 `break;` 語句可以立即跳出迴圈並將執行移動到迴圈下方的程式碼。

## Micro:Bit 設置

### 硬體概述

Micro:Bit 具有：
- 25 個可編程 LED （5×5 網格）
- 2 個可編程按鈕（A 及 B）
- 實體連接針
- 動作感測器（加速度計與指南針）
- 無線通信（藍牙與無線電）
- USB 接口

### 與電腦連接

1. 使用 USB 線將 Micro:Bit 連接到電腦
2. 它將以名為 `MICROBIT` 的磁碟形式出現在檔案管理器中
3. 載入程式：將 `.hex` 檔案複製到 MICROBIT 磁碟中（或右鍵 → Send To → MICROBIT）
4. 後面黃色 LED 在下載程式時會閃爍

### MakeCode 編輯器

程式編寫環境網址為 [makecode.microbit.org](https://makecode.microbit.org/)。學生可在積木模式與 JavaScript 模式間切換。

## 教程成果

### 心形閃爍 教程

學生按照內置的 MakeCode 教程。預期結果：

```javascript
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(500)
})
```

**功能：** 在 LED 顯示