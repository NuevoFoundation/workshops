```yaml
---
title: "活動 10 - 讓我們移動並替換"
description: "使用 Linux 指令來移動和複製文件"
date: 2022-09-23
difficulties: ["中級"]
weight: 13
---
```

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/LPcQW4oGK6g" title="活動 10 - 讓我們移動並替換 - YouTube 視頻" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Nuvi 的一張照片" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        太好了，現在駭客的惡意文件不會再造成困擾了，我們來恢復舊文件，讓事情順利進行。
    </div>
</div>

### 如何修復秘密信息

指令 `mv` 也可以用來用來源文件替換目的文件。  
格式為：`mv [來源檔名] [目的檔名]`。

使用我們之前找到的備份文件來替換被破壞的秘密信息。  
讓我們將文件移動到剛才創建的新目錄中。

![mv 指令](../images/Act10.1.png?classes=border,shadow)

---

### 備份你的文件

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Nuvi 的一張照片" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        之前的備份文件派上了用場，幫助修復了被篡改的文件。我們來備份目錄中的文件。
    </div>
</div>

`cp` 是一個指令，可以將文件從一個位置複製到另一個位置。  
格式為：`cp [來源檔名] [目的檔名]`。

複製自己創建的文件和 `secret-message.txt`。

![cp 指令](../images/Act10.2.png?classes=border,shadow)