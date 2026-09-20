---
title: "Room 7: 自動化走廊"
description: "利用 GitHub Actions 的力量來自動化您的工作流程。"
difficulties: ["advanced"]
weight: 7
---

你進入了一個充滿活動的房間。齒輪轉動，傳送帶運作不停，象徵著自動化的過程。一個全息顯示屏亮起："通過自動化邁向勝利！"。

## 你的任務

1. 建立一個簡單的 GitHub Action 工作流程。
2. 通過將更改推送到您的存儲庫觸發工作流程。
3. 檢視自動化過程的結果。

## 說明

1. 在您的本地代碼庫中，建立一個名為 `.github/workflows` 的新目錄。
2. 在該目錄內，建立一個名為 `hello-world.yml` 的文件。
3. 在文件中新增以下內容：

   ```yaml
   name: Hello World Workflow
   on: [push]
   jobs:
     say-hello:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v2
         - name: Say Hello
           run: echo "Hello, GitHub Actions!"

    ```
4. 提交該文件並推送到您的 GitHub 存儲庫。
前往您的 GitHub 存儲庫中的 "Actions" 標籤，檢視工作流程的運行情況。

{{< notice warning >}}
注意：GitHub Actions 是強大的自動化工具，但請留意免費帳戶的使用限制。
{{< /notice >}}
{{< mermaid >}}
graph TD
A[創建工作流程文件] --> B(提交並推送)
B --> C{工作流程啟動了嗎？}
C -->|是| D[檢視結果]
C -->|否| E[檢查工作流程文件是否有錯誤]
E --> B
{{< /mermaid >}}

當您的工作流程成功運行後，"Say Hello" 步驟的輸出是什麼？請將其輸入在下方：

<label for="finput">輸入工作流程輸出：</label><br>
<input type="text" id="finput" name="finput"><br>

{{< expand "提示" >}}
輸出應該與您在工作流程文件中的 echo 命令中指定的內容完全一致。
{{< /expand >}}

{{< notice success >}}
太棒了！您已經使用 GitHub Actions 完成了第一個自動化任務。繼續挑戰下一個關卡吧！
{{< /notice >}}