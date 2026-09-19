---
title: "Haz que el pájaro salte con fuerza y caiga con rotación"
date: 2020-07-29T13:24:17-07:00
draft: false
weight: 4
---

Añadamos fuerza al pájaro.

Agrega el siguiente comando en el archivo [Archivo: create-game.js]
    bird.body.velocity.y = -350;
    
{{% notice tip %}}

## Trabajando Juntos

En la ventana de Replit que aparece a continuación, comenzamos el código con la línea `bird.body.velocity.y = -350;`.

![alt text](../img/jump_force.png "imagen para agregar gravedad al pájaro")

En tu consola deberías ver un JSappy Bird saltando con fuerza después de presionar **run**:

![alt text](../img/jump_output.png "pájaro saltando con gravedad")

{{% /notice %}}

## Actividad Adicional

Hagamos que el pájaro salte hacia arriba y hacia adelante:

Agrega el siguiente comando en el archivo [Archivo: create-game.js]
    bird.body.velocity.x = 100;

# Pájaro cayendo con rotación

Agreguemos rotación al pájaro:

Agrega el siguiente comando en el archivo [Archivo: update-game.js]
    if (bird.angle < 50) {
       bird.angle += 1;
    }

## Comentarios:

`If` es un bloque condicional donde estamos verificando el ángulo del pájaro y, si es menor que 50, ejecutamos la condición.
   -bird.angle+=1;

{{% notice tip %}}

## Trabajando Juntos

En la ventana de Replit que aparece a continuación, comenzamos el código con la línea `bird.angle +=1;`.

![alt text](../img/rotate.png "imagen para agregar rotación al pájaro")

En tu consola deberías ver un JSappy Bird rotando con un ángulo después de presionar **run**:

![alt text](../img/rotate_output.png "pájaro rotando")

{{% /notice %}}