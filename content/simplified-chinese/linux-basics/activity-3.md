---
title: "活动 3 - 查看当前目录"
description: "使用 Linux 命令查看当前目录的内容"
date: 2022-09-23
difficulties: ["中级"]
weight: 6
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/dSsed9cR9QI" title="活动 3 - 查看当前目录 - YouTube 视频" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## 如何查看目录内容？

要查看当前目录中的文件，我们使用 `ls` 命令。它的意思是“列出”。

试试以下命令：

```
ls
```

![ls 命令](../images/03_ls-command.png?classes=border,shadow)

### 如何获取该目录中文件的更多信息？

试试以下命令：

```
ls -l
```
<img src="../images/../images/03_ls-l.png" height="500" alt="ls -l 命令" />

上面命令中的 `-l` 参数告诉 `ls` 以长格式信息列出内容。

## 显示了哪些信息？

让我们从左到右查看上面示例中关于目录 `Videos` 第一行的内容：

![解释 ls -l 命令](../images/03_ls-l-numbers.png?classes=border,shadow)

1. <span style="color:green">绿色</span>: 文件权限。第一个字符 `d` 表示 **Videos** 是一个目录。如果是 `-`，则表示 **Videos** 是一个文件。
2. <span style="color:red">红色</span>: 文件的**链接数**。目录 **Videos** 有 2 个 _链接_。
3. <span style="color:purple">紫色</span>: 文件的拥有者。用户 `nuvi` 是 **Videos** 目录的拥有者。
4. <span style="color:white;background-color:#232b36">白色</span>: 文件所属的组。在这里，目录 **Videos** 属于 `nuvi` 组。
5. <span style="color:#ffc000">黄色</span>: 文件的大小，以**字节**为单位。目录 **Videos** 的大小是 4096 字节。
6. <span style="color:#ed7d31">橙色</span>: 文件的创建日期和时间。
7. <span style="color:#2e75b6">蓝色</span>: 目录的名称。