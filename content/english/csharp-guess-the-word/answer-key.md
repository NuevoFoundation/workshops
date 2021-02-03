---
title: "Answer Key - C# Guess the Word"
date: 2020-03-28T10:24:17-07:00
draft: false
hidden: true
weight: 18
---

### Activity 1:

```c#
using System;
	
class MainClass {
    public static void Main(string[] args) {
	    Console.WriteLine("Hello there");
	    Console.WriteLine("I am awesome");
    }
}
```

### Activity 2:

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

### Activity 3:

```c#
class MainClass {
	public static void Main(string[] args) {
        Console.WriteLine(2-19);
        Console.WriteLine((3+5)*6);
        Console.WriteLine((13+5*8)/(6-(3+7)));
	}
}
```

### Activity 4:

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

### Activity 5:

```c#
using System;

class MainClass {
	public static void Main(string[] args) {
        var comp = "Computer";
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

### Activity 6:

```c#
using System;

class MainClass {
    public static void Main(string[] args) {
        Console.WriteLine("Welcome!"); 
        Console.WriteLine("How can I help you today?"); 
        var input = Console.ReadLine(); 
        Console.WriteLine("You asked: " + input);
        Console.WriteLine("I don’t know the answer to that! Goodbye!");
    }
}
```