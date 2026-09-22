---
title: "活動4：抓住駭客"
draft: false
weight: 16
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/HjKkQVH5-rQ" title="Activity 4: Catch the Hacker - YouTube video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

{{< notice note >}}這是一個較短的章節，我們只會解釋情境並讓您自由進行尋獵活動。您可以花任意多的時間完成此部分，但在實時會議中，我們通常會給參與者30到40分鐘的時間來完成。

- **請確保您使用的是 SecurityLogs 資料庫**
- **在排行榜中提交您的答案到 "Introducing the Hackers" 挑戰**

#### **祝您好運！**{{< /notice >}}

### 認識駭客

現在您已完成初步的訓練，準備好在安全運營中心（SOC）處理第一個案件了！

一位安全研究員在推特上提到，*「immune[.]tech」* 這個網域正被駭客使用。據說，駭客正在從該網域內發送包含憑證（登入名、密碼等）的網路釣魚郵件。

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/CTF1.png?raw=true" alt= “CTF1” width="value" height="value">

{{< alert theme="warning" >}}
⚠️注意！這是一個常用的安全協議，在網上提及可能有害的連結時，會使用像 immune[.]tech 或 domain[.]com 這樣的格式。用方括號將點號包圍住可以避免生成可點擊的連結。在搜尋日誌時，請記得移除網域名稱中的括號。{{< /alert >}}

根據您的同事進行的 OSINT（開源情報）研究，這個網域可能是釣魚活動的一部分，其階段如下：

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/CTF2.png?raw=true" alt= “CTF2” width="value" height="value">

{{< notice note >}}🎯**關鍵點 – 開源情報（OSINT）**：安全研究人員與分析師經常使用免費的、公開的數據，如 Twitter！我們稱這些公共數據為 OSINT，它可以是獲取調查線索的好方法。不過，與互聯網上的所有公共數據來源一樣，您應該通過嚴格的分析來跟進任何 OSINT 提示，而不是盲目相信資料來源。{{< /notice >}}
{{< alert theme="success" >}}
🤔 **考慮以下與該提示相關的問題，以幫助您進行搜尋調查。以下問題中還包含了一些提示：**

{{%showanswer "問題1"%}}
*我們組織中的哪些用戶收到了包含網域 immune.tech 的電子郵件？*

🤫 **提示**：嘗試以下指令，並插入相關的網域名稱。
```
Email
| where link contains '[insert domain name]'
``` 
{{%/showanswer%}}

{{%showanswer "問題2"%}}	
*我們是否阻擋了任何包含該網域的電子郵件？實際上哪些人收到了這些郵件？*     

🤫 **提示**：“Email”表中的 “accepted” 欄位告訴您郵件是否被阻擋。被阻擋的郵件將顯示為 false。{{%/showanswer%}}

{{%showanswer "問題3"%}}	
*還有什麼網域與 immune.tech 使用了相同的 IP？您能依據 PassiveDns 資料找到與此行為者相關的全部網域列表嗎？*

🤫 **提示**：您可以使用 in 運算符在欄位中檢查多個值。例：where field in (“x”, “y”, “z”){{%/showanswer%}}

{{%showanswer "問題4"%}}
*駭客使用了哪些電子郵件地址來發送這些網域？* 

🤫 **提示**：檢查 “sender” 欄位，看哪些郵件包含可疑的主題與連結。{{%/showanswer%}}

{{%showanswer "問題5"%}}
*用戶是否點擊了任何釣魚郵件中的連結？* 

🤫 **提示**：檢查與收到惡意郵件相關聯的用戶裝置和賬戶的檔案日誌、程序事件和/或瀏覽歷史，以尋找是否有奇怪活動顯示用戶點擊了該連結。{{%/showanswer%}}

{{%showanswer "問題6"%}}
*是否有用戶的憑證被竊取？您如何知道？* 

🤫 **提示**：用戶的憑證要被竊取，需瀏覽到憑證竊取網站並輸入其用戶名與密碼。在此之後，行為者可能會使用被竊取的憑證嘗試登入用戶賬戶。您可以在 **AuthenticationEvents** 表中找到有關登錄活動的詳細信息。{{%/showanswer%}}

{{%showanswer "問題7"%}}
*是否有用戶的郵箱內容被外流（被竊取）？您如何知道？被竊取的內容對公司造成了什麼風險？* {{%/showanswer%}}
{{< /alert >}}