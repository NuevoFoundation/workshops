---
title: "Atividade 7 - Plotando a Categoria Prevista de uma Imagem"
date: 2020-09-09T16:19:17-07:00
prereq: "Fundamentos de Python: Funções - Funções integradas, Funções de bibliotecas; Tipos de Dados - Strings, Números, Leitura do console; Estruturas de Dados - Listas"
difficulty: Intermediário
weight: 12
draft: false
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/pwZDPj4yIsM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Plotando a Categoria de uma Imagem
</br>
Você deve se lembrar que, ao plotarmos os modelos, o eixo x dos gráficos estava rotulado com os números de 1 a 9. Esses números correspondem às categorias de itens que definimos anteriormente no workshop, ou seja: camiseta/top, calça, blusa de frio, vestido, casaco, sandália, camisa, tênis, bolsa e bota.
</br>

![Figura de Plotagem - Tênis](../media/Plotting_fig2.png "Tênis pixelado com barra de cores")
</br>
Vamos ajustar os rótulos do eixo x para que os dados exibidos fiquem mais fáceis de entender.
</br>
</br>

Copie e cole o código abaixo no seu notebook do Google Colab:

```python
img = test_images[0]  # Seleciona uma imagem do conjunto de teste
print(img.shape)      # Exibe a resolução da imagem
```

```python
img = (np.expand_dims(img, 0))  # Expande o array da imagem
print(img.shape)
```

```python
# Exibe o nível de confiança da imagem para cada categoria
predictions_single = probability_model.predict(img)
print(predictions_single)
```

```python
plot_value_array(0, predictions_single[0], test_labels)
_ = plt.xticks(range(10), class_names, rotation=45)  # Rótulos das categorias
```

Para verificar o índice com maior probabilidade, utilize o código:

```python
np.argmax(predictions_single[0])
```

## Explorando os Gráficos

No primeiro trecho de código desta atividade, altere o índice no array `test_images` para outro valor qualquer.

### Pergunta 1
No `plot_value_array`, troque o primeiro parâmetro para o mesmo valor de índice usado anteriormente.

Qual nome de classe (categoria) tem a maior probabilidade?

Verifique sua resposta executando o código abaixo para exibir a imagem e o gráfico da categoria prevista:

```python
i = seu_valor_desejado
plt.figure(figsize=(6,3))
plt.subplot(1,2,1)
plot_image(i, predictions[i], test_labels, test_images)
plt.subplot(1,2,2)
plot_value_array(i, predictions[i], test_labels)
plt.show()
```

A resposta está consistente com a previsão da pergunta anterior?
