---
title: "Escrever no Console"
description: "Introduzir métodos de impressão em C#."
date: 2024-09-16T00:00:00Z
weight: 2
---

## Seu primeiro programa C#

Nosso primeiro exercício é ficar confortável com a estrutura de uma aplicação C# simples que escreve no console.

Vamos tentar executar um programa C# que imprime `Hello World` no console. A linha de código `Console.WriteLine ("Hello World");` faz isso para nós. Ela diz ao computador para escrever o que estiver entre os () na tela.

### Vamos escrever algum código!

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/0g4Vu7" frameborder="0"></iframe>

No quadro .NET Fiddle acima, adicione uma nova linha de código abaixo da primeira linha para imprimir "Hello *seu nome*". Deve ficar parecido com isso.

<img src="../images/Step1.png" height="300" alt="A tela inicial de um fiddle" />

Você deve ver sua saída na parte inferior da tela. Legal, né?

Vamos tentar imprimir outras coisas. Adicione algumas linhas adicionais de código para:
1. Imprimir números colocando números nos parênteses (ou seja, `Console.WriteLine(42);`). Não precisa de aspas duplas.
2. Juntar algum texto (ou seja, `Console.WriteLine("Hi " + "Sally");`)

{{% notice tip %}}
### Você notou que todas as declarações que você digitou imprimiram em linhas diferentes?

Às vezes queremos escrever na mesma linha. Usamos um código um pouco diferente `Console.Write` em vez de `Console.WriteLine`.

Adicione duas linhas de código: `Console.Write("I like to eat "); Console.Write("apples.");`

E dê uma chance.
{{% /notice %}}

{{% notice warning %}}
### !! Importante !! Às vezes você não pode simplesmente colocar caracteres entre " "

Ao colocar caracteres entre `" "` em uma declaração de impressão, às vezes é fácil confundir o computador sobre quais caracteres imprimir.

Por exemplo, como dizemos ao computador para imprimir `"`?

Se você digitar `Console.WriteLine(""");`, você receberá um erro porque o computador não consegue identificar onde o texto termina!

Em vez disso, certos caracteres precisam ser <b>escapados</b> adicionando uma `\` na frente dele.

`Console.Writeline("\"");  // isso imprime "`
{{% /notice %}}