---
title: "Atividade 2 - Exibindo valores de cores RGB para imagens"
date: 2020-09-09T16:19:17-07:00
prereq: "Python: Fundamentos - Funções: Funções Integradas, Funções de Bibliotecas; Tipos de Dados – Strings, Números, Leitura do Console; Estruturas de Dados - Listas"
difficulty: Intermediário
weight: 3
draft: false
---

### Ver imagens das amostras

Veremos agora a imagem de um sapato de nossa coleção de amostras de roupas usando o trecho de código abaixo.

Vá em frente e copie o seguinte código em seu notebook Google Colab:

```python
plt.figure()
plt.imshow(train_images[0]) #Mostra a primeira imagem no conjunto de dados como um gráfico ou pixels de cores diferentes
plt.colorbar() #exibe a barra de cores à direita
plt.grid(False)
plt.show() #exibe todo o gráfico
```

{{% notice tip %}}

Observe que a imagem gerada possui uma barra de cores à esquerda. Esta métrica mostra que o calçado usa valores de pixel de 0 a 255. O que são valores de pixel?

**Pixels** são a menor unidade de um gráfico (imagem ou display) que uma tela pode representar. Pense na tela do seu computador! Existem milhões de pequenos pontos coloridos que, quando combinados, podem criar a imagem de um barco ou o texto mostrado na tela.

A barra de cores mostra a faixa de intensidade da cor que um pixel pode exibir.
![Imagem de inicialização com faixa de pixelização de 0 a 255](../media/a2q1.png)
{{% /notice %}}

#### Questão 1:
Após analisar o sapato, queremos visualizar outra peça da amostra de roupa. Você consegue descobrir como fazer isso usando o bloco de código anterior?

{{% notice hint %}}
Use o código do bloco de código anterior. Em seguida, altere o valor do índice em `train_images[x]` para obter uma nova imagem de um item.

Por exemplo, se você inserir o valor do índice como 7, obterá o seguinte item:
![Imagem da camisa](../media/a2progress2.png)

{{% /notice %}}

### Normalizar valores de pixel:

O programa que vamos escrever recebe uma entrada de valores entre 0 e 1. No entanto, nossos valores de pixel são em sua maioria maiores que 1! Na verdade, o intervalo de valores vai de 0 a 255. Como podemos alterar o intervalo de números para que possa ser inserido em nosso programa?

Usaremos um processo chamado **"normalização"**, onde transformamos esses valores para que caibam no intervalo de 0 a 1. Mais especificamente, pegaremos todos os nossos dados e os dividiremos por um valor singular para que o intervalo de valores agora pode caber entre 0 e 1.

#### Questão 2:
Você consegue adivinhar por qual número dividiremos nossos valores para normalizar o intervalo?

{{% notice tip %}}
Se isso for confuso, pense em porcentagens. Se você tiver um teste com nota total de 255 pontos e acertar 240 pontos no teste, você dividirá 240 por 255 para obter a porcentagem que acertou. Estamos fazendo um processo semelhante aqui.

{{% /notice %}}

Copie e cole o seguinte bloco de código em seu Google Colab Notebook:

```python
#the train_images e test_images variam entre valores de 0 a 255.
#Para manter a consistência entre o conjunto de treinamento e teste, dividiremos train_images e test_images por 255

train_images = train_images / 255.0 

test_images = test_images / 255.0
```