---
title: "Strings"
date: 2026-04-25T00:00:00-07:00
draft: false
weight: 5
---

## Strings

Alles, was in Anführungszeichen steht, wird als String bezeichnet. So stellt ein Computer Wörter oder Sätze dar. Zum Beispiel sind `"a"`, `"2"`, `"banana!"` und `"Hello World"` Strings, aber `Hello World` und `2` sind keine Strings, da die Anführungszeichen fehlen.

Sie können viele Strings miteinander kombinieren, indem Sie den `+`-Operator verwenden. Zum Beispiel:

- `"Apple" + "Pineapple"` ergibt den String `"ApplePineapple"`.
- `"Nuevo" + " " + "Foundation"` ergibt den String `"Nuevo Foundation"`.

```csharp
Console.WriteLine("Apple" + "Pineapple");
Console.WriteLine("Nuevo" + " " + "Foundation");
```

![alt text height="600px" width="70%"](../media/strings-intro.png "Strings mit + kombinieren")

{{% notice tip %}}

## Zusammenarbeit

Im folgenden Replit-Programm haben wir den Code mit der Zeile `Console.WriteLine("Nuevo" + " " + "Foundation");` begonnen.

Beachten Sie, dass es viele Möglichkeiten gibt, Strings zu kombinieren. Eine andere Möglichkeit, Nuevo Foundation auszugeben, wäre beispielsweise, `Console.WriteLine("Nue" + "vo Fou" + "ndation");` zu schreiben.

Wir werden uns mindestens eine weitere Möglichkeit überlegen, den String `"Nuevo Foundation"` zu drucken, indem wir in jeder `Console.WriteLine`-Anweisung zwei `+`-Symbole verwenden. Vergewissern Sie sich, dass Nuevo Foundation dreimal ausgegeben wird. Mit anderen Worten, Ihre Konsole sollte nach dem Drücken von **Ausführen** wie folgt aussehen:

```
Nuevo Foundation
Nuevo Foundation
Nuevo Foundation
```

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/itRFnP" title="Strings - .NET Fiddle Editor" frameborder="0"></iframe>

{{% /notice %}}