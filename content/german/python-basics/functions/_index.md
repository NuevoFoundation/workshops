```yaml
---
title: "Funktionen"
weight: 5
draft: false
---
```

<iframe title="Funktionen - YouTube Video" width="560" height="315" src="https://www.youtube.com/embed/0207zoiJ6s8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**Funktionen** sind eine Möglichkeit, ähnliche oder wiederholende Codes zu organisieren. Anstatt denselben Code ständig neu zu schreiben, können wir den gewünschten Code in einer Funktion speichern und ihn jedes Mal aufrufen, wenn wir ihn verwenden möchten.

{{% notice info %}}
**Hinweis:** Der Zweck einer Funktion besteht darin, redundanten Code
im gesamten Programm zu reduzieren.
{{% /notice %}}

## Erstellen einer Funktion

### Definiere deine Funktion - Name und Parameter

Um eine Funktion in Python zu erstellen, müssen wir das Schlüsselwort `def` verwenden. Dieses Schlüsselwort gibt dem Code-Editor an, wo die Funktion definiert wird. `def` wird gefolgt vom Namen der Funktion. Der Name der Funktion wird verwendet, um deine Funktion aus anderen Teilen des Programms aufzurufen.  
Um die Funktion allgemeiner zu gestalten (sodass wir sie an mehreren Stellen verwenden können), benötigen wir möglicherweise einige Informationen, die wir ihr senden. Dies wird durch Parameter erreicht. Sie werden zwischen Klammern `()` gesetzt und folgen direkt nach dem Namen der Funktion. Wenn keine Parameter erforderlich sind, können sie ignoriert werden. Die Funktionsdeklaration endet mit einem Doppelpunkt.  
Die Anweisungen, die jedes Mal ausgeführt werden, wenn die Funktion aufgerufen wird, folgen in den nächsten Zeilen. Einrückungen sind hier sehr wichtig, also stelle sicher, dass dein Code korrekt eingerückt ist. Jede eingerückte Zeile nach der Funktionsdefinitionszeile (mit Ausnahme von Kommentaren) wird ausgeführt, wenn du die Funktion aufrufst.

So sieht eine Funktion aus:

```python
def functionName(parameter1, parameter2, ...):
    # schreibe etwas Code
    # rufe diese Funktion aus anderen Teilen
    # des Codes mit functionName auf
```

![Grafik, die die Struktur einer Funktion beschreibt](../img/annotated-screenshot-function.png)

{{% notice warning %}}
Achte darauf, dass die erste Zeile deiner Funktion immer mit einem Doppelpunkt `:` endet.
{{% /notice %}}

### Schreibe den Funktionskörper

In Python definiert die Einrückung, welcher Code von der Funktion gesteuert wird. Im untenstehenden Beispiel musst du, um die Funktion `sectionA` aufzurufen, zwei Parameter, `startMeasure` und `endMeasure`, angeben. Wenn du `sectionA` aufrufst, werden die drei `fitMedia` Funktionszeilen ausgeführt. Die zwei `fitMedia` Funktionsaufrufe unten sind außerhalb des `sectionA` Funktionskörpers.

```python
# Abschnitt A
def sectionA(startMeasure, endMeasure):
    fitMedia(RD_UK_HOUSE__AIRYPAD_1, 1, startMeasure, endMeasure)
    fitMedia(HOUSE_MAIN_BEAT_002, 4, startMeasure, endMeasure)
    fitMedia(HOUSE_ROADS_BASS_001, 5, startMeasure, endMeasure)

 fitMedia(HOUSE_DEEP_CRYSTALCHORD_001, 3, 1, 5)
 fitMedia(HOUSE_DEEP_CRYSTALCHORD_002, 3, 5, 9)   
```

Der Code, der unterhalb der Funktion `sectionA` eingerückt ist, wird jedes Mal ausgeführt, wenn die Funktion `sectionA` aufgerufen wird.

{{% notice warning %}}
**Warnung:** Da die Einrückung in Python sehr wichtig ist, stelle sicher,
dass der Körper der Funktion immer mit 2 Leerzeichen beginnt.
{{% /notice %}}

## Einen Wert zurückgeben

Oft möchtest du nicht nur die Ergebnisse drucken oder eine Aktion ausführen, sondern auch, dass die Funktion dir das Ergebnis der Aktion zurückgibt. Dafür verwendest du das Schlüsselwort `return`.

```python
def my_function(x):
    return 5 * x

print(my_function(3)) # gibt 15 aus
print(my_function(5)) # gibt 25 aus
```

## Funktion verwenden - Funktionsaufruf

Um eine Funktion aufzurufen, gib den Namen der Funktion und ihre Parameter überall dort ein, wo du die Funktion ausführen möchtest. Zum Beispiel, um die Funktion `sectionA` aufzurufen, würden wir etwas wie das Folgende tun:

```python
sectionA(1,9)
```

In diesem Beispiel wird `sectionA` mit dem Wert `startMeasure` als `1` und dem Wert `endMeasure` als `9` aufgerufen.

{{% notice warning %}}
**Sei vorsichtig:** Beim Erstellen einer Funktion in Python musst du die
Funktion und ihren Inhalt definieren, bevor sie aufgerufen wird. Mit anderen Worten, im Code muss die Funktionsdeklaration oberhalb des Funktionsaufrufs stehen. Andernfalls erhältst du einen NameError wie unten. Siehe die folgende Abbildung für ein Beispiel:
![Beispiel, das zeigt, dass die Funktion vor der Namensdefinition aufgerufen wurde, und den resultierenden NameError](../img/annotated-screenshot-function4-error.png)
{{% /notice %}}

### Herausforderung 1 - Erstelle deine eigene Funktion!

**Herausforderung:** Erstelle eine Funktion namens addNumbers, die 2 Parameter namens number1 & number2 nimmt und die Summe auf der Konsole ausgibt. Rufe die Funktion addNumbers mit den Parametern 3 & 5 auf.  
Was wird auf der Konsole ausgegeben?

<iframe title="Herausforderung 1 - Erstelle deine eigene Funktion! - Codebunga" src="https://codebunga.com/embed/cgv9gk32" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

### Herausforderung 2

Lass uns versuchen, einige einfache mathematische Funktionen zu erstellen. Erstelle eine Funktion namens add, die zwei Parameter, number1 und number2, nimmt und die Summe der beiden Zahlen zurückgibt.

{{% notice tip %}}

Kopiere zuerst die Struktur der Funktion triple. Ändere den Namen der Funktion triple und ersetze die Parameterzahl durch number1 und number2, getrennt durch ein Komma. Sowohl number1 als auch number2 sollten <font color="#005a9c">int</font> sein, und vergiss nicht, number1 und number2 zusammenzuzählen!

{{% /notice %}}

Um zu überprüfen, ob deine Funktion korrekt funktioniert, füge den folgenden Code nach deiner Funktionsdefinition hinzu, der die Funktion add() aufruft und ihren Wert in einer Variablen speichert. Zum Beispiel:

<pre>
value2 = add(2, 3)
<font color="#005a9c">print</