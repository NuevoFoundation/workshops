```yaml
---
title: "Activity 4 - 笔记练习"
description: "使用 Linux 命令创建新目录"
date: 2022-09-23
difficulties: ["中级"]
weight: 7
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/h9qokQeLREI" title="Activity 4 - 笔记练习 - YouTube 视频" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Nuvi 的一张照片" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        作为一名网络安全工程师，记录大量笔记是非常重要的。笔记能为未来提供帮助，了解黑客攻击如何发生。让我们开始整理我们的工作环境吧！
    </div>
</div>

### 如果我想创建一个新目录怎么办？

要练习创建新目录，可以使用 `mkdir` 命令（表示 "Make Directory"），格式如下：`mkdir new_directory_name`。

让我们通过以下命令创建一个名为 `files` 的目录：

```
mkdir files
```

<!---![ls-l command](../images/04_mkdir.PNG?classes=border,shadow) --->
<img src="../images/04_mkdir.PNG" alt="mkdir 命令" style="width:600px;"/>

如您所见，现在运行 `ls -l` 时，会出现一个名为 `files` 的新目录。

### 我可以对这些文件做什么？

一个例子是可以通过移动命令 `mv` 将文件或目录移到另一个位置。让我们练习将 `Music` 目录移到 `Documents` 目录中。

输入以下命令：

```
mv Music/ Documents/
```

现在再次输入 `ls -l` 并查看输出。

![ls-l command](../images/04_mv_music_dir.png?classes=border,shadow)

您应当看到目录 `Music` 不再出现，因为它已被移到 `Documents` 目录中。

{{% notice tip %}}
我们可以通过使用添加目录路径的 `ls` 命令来查看它是否移入 `Documents`。

```
ls -l Documents/
```

{{% /notice %}}

让我们再练习一次 `mv`，将其移回来。

尝试以下命令：

```
mv Documents/Music/ .
```

这会将 `Music` 目录从 `Documents` 目录移回当前目录，用 `.` 表示当前目录。句点或点号用于表示当前目录。再一次输入 `ls -l` 会显示 `Music` 已回到当前目录。

<img src="../images/../images/03_ls-l.png" height="500" alt="ls -l 命令"/>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Nuvi 的一张照片" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        干得好！现在您已经知道如何移动文件。我们很快会使用这些知识来应对黑客攻击。
    </div>
</div>

### 如果我想创建一个新文件怎么办？

要创建文件，我们可以使用 `touch` 命令。`touch` 命令会创建一个没有数据的空文件。

试试以下命令，创建一个名为 `file1` 的文件：

```
touch file1
```

<!---![ls-l command](../images/04_touch.PNG?classes=border,shadow) --->
<img src="../images/04_touch.PNG" alt="touch 命令" style="width:600px;"/>

现在输入 `ls -l`，您可以看到该文件已创建。

### 如果我想向文件添加数据怎么办？

空文件没有太大用处，所以让我们向其中添加一些数据，比如我们的名字。
要打开文件进行编辑，我们将使用 `vim` 命令。Vim 是一个编辑器，允许我们添加、删除或更改文件中的数据。

输入以下命令来编辑 `file1`：

```
vim file1
```

<!---![ls-l command](../images/04_vim.PNG?classes=border,shadow) --->
<img src="../images/../images/04_vim.PNG" height="500" alt="vim 命令"/>

我们现在在 Vim 编辑器中。按下 `i` 进入插入模式。现在输入 `nuvi` 并按下 `esc` 键退出插入模式。最后输入 `:wq` 并按下回车键。冒号表示您正在输入一个命令，`w` 和 `q` 告诉 Vim 您想保存所做的更改并退出。

{{% notice warning %}}
要退出 `vim`，请按 `esc`，然后输入 `:wq`。每次打开 `vim` 都需要这样做！
{{% /notice %}}

![ls-l command](../images/04_vim_after.PNG?classes=border,shadow)

<img src="../images/04_vim_after.PNG" alt="vim 之后" style="width:600px;"/>

再次输入 `ls -l`，您会看到 `file1` 现在有 5 字节的内容，而不是空白时的 0 字节。

{{% notice note %}}

定义: <b>字节</b> 是一种数据的计量单位。在底层，计算机使用一种称为 "bit"（位）的数据单位表示信息，每个位的值只能是 "0" 或 "1"。一个字节由 8 个位组成。

{{% /notice %}}

最后一步。让我们把新文件移动到新目录中。

输入以下命令：

```
mv file1 files
```

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img