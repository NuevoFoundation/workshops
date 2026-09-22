---
title: "Conceptos básicos de los colores"
draft: false
weight: 3
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/-ior2GcSYa4" title="Basics of colors - YouTube video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Conceptos básicos de los colores
Mientras miras todo tipo de imágenes en internet, ¿alguna vez te has preguntado cómo obtienen sus colores esas imágenes? En realidad, las computadoras utilizan el *modo RGB* para representar colores.

## Formato RGB
En Python, seguimos un formato específico al definir colores:
(R, G, B), donde "R", "G" y "B" son todos números enteros. "R" representa una cantidad de <span style="color:red; font-weight:bold"> rojo</span>, "G" representa una cantidad de <span style="color:green; font-weight:bold"> verde</span>, y "B" representa una cantidad de <span style="color:blue; font-weight:bold"> azul</span>. 

El color representado por (R, G, B) es el resultado de la "mezcla" de diferentes cantidades de rojo, verde y azul.

<!-- Para accesibilidad, utiliza esta etiqueta HTML -->
<label for="colorpicker">Puedes hacer clic en la línea de abajo y elegir los colores que desees en la paleta de colores para observar sus valores RGB:</label>
<input type="color" id="colorpicker">

{{% notice tip %}}
*¿Qué entendemos por "mezcla de colores"?*

Aquí estamos utilizando diferentes cantidades de luz roja, verde y azul para obtener un nuevo color de luz. Al igual que usamos distintas cantidades de pigmentos al pintar, estamos mezclando diferentes cantidades de luz para crear diversos colores de luz. Los pigmentos utilizan los colores primarios rojo, amarillo y azul, mientras que las computadoras utilizan los colores primarios de luz: rojo, verde y azul.

Esta imagen representa, de manera muy aproximada, cómo se mezclan los colores:
<img src="../../media/colors.svg.png" alt="Representación de colores mostrando cómo se mezclan las luces roja, verde y azul" width="50%">

Así como no deberíamos usar demasiado pigmento, también hay una limitación para representar colores. El máximo número entero que podemos usar para representar cada cantidad de color es 255, y el número entero mínimo que podemos usar es 0. Esto se define en el modo RGB.

En todos los materiales siguientes, "color" se refiere al "color de la luz".
{{% /notice %}}


## Preguntas y Respuestas
1. ¿Qué color representa (0, 0, 0)?

<center>
<label for="colorpickerQ1">Pruébalo:</label> </br>
<input type="color" id="colorpickerQ1"
style="display:inline-block;width:40%;height:100px;">
</center>

{{% showanswer "Mostrar Respuesta" %}}
Negro. Todos los colores están al 0%. (Aquí no hay color. Todo está tan oscuro que es negro).
<img src="../../media/black.png" alt="Muestra de color negro" width="40%">
</br>
{{% /showanswer %}}

2. ¿Qué color representa (255, 255, 255)?

<center>
<label for="colorpickerQ2">Pruébalo:</label> </br>
<input type="color" id="colorpickerQ2"
style="display:inline-block;width:40%;height:100px;">
</center>

{{% showanswer "Mostrar Respuesta" %}}
Blanco. 255 significa que estás utilizando el 100% de cada color, lo cual es saturación. (Cuando todos los colores están saturados, obtienes blanco).
<img src="../../media/white.png" alt="Muestra de color blanco" width="40%">
</br>
{{% /showanswer %}}

3. ¿Qué color representa (100, 100, 100)?

<center>
<label for="colorpickerQ3">Pruébalo:</label> </br>
<input type="color" id="colorpickerQ3"
style="display:inline-block;width:40%;height:100px;">
</center>

{{% showanswer "Mostrar Respuesta" %}}
Gris. 100 / 255 % = 39.2%. Obtendrás gris al sumar 39.2% de rojo, 39.2% de azul y 39.2% de verde.
<img src="../../media/grey.png" alt="Muestra de color gris" width="40%">
</br>
{{% /showanswer %}}

*Nota: No te preocupes si te sientes confundido aquí, explicaremos más sobre estas ideas en actividades de código en Python más adelante en el taller.*
<br/><br/>

## Colores predeterminados

En Python, los colores más comúnmente usados están preparados para ti. Cuando necesites referirte a un color, simplemente haz:
```python
color = 'nombre del color'
```
Por ejemplo: 
Rojo:
```python
color = 'red'
# El siguiente código se utiliza para mostrarte el color obtenido.
# Puedes omitir estas líneas por ahora y las explicaremos en la próxima página.
img = Image.new('RGB', (60, 30), color)
img.save('red.png')
img.show('red.png')
```
El siguiente es tu resultado:
<img src="../../media/whileloopbefore.png" alt="Ejemplo de salida del color rojo" width="60%">
¡Increíble! ¡Obtienes rojo!