---
title: "If-else Anweisungen"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 14
---

## If-else Anweisungen

Sie können `if`-Anweisungen verwenden, um Codeanweisungen **nur dann** auszuführen, wenn bestimmte Bedingungen erfüllt sind. Hier ist ein Beispiel:

```csharp
var myNum = (93 + 41) / 12;
if (myNum == 11)
{
    Console.WriteLine("Sie sind gleich!");
}
```

Innerhalb der `()` neben `if` sollten Sie einen booleschen Ausdruck angeben. Wenn der Ausdruck `true` ist, wird der Code innerhalb `{ }` ausgeführt. In diesem Fall wird, da `myNum` gleich `11` ist, `Sie sind gleich!` gedruckt.

![alt text height="600px" width="70%"](../media/if-true.png "If-else wahres Szenario")

Wenn die Bedingung `false` ist, passiert nichts! Zum Beispiel wird, da `10` nicht größer als `11` ist, `Druck mich!` nicht auf der Konsole angezeigt.

```csharp
var happy = 10;
if (happy > 11)
{
    Console.WriteLine("Druck mich!");
}
```

![alt text height="600px" width="70%"](../media/if-false.png "If-else falsches Szenario")

Verwenden Sie `else`, um dem Computer mitzuteilen, was zu tun ist, wenn die Bedingung `false` ist. In diesem Beispiel wird `jetzt werde ich stattdessen gedruckt!` auf der Konsole angezeigt.

```csharp
var happy = 10;
if (happy > 11)
{
    Console.WriteLine("Druck mich!");
}
else
{
    Console.WriteLine("Jetzt werde ich stattdessen gedruckt!");
}
```

![alt text height="600px" width="70%"](../media/if-else.png "If-else")

Sie können viele Fälle mit `else if` verketten. Beachten Sie, dass bei Verwendung von `else if` nur der erste Fall ausgewertet wird. Zum Beispiel wird im folgenden Code-Snippet `Anweisung 1` gedruckt. Wir überspringen die Überprüfung, dass `sad == 4` ist, und `Anweisung 2` wird nicht gedruckt, auch wenn `sad == 4` `true` ist.

```csharp
var sad = 4;
if (sad < 9)
{
    Console.WriteLine("Anweisung 1");
}
else if (sad == 4)
{
    Console.WriteLine("Anweisung 2");
}
else
{
    Console.WriteLine("Anweisung 3");
}
```

![alt text height="600px" width="70%"](../media/if-three.png "If-else drei Anweisungen")

Sie können auch `if`-Anweisungen innerhalb anderer `if`-Anweisungen platzieren, um interessantes Verhalten zu erzeugen:

```csharp
var num1 = 10;
var num2 = 20;
if (num1 < num2)
{
    if (num2 < 30)
    {
        Console.WriteLine("Hallo!");
    }
    else
    {
        Console.WriteLine("Hola!");
    }
}
```

![alt text height="600px" width="70%"](../media/if-nested.png "If-else verschachtelt")

{{% notice tip %}}

## Zusammenarbeiten

Schreiben wir ein Programm, das zunächst die folgende Zeile auf der Konsole ausgibt:

```
Macht Programmieren Spaß?
```

Danach wartet die Konsole auf eine Benutzereingabe.

- Wenn der Benutzer `ja` eingibt, druckt der Computer `Ja, ich freue mich, dass es dir gefällt!`.
- Wenn der Benutzer `nein` eingibt, druckt der Computer `Oh nein, das ist aber schade!`.
- Andernfalls druckt der Computer: `Ich verstehe dich nicht! Auf Wiedersehen!`.

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/ULv0JH" title="If-else statements - .NET Fiddle editor" frameborder="0"></iframe>

{{% /notice %}}

{{% notice info %}}

## Fun Fact: Switch-Anweisungen

Die Verwendung mehrerer `if`, `else` Anweisungen könnte sehr lang und verwirrend werden. Sie können stattdessen `switch`-Anweisungen verwenden, wenn Sie eine einzelne Variable mit mehreren Werten vergleichen möchten. Zum Beispiel kann die Aktivität **Zusammenarbeiten** mit dem folgenden Code abgeschlossen werden:

```csharp
    var input = Console.ReadLine();
    switch (input)
    {
        case "ja":
            Console.WriteLine("Ja, ich freue mich, dass es dir gefällt!");
            break;
        case "nein":
            Console.WriteLine("Oh nein, das ist aber schade!");
            break;
        default:
            Console.WriteLine("Ich verstehe dich nicht! Auf Wiedersehen!");
            break;
    }
```

Jeder Fall repräsentiert einen möglichen Wert, den die Variable `input` annehmen könnte. Stellen Sie sicher, dass Sie die `break`-Anweisung verwenden, um dem Computer mitzuteilen, dass alle mit diesem Fall verbundenen Aktionen abgeschlossen sind.

{{% /notice %}}