---
title: "Pygame Juego de Pong - Clave de Respuestas"
date: 2020-03-29T20:24:33-07:00
weight: 15
draft: false
hidden: true
---

### Actividad 1

```python
WIDTH = 800 
# El valor de WIDTH era 20 anteriormente
```

### Actividad 2

```python
COLOR = (70, 130, 180)
```

### Actividad 3

```python
self.paddles.append(Paddle(  # La paleta izquierda
      self.BALL_VELOCITY,
      pygame.K_w,
      pygame.K_s,
      0,
      self.HEIGHT / 2 - self.PADDLE_HEIGHT / 2,
      self.PADDLE_WIDTH,
      self.PADDLE_HEIGHT
      ))
```

### Actividad 4

```python
 self.paddles.append(Paddle(  # La paleta derecha
      self.BALL_VELOCITY,
      pygame.K_UP,
      pygame.K_DOWN,
      self.WIDTH - self.PADDLE_WIDTH,
      self.HEIGHT / 2 - self.PADDLE_HEIGHT / 2,
      self.PADDLE_WIDTH,
      self.PADDLE_HEIGHT
      ))
```

### Actividad 5

```python
font_label = 'arial'
font_name = pygame.font.match_font(font_label)
```

### Actividad 6

```python
if ball.x < 0
    self.RIGHTSCORE = self.RIGHTSCORE + 1
    ball.x = self.BALLXSTARTPOSITION
    ball.y = self.BALLYSTARTPOSITION
    ball.velocity = self.BALL_VELOCITY
    ball.angle = self.BALL_ANGLE
```

### Actividad 7

```python
if event.type == pygame.KEYDOWN and event.key == pygame.K_ESCAPE:
```
