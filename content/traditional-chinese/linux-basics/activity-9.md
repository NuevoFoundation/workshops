---
title: "活動 9 - 移除不好的檔案"
description: "使用 Linux 指令移除不良檔案與目錄"
date: 2022-09-23
difficulties: ["中級"]
weight: 12
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/mLsJXEIsadE" title="活動 9 - 移除不好的檔案 - YouTube 影片" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Nuvi 的一張照片" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        malware.sh 絕對是駭客留下的一個不良檔案。我們需要移除這檔案以及保存它的目錄！
    </div>
</div>

## 移除不好的檔案！

`rm` 是一個用來移除檔案的指令。  
格式為：`rm [檔案名稱]`。

{{% notice warning %}}
`rm` 會永久移除檔案。
{{% /notice %}}

移除我們認定會造成問題的檔案。你如何確認該檔案已被完全移除？

![rm 指令](../images/Act9.1.png?classes=border,shadow)

----

## 如果需要移除一個目錄呢？

`rmdir` 是一個可以移除空目錄的指令。  
格式為：`rmdir [目錄名稱]`。

{{% notice warning %}}
`rmdir` 會永久移除目錄。
{{% /notice %}}

你如何移除那個放置不良檔案的目錄？

![rmdir 指令](../images/Act9.2.png?classes=border,shadow)

{{% notice warning %}}
移除檔案在 Linux 系統中是一項危險的操作。請確認你 100% 確定要移除的檔案是可以安全刪除的。不然，刪除錯誤的檔案可能會意外損毀你的電腦。
{{% /notice %}}

你還記得用哪個指令可以重新建立我們刪除的目錄嗎？

![mkdir 指令](../images/Act9.3.png?classes=border,shadow)

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Nuvi 的一張照片" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        現在我們來看看是否知道用什麼指令可以復原 secret-message.txt 這個檔案...
    </div>
</div>