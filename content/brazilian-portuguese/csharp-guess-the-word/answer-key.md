---
title: "Resposta - C# Adivinhe a palavra"
date: 2020-03-28T10:24:17-07:00
draft: false
hidden: true
weight: 18
---

### Atividade 1:

```c#
using System;
	
class MainClass {
    public static void Main(string[] args) {
	    Console.WriteLine("Olá!");
	    Console.WriteLine("Eu sou incrível");
    }
}
```

### Atividade 2:

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

### Atividade 3:

```c#
class MainClass {
	public static void Main(string[] args) {
        Console.WriteLine(2-19);
        Console.WriteLine((3+5)*6);
        Console.WriteLine((13+5*8)/(6-(3+7)));
	}
}
```

### Atividade 4:

```c#
class MainClass {
	public static void Main(string[] args) {
		Console.WriteLine(54 < (10 + 32));
		Console.WriteLine((37 / 5) == 7 );
		Console.WriteLine("Olá" + "Mundo" == "Olá Mundo");
		Console.WriteLine(false == false);
		Console.WriteLine((11 - 2 < 10) && (7 + 3 > 10));
		Console.WriteLine((true || 3 < 1) && (false || 3 > 1));
	}
}
```

### Atividade 5:

```c#
using System;

class MainClass {
	public static void Main(string[] args) {
        var comp = "Computador";
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

### Atividade 6:

```c#
using System;

class MainClass {
    public static void Main(string[] args) {
        Console.WriteLine("Bem-vindo!"); 
        Console.WriteLine("Como eu posso te ajudar hoje?"); 
        var input = Console.ReadLine(); 
        Console.WriteLine("Você perguntou: " + input);
        Console.WriteLine("Não sei a resposta para isso! Até logo!");
    }
}
```