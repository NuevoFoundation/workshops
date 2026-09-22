---
title: "Activité 1 - Importer la bibliothèque TensorFlow et les jeux de données"
date: 2020-09-09T16:19:17-07:00
prereq: "Notions de base en Python : Fonctions - Fonctions intégrées, Fonctions des bibliothèques ; Types de données - Chaînes de caractères, Nombres, Lecture depuis la console ; Structures de données - Listes"
difficulties: ["intermédiaire"]
weight: 2
draft: false
---


<iframe width="560" height="315" src="https://www.youtube.com/embed/OxDn2xDXWi4" title="Activité 1 - Importer la bibliothèque TensorFlow et les jeux de données - Vidéo YouTube" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Importer les dépendances

#### Packages
La première chose à faire est d'importer la bibliothèque TensorFlow afin d'utiliser des fonctions qui nous permettront d'entraîner notre modèle.

Nous allons également créer des graphiques pour visualiser les prédictions de notre modèle, et pour cela, nous devons importer les bibliothèques suivantes :

```python
# Importer les bibliothèques TensorFlow et tf.keras

import tensorflow as tf
from tensorflow import keras 

# Bibliothèques d'assistance pour les statistiques et les graphiques

import numpy as np
import matplotlib.pyplot as plt 
```

Ces bibliothèques sont essentielles car elles regroupent des méthodes et fonctions précompilées dont l'importation dans notre programme nous permet d'accéder à ces méthodes sans avoir à réécrire ces bibliothèques en entier. Par exemple, nous importons les méthodes et fonctions de TensorFlow et NumPy pour éviter d'avoir à rédiger les programmes complets associés dans notre propre code.

#### Charger les jeux de données
Nous voulons maintenant charger le jeu de données Fashion MNIST, qui contient l'ensemble des images de vêtements nécessaires à notre modèle. 

```python
# Cette variable est déclarée depuis la bibliothèque fashion_mnist de la section jeux de données

fashion_mnist = keras.datasets.fashion_mnist 
```

```python
# Cela charge quatre variables depuis le jeu de données. 
# Les train_images et train_labels sont les données utilisées par le modèle pour apprendre.
# Les test_images et test_labels permettent au modèle de se comparer aux attentes.

(train_images, train_labels), (test_images, test_labels) = fashion_mnist.load_data() 
```

{{% notice note %}}
Vous remarquerez peut-être que nous divisons les données en jeux de données d'entraînement et de test avec leurs étiquettes correspondantes. Un **jeu de données d'entraînement** sert à notre modèle pour apprendre les paramètres optimaux afin de réaliser ses tâches, tandis que le **jeu de données de test** sert à valider dans quelle mesure notre modèle a appris. C'est un peu comme lorsque nous apprenons des choses : nous sommes en permanence formés et testés pour nous améliorer !
{{% /notice %}}

<br>

### Préparer nos données

L'étape suivante consiste à créer une liste de catégories sous la variable `class_names`. 

Votre superviseur vous donne les catégories de vêtements que l'entrepôt traite. Cela sera créé sous la variable `class_names`.

{{% notice tip %}}

<a href="https://workshops.nuevofoundation.org/python-basics/data-structures/lists/" target="_blank">Vous ne savez pas comment créer une liste en Python ?</a>

### Tâche 1

Écrivez les noms de classes suivants dans la liste `class_names` :

- T-shirt/top (T-shirt/haut)
- Trouser (Pantalon)
- Pullover (Pull)
- Dress (Robe)
- Coat (Manteau)
- Sandal (Sandale)
- Shirt (Chemise)
- Sneaker (Basket)
- Bag (Sac)
- Ankle boot (Botte courte)

{{% /notice %}}

{{% notice info %}}
### Lecture optionnelle

Si vous êtes intéressé à en apprendre davantage sur ces bibliothèques, n’hésitez pas à consulter les sites suivants :

<a href="https://www.tensorflow.org/overview" target="_blank">En savoir plus sur TensorFlow</a>

<a href="https://www.w3schools.com/python/numpy_intro.asp" target="_blank">En savoir plus sur NumPy</a>

<a href="https://matplotlib.org/" target="_blank">En savoir plus sur Matplotlib</a>

{{% /notice %}}