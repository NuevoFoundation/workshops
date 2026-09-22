---
title: "Pygame Pong-Spiel - Antwortschlüssel"
date: 2020-03-29T20:24:33-07:00
weight: 15
draft: false
hidden: true
---

### Aktivität 1

```python
WIDTH = 800 
# Der Wert von WIDTH war zuvor 20
```

### Aktivität 2

```python
COLOR = (70, 130, 180)
```

### Aktivität 3

```python
self.paddles.append(Paddle(  # Der linke Schläger
      self.BALL_VELOCITY,
      pygame.K_w,
      pygame.K_s,
      0,
      self.HEIGHT / 2 - self.PADDLE_HEIGHT / 2,
      self.PADDLE_WIDTH,
      self.PADDLE_HEIGHT
      ))
```

### Aktivität 4

```python
 self.paddles.append(Paddle(  # Der rechte Schläger
      self.BALL_VELOCITY,
      pygame.K_UP,
      pygame.K_DOWN,
      self.WIDTH - self.PADDLE_WIDTH,
      self.HEIGHT / 2 - self.PADDLE_HEIGHT / 2,
      self.PADDLE_WIDTH,
      self.PADDLE_HEIGHT
      ))
```

### Aktivität 5

```python
font_label = 'arial'
font_name = pygame.font.match_font(font_label)
```

### Aktivität 6

```python
if ball.x < 0
    self.RIGHTSCORE = self.RIGHTSCORE + 1
    ball.x = self.BALLXSTARTPOSITION
    ball.y = self.BALLYSTARTPOSITION
    ball.velocity = self.BALL_VELOCITY
    ball.angle = self.BALL_ANGLE
```

### Aktivität 7

```python
if event.type == pygame.KEYDOWN and event.key == pygame.K_ESCAPE:
```