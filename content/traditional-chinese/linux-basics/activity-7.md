---
title: "Activity 7 - 文件有什麼問題？"
description: "使用 Linux 指令查看文件而不用直接打開"
date: 2022-09-23
difficulties: ["intermediate"]
weight: 10
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/tgciAD4hbyU" title="Activity 7 - What&#x27;s wrong with the file? - YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Nuvi 的一張照片" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        惡意軟體可能非常危險！不要立即打開它！我們可以先用指令列偷看一下內容。
    </div>
</div>

{{% notice warning %}}
對於不確定的文件，我們需要先查看它們的內容，避免意外打開病毒。
{{% /notice %}}

### 我們該如何查看文件的開頭幾行？

有時候你只需要看文件的開頭幾行。`head` 指令可顯示文件的起始幾行。  
格式是：`head [文件名]`

{{% notice tip %}}
如果加上 -n 參數，還可以指定要查看的行數。  
格式是：`head -n [行數] [文件名]`
{{% /notice %}}

試著查看 `malware.sh` 的前 5 行！

![head 指令](../images/Act7.1.png?classes=border,shadow)

### 我們該如何查看文件的結尾幾行？

有時候你只需要看文件的結尾幾行。`tail` 指令可顯示文件的最後幾行。  
格式是：`tail [文件名]`

{{% notice tip %}}
如果加上 -n 參數，還可以指定要查看的行數。  
格式是：`tail -n [行數] [文件名]`
{{% /notice %}}

試著查看 `malware.sh` 的最後 5 行！

![tail 指令](../images/Act7.2.png?classes=border,shadow)

### 我們該如何查看整個文件？

有時候僅查看文件的開頭和結尾不足以讓我們理解，需要了解整個文件內容，以判斷它的作用以及如何處理它。  
我們來看一下 `malware.sh` 的完整內容吧！

使用 `cat` 可以顯示文件的全部內容。  
格式是：`cat [文件名]`

{{% notice tip %}}
`less` 和 `more` 是類似於 `cat` 的指令。

#### more 指令

`more` 是一個用於處理較大文件的指令。它會盡量顯示多行內容，按 Enter 鍵可以繼續查看文件的下一部分，直到文件結尾。  
格式是：`more [文件名]`

![more 指令](../images/Act7.3.png?classes=border,shadow)

#### less 指令

`less` 是一個便於前後瀏覽文件內容的指令。它的使用方式與 `more` 相似，但可以使用上下箭頭鍵移動文件的不同部分。要退出則按下 'q' 鍵即可。  
格式是：`less [文件名]`

![less 指令](../images/Act7.4.png?classes=border,shadow)
{{% /notice %}}

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Nuvi 的一張照片" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        你認為 `malware.sh` 在做什麼？將你的發現添加到報告中吧！
    </div>
</div>