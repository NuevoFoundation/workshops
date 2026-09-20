---
title: "Ingenieurdesign DISTANCE - Lösungsschlüssel"
date: 2024-01-15T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
Dies ist eine Lehrerreferenz für den Ingenieurdesign-Workshop DISTANCE. Dieser Workshop befindet sich derzeit im Entwurfsstatus (alle Aktivitätsseiten sind mit `draft: true` markiert) und hat unvollständige Inhalte, einschließlich fehlender Bilder, einer fehlenden MATLAB/Octave-Code-Datei und einer fehlenden Bewertungskriterien-Tabelle. Dieser Lösungsschlüssel dokumentiert die Schritte des Entwurfsprozesses des Workshops und die erwarteten Parameterentscheidungen, um Lehrkräften zu helfen, den geplanten Ablauf des Workshops zu verstehen, falls dieser in Zukunft abgeschlossen wird.
{{% /notice %}}

{{% notice warning %}}
**Workshop-Status: Unvollständig.** Alle 11 Aktivitätsseiten sind `draft: true`. Auf mehreren Seiten befinden sich Platzhalter für `[insert image]` und `[insert table]`. Der im Verlauf erwähnte MATLAB/Octave-Code wird nicht bereitgestellt. Die Octave-Installationsanweisungen verweisen auf eine Datei ("Octave Instructions.docx"), die nicht im Repository existiert. Dieser Workshop kann in seinem aktuellen Zustand nicht an Schüler:innen durchgeführt werden.
{{% /notice %}}

## Workshop-Übersicht

Die Schüler:innen nehmen an einem fiktiven Rennen namens DISTANCE (San Diego Student Racing Competition) teil. Ihre Aufgabe besteht darin, eine Antriebswelle für ein Rennauto unter Anwendung des Ingenieurdesignprozesses zu entwerfen und ein MATLAB/Octave-Programm zu verwenden, das den empfohlenen Wellendurchmesser basierend auf den von den Schüler:innen ausgewählten Parametern berechnet.

## Die 5 Designparameter

Der Workshop führt die Schüler:innen durch 5 Entscheidungen, die in die MATLAB-Berechnung einfließen:

### 1. Sicherheitsfaktor (Aktivität 5)

Ein Verhältnis der Belastungsgrenze eines Materials zu seiner aktuellen Beanspruchung. Höhere Werte bedeuten sicherere, jedoch potenziell überentwickelte Designs.

| Sicherheitsfaktor | Bedeutung                           |
|-------------------|-------------------------------------|
| 1                 | Materialgrenze entspricht der aktuellen Belastung (riskant) |
| 2-3               | Typisch für viele ingenieurtechnische Anwendungen |
| 6                 | Sicherheitsfaktor der Golden Gate Bridge |
| Höhere Werte      | Sicherer, jedoch schwerer/teurer    |

**Erwartete Schülerauswahl:** Eine Zahl größer als 1. Der Workshop liefert Beispiele aus der realen Welt (Brücken, Motoren, Flugzeuge) als Kontext.

### 2. Materialauswahl (Aktivität 6)

Die Schüler:innen wählen aus 5 Materialien mit verschiedenen mechanischen Eigenschaften:

| Material  | Hauptmerkmal                     |
|-----------|-----------------------------------|
| Stahl     | Stark, schwer, schwer zu brechen |
| Holz      | Leicht, einfach zu bearbeiten, weniger haltbar |
| Glas      | Spröde, bricht leicht unter Kraft |
| Aluminium | Leichter als Stahl, mittlere Festigkeit |
| Plastik   | Flexibel, leicht, die schwächste Option |

**Erwartete Schülerauswahl:** Stahl oder Aluminium sind die praktischsten Optionen für eine Antriebswelle. Das Programm verwendet die mechanischen Eigenschaften (Streckgrenze, Ermüdungsgrenze) jedes Materials in der Durchmesser-Berechnung.

### 3. Wellenbedingungen (Aktivität 7)

Drei Umgebungsbedingungen, die die Leistung der Welle beeinflussen:

| Bedingung       | Optionen                 | Auswirkung                               |
|-----------------|--------------------------|------------------------------------------|
| Oberflächenpolitur | Poliert vs. unpoliert    | Risse/Deformationen erhöhen das Fehlerrisiko |
| Motortemperatur | Hervorragend bis Überhitzungsgefahr | Überhitzung kann Teile schmelzen oder beschädigen |
| Wetter (Regen)  | Optimistisch vs. realistisch | Wasser verursacht Korrosion und Materialzersetzung |

**Erwartete Schülerentscheidungen:** Diese sind Ermessenssache. Optimistische Entscheidungen führen zu kleineren Durchmessern, realistische zu größeren (sichereren) Durchmessern.

### 4. Belastungsparameter (Aktivität 8)

Zwei Arten von Kräften auf die Antriebswelle:

| Belastungstyp | Beschreibung                           | Bereich    |
|---------------|----------------------------------------|------------|
| Drehmoment    | Rotationskraft vom Motor zu den Rädern | 0-10.000   |
| Biegemoment   | Kräfte, die die Welle biegen           | 0-10.000   |

**Erwartete Schülerangaben:** Die Schüler:innen legen Mindest- und Höchstwerte für Drehmoment und Biegemoment fest. Höhere Werte erfordern einen größeren Wellendurchmesser.

### 5. Geometrie (Aktivität 9)

Die Schüler:innen wählen zwischen zwei Ecktypen für den Wellenquerschnitt:

| Geometrie       | Beschreibung            | Wirkung                              |
|-----------------|--------------------------|-------------------------------------|
| Ecken eckig     | Scharfe Kanten           | Höhere Spannungsbelastungen (gefährlicher) |
| Ecken abgerundet | Abgerundete Kanten       | Geringere Spannungsbelastungen (sicherer) |

**Erwartete Schülerauswahl:** Abgerundete Ecken sind die sicherere ingenieurtechnische Wahl. Der Workshop erklärt Spannungsbelastungen anhand des Beispiels von Flugzeugfenstern (runde Fenster vs. rechteckige Fenster).

## Erwartetes Ergebnis

Das MATLAB/Octave-Programm berechnet einen minimalen Wellendurchmesser basierend auf allen 5 Parametern. Anschließend vergleichen die Schüler:innen den Durchmesser mit einer Bewertungskriterien-Tabelle (Aktivität 11, nicht im Workshop enthalten), um die "Platzierung" ihres Autos im Rennen zu bestimmen.

**Allgemeine Prinzipien** (basierend auf allgemeinen ingenieurtechnischen Prinzipien; der tatsächliche Code ist nicht verfügbar, um diese zu verifizieren):
- Ein größerer Sicherheitsfaktor führt zu einem größeren Durchmesser
- Stärkere Materialien (z. B. Stahl) ermöglichen kleinere Durchmesser
- Schlechtere Bedingungen (Überhitzung, Regen, unpolierte Oberfläche) erhöhen den Durchmesser
- Höhere Belastungen (Drehmoment, Biegemoment) erhöhen den Durchmesser
- Eckige Ecken erfordern größere Durchmesser als abgerundete Ecken

## Fertigstellungsstatus des Workshops

| Aktivität | Titel                    | Status                                             |
|-----------|--------------------------|---------------------------------------------------|
| 1         | Hintergrund zur Antriebswelle | Entwurf, unvollständiger Text                     |
| 2         | Entwerfe deine Antriebswelle   | Entwurf, fehlendes Bild                          |
| 3         | Code (MATLAB/Octave)     | Entwurf, Code nicht bereitgestellt,