```markdown
---
title: "Actividad 10: ¡Creando un meme!"
date: 2026-04-25T00:00:00-07:00
draft: false
weight: 10
prereq: "Fundamentos de Python, Python Pixels: Colores y píxeles, Manipulación de imágenes con Python: Abrir una imagen"
difficulties: ["intermedio"]
--- 

Otra cosa que podemos hacer para mejorar nuestra imagen es añadir texto. Esto lo podemos lograr utilizando el módulo `ImageDraw` de Pillow. Importemos este módulo al inicio de nuestro archivo junto con las demás declaraciones de importación.

```python
    from PIL import Image
    from PIL import ImageFilter
    from PIL import ImageDraw
```

Para permitirnos añadir texto, debemos redibujar la misma imagen que usamos anteriormente. Podemos hacerlo utilizando la función `draw()`, que toma como entrada un objeto de tipo imagen. Una vez que la imagen está dibujada, podemos agregarle texto usando el método `text()` para establecer el texto de la imagen. El texto se dibuja basado en las coordenadas proporcionadas. La función requiere dos parámetros obligatorios: las coordenadas xy y el texto deseado.

Por ejemplo:

```python
    drawnImage = ImageDraw.Draw(img)
    drawnImage.text((200,20), "Cuando te das cuenta de que aprendiste Python en una hora.")
    drawnImage.save("miGatoConTexto.jpg")
```

Mi imagen ahora se ve así:
<img src="../../media/meme.png" alt="gato en blanco y negro desenfocado dado vuelta con texto que dice `cuando te das cuenta de que aprendiste Python en una hora.`" width="50%">

### Desafío - Cambia la fuente
Puedes ver que el texto en la imagen creada arriba está en una fuente pequeña y predeterminada. Hay otros parámetros dentro del método `text()` que puedes usar. Revisa la [documentación](https://pillow.readthedocs.io/en/stable/reference/ImageDraw.html#PIL.ImageDraw.PIL.ImageDraw.ImageDraw.text) y trata de cambiar la fuente y el tamaño de la fuente, así como el color del texto. 

{{% notice note %}}

Esto requerirá descargar un archivo .ttf (es decir, un archivo de fuente) de Internet. ¡Pide ayuda si tienes alguna duda!

{{% /notice %}}
```