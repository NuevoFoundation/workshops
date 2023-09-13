---
title: "Operadores"
description: "Apresentando operadores e fazendo operações em variáveis ​​em Java."
date: 2021-10-13T00:00:00Z
weight: 4
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/wP8-F1nBPcg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## Vamos fazer matemática: operador aritmético

No último exercício, aprendemos sobre variáveis ​​e como podemos atribuir valores a uma variável de um tipo específico, como:

```java
int age = 3;  // declare a variável idade do tipo int com valor 3
age = 4;      // atribua 4 à variável idade
```

Olhando para o código acima, essencialmente adiciona 1 ao valor da variável `age`. 

E, em Java, podemos realizar operações matemáticas em variáveis ​​diretamente com **operadores aritméticos**: `+`, `-`, `*`, `/`, `%`.
Por exemplo, podemos usar o operador `+` para adicionar 1 a `age`:

```java
int age = 3;  // declare a variável idade do tipo int com valor 3
age = age + 1;// adicione 1 à idade
```

{{% notice note %}}
A seguir estão os operadores aritméticos em Java:

**Operador** | **Descrição** | **Exemplo**
------|------|--------
`+` | adição | `1 + 1 = 2`
`-` | subtração | `2 - 1 = 1`
`*` | multiplicação | `3 * 3 = 9`
`/` | divisão | `9 / 3 = 3`
`%` | módulo/resto | `10 % 4 = 2`

**Nota**: Se ambos os operandos da divisão forem inteiros, o resultado também será um inteiro. Por exemplo, `10/4` retorna 2, não 2,5, pois descartamos o restante. Se algum dos operandos for duplo, o resultado será duplo.

**Nota**: A operação de módulo obtém o restante da operação de divisão.
{{% /notice %}}

{{% notice tip %}}
Adição (`+`) é usado em String como operador de concatenação. Por exemplo:

`String name = "Patric" + "k";` é o mesmo que `String name = "Patrick";`
{{% /notice %}}

### Instruções
1.Use o programa abaixo para praticar o uso dos operadores aritméticos. Mude os números para ver as respostas.

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaBasicsOperatorsPractice" target="_blank">Launch Replit</a>

## Comparações: Operador Relacional

A seguir, vamos aprender como comparar números usando **operadores relacionais**.

Assim como na matemática, podemos comparar números usando `>`, `<`, `>=`, `<=`. Por exemplo: `(3 > 2)` é `true` (verdadeiro), ou  `(3 < 2)` é `false` (falso), valores booleanos.

{{% notice note %}}
A seguir estão os operadores relacionais em Java:

**Operador** | **Descrição** | **Exemplo**
------| ------| ------
`==` | igual a | `(3 == 3)` é`true`
`!=` | não é igual a | `(3 != 3)` é `false`
`>` | maior que | `(3 > 2)` é `true`
`<` | menor que | `(3 < 2)` é `false`
`>=` | maior ou igual a | `(3 >= 2)` é `true`
`<=` | menor ou igual a | `(2 <= 2)` é `true`

Nota: `==` e `!=` só pode ser usado em dados do mesmo tipo. Por exemplo:
```java
int x=3; 
double y=3.0; 
x==y; // Isso produziria um erro porque x e y são de tipos diferentes.
```

{{% /notice %}}

{{% notice Tip %}}
Usar um sinal de igual atribui um valor à variável. Usar dois sinais de igual compara os valores de dois elementos.

```java
age = 3;  // define o valor de age para 3
age == 3; // verifica se o valor de age é 3
```
{{% /notice %}}

### Prática de comparação

1. Use o programa abaixo para praticar o uso dos operadores de comparação. Mude os números para ver as respostas.

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaBasicsComparisonPractice" target="_blank">Launch Replit</a>

## Estatísticas do exame!

Patrick 🐥 e 4 de seus colegas de classe acabaram de fazer uma prova de música nesta aula. Estas são as notas (Grades) dos exames: Patrick(88), Tom(89), Mary(95), Chris(84), Jen(92).

Queremos produzir um relatório estatístico de notas de toda a turma. 

Este relatório lista a nota de cada aluno, a pontuação média da turma e se a média da turma é superior a 60, 70, 80, 90 (`true` ou `false`), como a seguir:

```
---------------------------
     Relatório de notas    
---------------------------

Notas dos alunos:          
- Patrick: ...
- Tom: ...
...

Média da turma: ...
- Média acima de 60: ...
- Média acima de 70: ...
- Média acima de 80: ...
- Média acima de 90: ...
```

Vamos escrever com a ajuda de operadores 🎵!

{{% notice note %}}

### Instruções:

1. Identifique todas as variáveis ​​nas instruções de impressão e declare-as começando na linha 12 com o tipo de dados e valor corretos. (Observe que existem 10 variáveis ​​no total e `average` foi declarado para você).

   Dica: por exemplo, a variável `patrickGrade` deve ser declarada e atribuída na linha 13 como `int patrickGrade = 88;`.

2. Calcule a média correta da turma e atribua-a à variável `average` (média) usando **operadores aritméticos** como `+`, `-`, `*`, `/`, `%`.

   Observe que a pontuação média é `(total de pontos)`/`(quantidade de alunos)`.

3. Atribua variáveis `over60`, `over70`, `over80`, `over90` com o valor correto usando **operadores relacionais** como `>`, `<`, `>=`, `<=`.

4. Execute o programa e veja o relatório impresso!

{{% /notice %}}

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaBasicsOperators" target="_blank">Launch Replit</a>
