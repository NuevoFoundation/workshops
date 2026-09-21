```markdown
---
title: "Activity 6 - 一個不好的檔案"
description: "使用 Linux 指令進行搜尋"
date: 2022-09-23
difficulties: ["intermediate"]
weight: 9
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/OaXi1GN_93U" title="Activity 6 - A BAD File - YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Nuvi 的一張照片" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        我記得有一個檔案叫做 secret-message.txt，裡面有我最喜歡的文字之一。「Do. Or do not. There is no try.」你能幫我找到它嗎？
    </div>
</div>

### 在檔案中搜尋特定模式？

`grep` (**g**lobal search for **r**egular **e**xpression 和 **p**rint the result) 是一個用於在檔案內搜尋文字的指令。有不同的標籤或選項可以改變其使用方式。

格式為：`grep [flag] “[pattern]” [filename]`。

| 標籤 | 用途                                                               |
| :---- | :----------------------------------------------------------------  |
| -c    | 取得符合模式的檔案數量。                                           |
| -i    | 使搜尋不區分大小寫。「uNiX」與「unix」視為相同。                   |
| -n    | 返回符合的行及其行號。                                             |
| -R    | 搜尋當前目錄下的所有檔案。                                         |

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Nuvi 的一張照片" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        讓我們練習這個指令來找到我的 secret-message.txt！
    </div>
</div>

讓我們嘗試以下指令：

```
cd
grep -R "Do. Or do not. There is no try."
```

![grep 指令](../images/Act6.1.png?classes=border,shadow)

---

### 為什麼 secret-message 檔案看起來那麼奇怪？

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Nuvi 的一張照片" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        還記得我們之前看到的那個奇怪名稱的檔案嗎？它叫做 malware.sh。我們應該再去找它並仔細看一下。我想這是駭客留下的！
    </div>
</div>

`find` 是一個用於在目錄或檔案區域中，根據特定條件搜尋檔案的指令。它有多種使用方式，包括：

- 搜尋具有特定檔名的檔案  
  格式為：`find [directory] -name [filename]`
- 搜尋所有具有特定副檔名的檔案（例如，文字檔，副檔名為 .txt）  
  格式為：`find [directory] -name *.txt`

使用 `find` 指令在當前目錄內搜尋檔案。我們可以用什麼指令來確認當前目錄是什麼？

![find 指令](../images/Act6.2.png?classes=border,shadow)
```