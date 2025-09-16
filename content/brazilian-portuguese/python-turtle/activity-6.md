---
title: Atividade 6 – Movendo a tartaruga
date: 2019-07-25T13:24:17-07:00
weight: 9
draft: false
---

![texto alternativo height="600px" width="30%"](../media/bee_turtle_chat.png "Conversa entre tartaruga e abelha")

Nosso primeiro passo é desenhar uma colmeia menor para que possamos desenhar tanto a colmeia quanto a flor na tela. Já fizemos isso para você - você viu o que mudamos para desenhar uma colmeia menor?

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

Em seguida, precisamos mover a tartaruga para um novo local para desenhar a flor (não queremos desenhar a flor em cima da colmeia!). Para fazer isso, primeiro precisamos usar os seguintes métodos:

``` python
turtle.penup() 
turtle.goto(x,y)
turtle.pendown()
```

`turtle.penup()` diz à tartaruga para pegar sua caneta para não desenhar enquanto estiver se movendo. Então, com `turtle.goto(x,y)`, estamos dizendo à tartaruga a posição para onde ela se move. Depois disso, dizemos à tartaruga para colocar a caneta de volta no lugar usando `turtle.pendown()` para que ela possa começar a desenhar novamente.

![texto alternativo height="600px" width="50%"](../media/graph.png "Gráfico")

{{% notice info %}}

## Dica

Os `x` e `y` no método `turtle.goto()` são as coordenadas `x` e `y` da tartaruga. Queremos mudar as coordenadas `x` e `y` da tartaruga de `(0, 0)` que é o centro da imagem, para algum lugar um pouco mais distante para que a flor da mandala não cubra parte do favo de mel.

{{% /notice %}}

Para completar esta atividade, mova a tartaruga para a posição (100, 100) na tela. Isso o moverá para o canto superior direito.

<iframe src="https://trinket.io/embed/python/dee0f642ce" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>