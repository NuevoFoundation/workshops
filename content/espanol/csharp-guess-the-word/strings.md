---
title: "Strings"
draft: false
weight: 5
---

## Strings

Cualquier cosa que esté entre comillas se llama un string. Así se representan palabras o frases en las computadoras. Por ejemplo,`"a"`, `"2"`, `"banana!"`, y `"Hello World"` son strings, pero `Hello World` y `2` no son strings, porque no están entre comillas.

Puedes combinar varios strings usando el operador de `+`. Por ejemplo::

- `"Manzana" + "Piña"` produce el string  `"ManzanaPiña"`.
- `"Nuevo" + " " + "Foundation"` produce el string `"Nuevo Foundation"`.

```csharp
Console.WriteLine("Manzana" + "Piña");
Console.WriteLine("Nuevo" + " " + "Foundation");
```

![alt text height="600px" width="70%"](../media/strings-intro.png "Combining strings with +")

{{% notice tip %}}

## Trabajando junt@s

En el programa de Replit debajo, empezamos el código con la línea `Console.WriteLine("Nuevo" + " " + "Foundation");`.

Hay muchas maneras de combinar strings. Por ejemplo, otra manera de imprimir Nuevo Foundation podría ser `Console.WriteLine("Nue" + "vo Fou" + "ndation");`.

Pensaremos de, por lo mínimo, una manera más de imprimir `"Nuevo Foundation"` usando dos `+` símbolos en cada declaración de `Console.WriteLine`. Verifica que Nuevo Foundation se imprima 3 veces. En otras palabras, tu consola debe aparecer así:

```
Nuevo Foundation
Nuevo Foundation
Nuevo Foundation
```

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/NF-CSharp-Strings" target="_blank">Lanza Replit</a>

{{% /notice %}}
