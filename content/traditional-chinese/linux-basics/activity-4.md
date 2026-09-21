```yaml
---
title: "活動 4 - 筆記練習"
description: "使用 Linux 指令創建新目錄"
date: 2022-09-23
difficulties: ["中級"]
weight: 7
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/h9qokQeLREI" title="活動 4 - 筆記練習 - YouTube 影片" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Nuvi 的一張照片" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        作為一名網路安全工程師，做大量的筆記是很重要的。這些筆記對於日後理解駭客如何入侵非常有幫助。讓我們開始建立我們的工作環境吧！
    </div>
</div>

### 如果我想創建一個新目錄怎麼辦？

要練習創建新目錄，可以使用指令 `mkdir`（意思是 "Make Directory"），格式如下：`mkdir new_directory_name`。

在終端中輸入以下指令創建一個名為 `files` 的目錄：

```
mkdir files
```

<!---![ls-l command](../images/04_mkdir.PNG?classes=border,shadow) --->
<img src="../images/04_mkdir.PNG" alt="mkdir 指令" style="width:600px;"/>

正如您所見，現在執行 `ls -l` 時，會顯示一個名為 `files` 的新目錄。

### 這些文件可以用來做什麼？

舉例來說，您可以將文件或目錄移動到其他位置。這可以通過移動指令 `mv` 實現。我們來練習一下，把 `Music` 目錄移動到 `Documents` 目錄中。

輸入以下指令：

```
mv Music/ Documents/
```

現在再輸入 `ls -l`，然後查看輸出的內容。

![ls-l command](../images/04_mv_music_dir.png?classes=border,shadow)

您會發現目錄 `Music` 不再出現在當前目錄中，因為它已經被移動到 `Documents` 目錄中了。

{{% notice tip %}}
我們可以通過使用附加路徑的 `ls` 指令來確認它是否移至 `Documents`。

```
ls -l Documents/
```

{{% /notice %}}

現在再練習一次 `mv`，將其移回原處。

試試看：

```
mv Documents/Music/ .
```

這將把 `Music` 目錄從 `Documents` 目錄移回我們的當前目錄，當前目錄用 `.` 表示。再次輸入 `ls -l`，您會看到 `Music` 已經返回到當前目錄中了。

<img src="../images/../images/03_ls-l.png" height="500" alt="ls -l 指令"/>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Nuvi 的一張照片" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        做得好，您現在已經學會如何移動文件了。我們很快就會利用這些知識來從駭客的攻擊中恢復。
    </div>
</div>

### 如果我想創建一個新文件怎麼辦？

我們可以使用 `touch` 指令來創建文件。`touch` 指令創建一個不包含任何數據的空文件。

輸入以下指令創建一個名為 `file1` 的文件：

```
touch file1
```

<!---![ls-l command](../images/04_touch.PNG?classes=border,shadow) --->
<img src="../images/04_touch.PNG" alt="touch 指令" style="width:600px;"/>

現在，當我們輸入 `ls -l` 時，就可以看到這個文件已經創建完成。

### 如果我想向文件中添加內容怎麼辦？

空文件通常沒什麼用處，所以讓我們向其中添加一些內容，例如我們的名字。
要打開文件進行編輯，我們將使用 `vim` 指令。`vim` 是一個編輯器，允許我們添加、刪除和修改文件內容。

輸入以下指令以編輯 `file1`：

```
vim file1
```

<!---![ls-l command](../images/04_vim.PNG?classes=border,shadow) --->
<img src="../images/../images/04_vim.PNG" height="500" alt="vim 指令"/>


現在我們已經進入 Vim 編輯器。按下 `i` 進入插入模式。輸入 `nuvi`，然後按下 `esc` 鍵退出插入模式。最後輸入 `:wq` 並按下回車鍵。冒號告訴 Vim 您正在輸入一個命令，`w` 和 `q` 則分別表示儲存修改並退出。

{{% notice warning %}}
要退出 `vim`，按下 `esc` 鍵，然後輸入 `:wq`。每次打開 `vim` 時您都會需要這個指令！
{{% /notice %}}

![ls-l command](../images/04_vim_after.PNG?classes=border,shadow)

<img src="../images/04_vim_after.PNG" alt="vim 編輯後" style="width:600px;"/>

再次輸入 `ls -l`，您會看到 `file1` 現在包含 5 個字節（bytes）的內容，而在空白時為 0。

{{% notice note %}}
定義