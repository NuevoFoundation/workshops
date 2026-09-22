---
title: "Activité 4 - Entraînement du Modèle"
date: 2020-09-09T16:19:17-07:00
prereq: "Bases de Python : Fonctions - Fonctions intégrées, Fonctions des bibliothèques ; Types de données - Chaînes de caractères, Nombres, Lecture depuis la console ; Structures de données - Listes, Tuples, Ensembles"
difficulties: ["intermédiaire"]
weight: 7
draft: false
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/o0o9JTm2xIg" title="Activité 4 - Entraînement du Modèle - Vidéo YouTube" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br>

### Paramètres pour l'Entraînement
Le code suivant détermine combien de fois le modèle est entraîné. Il est normal que ce segment de code prenne plus de temps que d'habitude pour s'exécuter.

```python
model.fit(train_images, train_labels, epochs=10) 
```

{{% notice note %}}
**Epochs** représentent le nombre de fois où le modèle traite l'ensemble des données d'entraînement. 
{{% /notice %}}

Le code suivant affiche la précision globale du test.

```python
test_loss, test_acc = model.evaluate(test_images,  test_labels, verbose=2)

print('\nTest accuracy:', test_acc)
```

### Question 1
Définissez la valeur des epochs à 2. Quelle est la précision du dernier epoch ? Quelle est la précision du test lorsque le modèle entraîné est comparé au jeu de données de test ?

### Question 2
Définissez la valeur des epochs à 10. Répétez la Question 1.

### Question 3
Définissez la valeur des epochs à 20. Répétez la Question 1.

### Question 4
Quelle corrélation observez-vous lorsque vous augmentez le nombre d'epochs ? La précision augmente-t-elle ou diminue-t-elle ?