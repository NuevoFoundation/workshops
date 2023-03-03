---
title: "Bonus 2: Blog Analysis"
description: ""
draft: false
weight: 22
---

{{< youtube auw1DJCQylQ >}}


<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/blog1.png?raw=true" alt= “” width="value" height="value">

VulnerableArray Security Intelligence (VSI) discovered a new APT group named ITINIUM. ITINIUM likely operates from Urzikstan and primarily targets pharmaceutical companies in Europe and North America. 
 
Beginning in late 2022, ITINIUM launched a targeted phishing campaign in which it delivered emails containing malicious links. The resulting files led to implants from one new malware family that VSI calls UnhelpfulDesk. VulnerableArray Security Intelligence assesses with a high degree of confidence that the UnhelpfulDesk malware is custom-developed and use exclusively by ITINIUM.  
 
ITINIUM uses UnhelpfulDesk in order to gain access to victim systems and encrypt their files.  


(pic)

UnhelpfulDesk 
 
UnhelpfulDesk malware implants are dropped by files with names that resemble legitimate IT functions, such as software updates or password resets, or medical research topics, such as vaccine research. These files are delivered to victims via malicious emails containing links to download the files.  
 
 
 
UnhelpfulDesk droppers: 
 
|Filename 		|Sha256 
Thesis_on_vaccine.exe 		232568cb9c5d1b3698334c504b173e637826d79074fb8fa
23a54981578eb7dc9 
ResearchBibliographyGenerator.pptx 	6e4a6278077f310e69017dba9a173d9d27eddec9236231 e1717a475c26242ae6 
Software_Update.rar 	2f2e5f20a726e9710b9c5c7c681e66240f854acd48107e5c d193d6133297b72f 
IT_PASSWORD_RESET_TOOL.rar 	fe04d68b163bbf432196c0d7bb184176a4260630374c93 c916cc6b52fc9855f7 
 
Dropped implants 
 
Filename 	Sha256 
updater.dll 	3666cb55d0c4974bfee855ba43d596fc6d10baff5eb45ac8b6432a7d604cb8e9 
updater.dll 	42a337bcec26df0130a11baf9e60179993851b88f1cabec52973f88774e903fb 
updater.dll 	ea05ff75fef906a60545129a7c5bea2956bfde63b8e714eb42db3ae50b99dec3 
updater.dll      	370ce39ba328329ff16b5ede1079f6402e68abceb34e65cb31883a3b3730b530 
updater.dll 	e3970346ff7fcc3665f027d7f221968087f3c42705f5799fbc1d2811ab1ca4ea 
 
 
 
** Samples of the UnhelpfulDesk implant files detected by VulnerableArray researchers are available on VirusTotal. 
 
Once successfully deployed, the UnhelpfulDesk implant executes reconnaissance via the following commands: 
 
ping 8.8.8.8 whoami 
net user Administratr 
 
Following this, the malware will encrypt files on the machine and demand a ransom to decrypt the files. The ransom note is pulled down from Pastebin as shown below: 
 
curl https://pastebin.com/HOW%20TO%20RECOVER%20YOUR%20FILES.txt 
 
Other IOCs 
 
214.217.73[.]146 
65.69.253[.]41 199.57.49[.]250 install-notice[.]com remarkablevirus[.]tech noreply_info[@]hotmail.com 
vaccinejournal[@]yahoo.com 
