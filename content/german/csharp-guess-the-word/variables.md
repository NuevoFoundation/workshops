---
title: "Variablen"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 10
---

## Variablen

Variablen sind einfach Namen, die wir Werten wie Zeichenketten, Zahlen und booleschen Werten geben können. Wir verwenden Variablen, um Informationen zu speichern, die der Computer nachverfolgen kann.

Hier ist, wie man eine Variable namens `str` deklariert. Wir sagen, dass `str` den Wert `"Hello World"` hat. Kannst du beschreiben, was die anderen Variablen unten bedeuten?

```csharp
var str = "Hello World";
var x = 88;
var happy = true;
```

Drücke **run**. Beachte, dass Variablen nicht auf die Konsole ausgegeben werden. Stattdessen speichert die Variable einfach die Zeichenkette, Zahl oder den booleschen Wert im Speicher des Computers.

![alt text height="600px" width="70%"](../media/variables-intro.png "Einführung in Variablen")

Wir können diese Variablen in anderen Anweisungen verwenden. Zum Beispiel würde der folgende Code `Hello Nuevo Foundation` auf die Konsole ausgeben:

```csharp
var str1 = "Hello";
var str2 = "Nuevo Foundation";
Console.WriteLine(str1 + " " + str2);
```

![alt text height="600px" width="70%"](../media/variables-strings.png "Variablen mit Zeichenketten")

Du kannst den Wert einer Variable jederzeit ändern, indem du erneut den `=`-Operator verwendest. Wenn du den Wert einer Variablen änderst, musst du `var` nicht erneut verwenden. Im folgenden Beispiel wird `Hola` ausgegeben, anstatt `Hello`.

```csharp
var str = "Hello";
str = "Hola";
Console.WriteLine(str);
```

![alt text height="600px" width="70%"](../media/variables-replace.png "Variablen ersetzen Werte")

Hier ist ein weiteres Beispiel: `10` wird statt `9` ausgegeben.

```csharp
var num = 9;
num = num + 1;
Console.WriteLine(num);
```

![alt text height="600px" width="70%"](../media/variables-numbers.png "Variablen mit Zahlen")

Beachte, dass du KEINEN Zeichenkettenwert mit einer Zahl oder einem booleschen Wert ersetzen kannst, und auch keine anderen Kombinationen derselben Art verwenden kannst. Der folgende Beispielcode wird NICHT funktionieren:

```csharp
var happy = "Hello";
happy = 9;
```

![alt text height="600px" width="70%"](../media/variables-invalid.png "Ungültige Variablen")

Eine weitere Möglichkeit, Variablen zu deklarieren, besteht darin, `var` durch den Typ (`string`, `int`, `bool`) der erstellten Variable zu ersetzen. Durch die explizite Deklaration des Typs vermeidest du das oben beobachtete Problem. Zum Beispiel:

```csharp
string str = "Hello World";
int x = 88;
bool happy = true;
```

Beachte, dass `var`, `string`, `int` oder `bool` spezielle Schlüsselwörter in C# sind, sodass du keine Variablen mit diesen Namen erstellen kannst.

{{% notice tip %}}

## Gemeinsam Arbeiten

Lass uns zwei neue Variablen erstellen:

- Eine Variable namens comp, die die Zeichenkette `"Computer"` speichert.
- Eine Variable namens five, die die Zahl `5` speichert.

Als nächstes verwenden wir die Variablen, um das Folgende auf die Konsole auszugeben (`Console.WriteLine`). Lass uns versuchen, dies mithilfe der Variablen zu tun!

**_Tipp:_** Wir werden den `+`-Operator verwenden, um Zeichenketten zusammenzuführen und auch Zahlen zusammenzuzählen.

```
Computer
5
ComputerComputer
10
ComputerComputerComputer
15
```

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/ULv0JH" title="Variablen - .NET Fiddle Editor" frameborder="0"></iframe>

{{% /notice %}}