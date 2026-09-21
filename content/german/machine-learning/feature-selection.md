```markdown
---
title: "Schritt 5: Merkmalsauswahl"
description: "Grundlagen des maschinellen Lernens"
prereq: "none"
difficulties: ["intermediate"]
draft: false
weight: 5
---

Unser nächster Schritt ist die Auswahl der richtigen Merkmale. Die Merkmalsauswahl ist ein Begriff im maschinellen Lernen, der die Methode und den Prozess zur Auswahl relevanter Merkmale für das Modell beschreibt. Ein Merkmal ist ein \(x\) in der Formel. In unserer Geschichte ist es ein Attribut eines Fußballspielers.

Da wir das lineare Regressionsmodell verwenden, wird die Korrelation des Attributs mit dem Ziel ("Overall") zum Kriterium, um die richtigen Merkmale auszuwählen.

Wir verwenden die integrierte Funktion `corr`, um die paarweise Korrelation der Spalten zu berechnen. Es gibt drei Methoden, aus denen wir wählen können:
- pearson: Standard-Korrelationskoeffizient
- kendall: Kendall-Tau-Korrelationskoeffizient
- spearman: Spearman-Rangkorrelation

In diesem Tutorial verwenden wir die Methode "pearson".

```python
# Ziel auswählen
target = "Overall"

# Die Korrelation zwischen den Spalten mit der Methode "pearson" berechnen
feature_corr = train_data.corr(method ='pearson') [target]

# Die Merkmale sortieren
feature_corr = feature_corr.sort_values(ascending = False)

# Die Top 20 Merkmale anzeigen
# Beachten Sie, dass wir bei 1 und nicht bei 0 anfangen, da "Overall" immer oben auf der Liste steht
print(feature_corr[1:21]) 
```

    Positioning        0.904367
    Special            0.903856
    Finishing          0.899783
    BallControl        0.896988
    ShotPower          0.877842
    Reactions          0.861441
    Volleys            0.834433
    Composure          0.827529
    ShortPassing       0.813074
    Dribbling          0.802565
    LongShots          0.794059
    HeadingAccuracy    0.711129
    Vision             0.671054
    Skill Moves        0.649300
    Curve              0.641426
    Crossing           0.603249
    Potential          0.593139
    Penalties          0.583906
    LongPassing        0.575092
    FKAccuracy         0.569704
    Name: Overall, dtype: float64
    

Nun können wir die Top 10 oder Top 12 Merkmale kopieren und einfügen. (Hinweis: Bitte kopieren Sie keine Leerzeichen)

```python
# Einige Merkmale auswählen
features = ["Positioning", "Finishing", "Special", "BallControl", 
            "ShotPower", "Reactions", "Volleys", "Composure", "ShortPassing"]
```

Alternativ können wir die Merkmalnamen direkt aus dem Index extrahieren. Beachten Sie, dass wir bei 1 anfangen, da wir "Overall" nicht einschließen möchten, welches immer oben auf der Liste steht.

```python
# Merkmalnamen aus der Serie extrahieren
features = feature_corr[1:21].index.tolist()

# Die Merkmale anzeigen
print(features)
```

    ['Positioning', 'Special', 'Finishing', 'BallControl', 'ShotPower', 'Reactions', 'Volleys', 'Composure', 'ShortPassing', 'Dribbling', 'LongShots', 'HeadingAccuracy', 'Vision', 'Skill Moves', 'Curve', 'Crossing', 'Potential', 'Penalties', 'LongPassing', 'FKAccuracy']
```