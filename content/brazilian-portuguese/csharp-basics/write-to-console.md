---
title: "Escrever no Console"
description: "Introduzir métodos de impressão em C#."
date: 2024-09-16T00:00:00Z
weight: 2
---

## Seu primeiro programa em C#

Nosso primeiro exercício é se familiarizar com a estrutura de uma aplicação C# simples que escreve no console.

Vamos tentar executar um programa C# que imprime `Hello World` no console. A linha de código `Console.WriteLine ("Hello World");` faz isso por nós. Ela instrui o computador a escrever na tela o que estiver entre os ().

### Vamos escrever algum código!

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/0g4Vu7" frameborder="0"></iframe>

No quadro acima do .NET Fiddle, adicione uma nova linha de código abaixo da primeira linha para imprimir "Hello *seu nome*". Deve ficar assim.

<img src="../images/Step1.png" height="300" alt="A tela inicial de um fiddle" />

Você deve ver sua saída na parte inferior da tela. Legal, né?

Vamos tentar imprimir outras coisas. Adicione algumas linhas de código para:
1. Imprimir números colocando números nos parênteses (i.e. `Console.WriteLine(42);`). Sem necessidade de aspas duplas.
2. Juntar algum texto (i.e. `Console.WriteLine("Hi " + "Sally");`)

{{% notice tip %}}
### Você percebeu que todas as instruções que digitou foram impressas em linhas diferentes?

Às vezes, queremos escrever na mesma linha. Usamos um código ligeiramente diferente: `Console.Write` em vez de `Console.WriteLine`.

Adicione duas linhas de código:
```csharp
Console.Write("I like to eat ");
Console.Write("apples.");
```

E experimente.
{{% /notice %}}

{{% notice warning %}}
### !! Importante !! Às vezes, você não pode simplesmente colocar caracteres entre aspas ""

Ao colocar caracteres entre `" "` em uma instrução de impressão, às vezes é fácil confundir o computador sobre quais caracteres imprimir.

Por exemplo, como dizemos ao computador para imprimir `"`?

Se você digitar `Console.WriteLine(""");`, obterá um erro porque o computador não consegue identificar onde o texto termina!

Em vez disso, certos caracteres precisam ser <b>escapados</b> adicionando um `\` na frente deles.

```csharp
Console.Writeline("\"");`  // isso imprime "
```
{{% /notice %}}