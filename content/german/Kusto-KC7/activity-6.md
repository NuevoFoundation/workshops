---
title: "Bonus 2: Wahrheit oder Fehlinformation?"
draft: false
weight: 22
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/bGFhF22Lr9I" title="Bonus 2: Wahrheit oder Fehlinformation? - YouTube-Video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## Analyse des Cyber-Blogs

In diesem Szenario möchten wir, dass Sie sich den untenstehenden Blogbeitrag ansehen und prüfen, ob Sie in **SecurityLogs2** Beweise finden, die die im Beitrag veröffentlichen Informationen unterstützen oder widerlegen können.

------------------------------------------------------
*[Start des Blogbeitrags]*

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/blog1.png?raw=true" alt= “Blog1” width="value" height="value">


**Was ist UnhelpfulDesk?** 
 
Die UnhelpfulDesk-Malware wird über Dateien mit Namen verbreitet, die legitimen IT-Funktionen ähneln, wie Softwareaktualisierungen oder Passwortzurücksetzungen, oder medizinischen Forschungsthemen, wie etwa Impfstoffforschung. Diese Dateien werden Opfer über schädliche E-Mails zugestellt, die Links enthalten, um die Dateien herunterzuladen.  
 
 
 
**UnhelpfulDesk Droppers** 
 
| Dateiname 	| Sha256     |
| --------------- | ------------------------------------------------------- |
|Thesis_on_vaccine.exe 	| 232568cb9c5d1b3698334c504b173e637826d 79074fb8fa23a54981578eb7dc9   |
|ResearchBibliographyGenerator.pptx 	| 6e4a6278077f310e69017dba9a173d9d27 eddec9236231e1717a475c26242ae6    |
|Software_Update.rar |	2f2e5f20a726e9710b9c5c7c681e66240f854acd 48107e5cd193d6133297b72f    |
|IT_PASSWORD_RESET_TOOL.rar |	fe04d68b163bbf432196c0d7bb184176a42606 30374c93c916cc6b52fc9855f7 |
 
**Abgelegte Infektionsdateien** 
 
|Dateiname 	| Sha256 |
| --- | --- | 
|updater.dll |	3666cb55d0c4974bfee855ba43d596fc6d10 baff5eb45ac8b6432a7d604cb8e9 | 
|updater.dll |	42a337bcec26df0130a11baf9e6017999385 1b88f1cabec52973f88774e903fb | 
|updater.dll |	ea05ff75fef906a60545129a7c5bea2956bf de63b8e714eb42db3ae50b99dec3 | 
|updater.dll |  370ce39ba328329ff16b5ede1079f6402e68 abceb34e65cb31883a3b3730b530 | 
|updater.dll |	e3970346ff7fcc3665f027d7f221968087f3 c42705f5799fbc1d2811ab1ca4ea | 
 
 
 
Hinweis: *Muster der von VulnerableArray-Forschern erkannten UnhelpfulDesk Infektionsdateien sind auf VirusTotal verfügbar.*
 
Nach erfolgreicher Bereitstellung führt die UnhelpfulDesk-Malware folgende Erkennungsbefehle aus: 
 ```
  ping 8.8.8.8    
  whoami    
  net user Administratr 
 ```
Anschließend verschlüsselt die Schadsoftware Dateien auf dem System und fordert ein Lösegeld, um die Dateien zu entschlüsseln. Die Lösegeldforderung wird von Pastebin heruntergeladen, wie unten dargestellt: 
```
curl https://pastebin[.]com/HOW%20TO%20RECOVER%20YOUR%20FILES.txt 
```

**Andere Hinweise auf Kompromittierung (IOCs)** 
 
214.217.73[.]146     
65.69.253[.]41     
199.57.49[.]250     
install-notice[.]com      
remarkablevirus[.]tech        
noreply_info[@]hotmail.com      
vaccinejournal[@]yahoo.com 

*[Ende des Blogbeitrags]*

-----------------------------------------------------

## Jetzt liegt es an Ihnen… 
 
Unser Chief Information Security Officer (CISO) hat Sie gebeten, diesen Bericht von VulnerableArray zu bewerten und zu prüfen, ob er mit den Daten aus der **SecurityLogs2**-Datenbank übereinstimmt oder nicht.    

🤔  Berücksichtigen Sie bei Ihrer Bewertung die folgenden Fragen: 

{{< alert theme="success" >}} 
*Frage 1. Gehören alle gemeldeten Indikatoren zum gleichen Aktivitätscluster? Woher wissen Sie das?*
 {{< notice note >}}
  **Hinweis:** Nutzen Sie das Diamond-Modell (Angreifer, Opfer, Infrastruktur, Fähigkeiten), um darüber nachzudenken, wie sich verschiedene Aktivitätsgruppen clustern lassen. Suchen Sie nach Gemeinsamkeiten und Unterschieden in jedem der vier Eckpunkte des Diamond-Modells.  {{< /notice >}}
 
*Frage 2. Der Bericht behauptet, dass die UnhelpfulDesk-Malware letztendlich Ransomware einsetzt und Dateien auf einem infizierten System verschlüsselt. Stimmen Sie dieser Bewertung zu? Oder sehen Sie Beweise für alternative Aktionen oder Ziele?*
 {{< notice note >}}
  **Hinweis:** Versuchen Sie, nach Aktivitäten zu suchen, die mit den im Blog geteilten Malware-Indikatoren zusammenhängen, und identifizieren Sie einige kompromittierte Systeme. Sehen Sie nach der Kompromittierung Aktivitäten auf einem dieser Systeme, die sich von der im Blog beschriebenen Ransomware unterscheiden? {{< /notice >}}
 
*Frage 3. Welche analytischen Fehler, falls vorhanden, wurden von den Autoren des Blogs gemacht?* 
 {{< notice note >}}
  **Hinweis:** Einige Prozesse werden automatisch durch die Malware nach deren Ausführung ausgeführt. Andere Prozesse werden manuell (Hand-on-Keyboard) vom Angreifer nach der Einrichtung des Command-and-Control-Kanals ausgeführt. {{< /notice >}}
 
 
*Frage 4. Ist die UnhelpfulDesk-Malware einzigartig für den ITINIUM-Akteur? Woher wissen Sie das?* 
 {{< notice note >}}
  **Hinweis:** Die Updater.dll-Dateien scheinen von Dateien mit zwei separaten Themen (IT und Forschung) abgelegt zu werden. Denken Sie darüber nach, warum das der Fall sein könnte.  {{<