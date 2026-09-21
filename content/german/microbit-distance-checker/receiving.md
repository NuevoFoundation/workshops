---
title: "Empfangen einer Nachricht"
date: 2019-07-25T13:24:17-07:00
weight: 3
draft: false
---

Da wir nun Nachrichten senden und empfangen können, müssen wir diese Informationen nutzen, um die Entfernung zwischen den micro:bits herauszufinden. Dafür brauchen wir die Signalstärke der empfangenen Nachricht. Gehe zurück in den Radio-Bereich und ziehe diesmal den Block "on radio received (receivedNumber)" an eine leere Stelle in deinem Arbeitsbereich. Er sollte nicht in einem anderen Block enthalten sein.

Dieser Block weist unserem micro:bit an, etwas zu tun, sobald es eine Zahl von einem anderen micro:bit erhält.

!["On radio received"-Block zum Arbeitsbereich hinzugefügt](../img/onRadioReceived.png)

Klicke als Nächstes auf den roten Abschnitt Variablen und dann auf "Variable erstellen...". Gib im Textfeld "stärke" als Namen für deine neue Variable ein und klicke auf "Ok ✔".

![MakeCode-Menü mit ausgewähltem Bereich Variablen](../img/makeVariable.png)
![Das Pop-up-Fenster zur Eingabe des Variablennamens](../img/variableModal.png)

Gehe nun zurück ins Variablen-Menü und ziehe "setze stärke auf 0" in den pinken Block "on radio received (receivedNumber)". Gehe dann zurück ins Radio-Menü und ziehe "empfangenes Paket (Signalstärke)" auf die `0️` in "setze stärke auf 0️". Wenn du fertig bist, sollte dein Arbeitsbereich in etwa so aussehen:

![Arbeitsbereich mit ausgefüllten Blöcken: on start, forever und received packet](../img/savedRSSI.png)

Variablen sind einfach Speicherorte, denen wir einen aussagekräftigen Namen geben, um klarzustellen, welche Informationen darin gespeichert sind. Indem wir eine Variable namens `stärke` erstellen, reservieren wir also einen Platz, um einen Wert zu speichern, in diesem Fall die gemessene Signalstärke der empfangenen Nachricht. Wir können dann einfach den Namen `stärke` verwenden, wo immer wir den aktuellen Wert überprüfen oder mit etwas anderem vergleichen möchten. Wenn wir später eine neue Nachricht mit einem stärkeren oder schwächeren Signal erhalten, wird der Wert von `stärke` automatisch auf diesen neuen Wert aktualisiert. Genau darum geht es bei dem "on radio received"-Block: Jedes Mal, wenn wir eine neue Nachricht erhalten, wird der Wert von `stärke` auf die neueste Signalstärke aktualisiert, ohne dass du etwas manuell tun musst.