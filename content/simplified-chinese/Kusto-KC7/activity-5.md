---
title: "奖励 1: 疑似钓鱼活动"
draft: false
weight: 20
---

## 黑客发送恶意软件文档

在挖掘钓鱼活动的过程中，你发现了威胁情报供应商 SolitaryStrike 的另一条推文：

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/Bonus1.png?raw=true" alt= “Bonus1” width="value" height="value">

{{< notice note >}}
🤔 使用这条推文开始你的调查。通过问题引导，深入数据发掘，找出真相。
- 将你的答案提交到 Scoreboard 上的 "Hackers Sending Malware Docs" 挑战： https://kc7cyber.azurewebsites.net/，以获取反馈并获取积分。本节中的问题也在 Scoreboard 中有所体现。**本节没有答案集，唯一的答案是以 Scoreboard 为准。**
- **请务必使用 SecurityLogs 数据库完成本练习。**{{< /notice >}}

{{< alert theme="success" >}}
🤔 **针对以下问题来思考这一提示，部分问题中提供了提示：**

{{%showanswer "问题 1"%}}  
*有多少封邮件包含了域名 notice[.]io？*  

🤫**提示：**SecurityLogs 数据库中的哪张表可能包含该可疑网站/域名的线索？{{%/showanswer%}}

{{%showanswer "问题 2"%}}  
*发送域名 notice[.]io 的邮件地址是？*{{%/showanswer%}}

{{%showanswer "问题 3"%}}  
*包含域名 notice[.]io 的邮件主题行是什么？*{{%/showanswer%}}

{{%showanswer "问题 4"%}}  
*点击 notice[.]io 链接的用户叫什么名字？*{{%/showanswer%}}

{{%showanswer "问题 5"%}}  
*上述用户在什么时间下载了文件：“Critical_Security_Path.docx”？*

🤫**提示：**员工设备上创建的文件会记录在 FileCreationEvents 日志中。试着从中查找下载该文件的员工。{{%/showanswer%}}

{{%showanswer "问题 6"%}}  
*1 月 9 日，来自 wesellbeakers.com 的用户总共向你的组织发送了多少封邮件？*

🤫**提示：**如果你不记得邮件日志的日期/时间格式，可以再运行一个‘take 10’查询观察。这将有助于你编写此问题的查询。{{%/showanswer%}}

{{%showanswer "问题 7"%}}  
*还有哪些域名与 notice[.]io 位于同一 IP 上？*{{%/showanswer%}}

{{%showanswer "问题 8"%}}  
*发送包含问题 7 中某个域名邮件的邮件地址是？*{{%/showanswer%}}

{{%showanswer "问题 9"%}}  
*从问题 8 所观察到的邮件中，有多少用户下载了文件？*{{%/showanswer%}}

{{%showanswer "问题 10"%}}  
*问题 10. 问题 9 中的文件之一 - **IMPORTANT_INSTRUCTIONS.pptx**，曾在两封不同的邮件中出现。这两封邮件的主题行是什么？*{{%/showanswer%}}

{{%showanswer "问题 11"%}}  
*发送到 scanverify.com 链接的 compromised pharmasupplies.org 邮件地址是哪个？*{{%/showanswer%}}

{{%showanswer "问题 12"%}}  
*scanverify.com 已解析到多少个 IP？*{{%/showanswer%}}

{{%showanswer "问题 13"%}}  
*考虑你在问题 11 中找到的邮件地址。该邮件地址还发送了哪个其他域名？*{{%/showanswer%}}

{{%showanswer "问题 14"%}}  
*scanverify.com 上托管的文件叫什么名字？*{{%/showanswer%}}

{{%showanswer "问题 15"%}}  
*用于针对 Gerald Kempinski 和 Kenny Salcido 的 .pptx 文件名称是什么？*{{%/showanswer%}}

{{%showanswer "问题 16"%}}  
*用于搜索 EnvolveLabs 网站关键字 "helpdesk ticket system" 的攻击者 IP 是哪一个？*{{%/showanswer%}}

{{%showanswer "问题 17"%}}  
*此攻击者总共向你的组织发送了多少封邮件？*{{%/showanswer%}}

{{%showanswer "问题 18"%}}  
*用户在下载恶意 zip 文件 **EnvolveLabs_Research_Tool.7z** 后不久，哪个 .dll 文件被丢到了受害者设备上？*

🤫**提示：**员工设备上创建的文件会记录在 FileCreationEvents 日志中。试着从中查找哪些设备下载了该文件。{{%/showanswer%}}

{{%showanswer "问题 19"%}}  
*下载上述 implant 的用户设备上执行的六字符侦察命令是什么？*

🤫**提示：**尝试缩小范围到一个设备，重点分析下载了 EnvolveLabs_Research_Tool.7z 文件的设备。然后查看 FileCreationEvents 和 ProcessEvents 日志，查找文件下载时附近产生的新文件和进程。{{%/showanswer%}}

{{%showanswer "问题 20"%}}  
*观察到恶意文件 'infector.exe' 在多台设备上执行可疑操作。这些设备上为实现持久化目的与此文件相关联的 process_commandline 是什么？*

🤫**提示：**攻击者建立持久化，以便之后可以手动操作（称为键盘操控活动）进入企业网络。尝试查找与外部域名和 IP 创建连接的系统，或类似创建计划任务的异常行为。{{%/showanswer%}}
{{< /alert >}}