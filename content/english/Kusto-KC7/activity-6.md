---
title: "Bonus 2: Truth or Misinformation?"
draft: false
weight: 22
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/bGFhF22Lr9I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## Cyber Blog Analysis

For this scenario, we'd like you to take a look at the blog post below and see if you can find evidence in **SecurityLogs2** that supports or disproves the information posted.

------------------------------------------------------
*[Start Blog Post]*

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/blog1.png?raw=true" alt= “Blog1” width="value" height="value">


**What is UnhelpfulDesk?** 
 
UnhelpfulDesk malware implants are dropped by files with names that resemble legitimate IT functions, such as software updates or password resets, or medical research topics, such as vaccine research. These files are delivered to victims via malicious emails containing links to download the files.  
 
 
 
**UnhelpfulDesk Droppers** 
 
| Filename 	| Sha256     |
| --------------- | ------------------------------------------------------- |
|Thesis_on_vaccine.exe 	| 232568cb9c5d1b3698334c504b173e637826d 79074fb8fa23a54981578eb7dc9   |
|ResearchBibliographyGenerator.pptx 	| 6e4a6278077f310e69017dba9a173d9d27 eddec9236231e1717a475c26242ae6    |
|Software_Update.rar |	2f2e5f20a726e9710b9c5c7c681e66240f854acd 48107e5cd193d6133297b72f    |
|IT_PASSWORD_RESET_TOOL.rar |	fe04d68b163bbf432196c0d7bb184176a42606 30374c93c916cc6b52fc9855f7 |
 
**Dropped Implants** 
 
|Filename 	| Sha256 |
| --- | --- | 
|updater.dll |	3666cb55d0c4974bfee855ba43d596fc6d10 baff5eb45ac8b6432a7d604cb8e9 | 
|updater.dll |	42a337bcec26df0130a11baf9e6017999385 1b88f1cabec52973f88774e903fb | 
|updater.dll |	ea05ff75fef906a60545129a7c5bea2956bf de63b8e714eb42db3ae50b99dec3 | 
|updater.dll |  370ce39ba328329ff16b5ede1079f6402e68 abceb34e65cb31883a3b3730b530 | 
|updater.dll |	e3970346ff7fcc3665f027d7f221968087f3 c42705f5799fbc1d2811ab1ca4ea | 
 
 
 
Note: *Samples of the UnhelpfulDesk implant files detected by VulnerableArray researchers are available on VirusTotal.*
 
Once successfully deployed, the UnhelpfulDesk implant executes reconnaissance via the following commands: 
 ```
  ping 8.8.8.8    
  whoami    
  net user Administratr 
 ```
Following this, the malware will encrypt files on the machine and demand a ransom to decrypt the files. The ransom note is pulled down from Pastebin as shown below: 
```
curl https://pastebin[.]com/HOW%20TO%20RECOVER%20YOUR%20FILES.txt 
```

**Other Indicators of Compromise (IOCs)**
 
214.217.73[.]146     
65.69.253[.]41     
199.57.49[.]250     
install-notice[.]com      
remarkablevirus[.]tech        
noreply_info[@]hotmail.com      
vaccinejournal[@]yahoo.com 

*[End Blog Post]*

-----------------------------------------------------

## Now it’s up to you… 
 
Our Chief Information Security Officer (CISO) has asked you to evaluate this report from VulnerableArray and determine whether it is accurate using the logs from the **SecurityLogs2** database.     

🤔  While making your assessment, consider the following questions: 

{{< alert theme="success" >}} 
*Question 1.	Do all the reported indicators belong to the same cluster of activity? How do you know?*
 {{< notice note >}}
  **Hint:** Use the Diamond Model (Adversary, Victim, Infrastructure, Capabilities) to help you think about clustering distinct groups of activity. It Look for similarities and differences in each of the four Diamond Model vertices.  {{< /notice >}}
 
*Question 2.	The report claims that the UnhelpfulDesk malware is to ultimately deploy ransomware and encrypt files on an infected system. Do you agree with this assessment? Or do you see evidence of alternative actions on objectives?*
 {{< notice note >}}
  **Hint:** Try looking for activity related to the malware-based indicators shared in the blog, then identify a few compromised systems. Do you see post-compromise activity on any of these systems that’s different from the ransomware described in the blog? {{< /notice >}}
 
*Question 3.	What analytical mistakes, if any, were made by the authors of the blog?* 
 {{< notice note >}}
  **Hint:** Some processes are executed automatically by the malware upon execution. Other processes are run manually (hand-on-keyboard) by the operator after the command and control channel is establish. {{< /notice >}}
 
 
*Question 4.	Is the UnhelpfulDesk malware unique to the ITINIUM actor? How do you know?* 
 {{< notice note >}}
  **Hint:** The updater.dll implants appear to be dropped from files with two separate themes (IT and research). Think about why that might be the case.  {{< /notice >}}
 
*Question 5.	Are there multiple actors targeting Envolve Labs? If so, can you describe the Tactics, Techniques, and Procedures (TTPs) of each of them? How are they similar? How are they different?* 
{{< notice note >}}
  **Hint:** Compare and contrast the diamond model for each of the observed clusters of activity. {{< /notice >}}
 
*Question 6. How might gaps in visibility have contributed to the conclusions of the blog author(s)? How might they contribute to your own analytical assessments?*
{{< /alert >}}