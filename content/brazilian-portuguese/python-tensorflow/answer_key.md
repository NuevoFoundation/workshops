---
title: "Gabarito"
date: 2020-09-14T16:19:17-07:00
weight: 15
draft: false
hidden: true
---

## Atividade 1
#### Tarefa 1:
```python
class_names = ['T-shirt/top', 'Trouser', 'Pullover', 'Dress', 'Coat','Sandal', 'Shirt', 'Sneaker', 'Bag', 'Ankle boot']
```

## Atividade 2
#### Pergunta 1:
```python
plt.figure()
plt.imshow(train_images[7])
plt.colorbar()
plt.grid(False)
plt.show()
```
#### Pergunta 2:
255! O valor máximo de pixel é 255 para qualquer índice usado.

## Atividade 3
#### Pergunta 1:
```python
plt.figure(figsize=(10,10))
for i in range(42):
    plt.subplot(6,7,i+1)
    plt.xticks([])
    plt.yticks([])
    plt.grid(False)
    plt.imshow(train_images[i], cmap=plt.cm.binary)
    plt.xlabel(class_names[train_labels[i]])
plt.show()
```
![Imagens 6x7](../media/PU2_42images.png "Imagens 6x7 com rótulos")

## Atividade 4
Respostas podem variar. Abaixo estão exemplos de saída:

### Pergunta 1
```python
model.fit(train_images, train_labels, epochs=2)
```
```
Epoch 1/2 ... accuracy: 0.8231
Epoch 2/2 ... accuracy: 0.8647
```
```python
test_loss, test_acc = model.evaluate(test_images, test_labels, verbose=2)
print('\nTest accuracy:', test_acc)
```
```
Test accuracy: 0.8604
```

### Pergunta 2
```python
model.fit(train_images, train_labels, epochs=10)
```
```
Última época: accuracy: 0.9088
test accuracy: 0.8812
```

### Pergunta 3
```python
model.fit(train_images, train_labels, epochs=20)
```
```
Última época: accuracy: 0.9335
test accuracy: 0.8892
```

### Pergunta 4
Existe uma correlação positiva: quanto mais épocas, maior a acurácia.

## Atividade 5
Usando a imagem do índice 0:
```python
plt.figure()
plt.imshow(train_images[0])
plt.colorbar()
plt.grid(False)
plt.show()
```
![Ankle Boot](../media/a2q1.png "Ankle Boot")

#### Pergunta 1
```python
predictions[0]
```
```
... 9.9285042e-01 (índice 9), índice 1 tem menor valor
```

#### Pergunta 2
```python
np.argmax(predictions[0])  # 9
test_labels[0]             # 9
class_names[9]             # 'Ankle boot'
```

## Atividade 6
Usando a imagem do índice 7:
```python
plt.imshow(train_images[7])
```
![Shirt](../media/a2progress2.png "Shirt")

```python
predictions[7]
```
```
... maior valor no índice 6 ('Shirt')
```
```python
np.argmax(predictions[7])  # 6
test_labels[7]             # 6
class_names[6]             # 'Shirt'
```

## Atividade 7
#### Pergunta 1
```python
img = test_images[7]
plot_value_array(7, predictions_single[0], test_labels)
_ = plt.xticks(range(10), class_names, rotation=45)
```
![Gráfico de Classificação](../media/PU3_graph.png)

```python
i = 7
plt.figure(figsize=(6,3))
plt.subplot(1,2,1)
plot_image(i, predictions[i], test_labels, test_images)
plt.subplot(1,2,2)
plot_value_array(i, predictions[i], test_labels)
plt.show()
```
![Imagem e Gráfico](../media/PU3_shirtandgraph.png)

Sim, é consistente com a resposta anterior.
