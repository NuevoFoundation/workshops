```markdown
---
title: "Жооптор Тизмеси - C# Сөздү Болжоо"
date: 2020-03-28T10:24:17-07:00
draft: false
hidden: true
weight: 18
---

### Аткарма 1:

```c#
using System;
	
class MainClass {
    public static void Main(string[] args) {
	    Console.WriteLine("Салам, бул жерде");
	    Console.WriteLine("Мен сонунмун");
    }
}
```

### Аткарма 2:

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

### Аткарма 3:

```c#
class MainClass {
	public static void Main(string[] args) {
        Console.WriteLine(2-19);
        Console.WriteLine((3+5)*6);
        Console.WriteLine((13+5*8)/(6-(3+7)));
	}
}
```

### Аткарма 4:

```c#
class MainClass {
	public static void Main(string[] args) {
		Console.WriteLine(54 < (10 + 32));
		Console.WriteLine((37 / 5) == 7 );
		Console.WriteLine("Салам" + "Дүйнө" == "Салам Дүйнө");
		Console.WriteLine(false == false);
		Console.WriteLine((11 - 2 < 10) && (7 + 3 > 10));
		Console.WriteLine((true || 3 < 1) && (false || 3 > 1));
	}
}
```

### Аткарма 5:

```c#
using System;

class MainClass {
	public static void Main(string[] args) {
        var comp = "Компьютер";
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

### Аткарма 6:

```c#
using System;

class MainClass {
    public static void Main(string[] args) {
        Console.WriteLine("Кош келдиңиз!"); 
        Console.WriteLine("Сизге бүгүн кандай жардам бере алам?"); 
        var input = Console.ReadLine(); 
        Console.WriteLine("Сиз сурадыңыз: " + input);
        Console.WriteLine("Анын жообун билбейм! Кош болуңуз!");
    }
}
```
```