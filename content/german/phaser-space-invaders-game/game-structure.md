---
title: "Die Dateistruktur des Spiels"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 2
---

Wie Sie sehen können, haben wir bereits viele Dateien für Sie erstellt. Die Struktur des Spiels wurde bereits angelegt, und Sie werden jede Datei mit Inhalt füllen. Um jedoch zu beginnen, müssen wir zunächst zumindest ein grundlegendes Verständnis davon haben, was jede Datei macht und wie sie miteinander in Beziehung stehen.

Zunächst einmal ist `phaser.min.js` einfach eine JavaScript-Datei, die Code enthält, der es dem Spiel ermöglicht, Phaser auszuführen, das Framework, das wir verwenden, um das Spiel zu erstellen. Sie müssen sich über diese Datei nicht viel Gedanken machen, und Sie werden sie nicht bearbeiten.

Als Nächstes werfen Sie einen Blick auf `index.html`. Dies ist eine HTML-Datei, die das Rückgrat unseres gesamten Projekts bildet, indem sie alle verwendeten JavaScript-Dateien importiert.

Dann ist da `Game.js`. Diese Datei repräsentiert im Wesentlichen unser Spiel. Innerhalb dieser Datei verzweigt sich der eigentliche Spielcode durch `Scene1.js` und `Scene2.js`. In diesen Szenen-Dateien werden Sie den Großteil Ihres Codes schreiben, und wir werden später ausführlicher auf Phaser-Szenen eingehen.

`PlayerBullet.js`, `EnemyBullet.js` und `Explosion.js` sind Dateien, die spezifische Objekte für unser Spiel erstellen.

Abschließend enthält der `assets`-Ordner alle Bilder, die unser Spiel verwendet.