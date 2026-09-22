---
title: "活動 5 - 樹懶的靜默山頂（OR + NOT）"
date: 2025-10-20T02:25:00-05:00
weight: 6
draft: false
---

<link rel="stylesheet" href="../_logic-gates.css" type="text/css" />

<img src="../media/perezoso.webp" alt="Nuvi 打扮成樹懶的樣子" width="10%" />

## 介紹

**樹懶**在山頂等著你：

> 「我想要完全的靜默：只有當**沒有**任何路上有光時，輸出才會亮起。  
> 我們可以使用 **OR** 來檢測是否有光，再用 **NOT** 來反轉。」

---

<img src="../media/pattern.webp" alt="邏輯工作坊的裝飾圖案" width="100%" />

## 邏輯目標

只有當 **A = 0 且 B = 0** 時，輸出應為 1：

<details class="lg-details">
<summary class="lg-summary">
查看完整真值表
</summary>

<div class="lg-div">

| A | B | A OR B | 輸出 = NOT(A OR B) |
|---|---|--------|-------------------|
| 0 | 0 |   0    |         1         |
| 0 | 1 |   1    |         0         |
| 1 | 0 |   1    |         0         |
| 1 | 1 |   1    |         0         |

</div>
</details>

---

<img src="../media/paisaje_camino.webp" alt="山頂的風景" width="100%" />

## 模擬器使用說明

### 1. 放置
- **輸入**：A, B  
- **OR閘**  
- **NOT閘**  
- **輸出**

<img src="../media/actividad_6.png" alt="一個由兩個輸入和一個輸出組成的 OR 接著 NOT 電路的視覺範例" width="20%" class="lg-img"/>

### 2. 連接
1. A 和 B ➔ **OR**  
2. **OR** 的輸出 ➔ **NOT**  
3. **NOT** 的輸出 ➔ **Output**

### 3. 測試
- 嘗試 00, 01, 10, 11。  
- 只有當輸入為 00 時，輸出應該為 1。

**勝利條件：** 只要 A 或 B 有光，輸出即為 0。

---

## 快速提示

- 如果輸出總是保持在 1，可能是 **OR** 到 **NOT** 的連接線丟失了。  
- 將中介信號命名為 `OR_AB`。

---

## 模擬器

{{< logic-gate-icon-guide >}}

<iframe src="https://drendog.github.io/Logic-Circuit-Simulator/" title="邏輯閘模擬器" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

---

## 你學到了什麼？

- 如何用 **OR** 接著 **NOT** 來表達「**沒有**一個輸入是作用中的情況」。