```markdown
---
title: "Activity 8 - What's different?"
description: "使用 Linux 命令比較文件"
date: 2022-09-23
difficulties: ["intermediate"]
weight: 11
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/fAI1kyAoVTA" title="Activity 8 - What&#x27;s different? - YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Nuvi 的照片" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        讓我們檢查一下這個秘密訊息，確保這個奇怪的 `malware.sh` 文件沒有對它做任何事情！
    </div>
</div>

## 差異

我們是否知道某個指令可以幫助我們找到 `secret-message.txt` 文件的位置？

![find command](../images/Act8.1.png?classes=border,shadow)

讓我們進入該目錄並檢查之前的引用 "Do. Or do not. There is no try."。你還記得哪個命令可以幫助我們檢查嗎？

![grep command](../images/Act8.2.png?classes=border,shadow)

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Nuvi 的照片" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        這個文件通常有一些有趣的名言，但看起來有很多更改。 我們應該將它與已知的良好版本進行比較嗎？
    </div>
</div>

我們來看看在它的目錄中，是否有任何秘密訊息的備份。進入 Document 目錄並嘗試：

```
ls -la
```

{{% notice tip %}}
`-a` 標誌列出所有條目，包括隱藏文件。
{{% /notice %}}

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Nuvi 的照片" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        你找到任何新文件了嗎？記錄下改變的地方！
    </div>
</div>

## 比較 secret-message.txt 與備份文件

`diff` 是一個用來比較兩個文件的命令，可顯示文件中新增、修改和刪除的部分。  
格式為： `diff [文件名] [比較文件名]`

{{% notice info %}}
有趣的事實：執行 `diff --help` 將輸出如何使用 `diff` 工具的相關信息，包括可以與該工具一起使用的選項。
{{% /notice %}}

檢查兩個文件之間的差異。你找到了多少處差異？將其記錄在你建立的文件中！

{{% notice tip %}}

### 更好的差異檢視方式

`vimdiff` 是一個打開窗口的命令，可將文件分別顯示在不同標籤中，並高亮顯示差異。

試試 `vimdiff`，以更好地視覺化文件之間的差異。
{{% /notice %}}
```