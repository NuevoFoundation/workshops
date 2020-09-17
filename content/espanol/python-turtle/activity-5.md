---
title: "Actividad 5 - Dibujar una colmena"
date: 2019-07-25T13:24:17-07:00
weight: 7
draft: false
---

![](https://paper-attachments.dropbox.com/s_6DE744F5F42D9843D8BF3A4073281FC6AA4B5E70B001CCD7879563112D6136E1_1563991066657_honey_comb.png)

¡Llegamos a la prueba final! Vamos a crear la colmena para que Alex viva en ella. Afortunadamente una colmena es cimplemente 6 hexágonos así que podemos usar lo que ya aprendimos sobre funciones y ciclos para crear la colmena.


En esta actividad primero crearemos una función llamada `draw_honeycomb()`. Dentro del cuerpo de esta función pondremos un ciclo que se repita seis veces. Dentro del ciclo dibujaremos el primer hexágono con la función `draw_hexagon()` que ya tenemos construida. Ahora, movamos la tortuga un poco para que pueda pintar el siguiente hexágono. Para hacer eso necesitamos decirle al programa que al terminar de dibujar el hexágono se mueva hacia adelante 50 pixeles y luego gire a la derecha 60 grados.

Dibujar la colmena puede tomar un rato. Para que la tortuga vaya más rápido puedes modificar la velocidad a la que se mueve. Las velocidades van del 1 al 10 donde 1 es la más lenta y 10 la más rápida. Pon el siguiente código justo debajo de donde está la línea que cambia el color de la tortuga.

```
  turtle.speed(8)
```

<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/PythonWithTurtleActivity5?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>