```markdown
---
title: "Apprentissage Automatique (FIFA) - Clé de Réponses"
date: 2026-04-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
Cette clé de réponses fournit le code Python complet pour l’atelier sur la prédiction des notes des joueurs FIFA. Les étudiants utilisent un notebook Jupyter avec le dataset FIFA 2019 de Kaggle. Les résultats peuvent légèrement varier en raison de la division aléatoire entre l’ensemble d’entraînement et l’ensemble de test.
{{% /notice %}}

## Étape 2 : Configuration et Importations

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
```

## Étape 3 : Charger le Dataset

```python
mypath = "C:/fifa_dataset/"  # changez ceci avec votre chemin réel
fifa_data = pd.read_csv(mypath + "data.csv")
fifa_data.describe()
```

## Étape 4 : Prétraitement des Données

### Voir toutes les positions

```python
print(fifa_data['Position'].dropna().unique())
```

### Filtrer par position (attaquants)

```python
fifa_data_by_pos = fifa_data[fifa_data['Position'] == 'ST']
```

### Tracer un histogramme des notes globales

```python
target = "Overall"
plt.hist(x=fifa_data_by_pos[target], bins=10, alpha=0.75, rwidth=0.85)
plt.xlabel("Note Globale")
plt.ylabel("Nombre de Joueurs")
plt.title("Distribution des Notes Globales des Attaquants")
plt.show()
```

### Diviser en ensembles d’entraînement et de test

```python
train_data, test_data = train_test_split(fifa_data_by_pos, test_size=0.25)
print("Le nombre de données d’entraînement est " + str(len(train_data)))
print("Le nombre de données de test est " + str(len(test_data)))
```

## Étape 5 : Sélection des Caractéristiques

### Trouver les caractéristiques les plus corrélées

```python
target = "Overall"
feature_corr = train_data.corr(method='pearson')[target]
feature_corr = feature_corr.sort_values(ascending=False)
print(feature_corr[1:21])
```

### Extraire les noms de caractéristiques en tant que liste

```python
features = feature_corr[1:21].index.tolist()
print(features)
```

**Caractéristiques principales typiques** (l’ordre peut varier avec la division aléatoire) :
```python
features = ["Positioning", "Finishing", "Special", "BallControl",
            "ShotPower", "Reactions", "Volleys", "Composure", "ShortPassing"]
```

## Étape 6 : Entraîner le Modèle

```python
x_train = train_data[features]
y_train = train_data[target]

model = LinearRegression().fit(x_train, y_train)
print("Score : " + str(model.score(x_train, y_train)))
```

**Sortie attendue :** Un score d’environ `0.9875` (98,75 % de précision sur les données d’entraînement).

## Étape 7 : Tester le Modèle

```python
test_data = test_data.sort_values([target], ascending=False)
x_test = test_data[features]
y_test = test_data[target]

y_pred = model.predict(x_test)

test_data['Predicted Overall'] = y_pred.copy()
difference = (y_pred - y_test) / y_test * 100
test_data['Difference (%)'] = difference

test_data[["Name", "Nationality", "Club", "Overall",
           "Predicted Overall", "Difference (%)"]]
```

**Résultats attendus :** Prédictions typiquement dans une marge d’erreur de 1 à 3 %. Exemple :

| Joueur              | Réel | Prédit | Erreur |
|---------------------|-------|--------|--------|
| Cristiano Ronaldo   | 94    | ~92.0  | ~-2.2% |
| R. Lewandowski      | 90    | ~88.1  | ~-2.1% |
| L. Suarez           | 91    | ~90.5  | ~-0.5% |

{{% notice tip %}}
**Pour les enseignants :** Les résultats varient à chaque exécution car `train_test_split` divise les données aléatoirement. L’apprentissage clé est que le modèle atteint une haute précision (R² > 0,95) quel que soit le découpage spécifique. Encouragez les étudiants à exécuter plusieurs fois et à comparer.

**Idées d’extension pour l’atelier :**
- Tester d’autres positions (GB, DF, MC) au lieu de ST
- Tester d’autres variables cibles (Valeur, Salaire au lieu de Note Globale)
- Changer le ratio entraînement/test (essayer 0.1 ou 0.5 au lieu de 0.25)
- Utiliser moins ou plus de caractéristiques et comparer le score
{{% /notice %}}
```