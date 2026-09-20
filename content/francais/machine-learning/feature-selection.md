```yaml
---
title: "Étape 5 : Sélection des caractéristiques"
description: "Bases de l'apprentissage automatique"
prereq: "aucun"
difficulties: ["intermédiaire"]
draft: false
weight: 5
---
```

Notre prochaine étape consiste à sélectionner les bonnes caractéristiques. La sélection des caractéristiques est un terme en apprentissage automatique qui désigne la méthode et le processus de choix des caractéristiques pertinentes pour le modèle. Une caractéristique est une \(x\) dans la formule. Dans notre récit, il s'agit d'un attribut d'un joueur de football.

Puisque nous utilisons le modèle de régression linéaire, la manière dont un attribut est corrélé à la cible ("Overall") devient le critère pour choisir les bonnes caractéristiques.

Nous utilisons une fonction intégrée, `corr`, pour calculer la corrélation par paires des colonnes. Il existe trois méthodes que nous pouvons choisir :
- Pearson : coefficient de corrélation standard
- Kendall : coefficient de corrélation Tau de Kendall
- Spearman : coefficient de corrélation de rang de Spearman

Dans ce tutoriel, nous utilisons Pearson.

```python
# sélectionner la cible
target = "Overall"

# Pour trouver la corrélation entre les colonnes en utilisant la méthode pearson 
feature_corr = train_data.corr(method ='pearson') [target]

# trier les caractéristiques
feature_corr = feature_corr.sort_values(ascending = False)

# afficher les 20 meilleures caractéristiques
# notez que nous commençons à partir de 1 et non de zéro, car "Overall" est toujours en haut de la liste
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
    

Maintenant, nous pouvons copier et coller les 10 ou 12 premières caractéristiques. (Remarque : Veuillez ne pas copier les espaces.)

```python
# sélectionner quelques caractéristiques
features = ["Positioning", "Finishing", "Special", "BallControl", 
            "ShotPower", "Reactions", "Volleys", "Composure", "ShortPassing"]
```

Nous pouvons également simplement extraire les noms des caractéristiques à partir de l'index. Notez que nous commençons à partir de 1 parce que nous ne voulons pas inclure `overall`, qui est toujours en haut de la liste.

```python
# extraire les noms des caractéristiques à partir de la série
features = feature_corr[1:21].index.tolist()

# afficher les caractéristiques
print(features)
```

    ['Positioning', 'Special', 'Finishing', 'BallControl', 'ShotPower', 'Reactions', 'Volleys', 'Composure', 'ShortPassing', 'Dribbling', 'LongShots', 'HeadingAccuracy', 'Vision', 'Skill Moves', 'Curve', 'Crossing', 'Potential', 'Penalties', 'LongPassing', 'FKAccuracy']