---
title: "Atividade 3 - Exibindo Amostras de Roupas"
date: 2020-09-09T16:19:17-07:00
prereq: "Fundamentos de Python: Funções - Funções integradas, Funções de bibliotecas; Tipos de Dados - Strings, Números, Leitura do console; Estruturas de Dados - Listas; Laços - For"
difficulty: Intermediário
weight: 5
draft: false
---
<iframe width="560" height="315" src="https://www.youtube.com/embed/8dMNuQcmx5s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Exibir Amostras

Copie o código abaixo para seu notebook. Ele mostra uma coleção de imagens com seus respectivos rótulos:

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

### Pergunta 1

Seu supervisor entregou entre 15 e 20 novas amostras de roupas, que você deverá incluir no programa.

Altere o `for` para que sejam exibidas **6 linhas e 7 colunas** de imagens.

**Quantas imagens no total isso representará?**

Reflita sobre quais partes do código precisam ser modificadas, como o `range()` e os parâmetros do `subplot()`.. Modifique o `for` para que haja 6 linhas e 7 colunas.

**Quantas imagens devem ser exibidas?** Pense onde alterar o `range()` e o `subplot()`.
