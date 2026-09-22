---
title: "Activité 5 - Tester le Modèle"
date: 2020-09-09T16:19:17-07:00
prereq: "Bases de Python : Fonctions - Fonctions intégrées, Fonctions des bibliothèques ; Types de données - Chaînes, Nombres, Lecture depuis la console ; Structures de données - Listes"
difficulties: ["intermédiaire"]
weight: 8
draft: false
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/3FELV6BYtIo" title="Activité 5 - Tester le Modèle - Vidéo YouTube" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br>

### Tester Notre Modèle

Maintenant que nous avons construit et entraîné notre modèle, nous voulons le tester face à des articles de vêtements retournés. 
Commençons avec notre premier exemple d'article, qui était la chaussure.
```python
# Initier un objet modèle avec une couche softmax
probability_model = tf.keras.Sequential([model, tf.keras.layers.Softmax()])
```

{{% notice note %}}
Une **couche softmax** est un type de couche d'un réseau de neurones dans un modèle d'apprentissage machine. La couche softmax transforme nos entrées, qui peuvent théoriquement provenir d'une gamme variée de structures de données, en une distribution de probabilités entre 0 et 1.
{{% /notice %}}

```python
predictions = probability_model.predict(test_images)
```

Le code suivant donne une liste de probabilités qu'une image appartienne à une catégorie spécifique. La valeur de l'index correspond à la catégorie que l'image serait classée.
```python
predictions[0] # Renvoie l'index avec la probabilité la plus élevée, dépend de la valeur de l'index.
```

### Question 1
Le tableau de valeurs représente le niveau de confiance qu'une image appartient à une catégorie spécifique. Quel index a la valeur de confiance la plus élevée, et lequel a la valeur de confiance la plus faible ?

### Question 2
Vérifiez votre réponse pour la valeur de probabilité maximale en exécutant le code ci-dessous :

```python
np.argmax(predictions[0])
```

```python
test_labels[0]
```

Dans le tableau `class_names`, à quelle catégorie cet index correspond-il ? (Indice : Étant donné l'index de la valeur de probabilité maximale, quel index devez-vous rechercher ?)

Vérifiez à quelle catégorie cette image appartient en utilisant ce code. Est-ce exact ?

```python
class_names[9]
```