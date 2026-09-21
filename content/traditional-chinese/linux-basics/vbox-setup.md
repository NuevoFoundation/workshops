---
title: "使用虛擬機器 第1部分"
description: "使用虛擬機器的入門指南"
date: 2022-09-23
difficulties: ["中等"]
weight: 1
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/zoutwedSLKI" title="使用虛擬機器 第1部分 - YouTube 視頻" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Nuvi 的照片" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        我們提供了一份被入侵電腦的虛擬機器副本，請幫助我們解決問題。
    </div>
</div>

{{% notice info %}}

### 什麼是虛擬機器？

**虛擬機器**（通常稱為 VM）是一個電腦檔案（稱為 `鏡像`），它的運行行為就像真正的電腦。  
換句話說，它是一台電腦內部的電腦。它像其他程式一樣在視窗中運行。  
這使您在虛擬機器上獲得的使用體驗與在正常電腦上基本一致。

虛擬機器與系統的其他部分是 `隔離` 的，這意味著虛擬機器內的軟體無法對主機電腦造成影響。  
這為測試其他作業系統、存取病毒感染的數據以及創建新軟體或應用程式提供了理想環境。
{{% /notice %}}

## 什麼是 VirtualBox？

VirtualBox 是一款虛擬化軟體，也稱為 `虛擬管理程式`。它允許您的電腦托管虛擬機器。

## 下載 VirtualBox

您可以通過以下鏈接下載 VirtualBox：

<a class="my-2 mx-4 btn btn-info" target="_blank" href="https://www.virtualbox.org/wiki/Downloads">
下載鏈接
</a>

如果您使用的是 Windows：請選擇 "Windows hosts"  
如果您使用的是 macOS：請選擇 "OS X hosts"  
如果您使用其他系統，我們建議在這次工作坊中選擇 Windows 或 macOS。其他系統的設置超出了本次工作坊的範疇。

![virtual box download page](../images/vbox-dlpage-update.PNG?classes=border,shadow)

接下來，運行您剛剛下載的安裝程式。

今天的預設選項就足夠了！在安裝程式中不斷點擊 "Next" 即可。

請注意，第三頁上有一些選項需要選擇。
![virtual box install options](../images/vbox-install-03.PNG?classes=border,shadow)

如果您看到此警告，請不要擔心，因為這是正常的。
![virtual box network warning](../images/vbox-install-04.PNG?classes=border,shadow)

當您到達此頁面時，點擊 "Install" 完成設置。
![virtual box install](../images/vbox-install-05.PNG?classes=border,shadow)

最後，選擇選框以在安裝完成後啟動 VirtualBox。
![virtual box launch after install](../images/vbox-install-06.PNG?classes=border,shadow)

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Nuvi 的照片" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        是的！我們已完成 VirtualBox 的安裝。現在可以開始使用它了。
    </div>
</div>