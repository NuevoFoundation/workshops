```markdown
---
title: "Vorladen, Erstellen und Aktualisieren"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 4
---

## Die Methoden Vorladen, Erstellen und Aktualisieren

Schauen wir uns nun unsere Szenen an, die später den Code für unser Spiel enthalten werden. Wenn du durchgehst, wirst du feststellen, dass jede Szene einen Konstruktor hat (weil es sich um eine Klasse handelt) und außerdem drei große Methoden: `preload()`, `create()`, `update()`. In Szene 2 gibt es auch eine Reihe von Hilfsfunktionen, aber wir werden die bereits erwähnten drei Methoden besprechen, da sie entscheidend für das Verständnis von Phaser sind.

Mit der Art und Weise, wie wir die Szenen eingerichtet haben, befinden sich preload() und create() in Szene 1 und create() und update() in Szene 2. Diese drei Funktionen sind die Hauptwerkzeuge, die jedes Spiel, das Phaser verwendet, nutzen wird.

## Preload()

Beginnen wir mit einer Beschreibung von preload() - diese Funktion lädt im Wesentlichen Dinge in unser Spiel. Das können Bilder, Variablen und praktisch alles andere sein, das du für dein Spiel definieren möchtest. Dinge, die mit preload() in das Spiel geladen werden, werden NICHT tatsächlich verwendet oder irgendwo im Spiel platziert, bis sie später genutzt werden. Du kannst dir diese Methode wie einen Speicherplatz vorstellen, der vor Beginn des Spiels einmal gefüllt wird. Die meisten Dinge müssen in preload() platziert werden, bevor sie irgendwo im Spiel verwendet werden.

## Create()

Als nächstes ist create(). Diese Funktion ist ebenfalls relativ einfach - sie wird einmal zu Beginn des Spiels ausgeführt und ermöglicht es dem Benutzer, die Dinge, die mit preload() vorgeladen wurden, zu platzieren und Objekte innerhalb unseres Spiels zu erstellen, wie Animationen, Kollisionserkennungen, Text, Gruppen und vieles mehr.

## Update()

Zuletzt gibt es die Funktion update(). Während preload() und create() nur einmal zu Beginn des Spiels ausgeführt werden, läuft update() ständig.

{{% notice info %}}
Beim Spielen von Spielen bist du möglicherweise auf den Begriff "FPS" gestoßen. Dies bezieht sich auf die "Bilder pro Sekunde" des Spiels oder darauf, wie oft ein neues Bild auf dem Bildschirm aktualisiert wird. Ein Bild ist im Wesentlichen ein einzelner Aufruf der update()-Methode. Phaser läuft typischerweise mit 60 FPS, was bedeutet, dass die update()-Methode 60-mal in einer Sekunde aufgerufen wird!
{{% /notice %}}

Die update()-Methode wird auf vielfältige Weise genutzt. Eine davon ist für Bewegungen - wenn wir einem Objekt zuweisen, sich ein bisschen in update() zu bewegen, sieht es im Spiel so aus, als würde sich das Objekt reibungslos bewegen, da update() so oft aufgerufen wird, dass wir die Unterbrechungen zwischen den einzelnen Bewegungen nicht sehen können. Wir können update() auch verwenden, um ständig zu überprüfen, ob eine Eingabe erfolgt ist. Wenn wir beispielsweise möchten, dass der Spieler schießen kann, wenn die Leertaste gedrückt wird, können wir eine if-Bedingung verwenden, die in der update()-Funktion nach der Leertaste sucht, sodass das Spiel ständig darauf überprüft.
```