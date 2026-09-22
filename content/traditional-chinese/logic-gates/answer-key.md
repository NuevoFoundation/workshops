---
title: "邏輯閘工作坊：解答"
date: 2025-12-04T10:00:00-06:00
draft: false
hidden: true
weight: 300
---

<link rel="stylesheet" href="../_logic-gates.css" type="text/css" />

{{% notice tip %}}
注意：參加此工作坊，請確保使用相容的瀏覽器，並啟用 JavaScript 以使用互動模擬器。

活動可能包含在模擬器中選擇選項或元件。
{{% /notice %}}

### 活動 1：AND 閘
預期答案：只有當兩個輸入均為有效（1）時，輸出才會激活（1）。

提示：嘗試所有可能的兩輸入組合。只有當兩個輸入都是 1 時，輸出才會是 1。

{{< workshop-image filename="media/answer_1.png" alt="包含兩個輸入和一個輸出的 AND 電路解決方案視覺圖" width="40%" class="lg-img" >}}

---

### 活動 2：OR 閘
預期答案：如果至少有一個輸入是有效（1），輸出就會激活（1）。

提示：如果一個或兩個輸入是 1，輸出就是 1。如果兩個輸入都是 0，才是 0。

{{< workshop-image filename="media/answer_2.png" alt="包含兩個輸入和一個輸出的 OR 電路解決方案視覺圖" width="40%" class="lg-img" >}}

---

### 活動 3：NOT 閘
預期答案：輸出總是與輸入相反。

提示：如果輸入是 0，輸出會是 1。如果輸入是 1，輸出會是 0。

{{< workshop-image filename="media/answer_3.png" alt="包含一個輸入和一個輸出的 NOT 電路解決方案視覺圖" width="40%" class="lg-img" >}}

**雙重 NOT 挑戰：**  
如果將兩個 NOT 閘串聯，信號將被倒轉兩次，即： 
- 如果輸入是 0：第一個 NOT 將其轉換為 1，第二個將其轉回 0。  
- 如果輸入是 1：第一個 NOT 將其轉換為 0，第二個將其轉回 1。

**結論：** 兩個串聯的 NOT 閘會抵銷倒轉效果，輸出將等於原始輸入。

---

### 活動 4：AND + NOT（倒置閘）
預期答案：輸出是 1，除非兩個輸入都是 1（使用 AND 然後是 NOT）。

提示：NOT 閘會將 AND 的結果反向。只有當兩個輸入都是 1 時，輸出才會是 0。

{{< workshop-image filename="media/answer_5.png" alt="包含兩個輸入和一個輸出的 AND 和 NOT 組合電路解決方案視覺圖" width="40%" class="lg-img" >}}

---

### 活動 5：OR + NOT（靜音輸出）
預期答案：輸出是 1 僅當兩個輸入都是 0（使用 OR 然後是 NOT）。

提示：NOT 閘會將 OR 的結果反向。如果任何輸入是 1，輸出就是 0。

{{< workshop-image filename="media/answer_6.png" alt="包含兩個輸入和一個輸出的 OR 和 NOT 組合電路解決方案視覺圖" width="40%" class="lg-img" >}}

---

### 活動 6：邏輯閘結合（AND, OR, NOT）
預期答案：如果 B 是 1，或者 A 是 1 並且 C 是 0，則輸出被激活（使用 NOT 將 C 反轉）。

提示：根據邏輯條件組合邏輯閘，建構電路。測試活動中建議的案例。

1. **識別輸入和輸出：**  
- 輸入：A, B, C  
- 輸出：Output  

2. **使用 NOT 反轉輸入 C：**  
- 將 C 連接到 NOT 閘以獲得 `NOT C`。

3. **將 A 和 NOT C 與 AND 結合：**  
- 將 A 和 `NOT C` 連接到 AND 閘以獲得 `A AND NOT C`。

4. **將前一結果與 B 與 OR 結合：**  
- 將 `A AND NOT C` 和 B 連接到 OR 閘以獲得最終輸出：`(A AND NOT C) OR B`。

5. **將 OR 的輸出連接到 Output。**

**連接範例：**

{{< workshop-image filename="media/answer_4.png" alt="包含三個輸入和一個輸出的 AND, OR, NOT 電路解決方案視覺圖" width="40%" class="lg-img" >}}

**指導測試：**

- A = 1, B = 0, C = 0 → Output = 1  
- A = 1, B = 0, C = 1 → Output = 0  
- A = 0, B = 1, C = 1 → Output = 1  
- A = 0, B = 0, C = 0 → Output = 0  

---

### 活動 7：差異邏輯（使用 AND/OR/NOT 實現 XOR）
預期答案：只有當輸入不同時，輸出才是 1（使用 AND, OR 和 NOT 的組合）。

提示：嘗試所有輸入組合。只有當一個輸入是 1 而另一個是 0 時，輸出才是 1。

1. **識別輸入與輸出：**  
- 輸入：A, B  
- 輸出：Output  

2. **建立 OR 組合：**  
- 將 A 和 B 連接到 OR 閘以獲得 `OR_AB`。

3. **建立 AND 組合：**  
- 將 A 和 B 連接到 AND 閘以獲得 `AND_AB`。

4. **反轉 AND 的結果：**  
- 將 `AND_AB` 的輸出連接到 NOT 閘以獲得 `NOT_AND_AB`。

5. **使用另一個 AND 將兩者結合：**