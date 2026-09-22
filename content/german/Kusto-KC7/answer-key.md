---
title: "KC7: Cyber Defender Spiel - Lösungsschlüssel"
date: 2026-04-29T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
Dies ist eine Lehrerreferenz für den KC7 Cyber Defender Workshop. Sie enthält Lösungen für KQL-Abfragen und Methoden für die Aktivitäten 2-4. Die genauen numerischen Ergebnisse hängen von der aktuellen SecurityLogs-Datenbank ab und können zwischen den Sitzungen variieren.

Videoanleitungen sind auch für Aktivität 3.5 (KQL 101 Antworten) und Aktivität 4.5 (Fange den Hacker Antworten) verfügbar.

Bonus 1 und Bonus 3 Antworten werden auf der KC7 Scoreboard überprüft. Bonus 2 ist eine offene Analyseübung ohne festen Lösungsschlüssel.
{{% /notice %}}

## Aktivität 2: Threat Intel Spiel (Wer war's?)

Drei szenariobasierte Attribution-Fragen. Die Schüler identifizieren den Typ des Angreifers.

| Frage | Szenario | Antwort | Begründung |
|-------|----------|---------|------------|
| 1 | Regierungsgeführte Cyber-Operationen | **C. Nationalstaatlich gesponsert** | Zielgerichtet, gut finanziert, politisch motiviert |
| 2 | Finanziell motivierter Angriff | **B. Cyberkriminell** | Geldgetrieben, wahllose Zielsetzung |
| 3 | Staatlich gelenkte Cyber-Kampagne | **C. Nationalstaatlich gesponsert** | Regierungsunterstützt, selektive Zielsetzung, langfristig |

{{% notice tip %}}
Schauen Sie sich das Video zur Aktivität 2 an, um detaillierte Beispiele aus der Praxis zu jedem Szenario zu sehen, einschließlich der Fallstudie zu POLONIUM.
{{% /notice %}}

## Aktivität 3: KQL 101

Diese Fragen vermitteln die grundlegenden KQL-Operatoren mit der **SecurityLogs**-Datenbank. Die unten stehenden Abfragen zeigen den korrekten Ansatz; die exakten Ergebniswerte hängen von den Live-Daten ab.

### Frage 1: Alle Tabellen mit `take` erkunden

```KQL
Employees
| take 10

Email
| take 10

OutboundBrowsing
| take 10

PassiveDns
| take 10

AuthenticationEvents
| take 10

FileCreationEvents
| take 10

ProcessEvents
| take 10

SecurityAlerts
| take 10
```

**Zweck:** Die Schüler erkunden das Schema jeder Tabelle, um die verfügbaren Spalten und Datentypen zu verstehen.

### Frage 2: Wie viele Mitarbeiter gibt es im Unternehmen?

```KQL
Employees
| count
```

**Erwartetes Konzept:** Der `count`-Operator gibt die Gesamtanzahl der Zeilen in der Tabelle zurück. Jede Zeile stellt einen Mitarbeiter dar.

### Frage 3: Welcher Mitarbeiter hat die IP-Adresse 192.168.0.191?

```KQL
Employees
| where ip_addr == "192.168.0.191"
```

**Konzept:** Der `where`-Operator filtert Zeilen. Der `==`-Operator prüft auf eine exakte Übereinstimmung.

### Frage 4: Wie viele E-Mails hat Betty Parrish erhalten?

```KQL
Email
| where recipient == "betty_parrish@envolvelabs.com"
| count
```

**Konzept:** Die Tabelle "Email" nach der Spalte "recipient" filtern und dann die Ergebnisse zählen. Das E-Mail-Format entspricht `vorname_nachname@envolvelabs.com`.

### Frage 5: Wie viele Benutzer erhielten E-Mails mit "vaccine" im Betreff?

```KQL
Email
| where subject has "vaccine"
| distinct recipient
| count
```

**Konzept:** Mehrere Operatoren verketten: Mit `where` filtern, mit `distinct` Duplikate entfernen und mit `count` die Gesamtanzahl ermitteln. Der `has`-Operator führt eine Wortgrenzen-basierte Suche durch, um „vaccine“ als ganzes Wort im Betreff zu finden.

### Frage 6: Wie viele einzigartige Webseiten hat Keith Mitchell besucht?

Dies erfordert **Pivoting** zwischen zwei Tabellen:

```KQL
// Schritt 1: Keith Mitchells IP-Adresse ermitteln
Employees
| where name == "Keith Mitchell"
```

```KQL
// Schritt 2: Seine IP-Adresse verwenden, um OutboundBrowsing zu durchsuchen
OutboundBrowsing
| where src_ip == "[Keiths IP aus Schritt 1]"
| distinct url
| count
```

Oder mit einer `let`-Anweisung, um beide Schritte zu kombinieren:

```KQL
let keith_ip = Employees
| where name == "Keith Mitchell"
| distinct ip_addr;
OutboundBrowsing
| where src_ip in (keith_ip)
| distinct url
| count
```

**Konzept:** Pivotierung: Die Verwendung von Daten aus einer Tabelle (Employees), um eine andere Tabelle (OutboundBrowsing) zu durchsuchen. Dies ist eine Kernfertigkeit der Cyberanalyse.

### Frage 7: Wie viele Domains in PassiveDns enthalten "vaccine"?

```KQL
PassiveDns
| where domain contains "vaccine"
| distinct domain
| count
```

**Konzept:** Der Operator `contains` (nicht `has`) wird hier benötigt, da „vaccine“ möglicherweise Teil eines längeren Domainnamens ist.

### Frage 8: Welche IPs wurden von "biotechenvolv.science" aufgelöst?

```KQL
PassiveDns
| where domain == "biotechenvolv.science"
```

**Konzept:** Schauen Sie sich die Spalte „IP Address“ in den Ergebnissen an, um alle mit dieser Domain verknüpften IPs zu erkennen.

### Frage 9: Wie viele einzigartige URLs wurden von Mitarbeitern mit dem Namen "Karen" besucht?

```KQL
let karen_ips = Employees
| where name has "Karen"
| distinct ip_addr;
OutboundBrowsing
| where src_ip in (karen_ips)
| distinct url
| count
```

**Konzept:** Dies kombiniert die `let`-Anweisung mit Pivotierung. Die `let` speichert das Ergebnis der ersten Abfrage (Karens IPs), damit es in der zweiten Abfrage wiederverwendet werden kann.

{{% notice tip %}}
**Lehrerhinweis:** Die `let`-Anweisung ist eines der leistungsstärksten KQL-Muster. Ermutigen Sie die Schüler, ihre Variablen beschreibend zu benennen (z. B. `karen_ips` statt `x`), um Abfragen besser lesbar zu machen.
{{% /notice %}}

### KQL 101 Kurzübersicht

| Operator | Zweck | Beispiel |
|----------|-------|----------|
| `take` | Zeilen aus einer Tabelle auswählen | `Employees \| take 10` |
| `count` | Gesamt