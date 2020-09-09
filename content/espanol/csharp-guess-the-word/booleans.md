---
title: "Booleans"
draft: false
weight: 8
---
# Booleans

Un **boolean** es una frase que puede ser `true` (verdadero) o `false` (falso). Diferente a los strings o los números, los Booleans archivan una declaración de la verdad: ¿es lo que yo digo verdadero o falso? Por ejemplo, so yo pregunto, ¿“Eres un robot” ?, esta pregunta produce un resultado `true` o `false`, lo que llamamos un **boolean**. En este caso, porque tú no eres un robot (¡esperadamente!), esta pregunta produce el resultado `false`. 

También podemos usar operadores de la matemática para crear expresiones de Booleans. Aquí hay unos ejemplos. 
Ojo: nota los símbolos para “igual a” y “no igual a”.

| Operador | Descripción           | Operator | Description              |
| -------- | --------------------- | -------- | ------------------------ |
| `<`      | Menos que             | `>`      | Más que                  |
| `<=`     | Menos que o igual a   | `>=`     | Más que o igual a        |
| `==`     | Igual a               | `!=`     | No igual                 |

Como siempre, usa `Console.WriteLine` para imprimir los resultados:

```csharp
Console.WriteLine(10 < 8);
Console.WriteLine((3 * 6) == (32 - 14));
```

![Printing booleans](../media/booleans-intro.png)

{{% notice tip %}}

## Trabajando junt@s

Intenta adivinar los resultados de las siguientes expresiones. Usa `Console.WriteLine` a verificar tus respuestas.

- `54 < (10 + 32)`
- `(37 / 5) == 7`
- `"Hello" + "World" == "Hello World"`
- `false == false`

<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/NF-CSharp-blank?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

{{% /notice %}}
