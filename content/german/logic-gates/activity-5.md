---
title: "Aktivität 4 - Das umgekehrte Tor des Tukan (UND + NICHT)"
date: 2025-10-20T02:10:00-05:00
weight: 5
draft: false
---

<link rel="stylesheet" href="../_logic-gates.css" type="text/css" />

<img src="../media/tucan.png" alt="Nuvi verkleidet als Tukan" width="15%" />

## Einführung

Vor dem steinernen Tor zwinkert dir der **Tukan** zu:

> "Erinnerst du dich an mein **UND**-Tor? Heute werden wir es mit Hilfe von **NICHT** umkehren.  
> Das Tor öffnet sich **außer**, wenn beide Fackeln brennen."

---

<img src="../media/pattern.webp" alt="Dekoratives Muster für den Logik-Workshop" width="100%" />

## Logisches Ziel

Erstelle einen Ausgang, der wahr ist, **außer** wenn A = 1 **und** B = 1:

<details class="lg-details">
<summary class="lg-summary">
Siehe vollständige Wahrheitstabelle
</summary>

<div class="lg-div">

| A | B | A UND B | Ausgang = NICHT(A UND B) |
|---|---|---------|--------------------------|
| 0 | 0 |    0    |           1              |
| 0 | 1 |    0    |           1              |
| 1 | 0 |    0    |           1              |
| 1 | 1 |    1    |           0              |

</div>
</details>

---

<img src="../media/paisaje_puerta.webp" alt="Landschaft des steinernen Tors im Wald" width="100%" />

## Anweisungen für den Simulator

### 1. Komponenten platzieren
1. Stelle sicher, dass du im **Bearbeitungsmodus** bist.  
- **Eingänge**: A, B  
- **UND-Tor**  
- **NICHT-Tor**  
- **Ausgang**

<img src="../media/actividad_5.png" alt="Visuelles Beispiel der UND gefolgt von NICHT-Schaltung mit zwei Eingängen und einem Ausgang" width="20%" class="lg-img"/>

### 2. Verbinden
1. A und B ➔ **UND**  
2. Ausgang von **UND** ➔ **NICHT**  
3. Ausgang von **NICHT** ➔ **Ausgang**

### 3. Testen
- Gehe die Zustände 00, 01, 10, 11 durch.  
- Das Tor öffnet sich in allen Fällen **außer** bei 11.

**Siegbedingung:** Der Ausgang ist nur dann 0, wenn A = 1 und B = 1.

---

## Schnelltipps

- Wenn es immer 0 ergibt, hast du den **Ausgang** wahrscheinlich an das **UND** anstelle des **NICHT** angeschlossen.

---

## Simulator

{{< logic-gate-icon-guide >}}

<iframe src="https://drendog.github.io/Logic-Circuit-Simulator/" title="Logik-Tor-Simulator" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

---

## Was hast du gelernt?

- Wie man eine zusammengesetzte Bedingung **negiert**: zuerst **UND**, dann **NICHT**.