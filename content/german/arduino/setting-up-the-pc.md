```markdown
---
title: "Einrichten des PCs"
draft: false
weight: 2
---

## Einführung in die Arduino IDE

Laden Sie die Arduino IDE herunter und installieren Sie diese von:

* dem Microsoft Store (schnellere Installation) - <https://www.microsoft.com/store/productId/9NBLGGH4RSD8>
* oder von der Arduino-Website <https://www.arduino.cc/en/Main/Software> (wählen Sie die neueste Version aus)

Sobald die Software auf Ihrem Computer installiert wurde, öffnen Sie sie. Das ist die Arduino IDE, der Ort, an dem alle Programmierungen stattfinden werden. Nehmen Sie sich Zeit, um sich umzuschauen und sich mit der Umgebung vertraut zu machen.

![Alt Text: Beschriftetes Bild der Arduino IDE](../img/ArduinoIDE-labeled.png)
*<https://www.makerspaces.com/simple-arduino-projects-beginners/>*

1. Menüleiste: Gibt Ihnen Zugriff auf die Werkzeuge, die zur Erstellung und Speicherung von Arduino-Skizzen notwendig sind.
2. Verifizieren-Schaltfläche: Kompiliert Ihren Code und überprüft auf Rechtschreib- oder Syntaxfehler.
3. Hochladen-Schaltfläche: Sendet den Code an das angeschlossene Board, wie beispielsweise Arduino Uno in diesem Fall. Die Lichter auf dem Board blinken schnell beim Hochladen.
4. Neue Skizze: Öffnet ein neues Fenster mit einer leeren Skizze.
5. Skizzenname: Wenn die Skizze gespeichert wird, wird der Name der Skizze hier angezeigt.
6. Vorhandene Skizze öffnen: Ermöglicht das Öffnen einer gespeicherten Skizze oder einer der gespeicherten Beispiele.
7. Skizze speichern: Speichert die Skizze, die Sie gerade geöffnet haben.
8. Serieller Monitor: Wenn das Board verbunden ist, werden hier die seriellen Informationen Ihres Arduino angezeigt.
9. Code-Bereich: In diesem Bereich schreiben Sie den Code der Skizze, der dem Board sagt, was es tun soll.
10. Nachrichtenbereich: Dieser Bereich zeigt Statusmeldungen zu Speichern, Code-Kompilierung, Fehlern und mehr an.  
11. Textkonsole: Zeigt Details zu Fehlermeldungen, die Größe des kompilierten Programms und zusätzliche Informationen an.
12. Board und serieller Port: Zeigt an, welches Board verwendet wird und an welchen seriellen Port es angeschlossen ist.

## Verbinden Sie Ihr Arduino

An diesem Punkt sind Sie bereit, Ihr Arduino mit Ihrem Computer zu verbinden. Stecken Sie ein Ende des USB-Kabels in das Arduino Uno und das andere Ende des USB-Kabels in den USB-Port Ihres Computers.

Sobald das Board verbunden ist, müssen Sie zu "Werkzeuge", dann "Board" gehen und schließlich "Arduino Uno" auswählen.

![Alt Text: Screenshot der Arduino IDE, der zeigt, wie man den Board-Typ auswählt](../img/board-select.png)

Als Nächstes müssen Sie dem Arduino mitteilen, welchen Port Sie auf Ihrem Computer verwenden.

Um den Port auszuwählen, gehen Sie zu "Werkzeuge", dann "Port", und wählen Sie den Port aus, der "Arduino" anzeigt.

![Alt Text: Screenshot der Arduino IDE, der zeigt, wie man den COMM-Port auswählt](../img/COMM-port.png)
```