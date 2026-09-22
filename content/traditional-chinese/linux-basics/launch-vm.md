---
title: "啟動虛擬機器"
description: "深入使用虛擬機器的入門指南"
date: 2022-09-23
difficulties: ["中級"]
weight: 3
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/eqHr7UeKs70" title="啟動虛擬機器 - YouTube 影片" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="一張 Nuvi 的照片" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        現在所有安裝都完成了，讓我們來啟動虛擬機器吧！
    </div>
</div>

## 啟動虛擬機器

在 VirtualBox 中，這非常簡單。只需雙擊我們在上一個步驟中創建的虛擬機器，即可開始！
![virtual box launch kali](../images/start-01.PNG?classes=border,shadow)

當虛擬機器正在啟動時，它可能會顯示一些像以下圖片中的警告。這些警告是可以忽略的。

![virtual box kali warnings](../images/start-02.PNG?classes=border,shadow)

## 登入虛擬機器

首先，你需要登入。使用以下 *登入憑據* 開始吧！

| 使用者名稱 | 密碼       |
| :--------: | :--------: |
|    nuvi    | nuevo123   |

{{% notice warning %}}
這樣的密碼保密性非常低！它僅用於這次工作坊的用途。  
請不要為您的個人帳戶使用像這樣簡單的密碼！

詳細了解密碼安全，請參加我們的安全工作坊！

<a class="my-2 mx-4 btn btn-info" target="_blank" href="https://workshops.nuevofoundation.org/security/">
安全工作坊連結</a>
{{% /notice %}}

![kali sign in page](../images/start-03.PNG?classes=border,shadow)

## 終端機

在我們的所有活動中，我們將練習**命令列介面**（CLI）技能。學習 CLI 是很有益的，因為它比使用 GUI 更快速、更高效。GUI 是**圖形化使用者介面**，可能是你過去最習慣使用的介面。進入 Kali 的終端機吧，這裡通稱為 "終端仿真器"。

![kali find terminal](../images/start-04.PNG?classes=border,shadow)

點擊按鈕後，終端機應該會像以下圖片一樣打開。一旦終端機打開，就可以準備開始 Linux 活動了！

![kali terminal open](../images/start-05.PNG?classes=border,shadow)