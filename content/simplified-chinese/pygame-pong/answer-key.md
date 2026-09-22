---
title: "Pygame Pong 游戏 - 答案解析"
date: 2020-03-29T20:24:33-07:00
weight: 15
draft: false
hidden: true
---

### 活动 1

```python
WIDTH = 800 
# 当前 WIDTH 的值之前是 20
```

### 活动 2

```python
COLOR = (70, 130, 180)
```

### 活动 3

```python
self.paddles.append(Paddle(  # 左边的球拍
      self.BALL_VELOCITY,
      pygame.K_w,
      pygame.K_s,
      0,
      self.HEIGHT / 2 - self.PADDLE_HEIGHT / 2,
      self.PADDLE_WIDTH,
      self.PADDLE_HEIGHT
      ))
```

### 活动 4

```python
 self.paddles.append(Paddle(  # 右边的球拍
      self.BALL_VELOCITY,
      pygame.K_UP,
      pygame.K_DOWN,
      self.WIDTH - self.PADDLE_WIDTH,
      self.HEIGHT / 2 - self.PADDLE_HEIGHT / 2,
      self.PADDLE_WIDTH,
      self.PADDLE_HEIGHT
      ))
```

### 活动 5

```python
font_label = 'arial'
font_name = pygame.font.match_font(font_label)
```

### 活动 6

```python
if ball.x < 0
    self.RIGHTSCORE = self.RIGHTSCORE + 1
    ball.x = self.BALLXSTARTPOSITION
    ball.y = self.BALLYSTARTPOSITION
    ball.velocity = self.BALL_VELOCITY
    ball.angle = self.BALL_ANGLE
```

### 活动 7

```python
if event.type == pygame.KEYDOWN and event.key == pygame.K_ESCAPE:
```