---
title: "紅利 1：可疑的網路釣魚活動"
draft: false
weight: 20
---

## 黑客傳送含惡意軟體的文件

在深入調查該網路釣魚活動後，你發現了一則來自威脅情報供應商 SolitaryStrike 的推文：

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/Bonus1.png?raw=true" alt= “Bonus1” width="value" height="value">

{{< notice note >}}
🤔 使用該推文開始你的追蹤調查。讓以下問題幫助你透過數據找到問題的答案。    
- 將你的答案提交至「Hackers Sending0 Malware Docs」挑戰中，訪問記分板：https://kc7cyber.azurewebsites.net/ 以獲取回饋並賺取分數。本部分中的問題已反映在記分板上。**此部分沒有其他主答案，記分板即是唯一的參考答案。**
- **確保在此練習中使用 SecurityLogs 資料庫。**{{< /notice >}}
{{< alert theme="success" >}}
🤔 **考慮以下問題，它們與該提示相關，能幫助你進一步思考。問題中包含了一些提示：**

{{%showanswer "問題 1"%}}	
*多少封電子郵件包含域名 notice[.]io？* 

🤫**提示：** 在 SecurityLogs 資料庫中哪個表格的哪個欄位可能包含這個可疑的網站/域名的相關證據？{{%/showanswer%}}

{{%showanswer "問題 2"%}}	
*哪個電子郵件地址發送了包含域名 notice[.]io 的郵件？* {{%/showanswer%}}

{{%showanswer "問題 3"%}}	
*包含域名 notice[.]io 的電子郵件主題是什麼？* {{%/showanswer%}}

{{%showanswer "問題 4"%}}	
*點擊 notice[.]io 聯結的用戶名稱是什麼？* {{%/showanswer%}}

{{%showanswer "問題 5"%}}	
*上述用戶在何時下載了文件 "Critical_Security_Path.docx"？*

🤫**提示：** 員工設備上創建的文件都記錄在 FileCreationEvents 日誌中。試著查看誰下載了這個文件。{{%/showanswer%}}

{{%showanswer "問題 6"%}}	
*1月9日來自 wesellbeakers.com 的用戶向你的組織發送了多少封電子郵件？*

🤫**提示：** 如果你不記得 Email 日誌的日期/時間格式，執行另一個 'take 10' 查詢並觀察，這將幫助你針對該問題撰寫查詢語法。{{%/showanswer%}}

{{%showanswer "問題 7"%}}	
*還有什麼其他域名託管在與 notice[.]io 相同的 IP 上？* {{%/showanswer%}}

{{%showanswer "問題 8"%}}	
*問題8：哪些電子郵件地址被發現發送了包含問題7中所確認域名的郵件？* {{%/showanswer%}}

{{%showanswer "問題 9"%}}	
*問題9：有多少用戶下載了發現於問題8中電子郵件的文件？* {{%/showanswer%}}

{{%showanswer "問題 10"%}}	
*問題10：觀察到的問題9中 **IMPORTANT_INSTRUCTIONS.pptx** 文件出現在兩封不同的電子郵件中。這兩封郵件的主題是什麼？* {{%/showanswer%}}

{{%showanswer "問題 11"%}}	
*問題11：哪個被入侵的 pharmasupplies.org 電子郵件地址用於發送鏈接至 scanverify.com？* {{%/showanswer%}}

{{%showanswer "問題 12"%}}	
*問題12：scanverify.com 曾解析過多少個 IP？* {{%/showanswer%}}

{{%showanswer "問題 13"%}}	
*問題13：考慮問題11中發現的電子郵件地址。該電子郵件地址還發送了其他什麼域名？* {{%/showanswer%}}

{{%showanswer "問題 14"%}}	
*問題14：scanverify.com 託管的文件名稱是什麼？* {{%/showanswer%}}

{{%showanswer "問題 15"%}}	
*問題15：哪個 .pptx 文件被用來攻擊 Gerald Kempinski 和 Kenny Salcido？* {{%/showanswer%}}

{{%showanswer "問題 16"%}}	
*問題16：哪個行動者的 IP 地址搜索了 EnvolveLabs 網站中的「helpdesk ticket system」說明？* {{%/showanswer%}}

{{%showanswer "問題 17"%}}	
*問題17：該行動者向你的組織總共發送了多少封電子郵件？* {{%/showanswer%}}

{{%showanswer "問題 18"%}}	
*問題18：一個惡意文件 'infector.exe' 在多台設備上觀察到，執行了可疑的行為。該文件的 process_commandline 是如何在這些設備上保持持久運行的？*

🤫**提示：** 行動者通常會建立持久性，這樣他們以後可以返回並在公司的網絡內進行手動操作（俗稱手動操作活動）。試著搜尋創造至外部域名和 IP 的連接系統，或者不尋常的行為，例如調度任務的創建。{{%/showanswer%}}
{{< /alert >}}