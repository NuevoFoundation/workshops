---
title: "Estructuras de Control"
description: "Introducir if-else, for, y bucles while en C#."
date: 2024-09-16T00:00:00Z
weight: 6
---

## Tomar una Decisión: If-Statement

Patrick 🐥 es un pato muy educado que le gusta saludar a todos con "Buenos Días," "Buenas Tardes," o "Buenas Noches" dependiendo de la hora actual.

![El sol saliendo rápidamente sobre una montaña](https://media.giphy.com/media/hpWrLS1RDBd5pwkgjy/giphy.gif)
<p style="text-align: center;">(imagen de National Geographic: giphy.com/natgeochannel)</p>

Como aprendimos antes, podemos imprimir estas declaraciones de la siguiente manera:

```C#
Console.WriteLine("Buenos Días");   // decirlo entre 0:00 - 11:59
Console.WriteLine("Buenas Tardes"); // decirlo entre 12:00 - 19:59
Console.WriteLine("Buenas Noches"); // decirlo entre 20:00 - 23:59
```

Sin embargo, también sabemos que Patrick 🐥 solo debe decidir decir una de estas declaraciones según la hora actual.

En otras palabras, necesitamos escribir código que tome una decisión sobre qué imprimir basándose en las condiciones de la situación (condicionalmente).

En C#, tomamos una decisión usando una **if statement** o una **if...else statement**. Lee las notas a continuación:

{{% notice note %}}
### If Statement

```
if(una expresión booleana){
    Acción(es) a Tomar
}
```

Una **if statement** sigue la estructura mostrada arriba. Las acciones a tomar (sentencias) en el bloque solo se ejecutarán si la expresión booleana es `true`. De lo contrario, el programa saltará a la sentencia después del bloque si la expresión booleana es `false`.
### If-Else Statement

```
if(una expresión booleana){
    Acción(es) a Tomar A
}else{
    Acción(es) a Tomar B
}
```

Una **if-else statement** sigue la estructura mostrada arriba. Si la expresión booleana es `true`, el programa ejecutará la `Acción(es) a Tomar A` dentro del bloque `if`. De lo contrario, el programa ejecutará solo `Acción(es) a Tomar B` dentro del bloque `else`.

### Ejemplo

```C#
    bool likeMusic = true;
    if(likeMusic == true) 
    {
        Console.WriteLine("Me gusta la Música");
    } 
    else 
    {
        Console.WriteLine("No me gusta la Música");
    }   
```

El código anterior imprimirá la declaración `Me gusta la Música` porque la expresión booleana, `likeMusic == true`, es verdadera.
{{% /notice %}}

Volvamos a ver el ejemplo del saludo y tomemos la decisión de Patrick sobre si decir "Buenos Días," "Buenas Tardes," "Buenas Noches". 

Patrick debe decir "Buenos Días" entre 0:00 - 11:59, "Buenas Tardes" entre 12:00 - 19:59, y "Buenas Noches" entre 20:00 - 23:59.

1. Tenemos una variable `currentHour` que almacena la hora actual. 
2. Complete la `expresión booleana A` y la `expresión booleana B` correcta para completar el programa.
3. Pruebe su resultado asignando la variable `currentHour` a números del 0 al 23:

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/T6AUdh" frameborder="0"></iframe>

## Repetir: Bucles For, While

En la clase de matemáticas, la maestra de Patrick 🐥 le pide a la clase resolver un desafío matemático, y él podría necesitar ayuda.

La maestra les pide encontrar la **suma de 1, 2, 3, ...., 100**. Es decir, ¿qué es **1 + 2 + 3 + 4 ... + 99 + 100**?

Aunque podemos hacer esto con una calculadora, llevará tiempo. Afortunadamente, en C#, puedes calcularlo fácilmente en 3 líneas con la ayuda de un **bucle for** o **bucle while**.

{{% notice note %}}
**Los bucles for** y **los bucles while** son estructuras de control en C# que te permiten ejecutar bloques de código múltiples veces.

### Bucle While

```
while(una expresión booleana