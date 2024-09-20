---
title: "房间 1: 岔路口"
description: "通过分叉和克隆仓库开始你的冒险。"
difficulty: "初学者"
weight: 1
---

{{< figure src="../images/room1_fork.jpg" title="代码地牢的第一个房间，被神秘的 GitHub 标志照亮" >}}

你在一个昏暗的房间中醒来。中央的一个基座上有一个发光的 GitHub 标志。一个声音回荡：“要继续前进，你必须分叉前面的道路。”

声音所指的路径是一个 GitHub 仓库。分叉会在你的账户中创建一个该仓库的副本，使你可以更改而不影响原始副本。

## 你的任务

1. 创建一个 GitHub 账户（如果你还没有的话）。
2. 分叉该仓库: `https://github.com/VerisimilitudeX/escape-room`
3. 将你分叉的仓库克隆到本地机器。

## 指导

1. 前往 GitHub 注册或登录。
2. 导航到仓库 URL，点击右上角的“Fork”按钮。
3. 分叉后，点击绿色的“Code”按钮并复制 URL。
4. 打开终端并运行：

   ```pwsh
   git clone <YOUR_FORKED_REPO_URL>
   cd escape-room
   ```

{{% notice %}}
**提示:** 在你克隆的仓库中查找 `README.md` 文件。它包含解锁下一个房间的密钥！
{{% /notice %}}

{{< expand "需要帮助吗？" >}}
如果你卡住了，试试以下步骤：

1. 确保你已登录 GitHub。
2. 确认你已导航到正确的仓库 URL。
3. 如果你对 git 命令有困难，请确保你的系统上已安装 [git](https://git-scm.com/downloads)。
{{< /expand >}}

当你准备好继续时，输入你找到的密钥：

[输入密钥的字段]

{{% notice %}}
注意: 实际输入字段和加密功能需要单独实现，因为 Hugo 本身不提供此功能。
{{% /notice %}}