---
title: "Tracer le modèle et ses prédictions"
date: 2020-09-09T16:19:17-07:00
prereq: "Notions de base en Python : Fonctions - Fonctions intégrées, fonctions de bibliothèques ; Types de données - Chaînes, Nombres, Lecture depuis la console ; Structures de données - Listes, Tuples, Ensembles ; Boucles - Boucles For"
difficulties: ["intermédiaire"]
weight: 11
draft: false
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/FrO66fkSU7M" title="Tracer le modèle et ses prédictions - Vidéo YouTube" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</br>
</br>

Maintenant que nous sommes capables de classifier la catégorie d'un vêtement individuel à l'aide de notre modèle, nous allons visualiser ces prédictions en créant un diagramme en barres pour une image spécifiée.

## Classification prédite

La fonction `plot_image` affiche une image accompagnée de sa classification prédite, du niveau de confiance du modèle pour cette catégorie, et de la classification réelle (qui est donnée comme référence).

{{% notice tip %}}
Un **niveau de confiance** sert à indiquer à quel point nous sommes confiants ou certains que notre réponse est correcte. Si vous devez prédire s'il pleuvra demain, vos réponses possibles sont oui ou non. Mais que se passe-t-il si vous n'êtes pas totalement sûr de votre réponse ? Si le météorologue prévoit de la pluie pour demain, vous pourriez dire que vous êtes confiant à 90%. Cela signifie que vous êtes plutôt sûr qu'il pleuvra demain, mais cela nous dit également que vous pensez qu'il y a 10% de chances que vous vous trompiez.

Un plus faible niveau de confiance indique que vous êtes moins certain que votre réponse est correcte et que vous êtes susceptible de vous tromper ou de faire une erreur. Plus le niveau de confiance est proche de 100, plus nous sommes certains de notre prédiction.

{{% /notice %}}

Copiez la fonction `plot_image` dans votre Google Colab Notebook : 
</br>

```python
def plot_image(i, predictions_array, true_label, img):
  true_label, img = true_label[i], img[i]
  plt.grid(False)
  plt.xticks([])
  plt.yticks([])

  plt.imshow(img, cmap=plt.cm.binary)

  predicted_label = np.argmax(predictions_array)
  if predicted_label == true_label:
    color = 'blue'
  else:
    color = 'red'

  plt.xlabel("{} {:2.0f}% ({})".format(class_names[predicted_label],
                                100*np.max(predictions_array),
                                class_names[true_label]),
                                color=color)
```

## Visualisation des valeurs de confiance

La fonction `plot_value_array` trace les valeurs de confiance générées par le modèle sous forme de graphique en barres.

L'axe des ordonnées du graphique affichera le niveau de confiance, tandis que l'axe des abscisses représentera la catégorisation des objets (t-shirt/top, pantalon, pull-over, robe, manteau, sandale, chemise, basket, sac, ou bottine).

Copiez la fonction `plot_value_array` dans votre Google Colab Notebook : 

```python 
def plot_value_array(i, predictions_array, true_label):
  true_label = true_label[i]
  plt.grid(False)
  plt.xticks(range(10))
  plt.yticks([])
  thisplot = plt.bar(range(10), predictions_array, color="#777777")
  plt.ylim([0, 1])
  predicted_label = np.argmax(predictions_array)

  thisplot[predicted_label].set_color('red')
  thisplot[true_label].set_color('blue')
```

## Utiliser les fonctions

Nous utiliserons le code suivant pour appeler les fonctions que nous avons écrites précédemment. Copiez le snippet dans votre Google Colab Notebook. 

```python
i = 0   
plt.figure(figsize=(6,3))
plt.subplot(1,2,1)
plot_image(i, predictions[i], test_labels, test_images)
plt.subplot(1,2,2)
plot_value_array(i, predictions[i],  test_labels)
plt.show()
```

![Diagramme modèle figure 1 d'une bottine](../media/Plotting_fig1.png "Diagramme modèle figure 1 d'une bottine")

Nous pouvons voir que notre modèle prédit cet objet comme étant une bottine. Quelle est la confiance du modèle dans cette prédiction ? 99% de confiance. La catégorie entre parenthèses correspond à la catégorisation correcte de l'objet. Dans ce cas, le modèle a détecté correctement l'objet.  
</br>
</br>
Gardez à l'esprit que tous les modèles ne sont pas parfaits. Les modèles peuvent se tromper dans leurs prédictions, comme nous le verrons dans l'exemple suivant.  
</br>

Nous utiliserons le même code qu'auparavant, mais testerons la confiance avec un autre objet. Réglez `i` à une nouvelle valeur, comme 12.

```python
i = 12 
plt.figure(figsize=(6,3))
plt.subplot(1,2,1)
plot_image(i, predictions[i], test_labels, test_images)
plt.subplot(1,2,2)
plot_value_array(i, predictions[i],  test_labels)
plt.show()
```

![Diagramme modèle figure 2 d'une basket](../media/Plotting_fig2.png "Diagramme modèle figure 2 d'une basket")

Dans cet exemple, nous voyons que le modèle a prédit l'objet comme étant une sandale avec une confiance de 96%. Cependant, nous constatons que l'identification correcte de l'objet est une basket. Le graphique montre que le modèle a également prédit cet objet comme étant une basket avec environ 3% de confiance ou une bottine avec environ 1% de confiance. 

## Plus d'exemples

Pour voir plus d'exemples de prédictions du modèle, tracez les 25 premières images de test, leurs étiquettes prédites, et les vraies étiquettes. Comme précédemment, les prédictions correctes seront affichées en bleu et les prédictions incorrectes en rouge.

Copiez ce code dans votre Google Colab Notebook : 

```python
num_rows = 5
num_cols = 5
num_images = num_rows*num_cols
plt.figure(figsize=(2*2*num_cols, 2*num_rows))
for i in range(num_images):
  plt.subplot(num_rows, 2*num_cols, 2*i+1)
  plot_image(i, predictions[i], test_labels, test_images)
  plt.subplot(num_rows, 2*num_cols, 2*i+2)
  plot_value_array(i, predictions[i], test_labels)
plt.tight_layout()
plt.show()
```
![Diagramme modèle figure 3, 5x5 images et leurs prédictions de modèle](../