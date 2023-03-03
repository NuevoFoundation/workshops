---
title: "Bonus 1: Phishy Activity"
description: ""
draft: false
weight: 20
---


## Hackers Sending0 Malware Docs

After digging for a bit on the phishing activity, you come across another tweet from a threat intelligence vendor SolitaryStrike:

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/Bonus1.png?raw=true" alt= “” width="value" height="value">


{{< notice note >}}
🤔 Use the tweet to begin your hunt. Let the questions help you pivot through the data to figure out what's going on.     
- Submit your answers to the Scoreboard at https://kc7cyber.azurewebsites.net/ to get feedback and earn points. Questions below are reflected in the Scoreboard for this section. **There is no master answer key for this section other than the Scoreboard.**
- **Be sure you use the SecurityLogs2 database for this exercise.**{{< /notice >}}
{{< alert theme="success" >}}
*Question 1.	How many emails contained the domain notice[.]io?*

*Question 2.	What email address sent the domain notice[.]io*

*Question 3.	What was the subject line of the emails containing the domain notice[.]io?*

*Question 4.	What is the name of the user who clicked on the notice[.]io link?*

*Question 5.	At what timestamp did the user above download the file: "Critical_Security_Path.docx"?*


*Question 6.	How many emails were sent to your organization on January 9th by users at wesellbeakers.com?*

*Question 7.	What other domains are hosted on the same IPs as notice[.]io?*

*Question 8.	What email address is seen sending emails containing one of the domains identified in question 7?*

*Question 9.	How many users downloaded the files observed in the emails from question 8?*

*Question 10.	One of the files observed in Question 9 - **IMPORTANT_INSTRUCTIONS.pptx** - was seen in two separate emails. What are the subject lines of these emails?*

*Question 11.	Which compromised pharmasupplies.org email address was used to send a link to scanverify.com?*

*Question 12.	How many IPs has scanverify.com resolved to?*

*Question 13.	Consider the email address you found in question 11. What other domain did this email address send?*

*Question 14.	What is the name of the file hosted on scanverify.com?*

*Question 15.	Which .pptx file was used to target Gerald Kempinski and Kenny Salcido?*

*Question 16.	Which actor IP was used to search EnvolveLabs' website for the term "helpdesk ticket system"?*

*Question 17.	How many total emails were sent to your organization by this actor?*

*Question 18.	Which .dll file was dropped on a victim machine shortly after the user downloaded the malicious zip : **EnvolveLabs_Research_Tool.7z***{{< /alert >}}

{{< notice note >}}
🤫**Hint:** Files that are created on employees’ devices are captured in the FileCreationEvents log. Try looking there to see which employees downloaded this file.{{< /notice >}}

{{< alert theme="success" >}}
*Question 19.	Which six letter reconnaissance command was executed on the Machine of the user that loaded the implant above?*{{< /alert >}}

{{< notice note >}}
🤫**Hint:** Try narrowing down on one particular device that downloaded the EnvolveLabs_Research_Tool.7z file. Then, look in both the FileCreationEvents and ProcessEvents logs to find new files and processes created around the time when the file was downloaded.{{< /notice >}}

{{< alert theme="success" >}}
*Question 20.	A malicious file 'infector.exe' is observed performing suspicious actions on multiple devices. What process_commandline associated with this file is being used for persistence on the devices?*{{< /alert >}}

{{< notice note >}}
🤫**Hint:** Actors establish persistence so they can come back later and conduct manual tasks (called hands-on-keyboard activity) within your company’s network. Try looking for systems creating connections to external domains and IPs, or unusual behaviors like creation of scheduled tasks.{{< /notice >}}
