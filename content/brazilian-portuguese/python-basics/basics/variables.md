---
title: "Variáveis"
date: 2022-09-19T14:45:38-07:00
draft: false
weight: 4
--- 

Em um exercício anterior, aprendemos a imprimir diferentes instruções com `print("")`. Embora seja ótimo imprimir um número ou uma frase, não lhes demos um significado. Variáveis ​​são simplesmente nomes que podemos dar a valores como strings, números e booleanos. Veja como criar uma variável chamada s em Python. Dizemos que s é uma string que possui o valor `"Olá Mundo!"`.

```python
s = "Olá Mundo!"
x = 88
happy = True
```
Pressione Run (executar).

![Captura de tela da aparência do exemplo de variáveis ​​no replit](../../img/variables.png "imagem de como as variáveis ​​aparecem no replit") 

Observe que as variáveis ​​não são impressas no console. Em vez disso, a variável simplesmente salva a string, o número ou o booleano na memória do computador. Podemos usar essas variáveis ​​em outras declarações. Por exemplo, o código a seguir imprimiria `"Olá" Nuevo Foundation"` no console:

```python
str1 = "Olá"
str2 = "Nuevo Foundation"
print(str1 + " " + str2)
```

Você também pode fazer o seguinte para imprimir strings juntas enquanto adiciona espaços entre as palavras.

```python
str1 = "Olá"
str2 = "Nuevo Foundation"
print(str1, str2)
```
## Qual é o tipo!

Antes de aprender como criar variáveis, precisamos aprender o conceito de **tipo**. O tipo descreve o que está sendo armazenado na caixa.

Python é uma linguagem de tipo dinâmico, o que significa que, diferentemente de linguagens como Java, você não precisa especificar o tipo de variável antes de atribuir um valor a ela. E, se você tiver um número inteiro na caixa e remover o número inteiro e colocar uma string na caixa, o python permitirá que você faça isso. Porém, você deve usar a variável com base no tipo.


{{% notice note %}}
A seguir estão os tipos de dados importantes:

**Tipo** | **Descrição** | **Exemplos**
--------|-----------|----------
`int` | inteiro | `20`, `30`, `35`
`char` | caractere como um símbolo ou uma única letra do alfabeto | `'A'`,`'b'`, `'('`, `']'`
`String` | uma sequência de `char` | `"Hello"`, `"Bonjour"`, `"Olá"`
`boolean` |tem um valor de `verdadeiro` ou `falso` | `true`, `false`
double | números fracionários | `2.0`, `3.14`, `9.33`

{{% /notice %}}

Vamos rever as três variáveis ​​de que falamos no primeiro exemplo e identificar seus tipos de dados. `s` é uma string, `x` é um int e `happy` é um booleano.

### Desafio

- Crie duas novas variáveis: Uma variável chamada `comp` que armazena a string `"Computador"`.
- Uma variável chamada `five` que armazena o número `5`.

A seguir, use as variáveis ​​e o que você aprendeu nas atividades anteriores para `imprimir` o seguinte no console. Você _deve_ usar as variáveis!

    Computador
    5
    ComputadorComputador
    10
    ComputadorComputadorComputador
    15

{{% notice tip %}}

Dica: se você tiver dúvidas, considere usar o operador `+`. Lembre-se que você pode usar as variáveis ​​**comp** e **five** múltiplas vezes na mesma linha!

{{% /notice %}}

<iframe src="https://trinket.io/embed/python/b238d85d0d" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
