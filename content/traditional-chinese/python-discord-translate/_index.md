---
title: "Discord: 建立一個翻譯機器人"
description: "透過整合 Discord 學習中級 Python 概念，如使用程式庫和 API"
date: 2025-09-15T10:11:00-07:00
prereq: "Python 基礎"
difficulties: ["中級"]
language: "python"
topics: ["程式設計基礎"]
icon: "fab fa-python"
draft: false
---

## 概覽
歡迎來到課程 **Python：建立 Discord 翻譯機器人**！

{{< alert theme="info" >}}
<img src="media/NF_mascot.jpg" alt="Nuvi mascot" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Nuvi 說：</strong>準備好寫點超棒的程式嗎？我們將來建立一個超酷的機器人，它能跨越語言的障礙——就像一位聰明的朋友，即時翻譯訊息。讓我們一起讓網路世界變得更友善，一次一個翻譯！
{{< /alert >}}

![Nuvi](media/NF_mascot.jpg)
Nuvi 剛剛建立了一個新的 Discord 伺服器，讓來自世界各地的朋友可以一起聊天、分享想法並策劃創意項目。但有一個問題：並不是每個人都講相同的語言。有些朋友會用英語，有些用西班牙語，有些用葡萄牙語，還有人用韓語或中文。對話經常被語言中斷，導致有些人覺得自己被邊緣化，但 Nuvi 希望所有人都能融入其中。

於是 Nuvi 想出了個主意：建立一個住在 Discord 伺服器裡的 **翻譯機器人**！你將從簡單的斜線指令開始，接著升級機器人功能，使用戶能註冊自己的偏好語言（例如英語或西班牙語），並在其他人用不同語言聊天時，能自動接收到私人訊息（DM）翻譯。為了實現這個目標，Nuvi（還有你！）將學到如何：

{{< alert theme="warning" >}}
<img src="media/NF_mascot.jpg" alt="Nuvi mascot" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>提醒：</strong>別擔心，如果現在聽起來有些術語很陌生，我們會一步一步地解析它們。到最後，你會看到這些組件如何像拼圖一樣拼湊在一起。
{{< /alert >}}

- 使用機器人用戶將 Python 程式碼連接到 Discord
- 安全地監聽訊息（配合正確的 intents）
- 執行本機翻譯服務（LibreTranslate）
- 檢測訊息是否為英語或西班牙語
- 為已註冊的用戶自動翻譯訊息
- 私密地發送翻譯結果，保持頻道整潔
- 還提供手動的 `/translate` 指令作為後備選項

完成後，你將擁有一個能幫助不同語言的朋友彼此聊天的機器人。你不只是寫程式而已——你正在為朋友間搭建語言溝通的橋樑。

### 路線圖
1. 設置：先決條件與 Discord 基本知識
2. 建立機器人：註冊 + 基本斜線指令
3. 執行本機翻譯服務：啟動 LibreTranslate + 測試程式
4. 完整功能：檢測、翻譯、註冊語言偏好
5. 進階目標：持久化（保存用戶語言選項）、更多指令

### 專有名詞表
- **端點：** 伺服器上的一個特定 URL，用來執行特定任務（例如 `/translate`）。
- **Intent：** 一種權限標誌，用於告訴 Discord 機器人可以接收哪些事件。
- **斜線指令：** 以 `/` 開頭的結構化指令，Discord 會對其進行驗證並提供自動完成。
- **翻譯伺服器：** 本地的 LibreTranslate 程式，用於檢測和翻譯文字。
- **持久化（進階目標）：** 保存用戶的語言選項，使其在重啟後仍然有效。

準備好幫助 Nuvi 嗎？讓我們一步步開始打造吧！