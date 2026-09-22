---
title: "進行預測"
prereq: "Python"
icon: ""
draft: false
weight: 5
---

# 訓練模型

為了讓我們的模型能夠進行預測，我們需要訓練它。但該怎麼做呢，其實我們已經在做了 😉！

訓練一個模型的目的是驗證數據之間是否有良好的關係，以及我們的模型是否適合該數據。

我們通過確保 R<sup>2</sup> 接近 1 來做到這一點。接下來，我們需要使用包含超過 10,000 筆數據的數據集來創建一個訓練數據集和測試數據集。訓練數據集將會是一個隨機樣本，而不是原本的 30 筆數據。根據德州大學埃爾帕索分校的建議，採樣 30% 是創建準確模型的理想方式。如需了解更多資訊，請參考這裡： ([訓練與測試集之間為什麼選擇 70/30 或 80/20 比例](https://scholarworks.utep.edu/cs_techrep/1209/))。

隨著員工人數的增加，數據集的數量也會增加，而 R<sup>2</sup> 的值也會發生變化。我們需要在每次包含超過 10,000 名員工的數據集增加時進行此操作，以確保我們的模型與當前員工數量保持一致。

# 進行預測

在下面的 Replit 中，您可以看到程式碼如何通過分割 10,000+ 筆紀錄文件的數據來創建一個「訓練數據集」和「測試數據集」，並分別進行預測。

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/LinearRegression-ConsoleApp#src/05-e1.py" target="_blank">啟動 Replit</a>

正如您所見，從圖表上生成的預測線在訓練數據集和測試數據集中非常相似。您還可以看到兩個數據集的 R<sup>2</sup> 值幾乎相同，有時甚至完全相同。

現在，您可以使用以下程式碼並更改 `experience` 變數為您想要的值，圖表將顯示基於您加入的經驗值所預測的薪資。

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/LinearRegression-ConsoleApp#src/05-e2.py" target="_blank">啟動 Replit</a>