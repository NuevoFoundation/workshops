```yaml
---
title: "Aktivität 3 - Die Herausforderung des Frosches (NICHT)"
date: 2025-10-20T01:40:00-05:00
weight: 4
draft: false
---

<link rel="stylesheet" href="../_logic-gates.css" type="text/css" />

<img src="../media/ranita.jpg" alt="Nuvi im Froschkostüm" width="15%" />

## Einführung

Auf der Spur folgend erreichst du einen glänzenden Teich.  
Ein **grüner Frosch** springt auf ein Blatt und begrüßt dich:

> "Willkommen am **Spiegelteich**!  
> Hier funktioniert alles **umgekehrt**: ist etwas an, wird es aus;  
> ist es aus, wird es an. Das ist **NICHT**-Logik."

Deine Mission ist es, einen Schaltkreis zu bauen, der das Eingangssignal **invertiert**.

---

<img src="../media/pattern.webp" alt="Dekoratives Muster für den Logik-Workshop" width="100%" />

## Was ist das NICHT-Gatter?

- Es hat **einen Eingang** und **einen Ausgang**.  
- Der Ausgang ist **immer das Gegenteil** des Eingangs.

<details class="lg-details">
<summary class="lg-summary">
Zeige vollständige Wahrheitstabelle
</summary>

<div class="lg-div">

| Eingabe A | NICHT Ausgang |
|-----------|---------------|
| 0         | 1             |
| 1         | 0             |

</div>
</details>

> Dieses Gatter wird auch als **Inverter** bezeichnet.

---

<img src="../media/paisaje_lago.webp" alt="Landschaft des Teiches im Wald" width="100%" />

## Anweisungen für den Simulator

### 1. Platzieren der Komponenten
1. Stelle sicher, dass du dich im **Bearbeitungsmodus** befindest.  
2. Wähle und platziere in der linken Seitenleiste:
   - **Eingabe** ➔ eine Eingabe (A).
   - **NICHT-Gatter** ➔ ein NICHT-Gatter zwischen der Eingabe und dem Ausgang.
   - **Ausgabe** ➔ eine Ausgabe rechts vom Gatter.

<img src="../media/actividad_3.png" alt="Visuelles Beispiel des NICHT-Schaltkreises mit einer Eingabe und einer Ausgabe" width="20%" class="lg-img"/>

### 2. Verbinde die Komponenten
1. Verbinde den **Ausgang** von **Eingabe A** mit dem **Eingang** des **NICHT-Gatters**.  
2. Verbinde den **Ausgang** des **NICHT-Gatters** mit der **Ausgabe**.

### 3. Teste den Schaltkreis
- Klicke auf **Eingabe A**, um zwischen `0` ↔ `1` zu wechseln.  
- Beobachte die **Ausgabe**: Sie sollte **das Gegenteil** von A anzeigen.

**Siegbedingung:**  
- Wenn `A = 0` ➔ **Ausgabe = 1**  
- Wenn `A = 1` ➔ **Ausgabe = 0**

> Der Frosch klatscht:  
> "Gut gemacht! Manchmal muss man **rückwärts denken**, um voranzukommen."

---

## Schnelle Tipps

- Ändert sich die Ausgabe **nicht** zum Gegenteil der Eingabe, überprüfe, ob der Draht **durch** das **NICHT-Gatter** geht.  
- Vergewissere dich, dass du das **NICHT-Gatter** ausgewählt hast und nicht ein anderes Gatter.  
- Wenn die Ausgabe **gleich** der Eingabe ist, ist das NICHT-Gatter wahrscheinlich nicht verbunden oder fehlt.

---

## Herausforderung (optional)

- **Doppel-NICHT:** Füge **zwei** NICHT-Gatter in Serie hinzu. Was passiert mit der Ausgabe?  

---

## Simulator

{{< logic-gate-icon-guide >}}

<iframe src="https://drendog.github.io/Logic-Circuit-Simulator/" title="Logik-Gatter-Simulator" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

---

## Was hast du gelernt?

- Das **NICHT-Gatter** invertiert den logischen Wert: `0 → 1` und `1 → 0`.  
- Es ist nützlich, um **umgekehrte Verhaltensweisen** zu erzeugen (Alarm bei fehlendem Signal, automatische Lichter usw.).  
- Zwei NICHT-Gatter hintereinander **heben sich gegenseitig auf**.

---

## Als Nächstes

Großartig! In der nächsten Aktivität zeigt dir der **kleine Affe**, wie du **AND**, **OR** und **NOT** kombinieren kannst, um komplexere Herausforderungen zu lösen und die Energie der **Waldsphäre** wiederherzustellen.
```