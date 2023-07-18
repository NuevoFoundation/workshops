---
title: "Atividade 5 - Desenhar um favo de mel"
date: 2019-07-25T13:24:17-07:00
weight: 7
draft: false
---

![alt text height="600px" width="30%"](../media/bee_honeycomb.png "Desenho em favo de mel")

Esta é a final! Vamos criar o favo de mel em que Alex vai viver. Felizmente, um favo de mel é simplesmente 6 hexágonos, então vamos combinar nosso conhecimento de funções e loops para fazer nosso favo de mel! 

Nesta atividade, crie uma nova função chamada `draw_honeycomb()`. Dentro do corpo da função, crie um loop que se repete 6 vezes. Dentro do loop temos que primeiro desenhar um hexágono usando nossa função `draw_hexagon()` que definimos anteriormente. Em seguida, mova a tartaruga para que ela possa desenhar o próximo hexágono. Para fazer isso, depois que a tartaruga desenha cada hexágono, precisamos dizer à nossa tartaruga para avançar **50 pixels** e depois virar à direita **60 graus**. 

Note que o desenho do favo de mel pode demorar um pouco. Você pode mudar a velocidade com que a tartaruga desenha o favo de mel definindo a velocidade da tartaruga para um número entre `1` e `10`, sendo `1` o mais lento e `10` o mais rápido. Coloque este código perto de onde mudamos a cor da tartaruga.


``` python
turtle.speed(8)
```

<iframe src="https://trinket.io/embed/python/d83811c24a" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>