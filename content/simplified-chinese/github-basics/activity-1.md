```yaml
---
title: "房间1：路口的岔道"
description: "通过分叉和克隆仓库开始你的冒险之旅。"
difficulties: ["初学者"]
weight: 1
---
```

你在一个昏暗的房间里醒来。房间中央的基座上有一个发光的 GitHub 标志。一个声音回响道：“要继续前进，你必须选择岔路。”

所谓岔路，是指一个 GitHub 仓库。分叉操作会在你的账户中创建那个仓库的副本，允许你进行修改而不影响原始副本。

## 你的任务

1. 创建一个 GitHub 账户（如果你还没有的话）。
2. 分叉仓库：`https://github.com/VerisimilitudeX/escape-room`
3. 将分叉后的仓库克隆到本地电脑。

## 操作指南

1. 前往 GitHub 并注册或登录。
2. 进入仓库网址，点击右上角的“Fork”按钮。
3. 分叉完成后，点击绿色的“Code”按钮并复制链接。
4. 打开你的终端并运行以下命令：

   ```pwsh
   git clone <YOUR_FORKED_REPO_URL>
   cd escape-room
   ```

{{% notice tip %}}
**提示：** 查看你克隆仓库中的 `README.md` 文件，它包含一个用于解锁下一房间的秘密代码！
{{% /notice %}}

{{< expand "需要帮助？" >}}
如果你遇到困难，可以尝试以下步骤：

1. 确保你已经登录了 GitHub。
2. 检查是否访问了正确的仓库网址。
3. 如果在使用 git 命令时遇到问题，请确保你的系统已经安装了 [git](https://git-scm.com/downloads)。
{{< /expand >}}

准备好继续前进时，输入你找到的秘密代码：

<label for="finput">输入秘密代码的字段：</label><br>
<input type="text" id="finput" name="finput"><br>