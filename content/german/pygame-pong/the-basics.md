```markdown
---
title: "Die Grundlagen - Klasse und Objekt"
date: 2019-07-29T13:24:17-07:00
weight: 2
draft: false
---

## Klassen und Objekte

Bevor du ein Spiel erstellst, solltest du wissen, wie man verschiedene Objekte zeichnet und sie basierend darauf anpasst, wie sie auf dem Bildschirm aussehen und sich bewegen müssen.

Um Objekte zu erstellen, musst du zuerst entscheiden, wie sie aussehen sollen, welche Funktion sie in deinem Spiel erfüllen sollen und wie der Spieler ihre Bewegung auf dem Bildschirm kontrollieren kann. Dies kannst du tun, indem du eine Klasse für jedes Objekt erstellst, das du auf dem Bildschirm haben möchtest.
Bevor Objekte in einem Programm erstellt werden, musst du ihre Klasse definieren. Eine Klasse beschreibt, wie ein individuelles Objekt aussehen und sich verhalten wird. Sie enthält die Attribute und Methoden, die das Objekt während des Programmablaufs verwenden kann (in diesem Fall handelt es sich um ein Pong-Spiel). Du musst eine Klasse nur einmal definieren, danach kannst du sie verwenden, um so viele Objekte zu erstellen, wie du möchtest.

Du kannst eine Klasse nicht direkt in einem Programm verwenden; eine Klasse muss ein manifestiertes Objekt haben, das im Programm genutzt wird.
Alle Aspekte, die sich auf das Erscheinungsbild und die Bewegung beziehen, werden als `"Attribute"` des Objekts bezeichnet, das du auf dem Computermonitor siehst.  
Alle Aspekte, die sich auf die Steuerung eines Objekts beziehen, werden als `"Funktionen"` des Objekts bezeichnet. 

Definiere zuerst die Klasse für das Paddle, das im Spiel verwendet wird. Um dies zu tun, verwende den folgenden Code:

```python
class Paddle(pygame.Rect):
    def __init__(self, velocity, up_key, down_key, *args, **kwargs):
        self.velocity = velocity
        self.up_key = up_key
        self.down_key = down_key
        super().__init__(*args, **kwargs)

    def move_paddle(self, board_height):
        keys_pressed = pygame.key.get_pressed()

        if keys_pressed[self.up_key]:
            if self.y - self.velocity > 0:
                self.y -= self.velocity

        if keys_pressed[self.down_key]:
            if self.y + self.velocity < board_height - self.height:
                self.y += self.velocity
```

Lass uns den Code im Detail verstehen.

{{% notice tip %}}

### Benenne die Klasse

`class Paddle(pygame.Rect)`

So benennst du die Klasse `"Paddle"`. Beachte jetzt das `pygame.Rect` innerhalb der `()`. Du hast dir vielleicht schon vorgestellt, dass du, um das Paddle auf einem Computerbildschirm zu zeichnen, es wie ein Rechteck zeichnen musst. Dann definierst du dessen Abmessungen und Position auf dem Bildschirm, um es wie ein Paddle aussehen zu lassen. Die `(pygame.Rect)`-Anweisung ermöglicht es uns, dem Python-Compiler mitzuteilen, dass dieses Objekt wie ein Rechteck gezeichnet werden soll, indem alle Attribute des Rechtecks wie `BREITE` und `HÖHE` bereitgestellt werden. Dies hilft uns, alle verfügbaren Attribute der `Rectangle`-Klasse in der Pygame-Bibliothek zu nutzen. 

### Attribute hinzufügen

`def __init__(self, velocity, up_key, down_key, *args, **kwargs):`

Du musst dir derzeit keine Gedanken über `args` und `kwargs` machen - konzentriere dich einfach auf die Kernattribute der `Paddle`-Klasse.

Die `__init__` Funktion erlaubt es dir, die Klasse mit den Attributen einzurichten, die du in ihren Objekten sehen möchtest. Hier kannst du zusätzliche Attribute definieren, zusätzlich zu denen, die du bereits von der `Rectangle`-Klasse erhältst. Fügen wir Attribute wie `velocity`, `up_key`, `down_key` hinzu, um die Geschwindigkeit, mit der sich das Paddle bewegen kann, und die Tasten für die Aufwärts- und Abwärtsbewegung des Paddles darzustellen. 

```python
class Paddle(pygame.Rect):
    def __init__(self, velocity, up_key, down_key, *args, **kwargs):
        self.velocity = velocity
        self.up_key = up_key
        self.down_key = down_key
        super().__init__(*args, **kwargs)
```

### Methoden hinzufügen

`move_paddle()` ist eine **Methode**. Wir verwenden diese Methode, um das Paddle zur Ausführung von Bewegungsaktionen zu bringen. In diesem Fall bewegt `move_paddle()` das Paddle entweder nach oben oder unten, abhängig von der gedrückten Taste und mit einer bestimmten Geschwindigkeit.

```python
def move_paddle(self, board_height):
        keys_pressed = pygame.key.get_pressed()
        if keys_pressed[self.up_key]:
            if self.y - self.velocity > 0:
                self.y -= self.velocity
        if keys_pressed[self.down_key]:
            if self.y + self.velocity < board_height - self.height:
                self.y += self.velocity
```

{{% /notice %}}

Nachdem du definiert hast, wie das Paddle aussehen und sich bewegen soll, kannst du dir die Klassen `Ball` und `Pong` ansehen. In den nächsten Aktivitäten wirst du bestimmte Aspekte dieser Klassen anpassen, um das Pong-Spiel nach deinen Wünschen zu personalisieren.
```