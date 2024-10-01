---
title: “Atividade 4 – Treinando o Modelo”
date: 2020-09-09T16:19:17-07:00
prereq: "Python: Fundamentos - Funções: Funções Integradas, Funções de Bibliotecas; Tipos de Dados – Strings, Números, Leitura do Console; Estruturas de Dados - Listas, Tuplas, Conjuntos"
difficulty: Intermediário
weight: 7
draft: false
---

<br>

### Parâmetros para Treinamento
O código a seguir determina quantas vezes o modelo é treinado. É normal que este segmento de código demore mais do que o normal para ser executado.

```python
model.fit(train_images, train_labels, epochs=10) 
```

{{% notice note %}}
**Epochs** representam o número de vezes que o modelo processa todos os dados de treinamento.
{{% /notice %}}

O código a seguir imprime a precisão geral do teste.

```python
test_loss, test_acc = model.evaluate(test_images,  test_labels, verbose=2)

print('\nTest accuracy:', test_acc)
```

### Questão 1
Defina o valor das epochs igual a 2. Qual é a precisão da última epoch? Qual é a precisão do teste quando o modelo treinado é comparado ao conjunto de dados de teste?

### Questão 2
Defina o valor das epochs igual a 10. Repita a pergunta 1.

### Questão 3
Defina o valor das epochs igual a 20. Repita a pergunta 1.

### Pergunta 4
Que correlação você vê quando aumenta o número de epochs? A precisão aumenta ou diminui?