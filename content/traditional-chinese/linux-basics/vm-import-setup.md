---
title: "使用虛擬機器第二部分"
description: "繼續介紹如何使用虛擬機器的入門指南"
date: 2022-09-23
difficulties: ["中級"]
weight: 2
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/ffcyyJXEhwY" title="使用虛擬機器第二部分 - YouTube 影片" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Nuvi 的照片" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        非常好，主機環境已經準備就緒！現在讓我們將受感染的電腦影像載入為一個虛擬機器。
    </div>
</div>

## 什麼是影像檔？

`影像檔`有許多不同的類型。我們有照片，這些是影像檔。電腦影像檔與此非常相似。兩者都是在某個時刻的副本。我們將使用一個行為奇怪的電腦副本進行操作。然而不用擔心，這不會對你的電腦造成傷害！請記住，操作系統將會位於`沙盒`內，這意味著它無法影響你的電腦。

## 設置 Kali Linux

### 下載影像檔

`操作系統影像檔`使得傳送電腦的精確副本變得非常容易。  
VirtualBox 使用 `.ova` 檔案擴展來存儲其機器影像檔。這與你將文件保存為 `.docx` 或照片保存為 `.png` 類似。

讓我們下載一份電腦副本吧！點擊以下鏈接下載。  
大多數操作系統影像檔都很大（約 8GB），但我們的影像只有約 3GB。不過下載仍可能需要幾分鐘時間。

<a class="my-2 mx-4 btn btn-info" href="https://nuevofoundation-my.sharepoint.com/:f:/g/personal/beatris_mendezgandica_nuevofoundation_org/EqwR5wQyp9xEpYoP524regQB6rnwgyJBMULhuGIzyMj_4w?e=yg6rFv" target="_blank">
下載鏈接
</a>

### 匯入虛擬機器

現在你已經下載了機器影像檔，是時候將它設置好！

#### 步驟 1

在 VirtualBox 應用程式中，我們可以「匯入」影像檔。點擊「匯入」按鈕開始！

![VirtualBox 匯入按鈕](../images/import-01.PNG?classes=border,shadow)

#### 步驟 2

我們需要匯入的設備是你剛剛下載的 `.ova` 檔案。點擊帶有綠色符號的小文件夾圖標。這將打開一個視窗以便選擇並選取 `.ova` 檔案。

![VirtualBox 匯入畫面](../images/import-02.PNG?classes=border,shadow)

#### 步驟 3

現在你已選擇了 .ova 影像檔。點擊「開啟」，然後在「匯入的設備」畫面點擊「下一步」。

![VirtualBox 匯入畫面](../images/import-03.PNG?classes=border,shadow)

#### 步驟 4

最後一步！在「名稱」欄中，可以隨意給它起個新名字，這是你的虛擬機！確保「USB 控制器」選項沒有被選中。記得取消勾選。接下來，對於 MAC 地址策略，建議選擇「為所有網路適配器生成新的 MAC 地址」。最後，點擊「匯入」！

![VirtualBox 匯入畫面](../images/import-05.PNG?classes=border,shadow)

**注意：** 這會彈出一個需要時間來完成匯入的提示窗口。  
通常需要約 5 分鐘，但根據你的電腦性能可能會花更長一些時間。

![VirtualBox 匯入畫面](../images/import-06.JPG?classes=border,shadow)

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Nuvi 的照片" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        現在我們可以啟動受感染的機器，開始我們的調查了！
    </div>
</div>