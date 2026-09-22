```markdown
---
title: "房間 2：Commit 的謎題"
description: "學習進行更改並提交到您的存儲庫。"
difficulties: ["初學者"]
weight: 2
---

當您進入第二個房間時，程式碼片段在空中漂浮。中央的終端機閃爍著一段訊息：「令混亂有序。提交更改以繼續。」

## 您的任務

1. 在本地存儲庫中建立一個名為 `solution.md` 的新文件。
2. 將房間 1 的秘密代碼添加到此文件。
3. 分階段並提交您的更改。

## 指導

1. 在終端機中，確保您在 `escape-room` 目錄內。
2. 建立文件並添加代碼：

```
echo "Secret Code: GITHUB_BASICS_101" > solution.md
```

3. 分階段並提交更改：

```
git add solution.md
git commit -m "Add solution for Room 1"
```

{{< notice warning >}}
**提示：** 總是撰寫清晰且具描述性的提交訊息。它們有助於您和其他人了解您的專案歷史。
{{< /notice >}}

{{< expand "測驗：測試您的知識" >}}

**問題 1：哪個指令用來分階段更改？**

{{< button href="#" >}}git stage{{< /button >}}
{{< button href="#" >}}git add{{< /button >}}
{{< button href="#" >}}git commit{{< /button >}}

**問題 2：在 commit 指令中，-m 參數的作用是什麼？**

{{< button href="#" >}}標記提交為重要{{< /button >}}
{{< button href="#" >}}立即合併提交{{< /button >}}
{{< button href="#" >}}允許您添加提交訊息{{< /button >}}

{{< /expand >}}

當您完成提交後，輸入您使用的提交訊息：

<label for="finput">提交訊息的輸入框：</label><br>
<input type="text" id="finput" name="finput"><br>
```