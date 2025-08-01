---
title: "Plotando o Modelo e Suas Previsões"
date: 2020-09-09T16:19:17-07:00
prereq: "Fundamentos de Python: Funções - Funções integradas, Funções de bibliotecas; Tipos de Dados - Strings, Números, Leitura do console; Estruturas de Dados - Listas, Tuplas, Conjuntos; Laços - For"
difficulty: Intermediário
weight: 11
draft: false
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/FrO66fkSU7M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</br>
</br>

Agora que conseguimos classificar a categoria de uma peça de roupa individual usando nosso modelo, vamos **visualizar essas previsões** criando gráficos de barras para uma imagem específica.

## Classificação Prevista

A função `plot_image` exibe uma imagem junto com sua classificação prevista, o nível de confiança do modelo para aquela categoria e a classificação real (usada como referência).

{{% notice tip %}}
**Nível de confiança** é a medida de quão certo o modelo está da sua resposta. Por exemplo, se o meteorologista disser que vai chover amanhã com 90% de certeza, ele acredita muito nessa previsão, mas ainda existe uma chance de 10% de estar errado. Quanto mais próximo de 100%, maior a certeza.
{{% /notice %}}

Copie a função `plot_image` no seu notebook do Google Colab:

```python
def plot_image(i, predictions_array, true_label, img):
  true_label, img = true_label[i], img[i]
  plt.grid(False)
  plt.xticks([])
  plt.yticks([])

  plt.imshow(img, cmap=plt.cm.binary)

  predicted_label = np.argmax(predictions_array)
  color = 'blue' if predicted_label == true_label else 'red'

  plt.xlabel("{} {:2.0f}% ({})".format(
      class_names[predicted_label],
      100*np.max(predictions_array),
      class_names[true_label]),
      color=color)
```

## Visualizando os Níveis de Confiança

A função `plot_value_array` cria um gráfico de barras com os níveis de confiança gerados pelo modelo. O eixo y representa o nível de confiança, e o eixo x as categorias (camiseta/top, calça, etc).

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

## Usando as Funções

Use o código abaixo para chamar as funções:

```python
i = 0
plt.figure(figsize=(6,3))
plt.subplot(1,2,1)
plot_image(i, predictions[i], test_labels, test_images)
plt.subplot(1,2,2)
plot_value_array(i, predictions[i], test_labels)
plt.show()
```

![Gráfico de previsão de bota](../media/Plotting_fig1.png "Previsão de bota")

Neste exemplo, o modelo previu corretamente que o item é uma bota com 99% de confiança. A categoria entre parênteses é a correta, servindo como referência.

Modelos nem sempre são perfeitos. Vamos ver isso no próximo exemplo.

```python
i = 12
plt.figure(figsize=(6,3))
plt.subplot(1,2,1)
plot_image(i, predictions[i], test_labels, test_images)
plt.subplot(1,2,2)
plot_value_array(i, predictions[i], test_labels)
plt.show()
```

![Gráfico de previsão incorreta](../media/Plotting_fig2.png "Previsão de sandália para um tênis")

Neste caso, o modelo previu que o item era uma **sandália** com 96% de confiança, mas era na verdade um **tênis**.

## Mais Exemplos

Para visualizar as primeiras 25 imagens de teste com as previsões e os rótulos reais:

```python
num_rows = 5
num_cols = 5
num_images = num_rows * num_cols
plt.figure(figsize=(2*2*num_cols, 2*num_rows))
for i in range(num_images):
  plt.subplot(num_rows, 2*num_cols, 2*i+1)
  plot_image(i, predictions[i], test_labels, test_images)
  plt.subplot(num_rows, 2*num_cols, 2*i+2)
  plot_value_array(i, predictions[i], test_labels)
plt.tight_layout()
plt.show()
```

![Grid de 25 imagens com previsões](../media/Plotting_fig3.png "Previsões do modelo para 25 imagens")

O que você acha das previsões do modelo? Você ficaria satisfeito com essa taxa de acerto?
