---
title: "Atividade 3 – Exibição de amostras de roupas"
date: 2020-09-09T16:19:17-07:00
prereq: "Python: Fundamentos - Funções: Funções Integradas, Funções de Bibliotecas; Tipos de Dados – Strings, Números, Leitura do Console; Estruturas de Dados - Listas; Loops - For Loops"
difficulty: Intermediário
weight: 5
draft: false
---

<br>

### Exibir amostras
Agora, você exibirá todas as suas amostras de roupas fazendo o seguinte:

Copie o código a seguir em seu Notebook do Colab. Isso exibe uma coleção de imagens junto com sua categoria específica.

```python
plt.figure(figsize=(10,10)) #define o tamanho da imagem para 10x10 polegadas
for i in range(25): #exibe as primeiras 25 imagens com o nome da classe
    plt.subplot(5,5,i+1)
    plt.xticks([])
    plt.yticks([])
    plt.grid(False)
    plt.imshow(train_images[i], cmap=plt.cm.binary) 
    plt.xlabel(class_names[train_labels[i]])
plt.show() #mostra imagens com seus rótulos
```

### Questão 1

Seu supervisor distribui cerca de 15 a 20 amostras de roupas a mais, que você deverá incluir em seu programa.
Altere o "for loop" para que haja 6 linhas e 7 colunas. Quantas imagens você deve exibir?

Pense onde você precisa alterar o código para exibir isso. O código atualmente exibe 5 linhas e 5 colunas.
