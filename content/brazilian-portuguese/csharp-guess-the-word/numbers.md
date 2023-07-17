---
title: "Números"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 7
---

## Números

O computador também pode fazer matemática regular que você vê na escola. Use `Console.WriteLine` para imprimir o resultado das expressões matemáticas. Não são necessárias aspas para números!

```csharp
Console.WriteLine(5 + 4);
Console.WriteLine(6 * (9 - 7) / 3);
```

![alt text height="600px" width="70%"](../media/numbers-intro.png "Imprimindo números")

Aqui está a lista completa de símbolos matemáticos que você pode usar:

| Operador | Descrição | Operador     | Descrição        |
| -------- | ----------- | ------------ | ------------------ |
| `+`      | Adiciona         | `\`          | Divide             | 
| `-`      | Subtrai    | `%`          | Modulo (resto) |
| `*`      | Multiplica    | `(`,`)`      | Parenthesis        |

{{% notice info %}}

## Curiosidade: Divisão de Informática

O computador faz a divisão de forma diferente da sua calculadora normal. A divisão do computador excluirá restos ou decimais. Por exemplo, `15 / 4` produz `3`, e não `3.75`.

{{% /notice %}}

{{% notice tip %}}

## Trabalhando juntos

Tente imprimir as respostas a seguir no console. Certifique-se de que seus colchetes estejam correspondidos. Use uma calculadora (ou matemática mental) para verificar se o computador produziu a resposta correta.

- `2 - 19`
- `(3 + 5) * 6`
- `(13 + 5 * 8) / (6 - (3 + 7))`

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/NF-CSharp-blank" target="_blank">Executar Replit</a>

{{% /notice %}}

{{% notice info %}}

## Curiosidade Random Numbers

Veja como imprimir um número aleatório entre `1` (inclusive) e  `10` (exclusivo):

```csharp
Random random = new Random();
Console.WriteLine(random.Next(1, 10));
```

Tente encontrar onde usamos `Random` no jogo GuessTheWord! No entanto, os detalhes de como isso funciona são complicados, então vamos pular essa discussão.

{{% /notice %}}
