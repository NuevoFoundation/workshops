---
title: "Operadores"
description: "Apresentar operadores e realizar operações em variáveis em C#."
date: 2024-09-16T00:00:00Z
weight: 5
---

## Vamos fazer Matemática: Operador Aritmético

No último exercício, aprendemos sobre variáveis e como podemos atribuir valores a uma variável de um tipo específico, como:

`int age = 3;  // declara variável age do tipo int com valor 3` e `age = 4;      // atribui 4 à variável age`

Observando o código acima, ele essencialmente adiciona 1 ao valor da variável `age`. 

E, em C#, podemos realizar operações matemáticas em variáveis diretamente com **operadores aritméticos**: `+`, `-`, `*`, `/`, `%`.
Por exemplo, podemos usar o operador de adição `+` para adicionar 1 a `age`:

`int age = 3;  // declara variável age do tipo int com valor 3` e `age = age + 1;// adiciona 1 a age`

{{% notice note %}}
Os seguintes são os operadores aritméticos em C#:

**Operador** | **Descrição** | **Exemplo**
------|------|--------
`+` | adição | `1 + 1 = 2`
`-` | subtração | `2 - 1 = 1`
`*` | multiplicação | `3 * 3 = 9`
`/` | divisão | `9 / 3 = 3`
`%` | módulo/resto | `10 % 4 = 2`

**Nota**: Se ambos os operandos da divisão forem números inteiros, o resultado também será um número inteiro. Por exemplo, `10 / 4` retorna 2, não 2.5, pois descartamos o resto. Se qualquer um dos operandos for um double, o resultado será um double.

**Nota**: Use a operação de módulo (`%`) para obter o resto da operação de divisão.

{{% /notice %}}

{{% notice tip %}}
O operador de adição (`+`) é usado em Strings como um operador de concatenação. Por exemplo:

`String name = "Patric" + "k";` é o mesmo que `String name = "Patrick";`
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

Nota: `==` e `!=` só podem ser usados em dados do mesmo tipo. Por exemplo: `int x=3; double y=3.0; x==y; // Isso produziria um erro porque x e y são de tipos diferentes.`

{{% /notice %}}

{{% notice tip %}}
Usar 1 sinal de igual atribui um valor à variável. Usar 2 sinais de igual compara os valores de dois elementos.

`age = 3;  // define o valor de age como 3` e `age == 3; // verifica se o valor de age é 3`
{{% /notice %}}

### Prática de Comparação

1. Use o programa abaixo para praticar o uso dos operadores de comparação. Mude os números para ver as respostas.

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/tZs8tb" frameborder="0"></iframe>

## Estatísticas do Exame!

Patrick 🐥 e 4 de seus colegas de classe acabaram de fazer um exame de música nesta turma. Estas são as notas de seus exames: Patrick(88), Tom(89), Mary(95), Chris(84), Jen(92).

Queremos produzir um relatório de estatísticas de notas de toda a turma. 

Este relatório lista a nota de cada estudante, a pontuação média da turma e se a média da turma está acima de 60, 70, 80, 90 (`true` ou `false`), como o seguinte: `---------------------------     Relatório de Notas de Música     --------------------------- Notas dos Estudantes: - Patrick: ... - Tom: ... ... Média da Turma: ... - Média Acima de 60: ... - Média Acima de 70: ... - Média Acima de 80: ... - Média Acima de 90: ...`

Vamos escrever isso com a ajuda de operadores 🎵!

{{% notice note %}}

### Instruções:

1. Identifique todas as variáveis nas declarações de impressão e declare-as começando na linha 12 com o tipo de dados correto e valor. Note que há 10 variáveis no total, e `average` já foi declarada para você).

   Dica: por exemplo, a variável `patrickGrade` deve ser declarada e atribuída na linha 13 como `int patrickGrade = 88;`.

2. Calcule a média correta da turma e atribua-a à variável `average` usando **operadores aritméticos** como `+`, `-`, `*`, `/`, `%`. Certifique-se de usar parênteses ao redor do número total de pontos.

   Note que uma pontuação média é `(total de pontos)`/`(número de estudantes)`.

3. Atribua às variáveis `over60`, `over70`, `over80`, `over90` o valor correto usando **operadores relacionais** como `>`, `<`, `>=`, `<=`.

4. Execute o programa e veja o relatório impresso!

{{% /notice %}}

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/mM7xbj" frameborder="0"></iframe>