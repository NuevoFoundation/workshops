---
title: "Étape 6 : Entraîner le modèle"
description: "Les bases de l'apprentissage automatique"
prereq: "aucun"
difficulties: ["intermédiaire"]
draft: false
weight: 6
---

Nous sommes maintenant prêts à entraîner le modèle. Nous utilisons 'LinearRegression().fit()' pour l'entraîner. Cet objet modèle dispose également d'une fonction `score()` qui retourne le score du modèle, c'est-à-dire le coefficient de détermination R^2 de la prédiction. Pour l'instant, vous devez seulement savoir que plus il est élevé, mieux c'est.

```python
# préparation des données d'entraînement
x_train = train_data[features]
y_train = train_data[target]

# Application de la régression linéaire
# fit() est la méthode pour entraîner le modèle
model = LinearRegression().fit(x_train,y_train)

# Score du modèle
print("Score : " + str(model.score(x_train,y_train)))
```

    Score : 0.9875123836174596