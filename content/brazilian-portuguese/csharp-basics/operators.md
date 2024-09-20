---
title: "Operadores"
description: "Introduzir operadores e realizar operações em variáveis no C#."
date: 2024-09-16T00:00:00Z
weight: 5
---

## Vamos Fazer Matemática: Operador Aritmético

No último exercício, aprendemos sobre variáveis e como podemos atribuir valores a uma variável de um tipo específico, como:

```C#
int age = 3;  // declarar variável age do tipo int com valor 3
age = 4;      // atribuir 4 à variável age
```

Observando o código acima, ele essencialmente adiciona 1 ao valor da variável `age`.

E, em C#, podemos realizar operações matemáticas em variáveis diretamente com **operadores aritméticos**: `+`, `-`, `*`, `/`, `%`.
Por exemplo, podemos usar o operador de adição `+` para adicionar 1 ao `age`:

```c#
int age = 3;  // declarar variável age do tipo int com valor 3
age = age + 1;// adicionar 1 a age
```

{{% notice note %}}
Os seguintes são os operadores aritméticos no C#:

**Operador** | **Descrição** | **Exemplo**
------|------|--------
`+` | adição | `1 + 1 = 2`
`-` | subtração | `2 - 1 = 1`
`*` | multiplicação | `3 * 3 = 9`
`/` | divisão | `9 / 3 = 3`
`%` | módulo/resto | `10 % 4 = 2`

**Nota**: Se ambos os operandos da divisão forem inteiros, o resultado também será um inteiro. Por exemplo, `10 / 4` retorna 2, não 2.5, já que descartamos o resto. Se qualquer um dos operandos for um double, o resultado será um double.

**Nota**: Use a operação de módulo (`%`) para obter o resto da operação de divisão.

{{% /notice %}}

{{% notice tip %}}
O operador de adição (`+`) é usado para Strings como um operador de concatenação. Por exemplo:

`String name = "Patric" + "k";` é o mesmo que `String name = "Patrick";`
{{% /notice %}}

### Instruções
1. Use o programa abaixo para praticar usando os operadores aritméticos. Mude os números para ver as respostas.

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/dUSTOt" frameborder="0"></iframe>

## Comparações: Operador Relacional

Em seguida, vamos aprender a comparar números, usando **operadores relacionais**.

Assim como em matemática, podemos comparar números usando `>`, `<`, `>=`, `<=`. Por exemplo: `(3 > 2)` é `true`, um valor booleano.

{{% notice note %}}
Os seguintes são os operadores relacionais no C#:

**Operador** | **Descrição** | **Exemplo**
------| ------| ------
`==` | igual a | `(3 == 3)` é `true`
`!=` | não igual a | `(3 != 3)` é `false`
`>` | maior que | `(3 > 2)` é `true`
`<` | menor que | `(3 < 2)` é `false`
`>=` | maior ou igual a | `(3 >= 2)` é `true`
`<=` | menor ou igual a | `(2 <= 2)` é `true`

Nota: `==` e `!=` só podem ser usados em dados do mesmo tipo. Por exemplo:
```csharp
int x=3; 
double y=3.0; 
x==y; // Isso produziria um erro porque x e y são de tipos diferentes.
```

{{% /notice %}}

{{% notice tip %}}
Usar 1 sinal de igual atribui um valor à variável. Usar 2 sinais de igual compara os valores de dois elementos.

```csharp
age = 3;  // define o valor de age como 3
age == 3; // verifica se o valor de age é 3
```
{{% /notice %}}

### Prática de Comparação

1. Use o programa abaixo para praticar usando os operadores de comparação. Mude os números para ver as respostas.

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/tZs8tb" frameborder="0"></iframe>

## Estatísticas do Exame!

Patrick 🐥 e 4 de seus colegas