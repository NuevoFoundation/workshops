```markdown
---
title: "Booleans"
date: 2021-03-13T14:17:07.42-07:00
draft: false
weight: 9
---
Booleans sind wahre oder falsche Aussagen. Im Gegensatz zu Strings oder Zahlen speichern Booleans Wahreheitsausagen: Ist das, was ich sage, wahr oder falsch? Zum Beispiel, wenn ich frage: "Bist du ein Roboter?", führt diese Frage zu einem wahren oder falschen Ergebnis, das wir als Boolean bezeichnen. In diesem Fall, da du (hoffentlich) kein Roboter bist, wäre das Ergebnis falsch. Wir können auch mathematische Operatoren verwenden, um boolesche Ausdrücke zu erstellen. Hier sind einige Beispiele; beachte jedoch die ungewöhnlichen Symbole für "gleich" und "ungleich":

| Operator | Beschreibung            | Operator | Beschreibung               |
| -------- | ----------------------- | -------- | -------------------------- |
| `<`      | Weniger als             | `>`      | Größer als                 |
| `<=`     | Weniger als oder gleich | `>=`     | Größer als oder gleich     |
| `==`     | Gleich                  | `!=`     | Ungleich                   |

Wie gewohnt, kannst du `System.out.println` verwenden, um deine Ergebnisse auszugeben:

```kotlin
System.out.println(10 < 8);
System.out.println((3 * 6) == (32 - 14));
```
{{% notice tip %}}
## Gemeinsam Üben

Lösche den gesamten `System.out.println`-Text aus deinem Code. Versuche, die Antworten auf die folgenden Ausdrücke zu erraten. Verwende `System.out.println`, um deine Antworten zu überprüfen.

- 54 < (10 + 32)
- (37 / 5) == 7
- "Hello" + "World" == "Hello World"
- false == false
{{% /notice %}}

## Boolesche Operatoren

Du kannst boolesche Ausdrücke auch mit den Operatoren `&&` (UND) und `||` (ODER) verbinden. Zum Beispiel, nehmen wir an, ich frage: "Bist du ein Mensch und ist Nuvi ein Roboter?" Das Wort "und" verbindet die beiden Wahrheitsfragen miteinander. In diesem Fall, da es wahr ist, dass du ein Mensch bist, und es auch wahr ist, dass Nuvi ein Roboter ist, wäre das Gesamtergebnis `true`. Hier ist eine Tabelle, die beschreibt, was passiert, wenn wir Booleans miteinander verbinden:  

| Ausdruck                     | Ergebnis  | Ausdruck                             | Ergebnis |
| ---------------------------- | --------- | ------------------------------------ | -------- |
| <code>true && true</code>    | `true`    | <code>true &#124;&#124; true</code>  | `true`   |
| <code>true && false</code>   | `false`   | <code>true &#124;&#124; false</code> | `true`   |
| <code>false && true</code>   | `false`   | <code>false &#124;&#124; true</code> | `true`   |
| <code>false && false</code>  | `false`   | <code>false &#124;&#124; false</code>| `false`  | 

Zusammengefasst erfordert `&&`, dass beide booleschen Ausdrücke wahr sind, während `||` nur einen der beiden booleschen Ausdrücke als wahr benötigt. Hier sind einige weitere Beispiele:

- `(5 < 8) && (9 != 10)` ergibt `true`, da sowohl 5 kleiner als 8 ist als auch 9 nicht gleich 10 ist.
- `(6 != 2 * 3) || (8 < 2 * 4)` ergibt `false`, da sowohl 6 nicht ungleich 2 * 3 als auch 8 nicht kleiner als 2 * 4 ist.
```