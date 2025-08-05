---
title: "Booleanos"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 8
---

## Booleanos

**Booleanos** são afirmações que podem ser `true` ou `false`. Diferente de strings ou números, booleanos guardam afirmações de verdade: o que eu estou dizendo é verdadeiro ou falso? Por exemplo, se eu perguntar, "Você é um robô?", essa pergunta resulta em `true` ou `false`, que chamamos de **Booleano**. Nesse caso, como você não é um robô (espero!), o resultado seria `false`.

Também podemos usar operadores matemáticos para criar expressões booleanas. Aqui estão alguns exemplos; repare nos símbolos diferentes para "igual a" e "diferente de":

| Operador | Descrição              | Operador | Descrição                 |
| -------- | ---------------------- | -------- | ------------------------- |
| `<`      | Menor que              | `>`      | Maior que                 |
| `<=`     | Menor ou igual a       | `>=`     | Maior ou igual a          |
| `==`     | Igual a                | `!=`     | Diferente de              |

Como de costume, use `Console.WriteLine` para mostrar os resultados:

`Console.WriteLine(10 < 8); Console.WriteLine((3 * 6) == (32 - 14));`

![alt text height="600px" width="70%"](../media/booleans-intro.png "Imprimindo booleanos")

{{% notice tip %}}

## Trabalhando Juntos

Tente adivinhar as respostas das expressões abaixo. Use `Console.WriteLine` para conferir as respostas.

- `54 < (10 + 32)`
- `(37 / 5) == 7`
- `"Hello" + "World" == "Hello World"`
- `false == false`

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/ULv0JH" frameborder="0"></iframe>

{{% /notice %}}
