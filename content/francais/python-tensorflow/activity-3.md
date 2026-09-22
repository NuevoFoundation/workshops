---
title: "Activité 3 - Affichage d'échantillons de vêtements"
date: 2020-09-09T16:19:17-07:00
prereq: "Bases de Python : Fonctions - Fonctions intégrées, Fonctions de bibliothèques ; Types de données - Chaînes, Nombres, Lecture depuis la console ; Structures de données - Listes ; Boucles - Boucles For"
difficulties: ["intermédiaire"]
weight: 5
draft: false
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/8dMNuQcmx5s" title="Activity 3 - Displaying Clothing Samples - YouTube video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br>

### Afficher les échantillons
À présent, vous afficherez tous vos échantillons de vêtements en procédant comme suit :

Copiez le code suivant dans votre notebook Colab. Celui-ci affiche une collection d'images accompagnées de leur catégorie spécifique.

```python
plt.figure(figsize=(10,10)) #définit la taille de l'image à 10x10 pouces
for i in range(25): #affiche les 25 premières images avec le nom de leur classe
    plt.subplot(5,5,i+1)
    plt.xticks([])
    plt.yticks([])
    plt.grid(False)
    plt.imshow(train_images[i], cmap=plt.cm.binary) 
    plt.xlabel(class_names[train_labels[i]])
plt.show() #affiche les images avec leurs étiquettes
```

### Question 1

Votre superviseur vous remet environ 15 à 20 échantillons de vêtements supplémentaires, que vous devrez inclure dans votre programme.
Modifiez la "boucle for" pour qu'il y ait 6 rangées et 7 colonnes. Combien d'images devrez-vous afficher ?

Réfléchissez à l'endroit où vous devez modifier le code pour afficher cela. Le code affiche actuellement 5 rangées et 5 colonnes.