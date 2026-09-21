```markdown
---
title: "Aktivität 1 - Das Tor des Tukans (UND)"
date: 2025-10-20T01:15:00-05:00
weight: 2
draft: false
---

<link rel="stylesheet" href="../_logic-gates.css" type="text/css" />

<img src="../media/tucan.png" alt="Illustration von Nuvi im Tukankostüm" width="15%" />

## Einführung

Während du durch den Wald gehst, erreichst du eine große Holztür.  
Ein Tukan erscheint daneben und sagt:

> "Diese Tür öffnet sich nur, wenn beide Fackeln gleichzeitig angezündet sind.  
> Wenn nur eine angezündet ist, bewegt sich die Tür nicht.  
> Hier verwenden wir UND-Logik."

Deine Aufgabe ist es, dieses Verhalten mithilfe des Logikgaten-Simulators zu testen.

---

<img src="../media/pattern.webp" alt="Dekoratives Muster für den Logik-Workshop" width="100%" />

## Was ist das UND-Gatter?

- Es hat **zwei Eingänge** und **einen Ausgang**.  
- Der Ausgang schaltet sich ein (`1`), **nur wenn beide Eingänge eingeschaltet sind (`1`)**.  
- Wenn einer oder beide Eingänge ausgeschaltet sind (`0`), bleibt der Ausgang ausgeschaltet (`0`).

<details class="lg-details">
<summary class="lg-summary">
Wahrheitstabelle vollständig anzeigen
</summary>

<div class="lg-div">

| Eingang A | Eingang B | UND-Ausgang |
|-----------|-----------|-------------|
| 0         | 0         | 0           |
| 0         | 1         | 0           |
| 1         | 0         | 0           |
| 1         | 1         | 1           |

</div>
</details>

---

<img src="../media/paisaje_puerta.webp" alt="Landschaft der Tür im Wald" width="100%" />

## Simulatoranweisungen

### 1. Komponenten platzieren
1. Stelle sicher, dass du im Modus **Bearbeiten** bist.
2. Klicke in der linken Seitenleiste auf:
   - **Eingang** ➔ platziere **zwei** Eingänge (A und B).
   - **UND-Gatter** ➔ platziere ein UND-Gatter.
   - **Ausgang** ➔ platziere einen Ausgang rechts vom Gatter.

<img src="../media/actividad_1.png" alt="Visuelles Beispiel des UND-Schaltkreises mit zwei Eingängen und einem Ausgang" width="20%" class="lg-img"/>

### 2. Komponenten verbinden
1. Klicke auf den Ausgangskreis von **Eingang A**, dann klicke auf einen der Eingänge des UND-Gatters.  
2. Wiederhole dasselbe mit **Eingang B**.  
3. Verbinde vom Ausgang des UND-Gatters zum **Ausgangskreis**.

### 3. Den Schaltkreis testen
- Klicke auf jeden Eingang, um zwischen `0` und `1` zu wechseln.  
- Probiere alle möglichen Kombinationen aus.  
- Die Tür des Tukans "öffnet sich" (Ausgang = 1) nur, wenn Eingang A 1 und Eingang B 1 ist (A=1 UND B=1).

---

## Simulator

{{< logic-gate-icon-guide >}}

<iframe src="https://drendog.github.io/Logic-Circuit-Simulator/" title="Logikgaten-Simulator" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

---

## Was hast du gelernt?

- UND stellt Bedingungen dar, die zusammen erfüllt sein müssen: Der Ausgang wird nur aktiviert, wenn A = 1 und B = 1 zur gleichen Zeit sind.
- Wenn einer der Eingänge 0 ist, wird der Ausgang auch 0 sein, ohne Ausnahmen.

---

## Als Nächstes

In der nächsten Aktivität wirst du den Pfad weitergehen, bis du dem Faultier begegnest und erfährst, wie das ODER-Gatter funktioniert.
```