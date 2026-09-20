```markdown
---
title: "Étape 4 : Pré-traiter les données"
description: "Notions de base sur l'apprentissage automatique"
prereq: "aucun"
difficulties: ["intermédiaire"]
draft: false
weight: 4
---

À présent, nous avons importé notre jeu de données. Dans la vie réelle, chaque joueur de football occupe une position spécifique. Différentes positions nécessitent des points forts dans différents attributs. Alors, réduisons le champ d'application à l'attaquant.

Tout d'abord, listons toutes les positions.
Cette instruction semble un peu plus longue, mais elle fait le travail. Le `fifa_data['position']` sélectionne la colonne des positions du `fifa_data`, le `dropna()` élimine les cellules qui sont vides, et `unique()` supprime tous les éléments dupliqués pour nous.

```python
# pour découvrir combien de positions il y a
print(fifa_data['Position'].dropna().unique())
```

    ['RF' 'ST' 'LW' 'GK' 'RCM' 'LF' 'RS' 'RCB' 'LCM' 'CB' 'LDM' 'CAM' 'CDM'
     'LS' 'LCB' 'RM' 'LAM' 'LM' 'LB' 'RDM' 'RW' 'CM' 'RB' 'RAM' 'CF' 'RWB'
     'LWB']

Maintenant, nous pouvons filtrer les données par position "ST". Nous vous encourageons à sélectionner d'autres positions pour voir quelle est la différence.

```python
# obtenir les joueurs par position
fifa_data_by_pos = fifa_data[fifa_data['Position']=='ST']
```

Traçons un histogramme pour les notes générales de tous les attaquants.

```python
plt.hist(x=fifa_data_by_pos[target], bins=10, alpha=0.75, rwidth=0.85)
```

    (array([ 40., 186., 363., 463., 601., 341., 113.,  34.,   9.,   2.]),
     array([47. , 51.7, 56.4, 61.1, 65.8, 70.5, 75.2, 79.9, 84.6, 89.3, 94. ]),
     <a list of 10 Patch objects>)

![Image de sortie](../images/output_11_1.png)

Ensuite, nous souhaitons diviser les données en deux ensembles : l'un est utilisé pour entraîner le modèle, et l'autre est utilisé pour vérifier si le modèle formé est bon.

Vous pourriez penser que nous devrions laisser autant de données que possible pour l'entraînement, car cela rend le modèle meilleur. Le modèle s'adapte mieux, mais uniquement aux jeux de données d'entraînement. Lorsque vous appliquez le modèle aux données de test, la précision de la prédiction pourrait diminuer. Cela s'appelle "surapprentissage" (overfitting).

Maintenant, nous laissons 25 % des données pour les tests.

```python
# diviser les données en train_data et test_data de manière aléatoire
# vous êtes libre de changer le ratio de test_size pour voir ce qui se passe
train_data, test_data = train_test_split(fifa_data_by_pos, test_size=0.25)

# afficher le nombre de joueurs dans train_data et test_data
# len() vous donne le nombre de joueurs au format numérique
# str() convertit la valeur numérique en chaîne de caractères
print("Le nombre de données d'entraînement est " + str(len(train_data)))
print("Le nombre de données de test est " + str(len(test_data)))
```

    Le nombre de données d'entraînement est 1614
    Le nombre de données de test est 538
```