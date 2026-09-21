---
title: "活動 7 - 青蛙的橋（使用 AND/OR/NOT 表示不同值）"
date: 2025-10-20T02:40:00-05:00
weight: 8
draft: false
---

<link rel="stylesheet" href="../_logic-gates.css" type="text/css" />

<img src="../media/ranita.jpg" alt="Nuvi 穿著蛙裝" width="15%" />

## 簡介

**青蛙**守著一座橋並制定了一個精準的規則：

> 「只有攜帶**正好一支**點燃火炬的人才能過橋。  
> 如果你沒帶火炬或者兩支火炬都點燃，橋就會關閉。」

---

<img src="../media/pattern.webp" alt="邏輯研習工作的裝飾圖案" width="100%" />

## 邏輯目標

建構一個輸出為 1 的電路，當 A 和 B 的值是**不同的**時成立。  
此電路僅使用 **AND**、**OR** 和 **NOT**：

<details class="lg-details">
<summary class="lg-summary">
查看完整真值表
</summary>

<div class="lg-div">

| A | B | A OR B | A AND B | NOT(A AND B)  | Output |
|---|---|--------|---------|---------------|--------|
| 0 | 0 |   0    |    0    |       1       |   0    |
| 0 | 1 |   1    |    0    |       1       |   1    |
| 1 | 0 |   1    |    0    |       1       |   1    |
| 1 | 1 |   1    |    1    |       0       |   0    |

</div>
</details>

---

<img src="../media/paisaje_lago.webp" alt="森林湖泊景色" width="100%" />

## 模擬器操作說明

### 1. 擺放元件
- **輸入**: A, B  
- **OR 閘**  
- **AND 閘** (x2)  
- **NOT 閘**  
- **輸出**

<img src="../media/actividad_7.png" alt="使用 AND、OR 和 NOT 構建 XOR 電路的兩個輸入和一個輸出的視覺化範例" width="20%" class="lg-img"/>

### 2. 連接元件
1. A 和 B ➔ **OR**: `OR_AB`  
2. A 和 B ➔ **AND1**: `AND_AB`  
3. `AND_AB` ➔ **NOT**: `NOT_AND_AB`  
4. `OR_AB` 和 `NOT_AND_AB` ➔ **AND2**  
5. **AND2** ➔ **輸出**

### 3. 測試電路
- 驗證 00、01、10、11。  
- 輸出應僅在 01 和 10 時為 1。

**勝利條件**: 當 A ≠ B 時，輸出 = 1。

---

## 快速提示

- 如果你在 11 時仍得到輸出 1，可能是少了 `AND_AB` 的取非。  
- 將 `OR_AB` 和 `NOT_AND_AB` 的分支視覺上分開，以避免導線交錯。

---

## 模擬器

{{< logic-gate-icon-guide >}}

<iframe src="https://drendog.github.io/Logic-Circuit-Simulator/" title="邏輯閘模擬器" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

---

## 你學到了什麼？

- 使用 **AND/OR/NOT** 建構了「**它們不同**」的邏輯條件。