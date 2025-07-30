---
title: "Variáveis"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 10
---

## Variáveis

Variáveis são apenas nomes que podemos dar para valores como textos, números e valores booleanos. Usamos variáveis para guardar informações que o computador pode lembrar.

Aqui está como declarar uma variável chamada `str`. Dizemos que `str` tem o valor `"Hello World"`. Você consegue descrever o que as outras variáveis abaixo significam?

```csharp
var str = "Hello World";
var x = 88;
var happy = true;
```

Aperte **run**. Note que variáveis não são mostradas no console. Em vez disso, a variável apenas guarda o texto, número ou valor booleano na memória do computador.

![alt text height="600px" width="70%"](../media/variables-intro.png "Introdução às variáveis")

Podemos usar essas variáveis em outros comandos. Por exemplo, o código abaixo mostraria `Hello Nuevo Foundation` no console:

```csharp
var str1 = "Hello";
var str2 = "Nuevo Foundation";
Console.WriteLine(str1 + " " + str2);
```

![alt text height="600px" width="70%"](../media/variables-strings.png "Variáveis com textos")

Você pode mudar o valor de uma variável a qualquer momento usando o operador `=` novamente. Se você estiver mudando o valor de uma variável, não precisa usar `var` outra vez. No exemplo abaixo, `Hola` será mostrado no lugar de `Hello`.

```csharp
var str = "Hello";
str = "Hola";
Console.WriteLine(str);
```

![alt text height="600px" width="70%"](../media/variables-replace.png "Variáveis trocando valores")

Aqui vai outro exemplo: `10` será mostrado no lugar de `9`.

```csharp
var num = 9;
num = num + 1;
Console.WriteLine(num);
```

![alt text height="600px" width="70%"](../media/variables-numbers.png "Variáveis com números")

Note que você NÃO PODE trocar uma variável de texto por um número ou booleano, e o mesmo vale para outras combinações. O código de exemplo abaixo NÃO vai funcionar:

```csharp
var happy = "Hello";
happy = 9;
```

![alt text height="600px" width="70%"](../media/variables-invalid.png "Variáveis inválidas")

Outra forma de declarar variáveis é substituir var pelo tipo (`string`, `int`, `bool`) da variável que você está criando. Declarando o tipo de forma explícita, você evita o problema que vimos acima. Por exemplo:

```csharp
string str = "Hello World";
int x = 88;
bool happy = true;
```

Note que `var`, `string`, `int` ou `bool` são palavras especiais em C#, então você não pode criar variáveis com esses nomes.

{{% notice tip %}}

## Trabalhando Juntos

Vamos criar duas novas variáveis:

- Uma variável chamada comp que guarda o texto `"Computer"`.
- Uma variável chamada five que guarda o número `5`.

Depois, vamos usar as variáveis para mostrar (`Console.WriteLine`) o seguinte no console. Vamos tentar fazer isso usando as variáveis!

**_Dica:_** vamos usar o operador `+` para juntar textos, e também para somar números.

```
Computer
5
ComputerComputer
10
ComputerComputerComputer
15
```

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/ULv0JH" frameborder="0"></iframe>

{{% /notice %}}
