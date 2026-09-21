---
title: "Activity 1 - Determine User Account"
description: "使用 Linux 指令來判斷您使用的是哪個使用者帳戶"
date: 2022-09-23
difficulties: ["intermediate"]
weight: 4
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/XAtCQ9S1vSI" title="Activity 1 - Determine User Account - YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Nuvi 的照片" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        現在我們處於命令行中。讓我們來測試一個簡單的指令，它會顯示目前使用的使用者帳戶。
    </div>
</div>

## 什麼是使用者帳戶？

在 Linux 中，每位使用者都有自己的使用者帳戶。使用者帳戶可以用於唯一識別每一個使用者。

例如，假設您和您的朋友 Nuvi 共用一台電腦。您和 Nuvi 可以分別創建自己的使用者帳戶，以追蹤哪些檔案屬於誰以及確保彼此不會意外更改重要的內容。

## 我如何知道自己使用的是哪個帳戶？

Linux 指令 `whoami` 可以告訴您您正在使用的帳戶是什麼。試試看！

```
whoami
```

<!---![home directory](../images/01_whoami.png?classes=border,shadow) --->
<img src="../images/01_whoami.png" alt="home directory" style="width:600px;"/>

在上述範例中，終端機的輸出顯示我們的使用者名稱為 `nuvi`。

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Nuvi 的照片" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        現在我們已檢查了自己的身份，接下來要確認自己所在的位置。
    </div>
</div>