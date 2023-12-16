---
title: "Gabarito - Python-Pixel"
draft: false
hidden: true
---

## Atividade1
Este é o exemplo de resposta para criar um quadro azul com largura 100 e altura 100.
```python
from PIL import Image
width=100
height=100
color='blue'
img = Image.new('RGB', (width, height), color)
img.save('pixel-activity1.png')
```

## Atividade2
Este é o exemplo de resposta para desenhar uma linha do meio do quadro colorido da Atividade1 até o canto inferior direito.
```python
#Crie seu quadro de cores
from PIL import Image

# configure a imagem primeiro
img = Image.new('RGB', (60, 30), 'red')

initial_position_x = 50
initial_position_y = 50
width = 100
height = 100
color = (0,0,0) #faça a alteração aqui
while initial_position_x < width:
    while initial_position_y < height:
        img.putpixel( (x,y), color)
        initial_position_x += 1
        initial_position_y += 1
img.save('pixel-activity2.png')
```

## Atividade3
Este é o exemplo de resposta para criar um H colorido.
Consulte a imagem para isto:
<img src="media/ac3sample.png">

```python
from PIL import Image
img = Image.new('RGB', (60, 30), 'pink')
#Isso usa nested while loop para alterar o quadro de cores.
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

## Atividade4
Este é o exemplo de resposta para criar um filtro verde.
```python
from PIL import Image
#Abra a imagem do gato
img = Image.open("cat.png");
#Filtros azuis
for i in range(img.size[0]):    # para cada col:
    for j in range(img.size[1]):    # Para cada linha
            color = img.getpixel( (i,j) )
            img.putpixel((i,j),(0, color[1], 0))# defina a cor de acordo
#Salve o gato após filtrar
img.save("Mycat.png")
```

## Atividade5
Este é o exemplo de resposta para criar um filtro cinza para a metade esquerda do gato.
```python
from PIL import Image
#Abra a imagem do gato
img = Image.open("cat.png")
#Filtros cinza
for i in range((img.size[0] // 2)):    #para colunas do primeiro tempo:
    for j in range((img.size[1]):    
            color = img.getpixel( (i,j) )
            #Destaque: Obter cor: GREY (CINZA)
            GREY = (color[0] + color[1] + color[2]) // 3
            img.putpixel((i,j),(GREY, GREY, GREY))# defina a cor de acordo
#Salve o gato após filtrar
img.save("Mycat.png")
```

## Atividade6
Este é o exemplo de resposta para cortar a metade direita do gato.
```python
from PIL import Image
#Abra a imagem do gato
img = Image.open("cat.png")
width=img.size[0]
height=img.size[1]
#Configure uma nova imagem com meia largura e altura
newimg=Image.new('RGB',(width//2, height) )
#Defina o pixel para a nova imagem
for i in range(width//2, width):    
    for j in range(height):    # Para cada linha
            color = img.getpixel( (i,j) ) #obter a cor da imagem original
            newimg.putpixel((i,j),color)# coloque a cor na nova imagem
newimg.save("Mycat.png")
```

## Atividade7
Este é o exemplo de resposta para alterar a cor de fundo de amarelo para preto.
```python
newcolor=(0,0,0)
coloryellow=img.getpixel( (0,0) )
for i in range(width):    
    for j in range(height):    
            color = img.getpixel( (i,j) ) #obter a cor da imagem original
            if color == coloryellow: ##se for amarelo (yellow)
                newimg.putpixel((i,j),newcolor)# mude a cor para preto (black)
            else:
                newimg.putpixel((i,j),color)# else continua o mesmo
newimg.save("newnuevo.png")
```

## Atividade8
Este é o exemplo de resposta para virar seu gato da esquerda para a direita.
```python
from PIL import Image
#Abra a imagem do gato
img = Image.open("cat.png")
width=img.size[0]
height=img.size[1]
#Configure uma nova imagem com meia largura e altura
newimg=Image.new('RGB',(width,height) )
#Defina o pixel para a nova imagem
for i in range(width):    
    for j in range(height):    # Para cada linha
            widthNew = width - 1 - i#Qual deve ser o seu widthNew se quisermos virar nossa imagem da esquerda para a direita?
            color = img.getpixel( (widthNew, j) ) #obter a cor da imagem original
            newimg.putpixel((i,j),color)#coloca a cor na nova imagem
newimg.save("Mycat.png")
```

## Atividade9
Este é o exemplo de resposta para girar seu gato 90 graus no sentido anti-horário!
```python
img = Image.open("cat.png")
width=img.size[0]
height=img.size[1]
#Configure uma nova imagem com meia largura e altura
newimg=Image.new('RGB',(height,width) )
#Defina o pixel para a nova imagem
for i in range(width):         # Para cada col
    for j in range(height):    # Para cada linha
            color = img.getpixel( (i, j) ) #obter a cor da imagem original
            newimg.putpixel((j, i),color) #coloca a cor na nova imagem
newimg.save("Mycat.png")
```
