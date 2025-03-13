---
title: "Actividad 10: ¡Haciendo un meme!"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 10
prereq: "Conceptos básicos de Python, Píxeles y colores de Python, Manipulación de imágenes en Python: Abrir una imagen"
difficulty: "Intermedio"
--- 

Otra cosa que podemos hacer para mejorar nuestra imagen es agregar texto. Podemos hacerlo utilizando el módulo `Pillow ImageDraw`. Vamos a importarlo al inicio de nuestro archivo junto con nuestras otras declaraciones de importación.

```python
    from PIL import Image
    from PIL import ImageFilter
    from PIL import ImageDraw
```

Para permitirnos agregar texto, debemos volver a dibujar la misma imagen que usamos antes. Vamos a hacerlo utilizando la función `draw()`, que recibe un objeto de imagen. Una vez que la imagen está dibujada, podemos agregarle texto usando el método `text()` para establecer el texto de la imagen. El texto se dibuja basado en coordenadas proporcionadas. La función toma dos parámetros obligatorios: las coordenadas xy y el texto necesario.

Por ejemplo:

```python
    drawnImage = ImageDraw.Draw(img)
    drawnImage.text((200,20), "Cuando te das cuenta que aprendiste Python en una hora.")
    drawnImage.save("miGatoConTexto.jpg")
```

Mi imagen ahora se ve así:
<img src="../../media/meme.png" alt="gato en blanco y negro borroso boca abajo con texto que dice `cuando te das cuenta que aprendiste Python en una hora.`" width=50%>

### Desafío - Cambiar la fuente
Puedes ver que el texto en la imagen creada arriba está en una fuente pequeña y por defecto. Hay otros parámetros dentro del método `text()` que puedes usar. Echa un vistazo a la [documentación](https://pillow.readthedocs.io/en/stable/reference/ImageDraw.html#PIL.ImageDraw.PIL.ImageDraw.ImageDraw.text) y mira si puedes cambiar la fuente y el tamaño de la fuente, así como el color del texto. 

{{% notice note %}}

Esto requerirá descargar un archivo .ttf (también conocido como archivo de fuente) de Internet. ¡Pide ayuda si tienes alguna pregunta!

{{% /notice %}}