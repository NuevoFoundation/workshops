---
title: "Boolesche Operatoren"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 9
---

## Boolesche Operatoren

Du kannst boolesche Ausdrücke auch mit dem Operator `&&` (UND) und dem Operator `||` (ODER) verknüpfen. Zum Beispiel, angenommen, ich frage: „Bist du ein Mensch, und ist Nuvi ein Roboter?“ Das Wort „und“ verbindet die zwei wahr-falsch-Fragen miteinander. In diesem Fall, da es wahr ist, dass du ein Mensch bist, und es auch wahr ist, dass Nuvi ein Roboter ist, ist das Gesamtergebnis `true`.

Hier ist eine Tabelle, die beschreibt, was passiert, wenn wir boolesche Werte miteinander verbinden:

| Ausdruck          | Ergebnis | Ausdruck                              | Ergebnis |
| ----------------- | -------- | ------------------------------------- | -------- |
| `true && true`    | `true`   | <code>true &#124;&#124; true</code>   | `true`   |
| `true && false`   | `false`  | <code>true &#124;&#124; false</code>  | `true`   |
| `false && true`   | `false`  | <code>false &#124;&#124; true</code>  | `true`   |
| `false && false`  | `false`  | <code>false &#124;&#124; false</code> | `false`  |

Zusammenfassend lässt sich sagen, dass `&&` erfordert, dass beide booleschen Ausdrücke wahr sind, während `||` nur einen der beiden booleschen Ausdrücke als `true` benötigt. Hier sind einige weitere Beispiele:

- `(5 < 8) && (9 != 10)` ergibt `true`, da sowohl `5` kleiner als `8` ist als auch `9` ungleich `10` ist.
- `(8 <= 2) || ("h" + "e" == "he")` ergibt `true`, da `"h" + "e"` zu `"he"` führt, auch wenn `8` nicht kleiner oder gleich `2` ist.
- `(6 != 2 * 3) || (8 < 2 * 4)` ergibt `false`, da sowohl `6` nicht ungleich `2 * 3` ist als auch `8` nicht kleiner als `2 * 4` ist, was beide `false` ergibt.

![alt text height="600px" width="70%"](../media/booleans-advanced.png "Kombinieren von Booleschen Werten")

{{% notice tip %}}

## Zusammenarbeit

Versuche die Antworten auf die folgenden Ausdrücke zu erraten. Nutze `Console.WriteLine`, um die Antworten auszugeben.

- `(9 < 10) && (12 => 11)`
- `(15 - 2 == 11) || (4 % 3 != 2)`

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/ULv0JH" title="Boolesche Operatoren - .NET Fiddle Editor" frameborder="0"></iframe>

{{% /notice %}}