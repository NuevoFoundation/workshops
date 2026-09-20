---
title: "第七间房：自动化大道"
description: "利用 GitHub Actions 的力量来自动化您的工作流程。"
difficulties: ["高级"]
weight: 7
---

你走进一个充满活力的房间。齿轮在转动，传送带在运行，象征着自动化的过程。一块全息显示屏闪烁起来：“通过自动化赢得胜利！”

## 你的任务

1. 创建一个简单的 GitHub Action 工作流程。
2. 通过推送更改到您的存储库来触发该工作流程。
3. 查看自动化过程的结果。

## 操作步骤

1. 在本地存储库中，新建一个名为 `.github/workflows` 的目录。
2. 在该目录中，创建一个名为 `hello-world.yml` 的文件。
3. 在文件中添加以下内容:

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
4. 提交此文件并将其推送到您的 GitHub 存储库。
前往 GitHub 存储库中的 “Actions” 选项卡，查看工作流程的运行情况。

{{< notice warning >}}
注意: GitHub Actions 是自动化的强大工具，但请注意免费账户的使用限制。
{{< /notice >}}
{{< mermaid >}}
graph TD
A[创建工作流程文件] --> B(提交并推送)
B --> C{工作流程是否被触发？}
C -->|是| D[查看结果]
C -->|否| E[检查工作流程文件是否有错误]
E --> B
{{< /mermaid >}}

在您的工作流程成功运行后，“Say Hello” 步骤的输出是什么？请在下方输入：

<label for="finput">工作流程输出的输入框：</label><br>
<input type="text" id="finput" name="finput"><br>

{{< expand "提示" >}}
输出应该与您在工作流程文件中的 echo 命令指定的内容完全一致。
{{< /expand >}}

{{< notice success >}}
干得好！您已经用 GitHub Actions 自动化了第一个过程。继续挑战下一个任务吧！
{{< /notice >}}