---
title: "房間 1：岔路口"
description: "透過 Fork 和 Clone 一個儲存庫來展開你的冒險。"
difficulties: ["初學者"]
weight: 1
---

你在一個燈光昏暗的房間中醒來。房間中央的基座上放著一個發光的 GitHub 標誌。一個聲音迴盪著：「要繼續前進，你必須為前方的路選擇岔道。」

聲音所說的「路」，其實是指一個 GitHub 儲存庫。Fork 是在你的帳戶中創建該儲存庫的副本，讓你可以進行更改，而不影響原始副本。

## 任務內容

1. 創建一個 GitHub 帳戶（如果你還沒有的話）。
2. Fork 此儲存庫：`https://github.com/VerisimilitudeX/escape-room`
3. 將你 Fork 的儲存庫 Clone 到你的本地端設備。

## 操作說明

1. 前往 GitHub 並註冊或登入。
2. 瀏覽到指定的儲存庫網址，點擊右上角的「Fork」按鈕。
3. Fork 完成後，點擊綠色的「Code」按鈕並複製 URL。
4. 打開終端機，運行以下命令：

   ```pwsh
   git clone <YOUR_FORKED_REPO_URL>
   cd escape-room
   ```

{{% notice tip %}}
**提示：** 在你 Clone 下來的儲存庫中，找找看 `README.md` 文件。這個文件包含了一個可以解鎖下一個房間的秘密密碼！
{{% /notice %}}

{{< expand "需要幫助嗎？" >}}
如果你卡住了，可以試試以下步驟：

1. 確保你已經登入 GitHub。
2. 確認你有訪問正確的儲存庫網址。
3. 如果在使用 git 命令時遇到問題，確保你的系統已安裝 [git](https://git-scm.com/downloads)。
{{< /expand >}}

當你準備好前往下一步時，輸入你發現的秘密密碼：

<label for="finput">輸入秘密密碼的欄位：</label><br>
<input type="text" id="finput" name="finput"><br>