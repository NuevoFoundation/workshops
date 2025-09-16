---
title: "Activity 6 - Moving the turtle"
date: 2019-07-25T13:24:17-07:00
weight: 9
draft: false
---

<img src="../media/bee_turtle_chat.png" alt="Bee turtle chat" width="25%"/>

Наш первый шаг — нарисовать меньшую улей, чтобы на экране поместились и улей, и цветок. Мы уже сделали это за вас — видите ли вы, что мы изменили, чтобы нарисовать меньший улей?

``` python
def draw_hexagon():
  for i in range(6):
    turtle.forward(20)
    turtle.left(60)

def draw_honeycomb():
  for i in range(6):
    draw_hexagon()
    turtle.forward(20)
    turtle.right(60)
```

Далее нам нужно переместить черепаху в новое место, чтобы нарисовать цветок (мы не хотим рисовать цветок поверх улья!). Для этого сначала нужно использовать следующие методы:

``` python
turtle.penup() 
turtle.goto(x,y)
turtle.pendown()
```

`turtle.penup()` говорит черепахе поднять перо, чтобы она не рисовала во время перемещения. Затем с помощью `turtle.goto(x,y)` мы указываем позицию, куда черепаха должна переместиться. После этого мы говорим черепахе опустить перо с помощью `turtle.pendown()`, чтобы она снова могла рисовать. 

<img src="../media/graph.png" alt="Graph" width="50%"/>


{{% notice info %}}

## Совет

`x` и `y` в методе `turtle.goto()` — это координаты `x` и `y` черепахи. Нам нужно изменить координаты черепахи с `(0, 0)`, что соответствует центру изображения, на немного удалённую позицию, чтобы мандала-цветок не перекрывал часть сота.

{{% /notice %}}

Чтобы выполнить это задание, переместите черепаху в позицию (100, 100) на холсте. Это переместит её в правый верхний угол.

<iframe src="https://trinket.io/embed/python/dee0f642ce" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>