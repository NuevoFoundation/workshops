---
title: "Abrir una imagen"
date: 2026-04-25T00:00:00-07:00
draft: false
weight: 2
---

Para cambiar una imagen, primero debemos abrir una imagen. Podemos usar el módulo `Pillow Image` que acabamos de importar en la configuración.  
Primero, busquemos algunas imágenes para abrir. Encuentra una imagen de tu elección y descárgala. Una vez descargada, regresa a la ventana de Replit y sube tu imagen haciendo clic en los tres puntos y seleccionando 'subir archivo'.

Por ejemplo, para subir el archivo cat.jpg:

<img src="../../media/upload_file.png" alt="Imagen que muestra cómo subir un archivo" width="60%">

Deberías ver el archivo JPG en el lado izquierdo una vez que lo hayas subido. Nota que tu imagen puede tener una extensión diferente.

El siguiente paso es abrir esa imagen en el código. Hay funciones en el módulo `Pillow Image` que importamos que nos permiten hacer esto.

Para abrir y mostrar la imagen que descargaste, haz lo siguiente:

```python
    image = Image.open("cat.jpg")
    image.save("myCat.jpg")
```

Si estás utilizando una imagen diferente, asegúrate de escribir el nombre del archivo entre las comillas. El código anterior abre la imagen JPG y almacena esa imagen en la variable `image`. Para verificar que la variable `image` contiene la imagen, podemos guardarla como una nueva imagen. De esta manera, la imagen se mostrará en la ventana.

¡Presiona ejecutar y ve aparecer tu imagen! Mi imagen se ve así:

<img src="../../media/cat.png" alt="Ejemplo de imagen de un gato" width="50%">