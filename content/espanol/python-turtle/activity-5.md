---
title: "Actividad 5 - Dibujar una colmena"
date: 2019-07-25T13:24:17-07:00
weight: 7
draft: false
---

<img src="../media/bee_honeycomb.png" alt="Abeja pensando en colmena" width="25%" />

¡Llegamos a la prueba final! Vamos a crear la colmena para que Alex viva en ella. Afortunadamente una colmena es cimplemente 6 hexágonos así que podemos usar lo que ya aprendimos sobre funciones y ciclos para crear la colmena.

En esta actividad primero crearemos una función llamada `draw_honeycomb()`. Dentro del cuerpo de esta función pondremos un ciclo que se repita seis veces. Dentro del ciclo dibujaremos el primer hexágono con la función `draw_hexagon()` que ya tenemos construida. Ahora, movamos la tortuga un poco para que pueda pintar el siguiente hexágono. Para hacer eso necesitamos decirle al programa que al terminar de dibujar el hexágono se mueva hacia adelante 50 pixeles y luego gire a la derecha 60 grados.

Dibujar la colmena puede tomar un rato. Para que la tortuga vaya más rápido puedes modificar la velocidad a la que se mueve. Las velocidades van del 1 al 10 donde 1 es la más lenta y 10 la más rápida. Pon el siguiente código justo debajo de donde está la línea que cambia el color de la tortuga.

``` python
  turtle.speed(8)
```

<iframe src="https://trinket.io/embed/python/eca47e6f61" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>