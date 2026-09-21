---
title: "Aktivität 7 - Die Brücke des Frosches (Unterschiedliche Werte mit UND/ODER/NICHT)"
date: 2025-10-20T02:40:00-05:00
weight: 8
draft: false
---

<link rel="stylesheet" href="../_logic-gates.css" type="text/css" />

<img src="../media/ranita.jpg" alt="Nuvi verkleidet als Frosch" width="15%" />

## Einführung

Der **Frosch** bewacht eine Brücke mit einer präzisen Regel:

> "Nur diejenigen, die **genau eine** brennende Fackel tragen, dürfen die Brücke überqueren.  
> Trägst du keine oder beide, schließt sich die Brücke."

---

<img src="../media/pattern.webp" alt="Dekoratives Muster für den Logik-Workshop" width="100%" />

## Logisches Ziel

Erstelle eine Ausgabe, die 1 ergibt, wenn A und B **unterschiedlich** sind.  
Die Schaltung verwendet **nur** UND, ODER und NICHT:

<details class="lg-details">
<summary class="lg-summary">
Gesamte Wahrheitstabelle anzeigen
</summary>

<div class="lg-div">

| A | B | A ODER B | A UND B | NICHT(A UND B) | Ausgabe |
|---|---|----------|---------|----------------|---------|
| 0 | 0 |    0     |    0    |       1        |    0    |
| 0 | 1 |    1     |    0    |       1        |    1    |
| 1 | 0 |    1     |    0    |       1        |    1    |
| 1 | 1 |    1     |    1    |       0        |    0    |

</div>
</details>

---

<img src="../media/paisaje_lago.webp" alt="Landschaft des Sees im Wald" width="100%" />

## Anweisungen für den Simulator

### 1. Platzieren
- **Eingänge**: A, B  
- **ODER-Gatter**  
- **UND-Gatter** (x2)  
- **NICHT-Gatter**  
- **Ausgabe**

<img src="../media/actividad_7.png" alt="Visuelles Beispiel der XOR-Schaltung mit UND, ODER und NICHT mit zwei Eingängen und einer Ausgabe" width="20%" class="lg-img"/>

### 2. Verbinden
1. A und B ➔ **ODER**: `OR_AB`  
2. A und B ➔ **UND1**: `AND_AB`  
3. `AND_AB` ➔ **NICHT**: `NOT_AND_AB`  
4. `OR_AB` und `NOT_AND_AB` ➔ **UND2**  
5. **UND2** ➔ **Ausgabe**

### 3. Testen
- Überprüfe 00, 01, 10, 11.  
- Die Ausgabe sollte nur für 01 und 10 den Wert 1 annehmen.

**Siegbedingung:** Ausgabe = 1, wenn A ≠ B.

---

## Schnelle Tipps

- Wenn du für 11 den Wert 1 erhältst, fehlt dir die Negation von `AND_AB`.  
- Trenne die Zweige von `OR_AB` und `NOT_AND_AB` visuell, um überkreuzte Verbindungen zu vermeiden.

---

## Simulator

{{< logic-gate-icon-guide >}}

<iframe src="https://drendog.github.io/Logic-Circuit-Simulator/" title="Logik-Gatter-Simulator" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

---

## Was hast du gelernt?

- Wie man die Bedingung "**sie sind unterschiedlich**" mit **UND/ODER/NICHT** erstellt.