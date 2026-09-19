---
title: "Bedingungen"
date: 2021-03-13T14:17:07.42-07:00
draft: false
weight: 10
---
Wir können `if`-Anweisungen verwenden, um einen Codeausschnitt nur auszuführen, wenn bestimmte Bedingungen erfüllt sind.

Zum Beispiel:

```kotlin
if (isRainingOutside == true) {
    takeUmbrella = true;
} else {
    takeUmbrella = false;
}
```

Für unser Spiel sollten wir `if`-Anweisungen verwenden, um festzustellen, ob ein Spieler 3 vertikale, horizontale oder diagonale Übereinstimmungen hat.

Innerhalb der `()` neben `if` solltest du eine _Boolesche Ausdruck_ angeben. **Boolsche Werte** sind `true`- oder `false`-Aussagen. Wir können dies in unserer `if`-Anweisung verwenden. Wenn der Ausdruck `true` ist, wird der Code innerhalb von `{ }` ausgeführt. Wenn der Ausdruck `false` ist, wird der Code innerhalb von `{ }` nach der `else`-Anweisung ausgeführt.

Du kannst auch **boolesche Ausdrücke** mit dem `&&`- (UND) und dem `||`- (ODER) Operator verbinden.

Schau dir die Funktion `CheckWinner()` in `MainActivity.kt` an und überlege, was all die verbundenen `&&`-Anweisungen bewirken.