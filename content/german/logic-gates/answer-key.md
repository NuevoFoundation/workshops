---
title: "Logic-Gates-Workshop: Lösungsschlüssel"
date: 2025-12-04T10:00:00-06:00
draft: false
hidden: true
weight: 300
---

<link rel="stylesheet" href="../_logic-gates.css" type="text/css" />

{{% notice tip %}}
Hinweis: Stellen Sie für diesen Workshop sicher, dass Sie einen kompatiblen Browser verwenden und JavaScript für den interaktiven Simulator aktiviert haben.

Die Aktivitäten können das Auswählen von Optionen oder Komponenten im Simulator beinhalten.
{{% /notice %}}

### Aktivität 1: UND-Gatter (AND gate)
Erwartete Antwort: Die Ausgabe wird aktiviert (1), nur wenn beide Eingänge aktiv sind (1).

Tipp: Probieren Sie alle möglichen Kombinationen der beiden Eingänge aus. Nur wenn beide 1 sind, wird die Ausgabe ebenfalls 1.

{{< workshop-image filename="media/answer_1.png" alt="Visuelle Lösung des UND-Schaltkreises mit zwei Eingängen und einer Ausgabe" width="40%" class="lg-img" >}}

---

### Aktivität 2: ODER-Gatter (OR gate)
Erwartete Antwort: Die Ausgabe wird aktiviert (1), wenn mindestens einer der Eingänge aktiv ist (1).

Tipp: Wenn einer oder beide Eingänge 1 sind, wird die Ausgabe 1. Sie wird nur 0, wenn beide Eingänge 0 sind.

{{< workshop-image filename="media/answer_2.png" alt="Visuelle Lösung des ODER-Schaltkreises mit zwei Eingängen und einer Ausgabe" width="40%" class="lg-img" >}}

---

### Aktivität 3: NICHT-Gatter (NOT gate)
Erwartete Antwort: Die Ausgabe ist immer das Gegenteil des Eingangs.

Tipp: Wenn der Eingang 0 ist, wird die Ausgabe 1 sein. Wenn der Eingang 1 ist, wird die Ausgabe 0 sein.

{{< workshop-image filename="media/answer_3.png" alt="Visuelle Lösung des NICHT-Schaltkreises mit einem Eingang und einer Ausgabe" width="40%" class="lg-img" >}}

**Doppel-NICHT-Herausforderung:**
Wenn Sie zwei NICHT-Gatter in Serie schalten, wird das Signal zweimal invertiert. Das bedeutet:
- Wenn der Eingang 0 ist: Das erste NICHT wandelt es in 1 um, das zweite wieder zurück in 0.
- Wenn der Eingang 1 ist: Das erste NICHT wandelt es in 0 um, das zweite wieder zurück in 1.

**Fazit:** Zwei NICHT-Gatter hintereinander heben den Inversionseffekt auf, und die Ausgabe entspricht dem ursprünglichen Eingang.

---

### Aktivität 4: UND + NICHT (Invertiertes Gatter)
Erwartete Antwort: Die Ausgabe ist 1, außer wenn beide Eingänge 1 sind (Verwendung von UND, gefolgt von NICHT).

Tipp: Das NICHT-Gatter invertiert das Ergebnis des UND-Gatters. Nur wenn beide Eingänge 1 sind, wird die Ausgabe 0 sein.

{{< workshop-image filename="media/answer_5.png" alt="Visuelle Lösung für den UND gefolgt von NICHT-Schaltkreis mit zwei Eingängen und einer Ausgabe" width="40%" class="lg-img" >}}

---

### Aktivität 5: ODER + NICHT (Stille Ausgabe)
Erwartete Antwort: Die Ausgabe ist 1, nur wenn beide Eingänge 0 sind (Verwendung von ODER, gefolgt von NICHT).

Tipp: Das NICHT-Gatter invertiert das Ergebnis des ODER-Gatters. Wenn ein Eingang 1 ist, wird die Ausgabe 0 sein.

{{< workshop-image filename="media/answer_6.png" alt="Visuelle Lösung für den ODER gefolgt von NICHT-Schaltkreis mit zwei Eingängen und einer Ausgabe" width="40%" class="lg-img" >}}

---

### Aktivität 6: Kombinieren von Gattern (UND, ODER, NICHT)
Erwartete Antwort: Die Ausgabe wird aktiviert, wenn B 1 ist, oder wenn A 1 und C 0 ist (Verwendung von NICHT, um C zu invertieren).

Tipp: Erstellen Sie den Schaltkreis, indem Sie die Gatter gemäß der angegebenen logischen Bedingung kombinieren. Testen Sie die im Aktivitätenblatt vorgeschlagenen Fälle.

1. **Identifizieren Sie die Eingänge und Ausgänge:**
- Eingänge: A, B, C
- Ausgang: Output

2. **Invertieren Sie Eingang C mithilfe von NICHT:**
- Verbinden Sie C mit einem NICHT-Gatter, um `NICHT C` zu erhalten.

3. **Kombinieren Sie A und NICHT C mit UND:**
- Verbinden Sie A und `NICHT C` mit einem UND-Gatter, um `A UND NICHT C` zu erhalten.

4. **Kombinieren Sie das vorherige Ergebnis mit B durch ODER:**
- Verbinden Sie `A UND NICHT C` und B mit einem ODER-Gatter, um die finale Ausgabe zu erhalten: `(A UND NICHT C) ODER B`.

5. **Verbinden Sie die Ausgabe des ODER-Gatters mit der Endausgabe.**

**Beispiel für Verbindungen:**

{{< workshop-image filename="media/answer_4.png" alt="Visuelle Lösung für den kombinierten UND-, ODER-, NICHT-Schaltkreis mit drei Eingängen und einer Ausgabe" width="40%" class="lg-img" >}}

**Geführte Tests:**

- A = 1, B = 0, C = 0 → Ausgabe = 1
- A = 1, B = 0, C = 1 → Ausgabe = 0
- A = 0, B = 1, C = 1 → Ausgabe = 1
- A = 0, B = 0, C = 0 → Ausgabe = 0

---

### Aktivität 7: Exklusiver Unterschied (XOR mit UND/ODER/NICHT)
Erwartete Antwort: Die Ausgabe ist 1, nur wenn die Eingänge unterschiedlich sind (Verwendung einer Kombination von UND, ODER und NICHT).

Tipp: Probieren Sie alle Kombinationen aus. Die Ausgabe wird nur dann 1 sein, wenn ein Eingang 1 und der andere 0 ist.

1. **Identifizieren Sie die Eingänge und die Ausgabe:**
- Eingänge: A, B
- Ausgabe: Output

2. **Erzeugen Sie die ODER-Kombination:**
- Verbinden Sie A und B mit einem ODER-Gatter, um `ODER_AB` zu erhalten.

3. **Erzeugen Sie die UND-Kombination:**
- Verbinden Sie A und B mit einem UND-Gatter, um `UND_AB` zu erhalten.

4. **Invertieren Sie das Ergebnis des UND-Gatters:**
- Verbinden Sie die Ausgabe von `UND_AB` mit einem NICHT-Gatter, um `NICHT_UND_AB