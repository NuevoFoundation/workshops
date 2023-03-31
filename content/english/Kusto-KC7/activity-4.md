---
title: "Activity 4: Catch the Hacker"
draft: false
weight: 16
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/HjKkQVH5-rQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

{{< notice note >}}This is a much shorter section, we're just going to explain the scenario and let you go for free hunting time. You can take however much time you'd like to on this portion, but for live sessions we generally give participants 30-40 minutes before moving on.

- **Be sure you use the SecurityLogs database**
- **Submit your answers "Introducing the Hackers" challenge on the Scoreboard**

#### **Happy Hunting!**{{< /notice >}}

### Introducing the Hackers


Now that you’ve completed your initial round of training, you are ready to work your first case in the SOC!

A security researcher tweeted that the domain *“immune.tech”* was being used by hackers. Apparently the hackers are sending this domain inside credential phishing emails.

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/CTF1.png?raw=true" alt= “CTF1” width="value" height="value">

{{< alert theme="warning" >}}
⚠️NOTE! It is a commonly used safety protocol to use the format immune[.]tech or domain[.]com when mentioning potentially malicious links online. Adding these brackets around the dot prevents the creation of a clickable link. When searching logs, be sure to remove the brackets from the domain name. {{< /alert >}}

According to OSINT research your colleagues conducted, this domain may be used as part of a phishing campaign with the following stages:

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/CTF2.png?raw=true" alt= “CTF2” width="value" height="value">

{{< notice note >}}🎯**Key Point – Open Source Intelligence (OSINT)**: Security researchers and analysts often use free, publicly available data, like Twitter! We call this public data OSINT, and it can be a great way to get investigative leads. Like all public data sources on the internet, you should follow up any OSINT tip with rigorous analysis, rather than blindly trusting the source.{{< /notice >}}
{{< alert theme="success" >}}
🤔 **Consider the following questions related to this tip to help you think through the hunt. Some hints are included in the questions below:**

{{%showanswer "Question 1"%}}
*Which users in our organization were sent emails containing the domain immune.tech?*

🤫 **Hint**: Try the following command and insert the domain name in question.
```
Email
| where link contains '[insert domain name]'
``` 
{{%/showanswer%}}

{{%showanswer "Question 2"%}}	
*Did we block any of the emails containing that domain? Who actually received one of these emails?*     

🤫 **Hint**: The “accepted” field in the Email table tells you whether or not the email was blocked. Blocked emails will show as false.* {{%/showanswer%}}

{{%showanswer "Question 3"%}}	
*What other domains shared the same IPs as immune.tech? Can you find the full list of domains associated with this actor based on PassiveDns data? 

🤫 **Hint**: You can use the in operator to check for multiple values in a field. E.g. where field in (“x”, “y”, “z”)* {{%/showanswer%}}

{{%showanswer "Question 4"%}}
*What email addresses did the hackers use to send these domains?* 

🤫 **Hint**: Take a look at who is listered in the "sender" column for the emails you now know contain suspicious subjects and links. {{%/showanswer%}}

{{%showanswer "Question 5"%}}
*Did users click on any of the links in the phishing emails?* 

🤫 **Hint**: Check the file logs, process events, and/or browsing history for the devices and accounts associated with the users you know recieved the malicious email to see if there's evidence of strange activity indicating they did click the link. {{%/showanswer%}}

{{%showanswer "Question 6"%}}
*Did any user have their credentials stolen? How do you know?* 

🤫 **Hint**: In order to have their credentials stolen, a user would need to browse to the credential harvesting site and enter their username and password. After this, the actor might try to login to the user’s account using the stolen credentials. You can find details about login activity in the **AuthenticationEvents** table. {{%/showanswer%}}

{{%showanswer "Question 7"%}}
*Question 7.	Did any user have contents exfiltrated (stolen) from their mailbox? How do you know? What risk is posed to the company by this content being stolen?* {{%/showanswer%}}
{{< /alert >}}


