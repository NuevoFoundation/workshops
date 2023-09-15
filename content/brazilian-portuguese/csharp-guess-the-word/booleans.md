---
title: "Booleanos"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 8
---

## Booleanos

**Booleans** são Declarações `verdadeiro` ou `falso`. Ao contrário de cadeias de caracteres ou números, os booleanos armazenam declarações de verdade: o que estou dizendo é verdadeiro ou falso? Por exemplo, se eu perguntar: "Você é um robô?" Essa pergunta produz um resultado `verdadeiro` ou `falso`, que chamamos de **Boolean**. Neste caso, como você não é um robô (esperemos!), produziríamos `falso`.

Também podemos usar operadores matemáticos para criar expressões booleanas. Aqui estão alguns exemplos; no entanto, observe os símbolos incomuns para "igual a" e "não igual a":

| Operador | Descrição             | Operador | Descrição                |
| -------- | --------------------- | -------- | ------------------------ |
| `<`      | Menor que             | `>`      | Maior que             |
| `<=`     | Menor que ou igual à | `>=`     | Maior que ou igual à |
| `==`     | igual à            | `!=`     | Não igual à            |

As usual, use `Console.WriteLine` to print out your results:

```csharp
Console.WriteLine(10 < 8);
Console.WriteLine((3 * 6) == (32 - 14));
```

![alt text height="600px" width="70%"](../media/booleans-intro.png "Imprimindo booleanos")

{{% notice tip %}}

## Working Together

Tente adivinhar as respostas para as expressões a seguir. Use 'Console.WriteLine' para verificar suas respostas.

- `54 < (10 + 32)`
- `(37 / 5) == 7`
- `"Hello" + "World" == "Hello World"`
- `false == false`

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/NF-CSharp-blank" target="_blank">Executar Replit</a>

{{% /notice %}}
