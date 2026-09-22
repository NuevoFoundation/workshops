---
title: "活动 2 - 确定用户位置"
description: "使用 Linux 命令确定您当前所在的目录"
date: 2022-09-23
difficulties: ["中级"]
weight: 5
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/v1XLyLuQQyA" title="活动 2 - 确定用户位置 - YouTube 视频" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Nuvi 的一张照片" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        在我们能够阻止黑客之前，我们需要学习如何导航 Linux 文件系统。
    </div>
</div>

## 什么是文件系统？

文件系统是计算机磁盘或驱动器中文件和数据的结构化集合。文件系统的最高级别被称为“根”，您可以将其视为文件系统的起点。

{{% notice tip %}}
有趣的小知识：文件系统通常被描述为一棵“树”。这是因为文件系统看起来像一棵倒置的树，每个文件夹都是一根分支或一片叶子。例如，您的文件系统可能如下所示。

<img src="../images/filesystem-tree.png" height="500" alt="文件系统树的图片"/>

{{% /notice %}}

在 Windows 计算机上，您可以使用如下所示的“文件资源管理器”浏览计算机的 "C:\" 驱动器文件系统：

![Windows 文件资源管理器的图片](../images/filesystem-windows.png?classes=border,shadow)

在 Mac 上，您可以在“访达”中浏览计算机的主文件系统，如下所示：

![Mac 文件访达的图片](../images/home-folder-mac.jpg?classes=border,shadow)

## 您在文件系统中的位置是什么？

我们想要找出我们的“当前工作目录”是什么。这是您当前所在文件系统的位置。

Linux 命令 `pwd` 会显示您当前的位置。这是 "Print Working Directory" 的缩写。试试看！

```
pwd
```

<!---!![pwd command](../images/02_pwd.png?classes=border,shadow) --->
<img src="../images/02_pwd.png" alt="pwd 命令" style="width:700px;"/>

上图的输出是 `/home/nuvi`，解释如下：

- `/`：这是文件系统根目录的符号。
- `/home`：这是根目录内家目录的路径。
- `/home/nuvi`：这是 nuvi 目录的路径，它位于家目录之内。输出在此处停止，这意味着 `/home/nuvi` 是我们所在的当前工作目录。
- 在某些情况下，这个通过每个文件夹进入文件系统的过程可以继续进行许多步骤。
- 上述显示并描述的路径称为<b>绝对路径</b>，因为它是从当前目录一直到文件系统根目录的完整路径。

## 我如何在文件系统中移动？

要移动到不同的目录，请使用命令 `cd`。这是 "Change Directory" 的缩写。该命令的格式为 `cd [目录名称]`。

<!---![cd command](../images/02_cd.PNG?classes=border,shadow) --->
<img src="../images/02_cd.PNG" alt="cd 命令" style="width:700px;"/>

如上图所示，当我们再次输入 `pwd` 时，我们所在的工作目录现在是 Desktop。试试 `cd ..`。

再试一个 `cd` 的例子如下：

```
cd ..
```

<!-- ![cd command](../images/02_cdDotDot.PNG?classes=border,shadow) -->
<img src="../images/02_cdDotDot.PNG" alt="cd 命令" style="width:700px;"/>

`cd` 命令后的 `..` 会将您向文件系统树的上一级移动一步。`pwd` 的输出现在显示我们回到了起点。我们从 nuvi 目录开始，通过 `cd Desktop` 进入树中的 `Desktop`，然后使用 `cd ..` 移动回树的上一级。

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Nuvi 的一张照片" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        做得好，接下来我们将学习如何探索目录本身。
    </div>
</div>