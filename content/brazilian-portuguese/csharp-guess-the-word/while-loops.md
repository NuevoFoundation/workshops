---
title: "Laços While"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 16
---

## Laços While

`while` loops são uma forma fácil de repetir a execução de linhas sem precisar escrever a mesma linha várias vezes. Por exemplo, para mostrar `Olá Mundo` cinco vezes seguidas, você pode fazer:

```csharp
var counter = 1;
while (counter <= 5)
{
    Console.WriteLine("Olá Mundo");
    counter = counter + 1;
}
```

Assim como em um `if`, dentro dos `()` ao lado de `while`, você deve colocar uma expressão booleana. Se a expressão for `true`, o código dentro das chaves `{ }` será executado. Porém, depois que tudo dentro das chaves for executado, voltamos ao topo do `while` e verificamos a expressão booleana novamente. Se a expressão continuar sendo `true`, o loop será repetido.

![alt text height="600px" width="70%"](../media/while-1.png "While 1")

Você também pode colocar comandos `if` dentro de loops `while` para fazer algo interessante:

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

Aqui está um exemplo de um loop infinito – você vê o que está errado? O que você pode fazer para que o código abaixo mostre `Spam!` apenas 100 vezes?

```csharp
var counter = 100;
while (counter > 0)
{
    Console.WriteLine("Spam!");
}
```

{{% notice tip %}}

## Trabalhando Juntos

Pegue seu código da atividade anterior. Vamos expandir o código para que, em vez do programa terminar após a entrada do usuário uma vez, ele permita que o usuário responda à pergunta 10 vezes antes de sair. Cuidado com loops infinitos!

{{% /notice %}}
