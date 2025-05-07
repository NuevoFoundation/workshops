---
title: "房間 2: 提交難題"
description: "學習如何修改並提交更改到您的倉庫中。"
difficulty: "初學者"
weight: 2
---

# 房間 2: 提交難題

{{< figure src="../images/room2_commit.jpg" title="代碼片段在中央終端周圍漂浮，等待被組織" >}}

當你進入第二個房間時，代碼片段在空中漂浮。中心的終端閃爍著一條信息："將混亂轉變為秩序。提交您的更改以繼續。"

## 任務

1. 在本地倉庫中創建一個名為 `solution.md` 的新文件。
2. 將來自房間 1 的秘密代碼添加到此文件中。
3. 暫存並提交您的更改。

## 指導

1. 在終端中，確保您處於 `escape-room` 目錄下。
2. 創建文件並添加代碼：

```
echo "Secret Code: GITHUB_BASICS_101" > solution.md
```

3. 暫存並提交您的更改：

```
git add solution.md
git commit -m "Add solution for Room 1"
```

{{< notice warning >}}
**提示：** 始終編寫清晰且描述性的提交信息。它們有助於您和他人理解項目的歷史。
{{< /notice >}}

{{< expand "小測驗: 測試您的知識" >}}

**問題 1: 您使用什麼命令來暫存更改？**

{{< button href="#" >}}git stage{{< /button >}}
{{< button href="#" >}}git add{{< /button >}}
{{< button href="#" >}}git commit{{< /button >}}

**問題 2: 在提交命令中 -m 標誌的作用是什麼？**

{{< button href="#" >}}標記提交為重要{{< /button >}}
{{< button href="#" >}}立即合併提交{{< /button >}}
{{< button href="#" >}}允許您添加提交信息{{< /button >}}

{{< /expand >}}

完成提交後，輸入您使用的提交信息：

[輸入提交信息的欄位]

{{< notice info >}}
注意：實際的輸入欄位和加密功能需要單獨實現，因為 Hugo 本身不提供這項功能。
{{< /notice >}}