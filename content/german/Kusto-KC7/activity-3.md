---
title: "Aktivität 3: Einführung in die Kusto-Abfragesprache (KQL)"
draft: false
weight: 12
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/lAeRxuUN1IM" title="Activity 3: Kusto Query Language 101 - YouTube video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

{{< notice tip >}} Hier möchten wir, dass du die Punktetafel und den ADX Viewer von vorhin in separaten Fenstern öffnest, um die verbleibenden Übungen abzuschließen. Falls du die Punktetafel nicht verwenden kannst oder möchtest, sind alle Fragen für diesen Abschnitt unten aufgelistet.

*Denke daran: Jede Seite mit einem Video enthält die Lektion sowohl im Video- als auch im schriftlichen Format. Du kannst je nach deinem Lerntyp entweder das eine oder das andere folgen.* {{< /notice >}}

## KQL 101  

**[Achte darauf, für diese Übung die Datenbank SecurityLogs zu verwenden.]**

Gib die folgende Abfrage in den Arbeitsbereich ein, um die ersten Zeilen in der Tabelle **Employees** anzuzeigen. Drücke „Ausführen“ oder „Shift + Enter“, um die Abfrage auszuführen. Alle KQL-Codeblöcke für diesen Workshop werden wie untenstehend in grau umrandet angezeigt.

```KQL
Employees
|   take 10
```

Diese Abfrage hat mehrere Bestandteile. Lass uns einen Moment nehmen, um sie einzeln aufzuschlüsseln:

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/KQL1.png?raw=true" alt= “KQL1” width="50%" height="value">

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/KQL2.png?raw=true" alt= “KQL2” width="80%" height="value">

Der <span style="color:red">**take**</span>-Operator ist ein leistungsstarkes Werkzeug, das du nutzen kannst, um Zeilen in einer Tabelle zu untersuchen und dadurch besser zu verstehen, welche Art von Daten dort gespeichert sind.

{{< notice note >}} 🎯**Wichtiger Punkt – Was tun, wenn du nicht weißt, was zu tun ist**: Immer wenn du mit einer unbekannten Datensatz-Tabelle konfrontiert bist, solltest du als erstes einige ihrer Zeilen mit dem <span style="color:red">**take**</span>-Operator untersuchen. So kannst du erkennen, welche Felder verfügbar sind, um Abfragen zu erstellen, und darüber nachdenken, welche Art von Informationen du aus der Datenquelle extrahieren kannst. {{< /notice >}}

Die Tabelle Employees enthält Informationen über alle Mitarbeitenden in unserer Organisation. In diesem Fall können wir sehen, dass die Organisation den Namen „Envolve Labs“ trägt und die Domain „envolvelabs.com“ ist.

{{< alert theme="success" >}}
*Frage 1.	🤔 Probiere es selbst aus! Wende ein <span style="color:red">**take**</span> 10 auf alle anderen Tabellen an, um zu sehen, welche Art von Daten sie enthalten.*{{< /alert >}}

Du kannst problemlos mehrere Abfragen im selben Arbeitsbereichsreiter schreiben. Achte dabei darauf, jede Abfrage durch eine Leerzeile zu trennen. Beachte unten, wie wir die Abfragen für die Tabellen Employees, Email und OutboundBrowsing durch Leerzeilen in Zeile 3 und 6 getrennt haben.

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/KQL3.png?raw=true" alt= “KQL3” width="value" height="value">

Wenn du mehrere Abfragen hast, ist es wichtig, ADX mitzuteilen, welche Abfrage du ausführen möchtest. Um eine Abfrage auszuwählen, klicke einfach auf eine Zeile, die Teil dieser Abfrage ist. Sobald du eine Abfrage ausgewählt hast, wird sie blau hervorgehoben, wie in den Zeilen 4 und 5 oben zu sehen.

#### **Herausfinden „wie viele“: Der 'count'-Operator**

Wir können <span style="color:red">**count**</span> verwenden, um zu sehen, wie viele Zeilen in einer Tabelle vorhanden sind. Dies gibt uns eine Ahnung davon, wie viele Daten dort gespeichert sind.  

```KQL
Employees
|   count
```

{{< alert theme="success" >}}
*Frage 2.	🤔 Wie viele Mitarbeitende arbeiten im Unternehmen?*{{< /alert >}}

#### **Filtern von Daten mit dem 'where'-Operator**

Bisher haben wir Abfragen ausgeführt, die den gesamten Inhalt der Tabelle betrachten. Oftmals wollen wir in der Cybersicherheitsanalyse nur Daten ansehen, die eine Reihe von Bedingungen oder Kriterien erfüllen. Um dies zu erreichen, wenden wir Filter auf spezifische Spalten an.

Wir können den <span style="color:red">**where**</span>-Operator in KQL verwenden, um Filter auf ein bestimmtes Feld anzuwenden. Zum Beispiel können wir alle Mitarbeitenden mit dem Namen „Linda“ finden, indem wir auf die Spalte "name" in der Tabelle **Employees** filtern.

<span style="color:red">**where**</span>-Anweisungen werden in einer bestimmten Struktur geschrieben. Nutze die hilfreiche Tabelle unten, um zu verstehen, wie du eine <span style="color:red">**where**</span>-Anweisung strukturierst.

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/KQL4.png?raw=true" alt= “KQL4” width="50%" height="value">

```KQL
Employees
|   where name has "Linda"
```

Der Operator <span style="color:blue">**has**</span> ist hier nützlich, da wir nur nach einer Teilübereinstimmung suchen. Wenn wir einen Mitarbeitenden mit einem spezifischen Vor- und Nachnamen (eine exakte Übereinstimmung) suchen wollten, würden wir den == Operator verwenden: 

```KQL
Employees
|   where name == "Linda Holbert"
```
{{< alert theme="success" >}}
*Frage 3.	🤔 Jeder Mitarbeitende bei Envolve Labs hat eine IP-Adresse zugewiesen bekommen. Welcher Mitarbeitende hat die IP-Adresse „192.168.0.191“?*{{< /alert >}}

Während ihrer täglichen Aufgaben senden und empfangen die Mitarbeitenden von Envolve Labs E-Mails. Ein Protokoll jeder dieser E-Mails wird in der Tabelle **Email** gespeichert. 

{{< notice note >}}🎯**Wichtiger Punkt – Benutzerprivatsphäre und Metadaten**: Wie du dir vorstellen kannst, sind einige E-Mails äußerst sensibel