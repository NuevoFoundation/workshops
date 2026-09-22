---
title: "Recibiendo un Mensaje"
date: 2019-07-25T13:24:17-07:00
weight: 3
draft: false
---

Ahora que estamos enviando mensajes y escuchándolos, necesitamos usar esa información para determinar la distancia entre los micro:bits. Para hacerlo, necesitamos saber la intensidad de la señal que estamos recibiendo. Regresa a la sección Radio y esta vez arrastra el bloque "al recibir por radio (número recibido)" y ponlo en un lugar vacío de tu área de trabajo. No debe estar dentro de ningún otro bloque.

Este bloque le dice a nuestro micro:bit que haga algo siempre que reciba un número enviado desde otro micro:bit.

![Bloque "Al recibir por radio" añadido al área de trabajo](../img/onRadioReceived.png)

A continuación, haz clic en la sección roja Variables y luego en "Crear una variable...". En el cuadro de texto, escribe "fuerza" como el nombre de tu nueva variable, luego haz clic en "Aceptar ✔".

![Menú de MakeCode mostrando la sección de Variables seleccionada](../img/makeVariable.png)  
![Ventana emergente para nombrar la variable](../img/variableModal.png)

Ahora, vuelve al menú de Variables y arrastra "establecer fuerza a 0" dentro del bloque rosa "al recibir por radio (número recibido)". Luego regresa al menú de Radio y arrastra "paquete recibido (potencia de la señal)" encima del `0️` en "establecer fuerza a 0️". Cuando termines, tu área de trabajo debería verse algo así:

![Área de trabajo con los bloques al inicio, por siempre y paquete recibido llenos](../img/savedRSSI.png)

Las variables son simplemente espacios donde podemos almacenar información con un nombre amigable para que quede claro qué hay dentro. Entonces, al crear una variable llamada `fuerza`, lo que estamos haciendo es reservar un espacio para almacenar un valor, en este caso, la potencia de la señal medida del mensaje que recibimos. Luego, simplemente podemos usar el nombre `fuerza` en cualquier lugar donde queramos verificar el valor actual o compararlo con algo más. Si más tarde recibimos un mensaje nuevo con una señal más fuerte o más débil, el valor de `fuerza` se actualizará automáticamente a ese nuevo valor. De ahí el bloque "al recibir por radio": cada vez que recibimos un nuevo mensaje, el valor de `fuerza` se actualiza con la última potencia de la señal sin que tengas que hacer nada manualmente.