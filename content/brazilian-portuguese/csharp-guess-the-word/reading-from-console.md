---
title: "Lendo do Console"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 12
---

## Lendo do Console

Agora que sabemos o básico sobre variáveis, podemos aceitar algo que o usuário digite. Use a linha abaixo para dizer ao console que ele deve esperar até que o usuário digite algo. Depois, o computador pega o que foi digitado e guarda na variável chamada `input`.

```csharp
var input = Console.ReadLine();
```

Aqui está um exemplo de como usar `Console.ReadLine` para aceitar o que o usuário digitar:

```csharp
Console.WriteLine("Type in something:");
var input = Console.ReadLine();
Console.WriteLine("You typed in: " + input);
```

Quando o usuário aperta **run**, ele vê o seguinte programa:

![alt text height="600px" width="70%"](../media/reading-input-1.png "Lendo do input antes de digitar")

Nesse caso, depois que o usuário digita `Hello World!` no console, o programa mostra no console:

![alt text height="600px" width="70%"](../media/reading-input-2.png "Lendo do input depois de digitar")

{{% notice tip %}}

## Trabalhando Juntos

Escreva um programa que primeiro mostre as duas linhas abaixo no console:

```
Welcome!
How can I help you today?
```

Depois, o console espera o usuário digitar algo. Quando o usuário digita e aperta Enter, o computador mostra:

```
You asked: [input]?
I don't know the answer to that! Goodbye!
```

`[input]` deve ser substituído pelo que o usuário digitou no console.

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/ULv0JH" frameborder="0"></iframe>

{{% /notice %}}
