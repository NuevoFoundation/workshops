---
title: "Activity 4 - The Toucan's inverted gate (AND + NOT)"
date: 2025-10-20T02:10:00-05:00
weight: 5
draft: false
---

<link rel="stylesheet" href="../_logic-gates.css" type="text/css" />

<img src="../media/tucan.png" alt="Nuvi dressed as a toucan" width="15%" />

## 介紹

在石門前，**巨嘴鳥**向你眨了眨眼：

> 「記得我的 **AND** 閘門嗎？今天我們將利用 **NOT** 來將它**反轉**。  
> 閘門會打開，**除非**兩個火把都是點燃的。」

---

<img src="../media/pattern.webp" alt="Decorative pattern for the logic workshop" width="100%" />

## 邏輯目標

建立一個輸出會是 true 的情況，**除了**當 A = 1 **且** B = 1：

<details class="lg-details">
<summary class="lg-summary">
查看完整真值表
</summary>

<div class="lg-div">

| A | B | A AND B | Output = NOT(A AND B)  |
|---|---|---------|------------------------|
| 0 | 0 |    0    |           1            |
| 0 | 1 |    0    |           1            |
| 1 | 0 |    0    |           1            |
| 1 | 1 |    1    |           0            |

</div>
</details>

---

<img src="../media/paisaje_puerta.webp" alt="Landscape of the stone gate in the forest" width="100%" />

## 模擬器指引

### 1. 放置元件
1. 確保處於**編輯模式**。
- **輸入**: A, B  
- **AND 閘門**  
- **NOT 閘門**  
- **輸出**

<img src="../media/actividad_5.png" alt="Visual example of the AND followed by NOT circuit with two inputs and one output" width="20%" class="lg-img"/>

### 2. 連接
1. A 和 B ➔ **AND**  
2. **AND** 的輸出 ➔ **NOT**  
3. **NOT** 的輸出 ➔ **輸出**

### 3. 測試
- 測試 00, 01, 10, 11。  
- 閘門會在所有情況下開啟，**除了** 11。

**勝利條件：** 輸出僅在 A = 1 且 B = 1 時為 0。

---

## 快速提示

- 如果輸出總是 0，很可能是你將 **輸出** 連接到了 **AND** 而不是 **NOT**。

---

## 模擬器

{{< logic-gate-icon-guide >}}

<iframe src="https://drendog.github.io/Logic-Circuit-Simulator/" title="Logic gate simulator" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

---

## 你學到了什麼？

- 如何**否定**一個複合條件：先使用 **AND**，再使用 **NOT**。