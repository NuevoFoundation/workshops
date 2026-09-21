---
title: "Python: Conceitos Básicos - Gabarito"
date: 2026-04-25T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
Estas são soluções de exemplo. Muitos desafios têm várias respostas válidas, especialmente aqueles que pedem para você criar seus próprios exemplos. Sua solução está correta se produzir a saída esperada!
{{% /notice %}}

## Conceitos Básicos

### Escrevendo no Console - Desafio 1

```python
print("Olá, Mundo!")
```

Saída:
```
Olá, Mundo!
```

### Escrevendo no Console - Desafio 2

Adicione uma segunda instrução `print` com qualquer texto que desejar:

```python
print("Olá, Mundo!")
print("Estou aprendendo Python!")
```

### Variáveis - Desafio

Usando `comp = "Computador"` e `cinco = 5`, imprima a seguinte saída:

```python
comp = "Computador"
cinco = 5
print(comp)
print(cinco)
print(comp + comp)
print(cinco + cinco)
print(comp + comp + comp)
print(cinco + cinco + cinco)
```

Saída:
```
Computador
5
ComputadorComputador
10
ComputadorComputadorComputador
15
```

### Lendo do Console - Desafio

```python
print("Bem-vindo!")
print("Como posso ajudar você hoje?")
valor = input()
print("Você perguntou: " + valor + "?")
print("Eu não sei a resposta para " + valor + ". Adeus!")
```

Exemplo de saída (se o usuário digitar "O que é Python"):
```
Bem-vindo!
Como posso ajudar você hoje?
Você perguntou: O que é Python?
Eu não sei a resposta para O que é Python. Adeus!
```

## Tipos de Dados

### Strings - Desafio 1

Combine seu primeiro e último nome:

```python
primeiro = "Nuevo"
ultimo = "Foundation"
print(primeiro + " " + ultimo)
```

Saída:
```
Nuevo Foundation
```

### Strings - Desafio 2

Três maneiras de imprimir "Nuevo Foundation" usando dois símbolos `+` cada:

```python
print("Nuevo" + " " + "Foundation")
print("Nuevo " + "Foun" + "dation")
print("Nue" + "vo Foundati" + "on")
```

Existem muitas soluções válidas! Qualquer combinação que produza "Nuevo Foundation" usando exatamente dois símbolos `+` funciona.

### Números - Desafio 1

```python
print(2 - 19)
print((3 + 5) * 6)
print((13 + 5 * 8) / (6 - (3 + 7)))
```

Saída:
```
-17
48
-13.25
```

Explanação matemática para a terceira expressão:
- Numerador: 13 + (5 * 8) = 13 + 40 = 53
- Denominador: 6 - (3 + 7) = 6 - 10 = -4
- Resultado: 53 / -4 = -13.25

### Números - Desafio 2

{{% notice warning %}}
O texto do workshop diz `"527 time 199 is: __"` — aparenta ser um erro de digitação para "times" no workshop original. A resposta abaixo corresponde exatamente ao texto do workshop.
{{% /notice %}}

```python
print("527 time 199 é: " + str(527 * 199))
```

Saída:
```
527 time 199 é: 104873
```

Lembre-se de usar `str()` para converter o número para uma string antes de combiná-lo com `+`.

### Booleans - Desafio 1

{{% notice warning %}}
O código do workshop para a segunda expressão possui um parêntese fora do lugar: `print((3 + 5) * 6) == (65 - 17)`. Isso imprimirá `48`, mas não mostrará o resultado booleano. A versão corrigida abaixo coloca a comparação dentro do `print()`.
{{% /notice %}}

```python
print(5 + 8 < 10)
print((3 + 5) * 6 == (65 - 17))
```

Saída:
```
False
True
```

- 5 + 8 = 13, e 13 < 10 é `False`
- (3 + 5) * 6 = 48, e 65 - 17 = 48, então 48 == 48 é `True`

### Booleans - Desafio 2

```python
print(54 < (10 + 32))
print((37 / 5) != 7)
print("Olá" + "Mundo" == "Olá Mundo")
print(False == False)
```

Saída:
```
False
True
False
True
```

- 54 < 42 é `False`
- 37 / 5 = 7,4, e 7,4 != 7 é `True`
- "Olá" + "Mundo" = "OláMundo" (sem espaço!), então "OláMundo" == "Olá Mundo" é `False`
- False == False é `True`

### Booleans - Perguntas Teóricas

```python
print((11 - 2 < 10) and (7 + 3 > 10))
print((True or 3 < 1) and (False or 3 > 1))
```

Saída:
```
False
True
```

- (11 - 2 < 10) = (9 < 10) = `True`, (7 + 3 > 10) = (10 > 10) = `False`. True `and` False = `False`
- (True `or` False) = `True`, (False `or` True) = `True`. True `and` True = `True`

### Booleans - Desafio 3

Este desafio é aberto. Aqui estão alguns exemplos de expressões que você pode tentar:

```python
print(100 > 99)            # True
print(len("olá") == 3)     # True
print(10 % 3 == 0)         # False (10 dividido por 3 tem resto 1)
print(not True)            # False
```

Qualquer expressão booleana válida funciona!

## Condicionais e Laços de Repetição

### Instruções Condicionais - Desafio

```python
print("Qual é o seu nome?")
nome = input()
if nome == "Nuvi":
    print("Esse também é o meu nome!")
else:
    print("Prazer em conhecer você, " + nome + "!")
```

O seu nome e as respostas podem ser diferentes. O importante é a estrutura do `if`/`else`.

### Declaração