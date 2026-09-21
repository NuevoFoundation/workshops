---
title: "活动 1 - 确定用户账户"
description: "使用 Linux 命令确定您是哪位用户"
date: 2022-09-23
difficulties: ["中级"]
weight: 4
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/XAtCQ9S1vSI" title="活动 1 - 确定用户账户 - YouTube 视频" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Nuvi 的照片" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        现在我们在命令行界面上。让我们测试一个简单的命令来显示当前用户账户。
    </div>
</div>

## 什么是用户账户？

在 Linux 中，每个用户都有一个用户账户。这些账户用于唯一标识每个用户。

例如，假设你和你的朋友 Nuvi 共享一台电脑。你和 Nuvi 可以创建各自的用户账户，用于区分谁的文件属于谁，并确保没有人意外修改重要内容。

## 如何找出我正在使用哪个账户？

Linux 命令 `whoami` 会告诉你当前使用的账户。试试看！

```
whoami
```

<!---![主目录](../images/01_whoami.png?classes=border,shadow) --->
<img src="../images/01_whoami.png" alt="主目录" style="width:600px;"/>

在上面的示例中，终端输出显示了我们的用户名称为 `nuvi`。

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Nuvi 的照片" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        现在我们已经确定了当前用户，接下来让我们找出我们所处的位置。
    </div>
</div>