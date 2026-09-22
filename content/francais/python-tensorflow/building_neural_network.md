---
title: "Construction du Réseau Neuronal"
date: 2020-09-09T16:19:17-07:00
prereq: "Notions de base en Python : Fonctions - Fonctions intégrées, Fonctions des bibliothèques ; Types de données - Chaînes, Nombres, Lecture depuis la console ; Structures de données - Listes, Tuples, Ensembles"
difficulties: ["intermédiaire"]
weight: 6
draft: false
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/ttOhB-w8dt0" title="Construction du Réseau Neuronal - Vidéo YouTube" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

C'est la première étape dans la construction d'un **réseau neuronal**, qui est en fait un outil permettant de faire de **l'apprentissage automatique**. Avec cet outil, nous entraînons un programme à analyser des images ou des données, également appelées **données d'entraînement**.  
Puis, après l'entraînement, nous pouvons demander au programme de réaliser et d'exécuter une tâche spécifique en utilisant ce qu'il a appris. Par exemple, supposons que nous entraînons un programme avec des images de chiens et de chats, et que nous fournissons au programme l'identification correcte des images. Une fois entraîné, nous pouvons demander à l'ordinateur d'identifier si une photo de mon animal Whiskers est celle d'un chat ou d'un chien.

Dans notre cas, nous utilisons des images pré-étiquetées de vêtements pour entraîner notre modèle. Ensuite, nous voulons que le programme prévoie correctement le type de vêtement d'une entrée donnée.

## Reconnaissance des motifs et regroupement des objets

Regardons ces deux images.

![Basket noire et blanche avec semelle blanche](../media/NN_sneaker_ex1.png "Basket noire et blanche avec semelle blanche")
![Basket noire](../media/NN_sneaker_ex2.png "Basket noire")

Comme nous pouvons le voir sur ces images, nous avons deux baskets. Ce sont deux images différentes et leurs valeurs de pixels varient considérablement, mais nous pouvons toujours les catégoriser comme des baskets. Comment faisons-nous cela ? Notre cerveau interprète ces images en observant des motifs qu'il a déjà vus précédemment et conclut : « Ce sont des baskets ! »

Et pourquoi appelons-nous cela des baskets ? À un moment donné, tout le monde a collectivement convenu que c'est différent des autres types de chaussures parce que les baskets ont des lacets, des embouts longs, des semelles épaisses en caoutchouc et couvrent vos pieds jusqu'aux chevilles. C'est probablement ce que l'on nous a dit quand nous étions enfants : identifier ce type de chaussures comme étant des baskets.

En quoi cela est-il pertinent pour ce que nous faisons ensuite ? Nous devrons dire à l'ordinateur que ces types d'images sont des baskets. Nous ne pouvons pas simplement marquer ces deux images comme des baskets, car cela serait inefficace pour prédire des entrées futures en utilisant ce modèle. 

De plus, nous ne devons pas nous arrêter seulement aux baskets pour catégoriser les images : nous pouvons utiliser plusieurs catégories pour classifier les images (Rappelez-vous avoir créé la liste des différentes catégories de vêtements dans l’Activité 1). En fin de compte, ce sont les catégories que nous utilisons pour trier tous les articles vestimentaires.

## Qu'est-ce qu'un réseau neuronal ?

Le concept de **réseau neuronal** est né de l'idée de reproduire le fonctionnement du cerveau humain, plus particulièrement sa capacité à reconnaître des motifs. En fait, le mot 'neuronal' est une dérivation du mot 'neurone', des récepteurs dans le cerveau qui s'activent, par exemple, lorsqu'ils voient une image ou un objet qu'ils reconnaissent.

Dans ce cas, nous entraînons l'ordinateur à reconnaître ce qu'est chaque image (si c'est une chaussure, une chemise, un sac, etc.), donc notre objectif principal en utilisant le réseau neuronal dans cet atelier est de donner à l'ordinateur la capacité de classifier les images du jeu de données dans différentes catégories.

L'image ci-dessous montre une implémentation simple d'un réseau neuronal.

- La couche d'entrée est responsable de l'alimentation des données dans le système, en pointant vers différents neurones pour entraîner le modèle.
- La couche cachée est composée de nombreux neurones, qui sont responsables de la reconnaissance des différents motifs à partir des données d'entrée. Ces nœuds pointent ensuite vers la couche de sortie.
- La couche de sortie est composée d'un seul nœud ou de plusieurs nœuds qui renvoient une valeur de sortie que le modèle prédit.

![Diagramme de Réseau Neuronal](../media/neural_network.png "Diagramme de Réseau Neuronal")

Pour faire simple, un réseau neuronal est un système, ou un algorithme, qui entraîne l'ordinateur à reconnaître différents types de motifs.

## En quoi cela est-il lié à ce que nous faisons ?

{{% notice note %}}
Nous vous recommandons de regarder le premier bloc de code ci-dessous et le diagramme du réseau neuronal pour mieux comprendre la relation entre eux et les points suivants.
{{% /notice %}}

- La couche d'entrée prend les différents types d'images du jeu de données et les transmet aux neurones (la couche cachée).
- Les neurones (au nombre de 128) reconnaissent ensuite différents motifs dans les images en observant différentes caractéristiques et la relation entre elles et les catégories prédéterminées. Cette couche donne à l'ordinateur la capacité de catégoriser les images de manière autonome.
- La couche de sortie est composée de 10 nœuds différents, représentant les 10 catégories différentes que nous utilisons pour trier les images. En fonction de l'image spécifique et de la manière dont l'ordinateur a été entraîné par les neurones, la sortie sera la catégorie prédite la plus probable pour cette image en particulier.

{{% notice note %}}

Si vous êtes intéressé(e) par en savoir plus sur les réseaux neuronaux, vous pouvez consulter <a href="https://news.mit.edu/2017/explained-neural-networks-deep-learning-0414" target="_blank">cet article</a> de MIT News.

<a href="https://en.wikipedia.org/wiki/Neural_network#/media/File:Neural_network_example.svg" target="_blank">Source de l'image</a>

{{% /notice %}}

Copiez le code suivant dans votre notebook Google Colab :

```python
model = keras.Sequential([ 
    # La première couche (couche d'entrée) transforme chaque image (résolution de 28 x 28 pixels)
    # en un tableau unidimensionnel dont les indices correspondent à tous les pixels de l'image.
    keras.layers.Flatten(input_shape=(28, 28)), 
    keras.layers.Dense(128, activation='relu'), #couche cachée
    keras.layers.Dense(10) #couche