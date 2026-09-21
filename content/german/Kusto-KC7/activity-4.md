---
title: "Aktivität 4: Finde den Hacker"
draft: false
weight: 16
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/HjKkQVH5-rQ" title="Activity 4: Catch the Hacker - YouTube video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

{{< notice note >}}Dies ist ein viel kürzerer Abschnitt. Wir erklären nur das Szenario und lassen euch dann Zeit für die eigenständige Jagd. Ihr könnt so viel Zeit dafür nutzen, wie ihr möchtet. Bei Live-Sitzungen geben wir den Teilnehmern in der Regel 30-40 Minuten, bevor wir weitermachen.

- **Stellt sicher, dass ihr die Datenbank "SecurityLogs" verwendet**
- **Reicht eure Antworten der Herausforderung "Introducing the Hackers" auf der Punkteübersicht ein**

#### **Viel Erfolg bei der Jagd!**{{< /notice >}}

### Vorstellung der Hacker

Jetzt, da ihr die erste Runde eures Trainings abgeschlossen habt, seid ihr bereit, an eurem ersten Fall im SOC zu arbeiten!

Ein Sicherheitsforscher hat getwittert, dass die Domain *„immune[.]tech“* von Hackern genutzt wird. Offenbar senden die Hacker Phishing-E-Mails mit Anmeldedaten (Logins, Passwörtern usw.) aus dieser Domain.

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/CTF1.png?raw=true" alt= “CTF1” width="value" height="value">

{{< alert theme="warning" >}}
⚠️HINWEIS! Es ist ein häufig verwendetes Sicherheitsprotokoll, das Format immune[.]tech oder domain[.]com zu verwenden, wenn potenziell gefährliche Links online erwähnt werden. Durch das Hinzufügen dieser Klammern um den Punkt wird verhindert, dass ein klickbarer Link erstellt wird. Beim Durchsuchen von Protokollen solltet ihr die Klammern aus dem Domainnamen entfernen.{{< /alert >}}

Laut OSINT-Recherchen, die eure Kolleg*innen durchgeführt haben, könnte diese Domain Teil einer Phishing-Kampagne sein, die folgende Phasen umfasst:

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/CTF2.png?raw=true" alt= “CTF2” width="value" height="value">

{{< notice note >}}🎯**Schlüsselpunkte – Open Source Intelligence (OSINT)**: Sicherheitsforscher und Analysten verwenden oft kostenlose, öffentlich verfügbare Daten, wie beispielsweise Twitter! Wir bezeichnen diese öffentlichen Datenquellen im Internet als OSINT, und sie können ein großartiger Ausgangspunkt für Untersuchungen sein. Wie bei allen öffentlichen Datenquellen im Internet solltet ihr jeden OSINT-Tipp gründlich analysieren, anstatt die Quelle blind zu vertrauen.{{< /notice >}}
{{< alert theme="success" >}}
🤔 **Betrachtet die folgenden Fragen zu diesem Tipp, um euch bei eurer Untersuchung zu unterstützen. Einige Hinweise sind in den folgenden Fragen enthalten:**

{{%showanswer "Frage 1"%}}
*Welche Benutzer*innen in unserem Unternehmen haben E-Mails erhalten, die die Domain immune.tech enthalten?*

🤫 **Hinweis**: Probiert den folgenden Befehl aus und fügt den betreffenden Domainnamen ein.
```
Email
| where link contains '[insert domain name]'
``` 
{{%/showanswer%}}

{{%showanswer "Frage 2"%}}	
*Haben wir eine der E-Mails mit dieser Domain blockiert? Wer hat tatsächlich eine dieser E-Mails erhalten?*     

🤫 **Hinweis**: Das Feld „accepted“ in der Tabelle Email gibt an, ob die E-Mail blockiert wurde oder nicht. Blockierte E-Mails werden als "false" angezeigt.* {{%/showanswer%}}

{{%showanswer "Frage 3"%}}	
*Welche anderen Domains haben dieselben IP-Adressen wie immune.tech? Könnt ihr die vollständige Liste der Domains finden, die basierend auf den PassiveDns-Daten mit diesem Akteur in Verbindung stehen?* 

🤫 **Hinweis**: Ihr könnt den Operator „in“ verwenden, um mehrere Werte in einem Feld zu überprüfen. Z.B. where field in (“x”, “y”, “z”)* {{%/showanswer%}}

{{%showanswer "Frage 4"%}}
*Welche E-Mail-Adressen haben die Hacker verwendet, um diese Domains zu verschicken?* 

🤫 **Hinweis**: Schaut euch die Einträge in der Spalte „sender“ für die E-Mails an, von denen ihr wisst, dass sie verdächtige Betreffzeilen und Links enthalten. {{%/showanswer%}}

{{%showanswer "Frage 5"%}}
*Haben Benutzer*innen auf einen der Links in den Phishing-E-Mails geklickt?* 

🤫 **Hinweis**: Überprüft die Dateiprotokolle, Prozessevents und/oder den Browserverlauf der Geräte und Konten der Benutzer*innen, von denen ihr wisst, dass sie die verdächtigen E-Mails erhalten haben. Sucht dabei nach Anzeichen ungewöhnlicher Aktivitäten, die darauf hinweisen könnten, dass sie auf den Link geklickt haben. {{%/showanswer%}}

{{%showanswer "Frage 6"%}}
*Wurden die Anmeldedaten eines Benutzers gestohlen? Woher wisst ihr das?* 

🤫 **Hinweis**: Damit Anmeldedaten gestohlen werden können, müsste ein*e Benutzer*in die Seite zum Abgreifen von Anmeldedaten besuchen und dort ihren*ihren Benutzernamen und das Passwort eingeben. Danach könnte der Akteur versuchen, sich mit den gestohlenen Anmeldedaten in das Konto des Benutzers einzuloggen. Ihr könnt Details zu Login-Aktivitäten in der Tabelle **AuthenticationEvents** finden. {{%/showanswer%}}

{{%showanswer "Frage 7"%}}
*Wurden Inhalte aus dem Postfach eines*r Benutzer*in exfiltriert (gestohlen)? Woher wisst ihr das? Welches Risiko stellt der Diebstahl dieser Inhalte für das Unternehmen dar?* {{%/showanswer%}}
{{< /alert >}}