---
title: "Instruções If-else"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 14
---

## Instruções If-else

Você pode usar instruções `if` para a instrução de código **run** somente se determinadas condições forem atendidas. Aqui está um exemplo:

```csharp
var myNum = (93 + 41) / 12;
if (myNum == 11)
{
    Console.WriteLine("São iguais!");
}
```

Dentro do `()` ao lado de `if`, você deve especificar uma expressão booleana. Se a expressão for `true`, o código dentro de `{ }` será executado. Neste caso, como `myNum` é igual a `11`, `Eles são iguais!` é impresso.

![alt text height="600px" width="70%"](../media/if-true.png "If-else caso verdadeiro")

Se a condição for`false`, nada acontece! Por exemplo, uma vez que `10` não é maior que `11`, `Me imprima!` não aparecerá no console.

```csharp
var happy = 10;
if (happy > 11)
{
    Console.WriteLine("Me imprima!");
}
```

![alt text height="600px" width="70%"](../media/if-false.png "If-else caso verdadeiro")

Use `else` para dizer ao computador o que fazer se a condição for falsa. Neste exemplo, `agora eu tenho impresso em vez disso!` será impresso no console.

```csharp
var happy = 10;
if (happy > 11)
{
    Console.WriteLine("Me imprima!");
}
else
{
    Console.WriteLine("Eu fui impresso em vez disso!");
}
```

![alt text height="600px" width="70%"](../media/if-else.png "If-else")

Você pode encadear muitos casos usando `else if`. Observe que ao usar `else if`, apenas o primeiro caso será avaliado. Por exemplo, No trecho de código a seguir, O `Statement 1` será impressa. Vamos pular a verificação de que `sad == 4` e `Statement 2` não será impresso, mesmo que `sad == 4` é `true`.

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

Você também pode colocar declarações `if` dentro de outras instruções `if` para algum comportamento interessante:

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

![alt text height="600px" width="70%"](../media/if-nested.png "If-else encadeado")

{{% notice tip %}}

## Trabalhando juntos

Vamos escrever um programa que primeiro imprime a seguinte linha para o console:

```
Codificar é divertido?
```

Depois, o console aguarda a entrada do usuário.

- Se o usuário digitar sim, o computador imprime `Sim, ainda bem que você está gostando!`.
- Se o usuário digitar não, o computador imprime `Ah, não, isso é muito ruim!`.
- Caso contrário, o computador imprime: `Eu não entendo você! Adeus!`.

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/NF-CSharp-blank" target="_blank">Executar Replit</a>

{{% /notice %}}

{{% notice info %}}

## Curiosidade: Instruções Switch

Usar várias declarações `if`, `if` pode ficar muito longo e confuso. Em vez disso, você pode usar instruções 'switch' se quiser comparar uma única variável com vários valores. Por exemplo, a atividade **Trabalhando Juntos** pode ser concluída usando a seguinte parte do código:

```csharp
    var input = Console.ReadLine();
    switch (input)
    {
        case "yes":
            Console.WriteLine("Sim, fico feliz que você esteja gostando!");
            break;
        case "no":
            Console.WriteLine("Ah, não, isso é muito ruim!");
            break;
        default:
            Console.WriteLine("Eu não entendo você! Até logo!");
            break;
    }
```

Cada caso representa um valor possível que a entrada da variável pode tomar. Certifique-se de usar a instrução `break` para informar ao computador que você concluiu todas as ações associadas a esse caso.

{{% /notice %}}
