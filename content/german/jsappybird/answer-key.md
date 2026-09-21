---
title: "JSappyBird - Antwortschlüssel"
date: 2026-04-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
Dieser Antwortschlüssel enthält den gesamten Code, den die Schüler hinzufügen, um das Flappy Bird-Spiel zu erstellen. Jeder Schritt fügt eine spezifische Zeile JavaScript zu einer bestimmten Datei im Replit-Projekt hinzu. Der Workshop ist geleitet (den Schülern wird gesagt, was sie tippen sollen), aber dies konsolidiert alles zu einer Lehreranleitung.
{{% /notice %}}

## Schritt-für-Schritt-Codeergänzungen

### 1. Das Vogelbild laden

**Datei:** `load-sprites.js`

```javascript
game.load.image('bird', 'assets/bird.png');
```

### 2. Den Startbildschirmtext ändern

**Datei:** `start-screen.js`

```javascript
var text = game.add.text(0, 0, "Drücke Leertaste, um zu starten", textOptions);
```

### 3. Den Vogel mit der Leertaste springen lassen

**Datei:** `create-game.js`

```javascript
spaceKey.onDown.add(jump, this);
```

### 4. Schwerkraft hinzufügen

**Datei:** `create-game.js`

```javascript
bird.body.gravity.y = 900;
```

### 5. Sprungkraft (Geschwindigkeit) hinzufügen

**Datei:** `create-game.js`

```javascript
bird.body.velocity.y = -350;
```

{{% notice tip %}}
**Häufige Schülerfrage:** „Wie kann ich den Vogel höher oder niedriger springen lassen?“

Ändere die Zahl bei `bird.body.velocity.y`. Je negativer, desto höher springt der Vogel. Probiere `-200` für einen kleinen Hüpfer oder `-500` für einen großen Sprung.
{{% /notice %}}

### 6. Rotation des Vogels beim Fallen hinzufügen

**Datei:** `update-game.js`

```javascript
if (bird.angle < 50) {
    bird.angle += 1;
}
```

### 7. Sprunggeräusch hinzufügen

**Datei:** `create-game.js`

```javascript
jumpSound.play();
```

## Antworten zur Bonusaktivität

### Den Vogel vorwärts springen lassen

**Datei:** `create-game.js`

```javascript
bird.body.velocity.x = 100;
```

### Bonus-Fragen zur Erkundung

| Frage | Was passiert |
|-------|--------------|
| Schwerkraft verstärken? | `bird.body.gravity.y = 1500;` — Der Vogel fällt schneller, das Spiel wird schwieriger |
| Schwerkraft negativer machen? | `bird.body.gravity.y = -900;` — Der Vogel schwebt nach oben, anstatt zu fallen |
| Den Vogel schneller rotieren lassen? | Ändere `bird.angle += 1` zu `bird.angle += 5` |
| Die `if`-Bedingung um Rotation entfernen? | Der Vogel dreht sich endlos über 50 Grad hinaus |

## Code für die Aktivität (Fortgeschrittene Version)

Der Workshop umfasst außerdem drei Codierungsaktivitäten, die Variablen, Bedingungen, Funktionen und Schleifen lehren:

### Aktivität 1: Den Vogel auf dem Bildschirm halten (Bedingung)

```javascript
if (bird.y > 0 && bird.y < 490) {
    // Der Vogel ist auf dem Bildschirm - Bewegung erlauben
}
```

### Aktivität 2: Sprungfunktion

```javascript
function jump() {
    bird.body.velocity.y = -300;
}
```

### Aktivität 3: Hindernisse mit einer Lücke hinzufügen

```javascript
var hole = Math.floor(Math.random() * 6) + 1;

for (var i = 0; i < 8; i++) {
    if (i != hole) {
        addOnePipe(i);
    }
}
```

**So funktioniert es:** Die Schleife erstellt 8 Hindernisrohre. Die Variable `hole` wählt zufällig eine Position (1-6) aus, die übersprungen wird, und erzeugt eine Lücke, durch die der Vogel fliegen kann.

## Logikzusammenfassung des gesamten Spiels

| Funktion | Code | Datei |
|----------|------|-------|
| Vogel-Sprite laden | `game.load.image('bird', 'assets/bird.png')` | load-sprites.js |
| Startbildschirm | `game.add.text(0, 0, "Drücke Leertaste, um zu starten", textOptions)` | start-screen.js |
| Sprung mit Leertaste | `spaceKey.onDown.add(jump, this)` | create-game.js |
| Schwerkraft | `bird.body.gravity.y = 900` | create-game.js |
| Sprunggeschwindigkeit | `bird.body.velocity.y = -350` | create-game.js |
| Rotation beim Fallen | `if (bird.angle < 50) { bird.angle += 1; }` | update-game.js |
| Sprunggeräusch | `jumpSound.play()` | create-game.js |