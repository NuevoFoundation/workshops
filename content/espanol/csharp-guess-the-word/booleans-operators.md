---
title: "Operadores para booleans"
draft: false
weight: 9
---

# Operadores para Booleans

Puedes conectar expresiones de booleans usando `&&` (Y) y `||` (O) operator. "¿Eres un ser humano, y es Nuvi un robot? La palabra “y” conecta dos preguntas de verdadero/falso. En este caso, porque es verdad que tú eres en ser humano, y también es verdad que Nuvi es un robot, el resultado total es `true` (verdad).

Aquí describimos lo que pasa cuando combinas expresiones de booleans:

| Expresión        | Resultado  | Expresión                         | Resultado |
| ---------------- | ------- | ------------------------------------- | ------- |
| `true && true`   | `true`  | <code>true &#124;&#124; true</code>   | `true`  |
| `true && false`  | `false` | <code>true &#124;&#124; false</code>  | `true`  |
| `false && true`  | `false` | <code>false &#124;&#124; true</code>  | `true`  |
| `false && false` | `false` | <code>false &#124;&#124; false</code> | `false` |

Recuerda que `true` es verdadero y `false` es falso. Para resumirlo todo, `&&` requiere que las dos expresiones booleans a cada lado sean verdaderas, mientras que `||` solo requiere que una de las dos expresiones booleans a cada lado sea verdadera. 

Aquí tenemos unos ejemplos más:

- `(5 < 8) && (9 != 10)` produce `true` (verdad) porque `5` es menos que `8` y `9` no es igual a `10`.
- `(8 <= 2) || ("h" + "e" == "he")` produce `true` (verdad) porque  `"h" + "e"` resulta en `"he"`, aunque `8` no es igual a o menos que `2`.
- `(6 != 2 * 3) || (8 < 2 * 4)` produce `false` (falso) porque `6` no es igual a `2 * 3`, y `8` no es menos que`2 * 4`. Entonces, la expresión se puede simplificar a `false` (falso).

![Combining booleans](../media/booleans-advanced.png)

{{% notice tip %}}

## Trabajando junt@s

Intenta adivinar las respuestas a las siguientes expresiones. Usa  `Console.WriteLine` para imprimir las respuestas. 

- `(9 < 10) && (12 => 11)`
- `(15 - 2 == 11) || (4 % 3 != 2)`

<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/NF-CSharp-blank?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

{{% /notice %}}
