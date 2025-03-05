---
title: "Loops"
draft: false
weight: 2
---

## Loops em Python

Se você quiser repetir uma tarefa várias vezes, o Python tem uma maneira de fazer isso facilmente usando loops (laços).
Existem dois tipos de loops básicos em python: loops `for` e loops `while`.

### For loops

Os loops For iteram sobre uma sequência. Digamos que você queira repetir uma tarefa simples 5 vezes. Aqui está como você faria isso.

O loop for a seguir itera cada um dos números da lista [1,2,3,4,5] e atribui o valor x a ele. Em seguida, ele executa o código dentro do loop for.

```python
for x in [1,2,3,4,5]:    
    print("Estamos no número do loop",x)
```

<iframe src="https://trinket.io/embed/python/ddcca3b818" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

E se você quisesse repetir uma tarefa 10 vezes? 100 vezes? 1000 vezes??

Seria difícil escrever uma lista com 1000 números [1,2,3,4,5,6,..........,998,999,1000]. Existe uma função que pode criar essa lista para você.

Aqui está um exemplo de como criar a lista usando a função `range`:

O código abaixo cria uma lista começando em 1 e terminando em 10.
```
range(1,11)
```
Agora tente substituir a lista [1,2,3,4,5] no exemplo acima por esta função de intervalo!

A lista no loop for não precisa ser apenas números, pode ser qualquer coisa! Aqui está outro exemplo do que você pode fazer com isso:

```python
fruits = ["apple","banana","orange"]

for x in fruits:
    print(x)
```

<iframe src="https://trinket.io/embed/python/3fd98a6bf4" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

### While loops

Embora os loops sejam semelhantes aos loops for, mas em vez de iterar sobre uma sequência, eles se repetem enquanto uma determinada condição for atendida.
Por exemplo, vamos criar um loop while que se repete 5 vezes.

```python
count = 0

while count < 5:
    print("A contagem atual é", count)
    count += 1  #Isso é a mesma coisa que count = count + 1
```

<iframe src="https://trinket.io/embed/python/6d4f0c86f0" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

Como você pode ver, todo o código abaixo do loop while é executado desde que a contagem da variável seja menor que 5.

Tome cuidado! Certifique-se de que a condição se torne Falsa em algum momento, ou o loop continuará infinitamente.

### Declarações de quebra

Você aprendeu anteriormente que os loops for e while continuam iterando sobre uma sequência até chegar ao fim ou até que uma condição seja atendida.

Existe outra maneira de interromper a execução desses loops antes do final da lista ou antes que uma condição seja atendida.

Você pode fazer isso com a instrução `break`. Isso permite que você saia do loop em um loop for ou while.

Aqui está um exemplo com um loop while:

```python
count = 0

while True:  #Isso fará com que o loop while seja executado para sempre! a menos que haja uma instrução break em algum lugar do loop.
    print("contagem é", count)
    
    if (count == 10): #Isso diz que a contagem é igual a 10, então saia do loop while
        print("Saindo do loop!")
        break
    
    count += 1  # isso é igual a contar = contar + 1
```

<iframe src="https://trinket.io/embed/python/6cd0debfe5" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

### Desafios

1. Dada uma lista de alimentos, escreva um programa que escreva “Eu gosto de [nome do alimento]”, a menos que seja o menos favorito do usuário, o que você pede no início.

```python
foodList = ["maçãs", "sorvete", "pizza", "bananas", "cenouras", "abóbora", "pepinos", "sanduíche", "aveia", "biscoitos", "bolo", "espinafre ", "couve"]
```

2. Dada uma lista grande como a mostrada abaixo, escreva um programa que possa encontrar um número específico dessa lista.

```python
numList = [69, 430, 363, 80, 166, 476, 250, 38, 84, 405, 41, 302, 480, 57, 155, 17, 350, 87, 313, 36, 191, 367, 163, 167, 185, 93, 131, 314, 444, 452, 47, 457, 28, 21, 405, 350, 241, 121, 411, 152, 244, 207, 199, 371, 193, 4, 286, 482, 496, 283, 23, 466, 8, 84, 47, 231, 112, 329, 328, 85, 208, 161, 42, 251, 277, 207, 496, 3, 137, 138, 436, 447, 442, 313, 479, 464, 191, 19, 78, 333, 480, 36, 378, 232, 438, 451, 139, 444, 392, 75, 245, 151, 225, 50, 369, 49, 73, 325, 430, 335]
```

Por exemplo, peça ao usuário para inserir um número no console e, em seguida, escreva no console se ele for encontrado.
Dica: Você precisará converter as informações inseridas pelo usuário em um número inteiro usando `int(x)`.

<iframe src="https://trinket.io/embed/python/1beb594e30" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

### Pergunta

Como você mudaria este programa se a lista fosse muito grande? Se você encontrou um número, precisa continuar pesquisando no restante da lista?
