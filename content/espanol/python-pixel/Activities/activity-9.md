---
title: "Actividad 9: Rota tu imagen"
date: 2026-04-25T00:00:00-07:00
prereq: "Conceptos básicos de Python, Python Pixels: Colores y píxeles, Manipulación de imágenes en Python: Abrir una imagen"
difficulties: ["intermedio"]
weight: 9
draft: false
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/m0d9NT0MEPE" title="Actividad 9: Rota tu imagen - video de YouTube" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

En esta sección, aprenderemos cómo rotar tu imagen utilizando píxeles.

### Ejemplo - Rota tu imagen 180 grados en sentido horario

Rotemos nuestro gato 180 grados en sentido horario.
<img src="../../media/cat.png" alt="Imagen original del gato" width="50%">

```python
# Necesitamos importar el paquete PIL para permitir la manipulación con píxeles.
from PIL import Image

# Abre la imagen del gato
img = Image.open("cat.png")
width = img.size[0]
height = img.size[1]

# Configura una nueva imagen con el mismo ancho y alto
newimg = Image.new('RGB', (width, height))

# Establece los píxeles para la nueva imagen
for i in range(width): # Para cada columna
    for j in range(height): # Para cada fila
        # Observa cómo obtenemos nuestro nuevo valor de altura (heightNew).
        heightNew = height - 1 - j
        
        # Observa cómo obtenemos nuestro nuevo valor de ancho (widthNew).
        widthNew = width - 1 - i

        color = img.getpixel((widthNew, heightNew)) # Obtén el color de la imagen original
        newimg.putpixel((i, j), color) # Coloca el color en la nueva imagen

newimg.save("Mycat.png")
```

¡Wow! Este es nuestro nuevo gato después de rotarlo.
<img src="../../media/catrot.png" alt="Imagen del gato rotada" width="50%">

{{% notice note %}}

Presta atención a cómo obtenemos los valores de heightNew y widthNew. Piensa cuidadosamente en esas variables y trata de visualizarlas.

Por ejemplo, intenta aplicarlas en el siguiente grupo de letras de 4x4:

<img src="../../media/table.png" alt="Tabla de referencia para coordenadas de píxeles" width="15%">

Luego rota el grupo 180 grados en sentido horario y compáralo con el resultado anterior. ¿Son iguales?
{{% /notice %}}


### Reto - Rota tu gato 90 grados en sentido antihorario

¡Ahora es tu turno para rotar tu gato 90 grados en sentido antihorario!

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Python-Pixel-Activity9" target="_blank">Iniciar Replit</a>

{{% showanswer Advanced %}}

El módulo Pillow tiene funciones que pueden ayudar a simplificar los pasos anteriores. Para hacer eso, veamos la función `rotate()` de `Pillow Image`.

La función para rotar imágenes utiliza ángulos. Por ejemplo, `rotate(45)` inclina tu imagen hacia un lado en 45 grados. Usando `rotate(90)` girará tu imagen hacia un lado.

¡Intentémoslo! Rotemos la imagen antes de guardarla:

```python
    image = Image.open("cat.jpg")
    image.rotate(90)
    image.save("myCat.jpg")
```

Hmm, parece que la imagen no se rotó. ¿Por qué? Bueno, la imagen que abrimos se guarda en la variable `image`. Cuando rotamos la imagen, no guardamos la imagen rotada en ninguna variable, por lo que nuestro código no guarda la imagen modificada.

Hagamos esto en cambio:

```python
    image = Image.open("cat.jpg")
    image = image.rotate(90)
    image.save("myCat.jpg")
```

Reto: ¿puedes girar esta imagen completamente? ¿Puedes girarla tres cuartos del camino sin usar un ángulo mayor a 180? (Pista: intenta usar números de ángulo negativos).

Completamente rotada, mi imagen se ve así:

<img src="../../media/upside_down.png" alt="gato boca abajo" width="50%">
</br>
{{% /showanswer %}}