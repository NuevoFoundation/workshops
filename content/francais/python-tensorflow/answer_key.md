```yaml
---
title: "Answer Key"
date: 2020-09-14T16:19:17-07:00
weight: 15
draft: false
hidden: true
---

## Activité 1
#### Tâche 1:

```python
class_names = ['T-shirt/top', 'Trouser', 'Pullover', 'Dress', 'Coat','Sandal', 'Shirt', 'Sneaker', 'Bag', 'Ankle boot']  
```

## Activité 2
#### Question 1:
```python
plt.figure()
plt.imshow(train_images[7]) #Affiche la première image dans le set de données sous forme de graphique ou de pixels colorés différents
plt.colorbar() #Affiche la barre de couleur à droite
plt.grid(False)
plt.show() #Affiche le graphique complet
```
#### Question 2: 
255!
La valeur maximale d'un pixel est 255 pour tout index utilisé.

## Activité 3
#### Question 1:
Pour répondre à la question Q1, vous devez modifier votre code comme suit :
```python
plt.figure(figsize=(10,10)) #Définit la taille de l'image à 10x10 pixels
for i in range(42): #Affiche les 42 premières images avec leur nom de classe
    plt.subplot(6,7,i+1)
    plt.xticks([])
    plt.yticks([])
    plt.grid(False)
    plt.imshow(train_images[i], cmap=plt.cm.binary) 
    plt.xlabel(class_names[train_labels[i]])
plt.show() #Affiche les images avec leurs étiquettes 
```
![images 6x7](../media/PU2_42images.png "images 6x7 avec étiquettes")


## Activité 4
Les réponses peuvent varier, des réponses d'exemple sont fournies ci-dessous :
### Question 1

```python
model.fit(train_images, train_labels, epochs=2) #Les epochs déterminent combien de fois un modèle est entraîné
```
```
Epoch 1/2
1875/1875 [==============================] - 4s 2ms/step - loss: 0.5024 - accuracy: 0.8231
Epoch 2/2
1875/1875 [==============================] - 4s 2ms/step - loss: 0.3761 - accuracy: 0.8647
<tensorflow.python.keras.callbacks.History at 0x7f909cbb2208>
```

```python
test_loss, test_acc = model.evaluate(test_images,  test_labels, verbose=2)

print('\nTest accuracy:', test_acc)
```
```
313/313 - 0s - loss: 0.3899 - accuracy: 0.8604

Précision du test : 0.8604000210762024
```

La précision de l'Epoch 2 est .8647 et la précision du test lorsque le modèle entraîné est comparé au jeu de données de test est .8604.

#### Question 2
```python
model.fit(train_images, train_labels, epochs=10) #Les epochs déterminent combien de fois un modèle est entraîné
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
313/313 - 0s - loss: 0.3461 - accuracy: 0.8812

Précision du test : 0.8812000155448914
```

La précision de l'Epoch 10 est .9088 et la précision du test lorsque le modèle entraîné est comparé au jeu de données de test est .8812.


#### Question 3

```python
model.fit(train_images, train_labels, epochs=20) #Les epochs déterminent combien de fois un modèle est entraîné
```
```
Epoch 1/20
1875/1875 [==============================] - 5s 3ms/step - loss: 0.4935 - accuracy: 0.8268
Epoch 2/20
1875/1875 [==============================] - 4s 2ms/step - loss: 0.3769 - accuracy: 0.8639
Epoch 3/20
1875/1875 [==============================] - 4s 2ms/step - loss: 0.3387 - accuracy: 0.8776
Epoch 4/20
1875/1875 [==============================] - 4s 2ms/step - loss: 0.3113 - accuracy: 0.8858
Epoch 5/20
1875/1875 [==============================] - 4s 2ms/step - loss: 0.2966 - accuracy: 0.8903
Epoch 6/20
1875/1875 [==============================] - 4s 2ms/step