---
title: "第十房：部署之巢"
description: "學習如何使用 GitHub Pages 部署你的專案。"
difficulty: "中級"
weight: 10
---

# 第十房：部署之巢

{{< figure src="../images/room10_pages.jpg" title="顯示網站和浮動部署按鈕的巨大螢幕的房間" >}}

你進入最後的房間，看到一個顯示網站的巨大螢幕和浮動的“部署”按鈕。一個勝利的聲音宣告：“部署你的勝利，讓所有人看到！”

## 你的任務

1. 為你的儲存庫啟用 GitHub Pages。
2. 建立一個簡單的 index.html 檔案。
3. 推送檔案並查看你的部署網站。

## 指示

1. 前往你的儲存庫的“設定”標籤。
2. 向下捲動至“GitHub Pages”部分。
3. 在“來源”下，選擇你要部署的分支（通常是 `main`）。
4. 在你的本地儲存庫中，於根目錄創建一個 `index.html` 檔案。
5. 添加一些 HTML 代碼至檔案，例如：

   ```html
   <!DOCTYPE html>
   <html>
     <head>
       <title>My GitHub Pages Site</title>
     </head>
     <body>
       <h1>Hello, GitHub Pages!</h1>
       <p>I've completed the GitHub Adventure Game!</p>
     </body>
   </html>
   ```

6. 提交並推送此檔案到你的儲存庫。
7. 等待幾分鐘讓 GitHub 處理你的請求，然後訪問你的網站：https://<username>.github.io/<repository-name>，其中 <username> 是你的 GitHub 使用者名稱，<repository-name> 是你的儲存庫名稱。
{{< notice info >}}
注意：推送更改後，可能需要幾分鐘你的網站才能部署。
{{< /notice >}}
{{< mermaid >}}
graph TD
A[啟用 GitHub Pages] --> B(創建 index.html)
B --> C(提交並推送)
C --> D{網站部署了嗎？}
D -->|是| E[檢視你的網站]
D -->|否| F[等待幾分鐘]
F --> D
{{< /mermaid >}}
當你站點部署完成後，網頁的標題是什麼？你可以在訪問網站時在瀏覽器的頂部找到它。將其輸入在下面：
[輸入欄位供網頁標題]
{{< notice success >}}
恭喜你，GitHub 大師！你已完成所有挑戰並部署了勝利。你已經成功逃脫 GitHub 冒險遊戲！
{{< /notice >}}