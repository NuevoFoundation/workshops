---
title: "挑战1 - 创建一个基本的网站"
date: 2019-09-03T17:53:41-07:00
draft: false
weight: 4
---

## 挑战1 - 创建一个基本的网站

1. 打开网络编辑器CodePen（单击下面的"尝试一下"按钮）
2. 使用标题标签(`<head>`)添加标题，使用段落标签(`<p>`)写有关Benji的段落
3. 如果有时间：写一份Benji最喜欢的食物清单：火鸡，花生酱和奶酪

<a class="my-2 mx-4 btn btn-info" href="https://codepen.io/Sunny-Dee/pen/exxyYL" target="_blank">尝试一下！</a>

使用此参考图可以自己尝试一些HTML标签。

标签 | 说明 | 例子
---|--------------|----------
`<html></html>`                         | 描述一个HTML文档。任何网站都必须以开始标记开头，并以结束标记结尾。 | 上述的网络编辑器 CodePen 有例子
`<!-- -->`                              | 描述评论。注释供其他网站设计人员查看，但不会显示在网站上。 | `<!-- This line will not show in the browser -->`
`<head></head>`                         | 包含所有向浏览器提供信息以正确显示网站的HTML元素。 `<head>`和`</head>` 之内的HTML元素不会显示 | 上述的网络编辑器 CodePen 有例子。
`<title></title>`                       | 包含用于命名浏览器选项卡的网站标题。 | `<head>`<br>`<title>My Website</title>`<br>`</head>`
`<body></body>`                         | 包含页面中显示的所有HTML元素，例如文本和图片。 | 上述的网络编辑器 CodePen 有例子。
`<h1></h1>`<br> ... <br> `<h6></h6>`    | 定义标题。 `<h1>`定义最重要（最大）的标题，而`<h6>`定义最不重要（最小）的标题。 | `<h1>This will be a big title</h1>`<br>`<h4>This will be a smaller title</h4>`
`<p></p>`                               | 描述一个段落。| `<p>Dogs evolved to love humans. In conclusion, dogs are a human’s best friend.</p>`
`<div></div>`                           | 在网站上一个部分。 | `<div>`<br>`<h1>All about me</h1>`<br>`</div>`
`<img>`                                 | 一个图像。这是一个自动关闭的代码，但你必须指定图片来源，以便浏览器知道从何处获取图片。 | `<img src="aka.ms/Benji-the-dog">`
`<hr>`                                  | 画一条水平线。如果你想分页的内容，另一个有用的自动关闭标签。 | ...<br>`<hr>`<br>...
`<ul>`<br>`<li>`<br>`</li>`<br>`</ul>`                     | 一个列表。要开始列表，请使用`<ul>`标记。对于要添加到列表中的每个项目，请在项目周围加上`<li>`和`</ li>`标记。用`</ul>`标记完成列表。 | `<ul>`<br>`<li>This is a list item.</li>`<br>`</ul>`