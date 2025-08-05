---
title: "Operadores Booleanos"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 9
---

## Operadores Booleanos

Você também pode conectar expressões booleanas usando os operadores `&&` (E) e `||` (OU). Por exemplo, suponha que eu pergunte: "Você é humano, e a Nuvi é um robô?" A palavra "e" conecta as duas perguntas de verdadeiro-falso. Nesse caso, como é verdade que você é humano e também é verdade que a Nuvi é um robô, o resultado geral é `true`.

Aqui está uma tabela que mostra o que acontece quando conectamos booleanos:

| Expressão        | Resultado | Expressão                            | Resultado |
| ---------------- | --------- | ------------------------------------ | --------- |
| `true && true`   | `true`    | <code>true &#124;&#124; true</code>   | `true`    |
| `true && false`  | `false`   | <code>true &#124;&#124; false</code>  | `true`    |
| `false && true`  | `false`   | <code>false &#124;&#124; true</code>  | `true`    |
| `false && false` | `false`   | <code>false &#124;&#124; false</code> | `false`   |

Resumindo, `&&` exige que ambas as expressões booleanas sejam verdadeiras, enquanto `||` precisa apenas que uma das duas expressões seja `true`. Aqui vão mais alguns exemplos:

- `(5 < 8) && (9 != 10)` resulta em `true` porque `5` é menor que `8` e `9` não é igual a `10`.
- `(8 <= 2) || ("h" + "e" == "he")` resulta em `true` porque `"h" + "e"` é igual a `"he"`, mesmo que `8` não seja menor ou igual a `2`.
- `(6 != 2 * 3) || (8 < 2 * 4)` resulta em `false` porque `6` não é diferente de `2 * 3` e `8` não é menor que `2 * 4`, então ambas são `false`.

![alt text height="600px" width="70%"](../media/booleans-advanced.png "Combinando booleanos")

{{% notice tip %}}

## Trabalhando Juntos

Tente adivinhar as respostas das expressões abaixo. Use `Console.WriteLine` para mostrar as respostas.

- `(9 < 10) && (12 => 11)`
- `(15 - 2 == 11) || (4 % 3 != 2)`

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/ULv0JH" frameborder="0"></iframe>

{{% /notice %}}
