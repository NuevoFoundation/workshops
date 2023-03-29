---
title: "Bonus 1: Phishy Activity"
draft: false
weight: 20
---


## Hackers Sending0 Malware Docs

After digging for a bit on the phishing activity, you come across another tweet from a threat intelligence vendor SolitaryStrike:

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/Bonus1.png?raw=true" alt= “Bonus1” width="value" height="value">


{{< notice note >}}
🤔 Use the tweet to begin your hunt. Let the questions help you pivot through the data to figure out what's going on.     
- Submit your answers to the "Hackers Sending0 Malware Docs" challenge on the Scoreboard at https://kc7cyber.azurewebsites.net/ to get feedback and earn points. Questions below are reflected in the Scoreboard for this section. **There is no master answer key for this section other than the Scoreboard.**
- **Be sure you use the SecurityLogs database for this exercise.**{{< /notice >}}
{{< alert theme="success" >}}
🤔 **Consider the following questions related to this tip to help you think through the hunt. Some hints are included in the questions below:**

{{%showanswer "Question 1"%}}	
*How many emails contained the domain notice[.]io?* {{%/showanswer%}}

{{%showanswer "Question 2"%}}	
*What email address sent the domain notice[.]io* {{%/showanswer%}}

{{%showanswer "Question 3"%}}	
*What was the subject line of the emails containing the domain notice[.]io?* {{%/showanswer%}}

{{%showanswer "Question 4"%}}	
*What is the name of the user who clicked on the notice[.]io link?* {{%/showanswer%}}

{{%showanswer "Question 5"%}}	
*At what timestamp did the user above download the file: "Critical_Security_Path.docx"?* {{%/showanswer%}}

{{%showanswer "Question 6"%}}	
*How many emails were sent to your organization on January 9th by users at wesellbeakers.com?* {{%/showanswer%}}

{{%showanswer "Question 7"%}}	
*What other domains are hosted on the same IPs as notice[.]io?* {{%/showanswer%}}

{{%showanswer "Question 8"%}}	
*Question 8.	What email address is seen sending emails containing one of the domains identified in question 7?* {{%/showanswer%}}

{{%showanswer "Question 9"%}}	
*Question 9.	How many users downloaded the files observed in the emails from question 8?* {{%/showanswer%}}

{{%showanswer "Question 10"%}}	
*Question 10.	One of the files observed in Question 9 - **IMPORTANT_INSTRUCTIONS.pptx** - was seen in two separate emails. What are the subject lines of these emails?* {{%/showanswer%}}

{{%showanswer "Question 11"%}}	
*Question 11.	Which compromised pharmasupplies.org email address was used to send a link to scanverify.com?* {{%/showanswer%}}

{{%showanswer "Question 12"%}}	
*Question 12.	How many IPs has scanverify.com resolved to?* {{%/showanswer%}}

{{%showanswer "Question 13"%}}	
*Question 13.	Consider the email address you found in question 11. What other domain did this email address send?* {{%/showanswer%}}

{{%showanswer "Question 14"%}}	
*Question 14.	What is the name of the file hosted on scanverify.com?* {{%/showanswer%}}

{{%showanswer "Question 15"%}}	
*Question 15.	Which .pptx file was used to target Gerald Kempinski and Kenny Salcido?* {{%/showanswer%}}

{{%showanswer "Question 16"%}}	
*Question 16.	Which actor IP was used to search EnvolveLabs' website for the term "helpdesk ticket system"?* {{%/showanswer%}}

{{%showanswer "Question 17"%}}	
*Question 17.	How many total emails were sent to your organization by this actor?* {{%/showanswer%}}

{{%showanswer "Question 18"%}}	
*Question 18.	Which .dll file was dropped on a victim machine shortly after the user downloaded the malicious zip : **EnvolveLabs_Research_Tool.7z***

🤫**Hint:** Files that are created on employees’ devices are captured in the FileCreationEvents log. Try looking there to see which employees downloaded this file. {{%/showanswer%}}

{{%showanswer "Question 19"%}}	
*Question 19.	Which six letter reconnaissance command was executed on the Machine of the user that loaded the implant above?*

🤫**Hint:** Try narrowing down on one particular device that downloaded the EnvolveLabs_Research_Tool.7z file. Then, look in both the FileCreationEvents and ProcessEvents logs to find new files and processes created around the time when the file was downloaded.{{%/showanswer%}}

{{%showanswer "Question 20"%}}	
*Question 20.	A malicious file 'infector.exe' is observed performing suspicious actions on multiple devices. What process_commandline associated with this file is being used for persistence on the devices?*

🤫**Hint:** Actors establish persistence so they can come back later and conduct manual tasks (called hands-on-keyboard activity) within your company’s network. Try looking for systems creating connections to external domains and IPs, or unusual behaviors like creation of scheduled tasks. {{%/showanswer%}}
{{< /alert >}}