```markdown
---
title: "活動 6 - 小猴子的任務（結合邏輯閘）"
date: 2025-10-20T01:55:00-05:00
weight: 7
draft: false
---

<link rel="stylesheet" href="../_logic-gates.css" type="text/css" />

<img src="../media/monito.jpg" alt="Nuvi 裝扮成小猴子的樣子" width="20%" />

## 簡介

從樹梢上，**小猴子 (Monito)** 興奮地向你打招呼：

>「你已經走了很長的路！你已經學會了 **AND**、**OR** 和 **NOT**。  
> 現在是時候**結合它們**來恢復**森林球體**的能量了。」

在這項活動中，你將建造一個使用所有邏輯閘的電路來解決挑戰。

---

<img src="../media/pattern.webp" alt="邏輯工作坊的裝飾圖案" width="100%" />

## 目標

建構並驗證以下邏輯電路：

- 當下列條件成立時，**球體**會亮起：
  - **B** 是開啟的，**或者**
  - **A** 是開啟的 **且** **C** 是關閉的。

此電路使用 **NOT**、**AND** 和 **OR**。

---

## 所需元件

- 3 個 **輸入**: A, B, C  
- 1 個 **NOT 閘**  
- 1 個 **AND 閘**  
- 1 個 **OR 閘**  
- 1 個 **輸出**

<img src="../media/actividad_4.png" alt="結合 AND、OR、NOT 三個邏輯閘，由三個輸入和一個輸出組成的示例" width="20%" class="lg-img"/>

---

<img src="../media/paisaje_bosque.webp" alt="魔法森林的風景" width="100%" />

## 模擬器操作指引

### 1. 放置元件
1. 確保你處於 **編輯** 模式。
2. 在左側工具欄中選擇並放置以下元件：
   - 放置 **A**、**B**、**C**（輸入）。  
   - 放置 **NOT**、**AND**、**OR**。  
   - 在右側放置一個 **輸出**。

### 2. 連接元件
1. 連接 **C ➔ NOT**（這將產生 **NOT C**）。  
2. 將 **A** 和 **NOT C** 連接到 **AND**（這將產生 **A AND NOT C**）。  
3. 將 **(A AND NOT C)** 和 **B** 連接到 **OR**。  
4. 將 **OR 的輸出 ➔ 輸出**。

---

## 指導測試

嘗試這些組合並檢查 **輸出**：

1. **A = 1, B = 0, C = 0** ➔ `NOT C = 1` ➔ `A AND NOT C = 1` ➔ `Output = 1`  
2. **A = 1, B = 0, C = 1** ➔ `NOT C = 0` ➔ `A AND NOT C = 0` ➔ `Output = 0`  
3. **A = 0, B = 1, C = 1** ➔ `B = 1` ➔ `Output = 1`  
4. **A = 0, B = 0, C = 0** ➔ 兩個路徑都為 `0` ➔ `Output = 0`  

如果四個組合都符合，球體將正確亮起！

---

## 真值表

<details class="lg-details">
<summary class="lg-summary">
查看完整的真值表
</summary>

<div class="lg-div">

| A | B | C | NOT C | A AND NOT C | Output = (A AND NOT C) OR B  |
|---|---|---|-------|-------------|------------------------------|
| 0 | 0 | 0 |   1   |      0      |              0               |
| 0 | 0 | 1 |   0   |      0      |              0               |
| 0 | 1 | 0 |   1   |      0      |              1               |
| 0 | 1 | 1 |   0   |      0      |              1               |
| 1 | 0 | 0 |   1   |      1      |              1               |
| 1 | 0 | 1 |   0   |      0      |              0               |
| 1 | 1 | 0 |   1   |      1      |              1               |
| 1 | 1 | 1 |   0   |      0      |              1               |

</div>
</details>

---

## 模擬器

{{< logic-gate-icon-guide >}}

<iframe src="https://drendog.github.io/Logic-Circuit-Simulator/" title="邏輯閘模擬器" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

---

## 常見問題及其解決方法

- **輸出總是 0：** 檢查 **OR** 是否接收到**兩個信號**：`B` **和** `A AND NOT C`。

---

## 你學到了什麼？

- 邏輯閘可以結合起來創造出比單一邏輯閘更複雜的邏輯決策。
- **NOT** 可以反轉信號；**AND** 用來結合多個條件；**OR** 用來加入替代路徑。  
- 最終的輸出取決於邏輯閘的連接方式，以及信號處理的順序。

---

## 接下來

在下一個任務中，你將再次遇見這片森林中的角色，並使用相同的三個邏輯閘來解決更大的挑戰。
```