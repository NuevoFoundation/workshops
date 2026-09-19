```markdown
---
title: "Aktivität 5 - Verwende bedingte Anweisungen"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 15
---

## Aktivität 5

Diese Aktivität ist in zwei Teile unterteilt. Nutze dein Wissen über `if`-`else`-Anweisungen, um die Aufgaben zu lösen. Wie immer drücke **run**, nachdem du jeden Teil abgeschlossen hast, um auf Fehler zu prüfen.

### Aktivität 5.1

Nachdem der Spieler einen Buchstaben erraten hat und wir überprüft haben, ob der Buchstabe im Wort vorkommt, müssen wir prüfen, ob das gesamte Wort erraten wurde. Wenn das gesamte Wort korrekt identifiziert wurde, sollten wir den Computer wissen lassen, dass der Spieler das Spiel gewonnen hat. Verwende eine `if`-Anweisung, um den Wert der Variablen `won` nur zu ändern, wenn die Anzahl der korrekt erratenen Buchstaben der Anzahl der Buchstaben im zu erratenden Wort entspricht.

### Aktivität 5.2

Am Ende des Spiels sollten wir dem Spieler mitteilen, ob er das Spiel gewonnen oder verloren hat.

- Wenn der Spieler das Spiel gewonnen hat, gib in der Konsole aus: `You won!`.
- Andernfalls erkläre dem Spieler, dass er verloren hat, und gib die richtige Antwort aus. Zum Beispiel, wenn der Spieler die richtige Antwort `"Hello"` nicht erraten konnte, gib aus: `You lost! The answer was 'Hello'`.

Um beide Teile der Aktivität zu testen, setze die Wortbank so, dass sie nur ein zweibuchstabiges Wort enthält (siehe **Aktivität 2**, falls du vergessen hast, wie das geht). Drücke **run** und errate das Wort korrekt, während du das Spiel spielst. Stelle sicher, dass `You won!` ausgegeben wird. Drücke **run** erneut und überprüfe, dass `You lost!` ausgegeben wird, wenn du das Spiel verlierst.
```