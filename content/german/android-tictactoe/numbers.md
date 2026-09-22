---
title: "Zahlen"
date: 2021-03-13T14:17:07.42-07:00
draft: false
weight: 8
---
Der Computer kann auch normale Mathematik ausführen, die du in der Schule siehst. Verwende `System.out.println`, um das Ergebnis der mathematischen Ausdrücke auszugeben.

```kotlin
System.out.println(5 + 4);
System.out.println(6 * (9 - 7) / 3);
```

Hier ist die vollständige Liste der mathematischen Symbole, die du verwenden kannst:

<table class="table">
            <tr>
                <td><code class="language-cs">+</code></td>
                <td>Addieren</td>
                <td><code class="language-cs">\</code></td>
                <td>Teilen</td>
            </tr>
            <tr>
                <td><code class="language-cs">-</code></td>
                <td>Subtrahieren</td>
                <td><code class="language-cs">%</code></td>
                <td>Modulo (Rest)</td>
            </tr>
            <tr>
                <td><code class="language-cs">*</code></td>
                <td>Multiplizieren</td>
                <td><code class="language-cs">(</code>,<code class="language-cs">)</code></td>
                <td>Klammern</td>
            </tr>
        </table>

**_Interessante Tatsache: Division am Computer_**

Der Computer führt Division anders aus als dein gewöhnlicher Taschenrechner. Die Division am Computer ignoriert Reste oder Dezimalstellen. Zum Beispiel ergibt 15 / 4 ein Ergebnis von 3 und nicht 3,75.

{{% notice tip %}}
## Zusammenarbeit

Versuche, die Antworten auf die folgenden Ausdrücke in der Konsole auszugeben. Stelle sicher, dass deine Klammern korrekt gesetzt sind. Verwende einen Taschenrechner (oder Kopfrechnen), um zu überprüfen, ob der Computer die richtige Antwort liefert.

- 2 - 19
- (3 + 5) \* 6
- (13 + 5 \* 8) / (6 - (3 + 7))
- 3 % 2

{{% /notice %}}