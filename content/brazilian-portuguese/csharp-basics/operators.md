---
title: "Operadores"
description: "Introduza operadores e realize operações em variáveis no C#."
date: 2024-09-16T00:00:00Z
weight: 5
---

## Vamos fazer Matemática: Operador Aritmético

No último exercício, aprendemos sobre variáveis e como podemos atribuir valores a uma variável de um tipo específico, como:

```C#
int idade = 3;  // declara a variável idade do tipo int com valor 3
idade = 4;      // atribui 4 à variável idade
```

Observando o código acima, ele basicamente acrescenta 1 ao valor da variável `idade`. 

E, no C#, podemos realizar operações matemáticas diretamente em variáveis com **operadores aritméticos**: `+`, `-`, `*`, `/`, `%`.
Por exemplo, podemos usar o operador de adição `+` para adicionar 1 a `idade`:

```c#
int idade = 3;  // declara a variável idade do tipo int com valor 3
idade = idade + 1;// adiciona 1 a idade
```

{{% notice note %}}
Os seguintes são os operadores aritméticos em C#:

**Operador** | **Descrição** | **Exemplo**
------|------|--------
`+` | adição | `1 + 1 = 2`
`-` | subtração | `2 - 1 = 1`
`*` | multiplicação | `3 * 3 = 9`
`/` | divisão | `9 / 3 = 3`
`%` | módulo/resto | `10 % 4 = 2`

**Nota**: Se ambos os operandos da divisão forem inteiros, o resultado também será um inteiro. Por exemplo, `10 / 4` retorna 2, não 2.5 já que descartamos o resto. Se um dos operandos for um double, o resultado será um double.

**Nota**: Use a operação de módulo (`%`) para obter o resto da operação de divisão.

{{% /notice %}}

{{% notice tip %}}
O operador de adição (`+`) é usado em Strings como um operador de concatenação. Por exemplo:

`String nome = "Patric" + "k";` é o mesmo que `String nome = "Patrick";`
{{% /notice %}}

### Instruções
1. Use o programa abaixo para praticar o uso dos operadores aritméticos. Mude os números para ver as respostas.

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/dUSTOt" frameborder="0"></iframe>

## Comparações: Operador Relacional

A seguir, vamos aprender como comparar números, usando **operadores relacionais**.

Assim como na matemática, podemos comparar números usando `>`, `<`, `>=`, `<=`. Por exemplo: `(3 > 2)` é `true`, um valor booleano.

{{% notice note %}}
Os seguintes são os operadores relacionais em C#:

**Operador** | **Descrição** | **Exemplo**
------| ------| ------
`==` | igual a | `(3 == 3)` é `true`
`!=` | diferente de | `(3 != 3)` é `false`
`>` | maior que | `(3 > 2)` é `true`
`<` | menor que | `(3 < 2)` é `false`
`>=` | maior ou igual a | `(3 >= 2)` é `true`
`<=` | menor ou igual a | `(2 <= 2)` é `true`

Nota: `==` e `!=` só podem ser usados em dados do mesmo tipo. Por exemplo:
```csharp
int x=3; 
double y=3.0; 
x==y; // Isso gerará um erro porque x e y são de tipos diferentes.
```

{{% /notice %}}

{{% notice tip %}}
Usar 1 sinal de igual atribui um valor à variável. Usar 2 sinais de igual compara os valores de dois elementos.

```csharp
idade = 3;  // define o valor de idade para 3
idade == 3; // verifica se o valor de idade é 3
```
{{% /notice %}}

### Prática de Comparação

1. Use o programa abaixo para praticar o uso dos operadores de comparação. Mude os números para ver as respostas.

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/tZs8tb" frameborder="0"></iframe>

## Estatísticas do Exame!

Patrick 🐥 e 4