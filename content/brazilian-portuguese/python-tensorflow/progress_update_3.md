---
title: "Atualização de Progresso 3"
date: 2020-09-09T16:19:17-07:00
prereq: "Fundamentos de Python: Funções - Funções integradas, Funções de bibliotecas; Tipos de Dados - Strings, Números, Leitura do console; Estruturas de Dados - Listas, Tuplas, Conjuntos; Laços - Laços For"
difficulty: Intermediário
weight: 13
draft: false
---
Excelente trabalho! Você está quase no final!

Para verificar se seu código está correto até este ponto, compare com o exemplo abaixo.

{{% notice warning %}}
A saída dos códigos pode variar. Você só precisa copiar os blocos de **código**, **não** os blocos de saída, pois estes serão gerados automaticamente no notebook.
{{% /notice %}}

## Compare seu Código

Antes de continuar, confira seu notebook do Google Colab com o código abaixo:

```python
def plot_image(i, predictions_array, true_label, img):
  true_label, img = true_label[i], img[i]
  plt.grid(False)
  plt.xticks([])
  plt.yticks([])

  plt.imshow(img, cmap=plt.cm.binary)

  predicted_label = np.argmax(predictions_array)
  color = 'blue' if predicted_label == true_label else 'red'

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

```python
i = 12
plt.figure(figsize=(6,3))
plt.subplot(1,2,1)
plot_image(i, predictions[i], test_labels, test_images)
plt.subplot(1,2,2)
plot_value_array(i, predictions[i],  test_labels)
plt.show()
```

```python
# Exibindo 6 imagens
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

```python
# Exibindo 25 imagens
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

```python
# Pegando uma imagem de teste
img = test_images[7]
print(img.shape)
```

```python
# Adicionando a imagem a um batch com apenas um membro
img = (np.expand_dims(img,0))
print(img.shape)
```

```python
predictions_single = probability_model.predict(img)
print(predictions_single)
```

```python
plot_value_array(7, predictions_single[0], test_labels)
_ = plt.xticks(range(10), class_names, rotation=45)
```

```python
np.argmax(predictions_single[0])
```

```python
i = 7
plt.figure(figsize=(6,3))
plt.subplot(1,2,1)
plot_image(i, predictions[i], test_labels, test_images)
plt.subplot(1,2,2)
plot_value_array(i, predictions[i],  test_labels)
plt.show()
```

{{% notice info %}}

Se quiser testar o código acima, visite <a href="https://colab.research.google.com/drive/1yrUcfMw8H9XbfJ8USITjErpRpBQrl_Sf?usp=sharing" target="_blank">este link</a>.

Para editar o código, clique em "Copy to Drive" para fazer uma cópia pessoal do notebook. Certifique-se de estar logado com sua conta Google.

{{% notice warning %}}
### Se estiver usando uma conta Google temporária (Nuevo)
Após copiar, renomeie o arquivo removendo "Copy of" e colocando seu nome no canto superior esquerdo do notebook.
{{% /notice%}}

{{% /notice %}}
