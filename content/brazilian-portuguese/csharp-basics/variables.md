---
title: "Variáveis e Tipos de Dados"
description: "Introduzir tipos e variáveis em C#."
date: 2024-09-16T00:00:00Z
weight: 4
---

## Variáveis: Dê um Nome!

No primeiro exercício, aprendemos a imprimir diferentes declarações com `Console.WriteLine()` e `Console.Write()`.

Embora seja ótimo imprimir um número ou uma frase, não demos a eles um significado e se quiséssemos usar a frase ou número novamente, teríamos que digitá-los novamente.

Em C#, introduzimos a ideia de uma **variável** para dados. Uma variável armazena um pedaço de dados com um nome.

Por exemplo, pode haver uma variável chamada `myName` que recebe um valor de `"Ann"`. Outra variável pode se chamar `age` e ela recebe o número `12`.

## Que Tipo!

Então como criamos essas variáveis em C# para armazenar dados?

Antes de aprender como criar variáveis, precisamos aprender o conceito de **tipo de dados** em C# ou apenas **tipo** para abreviar. Tipo em C# descreve o que está sendo armazenado. Se você tem uma variável de número, ela só pode conter números, não frases ou símbolos. Cada variável tem seu próprio tipo que controla que tipo de dados ela pode conter.

Por exemplo, poderíamos ter uma variável chamada `age` que armazena o número `12`. Se você tentar armazenar a palavra `"twelve"` em `age` isso gerará um erro porque ela só conhece números.

Em C#, para uma variável armazenar números inteiros, use o tipo `int`. Declaramos uma variável `int` chamada `age` com dados `3` com a linha de código: `int age = 12;`

Em geral, para declarar uma variável escrevemos no formato: `[tipo de dados] [nome da variável] = [dados];`.

{{% notice note %}}
Os seguintes são os tipos de dados importantes que já vêm integrados no C#:

**Tipo** | **Descrição** | **Exemplos**
--------|-----------|----------
`int` | número inteiro | `20`, `30`, `35`
`char` | caractere como um símbolo ou uma única letra do alfabeto | `'A'`,`'b'`, `'('`, `']'`
`string` | uma sequência de `char` | `"Hello"`, `"Bonjour"`, `"Hola"`
`bool` | booleano, tem um valor de `true` ou `false` | `true`, `false`
`double` | números fracionários | `2.0`, `3.14`, `9.33`

{{% /notice %}}

Usando nosso exemplo anterior, para declarar essas variáveis em C#, digitamos o seguinte: `string name = "Ann"; int age = 12; boolean loveMusic = true;`

A última variável é interessante. Ela só pode ter um valor de `true` ou `false`. Veremos que isso pode ser muito útil nas seções mais avançadas desta oficina.

## Brinque com variáveis

Vamos ver o que podemos fazer com variáveis. 

No Quadro .NET Fiddle abaixo, faça um fork do Fiddle e tente digitar essas linhas e **executar**: `int age = 10; Console.WriteLine(age); // imprime 10 age = 12; // atribui dados 12 à variável age Console.WriteLine(age); // imprime 12`

Podemos atribuir um valor a uma variável, referenciá-la e depois mudar o valor.

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/PPCCzG" frameborder="0"></iframe>

## Que Tipo -- Ajude o Patrick!

Patrick 🐥 não é um mestre em tipos de dados! Ele frequentemente os confunde ao declarar variáveis. Vamos ajudá-lo a corrigir seus erros no .NET Fiddle abaixo.

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/xKMKvn" frameborder="0"></iframe>