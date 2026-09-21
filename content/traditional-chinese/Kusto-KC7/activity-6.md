---
title: "獎勵 2：真相還是錯誤訊息？"
draft: false
weight: 22
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/bGFhF22Lr9I" title="Bonus 2: Truth or Misinformation? - YouTube video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## 網絡部落格分析

在此情境中，我們希望您查看以下的部落格文章，並檢查是否能在 **SecurityLogs2** 中找到相關證據支持或反駁該文章所發布的資訊。

------------------------------------------------------

*[部落格文章開始]*

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/blog1.png?raw=true" alt= “部落格1” width="value" height="value">

**什麼是 UnhelpfulDesk？**

UnhelpfulDesk 惡意軟體植入工具是透過檔案投放的，這些檔案名稱類似於合法的 IT 功能，例如軟體更新或密碼重設，或醫學研究主題，例如疫苗研究。這些檔案是通過含有下載鏈接的惡意電子郵件發送給受害者的。

**UnhelpfulDesk 投放器**

| 檔案名稱 	| Sha256     |
| --------------- | ------------------------------------------------------- |
|Thesis_on_vaccine.exe 	| 232568cb9c5d1b3698334c504b173e637826d 79074fb8fa23a54981578eb7dc9   |
|ResearchBibliographyGenerator.pptx 	| 6e4a6278077f310e69017dba9a173d9d27 eddec9236231e1717a475c26242ae6    |
|Software_Update.rar |	2f2e5f20a726e9710b9c5c7c681e66240f854acd 48107e5cd193d6133297b72f    |
|IT_PASSWORD_RESET_TOOL.rar |	fe04d68b163bbf432196c0d7bb184176a42606 30374c93c916cc6b52fc9855f7 |

**投放的植入工具**

| 檔案名稱 	| Sha256 |
| --- | --- | 
|updater.dll |	3666cb55d0c4974bfee855ba43d596fc6d10 baff5eb45ac8b6432a7d604cb8e9 | 
|updater.dll |	42a337bcec26df0130a11baf9e6017999385 1b88f1cabec52973f88774e903fb | 
|updater.dll |	ea05ff75fef906a60545129a7c5bea2956bf de63b8e714eb42db3ae50b99dec3 | 
|updater.dll |  370ce39ba328329ff16b5ede1079f6402e68 abceb34e65cb31883a3b3730b530 | 
|updater.dll |	e3970346ff7fcc3665f027d7f221968087f3 c42705f5799fbc1d2811ab1ca4ea | 

注意：*VulnerableArray 研究人員在 VirusTotal 上檢測到的 UnhelpfulDesk 植入工具樣本可供下載。*

一旦成功部署，UnhelpfulDesk 植入工具會透過以下指令進行偵查：
```
ping 8.8.8.8    
whoami    
net user Administratr 
```
隨後，惡意軟體將加密機器上的文件，並要求支付贖金來解密文件。贖金要求通過 Pastebin 從以下鏈接下載：
```
curl https://pastebin[.]com/HOW%20TO%20RECOVER%20YOUR%20FILES.txt 
```

**其他妥協指標 (IOCs)**

214.217.73[.]146     
65.69.253[.]41     
199.57.49[.]250     
install-notice[.]com      
remarkablevirus[.]tech        
noreply_info[@]hotmail.com      
vaccinejournal[@]yahoo.com 

*[部落格文章結束]*

-----------------------------------------------------

## 現在輪到您了…

我們的首席資訊安全官 (CISO) 要求您評估 VulnerableArray 所撰寫的這份報告，並使用 **SecurityLogs2** 資料庫的日誌來確定報告的準確性。

🤔 評估時，請考慮以下問題：

{{< alert theme="success" >}} 
*問題 1.  所有報告的指標是否屬於相同的活動群集？您如何得知？*
 {{< notice note >}}
  **提示：** 使用鑽石模型（攻擊者，受害者，基礎設施，能力）幫助您思考如何將觀察到的活動分群。檢視每個鑽石模型頂點的相似性和差異性。{{< /notice >}}

*問題 2.  該報告聲稱 UnhelpfulDesk 惡意軟體最終會部署勒索軟體並加密受感染系統上的文件。您是否同意這一評估？或者您是否看到了其他的目標行動證據？*
 {{< notice note >}}
  **提示：** 嘗試檢查有關部落格中分享的惡意軟體相關指標的活動，然後識別出一些被入侵的系統。您是否看到了部落格描述的勒索軟體之外的後續入侵活動？{{< /notice >}}

*問題 3.  部落格作者在分析中是否犯下了任何錯誤？* 
 {{< notice note >}}
  **提示：** 一些指令在惡意軟體執行時會自動執行，而其他指令則是在建立命令與控制通道後由操作員手動執行的。{{< /notice >}}

*問題 4.  UnhelpfulDesk 惡意軟體是否獨屬於 ITINIUM 行動者？您如何得知？* 
 {{< notice note >}}
  **提示：** updater.dll 植入工具似乎是