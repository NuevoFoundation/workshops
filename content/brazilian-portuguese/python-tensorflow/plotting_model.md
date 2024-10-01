---
title: "Traçando o modelo e suas previsões"
date: 2020-09-09T16:19:17-07:00
prereq: "Python: Fundamentos - Funções: Funções Integradas, Funções de Bibliotecas; Tipos de Dados – Strings, Números, Leitura do Console; Estruturas de Dados - Listas; Loops - For Loops"
difficulty: Intermediário
weight: 11
draft: false
---

</br>
</br>

Agora que podemos classificar a categoria de uma peça de roupa individual usando nosso modelo, visualizaremos essas previsões criando um gráfico de barras para uma imagem específica.

## Classificação Predicada

A função `plot_image` exibe uma imagem junto com sua classificação prevista, o nível de confiança do modelo para aquela categoria e a classificação real (que é para referência).

{{% notice tip %}}
Um **nível de confiança** é usado para transmitir o quão confiantes ou certos estamos de que nossa resposta está correta. Se você tiver que prever se choverá amanhã, suas respostas possíveis são sim ou não. E se você não tiver certeza absoluta de sua resposta? Se o meteorologista previu chuva para amanhã, você pode dizer que está 90% confiante. Isso significa que você tem quase certeza de que choverá amanhã, mas também nos diz que você acha que há 10% de chance de estar errado.

Um nível de confiança menor indica que você tem menos certeza de que sua resposta está correta e que provavelmente está errado ou incorreto em alguma capacidade. Quanto mais próximo de 100 estiver o nosso nível de confiança, mais certos teremos em nossa previsão.

{{% /notice %}}

Copie a função `plot_image` em seu Notebook do Google Colab: 
</br>

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
```

## Visualizando Valores de Confiança

A função `plot_value_array` plota os valores de confiança gerados pelo modelo como um gráfico de barras.

O eixo y do gráfico exibirá o nível de confiança, enquanto o eixo x do gráfico representará a categorização dos itens (camiseta, calça, pulôver, vestido, casaco, sandália, camisa, tênis, bolsa, ou bota).

Copie a função `plot_value_array` em seu Notebook do Google Colab:

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

## Usando as funções

Usaremos o código a seguir para chamar as funções que escrevemos anteriormente. Copie o snippet em seu Notebook do Google Colab.

```python
i = 0   
plt.figure(figsize=(6,3))
plt.subplot(1,2,1)
plot_image(i, predictions[i], test_labels, test_images)
plt.subplot(1,2,2)
plot_value_array(i, predictions[i],  test_labels)
plt.show()
```

![Plotando Modelo Figura 1 de uma bota](../media/Plotting_fig1.png)

Podemos ver que nosso modelo prevê que este item seja uma bota. Quão confiante está o modelo nesta previsão? 99% confiante. A categoria entre parênteses é a categorização correta do item. Neste caso, o modelo detectou o item corretamente.
</br>
</br>
Lembre-se de que nem todos os modelos são perfeitos. Os modelos podem errar em suas previsões, como veremos no próximo exemplo.
</br>

Usaremos o mesmo código de antes, mas testaremos a confiança com um item diferente. Defina `i` igual a um novo valor, como 12.

```python
i = 12 
plt.figure(figsize=(6,3))
plt.subplot(1,2,1)
plot_image(i, predictions[i], test_labels, test_images)
plt.subplot(1,2,2)
plot_value_array(i, predictions[i],  test_labels)
plt.show()
```

![Plotando a Figura 2 do Modelo de um tênis](../media/Plotting_fig2.png)

A partir deste exemplo, vemos que o modelo previu que o item seria uma sandália com 96% de confiança. Porém, vemos que a identificação correta do item é um tênis. O gráfico mostra que o modelo também previu que esse item seria um tênis com aproximadamente 3% de confiança ou uma bota com aproximadamente 1% de confiança.

## Mais exemplos

Para obter mais exemplos de previsões do modelo, represente graficamente as primeiras 25 imagens de teste, seus rótulos previstos e os rótulos verdadeiros. Como antes, as previsões corretas serão mostradas em azul e as incorretas em vermelho.

Copie este código em seu Notebook do Google Colab:

```python
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
![Plotando modelo Figura 3, imagens 5x5 e suas previsões de modelo](../media/Plotting_fig3.png)

O que você acha das previsões do modelo? Você ficaria satisfeito com essa taxa de sucesso?