---
title: "Aktivität 1: Anmeldung & Einrichtung der Cyber-Umgebung"
draft: false
weight: 4
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/kMIKZhS5E4k" title="Aktivität 1: Anmeldung &amp; Einrichtung der Cyber-Umgebung - YouTube-Video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## Einstieg

Okay Cyber-Verteidiger! Das Erste, was ihr tun müsst, ist die Umgebung einzurichten, in der ihr Hacker jagen werdet. Dafür öffnet die unten stehenden Links und folgt den Anweisungen, um zuerst den Azure Data Explorer (ADX) einzurichten und euch dann bei der Scoreboard-Sitzung anzumelden.


<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/Resources.png?raw=true" alt= “Ressourcen” width="60%" height="value">

### Einrichtung des Azure Data Explorer (ADX)

ADX ist das Hauptwerkzeug, das einige Cyber-Verteidiger zur Datenexploration und -analyse verwenden. Das Tolle an ADX ist, dass es von Cyber-Analysten in vielen der kleinsten und größten Organisationen weltweit genutzt wird.

Lasst uns mit ADX loslegen:

1. Geht zu [Azure Data Explorer](https://dataexplorer.azure.com/) und meldet euch mit eurem Microsoft-Konto an
   - Falls ihr noch kein Microsoft-Konto habt, erstellt euch jetzt eines (die Erstellung ist kostenlos)
2. Klickt auf den **Query**-Tab auf der linken Seite des Bildschirms.

<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/ADX1.png?raw=true" alt= “ADX1” width="20%">

Daten in ADX sind in einer hierarchischen Struktur organisiert, die aus **Clustern, Datenbanken und Tabellen** besteht. Alle Sicherheitsprotokolle von Envolve Labs werden in einem einzigen Cluster gespeichert. Ihr müsst diesen Cluster zu eurer ADX-Oberfläche hinzufügen, damit ihr die Protokolldaten betrachten könnt.

<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/ADX2.png?raw=true" alt= “ADX2” width="40%" height="value">

3. Fügt einen neuen Cluster hinzu, indem ihr die Cluster-URI benutzt, die euch von eurem Dozenten bereitgestellt wird
   - Klickt auf **Cluster hinzufügen**
   - Gebt die Verbindungs-URI ein: mstictraining.eastus

<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/ADX3.png?raw=true" alt= “ADX3” width="40%" height="value">

4. Wählt eure Datenbank aus     
   - Klickt auf den Dropdown-Pfeil neben eurem Cluster, um ihn zu erweitern. Ihr solltet dann eine Datenbank namens **SecurityLogs** darin sehen.     
   - Klickt auf den Dropdown-Pfeil neben der **SecurityLogs**-Datenbank, um sie zu erweitern.     
   - Klickt auf die **SecurityLogs**-Datenbank. Sobald ihr dies gemacht habt, sollte die Datenbank markiert sein – das bedeutet, dass ihr die Datenbank ausgewählt habt und bereit seid, die darin enthaltenen Tabellen zu durchsuchen.      

<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/ADX4_updated.png?raw=true" alt= “ADX4_updated” width="30%" height="value">

Der große leere Bereich rechts neben eurer Cluster-Liste ist der Abfrage-Arbeitsbereich. Hier werdet ihr mit KQL-Code sogenannte Abfragen erstellen, die genutzt werden, um mit unseren Protokolldaten zu interagieren. 

<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/ADX5.png?raw=true" alt= “ADX5” width="60%" height="value">

### Einrichtung des Scoreboards

1. Geht auf die [Scoreboard-Webseite](https://aka.ms/kc7scoreboard) und erstellt ein Benutzerkonto. Achtet darauf, einen Benutzernamen und ein Passwort zu verwenden, an das ihr euch erinnert, da ihr direkt danach aufgefordert werdet, euch anzumelden.
2. Klickt auf den grünen Button **"Neuem Spiel beitreten"**
3. Sobald ihr euch angemeldet habt, gebt das Sitzungs-Passwort ein: **GAMEON**

Nun solltet ihr das Scoreboard sehen. Wenn ihr auf den Tab "Challenges" geht, seht ihr eine Liste, wie im Bild unten angezeigt. Wir werden dies später während der Schulung benötigen. Ihr könnt das Scoreboard minimieren, aber haltet es bereit.

<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/Scoreboard.png?raw=true" alt= “ADX3” width="value" height="value">

{{< alert theme="info" >}} Geschafft! Nun da ihr eingerichtet seid, ist es Zeit, die Daten in die Hand zu nehmen. {{< /alert >}}

[def]: Images/ADX1.png