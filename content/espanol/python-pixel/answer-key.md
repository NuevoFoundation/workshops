```markdown
---
title: "Clave de respuestas - Python-Pixel"
draft: false
hidden: true
---

## Actividad1
Esta es la respuesta ejemplo para crear un tablero de color azul con ancho 100 y alto 100.
```python
from PIL import Image
width=100
height=100
color='blue'
img = Image.new('RGB', (width, height), color)
img.save('pixel-activity1.png')
```

## Actividad2
Esta es la respuesta ejemplo para dibujar una línea desde el centro del tablero de color de la Actividad1 hasta su esquina inferior derecha.
```python
#Crea tu tablero de color
from PIL import Image

# Configura la imagen primero
img = Image.new('RGB', (60, 30), 'red')

initial_position_x = 50
initial_position_y = 50
width = 100
height = 100
color = (0,0,0) #hacer cambio aquí
while initial_position_x < width:
    while initial_position_y < height:
        img.putpixel( (x,y), color)
        initial_position_x += 1
        initial_position_y += 1
img.save('pixel-activity2.png')
```

## Actividad3
Esta es la respuesta ejemplo para crear una H que sea colorida.
Consulta la imagen:
<img src="../media/ac3sample.png">

```python
from PIL import Image
img = Image.new('RGB', (60, 30), 'pink')
#Esto usa un bucle while anidado para cambiar el tablero de colores.
for x in range(10, 15):
  for y in range(5, 25):
    img.putpixel( (x,y), (255, 255, 255))
for x in range(30, 35):
  for y in range(5, 25):
    img.putpixel( (x,y), (255, 255, 255))
for y in range(12,17 ):
  for x in range(15, 30):
    img.putpixel( (x,y), (255, 230, 20))
img.save('pixel-activity3.png')
```

## Actividad4
Esta es la respuesta ejemplo para crear un filtro verde.
```python
from PIL import Image
#Abrir la imagen del gato
img = Image.open("cat.png");
#Filtros azules
for i in range(img.size[0]):    # para cada columna:
    for j in range(img.size[1]):    # para cada fila
            color = img.getpixel( (i,j) )
            img.putpixel((i,j),(0, color[1], 0))# establece el color según sea necesario
#Guardar el gato después de filtrar
img.save("Mycat.png")
```

## Actividad5
Esta es la respuesta ejemplo para crear un filtro gris en la mitad izquierda del gato.
```python
from PIL import Image
#Abrir la imagen del gato
img = Image.open("cat.png")
#Filtros grises
for i in range((img.size[0] // 2)):    #para las columnas de la primera mitad:
    for j in range((img.size[1]):    
            color = img.getpixel( (i,j) )
            #Destacado: Obtener color: GRIS
            GREY = (color[0] + color[1] + color[2]) // 3
            img.putpixel((i,j),(GREY, GREY, GREY))# establece el color según sea necesario
#Guardar el gato después de filtrar
img.save("Mycat.png")
```

## Actividad6
Esta es la respuesta ejemplo para recortar la mitad derecha del gato.
```python
from PIL import Image
#Abrir la imagen del gato
img = Image.open("cat.png")
width=img.size[0]
height=img.size[1]
#Configurar una nueva imagen con la mitad del ancho y la altura
newimg=Image.new('RGB',(width//2, height) )
#Establecer el pixel de la nueva imagen
for i in range(width//2, width):    
    for j in range(height):    # para cada fila
            color = img.getpixel( (i,j) ) #obtener el color de la imagen original
            newimg.putpixel((i,j),color)# poner el color en la nueva imagen
newimg.save("Mycat.png")
```

## Actividad7
Esta es la respuesta ejemplo para cambiar el color de fondo de amarillo a negro.
```python
newcolor=(0,0,0)
coloryellow=img.getpixel( (0,0) )
for i in range(width):    
    for j in range(height):    
            color = img.getpixel( (i,j) ) #obtener el color de la imagen original
            if color == coloryellow: #si es amarillo
                newimg.putpixel((i,j),newcolor)# cambiar el color a negro
            else:
                newimg.putpixel((i,j),color)# si no, permanece igual
newimg.save("newnuevo.png")
```

## Actividad8
Esta es la respuesta ejemplo para voltear tu gato de izquierda a derecha.
```python
from PIL import Image
#Abrir la imagen del gato
img = Image.open("cat.png")
width=img.size[0]
height=img.size[1]
#Configurar una nueva imagen con el mismo ancho y altura
newimg=Image.new('RGB',(width,height) )
#Establecer el pixel de la nueva imagen
for i in range(width):    
    for j in range(height):    # para cada fila
            widthNew = width - 1 - i#¿Cuál debería ser tu widthNew si queremos voltear nuestra imagen de izquierda a derecha?
            color = img.getpixel( (widthNew, j) ) #obtener el color de la imagen original
            newimg.putpixel((i,j),color)# poner el color en la nueva imagen
newimg.save("Mycat.png")
```

## Actividad9
Esta es la respuesta ejemplo para rotar tu gato 90 grados en sentido antihorario.
```python
img = Image.open("cat.png")
width=img.size[0]
height=img.size[1]
#Configurar una nueva imagen con el ancho y alto intercambiados
newimg=Image.new('RGB',(height,width) )
#Establecer el pixel de la nueva imagen
for i in range(width):         # para cada columna
    for j in range(height):    # para cada fila
            color = img.getpixel( (i, j) ) #obtener el color de la imagen original
            newimg.putpixel((j, i),color) # poner el color en la nueva imagen
newimg.save("Mycat.png")
```
```