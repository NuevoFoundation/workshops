---
title: "第10间房间：部署之家"
description: "学习使用 GitHub Pages 部署你的项目。"
difficulties: ["中级"]
weight: 10
---

你进入最后一间房间，发现一个巨大的屏幕正在展示一个网站，还有漂浮的“部署”按钮。一阵胜利的声音宣告道：“部署你的胜利，让所有人看到！”

## 你的任务

1. 为你的代码库启用 GitHub Pages。
2. 创建一个简单的 index.html 文件。
3. 推送文件并查看你已部署的网站。

## 操作指南

1. 前往你的代码库的 “Settings”（设置）标签。
2. 滚动到 “GitHub Pages” 部分。
3. 在 "Source" 选项下，选择你想要部署的分支（通常是 `main`）。
4. 在你的本地代码库中，在根目录下创建一个 `index.html` 文件。
5. 在文件中添加以下 HTML 代码，例如：

   ```html
   <!DOCTYPE html>
   <html>
     <head>
       <title>我的 GitHub Pages 网站</title>
     </head>
     <body>
       <h1>你好，GitHub Pages！</h1>
       <p>我完成了 GitHub 冒险游戏！</p>
     </body>
   </html>
   ```

6. 提交并推送该文件到你的代码库。
7. 等待几分钟让 GitHub 处理你的请求，然后访问你的站点：https://<username>.github.io/<repository-name>，其中 <username> 是你的 GitHub 用户名，<repository-name> 是你的代码库名称。

{{< notice info >}}
注意：在推送更改后，你的网站可能需要几分钟进行部署。
{{< /notice >}}

{{< mermaid >}}
graph TD
A[启用 GitHub Pages] --> B(创建 index.html 文件)
B --> C(提交并推送)
C --> D{网站已部署？}
D -->|是| E[访问你的网站]
D -->|否| F[等待几分钟]
F --> D
{{< /mermaid >}}

在你的网站成功部署后，你的网站标题是什么？当你访问该网站时，可以在浏览器顶部找到它。将标题输入到下面：

<label for="finput">网站标题输入字段：</label><br>
<input type="text" id="finput" name="finput"><br>

{{< notice success >}}
恭喜你，GitHub 大师！你已经完成了所有挑战并部署了你的胜利。你成功通关了 GitHub 冒险游戏！
{{< /notice >}}