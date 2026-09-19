```yaml
---
title: "Ausgabe auf die Konsole"
date: 2021-03-13T14:17:07.42-07:00
draft: false
weight: 4
---
Manchmal funktioniert das Spiel oder die Anwendung nicht wie erwartet, oder Sie möchten aus Protokollierungszwecken etwas auf die Konsole ausgeben. Abgesehen vom Debuggen der Anwendung können Sie `System.out.println()` verwenden, um Ihre Nachricht auszugeben. Schauen Sie nach Ihren Nachrichten im „Logcat“-Fenster unten in Android Studio:
<img src="../resources/_gen/images/println.gif" height="60%" width="60%" title="System.out.println()" alt="Logcat-Fenster in Android Studio zeigt Nachrichten an, die mit der System.out.printIn-Protokollierungsfunktion erstellt wurden"/>

{{% notice tip %}}

## Zusammenarbeit

1. Ändern Sie `"Restarting the Tac-Tic-Toe Game!"` zu `"Restarting the Tic-Tac-Toe Game!"` oder einem beliebigen anderen Satz und lassen Sie dabei die Anführungszeichen unverändert. Drücken Sie auf „Ausführen“, um zu sehen, ob sich etwas ändert.
2. Fügen Sie eine weitere `System.out.println`-Zeile unter die aktuelle Zeile ein, um einen zweiten Satz unter dem ersten Satz auszugeben.
3. Drücken Sie auf „Ausführen“, um zu sehen, ob zwei Sätze ausgegeben werden. Falls Sie roten Text sehen, fragen Sie bitte um Hilfe.

{{% /notice %}}

{{% notice warning %}}
## HILFE! Ich sehe viel roten Text!

Falls Sie roten Text sehen, sind Fehler aufgetreten! Bitte fragen Sie um Hilfe. Achten Sie beim Programmieren in Android auf Folgendes:

1. `out` und `println` beginnen mit einem Kleinbuchstaben.
2. `System` beginnt mit einem Großbuchstaben.
3. Stellen Sie sicher, dass der Satz, den Sie ausgeben möchten, in Anführungszeichen gesetzt ist und sich zwischen den Klammern befindet.
4. Löschen Sie keine geschweiften Klammern `{` oder `}`.

{{% /notice %}}

`System.out.println` ist praktisch, wenn Sie Fehler im Code beheben möchten, aber Ihr Benutzer (die Person, die die App nutzt) kann den mit dieser Funktion ausgegebenen Text nicht sehen. Dafür eignen sich jedoch Toasts! Ein Toast ist ein kurzer, kleiner Text, den wir dem Benutzer sichtbar machen können. So können Sie einen Toast erstellen:
```kotlin
Toast.makeText(this, "Text, den wir anzeigen möchten", Toast.LENGTH_SHORT).show()
```
<img src="../resources/_gen/images/toast_example.png" title="Toast Beispiel" alt="Toast Beispiel. Sie können die Toast.makeText-Funktion mit den Argumenten Kontext, dem Nachrichten-String und Toast.LENGTH_LONG oder Toast.LENGTH_SHORT verwenden, um eine Begrüßungsnachricht wie Willkommen bei Tic-Tac-Toe anzuzeigen"/>
```