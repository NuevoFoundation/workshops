---
title: "Maschinelles Lernen (FIFA) - Lösungsschlüssel"
date: 2026-04-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
Dieser Lösungsschlüssel enthält den vollständigen Python-Code für den Workshop zur Vorhersage der FIFA-Spielerbewertungen. Die Teilnehmer nutzen ein Jupyter-Notebook mit dem FIFA-2019-Datensatz von Kaggle. Die Ergebnisse können leicht variieren, da die Zufallsauswahl von Trainings- und Testdaten den Split beeinflusst.
{{% /notice %}}

## Schritt 2: Einrichtung und Import

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
```

## Schritt 3: Laden des Datensatzes

```python
mypath = "C:/fifa_dataset/"  # ändere dies in deinen tatsächlichen Pfad
fifa_data = pd.read_csv(mypath + "data.csv")
fifa_data.describe()
```

## Schritt 4: Vorverarbeitung der Daten

### Alle Positionen anzeigen

```python
print(fifa_data['Position'].dropna().unique())
```

### Nach Position filtern (Stürmer)

```python
fifa_data_by_pos = fifa_data[fifa_data['Position'] == 'ST']
```

### Histogramm der Gesamtbewertung zeichnen

```python
target = "Overall"
plt.hist(x=fifa_data_by_pos[target], bins=10, alpha=0.75, rwidth=0.85)
plt.xlabel("Gesamtbewertung")
plt.ylabel("Anzahl der Spieler")
plt.title("Verteilung der Gesamtbewertung von Stürmern")
plt.show()
```

### Aufteilen in Trainings- und Testdaten

```python
train_data, test_data = train_test_split(fifa_data_by_pos, test_size=0.25)
print("Die Anzahl der Trainingsdaten ist " + str(len(train_data)))
print("Die Anzahl der Testdaten ist " + str(len(test_data)))
```

## Schritt 5: Merkmalsauswahl

### Bestimmen der am stärksten korrelierten Merkmale

```python
target = "Overall"
feature_corr = train_data.corr(method='pearson')[target]
feature_corr = feature_corr.sort_values(ascending=False)
print(feature_corr[1:21])
```

### Extrahieren der Merkmalsnamen als Liste

```python
features = feature_corr[1:21].index.tolist()
print(features)
```

**Typische Top-Merkmale** (die Reihenfolge kann aufgrund des Zufallssplits variieren):
```python
features = ["Positioning", "Finishing", "Special", "BallControl",
            "ShotPower", "Reactions", "Volleys", "Composure", "ShortPassing"]
```

## Schritt 6: Modell trainieren

```python
x_train = train_data[features]
y_train = train_data[target]

model = LinearRegression().fit(x_train, y_train)
print("Bewertung: " + str(model.score(x_train, y_train)))
```

**Erwartetes Ergebnis:** Eine Bewertung von ungefähr `0.9875` (98,75 % Genauigkeit bei den Trainingsdaten).

## Schritt 7: Modell testen

```python
test_data = test_data.sort_values([target], ascending=False)
x_test = test_data[features]
y_test = test_data[target]

y_pred = model.predict(x_test)

test_data['Errechnete Gesamtbewertung'] = y_pred.copy()
difference = (y_pred - y_test) / y_test * 100
test_data['Differenz (%)'] = difference

test_data[["Name", "Nationality", "Club", "Overall",
           "Errechnete Gesamtbewertung", "Differenz (%)"]]
```

**Erwartete Ergebnisse:** Die Vorhersagen liegen typischerweise innerhalb einer Fehlergrenze von 1-3 %. Beispiel:

| Spieler          | Tatsächlich | Errechnet  | Fehler |
|------------------|-------------|------------|--------|
| Cristiano Ronaldo| 94          | ~92.0      | ~-2.2% |
| R. Lewandowski   | 90          | ~88.1      | ~-2.1% |
| L. Suarez        | 91          | ~90.5      | ~-0.5% |

{{% notice tip %}}
**Für Lehrkräfte:** Die Ergebnisse variieren bei jedem Ausführen, da `train_test_split` die Daten zufällig aufteilt. Der wesentliche Lernpunkt ist, dass das Modell unabhängig von der Teilung eine hohe Genauigkeit erreicht (R² > 0.95). Ermutigen Sie die Schüler, den Vorgang mehrmals auszuführen und die Ergebnisse zu vergleichen.

**Erweiterungsideen aus dem Workshop:**
- Probiere verschiedene Positionen (z. B. TW, IV, ZM) anstelle von ST aus.
- Probiere verschiedene Zielvariablen (z. B. Marktwert, Gehalt anstelle von Gesamtbewertung) aus.
- Änder das Verhältnis von Trainings- zu Testdaten (z. B. 0.1 oder 0.5 anstelle von 0.25).
- Nutze weniger oder mehr Merkmale und vergleiche die Bewertung.
{{% /notice %}}