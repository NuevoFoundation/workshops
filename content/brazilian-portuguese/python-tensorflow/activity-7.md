---
title: "Atividade 7 – Traçando a categoria prevista de uma imagem"
date: 2020-09-09T16:19:17-07:00
prereq: "Python: Fundamentos - Funções: Funções Integradas, Funções de Bibliotecas; Tipos de Dados – Strings, Números, Leitura do Console; Estruturas de Dados - Listas"
difficulty: Intermediário
weight: 12
draft: false
---

## Traçando a categoria de uma imagem
</br>
Você deve se lembrar que, quando estávamos traçando os modelos, o eixo x dos gráficos foi rotulado com os números de 1 a 9. Eles correspondem às categorias de itens que definimos anteriormente no workshop, ou seja, camiseta/top, calça, pulôver, vestido, casaco, sandália, camisa, tênis, bolsa e bota.
</br>

![Plotando a Figura 2 do Modelo de um tênis](../media/Plotting_fig2.png)

</br>
Ajustaremos a rotulagem do eixo x para que os dados exibidos sejam mais fáceis de entender.
</br>
</br>
Copie e cole o seguinte código em seu Notebook do Google Colab:

```python
img = test_images[0] # Obtenha uma imagem do conjunto de dados de teste.
# NOTE: Este índice será alterado e seu gráfico correspondente será exibido nas próximas etapas

print(img.shape) # Isso mostra a resolução da imagem.
```


```python
img = (np.expand_dims(img,0)) # Isso expande o array img

print(img.shape)
```

```python
# Isso fornece o nível de confiança de que a imagem corresponde a cada categoria.
# Por exemplo, a probabilidade de a imagem ser uma camiseta é 5,2198538e-07.
predictions_single = probability_model.predict(img)

print(predictions_single)
```

```python
plot_value_array(0, predictions_single[0], test_labels)  

# Trace o gráfico e rotule o eixo x com os class_names
# ou também conhecidas como categorias que criamos na Atividade 1
_ = plt.xticks(range(10), class_names, rotation=45)
```

Para verificar o valor do índice com maior probabilidade, usamos o código a seguir.

```python
# O resultado disso nos diz qual categoria o item de roupa tinha
# maior probabilidade de fazer parte de
np.argmax(predictions_single[0]) 
```

## Experimentando gráficos

No primeiro segmento de código desta atividade, altere o valor do índice do array `test_images` para qualquer número de sua escolha.

### Questão 1
No `plot_value_array`, altere o primeiro parâmetro para o mesmo número de índice usado anteriormente. Qual nome de classe tem a maior probabilidade?

Verifique sua resposta executando o código abaixo para exibir a imagem especificada e o gráfico da categoria que o modelo previu.

Isso é consistente com a resposta da sua pergunta anterior?

```python
i = your_desired_value   # Podemos ver que esta imagem detecta o nome de classe correto para a imagem
plt.figure(figsize=(6,3))
plt.subplot(1,2,1)
plot_image(i, predictions[i], test_labels, test_images)
plt.subplot(1,2,2)
plot_value_array(i, predictions[i],  test_labels)
plt.show()
```

