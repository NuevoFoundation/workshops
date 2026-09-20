```markdown
---
title: "房间 2：提交困境"
description: "学习如何更改并将其提交到你的代码仓库。"
difficulties: ["初学者"]
weight: 2
---

当你进入第二个房间时，代码片段漂浮在空中。中心的终端闪烁着一条信息：“将混乱变为有序。提交你所做的更改以继续前进。”

## 你的任务

1. 在你的本地代码仓库中创建一个名为 `solution.md` 的新文件。
2. 将第一个房间的密钥代码添加到此文件中。
3. 将更改暂存并提交。

## 指导步骤

1. 在终端中，确保你处于 `escape-room` 目录中。
2. 创建文件并添加代码：

```
echo "Secret Code: GITHUB_BASICS_101" > solution.md
```

3. 暂存并提交你的更改：

```
git add solution.md
git commit -m "Add solution for Room 1"
```

{{< notice warning >}}
**提示：** 总是要撰写清晰且描述充分的提交信息。这有助于你和他人理解项目的历史。
{{< /notice >}}

{{< expand "测试：检验你的知识" >}}

**问题 1：你使用哪个命令来暂存更改？**

{{< button href="#" >}}git stage{{< /button >}}
{{< button href="#" >}}git add{{< /button >}}
{{< button href="#" >}}git commit{{< /button >}}

**问题 2：在提交命令中，-m 参数的作用是什么？**

{{< button href="#" >}}标记提交为重要{{< /button >}}
{{< button href="#" >}}立即合并提交{{< /button >}}
{{< button href="#" >}}允许你添加提交信息{{< /button >}}

{{< /expand >}}

当你完成提交时，输入你使用的提交信息：

<label for="finput">提交信息输入框：</label><br>
<input type="text" id="finput" name="finput"><br>
```