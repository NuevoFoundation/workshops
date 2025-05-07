```markdown
---
title: "房间10：部署间"
description: "学习如何使用GitHub Pages部署你的项目。"
difficulty: "Intermediate"
weight: 10
---

# 房间10：部署间

{{< figure src="../images/room10_pages.jpg" title="显示网站和浮动部署按钮的巨大屏幕房间" >}}

你进入最后一个房间，看到一个巨大的屏幕显示着网站和浮动的"部署"按钮。一个胜利的声音宣告：“部署你的胜利，让所有人看到！”

## 你的任务

1. 为你的仓库启用GitHub Pages。
2. 创建一个简单的index.html文件。
3. 推送文件并查看已部署的网站。

## 指导

1. 进入你仓库的“设置”选项卡。
2. 向下滚动到“GitHub Pages”部分。
3. 在“源”下，选择你要部署的分支（通常是`main`）。
4. 在本地仓库中，在根目录创建一个`index.html`文件。
5. 在文件中添加一些HTML代码，如：

   ```html
   <!DOCTYPE html>
   <html>
     <head>
       <title>我的GitHub Pages网站</title>
     </head>
     <body>
       <h1>你好，GitHub Pages！</h1>
       <p>我已完成GitHub冒险游戏！</p>
     </body>
   </html>
    ```

6. 提交并推送这个文件到你的仓库。
7. 等待几分钟，让GitHub处理你的请求，然后访问 https://<username>.github.io/<repository-name>，其中<username>是你的GitHub用户名，<repository-name>是你的仓库名称。
{{< notice info >}}
注意：在推送更改后，网站部署可能需要几分钟。
{{< /notice >}}
{{< mermaid >}}
graph TD
A[启用GitHub Pages] --> B(创建 index.html)
B --> C(提交并推送)
C --> D{网站已部署？}
D -->|是| E[查看你的网站]
D -->|否| F[等待几分钟]
F --> D
{{< /mermaid >}}
当你的网站部署后，你网页的标题是什么？你可以在访问网站时在浏览器顶部找到它。输入你的答案：
[输入网页标题的字段]
{{< notice success >}}
恭喜你，GitHub大师！你已完成所有挑战并部署你的胜利。你已成功逃出GitHub冒险游戏！
{{< /notice >}}
```