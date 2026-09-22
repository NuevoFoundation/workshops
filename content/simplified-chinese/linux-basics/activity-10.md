---
title: "Activity 10 - 开始移动和替换"
description: "使用 Linux 命令移动和复制文件"
date: 2022-09-23
difficulties: ["intermediate"]
weight: 13
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/LPcQW4oGK6g" title="Activity 10 - Let's move and replace - YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Nuvi 的一张照片" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        很好，现在黑客的恶意文件不会再给我们带来麻烦了，让我们恢复之前的旧文件，这样事情就能顺利运行了。
    </div>
</div>

### 如何修复 secret-message

命令 `mv` 也可以用来用源文件替换目标文件。  
格式为：`mv [源文件名] [目标文件名]`。

用之前找到的备份文件替换被篡改的密文消息。  
然后把文件移动到我们新建的目录中。

![mv 命令](../images/Act10.1.png?classes=border,shadow)

---

### 备份你的文件

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Nuvi 的一张照片" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        之前的备份文件在修复被篡改的文件时派上了用场。让我们备份目录中的文件吧。
    </div>
</div>

`cp` 是一个可以将文件从一个位置复制到另一个位置的命令。  
格式为：`cp [源文件名] [目标文件名]`。

备份一个你创建的文件和 `secret-message.txt`。

![cp 命令](../images/Act10.2.png?classes=border,shadow)