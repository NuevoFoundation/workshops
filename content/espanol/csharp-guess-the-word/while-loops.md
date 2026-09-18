---
title: "While loops"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 16
---

## Bucles While

Los bucles `while` son una manera sencilla de repetir la ejecución de líneas sin tener que reutilizar una línea muchas veces. Por ejemplo, para imprimir `Hola Mundo` cinco veces seguidas, puedes hacer lo siguiente:

```csharp
var counter = 1;
while (counter <= 5)
{
    Console.WriteLine("Hola Mundo");
    counter = counter + 1;
}
```

Al igual que una declaración `if`, dentro de los `()` junto a `while` debes especificar una expresión booleana. Si la expresión es `true`, el código dentro de las llaves `{ }` se ejecuta. Sin embargo, después de que todo dentro de las llaves se ejecuta, volvemos al inicio del bucle `while` y verificamos nuevamente la expresión booleana. Si la expresión booleana sigue siendo `true`, el bucle se repetirá.

![alt text height="600px" width="70%"](../media/while-1.png "While 1")

También puedes colocar declaraciones `if` dentro de los bucles `while` para ejecutar comportamientos interesantes:

```csharp
var counter = 1;
while (counter <= 10)
{
    if (counter < 5)
    {
        Console.WriteLine("¡Menor que 5!");
    }
    else
    {
        Console.WriteLine("¡Mayor o igual a 5!");
    }
    counter = counter + 1;
}
```

![alt text height="600px" width="70%"](../media/while-2.png "While 2")

Aquí hay un ejemplo de un bucle infinito: ¿ves qué está mal? ¿Qué podrías hacer para que el siguiente fragmento de código imprima `¡Spam!` solo 100 veces?

```csharp
var counter = 100;
while (counter > 0)
{
    Console.WriteLine("¡Spam!");
}
```

{{% notice tip %}}

## Trabajando Juntos

Toma tu código de la actividad anterior. Vamos a expandir el código para que, en lugar de que el programa termine después de que el usuario ingrese una vez, permitamos que el usuario responda la pregunta 10 veces antes de salir. ¡Ten cuidado con los bucles infinitos!

{{% /notice %}}