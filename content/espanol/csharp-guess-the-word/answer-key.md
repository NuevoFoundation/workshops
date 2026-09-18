---
title: "Clave de Respuestas - C# Adivina la Palabra"
date: 2020-03-28T10:24:17-07:00
draft: false
hidden: true
weight: 18
---

### Actividad 1:

```c#
using System;
	
class MainClass {
    public static void Main(string[] args) {
	    Console.WriteLine("Hola allí");
	    Console.WriteLine("Soy increíble");
    }
}
```

### Actividad 2:

```c#
using System;
	
class MainClass {
    public static void Main(string[] args) {
        Console.WriteLine("Nuevo" + " " + "Foundation");
        Console.WriteLine("Nue" + "vo " + "Foundation");
        Console.WriteLine("Nuevo " + "Foun" + "dation");
	}
}
```

### Actividad 3:

```c#
class MainClass {
	public static void Main(string[] args) {
        Console.WriteLine(2-19);
        Console.WriteLine((3+5)*6);
        Console.WriteLine((13+5*8)/(6-(3+7)));
	}
}
```

### Actividad 4:

```c#
class MainClass {
	public static void Main(string[] args) {
		Console.WriteLine(54 < (10 + 32));
		Console.WriteLine((37 / 5) == 7 );
		Console.WriteLine("Hello" + "World" == "Hello World");
		Console.WriteLine(false == false);
		Console.WriteLine((11 - 2 < 10) && (7 + 3 > 10));
		Console.WriteLine((true || 3 < 1) && (false || 3 > 1));
	}
}
```

### Actividad 5:

```c#
using System;

class MainClass {
	public static void Main(string[] args) {
        var comp = "Computadora";
        var five = 5;	
		Console.WriteLine(comp);
		Console.WriteLine(five);
		Console.WriteLine(comp + comp);
		Console.WriteLine(five + five);
		Console.WriteLine(comp + comp + comp);
		Console.WriteLine(five + five + five);
	}
}
```

### Actividad 6:

```c#
using System;

class MainClass {
    public static void Main(string[] args) {
        Console.WriteLine("¡Bienvenido!"); 
        Console.WriteLine("¿En qué puedo ayudarte hoy?"); 
        var input = Console.ReadLine(); 
        Console.WriteLine("Preguntaste: " + input);
        Console.WriteLine("¡No sé la respuesta a eso! ¡Adiós!");
    }
}
```