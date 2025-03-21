---
title: "Conceptos básicos de los colores"
draft: false
weight: 3
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/-ior2GcSYa4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Conceptos básicos de los colores

Mientras miras todo tipo de imágenes en línea, ¿alguna vez te has preguntado cómo obtuvieron sus colores? En realidad, las computadoras tienen el *modo RGB* para representar colores.

## Formato RGB

En Python, seguimos un formato específico al definir colores: (R, G, B), donde "R", "G" y "B" son todos enteros. "R" representa una cantidad de <span style="color:red; font-weight:bold"> rojo</span>, "G" representa una cantidad de <span style="color:green; font-weight:bold"> verde</span>, y "B" representa una cantidad de <span style="color:blue; font-weight:bold"> azul</span>.

El color representado por (R, G, B) es lo que obtenemos de "la mezcla de" diferentes cantidades de rojo, verde y azul.

<!-- Para accesibilidad, usa esta etiqueta HTML -->
<label for="colorpicker">Puedes hacer clic en la línea de abajo y elegir los colores que deseas en la paleta para observar sus valores RGB:</label>
<input type="color" id="colorpicker">

{{% notice tip %}}

*¿Qué queremos decir con "mezcla de colores"?*

Aquí usamos diferentes cantidades de luz roja, verde y azul para obtener un nuevo color de luz. Así como usamos diferentes cantidades de pigmentos al pintar, estamos mezclando diferentes cantidades de luces para crear diferentes colores de luz. Los pigmentos usan los colores primarios de rojo, amarillo y azul, mientras que las computadoras usan los colores primarios de luz roja, verde y azul.

Esta imagen representa aproximadamente cómo se mezclan los colores:
![alt text iframe height="600px" width="40%"](../../media/colors.svg.png "representación del color")

Así como no debemos usar demasiado pigmento, también hay una limitación para representar colores. El máximo entero que podemos usar para representar cada cantidad de color es 255 y el mínimo entero es 0. Esto se define en el modo RGB.

En todos los materiales siguientes, "color" significa "el color de la luz".
{{% /notice %}}

## Preguntas y respuestas

1. ¿Qué color representa (0, 0, 0)?

<center>
<label for="colorpickerQ1">Pruébalo:</label> </br>
<input type="color" id="colorpickerQ1"
style="display:inline-block;width:40%;height:100px;">
</center>

{{% showanswer "Mostrar respuesta" %}}
Negro. Todos los colores están al 0%. (No hay color aquí. Todo el mundo está tan oscuro. ¡Es negro!)
![alt text height="600px" width="40%"](../../media/black.png "negro")
</br>
{{% /showanswer %}}

2. ¿Qué color representa (255, 255, 255)?

<center>
<label for="colorpickerQ2">Pruébalo:</label> </br>
<input type="color" id="colorpickerQ2"
style="display:inline-block;width:40%;height:100px;">
</center>

{{% showanswer "Mostrar respuesta" %}}
Blanco. 255 representa que estás usando el 100% de cada color, que es saturado. (Cuando todos los colores están saturados, obtienes blanco)
![alt text height="600px" width="40%"](../../media/white.png "blanco")
</br>
{{% /showanswer %}}

3. ¿Qué color representa (100, 100, 100)?

<center>
<label for="colorpickerQ3">Pruébalo:</label> </br>
<input type="color" id="colorpickerQ3"
style="display:inline-block;width:40%;height:100px;">
</center>

{{% showanswer "Mostrar respuesta" %}}
Gris. 100 / 255 % = 39.2%. Obtendrás gris al sumar 39.2% de rojo, 39.2% de azul y 39.2% de verde.
![alt text height="600px" width="40%"](../../media/grey.png "gris")
</br>
{{% /showanswer %}}

*Nota: No te preocupes si te sientes confundido aquí, explicaremos más sobre estas ideas en las actividades de código de python más adelante en el taller.*
<br/><br/>

## Colores incorporados

En Python, los colores más