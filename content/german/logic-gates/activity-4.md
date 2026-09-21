```markdown
---
title: "Aktivität 6 - Die Mission des kleinen Affen (Kombinieren von Gattern)"
date: 2025-10-20T01:55:00-05:00
weight: 7
draft: false
---

<link rel="stylesheet" href="../_logic-gates.css" type="text/css" />

<img src="../media/monito.jpg" alt="Nuvi verkleidet als kleiner Affe" width="20%" />

## Einführung

Vom Wipfel eines Baumes grüßt dich der **kleine Affe (Monito)** aufgeregt:

> "Du hast schon einen weiten Weg zurückgelegt! Du kennst bereits **AND**, **OR** und **NOT**.  
> Jetzt ist es an der Zeit, sie **zu kombinieren**, um der **Waldenkugel** wieder Energie zu verleihen."

In dieser Aktivität wirst du einen Schaltkreis erstellen, der **alle** Gatter verwendet, um eine Herausforderung zu lösen.

---

<img src="../media/pattern.webp" alt="Dekoratives Muster für den Logik-Workshop" width="100%" />

## Ziel

Baue und prüfe den Logikschaltkreis:

- Die **Kugel** schaltet sich ein, wenn:
  - **B** eingeschaltet ist, **oder**
  - **A** eingeschaltet ist **und** **C** ausgeschaltet ist.

Dieser Schaltkreis verwendet **NOT**, **AND** und **OR**.

---

## Benötigte Komponenten

- 3 **Eingänge**: A, B, C  
- 1 **NOT-Gatter**  
- 1 **AND-Gatter**  
- 1 **OR-Gatter**  
- 1 **Ausgang**

<img src="../media/actividad_4.png" alt="Visuelles Beispiel des kombinierten AND-, OR-, NOT-Schaltkreises mit drei Eingängen und einem Ausgang" width="20%" class="lg-img"/>

---

<img src="../media/paisaje_bosque.webp" alt="Landschaft des magischen Waldes" width="100%" />

## Anweisungen für den Simulator

### 1. Platzieren der Komponenten
1. Stelle sicher, dass du im **Bearbeitungsmodus** bist.
2. Wähle und platziere in der linken Seitenleiste:
  - **A**, **B**, **C** (Eingänge) platzieren.  
  - **NOT**, **AND**, **OR** platzieren.  
  - Einen **Ausgang** auf der rechten Seite platzieren.

### 2. Verbinden der Komponenten
1. Verbinde **C ➔ NOT** (erzeugt **NOT C**).  
2. Verbinde **A** und **NOT C** mit **AND** (erzeugt **A AND NOT C**).  
3. Verbinde **(A AND NOT C)** und **B** mit dem **OR**.  
4. Verbinde den **OR-Ausgang ➔ Ausgang**.

---

## Geführte Tests

Versuche diese Kombinationen und überprüfe den **Ausgang**:

1. **A = 1, B = 0, C = 0** ➔ `NOT C = 1` ➔ `A AND NOT C = 1` ➔ `Ausgang = 1`  
2. **A = 1, B = 0, C = 1** ➔ `NOT C = 0` ➔ `A AND NOT C = 0` ➔ `Ausgang = 0`  
3. **A = 0, B = 1, C = 1** ➔ `B = 1` ➔ `Ausgang = 1`  
4. **A = 0, B = 0, C = 0** ➔ beide Wege ergeben `0` ➔ `Ausgang = 0`  

Wenn alle vier übereinstimmen, leuchtet die Kugel korrekt auf!

---

## Wahrheitstabelle

<details class="lg-details">
<summary class="lg-summary">
Vollständige Wahrheitstabelle anzeigen
</summary>

<div class="lg-div">

| A | B | C | NOT C | A AND NOT C | Ausgang = (A AND NOT C) OR B  |
|---|---|---|-------|-------------|-------------------------------|
| 0 | 0 | 0 |   1   |      0      |               0              |
| 0 | 0 | 1 |   0   |      0      |               0              |
| 0 | 1 | 0 |   1   |      0      |               1              |
| 0 | 1 | 1 |   0   |      0      |               1              |
| 1 | 0 | 0 |   1   |      1      |               1              |
| 1 | 0 | 1 |   0   |      0      |               0              |
| 1 | 1 | 0 |   1   |      1      |               1              |
| 1 | 1 | 1 |   0   |      0      |               1              |

</div>
</details>

---

## Simulator

{{< logic-gate-icon-guide >}}

<iframe src="https://drendog.github.io/Logic-Circuit-Simulator/" title="Logikgatter-Simulator" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

---

## Häufige Fehler und wie man sie behebt

- **Der Ausgang ist immer 0:** Überprüfe, ob das **OR-Gatter** **zwei Signale** erhält: `B` **und** `A AND NOT C`.  

---

## Was hast du gelernt?

- Gatter können kombiniert werden, um komplexere Entscheidungen zu treffen, als ein einzelnes Gatter bieten kann.  
- NOT erlaubt es dir, ein Signal umzukehren; AND kombiniert gleichzeitige Bedingungen; OR verbindet alternative Wege.  
- Der endgültige Ausgang hängt davon ab, wie die Gatter verbunden sind und in welcher Reihenfolge die Signale verarbeitet werden.  

---

## Als Nächstes

In der nächsten Mission wirst du die Waldbewohner erneut treffen, um größere Herausforderungen mit denselben drei Gattern zu lösen.
```