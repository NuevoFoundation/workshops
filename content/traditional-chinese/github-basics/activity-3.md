```markdown
---
title: "房間 3: 拉取請求入口"
description: "學習推送變更並創建拉取請求。"
difficulty: "Intermediate"
weight: 3
---

# 房間 3: 拉取請求入口

{{< figure src="../images/room3_pull_request.jpg" title="一扇巨大的門矗立在你面前，上面寫著 '拉取請求'" >}}

一扇巨大的門擋住了你的去路，上面寫著 "拉取請求"。一個標誌上寫著: "要打開這扇門，您的變更必須經過審核。"

## 你的任務

1. 將本地變更推送到您的派生倉庫。
2. 向原始 `CodeDungeon/escape-room` 倉庫創建一個拉取請求。

## 指引

1. 推送您的變更：

```
git push origin main
```

2. 前往 GitHub 上的已派生倉庫。
3. 點擊 "Contribute" 然後 "Open pull request"。
4. 填寫標題為 "Solution for Room 2" 並提供簡要描述。
5. 點擊 "Create pull request"。

{{< notice info >}}
**提示：** 注意您的拉取請求。地牢守衛（倉庫維護者）將審核並可能要求更改！
{{< /notice >}}

{{< expand "拉取請求過程" >}}

**推送變更**
首先，將本地變更推送到您的遠程倉庫：

```
git push origin main
```

**創建拉取請求**
1. 前往您在 GitHub 上的派生倉庫
2. 點擊 "Pull requests" 標籤
3. 點擊 "New pull request"
4. 確認基礎倉庫是原始倉庫，頭部倉庫是您的派生倉庫
5. 點擊 "Create pull request"

**等待審核**
創建拉取請求後：
1. 等待維護者審核您的變更
2. 處理任何它們提供的反饋
3. 如果需要，推送新的提交來更新拉取請求

{{< /expand >}}

創建拉取請求後，輸入其編號以繼續：

[拉取請求編號輸入框]

{{< notice info >}}
注意：實際的輸入框和加密功能需要單獨實現，因為 Hugo 不提供此功能。
{{< /notice >}}
```