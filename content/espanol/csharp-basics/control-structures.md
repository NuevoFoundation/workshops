---
title: "Estructuras de Control"
description: "Introducción a if-else, for y while loops en C#."
date: 2024-09-16T00:00:00Z
weight: 6
---

## Toma una Decisión: Sentencia If

Patrick 🐥 es un pato muy educado al que le gusta saludar a todos los que encuentra con "Buenos Días," "Buenas Tardes," o "Buenas Noches," dependiendo de la hora actual.

![El sol saliendo rápidamente sobre una montaña](https://media.giphy.com/media/hpWrLS1RDBd5pwkgjy/giphy.gif)
<p style="text-align: center;">(imagen de National Geographic: giphy.com/natgeochannel)</p>

Como aprendimos antes, podemos imprimir estas declaraciones de la siguiente manera:

```C#
Console.WriteLine("Buenos Días");   // decirlo entre 0:00 - 11:59
Console.WriteLine("Buenas Tardes"); // decirlo entre 12:00 - 19:59
Console.WriteLine("Buenas Noches"); // decirlo entre 20:00 - 23:59
```

Sin embargo, también sabemos que Patrick 🐥 solo debería decidir decir una de estas declaraciones según la hora actual.

En otras palabras, necesitamos escribir un código que tome una decisión sobre qué imprimir basándose en las condiciones de la situación (condicionalmente).

En C#, tomamos decisiones utilizando una **sentencia if** o una **sentencia if...else**. Lee las notas a continuación:

{{% notice note %}}
### Sentencia If

```
if(expresión booleana){
    Acción(es) a tomar
}
```

Una **sentencia if** sigue la estructura que se muestra arriba. Las acciones a tomar (sentencias) dentro del bloque solo se ejecutarán si la expresión booleana es `true`. De lo contrario, si la expresión booleana es `false`, el programa saltará a la sentencia después del bloque.
### Sentencia If-Else

```
if(expresión booleana){
    Acción(es) a tomar A
}else{
    Acción(es) a tomar B
}
```

Una **sentencia if-else** sigue la estructura que se muestra arriba. Si la expresión booleana es `true`, el programa ejecutará la `Acción(es) a tomar A` dentro del bloque `if`. De lo contrario, el programa ejecutará únicamente la `Acción(es) a tomar B` dentro del bloque `else`.

### Ejemplo

```C#
    bool likeMusic = true;
    if(likeMusic == true) 
    {
        Console.WriteLine("Me gusta la música");
    } 
    else 
    {
        Console.WriteLine("No me gusta la música");
    }   
```

El código anterior imprimirá la declaración `Me gusta la música` porque la expresión booleana, `likeMusic == true`, es verdadera.
{{% /notice %}}

Volvamos al ejemplo del saludo mencionado antes, y tomemos la decisión por Patrick sobre si decir "Buenos Días," "Buenas Tardes," o "Buenas Noches".

Patrick debería decir "Buenos Días" entre 0:00 - 11:59, "Buenas Tardes" entre 12:00 - 19:59, y "Buenas Noches" entre 20:00 - 23:59.

1. Tenemos una variable `currentHour` que almacena la hora actual. 
2. Completa las `expresión booleana A` y `expresión booleana B` correctas para completar el programa.
3. Prueba tu resultado asignando a la variable `currentHour` números del 0 al 23:

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/T6AUdh" title="Ejercicio interactivo de declaraciones condicionales en C#" frameborder="0"></iframe>

## Repetirlo de Nuevo: For-Loop, While-Loop

En clase de matemáticas, el maestro de Patrick 🐥 pidió a la clase resolver un desafío matemático, y podría necesitar algo de ayuda.

El maestro les pide encontrar la **suma de 1, 2, 3, ...., 100**. Es decir, ¿cuál es el resultado de **1 + 2 + 3 + 4 ... + 99 + 100**?

Aunque podemos usar una calculadora, esto podría llevar tiempo. Afortunadamente, en C#, puedes calcular esto en 3 líneas con la ayuda de un **for loop** o un **while loop**.

{{% notice note %}}
Los **for loops** y **while loops** son estructuras de control en C# que te permiten ejecutar bloques de código múltiples veces.

### While Loop

```
while(expresión booleana){
    Acción(es) a tomar
}
```

La `Acción(es) a tomar` en el bloque del while se ejecutará siempre y cuando la `expresión booleana` sea `true`. 

El siguiente es un ejemplo que imprime del 1 al 10:

```C#
int number = 1;
while(number <= 10){
    Console.WriteLine(number);
    number = number + 1;        // number se incrementa en 1
}
```

En el while loop anterior, el programa imprimirá el valor de `number` e incrementará `number`. Este paso se repetirá siempre que `number <= 10`, y en este caso el bucle termina cuando `number` llega a 11.

**Nota:** Para los bucles `while`, debes recordar incrementar la variable condicional, de lo contrario, podrías introducir un bucle infinito en tu programa.

### For Loop

```
for(inicialización; condición de terminación; declaración de actualización){
    Acción(es) a tomar
}
```

En un `for loop`, hay tres partes en el bloque de condiciones: `inicialización`, `condición de terminación`, y `declaración de actualización`.

1. Al ejecutar un for loop, el programa ejecutará la parte de `inicialización`. Un ejemplo es, `int number = 1`.
2. Después, el programa revisa la `condición de terminación`. Un ejemplo es `number <= 10`.
3. Si es `true`:
    1. ejecuta la `Acción(es) a tomar` 
    2. ejecuta la `declaración de actualización` (un ejemplo es `number = number + 1`) 
4. Repetir paso 2 y 3.
5. Si la `condición de terminación` es `false`, salir del `for loop`.

El siguiente es un ejemplo que imprime del 1 al 10:

```C#
for(int number = 1; number <= 10; number = number + 1){
    Console.WriteLine(number);
}
```

{{% /notice %}}

Después de aprender sobre los `for loops` y los `while loops`, ¿cómo podemos ayudar a Patrick 🐥 a calcular fácilmente **1 + 2 + 3 + 4 ...