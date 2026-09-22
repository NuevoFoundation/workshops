---
title: "Aktivität 5 - Der stille Gipfel des Faultiers (ODER + NICHT)"
date: 2025-10-20T02:25:00-05:00
weight: 6
draft: false
---

<link rel="stylesheet" href="../_logic-gates.css" type="text/css" />

<img src="../media/perezoso.webp" alt="Nuvi verkleidet als Faultier" width="10%" />

## Einführung

Das **Faultier** wartet auf dich auf dem Gipfel:

> "Ich möchte absolute Stille: Der Ausgang schaltet sich nur ein, wenn **kein** Pfad Licht hat.  
> Lass uns **ODER** verwenden, um zu erkennen, ob Licht vorhanden ist, und **NICHT**, um umzudrehen."

---

<img src="../media/pattern.webp" alt="Dekoratives Muster für den Logik-Workshop" width="100%" />

## Logisches Ziel

Der Ausgang sollte nur dann 1 sein, wenn **A = 0 und B = 0**:

<details class="lg-details">
<summary class="lg-summary">
Siehe vollständige Wahrheitstabelle
</summary>

<div class="lg-div">

| A | B | A ODER B | Ausgang = NICHT(A ODER B) |
|---|---|----------|---------------------------|
| 0 | 0 |   0      |          1                |
| 0 | 1 |   1      |          0                |
| 1 | 0 |   1      |          0                |
| 1 | 1 |   1      |          0                |

</div>
</details>

---

<img src="../media/paisaje_camino.webp" alt="Landschaft des Gipfels" width="100%" />

## Simulator-Anweisungen

### 1. Platzieren
- **Eingänge**: A, B  
- **ODER-Gatter**  
- **NICHT-Gatter**  
- **Ausgang**

<img src="../media/actividad_6.png" alt="Visuelles Beispiel des ODER-Gatters, gefolgt von einem NICHT-Gatter mit zwei Eingängen und einem Ausgang" width="20%" class="lg-img"/>

### 2. Verbinden
1. A und B ➔ **ODER**  
2. **ODER** Ausgang ➔ **NICHT**  
3. **NICHT** Ausgang ➔ **Ausgang**

### 3. Testen
- Teste 00, 01, 10, 11.  
- Nur bei 00 sollte der Ausgang 1 sein.

**Siegesbedingung:** Wenn in **einem** der Eingänge A oder B Licht ist, bleibt der Ausgang 0.

---

## Schnelle Tipps

- Wenn der Ausgang immer bei 1 bleibt, könnte das Kabel von **ODER** zu **NICHT** fehlen.  
- Benenne das Zwischensignal `ODER_AB`.

---

## Simulator

{{< logic-gate-icon-guide >}}

<iframe src="https://drendog.github.io/Logic-Circuit-Simulator/" title="Logik-Gatter-Simulator" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

---

## Was hast du gelernt?

- Wie man ausdrückt: "**Keiner** der Eingänge ist aktiv" mit **ODER**, gefolgt von **NICHT**.