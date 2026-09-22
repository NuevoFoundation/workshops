```yaml
---
title: "Mise à jour des progrès 2"
date: 2020-03-27T20:24:33-07:00
prereq: "Bases de Python : Fonctions - Fonctions intégrées, Fonctions des bibliothèques ; Types de données - Chaînes, Nombres, Lecture depuis la console ; Structures de données - Listes, Tuples, Ensembles ; Boucles - Boucles For"
difficulties: ["intermédiaire"]
weight: 10
draft: false
---

Bon travail ! Vous êtes maintenant en mesure d'identifier avec succès à quelle catégorie une image appartient le plus probablement.

Pour vérifier que votre code est correct jusqu’à cette étape, veuillez comparer votre code avec l’exemple de code fourni ci-dessous.

{{% notice warning %}}
Les sorties du code peuvent varier. Vous n’avez besoin de copier que les blocs de code, et __pas__ les blocs de sortie, car ils seront générés automatiquement dans votre notebook.
{{% /notice %}}

## Comparez votre code

Avant de continuer, veuillez vérifier votre notebook Google Colab par rapport au code ci-dessous :


```python
plt.figure(figsize=(10,10)) # Définit la taille de l'image à 10x10 pixels
for i in range(25): # Affiche les 25 premières images avec leur nom de classe
    plt.subplot(5,5,i+1)
    plt.xticks([])
    plt.yticks([])
    plt.grid(False)
    plt.imshow(train_images[i], cmap=plt.cm.binary) 
    plt.xlabel(class_names[train_labels[i]])
plt.show() # Affiche les images avec leurs étiquettes

```
![images d'échantillons de vêtements, 5x5](../media/PU2_25images.png "Images d'échantillons de vêtements")

```python
# Création du réseau neuronal
model = keras.Sequential([ 
    keras.layers.Flatten(input_shape=(28, 28)), 
    keras.layers.Dense(128, activation='relu'),
    keras.layers.Dense(10)
])
```

```python
model.compile(optimizer='adam',
              loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True),
              metrics=['accuracy'])

```

```python
model.fit(train_images, train_labels, epochs=10) 
```

```
Epoch 1/10
1875/1875 [==============================] - 4s 2ms/step - loss: 0.4990 - accuracy: 0.8247
Epoch 2/10
1875/1875 [==============================] - 4s 2ms/step - loss: 0.3754 - accuracy: 0.8658
Epoch 3/10
1875/1875 [==============================] - 4s 2ms/step - loss: 0.3374 - accuracy: 0.8771
Epoch 4/10
1875/1875 [==============================] - 4s 2ms/step - loss: 0.3110 - accuracy: 0.8859
Epoch 5/10
1875/1875 [==============================] - 4s 2ms/step - loss: 0.2935 - accuracy: 0.8903
Epoch 6/10
1875/1875 [==============================] - 4s 2ms/step - loss: 0.2823 - accuracy: 0.8942
Epoch 7/10
1875/1875 [==============================] - 4s 2ms/step - loss: 0.2682 - accuracy: 0.9002
Epoch 8/10
1875/1875 [==============================] - 4s 2ms/step - loss: 0.2575 - accuracy: 0.9041
Epoch 9/10
1875/1875 [==============================] - 4s 2ms/step - loss: 0.2479 - accuracy: 0.9074
Epoch 10/10
1875/1875 [==============================] - 4s 2ms/step - loss: 0.2417 - accuracy: 0.9088
<tensorflow.python.keras.callbacks.History at 0x7f2b4a7cb7b8>
```

```python
test_loss, test_acc = model.evaluate(test_images,  test_labels, verbose=2)

print('\nTest accuracy:', test_acc)
```

```
313/313 - 0s - loss: 0.3358 - accuracy: 0.8825

Test accuracy: 0.8824999928474426
```

```python
probability_model = tf.keras.Sequential([model, tf.keras.layers.Softmax()])
```

```python
predictions = probability_model.predict(test_images)
```

```python
predictions[7] # Renvoie l'indice avec la probabilité la plus élevée, dépend de la valeur de l'indice.
```

```
array([3.5166186e-06, 5.8611111e-12, 7.3947496e-04, 3.9665038e-06,
       2.8206115e-03, 9.7542063e-08, 9.9643230e-01, 8.2940481e-11,
       1.2411938e-07, 2.7266096e-09], dtype=float32)
```

```python
np.argmax(predictions[7]) # Cela renvoie la valeur de l'indice avec les prédictions les plus élevées
```

```
6
```

```python
test_labels[7]  # Cela correspond à la valeur de l'indice retournée par le jeu de données de test
                # (Avec lequel nous effectuons la comparaison)
```

```
6
```

```python
class_names[6] # Ceci est le nom de la catégorie de l'image ayant la plus grande probabilité
```

```
'Chemise'
```

<br />
<br />

Maintenant que nous sommes capables de classer la catégorie d’un vêtement individuel à l’aide de votre modèle, nous allons à présent visualiser ces prédictions en créant un graphique en barres pour une image spécifique.

<br />
<br />

{{% notice info %}}

Si vous souhaitez tester le code ci-dessus, rendez-vous sur <a href="https://colab.research.google.com/drive/1knoCeFRtcUbp1HyKKEQgYw9tgZsUeDk0?usp=sharing" target="_blank">ce lien</a> 

Pour modifier ce code, cliquez sur le bouton 'Copier dans Drive' pour créer une copie personnelle de ce notebook. Assurez-vous d'être connecté à votre compte Google.

{{% notice warning %}}
### Si vous utilisez temporairement un compte Google Nuevo
Une fois la copie effectuée, veuillez vous assurer de remplacer le "Copy of" par votre nom, ainsi que dans le nom