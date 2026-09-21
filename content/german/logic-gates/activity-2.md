```markdown
---
title: "Aktivität 2 - Der Berg des Faultiers (ODER)"
date: 2025-10-20T01:30:00-05:00
weight: 3
draft: false
---

<link rel="stylesheet" href="../_logic-gates.css" type="text/css" />

<img src="../media/perezoso.webp" alt="Nuvi als Faultier verkleidet" width="10%" />

## Einführung

Nachdem du die Tür des Tukans hinter dir gelassen hast, führt der Pfad dich zu einem friedlichen Berg.  
Auf einem Ast gähnt ein Faultier und sagt mit ruhiger Stimme:

> "Kein Grund zur Eile... Um zum Gipfel zu gelangen, kannst du den Pfad **A** oder **B** nehmen.  
> Wenn einer der beiden offen ist, kommst du dort hin. Und wenn beide offen sind, auch! Hier verwenden wir die **ODER**-Logik."

Deine Aufgabe ist es, dieses Verhalten im Simulator zu überprüfen und den Weg zum Gipfel zu beleuchten.

---

<img src="../media/pattern.webp" alt="Dekoratives Muster für den Logik-Workshop" width="100%" />

## Was ist das ODER-Gatter?

- Es hat **zwei Eingänge** und **einen Ausgang**.  
- Der Ausgang schaltet sich ein (`1`), **wenn mindestens einer der Eingänge eingeschaltet ist (`1`)**.  
- Es bleibt nur aus (`0`), wenn **beide** Eingänge aus (`0`) sind.

<details class="lg-details">
<summary class="lg-summary">
Wahrheitstabelle anzeigen
</summary>

<div class="lg-div">

| Eingang A | Eingang B | ODER-Ausgang |
|-----------|-----------|--------------|
| 0         | 0         | 0            |
| 0         | 1         | 1            |
| 1         | 0         | 1            |
| 1         | 1         | 1            |

</div>
</details>

---

<img src="../media/paisaje_camino.webp" alt="Landschaft des Berges und des Weges" width="100%" />

## Simulationsanweisungen

### 1. Komponenten platzieren
1. Stelle sicher, dass du im **Bearbeitungsmodus** bist.
2. Wähle und platziere in der Seitenleiste links:
   - **Eingang** ➔ Platziere **zwei** Eingänge (A und B).
   - **ODER-Gatter** ➔ Platziere ein ODER-Gatter zwischen den Eingängen und dem Ausgang.
   - **Ausgang** ➔ Platziere einen Ausgang rechts vom Gatter.

<img src="../media/actividad_2.png" alt="Visuelles Beispiel für die ODER-Schaltung mit zwei Eingängen und einem Ausgang" width="20%" class="lg-img"/>

### 2. Komponenten verbinden
1. Verbinde den **Ausgang** von **Eingang A** mit einem der **Eingänge** des **ODER**-Gatters.  
2. Verbinde den **Ausgang** von **Eingang B** mit dem **anderen Eingang** des **ODER**-Gatters.  
3. Verbinde den **Ausgang** des **ODER**-Gatters mit dem **Ausgang**.

### 3. Schaltung testen
- Klicke auf jeden **Eingang**, um zwischen `0` ↔ `1` zu wechseln.  
- Probiere alle vier Kombinationen aus (00, 01, 10, 11).  
- **Ziel / Siegesbedingung:** Der Ausgang sollte `1` sein, wenn **A = 1** **oder** **B = 1** (oder beide).  

> "Siehst du? Mit nur einem offenen Pfad kann man den Gipfel erreichen."

---

## Schnelle Tipps

- Wenn der Ausgang auf `0` bleibt, obwohl A = 1 oder B = 1 ist, überprüfe, ob beide Eingänge mit dem ODER-Gatter verbunden sind.  
- Vergewissere dich, dass du das **ODER-Gatter** und nicht versehentlich das **UND-Gatter** verwendet hast.

---

## Simulator

{{< logic-gate-icon-guide >}}

<iframe src="https://drendog.github.io/Logic-Circuit-Simulator/" title="Logik-Gatter-Simulator" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

---

## Was hast du gelernt?

- ODER repräsentiert **Optionen**: nur **ein** offener Weg reicht aus, um den Ausgang zu aktivieren.  
- Der einzige Weg, wie der Ausgang auf `0` bleibt, ist, wenn **A = 0** und **B = 0** gleichzeitig sind.

---

## Als Nächstes

In der nächsten Aktivität wirst du den Reflektionssee mit dem **Frosch** besuchen und die Funktionsweise des **NICHT**-Gatters entdecken.
```