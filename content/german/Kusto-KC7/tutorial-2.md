---
title: "Tutorial 2: Neue Mitarbeiterorientierung"
draft: false
weight: 10
---
{{%showanswer "DISCLAIMER: Alle in diesem Dokument, auf dieser Website oder in anderen Materialien verwendeten Domains, Daten und Namen sind fiktiv ... (fortgesetzt)"%}}
*DISCLAIMER: Alle in diesem Dokument, auf dieser Website oder in anderen Materialien verwendeten Domains, Daten und Namen sind fiktiv und wurden ausschließlich zu illustrativen und pädagogischen Zwecken erstellt. Sie repräsentieren keine realen Personen, Unternehmen oder Organisationen.*

*Dieses Dokument, diese Website oder andere Materialien, einschließlich, aber nicht beschränkt auf Texte, Bilder, Grafiken, Logos und Software, werden "wie sie sind" ohne jegliche ausdrückliche oder stillschweigende Garantien bereitgestellt, einschließlich, aber nicht beschränkt auf implizierte Garantien der Marktgängigkeit und Eignung für einen bestimmten Zweck.*

*In keinem Fall haften die Ersteller oder Eigentümer dieses Dokuments, dieser Website oder anderer Materialien für Schäden, einschließlich, aber nicht beschränkt auf direkte, indirekte, besondere, beiläufige oder Folgeschäden, die aus oder im Zusammenhang mit der Nutzung oder der Unfähigkeit der Nutzung dieses Dokuments, dieser Website oder anderer Materialien entstehen, selbst wenn sie über die Möglichkeit solcher Schäden informiert wurden.*

*Die Ersteller oder Eigentümer dieses Dokuments, dieser Website oder anderer Materialien behalten sich das Recht vor, Änderungen am Inhalt jederzeit und ohne vorherige Ankündigung vorzunehmen.* 

*Durch Zugriff oder Nutzung dieses Dokuments, dieser Website oder anderer Materialien erklären Sie sich mit den in diesem Disclaimer festgelegten Bedingungen einverstanden. Wenn Sie diesen Bedingungen und Konditionen nicht zustimmen, sollten Sie keinen Zugriff oder keine Nutzung dieses Dokuments, dieser Website oder anderer Materialien vornehmen.*
{{%/showanswer%}}

## Einführung: Willkommen bei EnvolveLabs

Willkommen bei EnvolveLabs Corporation! 🥳 Heute ist Ihr erster Tag als Junior Security Operations Center (SOC) Analyst bei unserem Unternehmen. Ihre Hauptaufgabe besteht darin, EnvolveLabs und seine Mitarbeiter vor böswilligen Cyber-Akteuren zu schützen. 

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/EnvolveLabLogo.png?raw=true" alt= “” width="50%" height="value">

EnvolveLabs ist ein Med-Tech-Startup mit Sitz in den Vereinigten Staaten, das im Jahr 2012 gegründet wurde. Unsere Mission ist es, eine neuartige flexible Impfstofftechnologie zu entwickeln, die viele verschiedene Virusstämme abdeckt und eine langanhaltende Immunität bietet. Diese Technologie würde die Notwendigkeit von regelmäßigen Auffrischungsimpfungen eliminieren und Impfungen zugänglicher machen. Unsere ersten Forschungsergebnisse zeigen, dass diese Technologie äußerst effektiv ist – wir planen, die Produktion im ersten Quartal 2024 zu starten.

EnvolveLabs hat eine Reihe von Schlüsselpartnern, die zum Erfolg unseres Unternehmens beitragen. Daher erwarten wir, dass unsere Mitarbeiter regelmäßig mit diesen Schlüsselpartnern kommunizieren: 

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/Envolve1.png?raw=true" alt= “” width="60%" height="value">

Bis jetzt haben wir uns ausschließlich auf medizinische Forschung und die Erreichung unserer Produktionsziele konzentriert. Doch da unsere Arbeit immer wichtiger und erfolgreicher wird, haben wir den Bedarf erkannt, mehr in Cybersecurity zu investieren. Aus diesem Grund haben wir Sie eingestellt! 

Wie jedes gute Unternehmen sammelt EnvolveLabs Protokolldaten über die Aktivitäten seiner Mitarbeiter im Unternehmensnetzwerk. Diese Sicherheitsprotokolle werden in Azure Data Explorer (ADX) gespeichert – einem Datenspeicher-Service in Azure (Microsofts Cloud). Sie werden die Kusto Query Language (KQL) verwenden, um verschiedene Arten von Sicherheitsprotokollen zu analysieren. Durch die Analyse dieser Protokolle können Sie uns helfen festzustellen, ob wir von böswilligen Akteuren ins Visier genommen werden. 
- Sie finden die vollständige Dokumentation zu KQL-Abfragen für ADX hier:    
 https://docs.microsoft.com/en-us/azure/data-explorer/kusto/query/tutorial?pivots=azuredataexplorer


### EnvolveLabs-Datenbank

Die EnvolveLabs_Analysis-Datenbank enthält acht Tabellen. Tabellen enthalten viele Zeilen ähnlicher Daten. Bei Sicherheitsprotokollen stellt eine einzelne Zeile typischerweise eine einzelne Aktion dar, die von einem Mitarbeiter oder einem Gerät im Netzwerk zu einem bestimmten Zeitpunkt durchgeführt wurde.

Derzeit haben wir acht Arten von Protokolldaten. Wie Sie in ADX sehen werden, entspricht jede Art von Protokolldaten einer Tabelle, die in der EnvolveLabs_Analysis-Datenbank existiert:

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/Envolve3.png?raw=true" alt= “” width="70%" height="value">

{{< notice note >}}
🎯**Wichtiger Punkt – Über-die-Horizont-Daten (OTH):** Eine der oben genannten Tabellen unterscheidet sich von den anderen – **PassiveDns**. Anstatt ein internes Sicherheitsprotokoll zu sein, ist **PassiveDns** eine Datenquelle, die wir von einem Drittanbieter gekauft haben. Nicht alle bösartigen Cyber-Aktivitäten passieren innerhalb unseres Firmennetzwerks, daher verlassen wir uns manchmal auf Daten von anderen Quellen, um unsere Untersuchungen abzuschließen. {{< /notice >}}

Sie werden gleich mehr darüber lernen, wie man jede dieser Datensätze verwendet. Zuerst lassen Sie uns einige Abfragen ausführen, damit Sie die Nutzung von KQL und ADX üben können.