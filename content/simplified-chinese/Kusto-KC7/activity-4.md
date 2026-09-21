---
title: "活动4：抓住黑客"
draft: false
weight: 16
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/HjKkQVH5-rQ" title="Activity 4: Catch the Hacker - YouTube video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

{{< notice note >}}这是一个较短的章节，我们将简单解释一下场景，然后让你自由进行追踪调查。你可以根据自己的情况安排时间，但在实时会话中，我们一般会给参与者30-40分钟时间，然后继续后续内容。

- **请确保使用 SecurityLogs 数据库**
- **在积分榜提交“引介黑客”任务的答案**

#### **狩猎愉快！**{{< /notice >}}

### 引介黑客

现在您已经完成了初步培训，准备好在安全运营中心（SOC）接手第一个案例了！

一名安全研究员发推称，域名 *“immune[.]tech”* 正被黑客使用。据称，黑客正在从该域发送包含凭据（登录名、密码等）的钓鱼邮件。

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/CTF1.png?raw=true" alt= “CTF1” width="value" height="value">

{{< alert theme="warning" >}}
⚠️注意！常见的安全协议建议在提及潜在恶意链接时使用 immune[.]tech 或 domain[.]com 这样的格式。用括号将点号括起来可防止创建可点击链接。在搜索日志时，请确保移除了域名中的括号。{{< /alert >}}

根据您的同事进行的开源情报（OSINT）研究，该域可能被用作具有以下阶段的网络钓鱼活动的一部分：

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/CTF2.png?raw=true" alt= “CTF2” width="value" height="value">

{{< notice note >}}🎯**关键点 – 开源情报（OSINT）**：安全研究员和分析师经常使用免费的、公开的数据源，例如 Twitter！我们将这些公共数据称为开源情报（OSINT），它可能为调查提供线索。与所有互联网上的公共数据来源一样，在采取行动之前，你需要对OSINT线索进行严格分析，而不是盲目相信其来源。{{< /notice >}}
{{< alert theme="success" >}}
🤔 **请思考以下与线索相关的问题，帮助您找到线索。以下问题中包含一些提示：**

{{%showanswer "问题 1"%}}
*我们公司中有哪些用户收到了包含域名 immune.tech 的邮件？*

🤫 **提示**：试试以下命令，并插入相关的域名：
```
Email
| where link contains '[insert domain name]'
``` 
{{%/showanswer%}}

{{%showanswer "问题 2"%}}	
*我们拦截了包含该域的邮件吗？究竟是谁收到了这些邮件？*     

🤫 **提示**：Email 表中的 "accepted" 字段显示邮件是否被拦截。被拦截的邮件显示为 false。* {{%/showanswer%}}

{{%showanswer "问题 3"%}}	
*有哪些其他域与 immune.tech 共享相同的 IP？您能根据 PassiveDns 数据找到与该行为者相关的完整域列表吗？

🤫 **提示**：您可以使用 in 运算符来检查字段中的多个值。例如：where field in (“x”, “y”, “z”)* {{%/showanswer%}}

{{%showanswer "问题 4"%}}
*黑客使用了哪些邮件地址来发送这些域的邮件？* 

🤫 **提示**：查看包含可疑主题和链接的邮件中，在 "sender" 列中列出的内容。{{%/showanswer%}}

{{%showanswer "问题 5"%}}
*用户是否点击了钓鱼邮件中的任何链接？* 

🤫 **提示**：检查文件日志、进程事件和/或与收到恶意邮件的用户相关的设备或账户的浏览历史，查看是否有异常活动证据表明他们点击了链接。{{%/showanswer%}}

{{%showanswer "问题 6"%}}
*是否有用户的凭据被盗？您是怎么知道的？* 

🤫 **提示**：要盗取用户凭据，用户需要进入凭据收集网站并输入其用户名和密码。之后，行为者可能会尝试使用被盗凭据登录用户的账户。您可以在 **AuthenticationEvents** 表中找到有关登录活动的详细信息。{{%/showanswer%}}

{{%showanswer "问题 7"%}}
*是否有用户的邮箱内容被外泄（被盗）？您如何得知？此内容的丢失对公司造成了怎样的风险？* {{%/showanswer%}}
{{< /alert >}}  