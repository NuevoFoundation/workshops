---
title: "Clases y Objetos"
description: "Introducción a las clases y objetos en C#."
date: 2024-09-16T00:00:00Z
weight: 8
---

## ¿Qué es un Objeto y qué es una Clase?

Un Objeto es una cosa (sustantivo) que tiene ciertas características y puede realizar determinadas tareas. Una Clase es el plano o definición para ese objeto cuando se crea.

Un ejemplo es una Persona. Una Persona es una especie de Clase. Una persona puede tener ciertas características que la distinguen de otra persona. Puede tener ojos azules, puede tener 15 años, etc. Una persona también puede realizar ciertas tareas. Puede caminar, puede hablar, etc.

Un Objeto de C# es una instancia de una Clase de C#. En este caso, "Bea" es una "Persona". "Bea" tiene ojos marrones. Esta es una propiedad (o campo de datos) de "Bea". "Bea" puede hablar en inglés. "Bea" puede hablar en español. Estos son métodos que "Bea" puede realizar.

## ¡Creando una Clase!

C# es un lenguaje de programación **orientado a objetos**, lo que significa que todo en C# está asociado con un **objeto** y una **clase** (el plano para el objeto).

Para comenzar, la línea de código que utilizamos para imprimir declaraciones en la actividad 1 es en realidad una llamada a un método de una clase predefinida llamada `System`:

```csharp
Console.WriteLine("Hello World");
```

1. `Console` es una clase que maneja la entrada y salida del usuario.
3. `WriteLine()` es un método definido en la clase `Console`.

Otra clase predefinida con la que hemos interactuado en ejercicios anteriores es `string`. La clase `string` define un conjunto de reglas sobre cómo debe comportarse una lista de caracteres.

Con la siguiente línea de código, creamos un objeto `string` llamado `name` usando las reglas definidas en la clase `string`:

```csharp
string name = "Patrick";
```

`Console` y `string` son clases predefinidas en C#. Sin embargo, no estamos limitados a estas clases predefinidas y, de hecho, podemos crear nuestro propio tipo de datos al escribir una clase. Esto es útil para los programadores que desean crear objetos específicos con ciertos atributos y comportamientos. Tener acceso a estos tipos definidos por el usuario nos permite construir programas distintos.

Aprendamos sobre las diferentes partes de una clase a continuación:

{{% notice note %}}
### Clase  
Una clase es un plano o prototipo de un nuevo tipo de objeto. En general, una clase contiene tres partes importantes:  

<img src="../images/class.png" height="400" alt="Un plano de Clase para un objeto contiene variables de instancia/campos de datos que son datos/atributos en el objeto, constructores que son métodos que crean el objeto de la clase, y métodos, que son comportamientos posibles para el objeto."/>  

**Elemento** | **Descripción** | **Ejemplo**  
---|---|---  
**campos de datos/variables de instancia** | variables a las que un objeto de esta clase tiene acceso y que describen el objeto | Por ejemplo, una clase Persona podría tener campos colorOjos, edad, altura.  
**constructor** | método llamado automáticamente cuando se crea un objeto de esta clase, los constructores tienen el mismo nombre que la clase | Puede haber más de un constructor por clase.  
**métodos** | métodos para que el objeto de esta clase realice tareas específicas | La clase Persona podría tener métodos hablar y caminar.  

Por ejemplo:

```csharp
public class Person{
    // (1) campos de datos/variables de instancia
    private String name; // ejemplo
    private int age;
    private int height;

    // (2) constructor - los constructores tienen el mismo nombre que la clase
    public Person()
    {
        name = "Bea";
        age = 29;
        height = 167;
    }

    // (2) constructor - puedes tener más de uno
    public Person( String nameInput, int ageInput, int heightInput)
    {
        name = nameInput;
        age = ageInput;
        height = heightInput;
    }

    // (3) métodos
    public void talk()
    {
        Console.WriteLine($"Hello from {name}");
    }
}
```

{{% /notice %}}

## ¡Inténtalo! 🐥

Vamos a crear una clase `Bird` para representar a Patrick 🐥 y a todos sus amigos pájaros siguiendo los pasos a continuación:

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/OH5XQO" title="Ejercicio interactivo de clase Bird en C#" frameborder="0"></iframe>

### Primero, comencemos definiendo el nombre de la clase en el formato `public` `class` `nombre`.

```csharp
public class Bird{}
```

<br />

### Segundo, declaremos todos los campos de la clase Bird: especie, nombre, hobby, edad, gustaMusica.

Cada campo se declara en el formato: `especificador de acceso` `tipo de dato` `nombre` `;`.

1. Declaramos los 5 campos como `private` en la clase `Bird`. Esto asegura que solo puedan ser accedidos dentro de esta clase.

2. Identifiquemos el tipo apropiado para cada campo:

- `species` debe ser un `String` que almacene, por ejemplo: "pato", "cisne", "búho".
- `name` debe ser un `String` que almacene, por ejemplo: "Patrick".
- `hobby` debe ser un `String` que almacene, por ejemplo: "jugar baloncesto".
- `age` debe ser un `int` que almacene, por ejemplo: 25.
- `loveMusic` debe ser un `bool` que almacene `true` o `false`.

Por ejemplo, para declarar `species` como un campo privado de la clase `Bird`, usarías `private String species;`.

3. ¡Termina de crear los otros 4 campos de la clase Bird!

### Tercero, creemos el constructor para la clase `Bird`.

Usualmente, el constructor es el método que inicializa los valores de todos los campos en una clase. Tiene el formato: `public` `nombre de la clase` `(parámetro)`. Dado que tenemos 5 campos en esta clase, el constructor tomará 5 parámetros/entradas.

```csharp
public Bird(string speciesInput, string nameInput, string hobbyInput, int ageInput, bool loveMusicInput){
    // cuerpo del constructor
}
```

En el cuerpo del constructor, necesitamos inicializar todas las variables de instancia, asignando valores iniciales a cada variable:

```csharp
species = speciesInput;
name = nameInput;
hobby = hobbyInput;
age = ageInput;
loveMusic = loveMusicinput;
```

