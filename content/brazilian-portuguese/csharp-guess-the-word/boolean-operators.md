---
title: "Operadores Booleanos"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 9
---

## Operadores Booleanos

Você também pode conectar expressões booleanas usando o `&&` (AND) e o `||` (OU) operador. Por exemplo, suponha que eu pergunte: "Você é um humano e Nuvi é um robô?" A palavra "e" conecta as duas perguntas verdadeiras e falsas. Neste caso, como é verdade que você é um humano, e também é verdade que Nuvi é um robô, então o resultado geral é `true`.

Aqui está um gráfico que descreve o que acontece quando conectamos booleanos juntos:

| Expressão       | Resultado  | Expressão                            | Resultado  |
| ---------------- | ------- | ------------------------------------- | ------- |
| `true && true`   | `true`  | <code>true &#124;&#124; true</code>   | `true`  |
| `true && false`  | `false` | <code>true &#124;&#124; false</code>  | `true`  |
| `false && true`  | `false` | <code>false &#124;&#124; true</code>  | `true`  |
| `false && false` | `false` | <code>false &#124;&#124; false</code> | `false` |

Resumindo, `&&` requer que ambas as expressões booleanas sejam verdadeiras, enquanto `||` requer apenas que uma das duas expressões booleanas seja `true`. Aqui estão mais alguns exemplos:

- `(5 < 8) && (9 != 10)` produz `true` uma vez que ambos `5` é menor que `8` e `9` is não é igual à `10`.
- `(8 <= 2) || ("h" + "e" == "he")` produz `true` uma vez que `"h" + "e"` resulta em `"he"`, embora `8` não seja menor ou igual a `2`.
- `(6 != 2 * 3) || (8 < 2 * 4)` produz `false` uma vez que `6` não é igual à `2 * 3`, e `8` não é menor que `2 * 4`, produz `false`.

![alt text height="600px" width="70%"](../media/booleans-advanced.png "Combinando booleanos")

{{% notice tip %}}

## Trabalhando juntos

Tente adivinhar as respostas para as expressões a seguir. Use 'Console.WriteLine' para imprimir as respostas.

- `(9 < 10) && (12 => 11)`
- `(15 - 2 == 11) || (4 % 3 != 2)`

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/NF-CSharp-blank" target="_blank">Launch Replit</a>

{{% /notice %}}
