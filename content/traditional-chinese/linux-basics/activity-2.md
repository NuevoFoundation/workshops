---
title: "活動 2 - 確定使用者位置"
description: "使用 Linux 指令確定你目前所在的目錄位置"
date: 2022-09-23
difficulties: ["中級"]
weight: 5
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/v1XLyLuQQyA" title="活動 2 - 確定使用者位置 - YouTube 影片" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Nuvi 的照片" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        在阻止駭客之前，我們需要學會如何在 Linux 文件系統中導航。
    </div>
</div>

## 什麼是文件系統？

文件系統是一個具有結構的檔案和數據集合，存儲於電腦磁碟或磁碟驅動器上。文件系統的最高層級被稱為「根目錄」。你可以將它想像成文件系統的起點。

{{% notice tip %}}
有趣的小知識：文件系統通常被形容為「樹」。這是因為文件系統看起來像一棵倒置的樹，每個資料夾是樹的一個分支或葉子。例如，您的文件系統可能看起來如下圖。

<img src="../images/filesystem-tree.png" height="500" alt="文件系統樹的圖片"/>

{{% /notice %}}

在 Windows 電腦上，您可以使用「檔案瀏覽器」瀏覽電腦的 "C:\" 驅動文件系統，如下所示：

![Windows 檔案瀏覽器的圖片](../images/filesystem-windows.png?classes=border,shadow)

在 Mac 電腦上，您可以在「Finder」中瀏覽電腦的主文件系統，如下所示：

![Mac Finder 主文件夾的圖片](../images/home-folder-mac.jpg?classes=border,shadow)

## 文件系統中的位置在哪裡？

我們需要找出我們的「當前工作目錄」。這是您目前所在文件系統的位置。

Linux 指令 `pwd` 會顯示您目前的位置。該指令的意思是 "Print Working Directory"。試試看吧！

```
pwd
```

<!---!![pwd command](../images/02_pwd.png?classes=border,shadow) --->
<img src="../images/02_pwd.png" alt="pwd 指令" style="width:700px;"/>

以上的輸出是 `/home/nuvi`，其含義如下所述：

- `/`：這是表示文件系統根目錄的符號。
- `/home`：這是位於根目錄中的家目錄的路徑。
- `/home/nuvi`：這是 nuvi 目錄的路徑，它位於家目錄中。輸出停在此，表示 `/home/nuvi` 是我們所在的當前工作目錄。
- 在某些情況下，這樣通過每個資料夾進入文件系統的過程可能會進一步延續更多步驟。
- 上述顯示和描述的路徑被稱為<b>絕對路徑</b>，因為它是從當前目錄到達根目錄的完整路徑。

## 我如何在文件系統中移動？

要移動到另一個目錄，可以使用指令 `cd`，表示 "Change Directory"。該指令的格式為 `cd [目錄名稱]`。

<!---![cd command](../images/02_cd.PNG?classes=border,shadow) --->
<img src="../images/02_cd.PNG" alt="cd 指令" style="width:700px;"/>

在上面的輸出中，可以看到當我們再次輸入 `pwd` 時，我們所在的工作目錄已轉移為 Desktop。試試 `cd ..`。

再試一個 `cd` 的例子如下：

```
cd ..
```

<!-- ![cd command](../images/02_cdDotDot.PNG?classes=border,shadow) -->
<img src="../images/02_cdDotDot.PNG" alt="cd 指令" style="width:700px;"/>

在 cd 指令後的 `..` 作用是讓您在文件系統樹中向上移動一層。`pwd` 的輸出現在顯示我們已回到原來的所在位置。我們開始時位於 nuvi 目錄，使用 `cd Desktop` 移動到樹中的 Desktop，然後用 `cd ..` 往上移動。

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Nuvi 的照片" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        幹得好！接下來我們將學習如何探索目錄本身。
    </div>
</div>