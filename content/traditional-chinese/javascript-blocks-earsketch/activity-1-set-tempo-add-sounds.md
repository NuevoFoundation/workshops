---
title: "活動 1 - 設定速度與新增聲音"
date: 2019-07-23T11:45:38-07:00
weight: 3
draft: false
---

讓我們更深入了解預先存在的程式碼，並理解它的意義。

<img src="../img/screenshot-setup-complete.png" height="400"/>

`setTempo()` 函數用於設定整個專案的速度 (節拍)。速度是指一段音樂演奏的速度。改變專案的速度可以創建出不同風格的音樂。試試將 `setTempo` 函數中的數字改變，看看會發生什麼！請確保輸入的數字介於 45 到 220 之間。以下是一些可以參考的速度建議。

<img src="../img/img-tempo1.png" height="200"/>

現在我們已經設定好了速度，接下來是新增聲音。為了完成這個步驟，我們需要使用 `fitMedia()` 函數。我們將把新的程式碼放在 `setTempo()` 函數的下方。

## 活動 1

1. 在程式碼編輯器左側找到紫色的 `fitMedia()` 區塊。
2. 拖動 `fitMedia()` 區塊，將其插入到 `setTempo` 區塊的下方。
3. 你可能會注意到，當加入這個區塊時，Earsketch 生成了一些需要稍後替換的預設字串 (placeholder texts)。這些預設字串也被稱為 `參數`。

<img src="../img/screenshot-parameters.png" height="100"/>

我們需要將每個字串替換為有效的值：

- `sound` - 前往 "Sounds" 面板，找到你喜歡的聲音。在 `fitMedia()` 函數的 "sound" 部分，點擊後，在你希望加入的聲音旁邊按下 "Paste" 按鈕。聲音的名稱應該會出現在 `fitMedia()` 區塊內。
- `trackNumber` - 使用下拉選單選擇任何正整數作為軌道編號。在此例中，選擇 `1`。
- `start/end` - 這些參數是用來定義小節的正整數。一個小節是指與一定拍子數相對應的時間段。試試將 `start` 設定為 `1`，`end` 設定為 `9`。

你的程式碼應該看起來像這樣：

<img src="../img/screenshot-fit-media.png" height="400"/>

{{% notice warning %}}

確保函數區塊和文字都正確放置。

{{% /notice %}}

5. 在輸入自己的參數後，點擊 "執行 (run)"，然後按下 "播放 (play)" 按鈕來聆聽你的音訊片段！

    - **如果看到紅色文字，這表示有錯誤！請尋求幫助。** `fitMedia()` 函數是 Earsketch 製作音樂的核心。我們會頻繁使用這個函數，所以如果對其用法有任何疑問，請務必詢問！

{{% notice info %}}

**數位音訊工作站 (Digital Audio Workstation, DAW)** 是聲音顯示的位置。它位於你的 EarSketch 視窗的中央頂端。以下是一首歌曲不同片段在 DAW 中呈現的範例。

<img src="../img/screenshot-daw.png" height="400"/>

{{% /notice %}}