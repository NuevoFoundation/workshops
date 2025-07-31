---
title: "Atividade 2: Modifique seu quadro de cores"
date: 2020-07-11T00:00:00Z
prereq: "Fundamentos de Python, Pixels em Python: Cores e Pixels, Manipulação de Imagens em Python: Abrir uma imagem"
difficulty: "Intermediário"
weight: 2
draft: false
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/WkI5ij6pTWI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Exemplo um: Faça uma diagonal

```python
from PIL import Image
img = Image.new('RGB', (60, 30), 'red')
img.save('pil_red.png')
x = 0
y = 0
while x < 10:
 while y < 20:
   img.putpixel( (x,y), (0, 0, 0))
   x += 1
   y += 1
img.save('pil_red.png')
```

Esta é a imagem antes de adicionar a diagonal.  
`imagem mostrando o primeiro exemplo com while`  
![alt text](../../media/whileloopbefore.png "imagem mostrando o primeiro exemplo com while")

Esta é a imagem depois de adicionar a diagonal.  
`imagem mostrando o primeiro exemplo com while`  
![alt text](../../media/whileloopafter.png "imagem mostrando o primeiro exemplo com while")

## Exemplo dois: Faça um retângulo

```python
from PIL import Image
img = Image.new('RGB', (60, 30), 'red')
img.save('pil_red.png')
for x in range(10, 30):
  for y in range(5, 25):
    img.putpixel( (x,y), (0, 0, 0))
img.save('pil_redmodified.png')
```

Esta é a imagem antes de adicionar o retângulo.  
`imagem mostrando o primeiro exemplo com for`  
![alt text](../../media/whileloopbefore.png "imagem mostrando o primeiro exemplo com for")

Esta é a imagem depois de adicionar o retângulo.  
`imagem mostrando o primeiro exemplo com for`  
![alt text](../../media/forloopafter.png "imagem mostrando o primeiro exemplo com for")

## Modifique seu próprio quadro de cores!

Aqui estão dois modelos para ajudar você a brincar com seu quadro de cores.

#### Modelo Um: Adicionando uma linha

```python
# Template para adicionar uma linha
initial_position_x = 0 #alterar aqui
initial_position_y = 0 #alterar aqui
width = 0 #alterar aqui
height = 0 #alterar aqui
color = (0,0,0) #alterar aqui
while initial_position_x < width:
    while initial_position_y < height:
        img.putpixel( (x,y), color)
        initial_position_x += 1
        initial_position_y += 1
img.save('pixel-activity2.png')
```

#### Modelo Dois: Adicionando um retângulo

```python
# Template para adicionar um retângulo
initial_position_x = 0 #alterar aqui
initial_position_y = 0 #alterar aqui
width = 0 #alterar aqui
height = 0 #alterar aqui
color = (0,0,0) #alterar aqui
for x in range(initial_position_x, width+initial_position_x):
  for y in range(initial_position_y, height+initial_position_y):
    img.putpixel( (x,y), color)
img.save('pixel-activity2.png')
```

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Python-Pixel-Activity2" target="_blank">Abrir no Replit</a>
