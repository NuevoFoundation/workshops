---
title: "Abrir una imagen"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
--- 

Para cambiar una imagen, debemos abrir una imagen. Podemos usar el módulo `Pillow Image` que acabamos de importar en la configuración. Primero, busquemos algunas imágenes para abrir. Encuentra una imagen de tu elección y descárgala. Una vez descargada, navega de vuelta a tu ventana de Replit y sube tu imagen haciendo clic en los tres puntos y seleccionando 'subir archivo'.

Por ejemplo, para subir el archivo cat.jpg:

![alt text](../../media/upload_file.png "imagen mostrando cómo subir un archivo")

Deberías ver el archivo JPG en el lado izquierdo una vez que lo hayas subido. Ten en cuenta que tu imagen puede tener una extensión diferente.

El siguiente paso es abrir esa imagen dentro del código. Hay funciones dentro del módulo `Pillow Image` que importamos que nos permiten hacer esto.

Para abrir y mostrar la imagen que descargaste, haz lo siguiente:

```python
    image = Image.open("cat.jpg")
    image.save("myCat.jpg")
```

Si estás usando una imagen diferente, asegúrate de poner el nombre del archivo entre las comillas. El código anterior abre la imagen JPG y guarda esa imagen en la variable image. Para comprobar que la variable image tiene la imagen, podemos guardarla como una nueva imagen. De esta manera, la imagen se mostrará en la ventana.

¡Presiona ejecutar y ve aparecer tu imagen! Mi imagen se ve así:

<img src="../../media/cat.png" alt="cat" width=50%>