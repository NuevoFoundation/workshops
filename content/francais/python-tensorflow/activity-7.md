---
title: "Activité 7 - Tracer la Catégorie Prédite d'une Image"
date: 2020-09-09T16:19:17-07:00
prereq: "Bases de Python : Fonctions - Fonctions intégrées, Fonctions de bibliothèques ; Types de données - Chaînes, Nombres, Lecture depuis la console ; Structures de données - Listes"
difficulties: ["intermédiaire"]
weight: 12
draft: false
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/pwZDPj4yIsM" title="Activité 7 - Tracer la Catégorie Prédite d'une Image - Vidéo YouTube" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Tracer la Catégorie d'une Image
</br>
Vous vous souvenez peut-être que, lorsque nous traçions les modèles, l'axe des x des graphiques était étiqueté avec les nombres de 1 à 9. Ceux-ci correspondent aux catégories d'articles que nous avons définies plus tôt dans l'atelier, c'est-à-dire t-shirt/haut, pantalon, pull, robe, manteau, sandale, chemise, basket, sac, et bottine. 
</br>

![Tracer la Figure 2 d'un Modèle d'une basket](../media/Plotting_fig2.png "Basket pixelisée avec barre de couleurs")

</br>
Nous ajusterons l'étiquetage de l'axe des x afin que les données affichées soient plus faciles à comprendre. 
</br>
</br>
Copiez et collez le code suivant dans votre notebook Google Colab :

```python
img = test_images[0] # Prenez une image du jeu de données de test.
# NOTE : Cet index sera changé et son tracé correspondant sera affiché dans les prochaines étapes

print(img.shape) # Cela montre la résolution de l'image. 
```


```python
img = (np.expand_dims(img,0)) # Cela agrandit le tableau img 

print(img.shape)
```

```python
# Cela donne le niveau de confiance associés à chaque catégorie. 
# Par exemple, la probabilité que l'image soit un T-shirt est 5.2198538e-07.
predictions_single = probability_model.predict(img)

print(predictions_single)
```

```python
plot_value_array(0, predictions_single[0], test_labels)  

# Tracez le graphique et étiquetez l'axe x avec les class_names 
# ou autrement appelés les catégories créées dans l'Activité 1
_ = plt.xticks(range(10), class_names, rotation=45)
```

Pour vérifier la valeur de l'index ayant la probabilité la plus élevée, nous utilisons le code suivant.

```python
# Le résultat de ce code nous indique quelle catégorie d'article vestimentaire
# a la probabilité la plus élevée
np.argmax(predictions_single[0]) 
```

## Expérimenter avec les Graphiques

Dans le premier segment de code de cette activité, modifiez la valeur d'index pour le tableau `test_images` à un nombre de votre choix.

### Question 1
Dans `plot_value_array`, changez le premier paramètre par le même numéro d'index utilisé précédemment. Quel nom de classe a la probabilité la plus élevée ?

Vérifiez votre réponse en exécutant le code ci-dessous pour afficher l'image spécifiée et le graphique de la catégorie prédite par le modèle.

Est-ce cohérent avec la réponse à votre question précédente ?

```python
i = votre_valeur_désirée   # On peut constater que cette image détecte le bon nom de classe pour l'image
plt.figure(figsize=(6,3))
plt.subplot(1,2,1)
plot_image(i, predictions[i], test_labels, test_images)
plt.subplot(1,2,2)
plot_value_array(i, predictions[i],  test_labels)
plt.show()
```