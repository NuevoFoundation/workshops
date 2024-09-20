---
title: "房間 1: 岔路"
description: "開始您的冒險，通過分叉和克隆一個倉庫。"
difficulty: "初學者"
weight: 1
---

{{< figure src="../images/room1_fork.jpg" title="代碼地牢的第一個房間，被神秘的 GitHub 標誌照亮" >}}

你在一個燈光昏暗的房間中醒來。中心的台座上有一個發光的 GitHub 標誌。一個聲音迴盪著：“要繼續前進，你必須分叉前面的道路。”

聲音所指的“道路”是一個 GitHub 倉庫。分叉會在您的帳戶中創建倉庫的副本，允許您進行更改而不影響原始副本。

## 你的任務

1. 創建一個 GitHub 帳戶（如果您還沒有的話）。
2. 分叉倉庫: `https://github.com/VerisimilitudeX/escape-room`
3. 將您分叉的倉庫克隆到本地機器。

## 指引

1. 進入 GitHub 並註冊或登入。
2. 瀏覽至倉庫 URL，點擊右上角的“Fork”按鈕。
3. 完成分叉後，點擊綠色的“Code”按鈕並複製 URL。
4. 打開終端並運行:

   ```pwsh
   git clone <YOUR_FORKED_REPO_URL>
   cd escape-room
   ```

{{% notice %}}
**提示:** 查看您克隆的倉庫中的 `README.md` 文件。它包含解鎖下一個房間的秘密代碼！
{{% /notice %}}

{{< expand "需要幫助嗎？" >}}
如果您陷入困境，請嘗試以下步驟：

1. 確保您已登錄到 GitHub。
2. 檢查您是否已導航到正確的倉庫 URL。
3. 如果您在使用 git 命令時遇到問題，確保系統上已安裝 [git](https://git-scm.com/downloads)。
{{< /expand >}}

當您準備好繼續時，輸入您找到的秘密代碼：

[秘密代碼輸入欄]

{{% notice %}}
注意: 實際的輸入欄和加密功能需要單獨實施，因為 Hugo 並不提供此功能。
{{% /notice %}}
