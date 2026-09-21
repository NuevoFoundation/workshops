---
title: "活動8 - 小猴子的鏡室（使用 AND/OR/NOT 來檢查相等性）"
date: 2025-10-20T02:55:00-05:00
weight: 9
draft: false
---

<link rel="stylesheet" href="../_logic-gates.css" type="text/css" />

<img src="../media/monito.jpg" alt="Nuvi 打扮成小猴子的樣子" width="20%" />

## 介紹

在反射廳裡，**小猴子**解釋道：

>「要啟動這個房間，信號必須**匹配**。  
> 如果 A 和 B 相等，門就會打開。」

---

<img src="../media/pattern.webp" alt="邏輯工作坊的裝飾圖案" width="100%" />

## 邏輯目標

使用 **AND/OR/NOT** 構建一個輸出，當 **A = B** 時，輸出為 1：

<details class="lg-details">
<summary class="lg-summary">
查看完整真值表
</summary>

<div class="lg-div">

| A | B | NOT A | NOT B | A AND B | (NOT A AND NOT B)  | 輸出 |
|---|---|-------|-------|---------|--------------------|--------|
| 0 | 0 |   1   |   1   |    0    |         1          |   1    |
| 0 | 1 |   1   |   0   |    0    |         0          |   0    |
| 1 | 0 |   0   |   1   |    0    |         0          |   0    |
| 1 | 1 |   0   |   0   |    1    |         0          |   1    |

</div>
</details>

---

<img src="../media/paisaje_bosque.webp" alt="神秘森林的風景畫面" width="100%" />

## 模擬器使用指南

### 1. 放置元件
- **輸入**：A, B  
- **NOT閘**（2個）  
- **AND閘**（2個）  
- **OR閘**  
- **輸出**

<img src="../media/actividad_8.png" alt="使用 AND、OR 和 NOT 构建 XNOR 電路的視覺範例（具有兩個輸入和一個輸出）" width="20%" class="lg-img"/>

### 2. 連接元件
1. A ➔ **NOT**：`NOT_A`  
2. B ➔ **NOT**：`NOT_B`  
3. A 和 B ➔ **AND1** （分支「兩者皆為 1」）  
4. `NOT_A` 和 `NOT_B` ➔ **AND2** （分支「兩者皆為 0」）  
5. **AND1** 和 **AND2** ➔ **OR**  
6. **OR** ➔ **輸出**

### 3. 測試電路
- 試著輸入 00、01、10、11。  
- 輸出應在 00 和 11 時為 1。

**勝利條件：** 當且僅當 A 和 B 匹配時，輸出 = 1。

---

## 快速提示

- 如果輸出在 01 或 10 時為 1，檢查從 `NOT_A`/`NOT_B` 到 **AND₂** 的連線是否正確。  
- 保持兩條分支對稱，以便讓電路易於閱讀。

---

## 模擬器

{{< logic-gate-icon-guide >}}

<iframe src="https://drendog.github.io/Logic-Circuit-Simulator/" title="邏輯閘模擬器" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

---

## 您學到了什麼？

- 如何僅使用 **AND/OR/NOT** 構建「**相等條件**」邏輯。  
- 如何使用**平行分支**來涵蓋互補情況。