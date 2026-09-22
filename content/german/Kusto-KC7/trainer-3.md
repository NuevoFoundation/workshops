---
title: "T3: Veranstaltungsplan & Logistik"
draft: false
weight: 28
---
{{< alert theme="info" >}}
## Zeitplan
{{< /alert >}}

*[VORAUSSETZUNG, 10 Min] Zugriff auf Cluster erhalten und zu ADX hinzufügen*

### Teil 1: Verständnis der Umgebung [1,5 Std.]

[5 Min] Einführung in Threat Intel    
     - Kurze Erwähnung von Zuordnungstools und -techniken    
     - Diamond-Modell     
     - Kill Chain     

[20 Min] Kusto Query Language (KQL) 101    
     - Einführung in Tabellen, Befehle und Syntax für KQL im ADX-Browser    
      - where (has, contains, has_any, ==, etc…)    
      - count    
      - take    
      - let    

[10 Min] Wie man beobachtete Angreiferaktivitäten gruppiert 
 - Wie entscheidet man, ob das nächste Element mit Ihrem Akteur in Verbindung steht? 
 - Wissen über den Akteur mit dem Diamond-Modell zuordnen 
 - Wie weiß man, dass man fertig ist? 
 - Fallstricke der Gruppierung (Fehlzuordnung)    

[45 Min] Szenario 1: Einführung in die Cyber-Untersuchung
 - Untersuchung von böswilligen Aktivitäten (z. B. E-Mail-Bedrohung)
 - Nutzung von Azure Data Explorer (ADX) zur Analyse von Sicherheitslogdaten
 - Anwendung von KQL-Grundlagen, um gezielte Fragen mit Hilfe von Daten zu beantworten
 - Pivot über mehrere Datensätze

[10 Min] Nachbesprechung 
 - Kurz durchgehen, wie man die Antworten findet

### Pause [10 Min]

### Teil 2: Fangen Sie den Hacker [1,5 Std. inklusive einer Bonusaktivität]

[5 Min] Einführung und Überblick über den Workshop 
 - Zusätzliche Threat-Intelligence-(TI-)Bedrohungsjagdtools und -techniken vor der Fortsetzung

[30 Min] Szenario 2: Fangen Sie den Hacker
 - Veröffentlichung der Rangliste und Einführung des Szenarios
 - Ermöglichung freier Jagdzeit
 - Überwachung des Chats

[10 Min] Nachbesprechung
 - Einige Fragen auswählen, um den Lösungsweg zu zeigen

*(Wählen Sie eine Bonusaktivität, um die Sitzung zu beenden, falls Zeit bleibt)*    

{{%showanswer "Option 1: Verdächtige Aktivität"%}}	
**Option 1**         
[5 Min] Bonus 1: Verdächtige Aktivität

[30 Min] Szenario 3: Hacker senden Malware-Dokumente
 - Freie Jagdzeit

[10 Min] Nachbesprechung & Abschluss der Sitzung {{%/showanswer%}}

{{%showanswer "Option 2: Wahrheit oder Desinformation"%}}	
**Option 2**         
[5 Min] Einführung in Blog-Analysen *(für erfahrenere Zielgruppen)*

[30 Min] Szenario 3: Wahrheit oder Desinformation
 - Freie Jagdzeit & Blog-Analyse

[10 Min] Nachbesprechung & Abschluss der Sitzung
{{%/showanswer%}}

{{%showanswer "Option 3: Sicherheits-Jeopardy"%}}	
**Option 3**         
[5 Min] Einführung in Sicherheits-Jeopardy 
[30 Min] Spiel spielen
 - Entscheidung liegt beim Instructor, in welchem Format dies durchgeführt wird. Die Teilnehmer könnten in der Rangliste an ihren Computern spielen und ein Timer kann gestellt werden, um zu sehen, wer am Ende die meisten Punkte hat; dies wäre ein "Offenes-Internet"-Quiz. Alternativ könnte ein Jeopardy-Generator verwendet werden, um Fragen für ein erfahreneres Publikum einzugeben. Denken Sie jedoch daran, dass die anderen Teile dieses Workshops diese Begriffe nicht lehren *(am besten mit einem Publikum spielen, das bereits Kenntnisse der Cybersicherheitsbegriffe hat, in einer Live-Sitzung)*.

[10 Min] Nachbesprechung & Abschluss der Sitzung
{{%/showanswer%}}



{{< alert theme="success" >}}
## Logistik
{{< /alert >}}

### Checkliste

**Hier sind alle Dinge, die Ihre Teilnehmer benötigen:**   
* Ein Computer oder Laptop (muss nicht besonders leistungsstark sein)   
* Eine gute Internetverbindung   
* Ein Microsoft-Konto   
    * Entweder ein persönliches Hotmail- oder Outlook-Konto    
    * Ein von der Schule bereitgestelltes Office365-Konto    
    * *Hinweis: Wenn die Schule oder Organisation keinen Zugriff auf Azure-Daten aus dem Unternehmenskonto erlaubt - Sie benötigen eine Umgehungslösung, wie beispielsweise ein veranstaltungsspezifisches Konto zur Verfügung zu stellen*     

**Hier sind einige Dinge, die Sie ggf. auch benötigen:**   
* Gedruckte Papierkopien des Trainingsleitfadens (wir haben festgestellt,  
  dass Teilnehmer tendenziell besser mit einem Papierleitfaden arbeiten)    
* Ein Projektor oder Smartboard, um Probleme als Gruppe durchzugehen    
* Snacks oder Leckereien - das mag jeder :)    

### Einrichtung der Rangliste

Um auf die KC7-Rangliste zuzugreifen, gehen Sie zu dieser Website: https://kc7.azurewebsites.net.  
 Sie müssen sich mit den Anmeldedaten anmelden, die Ihnen in einer E-Mail zugeschickt wurden, nachdem Sie das Formular zum Veranstalten einer Sitzung ausgefüllt haben. Wenn Sie keine Sitzung veranstalten, können Sie ein Konto erstellen, um sich anzumelden.

Wenn Sie eine Sitzung verwalten, sollten Sie bereits der Spielsitzung für Ihre Gruppe hinzugefügt worden sein. Sie sehen diese auf Ihrem Dashboard, wenn Sie sich anmelden. Um der Sitzung beizutreten, klicken Sie einfach auf die Schaltfläche "Dieses Spiel beitreten".

Sie müssen außerdem Fragen oder Aufgaben hinzufügen, die die Spielteilnehmer beantworten, um Punkte zu sammeln. Um dies zu tun:

* Stellen Sie sicher, dass Sie als Administrator für Ihre Sitzung angemeldet sind
* Finden Sie die Liste der Fragen, die mit dem von Ihnen verwendeten Trainingsleitfaden übereinstimmt
* Wählen Sie den Fragensatz aus dem Dropdown-Menü aus

### Zusätzliche Ressourcen

KC7 Github Repo: https://github.com/kkneomis/kc7       
KC7 Website: https://kc7cyber.com/#demos