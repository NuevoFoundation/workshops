---
title: "活動 1 - 鵎鵼之門 (AND)"
date: 2025-10-20T01:15:00-05:00
weight: 2
draft: false
---

<link rel="stylesheet" href="../_logic-gates.css" type="text/css" />

<img src="../media/tucan.png" alt="Nuvi 穿著鵎鵼服裝的插圖" width="15%" />

## 介紹

當你穿越森林時，你來到一扇大木門前。  
一隻鵎鵼出現在門旁邊，並說：

> 「這扇門只有在兩支火炬同時點燃時才會打開。  
> 如果只有一支點燃，門不會開啟。  
> 在這裡我們使用 AND 邏輯。」

你的任務是使用邏輯閘模擬器測試這種行為。

---

<img src="../media/pattern.webp" alt="邏輯工作坊的裝飾圖案" width="100%" />

## 什麼是 AND 閘？

- 它有 **兩個輸入** 和 **一個輸出**。  
- 只有當兩個輸入都為開 (`1`) 時，輸出才會為開 (`1`)。  
- 如果任一或兩個輸入為關 (`0`)，輸出將保持為關 (`0`)。

<details class="lg-details">
<summary class="lg-summary">
查看完整真值表
</summary>

<div class="lg-div">

| 輸入 A | 輸入 B | AND 輸出 |
|--------|--------|----------|
| 0      | 0      | 0        |
| 0      | 1      | 0        |
| 1      | 0      | 0        |
| 1      | 1      | 1        |

</div>
</details>

---

<img src="../media/paisaje_puerta.webp" alt="森林中門的景色" width="100%" />

## 模擬器操作指南

### 1. 放置元件
1. 確保你處於 **編輯模式**。
2. 從左側欄點選：
   - **輸入** ➔ 放置 **兩個**輸入（A 和 B）。
   - **AND 閘** ➔ 放置一個 AND 閘。
   - **輸出** ➔ 在 AND 閘的右側放置一個輸出。

<img src="../media/actividad_1.png" alt="具有兩個輸入和一個輸出的 AND 電路的視覺示例" width="20%" class="lg-img"/>

### 2. 連接元件
1. 點擊 **輸入 A** 的輸出端圓圈，然後點擊 AND 閘的一個輸入端。  
2. 對 **輸入 B** 重複相同的操作。  
3. 從 AND 閘的輸出端連接至 **輸出** 圓圈。

### 3. 測試電路
- 點擊每個輸入切換其狀態：`0` 或 `1`。  
- 嘗試所有可能的組合。  
- 鵎鵼的門只有在輸入 A 為 1 和輸入 B 為 1 時（A=1 AND B=1）才「打開」（輸出 = 1）。

---

## 模擬器

{{< logic-gate-icon-guide >}}

<iframe src="https://drendog.github.io/Logic-Circuit-Simulator/" title="邏輯閘模擬器" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

---

## 你學到了什麼？

- AND 表示必須同時滿足的條件：只有當 A = 1 和 B = 1 時，輸出才會被激活。
- 如果其中一個輸入為 0，輸出也將為 0，沒有例外。

---

## 下一步

在下一個活動中，你將沿著小路前進，遇見樹懶，並了解 OR 閘的工作原理。