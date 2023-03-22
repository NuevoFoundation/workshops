---
title: "Activity 4: Catch the Hacker"
draft: false
weight: 16
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/iXvwu-enXLs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

{{< notice note >}}This is a much shorter section, we're just going to explain the scenario and let you go for free hunting time. You can take however much time you'd like to on this portion, but for live sessions we generally give participants 30-40 minutes before moving on.

- **Be sure you use the SecurityLogs database**
- **Submit your answers "Introducing the Hackers" challenge on the Scoreboard**

### **Happy Hunting!**{{< /notice >}}

### Introducing the Hackers


Now that you’ve completed your initial round of training, you are ready to work your first case in the SOC!

A security researcher tweeted that the domain *“immune.tech”* was being used by hackers. Apparently the hackers are sending this domain inside credential phishing emails.

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/CTF1.png?raw=true" alt= “CTF1” width="value" height="value">

{{< alert theme="warning" >}}
⚠️NOTE! This domain and others encountered in this game are fictional and are not representative of actual malicious activity.{{< /alert >}}

According to OSINT research your colleagues conducted, this domain may be used as part of a phishing campaign with the following stages:

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/CTF2.png?raw=true" alt= “CTF2” width="value" height="value">

{{< notice note >}}🎯**Key Point – Open Source Intelligence (OSINT)**: Security researchers and analysts often use free, publicly available data, like Twitter! We call this public data OSINT, and it can be a great way to get investigative leads. Like all public data sources on the internet, you should follow up any OSINT tip with rigorous analysis, rather than blindly trusting the source.{{< /notice >}}
{{< alert theme="success" >}}
🤔 **Consider the following questions related to this tip to help you think through the hunt:**

{{% showanswer Questions 1%}}	
*Question 1.	Which users in our organization were sent emails containing the domain immune.tech?*

*Question 2.	Did we block any of the emails containing that domain? Who actually received one of these emails? (hint: the “accepted” field in the Email table tells you whether or not the email was blocked. Blocked emails will show as false).*

*Question 3.	What other domains shared the same IPs as immune.tech? Can you find the full list of domains associated with this actor based on PassiveDns data? (hint: you can use the in operator to check for multiple values in a field. E.g. where field in (“x”, “y”, “z”)*

*Question 4.	What email addresses did the hackers use to send these domains?* 

*Question 5.	Did users click on any of the links in the phishing emails?*

*Question 6.	Did any user have their credentials stolen? How do you know?*{{ %/ showanswer %}}

🤫 **Hint**: In order to have their credentials stolen, a user would need to browse to the credential harvesting site and enter their username and password. After this, the actor might try to login to the user’s account using the stolen credentials. You can find details about login activity in the **AuthenticationEvents** table.


*Question 7.	Did any user have contents exfiltrated (stolen) from their mailbox? How do you know? What risk is posed to the company by this content being stolen?*

{{% showanswer Question 1%}}	*Which users in our organization were sent emails containing the domain immune.tech?* {{ %/ showanswer %}}{{< /alert >}}


