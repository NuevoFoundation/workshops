---
title: "Verwendung des Simulators"
date: 2025-10-20T01:00:18-05:00
weight: 1
draft: false
---

<link rel="stylesheet" href="../_logic-gates.css" type="text/css" />

## Einführung

Du bist im magischen Wald von Costa Rica angekommen. In diesem Ort lebt eine Kugel, die die Tiere und die Natur schützt, aber ihre Energie schwindet.  
Um sie wiederherzustellen, müssen wir zuerst lernen, wie der Logikschaltkreis-Simulator verwendet wird.

---

<img src="../media/pattern.webp" alt="Dekoratives Muster für den Logic-Workshop" width="100%" />

## Grundlegende Simulator-Nutzung

Bevor wir uns mit Logikgatter beschäftigen, müssen wir verstehen, wie Komponenten platziert und korrekt verbunden werden.

### 1. Hauptschnittstelle

Auf der linken Seite befindet sich eine Leiste mit allen verfügbaren Komponenten, wie:

- Eingänge (Input) 
<img src="../media/logicinput.png" alt="Symbol eines Eingangs" width="40px" class="lg-img"/>

- Ausgänge (Output) 
<img src="../media/logicoutput.png" alt="Symbol eines Ausgangs" width="40px" class="lg-img"/>

- Taktgeber (CLK) 
<img src="../media/logicclock.png" alt="Symbol eines Taktgebers" width="64px" class="lg-img"/>

- Logikgatter (AND, OR, NOT, usw.)  
<div style="margin-left: 20px; display: flex; gap: 5px; align-items: center;">
   <img src="../media/logicand.png" alt="Symbol eines AND-Logikgatters" width="64px"/>
   <img src="../media/logicor.png" alt="Symbol eines OR-Logikgatters" width="64px"/>
   <img src="../media/logicnot.png" alt="Symbol eines NOT-Logikgatters" width="64px"/>
</div>

Oben befinden sich wichtige Schaltflächen:
- **Edit**: Modus zum Platzieren von Komponenten.
- **Move**: Verschieben von bereits platzierten Komponenten.
- **Delete**: Entfernen von Komponenten.
- **Save / Load**: Speichern oder Laden von Schaltkreisen.
<img src="../media/menu.png" alt="Menüsymbol des Simulators" class="lg-img"/>


Der weiße Bereich ist der Ort, an dem du deinen Schaltkreis aufbauen wirst.

---

## Erste Mission: Verbinde einen Eingang mit einem Ausgang

### Schritte

1. Stelle sicher, dass der **Edit**-Modus ausgewählt ist.
2. Klicke in der linken Leiste auf **Input**.
3. Klicke irgendwo in den weißen Bereich, um den Eingang zu platzieren.
4. Wähle dann **Output** und klicke erneut, um den Ausgang rechts oder in der Nähe des Eingangs zu platzieren.
5. Um diese zu verbinden:
   - Klicke auf den kleinen Kreis des Eingangs.
   - Klicke dann auf den Kreis des Ausgangs.
   - Ein Draht wird automatisch gezeichnet.
6. Klicke auf das Eingangssymbol, um dessen Wert ein- oder auszuschalten:
   - `0` = aus
   - `1` = an

Wenn der Eingang auf `1` gesetzt ist und der Ausgang `1` anzeigt, funktioniert dein Schaltkreis.

---

## Was hast du gelernt?

- Wie man Komponenten platziert (Komponente anklicken, dann auf den weißen Bereich klicken).
- Wie man sie mit den Verbindungskreisen verbindet.
- Wie man Eingangssignale schaltet.
- Dieser Schaltkreis verwendet noch keine Logikgatter, sondern nur eine direkte Verbindung.

## Simulator

{{< logic-gate-icon-guide >}}

<iframe src="https://drendog.github.io/Logic-Circuit-Simulator/" title="Logikgatter-Simulator" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

---

## Als Nächstes

Wenn du bereit bist, wirst du in der nächsten Aktivität den Tukan kennenlernen und lernen, wie das **AND**-Logikgatter verwendet wird.