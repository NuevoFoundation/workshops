---
title: "Variáveis"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 10
---

## Variáveis

Variáveis são simplesmente nomes que podemos dar a valores como strings, numbers e booleans. Usamos variáveis para armazenar informações que o computador pode acompanhar.

Veja como declarar uma variável chamada `str`. Dizemos que `str` tem o valor `"Hello World"`. Você pode descrever o que as outras variáveis abaixo significam?

```csharp
var str = "Hello World";
var x = 88;
var happy = true;
```

Pressione **run**. Observe que as variáveis não são impressas no console. Em vez disso, a variável simplesmente armazena a cadeia de caracteres ou número ou booleano na memória do computador.

![alt text height="600px" width="70%"](../media/variables-intro.png "Introdução às variáveis")

Podemos usar essas variáveis em outras afirmações. Por exemplo, o código a seguir imprimiria `Hello Nuevo Foundation` no console:

```csharp
var str1 = "Hello";
var str2 = "Nuevo Foundation";
Console.WriteLine(str1 + " " + str2);
```

![alt text height="600px" width="70%"](../media/variables-strings.png "Variáveis com cadeias de caracteres")

Você pode alterar o valor de uma variável a qualquer momento usando o operador `=` novamente. Se você estiver alterando um valor de uma variável, não precisará usar `var` novamente. No exemplo a seguir, `Hola` será impresso em vez de `Olá`.

```csharp
var str = "Hello";
str = "Olá";
Console.WriteLine(str);
```

![alt text height="600px" width="70%"](../media/variables-replace.png "Variáveis substituindo valores")

Aqui está outro exemplo: `10` será impresso em vez de `9`.

```csharp
var num = 9;
num = num + 1;
Console.WriteLine(num);
```

![alt text height="600px" width="70%"](../media/variables-numbers.png "Variáveis com números")

Observe que você NÃO PODE substituir uma variável de cadeia de caracteres por um número ou um booleano e, da mesma forma, para outras combinações. O código de exemplo a seguir NÃO funcionará:

```csharp
var happy = "Hello";
happy = 9;
```

![alt text height="600px" width="70%"](../media/variables-invalid.png "Variáveis inválidas")

Outra maneira de declarar variáveis é substituir var pelo tipo (`string`, `int`, `bool`) da variável que você está criando. Ao declarar o tipo explicitamente, você evita o problema que vemos acima. Por exemplo:

```csharp
string str = "Hello World";
int x = 88;
bool happy = true;
```

Observe que `var`, `string`, `int` ou `bool` são palavras-chave especiais em C#, portanto, você não pode criar variáveis com esses nomes.

{{% notice tip %}}

## Trabalhando juntos

Vamos criar duas novas variáveis:

- Uma variável chamada comp que armazena a cadeia de caracteres `"Computer"`.
- Uma variável chamada cinco que armazena o número `5`.

Em seguida, vamos usar as variáveis para imprimir (`Console.WriteLine`) o seguinte para o console. Vamos tentar fazer isso usando as variáveis!

**_Hint:_** usaremos o operador `+` para combinar cadeias de caracteres e também para adicionar números.

```
Computer
5
ComputerComputer
10
ComputerComputerComputer
15
```

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/NF-CSharp-blank" target="_blank">Executar Replit</a>

{{% /notice %}}
