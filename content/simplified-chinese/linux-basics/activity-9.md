---
title: "活动 9 - 删除坏文件"
description: "使用 Linux 命令删除坏文件和目录"
date: 2022-09-23
difficulties: ["中级"]
weight: 12
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/mLsJXEIsadE" title="活动 9 - 删除坏文件 - YouTube 视频" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Nuvi 的一张照片" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        所以 malware.sh 绝对是黑客留下的一个坏文件。我们需要删除它以及存储它的目录！
    </div>
</div>

## 删除坏文件！

`rm` 是一个用于删除文件的命令。  
格式是：`rm [filename]`。

{{% notice warning %}}
`rm` 会永久删除文件。
{{% /notice %}}

删除我们已经确定会导致问题的文件。我们如何检查文件是否已完全被删除？

![rm 命令](../images/Act9.1.png?classes=border,shadow)

----

## 如果我们需要删除一个目录怎么办？

`rmdir` 是一个可以删除空目录的命令。  
格式是：`rmdir [directoryName]`。

{{% notice warning %}}
`rmdir` 会永久删除目录。
{{% /notice %}}

你如何删除存储坏文件的目录？

![rmdir 命令](../images/Act9.2.png?classes=border,shadow)

{{% notice warning %}}
删除文件是一项危险的操作，尤其是在 Linux 上。确保你百分之百确定要删除的文件是安全的。删除错误的文件可能会意外损坏你的电脑。
{{% /notice %}}

你还记得重新创建我们刚才删除的目录的命令吗？

![mkdir 命令](../images/Act9.3.png?classes=border,shadow)

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Nuvi 的一张照片" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        现在让我们检查一下是否知道恢复 secret-message.txt 文件的命令...
    </div>
</div>