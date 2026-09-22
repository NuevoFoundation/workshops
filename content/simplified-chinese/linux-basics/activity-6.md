---
title: "Activity 6 - 一个坏文件"
description: "使用 Linux 命令进行搜索"
date: 2022-09-23
difficulties: ["中级"]
weight: 9
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/OaXi1GN_93U" title="Activity 6 - A BAD File - YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Nuvi 的一张照片" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        我记得我有一个文件 secret-message.txt，其中包含我最喜欢的名言之一。"要么做，要么不做，没有尝试。" 你能帮我找到它吗？
    </div>
</div>

### 在文件中搜索模式？

`grep`（**g**lobal search for **r**egular **e**xpression and **p**rint the result）是一个用于在文件中搜索文本的命令。可以使用不同的标志或选项来更改其使用方式。

格式为：`grep [flag] “[pattern]” [filename]`。

| 标志  | 用途                                                               |
| :---- | :---------------------------------------------------------------- |
| -c    | 获取包含该模式的文件数量。                                         |
| -i    | 使搜索不区分大小写。“uNiX” 等同于 “unix”。                        |
| -n    | 返回匹配的行及其行号。                                             |
| -R    | 搜索当前目录下的所有文件。                                         |

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Nuvi 的一张照片" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        让我们练习使用这个命令来寻找我的 secret-message.txt 文件！
    </div>
</div>

让我们尝试以下命令：

```
cd
grep -R "Do. Or do not. There is no try."
```

![grep 命令](../images/Act6.1.png?classes=border,shadow)

---

### 为什么 secret-message 文件看起来像这样？

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Nuvi 的一张照片" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        还记得我们看到的那个奇怪名字的文件吗？它叫 malware.sh。我们应该重新找到它并仔细查看。我觉得这可能是黑客留下的！
    </div>
</div>

`find` 是一个用来在目录或文件区域中根据特定参数搜索文件的命令。它可以通过多种方式使用，包括：

- 根据特定文件名搜索文件  
  格式为：`find [directory] -name [filename]`
- 根据特定文件扩展名搜索所有文件（例如以 .txt 结尾的文本文件）  
  格式为：`find [directory] -name *.txt`

使用 `find` 命令在当前目录中搜索该文件。有没有可以用来确定当前目录是什么的其他命令？

![find 命令](../images/Act6.2.png?classes=border,shadow)