---
title: "Variáveis e Tipos de Dados"
description: "Introduzir tipos e variáveis em C#."
date: 2024-09-16T00:00:00Z
weight: 4
---

## Variáveis: Nomeie!

No primeiro exercício, aprendemos a imprimir diferentes declarações com `Console.WriteLine() e Console.Write()`.

Embora seja ótimo imprimir um número ou uma frase, não lhes demos um significado, e se quisermos usar a frase ou número novamente, teríamos que digitá-los novamente.

Em C#, introduzimos a ideia de uma **variável** para dados. Uma variável armazena um pedaço de dados com um nome.

Por exemplo, pode haver uma variável chamada `myName` que é atribuída ao valor `"Ann"`. Outra variável pode ser chamada `age` e é atribuída ao número `12`.

## Qual é o Tipo!

Então, como criamos essas variáveis em C# para armazenar dados?

Antes de aprender a criar variáveis, precisamos aprender o conceito de **tipo de dado** em C# ou apenas **tipo** para abreviar. Tipo em C# descreve o que está sendo armazenado. Se você tem uma variável de número, ela só pode conter números, não frases ou símbolos. Cada variável tem seu próprio tipo que controla que tipo de dado ela pode conter.

Por exemplo, poderíamos ter uma variável chamada `age` que armazena o número `12`. Se você tentar armazenar a palavra `"twelve"` em `age` gerará um erro porque só reconhece números.

Em C#, para uma variável armazenar números inteiros, usa-se o tipo `int`. Declaramos uma variável `int` chamada `age` com dado `3` com a linha de código:

```
int age = 12;
```
Em geral, para declarar uma variável, escrevemos no formato: `[tipo de dado] [nome da variável] = [dado];`.
{{% notice note %}}
Os seguintes são os tipos de dados importantes que foram embutidos em C#:

**Tipo** | **Descrição** | **Exemplos**
--------|-----------|----------
`int` | inteiro | `20`, `30`, `35`
`char` | caractere como um símbolo ou uma única letra do alfabeto | `'A'`,`'b'`, `'('`, `']'`
`string` | uma sequência de `char` | `"Hello"`, `"Bonjour"`, `"Hola"`
`bool` | booleano, tem um valor de `true` ou `false` | `true`, `false`
`double` | números fracionários | `2.0`, `3.14`, `9.33`

{{% /notice %}}

Usando nosso exemplo anterior, para declarar essas variáveis em C#, digitamos o seguinte:

```C#
string name = "Ann";
int age = 12;
boolean loveMusic = true;
```

A última variável é interessante. Ela só pode ter um valor de `true` ou `false`. Veremos que isso pode ser muito útil nas seções mais avançadas deste workshop.

## Brinque com variáveis

Vamos ver o que podemos fazer com variáveis.

No Quadro .NET Fiddle abaixo, faça um fork do Fiddle e tente inserir estas linhas e **execute**:

```C#
int age = 10;
Console.WriteLine(age); // imprime 10
age = 12; // atribui o valor 12 à variável age
Console.WriteLine(age); // imprime 12
```
Podemos atribuir um valor a uma variável, referenciá-la e depois mudar o valor.

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/PPCCzG" frameborder="0"></iframe>

## Qual é o Tipo -- Ajude o Patrick!

Patrick 🐥 não é um mestre dos tipos de dados! Ele frequentemente os confunde ao declarar variáveis. Vamos ajudá-lo a corrigir seus erros no .NET Fiddle abaixo.

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/xKMKvn" frameborder="0"></iframe>
