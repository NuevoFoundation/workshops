---
title: "Aktivität 8 - Die Spiegelkammer des kleinen Affen (Gleichheit mit UND/ODER/NICHT)"
date: 2025-10-20T02:55:00-05:00
weight: 9
draft: false
---

<link rel="stylesheet" href="../_logic-gates.css" type="text/css" />

<img src="../media/monito.jpg" alt="Nuvi verkleidet als kleiner Affe" width="20%" />

## Einführung

In der Halle der Reflexionen erklärt der **kleine Affe**:

> „Um die Kammer zu aktivieren, müssen die Signale **übereinstimmen**.  
> Wenn A und B gleich sind, öffnet sich die Tür."

---

<img src="../media/pattern.webp" alt="Dekoratives Muster für den Logik-Workshop" width="100%" />

## Logisches Ziel

Erstelle einen Ausgang, der 1 ergibt, wenn **A = B**, mit Hilfe von **UND/ODER/NICHT**:

<details class="lg-details">
<summary class="lg-summary">
Siehe vollständige Wahrheitstabelle
</summary>

<div class="lg-div">

| A | B | NICHT A | NICHT B | A UND B | (NICHT A UND NICHT B) | Ausgang |
|---|---|---------|---------|---------|------------------------|---------|
| 0 | 0 |    1    |    1    |    0    |           1            |    1    |
| 0 | 1 |    1    |    0    |    0    |           0            |    0    |
| 1 | 0 |    0    |    1    |    0    |           0            |    0    |
| 1 | 1 |    0    |    0    |    1    |           0            |    1    |

</div>
</details>

---

<img src="../media/paisaje_bosque.webp" alt="Landschaft des magischen Waldes" width="100%" />

## Anweisungen für den Simulator

### 1. Platzieren
- **Eingänge**: A, B  
- **NICHT-Gatter** (x2)  
- **UND-Gatter** (x2)  
- **ODER-Gatter**  
- **Ausgang**

<img src="../media/actividad_8.png" alt="Visuelles Beispiel der XNOR-Schaltung mit UND, ODER und NICHT mit zwei Eingängen und einem Ausgang" width="20%" class="lg-img"/>

### 2. Verbinden
1. A ➔ **NICHT**: `NICHT_A`  
2. B ➔ **NICHT**: `NICHT_B`  
3. A und B ➔ **UND1**  (Zweig „beide 1“)  
4. `NICHT_A` und `NICHT_B` ➔ **UND2** (Zweig „beide 0“)  
5. **UND1** und **UND2** ➔ **ODER**  
6. **ODER** ➔ **Ausgang**

### 3. Testen
- Prüfe 00, 01, 10, 11.  
- Der Ausgang sollte 1 für 00 und 11 sein.

**Siegbedingung:** Ausgang = 1, wenn und nur wenn A und B übereinstimmen.

---

## Schnelle Tipps

- Wenn der Ausgang 1 für 01 oder 10 ist, überprüfe die Kabel von `NICHT_A`/`NICHT_B` zu **UND₂**.  
- Halte die beiden Zweige symmetrisch, damit die Schaltung leicht zu lesen ist.

---

## Simulator

{{< logic-gate-icon-guide >}}

<iframe src="https://drendog.github.io/Logic-Circuit-Simulator/" title="Logikgatter-Simulator" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

---

## Was hast du gelernt?

- Wie man die Bedingung „**sie sind gleich**“ nur mit **UND/ODER/NICHT** aufbaut.  
- Wie man **parallele Zweige** verwendet, um komplementäre Fälle abzudecken.