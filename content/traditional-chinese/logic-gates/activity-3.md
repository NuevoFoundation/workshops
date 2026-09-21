```markdown
---
title: "Activity 3 - The Frog's challenge (NOT)"
date: 2025-10-20T01:40:00-05:00
weight: 4
draft: false
---

<link rel="stylesheet" href="../_logic-gates.css" type="text/css" />

<img src="../media/ranita.jpg" alt="Nuvi dressed as a frog" width="15%" />

## 介紹

沿著足跡，你來到一個閃亮的池塘。  
一隻**綠色青蛙**跳到一片葉子上，向你打招呼：

> "歡迎來到**倒影池塘**！  
> 這裡的一切都以**相反方式**運作：如果某物是開啟的，它就會關閉；  
> 如果它是關閉的，它就會開啟。這就是**NOT**邏輯。"

你的任務是建立一個**反轉**輸入信號的電路。

---

<img src="../media/pattern.webp" alt="Decorative pattern for the logic workshop" width="100%" />

## 什麼是 NOT 閘？

- 它有**一個輸入**和**一個輸出**。  
- 輸出**永遠是輸入的相反值**。

<details class="lg-details">
<summary class="lg-summary">
查看完整真值表
</summary>

<div class="lg-div">

| 輸入 A | NOT 輸出 |
|---------|------------|
| 0       | 1          |
| 1       | 0          |

</div>
</details>

> 這個閘也被稱為 **反向器**。

---

<img src="../media/paisaje_lago.webp" alt="Landscape of the pond in the forest" width="100%" />

## 模擬器指導

### 1. 放置元件
1. 確保您處於**編輯**模式。  
2. 在左側邊欄中，選擇並放置：
   - **輸入** ➔ 一個輸入（A）。
   - **NOT 閘** ➔ 在輸入和輸出之間放置一個 NOT 閘。
   - **輸出** ➔ 在閘的右側放置一個輸出。

<img src="../media/actividad_3.png" alt="Visual example of the NOT circuit with one input and one output" width="20%" class="lg-img"/>

### 2. 連接元件
1. 將**輸入 A** 的**輸出**連接到 **NOT 閘** 的**輸入**。  
2. 將 **NOT 閘** 的**輸出**連接到**輸出**。

### 3. 測試電路
- 點擊**輸入 A**以切換 `0` ↔ `1`。  
- 查看**輸出**：它應該顯示 A 的**相反值**。

**勝利條件：**  
- 如果 `A = 0` ➔ **輸出 = 1**  
- 如果 `A = 1` ➔ **輸出 = 0**

> 青蛙拍手：  
> "做得好！有時，要往前進你需要**反向思考**。"

---

## 快速提示

- 如果輸出並**未**轉換為輸入的相反值，檢查電線是否**通過**了 **NOT** 閘。  
- 確認您選擇的是**NOT 閘**而非其他閘。  
- 如果輸出和輸入的狀態**相同**，可能是 NOT 閘未正確連接或遺失。

---

## 挑戰（可選）

- **雙重 NOT：** 添加**兩個**串聯的 NOT 閘。輸出會發生什麼改變？  

---

## 模擬器

{{< logic-gate-icon-guide >}}

<iframe src="https://drendog.github.io/Logic-Circuit-Simulator/" title="Logic gate simulator" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

---

## 您學到了什麼？

- **NOT** 閘反轉邏輯值：`0 → 1` 和 `1 → 0`。  
- 它對創建**相反行為**非常有用（例如，沒有信號時開啟警報、自動燈光等）。  
- 串聯兩個 NOT 閘會**互相抵消**。

---

## 下一步

太棒了！在下一個活動中，小猴子將教您如何**組合** AND、OR 和 NOT 閘來解決更複雜的挑戰，並恢復**森林能量球**的能量。
```