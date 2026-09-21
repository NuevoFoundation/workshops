---
title: "Bonus 1: Phishy Activity"
draft: false
weight: 20
---

## Hacker, die Malware-Dokumente versenden

Nachdem Sie ein wenig nach der Phishing-Aktivität gegraben haben, stoßen Sie auf einen weiteren Tweet von einem Threat-Intelligence-Anbieter namens SolitaryStrike:

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/Bonus1.png?raw=true" alt= “Bonus1” width="value" height="value">

{{< notice note >}}
🤔 Verwenden Sie den Tweet, um Ihre Suche zu beginnen. Lassen Sie die Fragen Ihnen helfen, durch die Daten zu navigieren und herauszufinden, was vor sich geht.  
- Reichen Sie Ihre Antworten zur Challenge "Hackers Sending Malware Docs" auf der Scoreboard-Seite unter https://kc7cyber.azurewebsites.net/ ein, um Feedback zu erhalten und Punkte zu sammeln. Die unten stehenden Fragen sind auf der Scoreboard-Seite für diesen Abschnitt reflektiert. **Es gibt keinen Hauptlösungsbogen für diesen Abschnitt außer der Scoreboard-Seite.**
- **Stellen Sie sicher, dass Sie die SecurityLogs-Datenbank für diese Übung verwenden.**{{< /notice >}}
{{< alert theme="success" >}}
🤔 **Betrachten Sie die folgenden Fragen zu diesem Hinweis, um Ihnen dabei zu helfen, über die Suche nachzudenken. Einige Hinweise sind in den unten stehenden Fragen enthalten:**

{{%showanswer "Frage 1"%}}	
*Wie viele E-Mails enthielten die Domain notice[.]io?* 

🤫**Hinweis:** In welcher Tabelle unter der SecurityLogs-Datenbank könnte eine Spalte Beweise für diese verdächtige Website/Domain-Namen enthalten? {{%/showanswer%}}

{{%showanswer "Frage 2"%}}	
*Welche E-Mail-Adresse hat die Domain notice[.]io verschickt?* {{%/showanswer%}}

{{%showanswer "Frage 3"%}}	
*Was war die Betreffzeile der E-Mails, die die Domain notice[.]io enthielten?* {{%/showanswer%}}

{{%showanswer "Frage 4"%}}	
*Wie lautet der Name des Benutzers, der auf den notice[.]io-Link geklickt hat?* {{%/showanswer%}}

{{%showanswer "Frage 5"%}}	
*Zu welchem Zeitstempel hat der obige Benutzer die Datei "Critical_Security_Path.docx" heruntergeladen?*  

🤫**Hinweis:** Dateien, die auf den Geräten von Mitarbeiter:innen erstellt werden, werden im Protokoll FileCreationEvents erfasst. Versuchen Sie, dort nachzusehen, welche Mitarbeiter:innen diese Datei heruntergeladen haben. {{%/showanswer%}}

{{%showanswer "Frage 6"%}}	
*Wie viele E-Mails wurden am 9. Januar von Benutzer:innen bei wesellbeakers.com an Ihre Organisation gesendet?* 

🤫**Hinweis:** Wenn Sie sich nicht an das Datums-/Zeitformat der E-Mail-Protokolle erinnern, führen Sie eine weitere 'take 10'-Abfrage durch und beobachten Sie. Dies wird Ihnen beim Schreiben Ihrer Abfrage für diese Frage helfen. {{%/showanswer%}}

{{%showanswer "Frage 7"%}}	
*Welche anderen Domains sind auf denselben IPs wie notice[.]io gehostet?* {{%/showanswer%}}

{{%showanswer "Frage 8"%}}	
*Welche E-Mail-Adresse wird beim Versenden von E-Mails mit einer der in Frage 7 identifizierten Domains beobachtet?* {{%/showanswer%}}

{{%showanswer "Frage 9"%}}	
*Wie viele Benutzer:innen haben die in den E-Mails aus Frage 8 beobachteten Dateien heruntergeladen?* {{%/showanswer%}}

{{%showanswer "Frage 10"%}}	
*Eine der in Frage 9 beobachteten Dateien - **IMPORTANT_INSTRUCTIONS.pptx** - wurde in zwei separaten E-Mails gesehen. Was sind die Betreffzeilen dieser E-Mails?* {{%/showanswer%}}

{{%showanswer "Frage 11"%}}	
*Welche kompromittierte pharmasupplies.org-E-Mail-Adresse wurde verwendet, um einen Link an scanverify.com zu senden?* {{%/showanswer%}}

{{%showanswer "Frage 12"%}}	
*Wie viele IPs wurde scanverify.com zugeordnet?* {{%/showanswer%}}

{{%showanswer "Frage 13"%}}	
*Betrachten Sie die E-Mail-Adresse, die Sie in Frage 11 gefunden haben. Welche andere Domain hat diese E-Mail-Adresse gesendet?* {{%/showanswer%}}

{{%showanswer "Frage 14"%}}	
*Wie lautet der Name der Datei, die auf scanverify.com gehostet ist?* {{%/showanswer%}}

{{%showanswer "Frage 15"%}}	
*Welche .pptx-Datei wurde verwendet, um Gerald Kempinski und Kenny Salcido zu zielen?* {{%/showanswer%}}

{{%showanswer "Frage 16"%}}	
*Welche Akteur-IP wurde verwendet, um auf der Website von EnvolveLabs nach dem Begriff "helpdesk ticket system" zu suchen?* {{%/showanswer%}}

{{%showanswer "Frage 17"%}}	
*Wie viele E-Mails wurden insgesamt von diesem Akteur an Ihre Organisation gesendet?* {{%/showanswer%}}

{{%showanswer "Frage 18"%}}	
*Welche .dll-Datei wurde auf einem Opfer-System bald nach dem Herunterladen der bösartigen Zip-Datei **EnvolveLabs_Research_Tool.7z** gefunden?*

🤫**Hinweis:** Dateien, die auf den Geräten von Mitarbeiter:innen erstellt werden, werden im Protokoll FileCreationEvents erfasst. Versuchen Sie, dort nachzusehen, welche Mitarbeiter:innen diese Datei heruntergeladen haben. {{%/showanswer%}}

{{%showanswer "Frage 19"%}}	
*Welcher sechsstellige Reconnaissance-Befehl wurde auf dem Gerät des Benutzers ausgeführt, der das oben genannte Implantat geladen hat?*

🤫**Hinweis:** Versuchen Sie, sich auf ein bestimmtes Gerät zu konzentrieren, das die Datei EnvolveLabs_Research_Tool.7z heruntergeladen hat. Überprüfen Sie dann sowohl die FileCreationEvents- als auch die ProcessEvents-Protokolle, um neue Dateien und Prozesse zu finden, die um die Zeit erstellt wurden, als die Datei heruntergeladen wurde. {{%/showanswer%}}

{{%showanswer "Frage 20"%}}	
*Eine bösartige Datei namens 'infector.exe' wurde beobachtet, wie sie verdächtige Aktionen auf mehreren Geräten ausführt. Welcher process_commandline, der mit dieser Datei verbunden ist, wird für die Persistenz auf den Geräten verwendet?*

🤫**Hinweis:** Akteure