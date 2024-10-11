---
title: "Comentarios"
description: "Introducir comentarios en C#."
date: 2024-09-16T00:00:00Z
weight: 3
---

## Crear un Comentario

Al crear un programa en C#, podemos tomar notas añadiendo un comentario de una línea usando `//` o un comentario de varias líneas usando `/*` y `*/` (Nota: Las instrucciones en las actividades anteriores estaban escritas como comentarios).

Además, añadir comentarios no afectará al programa en absoluto. Por lo tanto, puedes añadir comentarios en todo tu código para documentar cómo funciona para ti y otros programadores.

```c#
     // ejemplo de comentario de una línea

     /* ejemplo de
      * comentario de
      * varias líneas */
```

## Jugar con Comentarios

En el marco de .NET Fiddle a continuación, añade un comentario de una línea y un comentario de varias líneas a tu programa.

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/TTAhVm" frameborder="0"></iframe>

{{% notice tip %}}

Puedes comentar tu código para que el ordenador no lo ejecute.

```c#
Console.Write("I like to eat");
// Console.Write("apples.");
```

Escribirá "I like to eat" en la consola pero no escribirá "apples".
{{% /notice %}}