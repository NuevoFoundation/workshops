---
title: "Condicionales if-else"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 14
---

## Condicionales if-else

Puedes usar declaraciones `if` para **ejecutar** fragmentos de código solo si se cumplen ciertas condiciones. Aquí tienes un ejemplo:

```csharp
var myNum = (93 + 41) / 12;
if (myNum == 11)
{
    Console.WriteLine("¡Son iguales!");
}
```

Dentro de los paréntesis `()` junto a `if`, debes especificar una expresión booleana. Si la expresión es `true`, el código dentro de `{ }` se ejecuta. En este caso, como `myNum` es igual a `11`, se imprime `¡Son iguales!`.

![alt text height="600px" width="70%"](../media/if-true.png "Caso verdadero con If-else")

Si la condición es `false`, ¡no pasa nada! Por ejemplo, como `10` no es mayor que `11`, `¡Imprímeme!` no aparecerá en la consola.

```csharp
var happy = 10;
if (happy > 11)
{
    Console.WriteLine("¡Imprímeme!");
}
```

![alt text height="600px" width="70%"](../media/if-false.png "Caso falso con If-else")

Usa `else` para indicarle a la computadora qué hacer si la condición es falsa. En este ejemplo, `¡Ahora me imprimieron a mí en su lugar!` se imprimirá en la consola.

```csharp
var happy = 10;
if (happy > 11)
{
    Console.WriteLine("¡Imprímeme!");
}
else
{
    Console.WriteLine("¡Ahora me imprimieron a mí en su lugar!");
}
```

![alt text height="600px" width="70%"](../media/if-else.png "If-else")

Puedes encadenar varios casos usando `else if`. Ten en cuenta que cuando usas `else if`, solo se evaluará el primer caso que sea verdadero. Por ejemplo, en el siguiente fragmento de código, se imprimirá la `Declaración 1`. Saltaremos el chequeo de que `sad == 4` y no se imprimirá la `Declaración 2`, aún cuando `sad == 4` es `true`.

```csharp
var sad = 4;
if (sad < 9)
{
    Console.WriteLine("Declaración 1");
}
else if (sad == 4)
{
    Console.WriteLine("Declaración 2");
}
else
{
    Console.WriteLine("Declaración 3");
}
```

![alt text height="600px" width="70%"](../media/if-three.png "Tres declaraciones con If-else")

También puedes colocar declaraciones `if` dentro de otras declaraciones `if` para obtener comportamientos interesantes:

```csharp
var num1 = 10;
var num2 = 20;
if (num1 < num2)
{
    if (num2 < 30)
    {
        Console.WriteLine("¡Hola!");
    }
    else
    {
        Console.WriteLine("¡Hola en español!");
    }
}
```

![alt text height="600px" width="70%"](../media/if-nested.png "If-else anidados")

{{% notice tip %}}

## Trabajemos juntos

Escribamos un programa que primero imprima la siguiente línea en la consola:

```
¿Programar es divertido?
```

Posteriormente, la consola espera una respuesta del usuario.

- Si el usuario ingresa "yes", la computadora imprimirá: `¡Sí, me alegra que lo estés disfrutando!`.
- Si el usuario responde "no", la computadora imprimirá: `¡Oh no, qué mal!`.
- En cualquier otra entrada, la computadora imprimirá: `¡No te entiendo! ¡Adiós!`.

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/ULv0JH" title="Condicionales If-else - Editor de .NET Fiddle" frameborder="0"></iframe>

{{% /notice %}}

{{% notice info %}}

## Dato curioso: Declaraciones switch

Usar múltiples declaraciones `if`, `else` puede hacerse muy extenso y confuso. Puedes usar las sentencias `switch` si deseas comparar una sola variable contra múltiples valores. Por ejemplo, la actividad **Trabajemos juntos** se puede realizar usando el siguiente código:

```csharp
    var input = Console.ReadLine();
    switch (input)
    {
        case "yes":
            Console.WriteLine("¡Sí, me alegra que lo estés disfrutando!");
            break;
        case "no":
            Console.WriteLine("¡Oh no, qué mal!");
            break;
        default:
            Console.WriteLine("¡No te entiendo! ¡Adiós!");
            break;
    }
```

Cada caso representa un posible valor que la variable `input` podría tomar. Asegúrate de usar la declaración `break` para decirle a la computadora que completaste todas las acciones relacionadas con este caso.

{{% /notice %}}