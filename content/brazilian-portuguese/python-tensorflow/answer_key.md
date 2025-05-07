---
title: "Resposta Chave"
date: 2020-09-14T16:19:17-07:00
weight: 15
draft: false
hidden: true
---

## Atividade 1
#### Tarefa 1:

```python
class_names = ['Camiseta', 'Calças', 'Pulôver', 'Vestido', 'Casaco', 'Sandália', 'Camisa', 'Tênis', 'Bolsa', 'Bota']  
```

## Atividade 2
#### Questão 1:
```python
plt.figure()
plt.imshow(train_images[7]) #Mostra a primeira imagem no conjunto de dados como um gráfico ou pixels de cores diferentes
plt.colorbar() #exibe a barra de cores à direita
plt.grid(False)
plt.show() #exibe todo o gráfico
```
#### Questão 2:
255!
O valor máximo de pixel é 255 para qualquer índice usado.

## Atividade 3
#### Questão 1:
Para responder à Q1, você alteraria seu código para o seguinte:
```python
plt.figure(figsize=(10,10)) #define o tamanho da imagem para 10x10 pixels
for i in range(42): #exibe as primeiras 42 imagens com o nome da classe
    plt.subplot(6,7,i+1)
    plt.xticks([])
    plt.yticks([])
    plt.grid(False)
    plt.imshow(train_images[i], cmap=plt.cm.binary) 
    plt.xlabel(class_names[train_labels[i]])
plt.show() #mostra imagens com seus rótulos
```
![imagens 6x7](../media/PU2_42images.png)


## Atividade 4
As respostas podem variar. Exemplos de respostas são fornecidos abaixo:
### Questão 1

```python
model.fit(train_images, train_labels, epochs=2) #epochs determinam quantas vezes um modelo é treinado
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

Test accuracy: 0.8604000210762024
```

A precisão de Epoch 2 é 0,8647 e a precisão do teste quando o modelo treinado é comparado com o conjunto de dados de teste é 0,8604.

#### Questão 2
```python
model.fit(train_images, train_labels, epochs=10) #epochs determinam quantas vezes um modelo é treinado
```
```
Epoch 1/10
1875/1875 [==============================] - 4s 2ms/passo - perda: 0,4990 - precisão: 0,8247
Epoch 2/10
1875/1875 [==============================] - 4s 2ms/passo - perda: 0,3754 - precisão: 0,8658
Epoch 3/10
1875/1875 [==============================] - 4s 2ms/passo - perda: 0,3374 - precisão: 0,8771
Epoch 4/10
1875/1875 [==============================] - 4s 2ms/passo - perda: 0,3110 - precisão: 0,8859
Epoch 5/10
1875/1875 [==============================] - 4s 2ms/passo - perda: 0,2935 - precisão: 0,8903
Epoch 6/10
1875/1875 [==============================] - 4s 2ms/passo - perda: 0,2823 - precisão: 0,8942
Epoch 7/10
1875/1875 [==============================] - 4s 2ms/passo - perda: 0,2682 - precisão: 0,9002
Epoch 8/10
1875/1875 [==============================] - 4s 2ms/passo - perda: 0,2575 - precisão: 0,9041
Epoch 9/10
1875/1875 [==============================] - 4s 2ms/passo - perda: 0,2479 - precisão: 0,9074
Epoch 10/10
1875/1875 [==============================] - 4s 2ms/passo - perda: 0,2417 - precisão: 0,9088
<tensorflow.python.keras.callbacks.History at 0x7f2b4a7cb7b8>
```
```python
test_loss, test_acc = model.evaluate(test_images,  test_labels, verbose=2)

print('\nTest accuracy:', test_acc)
```
```
313/313 - 0s - perda: 0.3461 - precisão: 0.8812

Precisão do teste: 0.8812000155448914
```

A precisão do Epoch 10 é 0,9088 e a precisão do teste quando o modelo treinado é comparado com o conjunto de dados de teste é 0,8812.


#### Questão 3

```python
model.fit(train_images, train_labels, epochs=20) #epochs determinam quantas vezes um modelo é treinado
```
```
Epoch 20/01
1875/1875 [==============================] - 5s 3ms/passo - perda: 0,4935 - precisão: 0,8268
Epoch 20/02
1875/1875 [==============================] - 4s 2ms/passo - perda: 0,3769 - precisão: 0,8639
Epoch 20/03
1875/1875 [==============================] - 4s 2ms/passo - perda: 0,3387 - precisão: 0,8776
Epoch 20/04
1875/1875 [==============================] - 4s 2ms/passo - perda: 0,3113 - precisão: 0,8858
Epoch 20/05
1875/1875 [==============================] - 4s 2ms/passo - perda: 0,2966 - precisão: 0,8903
Epoch 20/06
1875/1875 [==============================] - 4s 2ms/passo - perda: 0,2803 - precisão: 0,8957
Epoch 20/07
1875/1875 [==============================] - 4s 2ms/passo - perda: 0,2679 - precisão: 0,9008
Epoch 20/08
1875/1875 [==============================] - 4s 2ms/passo - perda: 0,2565 - precisão: 0,9049
Epoch 20/09
1875/1875 [==============================] - 4s 2ms/passo - perda: 0,2475 - precisão: 0,9083
Epoch 20/10
1875/1875 [==============================] - 4s 2ms/passo - perda: 0,2399 - precisão: 0,9103
Epoch 20/11
1875/1875 [==============================] - 4s 2ms/passo - perda: 0,2298 - precisão: 0,9141
Epoch 20/12
1875/1875 [==============================] - 3s 2ms/passo - perda: 0,2235 - precisão: 0,9163
Epoch 13/20
1875/1875 [==============================] - 4s 2ms/passo - perda: 0,2165 - precisão: 0,9190
Epoch 14/20
1875/1875 [==============================] - 4s 2ms/passo - perda: 0,2105 - precisão: 0,9206
Epoch 15/20
1875/1875 [==============================] - 4s 2ms/passo - perda: 0,2035 - precisão: 0,9240
Epoch 16/20
1875/1875 [==============================] - 4s 2ms/passo - perda: 0,1978 - precisão: 0,9253
Epoch 17/20
1875/1875 [==============================] - 4s 2ms/passo - perda: 0,1918 - precisão: 0,9285
Epoch 18/20
1875/1875 [==============================] - 4s 2ms/passo - perda: 0,1877 - precisão: 0,9286
Epoch 19/20
1875/1875 [==============================] - 4s 2ms/passo - perda: 0,1820 - precisão: 0,9313
Epoch 20/20
1875/1875 [==============================] - 4s 2ms/passo - perda: 0,1762 - precisão: 0,9335
<tensorflow.python.keras.callbacks.History at 0x7f90ac950550>
```

```python
test_loss, test_acc = model.evaluate(test_images,  test_labels, verbose=2)

print('\nTest accuracy:', test_acc)
```
```
313/313 - 0s - perda: 0.3648 - precisão: 0.8892

Precisão do teste: 0.88919997215271
```

A precisão da última epoch, Epoch 20, é 0,9335 e a precisão do teste quando o modelo treinado é comparado com o conjunto de dados de teste é 0,8892.

#### Pergunta 4
Vemos uma correlação positiva. À medida que aumentamos o número de Epochs, há mais dados para treinar o modelo, portanto a precisão aumenta.

## Atividade 5
Para esta atividade, usaremos esta imagem.
```python
plt.figure()
plt.imshow(train_images[0]) #Mostra a primeira imagem no conjunto de dados como um gráfico ou pixels de cores diferentes
plt.colorbar() #exibe a barra de cores à direita
plt.grid(False)
plt.show() #exibe todo o gráfico
```
![Bota](../media/a2q1.png)

#### Questão 1
```python
probability_model = tf.keras.Sequential([model, tf.keras.layers.Softmax()])
```
```python
predictions = probability_model.predict(test_images)
```
```python
predictions[0] #Retorna o índice com maior probabilidade, depende do valor do índice.
```
```
array([1.1623413e-08, 2.3745208e-08, 3.5589391e-08, 1.2773025e-09,
       5.3400743e-08, 2.0998505e-04, 7.4230536e-07, 6.9385571e-03,
       2.8271037e-07, 9.9285042e-01], dtype=float32)
```

![](https://i.imgur.com/td1b4Jk.png)

O índice 9 tem o valor de confiança mais alto e o índice 1 tem o valor de confiança mais baixo.

#### Questão 2
```python
np.argmax(predictions[0]) # Isso retorna o valor do índice com as previsões mais altas
```
```
9
```

```python
test_labels[0]  # Este é o valor do índice retornado pelo conjunto de dados de teste
                # (Com o qual estamos comparando)
```
```
9
```

```python
class_names[9] # Este é o nome da categoria da imagem que tem a maior probabilidade
```
```
'Bota'
```


![](https://i.imgur.com/XeZoptk.png)

Isto corresponde à categoria 'Bota'.

## Atividade 6
Para esta resposta, usaremos esta imagem. Sinta-se à vontade para usar qualquer imagem que desejar do conjunto de dados, mas certifique-se de ser consistente com os valores.
```python
plt.figure()
plt.imshow(train_images[7]) #Mostra a primeira imagem no conjunto de dados como um gráfico ou pixels de cores diferentes
plt.colorbar() #exibe a barra de cores à direita
plt.grid(False)
plt.show() #exibe todo o gráfico
```
![Camisa](../media/a2progress2.png)

```python
probability_model = tf.keras.Sequential([model, tf.keras.layers.Softmax()])
```
```python
predictions = probability_model.predict(test_images)
```
```python
predictions[7] #Retorna o índice com maior probabilidade, depende do valor do índice.
```
```
array([3.5166186e-06, 5.8611111e-12, 7.3947496e-04, 3.9665038e-06,
       2.8206115e-03, 9.7542063e-08, 9.9643230e-01, 8.2940481e-11,
       1.2411938e-07, 2.7266096e-09], dtype=float32)
```
O índice 6 possui o valor de confiança e o índice 7 possui o menor valor de confiança.

```python
np.argmax(predictions[7]) # Isso retorna o valor do índice com as previsões mais altas
```
```
6
```

```python
test_labels[7]  # Este é o valor do índice retornado pelo conjunto de dados de teste
                # (Com o qual estamos comparando)
```
```
6
```

```python
class_names[6] # Este é o nome da categoria da imagem que tem a maior probabilidade
```
```
'Camisa'
```

Isso corresponde à categoria 'Camisa'.

## Atividade 7

#### Questão 1
```python
# Obtenha uma imagem do conjunto de dados de teste. Isso mostra a resolução da imagem.

#NOTE: Este índice será alterado e seu gráfico correspondente será exibido nas próximas etapas
img = test_images[7]

print(img.shape)
```

```python
plot_value_array(7, predictions_single[0], test_labels)  #plote o gráfico contendo todos os nomes de classes
_ = plt.xticks(range(10), class_names, rotation=45)
```
![Gráfico de classificação](../media/PU3_graph.png)



```python
i = 7   #Podemos ver que esta imagem detecta o nome de classe correto para a imagem
plt.figure(figsize=(6,3))
plt.subplot(1,2,1)
plot_image(i, predictions[i], test_labels, test_images)
plt.subplot(1,2,2)
plot_value_array(i, predictions[i],  test_labels)
plt.show()
```
![Imagem e Gráfico](../media/PU3_shirtandgraph.png)


Sim, isso é consistente com a pergunta anterior.

