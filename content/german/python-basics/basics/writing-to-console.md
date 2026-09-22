```markdown
---
title: "Ausgabe in die Konsole (Print-Anweisung)"
date: 2022-09-19T14:45:38-07:00
draft: false
weight: 2
---

<p style="text-align: center;"><iframe title="Ausgabe in die Konsole (Print-Anweisung) - YouTube-Video" width="560" height="315" src="https://www.youtube.com/embed/NrbQCjlzhYc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## Lass dein Programm mit dir sprechen!

**Print**-Anweisungen werden verwendet, um etwas in die Konsole auszugeben. Verwende `print("Hello World")`, um *Hello World* auf dem Ausgabebildschirm auszugeben. Wir werden später lernen, dass `print` eine Funktion ist, die wir verwenden, um eine Druckoperation auszuführen. Alles, was du der `print`-Funktion übergibst, wird auf dem Bildschirm ausgegeben.
Lass uns mit einer `print`-Anweisung anfangen. 

Wir werden das Drucken in den späteren Lektionen oft verwenden, also stelle sicher, dass du dies verstehst, bevor du mit dem nächsten Konzept weitermachst!

### Herausforderung 1
Um anzufangen, schreibe den folgenden Text in deinen Codebunga main.py und klicke auf Run.

```python
print("Hello, World!")
```

Beobachte, wie deine Konsole "Hello, World!" auf dem Bildschirm rechts anzeigt! `print` weist den Computer an, den Satz innerhalb der Klammern `()` in das Konsolenfenster, oder den Bildschirm rechts, zu drucken.

![alt text](../../img/print.png "hello world in python!")

<iframe title="Herausforderung 1 - Codebunga" src="https://codebunga.com/embed/fcrtud9r" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

{{% notice tip %}}
### Verwendung von " beim Drucken

Ist dir aufgefallen, dass Hello, World! von `"` umgeben war? Hast du ausprobiert, es ohne die `"`-Zeichen zu schreiben und gesehen, dass ein Fehler aufgetreten ist? Aber wenn du `print(123)` ausprobiert hast, funktioniert es ohne Fehler. Das liegt daran, dass Text (Strings in Programmiersprachen) durch Anführungszeichen kenntlich gemacht werden muss. Zahlen hingegen benötigen dies nicht.

Gehe nach oben zurück und probiere aus, verschiedene Dinge zu drucken!
{{% /notice %}}

### Herausforderung 2

1. Ändere ohne die Anführungszeichen zu entfernen `"Hello, World"` zu einem anderen Satz. (Zum Beispiel – `"Mein Name ist Nuvi!"`) Drücke **run**, um zu sehen, ob sich etwas ändert.
2. Füge eine weitere Print-Anweisung unterhalb der aktuellen Zeile hinzu, um einen zweiten Satz unter dem ersten auszugeben.
3. Drücke **run**, um zu sehen, ob zwei Sätze ausgegeben werden.

<iframe title="Herausforderung 2 - Codebunga" src="https://codebunga.com/embed/fcrtud9r" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

Wir werden das Drucken in den späteren Lektionen oft verwenden, also stelle sicher, dass du dies verstehst, bevor du weitermachst!

{{% notice warning %}}

## HILFE! Ich sehe viel roten Text!

Wenn du roten Text siehst, hast du Fehler gemacht! Bitte frage nach Hilfe. Achte insbesondere auf Folgendes, wenn du in Python programmierst:

1. Stelle sicher, dass der Satz, den du drucken möchtest, **von Anführungszeichen umgeben** ist und dass der Satz sich **innerhalb der Klammern** befindet.

![Beispiel, das zeigt, wie eine Print-Anweisung falsch gemacht wird (ohne Anführungszeichen - print(Hello, World!)) und korrekt (mit Anführungszeichen - print('Hello, World!'))](../../img/redLine.png)

2. Die Leerzeichen in Python sind sehr wichtig. Stelle sicher, dass du keine unnötigen Leerzeichen oder Tabs am Anfang oder am Ende jeder Zeile hast, da Python den Code sonst nicht lesen kann. Zum Beispiel, mach keine Leerzeichen vor `print` oder hinter der letzten Klammer in `print("Hello, World!")`.

{{% /notice %}}
```