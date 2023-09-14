---
title: "Variáveis ​​e Tipos"
description: "Apresentando tipos e variáveis ​​em Java."
date: 2021-10-13T00:00:00Z
weight: 3
---

## Variáveis: Nomeie-as!

No último exercício, aprendemos a imprimir diferentes declarações com `System.out.print()`.

Embora seja ótimo imprimir um número ou uma frase, não lhes demos um significado.

Em Java, introduzimos a ideia de uma **variável** para dados. Uma variável é como uma caixa que armazena um dado com um nome.

Por exemplo, pode haver uma variável chamada `myName` que armazenou `"Patrick"`, outra variável chamada `loveMusic` que armazenou `true` e outra variável chamada `age` que armazenou `3`. Assim como a imagem abaixo:

<img src="../images/variable.png" height="200" alt="3 caixas. A primeira caixa tem texto branco fora, myName (meuNome), e texto branco dentro, 'Patrick'. A segunda caixa tem texto branco fora, loveMusic (amaMusica), e texto branco dentro, true (verdadeiro). A terceira caixa tem texto branco fora, age (idade), e texto branco dentro, 3."/>

## Qual é o tipo!

Então, como criamos essas caixas ou variáveis ​​em Java para armazenar dados?

Antes de aprender como criar variáveis, precisamos aprender o conceito de **tipo** em Java. Tipo em Java descreve o que está sendo armazenado na caixa. Se você tiver uma caixa inteira, ela conterá apenas números inteiros, não frases ou símbolos. Cada variável possui seu próprio tipo que a restringe ao armazenamento de um tipo específico de dados.

Por exemplo, a variável chamada `age` que armazena o número `3` deve conter números inteiros, não sentenças ou símbolos.

Em Java, uma variável que armazena números inteiros é do tipo `int`. Declaramos uma variável `int` chamada `age` com dados `3` usando a linha de código:

```java
int age = 3;
```

Em geral, para declarar uma variável nós as escrevemos no formato: `[tipo de dados] [nome da variável] = [dado];`.
{{% notice note %}}
A seguir estão os tipos de dados importantes que foram integrados em Java:

**Tipo** | **Descrição** | **Exemplos**
--------|-----------|----------
`int` | inteiro | `20`, `30`, `35`
`char` | caractere, como um símbolo ou uma única letra do alfabeto | `'A'`,`'b'`, `'('`, `']'`
`String` | uma sequência de `char` | `"Hello"`, `"Hola"`, `"Olá"`
`boolean` | tem o valor de verdadeiro (true) ou falso (false) `true` or `false` | `true`, `false`
double | números fracionados | `2.0`, `3.14`, `9.33`

{{% /notice %}}

Vamos revisitar as três variáveis ​​de que falamos e identificar seus tipos de dados. 

<img src="../images/dataType.png" height="200" alt="3 caixas. A primeira caixa tem texto branco fora, myName (meuNome), e texto branco dentro, 'Patrick'. Flecha vermelha apontando para a caixa com texto, type String (tipo String). A segunda caixa tem texto branco fora, loveMusic (amaMusica), e texto branco dentro, true (verdadeiro). Flecha vermelha apontando para a caixa com texto, type boolean (tipo booleano). A terceira caixa tem texto branco fora, age (idade), e texto branco dentro, 3. Flecha vermelha apontando para a caixa com texto, type int (tipo int)"/> 

Para declarar essas variáveis ​​em Java, digitamos o seguinte:

```java
String name = "Patrick";
int age = 10;
boolean loveMusic = true;
```

## Qual é o tipo - Ajude Patrick!

Patrick 🐥 não é um mestre em tipos de dados! Ele frequentemente os confundia ao declarar variáveis. Vamos ajudá-lo a corrigir seu erro:

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaBasicsDataType" target="_blank">Iniciar Replit</a>

{{% notice tip %}}
Ao armazenar dados em variáveis, você pode usar esses dados posteriormente ou alterá-los, atribuindo-os a dados diferentes do mesmo tipo. Por exemplo:

```java
int age = 10;
System.out.println(age); // prints out 10
age = 11; // assign data 11 to the variable age
System.out.println(age); // prints out 11
```

{{% /notice %}}

## Qual o tipo? -- Acompanhe os Números!

Agora considere o seguinte código. Qual você acha que é a saída? Acompanhe os valores de cada variável e teste-os abaixo!

```java
double x = 2.3;
double y = 10.0;
int z = 4;

x = y;
y = x;
z = 0;
z = z;
System.out.println("x: " + x + " y: " + y + " z: " + z );
```

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaBasicsVariable" target="_blank">Iniciar Replit</a>

{{% notice tip %}}
#### Explicando o exemplo
Nas linhas 1-3 declaramos as variáveis ​​e definimos os valores iniciais para `x` (2.3), `y` (10.0) e `z` (4).
Na linha 4, definimos `x` com o valor de `y` (10.0).
Na linha 5, definimos `y` como o valor de `x`, que foi definido como 10.0 (10.0).
Na linha 6, definimos `z` como 0.
Na linha 7, definimos `z` com o valor de `z`, que é 0 (0).
{{% /notice %}}
