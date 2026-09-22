---
title: "Eingaben von der Konsole lesen"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 6
prereq: "Python-Grundlagen: Variablen"
difficulties: ["mittel"]
---

Nun, da wir die Grundlagen zu Variablen kennen, können wir Eingaben vom Benutzer anfordern. Verwenden Sie die folgende Zeile, um unserem Programm mitzuteilen, dass es wartet, bis der Benutzer etwas in die Konsole eingibt. Der Computer nimmt dann alles, was in die Konsole eingegeben wurde, und speichert es in die Variable namens **value**.

```python
value = input()
```

Hier ist ein Beispiel, wie man `input()` verwendet, um Benutzereingaben zu akzeptieren:

```python
print("Wie heißt du?")
value = input()
print("Hallo " + value + "!")
```

Probieren Sie das aus! Wenn Sie auf Ausführen klicken, werden Sie feststellen, dass das folgende Bild noch nicht in der Konsole erscheint.

![Screenshot des Konsolen-Endsymbols](../../img/end_symbol.png "Bild des Konsolen-Endsymbols")

![Screenshot der Konsole, die auf Benutzereingaben wartet](../../img/console_read_waiting.png "Bild davon, wie die Konsole aussieht, wenn sie auf Benutzereingaben wartet")

Das liegt daran, dass das Programm darauf wartet, dass Sie etwas eingeben! Geben Sie Ihren Namen oder 'Nuvi' in die Konsole auf der rechten Seite ein, drücken Sie Enter, und überprüfen Sie, ob es korrekt ausgegeben wird.

![Screenshot der Konsole, nachdem der Benutzer Eingaben gemacht und das Programm abgeschlossen hat](../../img/console_read_input.png "Bild davon, wie die Konsole aussieht, nachdem sie Benutzereingaben gelesen hat")

{{% notice note %}}

Selbst wenn wir eine Zahl eingeben, wie z. B. `8`, enthält die Variable value den String `"8"`. Achten Sie daher darauf, wenn Sie mit Eingabevariablen rechnen möchten!

{{% /notice %}}

## Herausforderung

Lassen Sie uns versuchen, ein Programm zu schreiben, das zunächst die folgenden zwei Zeilen in der Konsole ausgibt:

    Willkommen!
    Wie kann ich Ihnen heute helfen?

Danach wartet die Konsole auf eine Benutzereingabe. Nachdem der Benutzer etwas in die Konsole eingegeben und _Enter_ gedrückt hat, gibt der Computer Folgendes aus:

    Sie haben gefragt: [Eingabe]?
    Ich kenne die Antwort auf [Eingabe] nicht. Auf Wiedersehen!

`[Eingabe]` sollte durch das ersetzt werden, was der Benutzer in die Konsole eingegeben hat. Wenn Sie zum Beispiel fragen möchten: "Wie alt bin ich?", wird der Computer ausgeben, dass er die Antwort darauf nicht kennt.

{{% notice tip %}}

Das ist sehr ähnlich zu dem Beispiel, das wir oben zusammen durchgegangen sind. Versuchen Sie, einige kleine Änderungen an dem vorzunehmen, was wir Ihnen bereits gegeben haben.

{{% /notice %}}

<iframe title="Herausforderung - Codebunga" src="https://codebunga.com/embed/wamnbqtn" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>