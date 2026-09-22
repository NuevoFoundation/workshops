```markdown
---
title: "Booleans"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 8
---

## Booleans

**Booleans** sind Aussagen, die entweder `true` oder `false` sind. Anders als Zeichenketten (Strings) oder Zahlen speichern Booleans Aussagen über die Wahrheit: Ist das, was ich sage, wahr oder falsch? Wenn ich beispielsweise frage: „Bist du ein Roboter?“, ergibt diese Frage ein `true`- oder `false`-Ergebnis, das wir als **Boolean** bezeichnen. In diesem Fall, da du hoffentlich kein Roboter bist, würden wir `false` erhalten.

Wir können auch mathematische Operatoren verwenden, um boolesche Ausdrücke zu erstellen. Hier sind einige Beispiele, wobei du die ungewöhnlichen Symbole für „gleich“ und „ungleich“ beachtest:

| Operator | Beschreibung         | Operator | Beschreibung              |
| -------- | -------------------- | -------- | ------------------------- |
| `<`      | Kleiner als          | `>`      | Größer als                |
| `<=`     | Kleiner oder gleich  | `>=`     | Größer oder gleich        |
| `==`     | Gleich               | `!=`     | Nicht gleich              |

Wie üblich kannst du `Console.WriteLine` verwenden, um deine Ergebnisse auszugeben:

```csharp
Console.WriteLine(10 < 8);
Console.WriteLine((3 * 6) == (32 - 14));
```

![alt text height="600px" width="70%"](../media/booleans-intro.png "Booleans ausgeben")

{{% notice tip %}}

## Zusammenarbeit

Versuche, die Antworten auf die folgenden Ausdrücke zu erraten. Verwende `Console.WriteLine`, um deine Antworten zu überprüfen.

- `54 < (10 + 32)`
- `(37 / 5) == 7`
- `"Hello" + "World" == "Hello World"`
- `false == false`

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/ULv0JH" title="Booleans - .NET Fiddle editor" frameborder="0"></iframe>

{{% /notice %}}
```