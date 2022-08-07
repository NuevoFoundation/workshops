---
title: "Actividad 7 - Dibujando una figura 8"
date: 2019-07-25T13:24:17-07:00
weight: 10
draft: false
---

![alt text width="70%"](../media/figure-8.png "Dibujando la figura del numero 8")

¡Excelente! Ahora hagamos la figura de un 8 como primer paso para hacer una flor de mandala! Una figura de un 8 son solo dos círculos opuestos entre sí. 
Para hacer esto podemos hacer uso del método `turtle.circle(x)`, el cual toma un entero `x` como el radio del círculo. (Puede recordar que `radio * 2` es que tan ancho es el circulo.) Tener el radio como un **argumento** significa que podemos decidir qué tan grande o pequeño debe ser el círculo.

``` python
  import turtle
  turtle.circle(20)
```

En el ejemplo anterior, el círculo es de 40 píxeles de ancho y es dibujado en sentido contrario a las manecillas del reloj. Si el argumento para `turtle.circle()` es negativo, entonces el círculo se dibuja en dirección de las manecillas del reloj y es opuesto a la versión original.

Usando esta información, crea una nueva función llamada `figure_8()` que dibuje una figura de un 8.

<iframe src="https://trinket.io/embed/python/f2e75371f0" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>