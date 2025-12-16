---
title: "Actividad 3 - Dibujar un hexágono"
date: 2019-07-25T13:24:17-07:00
weight: 5
draft: false
---

![Animación de hexágon, tortuga](https://media.giphy.com/media/TDLqC61A5uOAO8WwnJ/giphy.gif)

¡Buen trabajo! Acabas de dibujar tu primera figura con Python y Turtle. Hagamos otros pequeños cambios al código que escribimos para hacer el cuadrado e intentemos hacer un hexágono. Alex es una abeja así que después de todo, él necesita dibujar hexágonos para crear su colmena.

Para ayudarte a dibujar un hexágono, piensa en cuántos lados tiene un hexágono. Ahora, ¿cuántos grados debe girar la tortuga?

{{% expand "**Pista:**" %}} 
Recuerda: si divides 360 grados entre el número de lados de la figura, obtendrás el ángulo que necesitas para girar.{{% /expand %}}
<br/>

{{% expand "**Mostrar respuesta:**" %}} 
La tortuga necesita dibujar los 6 lados del hexágono. Entonces, 360 grados ÷ 6 giros = 60 grados por giro.
{{% /expand %}}
<br/>

Como recordatorio útil, este es el código que se utilizó para crear un triángulo:

``` python
for i in range(3):
  turtle.forward(50)
  turtle.left(120)
```

<iframe src="https://trinket.io/embed/python/7a4b1e0683" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

{{% expand "**Desafío extra:**" %}}
Si terminaste antes de tiempo, intenta modificar tu código y dibujar figuras más complejas. ¡Aquí tienes algunos ejemplos de figuras que puedes intentar dibujar!

<div style="display: flex">
    <div><img src="../media/star_1.png" height="60%" title="Forma de estrella 1" alt="Forma de estrella 1"/></div> 
    <div><img src="../media/star_2.png" height="60%" title="Forma de estrella 2" alt="Forma de estrella 2"/></div>
</div>

{{% /expand %}}