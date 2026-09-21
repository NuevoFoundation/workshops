---
title: "活动 8 - 有什么不同？"
description: "使用 Linux 命令对比文件"
date: 2022-09-23
difficulties: ["中级"]
weight: 11
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/fAI1kyAoVTA" title="Activity 8 - What&#x27;s different? - YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Nuvi 的一张照片" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        我们来看看秘密信息，确保这个奇怪的 `malware.sh` 文件没有对它做什么坏事！
    </div>
</div>

## 差异

我们知道有什么命令可以帮助我们找到 `secret-message.txt` 文件的位置吗？

![find 命令](../images/Act8.1.png?classes=border,shadow)

进入那个目录后，让我们检查之前提到的短句 "Do. Or do not. There is no try."。你还记得什么命令可以帮我们检查吗？

![grep 命令](../images/Act8.2.png?classes=border,shadow)

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Nuvi 的一张照片" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        这个文件通常有许多有趣的名言，但似乎发生了很多变化。我们是否需要将它与一个已知的好版本进行对比呢？
    </div>
</div>

让我们看看在它的目录中是否有任何秘密信息的备份文件。进入 Document 目录并尝试运行：

```
ls -la
```

{{% notice tip %}}
`-a` 标志会显示所有条目，包括隐藏文件。
{{% /notice %}}

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Nuvi 的一张照片" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        你发现了任何新文件吗？记录下这些变化！
    </div>
</div>

## 对比 secret-message.txt 文件与备份文件

`diff` 是一个用于比较两个文件的命令，可查看文件中新增、改变和删除的内容。  
其格式为：`diff [文件名] [比较文件名]`

{{% notice info %}}
趣闻：运行 `diff --help` 将显示如何使用 `diff` 工具的信息，包括可与工具一起使用的选项。
{{% /notice %}}

检查两个文件之间的差异。你发现了多少处差异？把它记录在你创建的文件里！

{{% notice tip %}}

### 查看差异的更好方法

`vimdiff` 是一个可以打开窗口并以单独标签显示文件内容，同时突出显示差异的命令。

尝试使用 `vimdiff` 来更好地可视化文件之间的差异。
{{% /notice %}}