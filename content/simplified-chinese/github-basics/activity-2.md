```markdown
---
title: "房间 2: 提交难题"
description: "了解如何在存储库中进行更改并提交它们。"
difficulty: "初学者"
weight: 2
---

# 房间 2: 提交难题

{{< figure src="../images/room2_commit.jpg" title="代码片段围绕中央终端漂浮，等待被整理" >}}

进入第二个房间时，代码片段在空中漂浮。中央的终端闪烁着一条信息：“将混乱化为秩序。提交您的更改以继续。”

## 你的任务

1. 在本地存储库中创建一个名为 `solution.md` 的新文件。
2. 将房间 1 的秘密代码添加到此文件中。
3. 暂存并提交您的更改。

## 指南

1. 在终端中，确保您位于 `escape-room` 目录。
2. 创建文件并添加代码：

```
echo "Secret Code: GITHUB_BASICS_101" > solution.md
```

3. 暂存并提交您的更改：

```
git add solution.md
git commit -m "Add solution for Room 1"
```

{{< notice warning >}}
**提示：** 始终撰写清晰且描述性的提交信息。它们帮助您和其他人理解项目的历史。
{{< /notice >}}

{{< expand "测验：测试您的知识" >}}

**问题 1: 您用哪个命令来暂存更改？**

{{< button href="#" >}}git stage{{< /button >}}
{{< button href="#" >}}git add{{< /button >}}
{{< button href="#" >}}git commit{{< /button >}}

**问题 2: 提交命令中的 -m 标志有什么作用？**

{{< button href="#" >}}将提交标记为重要{{< /button >}}
{{< button href="#" >}}立即合并提交{{< /button >}}
{{< button href="#" >}}允许您添加提交信息{{< /button >}}

{{< /expand >}}

当您提交后，输入您使用的提交信息：

[提交信息的输入字段]

{{< notice info >}}
注意：实际的输入字段和加密功能需要单独实现，因为 Hugo 不提供此功能。
{{< /notice >}}
```