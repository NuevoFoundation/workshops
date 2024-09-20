---
title: "Estructuras de Control"
description: "Introduce if-else, for, y bucles while en C#."
date: 2024-09-16T00:00:00Z
weight: 6
---

## Tomar una Decisión: If-Statement

Patrick 🐥 es un pato muy educado que le gusta saludar a todos los que encuentra con "Buenos Días," "Buenas Tardes," o "Buenas Noches" dependiendo de la hora actual.

![El sol sale rápidamente sobre una montaña](https://media.giphy.com/media/hpWrLS1RDBd5pwkgjy/giphy.gif)
<p style="text-align: center;">(imagen de National Geographic: giphy.com/natgeochannel)</p>

Como aprendimos antes, podemos imprimir estas declaraciones como sigue:

```C#
Console.WriteLine("Buenos Días");   // decir entre 0:00 - 11:59
Console.WriteLine("Buenas Tardes"); // decir entre 12:00 - 19:59
Console.WriteLine("Buenas Noches"); // decir entre 20:00 - 23:59
```

Sin embargo, también sabemos que Patrick 🐥 debe decidir decir una de estas declaraciones basándose en la hora actual.

En otras palabras, necesitamos escribir un código que tome una decisión sobre qué imprimir basado en las condiciones de la situación (condicionalmente).

En C#, tomamos una decisión usando una **sentencia if** o una **sentencia if...else**. Lee las notas a continuación:

{{% notice note %}}
### If Statement

```
if(expresión booleana){
    Acción(es) a Tomar
}
```

Una **sentencia if** sigue la estructura mostrada arriba. Las acciones a tomar (sentencias) en el bloque solo se ejecutarán si la expresión booleana es `true`. De lo contrario, el programa saltará a la sentencia después del bloque si la expresión booleana es `false`.
### If-Else Statement

```
if(expresión booleana){
    Acción(es) a Tomar A
}else{
    Acción(es) a Tomar B
}
```

Una **sentencia if...else** sigue la estructura mostrada arriba. Si la expresión booleana es `true`, el programa ejecutará la `Acción(es) a Tomar A` dentro del bloque `if`. De lo contrario, el programa solo ejecuta `Acción(es) a Tomar B` dentro del bloque `else`.

### Ejemplo

```C#
    bool gustaLaMusica = true;
    if(gustaLaMusica == true) 
    {
        Console.WriteLine("Me gusta la Música");
    } 
    else 
    {
        Console.WriteLine("No me gusta la Música");
    }   
```

El código anterior imprimirá la declaración `Me gusta la Música` porque la expresión booleana, `gustaLaMusica == true`, es verdadera.
{{% /notice %}}

Volvamos a examinar el ejemplo de saludo anterior y decidamos por Patrick si decir "Buenos Días," "Buenas Tardes," "Buenas Noches". 

Patrick debe decir "Buenos Días" entre 0:00 - 11:59, "Buenas Tardes" entre 12:00 - 19:59, y "Buenas Noches" entre 20:00 - 23:59.

1. Tenemos una variable `currentHour` que almacena la hora actual. 
2. Completa la `expresión booleana A` y `expresión booleana B` correcta para completar el programa.
3. Prueba tu resultado asignando la variable `currentHour` a números del 0 al 23:

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/T6AUdh" frameborder="0"></iframe>

## Repite de Nuevo: For-Loop, While-Loop

En clase de matemáticas, el maestro de Patrick 🐥 pide a la clase resolver un desafío matemático y él podría necesitar ayuda. 

El maestro les pide encontrar la **suma de 1, 2, 3, ..., 100**. Es decir, ¿cuál es **1 + 2 + 3 + 4 ... + 99 + 100**?

Aunque podemos usar una calculadora, eso llevará un tiempo. Afortunadamente, en C#, puedes calcular esto fácilmente en 3 líneas con la ayuda de un **bucle for** o **bucle while**.

{{% notice note %}}
**Los bucles For** y **los bucles While** son estructuras de control en C# que te permiten ejecutar bloques de código múltiples veces.

### While Loop

```
while(expresión boole