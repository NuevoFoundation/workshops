```markdown
---
title: "Clef de réponse - C# Devine le Mot"
date: 2020-03-28T10:24:17-07:00
draft: false
hidden: true
weight: 18
---

### Activité 1:

```c#
using System;

class MainClass {
    public static void Main(string[] args) {
	    Console.WriteLine("Bonjour là-bas");
	    Console.WriteLine("Je suis génial");
    }
}
```

### Activité 2:

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

### Activité 3:

```c#
class MainClass {
	public static void Main(string[] args) {
        Console.WriteLine(2-19);
        Console.WriteLine((3+5)*6);
        Console.WriteLine((13+5*8)/(6-(3+7)));
	}
}
```

### Activité 4:

```c#
class MainClass {
	public static void Main(string[] args) {
		Console.WriteLine(54 < (10 + 32));
		Console.WriteLine((37 / 5) == 7 );
		Console.WriteLine("Bonjour" + "Monde" == "Bonjour Monde");
		Console.WriteLine(false == false);
		Console.WriteLine((11 - 2 < 10) && (7 + 3 > 10));
		Console.WriteLine((true || 3 < 1) && (false || 3 > 1));
	}
}
```

### Activité 5:

```c#
using System;

class MainClass {
	public static void Main(string[] args) {
        var comp = "Ordinateur";
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

### Activité 6:

```c#
using System;

class MainClass {
    public static void Main(string[] args) {
        Console.WriteLine("Bienvenue!"); 
        Console.WriteLine("Comment puis-je vous aider aujourd'hui?"); 
        var input = Console.ReadLine(); 
        Console.WriteLine("Vous avez demandé : " + input);
        Console.WriteLine("Je ne connais pas la réponse à cela ! Au revoir!");
    }
}
```
```