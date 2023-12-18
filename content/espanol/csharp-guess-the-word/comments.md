---
title: "Comentarios"
draft: false
weight: 3
---

## Comentarios

Desarrollador@s frecuentemente tienen que colaborar con otr@s desarrollador@s. Escribiendo comentarios es una manera fácil que desarrollador@s usan para comunicarse. La computadora ignora los comentarios, entonces comentarios también son una manera fácil para decirle a la computadora que no debe ejecutar alguna línea de código. Hay dos maneras de crear comentarios:

1. Para comentar una línea, añade `//` al inicio de la línea. Por ejemplo:

```csharp
// Esto es una sola línea de comentario. 
```

2. Para comentar varias líneas de código a la vez, indica el inicio del comentario con `/*` y añade `*/` al final del comentario. Por ejemplo:

```csharp
/* Esto es un comentario que ocupa varias líneas. 
Esta línea también es parte del mismo comentario. */ 
```

Para quitar un comentario (o cambiar el comentario a código que la computadora sí ejecutará), simplemente borra el `//` de un comentario de una sola línea, o el `/*` y `*/` de un comentario de varias líneas.

{{% notice tip %}}

## Trabajando junt@s

1. Añade `//` al inicio de `Console.WriteLine("Hello World");`. Después de presionar **run**, asegúrate que `Hello World` no se imprimió a la consola.
2. Borra el `//` y añade `/*` y `*/` a cada lado de `Console.WriteLine("Hello World");`. Asegúrate que `Hello World` todavía no se imprime a la consola cuando presionas **run**.
3. Borra `/*` , `*/` y presiona **run**. `Hello World` debe imprimirse en la consola. 

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/NF-CSharp-WritingToConsole" target="_blank">Lanza Replit</a>

Durante las actividades de hoy vas a ver varios comentarios que ocupan varias líneas y unos comentarios `// TODO` comments. Estos comentarios nos guiarán a completar el juego de **Adivina la palabra**, entonces asegúrate que entiendes como cambiar código a un comentario y vise versa.

{{% /notice %}}
