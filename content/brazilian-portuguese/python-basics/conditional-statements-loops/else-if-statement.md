---
title: "Condição Else-if"
draft: false
weight: 2
---

No último exercício, aprendemos condições if-else básicas. Se precisar de uma atualização rápida, você pode revisar <a href="../../python-basics/conditional-statements"> Declarações condicionais</a>.

Nesta seção, expandiremos para introduzir uma nova condição chamada “elif”.

### Condição Elif

**A palavra-chave Elif** representa a condição "else-if". Um exemplo do mundo real seria: Se eu estiver com muita fome, comerei um bolo; caso contrário, se estiver com um pouco de fome, comerei uma maçã; caso contrário, não comerei nada. Você pode ver que é usado quando deseja tentar outra condição se a primeira não for verdadeira.

```python
# Esta é a sintaxe básica do elif
if expressão:
    declaração(ões)
elif expressão:
    declaração(ões)
else:
    declaração(ões)
```

#### Vamos ver um exemplo
```python
# Isto é um exemplo
if 1 > 3:
    print('1>3')
elif 1 == 3:
    print('1=3')
else:
    print('1<3')
```
Como podemos ver que a primeira afirmação, `1` maior que `3`, é falsa, ela é avaliada como `false`. O interior da instrução `if` não será executado então. Avaliaremos então a instrução `elif`, `1` é igual a `3`, que também é avaliada como `false`. O interior do `elif` não será executado. Então o que estiver em `else` será impresso.

### Aviso: `elif` é diferente de `if`
#### Vamos ver dois exemplos
#### Exemplo A
```python
# Este é o Exemplo A de duas instruções if
if 1 == 1:
    print('1=1')
if 3 == 3:
    print('3=3')
else:
    print('wrong')
```
Example A will print out:

```
1 = 1
3 = 3
```

#### Exemplo B
```python
# Este é um exemplo de instruções Elif
if 1 == 1:
    print('1=1')
elif 3 == 3:
    print('3=3')
else:
    print('wrong')
```
O Exemplo B imprimirá:

```
1 = 1
```

No Exemplo A, avaliaremos a primeira instrução `if` (`1==1`) como `verdadeiro`. O interior da primeira instrução `if` será executado então. Avaliaremos então a segunda instrução `if` (`3==3`) como `verdadeiro` também. O interior da segunda instrução `if` também será executado.

No Exemplo B avaliaremos a primeira instrução `if` (`1==1`) como `verdadeiro`. Então a parte restante de `elif` e `else` não será avaliada, pois `if` já está correto.

#### Desafio
Você pode utilizar o conhecimento que aprendeu em Python-Basics-booleans para criar seu próprio exemplo para `elif`?
Você pode querer revisar o booleano para terminar este desafio.
- <a href="../../python-basics/data-types/booleans"> Booleans </a>
<br/><br/>

<iframe src="https://trinket.io/embed/python/5292ae7e3a" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
