---
title: "Leyendo la consola"
draft: false
weight: 12
---

## Leyendo la consola

Ya que sabemos lo básico de los variables, podemos aceptar entradas del usuario. Usa la línea siguiente para decirle a la consola que debe esperar hasta que el usuario entra algo en la consola. Después, la computadora archivará lo que el usuario entró en un variable llamado `input`.

```csharp
var input = Console.ReadLine();
```

Aquí tenemos un ejemplo de cómo usar `Console.ReadLine` para aceptar entradas de usuario:

```csharp
Console.WriteLine("Escribe algo:");
var input = Console.ReadLine();
Console.WriteLine("Escribiste: " + input);
```

Cuando el usuario presiona **’run’**, el usuario ve un saludo con el siguiente programa:

![alt text height="600px" width="70%"](../media/reading-input-1.png "Reading from input before typing in input")

En este caso, luego de que el usuario escribe `Hello World!` en la consola, el programa termina e imprime en la consola:

![alt text height="600px" width="70%"](../media/reading-input-2.png "Reading from input after typing in input")

{{% notice tip %}}

## Trabajando junt@s

Escribe el programa que primero imprima las siguientes dos líneas:

```
! Bienvenid@!
¿Como te puedo ayudar hoy?
```

Luego, la consola va a esperar el input del usuario. Una vez que el usuario escriba algo, debe presionar ‘Enter’ o la ‘barra de espacio’, para que la consola imprima:

```
Tu preguntaste: [input]?
¡Yo no sé cuál es la respuesta! ¡Hasta luego!
```

`[input]` (entrada) debería ser remplazada por cualquier palabra que el usuario haya escrito en la consola.

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/NF-CSharp-blank" target="_blank">Lanza Replit</a>

{{% /notice %}}
