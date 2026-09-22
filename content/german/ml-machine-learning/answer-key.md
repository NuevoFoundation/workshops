---
title: "Maschinelles Lernen: Lineare Regression - Lösungsschlüssel"
date: 2026-04-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
Dieser Lösungsschlüssel behandelt alle Übungen und Schlüsselberechnungen aus dem Workshop zur linearen Regression. Der Workshop verwendet Replit für Python-Übungen mit einem Datensatz für Erfahrung vs. Gehalt. Einige Übungen liefern bei jedem Durchlauf unterschiedliche Ergebnisse aufgrund von zufälliger Stichprobenziehung.
{{% /notice %}}

## Abschnitt 1: Was ist Regression?

### Antworten zu Übung 1

**F1:** Kann man den Typ einer Form basierend auf der Fläche erkennen?

**A:** Nein. Ein Quadrat (3x3 = 9) und ein Dreieck (Basis 6, Höhe 3, Fläche = 6x3/2 = 9) können dieselbe Fläche haben, aber unterschiedliche Formen sein.

**F2:** Welche Beziehung bestimmt den Typ der Form?

**A:** Die Anzahl der Seiten. Es handelt sich um eine direkte lineare Beziehung: 3 Seiten = Dreieck, 4 Seiten = Quadrat, 5 Seiten = Fünfeck usw.

## Abschnitt 2: Einfache lineare Regression

### Schlüsselgleichung

Die Gleichung der linearen Regression:

```
y = ax + b + ε
```

Dabei gilt:
- `x` = unabhängige Variable (Jahre Erfahrung)
- `y` = abhängige Variable (Gehalt)
- `a` = Steigung/Koeffizient (Wie stark ändert sich y pro Einheit von x)
- `b` = Achsenabschnitt (y-Wert, wenn x = 0)
- `ε` = Fehlerterm

### Übung 1: Arbeiten mit Scikit-learn

Laden und visualisieren Sie den Datensatz:

```python
import pandas as pd
from sklearn import linear_model

dataset = pd.read_csv("Experience_vs_Salary.csv")
x = dataset.iloc[:, :-1].values  # Spalte Erfahrung
y = dataset.iloc[:, 1].values     # Spalte Gehalt

model = linear_model.LinearRegression()
model.fit(x, y)
```

### Übung 2: Steigung und Achsenabschnitt finden

**Antworten:**
- **Achsenabschnitt (b):** 25.792,20
- **Koeffizient/Steigung (a):** 9.449,96
- **Gleichung:** GEHALT = 9.449,96 × (Erfahrung) + 25.792,20 + ε

**Interpretation:**
- Ein Mitarbeiter ohne Berufserfahrung verdient etwa 25.792 $
- Jedes zusätzliche Jahr Berufserfahrung erhöht das Gehalt um etwa 9.450 $

## Abschnitt 3: Vertrauensintervalle

### Schlüsselgleichung

```
Koeffizientenbereich = Koeffizient ± 2 × Standardfehler
```

### Übung 2: Standardfehler berechnen

**Antwort:** Standardfehler = **409,40**

### Berechnung des Vertrauensintervalls

```
Koeffizientenbereich = 9.449,96 ± 2 × 409,40
Koeffizientenbereich = 9.449,96 ± 818,80
Koeffizientenbereich = [8.631,16 , 10.268,76]
```

**Interpretation:** Wir sind zu 95 % sicher, dass jedes zusätzliche Jahr Erfahrung das Gehalt um zwischen 8.631,16 $ und 10.268,76 $ erhöht.

### Übung 1: Prüfung weiterer Stichproben

**F:** Warum unterscheiden sich bei jedem Durchlauf die Werte für Achsenabschnitt und Koeffizient?

**A:** Bei jedem Durchlauf wird eine andere zufällige Stichprobe von 30 Datensätzen aus dem Gesamtbestand von über 10.000 Datensätzen ausgewählt. Unterschiedliche Stichproben liefern leicht unterschiedliche Ergebnisse, aber die Werte bleiben im Bereich des Vertrauensintervalls.

### Übung 3: Normalverteilung

Das Histogramm der Koeffizientenwerte aus vielen Stichproben bildet eine Glockenkurve (Normalverteilung). Dies bestätigt, dass die Werte um den wahren Koeffizienten gruppiert sind und die meisten innerhalb des Vertrauensintervalls liegen.

## Abschnitt 4: Modellgüte

### Übung 1: Bestimmtheitsmaß (R-Quadrat) berechnen

**Antwort:** R² = **0,973**

**Interpretation:** Wir sind zu 97,3 % sicher, dass Jahre Berufserfahrung mit dem Mitarbeitergehalt zusammenhängen. Das Modell erklärt 97,3 % der Variation im Gehalt.

{{% notice tip %}}
**Für Lehrkräfte:** R² liegt zwischen 0 und 1. Werte über 0,9 deuten auf eine sehr starke Beziehung hin. Wenn Schüler ein niedrigeres R² erhalten, sollen sie die Stichprobengröße überprüfen. Ermutigen Sie die Schüler, die Variable `sample_size` zu ändern und zu beobachten, wie sich R² verändert.
{{% /notice %}}

## Abschnitt 5: Vorhersagen machen

### Schlüsselkonzept: Trainings-/Testaufteilung

- **Trainingsdaten:** 70 % der Daten (zum Erstellen des Modells verwendet)
- **Testdaten:** 30 % der Daten (zum Überprüfen des Modells verwendet)
- Beide R²-Werte sollten ähnlich sein (wenn der Test-R²-Wert deutlich niedriger ist, liegt eine Überanpassung des Modells vor)

### Übung 1: Vorhersagen machen

```python
# Der Replit-Code erstellt Trainings-/Testdatensätze
# und generiert Vorhersagelinien für beide
# Wichtige Überprüfung: Trainings-R² ≈ Test-R²
```

### Übung 2: Individuelle Vorhersagen

Schüler ändern die Variable `experience`, um das Gehalt für eine beliebige Anzahl von Jahren Erfahrung vorherzusagen:

| Jahre Erfahrung | Vorhergesagtes Gehalt (ca.) |
|-----------------|-----------------------------|
| 0               | 25.792 $                   |
| 5               | 73.042 $                   |
| 10              | 120.292 $                  |
| 15              | 167.542 $                  |
| 20              | 214.792 $                  |

**Verwendete Formel:** Gehalt = 9.449,96 × Erfahrung + 25.792,20

{{% notice tip %}}
**Häufige Schülerfrage:** "Warum stimmt meine Vorhersage nicht genau mit der Tabelle überein?"

Der genaue Koeffizient und Achsenabschnitt hängen davon ab, welche zufällige Stichprobe ausgewählt wurde. Die oben stehenden Werte verwenden die Referenzwerte des Workshops (Steigung = 9.449,96, Achsenabschnitt = 25.792,20). Ihre spezifischen Werte werden leicht unterschiedlich sein, sollten aber ähnliche