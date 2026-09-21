---
title: "活动5 - 安全的用户权限"
description: "使用Linux命令保护你的文件"
date: 2022-09-23
difficulties: ["中级"]
weight: 8
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/D5Y6LH0mBi0" title="活动5 - 安全的用户权限 - YouTube 视频" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Nuvi的照片" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        哦不。我们的一些文件可能被篡改了！让我们保护我们的笔记文件file1吧。我们不想让黑客篡改这些文件！
    </div>
</div>

### 我们如何限制对文件的访问？

通过给用户设置文件的“权限”！

权限是计算机用来判断谁可以访问文件以及他们可以对这些文件做什么的一种方法。

在Linux系统中，用户可能请求对文件的三种常见访问类型是：“读取”、“写入”或“执行”。

{{% notice note %}}

“读取”权限意味着用户可以打开并读取一个文件。“读取”权限通常以符号`r`表示。

“写入”权限意味着用户可以打开并对文件写入。这包括重命名文件以及将文件移动到文件系统中的其他位置。“写入”权限通常以符号`w`表示。

“执行”权限意味着用户可以尝试将文件作为程序运行。“执行”权限通常以符号`x`表示。

{{% /notice %}}

### 但我们怎么知道我们的文件有多安全？

目前为止，我们学过的命令中是否有可以显示文件安全性的方法？  
如果需要，可以回过头看看！

![ls -l 命令](../images/Act5.1.png?classes=border,shadow)

我们应该继续使用这个命令来检查权限是否按照预期更改。

---

### 那我们如何通过权限来保护文件呢？

```
chmod u=rwx g=rx o=x file1
```

`chmod` 是用于修改文件权限的命令（它的意思是“更改模式”）针对以下三种不同的用户组：

- 文件的<b>u</b>所有者（用户）
- 文件的<b>g</b>组（有权访问该文件的用户组的成员）
- 其他<b>o</b>人（任何其他人）

这些用户组可以被修改以获得以下权限：

- <b>r</b>读取
- <b>w</b>写入
- e<b>x</b>ecute执行。

---

### 试试看吧！

现在，让我们尝试更改文件的权限。我们希望除了自己和组内成员之外的其他人无法访问`file1`。我们要如何做到这一点？

![chmod 命令](../images/Act5.2.png?classes=border,shadow)

#### 趣闻：快捷方式！

`chmod` 还可以与简单的数字命令一起使用。这些命令的格式如下：

```
chmod 751 [插入文件名]
```

这些值表示赋予用户读取、写入和执行的权限。  
其他两个值分别赋予什么权限呢？

| 数字  |          意义          |
| :----: | :--------------------: |
|   7    | 读取 + 写入 + 执行     |
|   6    |      读取 + 写入       |
|   5    |     读取 + 执行       |
|   4    |          读取          |
|   3    |    执行 + 写入         |
|   2    |         写入           |
|   1    |        执行            |
|   0    |       无权限           |
