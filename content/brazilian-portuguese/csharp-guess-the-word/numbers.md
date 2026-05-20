---
title: "Números"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 7
---

## Números

O computador também consegue fazer contas normais que você vê na escola. Use `Console.WriteLine` para mostrar o resultado das contas de matemática. Não precisa de aspas para números!

`Console.WriteLine(5 + 4); Console.WriteLine(6 * (9 - 7) / 3);`

![alt text height="600px" width="70%"](../media/numbers-intro.png "Imprimindo números")

Aqui está a lista completa de símbolos de matemática que você pode usar:

| Operador | Descrição   | Operador     | Descrição          |
| -------- | ----------- | ------------ | ------------------ |
| `+`      | Somar       | `\`          | Dividir            | 
| `-`      | Subtrair    | `%`          | Módulo (resto)     |
| `*`      | Multiplicar | `(`,`)`      | Parênteses         |

{{% notice info %}}

## Curiosidade: Divisão no Computador

O computador faz divisão de um jeito diferente da calculadora comum. A divisão no computador tira as sobras ou decimais. Por exemplo, `15 / 4` dá `3`, e não `3.75`.

{{% /notice %}}

{{% notice tip %}}

## Trabalhando Juntos

Tente mostrar no console as respostas para as contas abaixo. Confira se seus parênteses estão certinhos. Use uma calculadora (ou sua cabeça) para ver se o computador mostrou a resposta certa.

- `2 - 19`
- `(3 + 5) * 6`
- `(13 + 5 * 8) / (6 - (3 + 7))`

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/ULv0JH" frameborder="0"></iframe>

{{% /notice %}}

{{% notice info %}}

## Curiosidade: Números Aleatórios

Veja como mostrar um número aleatório entre `1` (inclusivo) e `10` (exclusivo):

`Random random = new Random(); Console.WriteLine(random.Next(1, 10));`

Tente descobrir onde usamos `Random` no jogo GuessTheWord! Mas os detalhes de como isso funciona são complicados, então vamos pular essa parte.

{{% /notice %}}
