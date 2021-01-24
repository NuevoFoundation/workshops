---
title: "Números"
draft: false
weight: 7
---

## Números

La computadora también puede hacer operaciones matemáticas, como las que tú haces en la escuela. Usa `Console.WriteLine` para imprimir el resultado de las expresiones matemáticas. No es necesario incluir comillas para los números.

```csharp
Console.WriteLine(5 + 4);
Console.WriteLine(6 * (9 - 7) / 3);
```

![alt text height="600px" width="70%"](../media/numbers-intro.png "Printing numbers")

Aquí está una lista de los símbolos matemáticos que puedes usar:

| Operador  | Descripción  | Operador      | Descripción         |
| -------- | ----------- | ------------ | ------------------ |
| `+`      | Adición     | `\`          | División           | 
| `-`      | Sustracción | `%`          | Modulo (Remanente) |
| `*`      | Multiplicación | `(`,`)`      | Paréntesis      |

{{% notice info %}}

## Ojo: División en la computadora 

La computadora divide los números de una manera diferente comparado con una calculadora. Division en una computadora excluye los remanentes o decimales. Por ejemplo, `15 / 4` produce `3`, y no `3.75`.

{{% /notice %}}

{{% notice tip %}}

## Trabajando junt@s

Intenta imprimir los resultados de los siguientes a la consola. Asegúrate que los paréntesis tienen pareja. Usa una calculadora (o hazlo tú sol@) para verificar que tienes el resultado correcto.

- `2 - 19`
- `(3 + 5) * 6`
- `(13 + 5 * 8) / (6 - (3 + 7))`

<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/NF-CSharp-blank?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

{{% /notice %}}

{{% notice info %}}

## Ojo: Números aleatorios

Aquí ensenamos como imprimir un numero aleatorio entre `1` (inclusivo) y `10` (exclusivo):

```csharp
Random random = new Random();
Console.WriteLine(random.Next(1, 10));
```

Intenta adivinar dónde en nuestro juego de Adivina la palabra vamos a usar `Random` en el juego de GuessTheWord! Los números aleatorios son complicados, entonces omitimos los detalles sobre cómo funcionan en esta sección.

{{% /notice %}}
