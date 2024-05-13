---
title: "Funções matemáticas integradas"
date: 2019-07-28T11:45:38-07:00
draft: false
weight: 3
---

Python fornece uma série de funções integradas importantes que podemos usar sem a necessidade de fornecer a definição da função. Nesta seção, aprenderemos sobre algumas das funções matemáticas integradas com as quais você pode realizar tarefas matemáticas em números.

As funções `max()` e `min()` nos fornecem os maiores e menores valores de uma lista, respectivamente:

```python
x = min(20, 10, 50, 25)		#x = 10
print(x)
y = max(20, 10, 50, 25)		#y = 50
print(y)
```

A função `abs()` nos dá o valor absoluto (positivo) do número:

```python
x = abs(-34)		         #x = 34
print(x)
y = abs(90)			         #y = 90
print(y)
```

A função `pow(a, b)` nos dá o valor de `a` elevado à potência de `b` (a<sup>b</sup>):

```python
x = pow(3,4)		        #x = 81
print(x)
```

### Desafio

Vamos juntar tudo! Vamos ver se conseguimos criar um programa que pegue 5 números do usuário e imprima o valor mínimo desses números elevado à potência máxima. Por exemplo, dado o número 2,7,4,11,9, retorne 2<sup>11</sup>. Pontos de bônus se você conseguir dividi-lo em funções!

<iframe src="https://trinket.io/embed/python/b238d85d0d" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>