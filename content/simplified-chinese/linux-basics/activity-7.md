```yaml
---
title: "活动7 - 这个文件有问题吗？"
description: "使用Linux命令读取文件而不打开它"
date: 2022-09-23
difficulties: ["intermediate"]
weight: 10
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/tgciAD4hbyU" title="活动7 - 这个文件有问题吗？ - YouTube视频" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Nuvi的一张照片" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        恶意软件可能很危险！不要立即打开它！相反，让我们使用命令行来查看一下。
    </div>
</div>

{{% notice warning %}}
对于我们不确定的文件，我们需要透过文件内容来窥视，以免意外打开病毒。
{{% /notice %}}

### 我们如何查看文件的前几行？

有时你只需要看文件的开始部分。命令`head`可以显示文件的前几行。  
格式为：`head [filename]`

{{% notice tip %}}
如果添加-n标志，可以指定查看的行数。  
格式为：`head -n [# of lines] [filename]`
{{% /notice %}}

试着查看`malware.sh`的前5行！

![head命令](../images/Act7.1.png?classes=border,shadow)

### 我们如何查看文件的最后几行？

有时你只需要看文件的结尾部分。命令`tail`可以显示文件的最后几行。  
格式为：`tail [filename]`

{{% notice tip %}}
如果添加-n标志，可以指定查看的行数。  
格式为：`tail -n [# of lines] [filename]`
{{% /notice %}}

试着查看`malware.sh`的最后5行！

![tail命令](../images/Act7.2.png?classes=border,shadow)

### 我们如何查看整个文件？

有时查看文件的开头和结尾部分后，你可能会意识到需要查看整个文件才能弄清它在做什么以及我们应该怎么应对它。
让我们查看`malware.sh`的完整内容！

`cat`可以显示文件的内容。  
格式为：`cat [filename]`

{{% notice tip %}}
`less`和`more`是类似`cat`的命令。

#### more命令

`more`是一种用于较大文件的命令。它会显示尽可能多的行，你可以按回车键查看文件的下一个部分直到文件结束。  
格式为：`more [filename]`

![more命令](../images/Act7.3.png?classes=border,shadow)

#### less命令

`less`是一个帮助上下滚动文件内容的命令。它的工作方式类似于`more`，但你可以使用上下箭头键移动到文件的不同部分。退出的方法是按'q'键。  
格式为：`less [filename]`

![less命令](../images/Act7.4.png?classes=border,shadow)
{{% /notice %}}

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Nuvi的一张照片" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        你觉得`malware.sh`在做什么？将它添加到你的报告中吧！
    </div>
</div>
```