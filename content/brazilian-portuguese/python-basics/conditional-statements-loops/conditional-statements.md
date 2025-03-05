---
title: "Declarações condicionais"
date: 2022-09-19T14:45:38-07:00
draft: false
weight: 1
---

Agora que conhecemos o básico sobre instruções de impressão, variáveis ​​e leitura de entrada do usuário – podemos combinar todas essas habilidades incríveis com instruções condicionais. As instruções condicionais permitem que o computador tome **decisões** com base no **valor** de uma expressão. No mundo real, usamos declarações condicionais o tempo todo para tomar decisões! Por exemplo, se estiver chovendo lá fora, uso um guarda-chuva. Neste exemplo, avaliei o tempo lá fora e como estava chovendo, tomei a decisão sequencial de usar guarda-chuva.

Que declarações condicionais você consegue imaginar e que usa na vida cotidiana?

# Declarações If

Começaremos com uma instrução if em sua forma mais simples! Olhando para o exemplo do mundo real, você pode ver certas palavras usadas e também se aplicam a instruções de programação. **Se** (if) estiver chovendo lá fora, uso um guarda-chuva. `if` nos diz que precisamos tomar uma decisão. Então temos a decisão a tomar. Está chovendo? Essa pergunta é chamada de expressão. Aí, se estiver chovendo, eu uso guarda-chuva. Essa é uma afirmação que se aplica quando a expressão é verdadeira.

```python
if (expr):
    statement
```


Mostrado acima, temos três partes diferentes:

1. If – isso informa ao computador que decidiremos com base na expressão entre parênteses
2. Expr – representa a expressão que estamos avaliando. Se a expressão for "verdadeira", o computador entrará na declaração (statement) if e executará a declaração.
3. Statement – o que o computador completará se a expressão for “verdadeira”

```python
x = 0
y = 5

if (x<y):       #verdadeiro
    print('yes')
if (y<x):       #falso
    print('yes')
if (x == 10):   #falso
    print('yes')
```

Vamos analisar o exemplo acima e decidir por que algumas afirmações são “verdadeiras” ou “falsas”.

Recebemos duas variáveis ​​`x` e `y` e cada uma delas recebe um valor. Na primeira declaração if estamos testando se o valor de `x` é menor que o valor de `y`. Como `0` é menor que `5`, isso é verdade! Portanto, a primeira declaração `if` imprimirá sim.

No entanto, podemos ver que `y` não é menor que `x`, então é avaliado como `false`. O interior da declaração `if` não será executado então. O mesmo se aplica à declaração `if` que avalia se `x` é igual a `10`. Vemos que `x` é igual a `0`, então esta expressão é `false` e ​​o interior da declaração `if` não será executado.

# Outras declarações

Agora que sabemos como usar declaração if para executar condicionalmente uma única declaração ou múltiplas declaração, vamos ver o que mais podemos fazer!

Às vezes, você precisa avaliar uma condição para agir de acordo se ela for “verdadeira”, mas se for “falsa”, agimos de maneira diferente. Aqui está a forma mais simples da declaração `else`.

```python
if (expr):
    declaração1
else: 
    declaração2
```    

Isto é realmente como a declaração `if`! No entanto, aqui, se a instrução `if` for `falsa` (não verdadeira), o programa executará automaticamente a `instrução2` na instrução `else`.

Um exemplo da vida real é que se estou com fome, como. Caso contrário (em outras palavras, não estou com fome), não comerei. Vamos dar uma olhada no código python!

```python
if (hungry):
    como
else:
    não_como
```

### Desafio

Vamos juntar tudo o que aprendemos até agora! Vamos ver se podemos criar um programa que solicite o nome do usuário. O usuário pode escrever seu nome no console. Então o computador pode decidir se o nome dele é igual ao seu e imprimir uma resposta. Caso contrário, imprima uma resposta diferente!

<iframe src="https://trinket.io/embed/python/b238d85d0d" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

Dica: experimente falar sobre os diferentes caminhos que um computador pode seguir! Certifique-se de identificar quais são as condições if e else.
