---
title: "While loops"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 16
---

## While loops

loops `while` são uma maneira fácil de repetir a execução de linhas sem ter que reutilizar uma linha muitas vezes. Por exemplo, para imprimir `Hello World` cinco vezes seguidas, você pode fazer:

```csharp
var counter = 1;
while (counter <= 5)
{
    Console.WriteLine("Hello World");
    counter = counter + 1;
}
```

Como uma instrução `if`, dentro do `()` ao lado de `while`, você deve especificar uma expressão booleana. Se a expressão for `true`, o código dentro das chaves `{ }` será executado. No entanto, depois que tudo dentro das chaves é executado, voltamos ao topo do loop `while` e verificamos a expressão booleana novamente. Se a expressão booleana continuar a ser `true`, o loop será repetido.

![alt text height="600px" width="70%"](../media/while-1.png "While 1")

You can also place `if` statements in `while` loops to do some interesting behavior:

```csharp
var counter = 1;
while (counter <= 10)
{
    if (counter < 5)
    {
        Console.WriteLine("Menor que 5!");
    }
    else
    {
        Console.WriteLine("Maior que ou igual à 5!");
    }
    counter = counter + 1;
}
```

![alt text height="600px" width="70%"](../media/while-2.png "While 2")

Aqui está um exemplo de um loop infinito - você vê o que está errado? O que você pode fazer para que o seguinte pedaço de código imprima `Spam!` apenas 100 vezes?

```csharp
var counter = 100;
while (counter > 0)
{
    Console.WriteLine("Spam!");
}
```

{{% notice tip %}}

## Trabalhando juntos

Pegue seu código da atividade anterior. Vamos expandir o código para que, em vez de o programa terminar depois que o usuário entrar uma vez, permita que o usuário responda à pergunta 10 vezes antes de sair. Tenha cuidado com loops infinitos!

{{% /notice %}}
