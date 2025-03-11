---
title: "Atualização de progresso 2"
date: 2020-03-27T20:24:33-07:00
prereq: "Python: Fundamentos - Funções: Funções Integradas, Funções de Bibliotecas; Tipos de Dados – Strings, Números, Leitura do Console; Estruturas de Dados - Listas; Loops - For Loops"
difficulty: Intermediário
weight: 10
draft: false
---

Bom trabalho! Agora você é capaz de identificar em qual categoria uma imagem provavelmente se enquadra.

Para verificar se seu código está correto até este ponto de verificação, compare seu código com o código de exemplo fornecido abaixo.

{{% notice warning %}}
As saídas do código podem variar. Você só precisa copiar os blocos de código e __não__ os blocos de saída, pois eles serão gerados automaticamente em seu notebook.
{{% /notice %}}

## Compare seu código

Antes de prosseguir, verifique seu notebook do Google Colab com o código abaixo:



```python
plt.figure(figsize=(10,10)) #define o tamanho da imagem para 10x10 pixels
for i in range(25): #exibe as primeiras 25 imagens com o nome da classe
    plt.subplot(5,5,i+1)
    plt.xticks([])
    plt.yticks([])
    plt.grid(False)
    plt.imshow(train_images[i], cmap=plt.cm.binary) 
    plt.xlabel(class_names[train_labels[i]])
plt.show() #mostra imagens com seus rótulos

```
![imagens de amostra de roupas, 5x5](../media/PU2_25images.png)

```python
#Construindo a Rede Neural
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
<tensorflow.python.keras.callbacks.History at 0x7f2b4a7cb7b8>pythonÉpor
```

```python
test_loss, test_acc = model.evaluate(test_images,  test_labels, verbose=2)

print('\nTest accuracy:', test_acc)
```

```
313/313 - 0s - perda: 0,3358 - precisão: 0,8825

Precisão do teste: 0,8824999928474426
```

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

<br />
<br />

Agora que podemos classificar a categoria de uma peça de roupa individual usando seu modelo, visualizaremos essas previsões criando um gráfico de barras para uma imagem específica.

<br />
<br />

{{% notice info %}}

Se quiser testar o código acima, visite <a href="https://colab.research.google.com/drive/1knoCeFRtcUbp1HyKKEQgYw9tgZsUeDk0?usp=sharing" target="_blank">este link</a>

Para editar este código, clique no botão ‘Copy to Drive’ para fazer uma cópia pessoal deste notebook. Certifique-se de estar conectado à sua conta do Google.

{{% notice warning %}}
### Se você estiver usando uma conta Nuevo Google temporariamente
Depois de fazer uma cópia, certifique-se de substituir "Cópy of" pelo seu nome, junto com o nome do arquivo. Ele estará no canto superior esquerdo do seu notebook.
{{% /notice %}}

{{% /notice %}}