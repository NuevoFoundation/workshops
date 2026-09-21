---
title: "Apprentissage Automatique : Régression Linéaire - Clé de Réponses"
date: 2026-04-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
Cette clé de réponses couvre tous les exercices et calculs principaux de l'atelier sur la Régression Linéaire. L'atelier utilise Replit pour les exercices Python avec un jeu de données Expérience vs Salaire. Certains exercices produisent des résultats différents à chaque exécution en raison d'un échantillonnage aléatoire.
{{% /notice %}}

## Section 1 : Qu'est-ce que la Régression ?

### Réponses à l'Exercice 1

**Q1 :** Peut-on connaître le type de forme à partir de la surface ?

**R :** Non. Un carré (3x3 = 9) et un triangle (base 6, hauteur 3, surface = 6x3/2 = 9) peuvent avoir la même surface mais sont des formes différentes.

**Q2 :** Quelle relation détermine le type de forme ?

**R :** Le nombre de côtés. C'est une relation linéaire directe : 3 côtés = triangle, 4 côtés = carré, 5 côtés = pentagone, etc.

## Section 2 : Régression Linéaire Simple

### Formule Clé

L'équation de la régression linéaire :

```
y = ax + b + ε
```

Où :
- `x` = variable indépendante (Années d'Expérience)
- `y` = variable dépendante (Salaire)
- `a` = pente/coefficient (variation de y pour chaque unité de x)
- `b` = intercept (valeur de y quand x = 0)
- `ε` = terme d'erreur

### Exercice 1 : Manipulation avec Scikit-learn

Charger et visualiser le jeu de données :

```python
import pandas as pd
from sklearn import linear_model

dataset = pd.read_csv("Experience_vs_Salary.csv")
x = dataset.iloc[:, :-1].values  # Colonne Expérience
y = dataset.iloc[:, 1].values     # Colonne Salaire

model = linear_model.LinearRegression()
model.fit(x, y)
```

### Exercice 2 : Trouver la Pente et l'Intercept

**Réponses :**
- **Intercept (b) :** 25 792,20
- **Coefficient/Pente (a) :** 9 449,96
- **Équation :** SALAIRE = 9 449,96 × (Expérience) + 25 792,20 + ε

**Interprétation :**
- Un employé avec 0 années d'expérience gagne environ 25 792 $
- Chaque année supplémentaire d'expérience augmente le salaire d'environ 9 450 $

## Section 3 : Intervalles de Confiance

### Formule Clé

```
CoefficientRange = Coefficient ± 2 × ErreurStandard
```

### Exercice 2 : Trouver l'Erreur Standard

**Réponse :** Erreur Standard = **409,40**

### Calcul de l'Intervalle de Confiance

```
CoefficientRange = 9 449,96 ± 2 × 409,40
CoefficientRange = 9 449,96 ± 818,80
CoefficientRange = [8 631,16 , 10 268,76]
```

**Interprétation :** Nous sommes confiants à 95 % que chaque année d'expérience augmente le salaire entre 8 631,16 $ et 10 268,76 $.

### Exercice 1 : Vérification de Plus d'Échantillons

**Q :** Pourquoi les valeurs de l'intercept et du coefficient diffèrent-elles à chaque exécution ?

**R :** Chaque exécution sélectionne un échantillon aléatoire différent de 30 enregistrements parmi un jeu de données de plus de 10 000 éléments. Différents échantillons produisent des résultats légèrement différents, mais les valeurs restent dans l'intervalle de confiance.

### Exercice 3 : Distribution Normale

L'histogramme des valeurs de coefficient provenant de nombreux échantillons forme une courbe en cloche (distribution normale). Cela confirme que les valeurs se regroupent autour du coefficient réel, la majorité tombant dans l'intervalle de confiance.

## Section 4 : Ajustement du Modèle

### Exercice 1 : Trouver le R-Carré

**Réponse :** R² = **0,973**

**Interprétation :** Nous sommes confiants à 97,3 % que les années d'expérience sont liées au salaire des employés. Le modèle explique 97,3 % de la variation salariale.

{{% notice tip %}}
**Pour les enseignants :** R² varie entre 0 et 1. Des valeurs au-dessus de 0,9 indiquent une relation très forte. Si les étudiants obtiennent un R² plus faible, demandez-leur de vérifier leur taille d'échantillon. Encouragez-les à changer la variable `sample_size` et à observer comment le R² évolue.
{{% /notice %}}

## Section 5 : Faire des Prédictions

### Concept Clé : Division Entraînement/Test

- **Ensemble d'entraînement :** 70 % des données (utilisé pour construire le modèle)
- **Ensemble de test :** 30 % des données (utilisé pour vérifier le modèle)
- Les valeurs R² des deux ensembles doivent être similaires (si le R² du test est beaucoup plus bas, le modèle est surajusté)

### Exercice 1 : Faire des Prédictions

```python
# Le code Replit crée des ensembles d'entraînement/test
# et génère des lignes de prédiction pour les deux
# Vérification clé : R² d'entraînement ≈ R² de test
```

### Exercice 2 : Prédictions Personnalisées

Les étudiants modifient la variable `experience` pour prédire le salaire pour n'importe quel nombre d'années d'expérience :

| Années d'Expérience | Salaire Prédit (approx.) |
|---------------------|--------------------------|
| 0 | 25 792 $ |
| 5 | 73 042 $ |
| 10 | 120 292 $ |
| 15 | 167 542 $ |
| 20 | 214 792 $ |

**Formule utilisée :** Salaire = 9 449,96 × Expérience + 25 792,20

{{% notice tip %}}
**Question fréquente des étudiants :** "Pourquoi ma prédiction ne correspond-elle pas exactement au tableau ?"

Le coefficient et l'intercept exacts dépendent de l'échantillon aléatoire sélectionné. Les valeurs ci-dessus utilisent les valeurs de référence de l'atelier (pente = 9 449,96, intercept = 25 792,20). Vos valeurs spécifiques seront légèrement