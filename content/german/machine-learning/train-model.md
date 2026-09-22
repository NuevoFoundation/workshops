---
title: "Schritt 6: Das Modell trainieren"
description: "Grundlagen des maschinellen Lernens"
prereq: "keine"
difficulties: ["mittel"]
draft: false
weight: 6
---

Jetzt sind wir bereit, das Modell zu trainieren. Wir verwenden `LinearRegression().fit()`, um es zu trainieren. Dieses Modellobjekt verfügt über eine Funktion `score()`, die die Güte des Modells angibt. Dies ist der Determinationskoeffizient R^2 der Vorhersage. Für den Moment müssen Sie nur wissen: Je höher, desto besser.

```python
# Trainingsdaten vorbereiten
x_train = train_data[features]
y_train = train_data[target]

# Lineare Regression anwenden
# fit() ist die Methode, um das Modell zu trainieren
model = LinearRegression().fit(x_train, y_train)

# Modellbewertung
print("Score: " + str(model.score(x_train, y_train)))
```

    Score: 0.9875123836174596