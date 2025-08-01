---
title: "Atualização de Progresso 2"
date: 2020-03-27T20:24:33-07:00
prereq: "Fundamentos de Python: Funções - Funções integradas, Funções de bibliotecas; Tipos de Dados - Strings, Números, Leitura do console; Estruturas de Dados - Listas, Tuplas, Conjuntos; Laços - Laços For"
difficulty: Intermediário
weight: 10
draft: false
---

Ótimo trabalho! Agora você já consegue identificar corretamente a qual categoria uma imagem provavelmente pertence.

Para verificar se seu código está correto até este ponto, compare com o exemplo abaixo.

{{% notice warning %}}
A saída dos códigos pode variar. Você só precisa copiar os blocos de **código**, **não** os blocos de saída, pois estes serão gerados automaticamente no notebook.
{{% /notice %}}

## Compare seu Código

Antes de continuar, confira seu notebook do Google Colab com o código abaixo:

```python
plt.figure(figsize=(10,10))
for i in range(25):
    plt.subplot(5,5,i+1)
    plt.xticks([])
    plt.yticks([])
    plt.grid(False)
    plt.imshow(train_images[i], cmap=plt.cm.binary)
    plt.xlabel(class_names[train_labels[i]])
plt.show()
```

![Amostras de roupas, 5x5](../media/PU2_25images.png "Imagens de roupas em grade 5x5")

```python
# Construindo a Rede Neural
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

```python
test_loss, test_acc = model.evaluate(test_images,  test_labels, verbose=2)

print('\nAcurácia de teste:', test_acc)
```

```python
probability_model = tf.keras.Sequential([model, tf.keras.layers.Softmax()])
```

```python
predictions = probability_model.predict(test_images)
```

```python
predictions[7]
```

```python
np.argmax(predictions[7])
```

```python
test_labels[7]
```

```python
class_names[6] # Resultado esperado: 'Camisa'
```

<br />
Agora que conseguimos classificar a categoria de uma peça de roupa usando o modelo, vamos visualizar essas previsões com um gráfico de barras para uma imagem específica.

<br />

{{% notice info %}}
Se quiser testar o código acima, visite <a href="https://colab.research.google.com/drive/1knoCeFRtcUbp1HyKKEQgYw9tgZsUeDk0?usp=sharing" target="_blank">este link</a>.

Para editar o código, clique em "Copy to Drive" para fazer uma cópia pessoal do notebook. Certifique-se de estar logado com sua conta Google.

{{% notice warning %}}
### Se estiver usando uma conta Google temporária (Nuevo)
Após copiar, renomeie o arquivo removendo "Copy of" e colocando seu nome no canto superior esquerdo do notebook.
{{% /notice %}}

{{% /notice %}}