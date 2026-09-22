```markdown
---
title: "Mise à jour de progrès 3"
date: 2020-09-09T16:19:17-07:00
prereq: "Python Basics : Fonctions - Fonctions intégrées, Fonctions provenant de bibliothèques ; Types de données - Chaînes, Nombres, Lecture depuis la console ; Structures de données - Listes, Tuples, Ensembles ; Boucles - Boucles For"
difficulties: ["intermédiaire"]
weight: 13
draft: false
---
Bon travail ! Vous êtes presque à la fin !

Pour vérifier que votre code est correct jusqu'à ce point, veuillez comparer votre code avec l'exemple de code fourni ci-dessous.

{{% notice warning %}}
Les résultats du code peuvent varier. Vous devez uniquement copier les blocs de code, et __pas__ les blocs de sortie, car ceux-ci seront générés automatiquement dans votre notebook.
{{% /notice %}}

## Comparez votre code

Avant de continuer, veuillez vérifier votre notebook Google Colab avec le code ci-dessous :

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
```python
i = 0   
plt.figure(figsize=(6,3))
plt.subplot(1,2,1)
plot_image(i, predictions[i], test_labels, test_images)
plt.subplot(1,2,2)
plot_value_array(i, predictions[i],  test_labels)
plt.show()
```
![Tracer Figure 1](../media/Plotting_fig1.png "Tracer Figure 1")

```python
i = 12 
plt.figure(figsize=(6,3))
plt.subplot(1,2,1)
plot_image(i, predictions[i], test_labels, test_images)
plt.subplot(1,2,2)
plot_value_array(i, predictions[i],  test_labels)
plt.show()
```
![Tracer Figure 2](../media/Plotting_fig2.png "Tracer Figure 2")

```python
# Tracer 6 images
num_rows = 3
num_cols = 2
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
![Tracer 6 images](../media/PU3_6images.png "Tracer 6 images")

```python
# Tracer 25 images
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

![Tracer 25 images](../media/Plotting_fig3.png "Tracer 25 images")

```python
# Récupérer une image du jeu de données de test. Cela montre la résolution de l'image. 

# REMARQUE : Cet index sera changé et son tracé correspondant sera affiché dans les prochaines étapes
img = test_images[7]

print(img.shape)
```

```
(28, 28)
```

```python
# Ajoutez l'image à une batch où elle est le seul élément.
img = (np.expand_dims(img,0))

print(img.shape)
```

```
(1, 28, 28)
```

```python
predictions_single = probability_model.predict(img)

print(predictions_single)
```

```
[[3.5166083e-06 5.8611553e-12 7.3947426e-04 3.9665074e-06 2.8206140e-03
  9.7541879e-08 9.9643230e-01 8.2940162e-11 1.2411914e-07 2.7266043e-09]]
```

```python
plot_value_array(7, predictions_single[0], test_labels)  #tracez le graphique contenant tous les noms de classe
_ = plt.xticks(range(10), class_names, rotation=45)
```

![Diagramme de classification](../media/PU3_graph.png "Diagramme de classification")

```python
np.argmax(predictions_single[0]) #Vérification de la valeur d'index avec la probabilité la plus élevée
```
```
6
```

```python
i = 7   #Nous pouvons voir que cette image détecte le bon nom de classe pour l'image
plt.figure(figsize=(6,3))
plt.subplot(1,2,1)
plot_image(i, predictions[i], test_labels, test_images)
plt.subplot(1,2,2)
plot_value_array(i, predictions[i],  test_labels)
plt.show()
```
![Image et graphique](../media/PU3_shirtandgraph.png "Image et graphique")

{{% notice info %}}

Si vous souhaitez tester le code ci-dessus, rendez-vous sur <a href="https://colab.research.google.com/drive/1yrUcfMw8H9XbfJ8USITjErpRpBQrl_Sf?usp=sharing" target="_blank">ce lien</a> 

Pour éditer ce code, cliquez sur le bouton 'Copy to Drive' pour créer une copie personnelle de ce notebook. Assurez-vous que vous êtes connecté à votre compte Google.

{{% notice warning %}}
### Si vous utilisez temporairement un compte Google Nuevo
Une fois que vous avez fait une copie, veuillez vous assurer de remplacer "Copy of" par votre nom, ainsi que le nom du fichier. Cela se trouve