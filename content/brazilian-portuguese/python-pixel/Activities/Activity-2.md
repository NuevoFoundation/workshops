---
title: "Activity 2: Modify your color board"
date: 2020-07-11T00:00:00Z
prereq: "Python: Fundamentos, manipulação de imagens em Python: abrir uma imagem, Python: cores e pixels"
difficulty: "Intermediário"
weight: 2
draft: false
---

## Exemplo um: Faça uma diagonal

```python
#Isso cria o quadro colorido original.
from PIL import Image
img = Image.new('RGB', (60, 30), 'red')
img.save('pil_red.png')
#Isso usa um nested while loop para alterar a imagem.
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
![alt text](../../media/whileloopbefore.png "imagem mostrando o primeiro exemplo do loop while")

Esta é a imagem depois de adicionar a diagonal.
![alt text](../../media/whileloopafter.png "imagem mostrando o primeiro exemplo do loop while")

## Exemplo dois: Faça um retângulo.

```python
#Isso cria o quadro colorido original.
from PIL import Image
img = Image.new('RGB', (60, 30), 'red')
img.save('pil_red.png')
#Isso usa nested for loop para alterar a imagem.
for x in range(10, 30):
  for y in range(5, 25):
    img.putpixel( (x,y), (0, 0, 0))
img.save('pil_redmodified.png')
```

Esta é a imagem antes de adicionar o retângulo.
![alt text](../../media/whileloopbefore.png "imagem mostrando o primeiro exemplo do loop for")

Esta é a imagem depois de adicionar o retângulo.
![alt text](../../media/forloopafter.png "imagem mostrando o primeiro exemplo do loop for")

## Modificando seu próprio quadro colorido!

Aqui estão dois modelos para auxiliar nas modificações do seu quadro colorido.

#### Modelo Um: Adicionando uma linha

```python
# Modelo para adicionar uma linha
initial_position_x = 0 #faça a alteração aqui
initial_position_y = 0 #faça a alteração aqui
width = 0 #faça a alteração aqui
height = 0 #faça a alteração aqui
color = (0,0,0) #faça a alteração aqui
while initial_position_x < width:
    while initial_position_y < height:
        img.putpixel( (x,y), color)
        initial_position_x += 1
        initial_position_y += 1
img.save('pixel-activity2.png')
```

#### Modelo dois: adicionando um retângulo

```python
# Modelo para adicionar um retângulo
initial_position_x = 0 #faça a alteração aqui
initial_position_y = 0 #faça a alteração aqui
width = 0 #faça a alteração aqui
height = 0 #faça a alteração aqui
color = (0,0,0) #faça a alteração aqui
for x in range(initial_position_x, width+initial_position_x):
  for y in range(initial_position_y, height+initial_position_y):
    img.putpixel( (x,y), color)
img.save('pixel-activity2.png')
```

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Python-Pixel-Activity2" target="_blank">Iniciar Replit</a>
