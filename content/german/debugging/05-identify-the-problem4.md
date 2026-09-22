---
title: "Schritt 1 - Das Problem finden (Teil 4)"
difficulties: ["mittel"]
weight: 6
draft: false
---

## Eine andere Art von Fehler: Speicherfehler

Ein Albtraum für C/C++, Speicherfehler gehören zu den frustrierendsten Arten von Bugs, die es gibt. Werden sie nicht behoben, kann dies zu undefiniertem Verhalten (nicht reproduzierbare Bugs!) und Speicherlecks führen. Daher hat die Behebung dieser Fehler höchste Priorität.

{{% notice note %}}

Ein Speicherleck tritt auf, wenn Ihr Programm Speicher mit malloc oder calloc (oder anderen Speicherzuweisungsaufrufen) reserviert und diesen nicht freigibt. Der Speicher ist „verloren“ – es gibt (praktisch) keine Möglichkeit, ihn zurückzuholen, bis das Programm beendet wird.

{{% /notice %}}

Glücklicherweise haben Leute auch Programme geschrieben, um Speicherfehler aufzuspüren, und eines dieser Programme ist `valgrind`. Valgrind ist ein Tool, das nicht nur Speicherfehler erkennt, sondern Ihnen genau zeigt, wo die Fehler in Ihrem Code auftreten.
Lassen Sie uns valgrind verwenden, um herauszufinden, wo Speicherfehler auftreten. Als Beispiel haben wir eine rudimentäre Implementierung eines Vektors in C, der die Version eines dynamisch dimensionierten Arrays aus der C++-Standardbibliothek ist.

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Debugging-Samples-C" target="_blank">Replit starten</a>

Zuerst erstellen Sie das Programm mit 

```bash 
make Vector
``` 

Nun führen Sie es aus mit

```bash
examples/Vector
```

Bemerkenswert ist hier ein Fehler namens „Double Free“! Dies ist eine Art Speicherfehler, der durch einen doppelten Aufruf von `free` auf einen Zeiger entsteht.

Anstatt gdb zu verwenden, nutzen Sie valgrind, um zu überprüfen, wie Speicher zugewiesen und verwendet wird. Führen Sie den Befehl aus:

```bash
valgrind --tool=memcheck --leak-check=full examples/Vector
```

Es sollte offensichtlich sein, dass valgrind einige Fehler entdeckt hat, vielleicht in Bezug auf das Double Free (beachten Sie die `ERROR SUMMARY` unten – hier wurden einige Fehler erkannt!).

Schauen wir uns einige der Fehler genauer an.

![Valgrind Fehler 1](../resources/w4-02.png "Screenshot der Konsolenfehlermeldung mit dem Text 'Invalid read of size 8 at 0x484522D...'")

Der oben angezeigte Fehler wird als „Ungültiger Lesevorgang“ bezeichnet und tritt oft auf, weil Speicher gelesen wird, der in einem anderen Block bereits freigegeben wurde. Valgrind zeigt Ihnen, wo der Speicher freigegeben und zugewiesen wurde:

![Valgrind Fehler 2](../resources/w4-03.png "Screenshot der Konsolenfehlermeldung mit dem Text 'Address 0x4b74040 is 0 bytes inside a block of size 16 free'd...'")

Der Speicherblock wurde durch die Funktion `malloc` in `createVectorInt` zugewiesen, die in der Funktion `main` aufgerufen wurde. Der Block wurde durch die Funktion `free` in der Funktion `pushBack` freigegeben.

Schließlich können Sie in der Heap-Zusammenfassung erkennen, dass 96 Byte „verloren“ gegangen sind – mit anderen Worten, es gab ein Speicherleck. Dies ist geschehen, weil wir vergessen haben, `deleteVectorInt` auf den Vektor am Ende der Funktion `main` aufzurufen.

![Valgrind Fehler 3](../resources/w4-04.png "Screenshot der Konsolenfehlermeldung mit dem Text 'HEAP SUMMARY: in use at exit: 96 bytes in 2 blocks... 96 bytes in 2 blocks are definitely lost in loss record...'")

Valgrind liefert eine Vielzahl von Informationen, die Sie verwenden können, um Speicherfehler in Ihren C- und C++-Programmen aufzuspüren. Es informiert Sie nicht nur darüber, wo Fehler auftreten, sondern auch darüber, wo Speicherblöcke zugewiesen und anschließend freigegeben (oder nicht freigegeben, im Falle eines Speicherlecks) wurden. Können Sie den Fehler finden, der die ungültigen Lesevorgänge im Vektor-Beispiel verursacht?

{{% expand "**Klicken, um die Antwort zu zeigen**"%}}
Beachten Sie, dass wir beim Umzuweisen des Arrays vergessen haben, `list->__arr` zu aktualisieren! Das bedeutet, dass wir auf einen Zeiger schreiben, der bereits freigegeben wurde, was die ungültigen Lese- und Schreibvorgänge erklärt, die wir in Valgrind sehen, die Double-Free-Fehler (da wir `free` auf den bereits freigegebenen Zeiger erneut aufrufen) und die Speicherlecks (da wir die neu zugewiesenen Arrays nie wieder referenzieren)! Alles, was Sie tun müssen, ist, diesen Zeiger auf das neu aktualisierte Array zu setzen, was den Fehler beheben sollte.
{{% /expand %}}
<br/>

In den Übungen müssen Sie alle auftretenden Speicherfehler beheben.