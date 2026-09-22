```markdown
---
title: "2. Lesen und Verarbeiten von Eingaben"
description: "Eingaben mit der Scanner-Klasse lesen und Fehlerfälle überprüfen"
date: 2021-10-14T00:00:00Z
prereq: "Das Spielfeld einrichten!"
difficulties: ["mittlere Schwierigkeit"]
weight: 3
draft: false
---

## Pakete importieren

In Java ist eine effiziente Methode, Benutzereingaben zu erhalten, die Verwendung der Klasse `Scanner` aus dem Paket `java.util`. Um diese Klasse und alle ihre Methoden zu verwenden, müssen wir die Klasse mit der folgenden Codezeile am oberen Rand der Datei `importieren`.

```java
import java.util.Scanner;
```

## Verwendung der Scanner-Klasse

Im `main()` müssen wir zunächst ein `Scanner`-Objekt namens `sc` erstellen, indem wir seinen Konstruktor aufrufen (wie unten gezeigt).

Wir möchten, dass der `Scanner` unsere Eingaben aus dem Standard-Eingabestream liest. Dazu müssen wir `System.in` (das Standard-Eingabestream-Objekt) übergeben.

```java
// Erstellen eines Scanner-Objekts
Scanner sc = new Scanner(System.in);
```

## Benutzer eingaben abrufen

Im vorherigen Abschnitt haben wir den Benutzer aufgefordert, Zahlen zwischen 1 und 9 einzugeben. Daher erwarten wir eine `int`-Eingabe aus dem Eingabestrom.

Um die `int`-Eingabe zu erhalten, die das `Scanner`-Objekt speichert, rufen wir die Methode `nextInt()` des `sc`-Objekts auf.

```java
int input = sc.nextInt();
```

## Testen Sie Ihr Programm (optional)

Um Ihr Programm zu testen, fügen Sie eine Print-Anweisung hinzu, um den Wert auszugeben, den Sie aus `nextInt()` speichern.

Versuchen Sie, Ihr Programm auszuführen, geben Sie einige Zahlen ein und drücken Sie die Eingabetaste. Sie sollten sehen, dass die eingegebene Zahl korrekt ausgegeben wird. Beispiel:

```
<<<~  Tic  Tac  Toe  ~>>>
* Wähle eine Zahl von 1 - 9, um deinen Zug zu machen
* Spieler: 'X' Computer: 'O'

 1 | 2 | 3 
---+---+---
 4 | 5 | 6 
---+---+---
 7 | 8 | 9 
Gib deinen Zug ein (1-9): 2                 <------- die Zahl, die du eingegeben hast
Eingegebene Zahl: 2                        <------- Die Print-Anweisung gibt die eingegebene Zahl korrekt aus
```

{{% notice warning %}}
#### Was passiert, wenn der Benutzer etwas eingibt, das keine Zahl ist?

Beim Schreiben von Programmen können wir niemals erwarten, dass Benutzer immer korrekte Werte eingeben, selbst wenn dies in der Eingabeaufforderung eindeutig angegeben wird.

Da unser Programm nur eine `int`-Eingabe erwartet, stürzt es ab, wenn der Benutzer etwas eingibt, das kein ganzzahliger Wert ist, wie etwa: `hi`, `$`, `20.1`. Eine Fehlermeldung wie die folgende wird angezeigt:

```
Exception in thread "main" java.util.InputMismatchException      <------ gibt an, welcher Fehler aufgetreten ist
    at java.base/java.util.Scanner.throwFor(Scanner.java:939)
    at java.base/java.util.Scanner.next(Scanner.java:1594)
    at java.base/java.util.Scanner.nextInt(Scanner.java:2258)
    at java.base/java.util.Scanner.nextInt(Scanner.java:2212)
    at Main.main(Main.java:15)                                   <------ gibt an, welche Codezeile den Fehler verursacht hat (Zeile 15 in Main.java)
```

Bitte beachten Sie auch, dass Zahleneingaben, die nicht im Bereich von 1 bis 9 liegen, das Programm zwar nicht zum Absturz bringen, jedoch ebenfalls unerwünschte Eingaben darstellen.
{{% /notice %}}

## Ungültige Eingaben mit Scanner behandeln

Die Klasse Scanner bietet Methoden, die auf gültige oder ungültige Eingaben prüfen. Zum Beispiel prüft die Methode `hasNextInt`, ob der Wert der Benutzereingabe eine Ganzzahl ist, und gibt `true` oder `false` zurück. Mit dieser Methode kann sichergestellt werden, dass die Eingabe des Benutzers gültig ist.

Verwenden Sie Kontrollstrukturen, um die Benutzereingabe zu validieren. Falls die Eingabe ungültig ist, fordern Sie den Benutzer zur erneuten Eingabe auf.

```java
if(sc.hasNextInt()) { // wurde eine Ganzzahl eingegeben?
	move = sc.nextInt(); // Ganzzahliger Wert wird abgerufen
   if (!(move > 0 && move <= 9)) { // ist die Ganzzahl zwischen 1 und 9?
		System.out.print("Ungültige Position; gib deinen Zug erneut ein (1-9): ");
   }
} else { // falls keine Ganzzahl eingegeben wurde
   sc.next(); // den Scanner leeren
	System.out.print("Ungültige Eingabe; gib deinen Zug erneut ein (1-9): ");
}
```

## Testen Sie Ihr Programm (optional)

Testen Sie Ihr Programm, indem Sie auf `Run` klicken. Sie sollten die Nachricht `Ungültige Position; gib deinen Zug erneut ein (1-9):` sehen, wenn Sie eine ungültige oder eine Zahl außerhalb des Bereichs 1 bis 9 eingegeben haben.

## Mehrfache Eingaben entgegennehmen

Jetzt haben wir ein Programm, das eine Eingabe entgegennimmt und bewertet, ob sie gültig ist. Nun möchten wir den Spieler dazu auffordern, dies so lange zu wiederholen, bis das Spiel endet.

Um den Benutzer kontinuierlich aufzufordern, seinen nächsten Zug einzugeben, legen wir die gesamte `hasNextInt`-if-Anweisung in eine `while-Schleife`. Diese `while-Schleife` nimmt ein Argument von `true`, was bedeutet, dass das Programm die Schleife ausführt, bis es angewiesen wird, zu stoppen.

Bitte beachten Sie, dass wir `printBoard(board)` aufrufen und den Benutzer am Ende jeder Iteration auffordern, wie unten gezeigt:

```java
while(true){
    // füge hier die hasNextInt()-if-Anweisung ein

   // diese in die hasNextInt()-if-Anweisung einfügen 
    printBoard(board);
    System.out.print("Gib deinen Zug ein (1-9): "); 
}
```

## Ungültige Eingaben behandeln

Wenn der Benutzer eine ungültige Eingabe macht, möchten wir nicht, dass das Programm `printBoard(board)` aufruft und `Gib deinen Zug ein (1-9):` ausgibt.

Mit anderen Worten: Das Programm soll bei einer ungültigen Eingabe zur nächsten Iteration der `while`-Schleife überspringen.

Wir fügen `continue;` in den Code ein, um dem Computer mitzuteilen, dass er zur oberen Stelle der `