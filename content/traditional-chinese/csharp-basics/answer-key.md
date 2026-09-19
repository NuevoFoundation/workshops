---
title: "C#: 基礎 - 答案解答"
date: 2026-04-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
以下是範例答案。許多挑戰都有多個有效的解答，尤其是要求你自行創建例子的問題。如果你的解答能獲得預期的輸出，那麼你的答案就是正確的！
{{% /notice %}}

## 變數與資料型別

### 幫助 Patrick 修正變數

Patrick 的程式碼將錯誤的資料型別分配給了每個變數。以下是正確的宣告方式：

```csharp
string bestFriend = "Minerva";
int numOfFriends = 4;
double GPA = 3.6;
char meaningOfLife = '$';
bool loveMusic = true;
```

**解釋：** 每個變數需要一個符合儲存值的資料型別：

| 變數             | 錯誤型別   | 正確型別   | 原因                         |
|------------------|-----------|-----------|-----------------------------|
| `bestFriend`     | `int`     | `string`  | `"Minerva"` 是文字而非數字   |
| `numOfFriends`   | `bool`    | `int`     | `4` 是整數而非 true/false   |
| `GPA`            | `string`  | `double`  | `3.6` 是小數而非文字         |
| `meaningOfLife`  | `double`  | `char`    | `'$'` 是字元而非小數         |
| `loveMusic`      | `char`    | `bool`    | `true` 是布林值而非字元      |

輸出：
```
你修好了！
```

## 運算子

### 考試統計

以下是成績：Patrick (88)、Tom (89)、Mary (95)、Chris (84)、Jen (92):

```csharp
// 1. 宣告學生成績變數
int patrickGrade = 88;
int tomGrade = 89;
int maryGrade = 95;
int chrisGrade = 84;
int jenGrade = 92;

// 2. 計算班級平均成績
average = (patrickGrade + tomGrade + maryGrade + chrisGrade + jenGrade) / 5.0;

// 3. 使用關係運算子進行比較
bool over60 = average > 60;
bool over70 = average > 70;
bool over80 = average > 80;
bool over90 = average > 90;
```

{{% notice tip %}}
我們用 `5.0` 代替 `5` 來使計算結果為小數。在 C# 中，兩個整數相除只會得到整數（餘數會被丟掉）。使用 `5.0` 可確保得到精確的平均值。
{{% /notice %}}

輸出：
```
---------------------------
     音樂成績報告           
---------------------------

學生成績：                  
- Patrick: 88
- Tom: 89
- Mary: 95
- Chris: 84
- Jen: 92

班級平均成績： 89.6
- 平均分數超過 60：True
- 平均分數超過 70：True
- 平均分數超過 80：True
- 平均分數超過 90：False
```

## 控制結構

### If-條件語句：Patrick 的問候

填入布林表達式，使 Patrick 根據時間說出正確的問候：

```csharp
int currentHour = 10; // 更改此值以測試不同的時間（0-23）

if (currentHour < 12)
{
    Console.WriteLine("早上好");
}
else if (currentHour < 20)
{
    Console.WriteLine("下午好");
}
else
{
    Console.WriteLine("晚安");
}
```

**運作方式：**
- 時間 0-11：`currentHour < 12` 是 `true` → 列印 "早上好"
- 時間 12-19：`currentHour < 12` 是 `false`，但是 `currentHour < 20` 是 `true` → 列印 "下午好"
- 時間 20-23：上述兩個條件都是 `false` → 進入 `else` → 列印 "晚安"

### For-迴圈：1 到 100 的總和

將 while 迴圈轉換為計算 1 + 2 + 3 + ... + 100 的 for 迴圈：

```csharp
int total = 0;
for (int num = 1; num <= 100; num = num + 1)
{
    total = total + num;
}
Console.WriteLine("用 for 迴圈計算的答案：" + total);
```

輸出：
```
用 for 迴圈計算的答案：5050
```

{{% notice tip %}}
答案是 5050。據說數學家 Carl Friedrich Gauss 小時候注意到 1 + 100 = 101，2 + 99 = 101，依此類推 — 有 50 對 101 的組合，相加得出 5050！
{{% /notice %}}

## 方法

### 計算金字塔

編寫一個方法，用於計算具有 `n` 層的平方數金字塔中的珠子總數。第 1 層有 1×1 = 1 顆珠子，第 2 層有 2×2 = 4 顆珠子，第 3 層有 3×3 = 9 顆珠子，以此類推。

```csharp
public static int pyramidCount(int levels)
{
    int total = 0;
    for (int i = 1; i <= levels; i++)
    {
        total = total + (i * i);
    }
    return total;
}
```

**運作方式：** 此方法會循環遍歷 1 到 `levels` 的每一層，將層數平方值 (`i * i`) 加到累積的總數中。

範例值:

| 層數 | 計算       | 總數     |
|------|-----------|---------|
| 1    | 1×1       | 1       |
| 2    | 1 + 4     | 5       |
| 3    | 1 + 4 + 9 | 14      |
| 4    | 1 + 