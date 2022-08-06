---
title: "Pygame Pong game - Answer Key"
date: 2020-03-29T20:24:33-07:00
weight: 15
draft: false
hidden: true
---

### Activity 1

```python
HEIGHT = 600
WIDTH = 800
```

### Activity 2

```python
COLOR = (70, 130, 180)
```

### Activity 3

```python
self.paddles.append(Paddle(  # The left paddle
      self.BALL_VELOCITY,
      pygame.K_w,
      pygame.K_s,
      0,
      self.HEIGHT / 2 - self.PADDLE_HEIGHT / 2,
      self.PADDLE_WIDTH,
      self.PADDLE_HEIGHT
      ))
```

### Activity 4

```python
 self.paddles.append(Paddle(  # The right paddle
      self.BALL_VELOCITY,
      pygame.K_UP,
      pygame.K_DOWN,
      self.WIDTH - self.PADDLE_WIDTH,
      self.HEIGHT / 2 - self.PADDLE_HEIGHT / 2,
      self.PADDLE_WIDTH,
      self.PADDLE_HEIGHT
      ))
```

### Activity 5

```python
font_label = 'arial'
font_name = pygame.font.match_font(font_label)
```

### Activity 6

```python
if ball.x < 0
    self.RIGHTSCORE = self.RIGHTSCORE + 1
    ball.x = self.BALLXSTARTPOSITION
    ball.y = self.BALLYSTARTPOSITION
    ball.velocity = self.BALL_VELOCITY
    ball.angle = self.BALL_ANGLE
```

### Activity 7

```python
if event.type == pygame.KEYDOWN and event.key == pygame.K_ESCAPE:
```
