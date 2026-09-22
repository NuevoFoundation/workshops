---
title: "Aktivieren von Benutzereingaben"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 9
---

## Benutzereingaben

Eingaben sind essenziell, denn ohne dass der Nutzer mit Steuerungen etwas eingibt, ist unser Spiel nicht wirklich ein Spiel. Obwohl Phaser eine Vielzahl von verschiedenen Eingabeoptionen unterstützt, werden wir hier drei behandeln, die du im Space Invaders Spiel verwenden wirst.

## Pfeiltasten

Beginnen wir mit einer der wichtigsten Steuerungen: den Pfeiltasten. Zuerst erstellen wir eine Variable, die erkennt, wenn der Spieler eine Pfeiltaste drückt.

```javascript
this.cursors = this.input.keyboard.createCursorKeys();
```

Um diese Variable zu nutzen, musst du zwischen vier booleschen Ausdrücken wählen.

```javascript
this.cursors.up.isDown
this.cursors.down.isDown
this.cursors.left.isDown
this.cursors.right.isDown
```

Jeder dieser booleschen Ausdrücke wird wahr (true), wenn die zugehörige Taste gedrückt wird, und falsch (false), wenn sie nicht gedrückt wird.

## Leertaste

Um eine Leertasteingabe hinzuzufügen, ist der Prozess sehr ähnlich zu den Pfeiltasten. Zuerst erstellen wir eine Variable, die erkennt, ob die Leertaste gedrückt wird.

```javascript
this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
```

Dann können wir einen booleschen Ausdruck verwenden, um zu überprüfen, ob die Eingabe gedrückt wurde.

```javascript
Phaser.Input.Keyboard.JustDown(this.spacebar)
```

## Einfacher Klick

Du kannst auch den gleichen Prozess verwenden, wie wir ihn für Pfeiltasten und Leertasteingaben genutzt haben, um Klicks hinzuzufügen. Aber wir werden hier eine etwas andere Methode behandeln, da sie im Space Invaders Spiel wahrscheinlich gebraucht wird.

```javascript
this.input.once("pointerdown", this.restart, this);
```

Diese Zeile ruft die Methode `this.restart` auf, wenn der Spieler klickt. Allerdings ist dies eine einmalige Eingabe, das heißt, nachdem der Spieler einmal geklickt hat, kann sie nicht erneut verwendet werden, ohne erneut aufgerufen zu werden. Du wirst diese Eingabe normalerweise im update()-Bereich oder den Hilfsfunktionen statt in create() verwenden.