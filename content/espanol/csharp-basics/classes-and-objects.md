```yaml
---
title: "Clases y Objetos"
description: "Introduce clases y objetos en C#."
date: 2024-09-16T00:00:00Z
weight: 8
---

## ¿Qué es un Objeto y qué es una Clase?

Un Objeto es una cosa (sustantivo) que tiene ciertas características y puede realizar ciertas tareas. Una Clase es el plano o definición de ese objeto cuando se crea.

Un ejemplo es una Persona. Una Persona es un tipo de Clase. Una persona puede tener ciertas características que la distinguen de otra persona. Puede tener ojos azules, puede tener 15 años, etc. Una persona también puede realizar ciertas tareas. Puede caminar, puede hablar, etc.

Un Objeto C# es una instancia de una Clase C#. En esta instancia "Bea" es una "Persona". "Bea" tiene ojos marrones. Esta es una propiedad (o campo de datos) de "Bea". "Bea" puede hablar en inglés. "Bea" puede hablar en español. Estos son métodos que "Bea" puede realizar.

## ¡Creando una Clase!

C# es un lenguaje de programación **orientado a objetos**, lo que significa que todo en C# está asociado con un **objeto** y una **clase** (el plano para el objeto).

Para empezar, la línea de código que usamos para imprimir declaraciones desde la actividad 1 es en realidad una llamada a un método de una clase predefinida llamada `System`!

```csharp
Console.WriteLine("Hello World");
```

1. `Console` es una clase que maneja entradas y salidas de usuario.
3. `WriteLine()` es un método definido en la clase `Console`.

Otra clase incorporada con la que hemos interactuado en ejercicios anteriores es `string`. La clase `string` define un conjunto de reglas sobre cómo debe comportarse una lista de caracteres.

Con la siguiente línea de código, creamos un objeto `string` llamado `name` usando las reglas definidas en la clase `string`:

```csharp
string name = "Patrick";
```

`Console`, y `string` son clases predefinidas en C#. Sin embargo, no estamos limitados a estas clases predefinidas, y de hecho podemos crear nuestro propio tipo de dato escribiendo una clase. Esto es útil para que los programadores creen objetos específicos que tengan ciertos atributos y comportamientos. Tener acceso a estos tipos definidos por el usuario nos permite construir programas distintos.

Aprendamos sobre las diferentes partes de una clase a continuación:

{{% notice note %}}
### Clase
Una clase es un plano o prototipo de un nuevo tipo de objeto. En general, una clase contiene tres partes importantes:

<img src="../images/class.png" height="400" alt="Un plano de Clase para un objeto contiene variables de instancia/campos de datos que son datos/atributos en el objeto, constructores que son métodos que crean el objeto de la clase, y métodos, que son comportamientos posibles para el objeto."/> 

**Elemento** | **Descripción** | **Ejemplo**
---|---|---
**campos de datos/variables de instancia** | variables a las que un objeto de esta clase tiene acceso y que describen el objeto | Por ejemplo, una clase Persona podría tener campos colorDeOjos, edad, altura.
**constructor** | método llamado automáticamente cuando se crea un objeto de esta clase, los constructores tienen el mismo nombre que la clase | Puede haber más de un constructor por clase
**métodos** | métodos para que el objeto de esta clase realice ciertas tareas | Una clase Persona podría tener métodos hablar y caminar.

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
    public Person(String nameInput, int ageInput, int heightInput)
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

## ¡Pruébalo 🐥!

¡Vamos a crear una clase `Bird` para representar a Patrick 🐥 y todos sus amigos pájaros siguiendo los pasos a continuación!

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/O