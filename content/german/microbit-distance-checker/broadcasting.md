---
title: "Ein Signal senden"
date: 2019-07-25T13:24:17-07:00
weight: 2
draft: false
---

## Das Radio einschalten

Wir werden das Bluetooth-Radio deines micro:bit verwenden, um herauszufinden, wie weit du von anderen micro:bits entfernt bist. Das Erste, was wir tun müssen, ist, das Radio einzuschalten und es auf einen Kanal einzustellen. Klicke auf den Abschnitt „Radio“. Es ist der pinkfarbene Abschnitt, der in der Leiste an fünfter Stelle von oben steht. Wähle „radio set group 1“ und ziehe es in den blauen Block „on start“ im Arbeitsbereich. Stelle sicher, dass du dieselbe Gruppen-Nummer wie alle anderen verwendest. Wenn du unterschiedliche Gruppen-Nummern verwendest, können sich deine micro:bits nicht miteinander verbinden. Dein Arbeitsbereich sollte nach Abschluss wie unten dargestellt aussehen:

![MakeCode-Menü, das den ausgewählten Radio-Abschnitt zeigt](../img/radioMenu.png)
![MakeCode-Arbeitsbereich mit dem Block „radio set group“ im Block „on start“](../img/setRadioGroup.png)

## Ein Signal senden

Jetzt, da unsere micro:bits darauf eingestellt sind, zuzuhören, müssen wir ein Signal senden, das sie empfangen können. Klicke erneut auf den Radio-Abschnitt. Dieses Mal ziehe den Block „radio send number 0“ in den blauen „forever“-Block in deinem Arbeitsbereich. Dadurch wird dein micro:bit kontinuierlich diese Zahl an jedes Gerät senden, das in derselben Gruppe zuhört.

![MakeCode-Arbeitsbereich zeigt den Block „radio send number“ im „forever“-Block](../img/radioSendNumber.png)