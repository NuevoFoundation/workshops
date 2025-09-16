---
title: Atividade 3 – Desenhando um hexágono
date: 2019-07-25T13:24:17-07:00
weight: 5
draft: false
---

![Tartaruga, animação hexágono](https://media.giphy.com/media/TDLqC61A5uOAO8WwnJ/giphy.gif)

Bom trabalho! Você acabou de desenhar sua primeira forma em Python com Turtle! Agora vamos alterar ligeiramente o código que já escrevemos para desenhar um quadrado e, em vez disso, desenhar um hexágono. Afinal, Alex é uma abelha e precisa desenhar hexágonos para construir seu primeiro favo de mel.

Para ajudar você a desenhar um hexágono, pense em quantos lados tem um hexágono. Agora, quantos graus a tartaruga deve girar?

{{% expand "**Dica:**" %}}
Lembre-se: se você dividir 360 graus pelo número de lados da figura, vai obter o ângulo que precisa girar.
{{% /expand %}}
<br/>

{{% expand "**Mostrar resposta:**" %}}
A tartaruga precisa desenhar 6 lados do hexágono. Então, 360 graus ÷ 6 giros = 60 graus por giro.
{{% /expand %}}
<br/>

Como um lembrete útil, este é o código que foi usado para criar um triângulo:

``` python
for i in range(3):
  turtle.forward(50)
  turtle.left(120)
```

<iframe src="https://trinket.io/embed/python/e82295e92f" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

{{% expand "**Desafio extra:**" %}}
Se você terminou mais cedo, tente modificar seu código e desenhar formas mais complexas! Aqui estão alguns exemplos de formas que você pode tentar desenhar.

<div style="display: flex">
  <div><img src="../media/star_1.png" height="60%" title="Forma de estrela 1" alt="Forma de estrela 1"/></div>
  <div><img src="../media/star_2.png" height="60%" title="Forma de estrela 2" alt="Forma de estrela 2"/></div>
</div>
{{% /expand %}}