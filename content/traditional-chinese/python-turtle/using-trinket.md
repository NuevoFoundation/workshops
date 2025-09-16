---
title: "使用 Trinket"
date: 2019-07-25T13:24:17-07:00
weight: 1
draft: false
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/_DbRac3d0lo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

為了幫助 Alex 住在蜂巢裡，他需要學習如何製作蜂巢！我們將使用 Python 的 `turtle` 函式庫為 Alex 繪製一個蜂巢。蜂巢形狀是你經常在蜂巢中看到的圖案。想像一堆小的、平坦的六邊形，它們完美地拼在一起，不留任何縫隙。這些六邊形就叫做多邊形。

<img src="../media/turtle_honeycomb.png" alt="A photo of a honeycomb" width="25%" />

## 使用 Trinket

今天你將使用 Trinket 來學習如何用 Python 編程。以下是你今天將使用的互動式窗口範例：

<iframe src="https://trinket.io/embed/python/1363ac22be" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

在我們開始之前，先來了解一下這個窗口是如何工作的。`main.py` 檔案包含代碼，即計算機要執行的指令。按下 **run** 按鈕就告訴計算機執行代碼中的指令。任何代碼運行的結果都將顯示在下方白色屏幕的 **result** 標籤下。今天，我們的結果將是一個繪圖動畫。

接下來，讓我們進一步解釋一下 `main.py` 檔案中提供的一些代碼。

{{% notice tip %}}

## 函式庫和導入語句

在代碼的頂部，你會看到以下這行：

```
import turtle
```

這條語句允許我們導入 `turtle` 函式庫提供的所有繪圖功能。**函式庫**是將相關功能集結在一起供 Python 語言使用的地方。例如，`turtle` 函式庫在結果窗口中引入了一隻有助於繪圖的藝術海龜，我們可以用代碼控制它來繪製圖像。

## 注釋

以 `#` 開頭的灰色行稱為 **注釋**。這些是代碼中的註解，用於用簡單的英語解釋正在發生的事情。由於計算機會忽略它們，通常用於讓其他開發者在處理相同代碼時更容易讀懂和理解正在發生的事情。

{{% /notice %}}