---
title: "Comandos If-else"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 14
---

## Comandos If-else

Você pode usar `if` para **executar** um comando apenas se certas condições forem atendidas. Aqui está um exemplo:

```csharp
var myNum = (93 + 41) / 12;
if (myNum == 11)
{
    Console.WriteLine("They are equal!");
}
```

Dentro dos `()` ao lado de `if`, você deve colocar uma expressão booleana. Se a expressão for `true`, o código dentro de `{ }` será executado. Neste caso, como `myNum` é igual a `11`, `They are equal!` é mostrado.

![alt text height="600px" width="70%"](../media/if-true.png "If-else true case")

Se a condição for `false`, nada acontece! Por exemplo, como `10` não é maior que `11`, `Print me!` não será mostrado no console.

```csharp
var happy = 10;
if (happy > 11)
{
    Console.WriteLine("Print me!");
}
```

![alt text height="600px" width="70%"](../media/if-false.png "If-else false case")

Use `else` para dizer ao computador o que fazer se a condição for falsa. Neste exemplo, `I got printed instead!` será mostrado no console.

```csharp
var happy = 10;
if (happy > 11)
{
    Console.WriteLine("Print me!");
}
else
{
    Console.WriteLine("I got printed instead!");
}
```

![alt text height="600px" width="70%"](../media/if-else.png "If-else")

Você pode encadear vários casos usando `else if`. Note que quando usamos `else if`, apenas o primeiro caso verdadeiro será executado. Por exemplo, no código abaixo, `Statement 1` será mostrado. O teste `sad == 4` será ignorado e `Statement 2` não será mostrado, mesmo que `sad == 4` seja `true`.

```csharp
var sad = 4;
if (sad < 9)
{
    Console.WriteLine("Statement 1");
}
else if (sad == 4)
{
    Console.WriteLine("Statement 2");
}
else
{
    Console.WriteLine("Statement 3");
}
```

![alt text height="600px" width="70%"](../media/if-three.png "If-else three statements")

Você também pode colocar comandos `if` dentro de outros `if` para criar comportamentos interessantes:

```csharp
var num1 = 10;
var num2 = 20;
if (num1 < num2)
{
    if (num2 < 30)
    {
        Console.WriteLine("Hello!");
    }
    else
    {
        Console.WriteLine("Hola!");
    }
}
```

![alt text height="600px" width="70%"](../media/if-nested.png "If-else nested")

{{% notice tip %}}

## Trabalhando Juntos

Vamos escrever um programa que primeiro mostra a seguinte linha no console:

```
Is coding fun?
```

Depois, o console espera a entrada do usuário.

- Se o usuário digitar yes, o computador mostra `Yes, I'm glad you're enjoying it!`.
- Se o usuário digitar no, o computador mostra `Oh no, that's too bad!`.
- Caso contrário, o computador mostra: `I don't understand you! Goodbye!`.

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/ULv0JH" frameborder="0"></iframe>

{{% /notice %}}

{{% notice info %}}

## Curiosidade: Comandos Switch

Usar muitos `if` e `else` pode deixar o código muito longo e confuso. Você pode usar `switch` se quiser comparar uma única variável com vários valores. Por exemplo, a atividade **Trabalhando Juntos** pode ser feita com o código abaixo:

```csharp
    var input = Console.ReadLine();
    switch (input)
    {
        case "yes":
            Console.WriteLine("Yes, I'm glad you're enjoying it!");
            break;
        case "no":
            Console.WriteLine("Oh no, that's too bad!");
            break;
        default:
            Console.WriteLine("I don't understand you! Goodbye!");
            break;
    }
```

Cada `case` representa um valor possível que a variável `input` pode ter. Certifique-se de usar o `break` para dizer ao computador que terminou todas as ações desse caso.

{{% /notice %}}
