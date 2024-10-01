---
title: "Atualização de progresso 3"
date: 2020-09-09T16:19:17-07:00
prereq: "Python: Fundamentos - Funções: Funções Integradas, Funções de Bibliotecas; Tipos de Dados – Strings, Números, Leitura do Console; Estruturas de Dados - Listas; Loops - For Loops"
difficulty: Intermediário
weight: 13
draft: false
---
Bom trabalho! Você quase chegou ao fim!

Para verificar se seu código está correto até este ponto de verificação, compare seu código com o código de exemplo fornecido abaixo.

{{% notice warning %}}
As saídas do código podem variar. Você só precisa copiar os blocos de código e __não__ os blocos de saída, pois eles serão gerados automaticamente em seu notebook.
{{% /notice %}}

## Compare seu código

Antes de prosseguir, verifique seu notebook do Google Colab com o código abaixo:

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
![Traçando a Figura 1](../media/Plotting_fig1.png)

```python
i = 12 
plt.figure(figsize=(6,3))
plt.subplot(1,2,1)
plot_image(i, predictions[i], test_labels, test_images)
plt.subplot(1,2,2)
plot_value_array(i, predictions[i],  test_labels)
plt.show()
```
![Traçando a Figura 2](../media/Plotting_fig2.png)

```python
#Plotando 6 imagens
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
![Plotando 6 imagens](../media/PU3_6images.png)

```python
#Plotando 25 imagens
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

![Plotando 25 imagens](../media/Plotting_fig3.png)

```python
# Pegue uma imagem do conjunto de dados de teste. Isso mostra a resolução da imagem.

#NOTE: Este índice será alterado e seu gráfico correspondente será exibido nas próximas etapas
img = test_images[7]

print(img.shape)
```

```
(28, 28)
```

```python
# Adicione a imagem a um lote onde ela seja o único membro.
img = (np.expand_dims(img,0))

print(img.shape)
```

```
(1, 28, 28)
```

```python
predictions_single = probability_model.predict(img)

print(predictions_single)
```

```
[[3.5166083e-06 5.8611553e-12 7.3947426e-04 3.9665074e-06 2.8206140e-03
  9.7541879e-08 9.9643230e-01 8.2940162e-11 1.2411914e-07 2.7266043e-09]]
```

```python
plot_value_array(7, predictions_single[0], test_labels)  #plote o gráfico contendo todos os nomes de classes
_ = plt.xticks(range(10), class_names, rotation=45)
```

![Gráfico de classificação](../media/PU3_graph.png)

```python
np.argmax(predictions_single[0]) #Verificando o valor do índice com maior probabilidade
```
```
6
```

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

{{% notice info %}}

Se quiser testar o código acima, visite <a href="https://colab.research.google.com/drive/1yrUcfMw8H9XbfJ8USITjErpRpBQrl_Sf?usp=sharing" target="_blank">este link</a>

Para editar este código, clique no botão ‘Copy to Drive’ para fazer uma cópia pessoal deste notebook. Certifique-se de estar conectado à sua conta do Google.

{{% notice warning %}}
### Se você estiver usando uma conta Nuevo Google temporariamente
Depois de fazer uma cópia, certifique-se de substituir "Copý of" pelo seu nome, junto com o nome do arquivo. Ele estará no canto superior esquerdo do seu notebook.
{{% /notice%}}

{{% /notice %}}
