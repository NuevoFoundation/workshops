```yaml
---
title: "Schritt 1 - Das Problem finden (Teil 1)"
difficulties: ["mittel"]
weight: 3
draft: false
---

## Compiler-Fehler

Lass uns anfangen und einen Blick auf eines der ersten einschüchternden Probleme werfen, dem ein Anfängerprogrammierer begegnet: **Lesen** und **Verstehen** von Fehlern.

Es gibt zwei Arten von Fehlern: **Compiler-Fehler** und **Laufzeitfehler**.

Ein **Compiler-Fehler** weist normalerweise auf ein Problem in der Syntax hin. Vielleicht wolltest du eine Idee im Programm ausdrücken, hast dich aber nicht an die Regeln der Programmiersprache gehalten. Diese Fehler werden erkannt, wenn du dein Programm kompiliert. Compiler-Fehler sind angenehm, da sie relativ einfach zu beheben sind. Compiler wie `gcc` geben in der Regel viele Informationen darüber, was schiefgelaufen ist, wenn der Code kompiliert wird. Schauen wir uns einige dieser Fehler an.

Öffne den **Shell**-Tab im Replit-Programm unten und führe den folgenden Befehl aus:

```bash
make CompilerErrors
```

{{% notice note %}}
In diesem Beispiel werden wir das Programm nicht ausführen - dieses Programm soll einige häufige Compiler-Fehler aufzeigen, auf die du stoßen könntest.
{{% /notice %}}

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Debugging-Samples-C" target="_blank">Replit starten</a>

Der erste Fehler sollte so (oder ähnlich) aussehen:

![Fehler 1: Fehlendes Semikolon](../resources/w2-01.png "Ein Screenshot eines Compiler-Fehlers, der besagt 'error: expected ';' after top level declarator'")

Du wirst bemerken, dass die Fehlermeldung Folgendes enthält:

- den Namen der Datei, die wir zu kompilieren versuchten (**`CompilerErrors.c`**).
- die Zeilennummer, in der der Fehler gefunden wurde (**`12`**).
- die Position in der Zeile, an der der Fehler gefunden wurde (**`19`**).

Wie du sehen kannst, zeigt der Compiler die fehlerhafte Codezeile an und markiert die Stelle, an der der Fehler tatsächlich aufgetreten ist! Anschließend gibt er eine kurze Beschreibung des Fehlers aus - in diesem Fall erwartete der Compiler ein Semikolon (**`;`**) am Ende der Zeile. Du kannst diesen Fehler einfach beheben, indem du ein Semikolon hinzufügst.

Ein weiterer Fehler gibt an, dass eine schließende geschweifte Klammer (**`}`**) fehlt, wenn diese nicht erwartet wurde. Auch dieser Fehler ist relativ einfach zu beheben: Du kannst die entsprechende öffnende Klammer `{` neben `func()` hinzufügen.

{{% notice warning %}}
Eine fehlende geschweifte Klammer ist oft der Grund für scheinbar außergewöhnliche Fehler. Der Compiler ist nicht gut darin, zu erkennen, wo eine geschweifte Klammer stehen sollte. Wenn du also eine Header-Datei mit einer fehlenden geschweiften Klammer einbindest, kann das zu vielen (manchmal kryptischen) Fehlern führen. In fast allen Fällen, wenn der Compiler eine Vielzahl von Fehlern in einem Code meldet, den du nicht selbst geschrieben hast, liegt es wahrscheinlich an einer fehlenden geschweiften Klammer irgendwo in deinem (oder wahrscheinlich auch im Code einer Library)!
{{% /notice %}}

Nachdem du den Fehler behoben hast, kannst du den Code erneut mit demselben Befehl kompilieren.

```bash
make CompilerErrors
```

Moment, es gibt noch weitere Fehler! Wie in der Hinweisbox erwähnt, ist der Compiler nicht besonders gut darin, Fehler zu erkennen, wenn eine geschweifte Klammer fehlt. Ein Compiler-Fehler kann andere "verstecken".

Wir verwenden eine Tabelle, um häufige Compiler-Fehler und deren allgemeine Ursachen darzustellen:

| Fehler | Ursache | Allgemeine Lösung |
|---|---|---|
| Fehlendes Semikolon | Fehlendes Semikolon. | Füge das Semikolon `;` hinzu. |
| Erwarteter Funktionskörper nach Funktionsdeklarator | Fehlende geschweifte Klammer `{`, normalerweise am Anfang eines Funktionskörpers. | Füge die geschweifte Klammer `{` dort ein, wo sie hingehört. |
| Erwarteter Bezeichner oder '(' | Im Zusammenhang mit geschweiften Klammern bedeutet das in der Regel, dass du eine zusätzliche "hängende" geschweifte Klammer `{` hast. | Entferne die geschweifte Klammer oder füge eine entsprechende `}` danach hinzu. |
| Mehrfache Definition von ... | Irgendwo in deinem Code hast du eine Variable deklariert und sie später erneut deklariert. | Benenne die Variablen um oder entferne eine der Deklarationen. |
| Verwendung eines nicht deklarierten Typs... | Der Compiler kann die Deklaration eines Typs, den du verwenden möchtest, nicht finden. | Dieser Fehler kommt normalerweise von falschen `#include`-Direktiven (da Typen normalerweise in Header-Dateien deklariert sind). Stelle sicher, dass keine Tippfehler vorliegen. |
| Muss `struct` (oder `enum`) Tag verwenden | C erfordert, dass du `struct NAME_OF_TYPE` oder `enum NAME_OF_ENUM` verwendest, wenn du auf den entsprechenden `struct`/`enum` Typ verweisen möchtest. | Üblicherweise verwenden C-Entwickler eine `typedef`-Anweisung, um das erneute Schreiben von `struct` oder `enum` zu vermeiden. Du kannst diese Schlüsselwörter aber auch selbst hinzufügen. |
| Kein Mitglied mit dem Namen... | In deinem `struct` gibt es kein Feld mit dem angeforderten Namen. | Wahrscheinlich ein Tippfehler oder das Feld wurde noch nicht in deinem `struct` definiert. |
| Inkompatible Typen... | Du kombinierst unterschiedliche Datentypen auf eine Weise, die in C nicht zulässig ist, ohne explizites Casten. | Überprüfe, ob die Zuweisung korrekt ist, oder verwende explizites Casten, um den Fehler während der Kompilierzeit zu beheben. Dies kann jedoch zu Laufzeitfehlern führen. |
| Argumenttyp ist unvollständig | Wenn eine Funktion `void` zurückgibt, kannst du sie nicht als Argument an eine andere Funktion übergeben! | Ändere die Funktionsdeklaration in einen anderen Rückgabetyp als `void`, und stelle sicher, dass dies das Verhalten ist, das du möchtest. |
| Überflüssige '(' oder ')' vor ';' | Nicht übereinstimmende Klammern `()` | Es gibt ein zusätzliches Paar Klammern irgendwo. Überprüfe, ob jedes Klammerpaar vollständig ist! |

Wenn die Anwendung einer allgemeinen Lösung nicht funktioniert, solltest du *dann* das Internet um Hilfe konsultieren. Bei häufigen Fehler