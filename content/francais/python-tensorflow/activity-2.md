---
title: "Activité 2 - Affichage des valeurs de couleur RGB pour les images"
date: 2020-09-09T16:19:17-07:00
prereq: "Bases de Python : Fonctions - Fonctions intégrées, fonctions des bibliothèques ; Types de données - Chaînes de caractères, nombres, lecture à partir de la console ; Structures de données - Listes"
difficulties: ["intermédiaire"]
weight: 3
draft: false
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/bMr1c4a7dXQ" title="Activité 2 - Affichage des valeurs de couleur RGB pour les images - Vidéo YouTube" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Visualiser les images des échantillons  

Nous allons maintenant visualiser l'image d'une chaussure de notre collection d'échantillons de vêtements à l'aide du fragment de code ci-dessous.

Copiez et collez le code suivant dans votre notebook Google Colab :

```python
plt.figure()
plt.imshow(train_images[0]) # Affiche la première image de l'ensemble de données sous forme de tracé ou de pixels de couleurs différentes
plt.colorbar() # Affiche la barre des couleurs sur la droite
plt.grid(False)
plt.show() # Affiche l'ensemble du tracé
```

{{% notice tip %}}

Notez que l'image générée comporte une barre de couleurs sur la gauche. Cette métrique indique que la chaussure utilise des valeurs de pixels comprises entre 0 et 255. Qu'est-ce qu'une valeur de pixel ? 

**Les pixels** sont la plus petite unité d'une image graphique (ou d'affichage) qu'un écran peut représenter. Pensez à l'écran de votre ordinateur ! Il y a des millions de petits points colorés qui, combinés, peuvent former une image d'un bateau ou le texte affiché sur votre écran. 

La barre de couleurs montre l'étendue de l'intensité des couleurs qu'un pixel peut afficher.  
![Image de botte avec une plage de pixels allant de 0 à 255](../media/a2q1.png "Botte pixelisée avec barre de couleurs")  
{{% /notice %}}

#### Question 1 :
Après avoir analysé la chaussure, nous souhaitons visualiser un autre article de l'échantillon de vêtements. Pouvez-vous deviner comment le faire en utilisant le bloc de code précédent ?  

{{% notice hint %}}
Utilisez le code du bloc précédent et changez la valeur de l'index dans `train_images[x]` pour obtenir une nouvelle image d'un article.  

Par exemple, si vous entrez la valeur d'index 7, vous obtiendrez l'article suivant :  
![Image de chemise](../media/a2progress2.png "Chemise pixelisée avec barre de couleurs")  

{{% /notice %}}

### Normaliser les valeurs de pixels :

Le programme que nous allons écrire prend en entrée des valeurs comprises entre 0 et 1. Cependant, nos valeurs de pixels sont essentiellement toutes supérieures à 1 ! En fait, la plage des valeurs va de 0 à 255. Comment pouvons-nous transformer cette plage de nombres pour qu'elle soit adaptée à notre programme ?  

Nous utiliserons un processus appelé **"normalisation"**, où nous transformons ces valeurs afin qu'elles s'inscrivent dans une plage allant de 0 à 1. Plus précisément, nous allons prendre toutes nos données et les diviser par une seule valeur afin que la plage soit désormais comprise entre 0 et 1.  

#### Question 2 :  
Pouvez-vous deviner par quel nombre nous devons diviser nos valeurs pour les normaliser ?  

{{% notice tip %}}
Si cela est confus, pensez aux pourcentages. Si vous avez un test noté sur 255 points au total et que vous obtenez 240 points corrects, vous diviserez 240 par 255 pour obtenir le pourcentage de réponses correctes. Nous effectuons un processus similaire ici.  

{{% /notice %}}

Copiez et collez le bloc de code suivant dans votre notebook Google Colab :

```python
# les train_images et test_images ont des valeurs comprises entre 0 et 255. 
# Pour maintenir la cohérence entre l'ensemble d'entraînement et celui de test, nous diviserons train_images et test_images par 255

train_images = train_images / 255.0 

test_images = test_images / 255.0
```