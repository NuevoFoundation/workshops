---
title: "使用模擬器"
date: 2025-10-20T01:00:18-05:00
weight: 1
draft: false
---

<link rel="stylesheet" href="../_logic-gates.css" type="text/css" />

## 簡介

你已經來到哥斯大黎加的神奇森林。在這個地方住著一個保護動物和自然的神秘球體，但它的能量正在消失中。  
為了恢復能量，我們首先需要學習如何使用邏輯電路模擬器。

---

<img src="../media/pattern.webp" alt="邏輯工作坊的裝飾圖案" width="100%" />

## 模擬器的基本使用

在了解邏輯閘之前，我們需要先了解如何正確放置元件以及如何連接它們。

### 1. 主要介面

左側有一個工具欄，裡面包含所有可用的元件，例如：

- 輸入（Input） 
<img src="../media/logicinput.png" alt="輸入元件的圖示" width="40px" class="lg-img"/>

- 輸出（Output） 
<img src="../media/logicoutput.png" alt="輸出元件的圖示" width="40px" class="lg-img"/>

- 時鐘（Clock, CLK） 
<img src="../media/logicclock.png" alt="時鐘元件的圖示" width="64px" class="lg-img"/>

- 邏輯閘（AND, OR, NOT, 等）  
<div style="margin-left: 20px; display: flex; gap: 5px; align-items: center;">
   <img src="../media/logicand.png" alt="AND 邏輯閘的圖示" width="64px"/>
   <img src="../media/logicor.png" alt="OR 邏輯閘的圖示" width="64px"/>
   <img src="../media/logicnot.png" alt="NOT 邏輯閘的圖示" width="64px"/>
</div>

在頂部，有一些重要的按鈕：
- **編輯（Edit）**：放置元件的模式。
- **移動（Move）**：移動已放置的元件。
- **刪除（Delete）**：移除元件。
- **保存 / 加載（Save / Load）**：保存或加載電路。
<img src="../media/menu.png" alt="模擬器功能表的圖示" class="lg-img"/>

白色區域就是你用來建造電路的地方。

---

## 第一個任務：將一個輸入連接到輸出

### 步驟

1. 確保選中 **編輯（Edit）** 模式。
2. 在左側工具欄中，點擊 **Input（輸入）**。
3. 在白色區域內任意單擊以放置輸入元件。
4. 然後選擇 **Output（輸出）** 並再次單擊，將其放置在輸入元件的右側或附近。
5. 要連接它們：
   - 點擊輸入元件的小圓圈。
   - 然後點擊輸出元件的小圓圈。
   - 連接線將自動繪製。
6. 點擊輸入元件的符號以切換其值開啟或關閉：
   - `0` = 關閉
   - `1` = 開啟

如果輸入為 `1`，並且輸出顯示 `1`，你的電路就正常運行。

---

## 你學到了什麼？

- 如何放置元件（點擊元件，然後在白色區域內點擊放置）。
- 如何使用連接圓圈連接元件。
- 如何切換輸入信號。
- 這個電路尚未使用邏輯閘，只是一個直接連接。

## 模擬器

{{< logic-gate-icon-guide >}}

<iframe src="https://drendog.github.io/Logic-Circuit-Simulator/" title="邏輯閘模擬器" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

---

## 接下來

準備好後，在下一個活動中，你將遇到巨嘴鳥並學習如何使用 **AND** 邏輯閘。