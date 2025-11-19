---
title: "Actividad 9: Rota tu imagen"
date: 2020-09-08T00:00:00Z
prereq: "Conceptos básicos de Python, Python Pixels: Colores y píxeles, Manipulación de imágenes en Python: Abrir una imagen"
difficulty: "Intermedio"
weight: 9
draft: false
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/m0d9NT0MEPE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

En esta sección, comenzaremos a aprender cómo rotar tu imagen utilizando píxeles.

### Ejemplo - Rota tu imagen 180 grados en sentido horario

Vamos a rotar nuestro gato 180 grados en sentido horario.
<img src="../../media/cat.png" width=50%>

```python
# Necesitamos importar el paquete PIL para permitir la manipulación con píxeles.
from PIL import Image

# Abrir la imagen del gato
img = Image.open("cat.png")
width = img.size[0]
height = img.size[1]

# Configurar una nueva imagen con la misma anchura y altura
newimg = Image.new('RGB',(width,height))

# Establecer el píxel para la nueva imagen
for i in range(width): # Para cada columna
    for j in range(height): # Para cada fila
        # Enfocarse en cómo obtenemos nuestro nuevo alto.
        heightNew = height - 1 - j
        
        # Enfocarse en cómo obtenemos nuestro nuevo ancho.
        widthNew = width - 1 - i

        color = img.getpixel((widthNew, heightNew)) # Obtener el color de la imagen original
        newimg.putpixel((i,j),color) # Poner el color en la nueva imagen

newimg.save("Mycat.png")
```

¡Wow! Este es nuestro nuevo gato después de rotarlo.
<img src="../../media/catrot.png" width=50%>

{{% notice note %}}

Presta atención a cómo obtenemos nuestro nuevo alto y ancho. Piensa cuidadosamente sobre esas variables e intenta visualizarlas.

Por ejemplo, intenta aplicarlas en el siguiente grupo de letras de 4x4:

<img src="../../media/table.png" width=15%>

Luego, gíralo 180 grados en sentido horario y compáralo con el resultado anterior. ¿Son iguales?
{{% /notice %}}

### Desafío - Rota tu gato 90 grados en sentido antihorario

¡Ahora es tu turno de rotar tu gato 90 grados en sentido antihorario!

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Python-Pixel-Activity9" target="_blank">Lanzar Replit</a>

{{% showanswer Advanced %}}

El módulo Pillow tiene funciones que pueden ayudar a simplificar los pasos anteriores. Para hacerlo, veamos la función `rotate()` de `Pillow Image`.

La rotación de imagen funciona usando ángulos. Por ejemplo, `rotate(45)` inclinará tu imagen de lado 45 grados. Usar `rotate(90)` girará tu imagen de lado.

¡Intentémoslo! Rotemos la imagen antes de guardarla:

```python
    image = Image.open("cat.jpg")
    image.rotate(90)
    image.save("myCat.jpg")
```

Hmm, la imagen no parece haberse rotado. ¿Por qué? Bueno, la imagen que abrimos se guarda en la variable de imagen. Cuando rotamos la imagen, no guardamos la imagen rotada en ninguna variable, por lo que nuestro código no guarda la imagen rotada.

Hagamos esto en su lugar:

```python
    image = Image.open("cat.jpg")
    image = image.rotate(90)
    image.save("myCat.jpg")
```

Desafío: ¿puedes girar esta imagen completamente? ¿Puedes girar la imagen 3/4 sin usar un ángulo > 180? (Pista: ¡intenta usar números de ángulo negativos!)

Girado completamente, mi imagen se ve así:

<img src="../../media/upside_down.png" alt="gato boca abajo" width=50%>
</br>
{{% /showanswer %}}