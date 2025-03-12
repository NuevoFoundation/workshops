---
title: "Booleans"
date: 2021-03-13T14:17:07.42-07:00
draft: false
weight: 9
---
Booleanos ou (Booleans em inglês) são afirmações verdadeiras ou falsas. Ao contrário de strings ou números, booleanos armazenam afirmações de verdade: o que estou dizendo é verdadeiro ou falso? Por exemplo, se eu perguntar: "Você é um robô?", esta pergunta produz um resultado verdadeiro ou falso, que chamamos de Booleano. Neste caso, como você não é um robô (espero!), produziríamos falso. Também podemos usar operadores matemáticos para criar expressões booleanas. Aqui estão alguns exemplos; no entanto, observe os símbolos incomuns para "igual a" e "diferente de":

| Operador | Descrição | Operador | Descrição |
| -------- | --------------------- | -------- | ------------------------ |
| `<` | Menor que | `>` | Maior que |
| `<=` | Menor ou igual a | `>=` | Maior ou igual a |
| `==` | Igual a | `!=` | Diferente de |

Como de costume, use `System.out.println` para imprimir seus resultados:

```kotlin
System.out.println(10 < 8);
System.out.println((3 * 6) == (32 - 14));
```
{{% notice tip %}}
## Trabalhando Juntos

Exclua todo o texto `System.out.println` em seu código. Tente adivinhar as respostas para as seguintes expressões. Use `System.out.println` para verificar suas respostas.

- 54 < (10 + 32)
- (37 / 5) == 7
- "Hello" + "World" == "Hello World"
- false == false
{{% /notice %}}

## Operadores Booleanos

Você também pode conectar expressões booleanas usando o operador `&&` (E) e o operador `||` (OU). Por exemplo, suponha que eu pergunte: "Você é humano e Nuvi é um robô?" A palavra "e" conecta as duas perguntas verdadeiro-falso juntas. Neste caso, como é verdade que você é humano e também é verdade que Nuvi é um robô, então o resultado geral é `true`. Aqui está um gráfico que descreve o que acontece quando conectamos booleanos juntos:


| Expressão                   | Resultado   | Expressão                             | Resultado  |
| --------------------------- | ----------- | ------------------------------------- | ---------- |
| <code>true && true</code>   | `true`      | <code>true &#124;&#124; true</code>   | `true`     |
| <code>true && false</code>  | `false`     | <code>true &#124;&#124; false</code>  | `true`     |
| <code>false && true</code>  | `false`     | <code>false &#124;&#124; true</code>  | `true`     |
| <code>false && false</code> | `false`     | <code>false &#124;&#124; false</code> | `false`    | 

Para resumir, `&&` requer que ambas as expressões booleanas sejam verdadeiras, enquanto `||` requer apenas que uma das duas expressões booleanas seja verdadeira. Aqui estão mais alguns exemplos:

- `(5 < 8) && (9 != 10)` produz `verdadeiro` já que ambos 5 é menor que 8 e 9 não é igual a 10.
- `(6 != 2 * 3) || (8 < 2 * 4)` produz `falso` já que ambos 6 não é igual a 2 * 3 e 8 não é menor que 2 * 4 produzem `falso`.
