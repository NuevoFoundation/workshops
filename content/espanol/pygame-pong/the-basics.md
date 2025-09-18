---
title: "Conceptos Básicos - Clase y Objeto"
date: 2019-07-29T13:24:17-07:00
weight: 2
draft: false
---

## Clases y Objetos

Antes de empezar a construir un juego, debes saber cómo dibujar distintos objetos y modificarlos según la forma en que deban verse y moverse en la pantalla del computadora.

Para construir objetos, primero debes decidir cómo deben verse, qué papel deben desempeñar en tu juego y cómo el jugador puede controlar su movimiento en pantalla. Puedes hacer esto creando una clase para cada objeto que quieras en la pantalla. Antes de que los objetos se creen en un programa, debes definir su clase. Una clase define cómo deberá verse y comportarse un objeto individual. Contiene los atributos y métodos que su objeto puede usar mientras el programa está en ejecución (en este caso se trata de un juego Pong). Solo necesitas definir una clase una vez, después de lo cual puedes usarla para crear tantos objetos como quieras.

No puedes usar una clase directamente en un programa; una clase debe tener un objeto como manifestación que se use en el programa.
Todos los aspectos relacionados con lo visual y el movimiento se llaman `"atributos"` del objeto que ves en la pantalla del computadora.
Todos los aspectos relacionados con el control de un objeto se implementan mediante `"métodos"` del objeto.

Primero, define la clase para la paleta (paddle) usada en el juego. Para hacerlo, usa el siguiente código:

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

Intentemos entender el código con más detalle.

{{% notice tip %}}

### Nombrar La Clase

`class Paddle(pygame.Rect)`

Así es como nombras la clase "Paddle". Fíjate ahora en `pygame.Rect` dentro de los paréntesis `()`. Ya te habrás imaginado que, para dibujar la paleta en la pantalla, necesitas dibujarla como un rectángulo, definir sus dimensiones y su posición en pantalla para que parezca una paleta. La expresión `(pygame.Rect)` nos permite indicarle al intérprete de Python que dibuje este objeto como un rectángulo y que le proporcione todos los atributos del rectángulo como `WIDTH` y `HEIGHT`. Esto nos ayuda a aprovechar todos los atributos disponibles de la clase `Rectangle` en la biblioteca Pygame.

### Agregar Atributos

`def __init__(self, velocity, up_key, down_key, *args, **kwargs):`

No necesitas preocuparte por `args` y `kwargs` por ahora; solo céntrate en los atributos principales de la clase `Paddle`.

La función `__init__` te permite configurar la clase con los atributos que quieres que tengan sus objetos. Aquí puedes definir atributos adicionales además de los que ya obtienes de la clase `Rectangle`. Añadamos atributos como `velocity`, `up_key`, `down_key` para representar la velocidad a la que la paleta puede moverse y las teclas necesarias para el movimiento hacia arriba y hacia abajo de la paleta.

```python
class Paddle(pygame.Rect):
    def __init__(self, velocity, up_key, down_key, *args, **kwargs):
        self.velocity = velocity
        self.up_key = up_key
        self.down_key = down_key
        super().__init__(*args, **kwargs)
```

### Agregar Métodos

`move_paddle()` es un **método**. Usamos este método para hacer que la paleta realice acciones de movimiento. En este caso, `move_paddle()` mueve la paleta hacia arriba o hacia abajo dependiendo de la tecla presionada y a una cierta velocidad.

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

Ahora que has definido cómo debe verse la paleta y cómo debe moverse, siéntete libre de echar un vistazo a las clases `Ball` y `Pong`. En las próximas actividades, modificarás ciertos aspectos de estas clases para personalizar el juego Pong a tu gusto.