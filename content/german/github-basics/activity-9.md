---
title: "Zimmer 9: Die Sicherheitsfestung"
description: "Schützen Sie Ihr Repository mit den Sicherheitsfunktionen von GitHub."
difficulties: ["fortgeschritten"]
weight: 9
---

Sie betreten einen Raum, gespickt mit Sicherheitsmaßnahmen. Schlösser, Schilde und Überwachungsmonitore umgeben Sie. Eine strenge Stimme verkündet: "Sichern Sie Ihren Code, um fortzufahren!"

## Ihre Mission

1. Aktivieren Sie Dependabot-Warnungen für Ihr Repository.
2. Fügen Sie Ihrem Repository eine Sicherheitsrichtlinie hinzu.
3. Führen Sie eine Code-Scan-Benachrichtigung mit GitHub Actions aus (falls Ihr Repository öffentlich ist).

## Anweisungen

1. Gehen Sie zum Tab "Einstellungen" Ihres Repositorys.
2. Klicken Sie im linken Sidebar auf "Sicherheit & Analyse".
3. Aktivieren Sie Dependabot-Warnungen.
4. Erstellen Sie in Ihrem Repository eine neue Datei unter `.github/SECURITY.md`.
5. Fügen Sie grundlegende Sicherheitsrichtlinien zu dieser Datei hinzu.
6. Wenn Ihr Repository öffentlich ist, aktivieren Sie den Code-Scan in den "Sicherheit & Analyse"-Einstellungen.

{{< notice danger >}}
**Wichtig:** Seien Sie immer vorsichtig im Umgang mit Sicherheitseinstellungen. Stellen Sie sicher, dass Sie jede Funktion verstehen, bevor Sie sie aktivieren.
{{< /notice >}}

{{< expand "Beispiel-Sicherheitsrichtlinie" >}}

# Sicherheitsrichtlinie

## Melden einer Schwachstelle

Falls Sie eine Sicherheitslücke in diesem Projekt entdecken, senden Sie bitte eine E-Mail an security@example.com. Alle Sicherheitslücken werden umgehend bearbeitet.

## Unterstützte Versionen

Verwenden Sie diesen Abschnitt, um Personen mitzuteilen, welche Versionen Ihres Projekts derzeit mit Sicherheitsupdates unterstützt werden.

| Version | Unterstützt        |
| ------- | ------------------ |
| 5.1.x   | :white_check_mark: |
| 5.0.x   | :x:                |
| 4.0.x   | :white_check_mark: |
| < 4.0   | :x:                |

{{< /expand >}}

Nachdem Sie Ihre Sicherheitsrichtlinie eingerichtet haben, welche E-Mail-Adresse haben Sie für die Meldung von Sicherheitslücken angegeben? Geben Sie diese unten ein:

<label for="finput">Eingabefeld für E-Mail-Adresse:</label><br>
<input type="text" id="finput" name="finput"><br>

{{< notice success >}}
Gut gemacht, Sicherheitsexperte! Sie haben Ihr Repository gestärkt. Auf zur letzten Herausforderung!
{{< /notice >}}