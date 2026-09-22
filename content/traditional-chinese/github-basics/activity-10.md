---
title: "第10房間：部署巢穴"
description: "學習如何使用 GitHub Pages 部署您的專案。"
difficulties: ["中級"]
weight: 10
---

您進入了最後一個房間，看到一個巨大的螢幕正在顯示網站，旁邊漂浮著「部署」按鈕。一個勝利的聲音響起：「部署你的勝利，讓所有人看見！」

## 您的任務

1. 為您的儲存庫啟用 GitHub Pages。
2. 建立一個簡單的 index.html 文件。
3. 推送文件並檢視已部署的網站。

## 指導步驟

1. 進入您的儲存庫中的 **「Settings」** 頁籤。
2. 滾動至「GitHub Pages」部分。
3. 在「Source」下，選擇您想要部署的分支（通常是 `main`）。
4. 在您的本地儲存庫中，於根目錄創建一個 `index.html` 文件。
5. 為文件新增一些 HTML 代碼，例如：

   ```html
   <!DOCTYPE html>
   <html>
     <head>
       <title>我的 GitHub Pages 網站</title>
     </head>
     <body>
       <h1>你好，GitHub Pages！</h1>
       <p>我已經完成了 GitHub 冒險遊戲！</p>
     </body>
   </html>
    ```

6. 提交並推送此文件到您的儲存庫。
7. 等待幾分鐘讓 GitHub 處理您的請求，然後造訪您的網站：https://<username>.github.io/<repository-name>，其中 `<username>` 是您的 GitHub 使用者名稱，`<repository-name>` 是您的儲存庫名稱。

{{< notice info >}}
注意：推送更改後，您的網站部署可能需要幾分鐘時間完成。
{{< /notice >}}

{{< mermaid >}}
graph TD
A[啟用 GitHub Pages] --> B(創建 index.html)
B --> C(提交並推送)
C --> D{網站已部署？}
D -->|是| E[瀏覽您的網站]
D -->|否| F[等待幾分鐘]
F --> D
{{< /mermaid >}}

在您的網站部署完成後，您網站的標題是什麼？當您造訪網站時，可以在瀏覽器頂部找到該標題。在下方輸入該標題：

<label for="finput">網頁標題輸入欄：</label><br>
<input type="text" id="finput" name="finput"><br>

{{< notice success >}}
恭喜您，GitHub 大師！您已完成所有挑戰並成功部署了您的勝利。您已經逃出了 GitHub 冒險遊戲！
{{< /notice >}}